<?php
$apiUrl = "http://api.local/blocktime/";

// Configura la solicitud cURL
$ch = curl_init($apiUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

// Ejecuta la solicitud cURL
$response = curl_exec($ch);

// Verifica si la solicitud fue exitosa
if ($response === false) {
    echo "Error en la solicitud: " . curl_error($ch);
} else {
    echo "Solicitud exitosa: " . $response;
}

// Cierra la sesión cURL
curl_close($ch);
?>
