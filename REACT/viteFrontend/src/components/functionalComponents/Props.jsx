const Props = (props) => {
    return (
        <div>
            <h1>This is Props Component</h1>
            <ol>
                <li>Props are :</li>
                <ul>
                    <li>{props.hi}</li>
                    <li>I completed my {props.grade} grade by the age of {props.age} years old</li>
                    <li><img src={props.img} alt=''/></li>
                </ul>
            </ol>
        </div>
    )
}
export default Props;