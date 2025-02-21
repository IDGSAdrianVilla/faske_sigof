<?php

namespace App\Repositories\Admin\Util;

use App\Models\CatAreas;
use App\Models\TblClientes;
use App\Models\TblCodigosTipo;

class CatalogosRepository
{
    public function obtenerListaTiposCodigo () {
        $query = TblCodigosTipo::select(
                                   'id_codigos_tipo',
                                   'tipo'
                               );

        return $query->get();
    }

    public function obtenerListaAreas () {
        $query = CatAreas::select(
                             'id_area',
                             'area'
                         );

        return $query->get();                                   
    }

    public function obtenerListaClientes () {
        $query = TblClientes::select(
                                'id_cliente',
                                'cliente'
                            );

        return $query->get();
    }
}