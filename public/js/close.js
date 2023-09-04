const cron = require('node-cron');
const axios = require('axios');

// URL de la API para actualizar los límites diarios
const apiURL = 'https://api.worldingfoods.com/blocktime/';

// Tarea programada para restablecer los límites diarios a 0 todos los días a la medianoche
cron.schedule('13 17 * * *', async () => {
    try {
        // Lógica para consumir la API y restablecer los límites diarios a 0 (pseudocódigo)
        await resetDailyLimitsToZero();
        console.log('Producto no disponible restablecidos.');
    } catch (error) {
        console.error('Error al restablecer los productos no disponible:', error);
    }
});

async function resetDailyLimitsToZero() {
    try {
        // Realizar una solicitud a la API para actualizar los límites diarios
        const response = await axios.get(apiURL);

        if (response.status === 200) {
            console.log('producto no disponible actualizados correctamente en la API.');
        } else {
            console.error('Error al actualizar los límites diarios en la API.');
        }
    } catch (error) {
        console.error('Error en la solicitud a la API:', error);
    }
}
