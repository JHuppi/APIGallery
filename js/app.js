//CSS Variables
var $overlay = $('<div id="overlay"></div>');
var $escape = $('<div id="escape">X</div>');
var $flex = $('<div id="flex"></div>');
var $prev = $('<div id="prev">&lsaquo;</div>');
var $poster = $('<img>');
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

var buildPoster = function(data) {
  var posterHTML = "<div class='item' id='" + data.imdbID;
  posterHTML += "'><img src='" + data.Poster;
  posterHTML += "' alt='" + data.Title;
  posterHTML += "'>";
  $("#gallery").append(posterHTML);
}

var createOverlay = function(data) {
  $("#movieInfo").replaceWith("");
  $poster.attr({src: data.Poster,
                alt: data.Title});
  var infoHTML = "<ul id='movieInfo'>"
  infoHTML += "<li>Title: " + data.Title;
  infoHTML += "</li><li>Released: " + data.Year;
  infoHTML += "</li><li>Director: " + data.Director;
  infoHTML += "</li><li>Actors: " + data.Actors;
  infoHTML += "</li><li>Rating: " + data.Rated;
  infoHTML += "</li><li>Runtime: " + data.Runtime;
  infoHTML += "</li></ul>";
  $info.append(infoHTML);
  $overlay.show();
}

var next = function() {
  currentMovie += 1;
  newData = movieArray[currentMovie];
  createOverlay(newData);
}

var prev = function() {
  currentMovie -= 1;
  newData = movieArray[currentMovie];
  createOverlay(newData);
}

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

//Get Data
var movieArray = [];
var currentMovie;

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