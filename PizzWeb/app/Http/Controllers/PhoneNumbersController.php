<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;
use App\Http\Requests\PhoneNumberCreateRequest;
use App\Http\Requests\PhoneNumberUpdateRequest;
use App\Repositories\PhoneNumberRepository;
use App\Validators\PhoneNumberValidator;

/**
 * Class PhoneNumbersController.
 *
 * @package namespace App\Http\Controllers;
 */
class PhoneNumbersController extends Controller
{
    /**
     * @var PhoneNumberRepository
     */
    protected $repository;

    /**
     * @var PhoneNumberValidator
     */
    protected $validator;

    /**
     * PhoneNumbersController constructor.
     *
     * @param PhoneNumberRepository $repository
     * @param PhoneNumberValidator $validator
     */
    public function __construct(PhoneNumberRepository $repository, PhoneNumberValidator $validator)
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
        $phoneNumbers = $this->repository->all();

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $phoneNumbers,
            ]);
        }

        return view('phoneNumbers.index', compact('phoneNumbers'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  PhoneNumberCreateRequest $request
     *
     * @return \Illuminate\Http\Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function store(PhoneNumberCreateRequest $request)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_CREATE);

            $phoneNumber = $this->repository->create($request->all());

            $response = [
                'message' => 'PhoneNumber created.',
                'data'    => $phoneNumber->toArray(),
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
        $phoneNumber = $this->repository->find($id);

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $phoneNumber,
            ]);
        }

        return view('phoneNumbers.show', compact('phoneNumber'));
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
        $phoneNumber = $this->repository->find($id);

        return view('phoneNumbers.edit', compact('phoneNumber'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  PhoneNumberUpdateRequest $request
     * @param  string            $id
     *
     * @return Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function update(PhoneNumberUpdateRequest $request, $id)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_UPDATE);

            $phoneNumber = $this->repository->update($request->all(), $id);

            $response = [
                'message' => 'PhoneNumber updated.',
                'data'    => $phoneNumber->toArray(),
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
                'message' => 'PhoneNumber deleted.',
                'deleted' => $deleted,
            ]);
        }

        return redirect()->back()->with('message', 'PhoneNumber deleted.');
    }
}
