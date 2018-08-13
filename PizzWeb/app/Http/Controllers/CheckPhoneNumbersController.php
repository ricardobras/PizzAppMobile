<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;
use App\Http\Requests\CheckPhoneNumberCreateRequest;
use App\Http\Requests\CheckPhoneNumberUpdateRequest;
use App\Repositories\CheckPhoneNumberRepository;
use App\Validators\CheckPhoneNumberValidator;

/**
 * Class CheckPhoneNumbersController.
 *
 * @package namespace App\Http\Controllers;
 */
class CheckPhoneNumbersController extends Controller
{
    /**
     * @var CheckPhoneNumberRepository
     */
    protected $repository;

    /**
     * @var CheckPhoneNumberValidator
     */
    protected $validator;

    /**
     * CheckPhoneNumbersController constructor.
     *
     * @param CheckPhoneNumberRepository $repository
     * @param CheckPhoneNumberValidator $validator
     */
    public function __construct(CheckPhoneNumberRepository $repository, CheckPhoneNumberValidator $validator)
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
        $checkPhoneNumbers = $this->repository->all();

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $checkPhoneNumbers,
            ]);
        }

        return view('checkPhoneNumbers.index', compact('checkPhoneNumbers'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  CheckPhoneNumberCreateRequest $request
     *
     * @return \Illuminate\Http\Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function store(CheckPhoneNumberCreateRequest $request)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_CREATE);

            $checkPhoneNumber = $this->repository->create($request->all());

            $response = [
                'message' => 'CheckPhoneNumber created.',
                'data'    => $checkPhoneNumber->toArray(),
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
     * Display the specified resource.
     *
     * @param  int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $checkPhoneNumber = $this->repository->find($id);

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $checkPhoneNumber,
            ]);
        }

        return view('checkPhoneNumbers.show', compact('checkPhoneNumber'));
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
        $checkPhoneNumber = $this->repository->find($id);

        return view('checkPhoneNumbers.edit', compact('checkPhoneNumber'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  CheckPhoneNumberUpdateRequest $request
     * @param  string            $id
     *
     * @return Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function update(CheckPhoneNumberUpdateRequest $request, $id)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_UPDATE);

            $checkPhoneNumber = $this->repository->update($request->all(), $id);

            $response = [
                'message' => 'CheckPhoneNumber updated.',
                'data'    => $checkPhoneNumber->toArray(),
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
                'message' => 'CheckPhoneNumber deleted.',
                'deleted' => $deleted,
            ]);
        }

        return redirect()->back()->with('message', 'CheckPhoneNumber deleted.');
    }
}
