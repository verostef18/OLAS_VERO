$(function(){
	function ordenarSelect(id_componente){
		var selectToSort = jQuery('#' + id_componente);
		var optionActual = selectToSort.val();
		selectToSort.html(selectToSort.children('option').sort(function (a, b) {
			return a.text === b.text ? 0 : a.text < b.text ? -1 : 1;
		})).val(optionActual);
	}
    $(document).on('change', function () {
      ordenarSelect('eg_riesgo_subcanal');
	});
    
    
    var tipo = $("#eg_riesgo_tipo option:selected").text();
    
	function tipoa(){
		tipo = $("#eg_riesgo_tipo option:selected").text();
    
		if (tipo ==="Hogar"||tipo ==="Integral") {
			$("#eg_riesgo_metros_cuadrados").parent().parent().show();
		}else{
			$("#eg_riesgo_metros_cuadrados").parent().parent().hide();
		}
        if(tipo === "Auto"||tipo === "Moto"||tipo === "Flota"||tipo === "Hogar"||tipo === "ART"||tipo === "Asistencia al Hogar"||tipo === "Asistencia al Hogar"||tipo === "Asistencia Mascota"||tipo === "Asistencia al viajero"||tipo === "Flota"||tipo === "Vida"||tipo === "Prepaga"||tipo === "Masivo"||tipo === "Asistencia Hogar"||tipo === "Asistencia al Viajero"||tipo === "Pre Paga"){
            $("#eg_riesgo_renovacion_automatica").prop('checked', true);
            $("#eg_riesgo_renovacion_automatica").attr("disabled", true);
            if(tipo === "Moto"){
                 $("#eg_riesgo_renovacion_automatica").removeAttr("disabled");
            }
        }else{
            $("#eg_riesgo_renovacion_automatica").prop('checked', false);
            $("#eg_riesgo_renovacion_automatica").removeAttr("disabled");
        }
	}
	$("#eg_riesgo_tipo").on('change',function(){
        tipoa();
    });
	tipoa();

    function cuentas_pagar(){
		
    
		if ($('#eg_riesgo_pago_con_cobrador').prop("checked") || $('#eg_riesgo_pago_efectivo').prop("checked")) {
       
			$("#eg_riesgo_prox_cta_a_pagar").parent().parent().parent().show();
		}else{
			$("#eg_riesgo_prox_cta_a_pagar").parent().parent().parent().hide();
		}
    }
    $("#eg_riesgo_pago_con_cobrador").change(function(){
        cuentas_pagar();
    });
    $("#eg_riesgo_pago_efectivo").change(function(){
        cuentas_pagar();
    });
});
