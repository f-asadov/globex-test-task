import './card-wrapper.css'


interface PropsInterface{
    onCardClick: () => void,
    name:string,
    phoneNumber:string,
    email:string
}

const Card = (props:PropsInterface) => {


    const handleCardClick = () => {
        props.onCardClick();
      };

    return <div className="card-wrapper" onClick={handleCardClick}>
        <p className='card-name'>{props.name}</p>
        <div className="card-phone"> <img src={require('../../images/phone.png')} alt="" /> <p>{props.phoneNumber}</p></div>
        <div className="card-email"><img src={require('../../images/email.png')} alt="" /> <p>{props.email}</p></div>
    </div>
}

export default Card