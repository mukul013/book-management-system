import React from 'react';
import QRCode from 'react-qr-code';
import { useRef } from 'react';
import html2canvas from 'html2canvas';

const ShowBook = ({ book }) => {
    
    const qrCodeRef = useRef();

    const downloadQRCode = () => {
        if (qrCodeRef.current) {
          html2canvas(qrCodeRef.current)
            .then((canvas) => {
              const dataUrl = canvas.toDataURL('image/png');
              const downloadLink = document.createElement('a');
              downloadLink.href = dataUrl;
              downloadLink.download = 'book_qr_code.png';
              downloadLink.click();
            })
            .catch((error) => {
              console.error('Error generating QR code image:', error);
            });
        }
      };

  return (
    <div className='w-[100%] h-[100vh] flex justify-center'>

      {book ? (
        <div className='text-white'>
          <h3 className='uppercase text-lg font-bold text-gray-200 my-3'>Book Details</h3>
          <p><strong>Name:</strong> {book.name}</p>
          <p><strong>ISBN:</strong> {book.isbn}</p>
          <p><strong>Category:</strong> {book.category}</p>
          <p><strong>Row No.:</strong> {book.rowNo}</p>
          <p><strong>Book Count:</strong> {book.count}</p>
          <p><strong>Cost:</strong> {book.cost}</p>
          <p><strong>Availability:</strong> {book.availability}</p>
          <div className='mt-5'>
        <h3 className='uppercase text-lg font-bold'>QR Code</h3>
        <div ref={qrCodeRef} className='mt-2'>
          <QRCode value={window.location.href} />
        </div>
        <button onClick={downloadQRCode} className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-4">Download QR Code</button>
      </div>
        </div>
      ) : (
        <p>No book found.</p>
      )}

    </div>
  );
};

export default ShowBook;
