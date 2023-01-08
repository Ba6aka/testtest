"Use strict";

// function calculateVolumeAndArea(num){
//     if (typeof(num) !== 'number' || num % 1 != 0 || num <= 0){
//         return'При вычислении произошла ошибка';
//     }
//     else{
//         let s = Math.pow(num, 2) * 6;
//         let v = Math.pow(num, 3);   
//         return (`Объем куба: ${v}, площадь всей поверхности: ${s}`);
//     }
// }

// calculateVolumeAndArea(15)


// function howCupe(num){
//     if (typeof(num) !== 'number' || num % 1 != 0 || num < 0){
//         console.log('Ошибка. Проверьте правильность введенного номера места');
//     }
//     else if (num === 0 || num > 36){
//         console.log('Таких мест в вагоне не существует');
//     }
//     else{
//         console.log(Math.ceil(num/4))
//     }
// }

// howCupe(33.7);
// console.log(Math.ceil(33/4))

// const contentBlock = {
//     height: '100%',
//     width: '100%',
//     overflow:'hidden',
//     flex:{
//         directoion:'column',
//         wrap: 'no-wrap'
//     }
// };

// const {directoion, wrap} = contentBlock.flex;
// console.log(directoion, wrap);

// for (let key in contentBlock){
//     if (typeof(contentBlock[key]) === 'object'){
//         for (let i in contentBlock[key]){
//             console.log(`key ${i} value ${contentBlock[key][i]}`);
//         }
//         }
//         else{
//             console.log(`key ${key} value ${contentBlock[key]}`);
//         }
//     }
    
// let result = '';

// for (let i = 1; i <= 5; i++){
//     for (let j = 0; j < 5 - i; j++) {
//         result += " ";
//     }
//     for(let j = 0; j < 2 * i + 1; j++){
//         result += '*';
//     }
//     result +="\n";
// }
// console.log(result);

// function JSlearn(lang, callback){
//     console.log(`I am learning ${lang} now`);
//     callback();
// }

// JSlearn('JS', function(){
//     console.log('callback fuction');
// });




// function copy(oldObj){
//     const newObj = {};

//     let key;
//     for (key in oldObj){
//         newObj[key] = oldObj[key];
//     }
    
//     return newObj;
// }

// const newobj = copy(obj);

// newobj.a = 40;

// console.log(obj);
// console.log(newobj);

// const obj = {
//     a:20,
//     b:30
// };

// const add = {
//     c:40,
//     d:50
// };

// console.log(Object.assign({}, add));

// const arr = ['a', 'b', 'c'];

// const newArr = arr.slice();
// console.log(newArr);


// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs(){
//         console.log(typeof( `Мне ${personalPlanPeter.age} и я владею языками: ${(personalPlanPeter.skills.languages['0']).toUpperCase()} ${(personalPlanPeter.skills.languages['1']).toUpperCase()}`))
//     }
// };

// personalPlanPeter.showAgeAndLangs();
// const {programmingLangs} = personalPlanPeter.skills;

// let result = '';
// for (let key in programmingLangs){
//     result += `Язык ${key} изучен на ${programmingLangs[key]} `
// }

// console.log(result);

// let time = 333;

// function getTimeFromMinutes(min) {
//     let hour = '';
//     let minut = '';
//     if (typeof(min) !== 'number' || min < 0 || min % 1 !== 0){
//         console.log("Ошибка, проверьте данные");
//     }
//     else {
//         hours = parseInt(min / 60);
//         switch(true){
//             case(hours == 0 || hours >= 5  ):
//             hour = (`${hours } часов`);
//             break;
//             case(hours == 1):
//             hour = (`${hours } час`);
//             break;
//             case((hours  % 10) == 2 || (hours  % 10) == 3 || (hohoursur  % 10) == 4 ):
//             hour = (`${hours} часа`);
//             break;
            
//         }
//         let past = min % 60;
        
