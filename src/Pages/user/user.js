import error from '../../Helpers/error.js';
import config from '../../Helpers/config.js';

document.addEventListener('DOMContentLoaded', () => {
    $('#UserSave').slideUp();
    disabledUserForm();
    showAllUser();
    allCompany();
    getRol()
    //hiddenUserTable();
    //disabledUserTable();
})

let userTable;

/****************************************Obtener los datos del usuario a borrar**************************************************/
let getDataUserDelete = function(){
    $("#userTable").on("click","button.delete", function () {

        let data = userTable.row( $(this).parents("tr") ).data();
        document.getElementById('textUserDelete').textContent = "¿Quieres Eliminar el siguiente usuario? : "+data['Nombre_Usuario'];
        document.getElementById('idDelete').value = data['ID'];
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
const showAllUser = () =>{   

    userTable = $('#userTable').DataTable({
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
                "url" : `${config.API}user/`,
                "headers": {
                    Authorization: `Bearer ${config.token}`
                }            
        },
        'columns' :[
            {"data" : "ID"},
            {"data" : "Nombre_Usuario"},
            {"data" : "Nombre"},
            {"data" : "Genero"},
            {"data" : "Número_Documento"},
            {"data" : "Correo"},
            {"data" : "Rol"},
            {"data" : "Empresa"},
            {"data" : "Número_Teléfonico"},
            {"data" : "Puntos_Acumulado"},
            {"data" : "Estado"},
            {"data" : "Role_Id"},
            {"data" : "Company_Id"},
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
            {"targets": [3], "width": "10%"},
            {"targets": [4], "width": "10%"},
            {"targets": [5], "width": "10%"},
            {"targets": [6], "width": "20%"},
            {"targets": [7], "width": "10%"},
            {"targets": [8], "width": "10%"},
            {"targets": [9], "width":"10%"},
            {"targets": [10], "width":"10%"},
            {"targets": [11], "visible": false,"searchable": false},
            {"targets": [12], "visible": false,"searchable": false},
            {"targets": [13], "width":"30%"},


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
    console.log(userTable)
    getDataUserDelete();               
}

/****Recargar la tabla de usuario****/
const reloadUserTable = () => {
    userTable.ajax.reload();
}

/*********Función para habilitar el formulario de usuario********/
const enableUserForm = () => {
    document.getElementById('name').disabled=false;
    document.getElementById('username').disabled=false;
    document.getElementById('password').disabled=false;
    document.getElementById('confirmPassword').disabled=false;
    document.getElementById('lastname').disabled=false;
    document.getElementById('company').disabled=false;
    document.getElementById('type_document').disabled=false;
    document.getElementById('document').disabled=false;
    document.getElementById('phone').disabled=false;
    document.getElementById('email').disabled=false;
    document.getElementById('rol').disabled=false;
    document.getElementById('gender').disabled=false;
    document.getElementById('address').disabled=false;
  // document.getElementById('estado').disabled = false;
   document.getElementById('rol').disabled = false;
   document.getElementById('btnprivilegeabout').disabled = false;
   document.getElementById('btnUserRegister').disabled = false;
   document.getElementById('btnUserClear').disabled = false;
   document.getElementById('btnUserEnable').disabled = true;
   document.getElementById('btnUserDisabled').disabled = false;
   document.getElementById('btnUserEnable').style.display = 'none';
   document.getElementById('btnUserRegister').style.display = '';
   document.getElementById('btnUserClear').style.display = '';
   document.getElementById('btnUserDisabled').style.display = '';   
}

/*********Función para deshabilitar el formulario de usuario********/
const disabledUserForm = () => {
    document.getElementById('name').disabled=true;
    document.getElementById('username').disabled=true;
    document.getElementById('password').disabled=true;
    document.getElementById('confirmPassword').disabled=true;
    document.getElementById('lastname').disabled=true;
    document.getElementById('company').disabled=true;
    document.getElementById('type_document').disabled=true;
    document.getElementById('document').disabled=true;
    document.getElementById('phone').disabled=true;
    document.getElementById('email').disabled=true;
    document.getElementById('rol').disabled=true;
    document.getElementById('gender').disabled=true;
    document.getElementById('address').disabled=true;
    //document.getElementById('estado').disabled = true;
    document.getElementById('rol').disabled = true;
    document.getElementById('btnprivilegeabout').disabled = true;
    document.getElementById('btnUserRegister').disabled = true;
    document.getElementById('btnUserClear').disabled = true;
    document.getElementById('btnUserEnable').disabled = false;
    document.getElementById('btnUserRegister').style.display = 'none';
    document.getElementById('btnUserClear').style.display = 'none';
    document.getElementById('btnUserDisabled').style.display = 'none';
    document.getElementById('btnUserEnable').style.display = '';
}

/*******Función para limpiar el formulario de usuario********/
const clearUserForm = () => {
    document.getElementById('phone').value="";
    document.getElementById('email').value="";
    document.getElementById('document').value="";
    document.getElementById('name').value = "";
    document.getElementById('username').value = "";
    document.getElementById('password').value = "";
    document.getElementById('confirmPassword').value = "";
    document.getElementById('lastname').value = "";
}

/*****************************************************************
*              Function for show the user table                  *
*****************************************************************/ 
// const showUserTable = () => {
//     document.getElementById('table_user').style.display = "";
//     document.getElementById('btnclearsearch').style.display = "";
// }


/***********Función para deshabilitar la tabla de usuario****************/
const disabledUserTable = () => {
    document.getElementById('search_cedula').disabled = true;
    document.getElementById('btn_search_cedula').disabled = true;
    document.getElementById('btndisabledsearch').style.display = "none";
    document.getElementById('btnenablesearch').style.display = "";
}

/*************Función para ocultar la tabla de usuario****************/
// const hiddenUserTable = () => {
//     document.getElementById('table_user').style.display = "none";
//     document.getElementById('btnclearsearch').style.display = "none";
// }

/***********Función para limpiar table de usuario**********/
// const clearUserTable = () => {
//     document.getElementById('search_cedula').value = "";
//     hiddenUserTable();        
// }
/*****************************************************************************
 *                               traer datos de company                     *
 ******************************************************************************/
async function allCompany() {
    try {
        const request = await fetch(`${config.API}company/`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${config.token}`
            }
        });
        const response = await request.json();

        if (response.status === "error") {
            error("errorSaveUser", "alert-danger", response.message);
        } else if (Array.isArray(response.data)) { // Verificar si response.data es un array
            const selectElement = document.getElementById('company');
            response.data.forEach(company => {
                const option = document.createElement('option');
                option.value = company.ID;
                option.textContent = company.Nombre;
                selectElement.appendChild(option);
            });
        } else {
            error("errorSaveUser","alert-danger","API_ERROR");
            console.error("La propiedad data no es un array:", response);
        }
    } catch (error) {
        error("errorSaveUser","alert-danger","API_ERROR");
        console.error("Error en la función allCompany:", error);
    }
}

/*****************************************************************************
 *                               traer datos de rol                  *
 ******************************************************************************/
async function getRol() {
    try {
        const request = await fetch(`${config.API}rol/`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${config.token}`
            }
        });
        const response = await request.json();
        if (response.status === "error") {
            error("errorSaveUser", "alert-danger", response.message);
        } else if (Array.isArray(response.data)) { // Verificar si response.data es un array
            const selectElement = document.getElementById('rol');
            response.data.forEach(rol => {
                const option = document.createElement('option');
                option.value = rol.role_id;
                option.textContent = rol.name;
                selectElement.appendChild(option);
            });
        } else {
            error("errorSaveUser","alert-danger","API_ERROR");
            console.error("La propiedad data no es un array:", response);
        }
    } catch (e) {
        error("errorSaveUser","alert-danger","API_ERROR");
        console.error("Error en la función allCompany:", e);
    }
}
/*****************************************************************************
*                                  Events                                    *
******************************************************************************/

/*****************Ocultar ventana para registrar usuario********************/
document.getElementById('btnCloseUserSave').addEventListener('click' , e =>{
    e.preventDefault();
    $('#UserSave').slideUp();
    document.getElementById('btnUserSave').style.display = '';
})

/*****************Mostrar ventana para registrar usuario********************/
document.getElementById('btnUserSave').addEventListener('click' , e =>{
    e.preventDefault();
    $('#UserSave').slideDown();
    document.getElementById('btnUserSave').style.display = 'none';
})

/*********************BTN Habilitar formulario de usuario***************/
document.getElementById('btnUserEnable').addEventListener('click', e => {
    e.preventDefault();
    enableUserForm();
})

/*********************BTN Deshabilitar formulario de usuario***************/
document.getElementById('btnUserDisabled').addEventListener('click', e => {
    e.preventDefault();
    clearUserForm();
    disabledUserForm();
})

/*********************BTN Actualizar la tabla de usuario*******************/
document.getElementById('btnReloadUserTable').addEventListener('click', e => {
    e.preventDefault();
    reloadUserTable();
})


/**************************************************************************
*                      event for enable user table                        *
***************************************************************************/
// document.getElementById('btnenablesearch').addEventListener('click', e => 
// {
//     e.preventDefault();
//     document.getElementById('search_cedula').disabled = false;
//     document.getElementById('btn_search_cedula').disabled = false;
//     document.getElementById('btnenablesearch').style.display = "none";
//     document.getElementById('btndisabledsearch').style.display = "";
// })


/****************************************************************************
*              event for disabled user user table                           *
****************************************************************************/
// document.getElementById('btndisabledsearch').addEventListener('click', e => {
//     e.preventDefault();   
//     disabledUserTable();
//     clearUserTable();
// })


/******************BTN Limpiar el formulario de usuarios********************/
document.getElementById('btnUserClear').addEventListener('click', e => {
    e.preventDefault();
    clearUserForm();
})


/*************************************************************************
*                   event for clear user table                           *
*************************************************************************/
// document.getElementById('btnclearsearch').addEventListener('click', e => {
//     e.preventDefault();
//     clearUserTable();
// })


/**************************************************************************
*      show the data of user in the modal modalUpdateUserPrivilege        *
**************************************************************************/
// document.getElementById("a_update_user").addEventListener("click" , e => {
//     e.preventDefault();

//     let privilege = document.getElementById("user_privilege").textContent;
//     let status = document.getElementById("user_status").textContent;

//     //console.log(privilege);

//     if(status == "Activo"){
//         document.getElementById("status_user_update").innerHTML = `<option>${status}</option>
//                                                                    <option>Inactivo</option>`;
//     }else if(status == "Inactivo"){
//         document.getElementById("status_user_update").innerHTML = `<option>${status}</option>
//                                                                    <option>Activo</option>`;
//     }
    
//     if(privilege == "1"){
//         document.getElementById("privilege_user_update").innerHTML = `<option>${privilege}</option>
//                                                                       <option>2</option><option>3</option>`;                                                                      
//     }else if(privilege == "2"){
//         document.getElementById("privilege_user_update").innerHTML = `<option>${privilege}</option>
//                                                                       <option>1</option><option>3</option>`;
//     }else if(privilege == "3"){
//         document.getElementById("privilege_user_update").innerHTML = `<option>${privilege}</option>
//                                                                       <option>1</option><option>2</option>`;
//     }    
// })



/**********************************Registrar usuario*****************************************/
let frmsave=document.querySelector('#frmSaveUser');
frmsave.addEventListener('submit', e => {

   e.preventDefault();  
   config.validateToken();
   
   let body = {};
   let formData = new FormData(document.getElementById("frmSaveUser"));
   formData.forEach((value, key) => {body[key] = value});

   (async function () {
       try {
           let request = await fetch(`${config.API}user/`,{
                                      headers: {"Content-Type":"application/json" , Authorization: `Bearer ${config.token}`},
                                      method: 'POST',body: JSON.stringify(body)});
           let response = await request.json();

           if (response.status == "error") {
               error("errorSaveUser","alert-danger" , response.message);
           } else if (response.status == "ok") {
              clearUserForm(); 
              disabledUserForm();
              reloadUserTable();
              error("errorSaveUser","alert-success" , response.message);
           } else {
               error("errorSaveUser","alert-danger" , "Algo salio mal");
           }
       } catch (error) {
           console.log(error);
       }
   })()
});

/**********************************Eliminar usuario*****************************************/

$("#userTable").on("click", "button.delete", function () {
    let data = userTable.row($(this).parents("tr")).data();
    if (data && data.hasOwnProperty('ID')) {
        let ID = data['ID'];
        document.getElementById('idDelete').value = ID;

        deleteUser(ID);
    } else {
        console.error("El objeto 'data' no está definido o no contiene la propiedad 'ID'.");
    }
});

function deleteUser(ID) {
    document.getElementById('btnUserDelete').addEventListener('click', e => {
        e.preventDefault();
        config.validateToken();

        let body= {
            IDToken: document.getElementById('idDelete').value
        };
        console.log(body);

        (async function () {
            try {
                let request = await fetch(`${config.API}user/${ID}`, {
                    headers: {"Content-Type":"application/json" , Authorization: `Bearer ${config.token}`},
                    method: 'DELETE',
                    body: JSON.stringify(body)
                });
                let response = await request.json();

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
                console.log(error);
            }
        })();
    });
}
/*****************************************************************************
 *                  update usuario                                           *
 *****************************************************************************/
let userId; // Declarar la variable userId fuera del evento de clic

$('#userTable tbody').on('click', '.edit', function() {
    let row = userTable.row($(this).closest('tr')).data();

    $('#name-update').val(row.Nombre);
    $('#username-update').val(row.Nombre_Usuario);

    $('#lastname-update').val(row.Apellido);
    $('#company-update').empty();
    $('#rol-update').empty();
    allCompanyUpdate().then(() => {
        $('#company-update').val(row.Company_Id);
    });
    getRolUpdate().then(() => {
        $('#rol-update').val(row.Role_Id);
    });
    $('#type_document-update').val(row.Tipo_Documento);
    $('#document-update').val(row.Número_Documento);
    $('#phone-update').val(row.Número_Teléfonico);
    $('#email-update').val(row.Correo);
    $('#gender-update').val(row.Genero);
    $('#address-update').val(row.Dirección);

    // Asignar el ID del usuario a la variable userId
    userId = row.ID;

    // Actualizar el atributo "action" del formulario con el ID del usuario
    $('#frmUpdateUsuario').attr('action', `/${userId}`);
});

let frmupdate = document.querySelector('#frmUpdateUsuario');
frmupdate.addEventListener('submit', async e => {
    e.preventDefault();
    config.validateToken();
    let body = {};

    let formData = new FormData(document.getElementById('frmUpdateUsuario'));

    formData.forEach((value, key) => {
        body[key] = value;
    });

    try {
        let request = await fetch(`${config.API}user/${userId}`, {
            headers: { "Content-Type": "application/json", Authorization: `Bearer ${config.token}` },
            method: 'PUT',
            body: JSON.stringify(body)
        });

        let response = await request.json();

        if (response.status == "error") {
            error('errorUpdateUser', 'alert-danger', response.message);
        } else if (response.status == "ok") {
            reloadUserTable();
            error("errorUpdateUser", "alert-success", response.message);
        } else {
            error("errorUpdateUser", "alert-danger", "Algo salió mal");
        }
    } catch (e) {
        // Manejar errores
    }
});

/*****************************************************************************
 *                  detail usuario                                           *
 *****************************************************************************/
$('#userTable tbody').on('click', '.detail', function() {
    let row = $(this).closest('tr');

    let data = userTable.row(row).data();
    let id_user=data.Número_Documento;
    alluser(id_user);

});

const username=document.querySelector('#detail-usuario');
const nombre=document.querySelector('#detail-nombre');
const apellido=document.querySelector('#detail-apellidos');
const genero=document.querySelector('#detail-genero');
const documento=document.querySelector('#detail-document');
const correo=document.querySelector('#detail-email');
const telefono=document.querySelector('#detail-telefono');
const company=document.querySelector('#detail-company');
const puntos=document.querySelector('#detail-punto');
const status=document.querySelector('#status');
const detailName=document.querySelector('#detailName');
const detailLastName=document.querySelector('#detailLastName');


async function alluser(id) {
    try {
        const request = await fetch(`${config.API}user/${id}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${config.token}`
            }
        });
        const response = await request.json();
        let data=  response.data
        data.forEach(row =>{
            detailName.textContent =row.Nombre_Usuario;

            username.value=row.Nombre_Usuario;
           nombre.value=row.Nombre;
           apellido.value=row.Apellido;
           genero.value=row.Genero;
           documento.value=row.Número_Documento;
           correo.value=row.Correo;
           telefono.value=row.Número_Teléfonico;
            company.value=row.Empresa;
            status.value=row.Estado;
            puntos.value=row.Puntos_Acumulado;
        })
        if (response.status === "error") {
            error("errorSaveUser", "alert-danger", response.message);
        } else if (Array.isArray(response.data)) { // Verificar si response.data es un array

        } else {
            error("errorSaveUser","alert-danger","API_ERROR");
            console.error("La propiedad data no es un array:", response);
        }
    } catch (error) {
        error("errorSaveUser","alert-danger","API_ERROR");
        console.error("Error en la función allCompany:", error);
    }
}


/*****************************************************************************
 *                               traer datos de company                     *
 ******************************************************************************/
async function allCompanyUpdate() {
    try {
        const request = await fetch(`${config.API}company/`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${config.token}`
            }
        });
        const response = await request.json();

        if (response.status === "error") {
            error("errorSaveUser", "alert-danger", response.message);
        } else if (Array.isArray(response.data)) { // Verificar si response.data es un array
            const selectElement = document.getElementById('company-update');
            response.data.forEach(company => {
                const option = document.createElement('option');
                option.value = company.ID;
                option.textContent = company.Nombre;
                selectElement.appendChild(option);
            });
        } else {
            error("errorSaveUser","alert-danger","API_ERROR");
            console.error("La propiedad data no es un array:", response);
        }
    } catch (error) {
        error("errorSaveUser","alert-danger","API_ERROR");
        console.error("Error en la función allCompany:", error);
    }
}

/*****************************************************************************
 *                               traer datos de rol                  *
 ******************************************************************************/
async function getRolUpdate() {
    try {
        const request = await fetch(`${config.API}rol/`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${config.token}`
            }
        });
        const response = await request.json();
        if (response.status === "error") {
            error("errorSaveUser", "alert-danger", response.message);
        } else if (Array.isArray(response.data)) { // Verificar si response.data es un array
            const selectElement = document.getElementById('rol-update');
            response.data.forEach(rol => {
                const option = document.createElement('option');
                option.value = rol.role_id;
                option.textContent = rol.name;
                selectElement.appendChild(option);
            });
        } else {
            error("errorSaveUser","alert-danger","API_ERROR");
            console.error("La propiedad data no es un array:", response);
        }
    } catch (e) {
        error("errorSaveUser","alert-danger","API_ERROR");
        console.error("Error en la función allCompany:", e);
    }
}
/*****************************************************************************
*                  event for search one user for the dni                  *
*****************************************************************************/
// document.getElementById('btn_search_cedula').addEventListener('click', e => {
//     e.preventDefault();
     
