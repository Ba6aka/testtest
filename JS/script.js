"Use strict";

const answerCountFilm = 'How many film do you watch?',
    answerFilmName = 'what is the name of the last movie',
    answerFilmRate = 'how would you rate it',
    answerMovieGenre = `what is your favorite movie genre number`;

let numberOfFilms;
let genreFilms;


const personalMovieBD = {
    count: 0,
    movies:{},
    actors:{},
    genres:[],
    privat:false,
    genre:[],
    countOfFilms:function () {
        this.count = prompt(answerCountFilm ,'');
        while (this.count == '' || this.count == null ||isNaN(this.count)){
            this.count = prompt(this.count ,'');
        }
    },
    writeYourGenre:function () {
        for(let i = 0; i < 3; i++){
            genreFilms = prompt(`${answerMovieGenre} ${i+1}` ,'');
            if (genreFilms != null && genreFilms != '' && genreFilms.length < 50 ){
                this.genre[i] = genreFilms;   
            }
            else{
                i--;
            }
            
    }
            console.log(personalMovieBD.genre);},

    detectPersonalLevel:function (){
        const c = this.count;
        switch(true){
            case (( c < 10) && (c > 0)):
                alert('You have not seen a lot of films');
                break;
            case ((c < 20) && (c > 10)):
                alert('You clacial viewer');
                break;
            case ((c > 30)):
                alert('You is real cinophile');
                break;
            default:
                alert('something is not ok');
        }
    },
    rememberMyFilms:function (){
        while (2 > Object.keys(personalMovieBD.movies).length){
            const a = prompt(answerFilmName, ''),
                b = prompt(answerFilmRate,'');
            if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50){
                personalMovieBD.movies[a] = b;
            }
        }
            
    },
    toggleVisibleMyBD: function(){
        if (this.privat === false){
            this.privat = true;
        }
        else {
            this.privat = false;
        } 
    },
    showMyBD:function () {
        if (this.privat === false){
            this.genre.forEach(function(item, i){
                console.log(`Любимый жанр ${i+1} - это ${item}`);
            });
        }
    }

};


personalMovieBD.countOfFilms();
console.log(personalMovieBD);







