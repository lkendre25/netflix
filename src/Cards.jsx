function Cards(props){
    return(
        <>
    <div className="card_name">
        <div className="card_title">
            <h1>{props.title}</h1>
            <div className="card_body">
                <div className="card_body">
                    
                    <img src={props.imgsrc} alt="here"/>
                    <p>{props.desc}</p>
                </div>
                <button>{props.btton}</button>
            </div>
        </div>

    </div>
    </>
    );
}
export default Cards;