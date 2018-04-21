<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Action;

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
		$this->validate($request, [
        'actividad' => 'boolean',
        'dolor' => 'boolean',
    ]);
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

}