//      let dni = document.getElementById('search_cedula').value;
//      let body = new FormData();
//      body.append('dni',dni);
//      body.append('function','searchCedula');
     
//     fetch(REQUEST_USER_CONTROLLER,{method: 'post',body: body})
//     .then(res => res.json())
//     .then( res =>{
//        //console.log(res);
//         if (res.error) {
//             swal({
//                 title: res.title,
//                 text: res.message,
//                 icon: res.icon,
//                 button: "Aceptar"
//             });
//         }else{           
//             showUserTable();                
//             document.getElementById('user_token').value = res.token_usuario;          
//             document.getElementById('user_name').textContent = res.nombre_usuario; 
//             document.getElementById('user_cedula').textContent = res.cedula_usuario;
//             document.getElementById('user_email').textContent = res.correo_usuario;
//             document.getElementById('user_date').textContent = res.fecha_usuario;
//             document.getElementById('user_privilege').textContent = res.privilegio_usuario;
//             document.getElementById('user_status').textContent = res.estado_usuario;  
//         }     
//     }) 
//     .catch(res => console.log(res))
// })


/*****************************************************************************
*                      event for update user status                          *
*****************************************************************************/
// document.getElementById('formUpdateUserPrivilege').addEventListener('submit', e =>{
//     e.preventDefault();       

