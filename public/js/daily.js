const cron = require('node-cron');
const axios = require('axios');

// URL de la API para actualizar los límites diarios
const apiURL = 'http://api.local/daily/';

// Tarea programada para restablecer los límites diarios a 0 todos los días a la medianoche
cron.schedule('56 21 * * *', async () => {
    try {
        // Lógica para consumir la API y restablecer los límites diarios a 0 (pseudocódigo)
        await resetDailyLimitsToZero();
        console.log('Límites diarios restablecidos a 0.');
    } catch (error) {
        console.error('Error al restablecer los límites diarios:', error);
    }
});

async function resetDailyLimitsToZero() {
    try {
        // Realizar una solicitud a la API para actualizar los límites diarios
        const response = await axios.put(apiURL);

        if (response.status === 200) {
            console.log('Límites diarios actualizados correctamente en la API.');
        } else {
            console.error('Error al actualizar los límites diarios en la API.');
        }
    } catch (error) {
        console.error('Error en la solicitud a la API:', error);
    }
}
