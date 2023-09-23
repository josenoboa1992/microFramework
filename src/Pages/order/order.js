// JavaScript
const token = localStorage.getItem("token");

document.addEventListener('DOMContentLoaded', () => {
    // Retrieve the active tab index from sessionStorage
    const activeTab = sessionStorage.getItem('activeTab');
    if (activeTab) {
        // Show the active tab
        const tabContent = document.querySelector('.tab-content');
        const tabs = tabContent.querySelectorAll('.tab-pane');
        tabs.forEach((tab, index) => {
            if (index.toString() === activeTab) {
                tab.classList.add('show', 'active');
            } else {
                tab.classList.remove('show', 'active');
            }
        });

        // Update the active tab link
        const tabLinks = document.querySelectorAll('#myTab .nav-link');
        tabLinks.forEach((tabLink, index) => {
            if (index.toString() === activeTab) {
                tabLink.classList.add('active');
            } else {
                tabLink.classList.remove('active');
            }
        });
    }

    // Add click event listeners to tab links to store the active tab index in sessionStorage
    const tabLinks = document.querySelectorAll('#myTab .nav-link');
    tabLinks.forEach((tabLink, index) => {
        tabLink.addEventListener('click', () => {
            sessionStorage.setItem('activeTab', index.toString());
        });
    });

    orderPending();
    orderProcess();
    orderReady();
    orderCompleted()
});

async function orderProcess() {
    try {
        const request = await fetch(`https://api.worldingfoods.com//order/process`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        });

        const response = await request.json();

        if (response.status === "error") {
            // error("errorSaveUser", "alert-danger", response.message);
        } else if (Array.isArray(response.data)) {
            const cardContainer = document.getElementById('cardContend-process');
            cardContainer.innerHTML = ''; // Limpiar contenido existente

            response.data.forEach(order => {
                const cardDiv = document.createElement('div');
                cardDiv.className = 'col-md-4 mb-4';

                const card = document.createElement('div');
                card.className = 'card';

                const cardBody = document.createElement('div');
                cardBody.className = 'card-body';

                const orderTitle = document.createElement('h5');
                orderTitle.className = 'card-title';
                orderTitle.innerHTML = `Orden: <span>#${order.order_id}</span>`;

                const hr = document.createElement('hr');

                const customerInfoTitle = document.createElement('p');
                customerInfoTitle.className = 'card-text instruction';
                customerInfoTitle.textContent = 'Datos del Cliente';

                const customerName = document.createElement('p');
                customerName.className = 'card-text';
                customerName.textContent = `Cliente: ${order.client_name}`;

                const customerAddress = document.createElement('p');
                customerAddress.className = 'card-text';
                customerAddress.textContent = `Dirección: ${order.address}`;

                const customerPhone = document.createElement('p');
                customerPhone.className = 'card-text';
                customerPhone.textContent = `Teléfono: ${order.client_phone}`;

                const companyName = document.createElement('p');
                companyName.className = 'card-text';
                companyName.innerHTML = `Pertenece a la Empresa: <span style="color: #12670b">${order.name_company}</span>`;

                const deliveryTime = document.createElement('p');
                deliveryTime.className = 'card-text';
                deliveryTime.innerHTML = `<b>Horario de entrega:</b> ${getDeliveryTime(order.preparation_instructions)}`;

                const instructionTitle = document.createElement('p');
                instructionTitle.className = 'card-text instruction';
                instructionTitle.innerHTML = '<b>Instrucción:</b>';

                const quantityInfo = document.createElement('p');
                quantityInfo.className = 'card-text';
                quantityInfo.innerHTML = `<span style="color: green">Cantidad: ${getQuantity(order.preparation_instructions)}</span>`;

                const productInfo = document.createElement('p');
                productInfo.className = 'card-text';
                productInfo.textContent = `Producto: ${getProductsText(order.preparation_instructions)}`;

                const garnishInfo = document.createElement('p');
                garnishInfo.className = 'card-text';
                garnishInfo.textContent = `Guarniciones: ${getGarnishesText(order.preparation_instructions)}`;

                const statusSelect = document.createElement('select');
                statusSelect.className = 'btn-outline-success form-control';
                statusSelect.name = 'estado';
                statusSelect.id = 'status';

                const statusOption2 = document.createElement('option');
                statusOption2.value = 'process';
                statusOption2.textContent = 'en Proceso';

                const statusOption3 = document.createElement('option');
                statusOption3.value = 'ready';
                statusOption3.textContent = 'Listo';

                // Agregar las opciones al select
                statusSelect.appendChild(statusOption2);
                statusSelect.appendChild(statusOption3);

                // Agregar evento "change" al select para actualizar el estado
                statusSelect.addEventListener('change', function() {
                    const newStatus = this.value; // Obtener el valor seleccionado
                    const orderId = order.order_id; // Obtener el ID de la orden
                    updateStatus(orderId, newStatus); // Llamar a la función para actualizar el estado
                });

                // Agregar todos los elementos al DOM en la estructura deseada
                cardBody.appendChild(orderTitle);
                cardBody.appendChild(hr);
                cardBody.appendChild(customerInfoTitle);
                cardBody.appendChild(customerName);
                cardBody.appendChild(customerAddress);
                cardBody.appendChild(customerPhone);
                cardBody.appendChild(companyName);
                cardBody.appendChild(deliveryTime);
                cardBody.appendChild(instructionTitle);
                cardBody.appendChild(quantityInfo);
                cardBody.appendChild(productInfo);
                cardBody.appendChild(garnishInfo);
                cardBody.appendChild(statusSelect);

                card.appendChild(cardBody);
                cardDiv.appendChild(card);
                cardContainer.appendChild(cardDiv);
            });
        } else {
            console.error("La propiedad data no es un array:", response);
        }
        updateTabCounters();
    } catch (error) {
        console.error("Error en la función orderProcess:", error);
    } finally {
        // Aquí puedes realizar alguna acción adicional después de pintar el HTML, si es necesario.
    }
}

