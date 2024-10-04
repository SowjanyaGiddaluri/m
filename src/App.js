import React, { useState } from 'react';
import UserProfile from './UserProfile/UserProfile';
import './App.css';

const initialUserDetailsList = [
    {
        uniqueNo: 1,
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
        name: 'Esther Howard',
        role: 'Software Developer',
    },
    {
        uniqueNo: 2,
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
        name: 'Jane Doe',
        role: 'Product Manager',
    },
    {
        uniqueNo: 3,
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
        name: 'John Smith',
        role: 'UX Designer',
    },
    {
        uniqueNo: 4,
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
        name: 'Alice Johnson',
        role: 'QA Engineer',
    },
];

const App = () => {
    // Managing the user list state
    const [userDetailsList, setUserDetailsList] = useState(initialUserDetailsList);
    const [searchInput, setSearchInput] = useState('');

    const handleSearchChange = (event) => {
        setSearchInput(event.target.value);
    };

    // Filter the user details based on search input
    const filteredUserDetails = userDetailsList.filter((user) =>
        user.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    // Function to delete a user
    const deleteUser = (uniqueNo) => {
        const updatedUserList = userDetailsList.filter(
            (user) => user.uniqueNo !== uniqueNo
        );
        setUserDetailsList(updatedUserList); // Updating the state
    };

    return (
        <div className="list-container">
            <h1 className="title">User Details</h1>
            <input
                type="search"
                placeholder="Search by name"
                value={searchInput}
                onChange={handleSearchChange}
            />
            <ul>
                {filteredUserDetails.map((eachItem) => (
                    <UserProfile 
                        userDetails={eachItem} 
                        key={eachItem.uniqueNo} 
                        deleteUser={deleteUser} // Passing the delete function as a prop
                    />
                ))}
            </ul>
        </div>
    );
};

export default App;
