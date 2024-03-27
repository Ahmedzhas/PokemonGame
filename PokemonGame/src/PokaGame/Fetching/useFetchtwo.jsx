import axios from 'axios'
import React, { useContext, useEffect, useState , } from 'react'
import cardContext from '../context/Context'

const FetchingData2 = () => {
    const {cardz , setCardz , isgameover} = useContext(cardContext)

    const URL = 'https://pokeapi.co/api/v2/pokemon/'
        const cancelreq = axios.CancelToken.source()
        useEffect(()=>{
          const fetching = async ()=>{  
            if(cardz.length === 0 && isgameover === false)        
              for (let i = 0; i < 5; i++) {
              try {
                const response = await axios.get(URL + Math.floor(Math.random() * 1000), {
                  cancelToken: cancelreq.token 
                });
                const pw = Math.floor((Math.random() * 100) + 1);
                setCardz(prev => [...prev, {
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
        },[cardz,isgameover])
           
          }


export default FetchingData2