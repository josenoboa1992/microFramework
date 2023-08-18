
import config from '../../Helpers/config.js';
import convertFormatHour from "../../Helpers/error.js";

document.addEventListener('DOMContentLoaded', () => {
    // disabledUserForm();
    showAllDeposit()
    // allCompany();
    // getRol()

    //hiddenUserTable();
    // Mostrar u ocultar detalles al hacer clic en la celda
    $('#saleTable').on('click', '.instruction-cell', function () {
        const target = $(this).data('target');
        $(target).toggleClass('show');
        $(this).toggleClass('hide');
    });


})

let  saleTabledo;
/****************************************Obtener los datos del usuario a borrar**************************************************/
let getDataUserDelete = function(){
    $("#saleTable").on("click","button.delete", function () {

        // let data = companyTabledo.row( $(this).parents("tr") ).data();
        // document.getElementById('textUserDelete').textContent = "¿Quieres Eliminar el siguiente usuario? : "+data['Nombre_Usuario'];
        // document.getElementById('idDelete').value = data['ID'];
    });
}

const estadoTraducido = {
    "completed": "Completado",
    "cancelled": "Cancelado",
    // Agregar otras traducciones según sea necesario
};
/*************************************Lenguaje de Datatable***************************************/
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
const showAllDeposit = () => {
    saleTabledo = $('#saleTable').DataTable({
        "rowCallback": function(row, data, index) {
            // Aplicar estilo a las filas
            $(row).css("font-size", "12px"); // Ajusta el tamaño de fuente según tus necesidades

            // Aplicar estilo a las celdas
            $("td", row).css("font-weight", "bold");
            $("td", row).css("color", " rgba(0, 0, 0, 0.55)");
        },
        "orderCellsTop": true,
        "fixedHeader": false,
        "destroy": true,
        "language": es,
        "order": [[0, "desc"]],
        'ajax': {
            "method": "GET",
            "url": `${config.API}sale/`,
            "headers": {
                Authorization: `Bearer ${config.token}`
            }
        },
        'columns': [
            {"data": "ID"},
            {"data": "Nombre"},
            {"data": "Total"},
            {
                "data": "preparation_instructions",
                "render": function(data, type, row) {
                    if (type === "display") {
                        if (data && data.length > 0) {
                            const jsonData = JSON.parse(data);
                            const product = jsonData[0];

                            const maxChars = 10;
                            const productName = product.product_name && product.product_name.length > maxChars ?
                                product.product_name.substring(0, maxChars) + "..." :
                                product.product_name;
                            const horaEntrega = product.horaEntrega && product.horaEntrega.length > maxChars ?
                                product.horaEntrega.substring(0, maxChars) + "..." :
                                product.horaEntrega;
                            const quantity = product.quantity && product.quantity.length > maxChars ?
                                product.quantity.substring(0, maxChars) + "..." :
                                product.quantity;

                            const abbreviatedInfo = `
                                <p class="d-inline-block">${productName} ${product.horaEntrega+'...'}</p>
                                <a href="javascript:void(0);" class="show-details text-gray">Ver más</a>`;

                            const fullDetails = `
                                <div class="instruction-details">
                                    <p class="text-primary"> Detalles completos:</p><br>
                                    <strong>Producto:</strong> ${product.product_name}<br>
                                    <strong>Hora Entrega:</strong> ${product.horaEntrega}<br>
                                    <strong>Cantidad:</strong> ${product.quantity}
                                </div>`;

                            return `
                                <div class="instruction-cell" data-toggle="collapse" data-target="#instructionCollapse${row.ID}">
                                    ${abbreviatedInfo}
                                </div>
                                <div id="instructionCollapse${row.ID}" class="collapse instruction-details">
                                    ${fullDetails}
                                </div>`;
                        } else {
                            return "<strong>No tiene</strong>";
                        }
                    }
                    return data;
                }
            },
            {"data": "DiaSemana"},
            {"data": "Fecha"},
            {
                "data": "Estado",
                "render": function(data, type, row) {
                    if (type === "display") {
                        const estado = estadoTraducido[data] || data;
                        const colorClass = data === "completed" ? "text-gray" : (data === "cancelled" ? "text-gray" : "");
                        const circleClass = data === "completed" ? "circle-green" : (data === "cancelled" ? "circle-red" : "");
                        return `
                            <div class="d-flex align-items-center">
                                <div class="status-circle ${circleClass}"></div>
                                <span class="${colorClass}">${estado}</span>
                            </div>`;
                    }
                    return data;
                }
            },
        ],
        "columnDefs": [
            {"targets": [0], "width": "10%"},
            {"targets": [1], "width": "15%"},
            {"targets": [2], "width": "10%"},
            {"targets": [3], "width": "20%"},
            {"targets": [4], "width": "15%"},
            {"targets": [5], "width": "15%"},
            {"targets": [6], "width": "15%"},
        ],
        "responsive": "true",
        dom: 'Bfrtilp',
        "buttons": [
            {
                extend: "excelHtml5",
                text: '<i class="fa fa-file-excel" aria-hidden="true"></i>',
                titleAttr: 'Excel',
                className: "btn btn-outline-success",
                exportOptions: {
                    columns: [1, 2, 3, 4, 5, 6]
                }
            }
        ]
    });
};
