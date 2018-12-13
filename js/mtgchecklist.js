// functions for fetching each type of card
function getSwamps(){
    var url = "https://api.magicthegathering.io/v1/cards?colors=black" ;

    $.ajax({
        url: url,
        method: 'GET',
    }).done(function(data) {
        data = displaySwamps(data);
        $('#content').html(data);
        console.log(data); 
    }).fail(function(err) {
        throw err;
    });
}

function getIslands(){
    var url = "https://api.magicthegathering.io/v1/cards?colors=blue" ;

    $.ajax({
        url: url,
        method: 'GET',
    }).done(function(data) {
        data = displayIslands(data);
        $('#content').html(data);
        console.log(data); 
    }).fail(function(err) {
        throw err;
    });
}

function getMountains(){
    var url = "https://api.magicthegathering.io/v1/cards?colors=red" ;

    $.ajax({
        url: url,
        method: 'GET',
    }).done(function(data) {
        data = displayMountains(data);
        $('#content').html(data);
        console.log(data); 
    }).fail(function(err) {
        throw err;
    });
}

function getPlains(){
    var url = "https://api.magicthegathering.io/v1/cards?colors=white" ;

    $.ajax({
        url: url,
        method: 'GET',
    }).done(function(data) {
        data = displayPlains(data);
        $('#content').html(data);
        console.log(data); 
    }).fail(function(err) {
        throw err;
    });
}

function getForests(){
    var url = "https://api.magicthegathering.io/v1/cards?colors=green" ;

    $.ajax({
        url: url,
        method: 'GET',
    }).done(function(data) {
        data = displayForests(data);
        $('#content').html(data);
        console.log(data); 
    }).fail(function(err) {
        throw err;
    });
}

//functions for displaying each of the fectched type of card
function displaySwamps(data){
	var output = '';
    var p = "<p>";
    var cp = "</p>";
    output += "<h3> Swamps </h3>";
    for (var i=0 ; i < data.cards.length ; i++){
        output += "<div class=\"card-container\">";
        if (data.cards[i].hasOwnProperty("imageUrl") == true){
            output += "<img class=\"cards\" data-cardNum=" + [i] + " src=" + data.cards[i].imageUrl + ">"
        }
        output += "</div>";
    }
    
	return output;
}

function displayIslands(data){
	var output = '';
    var p = "<p>";
    var cp = "</p>";
    output += "<h3> Islands </h3>";
    for (var i=0 ; i < data.cards.length ; i++){
        output += "<div class=\"card-container\">";
        if (data.cards[i].hasOwnProperty("imageUrl") == true){
            output += "<img class=\"cards\" data-cardNum=" + [i] + " src=" + data.cards[i].imageUrl + ">"
        }
        output += "</div>";
    }
    
	return output;
}

function displayForests(data){
	var output = '';
    var p = "<p>";
    var cp = "</p>";
    output += "<h3> Forests </h3>";
    for (var i=0 ; i < data.cards.length ; i++){
        output += "<div class=\"card-container\">";
        if (data.cards[i].hasOwnProperty("imageUrl") == true){
            output += "<img class=\"cards\" data-cardNum=" + [i] + " src=" + data.cards[i].imageUrl + ">"
        }
        output += "</div>";
    }
    
	return output;
}

function displayMountains(data){
	var output = '';
    var p = "<p>";
    var cp = "</p>";
    output += "<h3> Mountains </h3>";
    for (var i=0 ; i < data.cards.length ; i++){
        output += "<div class=\"card-container\">";
        if (data.cards[i].hasOwnProperty("imageUrl") == true){
            output += "<img class=\"cards\" data-cardNum=" + [i] + " src=" + data.cards[i].imageUrl + ">"
        }
        output += "</div>";
    }
    
	return output;
}

function displayPlains(data){
	var output = '';
    var p = "<p>";
    var cp = "</p>";
    output += "<h3> Plains </h3>";
    for (var i=0 ; i < data.cards.length ; i++){
        output += "<div class=\"card-container\">";
        if (data.cards[i].hasOwnProperty("imageUrl") == true){
            output += "<img class=\"cards\" data-cardNum=" + [i] + " src=" + data.cards[i].imageUrl + ">"
        }
        output += "</div>";
    }
    
	return output;
}