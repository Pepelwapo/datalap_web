// Basic interactions
document.getElementById('year')?.innerText = new Date().getFullYear();

function submitForm(e){
  e.preventDefault();
  // En un sitio estático típico puedes contectarlo a un endpoint (Render, Netlify Functions o Email service)
  alert('Gracias — tu solicitud fue enviada (demo). Integra el endpoint en action del form para producir envíos reales.');
}
