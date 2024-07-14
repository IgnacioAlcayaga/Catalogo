$(document).ready(function() {
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    // URLs de las páginas del catálogo desde GitHub Pages
    var pdfPages = [
        "https://ignacioalcayaga.github.io/Catalogo/Delicias%20donde%20Dany_1.png",
        "https://ignacioalcayaga.github.io/Catalogo/Delicias%20donde%20Dany_2.png",
        "https://ignacioalcayaga.github.io/Catalogo/Delicias%20donde%20Dany_3.png",
        "https://ignacioalcayaga.github.io/Catalogo/Delicias%20donde%20Dany_4.png",
        "https://ignacioalcayaga.github.io/Catalogo/Delicias%20donde%20Dany_5.png",
        "https://ignacioalcayaga.github.io/Catalogo/Delicias%20donde%20Dany_6.png",
        "https://ignacioalcayaga.github.io/Catalogo/Delicias%20donde%20Dany_7.png",
        "https://ignacioalcayaga.github.io/Catalogo/Delicias%20donde%20Dany_8.png",
        "https://ignacioalcayaga.github.io/Catalogo/Delicias%20donde%20Dany_9.png",
        "https://ignacioalcayaga.github.io/Catalogo/Delicias%20donde%20Dany_10.png",
        "https://ignacioalcayaga.github.io/Catalogo/Delicias%20donde%20Dany_11.png",
        "https://ignacioalcayaga.github.io/Catalogo/Delicias%20donde%20Dany_12.png",
        "https://ignacioalcayaga.github.io/Catalogo/Delicias%20donde%20Dany_13.png",
        "https://ignacioalcayaga.github.io/Catalogo/Delicias%20donde%20Dany_14.png",
        "https://ignacioalcayaga.github.io/Catalogo/Delicias%20donde%20Dany_15.png",
        "https://ignacioalcayaga.github.io/Catalogo/Delicias%20donde%20Dany_16.png",
        "https://ignacioalcayaga.github.io/Catalogo/Delicias%20donde%20Dany_17.png",
        "https://ignacioalcayaga.github.io/Catalogo/Delicias%20donde%20Dany_18.png"
    ];

    var flipbook = $('#flipbook');

    // Cargar las imágenes de las páginas del catálogo y asegurarse de que están cargadas antes de inicializar Turn.js
    var imagesLoaded = 0;
    pdfPages.forEach(function(pageUrl, index) {
        var img = new Image();
        img.src = pageUrl;
        img.onload = function() {
            imagesLoaded++;
            flipbook.append('<div class="turn-page"><img src="' + pageUrl + '" /></div>');
            console.log('Loaded: ' + pageUrl);

            if (imagesLoaded === pdfPages.length) {
                initializeFlipbook();
            }
        };
        img.onerror = function() {
            console.error('Error loading page:', pageUrl);
        };
    });

    function initializeFlipbook() {
        console.log('Initializing flipbook');
        flipbook.turn({
            width: isMobile ? $(window).width() : 800,
            height: isMobile ? $(window).height() : 600,
            autoCenter: true,
            display: isMobile ? 'single' : 'double',
            duration: 1000,
            elevation: 50,
            gradients: true,
            when: {
                turned: function(event, page, view) {
                    console.log('Current view: ', view);
                }
            }
        });

        // Ajustar el tamaño cuando se cambia el tamaño de la ventana
        $(window).resize(function() {
            flipbook.turn('size', $(window).width(), $(window).height());
        });
    }
});
