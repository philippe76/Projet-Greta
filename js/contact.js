$(function() {
  $("#submit").click(function() {
    if (!$.isNumeric($(':input[type="tel"]').val())) {
      event.preventDefault(); // obligé de le mettre ici pour que le commentaire reste affiché mais sans annuler l'effet du 'required' ....
      $(':input[type="tel"]')
        .val("Merci de saisir un numéro de téléphone")
        .css("color", "red");
    }
  });
});
