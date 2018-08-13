<?php

namespace App\Presenters;

use App\Transformers\BeerItemTransformer;
use Prettus\Repository\Presenter\FractalPresenter;

/**
 * Class BeerItemPresenter.
 *
 * @package namespace App\Presenters;
 */
class BeerItemPresenter extends FractalPresenter
{
    /**
     * Transformer
     *
     * @return \League\Fractal\TransformerAbstract
     */
    public function getTransformer()
    {
        return new BeerItemTransformer();
    }
}
