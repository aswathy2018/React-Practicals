function Food(){
    let food1 = "Strawberry"
    let food2 = "Grape"
    return(
        <ul>
            <li>Apple</li>
            <li>{food1.toUpperCase()}</li>
            <li>{food2}</li>
        </ul>
    );
}

export default Food;