import "./nav.css"


function Card1(props) {
    return (
        <>
        <div className="card-1">
            <img src={props.url} alt="img" />
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
        </>
    )
}

export default Card1