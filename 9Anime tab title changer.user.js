// ==UserScript==
// @name         9Anime tab title changer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Taiga stuff
// @author       Plebert
// @match        https://9anime.id/watch/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=9anime.me
// @grant        none
// ==/UserScript==
var thejuice
var regex = /(?:watch\/)(.*)\..+\/(ep-[0-9]+)/ig
var match
var juice1
var juice2

function changetabtitle() {
    thejuice = window.location.href
    match = regex.exec(thejuice)
    juice1 = match[1].replace(/-/g," ")
    juice2 = match[2].replace("ep-","episode ")
    document.title = "the juicee"
};



function changetabtitle1() {
    thejuice = window.location.href
    match = regex.exec(thejuice)
    juice1 = match[1].replace(/-/g," ")
    juice2 = match[2].replace("ep-","episode ")
    document.title = juice1+" "+juice2
};

window.addEventListener("click",changetabtitle());

window.addEventListener('DOMNodeInserted', changetabtitle(), false);
