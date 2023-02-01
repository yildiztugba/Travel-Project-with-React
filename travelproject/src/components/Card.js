import react from "react"

export default function Card(props){
console.log(props)
return(
<div className="session">
<img src={props.item.imageUrl} alt="location" className="image"/>
<img src=""/>
<h4>{props.item.location}</h4>
<h5>View on Google Maps</h5>
<h2>{props.item.title}</h2>
<h3>{props.item.startDate} - {props.item.endDate}</h3>
<p>{props.item.description}</p>
</div>
)

}