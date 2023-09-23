const token = localStorage.getItem("token");

const tableCategory=document.querySelector('#table-lock-category');
document.addEventListener('DOMContentLoaded',()=>{
    tableCategory.style.display="block";
    showLockCategory();
    showLockProduct();
})
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


let lockCategory;
const showLockCategory = () =>{
    let hasBlockedCategory = false;
    lockCategory = $('#lockCatTable').DataTable({
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
            "url" : `https://api.worldingfoods.com//category/`,
            "headers": {
                Authorization: `Bearer ${token}`
            }
        },
        'columns' :[
            {"data" : "category_id"},
            {"data" : "name"},
            {
                "data": "is_blocked",
                "render": function(data, type, row) {
                    if (row.is_blocked === 1 || row.is_blocked === "true") {
                        hasBlockedCategory = true;

                        if (hasBlockedCategory) {
                            $('#slideThree_All').prop('checked', true);
                        }
                    }
                    let statusText = row.is_blocked === 1 || row.is_blocked === "true" ? "Activada" : "Desactivada";
                    return statusText;
                }
            },

            {
                "data": "category_id",
                "render": function(data, type, row) {
                    let isBlocked = row.is_blocked === 1|| row.is_blocked === "true"; // Convertir a booleano si es un string "true"
                    let checked = isBlocked ? "checked" : "";

                    return "<div class='slideThree'>" +
                        "<input type='checkbox' value='None' id='slideThree_" + data + "' name='check' " + checked + " data-category-id='" + data + "' />" +
                        "<label for='slideThree_" + data + "'></label>" +
                        "</div>";
                }

            }
        ],
        "columnDefs": [   // atributo para ocultar columna
            // {"targets": [0],"visible": false,"searchable": false},
            {"targets": [0], "width": "10%"},
            {"targets": [1], "width": "10%"},
            {"targets": [2], "width": "10%"},
            {"targets": [3], "width": "2%"},



        ]
    });
    $('#lockCatTable').on('change', 'input[type="checkbox"]', function() {
        let checkbox = $(this);
        let category_id = checkbox.data('category-id');
        let is_blocked = checkbox.prop('checked');
        console.log([is_blocked,category_id])
        $.ajax({
            type: 'PUT',
            url: `https://api.worldingfoods.com//lock/${is_blocked}/${category_id}`,
            headers: {
                Authorization: `Bearer ${token}`
            },
            success: function(response) {
                console.log(response);
                checkbox.prop('checked', response.is_blocked);
                localStorage.setItem(`checkbox_state_${category_id}`, response.is_blocked);

                Swal.fire({
                    title: 'Éxito',
                    text: 'El bloqueo fue cambiado correctamente',
                    icon: 'success'
                }).then(() => {
                    reloadCatTable();
                });
            },
            error: function(xhr) {
                if (xhr.responseJSON && xhr.responseJSON.message) {
                    Swal.fire({
                        title: 'Error',
                        text: xhr.responseJSON.message,
                        icon: 'error'
                    });
                    console.log(xhr.responseJSON.message); // Muestra el mensaje de error en la consola
                } else {
                    Swal.fire({
                        title: 'Error',
                        text: xhr.responseText,
                        icon: 'error'
                    });
                    console.log('Error en la solicitud:', xhr.responseText);
                }
            }
        });
    });

}
$(document).ready(function() {
    $('#lockCatTable input[type="checkbox"]').each(function() {
        let category_id = $(this).data('category-id');
        let savedState = localStorage.getItem(`checkbox_state_${category_id}`);

        if (savedState !== null) {
            $(this).prop('checked', savedState === 'true');
        }
    });
});


