// ------------- IMPLEMENTATION DES CARTES AVEC CLASSES, PHOTOS, ET TITRES ------------ //

const tricks = {
  itinerary: "Think your itinerary",
  budget: "Manage your budget",
  eco: "Eco-responsible travel",
  family: "Family trip",
  admin: "Administrative issues",
  blog: "Your travel blog"
};

$(function() {
  $.each(tricks, function(key, value) {
    let div = $("<div/>").attr("id", `${key}`).html(`
        <img src="img/tricks-${key}.jpg"  alt="${key}">
        <h2>${value}</h2>
        <p>Some little tips that we hope will help you on your future trips, alone or in family, in distant lands ...</p>
        <button>Read More</button>     
        `);
    $("#cartes").append(div);
  });
});

// ------------- OUVERTURE ET FERMETURE FENETRES MODALES ------------- //

$(function() {
  $("#cartes button").click(function() {
    $("#cartes").css({ position: "relative", opacity: 0.2});
    $(".modal").toggle();
    $(".modal h2")
      .text(
        $(this)
          .parent()
          .find("h2")
          .text()
      )
      .css("text-transform", "uppercase");
    window.scrollTo(0, 0);
  });

  $(".modal button").click(function() {
    $(this)
      .parent()
      .fadeOut();
    $("#cartes").css({ position: "relative", opacity: 1 });
  });

  $(".fa-times-circle").click(function() {
    $(this)
      .parent()
      .fadeOut();
    $("#cartes").css({ position: "relative", opacity: 1 });
  });
  
});


