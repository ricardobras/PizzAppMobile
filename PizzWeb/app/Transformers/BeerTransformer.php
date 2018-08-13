<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Entities\Beer;

/**
 * Class BeerTransformer.
 *
 * @package namespace App\Transformers;
 */
class BeerTransformer extends TransformerAbstract
{
    /**
     * Transform the Beer entity.
     *
     * @param \App\Entities\Beer $model
     *
     * @return array
     */
    public function transform(Beer $model)
    {
        return [
            'id'         => (int) $model->id,

            /* place your other model properties here */

            'created_at' => $model->created_at,
            'updated_at' => $model->updated_at
        ];
    }
}
