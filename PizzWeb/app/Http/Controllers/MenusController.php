<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;
use App\Http\Requests\MenuCreateRequest;
use App\Http\Requests\MenuUpdateRequest;
use App\Repositories\MenuRepository;
use App\Repositories\ImageRepository;
use App\Validators\MenuValidator;

/**
 * Class MenusController.
 *
 * @package namespace App\Http\Controllers;
 */
class MenusController extends Controller
{
    /**
     * @var MenuRepository
     */
    protected $repository;
    protected $imageRepository;

    /**
     * @var MenuValidator
     */
    protected $validator;

    /**
     * MenusController constructor.
     *
     * @param MenuRepository $repository
     * @param MenuValidator $validator
     */
    public function __construct(MenuRepository $repository, MenuValidator $validator, ImageRepository $imageRepository)
    {
        $this->repository = $repository;
        $this->validator  = $validator;
        $this->imageRepository = $imageRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->repository->pushCriteria(app('Prettus\Repository\Criteria\RequestCriteria'));
        $menus = $this->repository->all();

        foreach ($menus as $key => $menu) {
        //  return  $menu['id'];
          $image = $this->imageRepository->find($menu['image_id']);

          $menu['image']=($image);

        }



 return response()->json($menus);

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  MenuCreateRequest $request
     *
     * @return \Illuminate\Http\Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function store(MenuCreateRequest $request)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_CREATE);

            $menu = $this->repository->create($request->all());

            $response = [
                'message' => 'Menu created.',
                'data'    => $menu->toArray(),
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
        $menu = $this->repository->find($id);
        return response()->json($menu);
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
        $menu = $this->repository->find($id);

        return response()->json($menu);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  MenuUpdateRequest $request
     * @param  string            $id
     *
     * @return Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function update(MenuUpdateRequest $request, $id)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_UPDATE);

            $menu = $this->repository->update($request->all(), $id);

            $response = [
                'message' => 'Menu updated.',
                'data'    => $menu->toArray(),
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
                'message' => 'Menu deleted.',
                'deleted' => $deleted,
            ]);


    }
}
