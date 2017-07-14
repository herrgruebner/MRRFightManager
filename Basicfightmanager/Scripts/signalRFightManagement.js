
var manager = $.connection.fightManagementHub;
manager.client.startTimer = function () {
    clock.reset();
    clock.start();
}

manager.client.stopTimer = function () {
    clock.stop();
}

manager.client.updateRobotNames = function (name1, name2) {
    $('#robot1Name').text(name1);
    $('#robot2Name').text(name2);
}

manager.client.showOutcome = function (winningRobot, losingRobot, winType) {
    $('.result #winningRobot').text(winningRobot);
    $('.result #losingRobot').text(losingRobot);
    if (winType = 'Tie') {
        $('.result #winType').text('Tied With')
    }
    else if (winType = 'Knockout') {
        $('.result #winType').text('Knocked out')
    }
    else if (winType = 'Tie') {
        $('.result #winType').text('Beat')
    }
}
function startClock() {
    manager.server.startTimer();
}

function stopClock() {
    manager.server.stopTimer();
}

function updateRobotNames() {
    var name1 = $('#robot1Name').val();
    var name2 = $('#robot2Name').val();
    manager.server.updateRobotNames(name1, name2);
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