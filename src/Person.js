import {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import {data} from './data'

function Person() {
    const [name, setName]=useState('default name')
    const {id}=useParams()

    useEffect(()=>{
        const newPerson=data.find((book)=>book.id===id)//if there was number parseInt(id)
setName(newPerson.title)
    },[])
  return (
    <div>
        <h1>{name}</h1>
        <Link to='/people'>Back to People</Link>
    </div>
  )
}

export default Person