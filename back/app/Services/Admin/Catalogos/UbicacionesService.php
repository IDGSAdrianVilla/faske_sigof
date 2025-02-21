<?php

namespace App\Services\Admin\Catalogos;

use App\Repositories\Admin\Catalogos\UbicacionesRepository;
use Illuminate\Support\Facades\Log;

class UbicacionesService
{
    protected $ubiacionesRepository;

    public function __construct(
        UbicacionesRepository $UbicacionesRepository
    )
    {
        $this->ubiacionesRepository = $UbicacionesRepository;
    }

    public function obtenerUbicacionesPorPlanta ($arrPlantas) {
        $ubicaciones = $this->ubiacionesRepository->obtenerUbicacionesPorPlanta($arrPlantas);

        return response()->json(
            [
                'ubicaciones' => $ubicaciones,
                'mensaje' => 'Se obtuvieron las ubicaciones con éxito'
            ]
        );
    }

    public function obtenerDatosGraficaUbicaciones ($arrPlantas) {
        $datosGrafica = $this->ubiacionesRepository->obtenerDatosGraficaUbicaciones($arrPlantas);
        
        return response()->json(
            [
                'datosGrafica' => $datosGrafica,
                'mensaje' => 'Se obtuvo la información con éxito'
            ]
        );
    }

    public function obtenerDetalleUbicacion ($pkUbicacion) {

    }
}