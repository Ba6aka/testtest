"Use strict"

const answerCountFilm = 'How many film do you watch?',
    answerFilmName = 'what is the name of the last movie',
    answerFilmRate = 'how would you rate it';

const numberOfFilms = prompt(answerCountFilm ,'');
    


const personalMovieBD = {
    conunt: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};



switch(true){
    case ((personalMovieBD.conunt < 10) && (personalMovieBD.conunt > 0)):
        alert('You have not seen a lot of films');
        break;
    case ((personalMovieBD.conunt < 20) && (personalMovieBD.conunt > 10)):
        alert('You clacial viewer');
        break;
    case ((personalMovieBD.conunt > 30)):
        alert('You is real cinophile');
        break;
    default:
        alert('something is not ok')
};

while (2 > Object.keys(personalMovieBD.movies).length){
    const a = prompt(answerFilmName, ''),
        b = prompt(answerFilmRate,'');

    if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50){
        personalMovieBD.movies[a] = b;
    }    
}

