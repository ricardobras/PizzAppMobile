<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

/**
 * Class CreateBeersTable.
 */
class CreateBeersTable extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('beers', function(Blueprint $table) {
				$table->increments('id');
				$table->String('name');
				$table->integer('image_id')->unsigned();
				$table->foreign('image_id')->references('id')->on('images');
				$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::dropIfExists('beers');
	}
}
