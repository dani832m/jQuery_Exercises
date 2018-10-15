/*
    Dollartegnet symboliserer, at vi arbejder med jQuery.
    Kan også erstattes af ordet "jQuery".
*/

/* SELECTION */

//Funktionen skjuler alle h1-elementer i dokumentet
//$('h1').hide();

//Funktionen skjuler her h1-elementer med id'et overskrift1
//$('h1#overskrift1').hide();

//Funktionen skjuler her h1-elementer med klassenavnet overskrift2
//$('h1.overskrift2').hide();

//Funktionen skjuler ALLE elementer med klassenavnet overskrift2 - ikke kun headings!
//$('.overskrift2').hide();

/* 
    Vi styler her på span-tagget inde i paragraf-tagget.
    Hvis der var et span-tag et andet sted i dokumentet, som IKKE lå inde i et p-tag,
    så ville det derfor IKKE blive berørt af dette.

    Når vi anvender jQuery's css-funktion, angiver vi et sæt - en value og en property.
*/
$('p span').css('color', 'red');

/////////////////////////////////////////////////////////////////////////////////////////////////////

//Vi kan style på et specifikt punkt på en liste uden at have navngivet punktet
$('#liste li:first').css('color', 'pink').css('font-weight', 'bold');
$('#liste li:last').css('color', 'blue').css('font-weight', 'bold');

//Her styles der på et link med en specifik reference
//a angiver selvfølgelig, det er et link, og inde i [] skrives den specifikke reference
$('a[href="http://google.com"]').css('color', 'darkgreen');

//ALT i dokumentet påvirkes af asterisk
//$('*').hide();

/////////////////////////////////////////////////////////////////////////////////////////////////////

/* EVENTS */

//Click events
$('article').click(function() {
    alert("Du har klikket på teksten!");
});

$('#baggrundsfarve').click(function() {
    $('body').css('background-color', 'yellow');
    alert("Baggrundsfarven bliver nu skiftet!");
});

//Trigges kun på dobbeltklik!
$('img').dblclick(function() {
    $('img').css('border', 'none');
    $('img').css('height', '150px');
    $('img').css('width', '150px');

    /* Man KAN tilføje flere css-properties til på ovenstående måde,
    men den mest korrekte måde ville nok nærmere være at lave det som et objekt */
    //Eks.: $('img').css({ border: 'none', height: '150px', width: '150px' });
});

$(document).on('mousemove', function(e) { //Når musen bevæger sig på "document"
    $('h3').html('Din mus er på koordinat (x:'
                    + e.clientX + ', y:' + e.clientY + ') <br><br>Ram (x:300, y:300)');
    if (e.clientX == 300 && e.clientY == 300) {
        $('img').css('width', '100%');
        $('img').css('height', '100%');
    }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////

/* ANIMATION & EFFECTS */

//En funktion der anvender jQuery's funktioner "blink", "fadeOut" og "fadeIn"
function blink_text() {
    $('.blink').fadeOut(500);
    $('.blink').fadeIn(500);
}

//Når scriptet loades, køres automatisk "setInterval" hvori vores blink-funktion tages som argument
setInterval(blink_text, 1000);

//Her leger vi med "slideUp"
$('#boxPara').click(function() {
    $('#box1').slideUp(2000);
});

/////////////////////////////////////////////////////////////////////////////////////////////////////

/* RANDOM STUFF */

var myArray = ["Hund", "Kat", "Fisk", "Marsvin", "Kanin"];
var myArrayWithSpaces = [];

console.log("Disse dyr findes i mit array: " );
for (let index = 0; index < myArray.length; index++) {
    console.log(myArray[index]);
    myArrayWithSpaces += myArray[index] + " ";
}

$('h1').click(function() {
    $('h1').html(myArrayWithSpaces);
    $('h1').css('font-size', '16px');
});
