
const token = localStorage.getItem("token");
const url = new URL(window.location.href);

// Obtén el ID de la URL
const id = url.pathname.split('/')[2];
console.log(id)

document.addEventListener('DOMContentLoaded',()=>{
    showAllCompany(id);
})
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

/*****************************************************************************************
 *                                       Functions                                        *
 ******************************************************************************************/






/********************Mostrar datos de la tabla usuarios*************************/
let orderCompany;
const showAllCompany = (id) =>{

    orderCompany= $('#orderLitaTable').DataTable({
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
        'ajax' : {
            "method" : "GET",
            "url" : `https://api.worldingfoods.com/list-order/${id}`,
            "headers": {
                Authorization: `Bearer ${token}`
            }
        },
        'columns': [
            { "data": "ID_Orden"},
            { "data": "Number_client"},
            { "data": "Company"},
            { "data": "Name"},
            {     "data": "Preparation",
                "render": function (data, type, row) {
                    var preparationData = JSON.parse(data);
                    var preparationString = "";

                    preparationData.forEach(function (item) {
                        preparationString += item.product_name + " (" + item.quantity + ")";
                        if (item.garnishes.length > 0) {
                            preparationString += " - Guarnición: ";
                            item.garnishes.forEach(function (garnish) {
                                preparationString += garnish.name + ", ";
                            });
                            preparationString += " - Hora de Entrega: ";
                            preparationString += item.horaEntrega;
                            preparationString = preparationString.slice(0, -2); // Elimina la última coma y espacio
                        }
                        preparationString += "\n";
                    });

                    return preparationString;
                }
            },
            {"data": "Monto_Total"},
            {"data": "Direction"},
            {"data": "telephone"},
            {"data": "Estado_Orden"},
            {"data": "Fecha_Creación"},
        ],
        "columnDefs": [   // atributo para ocultar columna
            // {"targets": [0],"visible": false,"searchable": false},
            {"targets": [0], "width": "10%"},
            {"targets": [1], "width": "10%"},
            {"targets": [2], "width": "10%"},
            {"targets": [3], "width": "10%"},



        ],
        "responsive":  "true",
        dom: 'Bfrtilp',
        "buttons":[
            {
                extend:      "excelHtml5",
                text:       '<i class="fa fa-file-excel" aria-hidden="true"></i>',
                titleAttr:  'Excel',
                className:   "btn btn-outline-success",
                exportOptions: {
                    columns: [1,2,3,4,5,6,7,8,9,10]
                }
            }
        ]
    });
    console.log()
}

document.getElementById('printLabels').addEventListener('click', function () {
    var orders = orderCompany.rows().data(); // Obtener todos los datos de las órdenes

    var labelsContent = '';

    orders.each(function (order) {
        var preparationData = JSON.parse(order.Preparation);
        var preparationString = '';
        var garnishString = '';

        preparationData.forEach(function (item) {
            preparationString += item.product_name + " (" + item.quantity + "), ";
            if (item.garnishes.length > 0) {
                garnishString += "Guarnición: ";
                item.garnishes.forEach(function (garnish) {
                    garnishString += garnish.name + ", ";
                });
                garnishString = garnishString.slice(0, -2); // Elimina la última coma y espacio
            }
        });

        var horaEntrega = preparationData[0].horaEntrega; // Suponiendo que la hora de entrega está en el primer elemento del array de preparación
        var orderLabel = `
            <div class="label">
                <h2>Orden ${order.ID_Orden}</h2>
                <div class="info-container">
                    <p>#Cliente: ${order.Number_client}</p>
                    <p>Empresa: ${order.Company}</p>
                    <p>Nombre: ${order.Name}</p>
                    <p>Preparación: ${preparationString.slice(0, -2)}</p>
                    ${garnishString ? `<p>${garnishString}</p>` : ''}
                    <p>Monto: ${order.Monto_Total}</p>
                    <p>Dirección: ${order.Direction}</p>
                    <p>Teléfono: ${order.telephone}</p>
                    <p>Estado: ${order.Estado_Orden}</p>
                    <p>Fecha: ${order.Fecha_Creación}</p>
                    <p>Hora de Entrega: ${horaEntrega}</p>
                </div>
            </div>
        `;

        labelsContent += orderLabel;
    });

    var printWindow = window.open('', '_blank');
    printWindow.document.open();
    printWindow.document.write(`
        <html>
            <head>
                <title>Etiquetas de Órdenes</title>
                <style>
                    .labels-container {
                        display: flex;
                        flex-wrap: wrap;
                    }
                    .label {
                        border: 1px solid #000;
                        padding: 5px;
                        margin: 5px;
                        max-width: 300px;
                    }
                    .info-container {
                        display: flex;
                        flex-direction: row;
                        flex-wrap: wrap;
                    }
                    .info-container p {
                        margin: 0 10px 0 0;
                    }
                </style>
            </head>
            <body>
                <div class="labels-container">
                    ${labelsContent}
                </div>
            </body>
        </html>
    `);
    printWindow.document.close();
    printWindow.print();
});

document.getElementById('updateEstado').addEventListener('click', function() {
    var selectedEstado = document.getElementById('estadoOrden').value;
    // var orders = orderCompany.rows().data();

  enviarDatos(id,selectedEstado)
});



    // URL del endpoint al que quieres enviar los datos
    async function enviarDatos(idEmpresa, status) {
        try {
            const request = await fetch(`https://api.worldingfoods.com/list-order/${status}/${idEmpresa}`, {
                method:'PUT',
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            });
            const response = await request.json();

            Swal.fire({
                title: 'Éxito',
                text: 'Ordenes actualizada correctamente',
                icon: 'success'
            }).then(() => {
                reloadUserTable();
            });



            if (response.status === "error") {
                error("errorSaveUser", "alert-danger", response.message);
            } else if (Array.isArray(response.data)) { // Verificar si response.data es un array

            } else {
                error("errorSaveUser","alert-danger","API_ERROR");
                console.error("La propiedad data no es un array:", response);
            }
        } catch (e) {
            error("errorSaveUser","alert-danger","API_ERROR");
            console.error("Error en la función allCompany:", e);
        }
    }

const reloadUserTable = () => {
    orderCompany.ajax.reload();
}
