
var manager = $.connection.fightManagementHub;
periodic();
manager.client.startTimer = function () {
    var startAudio = new Audio("~/Content/start.mp3");
    if (clock.getTime().time === 179) {
        startAudio.play();
    }
    clock.start();
}

manager.client.resetTimer = function () {
    clock.reset();
    clock.setTime(180);
    clock.setCountdown(true);
}

manager.client.stopTimer = function () {
    clock.stop();
}

manager.client.updateRobotNames = function (name1, name2) {
    $('#robot1Name').text(name1);
    $('#robot2Name').text(name2);
    $('.result').addClass('hidden');
    $('#competitors').removeClass('hidden');
}

manager.client.showOutcome = function (winningRobot, losingRobot, winType) {
    $('.result #winningRobot').text(winningRobot);
    $('.result #losingRobot').text(losingRobot);
    if (winType === 'Tie') {
        $('.result #winType').text('tied with')
    }
    else if (winType === 'Knockout') {
        $('.result #winType').text('knocked out')
    }
    else if (winType === 'Tie') {
        $('.result #winType').text('beat')
    }
    $('#competitors').addClass('hidden');
    $('.result').removeClass('hidden');

}
function startClock() {
    manager.server.startTimer();

}

function stopClock() {
    manager.server.stopTimer();
}

function resetClock() {
    manager.server.resetTimer();
}

function updateRobotNames() {
    var name1 = $('#robot1Name').val();
    var name2 = $('#robot2Name').val();
    manager.server.updateRobotNames(name1, name2);
    
}


function periodic() {
    playSoundIf();
    setTimeout(periodic, 500);
}


var endAudio = new Audio("~/Content/ENDgame.mp3");
var pitAudio = new Audio("~/Content/pit.mp3");
var beep = new Audio("~/Content/beep.mp3");
function playSoundIf() {
    if (typeof clock !== 'undefined') {
        console.log(clock.getTime().time);
        if (clock.getTime().time === 1) {
            endAudio.play();
        }
        else if (clock.getTime().time === 61) {
            beep.play();
        }
        else if (clock.getTime().time === 62) {
            beep.play();
        }
        else if (clock.getTime().time === 63) {
            beep.play();
        }
        else if (clock.getTime().time === 64) {
            beep.play();
        }
        else if (clock.getTime().time === 65) {
            beep.play();
        }
    }
}

function queueFight(row) {
    console.log(row);
    var name0 = $(row).find('.robot0').text();
    console.log(name0);
    var name1 = $(row).find('.robot1').text();
    manager.server.updateRobotNames(name0, name1);
}

function showOutcome() {
    var winType = $('#winningType').val();
    var winningRobot = $('#winningRobotName').val();
    var losingRobot = $('#losingRobotName').val();
    manager.server.showOutcome(winningRobot, losingRobot, winType);
}
$.connection.hub.start()