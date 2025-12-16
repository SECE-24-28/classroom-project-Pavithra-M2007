const Props = (props) => {
    return (
        <div>
            <h3>React Props Component</h3>
            <p>Props allow you to pass data from parent to child components:</p>
            <ul style={{listStyle: 'none', padding: '1rem 0'}}>
                <li style={{padding: '0.5rem 0'}}>💬 Message: {props.hi}</li>
                <li style={{padding: '0.5rem 0'}}>🎓 Education: I completed my {props.grade} grade by the age of {props.age} years old</li>
                <li style={{padding: '0.5rem 0'}}>🖼️ Image: <img src={props.img} alt='' style={{width: '30px', height: '30px'}}/></li>
            </ul>
        </div>
    )
}
export default Props;