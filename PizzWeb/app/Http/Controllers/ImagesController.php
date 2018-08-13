<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;
use App\Http\Requests\ImageCreateRequest;
use App\Http\Requests\ImageUpdateRequest;
use App\Repositories\ImageRepository;
use App\Validators\ImageValidator;
use Illuminate\Support\Facades\Storage;

/**
 * Class ImagesController.
 *
 * @package namespace App\Http\Controllers;
 */
class ImagesController extends Controller
{
    /**
     * @var ImageRepository
     */
    protected $repository;

    /**
     * @var ImageValidator
     */
    protected $validator;

    /**
     * ImagesController constructor.
     *
     * @param ImageRepository $repository
     * @param ImageValidator $validator
     */
    public function __construct(ImageRepository $repository, ImageValidator $validator)
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
        $images = $this->repository->all();

            return response()->json([
                'data' => $images,
            ]);


    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  ImageCreateRequest $request
     *
     * @return \Illuminate\Http\Response
     *_
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function store(ImageCreateRequest $request) {
        
    
       try {


    if ($request->hasFile('image')) {

        //obter os dados do arquivo de imagem
              $extension=$request->image->extension();
              $path = $request->image->store('images');
              $name = $request->image->getFileName();
              $nomeOriginal=$request->image->getClientOriginalName();
              $mimeType = $request->image->getMimeType();
             

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_CREATE);

             $imagem = $request->all();
             $imagem['name']=$name;
             $imagem['mimeType']=$mimeType;
             $imagem['extension']=$extension;
             $imagem['path']=$path;
            //salvar no banco de dados
             $image = $this->repository->create($imagem);
           

            $response = [
                'message' => 'Image created.',
              'data'    => $image->toArray(),
            ];

            //$path=$request->image->path();




            return response()->json($response);

          }

        } catch (ValidatorException $e) {
                return response()->json([
                    'error'   => true,
                    'message' => $e->getMessageBag()]);
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
        $image = $this->repository->find($id);
            return response()->json([
                'data' => $image,
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
        $image = $this->repository->find($id);

        return view('images.edit', compact('image'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  ImageUpdateRequest $request
     * @param  string            $id
     *
     * @return Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function update(ImageUpdateRequest $request, $id)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_UPDATE);

            $image = $this->repository->update($request->all(), $id);

            $response = [
                'message' => 'Image updated.',
                'data'    => $image->toArray(),
            ];

            if ($request->wantsJson()) {

                return response()->json($response);
            }

            return redirect()->back()->with('message', $response['message']);
        } catch (ValidatorException $e) {

            if ($request->wantsJson()) {

                return response()->json([
                    'error'   => true,
                    'message' => $e->getMessageBag()
                ]);
            }

            return redirect()->back()->withErrors($e->getMessageBag())->withInput();
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

        if (request()->wantsJson()) {

            return response()->json([
                'message' => 'Image deleted.',
                'deleted' => $deleted,
            ]);
        }

        return redirect()->back()->with('message', 'Image deleted.');
    }
}
