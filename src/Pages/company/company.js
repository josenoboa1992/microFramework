import error from '../../Helpers/error.js';
import config from '../../Helpers/config.js';
import convertFormatHour from "../../Helpers/error.js";

document.addEventListener('DOMContentLoaded', () => {
    $('#companySave').slideUp();
    // disabledUserForm();
    showAllCompany();
    // allCompany();
    // getRol()

    //hiddenUserTable();
    disabledCompanyForm();
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
            {"data" : "Dirección"},
            {"data" : "Tipo_Documento"},
            {"data" : "Documento"},
            {"data" : "Representante"},
            {"data" : "email"},
            {"data" : "Cantidad_de_empleado"},
            {"data" : "Contacto"},
            {"data" : "Estado"},


            {"defaultContent" : "<button type='button' class='delete' data-bs-toggle='modal' data-bs-target='#modalCompanyDelete'><i class='fa fa-trash' aria-hidden='true'></i></button>" +
                    "<button type='button' class='edit' data-bs-toggle='modal' data-bs-target='#updateUser'><i class='fa fa-edit' aria-hidden='true'></i></button>"
            }
        ],
        "columnDefs": [   // atributo para ocultar columna
            // {"targets": [0],"visible": false,"searchable": false},
            {"targets": [0], "width": "10%"},
            {"targets": [1], "width": "10%"},
            {"targets": [2], "width": "10%"},
            {"targets": [3], "width": "10%"},
            {"targets": [4], "width": "10%"},
            {"targets": [5], "width": "10%"},
            {"targets": [6], "width": "10%"},
            {"targets": [7], "width": "10%"},
            {"targets": [8], "width": "10%"},
            {"targets": [9], "width": "30%"},



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
const reloadCompanyTable = () => {
    companyTabledo.ajax.reload();
}


/*****************Ocultar ventana para registrar usuario********************/
document.getElementById('btnCloseCompanySave').addEventListener('click' , e =>{
    e.preventDefault();
    $('#companySave').slideUp();
    document.getElementById('btnCompanySave').style.display = '';
})


/*****************Mostrar ventana para registrar usuario********************/
document.getElementById('btnCompanySave').addEventListener('click' , e =>{
    e.preventDefault();
    $('#companySave').slideDown();
  document.querySelector('#btnCompanySave').style.display="none";
})

/*********************BTN Habilitar formulario de usuario***************/
document.getElementById('btnCompanyEnable').addEventListener('click', e => {
    e.preventDefault();
    enableUserForm();
})

/*********************BTN Actualizar la tabla de usuario*******************/
document.getElementById('btnReloadCompanyTable').addEventListener('click', e => {
    e.preventDefault();
    reloadCompanyTable();
})
document.getElementById('btnCompanyDisabled').addEventListener('click', e => {
    e.preventDefault();
    clearCompanyForm();
    disabledCompanyForm();
})


/*********************Liempiar empresa*******************/
document.getElementById('btnCompanyClear').addEventListener('click' , e =>{
    e.preventDefault();
clearCompanyForm();
})


/*********Función para deshabilitar el formulario de empresa********/
const disabledCompanyForm = () => {

    document.getElementById('name-company').disabled=true;
    document.getElementById('Company-address').disabled=true;
    document.getElementById('Company-contact').disabled=true;
    document.getElementById('Company-email').disabled=true;
    document.getElementById('Company-phone').disabled=true;
    document.getElementById('Company-document').disabled=true;
    document.getElementById('Company-employee-count').disabled=true;
    document.getElementById('Company-representative').disabled=true;
    document.getElementById('Company-type-document').disabled=true;

    document.getElementById('btnCompanyRegister').disabled = true;
    document.getElementById('btnCompanyClear').disabled = true;
    document.getElementById('btnCompanyEnable').disabled = false;
    document.getElementById('btnCompanyRegister').style.display = 'none';
    document.getElementById('btnCompanyClear').style.display = 'none';
    document.getElementById('btnCompanyDisabled').style.display = 'none';
    document.getElementById('btnCompanyEnable').style.display = '';
}




/*********Función para limpiar el formulario de empresa********/
const clearCompanyForm=()=>{
    document.getElementById('name-company').value="";
    document.getElementById('Company-address').value="";
    document.getElementById('Company-contact').value="";
    document.getElementById('Company-email').value="";
    document.getElementById('Company-phone').value="";
    document.getElementById('Company-document').value="";
    document.getElementById('Company-employee-count').value="";
    document.getElementById('Company-representative').value="";
    document.getElementById('Company-type-document').value="";
}
/*********Función para habilitar el formulario de empresa********/
const enableUserForm = () => {

    document.getElementById('name-company').disabled=false;
    document.getElementById('Company-address').disabled=false;
    document.getElementById('Company-contact').disabled=false;
    document.getElementById('Company-email').disabled=false;
    document.getElementById('Company-phone').disabled=false;
    document.getElementById('Company-document').disabled=false;
    document.getElementById('Company-type-document').disabled=false;
    document.getElementById('Company-employee-count').disabled=false;
    document.getElementById('Company-representative').disabled=false;

    document.getElementById('btnCompanyRegister').disabled = false;
    document.getElementById('btnCompanyClear').disabled = false;
    document.getElementById('btnCompanyEnable').disabled = true;
    document.getElementById('btnCompanyDisabled').disabled = false;
    document.getElementById('btnCompanyEnable').style.display = 'none';
    document.getElementById('btnCompanyRegister').style.display = '';
    document.getElementById('btnCompanyClear').style.display = '';
    document.getElementById('btnCompanyDisabled').style.display = '';
}

/**************Registrar empresa ************************/
const formCompany = document.getElementById('frmSaveCompany');
formCompany.addEventListener('submit', async (e) => {
    e.preventDefault();
    config.validateToken();

    const body = {};

    const formData = new FormData(document.querySelector('#frmSaveCompany'));
    formData.forEach((value, key) => (body[key] = value));

    try {
        const request = await fetch(`${config.API}company/`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${config.token}`,
            },
            method: "POST",
            body: JSON.stringify(body),
        });

        const response = await request.json();
        if (response.status=='ok'){
            clearCompanyForm();
            disabledCompanyForm();
            reloadCompanyTable();
            error('errorSaveCompany','alert-success',response.message);
        }else if(response.status=="error"){
            error("errorSaveCompany",'alert-danger',response.message);
        }
    } catch (e) {
       console.log(e);
        error('errorSaveCompany','alert-danger',response.message);
    }
});


$("#companyTable").on("click", "button.delete", async function () {
    let data = companyTabledo.row($(this).parents("tr")).data();
    console.log(data);

    if (data && data.hasOwnProperty('ID')) {
        let ID = data['ID'];
        let name = data['Nombre'];
        console.log(ID);

        let message = "¿Realmente desea eliminar la empresa " + name + "?";
        document.getElementById('textCompanyDelete').textContent = message;

        let btnDelete = document.getElementById('btnCompanyDelete');
        btnDelete.addEventListener('click', async () => {
            try {
                let request = await fetch(`${config.API}company/${ID}`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${config.token}`
                    },
                    method: 'DELETE'
                });
                let response = await request.json();

                if (response.status == "error") {
                    document.getElementById('btnCloseCompanyDelete').click();
                    error("messageCompanyDelete","alert-danger" , response.message);
                } else if (response.status == "ok") {
                    reloadCompanyTable()
                    document.getElementById('btnCloseCompanyDelete').click();
                    error("messageCompanyDelete","alert-success" , response.message);
                } else {
                    document.getElementById('btnCloseCompanyDelete').click();
                    error("messageCompanyDelete","alert-danger" , "Algo salió mal");
                }
            } catch (e) {
                // Ocurrió un error durante la solicitud
                document.getElementById('btnCloseCompanyDelete').click();
                error("messageCompanyDelete", "alert-danger", "Error en la solicitud DELETE");
            }
        });
    } else {
        console.error("El objeto 'data' no está definido o no contiene la propiedad 'ID'.");
    }
});

