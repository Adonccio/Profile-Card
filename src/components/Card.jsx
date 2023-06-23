import '../Card.css'

export default function Card (prop) {
    return (
        <div id='card'>
            <img src={prop.img}  alt="" />
            <h1>{prop.name}</h1>
            <hr />
            <p>{prop.bio}</p>
            <hr />
            <p>{prop.phone}</p>
            <hr />
            <p>{prop.email}</p>
            <hr />
            <div id='buttons'>
                <button><a target='_blank' href={prop.git}>GitHub</a></button>
                <button><a target='_blank' href={prop.instagram}>Instagram</a></button>
            </div>
        </div>
    )
}