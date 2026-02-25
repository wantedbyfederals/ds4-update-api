function startScan() {
    const target = document.getElementById('target').value;
    const ports = document.getElementById('ports').value;

    if (window.chrome && window.chrome.webview) {
        // Enviamos un JSON al C++
        window.chrome.webview.postMessage({
            action: "START_SCAN",
            ip: target,
            portRange: ports
        });
    } else {
        console.log("WebView2 no detectado. Datos:", target, ports);
    }
}

// Función que llamará tu C++ para mostrar resultados
function updateStatus(message) {
    console.log("Status desde C++:", message);
    // Aquí puedes añadir lógica para mostrar puertos abiertos en la UI
}