//             switch(true){
//                 case((past % 10) == 0 || (past % 10) >= 5 ):
//                 minut = (`${past } минут`);
//                 break;
//                 case((past  % 10) == 1):
//                 minut = (`${past } минута`);
//                 break;
//                 case((past  % 10) == 2 || (past  % 10) == 3 || (past  % 10) == 4 ):
//                 minut = (`${past} минуты`);
//                 break;
                
//             }
//             let result = (`${hour} ${minut}`);
//         }
//         return result;
//     }


// getTimeFromMinutes(time);

// const arr = [1, 2, 3, 4];

// function onlyNumbers(array) {
//     return array.every(element => {
//       return typeof element === 'number';
//     });}
// function findMaxNumber(arr) {
//     let = result = '';
//     if (arr.length  < 4 || onlyNumbers(arr) == false){
//         result = 0;
//     }
//     else(
//         result = (Math.max(...arr))
//     );
//     return result;
// };


// findMaxNumber(arr);



// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     for (let key in arr){
//         console.log(`${arr[key]}`.toLocaleLowerCase());
//     }
// }

// let str = 'abcd';



// let cash = [['UAH', 'RUB', 'CNY'], 'CNY'];



// function availableCurr(arr, missingCurr) {
//     let result = 'Доступные валюты:';
//     let mainCash = '';  
//     for (let key in arr){
//         if(typeof(arr[key]) === 'object') {
//             mainCash = arr[key];
//         }
       
//         }
//         console.log(mainCash);
//     for (let key in mainCash){
//         result += `\n${mainCash[key]}`;
//     }
//     console.log(result);
// }

// availableCurr(cash);

// for (let i in mainCash){
//     console.log(mainCash[i]);
// }

// for (let i in easyCash){
//     console.log(mainCash[i]);
// }


// const shoppingMallData = {
//     shops: [
//         {
//             width: 10,
//             length: 5
//         },
//         {
//             width: 15,
//             length: 7
//         },
//         {
//             width: 20,
//             length: 5
//         },
//         {
//             width: 8,
//             length: 10
//         }
//     ],
//     height: 5,
//     moneyPer1m3: 30,
//     budget: 50000
// };
// const moneyPer1m3 = shoppingMallData.moneyPer1m3;
// const budget = shoppingMallData.budget
// const shop = shoppingMallData.shops;
// let sum = 0;
// for (let key in shop){
//     s = (Object.values(shop[key]).reduce((a,b)=>a*b)
//     ); 
//     sum += s;
// }

// let V = sum * shoppingMallData.height;

// console.log(V * moneyPer1m3 > budget);

//     if (V * moneyPer1m3 > budget){
//         return 'Бюджета недостаточно';
//     }
//     else{
//         return 'Бюджета недостаточно';
//     }

// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

// let group1 = [],
//     group2 = [],
//     group3 = [],
//     other = [];



// students.sort().forEach(function(item,i) {
//     if (Object.keys(group1).length < 3){
//         group1.push(item);
//     }
//     else if  (Object.keys(group2).length < 3){
//         group2.push(item);
//     }
//     else if  (Object.keys(group3).length < 3){
//         group3.push(item);
//     }
//     else {
//         other.push(item);
//     }
// });


// console.log([group1, group2, group3, `Оставшиеся студенты: ${other.length === 0 ? '-' : other.join(', ')}`])

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// function availableCurr(arr, missingCurr){
//     let result = '';

//     arr.length === '0' ? result = 'Нет доступных валют' : result = 'Доступные валюты: \n';
    
//     arr.forEach(function(curr, i) {
//         if (curr !== missingCurr) {
//             result += `${curr}\n`;
//         }
//     });
//     console.log(result);
// }

// availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY');


// function availableCurr(arr, missingCurr) {
//     let str = '';
//     arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

//     arr.forEach(function(curr, i) {
//         if (curr !== missingCurr) {
//             str += `${curr}\n`;
//         }
//     });



//     console.log(str);
// }


// function foo(a,b) {
//     const [first ,second] = a;
//     console.log(typeof(a))
//     console.log(a)
//     const {ru} = b;

//     console.log(`${second} ${ru}`);
// }

// const result = foo(['Hello', 'Привет'], {ru: 'Мир', eng: 'World'});
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







