<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

/**
 * Class CreateCheckPhoneNumbersTable.
 */
class CreateCheckPhoneNumbersTable extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{

		Schema::create('check_phone_numbers', function(Blueprint $table) {
          $table->increments('id');
			 	  $table->integer('number');
					$table->integer('phone_number_id')->unsigned();
					$table->foreign('phone_number_id')->references('id')->on('phone_numbers');
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
		Schema::dropIfExists('check_phone_numbers');
	}
}
