import React from "react";

function ConversaoHoras(consumables){
    const [val, unidade_medida] = consumables.split(' ');

    switch (unidade_medida){
        case "day":
        case "days":
            result = parseInt(val) * 24;
        
        case "week":
        case "weeks":
            result = (parseInt(val) * 7) * 24;

        case "month":
        case "months":
            result = (parseInt(val) * 30) * 24;

        case "year":
        case "years":
            result = (parseInt(val) * 365) * 24;
    }
    return result
}


function Paradas(starships, setDistancia){
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


export default CalcularParadas