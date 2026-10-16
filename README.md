# Reversa

Prototipo académico adaptable a celular y escritorio, basado en la PC1 de devolución de compras por internet.

## Abrir localmente

Desde esta carpeta: `python -m http.server 4173 --directory dist`

Abrir http://localhost:4173. También se puede abrir `dist/index.html` directamente; el servidor local ofrece un comportamiento más consistente del almacenamiento.

## Demostración

1. En Comprador, seleccionar Solicitar recojo.
2. Registrar una devolución ya autorizada, su código, fecha límite y destino del comercio.
3. Elegir una dirección de recojo, fecha y franja horaria. Confirmar la solicitud simulada.
4. Cambiar a Administrador, abrir Gestionar y asignar responsable.
5. Avanzar por recepción del paquete, traslado y entrega. Registrar quién recibió el paquete.
6. Regresar a Comprador, consultar el seguimiento y descargar la constancia de texto.
7. Para explorar un recojo fallido, registrar una incidencia antes de recoger y reprogramar.

Incluye búsqueda, filtros, exportación CSV y restauración de los ejemplos. Los pedidos se guardan en localStorage de este navegador; no hay sincronización entre dispositivos ni autenticación de roles. El selector de roles es para presentar el prototipo.

## Alcance y supuestos

Reversa externaliza exclusivamente el recojo y la entrega de productos con devolución previamente autorizada. No representa a las tiendas, no autoriza devoluciones y no tramita reembolsos. No se usan integraciones con comercios, pagos, mapas ni transportistas reales.

Las tarifas de S/ 15 y S/ 18, cinco distritos de Lima, límites del paquete y franjas horarias son hipótesis de diseño para probar la experiencia. No proceden de una validación de precio o factibilidad en la PC1. Se reserva al menos un día entre recojo y fecha límite como regla ilustrativa del piloto; no constituye una promesa operativa.

Todos los pedidos, nombres, contactos, estados y constancias son ficticios. El seguimiento termina en la entrega al comercio; su aceptación y el eventual reembolso son decisiones del comercio.

## Archivos

`dist/index.html`, `dist/styles.css`, `dist/app.js` y `dist/assets/logo.jpg`. Sin instalación ni compilación. Las fuentes web tienen alternativas locales si no hay internet.
