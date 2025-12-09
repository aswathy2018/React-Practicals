function List(){
    const arr = ["Apple", "Banana", "Orange", "Grape", "Watermelon", "Avacado"]

    let res = arr.map((fruits, index) => <li>{fruits}</li>)

    return (<ol>{res}</ol>);
}

export default List;