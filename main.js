/*
    Dollartegnet symboliserer, at vi arbejder med jQuery.
*/

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

//////////////////////////////////////////////////////////////////////////////////////////////////////

//Vi kan style på et specifikt punkt på en liste uden at have navngivet punktet
$('#liste li:first').css('color', 'pink').css('font-weight', 'bold');
$('#liste li:last').css('color', 'blue').css('font-weight', 'bold');

//Her styles der på et link med en specifik reference
$('a[href="http://google.com"]').css('color', 'darkgreen');

//ALT i dokumentet påvirkes af asterisk
//$('h1').hide();

/////////////////////////////////////////////////////////////////////////////////////////////////////

//En funktion der anvender jQuery's funktioner "blink", "fadeOut" og "fadeIn"
function blink_text() {
    $('.blink').fadeOut(500);
    $('.blink').fadeIn(500);
}

//Når scriptet loades, køres automatisk "setInterval" hvori vores blink-funktion tages som argument
setInterval(blink_text, 1000);