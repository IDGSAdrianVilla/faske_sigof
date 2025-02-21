<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CatPlantas extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $primaryKey = 'id_planta';
    protected $table = 'tb_plantas';
    protected $fillable = 
    [
        'id_planta',
        'planta',
        'descripcion',
        'activos',
        'color',
        'dato',
        'planeacion',
        'abrev',
        'planta_nombre'
    ];
}