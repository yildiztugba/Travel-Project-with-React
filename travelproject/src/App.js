import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"

function App() {
const card = data.map((item)=>{
  return <Card 
        item={item}/>
})

  return (
    <>
    <Navbar />
    {card}
    </>

  )
}

export default App;
