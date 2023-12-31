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
    let dataTable = $('#Tabla_fact').DataTable({
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
            url: "https://api.worldingfoods.com/fact-sale/",
            headers: {
                Authorization: `Bearer ${token}`
            },
            dataSrc: "data",
            data: function (data) {
                let fechaDesde = $('#buscar_inicio_sale').val();
                let fechaHasta = $('#buscar_fin_sale').val();
                if (fechaDesde && fechaHasta) {
                    data.urlParam = `${fechaDesde}/${fechaHasta}`;
                } else {
                    delete data.urlParam;
                }
            }
        },
        columns: [
            { data: "ID" },
            { data: "Nombre" },
            { data: "Total" },
            { data: "DiaSemana" },
            { data: "Fecha" },
            { data: "Estado" },

        ],
    });


    // Función para dar formato de moneda
    function formatCurrency(amount) {
        return new Intl.NumberFormat('es-DO', { style: 'currency', currency: 'DOP' }).format(amount);
    }

    // Boton Buscar
    $('#btn_search_sale').click(function () {
        let fechaDesde = $('#buscar_inicio_sale').val();
        let fechaHasta = $('#buscar_fin_sale').val();
        let url = `https://api.worldingfoods.com/fact-sale/${fechaDesde}/${fechaHasta}`;

        // Actualiza la URL del objeto DataTable
        dataTable.ajax.url(url).load();
    });

    $('#generar_PDF').click(function (e) {
        e.preventDefault();
        let fechaDesde = $('#buscar_inicio_sale').val();
        let fechaHasta = $('#buscar_fin_sale').val();

        fetch('https://api.worldingfoods.com/pdfsale/' + fechaDesde + '/' + fechaHasta, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('La solicitud no fue exitosa');
                }
                return response.blob();
            })
            .then(pdfBlob => {
                // Aquí tienes el PDF en forma de blob
                // Continúa con los siguientes pasos para imprimirlo o descargarlo
                var blobUrl = window.URL.createObjectURL(pdfBlob);

                // Crear un elemento de enlace (a) para iniciar la descarga
                var a = document.createElement('a');
                a.href = blobUrl;
                a.download = 'reporte-venta.pdf'; // Establecer el nombre del archivo

                // Simular un clic en el enlace para iniciar la descarga
                a.click();

                // Liberar la URL del Blob
                window.URL.revokeObjectURL(blobUrl);

                // Mostrar un mensaje de éxito
                Swal.fire({
                    icon: 'success',
                    title: 'PDF generado y descargado correctamente',
                    text: 'El reporte PDF se generó y descargó correctamente.'
                });
            })
            .catch(error => {
                console.error('Error al obtener el PDF desde la API:', error);
                // Manejar errores aquí
                Swal.fire({
                    icon: 'error',
                    title: 'Error al generar o descargar el PDF',
                    text: 'Ocurrió un error al generar o descargar el informe PDF.'
                });
            });
    });



    $("#btnLimpiar_sale").click(function (event) {
        $("#formFechaSale")[0].reset();
        dataTable.ajax.url("https://api.worldingfoods.com/fact-sale/").load(); // Carga todos los datos
    });
});
