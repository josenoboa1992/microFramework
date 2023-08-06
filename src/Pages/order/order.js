// JavaScript
const token = localStorage.getItem("token");

document.addEventListener('DOMContentLoaded', () => {
    orderPending();
});

async function orderPending() {
    try {
        const request = await fetch(`http://api.local/order/pending`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        });

        const response = await request.json();
        console.log(response);

        if (response.status === "error") {
            // error("errorSaveUser", "alert-danger", response.message);
        } else if (Array.isArray(response.data)) {
            const cardContainer = document.getElementById('cardContend');
            cardContainer.innerHTML = ''; // Limpiar contenido existente

            response.data.forEach(order => {
                console.log(order);
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
                statusSelect.appendChild(statusOption1);
                statusSelect.appendChild(statusOption2);
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
    } catch (error) {
        console.error("Error en la función orderPending:", error);
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
    console.log(orderId, newStatus);

    // Objeto con los datos a enviar en la solicitud
    const dataToSend = {
        status: newStatus
    };

    // Realizar la solicitud AJAX al endpoint updateStatus con jQuery
    $.ajax({
        url: `http://api.local/order/${newStatus}/${orderId}`,
        type: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        data: JSON.stringify(dataToSend), // Convertir el objeto a JSON y enviarlo en el cuerpo de la solicitud
        success: function(data) {
            console.log(data); // Puedes hacer algo con la respuesta del servidor si es necesario
        },
        error: function(error) {
            console.error('Error al actualizar el estado:', error);
        }
    });
}