Autenticación Básica:
Consiste en tomar las credenciales nombre de usuario y contraseña, unirlas con dos puntos y codificarlas en Base64. Esta cadena se envía en cada petición HTTP dentro del encabezado

Autenticación Digest:
En lugar de enviar la contraseña codificada, el cliente y el servidor negocian un intercambio criptográfico en el cual el servidor envía un valor aleatorio de un solo uso y el cliente aplica una función hash que combina su contraseña con este y otros datos de la petición.

Autenticación Bearer :
En lugar de enviar credenciales en cada solicitud, el usuario se autentica una sola vez y el servidor le devuelve un token. Para todas las peticiones posteriores, envío ese token en el encabezado HTTP

API Key:
Consiste en generar una cadena de texto única y secreta que se le entrega al cliente. El cliente debe incluir esta llave en cada petición, ya sea en un encabezado personalizado, en la URL como parámetro, o en el cuerpo de la petición.

JSON Web Token:
En lugar de guardar una sesión en la memoria del servidor, el servidor emite un JWT que funciona como un gafete de empleado sellado criptográficamente

OAuth:
Permite que una aplicación acceda a los recursos de un usuario alojados en otro servicio, sin que el usuario tenga que entregarle su contraseña
