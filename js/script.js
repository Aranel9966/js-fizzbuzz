/*
Consegna:
 Scrivi un programma che stampi in console i numeri da 1 a 100,
 ma che per i multipli di 3 stampi “Fizz” al posto del numero 
 e per i multipli di 5 stampi “Buzz”.
  Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
*/

/*
-dichiaro la variabbile per i quadratini
-creo in ciclo for da 1 a 100
-ad ogni quadrato do il proprio'i'
-?se 'i' è divisible per 3 scrivo fizz
-?se 'i' è divisible per 5 scrivo buzz
-?se 'i' è divisible per 5 e 3 scrivo  fizzbuzz

*/


let containerEl =document.getElementById('container');

// ciclo per creare i quadrati
for(let i = 1; i <= 100; i++){

    let squared = document.createElement('div');
    
    containerEl.append(squared);
    
    squared.innerHTML=i;

    // if per assegnare  FizBuzz Fiz Buzz

    if(i % 3 == 0 && i % 5 == 0){
        squared.innerHTML='FizBuzz'
        squared.style.backgroundColor ='#f0466f';
    }else if(i % 3 == 0){
        squared.innerHTML='fizz'
        squared.style.backgroundColor ='#0cd6a1';

    }else if(i % 5 == 0){
        squared.innerHTML='buzz'
        squared.style.backgroundColor ='#ffd166';
        // squared.style.height='100px';
        // squared.style.width='100px';

    }else{
        squared.style.backgroundColor ='#1389b2';

    }
    
}