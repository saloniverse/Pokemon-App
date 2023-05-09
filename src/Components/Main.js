import React, { useEffect, useState } from "react";
import Card from './Card';
import Pokeinfo from "./Pokeinfo";
import axios from 'axios';
// import {faBackward, faForward} from 'react-icons/fa';
const Main = () => {
    const [pokeData, setPokeData] = useState([]);
    const [loading, setLoading] = useState(true);
    const url = "https://pokeapi.co/api/v2/pokemon/";
    const [pokeDetails, setPokeDetails] = useState();
    const pokeFun = async() => {
        setLoading(true)
        try{
            const res = await axios.get(url);
            console.log(res);
            // setNextUrl(res.data.next);
            // setPreviousUrl(res.data.previous);
            setLoading(false);
            getPokemon(res.data.results);
            console.log(pokeData);
        } catch(error) {
            console.log(error);
        }
        
    }

    const getPokemon = async (res) => {
        res.map(async (item) => {
            try{
                const result = await axios.get(item.url);
                // console.log(item.url)
                // console.log(result.data);
                setPokeData(state => {
                    state = [...state, result.data]
                    state.sort((a, b) => a.id>b.id?1:-1)
                    return state; 
                })
            }catch(error){
                console.log(error);
            }   
        })
    }

    useState(() => {
        pokeFun()
    },[url])
    // react strictmode  makes the useEffect render 2 times the pokemon requested we'll fixed it by changing the useEffect to useState
    return(
        <>
            <h1 className="head">Pokemon App</h1>
            <div className="container">
                <div className="left">
                    <Card pokemon={pokeData} loading={loading} infoPokemon={poke => setPokeDetails(poke)} />
                </div>
                <div className="right">
                    <Pokeinfo data={pokeDetails} />
                </div>
            </div>
        </>
    )
}
export default Main;