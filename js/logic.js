let inputText = "";
let stdinBuffer = [];
let stdinBufferPtr = 0;

let unicodeBytesLeft = 0;
let unicodeBuffer = [];

let buttonState1 = false;
let buttonState2 = false;
let buttonState3 = false;
let buttonState4 = false;

// Nord theme
// It can be found here: https://github.com/nordtheme/xresources/blob/develop/src/nord
let nord0  = '#2E3440';
let nord1  = '#3B4252';
let nord2  = '#434C5E';
let nord3  = '#4C566A';
let nord4  = '#D8DEE9';
let nord5  = '#E5E9F0';
let nord6  = '#ECEFF4';
let nord7  = '#8FBCBB';
let nord8  = '#88C0D0';
let nord9  = '#81A1C1';
let nord10 = '#5E81AC';
let nord11 = '#BF616A';
let nord12 = '#D08770';
let nord13 = '#EBCB8B';
let nord14 = '#A3BE8C';
let nord15 = '#B48EAD';

var theme = {
    foreground: nord4,
    background: nord0,
    cursor:     nord4,

    black: nord2,
    brightBlack: nord1,

    red: nord12,
    brightRed: nord11,

    green: nord7,
    brightGreen: nord14,

    yellow: nord13,
    brightYellow: nord13,

    blue: nord5,
    brightBlue: nord8,

    magenta: nord11,
    brightMagenta: nord15,

    cyan: nord5,
    brightCyan: nord8,

    white: nord4,
    brightWhite: nord5
};

/* Create a new xTerm object */
const term = new Terminal({
    fontFamily: '"Cascadia Code", Menlo, monospace',
    cursorBliknk: "true",
    cursorStyle: "bar",
    theme: theme,
});

term.onData( data => {

    //inputChar = data;
    inputText = data;
    for (const c of data) {
        stdinBuffer.push( c.charCodeAt( 0 ) );
    }

    console.log( stdinBuffer );

} );

term.open(document.getElementById("terminal"));

var Module;

//---- OUTPUT LIGHT STATE CHANGE ----//

function setOutput( outputIndex, state ){
    if( outputIndex == 1 ){
        if( state == true ){
            document.getElementById( "output_one" ).src="media/computer_output_1_on.png";
        }
        else{
            document.getElementById( "output_one" ).src="media/computer_output_1_off.png";
        }
    }
}

//---- BUTTON EVENTS ----//

function button_one_event(){
    console.log( "Button 1 clicked!" );
    buttonState1 = !buttonState1;
    if( buttonState1 ){
        document.getElementById( "button_one" ).src="media/computer_btn1_on.png";
    }
    else{
        document.getElementById( "button_one" ).src="media/computer_btn1_off.png";
    }
}

function button_two_event(){
    console.log( "Button 2 clicked!" );
    buttonState2 = !buttonState2;
    if( buttonState2 ){
        document.getElementById( "button_two" ).src="media/computer_btn2_on.png";
    }
    else{
        document.getElementById( "button_two" ).src="media/computer_btn2_off.png";
    }
}

function button_three_event(){
    console.log( "Button 3 clicked!" );
    buttonState3 = !buttonState3;
    if( buttonState3 ){
        document.getElementById( "button_three" ).src="media/computer_btn3_on.png";
    }
    else{
        document.getElementById( "button_three" ).src="media/computer_btn3_off.png";
    }
}

function button_four_event(){
    console.log( "Button 4 clicked!" );
    buttonState4 = !buttonState4;
    if( buttonState4 ){
        document.getElementById( "button_four" ).src="media/computer_btn4_on.png";
    }
    else{
        document.getElementById( "button_four" ).src="media/computer_btn4_off.png";
    }
    setOutput( 1, buttonState4 );
}
