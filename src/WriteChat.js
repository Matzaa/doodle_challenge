import React from "react";

export default function WriteChat(props) {
    return (
        <div id="chat">
            <textarea
                name="msg"
                onChange={(e) => props.handleChange(e)}
                onKeyDown={(e) => props.handleChange(e)}
                placeholder="Message"
                value={props.chatMessage}
            ></textarea>
            <button onClick={props.postMsg}>Send</button>
        </div>
    );
}
