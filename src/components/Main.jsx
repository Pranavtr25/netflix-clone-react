import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Request from '../Requests'

const Main = () => {
    const [movies,SetMovies] = useState([])

    const movie = movies.length>0 ? movies[Math.floor(Math.random() * movies.length)] : null;
    useEffect(() =>{
        axios.get(Request?.ActionMovies).then(response =>{
            SetMovies(response?.data?.results)
        }).catch(err => console.log(err))
    },[])
    console.log(movies)

    function truncateString(str,num){
      if(str?.length > num){
        return str.slice(0,num) + "..."
      }else{
        return str
      }
    }

  return (
    <div className='w-full h-[550px] '>
      <div className='h-full w-full'>
        <div className='absolute h-[550px] w-full bg-gradient-to-r from-black'></div>
        <img className='h-full w-full object-cover' src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`} alt={movie?.original_title} />
        <div className='absolute w-full top-[20%] p-4 md:p-8'>
          <h1 className='text-white text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
          <div className='my-4'>
            <button className='border bg-gray-300 px-5 py-2'>Play</button>
            <button className='border text-white py-2 px-5 ml-4'>Watch Later</button>
          </div>
          <p className='text-gray-400 text-sm'>Released : {movie?.release_date}</p>
          <p className='text-white text-sm md:max-w-[35%] lg:max-w-[50%] xl:max-w-[70%] my-4'>{truncateString(movie?.overview,150)}</p>
        </div>
      </div>
    </div>
  )
}

export default Main