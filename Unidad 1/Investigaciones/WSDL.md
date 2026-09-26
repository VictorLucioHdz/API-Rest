¿Que es un WSDL?
Es un formato basado en XML que se utiliza para describir de forma estructurada un servicio web. Funciona como un contrato o manual de instrucciones que le indica a un cliente cómo conectarse y comunicarse con un servidor.

1. types (Tipos de datos)
   Propósito: Define los tipos de datos utilizados en los mensajes que intercambia el servicio. Utiliza el esquema estándar XML Schema Definition (XSD). Aquí se especifican la estructura y los tipos de datos (cadenas, enteros, objetos complejos) de los parámetros de entrada y respuesta.

2. message (Mensajes)
   Propósito: Define la estructura abstracta de los datos transmitidos en una operación. Cada mensaje representa una solicitud (request) o una respuesta (response) e incluye una o más partes (elementos part) que hacen referencia a los tipos definidos en la sección types.

3. portType (Interfaz u Operaciones)
   Propósito: Agrupa un conjunto de operaciones que el servicio puede realizar (equivale a una interfaz o clase abstracta en programación orientada a objetos).Contiene elementos de tipo operation. Cada operación especifica su mensaje de entrada (input), su mensaje de salida (output) y opcionalmente un mensaje de error (fault).

4. binding (Enlace o Protocolo)
   Propósito: Conecta las definiciones abstractas del portType con los detalles concretos del protocolo de comunicación y el formato de los datos. Especifica el protocolo utilizado (por ejemplo, SOAP sobre HTTP), el estilo de codificación (document o rpc) y las acciones SOAP (atributo soapAction) asociadas a cada operación.

5. service y port (Servicio y Punto de acceso)
   Propósito: Define el punto final (endpoint) donde se encuentra alojado el servicio web.
   El elemento service agrupa uno o varios elementos port. Cada puerto vincula un binding con una dirección URL concreta a través de la propiedad de dirección SOAP (soap:address location).
