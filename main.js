const path = location.pathname.replace(/\/+$/, '') || '/';
if (path === '/app') {
  document.title = 'Reversa · Tu espacio de devoluciones';
  await import('./styles.css');
  await import('./app.js');
} else {
  await import('./landing.css');
  await import('./landing.js');
}
