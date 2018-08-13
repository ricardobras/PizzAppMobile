<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

/**
 * Class CreateBeerItemsTable.
 */
class CreateBeerItemsTable extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('beer_items', function(Blueprint $table) {
				$table->increments('id');
				$table->integer('beer_id')->unsigned();
				$table->foreign('beer_id')->references('id')->on('beers');
				$table->integer('name');
				$table->decimal('price');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::dropIfExists('beer_items');
	}
}
