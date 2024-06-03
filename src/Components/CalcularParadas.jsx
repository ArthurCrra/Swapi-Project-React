import React from "react";

// transoforma as unidades de medidas presentes na api em uma unidade universal em horas.
function ConversaoHoras(consumables) {
    if (typeof consumables !== 'string') {
      return 0;
    }
  
    const [val, unidade_medida] = consumables.split(" ");
    let result = 0;
  
    switch (unidade_medida) {
      case "day":
      case "days":
        result = parseInt(val) * 24;
        break;
      case "week":
      case "weeks":
        result = (parseInt(val) * 7) * 24;
        break;
      case "month":
      case "months":
        result = (parseInt(val) * 30) * 24;
        break;
      case "year":
      case "years":
        result = (parseInt(val) * 365) * 24;
        break;
      default:
        result = 0;
    }
  
    return result;
  }

// Função que faz o calculo das paradas de cada nave espacial
function CalcularParadas({ starships, distancia }) {
    return (
      <>
        {starships.map((starship) => {
          const velocidade = parseInt(starship.MGLT);
          const autonomia = ConversaoHoras(starship.consumables);
          const quantidadeParadas = distancia / (velocidade * autonomia);
  
          return (
            <div key={starship.name}>
              <p className="ResultadoParadas">
                {starship.name}: {Math.floor(quantidadeParadas)} paradas necessárias.
              </p>
            </div>
          );
        })}
      </>
    );
  }
  

export default CalcularParadas;
