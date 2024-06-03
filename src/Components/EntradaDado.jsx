import React, {useState} from 'react'
import api from '../services/Swapi'
import CalcularParadas from './CalcularParadas';

function EntradaDado({ onSubmit }){

    const[distancia, setDistancia] = useState('');
    const[starships, setStarships] = useState([]);

    //Função que lida com as diversas paginas da api

    async function PegartodasNaves(url='/starships', allStarships=[]) {
        const response = await api.get(url)
        const results = response.data.results;
        const next = response.data.next;
        const updatedStarships = allStarships.concat(results);

    //verifica se next está correto
        if (next){
            return PegartodasNaves(next, updatedStarships)
        } 
        else {
            setStarships(updatedStarships)
            onSubmit(distancia, updatedStarships)
        }


      };

    

    //função após o usuario clicar no botão e executar a ação (evento).
    //futuramente implementar metodo catch, agora não é minha prioridade.
    function PegarDados(e){
        e.preventDefault()
        PegartodasNaves()
    }





    {/*
Função antiga ulitizada para pegar os dados da api segundo a minha logica.
motivo da mudança: A api possui diversas paginas que necessitam uma abordagem diferente.

    function PegarDados(e){
        e.preventDefault()
        api.get('/starships')
        .then(function(response){
            const starships = response.data.results;
            onSubmit(distancia, starships)
        })
    }
*/}





    return(
        <div>
            <h1 className='titulo'>Informe a distância a ser percorrida em MGLT:</h1>
            <form onSubmit={PegarDados}>
                <div>
                    <label htmlFor="MGLT">Mega Lights:</label>
                    <input 
                    type="number"
                    id='MGLT'
                    name='distancia'
                     placeholder="Digite a distância" 
                     value={distancia}
                     onChange = {(e) => setDistancia(e.target.value)}
                     />

                </div>
                <button 
                className='botao' 
                type='submit'>Calcular!</button>
            </form>

            < CalcularParadas starships={starships} distancia={distancia} />
        </div>
    )
}
export default EntradaDado;