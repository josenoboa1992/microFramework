


const token = localStorage.getItem("token");
document.addEventListener('DOMContentLoaded',()=>{
    showAllRol();
})
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

$(document).ready(getRol);
let rolTable
const showAllRol = () =>{
    console.log('hola mundo')
    rolTable = $('#userRoleTable').DataTable({
        "rowCallback":function (row,data,index){
            console.log(2)
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
            "url" : `https://api.worldingfoods.com//userRol/`,
            "headers": {
                Authorization: `Bearer ${token}`
            },
            "drawCallback": function (settings) {
                console.log(3)
            },
        },
        'columns' :[
            {"data" : "ID"},
            {"data" : "Usuario"},
            {"data" : "Correo"},
            {"data" : "Rol"},
            {
                "data": "ID",
                "render": function (data, type, row) {
                    return `<select class="form-select change-role-select" data-userid="${row.ID}">
                    <option value="">Seleccione un rol</option>
                </select>`;
                }
            },
            {"defaultContent" : "<button type='button' class='edit edit-btn' data-bs-toggle='modal' data-bs-target='#updateUserPass'><i class='fa fa-edit' aria-hidden='true'></i>Editar</button>"
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
                    columns: [1,2,3,4,]
                }
            }
        ]
    });
    setTimeout(()=>{

    },2000)
}

async function getRol() {
    try {
        const request = await fetch(`https://api.worldingfoods.com//rol/`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        });
        const response = await request.json();
        if (response.status === "error") {
            error("messageUserRol", "alert-danger", response.message);
        } else if (Array.isArray(response.data)) { // Verificar si response.data es un array
            // Iterar sobre las filas de la tabla para llenar los selects
            $(".change-role-select").each(function () {
                const userId = $(this).data('userid');
                const selectElement = this;

                response.data.forEach(rol => {
                    const option = document.createElement('option');
                    option.value = rol.name;
                    option.textContent = rol.name;
                    selectElement.appendChild(option);
                });
            });
        } else {
            error("messageUserRol","alert-danger","API_ERROR");
            console.error("La propiedad data no es un array:", response);
        }
    } catch (e) {
        error("messageUserRol","alert-danger","API_ERROR");
        console.error("Error en la función allCompany:", e);
    }
}


$(document).on('change', '.change-role-select', function () {
    const userId = $(this).data('userid');
    const newRole = $(this).val();

    // Mostrar confirmación con SweetAlert antes de realizar el cambio
    Swal.fire({
        title: '¿Estás seguro?',
        text: '¿Deseas cambiar el rol del usuario?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, cambiar',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33'
    }).then((result) => {
        if (result.isConfirmed) {
            // Enviar los valores al endpoint utilizando AJAX
            $.ajax({
                url: `https://api.worldingfoods.com//rol/${userId}/${newRole}`,
                method: 'PUT',
                "headers": {
                    Authorization: `Bearer ${token}`
                },
                success: function(response) {
                    // Mostrar la respuesta en un SweetAlert
                    Swal.fire({
                        title: response.status,
                        text: response.message,
                        icon: response.status === 'ok' ? 'success' : 'error',
                    });
                    // Refrescar la página
                    setTimeout(()=>{
                        location.reload();
                    },2000)

                },
                error: function(error) {
                    console.error(error); // Manejar el error si ocurre
                }
            });
        }
    });
});
const reloadUserTable = () => {
    rolTable.ajax.reload();
}

$('#userRoleTable tbody').on('click', '.edit-btn', function () {
    let row = $(this).closest("tr");
    let columns = row.find("td");
    let  user_id=$(columns[0]).text();
  document.getElementById('user_idpass').value=user_id;

});
function error(id,alert,message) {
    document.getElementById(id).classList.add(alert);
    document.getElementById(id).textContent = message;
    document.getElementById(id).style.display = "";
    setTimeout(() => {
        document.getElementById(id).style.display = "none";
        document.getElementById(id).classList.remove(alert);
    }, 4000);
}

let frmsave=document.querySelector('#frmUpdatepass');
frmsave.addEventListener('submit', e => {
    e.preventDefault();

    let body = {};
    let formData = new FormData(document.getElementById("frmUpdatepass"));
    formData.forEach((value, key) => {body[key] = value});

    (async function () {
        try {

            let request = await fetch(`https://api.worldingfoods.com//changepass/`,{
                headers: {"Content-Type":"application/json" , Authorization: `Bearer ${token}`},
                method: 'put',body: JSON.stringify(body)});
            let response = await request.json();

            if (response.status == "error") {
                error("errorUpdateUserPass","alert-danger" , response.message);
            } else if (response.status == "ok") {


                error("errorUpdateUserPass","alert-success" , response.message);
            } else {
                error("errorUpdateUserPass","alert-danger" , "Algo salio mal");
            }
        } catch (error) {
        }finally {

        }
    })()
});
