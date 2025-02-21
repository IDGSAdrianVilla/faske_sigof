<?php

namespace App\Services\Admin\Util;

use App\Repositories\Admin\Util\PlantasRepository;

class PlantasService
{
    protected $plantasRepository;

    public function __construct(
        PlantasRepository $PlantasRepository
    )
    {
        $this->plantasRepository = $PlantasRepository;
    }

    public function obtenerPlantasDropdown () {
        $listaPlantas = $this->plantasRepository->obtenerListaPlantasActivas();
        $opcionesSelect = [];

        foreach( $listaPlantas as $item ){
            $temp = [
                'value' => $item->id_planta,
                'label' => $item->planta,
                'checked' => false
            ];

            array_push($opcionesSelect, $temp);
        }
        
        return response()->json(
            [
                'listaPlantas' => $opcionesSelect,
                'mensaje' => 'Se obtuvieron las plantas con éxito'
            ]
        );
    }
}