/*
===TODO===
Step One: Functioning 'Add Message' Button
-> it pops out an input window
-> input happens
Step Two: Transform input window into an uneditable element
-> bg colour is one of three random th köln themed colours
Step Three: Make it draggable
-> difficult difficult
-> maybe limit position to canvas??
Step Four: Load and Read from LocalStorage
-> just some tests
Step Five: Load and Read Messages from LocalStorage
-> optional name, message, colour
-> position doesn't matter yet
Step Six: Load and Position Messages according to LocalStorage
-> good god
Step Seven: Clear Messages Button
-> optional, only if time
-> scrubs the data clean baby
*/

//testing dynamic html element creation upon a buttonPress
//the test element 
function createMessageSender() {
    const root = document.getElementById('info-box');
    root.outerHTML += `
        <div class="test-creation">
            <h3>example</h3>
            <p>test test test</p>
        </div>
    `;
    document.getElementById('button-create').disabled = true;
}

//for the time display in the top-bar
function refreshTime() {
    let dt = new Date();
    var hr = dt.getHours();
    var min = dt.getMinutes();
    min = min < 10 ? '0' + min : min;
    const timeString = `${hr}:${min}`;
    const timeDisplay = document.getElementById("time");
    timeDisplay.textContent = timeString;
}
setInterval(refreshTime, 1000);