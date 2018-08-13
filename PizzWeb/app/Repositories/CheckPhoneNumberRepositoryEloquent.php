<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\CheckPhoneNumberRepository;
use App\Entities\CheckPhoneNumber;
use App\Validators\CheckPhoneNumberValidator;

/**
 * Class CheckPhoneNumberRepositoryEloquent.
 *
 * @package namespace App\Repositories;
 */
class CheckPhoneNumberRepositoryEloquent extends BaseRepository implements CheckPhoneNumberRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return CheckPhoneNumber::class;
    }

    /**
    * Specify Validator class name
    *
    * @return mixed
    */
    public function validator()
    {

        return CheckPhoneNumberValidator::class;
    }


    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
    
}
