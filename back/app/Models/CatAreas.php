<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CatAreas extends Model
{
    use HasFactory;
    protected $primarykey = 'id_area';
    protected $table = 'tb_area';
    protected $fillable = 
    [
        'id_area',
        'area',
        'activo',
        'ver',
        'dato2'
    ];
}