async function orderPending() {
    try {
        const request = await fetch(`https://api.worldingfoods.com//order/pending`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        });

        const response = await request.json();


        if (response.status === "error") {
            // error("errorSaveUser", "alert-danger", response.message);
        } else if (Array.isArray(response.data)) {
            const cardContainer = document.getElementById('cardContend');
            cardContainer.innerHTML = ''; // Limpiar contenido existente

            response.data.forEach(order => {
                const cardDiv = document.createElement('div');
                cardDiv.className = 'col-md-4 mb-4';

                const card = document.createElement('div');
                card.className = 'card';

                const cardBody = document.createElement('div');
                cardBody.className = 'card-body';

                const orderTitle = document.createElement('h5');
                orderTitle.className = 'card-title';
                orderTitle.innerHTML = `Orden: <span>#${order.order_id}</span>`;

                const hr = document.createElement('hr');

                const customerInfoTitle = document.createElement('p');
                customerInfoTitle.className = 'card-text instruction';
                customerInfoTitle.textContent = 'Datos del Cliente';

                const customerName = document.createElement('p');
                customerName.className = 'card-text';
                customerName.textContent = `Cliente: ${order.client_name}`;

                const customerAddress = document.createElement('p');
                customerAddress.className = 'card-text';
                customerAddress.textContent = `Dirección: ${order.address}`;

                const customerPhone = document.createElement('p');
                customerPhone.className = 'card-text';
                customerPhone.textContent = `Teléfono: ${order.client_phone}`;

                const companyName = document.createElement('p');
                companyName.className = 'card-text';
                companyName.innerHTML = `Pertenece a la Empresa: <span style="color: #12670b">${order.name_company}</span>`;

                const deliveryTime = document.createElement('p');
                deliveryTime.className = 'card-text';
                deliveryTime.innerHTML = `<b>Horario de entrega:</b> ${getDeliveryTime(order.preparation_instructions)}`;

                const instructionTitle = document.createElement('p');
                instructionTitle.className = 'card-text instruction';
                instructionTitle.innerHTML = '<b>Instrucción:</b>';

                const quantityInfo = document.createElement('p');
                quantityInfo.className = 'card-text';
                quantityInfo.innerHTML = `<span style="color: green">Cantidad: ${getQuantity(order.preparation_instructions)}</span>`;

                const productInfo = document.createElement('p');
                productInfo.className = 'card-text';
                productInfo.textContent = `Producto: ${getProductsText(order.preparation_instructions)}`;

                const garnishInfo = document.createElement('p');
                garnishInfo.className = 'card-text';
                garnishInfo.textContent = `Guarniciones: ${getGarnishesText(order.preparation_instructions)}`;

                const statusSelect = document.createElement('select');
                statusSelect.className = 'btn-outline-success form-control';
                statusSelect.name = 'estado';
                statusSelect.id = 'status';

                const statusOption1 = document.createElement('option');
                statusOption1.value = 'pending';
                statusOption1.textContent = 'Pendiente';

                const statusOption2 = document.createElement('option');
                statusOption2.value = 'process';
                statusOption2.textContent = 'en Proceso';

                // Agregar las opciones al select
                statusSelect.appendChild(statusOption1);
                statusSelect.appendChild(statusOption2);

                // Agregar evento "change" al select para actualizar el estado
                statusSelect.addEventListener('change', function() {
                    const newStatus = this.value; // Obtener el valor seleccionado
                    const orderId = order.order_id; // Obtener el ID de la orden
                    updateStatus(orderId, newStatus); // Llamar a la función para actualizar el estado
                });

                // Agregar todos los elementos al DOM en la estructura deseada
                cardBody.appendChild(orderTitle);
                cardBody.appendChild(hr);
                cardBody.appendChild(customerInfoTitle);
                cardBody.appendChild(customerName);
                cardBody.appendChild(customerAddress);
                cardBody.appendChild(customerPhone);
                cardBody.appendChild(companyName);
                cardBody.appendChild(deliveryTime);
                cardBody.appendChild(instructionTitle);
                cardBody.appendChild(quantityInfo);
                cardBody.appendChild(productInfo);
                cardBody.appendChild(garnishInfo);
                cardBody.appendChild(statusSelect);

                card.appendChild(cardBody);
                cardDiv.appendChild(card);
                cardContainer.appendChild(cardDiv);
            });
        } else {
            console.error("La propiedad data no es un array:", response);
        }
        updateTabCounters();
    } catch (error) {
        console.error("Error en la función orderPending:", error);
    } finally {
        // Aquí puedes realizar alguna acción adicional después de pintar el HTML, si es necesario.
    }
}

