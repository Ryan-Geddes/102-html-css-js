
var outsideStatus;
var deathChance;

function didYouLeave(){
    var message;
    outsideStatus = prompt('HAVE YOU LEFT THE HOUSE THIS WEEK?');
    while ((outsideStatus !== 'yes')&&(outsideStatus!== 'no')) {
        outsideStatus = prompt('yes or no');
    }if (outsideStatus === 'yes'){
        message = '<p> WE ARE ALL GOING TO DIE! RUN FOR YOUR LIVES! PANIC PANIC PANIC ALERT </p>'
        document.write("<p>"+ message + "</p>")
        return outsideStatus;
    }else if (outsideStatus === 'no'){
        message = "<p>"+ 'you\'re fine' + '<img class="container_panic" src="images/fine.jpg" alt="thisisfine">' + "</p>"
        document.write("<p>"+ message + "</p>")
        return outsideStatus;
    }else {
        message = '<img class="container_panic" src="images/fine.jpg" alt="thisisfine">'
        document.write("<p>"+ message + "</p>");
    }
}

function deathCalc(){
    if (outsideStatus === 'yes'){
        var timesOutside = prompt('Oh wow, no kidding?  How many times?');
            while (isNaN(timesOutside)||(timesOutside === '')){
                timesOutside = prompt('Enter a number, chief.')
                }
        var aBillion = 1000000000
        var deathChance = timesOutside*aBillion;
        document.write('<p>' + 'damn son you have a ' + deathChance + '% chance of dying homie.' + '</p>');
    }else if (outsideStatus === 'no'){
        console.log ('test')
    }
    var item = '<img class="container_panic" src="images/fine.jpg" alt="thisisfine">';
    result = '';
    for (var i = 0; i < timesOutside; i++){
        result = (result + '<p>' + item + '</p>')
    }
    return document.write('<p>' + result + '</p>');
}



// function deathCalc(){
//     if (outsideStatus === 'yes'){
//         var timesOutside = prompt('Oh wow, no kidding?  How many times?');
//             while (isNaN(timesOutside)||(timesOutside === '')){
//                 timesOutside = prompt('Enter a number, chief.')
//                 }
//         var aBillion = 1000000000
//         var deathChance = timesOutside*aBillion;
//         document.write('<p>' + 'damn son you have a ' + deathChance + '% chance of dying homie.' + '</p>');
//         return(timesOutside)
//     }else if (outsideStatus === 'no'){
//         document.write('<p>' + 'test' + '</p>')
//     }
// }

// function showFine() {
//     var item = '<img class="container_panic" src="images/fine.jpg" alt="thisisfine">';
//     var howMany = deathCalc();
//     result = '';
//     for (var i = 0; i < howMany; i++){
//         result = (result + '<p>' + item + '</p>');
//         return document.write('<p>' + result + '</p>');
//     }
// }