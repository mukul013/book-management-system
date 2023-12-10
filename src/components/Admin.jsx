import React, { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Admin = ({ addBook, bookshelf, deleteBook }) => {
  const [newBook, setNewBook] = useState({
    name: "",
    isbn: "",
    category: "",
    rowNo: "",
    count: 0,
    cost: "",
    availability: "available",
  });

  const handleInputChange = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  const handleAddBook = () => {
    if (Object.values(newBook).every((field) => field.trim() !== '')) {
        addBook(newBook);
        setBook({
          name: '',
          isbn: '',
          category: '',
          rowNo: '',
          count: '',
          cost: '',
          availability: '',
        });
      } else {
        toast.error('FILL ALL THE FIELDS');
      }
  };

  const handleEdit = (index) => {
    const editedBook = bookshelf[index];
    setNewBook(editedBook);
    deleteBook(index);
  };

  const handleDelete = (index) => {
    deleteBook(index);
  };

  return (
    <div className="w-[100%] h-[100vh]">
      <h2 className="flex justify-center uppercase text-2xl mt-2 font-medium text-gray-200">Add Book</h2>
      
      <div className="flex w-[70%] justify-evenly m-auto">
        <form className="max-w-sm mx-auto w-[100%] ">
        
        <div className="mb-5">
          <label htmlFor="name" 
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Book Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={newBook.name}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-5">
          <label htmlFor="isbn"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ISBN:</label>
          <input
            type="text"
            id="isbn"
            name="isbn"
            value={newBook.isbn}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="category"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={newBook.category}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="rowNo"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Row No.:</label>
          <input
            type="number"
            id="rowNo"
            name="rowNo"
            value={newBook.rowNo}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="count"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Book Count:</label>
          <input
            type="number"
            id="count"
            name="count"
            value={newBook.count}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="cost"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cost:</label>
          <input
            type="number"
            id="cost"
            name="cost"
            value={newBook.cost}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="availability"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Availability:</label>
          <select
            id="availability"
            name="availability"
            value={newBook.availability}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="available">Available</option>
            <option value="not-available">Not Available</option>
          </select>
        </div>

        <div className="flex justify-center">
        <button type="button" onClick={handleAddBook}
        className=" text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
          Add Book
        </button>
        </div>

      </form>

        <div className="w-[30%]">

        <h2 className="uppercase text-gray-200 font-medium text-lg">Added Books</h2>
        <ul className="text-white">

        {bookshelf.map((book, index) => (
          <li key={index} className="flex mt-2 gap-5">

            <div className="w-32 break-words">{book.name}</div>

            <div className="flex flex-col items-start">
            <button onClick={() => handleEdit(index)} className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Edit</button>
            <Link to={`/book/${index}`} className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Show Book</Link>
            </div>
           
          </li>
        ))}
        </ul>
        </div>

      </div>

      
    </div>
  );
};

export default Admin;
