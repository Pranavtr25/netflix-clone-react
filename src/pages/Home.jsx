import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import Request from '../Requests'

const Home = () => {
  return (
    <>
        <Main/>
        <Row title = "Popular Movies" fetchURL = {Request?.PopularMovies} rowID = {1}/>
        <Row title = "Fantasy Movies" fetchURL = {Request?.FantasyMovies} rowID = {2}/>
        <Row title = "Adventurous Movies" fetchURL = {Request?.AdventuresMovies} rowID = {3}/>
        <Row title = "Sci-Fi Movies" fetchURL = {Request?.ScienceAndFiction} rowID = {4}/>
        <Row title = "Top Rated Movies" fetchURL = {Request?.TopRatedMovies} rowID = {5}/>
    </>
  )
}

export default Home