import { useState } from "react"

const UseState = () => {
    const [number, updateNumber] = useState(0);
    const [text, updateText] = useState("hello");

    const subTract = () => {
        updateNumber(number-1)
    }

    const addiTion = () => {
        updateNumber(number+1)
    }

    const reSet = () => {
        updateNumber(0)
        updateText("")
    }

    return(
        <div>
            <h4>UseState Hook Example</h4>
            <button onClick={subTract}>-</button>
            <input type='number' value={number}/>
            <button onMouseEnter={addiTion}>+</button>
            <button onDoubleClick={reSet}>Reset</button>
            <br/>
            <h4>Typing Text</h4>
            <input  type="text" value={text} onChange={(e) => updateText(e.target.value)}/>
            <button onDoubleClick={reSet}>Reset</button>
        </div>
   )
}
export default UseState;