// // Modal.js
// import React from 'react';

// const Modal = ({ isOpen, onClose, children }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 mt-5 bg-black bg-opacity-50 flex items-center justify-center">
//       <div className="bg-white rounded-lg p-8 w-full max-w-4xl">
//         <button className="absolute top-4 right-4" onClick={onClose}>
//           ✖
//         </button>
//         {children}
//       </div>
//     </div>
//   );
// };

// export default Modal;


import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  // Function to handle clicks on the overlay
  const handleOverlayClick = (e) => {
    // Ensure that clicks inside the modal content do not close the modal
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      onClick={handleOverlayClick} // Attach click handler to the overlay
    >
      <div className="bg-white rounded-lg p-8 w-full max-w-4xl relative">
        <button className="absolute top-4 right-4" onClick={onClose}>
          ✖
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
