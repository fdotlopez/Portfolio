<?php

$nombre = $_POST['nombre'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];
$para = "fran@worksbylopez.com";
$titulo = "PORTFOLIO FRAN";
$header = "FROM: ".$email;
$msjCorreo = "Nombre: ".$nombre."\n E-Mail: ".$email."\n Mensaje:\n".$mensaje;

if (isset($_POST['submit'])) {
	if (mail($para, $titulo, $msjCorreo, $header)) {
		echo "<script language='javascript'>alert('Mensaje enviado correctamente, muchas gracias. Te daré respuesta lo antes posible.');</script>";
	} else {
		echo "Fallo de envío";
	}
}

echo"<script language='javascript'>window.location='index.html'</script>;"

?>