$("#companyTable").on("click", "button.edit", async function () {
    let data = companyTabledo.row($(this).parents("tr")).data();
    console.log(data);
    const companyId =data['ID'];
   $('#nameUpdatecompany').val(data['Nombre'])
   $('#CompanyUpdateaddress').val(data['Dirección'])
   $('#CompanyUpdate-type-document').val(data['Tipo_Documento'])
   $('#Company-update-document').val(data['Documento'])
   $('#Company-update-representative').val(data['Representante'])
   $('#Company-update-email').val(data['email'])
   $('#Company-update-employee-count').val(data['Cantidad_de_empleado'])
   $('#CompanyUpdatephone').val(data['Contacto'])
    let btnUpdate=document.querySelector('#btnUpdateCompanySucess');
   btnUpdate.addEventListener('click',e=>{
       console.log([companyId])
       e.preventDefault();
       updateCompanyById(companyId);
   })

});


/**************Registrar empresa ************************/
// Función para actualizar la empresa por su ID
async function updateCompanyById(companyId) {
    config.validateToken();

    const body = {};
    console.log(body)
    const formData = new FormData(document.querySelector('#frmUpdateCompany'));
    formData.forEach((value, key) => (body[key] = value));

    try {
        console.log(companyId)
        const request = await fetch(`${config.API}company/${companyId}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${config.token}`,
            },
            method: "PUT",
            body: JSON.stringify(body),
        });

        const response = await request.json();
        if (response.status == 'ok') {
            reloadCompanyTable();
            error('errorUpdateCompany', 'alert-success', response.message);
        } else if (response.status == "error") {
            error("errorUpdateCompany", 'alert-danger', response.message);
        }
    } catch (e) {
        console.log(e);
        error('errorUpdateCompany', 'alert-danger', "Hubo un error al actualizar la empresa.");
    }
}
