
var manager = $.connection.fightManagementHub;
manager.client.startTimer = function () {
    var startAudio = new Audio("/Content/start.mp3");
    if (clock.getTime().time === 179) {
        startAudio.play();
    }
    clock.start(playSoundIf);
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


var endAudio = new Audio("/Content/ENDgame.mp3");
var pitAudio = new Audio("/Content/pit.mp3");
var beep = new Audio("/Content/beep.mp3");
function playSoundIf() {
    if (typeof clock !== 'undefined') {
        var time = clock.getTime().time-1;
        console.log(time);
        if (time === 0) {
            endAudio.play();
        }
        else if (time === 60) {
            pitAudio.play();
        }
        else if (time === 58) {
            pitAudio.pause();
        }
        else if (time === 61) {
            beep.pause();
            beep.load();
            beep.play();
        }
        else if (time === 62) {
            beep.pause();
            beep.load();
            beep.play();
        }
        else if (time === 63) {
            beep.pause();
            beep.load();
            beep.play();
        }
        else if (time === 64) {
            beep.pause();
            beep.load();
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