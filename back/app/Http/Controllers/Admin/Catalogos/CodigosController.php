<?php

namespace App\Http\Controllers\Admin\Catalogos;

use App\Http\Controllers\Controller;
use App\Services\Admin\Catalogos\CodigosService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class CodigosController extends Controller
{
    protected $codigosService;

    public function __construct(
        CodigosService $CodigosService
    )
    {
        $this->codigosService = $CodigosService;
    }

    public function obtenerCodigosPorFiltros (Request $request) {
        try{
            return $this->codigosService->obtenerCodigosPorFiltros($request->all());
        } catch( \Throwable $error ) {
            Log::alert($error);
            return response()->json(
                [
                    'error' => $error,
                    'mensaje' => 'Upss! Ocurrió un error interno'
                ], 
                500
            );
        }
    }
}