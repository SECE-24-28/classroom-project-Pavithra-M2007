const Task = (task) => {
    return (
        <div>
            <h1>This is Task Component</h1>
            <ol>
                <li>Tasks are :</li>
                <ul>
                    <li>{task.item}</li>
                    <li>This is waffle with the flavour of {task.flavour} in price {task.price}</li>
                </ul>
            </ol>
        </div>
    )
}
export default Task;