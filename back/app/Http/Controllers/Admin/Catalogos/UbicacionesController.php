<?php

namespace App\Http\Controllers\Admin\Catalogos;

use App\Http\Controllers\Controller;
use App\Services\Admin\Catalogos\UbicacionesService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class UbicacionesController extends Controller
{
    protected $ubicacionesService;

    public function __construct(
        UbicacionesService $UbicacionesService
    )
    {
        $this->ubicacionesService = $UbicacionesService;
    }

    public function obtenerUbicacionesPorPlanta (Request $request) {
        try{
            return $this->ubicacionesService->obtenerUbicacionesPorPlanta($request->all());
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

    public function obtenerDatosGraficaUbicaciones (Request $request) {
        try{
            return $this->ubicacionesService->obtenerDatosGraficaUbicaciones($request->all());
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

    public function obtenerDetalleUbicacion ($pkUbicacion) {
        try{
            return $this->ubicacionesService->obtenerDetalleUbicacion($pkUbicacion);
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