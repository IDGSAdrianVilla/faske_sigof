<?php

namespace App\Repositories\Admin\Util;

use App\Models\CatPlantas;

class PlantasRepository
{
    public function obtenerListaPlantasActivas () {
        $query = CatPlantas::select('id_planta', 'planta')
                           ->where('activos', 'si');
        
        return $query->get();
    }
}