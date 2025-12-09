function ConditionalRend(props){
    return(
        props.isActive ? <h2>Welcome {props.name}</h2> : <h2>Please login..</h2>
    );
}

export default ConditionalRend;