let lockProduct;
const showLockProduct = () => {
    let hasBlockedPro = false;

    lockProduct = $('#lockProTable').DataTable({
        "rowCallback": function (row, data, index) {
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
        'ajax': {
            "method": "GET",
            "url": `https://api.worldingfoods.com//product/`,
            "headers": {
                Authorization: `Bearer ${token}`
            }
        },
        'columns': [
            {"data": "ID"},
            {"data": "Categoría"},
            {"data": "Producto"},
            {
                "data": "is_blocked",
                "render": function(data, type, row) {
                    if (row.is_blocked === 1 || row.is_blocked === "true") {
                        hasBlockedPro = true;

                        if (hasBlockedPro) {
                            $('#slideThree_All2').prop('checked', true);
                        }
                    }

                    let statusText = row.is_blocked === 1 || row.is_blocked === "true" ? "Activada" : "Desactivada";
                    return statusText;
                }
            },

            {
                "data": "ID", // Cambiado de "category_id" a "ID"
                "render": function (data, type, row) {
                    let isBlocked = row.is_blocked === 1 || row.is_blocked === "true";
                    let checked = isBlocked ? "checked" : "";

                    return "<div class='slideThree'>" +
                        "<input type='checkbox' value='None' id='slideThreep" + data + "' name='check' " + checked + " data-category-id='" + data + "' />" +
                        "<label for='slideThreep" + data + "'></label>" +
                        "</div>";
                }

            }
        ],
        "columnDefs": [
            {"targets": [0], "width": "10%"},
            {"targets": [1], "width": "20%"},
            {"targets": [2], "width": "20%"},
            {"targets": [3], "width": "2%"},

        ]
    });

    $('#lockProTable').on('change', 'input[type="checkbox"]', function() {
        let checkbox = $(this);
        let category_id = checkbox.data('category-id');
        let is_blocked = checkbox.prop('checked');



        $.ajax({
            type: 'POST',
            url: `https://api.worldingfoods.com//lock/${is_blocked}/${category_id}`,
            headers: {
                Authorization: `Bearer ${token}`
            },
            success: function(response) {
                console.log(response);
                checkbox.prop('checked', response.is_blocked);
                localStorage.setItem(`checkbox_state_${category_id}`, response.is_blocked);

                Swal.fire({
                    title: 'Éxito',
                    text: 'El bloqueo fue cambiado correctamente',
                    icon: 'success'
                }).then(() => {
                    reloadProTable()
                });
            },
            error: function(xhr) {
                if (xhr.responseJSON && xhr.responseJSON.message) {
                    Swal.fire({
                        title: 'Error',
                        text: xhr.responseJSON.message,
                        icon: 'error'
                    });
                    console.log(xhr.responseJSON.message); // Muestra el mensaje de error en la consola
                } else {
                    Swal.fire({
                        title: 'Error',
                        text: xhr.responseText,
                        icon: 'error'
                    });
                    console.log('Error en la solicitud:', xhr.responseText);
                }
            }
        });
    });
}

const reloadProTable = () => {
    lockProduct.ajax.reload();
}

const reloadCatTable = () => {
    lockCategory.ajax.reload();
}
let customInput = `
    <div class='slideThree'>
        <input type='checkbox' value='None' id='slideThree_All' name='check' data-category-id='All' />
        <label for='slideThree_All'></label>
    </div>
    <label for='slideThree_All'>Todas las categorías</label>
`;

$('#checkboxContainer').html(customInput);

// Verificar y mantener el estado del checkbox al hacer clic
let checkboxAll = $('#slideThree_All');

// Manejador de evento para el clic en el checkbox
$('#checkboxContainer').on('change', 'input[type="checkbox"]', function() {
    // Obtener el estado del checkbox
    let isChecked = $(this).prop('checked');
    console.log(isChecked);

    if ($(this).attr('id') === 'slideThree_All') {
        checkboxAll.prop('checked', isChecked);
    }



        $.ajax({
            type: 'PUT', // O el método que necesites (GET, PUT, etc.)
            url: `https://api.worldingfoods.com/category-change/${isChecked}`,
            headers: {
                Authorization: `Bearer ${token}`
            },

            success: function(response) {
                Swal.fire({
                    title: 'Éxito',
                    text: 'El bloqueo fue cambiado correctamente',
                    icon: 'success'
                }).then(() => {
                    reloadCatTable();
                });
                // Manejar la respuesta de la API
                console.log(response);
            },
            error: function(error) {
                // Manejar errores en la petición
                console.error('Error en la petición:', error);
            }
        });

});

//producto

let customInputPr = `
    <div class='slideThree'>
        <input type='checkbox' value='None' id='slideThree_All2' name='check' data-category-id='All' />
        <label for='slideThree_All2'></label>
    </div>
    <label for='slideThree_All2'>Todos los platos</label>
`;

$('#checkboxContainer2').html(customInputPr);

// Verificar y mantener el estado del checkbox al hacer clic
let checkboxAll2 = $('#slideThree_All2');

// Manejador de evento para el clic en el checkbox
$('#checkboxContainer2').on('change', 'input[type="checkbox"]', function() {
    // Obtener el estado del checkbox
    let isChecked = $(this).prop('checked');
    console.log(isChecked);

    if ($(this).attr('id') === 'slideThree_All2') {
        checkboxAll2.prop('checked', isChecked);
    }



    $.ajax({
        type: 'PUT', // O el método que necesites (GET, PUT, etc.)
        url: `https://api.worldingfoods.com/product-change/${isChecked}`,
        headers: {
            Authorization: `Bearer ${token}`
        },

        success: function(response) {
            Swal.fire({
                title: 'Éxito',
                text: 'El bloqueo fue cambiado correctamente',
                icon: 'success'
            }).then(() => {
                reloadProTable();
            });
            // Manejar la respuesta de la API
            console.log(response);
        },
        error: function(error) {
            // Manejar errores en la petición
            console.error('Error en la petición:', error);
        }
    });

});
