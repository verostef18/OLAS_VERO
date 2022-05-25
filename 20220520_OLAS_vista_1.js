$(function(){
    //Funcion para ocultar todos los campos opcionales según los campos seleccionados
    var ocultarControlesOpcionales = function(){
        //Opcionales para Tipo = Siniestro
        $('#eg_actividad_tipo_de_siniestro').parent().parent().hide();
        $('#eg_actividad_reclamo').parent().parent().hide();
        $('#eg_actividad_acuerdo').parent().parent().hide();
        $('#eg_actividad_honorarios').parent().parent().hide();
        
        $('#eg_actividad_tipo_de_siniestro').attr('required',false);
        $('#eg_actividad_reclamo').attr('required',false);
        $('#eg_actividad_acuerdo').attr('required',false);
        $('#eg_actividad_honorarios').attr('required',false);

        //Opcionales para Tipo = Baja
        $('#eg_actividad_sub_motivo_bajas').parent().parent().hide();
        
        $('#eg_actividad_sub_motivo_bajas').attr('required',false);

        //Opcionales para Tipo = Cobranza    
        $('#eg_actividad_tipo_de_contacto').parent().parent().hide();
        $('#eg_actividad_regularizo').parent().parent().hide();
        $('#eg_actividad_importe').parent().parent().hide();

        $('#eg_actividad_tipo_de_contacto').attr('required',false);
        $('#eg_actividad_regularizo').attr('required',false);
        $('#eg_actividad_importe').attr('required',false);

        //Opcionales para Tipo = Reclamo
        $('#eg_actividad_tipo_de_reclamo').parent().parent().hide();
        
        $('#eg_actividad_tipo_de_reclamo').attr('required',false);

        //Opcionales para Tipo = Endoso
        $('#eg_actividad_tipo_endoso').parent().parent().hide();
        
        $('#eg_actividad_tipo_endoso').attr('required',false);
        
        //Opcionales para Tipo = Retención
        $('#eg_actividad_sub_motivo_retencion').parent().parent().hide();
        $('#eg_actividad_diferencia_montos').parent().parent().hide();

        $('#eg_actividad_sub_motivo_retencion').attr('required',false);

        //Opcionales para Tipo = Renovacion   
        $('#eg_actividad_estado_de_renovacion').parent().parent().hide();
        $('#eg_actividad_premio_actual').parent().parent().hide();
        $('#eg_actividad_premio_nuevo').parent().parent().hide();

        $('#eg_actividad_estado_de_renovacion').attr('required',false);
        $('#eg_actividad_premio_actual').attr('required',false);
        $('#eg_actividad_premio_nuevo').attr('required',false);

        //Opcionales para Tipo = Retención y Tipo = Renovación
        $('#eg_actividad_compania_actual').parent().parent().hide();
        $('#eg_actividad_monto_actual').parent().parent().hide();
        $('#eg_actividad_compania_nueva').parent().parent().hide();
        $('#eg_actividad_monto_nuevo').parent().parent().hide();
        
        $('#eg_actividad_compania_actual').attr('required',false);
        $('#eg_actividad_monto_actual').attr('required',false);
        $('#eg_actividad_compania_nueva').attr('required',false);
        $('#eg_actividad_monto_nuevo').attr('required',false);
    }
    
    //Función para mostrar los campos según el valor del campo Tipo
    var cambioTipoActividad = function(){                                        
        alert($('#eg_actividad_tipo').val());
        switch ($('#eg_actividad_tipo').val()) {
            case 'Siniestro':
                $('#eg_actividad_tipo_de_siniestro').parent().parent().show();
                $$('#eg_actividad_tipo_de_siniestro').attr('required',true);
                break;

            case 'Renovacion':
                $('#eg_actividad_estado_de_renovacion').parent().parent().show();
                $$('#eg_actividad_estado_de_renovacion').attr('required',true);
                break;

            case 'BAJA':
                $('#eg_actividad_sub_motivo_bajas').parent().parent().show();
                $$('#eg_actividad_sub_motivo_bajas').attr('required',true);
                break;

            case 'Cobranza':
                $('#eg_actividad_tipo_de_contacto').parent().parent().show();
                $('#eg_actividad_regularizo').parent().parent().show();
                $('#eg_actividad_importe').parent().parent().show();
                $$('#eg_actividad_tipo_de_contacto').attr('required',true);
                break;

            case 'Reclamo':
                $('#eg_actividad_tipo_de_reclamo').parent().parent().show();
                $$('#eg_actividad_tipo_de_reclamo').attr('required',true);
                break;

            case 'Retención':
                $('#eg_actividad_sub_motivo_retencion').parent().parent().show();
                $$('#eg_actividad_sub_motivo_retencion').attr('required',true);
                break;

            case 'Endoso':
                $('#eg_actividad_tipo_endoso').parent().parent().show();
                $$('#eg_actividad_tipo_endoso').attr('required',true);
                break;
        }
    }

    //Función para mostrar los campos según el valor del campo Tipo de Siniestro
    var cambioTipoSiniestro = function(){                                        
        if($('#eg_actividad_tipo').val() == 'Siniestro'){
            alert($('#eg_actividad_tipo').val());
            if($('#eg_actividad_tipo_de_siniestro').val() == 'Reclamo Daño' || $('#eg_actividad_tipo_de_siniestro').val() == 'Reclamo Franquicia'){
                $('#eg_actividad_reclamo').parent().parent().show();
                $('#eg_actividad_acuerdo').parent().parent().show();
                $('#eg_actividad_honorarios').parent().parent().show();
            }
        }
    }

    //Función para mostrar los campos según el valor del campo Estado de Renovación
    var cambioTipoRenovacion = function(){
        if($('#eg_actividad_tipo').val() == 'Renovacion'){
            alert($('#eg_actividad_tipo').val());
            switch ($('#eg_actividad_estado_de_renovacion').val()) {

                case 'No Renovada':
                    //Mostrar campos
                    $('#eg_actividad_premio_actual').parent().parent().show();
                    $('#eg_actividad_compania_actual').parent().parent().show();
                
                    //Establacer requeridos si Estado = 'Finalizada'
                    if ($('#eg_actividad_estado').val() == 'Finalizada'){
                        $('#eg_actividad_premio_actual').attr('required',true);
                        $('#eg_actividad_compania_actual').attr('required',true);
                    }    
                    break;

                case 'Renovada':
                    //Mostrar campos
                    $('#eg_actividad_premio_actual').parent().parent().show();
                    $('#eg_actividad_compania_actual').parent().parent().show();
                    $('#eg_actividad_premio_nuevo').parent().parent().show();
                    $('#eg_actividad_compania_nueva').parent().parent().show();    
        
                    //Establacer requeridos si Estado = 'Finalizada'
                    if  ($('#eg_actividad_estado').val() == 'Finalizada'){
                        $('#eg_actividad_premio_actual').attr('required',true);
                        $('#eg_actividad_compania_actual').attr('required',true);
                        $('#eg_actividad_premio_nuevo').attr('required',true);
                        $('#eg_actividad_compania_nueva').attr('required',true);
                    }
                    break;
            }
        }
    }

    //Función para mostrar los campos según el valor del campo Motivo Retención
    var cambioTipoRetencion = function(){
        if($('#eg_actividad_tipo').val() == 'Retención'){
            alert($('#eg_actividad_tipo').val());
            switch ($('#eg_actividad_sub_motivo_retencion').val()) {
                
                case 'alta por baja':
                    //Mostrar campos
                    $('#eg_actividad_compania_actual').parent().parent().show();
                    $('#eg_actividad_compania_nueva').parent().parent().show();
                    $('#eg_actividad_monto_actual').parent().parent().show();
                    $('#eg_actividad_monto_nuevo').parent().parent().show();
                    $('#eg_actividad_diferencia_montos').parent().parent().show();
                    
                    //Establacer requeridos si Estado = 'Finalizada'
                    if  ($('#eg_actividad_estado').val() == 'Finalizada'){
                        $('#eg_actividad_compania_nueva').attr('required',true);
                        $('#eg_actividad_monto_nuevo').attr('required',true);
                    }

                    //Crear función para calcular diferencia de montos
                    var diferencia = function (){
                        $('#eg_actividad_diferencia_montos').val($('#eg_actividad_monto_nuevo').val() - $('#eg_actividad_monto_actual').val());
                        if($('#eg_actividad_diferencia_montos').val() == 0){
                            $('#eg_actividad_diferencia_montos').val('');
                        }
                    }

                    //Asignar función de diferencia al evento 'change' de los campos Monto Nuevo y Monto Actual
                    $("#eg_actividad_monto_actual").on("change",function(){
                        diferencia();
                    });
                    $("#eg_actividad_monto_nuevo").on("change",function(){
                        diferencia();
                    });
                    break;

                case 'Perdida':
                    //Mostrar campos
                    $('#eg_actividad_compania_actual').parent().parent().show();
                    $('#eg_actividad_monto_actual').parent().parent().show();
                    break;

                case 'Mantiene misma cobertura':
                    //Mostrar campos
                    $('#eg_actividad_compania_actual').parent().parent().show();
                    $('#eg_actividad_monto_actual').parent().parent().show();
                    
                    //Establacer requeridos si Estado = 'Finalizada'
                    if ($('#eg_actividad_estado').val() == 'Finalizada'){
                        $$('#eg_actividad_compania_actual').attr('required',true);
                        $('#eg_actividad_monto_actual').attr('required',true);
                    }
                    break;
            }
        }
    }

    //Llamar a todas las funciones de campos opcionales
    var mostrarOpcionales = function(){
        ocultarControlesOpcionales();
        cambioTipoActividad();
        cambioTipoSiniestro();
        cambioTipoRenovacion();
        cambioTipoRetencion();
    }

    //Primera llamada al cargar la vista
    mostrarOpcionales();

    //Cambiar el texto de Liquidador
    document.querySelector('label[for="eg_actividad_liquidador"]').textContent = "Monto Pago";

    //Asignar evento por cambio de Tipo de Siniestro
    $('#eg_actividad_tipo_de_siniestro').on('change',function(){
        mostrarOpcionales();
    });

    //Asignar evento por cambio de Estado de Renovación
    $('#eg_actividad_estado_de_renovacion').on('change',function(){
        mostrarOpcionales();
    });
     
    //Asignar evento por cambio de Estado
    $('#eg_actividad_estado').on('change',function(){
        mostrarOpcionales();
    });

    //Asignar evento por cambio de Tipo
    $('#eg_actividad_tipo').on('change',function(){
        mostrarOpcionales();
    });

    //Asignar evento por cambio de Motivo de Retención
    $('#eg_actividad_sub_motivo_retencion').on('change',function(){
        mostrarOpcionales();
    });

    //Eliminar caracteres no numéricos del campo Monto Nuevo
    $('#eg_actividad_monto_nuevo').keyup(function(){
        var monto_nuevo = document.getElementById('eg_actividad_monto_nuevo').value;
        monto_nuevo = monto_nuevo.replace(/[^0-9-,]/g,"");
        document.getElementById('eg_actividad_monto_nuevo').value = monto_nuevo;
    });

    //Eliminar caracteres no numéricos del campo Monto Actual
    $('#eg_actividad_monto_actual').keyup(function(){
        var monto_actual = document.getElementById('eg_actividad_monto_actual').value;
        monto_actual = monto_actual.replace(/[^0-9-,]/g,"");
        document.getElementById('eg_actividad_monto_actual').value = monto_actual;
    });

    //Eliminar caracteres no numéricos del campo Número de Siniestro
    $('#eg_actividad_nro_siniestro').keyup(function (){
        $('#eg_actividad_nro_siniestro').val((this.value + '').replace(/[^0-9]/g, ''));
    });

});
