import error from '../../Helpers/error.js';
import config from '../../Helpers/config.js';
import convertFormatHour from "../../Helpers/error.js";
let getDataCatDelete = function () {
    $("#catTable").on("click", "button.delete", function () {
        let data = catTable.row($(this).parents("tr")).data();
        document.getElementById('textCatDelete').textContent = "¿Quieres Eliminar la siguiente Categoría? : " + data['name'];
        let id = data['category_id'];

        let btnDelete = document.getElementById('btnCatDelete'); // Corregido el selector del botón
        btnDelete.addEventListener('click', e => {
            deleteCategory(id);
        });
    });
}


let getDataProDelete = function () {
    $("#proTable tbody").on("click", "button.delete", function () {

        let row = $(this).closest("tr");
        let columns = row.find("td");
        // Extraer valores de las columnas individuales
        let product_id = $(columns[0]).text(); // Por ejemplo, primera columna
        let name_product = $(columns[3]).text(); // Por ejemplo, segunda columna
        document.getElementById('textProDelete').textContent = "¿Quieres Eliminar el siguiente producto? : " + name_product ;


        let btnDelete = document.getElementById('btnProDelete');
        btnDelete.addEventListener('click', e => {

            deleteProduct(product_id);
        });
    });
}
$('#catTable tbody').on('click', '.edit', function() {
    let row = catTable.row($(this).closest('tr')).data();
    $('#idCat').val(row.category_id);
    $('#nameUpdateCat').val(row.name);
    $('#imageUrlCat').val(row.url);
    let id=document.querySelector('#idCat').value;



});

//modal para editar producto al hacer click
$('#proTable tbody').on('click', '.edit', function() {
    let row = $(this).closest("tr");
    let columns = row.find("td");

    // Obtener el contenido de la primera celda
    let  proid=$(columns[0]).text();
    let name = $(columns[3]).text();
    let description = $(columns[4]).text();
    let price= $(columns[5]).text();

    // Establecer el valor del input con el contenido de la celda

    $('#nameProUpdate').val(name);
    $('#descriptionPro').val(description);
    let formattedAmount = price;
    let numericAmount = parseFloat(formattedAmount.replace(/[^\d.-]/g, ""));
    $('#priceProUpdate').val(  numericAmount);

    // Llamar a la función para activar el evento submit
    let btnUpdate=document.getElementById('btnproUpdate');
    btnUpdate.addEventListener('click',e=>{
        updateProduct(proid);
    })

});



/*****************************************************************************
 *                              Actualizar producto            *
 ******************************************************************************/
function updateProduct(id) {
    let frmUpdatePro = document.querySelector('#frmUpdatePro');
    frmUpdatePro.addEventListener('submit', async e => {
        e.preventDefault();
        config.validateToken();
        let body = {};
        let formData = new FormData(document.getElementById("frmUpdatePro"));
        formData.forEach((value, key) => {body[key] = value});
        try {
            let request = await fetch(`${config.API}product/${id}`, {  // Cambiar la URL adecuadamente
                headers: { Authorization: `Bearer ${config.token}` },
                method: 'PUT',body: JSON.stringify(body)});

            let response = await request.json();
            console.log(response)
            if (response.status == "error") {
                error("errorUpdatePro", "alert-danger", response.message);
            } else if (response.status == "ok") {
                document.getElementById('btnUpdateClosePro').click();
                reloadProductTable();
                error("errorShowProduct", "alert-success", response.message);
            } else {
                error("errorUpdatePro", "alert-danger", "Algo salió mal");
            }
        } catch (error) {
            console.log(error);
        }
    });
}





