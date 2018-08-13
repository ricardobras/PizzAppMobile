<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Entities\BeerItem;

/**
 * Class BeerItemTransformer.
 *
 * @package namespace App\Transformers;
 */
class BeerItemTransformer extends TransformerAbstract
{
    /**
     * Transform the BeerItem entity.
     *
     * @param \App\Entities\BeerItem $model
     *
     * @return array
     */
    public function transform(BeerItem $model)
    {
        return [
            'id'         => (int) $model->id,

            /* place your other model properties here */

            'created_at' => $model->created_at,
            'updated_at' => $model->updated_at
        ];
    }
}
