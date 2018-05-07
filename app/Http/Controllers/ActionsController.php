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

	    

	    $lista2=[];
	    foreach ($lista as $key) {
	    	
	    	$lista2[] = ['x' =>$key->created_at, 'y' => $key->dolor];

	    }

	   #$lista = ['lista'=>$lista, 'grafico'=>$lista2];

	    return response()->json($lista, 200);
	    #return Action::all();
	}

	public function graficodia()
	{
	    $lista=DB::table('actions')
	    ->whereDay('created_at', '=', date('d'))
	    ->orderBy('created_at', 'asc')
	    ->get();

	    

	    $lista2=[];
	    foreach ($lista as $key) {
	    	
	    	$lista2[] = ['x' =>$key->created_at, 'y' => $key->dolor];
	    	
	    }

	   

	    return response()->json($lista2, 200);
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