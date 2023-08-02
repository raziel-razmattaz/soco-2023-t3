//creating the message sender element
function createMessageSender() {
    const root = document.getElementById('info-box');
    root.outerHTML += `
        <div id="message-sender-box" class="message-sender-box">
            <div class="message-sender-box-header"></div>
            <div class="message-sender-box-content">
                <p><label for="username"><strong>Username </strong></label></p>
                <p><input type="text" id="username" name="username" placeholder="[optional]" maxlength="20" size="20" /></p>
                <p><label for="username"><strong>Message</strong></label></p>
                <form>
                    <textarea maxlength="240"></textarea>
                </form>
                <button onclick="sendMessage()" id="button-send">
                    <span style="vertical-align: top; line-height: 24px;">Post Message!</span>
                    <span class="material-symbols-outlined">send</span>
                </button>
            </div>
        </div>
    `;
    document.getElementById('button-create').disabled = true;
}

//reading the values in from the message sender element
//destroy sender element + spawn message + reactivate post button
function sendMessage() {
    //let uname = whatever.value;
    var msg_sender = document.getElementById('message-sender-box');
    msg_sender.remove();
    document.getElementById('button-create').disabled = false;
    //delete message-sender-box
    //add message box with outerhtml + ${uname}
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