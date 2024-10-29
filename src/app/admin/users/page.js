'use client'

import { useState } from 'react';
import styles from '../../page.module.css';

export default function AdminUsers() {

    const [searchName, setSearchName] = useState("");

    const users = [
        {id: 1, name: 'John Smith', location: 'Miami, FL'},
        {id: 2, name: 'Mark Johnson', location: 'New York, NY'},
        {id: 3, name: 'Peter Clarke', location: 'Los Angeles, CA'}
    ];

    return (
        <div className={styles.adminMain}>
            <h1 className={styles.title}><i className='nav-icon bi bi-person'></i> Users</h1>

            <div className='card'>
                <div className='card-header'>
                    <h3 className='card-title'>Search User</h3>
                    <div className='card-tools'>
                        <div className='input-group input-group-sm'>
                            <input type='text' className='form-control float-right' placeholder='Enter an username...'
                            style={{width: '65em'}} onChange={(e) => setSearchName(e.target.value)} />
                            
                        </div>
                    </div>
                </div>
                <div className='card-body table-responsive p-0'>
                    <table className='table table-hover text-nowrap'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Username</th>
                                <th>Location</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user) => {
                                    if (searchName == "" || user.name.toLowerCase().includes(searchName.toLowerCase()))
                                        return (
                                            <tr key={user.id}>
                                                <td>{user.id}</td>
                                                <td>{user.name}</td>
                                                <td>{user.location}</td>
                                                <td>
                                                    <button style={{marginRight: 5}} className='btn btn-primary'>Ban</button>
                                                    <button className='btn btn-danger'>Delete</button>
                                                </td>
                                            </tr>
                                        )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}