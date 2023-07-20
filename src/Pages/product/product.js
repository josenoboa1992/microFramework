import error from '../../Helpers/error.js';
import config from '../../Helpers/config.js';
import convertFormatHour from "../../Helpers/error.js";

document.addEventListener('DOMContentLoaded', () => {    console.log('hola mundo');

getRolUpdate();
    showAllproduct();
    showAllcat();

})


/*****************************************************************************
 *                               traer datos de rol                  *
 ******************************************************************************/
async function getRolUpdate() {
    try {
        const request = await fetch(`${config.API}product/`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${config.token}`
            }
        });
        const response = await request.json();
        console.log(response);
        if (response.status === "error") {
            console.log(response)
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


// Define the 'es' object with language translations
let es = {
    "sProcessing": "Procesando...",
    "sLengthMenu": "Mostrar _MENU_ registros",
    "sZeroRecords": "No se encontraron resultados",
    "sEmptyTable": "Ningún dato disponible en esta tabla =(",
    "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
    "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
    "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
    "sInfoPostFix": "",
    "sSearch": "Buscar:",
    "sUrl": "",
    "sInfoThousands": ",",
    "sLoadingRecords": "Cargando...",
    "oPaginate": {
        "sFirst": "Primero",
        "sLast": "Último",
        "sNext": "Siguiente",
        "sPrevious": "Anterior"
    },
    "oAria": {
        "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
        "sSortDescending": ": Activar para ordenar la columna de manera descendente"
    },
    "buttons": {
        "copy": "Copiar",
        "colvis": "Visibilidad"
    }
};

// Declare productTable variable to hold DataTable instance
let productTable;
let catTable

// Function to initialize and show the product table
const showAllproduct = () => {
    productTable = $('#proTable').DataTable({
        "rowCallback": function (row, data, index) {
            // Apply style to rows
            $(row).css("font-size", "12px");
            // Apply style to cells
            $("td", row).css("font-weight", "bold");
            $("td", row).css("color", "rgba(0, 0, 0, 0.55)");
        },
        "orderCellsTop": true,
        "fixedHeader": false,
        "destroy": true,
        "language": es,
        'ajax': {
            "method": "GET",
            "url": `${config.API}product/`,
            "headers": {
                "Content-Type": "application/json",
                Authorization: `Bearer ${config.token}`
            }
        },
        'columns': [
            {"data": "ID"},
            {"data": "Usuario"},
            {"data": "Categoría"},
            {"data": "Producto"},
            {"data": "Descripción"},
            {"data": "Precio"},
            {
                "data": "Imagen",
                "render": function (data, type, row) {
                    return `<img src="${data}" alt="Imagen del producto" width="100" height="100" class="image-data">`;
                }
            },
            {"data": "Fecha"},
            {"data": "Estado"},
            {
                "defaultContent": `
          <button type='button' class='delete' data-bs-toggle='modal' data-bs-target='#modalUserDelete'>
            <i class='fa fa-trash' aria-hidden='true'></i>
          </button>
          <button type='button' class='edit' data-bs-toggle='modal' data-bs-target='#updateUser'>
            <i class='fa fa-edit' aria-hidden='true'></i>
          </button>
          <button type='button' class='detail' data-bs-toggle='modal' data-bs-target='#detailsUser'>
            <i class='fa fa-eye' aria-hidden='true'></i>
          </button>
        `
            }
        ],
        "columnDefs": [
            {"targets": [0], "visible": false, "searchable": false},
            {"targets": [1], "width": "20%"},
            {"targets": [2], "width": "20%"},
            {"targets": [3], "width": "20%"},
            {"targets": [4], "width": "20%"},
            {"targets": [5], "width": "20%"},
            {"targets": [6], "width": "20%"},
            {"targets": [7], "width": "20%"},
            {"targets": [8], "width": "20%"},
            {"targets": [9], "width": "30%"},
        ],
        "responsive": true,
        dom: 'Bfrtilp',
        "buttons": [
            {
                extend: "excelHtml5",
                text: '<i class="fa fa-file-excel" aria-hidden="true"></i>',
                titleAttr: 'Excel',
                className: "btn btn-outline-success",
                exportOptions: {
                    columns: [1, 2,3]
                }
            }
        ]
    });
};
console.log(productTable)
// Function to reload the product table
const reloadProductTable = () => {
    productTable.ajax.reload();
};


//*************** Tabla categoria* **************************/
const showAllcat = () => {
    catTable = $('#catTable').DataTable({
        "rowCallback": function (row, data, index) {
            // Apply style to rows
            $(row).css("font-size", "12px");
            // Apply style to cells
            $("td", row).css("font-weight", "bold");
            $("td", row).css("color", "rgba(0, 0, 0, 0.55)");
        },
        "orderCellsTop": true,
        "fixedHeader": false,
        "destroy": true,
        "language": es,
        'ajax': {
            "method": "GET",
            "url": `${config.API}category/`,
            "headers": {
                "Content-Type": "application/json",
                Authorization: `Bearer ${config.token}`
            }
        },
        'columns': [
            {"data": "category_id"},
            {"data": "name"},
            {
                "data": "url",
                "render": function (data, type, row) {
                    return `<img src="${data}" alt="Imagen del producto" width="100" height="100" class="image-data">`;
                }
            },
            {
                "defaultContent": `
          <button type='button' class='delete' data-bs-toggle='modal' data-bs-target='#modalUserDelete'>
            <i class='fa fa-trash' aria-hidden='true'></i>
          </button>
          <button type='button' class='edit' data-bs-toggle='modal' data-bs-target='#updateUser'>
            <i class='fa fa-edit' aria-hidden='true'></i>
          </button>
          <button type='button' class='detail' data-bs-toggle='modal' data-bs-target='#detailsUser'>
            <i class='fa fa-eye' aria-hidden='true'></i>
          </button>
        `
            }
        ],
        "columnDefs": [
            {"targets": [0], "width": "30%"},
            {"targets": [1], "width": "30%"},
            {"targets": [2], "width": "30%"},

        ],
        "responsive": true,
        dom: 'Bfrtilp',
        "buttons": [
            {
                extend: "excelHtml5",
                text: '<i class="fa fa-file-excel" aria-hidden="true"></i>',
                titleAttr: 'Excel',
                className: "btn btn-outline-success",
                exportOptions: {
                    columns: [1, 2,3]
                }
            }
        ]
    });
};
console.log(catTable)
// Function to reload the product table
const reloadCatTable = () => {
    catTable.ajax.reload();
};