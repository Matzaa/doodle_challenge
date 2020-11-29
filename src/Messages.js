import React, { useRef, useEffect } from "react";

export default function Messages(props) {
    const end = useRef();

    useEffect(() => {
        console.log("hey");
        if (end.current) {
            end.current.scrollIntoView({
                behaviour: "smooth",
                block: "end",
                inline: "nearest",
            });
        }
    });

    return (
        <div>
            <div id="messages">
                {props.messages &&
                    props.messages.map((eachMsg) => (
                        <div
                            className={`chat-box ${
                                eachMsg.author === "me" ? "me" : "others"
                            }`}
                            key={eachMsg._id}
                        >
                            <p>{eachMsg.author !== "me" && eachMsg.author}</p>
                            <h2>{eachMsg.message}</h2>
                            <p className="date">
                                {" "}
                                {new Date(eachMsg.timestamp).toLocaleString()}
                            </p>
                        </div>
                    ))}
                <div ref={end}></div>
            </div>
        </div>
    );
}
