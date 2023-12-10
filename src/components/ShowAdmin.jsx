import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ShowAdmin = ({bookshelf,editBook,deleteBook}) => {

    const [searchInput, setSearchInput] = useState('');
    const [foundBook, setFoundBook] = useState(null);

    const handleSearch = () => {
        const searchResult = bookshelf.find(
        (book) => book.isbn.toLowerCase().trim() === searchInput.toLowerCase().trim() || book.name.toLowerCase().trim() === searchInput.toLowerCase().trim()
        );
        setFoundBook(searchResult);
    };
    
    const handleDelete = (index) => {
        deleteBook(index);
    };

  return (
    <div className='h-[100vh] flex w-[70%] justify-evenly m-auto'>

        <div>
        <h2 className="uppercase text-gray-200 font-medium text-lg text-center mt-3">Added Books</h2>
        
        <ul className="text-white mt-5">

        {bookshelf.map((book, index) => (
          <li key={index} className="flex mt-4 gap-5">

            <div className="w-32 break-words">{book.name}</div>

            <div className="flex flex-col items-start">
            <button onClick={() => handleDelete(index)} className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Delete</button>
            <Link to={`/book/${index}`} className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Show Book</Link>
            </div>
           
          </li>
        ))}
        </ul>
        </div>

        <div className='mt-3'>

      <div className='flex flex-col'>
        <label htmlFor="searchInput" className="block mb-2 font-medium text-gray-900 dark:text-white uppercase text-lg">Search Book</label>
       <div>
       <input
            type="text"
            id="searchInput"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
        />
        <button onClick={handleSearch} className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Search</button>
       </div>
        </div>
       

        {foundBook ? (
            <div className='text-white'>
            <h3 className='uppercase text-lg font-bold text-gray-200 my-3'>Book Details</h3>
            <p><strong>Name:</strong> {foundBook.name}</p>
            <p><strong>ISBN:</strong> {foundBook.isbn}</p>
            <p><strong>Category:</strong> {foundBook.category}</p>
            <p><strong>Row No.:</strong> {foundBook.rowNo}</p>
            <p><strong>Book Count:</strong> {foundBook.count}</p>
            <p><strong>Cost:</strong> {foundBook.cost}</p>
            <p><strong>Availability:</strong> {foundBook.availability}</p>
            </div>
        ) : (
            <p className='uppercase text-gray-200'>No book found</p>
        )}
        </div>

    </div>
  )
}

export default ShowAdmin