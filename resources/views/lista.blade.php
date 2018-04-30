<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>ActionSize</title> 
        <link href="{{mix('css/app.css')}}" rel="stylesheet" type="text/css">       
    </head>
    <body>
        <h1 style="text-align: center"> Contracciones </h1>
        <div id="root"></div>
        <div class="table-responsive">
      <table class="table table-striped table-bordered table-condensed table-hover">
        <thead>         
          <th style="text-align: center">Fecha</th>
          <th style="text-align: center">Dolor</th>
          <th style="text-align: center">Actividad</th>          
          <th style="text-align: center">Intervalo</th>          
        </thead>
        @php $nn = 0;
        $a=$lista->count()-1;
        @endphp       
       
        @foreach ($lista as $sto)
        @if ($nn==$a)
            @php $n=$lista[$a]->created_at; @endphp
        @else
           @php $n=$lista[$nn+1]->created_at; @endphp
        @endif
           
        <tr>
          <td style="text-align: center">{{\App\Action::fechain($sto->created_at)}}</td>
          @if ($sto->dolor=="1")
          <td style="text-align: center">Si</td>
          @else
          <td style="text-align: center">No</td>
          @endif
          <td style="text-align: center">
            @if ($sto->actividad=="1")Si
            @else No
             @endif
          </td>                  
          <td style="text-align: center">{{\App\Action::difFecha($n, $sto->created_at)}} Minutos</td>         
        </tr>
        @php $nn = $nn+1;
        @endphp       
        @endforeach
      </table>
    </div>
        
    </body>
</html>
