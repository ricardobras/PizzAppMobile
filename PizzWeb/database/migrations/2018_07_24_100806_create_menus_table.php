<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

/**
 * Class CreateMenusTable.
 */
class CreateMenusTable extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{

		Schema::create('menus', function(Blueprint $table) {
            $table->increments('id');
						$table->String('name');
						$table->integer('image_id')->unsigned();
						$table->foreign('image_id')
      						->references('id')->on('images')
      						->onDelete('cascade');
						$table->integer('rate');
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
		Schema::dropIfExists('menus');
	}
}
