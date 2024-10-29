'use client'

import { useState } from 'react';
import styles from '../../page.module.css';

export default function AdminHotels() {

    const [searchName, setSearchName] = useState("");

    const hotels = [
        {id: 1, name: 'Beach Hotel', location: 'Miami, FL'},
        {id: 2, name: 'Oasis', location: 'Las Vegas, NV'},
        {id: 3, name: 'Ye Olde Inn', location: 'New York, NY'}
    ];

    return (
        <div className={styles.adminMain}>
            <h1 className={styles.title}><i className='nav-icon bi bi-clipboard'></i> Hotels</h1>

            <div className='card'>
                <div className='card-header'>
                    <h3 className='card-title'>Search Hotel</h3>
                    <div className='card-tools'>
                        <div className='input-group input-group-sm'>
                            <input type='text' className='form-control float-right' placeholder='Enter a name or location...'
                            style={{width: '65em'}} onChange={(e) => setSearchName(e.target.value)} />
                            
                        </div>
                    </div>
                </div>
                <div className='card-body table-responsive p-0'>
                    <table className='table table-hover text-nowrap'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Location</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                hotels.map((hotel) => {
                                    if (searchName == "" || hotel.name.toLowerCase().includes(searchName.toLowerCase())
                                        || hotel.location.toLowerCase().includes(searchName.toLowerCase()))
                                        return (
                                            <tr key={hotel.id}>
                                                <td>{hotel.id}</td>
                                                <td>{hotel.name}</td>
                                                <td>{hotel.location}</td>
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
    );
}