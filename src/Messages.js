import React from "react";

export default function Messages(props) {
    return (
        <div id="messages">
            {props.messages &&
                props.messages.map((eachMsg) => (
                    <div className="each-msg" key={eachMsg._id}>
                        <h1>{eachMsg.author}</h1>
                        <h1>{eachMsg.message}</h1>
                    </div>
                ))}
        </div>
    );
}
