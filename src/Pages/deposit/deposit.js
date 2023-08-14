
import config from '../../Helpers/config.js';
import convertFormatHour from "../../Helpers/error.js";

document.addEventListener('DOMContentLoaded', () => {
    disabledDepositForm();
    $('#despositSave').slideUp();
    // disabledUserForm();
    showAllDeposit();
    // allCompany();
    // getRol()

    //hiddenUserTable();

})

document.getElementById('depositSave').style.display='none';
let depositTabledo;

/****************************************Obtener los datos del usuario a borrar**************************************************/
let getDataUserDelete = function(){
    $("#depositTable").on("click","button.delete", function () {

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
const showAllDeposit = () =>{

    depositTabledo = $('#depositTable').DataTable({
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
            "url" : `${config.API}deposit/`,
            "headers": {
                Authorization: `Bearer ${config.token}`
            }
        }, 'columns': [
            {"data": "ID"},
            {"data": "#usuario"},
            {"data": "Nombre"},
            {"data": "Monto"},
            {"data": "Descripcion"},
            {
                "data": "Estado",
                "render": function (data, type, row) {
                    if (data === 'approved') {
                        return '<span class="badge bg-success">' + data + '</span>';
                    } else if (data === 'rejected') {
                        return '<span class="badge bg-danger">' + data + '</span>';
                    } else {
                        return '<span class="badge bg-warning text-dark">' + data + '</span>';
                    }
                }
            },
            {
                "data": "Estado",
                "render": function (data, type, row) {
                    if (data === 'approved'||data === 'rejected') {
                        return '<button type="button" class="apply-btn btn-success" disabled style="background-color: #ccc;">Aplicar</button>' +
                            '<button type="button" class="cancel-btn btn-danger" disabled style="background-color: #ccc;">Cancelar</button>';
                    } else {
                        return `<input type='checkbox' class='row-select'>
                    <button type='button' class='apply-btn btn-success' data-bs-toggle='modal' data-bs-target='#applyModal'>
                        Aplicar
                    </button>
                    <button type='button' class='cancel-btn btn-danger'>
                        Cancelar
                    </button>`;
                    }
                }
            }

        ],
        "createdRow": function (row, data, dataIndex) {
            $(row).attr('data-id', data.ID); // Agregar atributo data-id
            $(row).attr('data-nombre', data.Nombre); // Agregar atributo data-nombre
            // Agregar más atributos data aquí según sea necesario
        },
        "columnDefs": [   // atributo para ocultar columna
            // {"targets": [0],"visible": false,"searchable": false},
            {"targets": [0], "width": "10%"},
            {"targets": [1], "width": "10%"},
            {"targets": [2], "width": "10%"},
            {"targets": [3], "width": "10%"},
            {"targets": [4], "width": "10%"},
            {"targets": [5], "width": "10%"},
            {"targets": [6], "width": "10%"},


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
                    columns: [1,2,3,4,5,6]
                }
            }
        ]
    });
    console.log()
    getDataUserDelete();
}
// Agregar eventos a los botones "Aplicar" y "Cancelar"
let datatable;
$("#depositTable").on('click', '.apply-btn', function () {
    // Obtener el user_id de la fila seleccionada
    const rowData = $(this).closest('tr').data();
    console.log(rowData);
    // Verificar si el checkbox de la fila seleccionada está marcado
    const isChecked = $(this).closest('tr').find('.row-select').prop('checked');

    if (isChecked) {
        const {id}=rowData;
        // Enviar solicitud AJAX al endpoint para actualizar la fila
        $.ajax({
            method: 'PUT', // O el método que corresponda
            url: `http://api.local/deposit/${id}`,
            headers: {
                Authorization: `Bearer ${config.token}`
            },
            data: { /* Datos que deseas enviar para actualizar */ },
            success: function (response) {
                // Manejar la respuesta del servidor si es necesario
                console.log(response);
                reloadDepositTable();
            },
            error: function (error) {
                // Manejar el error si ocurre
            }
        });
    }
});

