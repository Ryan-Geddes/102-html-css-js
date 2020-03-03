

var outsideStatus = prompt('HAVE YOU LEFT THE HOUSE THIS WEEK?');
var message;

if (outsideStatus === 'yes'){
    message = 'WE ARE ALL GOING TO DIE!'
} else if (outsideStatus === 'fart'){
    message = 'lmao classic.'
} else {
    message = '<img class="container_panic" src="images/fine.jpg" alt="thisisfine">'
}

document.write("<p>"+ message + "</p>")
