/*
const add = function() {
        console.log(2 + 3);
    };

    add();
    add();

    function runTwice(fun) {
    fun();
    fun();
    }

    runTwice(function() {
    console.log('12b');
    });
    
    runTwice(add);

*/


function finishButton() {
    document.querySelector('.start-button').innerHTML = 'Loading...';


    setTimeout(() => {
    document.querySelector('.start-button').innerHTML = 'Finished!'}, 1000);
}

function addToCart() {
    document.querySelector('.display').innerHTML = 'Added';

    setTimeout(() => {
        document.querySelector('.display').innerHTML = ''}, 2000
    );
}

