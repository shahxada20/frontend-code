import React, { use, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {
  const [image, setImage] = useState(null)
  const [caption, setCaption] = useState('')
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!image) {
      alert('Please upload an image')
      return
    }
    setIsSubmitting(true)

    const formData = new FormData()
    formData.append('image', image)
    formData.append('caption', caption)

    try {
      const response = await axios.post('http://localhost:5000/post/create', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      console.log('Post created successfully', response.data)
      alert('Post created successfully!')

      setImage(null)
      setCaption('')
      e.target.reset()

      navigate('/feed')

    } catch (error) {
      console.error('Error creating post:', error)
      alert('Failed to create post. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className='create-post-section'>
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" placeholder="Upload Image" onChange={(e) => setImage(e.target.files[0])} required />
        <input type="text" placeholder="Enter Caption" value={caption} onChange={(e) => setCaption(e.target.value)} required />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </section>
  )
}

export default CreatePost;