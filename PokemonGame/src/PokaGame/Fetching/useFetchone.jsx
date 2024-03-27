import axios from 'axios'
import React, { useContext, useEffect, } from 'react'
import cardContext from '../context/Context'

const FetchingData = async () => {

  const {setCards , isgameover , cards} = useContext(cardContext)

    const URL = 'https://pokeapi.co/api/v2/pokemon/'
        const cancelreq = axios.CancelToken.source()
        useEffect(()=>{
          const fetching = async ()=>{
            if(cards.length === 0 && isgameover === false)
              for (let i = 0; i < 5; i++) {
                try {
                  const response = await axios.get(URL + Math.floor(Math.random() * 1000), {
                    cancelToken: cancelreq.token 
                  });
                  const pw = Math.floor((Math.random() * 100) + 1);
                  setCards(prev => [...prev, {
                    id: response.data.id,
                    name: response.data.name,
                    image: response.data.sprites.front_default,
                    power: pw,
                  }]);
                } catch (err) {
                  if (axios.isCancel(err)) {
                    console.log("Fetch aborted"); 
                  } else {
                    console.error("fetching error", err);
                }
              }
            }
          }
          fetching()
        },[cards,isgameover])

        }


export default FetchingData