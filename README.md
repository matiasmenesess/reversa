# Reversa

**Tu devolución, sin tantas vueltas.**

Reversa propone recoger productos cuya devolución ya fue autorizada y llevarlos al punto indicado por el comercio. El comprador elige una franja de recojo y sigue el trayecto hasta la entrega, sin organizar el traslado por su cuenta.

Este proyecto incluye una **landing de propuesta de valor** y un **prototipo interactivo para compradores y administradores**, adaptados a celular y computadora. Parte de la investigación PC1 de Emprendimiento I sobre las dificultades de traslado, horarios y coordinación al devolver compras por internet.

> Prototipo académico en validación. Los pedidos, tarifas, responsables y entregas son simulados. No hay pagos, recojos reales ni integraciones con comercios.

## Qué incluye

| Experiencia | Ruta | Contenido |
| --- | --- | --- |
| Landing | `/` | Propuesta de valor, pasos, seguimiento ilustrativo, tarifa interactiva y preguntas frecuentes. |
| Comprador | `/app` | Pedidos de ejemplo, solicitud de recojo, seguimiento y reprogramación. |
| Nueva solicitud | `/app#new` | Devolución autorizada, dirección, fecha, franja y confirmación. |
| Administrador | `/app#admin` | Asignación de responsable, etapas, incidencias y exportación CSV. |

Las vistas comparten los pedidos del mismo navegador. El selector de roles permite presentar ambas partes del servicio; no es un sistema de autenticación.

## Tecnología y requisitos

HTML, CSS y JavaScript con módulos ES, Vite y pnpm. Los pedidos de demostración se conservan en `localStorage`. No requiere backend, base de datos, variables de entorno ni cuenta de ChatGPT.

- **Node.js 24**, indicado en `.nvmrc`.
- **pnpm 10.25.0**, indicado en `package.json`.
- Git y un navegador moderno.

Si no tienes pnpm, después de instalar Node.js ejecuta:

```sh
npm install --global pnpm@10.25.0
```

## Ejecutar en local

```sh
git clone https://github.com/matiasmenesess/reversa.git
cd reversa
pnpm install --frozen-lockfile
pnpm dev
```

- **Landing:** http://localhost:5173/
- **Aplicación:** http://localhost:5173/app

Si ya descargaste el proyecto, ejecuta los comandos desde la carpeta que contiene `package.json`. En la ubicación original de este trabajo, esa carpeta es `Emprendimiento Prototipo/reversa`.

El servidor actualiza la página al guardar cambios. Para detenerlo, presiona **Ctrl+C** en la terminal. El puerto 5173 es fijo: si está ocupado, detén el servidor anterior o usa `pnpm dev --port 5174` y abre ese puerto.

### Probar desde el celular

1. Conecta la computadora y el celular al mismo Wi-Fi.
2. Deja `pnpm dev` ejecutándose en la computadora.
3. Busca la dirección **Network** del adaptador Wi-Fi en la terminal.
4. Abre esa dirección en el celular, por ejemplo `http://192.168.1.20:5173`. Añade `/app` para entrar al prototipo.

Si Windows solicita acceso de red, permite el servidor en la red privada. No uses `localhost` en el celular: apunta al propio teléfono, no a la computadora.

## Recorrido de demostración

1. **Comprende la propuesta.** Recorre la landing y explora las etapas y el tamaño del paquete.
2. **Registra una solicitud.** En Comprador, elige **Solicitar recojo**. Usa datos ficticios y registra una devolución ya autorizada, su código, destino y fecha límite.
3. **Elige la cita.** Completa dirección, fecha y franja. Revisa la tarifa simulada y confirma.
4. **Coordina el servicio.** Cambia a **Administrador**, abre **Gestionar** y asigna un responsable.
5. **Avanza el trayecto.** Confirma el recojo, inicia el traslado y registra la entrega indicando quién recibió el paquete.
6. **Consulta el resultado.** Vuelve a Comprador, abre el seguimiento y descarga la constancia simulada de texto.
7. **Explora una incidencia.** En otra solicitud pendiente, registra una incidencia antes del recojo y reprograma la cita para continuar.

Incluye búsqueda, filtros y exportación CSV en administración. **Reiniciar demostración** restaura los ejemplos y elimina las solicitudes creadas en ese navegador, previa confirmación.

