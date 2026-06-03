// Variables 

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [

    {
        quote: `"The best way to predict the future is to create it."`,
        person: `Peter Drucker`
    },

    {
        quote: `"Success is not final, failure is not fatal: it is the courage to continue that counts."`,
        person: `Winston Churchill`
    },

    {
        quote: `"Do what you can, with what you have, where you are."`,
        person: `Theodore Roosevelt`
    }

];

btn.addEventListener('click', function () {

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

});