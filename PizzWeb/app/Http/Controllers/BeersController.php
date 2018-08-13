<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;
use App\Http\Requests\BeerCreateRequest;
use App\Http\Requests\BeerUpdateRequest;
use App\Repositories\BeerRepository;
use App\Validators\BeerValidator;
use App\Repositories\ImageRepository;
/**
 * Class BeersController.
 *
 * @package namespace App\Http\Controllers;
 */
class BeersController extends Controller
{
    /**
     * @var BeerRepository
     */
    protected $repository;
    protected $imageRepository;
    /**
     * @var BeerValidator
     */
    protected $validator;

    /**
     * BeersController constructor.
     *
     * @param BeerRepository $repository
     * @param BeerValidator $validator
     */
    public function __construct(BeerRepository $repository, BeerValidator $validator, ImageRepository $imageRepository)
    {
          $this->repository = $repository;
          $this->validator  = $validator;
          $this->imageRepository  = $imageRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
          $this->repository->pushCriteria(app('Prettus\Repository\Criteria\RequestCriteria'));
          $beers = $this->repository->all();




                  foreach ($beers as $key => $beer) {
                  //  return  $menu['id'];
                    $image = $this->imageRepository->find($beer['image_id']);

                    $beer['image']=($image);

                  }


          return response()->json(
               $beers
          );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  BeerCreateRequest $request
     *
     * @return \Illuminate\Http\Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function store(BeerCreateRequest $request)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_CREATE);

            $beer = $this->repository->create($request->all());

            $response = [
                'message' => 'Beer created.',
                'data'    => $beer->toArray(),
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
          $beer = $this->repository->find($id);

          return response()->json([
              'data' => $beer,
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
        $beer = $this->repository->find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  BeerUpdateRequest $request
     * @param  string            $id
     *
     * @return Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function update(BeerUpdateRequest $request, $id)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_UPDATE);

            $beer = $this->repository->update($request->all(), $id);

            $response = [
                'message' => 'Beer updated.',
                'data'    => $beer->toArray(),
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
                'message' => 'Beer deleted.',
                'deleted' => $deleted,
          ]);

    }
}