$('#depositTable').on('click', '.cancel-btn', function () {
    // Obtener el user_id de la fila seleccionada
    const rowData = $(this).closest('tr').data();
    console.log(rowData);
    // Verificar si el checkbox de la fila seleccionada está marcado
    const isChecked = $(this).closest('tr').find('.row-select').prop('checked');

    if (isChecked) {
        const {id}=rowData;
        // Enviar solicitud AJAX al endpoint para actualizar la fila
        $.ajax({
            method: 'DELETE', // O el método que corresponda
            url: `http://api.local/deposit/${id}`,
            headers: {
                Authorization: `Bearer ${config.token}`
            },
            data: { /* Datos que deseas enviar para actualizar */ },
            success: function (response) {
                // Manejar la respuesta del servidor si es necesario
                console.log(response);
                reloadDepositTable();
            },
            error: function (error) {
                // Manejar el error si ocurre
            }
        });
    }
});
/****Recargar la tabla de usuario****/
const reloadDepositTable = () => {
    depositTabledo.ajax.reload();
}


/*****************Ocultar ventana para registrar usuario********************/
document.getElementById('btnCloseDepositSave').addEventListener('click' , e =>{
    e.preventDefault();
    $('#depositSave').slideUp();
    document.getElementById('btnDepositSave').style.display = '';
})


/*****************Mostrar ventana para registrar usuario********************/
document.getElementById('btnDepositSave').addEventListener('click' , e =>{
    e.preventDefault();
    $('#depositSave').slideDown();
    document.querySelector('#btnDepositSave').style.display="none";
})

/*********************BTN Habilitar formulario de usuario***************/
document.getElementById('btnDepositEnable').addEventListener('click', e => {
    e.preventDefault();
    enableDepositForm();
})

/*********************BTN Actualizar la tabla de usuario*******************/
document.getElementById('btnReloadDepositTable').addEventListener('click', e => {
    e.preventDefault();
    reloadDepositTable();
})
document.getElementById('btnDepositDisabled').addEventListener('click', e => {
    e.preventDefault();
    clearDepositForm();
    disabledDepositForm();
})


/*********************Liempiar empresa*******************/
document.getElementById('btnDepositClear').addEventListener('click' , e =>{
    e.preventDefault();
    clearDepositForm();
})


/*********Función para deshabilitar el formulario de empresa********/
const disabledDepositForm = () => {

    document.getElementById('client-deposit').disabled=true;
    document.getElementById('monto-deposit').disabled=true;
    document.getElementById('description-deposit').disabled=true;

    document.getElementById('registerDeposit').disabled = true;
    document.getElementById('btnDepositClear').disabled = true;
    document.getElementById('btnDepositEnable').disabled = false;
    document.getElementById('registerDeposit').style.display = 'none';
    document.getElementById('btnDepositClear').style.display = 'none';
    document.getElementById('btnDepositDisabled').style.display = 'none';
    document.getElementById('btnDepositEnable').style.display = '';
}




/*********Función para limpiar el formulario de empresa********/
const clearDepositForm=()=>{
    document.getElementById('client-deposit').value="";
    document.getElementById('monto-deposit').value="";
    document.getElementById('description-deposit').value="";

}
/*********Función para habilitar el formulario de empresa********/
const enableDepositForm = () => {

    document.getElementById('client-deposit').disabled=false;
    document.getElementById('monto-deposit').disabled=false;
    document.getElementById('description-deposit').disabled=false;


    document.getElementById('registerDeposit').disabled = false;
    document.getElementById('btnDepositClear').disabled = false;
    document.getElementById('btnDepositEnable').disabled = true;
    document.getElementById('btnDepositDisabled').disabled = false;
    document.getElementById('btnDepositEnable').style.display = 'none';
    document.getElementById('registerDeposit').style.display = '';
    document.getElementById('btnDepositClear').style.display = '';
    document.getElementById('btnDepositDisabled').style.display = '';
}

/**************Registrar empresa ************************/
const formDeposit = document.getElementById('frmSaveDeposit');

formDeposit.addEventListener('submit', async (e) => {
    e.preventDefault();
    config.validateToken();

    const body = {};

    const formData = new FormData(document.querySelector('#frmSaveDeposit'));
    formData.forEach((value, key) => (body[key] = value));

    try {
        const request = await fetch(`${config.API}deposit/`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${config.token}`,
            },
            method: "POST",
            body: JSON.stringify(body),
        });

        const response = await request.json();
        console.log(response)
        if (response.status=='ok'){
            clearDepositForm();
            disabledDepositForm();
            reloadDepositTable();
            error('errorSaveDeposit','alert-success',response.message);
        }else if(response.status=="error"){
            error("errorSaveDeposit",'alert-danger',response.message);
        }
    } catch (e) {
        console.log(e);
        error('errorSaveDeposit','alert-danger',response.message);
    }
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