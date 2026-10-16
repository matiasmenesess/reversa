const base = import.meta.env.BASE_URL;
const pathname = location.pathname.startsWith(base)
  ? '/' + location.pathname.slice(base.length)
  : location.pathname;
const path = pathname.replace(/\/+$/, '') || '/';
if (path === '/app') {
  document.title = 'Reversa · Tu espacio de devoluciones';
  await import('./styles.css');
  await import('./app.js');
} else {
  await import('./landing.css');
  await import('./landing.js');
}
