/**
 * Created by tazo on 12/25/2015.
 */

'use strict';

var canvas = document.getElementById('c');
var ctx = canvas.getContext('2d');
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
var radius = 160;
var sectorNumber;
var intervalId = null;
var input = document.getElementById('input');

function onChange(e) {
    clearInterval(intervalId);
    sectorNumber = parseInt(e.srcElement.value, 10);
    intervalId = setInterval(start, 200);
}

//input.addEventListener('change',onChange);
input.addEventListener('input', onChange);

onChange({
    srcElement: {
        value: 10
    }
});

function start() {
    var currRadian;
    currRadian = Math.PI * 2 / sectorNumber;

    for (let i = 0; i < sectorNumber; i++, currRadian += Math.PI * 2 / sectorNumber) {
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius,
            currRadian, currRadian + Math.PI * 2 / sectorNumber, false);
        ctx.lineTo(centerX, centerY);
        ctx.fillStyle = getRandomColorHex();
        ctx.fill();
        //ctx.stroke();
        ctx.closePath();
    }
}

function getRandomColorHex() {
    return "#" + Math.random().toString(16).slice(2, 8);
    //return '#'+Math.floor(Math.random()*16777215).toString(16);
}
