//CSS Variables
var $overlay = $('<div id="overlay"></div>');
var $escape = $('<div id="escape">X</div>');
var $flex = $('<div id="flex"></div>');
var $prev = $('<div id="prev">&lsaquo;</div>');
var $poster = $('<div id="poster"></div>');
var $info = $('<div id="info"></div>');
var $next = $('<div id="next">&rsaquo;</div>');

$overlay.append($escape);
$overlay.append($flex);
$flex.append($prev);
$flex.append($poster);
$flex.append($info);
$flex.append($next);

$("body").append($overlay);

//OpenMovieDataBase
var openMovieAPI = "http://www.omdbapi.com/?";

//Movies
var theConjuring  = {"t":"the conjuring"};
var insidious = {"t":"insidious"};
var sinister = {"t":"sinister"};
var mothmanProphecies = {"t":"mothman prophecies"};
var exorcismEmilyRose = {"t":"the exorcism of emily rose"};
var oculus = {"t":"oculus"};

//Display Posters and Info Overlay
var buildPoster = function(data) {
  var posterHTML = "<div class='item' id='" + data.imdbID;
  posterHTML += "'><h2>" + data.Title;
  posterHTML += "</h2>";
  $("#gallery").append(posterHTML);
};

var createOverlay = function(data) {
  $("#movieInfo").replaceWith("");
  var movieTitle = "<h2>" + data.Title;
  movieTitle += "<h2>";
  var infoHTML = "<ul id='movieInfo'>";
  infoHTML += "<li>TITLE: " + data.Title;
  infoHTML += "</li><li>RELEASED: " + data.Year;
  infoHTML += "</li><li>DIRECTOR: " + data.Director;
  infoHTML += "</li><li>ACTORS: " + data.Actors;
  infoHTML += "</li><li>RATING: " + data.Rated;
  infoHTML += "</li><li>RUNTIME: " + data.Runtime;
  infoHTML += "</li></ul>";
  $info.append(infoHTML);
  $overlay.show();
};

//Cycling Posters
var next = function() {
  currentMovie += 1;
  newData = movieArray[currentMovie];
  createOverlay(newData);
};

var prev = function() {
  currentMovie -= 1;
  newData = movieArray[currentMovie];
  createOverlay(newData);
};

$("#next").click(function() {
  if (currentMovie<(movieArray.length-1)) {
    next();
  }
});

$("#prev").click(function() {
  if (currentMovie>0) {
    prev();
  }
});

//Sorting Movie
var replacePoster = function(){
  $(".item").replaceWith("");
  $.each(movieArray, function(key,value){
    buildPoster(value);
    $("#"+value.imdbID+"").click(function(){
      createOverlay(value);
      currentMovie = $(".item").index(this);
    });
  });
};

$("#alphaBet").click(function(){
  movieArray.sort(function(a,b){
    if (a.Title > b.Title) {
      return 1;
    }
    if (a.Title < b.Title) {
      return -1;
    }
    return 0;
  });
  replacePoster();
});

$("#runTime").click(function() {
  movieArray.sort(function(a,b){
    if (a.Runtime > b.Runtime) {
      return 1;
    }
    if (a.Runtime < b.Runtime) {
      return -1;
    }
    return 0;
  });
  replacePoster();
});

//Get Data
var movieArray = [];
var currentMovie;
var newData;

$.getJSON(openMovieAPI,theConjuring,function(data){
  movieArray.push(data);
  buildPoster(data);
  $("#"+data.imdbID+"").click(function(){
    createOverlay(data);
    currentMovie = $(".item").index(this);
  });
});

$.getJSON(openMovieAPI,insidious,function(data){
  movieArray.push(data);
  buildPoster(data);
  $("#"+data.imdbID+"").click(function(){
    createOverlay(data);
    currentMovie = $(".item").index(this);
  });
});

$.getJSON(openMovieAPI,sinister,function(data){
  movieArray.push(data);
  buildPoster(data);
  $("#"+data.imdbID+"").click(function(){
    createOverlay(data);
    currentMovie = $(".item").index(this);
  });
});

$.getJSON(openMovieAPI,mothmanProphecies,function(data){
  movieArray.push(data);
  buildPoster(data);
  $("#"+data.imdbID+"").click(function(){
    createOverlay(data);
    currentMovie = $(".item").index(this);
  });
});

$.getJSON(openMovieAPI,exorcismEmilyRose,function(data){
  movieArray.push(data);
  buildPoster(data);
  $("#"+data.imdbID+"").click(function(){
    createOverlay(data);
    currentMovie = $(".item").index(this);
  });
});

$.getJSON(openMovieAPI,oculus,function(data){
  movieArray.push(data);
  buildPoster(data);
  $("#"+data.imdbID+"").click(function(){
    createOverlay(data);
    currentMovie = $(".item").index(this);
  });
});

$("#escape").click(function(){
  $overlay.hide();
});