async function orderReady() {
    try {
        const request = await fetch(`https://api.worldingfoods.com//order/ready`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        });

        const response = await request.json();

        if (response.status === "error") {
            // error("errorSaveUser", "alert-danger", response.message);
        } else if (Array.isArray(response.data)) {
            const cardContainer = document.getElementById('cardContend-ready');
            cardContainer.innerHTML = ''; // Limpiar contenido existente

            response.data.forEach(order => {
                const cardDiv = document.createElement('div');
                cardDiv.className = 'col-md-4 mb-4';

                const card = document.createElement('div');
                card.className = 'card';

                const cardBody = document.createElement('div');
                cardBody.className = 'card-body';

                const orderTitle = document.createElement('h5');
                orderTitle.className = 'card-title';
                orderTitle.innerHTML = `Orden: <span>#${order.order_id}</span>`;

                const hr = document.createElement('hr');

                const customerInfoTitle = document.createElement('p');
                customerInfoTitle.className = 'card-text instruction';
                customerInfoTitle.textContent = 'Datos del Cliente';

                const customerName = document.createElement('p');
                customerName.className = 'card-text';
                customerName.textContent = `Cliente: ${order.client_name}`;

                const customerAddress = document.createElement('p');
                customerAddress.className = 'card-text';
                customerAddress.textContent = `Dirección: ${order.address}`;

                const customerPhone = document.createElement('p');
                customerPhone.className = 'card-text';
                customerPhone.textContent = `Teléfono: ${order.client_phone}`;

                const companyName = document.createElement('p');
                companyName.className = 'card-text';
                companyName.innerHTML = `Pertenece a la Empresa: <span style="color: #12670b">${order.name_company}</span>`;

                const deliveryTime = document.createElement('p');
                deliveryTime.className = 'card-text';
                deliveryTime.innerHTML = `<b>Horario de entrega:</b> ${getDeliveryTime(order.preparation_instructions)}`;

                const instructionTitle = document.createElement('p');
                instructionTitle.className = 'card-text instruction';
                instructionTitle.innerHTML = '<b>Instrucción:</b>';

                const quantityInfo = document.createElement('p');
                quantityInfo.className = 'card-text';
                quantityInfo.innerHTML = `<span style="color: green">Cantidad: ${getQuantity(order.preparation_instructions)}</span>`;

                const productInfo = document.createElement('p');
                productInfo.className = 'card-text';
                productInfo.textContent = `Producto: ${getProductsText(order.preparation_instructions)}`;

                const garnishInfo = document.createElement('p');
                garnishInfo.className = 'card-text';
                garnishInfo.textContent = `Guarniciones: ${getGarnishesText(order.preparation_instructions)}`;

                const statusSelect = document.createElement('select');
                statusSelect.className = 'btn-outline-success form-control';
                statusSelect.name = 'estado';
                statusSelect.id = 'status';

                const statusOption3 = document.createElement('option');
                statusOption3.value = 'ready';
                statusOption3.textContent = 'Listo';

                const statusOption4 = document.createElement('option');
                statusOption4.value = 'completed';
                statusOption4.textContent = 'Completado';

                const statusOption5 = document.createElement('option');
                statusOption5.value = 'cancelled';
                statusOption5.textContent = 'Cancelado';

                // Agregar las opciones al select
                statusSelect.appendChild(statusOption3);
                statusSelect.appendChild(statusOption4);
                statusSelect.appendChild(statusOption5);

                // Agregar evento "change" al select para actualizar el estado
                statusSelect.addEventListener('change', function() {
                    const newStatus = this.value; // Obtener el valor seleccionado
                    const orderId = order.order_id; // Obtener el ID de la orden
                    updateStatus(orderId, newStatus); // Llamar a la función para actualizar el estado
                });

                // Agregar todos los elementos al DOM en la estructura deseada
                cardBody.appendChild(orderTitle);
                cardBody.appendChild(hr);
                cardBody.appendChild(customerInfoTitle);
                cardBody.appendChild(customerName);
                cardBody.appendChild(customerAddress);
                cardBody.appendChild(customerPhone);
                cardBody.appendChild(companyName);
                cardBody.appendChild(deliveryTime);
                cardBody.appendChild(instructionTitle);
                cardBody.appendChild(quantityInfo);
                cardBody.appendChild(productInfo);
                cardBody.appendChild(garnishInfo);
                cardBody.appendChild(statusSelect);

                card.appendChild(cardBody);
                cardDiv.appendChild(card);
                cardContainer.appendChild(cardDiv);
            });
        } else {
            console.error("La propiedad data no es un array:", response);
        }
        updateTabCounters();
    } catch (error) {
        console.error("Error en la función orderReady:", error);
    } finally {
        // Aquí puedes realizar alguna acción adicional después de pintar el HTML, si es necesario.
    }
}

