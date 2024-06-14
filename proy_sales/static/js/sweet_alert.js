// const DarkSwal = Swal.mixin({
//     customClass: {
//         popup: 'dark-popup',
//         title: 'dark-title',
//         text: 'dark-text',
//         icon: 'dark-icon',
//         confairmButton: 'btn-update',
//         cancelButton: 'btn-cancel'
//     },
//     buttonsStyling: false // Desactiva los estilos por defecto de los botones
// });

// function mostrarEsperaAutomatica() {
//     DarkSwal.fire({
//         title: 'Espera un momento...',
//         text: 'Realizando la operación...',
//         icon: 'info',
//         showConfirmButton: false,
//         timer: 1000 // tiempo en milisegundos (1 segundo)
//     });
// }


// function mostrarError(mensaje) {
//     DarkSwal.fire({
//         icon: 'error',
//         title: '<span class="error-title">¡Error!</span>',
//         text: mensaje,
//         confirmButtonText: 'Continuar'
//     });
// }

// async function validarFormulario(event) {
//     event.preventDefault(); // Detiene el envío del formulario
//     const ruc = document.getElementById('id_ruc').value;
//     const name = document.getElementById('id_name').value;
//     const phone = document.getElementById('id_phone').value;
//     try {
//         if (!Validaciones.esCedulaValida(ruc)) {
//             mostrarError('El formato del DNI es inválido. Por favor, inténtelo de nuevo.');
//         } else if (!Validaciones.soloLetras(name)) {
//             mostrarError('Formato de nombre incorrecto. Por favor, inténtelo de nuevo.');
//         } else if (!Validaciones.soloNumeros(phone) || phone.length !== 10) {
//             mostrarError('Celular incorrecto. Por favor, inténtelo de nuevo.');
//         } else {
//             DarkSwal.fire({
//                 title: '<span class="success-title">¡Éxito!</span>',
//                 text: 'Información válida. Enviando formulario...',
//                 icon: 'success',
//                 confirmButtonText: 'Aceptar'
//             }).then(() => {
//                 event.target.submit();
//             });
//         }
//     } catch (error) {
//         console.error('Error al validar el formulario:', error);
//         mostrarError('Hubo un error al validar el formulario. Por favor, inténtelo de nuevo.');
//     }
// }

// async function validarRegistro(event) {
//     event.preventDefault(); // Detiene el envío del formulario
//     const dni = document.getElementById('id_dni').value;
//     const first_name = document.getElementById('id_first_name').value;
//     const last_name = document.getElementById('id_last_name').value;
//     try {
//         if (!Validaciones.esCedulaValida(dni)) {
//             mostrarError('El formato del DNI es inválido. Por favor, inténtelo de nuevo.');
//         } else if (!Validaciones.soloLetras(first_name) || !Validaciones.soloLetras(last_name)) {
//             mostrarError('Formato de nombre incorrecto. Por favor, inténtelo de nuevo.');
//         } else {
//             event.target.submit();
//         }
//     } catch (error) {
//         console.error('Error al validar el formulario:', error);
//         mostrarError('Hubo un error al validar el formulario. Por favor, inténtelo de nuevo.');
//     }
// }

// async function validarFormularioProductos(event) {
//     event.preventDefault(); 
//     const price = document.getElementById('id_price').value;
//     const stock = document.getElementById('id_stock').value;
//     try {
//         if (!Validaciones.soloDecimales(price)) {
//             mostrarError('El precio debe ser un número decimal positivo. Por favor, inténtelo de nuevo.');
//         } else if (!Validaciones.soloNumeros(stock)) {
//             mostrarError('El stock debe ser un número entero. Por favor, inténtelo de nuevo.');
//         } else {
//             DarkSwal.fire({
//                 title: '¡Producto agregado!',
//                 text: 'El producto se ha agregado correctamente.',
//                 icon: 'success',
//                 confirmButtonText: 'Aceptar'
//             }).then(() => {
//                 event.target.submit(); // Envía el formulario si todas las validaciones pasan
//             });
//         }
//     } catch (error) {
//         console.error('Error al validar el formulario:', error);
//         mostrarError('Hubo un error al validar el formulario. Por favor, inténtelo de nuevo.');
//     }
// }
