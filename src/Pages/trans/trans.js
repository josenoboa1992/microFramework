
const token = localStorage.getItem("token");

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
    let dataTable = $('#Tabla_personal').DataTable({
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
        'ajax': {
            method: "GET",
            url: "http://api.local/transaction/",
            headers: {
                Authorization: `Bearer ${token}`
            },
            dataSrc: "data",
            data: function (data) {
                let fechaDesde = $('#buscar_inicio').val();
                let fechaHasta = $('#buscar_fin').val();
                if (fechaDesde && fechaHasta) {
                    data.urlParam = `${fechaDesde}/${fechaHasta}`;
                } else {
                    delete data.urlParam;
                }
            }
        },
        columns: [
            { data: 'ID' },
            { data: 'Descripcion' },
            { data: 'Nombre' },
            { data: 'Débito' },
            { data: 'Crédito' },
            { data: 'Fecha' },
            { data: 'Hora' }, // Asegúrate de que esta columna esté en tu API
        ],
        // Footer Callback para los totales
        "footerCallback": function (row, data, start, end, display) {
            let api = this.api();

            // Total de débitos
            let totalDebitos = api.column(3, {page: 'current'}).data().reduce(function (a, b) {
                return a + parseFloat(b);
            }, 0);

            // Total de créditos
            let totalCreditos = api.column(4, {page: 'current'}).data().reduce(function (a, b) {
                return a + parseFloat(b);
            }, 0);

            // Formatea los totales con comas y el símbolo de moneda
            $('#totalDebitos').html('Débito: ' + formatCurrency(totalDebitos));
            $('#totalCreditos').html('Crédito: ' + formatCurrency(totalCreditos));
        }
        });


    // Función para dar formato de moneda
    function formatCurrency(amount) {
        return new Intl.NumberFormat('es-DO', { style: 'currency', currency: 'DOP' }).format(amount);
    }

    // Boton Buscar
    $('#btn_search').click(function () {
        let fechaDesde = $('#buscar_inicio').val();
        let fechaHasta = $('#buscar_fin').val();
        let url = `http://api.local/transaction/${fechaDesde}/${fechaHasta}`;

        // Actualiza la URL del objeto DataTable
        dataTable.ajax.url(url).load();
    });

    $("#btnLimpiar").click(function (event) {
        $("#formFecha")[0].reset();
        dataTable.ajax.url("http://api.local/transaction/").load(); // Carga todos los datos
    });
});