async function orderCompleted() {
    try {
        const request = await fetch(`https://api.worldingfoods.com//order/completed`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        });

        const response = await request.json();


        if (response.status === "error") {
            // error("errorSaveUser", "alert-danger", response.message);
        } else if (Array.isArray(response.data)) {
            const cardContainer = document.getElementById('cardContend-completed');
            cardContainer.innerHTML = ''; // Limpiar contenido existente

            response.data.forEach(order => {

                const cardDiv = document.createElement('div');
                cardDiv.className = 'col-md-4 mb-4';

                const card = document.createElement('div');
                card.className = 'card';

                const cardBody = document.createElement('div');
                cardBody.className = 'card-body';

                const orderTitle = document.createElement('h5');
                orderTitle.className = 'card-title';
                orderTitle.innerHTML = `Orden: <span>#${order.order_id}</span>`;

                const hr = document.createElement('hr');

                const customerInfoTitle = document.createElement('p');
                customerInfoTitle.className = 'card-text instruction';
                customerInfoTitle.textContent = 'Datos del Cliente';

                const customerName = document.createElement('p');
                customerName.className = 'card-text';
                customerName.textContent = `Cliente: ${order.client_name}`;

                const customerAddress = document.createElement('p');
                customerAddress.className = 'card-text';
                customerAddress.textContent = `Dirección: ${order.address}`;

                const customerPhone = document.createElement('p');
                customerPhone.className = 'card-text';
                customerPhone.textContent = `Teléfono: ${order.client_phone}`;

                const companyName = document.createElement('p')
                companyName.className = 'card-text';
                companyName.innerHTML = `Pertenece a la Empresa: <span style="color: #12670b">${order.name_company}</span>`;

                const deliveryTime = document.createElement('p');
                deliveryTime.className = 'card-text';
                deliveryTime.innerHTML = `<b>Horario de entrega:</b> ${getDeliveryTime(order.preparation_instructions)}`;

                const instructionTitle = document.createElement('p');
                instructionTitle.className = 'card-text instruction';
                instructionTitle.innerHTML = '<b>Instrucción:</b>';

                const quantityInfo = document.createElement('p');
                quantityInfo.className = 'card-text';
                quantityInfo.innerHTML = `<span style="color: green">Cantidad: ${getQuantity(order.preparation_instructions)}</span>`;

                const productInfo = document.createElement('p');
                productInfo.className = 'card-text';
                productInfo.textContent = `Producto: ${getProductsText(order.preparation_instructions)}`;

                const garnishInfo = document.createElement('p');
                garnishInfo.className = 'card-text';
                garnishInfo.textContent = `Guarniciones: ${getGarnishesText(order.preparation_instructions)}`;

                const statusSelect = document.createElement('select');
                statusSelect.className = 'btn-outline-success form-control';
                statusSelect.name = 'estado';
                statusSelect.id = 'status';

                const statusOption4 = document.createElement('option');
                statusOption4.value = 'completed';
                statusOption4.textContent = 'Completado';

                const statusOption5 = document.createElement('option');
                statusOption5.value = 'cancelled';
                statusOption5.textContent = 'Cancelado';

                // Agregar las opciones al select
                statusSelect.appendChild(statusOption4);
                statusSelect.appendChild(statusOption5);

                // Agregar evento "change" al select para actualizar el estado
                statusSelect.addEventListener('change', function() {
                    const newStatus = this.value; // Obtener el valor seleccionado
                    const orderId = order.order_id; // Obtener el ID de la orden
                    updateStatus(orderId, newStatus); // Llamar a la función para actualizar el estado
                });

                // Agregar todos los elementos al DOM en la estructura deseada
                cardBody.appendChild(orderTitle);
                cardBody.appendChild(hr);
                cardBody.appendChild(customerInfoTitle);
                cardBody.appendChild(customerName);
                cardBody.appendChild(customerAddress);
                cardBody.appendChild(customerPhone);
                cardBody.appendChild(companyName);
                cardBody.appendChild(deliveryTime);
                cardBody.appendChild(instructionTitle);
                cardBody.appendChild(quantityInfo);
                cardBody.appendChild(productInfo);
                cardBody.appendChild(garnishInfo);
                cardBody.appendChild(statusSelect);

                card.appendChild(cardBody);
                cardDiv.appendChild(card);
                cardContainer.appendChild(cardDiv);
            });
        } else {
            console.error("La propiedad data no es un array:", response);
        }
        updateTabCounters();
    } catch (error) {
        console.error("Error en la función orderCompleted:", error);
    } finally {
        // Aquí puedes realizar alguna acción adicional después de pintar el HTML, si es necesario.
    }
}

