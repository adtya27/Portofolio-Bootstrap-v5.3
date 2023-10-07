$(document).ready(function () {
  // Fungsi untuk menganimasikan scroll saat mengklik tautan navbar
  $('nav a').on('click', function (event) {
    event.preventDefault();
    var target = $(this).attr('href');
    $('html, body').animate(
      {
        scrollTop: $(target).offset().top,
      },
      400 // Durasi animasi dalam milidetik
    );
  });

  // Fungsi untuk mengatur efek transisi saat menggulir halaman
  $(window).scroll(function () {
    var scrollPos = $(window).scrollTop();
    $('section').each(function () {
      var targetPos = $(this).offset().top;
      var targetHeight = $(this).outerHeight();
      if (scrollPos >= targetPos && scrollPos < targetPos + targetHeight) {
        $('nav a').removeClass('active');
        $('nav a[href="#' + $(this).attr('id') + '"]').addClass('active');
      }
    });
  });
});
