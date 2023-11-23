import React from 'react'
import { useEffect , useState} from 'react'
import Card from './Card'
import '../styles/Characters.css'

function Characters() {
    const [characters , setCharacters]=useState([''])

    useEffect(()=>{
    async function fetchData(){
    const response = await fetch('https://rickandmortyapi.com/api/character')
    const data = await response.json()
    setCharacters(data.results)
    }
    fetchData()
    },[])

    return (
    <div className='container'>
        {characters.map((character,i)=>{
        return(
            <Card key={i} character={character}/>
        )
        })}
    </div>
)
}

export default Characters;