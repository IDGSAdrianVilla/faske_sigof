<?php

namespace App\Http\Controllers\Admin\Util;

use App\Http\Controllers\Controller;
use App\Services\Admin\Util\PlantasService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class PlantasController extends Controller
{
    protected $plantasService;

    public function __construct(
        PlantasService $PlantasService
    )
    {
        $this->plantasService = $PlantasService;
    }

    public function obtenerPlantasDropdown () {
        try{
            return $this->plantasService->obtenerPlantasDropdown();
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