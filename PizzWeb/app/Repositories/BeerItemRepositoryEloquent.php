<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\BeerItemRepository;
use App\Entities\BeerItem;
use App\Validators\BeerItemValidator;

/**
 * Class BeerItemRepositoryEloquent.
 *
 * @package namespace App\Repositories;
 */
class BeerItemRepositoryEloquent extends BaseRepository implements BeerItemRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return BeerItem::class;
    }

    /**
    * Specify Validator class name
    *
    * @return mixed
    */
    public function validator()
    {

        return BeerItemValidator::class;
    }


    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
    
}
