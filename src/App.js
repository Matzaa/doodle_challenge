import "./App.css";
import React, { useEffect } from "react";

function App() {
    useEffect(() => {
        console.log("hooked up");
        fetch(`https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/?token=
ruYNT6HEXCel`)
            .then((res) => res.json())
            .then((response) => {
                console.log("data :", response);
            });
    });

    const postMsg = () => {
        fetch(`https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0`, {
            method: "POST",
            body: JSON.stringify({
                message: "does it work?",
                author: "Bob",
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
                console.log("what came bak: ", result);
            });
    };

    return (
        <div className="App">
            <h1 onClick={postMsg}>hi</h1>
        </div>
    );
}

export default App;
