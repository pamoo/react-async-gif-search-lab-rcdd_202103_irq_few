import React, { useState } from 'react'

export default function(props) {

const [query,setQuery]=useState([])

  const handleSubmit = event => {
    event.preventDefault()
    props.fetchGIFs(query)
  }


    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" value={query} onChange={e => setQuery(e.target.value)} />
        </form>
      </div>
    )

}
