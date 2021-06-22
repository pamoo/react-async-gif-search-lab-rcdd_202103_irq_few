import React, { useEffect,useState } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default function() {

  const [gifs,setGifs]=useState([])

  const fetchGIFs = (query = "dolphins") => {
      fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
        .then(res => res.json())
        .then(({data}) => {
          setGifs(data.map( gif => ({ url: gif.images.original.url }) ))
        })
    }

  useEffect(()=>fetchGIFs(),[])

    return(
      <div>
        <GifSearch fetchGIFs={fetchGIFs} />
        <GifList gifs={gifs} />
      </div>
    )
}
