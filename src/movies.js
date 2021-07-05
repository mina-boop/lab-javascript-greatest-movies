// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

const movies = require("./data"); //Doit-on copier la constante movie se trouvant dans data.js?


function getAllDirectors(moviesArr){
return moviesArr.map (function (movie){
  return movie.director;
  })
  .filter (function (director,index){
    return director.indexOf(director)
    //je ne comprends pas comment utiliser la fonction filter avec ses paramétres 
  }


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArr) {
return moviesArr.filter(function(movie){
  return(movie.director==="Steven Spielberg" && movie.genre.includes ("Drama"));
}).lenght;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArr) {
  return moviesArr.reduce(function (acc,movie,array){
  
  acc= 0+movie.score;
    return acc/array.lenght;)}
  }
 



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArr) {
  const dramaMovies=  movies.Arr.filter(function (movie) {
    return movie.genre.includes("Drama");})
  }
   //return ScoresAverage (dramaMovies)--utiliser la fonction ScoresAverage

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArr) {
  return moviesArr.map (function (movie){
    return movie;})
      .sort (function (x,y) {
        return x.year - y.year;)
      }
    
  }


 
  
  

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {
  return moviesArr.map (function (movie) {
    return moviesArr;}).sort (function(a,b){
      var nameA=a.Title.toLowerCase();
      var nameB=b.Title.toLowercase();
      if (nameA>nameB) return 1;return 0;
    }
  )
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