function getProductsText(preparationInstructions) {
    try {
        const instructions = JSON.parse(preparationInstructions);
        const products = instructions.map(instruction => instruction.product_name);
        return products.join(', ');
    } catch (error) {
        console.error("Error al parsear las instrucciones de preparación:", error);
        return '';
    }
}

function getGarnishesText(preparationInstructions) {
    try {
        const instructions = JSON.parse(preparationInstructions);
        const garnishes = [];

        instructions.forEach(instruction => {
            const garnishNames = instruction.garnishes.map(garnish => garnish.name);
            garnishes.push(...garnishNames);
        });

        return garnishes.join(', ');
    } catch (error) {
        console.error("Error al parsear las instrucciones de preparación:", error);
        return '';
    }
}

function getQuantity(preparationInstructions) {
    try {
        const instructions = JSON.parse(preparationInstructions);
        let totalQuantity = 0;

        instructions.forEach(instruction => {
            totalQuantity += instruction.quantity;
        });

        return totalQuantity;
    } catch (error) {
        console.error("Error al parsear las instrucciones de preparación:", error);
        return 0;
    }
}

function getDeliveryTime(preparationInstructions) {
    try {
        const instructions = JSON.parse(preparationInstructions);

        // Objeto para contar la cantidad de veces que aparece cada hora
        const deliveryTimesCount = {};

        // Recorre las instrucciones y cuenta la cantidad de veces que aparece cada hora
        instructions.forEach(instruction => {
            const horaEntrega = instruction.horaEntrega;

            if (deliveryTimesCount[horaEntrega]) {
                deliveryTimesCount[horaEntrega]++;
            } else {
                deliveryTimesCount[horaEntrega] = 1;
            }
        });

        // Encuentra la hora que más se repite
        let maxCount = 0;
        let mostRepeatedHour = '';
        for (const horaEntrega in deliveryTimesCount) {
            if (deliveryTimesCount[horaEntrega] > maxCount) {
                maxCount = deliveryTimesCount[horaEntrega];
                mostRepeatedHour = horaEntrega;
            }
        }

        // Construye la cadena con la hora más repetida en rojo
        const deliveryTimeText = Object.keys(deliveryTimesCount)
            .map(horaEntrega => horaEntrega === mostRepeatedHour ? `<span style="color: red">${horaEntrega}</span>` : horaEntrega)
            .join(', ');

        return deliveryTimeText;
    } catch (error) {
        console.error("Error al parsear las instrucciones de preparación:", error);
        return '';
    }
}

