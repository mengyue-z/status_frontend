import React, { useState } from 'react';

function AddProjectForm() {
    const [address, setAddress] = useState('');

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // send the project address to the backend server
        fetch('http://localhost:8080/projects/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ address })
        })
            .then(response => response.json())
            .then(data => {
                console.log('Successfully added project:', data);
                // reset the form input
                setAddress('');
            })
            .catch(error => console.error('Error adding project:', error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Project Address:
                <input type="text" value={address} onChange={handleAddressChange} />
            </label>
            <button type="submit">Add Project</button>
        </form>
    );
}

export default AddProjectForm;
