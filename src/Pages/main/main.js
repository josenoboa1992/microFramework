

const token = localStorage.getItem("token");
document.addEventListener('DOMContentLoaded',()=>{
    saletoday();
    countsale();
    countcompany();
    countClient();
})
$(document).ready(function(){

    // Datapicker
    $( ".datepicker" ).datepicker({
        "dateFormat": "yy-mm-dd",
        changeYear: true
    });
    let es = {
        "sProcessing":     "Procesando...",
        "sLengthMenu":     "Mostrar _MENU_ registros",
        "sZeroRecords":    "No se encontraron resultados",
        "sEmptyTable":     "Ningún dato disponible en esta tabla =(",
        "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
        "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
        "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
        "sInfoPostFix":    "",
        "sSearch":         "Buscar:",
        "sUrl":            "",
        "sInfoThousands":  ",",
        "sLoadingRecords": "Cargando...",
        "oPaginate": {
            "sFirst":    "Primero",
            "sLast":     "Último",
            "sNext":     "Siguiente",
            "sPrevious": "Anterior"
        },
        "oAria": {
            "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
            "sSortDescending": ": Activar para ordenar la columna de manera descendente"
        },
        "buttons": {
            "copy": "Copiar",
            "colvis": "Visibilidad"
        }
    }

    // Iniciamos el DataTable
    let dataTable = $('#Tabla_fact_resume').DataTable({
        "rowCallback":function (row,data,index){
            // Aplicar estilo a las filas
            $(row).css("font-size", "12px"); // Ajusta el tamaño de fuente según tus necesidades

            // Aplicar estilo a las celdas
            $("td", row).css("font-weight", "bold");
            $("td", row).css("color", " rgba(0, 0, 0, 0.55)");
        },
        "orderCellsTop": true,
        "fixedHeader": false,
        "destroy" : true,
        "language": es,
        "order": [[0, "desc"]],
        'ajax': {
            method: "GET",
            url: "http://api.local/resumetrans/",
            headers: {
                Authorization: `Bearer ${token}`
            },
            dataSrc: "data",
        },
        columns: [
            { data: 'ID' },
            { data: 'Descripcion' },
            { data: 'Nombre' },
            { data: 'Empresa' },
            { data: 'Débito' },
            { data: 'Crédito' },
            { data: 'Fecha' },
            { data: 'Hora' }, // Asegúrate de que esta columna esté en tu API
        ],
        // Footer Callback para los totales
        "footerCallback": function (row, data, start, end, display) {


        }
    });
});

let sale=document.getElementById('saletoday');
function saletoday() {

        (async function () {
            try {
                let request = await fetch(`http://api.local/saletoday/`, {
                    headers: {"Content-Type":"application/json" , Authorization: `Bearer ${token}`},
                    method: 'get',
                });

                let response = await request.json();

                let monto_venta=response.data[0].total_ventas;
                let numeroDecimal = parseFloat(monto_venta);
                sale.textContent='RD$ ' + numeroDecimal.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

                if (response.status == "error") {
                    document.getElementById('btnCloseUserDelete').click();
                    error("messageUserDelete","alert-danger" , response.message);
                } else if (response.status == "ok") {
                    reloadUserTable();
                    document.getElementById('btnCloseUserDelete').click();
                    error("messageUserDelete","alert-success" , response.message);
                } else {
                    document.getElementById('btnCloseUserDelete').click();
                    error("messageUserDelete","alert-danger" , "Algo salió mal");
                }
            } catch (error) {
            }
        })();

}


let sale_cantidad=document.getElementById('countsale');
function countsale() {

    (async function () {
        try {
            let request = await fetch(`http://api.local/countsale/`, {
                headers: {"Content-Type":"application/json" , Authorization: `Bearer ${token}`},
                method: 'get',
            });

            let response = await request.json();

            let monto_count=response.data[0].cantidad_ordenes_completadas;

            sale_cantidad.textContent=monto_count;

            if (response.status == "error") {
                document.getElementById('btnCloseUserDelete').click();
                error("messageUserDelete","alert-danger" , response.message);
            } else if (response.status == "ok") {
                reloadUserTable();
                document.getElementById('btnCloseUserDelete').click();
                error("messageUserDelete","alert-success" , response.message);
            } else {
                document.getElementById('btnCloseUserDelete').click();
                error("messageUserDelete","alert-danger" , "Algo salió mal");
            }
        } catch (error) {
        }
    })();

}



let count_count=document.getElementById('countcompany');
function countcompany() {

    (async function () {
        try {
            let request = await fetch(`http://api.local/countcompany/`, {
                headers: {"Content-Type": "application/json", Authorization: `Bearer ${token}`},
                method: 'get',
            });

            let response = await request.json();

            let company_count = response.data[0].cantidad;

            count_count.textContent = company_count;

            if (response.status == "error") {
                document.getElementById('btnCloseUserDelete').click();
                error("messageUserDelete", "alert-danger", response.message);
            } else if (response.status == "ok") {
                reloadUserTable();
                document.getElementById('btnCloseUserDelete').click();
                error("messageUserDelete", "alert-success", response.message);
            } else {
                document.getElementById('btnCloseUserDelete').click();
                error("messageUserDelete", "alert-danger", "Algo salió mal");
            }
        } catch (error) {
        }
    })();
}

let count_user=document.getElementById('countuser');
function countClient() {

    (async function () {
        try {
            let request = await fetch(`http://api.local/countclient/`, {
                headers: {"Content-Type": "application/json", Authorization: `Bearer ${token}`},
                method: 'get',
            });

            let response = await request.json();

            let user_count = response.data[0].cantidad;

            count_user.textContent = user_count;

            if (response.status == "error") {
                document.getElementById('btnCloseUserDelete').click();
                error("messageUserDelete", "alert-danger", response.message);
            } else if (response.status == "ok") {
                reloadUserTable();
                document.getElementById('btnCloseUserDelete').click();
                error("messageUserDelete", "alert-success", response.message);
            } else {
                document.getElementById('btnCloseUserDelete').click();
                error("messageUserDelete", "alert-danger", "Algo salió mal");
            }
        } catch (error) {
        }
    })();
}
