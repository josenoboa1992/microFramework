import error from '../../Helpers/error.js';
import config from '../../Helpers/config.js';
import convertFormatHour from "../../Helpers/error.js";

document.addEventListener('DOMContentLoaded', () => {
    $('#UserSave').slideUp();
    // disabledUserForm();
    showAllCompany();
    // allCompany();
    // getRol()

    //hiddenUserTable();
    //disabledUserTable();
})

let companyTabledo;

/****************************************Obtener los datos del usuario a borrar**************************************************/
let getDataUserDelete = function(){
    $("#companyTable").on("click","button.delete", function () {

        // let data = companyTabledo.row( $(this).parents("tr") ).data();
        // document.getElementById('textUserDelete').textContent = "¿Quieres Eliminar el siguiente usuario? : "+data['Nombre_Usuario'];
        // document.getElementById('idDelete').value = data['ID'];
    });
}

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
const showAllCompany = () =>{

    companyTabledo = $('#companyTable').DataTable({
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
            "url" : `${config.API}company/`,
            "headers": {
                Authorization: `Bearer ${config.token}`
            }
        },
        'columns' :[
            {"data" : "ID"},
            {"data" : "Nombre"},


            {"defaultContent" : "<button type='button' class='delete' data-bs-toggle='modal' data-bs-target='#modalUserDelete'><i class='fa fa-trash' aria-hidden='true'></i></button>" +
                    "<button type='button' class='edit' data-bs-toggle='modal' data-bs-target='#updateUser'><i class='fa fa-edit' aria-hidden='true'></i></button>" +
                    "<button type='button' class='detail' data-bs-toggle='modal' data-bs-target='#detailsUser'><i class='fa fa-eye' aria-hidden='true'></i></button>"
            }
        ],
        "columnDefs": [   // atributo para ocultar columna
            // {"targets": [0],"visible": false,"searchable": false},
            {"targets": [0], "width": "10%"},
            {"targets": [1], "width": "10%"},
            {"targets": [2], "width": "10%"},



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
    getDataUserDelete();
}

/****Recargar la tabla de usuario****/
const reloadUserTable = () => {
    companyTabledo.ajax.reload();
}
