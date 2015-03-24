$('textarea').on('keyup', function () {
  var remaining = 140 - $(this).val().length;

  $('.tweet-counter').text(remaining);

  $('input').prop('disabled', remaining < 0);
});