function deleteCategory(ID) {
    document.getElementById('btnCatDelete').addEventListener('click', e => {
        e.preventDefault();
        config.validateToken();

        let body= {
            IDToken: document.getElementById('idCatDelete').value
        };
        console.log(ID);

        (async function () {
            try {
                let request = await fetch(`${config.API}category/${ID}`, {
                    headers: {"Content-Type":"application/json" , Authorization: `Bearer ${config.token}`},
                    method: 'DELETE',
                    body: JSON.stringify(body)
                });
                let response = await request.json();
                    console.log(response)
                if (response.status == "error") {
                    document.getElementById('btnCloseCatDelete').click();
                    error("errorCat","alert-danger" , response.message);

                } else if (response.status == "ok") {

                    document.getElementById('btnCloseCatDelete').click();
                    error("errorCat","alert-success" , response.message);
                    reloadCatTable();
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

function deleteProduct(ID) {
    document.getElementById('btnProDelete').addEventListener('click', e => {
        e.preventDefault();
        config.validateToken();


        (async function () {
            try {
                let request = await fetch(`${config.API}product/${ID}`, {
                    headers: {"Content-Type":"application/json" , Authorization: `Bearer ${config.token}`},
                    method: 'DELETE'
                });
                let response = await request.json();
                console.log(response)
                if (response.status == "error") {
                    document.getElementById('btnCloseProDelete').click();
                    error("errorShowProduct","alert-danger" , response.message);

                } else if (response.status == "ok") {
                 document.getElementById('btnCloseProDelete').click();
                    error("errorShowProduct","alert-success" , response.message);
                    reloadCatTable();
                } else {
                    document.getElementById('btnCloseProDelete').click();
                    error("errorShowProduct","alert-danger" , "Algo salió mal");
                }
            } catch (error) {
                console.log(error);
            }
        })();
    });
}
function showSpinner() {
    document.querySelector('.spinner-overlay').style.display = 'block';
}

// Ocultar el spinner
function hideSpinner() {
    document.querySelector('.spinner-overlay').style.display = 'none';
}
document.addEventListener('DOMContentLoaded', () => {


getRolUpdate();
    showAllproduct();
    showAllcat();
    showAllGarnish();
    getDataProDelete();
    allCategory();
    allProduct();
    let tableCategoria=document.querySelector('#table-category').style.display="block";

})

/*****************************************************************************
 *                              Actualizar categoria             *
 ******************************************************************************/

let frmUpdateCat = document.querySelector('#frmUpdateCat');
frmUpdateCat.addEventListener('submit', async e => {
    e.preventDefault();
    config.validateToken();

    let formData = new FormData(document.getElementById("frmCategoryTable"));
    let name=document.getElementById('nameUpdateCat').value;
    let url=document.getElementById('imageUrlCat').value;
    let imageFile = document.getElementById("imageUdateCategory").files[0];
    console.log(imageFile+'hi')
    formData.append('imageName', imageFile);
    formData.append('name', name);
    formData.append('imagenUrl', url);
    let idCategory = parseInt(document.querySelector('#idCat').value);

    try {
        let request = await fetch(`${config.API}category/${idCategory}`, {
            headers: { Authorization: `Bearer ${config.token}` },
            method: 'POST',
            body: formData
        });

        let response = await request.json();

        if (response.status == "error") {
            error("errorSaveCategory", "alert-danger", response.message);
        } else if (response.status == "ok") {
            reloadCatTable();
            clearCategory();
            error("errorUpdateCategory", "alert-success", response.message);
        } else {
            error("errorUpdateCategory", "alert-danger", "Algo salió mal");
        }
    } catch (error) {
        console.log(error);
    }
});


/*****************************************************************************
 *                            obtenr  Producto          *
 ******************************************************************************/

async function allProduct() {
    try {
        showSpinner();
        const request = await fetch(`${config.API}product/`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${config.token}`
            }
        });
        const response = await request.json();

        if (response.status === "error") {
            error("errorSaveUser", "alert-danger", response.message);
        } else if (Array.isArray(response.data)) { // Verificar si response.data es un array
            const selectElement = document.getElementById('garnisProduct');
            response.data.forEach(garn => {
                const option = document.createElement('option');
                option.value = garn.ID;
                option.textContent = garn.Producto;
                selectElement.appendChild(option);
            });
        } else {
            error("errorSaveUser","alert-danger","API_ERROR");
            console.error("La propiedad data no es un array:", response);
        }
    } catch (error) {
        error("errorSaveUser","alert-danger","API_ERROR");
        console.error("Error en la función allCompany:", error);
    }finally {
        hideSpinner();
    }
}

/*****************************************************************************
 *                            obtenr categoria Producto          *
 ******************************************************************************/

async function allCategory() {
    try {
        showSpinner();
        const request = await fetch(`${config.API}category/`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${config.token}`
            }
        });
        const response = await request.json();

        if (response.status === "error") {
            error("errorSaveUser", "alert-danger", response.message);
        } else if (Array.isArray(response.data)) { // Verificar si response.data es un array
            const selectElement = document.getElementById('categoryProduct');
            response.data.forEach(cat => {
                const option = document.createElement('option');
                option.value = cat.category_id;
                option.textContent = cat.name;
                selectElement.appendChild(option);
            });
        } else {
            error("errorSaveUser","alert-danger","API_ERROR");
            console.error("La propiedad data no es un array:", response);
        }
    } catch (error) {
        error("errorSaveUser","alert-danger","API_ERROR");
        console.error("Error en la función allCompany:", error);
    }finally {
        hideSpinner();
    }
}

/*****************************************************************************
 *                            guardarProducto          *
 ******************************************************************************/

let frmSaveProduct = document.querySelector('#frmSaveProduct');
frmSaveProduct.addEventListener('submit', e => {
    e.preventDefault();
    config.validateToken();

    // Get the user_id value from the hidden input field
    let userId = document.getElementById("user_id").value;

    // Logging the user_id value for debugging purposes
    console.log("user_id: " + userId);

    let formData = new FormData(document.getElementById("frmSaveProduct"));
    let imageFile = document.getElementById("productImage").files[0];
    formData.append('image', imageFile);

    // Set the value of the hidden input field to the userId
    document.getElementById("user_id").value = userId;


    (async function () {
        try {
            showSpinner();
            let request = await fetch(`${config.API}product/`, {
                headers: { Authorization: `Bearer ${config.token}` },
                method: 'POST',
                body: formData
            });

            let response = await request.json();

            if (response.status == "error") {
                error("errorSaveProduct", "alert-danger", response.message);
            } else if (response.status == "ok") {
                reloadProductTable();
                clearProduct();
                error("errorSaveProduct", "alert-success", response.message);
            } else {
                error("errorSaveProduct", "alert-danger", "Algo salio mal");
            }
        } catch (error) {
            console.log(error);
        } finally {
            hideSpinner();
        }
    })()
});
/*****************************************************************************
 *                               guardar Categoria                *
 ******************************************************************************/

let frmcategoria = document.querySelector('#frmCategoryTable');
frmcategoria.addEventListener('submit', e => {
    e.preventDefault();
    config.validateToken();

    let formData = new FormData(document.getElementById("frmCategoryTable"));
    let imageFile = document.getElementById("imageCategory").files[0];
    formData.append('image', imageFile);

    (async function () {
        try {
            showSpinner();
            let request = await fetch(`${config.API}category/`, {
                headers: { Authorization: `Bearer ${config.token}` },
                method: 'POST',
                body: formData
            });


            let response = await request.json();
            console.log(response);

            if (response.status == "error") {
                error("errorSaveCategory", "alert-danger", response.message);
            } else if (response.status == "ok") {
                reloadCatTable();
                clearCategory();
                error("errorSaveCategory", "alert-success", response.message);
            } else {
                error("errorSaveCategory", "alert-danger", "Algo salio mal");
            }
        } catch (error) {
            console.log(error);
        } finally {
            hideSpinner();
        }

    })()
});

/*****************************************************************************
 *                               guardar Garnish              *
 ******************************************************************************/
let frmGarnis=document.querySelector('#frmGarnish');
frmGarnis.addEventListener('submit', e => {

    e.preventDefault();
    config.validateToken();

    let body = {};
    let formData = new FormData(document.getElementById("frmGarnish"));
    formData.forEach((value, key) => {body[key] = value});

    (async function () {
        try {
            showSpinner();
            let request = await fetch(`${config.API}garnish/`,{
                headers: {"Content-Type":"application/json" , Authorization: `Bearer ${config.token}`},
                method: 'POST',body: JSON.stringify(body)});
            let response = await request.json();

            if (response.status == "error") {
                error("errorSaveGarnis","alert-danger" , response.message);
            } else if (response.status == "ok") {
                reloadGarTable();
                clearGarnish();
                error("errorSaveGarnis","alert-success" , response.message);
            } else {
                error("errorSaveGarnis","alert-danger" , "Algo salio mal");
            }
        } catch (error) {
            console.log(error);
        }finally {
            hideSpinner();
        }
    })()
});

/*****************************************************************************
 *                               traer datos de rol                  *
 ******************************************************************************/
async function getRolUpdate() {
    try { showSpinner();
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
    }finally {
        hideSpinner();
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
let catTable;
let proTable;
let garTable;
// Function to initialize and show the product table
const showAllproduct = () => {
    showSpinner();
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
          <button type='button' class='delete' data-bs-toggle='modal' data-bs-target='#modalProductDelete'>
            <i class='fa fa-trash' aria-hidden='true'></i>
          </button>
          <button type='button' class='edit' data-bs-toggle='modal' data-bs-target='#updatePro'>
            <i class='fa fa-edit' aria-hidden='true'></i>
          </button>
        
        `
            }
        ],
        "columnDefs": [
            // {"targets": [0], "visible": false, "searchable": false},
            {"targets": [0], "width": "20%"},
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
    getDataCatDelete();
    setTimeout(()=>{
        hideSpinner();
    },2000)
};
console.log(productTable)
// Function to reload the product table
const reloadProductTable = () => {
    productTable.ajax.reload();
};


//*************** Tabla categoria* **************************/
const showAllcat = () => {
    showSpinner();
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
          <button type='button' class='delete' data-bs-toggle='modal' data-bs-target='#modalCatDelete'>
            <i class='fa fa-trash' aria-hidden='true'></i>
          </button>
          <button type='button' class='edit' data-bs-toggle='modal' data-bs-target='#updateCat'>
            <i class='fa fa-edit' aria-hidden='true'></i>
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
    setTimeout(()=>{
        hideSpinner();
    },2000)
};
console.log(catTable)
// Function to reload the product table
const reloadCatTable = () => {
    catTable.ajax.reload();
};

//*********************************** table garnish ********************************************************/


const showAllGarnish = () => {
    showSpinner();
    garTable = $('#garTable').DataTable({
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
            "url": `${config.API}garnish/`,
            "headers": {
                "Content-Type": "application/json",
                Authorization: `Bearer ${config.token}`
            }
        },
        'columns': [
            {"data": "ID"},
            {"data": "Producto"},
            {"data": "Garnish"},
            {"data": "Precio"},
            {"data": "Fecha"},
            {
                "defaultContent": `
          <button type='button' class='delete' data-bs-toggle='modal' data-bs-target='#modalUserDelete'>
            <i class='fa fa-trash' aria-hidden='true'></i>
          </button>
          <button type='button' class='edit' data-bs-toggle='modal' data-bs-target='#updateUser'>
            <i class='fa fa-edit' aria-hidden='true'></i>
          </button>
       
        `
            }
        ],
        "columnDefs": [
            {"targets": [0], "width": "30%"},
            {"targets": [1], "width": "30%"},
            {"targets": [2], "width": "30%"},
            {"targets": [3], "width": "30%"},
            {"targets": [3], "width": "30%"},

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
    setTimeout(()=>{
        hideSpinner();
    },2000)
};
console.log(garTable)
// Function to reload the product table
const reloadGarTable = () => {
    garTable.ajax.reload();
};

//*********************************** clear form ********************************************************/
const inputCatName=document.querySelector('#nameProduct');
const CatImage=document.querySelector('#imageCategory');
const proName=document.querySelector('#nameProductT');
const proPreci=document.querySelector('#priceProduct');
const proDesc=document.querySelector('#description');
const proImage=document.querySelector('#productImage');
const garName=document.querySelector('#namePro');
const garPreci=document.querySelector('#price');

function clearCategory(){
inputCatName.value='';
CatImage.value='';
}

const clearProduct=()=>{
    proName.value='';
    proPreci.value='';
    proDesc.value='';
    proImage.value='';
}

const clearGarnish=()=>{
    garName.value='';
    garPreci.value='';
}
