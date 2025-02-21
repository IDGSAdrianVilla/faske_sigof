<?php

use Illuminate\Support\Facades\Route;

// catálogos
Route::get('/util/plantas/obtenerPlantasDropdown', 'App\Http\Controllers\Admin\Util\PlantasController@obtenerPlantasDropdown');
Route::get('/util/catalogos/obtenerTiposCodigoDropdown', 'App\Http\Controllers\Admin\Util\CatalogosController@obtenerTiposCodigoDropdown');
Route::get('/util/catalogos/obtenerAreasDropdown', 'App\Http\Controllers\Admin\Util\CatalogosController@obtenerAreasDropdown');
Route::get('/util/catalogos/obtenerClientesDropdown', 'App\Http\Controllers\Admin\Util\CatalogosController@obtenerClientesDropdown');

// módulo catálogos - submódulo ubicaciones
Route::post('/catalogos/ubicaciones/obtenerUbicacionesPorPlanta', 'App\Http\Controllers\Admin\Catalogos\UbicacionesController@obtenerUbicacionesPorPlanta');
Route::post('/catalogos/ubicaciones/obtenerDatosGraficaUbicaciones', 'App\Http\Controllers\Admin\Catalogos\UbicacionesController@obtenerDatosGraficaUbicaciones');

// módulo catálogos - submódulo codigos
Route::post('/catalogos/codigos/obtenerCodigosPorFiltros', 'App\Http\Controllers\Admin\Catalogos\CodigosController@obtenerCodigosPorFiltros');