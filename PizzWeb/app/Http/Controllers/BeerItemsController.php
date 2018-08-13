<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;
use App\Http\Requests\BeerItemCreateRequest;
use App\Http\Requests\BeerItemUpdateRequest;
use App\Repositories\BeerItemRepository;
use App\Validators\BeerItemValidator;

/**
 * Class BeerItemsController.
 *
 * @package namespace App\Http\Controllers;
 */
class BeerItemsController extends Controller
{
    /**
     * @var BeerItemRepository
     */
    protected $repository;

    /**
     * @var BeerItemValidator
     */
    protected $validator;

    /**
     * BeerItemsController constructor.
     *
     * @param BeerItemRepository $repository
     * @param BeerItemValidator $validator
     */
    public function __construct(BeerItemRepository $repository, BeerItemValidator $validator)
    {
        $this->repository = $repository;
        $this->validator  = $validator;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->repository->pushCriteria(app('Prettus\Repository\Criteria\RequestCriteria'));
        $beerItems = $this->repository->all();

            return response()->json([
                'data' => $beerItems,
            ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  BeerItemCreateRequest $request
     *
     * @return \Illuminate\Http\Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function store(BeerItemCreateRequest $request)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_CREATE);
            $beerItem = $this->repository->create($request->all());

            $response = [
                'message' => 'BeerItem created.',
                'data'    => $beerItem->toArray(),
            ];

            return response()->json($response);

        } catch (ValidatorException $e) {

                return response()->json([
                    'error'   => true,
                    'message' => $e->getMessageBag()
                ]);



        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $beerItem = $this->repository->find($id);

            return response()->json([
                'data' => $beerItem,
            ]);


    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $beerItem = $this->repository->find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  BeerItemUpdateRequest $request
     * @param  string            $id
     *
     * @return Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function update(BeerItemUpdateRequest $request, $id)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_UPDATE);
            $beerItem = $this->repository->update($request->all(), $id);

            $response = [
                'message' => 'BeerItem updated.',
                'data'    => $beerItem->toArray(),
            ];

            return response()->json($response);

        } catch (ValidatorException $e) {
                return response()->json([
                    'error'   => true,
                    'message' => $e->getMessageBag()
                ]);
        }
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $deleted = $this->repository->delete($id);

        return response()->json([
                'message' => 'BeerItem deleted.',
                'deleted' => $deleted,
            ]);

    }
}
