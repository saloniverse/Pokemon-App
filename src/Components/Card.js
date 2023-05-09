import React from "react";
import './style.css';

const Card = ({pokemon, loading, infoPokemon}) => {
    return(
        <>
            {
                loading ? <h1>Loading...</h1>:
                pokemon.map((item) => {
                    return(
                        <> 
                            <div className="card" key={item.id} onClick={() => infoPokemon(item)}>
                                <span>{item.id}</span>
                                <span>{item.name}</span>
                                <img src={item.sprites.front_default} alt="Bulbasaur" /> 
                            </div>
                        
                        </>
                    )
                })
            }
            
        </>
    )
}
export default Card;