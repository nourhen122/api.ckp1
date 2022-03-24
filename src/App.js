import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner } from 'react-bootstrap';

function App() {
let api_key = '26297289-ab2b0709ddb27790ec75a14c6&q'
const [users, setUsers] = useState([])
const [loading, setLoading] = useState(true)
const [text, setText] = useState('')
// old method
// useEffect(() => {
//  const fetchData = () => {
//    const res = fetch('https://jsonplaceholder.typicode.com/users')
//    .then(response => response.json())
//    .then(json => console.log(json))
 
//  fetchData()
// }, [])}

// es7 method
useEffect(() => {
 const fetchData = async() => {
const res = await axios.get(`https://pixabay.com/api/?key=${api_key}&q=${text}&image_type=photo`)
console.log(res.data.hits)   
setUsers(res.data.hits)
   setLoading(false)
 }
 fetchData()
}, [text])



  return (
    <div className="App">
      <input type="text"  value={text} onChange={(e)=>setText(e.target.value)} />
   {
     loading ? <Spinner animation="border" role="status">
     <span className="visually-hidden">Loading...</span>
   </Spinner>
     :
     users?.map(el=>
      <div>
        <img height="500" width="700" src={el.largeImageURL} alt="" />
        <a href={el.pageURL} target="_blank" rel="noopener noreferrer">DOWNLOAD</a>
      </div>
      )
   }
    </div>
  );
}

export default App;
