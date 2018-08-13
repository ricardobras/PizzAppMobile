<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

/**
 * Class CreateMenuItemsTable.
 */
class CreateMenuItemsTable extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('menu_items', function(Blueprint $table) {
            $table->increments('id');
						$table->integer('menu_id')->unsigned();
						$table->foreign('menu_id')
									->references('id')
									->on('menus')
									->onDelete('cascade');
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
		Schema::dropIfExists('menu_items');
	}
}
