//business logic
function APrice(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
}

$(document).ready(function() {
  $("form#movie-form").submit(function(event){
    event.preventDefault();
    debugger;

    var inputMovie = $("select#movie").val();
    var inputTime = $("select#time").val();
    var inputAge = $("select#age").val();

    var price = new APrice(inputMovie + inputTime + inputAge);

    $(".price").last().click(function(){
      $("#show-price").show();
      $("#show-price h2").text(APrice);

    });
    $("select#movie").val("");
    $("select#time").val("");
    $("select#age").val("");
    alert(APrice);
  });

});
