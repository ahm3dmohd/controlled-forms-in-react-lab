import React from 'react'
import { useState } from 'react'


function Bookshelf() {
    const [books, setBooks] = useState([
  { title: 'Fourth Wing', author: 'Rebecca Yarros' },
  { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
]);

    const [formData, setFormData] = useState({ title: '', author: '' })

function handleChange(event){
        setFormData({...formData,[event.target.name]:event.target.value})
    }

function handleSubmit(event){
        event.preventDefault()

        setBooks([...books, formData])
        setFormData({ title: '', author: '' })
    }



  return (
    <div className="bookshelfDiv">
  <div className="formDiv">
    <h3>Add a Book</h3>
    <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input
            type="text"
            name="title"
            id="title"
            onChange={handleChange}
            value={formData.title}
            />

            <label htmlFor="author">Author:</label>
            <input
            type="text"
            name="author"
            id="author"
            onChange={handleChange}
            value={formData.author}
             />
             <button>Create Book</button>
        </form>
  </div>
  <div className="bookCardsDiv">
    {books.map((book, index) => (
      <div className="bookCard" key={index}>
        <h4>{book.title}</h4>
        <p>by {book.author}</p>
      </div>
    ))}
  </div>
</div>

  )
}

export default Bookshelf
