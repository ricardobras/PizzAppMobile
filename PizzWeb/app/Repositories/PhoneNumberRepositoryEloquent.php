<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\PhoneNumberRepository;
use App\Entities\PhoneNumber;
use App\Validators\PhoneNumberValidator;

/**
 * Class PhoneNumberRepositoryEloquent.
 *
 * @package namespace App\Repositories;
 */
class PhoneNumberRepositoryEloquent extends BaseRepository implements PhoneNumberRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return PhoneNumber::class;
    }

    /**
    * Specify Validator class name
    *
    * @return mixed
    */
    public function validator()
    {

        return PhoneNumberValidator::class;
    }


    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
    
}
