// ==UserScript==
// @name         9Anime tab title changer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  format tab title for taiga
// @author       Plebert
// @match        https://9anime.id/watch/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=9anime.me
// @require      http://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// @grant        none
// ==/UserScript==
(function stuff() {
    'use strict';
    var thejuice
    var regex = /(?:watch\/)(.*)\..+\/(ep-[0-9]+)/ig
    var match
    var juice1
    var juice2
    var $ = window.jQuery
    var observer = new MutationObserver(function(mutations) {
    if ($("a.active").length) {
        changetabtitle();
        //observer.disconnect();
        //We can disconnect observer once the element exist if we dont want observe more changes in the DOM
    }
    });

    // Start observing
    observer.observe(document.body, { //document.body is node target to observe
        childList: true, //This is a must have for the observer with subtree
        subtree: true //Set to true if changes must also be observed in descendants.
    });

    function changetabtitle() {
        thejuice = window.location.href
        match = regex.exec(thejuice)
        if (match[0]!=null){
            juice1 = match[1].replace(/-/g," ")
            juice2 = match[2].replace("ep-","episode ")
            document.title = juice1+" "+juice2
        }
    };
})();
