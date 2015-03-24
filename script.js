var textarea = $('textarea');
var tweetCounter = $('.tweet-counter');
var submitButton = $('input');
var tweetList = $('.tweets');
var firstTweet = $('.tweet').first;

var calculateRemaining = function(){
  var remaining = 140 - $textarea.val().length;
  // var remaining = 140 - $(this).val().length;
  tweetCounter.text(remaining);
  $('input').prop('disabled', remaining < 0);
};

$('textarea').on('keyup', calculateRemaining);



$('form').on('submit', function (event){
  event.preventDefault();
  
  var newTweet = $('.tweet').first().clone();
  
  $newTweet.find('tweet-content').text(textarea.val());
  
  $('tweets').prepend(newTweet);
  
  
  textarea.val('');
  calculateRemaining();
});
