import React, {useState} from 'react'
import api from '../services/Swapi'

function EntradaDado({onSubmit}){

    const[distancia, setDistancia] = useState('');

    function PegarDados(e){
        e.preventDefault()
        api.get('/starships')
        .then(function(response){
            const starships = response.data.results;
            onSubmit(distancia, starships)
        })

    function CalcularParadas(starships, setDistancia){
        return(
            <>
            {starships.map((starship) => (
            <div key={starship.name}>
                const velocidade = parseInt(starship.MGLT)
                const autonomia = parseInt(starship.consumables)
                
            </div>
            ))}
            </>
        )

    }
    }

    return(
        <div>
            <h1>Informe a distância a ser percorrida em MGLT:</h1>
            <form onSubmit={PegarDados}>
                <div>
                    <label htmlFor="Mega Lights:"></label>
                    <input type="number"
                     placeholder="Digite a distância" 
                     onChange = {(e) => setDistancia(e.target.value)}
                     />

                </div>
                <button type='submit'>Calcular!</button>
            </form>
        </div>
    )
}

export default EntradaDado;