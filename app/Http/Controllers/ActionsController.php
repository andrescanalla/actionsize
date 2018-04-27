<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Action;
use DB;

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

	   

	    return $lista;
	    #return Action::all();
	}

	

}