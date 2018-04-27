<?php

namespace App;

use Illuminate\Database\Eloquent\Model;



class Action extends Model
{
    protected $fillable = ['dolor', 'actividad', 'comentario'];

    public static function fechain($fechain){
    $fecha="";

    $carbon = new \Carbon\Carbon();
   
        $fecha=$carbon->createFromFormat('Y-m-d H:i:s',$fechain);
        $fecha=$fecha->format('d H:i');
                  
                 
   
    return ($fecha); 

    }

    public static function difFecha($pri , $seg){
    $fecha="";

    $carbon = new \Carbon\Carbon();
   
        $fechaPri=$carbon->createFromFormat('Y-m-d H:i:s',$pri);
        $fechaSeg=$carbon->createFromFormat('Y-m-d H:i:s',$seg);
        $dif=$fechaSeg->diffInMinutes($fechaPri);
        #$dif=$dif->format('H:i:s');                  
                 
   
    return ($dif); 

    }

    
}

