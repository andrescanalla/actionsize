<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Action;
use DB;
use Carbon\Carbon;

class ActionsController extends Controller
{

    public function index()
	{
	    return Action::all();
	}

	public function show(Action $action)
	{
	    return $action;
	}

	public function store(Request $request)
    {
		
	    $action = Action::create($request->all());

	    return response()->json($action, 201);
	}

	public function update(Request $request, Action $action)
	{
	    $action->update($request->all());

	    return response()->json($action, 200);
	}

	public function delete(Action $action)
	{
	    $action->delete();

	    return response()->json(null, 204);
	}

	 public function lista()
	{
	    $lista=DB::table('actions')
	    ->whereDay('created_at', '=', date('d'))
	    ->orderBy('created_at', 'desc')
	    ->get();

	   

	    return view('lista',["lista"=>$lista]);
	    #return Action::all();
	}

	public function dia()
	{
	    $lista=DB::table('actions')
	    ->whereDay('created_at', '=', date('d'))
	    ->orderBy('created_at', 'asc')
	    ->get();

	    $nn = 0;
	    $a=$lista->count()-1;
	    $lista2=[];
	    foreach ($lista as $key) {
	    	if ($nn==0){
             $n=$lista[0]->created_at; 
	    	}
	        else{
	         $n=$lista[$nn-1]->created_at; 
       		}
	    	$lista2[] = ['hora' =>Carbon::createFromFormat('Y-m-d H:i:s', $key->created_at)->format('H:i'), 'dolor' => $key->dolor, 'idaction' =>$key->idaction, 'actividad'=>$key->actividad, 'intervalo'=> Action::difFecha($n, $key->created_at)];
	    	$nn = $nn+1;
	    }
	    #dd($lista2);

	   #$lista = ['lista'=>$lista, 'grafico'=>$lista2];

	    return response()->json($lista2, 200);
	    #return Action::all();
	}

	public function graficodia()
	{
	    $lista=DB::table('actions')
	    ->whereDay('created_at', '=', date('d'))
	    ->orderBy('created_at', 'asc')
	    ->get();

	    $dolor=DB::table('actions')
	    ->whereDay('created_at', '=', date('d'))
	    ->where('dolor',1)
	    ->orderBy('created_at', 'asc')
	    ->get();

	    $sinDolor=DB::table('actions')
	    ->whereDay('created_at', '=', date('d'))
	    ->where('dolor',0)
	    ->orderBy('created_at', 'asc')
	    ->get();

	    

	    $nn = 0;
	    $a=$lista->count()-1;
	    $intervalo=[];
	    foreach ($lista as $key) {
	    	if ($nn==0){
             $n=$lista[0]->created_at; 
	    	}
	        else{
	         $n=$lista[$nn-1]->created_at; 
       		}
	    	$intervalo[] = ['t' =>$key->created_at, 'y'=> Action::difFecha($n, $key->created_at)];
	    	$nn = $nn+1;
	    }

	    $lista2=[];
	    foreach ($dolor as $key) {
	    	#$label[]=Carbon::createFromFormat('Y-m-d H:i:s', $key->created_at)->toTimeString();
	    	$lista2[] = ['t' =>$key->created_at, 'y' => -25];
	    	
	    }

	    $lista3=[];
	    foreach ($sinDolor as $key) {
	    	#$label[]=Carbon::createFromFormat('Y-m-d H:i:s', $key->created_at)->toTimeString();
	    	$lista3[] = ['t' =>$key->created_at, 'y' => -25];
	    	
	    }


	    ///////////
	    $h=3;
	    $listaU=DB::table('actions')
	    ->whereBetween('created_at', [Carbon::now()->subHour($h), Carbon::now()])	   
	    ->orderBy('created_at', 'asc')
	    ->get();

	   
	    $dolorU=DB::table('actions')
	    ->whereBetween('created_at', [Carbon::now()->subHour($h), Carbon::now()])	
	    ->where('dolor',1)
	    ->orderBy('created_at', 'asc')
	    ->get();

	    $sinDolorU=DB::table('actions')
	    ->whereBetween('created_at', [Carbon::now()->subHour($h), Carbon::now()])	
	    ->where('dolor',0)
	    ->orderBy('created_at', 'asc')
	    ->get();

	    

	    $nn = 0;
	    $a=$listaU->count()-1;
	    $intervaloU=[];
	    foreach ($listaU as $key) {
	    	if ($nn==0){
             $n=$listaU[0]->created_at; 
	    	}
	        else{
	         $n=$listaU[$nn-1]->created_at; 
       		}
	    	$intervaloU[] = ['t' =>$key->created_at, 'y'=> Action::difFecha($n, $key->created_at)];
	    	$nn = $nn+1;
	    }

	    $lista2U=[];
	    foreach ($dolorU as $key) {
	    	#$label[]=Carbon::createFromFormat('Y-m-d H:i:s', $key->created_at)->toTimeString();
	    	$lista2U[] = ['t' =>$key->created_at, 'y' => 0];
	    	
	    }

	    $lista3U=[];
	    foreach ($sinDolorU as $key) {
	    	#$label[]=Carbon::createFromFormat('Y-m-d H:i:s', $key->created_at)->toTimeString();
	    	$lista3U[] = ['t' =>$key->created_at, 'y' => 0];
	    	
	    }

	    $total=['grafico'=>$lista2, 'intervalo'=>$intervalo, 'sin'=>$lista3 ,'graficoU'=>$lista2U, 'intervaloU'=>$intervaloU, 'sinU'=>$lista3U];




	   

	    return response()->json($total, 200);
	    #return Action::all();
	}

	public function graficosemana()
	{
	    
	    Carbon::setLocale('Spanish');
	    $n=6;
	    $dolor="";
	    while ($n >= 0) {
	    		$dolor[]=DB::table('actions')
	    ->where('dolor', '=',"1")
	    ->whereBetween('created_at', [Carbon::now()->startOfDay()->subDay($n), Carbon::now()->endOfDay()->subDay($n) ]) 
	    ->count();
	    $n=$n-1;
	    	}	

	    $n=6;
	    $sinDolor="";
	    while ($n >= 0) {
	    		$sinDolor[]=DB::table('actions')
	    ->where('dolor', '=',"0")
	    ->whereBetween('created_at', [Carbon::now()->startOfDay()->subDay($n), Carbon::now()->endOfDay()->subDay($n) ])	    
	    ->count();
	    $n=$n-1;
	    	}	
	    $n=6;
	    $label="";
	    while ($n >= 0) {
	    		$label[]=Carbon::now()->subDay($n)->format('l');
	    $n=$n-1;
	    	}		

	    $semana=['dolor'=>$dolor,'sinDolor'=>$sinDolor, 'label'=>$label];
	    	    

	    return response()->json($semana, 200);
	    #return Action::all();
	}
}