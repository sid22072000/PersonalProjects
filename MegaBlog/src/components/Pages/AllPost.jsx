import React, { useEffect, useState } from 'react'
import service from '../../appwrite/config'
import PostCard from '../PostCard'
import Container from '../Container/Container';

function AllPost() {
    const [posts,setPosts] = useState([]);
    useEffect(()=>{
     service.getAllPosts().then((posts)=>{
        console.log("ALL POSTS ->",posts)
        setPosts(posts.documents)
     })
    },[])
  return (

    <div className='w-full py-8 '>
        <Container>
                <div className='flex flex-wrap'>
                        {
                            posts?.map((post)=>(
                                <div key={post.$id} className='p-2 w-1/4'>
                                    <PostCard {...post}/>
                                </div>
                            ))
                        }
                </div>
        </Container>
        </div>
  )
}

export default AllPost