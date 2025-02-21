<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TblClientes extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $primaryKey = 'id_cliente';
    protected $table = 'tb_clientes';
    protected $fillable =
    [
        'id_cliente',
        'folio',
        'cliente',
        'activo',
        'remision',
        'direccion',
        'telefono',
        'atencion',
        'calendario_juliano',
        'orden',
        'id_usuario',
        'fecha',
        'rfc'
    ];
}