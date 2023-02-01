import react from "react"
export default function Card(props){
console.log(props)
return(
<div className="session table">
    <div className="row">
        <div >
            <img src={props.item.imageUrl} alt="location" className="image"/>
        </div>
        <div className="content"> 
            <div className="sameLine">
                <img src= {require ("../images/icon.png")} className="redIcon" />
                <h4>{props.item.location}</h4>
                <h5>View on Google Maps</h5>
            </div>

            <h2>{props.item.title}</h2>
            <h3>{props.item.startDate} - {props.item.endDate}</h3>
            <p>{props.item.description}</p>
        </div>
    </div>
    <hr/>
</div>
)

}