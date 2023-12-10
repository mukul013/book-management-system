import React, { useState,useEffect } from 'react';
import { BrowserRouter as Router, Route, Link , Routes} from 'react-router-dom';
import Admin from './components/Admin';
import ShowBook from './components/ShowBook';
import ShowAdmin from './components/ShowAdmin';
import './App.css'
import { Toaster } from 'react-hot-toast';
import Home from './components/Home';

const App = () => {

  const [bookshelf, setBookshelf] = useState( () => {
    const storedBooks = localStorage.getItem('bookshelf');
    return storedBooks ? JSON.parse(storedBooks) : [];
  });

  useEffect(() => {
    localStorage.setItem('bookshelf', JSON.stringify(bookshelf));
  }, [bookshelf]);


  const addBook = (book) => {
    setBookshelf([...bookshelf, book]);
  };

  const editBook = (index, editedBook) => {
    const updatedBookshelf = [...bookshelf];
    updatedBookshelf[index] = editedBook; 
    setBookshelf(updatedBookshelf);
  };

  const deleteBook = (index) => {
    const updatedBookshelf = [...bookshelf];
    updatedBookshelf.splice(index, 1);
    setBookshelf(updatedBookshelf);
  };

  return (
    <Router>
      <div className='w-[100%] h-[100%] radial'>
        <h1 className='flex justify-center uppercase text-4xl pt-5 font-medium text-gray-200'>Bookshelf Management</h1>
        <nav className='flex justify-center pt-2 pb-2'>
          <ul className='flex justify-between uppercase w-64 text-gray-200'>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
            <li>
              <Link to="/showadmin">Show Admin</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route
            path="/admin"
            element={<Admin addBook={addBook} bookshelf={bookshelf} deleteBook={deleteBook} editBook={editBook} />}
        />

        <Route
            path="/showadmin"
            element={<ShowAdmin bookshelf={bookshelf} deleteBook={deleteBook} editBook={editBook} />}
        />
        
        <Route path="/qr-scanner"/>

        {bookshelf.map( (book, index) => (
            <Route
              key={index}
              path={`/book/${index}`}
              element={<ShowBook book={book} />}
            />
        ))}

        </Routes>
        
      </div>
      <Toaster />
    </Router>
  );
};

export default App;
