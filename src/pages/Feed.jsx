import React, { useState } from 'react'

const Feed = () => {

    const [posts, setPosts] = useState([
        {
            _id: '1',
            image: 'https://images.unsplash.com/photo-1779485070200-a33a369afe5a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MXx8fGVufDB8fHx8fA%3D%3D',
            caption: 'First Post'
        }
    ])

    return (
        <section className='feed-section'>
            <h2>Feed</h2>
            <p>Welcome to your feed</p>
            {
                posts.length === 0 ? (<p>No posts to show. Create your first post!</p>) :
                    (
                        posts.map(post => (
                            <div key={post._id} className='post-card'>
                                <img src={post.image} alt={post.caption} />
                                <p>{post.caption}</p>
                            </div>
                        ))
                    )
            }
        </section>
    )
}

export default Feed