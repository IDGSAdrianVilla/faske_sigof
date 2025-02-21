<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TblCodigosTipo extends Model
{                                                 
    use HasFactory;                                   
    public $timestaps = false;
    protected $primarykey = 'id_codigos_tipo';
    protected $table = 'tb_codigos_tipo';
    protected $fillable = 
    [
        'id_codigos_tipo',
        'tipo',
        'dato',
        'activo',
        'url',
        'color',
        'solicitar'    
    ];

}