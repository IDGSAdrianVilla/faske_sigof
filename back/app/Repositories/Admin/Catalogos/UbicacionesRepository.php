<?php

namespace App\Repositories\Admin\Catalogos;

use App\Models\TblUbicaciones;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class UbicacionesRepository
{
    public function obtenerUbicacionesPorPlanta ($arrPlantas) {
        $query = TblUbicaciones::select(
                                   'tb_ubicacion.id_ubicacion',
                                   'tb_ubicacion.rack',
                                   'tb_ubicacion.nivel',
                                   'tb_ubicacion.ubicacion',
                                   'tb_ubicacion.peso',
                                   DB::raw('
                                       (case
                                           when tb_ubicacion.disponible = "si" then "Disponible"
                                           when tb_ubicacion.disponible = "no" then "Ocupado"
                                       end) as disponible
                                   '),
                                   'tb_ubicacion.permitido',
                                   'tb_ubicacion_almacen.tipo_almacen',
                                   'tb_plantas.planta as nombre_almacen',
                                   'tb_ubicacion.fecha'
                               )
                               ->join('tb_plantas', 'tb_plantas.id_planta', 'tb_ubicacion.id_planta')
                               ->join('tb_ubicacion_almacen', 'tb_ubicacion_almacen.id_ubicacion_almacen', 'tb_ubicacion.id_ubicacion_almacen')
                               ->whereIn('tb_plantas.id_planta', $arrPlantas);

        return $query->get();
    }

    public function obtenerDatosGraficaUbicaciones ($arrPlantas) {
        $query = TblUbicaciones::select(
                                   DB::raw('
                                       (case
                                           when disponible = "si" then "Disponible"
                                           when disponible = "no" then "Ocupado"
                                       end) as disponible
                                   '),
                                   DB::raw('count(*) as cantidad'),
                                   DB::raw('
                                       (count(*) * 100.0 / (SELECT count(*) FROM tb_ubicacion WHERE id_planta IN (' . implode(',', $arrPlantas) . '))) as porcentaje
                                   ')
                               )
                               ->groupBy('disponible')
                               ->whereIn('id_planta', $arrPlantas);

        return $query->get();
    }

    public function obtenerDetalleUbicacion ($pkUbicacion) {

    }
}