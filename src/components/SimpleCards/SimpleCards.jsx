import './simplecards.css'
function SimpleCards({data}) {
    return (
        <div className="simple-cards">
            {
                data.map((el, index) =>{
                    return(
                        <div key={index} className="card" aria-label={el.title}>
                            <h3>{el.title}</h3>
                            <p>{el.content}</p>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default SimpleCards