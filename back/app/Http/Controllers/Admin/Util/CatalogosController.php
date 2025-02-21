<?php

namespace App\Http\Controllers\Admin\Util;

use App\Http\Controllers\Controller;
use App\Services\Admin\Util\CatalogosService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class CatalogosController extends Controller
{
    protected $catalogosService;

    public function __construct(
        CatalogosService $CatalogosService
    )
    {
        $this->catalogosService = $CatalogosService;
    }

    public function obtenerTiposCodigoDropdown () {
        try{
            return $this->catalogosService->obtenerTiposCodigoDropdown();
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
    
    public function obtenerAreasDropdown () {
        try{
            return $this->catalogosService->obtenerAreasDropdown();
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

    public function obtenerClientesDropdown () {
        try{
            return $this->catalogosService->obtenerClientesDropdown();
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