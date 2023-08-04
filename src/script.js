//creating the message sender element
function createMessageSender() {
    const root = document.getElementById('info-box');
    root.outerHTML += `
        <div id="message-sender-box" class="message-sender-box">
            <div class="message-sender-box-header"></div>
            <div class="message-sender-box-content">
                <p><label for="username"><strong>Your name</strong></label></p>
                <p><input type="text" id="username" name="username" placeholder="[optional]" maxlength="20" size="20" /></p>
                <p><label for="message"><strong>Message</strong></label></p>
                <form>
                    <textarea id="message-content" maxlength="240"></textarea>
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
let colours = ["--secondary-purple", "--secondary-orange", "--secondary-red"];

function sendMessage() {
    //validate message + set username if left empty
    var message = document.getElementById("message-content").value;
    if (message.length == 0) { 
        alert("Please enter a valid Message!");  	
        return; 
    }
    var uname = document.getElementById("username").value;
    if (uname.length == 0) {
        uname = "Anonymous";
    }
    //reinstate the ui to the point before createSenderButton was called
    var msg_sender = document.getElementById("message-sender-box");
    msg_sender.remove();
    document.getElementById("button-create").disabled = false;
    //checks if messages already exist, and if so, appends new messages at the end instead
    //this enables "stacking" of messages in chronological order
    const messages = document.getElementsByClassName("message-box")
    console.log(messages);
    if (messages.length > 0) {
        var root;
        for (var i = 0; i < messages.length; i++) {
            root = messages[i];
        }
    } else {
        var root = document.getElementById('info-box');
    }
    //picks a random colour out of given array for styling
    var colour = colours[Math.floor(Math.random() * colours.length)];
    root.outerHTML += `
        <div style="border: 2px solid var(${colour});" class="message-box">
            <div style="background-color: var(${colour});" class="message-box-header"></div>
            <div class="message-box-content">
                <p><strong>${uname}</strong></p>
                <p>${message}</p>
            </div>
        </div>
    `;
    //to make the messages draggable, the newly created element gets added to the draggable list
    var drag_list = document.getElementsByClassName("message-box");
    for (var i = 0; i < drag_list.length; i++) {
	    $(drag_list[i]).draggable();
    }
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
