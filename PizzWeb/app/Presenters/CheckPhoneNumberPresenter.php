<?php

namespace App\Presenters;

use App\Transformers\CheckPhoneNumberTransformer;
use Prettus\Repository\Presenter\FractalPresenter;

/**
 * Class CheckPhoneNumberPresenter.
 *
 * @package namespace App\Presenters;
 */
class CheckPhoneNumberPresenter extends FractalPresenter
{
    /**
     * Transformer
     *
     * @return \League\Fractal\TransformerAbstract
     */
    public function getTransformer()
    {
        return new CheckPhoneNumberTransformer();
    }
}