## Compilar y revisar

```sh
pnpm build
pnpm preview
```

La compilación genera archivos optimizados en `dist/`. La revisión se abre en http://localhost:4173. Comprueba `/`, `/app` y `/app#new`.

`pnpm preview` sirve para revisar la compilación localmente. Para compartir el proyecto por internet, publica `dist/` en un proveedor de hosting.

## Desplegar en Vercel

El repositorio incluye `vercel.json` con los comandos, la carpeta de salida y la reescritura que permite abrir `/app` directamente.

1. Entra a [Vercel](https://vercel.com/) con tu cuenta.
2. Selecciona **Add New → Project** e importa `matiasmenesess/reversa` desde GitHub. Necesitas acceso al repositorio.
3. Revisa estos valores:

   | Ajuste | Valor |
   | --- | --- |
   | Framework Preset | Vite |
   | Root Directory | Raíz del repositorio (`./`) |
   | Install Command | `pnpm install --frozen-lockfile` |
   | Build Command | `pnpm build` |
   | Output Directory | `dist` |
   | Node.js Version | 24.x |
   | Environment Variables | Ninguna |

4. Pulsa **Deploy** y espera a que termine la compilación.
5. En la URL devuelta por Vercel, verifica `/`, `/app` y `/app#new`. Recarga `/app` para comprobar el acceso directo.

Con la integración de GitHub activa, los siguientes cambios enviados a la rama de producción configurada en Vercel, normalmente `main`, generarán nuevos despliegues.

### Cómo funcionan las rutas

Se sirve un único `index.html`; `main.js` selecciona la experiencia según la ruta. La regla de `vercel.json` permite que `/app` cargue ese documento en lugar de devolver un 404, manteniendo la dirección del navegador. Los recursos compilados se sirven desde `dist/assets/`.

Para otro proveedor: compila con `pnpm build`, publica `dist/` y configura una regla equivalente de fallback a `index.html`. El proyecto espera alojarse en la raíz del dominio.

Referencias: [Vite en Vercel y rutas SPA](https://vercel.com/docs/frameworks/frontend/vite#using-vite-to-make-spas) · [Despliegue estático con Vite](https://vite.dev/guide/static-deploy.html).

## Estructura

```text
reversa/
├── assets/logo.jpg      # Identidad visual
├── index.html           # Documento de entrada
├── main.js              # Selección de landing o aplicación
├── landing.js           # Contenido e interacciones de la landing
├── landing.css          # Diseño adaptable de la landing
├── app.js               # Flujo de comprador y administrador
├── styles.css           # Diseño adaptable de la app
├── package.json         # Dependencias y comandos
├── pnpm-lock.yaml       # Versiones resueltas
├── .nvmrc               # Versión de Node.js
└── vercel.json          # Despliegue y rutas
```

`node_modules/` y `dist/` se generan localmente y no se versionan. Modifica los archivos fuente de la raíz, no los de `dist/`.

## Datos y límites

- Los pedidos se guardan en la clave `reversa-orders-v1` del navegador. No se sincronizan entre dispositivos, navegadores ni dominios.
- Cambiar de localhost al dominio publicado muestra datos independientes. Borrar los datos del sitio elimina las solicitudes guardadas.
- La constancia y el CSV se generan localmente. No se envían mensajes a compradores, tiendas ni transportistas.
- No hay autenticación, geolocalización, GPS, cobros ni conexiones con plataformas comerciales.
- Las fuentes se descargan desde Google Fonts cuando hay conexión, con alternativas locales disponibles.

### Alcance de la propuesta

Reversa externaliza **el recojo y la entrega de productos con devolución previamente autorizada**. No representa a las tiendas, no autoriza devoluciones y no decide la aceptación ni tramita reembolsos. El seguimiento termina al registrar la entrega al punto del comercio.

Las tarifas de **S/ 15 y S/ 18**, la cobertura en cinco distritos de Lima, las franjas y los límites del paquete son hipótesis para probar la experiencia. La PC1 identifica dificultades en parte de la muestra; no valida estos precios ni la viabilidad comercial. Reservar un día entre recojo y fecha límite también es una regla ilustrativa del piloto.
