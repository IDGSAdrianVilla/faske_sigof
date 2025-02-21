<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TblUbicaciones extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $primaryKey = 'id_ubicacion';
    protected $table = 'tb_ubicacion';
    protected $fillable = 
    [
        'id_ubicacion',
        'rack',
        'nivel',
        'ubicacion',
        'activo',
        'disponible',
        'peso',
        'fecha',
        'id_planta',
        'id_usuario',
        'cant_codigos',
        'tipo_ubicacion'
    ];
}