//     let token = document.getElementById('user_token').value;    
//     let body = new FormData(document.getElementById("formUpdateUserPrivilege"));
//     body.append('token',token);   
//     body.append('function','updateUserStatus');

//     fetch(REQUEST_USER_CONTROLLER,{method: 'post',body: body})
//     .then(res => res.json())
//     .then(res => {
//         //console.log(res);
//         if (res.error) {
//             swal({
//                 title: res.title,
//                 text: res.message,
//                 icon: res.icon,
//                 button: "Aceptar"
//                 });
//         }else if(!res.error){
//             swal({
//                 title: res.title,
//                 text: res.message,
//                 icon: res.icon,
//                 button: "Aceptar"
//             });
//             clearUserTable();
//             document.getElementById("modalCloseUpdateUser").click();            
//         }else{
//             swal({
//                 title: "Algo Salió Mal",
//                 text: "No se puede actualizar el estado del usuario",
//                 icon: "error",
//                 button: "Aceptar"
//             });
//         }              
       
//     })
//     .catch(res => console.log(res))
// })


/*******************************************************************************
*                      event for reset user password                           *
*******************************************************************************/
// document.getElementById('formResetPassword').addEventListener('submit', e => {
//     e.preventDefault();
    
//     let user_token = document.getElementById('user_token').value;     
//     let body = new FormData(document.getElementById("formResetPassword"));   
//     body.append('token',user_token);   
//     body.append('function','resetUserPassword');
     
//     fetch(REQUEST_USER_CONTROLLER,{method: 'post',body: body})
//     .then(res => res.json())
//     .then(res => {
//              //console.log(res);
//             if (res.error) {
//                 swal({
//                     title: res.title,
//                     text: res.message,
//                     icon: res.icon,
//                     button: "Aceptar"
//                     });
//             }else if(!res.error){
//                 swal({
//                     title: res.title,
//                     text: res.message,
//                     icon: res.icon,
//                     button: "Aceptar"
//                 });
//                 clearUserTable();
//                 document.getElementById("password_reset").value = "";
//                 document.getElementById("confirm_password_reset").value = "";
//                 document.getElementById("modalCloseResetPassword").click();            
//             }else{
//                 swal({
//                     title: "Algo Salió Mal",
//                     text: "No se puede restablecer la contraseña del usuario",
//                     icon: "error",
//                     button: "Aceptar"
//                 });
//             }         
          
//     })
//     .catch(res => console.log(res))
// })
