<?php

namespace App\Repositories\Admin\Catalogos;

use App\Models\TblCodigos;
use Illuminate\Support\Facades\DB;

class CodigosRepository
{
    public function obtenerCodigosPorFiltros($tipos_codigo, $status_codigo) {
        $query = TblCodigos::select(
                               DB::raw('
                                   case
                                       when tb_codigos.activo = "si" then 1
                                       else 0
                                   end as activo
                               '),
                               DB::raw('"0" as por_validar'),
                               'tb_codigos.id_codigos',
                               'tb_codigos_tipo.dato as tipo',
                               'tb_codigos.codigo',
                               'tb_codigos.descripcion',
                               'tb_clientes.cliente',
                               'tb_unidad_medida.um as unidad_medida',
                               //'tb_unidad_medida.um_num as cantidad_unidad_medida',
                               DB::raw('"3" as cantidad_unidad_medida'),
                               'tb_codigos.fecha_creacion as fecha',
                               DB::raw('
                                   case
                                       when tb_codigos.explosion = "si" then "Con explosión"
                                       else "Sin explosión"
                                   end as explosion
                               ')
                           )
                           ->join('tb_codigos_tipo', 'tb_codigos_tipo.id_codigos_tipo', 'tb_codigos.id_tipo')
                           ->join('tb_clientes', 'tb_clientes.id_cliente', 'tb_codigos.id_cliente')
                           ->join('tb_unidad_medida', 'tb_unidad_medida.id_unidad_medida','tb_codigos.id_unidad_medida')
                           ->whereIn('tb_codigos.id_tipo', $tipos_codigo);

        // Filtro activo - Por válidar
        if (in_array(1, $status_codigo)) ;
        // Filtro activo - Sin explosión
        if (in_array(2, $status_codigo)) $query->where('tb_codigos.explosion', 'no');
        // Filtro activo - Con explosión
        if (in_array(3, $status_codigo)) $query->where('tb_codigos.explosion', 'si');
        // Filtro activo - Activo
        if (in_array(4, $status_codigo)) $query->where('tb_codigos.activo', 'si');
        // Filtro activo - Inactivo
        if (in_array(5, $status_codigo)) $query->where('tb_codigos.activo', 'no');

        return $query->get();
    }
}