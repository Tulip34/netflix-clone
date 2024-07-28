import React, { useEffect, useState } from 'react'
import './Player.css'
import black_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'
const Player = () => {
    const {id}=useParams();
    const navigate=useNavigate();
    const [apiData,setApiData]=useState({
        name:"",
        key:"",
        published_at:"",
        typeof:""
    })
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NzQ5NTI0YzgxYmMxMWU0OTk3OTUxY2RhNWMyOGU1MCIsIm5iZiI6MTcyMjA2MTY2NC44MjYzNDEsInN1YiI6IjY2YTQ5MTlkOTQ3ZDM1OWI5MTkxMjM2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Jp_Z3-VRGRxj_zWna6FERKCsb3G8NiV0FOemQWwSCl0'
        }
      };
      useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
        .then(response => response.json())
        .then(response => setApiData(response.results[0]))
        .catch(err => console.error(err));
      },[])
      
  return (
    <div className='player'>
      <img src={black_arrow_icon} alt="" onClick={()=>{navigate(-2)}}/>
      <iframe width="90%" height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder='0'allowFullScreen ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
        </div>
    </div>
    
  )
}

export default Player
