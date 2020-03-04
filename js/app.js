
var outsideStatus;

function didYouLeave(){
    outsideStatus = prompt('HAVE YOU LEFT THE HOUSE THIS WEEK?');
    var message;
    if (outsideStatus === 'yes'){
        message = '<p> WE ARE ALL GOING TO DIE! RUN FOR YOUR LIVES! PANIC PANIC PANIC ALERT </p>'
    // } else if (outsideStatus !== 'yes'){
    //     message = 'ok you\'re good.'
    } else {
        message = '<img class="container_panic" src="images/fine.jpg" alt="thisisfine">'
}
return document.write("<p>"+ message + "</p>");
}

function deathCalc(){
    if (outsideStatus === 'yes'){
        var timesOutside = prompt('Oh wow, no kidding?  How many times?');
        var aBillion = 1000000000
        var deathChance = timesOutside*aBillion;
    return document.write("<p>" + 'damn son you have a ' + deathChance + '% chance of dying homie.' + "</p>");
    } else {
        message = 'Console report: you\'re ok!'
    }

}

