$(function () {//Inicio de todo

    $('#eg_lead_entidad').parent().append('<div id="requerido_entidad"class="bpm-error-col"><div class="label label-danger"><span class="glyphicon glyphicon-circle-arrow-down"></span> <b>Requerido</b></div></div>');
    $('#eg_lead_apellido').parent().append('<div id="requerido_apellido"class="bpm-error-col"><div class="label label-danger"><span class="glyphicon glyphicon-circle-arrow-down"></span> <b>Requerido</b></div></div>');
    $('#eg_lead_nombre').parent().append('<div id="requerido_nombre"class="bpm-error-col"><div class="label label-danger"><span class="glyphicon glyphicon-circle-arrow-down"></span> <b>Requerido</b></div></div>');
    $('#eg_lead_dni').parent().append('<div id="requerido_dni"class="bpm-error-col"><div class="label label-danger"><span class="glyphicon glyphicon-circle-arrow-down"></span> <b>Requerido</b></div></div>');
    $('#eg_lead_fecha_nacimiento').parent().append('<div id="requerido_nacimiento"class="bpm-error-col"><div class="label label-danger"><span class="glyphicon glyphicon-circle-arrow-down"></span> <b>Requerido</b></div></div>');
    $('#eg_lead_telefono1').parent().append('<div id="requerido_telefono1"class="bpm-error-col"><div class="label label-danger"><span class="glyphicon glyphicon-circle-arrow-down"></span> <b>Requerido</b></div></div>');
    $('#eg_lead_telefono2').parent().append('<div id="requerido_telefono2"class="bpm-error-col"><div class="label label-danger"><span class="glyphicon glyphicon-circle-arrow-down"></span> <b>Requerido</b></div></div>');
    $('#eg_lead_telefono3').parent().append('<div id="requerido_telefono3"class="bpm-error-col"><div class="label label-danger"><span class="glyphicon glyphicon-circle-arrow-down"></span> <b>Requerido</b></div></div>');
    $('#eg_lead_email1').parent().append('<div id="requerido_email1"class="bpm-error-col"><div class="label label-danger"><span class="glyphicon glyphicon-circle-arrow-down"></span> <b>Requerido</b></div></div>');
    $('#eg_lead_email2').parent().append('<div id="requerido_email2"class="bpm-error-col"><div class="label label-danger"><span class="glyphicon glyphicon-circle-arrow-down"></span> <b>Requerido</b></div></div>');
    $('#eg_lead_domicilio').parent().append('<div id="requerido_domicilio"class="bpm-error-col"><div class="label label-danger"><span class="glyphicon glyphicon-circle-arrow-down"></span> <b>Requerido</b></div></div>');
    $('#eg_lead_cp').parent().append('<div id="requerido_cp"class="bpm-error-col"><div class="label label-danger"><span class="glyphicon glyphicon-circle-arrow-down"></span> <b>Requerido</b></div></div>');
    $('#eg_lead_localidad').parent().append('<div id="requerido_localidad"class="bpm-error-col"><div class="label label-danger"><span class="glyphicon glyphicon-circle-arrow-down"></span> <b>Requerido</b></div></div>');
    $('#eg_lead_provincia').parent().append('<div id="requerido_provincia"class="bpm-error-col"><div class="label label-danger"><span class="glyphicon glyphicon-circle-arrow-down"></span> <b>Requerido</b></div></div>');
    $('#eg_lead_canal').parent().append('<div id="requerido_canal"class="bpm-error-col"><div class="label label-danger"><span class="glyphicon glyphicon-circle-arrow-down"></span> <b>Requerido</b></div></div>');
    $('#eg_lead_subcanal').parent().append('<div id="requerido_subcanal"class="bpm-error-col"><div class="label label-danger"><span class="glyphicon glyphicon-circle-arrow-down"></span> <b>Requerido</b></div></div>');
    $('#eg_lead_campana').parent().append('<div id="requerido_campana"class="bpm-error-col"><div class="label label-danger"><span class="glyphicon glyphicon-circle-arrow-down"></span> <b>Requerido</b></div></div>');
    $('#eg_lead_cobertura').parent().append('<div id="requerido_cobertura"class="bpm-error-col"><div class="label label-danger"><span class="glyphicon glyphicon-circle-arrow-down"></span> <b>Requerido</b></div></div>');
    $('#eg_lead_tipo').parent().append('<div id="requerido_tipo"class="bpm-error-col"><div class="label label-danger"><span class="glyphicon glyphicon-circle-arrow-down"></span> <b>Requerido</b></div></div>');
    $('#eg_lead_compania').parent().append('<div id="requerido_compania"class="bpm-error-col"><div class="label label-danger"><span class="glyphicon glyphicon-circle-arrow-down"></span> <b>Requerido</b></div></div>');
    $('#eg_lead_premio').parent().append('<div id="requerido_premio"class="bpm-error-col"><div class="label label-danger"><span class="glyphicon glyphicon-circle-arrow-down"></span> <b>Requerido</b></div></div>');
    
    $('#requerido_entidad').hide();  
    $('#requerido_apellido').hide();  
    $('#requerido_nombre').hide();  
    $('#requerido_dni').hide();  
    $('#requerido_nacimiento').hide();  
    $('#requerido_telefono1').hide();  
    $('#requerido_telefono2').hide();  
    $('#requerido_telefono3').hide();  
    $('#requerido_email1').hide();  
    $('#requerido_email2').hide();  
    $('#requerido_domicilio').hide();  
    $('#requerido_cp').hide();  
    $('#requerido_localidad').hide();  
    $('#requerido_provincia').hide();  
    $('#requerido_canal').hide();  
    $('#requerido_subcanal').hide();  
    $('#requerido_campana').hide();  
    $('#requerido_cobertura').hide();  
    $('#requerido_tipo').hide();  
    $('#requerido_compania').hide();  
    $('#requerido_premio').hide();  
    
    $('#eg_lead_motivo_perdida').parent().parent().hide();

    var cuil = function (){
        var resultado = 0;
        var dni = $("#eg_lead_dni").val();
        var sexo = $("#eg_lead_sexo").val();
        var xy;
        if($("#eg_lead_entidad").val() == 'Persona'){
            if(dni.length == 6){
                dni = '00'+dni;
            }else if(dni.length == 7 ){
                dni = '0'+dni;
            }
            if($("#eg_lead_sexo").val() == 'Masculino'){
                    xy = 20;
            }else if($("#eg_lead_sexo").val() == 'Femenino'){
                    xy = 27;
            }else{
                    xy = 30;
            }
        }
        
        var xydni = xy+dni;
        var multiplicadores = [5,4,3,2,7,6,5,4,3,2];
        var i;
        for(i=0; i<10; i++){// Se realiza la multiplicacion
                resultado += xydni.substr(i,1)*multiplicadores[i];
        }
        var resto = Math.floor(resultado/11);
        var digitov = resultado - (11*resto);
        
        var z;
        if(digitov == 0){
            z = digitov;
        }else if(digitov == 1){
            if($("#eg_lead_sexo").val() == 'Masculino'){
                    xy = 23;
                    z = 9;
                }
            if($("#eg_lead_sexo").val() == 'Femenino'){ // Si digito verificador termina en 1 se cambia 27 por 23 y el digitov pasa a ser 4(Mujeres)
                xy = 23;
                z = 4;
            }
        }else{
            z = 11-digitov;
        }
        $("#eg_lead_cuil_cuit").val(xy+dni+z);
    };
    //cuil();
    var chequeos = function(){ 
        if($("#eg_lead_entidad").val() == 'Persona' ){
            $('#eg_lead_sexo').prop('required',true);
            $('#eg_lead_dni').prop('required',true);
            $('#eg_lead_cuil_cuit').prop('readonly',true);
            $('#eg_lead_sexo').attr('readonly',false);
            $('#eg_lead_dni').prop('readonly',false);
            $('#eg_lead_dni').on('input', function () { 
                this.value = this.value.replace(/[^0-9]/g,'');
            });
            $('#eg_lead_fecha_nacimiento').prop('readonly',false);
            $('#eg_lead_estado_civil').attr('readonly',false);
            
            
            $('#eg_lead_fecha_nacimiento').parent().parent().parent().show();
            $('#eg_lead_estado_civil').parent().parent().show();
            $('#eg_lead_sexo').parent().parent().show();
            $('#eg_lead_dni').parent().parent().show();
        }else{
            $('#eg_lead_fecha_nacimiento').parent().parent().parent().hide();
            $('#eg_lead_estado_civil').parent().parent().hide();
            
            $('#eg_lead_fecha_nacimiento').removeAttr("required");
            $('#eg_lead_estado_civil').removeAttr("required");
            $('#eg_lead_sexo').removeAttr("required");
            $('#eg_lead_dni').removeAttr("required");
            
            $('#eg_lead_cuil_cuit').prop('readonly',false);
            $('#eg_lead_cuil_cuit').prop('required',true);
            $('#eg_lead_sexo').attr('readonly',true);
            $('#eg_lead_sexo').parent().parent().hide();
            $('#eg_lead_estado_civil').attr('readonly',true);
            $('#eg_lead_fecha_nacimiento').prop('readonly',true);
            $('#eg_lead_dni').prop('required',false);
            $('#eg_lead_dni').prop('readonly',true);
            $('#eg_lead_dni').val('');
            
            $('#eg_lead_dni').parent().parent().hide();
            $('#eg_lead_sexo').val('');
            $('#eg_lead_cuil_cuit').on('input', function () { 
                this.value = this.value.replace(/[^0-9]/g,'');
            });
        }
        
    };
    
    $("#eg_lead_estado").on("change",function(){
        if($("#eg_lead_estado").val() == 'No Venta'){
            $('#eg_lead_motivo_perdida').parent().parent().show();
        }else{
            $('#eg_lead_motivo_perdida').parent().parent().hide();
        }
    });

    $("#eg_lead_entidad").on("change",function(){
        chequeos();
        $('#eg_lead_cuil_cuit').val('')
    });

    $("#eg_lead_sexo").on("change",function(){
        cuil();
    });

    $("#eg_lead_dni").on("change",function(){
        cuil();
    });
    chequeos();
    
    function ordenarSelect(id_componente)
    {
        var selectToSort = jQuery('#' + id_componente);
        var optionActual = selectToSort.val();
        selectToSort.html(selectToSort.children('option').sort(function (a, b) {
        return a.text === b.text ? 0 : a.text < b.text ? -1 : 1;
        })).val(optionActual);
    }

    $(document).on('change', function () {
        ordenarSelect('eg_lead_subcanal');
    });

    if($("#eg_lead_estado").val() == 'Activo' ||  $("#eg_lead_estado").val() == 'Venta'){
            $('#eg_lead_estado_civil').prop('readonly',true);
            $('#eg_lead_fecha_nacimiento').prop('readonly',true);
            $('#eg_lead_sexo').attr('readonly',true);
            $('#eg_lead_dni').prop('readonly',true);
        }
    
    function validarRequeridos(){
        var respuesta = true;
        var estado = $("#eg_lead_estado").val();
        if (estado == 'Venta' || estado == 'Activo'){
            var entidad = $("#eg_lead_entidad option:selected").text();
            var apellido = $("#eg_lead_apellido").val();
            var nombre = $("#eg_lead_nombre").val();
            var dni = $("#eg_lead_dni").val();
            var nacimiento = $("#eg_lead_fecha_nacimiento").val();
            var telefono1 = $("#eg_lead_telefono1").val();
            var telefono2 = $("#eg_lead_telefono2").val();
            var telefono3 = $("#eg_lead_telefono3").val();
            var email1 = $("#eg_lead_email1").val();
            var email2 = $("#eg_lead_email2").val();
            var domicilio = $("#eg_lead_domicilio").val();
            var provincia = $("#eg_lead_provincia option:selected").text();
            var localidad = $("#eg_lead_localidad").val();
            var canal = $("#eg_lead_canal option:selected").text();
            var cp = $("#eg_lead_cp").val();
            var subcanal = $("#eg_lead_subcanal option:selected").text();
            var campana = $("#eg_lead_campana").val();
            var cobertura = $("#eg_lead_cobertura option:selected").text();
            var tipo = $("#eg_lead_tipo option:selected").text();
            var compania = $("#eg_lead_compania option:selected").text();
            var premio = $("#eg_lead_premio").val();
            
            //Controlar los campos requeridos en orden inverso al formulario para que al final quede en foco el primero que falta
             if(entidad === ''){
                $('#requerido_entidad').show();     
                $("#eg_lead_entidad").focus();
                $("#eg_lead_entidad").select();
                respuesta = false;
            }else{
                $('#requerido_entidad').hide();
            }
            if(apellido === ''){
                $('#requerido_apellido').show();     
                $("#eg_lead_apellido").focus();
                $("#eg_lead_apellido").select();
                respuesta = false;
            }else{
                $('#requerido_apellido').hide();
            }if(nombre === ''){
                $('#requerido_nombre').show();     
                $("#eg_lead_nombre").focus();
                $("#eg_lead_nombre").select();
                respuesta = false;
            }else{
                $('#requerido_nombre').hide();
            }
            if(dni === ''){
                if(entidad === 'Persona'){
                    $('#requerido_dni').show();     
                    $("#eg_lead_dni").focus();
                    $("#eg_lead_dni").select();
                    respuesta = false;    
                }
                
            }else{
                $('#requerido_dni').hide();
            }
            if(nacimiento === ''){
                if(entidad === 'Persona'){
                $('#requerido_nacimiento').show();     
                $("#eg_lead_fecha_nacimiento").focus();
                $("#eg_lead_fecha_nacimiento").select();
                respuesta = false;
                }
            }else{
                $('#requerido_nacimiento').hide();
            }
            if(telefono1 === ''){
                $('#requerido_telefono1').show();     
                $("#eg_lead_telefono1").focus();
                $("#eg_lead_telefono1").select();
                respuesta = false;
            }else{
                $('#requerido_telefono1').hide();
            }
            
            if(email1 === ''){
                $('#requerido_email1').show();     
                $("#eg_lead_email1").focus();
                $("#eg_lead_email1").select();
                respuesta = false;
            }else{
                $('#requerido_email1').hide();
            }
            
            if(domicilio === ''){
                $('#requerido_domicilio').show();     
                $("#eg_lead_domicilio").focus();
                $("#eg_lead_domicilio").select();
                respuesta = false;
            }else{
                $('#requerido_domicilio').hide();
            }
            if(cp === ''){
                $('#requerido_cp').show();     
                $("#eg_lead_cp").focus();
                $("#eg_lead_cp").select();
                respuesta = false;
            }else{
                $('#requerido_cp').hide();
            }
            if(localidad === ''){
                $('#requerido_localidad').show();     
                $("#eg_lead_localidad").focus();
                $("#eg_lead_localidad").select();
                respuesta = false;
            }else{
                $('#requerido_localida').hide();
            }
            if(provincia === ''){
                $('#requerido_provincia').show();     
                $("#eg_lead_provincia").focus();
                $("#eg_lead_provincia").select();
                respuesta = false;
            }else{
                $('#requerido_provincia').hide();
            }
            if(canal === ''){
                $('#requerido_canal').show();     
                $("#eg_lead_canal").focus();
                $("#eg_lead_canal").select();
                respuesta = false;
            }else{
                $('#requerido_canal').hide();
            }
            if(subcanal === ''){
                $('#requerido_subcanal').show();     
                $("#eg_lead_subcanal").focus();
                $("#eg_lead_subcanal").select();
                respuesta = false;
            }else{
                $('#requerido_subcanal').hide();
            }
            if(campana === ''){
                $('#requerido_campana').show();     
                $("#eg_lead_campana").focus();
                $("#eg_lead_campana").select();
                respuesta = false;
            }else{
                $('#requerido_campana').hide();
            }
            tipo = tipo.trim();
            if(tipo === ''){//tipo !== 'Persona'||tipo !== 'Auto'||tipo !== 'Moto'||tipo !== 'Hogar'||tipo !== 'Integral'||tipo !== 'Masivo'||tipo !== 'Caución'||tipo !== 'Caución'||tipo !== 'Todo Riesgo'||tipo !== 'Incendio'||tipo !== 'Seguro Técnico'||tipo !== 'Riesgo RC'||tipo !== 'ART'||tipo !== 'Asistencia Mascota'||tipo !== 'Seguro Técnico'||tipo !== 'Pre Paga'||tipo !== 'Asistencia al Viajero'||tipo !== 'Flota'||tipo !== 'Otro'
                
                $('#requerido_tipo').show();     
                $("#eg_lead_tipo").focus();
                $("#eg_lead_tipo").select();
                respuesta = false;
            }else{
                $('#requerido_tipo').hide();
            }
            if(tipo === 'Auto' || tipo === 'Moto'){
                if(cobertura === ''){
                $('#requerido_cobertura').show();     
                $("#eg_lead_cobertura").focus();
                $("#eg_lead_cobertura").select();
                respuesta = false;
            }else{
                $('#requerido_cobertura').hide();
            }    
            }
            if(compania === ''){
                $('#requerido_compania').show();     
                $("#eg_lead_compania").focus();
                $("#eg_lead_compania").select();
                respuesta = false;
            }else{
                $('#requerido_compania').hide();
            }
               if(premio === ''){
                $('#requerido_premio').show();     
                $("#eg_lead_premio").focus();
                respuesta = false;
            }else{
                $('#requerido_premio').hide();
            }
                return respuesta;          
        }
         return respuesta;   
    }
    
    //Agregado 20220523_Ticket74707
        
    $('#eg_lead_telefono1').keyup(function (){
        $('#eg_lead_telefono1').val((this.value + '').replace(/[^0-9]/g, ''));
    });
       
    $('#eg_lead_telefono2').keyup(function (){
        $('#eg_lead_telefono2').val((this.value + '').replace(/[^0-9]/g, ''));
    });
       
    $('#eg_lead_telefono3').keyup(function (){
        $('#eg_lead_telefono3').val((this.value + '').replace(/[^0-9]/g, ''));
    });
        
    //Agregado 20220524_Validación de teléfonos
        
    function validar_telefonos(){

        var telefono1 = document.getElementById('eg_cliente_telefono1').value;
        var telefono2 = document.getElementById('eg_cliente_telefono2').value;
        var telefono3 = document.getElementById('eg_cliente_telefono3').value;

        telefono1.replace(/ /g,"");
        telefono2.replace(/ /g,"");
        telefono3.replace(/ /g,"");

        if(telefono1[0] === '5' || telefono1[0] === '6' || telefono1[0] === '7' || telefono1[0] === '8' || telefono1[0] === '9'){
            alert('El telefono  no puede empezar con esos digitos');  
            respuesta = false;
        }
        if(telefono2[0] === '5' || telefono2[0] === '6' || telefono2[0] === '7' || telefono2[0] === '8' || telefono2[0] === '9'){
            alert('El telefono 2 no puede empezar con esos digitos');  
            respuesta = false;
        }
        if(telefono3[0] === '5' || telefono3[0] === '6' || telefono3[0] === '7' || telefono3[0] === '8' || telefono3[0] === '9'){
            alert('El telefono 3 no puede empezar con esos digitos');  
            respuesta = false;
        }
        if(/([0-9])\1{5,}/.test(telefono1) ===true){
            alert('El telefono 1 no puede tener tantos digitos seguidos repetidos ');
            respuesta = false;
        }
        if(/([0-9])\1{5,}/.test(telefono2) ===true){
            alert('El telefono 2 no puede tener tantos digitos seguidos repetidos ');
            respuesta = false;
        }
        if(/([0-9])\1{5,}/.test(telefono3) ===true){
            alert('El telefono 3 no puede tener tantos digitos seguidos repetidos ');
            respuesta = false;
        }
        respuesta = true;
    }

    $("form").submit(function(event){
    //Controlar si la validación fue correcta, sino cancelar el evento submit

        if(validar_telefonos()==false){
            event.preventDefault();
            return false;  
        }
        else{
            if(validarRequeridos()){
            
                if($("#eg_lead_estado").val() == 'Activo' ||  $("#eg_lead_estado").val() == 'Venta'){
                    let estado = $("#eg_lead_estado").val();
                    let confirmar = confirm("¿Deseás cerrar la gestión como " + estado + "? Tené en cuenta que una vez finalizada la gestión con este estado no podrás editarlo nuevamente.");
                    if(confirmar !== true){
                        event.preventDefault();
                    }
                }
            
            }else{
                alert('Complete todos los datos por favor');
                event.preventDefault();
                return false;
            }
    
        }
    });    

}); // FIN DE TODO
