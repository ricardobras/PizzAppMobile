<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Entities\CheckPhoneNumber;

/**
 * Class CheckPhoneNumberTransformer.
 *
 * @package namespace App\Transformers;
 */
class CheckPhoneNumberTransformer extends TransformerAbstract
{
    /**
     * Transform the CheckPhoneNumber entity.
     *
     * @param \App\Entities\CheckPhoneNumber $model
     *
     * @return array
     */
    public function transform(CheckPhoneNumber $model)
    {
        return [
            'id'         => (int) $model->id,

            /* place your other model properties here */

            'created_at' => $model->created_at,
            'updated_at' => $model->updated_at
        ];
    }
}
