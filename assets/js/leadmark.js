/*!
=========================================================
* LeadMark Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// protfolio filters
$(window).on("load", function() {
    var t = $(".portfolio-container");
    t.isotope({
        filter: ".new",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1
        }
    }), $(".filters a").click(function() {
        $(".filters .active").removeClass("active"), $(this).addClass("active");
        var i = $(this).attr("data-filter");
        return t.isotope({
            filter: i,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    })
})

// --- OUVERTURE PDF UNIQUEMENT DANS LES SECTIONS FILTRÉES --- //
$(document).ready(function() {

    $(".portfolio-item").on("click", function(e) {

        var activeFilter = $(".filters .active").attr("data-filter");

        // Si on est dans "Tout" → aucune action
        if (activeFilter === "*") {
            e.preventDefault();
            return;
        }

        // Sinon, on ouvre le PDF associé
        var pdf = $(this).data("pdf");

        if (pdf) {
            window.open(pdf, "_blank"); // ouvre le PDF dans un nouvel onglet
        }
    });

});


document.addEventListener('DOMContentLoaded', () => {
  const galleryItems = document.querySelectorAll('.gallery-item img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const closeBtn = document.querySelector('.lightbox .close');

  galleryItems.forEach(img => {
    img.addEventListener('click', () => {
      lightbox.style.display = 'flex';
      lightboxImg.src = img.src;
      lightboxCaption.textContent = img.alt;
    });
  });

  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  lightbox.addEventListener('click', e => {
    if(e.target === lightbox) lightbox.style.display = 'none';
  });
});


