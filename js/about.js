

$(function() {

    $("#about button").click(function() {
      $("#article1").toggle();
      $("#article2").fadeToggle();
      window.scrollTo(0, 0);
    });

    $(".fa-times-circle").click(function() {
      $("#article2").toggle();
      $('#about_modal').toggle();
      $("#article1").fadeToggle();
      window.scrollTo(0, 0);
    });
  });
  