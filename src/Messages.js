import React from "react";

export default function Messages(props) {
    return (
        <div id="messages">
            {props.messages &&
                props.messages.map((eachMsg) => (
                    <div
                        className={`${
                            eachMsg.author === "me" ? "me" : "others"
                        }`}
                        key={eachMsg._id}
                    >
                        <p>{eachMsg.author}</p>
                        <h1>{eachMsg.message}</h1>
                        <p> {new Date(eachMsg.timestamp).toLocaleString()}</p>
                    </div>
                ))}
        </div>
    );
}
