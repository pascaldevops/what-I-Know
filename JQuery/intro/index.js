$(document).ready(function() {
  // $('h1').css('color', 'red'); //=> Set the h1 text to red
  $("h1").addClass("title"); //=> add the class title to the h1 element
  $("h1").removeClass("title"); //=> remove/ the class title from the h1 element
  $("h1").hasClass("big-heading"); //=> Check to see if the h1 elemnent has a class name big-heading

  // Manipulate elements text
  $("h1").text("Hello World"); //=> change the h1 text
  $("button").html("<strong>Yayida</strong>"); //=> change the button html text

  // Attributes
  $("img").attr("src"); //=> get an element attribute
  $("img").hide(); //=> hide an element
  $("a").attr("href", "https://www.cnn.com"); //=> set an element attribute
  $("a").text("CNN"); //=> change an element text

  // Add an event
  $("button").click(function(e) {
    e.preventDefault();
    $("h1").css("color", "purple");
  });

  $('input').keypress(function (e) { 
    $('h1').text(e.key);
  });

  $('input').on('mouseover', function (e) {
    $('h1').css("color", 'blue');
  });

  // Animations
  $('input').on('mouseover', function (e) {
    // $('h1').hide();
    $('h1').toggle();
    // $('h1').fadeOut();

  });

  $("button").click(function(e) {
    e.preventDefault();
    // $('h1').fadeOut();
    // $('h1').fadeToggle();
    // $('h1').slideToggle();
    $('h1').animate({"font-size": "4rem"})
  });


});
