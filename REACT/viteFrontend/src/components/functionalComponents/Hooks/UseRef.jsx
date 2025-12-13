import { useState, useEffect, useRef } from "react";

const UseRef = () => {

    var [text, setText] = useState("");
    var prevtext = useRef("");
    useEffect(() => {
        prevtext.current = text;
    }, [text])

    return (
        <div>
            <h4>This is UseRef Hook</h4>
            <input type="text" value={text} onChange={e => setText(e.target.value)}/>
            <h5>The current render is {text}</h5>
            <h5>The previous render is {prevtext.current}</h5>
        </div>
    );
}
export default UseRef;