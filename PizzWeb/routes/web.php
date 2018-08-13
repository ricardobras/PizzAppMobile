<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::group(array('prefix'=>'api'), function(){



 Route::middleware(['cors'])->group(function () {
   Route::get('/',function () {
      return response()->json(['message' => 'PizzApp API', 'status' => 'Connected']);;
  });

 Route::resource('menus', 'MenusController');
 Route::resource('menuItems', 'MenuItemsController');
 Route::resource('beers', 'BeersController');
 Route::resource('beerItems', 'BeerItemsController');
 Route::resource('phoneNumbers', 'PhoneNumbersController@controller');
 Route::resource('checkPhoneNumbers', 'CheckPhoneNumbersController');
 Route::resource('orders', 'OrdersController');
 Route::resource('images', 'ImagesController');



});
});



Route::get('/', function () {
    return redirect('api');
});
