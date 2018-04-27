<?php

use Illuminate\Http\Request;
use App\Product;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

/**
**Basic Routes for a RESTful service:
**Route::get($uri, $callback);
**Route::post($uri, $callback);
**Route::put($uri, $callback);
**Route::delete($uri, $callback);
**
*/


Route::get('actions', 'ActionsController@index');

Route::get('actions/{action}', 'ActionsController@show');

Route::post('actions','ActionsController@store');

Route::put('actions/{action}','ActionsController@update');

Route::delete('actions/{action}', 'ActionsController@delete');



