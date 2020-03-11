import React, { Component } from 'react';
import Axios from 'axios';

export class Users extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        }
        
        Axios.get(process.env.REACT_APP_API_URL + '/users').then(({data}) => {
            this.setState({
                users: data
            })
        });
    }

    render () {
        return (
            <>
            <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Users</h1>
                </div>
                <div className="table-responsive">
                    <table className="table">
                    
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Created At</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.users.map((user) => {
                                return (
                                    <tr key={user.id}>
                                        <th scope="row">{user.id}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.gender}</td>
                                        <td>{user.createdAt}</td>
                                    </tr>
                                )
                            })}        
                        </tbody>
                    </table>
                </div>
            </div>
            </>
        )
    }
}