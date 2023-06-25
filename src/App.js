import './App.css';
import './bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import Table from 'react-bootstrap/Table';
import{useState }from 'react'
function App() {
  const[state,setState]=useState([])
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Button variant="outline-secondary" onClick={()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
          // console.log(response.data)
          setState(response.data)

        })
        }
      }>Click Here!!!</Button>
      {state.map((obj,index)=>{
        return(
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Body</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{index+1}</td>
          <td>{obj.title}</td>
          <td>{obj.body}</td>
          
        </tr>
       
      </tbody>
    </Table>
        )
      })}

      
    </div>
  );
}

export default App;
