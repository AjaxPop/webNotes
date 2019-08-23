//The code will be executed in strict mode.
"use strict";

//Get the html Elements
const txtArea = document.getElementById('txtNotes');
const clear = document.getElementById('clearText');
const B = document.getElementById("bold");
const I = document.getElementById("italic");
const S = document.getElementById("strikeThrough");
const U = document.getElementById('underline');
const Q = document.getElementById('question');

//Get the items from storage and set textArea to what the user typed in  
browser.storage.local.get("key", function(items) {
	
	//If the user typed something into textArea
    if (items.key != null) {
        
		//Display what the user typed in 
		txtArea.innerHTML = items.key;
    }
});

//When the user clicks away call the function setStorage
txtArea.addEventListener("keyup", setStorage);

//setStorage - Set storage with key,txtArea.innerHTML
function setStorage() {
    browser.storage.local.set({
        key: txtArea.innerHTML
    });
}

//When the user clicks B call function boldText
B.addEventListener("click", boldText);

//boldText - Set the text to bold or unbold and set storage 
function boldText() {
    document.execCommand('bold', false, '');
    browser.storage.local.set({
        key: txtArea.innerHTML
    });
}

//When the user clicks I call function italicText 
I.addEventListener("click", italicText);

//italicText - Set the text to italic or unitalic and set storage 
function italicText() {
    document.execCommand('italic', false, '');
    browser.storage.local.set({
        key: txtArea.innerHTML
    });
}

//When the user clicks U call function underlineText 
U.addEventListener("click", underlineText);

//underlineText - Chang the text to underline or undo the underline and set storage 
function underlineText() {
    document.execCommand('underline', false, '');
    browser.storage.local.set({
        key: txtArea.innerHTML
    });
}

//When the user clicks S call function strikeThrough 
S.addEventListener("click", strikeThrough);

//strikeThrough - Change the text to strikeThrough or undo the strikeThrough and set storage 
function strikeThrough() {
    document.execCommand('strikeThrough', false, '');
    browser.storage.local.set({
        key: txtArea.innerHTML
    });
}

//When the user clicks clear call function clear 
clear.addEventListener("click", clearText);

//clearText - clear the Text and clear the storage 
function clearText() {
    browser.storage.local.clear();
    window.location.reload();
}