<?php

namespace App\Services\Admin\Catalogos;

use App\Repositories\Admin\Catalogos\CodigosRepository;

class CodigosService
{
    protected $codigosRepository;

    public function __construct(
        CodigosRepository $CodigosRepository
    )
    {
        $this->codigosRepository = $CodigosRepository;
    }

    public function obtenerCodigosPorFiltros ($data) {
        $codigos = $this->codigosRepository->obtenerCodigosPorFiltros($data['tipos_codigo'], $data['status_codigo']);

        return response()->json(
            [
                'codigos' => $codigos,
                'mensaje' => 'Se obtuvieron los códigos con éxito'
            ]
        );
    }
}