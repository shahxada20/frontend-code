import React from 'react'

const CreatePost = () => {
  return (
    <section className='create-post-section'>
      <h2>Create Post</h2>
      <form>
        <input type="file" placeholder="Upload Image" />
        <input type="text" placeholder="Enter Caption" required={true} />
        <button type="submit">Submit</button>
      </form>
    </section>
  )
}

export default CreatePost;