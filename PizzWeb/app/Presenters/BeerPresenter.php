<?php

namespace App\Presenters;

use App\Transformers\BeerTransformer;
use Prettus\Repository\Presenter\FractalPresenter;

/**
 * Class BeerPresenter.
 *
 * @package namespace App\Presenters;
 */
class BeerPresenter extends FractalPresenter
{
    /**
     * Transformer
     *
     * @return \League\Fractal\TransformerAbstract
     */
    public function getTransformer()
    {
        return new BeerTransformer();
    }
}
