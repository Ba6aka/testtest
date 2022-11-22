"Use strict"

const answerCountFilm = 'How many film do you watch?',
    answerFilmName = 'what is the name of the last movie',
    answerFilmRate = 'how would you rate it';

const numberOfFilms = prompt(answerCountFilm ,''),
    a = prompt(answerFilmName, ''),
    b = prompt(answerFilmRate,''),
    c = prompt(answerFilmName, ''),
    d = prompt(answerFilmRate,'');

const personalMovieBD = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};

personalMovieBD.movies[a] = b;
personalMovieBD.movies[c] = d;

console.log(personalMovieBD);