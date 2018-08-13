<?php

namespace App\Presenters;

use App\Transformers\PhoneNumberTransformer;
use Prettus\Repository\Presenter\FractalPresenter;

/**
 * Class PhoneNumberPresenter.
 *
 * @package namespace App\Presenters;
 */
class PhoneNumberPresenter extends FractalPresenter
{
    /**
     * Transformer
     *
     * @return \League\Fractal\TransformerAbstract
     */
    public function getTransformer()
    {
        return new PhoneNumberTransformer();
    }
}
