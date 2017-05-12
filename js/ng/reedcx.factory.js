"use strict";

/* factory to align block item on page */
app.ng.factory("resizeFactory", function() {
    var resizeFactoryObj = {};
    resizeFactoryObj.resizeHeight = function() {
        document.querySelector('#rail').style.height = document.querySelector('#main').offsetHeight;
    };

    resizeFactoryObj.resizeBlockHeight = function() {
        document.querySelector('#blockborder1').style.height = document.querySelector('#blockborder2').offsetHeight + 'px';
    };

    return resizeFactoryObj;
});
