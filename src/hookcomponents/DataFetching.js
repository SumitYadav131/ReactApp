import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'

function DataFetching() {
    // const [posts, setPosts] = useState([])
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {
            console.log(res);
            setPost(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[idFromButtonClick])

  return (
    <div>
        <input type='text' value={id} onChange={(e)=>setId(e.target.value)}/>
        <button type='button' onClick={handleClick} >Fetch Post</button>
        {/* {
            posts.map(post => (
            <li key={post.id}>{post.title}</li>
        ))
        } */}
        <h2>{post.title}</h2>
    </div>
  )
}

export default DataFetching