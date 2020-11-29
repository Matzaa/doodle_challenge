import React, { useState, useEffect } from "react";
import Messages from "./Messages";
import WriteChat from "./WriteChat";
import "./App.css";

export default function App() {
    const [chatMessage, setChatMessage] = useState("");
    const [author, setAuthor] = useState("me");
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        getMsgs();
    }, []);

    const getMsgs = () => {
        console.log("hooked up");
        fetch(
            `https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/?token=ruYNT6HEXCel`
        )
            .then((res) => res.json())
            .then((response) => {
                console.log("data :", response);
                setMessages(response);
            });
    };

    const postMsg = () => {
        fetch(`https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0`, {
            method: "POST",
            body: JSON.stringify({
                message: chatMessage,
                author: author,
            }),

            headers: {
                "Content-Type": "application/json",
                token: "ruYNT6HEXCel",
            },
        })
            .then((res) => {
                res.json();
            })
            .then((result) => {
                console.log("what came back: ", result);
                getMsgs();
                setChatMessage("");
            })
            .catch((err) => {
                console.log("error in POST req: ", err);
            });
    };

    const handleChange = (e) => {
        setChatMessage(e.target.value);
        setAuthor("me");
        if (e.key === "Enter") {
            e.preventDefault();
            postMsg();
            e.target.value = "";
        }
    };

    return (
        <div>
            <Messages messages={messages} />
            {/* <div id="chat">
                <textarea
                    name="msg"
                    onChange={(e) => handleChange(e)}
                    onKeyDown={(e) => handleChange(e)}
                    placeholder="Message"
                    value={chatMessage}
                ></textarea>
                <button onClick={postMsg}>Send</button>
            </div> */}
            <WriteChat
                handleChange={(arg) => handleChange(arg)}
                chatMessage={chatMessage}
                postMsg={postMsg}
            />
        </div>
    );
}
