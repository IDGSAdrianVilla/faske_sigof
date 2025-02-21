<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TblCodigos extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $primaryKey = 'id_codigos';
    protected $table = 'tb_codigos';
    protected $fillable = 
    [
        'id_codigos',
        'codigo',
        'descripcion',
        'id_cliente',
        'id_unidad_medida',
        'valor1',
        'valor2',
        'valor3',
        'activo',
        'explosion',
        'fecha_creacion',
        'id_usuario',
        'id_tipo',
        'vida_util',
        'caducidad',
        'id_codigos_despues'
    ];
}