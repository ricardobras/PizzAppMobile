<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Entities\PhoneNumber;

/**
 * Class PhoneNumberTransformer.
 *
 * @package namespace App\Transformers;
 */
class PhoneNumberTransformer extends TransformerAbstract
{
    /**
     * Transform the PhoneNumber entity.
     *
     * @param \App\Entities\PhoneNumber $model
     *
     * @return array
     */
    public function transform(PhoneNumber $model)
    {
        return [
            'id'         => (int) $model->id,

            /* place your other model properties here */

            'created_at' => $model->created_at,
            'updated_at' => $model->updated_at
        ];
    }
}
