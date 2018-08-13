<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTrigger extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

      DB::unprepared('
       CREATE TRIGGER tb_create_random_number AFTER INSERT ON phone_numbers FOR EACH ROW
           BEGIN
              insert into check_phone_numbers (number, phone_number_id) values (FLOOR(10000 + (RAND() * 89999)),new.id);
           END;

       CREATE TRIGGER tb_update_random_number AFTER UPDATE ON phone_numbers FOR EACH ROW
           BEGIN
               update check_phone_numbers set number=FLOOR(10000 + (RAND() * 89999)) where phone_number_id=new.id;
           END');


    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
      DB::unprepared('DROP TRIGGER tb_create_random_number');
      DB::unprepared('DROP TRIGGER tb_update_random_number');
    }
}
