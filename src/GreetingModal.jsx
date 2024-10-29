// GreetingModal.js
import React from 'react';
import './GreetingModal.css'; // Import the CSS file for styles

const GreetingModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null; // Don't render if not open

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Welcome to Our Website!</h2>
                <p>We're excited to have you here. Explore our amazing courses and get started on your learning journey today!</p>
                <button id="close-modal" onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
};

export default GreetingModal;