function updateStatus(orderId, newStatus) {

    // Objeto con los datos a enviar en la solicitud
    const dataToSend = {
        status: newStatus
    };

    // Realizar la solicitud AJAX al endpoint updateStatus con jQuery
    $.ajax({
        url: `https://api.worldingfoods.com//order/${newStatus}/${orderId}`,
        type: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        data: JSON.stringify(dataToSend), // Convertir el objeto a JSON y enviarlo en el cuerpo de la solicitud
        success: function(data) {

            // Mostrar alert indicando que la orden fue actualizada
            alert("¡Orden Actualizada!");

            // Recargar la página después de cerrar el alert
            location.reload();
        },
        error: function(error) {
            console.error('Error al actualizar el estado:', error);
        }
    });
}

function format12HourTime(dateString) {
    const date = new Date(dateString);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes.toString().padStart(2, '0');
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
}

function updateTabCounters() {
    const tabs = document.querySelectorAll('.tab-pane');
    tabs.forEach((tab, index) => {
        const tabId = `tab${index + 1}`;
        const tabCounter = document.getElementById(`${tabId}Counter`);
        const cardContainer = tab.querySelector('.row');
        if (cardContainer) {
            const itemCount = cardContainer.childElementCount;
            tabCounter.textContent = itemCount;
        } else {
            tabCounter.textContent = '0';
        }
    });
}



// Llamar a la función de consulta con la última marca de tiempo al cargar la página
document.addEventListener('DOMContentLoaded',()=>{
    setInterval(function() {
        orderPending();
        orderProcess();
        orderReady();
        orderCompleted()
        console.log('cargando...')
    }, 10000);  // Llama a la función cada 10 segundos (10,000 milisegundos)

});
