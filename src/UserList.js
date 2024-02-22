import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import ListGroup from 'react-bootstrap/ListGroup';
import './App.css'

function UserList() {
    const [listOfUsers, setListOfUsers] = useState([]);

    useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
            setListOfUsers(res.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }, []);

    return (
        <div id='mod'>
            <h1> <strong>Users List</strong> </h1>
            <ListGroup as="ol" numbered id='uuu'>
                {listOfUsers.map(user => <ListGroup.Item as="li" key={user.id}>{user.name}</ListGroup.Item>)}
            </ListGroup>
        </div>
    );
}

export default UserList;
