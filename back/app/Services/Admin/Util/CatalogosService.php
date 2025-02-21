<?php

namespace App\Services\Admin\Util;

use App\Repositories\Admin\Util\CatalogosRepository;

class CatalogosService
{
    protected $catalogosRepository;

    public function __construct(
        CatalogosRepository $CatalogosRepository
    )
    {
        $this->catalogosRepository = $CatalogosRepository;
    }

    public function obtenerTiposCodigoDropdown () {
        $listaTiposCodigo = $this->catalogosRepository->obtenerListaTiposCodigo();
        $opcionesSelect = [];

        foreach( $listaTiposCodigo as $item ){
            $temp = [
                'value' => $item->id_codigos_tipo,
                'label' => $item->tipo,
                'checked' => false
            ];

            array_push($opcionesSelect, $temp);
        }
        
        return response()->json(
            [
                'listaTiposCodigo' => $opcionesSelect,
                'mensaje' => 'Se obtuvieron los tipos código con éxito'
            ]
        );
    }

    public function obtenerAreasDropdown () {
        $listaAreas = $this->catalogosRepository->obtenerListaAreas();
        $opcionesSelect = [];

        foreach( $listaAreas as $item ){
            $temp = [
                'value' => $item->id_area,
                'label' => $item->area,
                'checked' => false
            ];

            array_push($opcionesSelect, $temp);
        }
        
        return response()->json(
            [
                'listaAreas' => $opcionesSelect,
                'mensaje' => 'Se obtuvieron las áreas con éxito'
            ]
        );
    }

    public function obtenerClientesDropdown () {
        $listaClientes = $this->catalogosRepository->obtenerListaClientes();
        $opcionesSelect = [];

        foreach( $listaClientes as $item ){
            $temp = [
                'value' => $item->id_cliente,
                'label' => $item->cliente,
                'checked' => false
            ];

            array_push($opcionesSelect, $temp);
        }
        
        return response()->json(
            [
                'listaClientes' => $opcionesSelect,
                'mensaje' => 'Se obtuvieron los clientes con éxito'
            ]
        );
    }
}