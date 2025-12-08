import profile from './assets/image.png'

function Card(){
    return (
        <div className="card">
            <img className='card-image' src={profile} alt="Profile"></img>
            <h2 className='card-title'>Hello World</h2>
            <p className='card-para'>This is a card component..</p>
        </div>
    );
}

export default Card;