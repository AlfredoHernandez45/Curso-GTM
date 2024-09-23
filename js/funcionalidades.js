// script No importa tu giro, si cuentas con múltiples sucursales o ubicaciones Linkaform es para ti
$('.cat_slide_servicios').slick({
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
	dots: true,
	variableWidth: false,
	responsive: [
		{
			breakpoint: 980,
			settings: {
				dots: true,
				adaptiveHeight: true,
				slidesToShow: 3,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 480,
			settings: {
				dots: true,
				adaptiveHeight: true,
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		},
	]
});


// Script de Las empresas que utilizan Linkaform mejoran la experiencia de sus clientes a través de la optimización de diversos procesos
$(document).ready(function() {

	// Propiedades pasicas del slider
	$('.carousel-utilizan').slick({
		arrows: true,
		adaptiveHeight: true,
		speed: 800,
		responsive: [
			{
				breakpoint: 480,
				settings: {
					dots: false,
					adaptiveHeight: true,
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		],
	});

	//cuando iniciemos el primer boton tendra la clase activo
	$('.btn-utilizan:first-child').addClass('btn-utilizan-active');

	//al hacer clic en un boton se dispara el evento en el cual se elimina la clase activo de todos los botones y
	// se le agrega la clase activo al boton que fue clicado y a su vez el slide se mueve al slide correspondiente 
	// con el boton
	$('.btn-utilizan').click(function () {
		// Eliminar la clase 'btn-utilizan-active' de todos los botones
		$('.btn-utilizan').removeClass('btn-utilizan-active');
		// Agregar la clase 'btn-utilizan-active' al botón que fue clicado
		$(this).addClass('btn-utilizan-active');
		// Obtener el índice del botón clicado y mover el carrusel al slide correspondiente
		var index = $(this).index();
		$('.carousel-utilizan').slick('slickGoTo', index);
	});

	// //Cambiar el estado del boton al cambiar el slide con las flechas
	// // Al cambiar el slide en el carrusel
	$('.carousel-utilizan').on('afterChange', function(event, slick, currentSlide) {
		// Remueve la clase 'activo' de todos los botones
		$('.btn-utilizan').removeClass('btn-utilizan-active');
		// Añade la clase 'activo' al botón correspondiente al slide actual
		$('.btn-utilizan').eq(currentSlide).addClass('btn-utilizan-active');
	});

	if ($(window).width() <= 480) {
		$(".toggleButton").click(function () {
			$(this).prev(".list-items").toggle();
		
			var buttonText = $(this).text();
			$(this).text(buttonText === "Ver más" ? "Ver menos" : "Ver más");
		
			$(".carousel-utilizan").slick('setPosition');
		});
	}
});



// <!-- script Mira cómo hemos ayudado a digitalizar el proceso operativo de nuestros clientes -->
$('.cat_slid_testimonios').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: true,
	variableWidth: false,
	responsive: [
		{
			breakpoint: 980,
			settings: {
				dots: true,
				adaptiveHeight: true,
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 480,
			settings: {
				dots: true,
				adaptiveHeight: true,
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});

// Script para filtrar "Servicios diseñados para empresas industriales"
$(document).ready(function() {
	$('.btn_servicio, .btn_marketing').on('click', function() {
		// Remover la clase "active_service" de todos los elementos ".info_txt"
		$('.info_txt').removeClass('active_service');
		$('.item_servicio').removeClass(function(index, className) {
			return (className.match(/(^|\s)active_card_\S+/g) || []).join(' ');
		});
		$('.btn_marketing').removeClass(function(index, active_circle) {
			return (active_circle.match(/(^|\s)active_circle\S*/g) || []).join(' ');
		});

		// Agregar la clase "active_service" al elemento ".info_txt" correspondiente al botón
		const index = $(this).index();
		$('.btn_marketing').eq(index).addClass('active_circle');
		$('.info_txt').eq(index).addClass('active_service');
		$('.item_servicio').eq(index).addClass(function() {
			const classes = ['active_card_blue', 'active_card_purple', 'active_card_green', 'active_card_dark_grey', 'active_card_clear_blue', 'active_card_grey', 'active_card_clear_grey', 'active_card_purple'];
			return classes[index];
		});
	});
});
	
// Script para filtrar "Conocemos el sector industrial"
$(document).ready(function() {
	// Ocultar todos los elementos con la clase "item_desc" excepto el primero
	$('.item_desc').not(':first').hide();

	// Agregar un evento click a los botones con clase "btn_filter"
	$('.btn_filter').on('click', function() {
		// Eliminar la clase "active_sector_indus" de todos los botones
		$('.btn_filter').removeClass('active_sector_indus');
		
		// Agregar la clase "active_sector_indus" al botón clicado
		$(this).addClass('active_sector_indus');
		
		// Obtener el índice del botón clicado
		var index = $(this).parent().index();
		
		// Ocultar todos los elementos con clase "item_desc"
		$('.item_desc').hide();

		// Mostrar el elemento "item_desc" correspondiente al botón clicado
		$('.item_desc').eq(index).show();
	});
	
	// Mostrar el primer elemento "item_desc" al cargar la página
	$('.item_desc').first().show();

	// Inicializar el slider solo si el ancho de la pantalla es menor o igual a 480px
	if ($(window).width() <= 480) {
		$('.item_desc').show();
		$('.slide_funcionalidades').slick({
			dots: true,
			adaptiveHeight: true,
			slidesToShow: 1,
			slidesToScroll: 1,
		});
	}
});

$(document).ready(function() {
	// Ocultar todos los elementos con la clase "item_desc" excepto el primero
	$('.btn_pregunta').removeClass('active_pregunta');

	// Agregar un evento click a los botones con clase "btn_filter"
	$('.btn_pregunta').on('click', function() {
		// Verificar si el botón clicado ya tiene la clase "active_pregunta"
		var isActive = $(this).hasClass('active_pregunta');

		// Eliminar la clase "active_sector_indus" de todos los botones
		$('.btn_pregunta').removeClass('active_pregunta');

		// Si el botón no tenía la clase "active_pregunta", agrégala y muestra el contenido con animación
		if (!isActive) {
			// $(this).addClass('active_pregunta');
			$(this).toggleClass('active_pregunta');
			$(this).next().slideDown('slow');
		} else {
			// Si el botón ya tenía la clase "active_pregunta", simplemente oculta el contenido con animación
			$(this).next().slideUp('slow');
		}

		// Obtener el índice del botón clicado
		var index = $(this).parent().index();
	});
});
