import { useEffect, useState } from "react";

const UseEffect = () => {

    var [text, updateText] = useState("");
    useEffect(() => {console.log(text)}, [text])

    var [number, updateNumber] = useState();
    useEffect(() => {console.log(number)}, [number])

    return(
        <div>
            <h4>UseEffect</h4>

            <h5>Use Effect Text</h5>
            <input type="text" value={text} onChange={(e) => updateText(e.target.value)}/>

            <h5>Use Effect Number</h5>
            <input type="number" value={number} onChange={(e) => updateNumber(e.target.value)}/>
        </div>
    );
}
export default UseEffect;