
var outsideStatus;

function didYouLeave(){
    outsideStatus = prompt('HAVE YOU LEFT THE HOUSE THIS WEEK?');
    var message;
    while ((outsideStatus !== 'yes')&&(outsideStatus!== 'no')) {
        outsideStatus = prompt('yes or no');
    }if (outsideStatus === 'yes'){
        message = '<p> WE ARE ALL GOING TO DIE! RUN FOR YOUR LIVES! PANIC PANIC PANIC ALERT </p>'
    } else {
        message = '<img class="container_panic" src="images/fine.jpg" alt="thisisfine">'
}
return document.write("<p>"+ message + "</p>");

}

function deathCalc(){
    if (outsideStatus === 'yes'){
        var timesOutside = prompt('Oh wow, no kidding?  How many times?');
    return timesOutside;
}

function getItem(){
    var item = '<img class="container_panic" src="images/fine.jpg" alt="thisisfine">';
    return item;
}

function chancesBillion() {
    var timesOutside = deathCalc();
    var aBillion = 1000000000
    var deathChance = timesOutside*aBillion;
    return document.write("<p>" + 'damn son you have a ' + deathChance + '% chance of dying homie.' + "</p>");
}

function showFine() {
    var item = getItem();
    var timesOutside = deathCalc();
    result = '';

for (var i = 0; i < timesOutside; i++){
    result = result + '<p>' + item + '</p>';
    }
return document.write(result);
}
}