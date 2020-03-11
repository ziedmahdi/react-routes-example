import React, { Component } from 'react';

export class Dashboard extends Component {
    state = {
        usersToday: '-',
        usersThisWeeks: '-',
        usersThisMonth: '-',
        usersTotal: '-'
    }

    render() {
        return (
            <>
                <div className="container-fluid">
                    {/* Page Heading */}
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                    </div>
                    {/* Content Row */}
                    <div className="row">
                        {/* Earnings (Monthly) Card Example */}
                        <div className="col-xl-3 col-md-6 mb-4">
                            <div className="col card border-left-primary shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Users (Today)</div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">{this.state.usersToday}</div>
                                        </div>
                                        <div className="col-auto">
                                        <i className="fas fa-calendar fa-2x text-gray-300" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Earnings (Monthly) Card Example */}
                        <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-left-success shadow h-100 py-2">
                            <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-success text-uppercase mb-1">Users (This Week)</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{this.state.usersThisWeeks}</div>
                                </div>
                                <div className="col-auto">
                                <i className="fas fa-users fa-2x text-gray-300" />
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/* Earnings (Monthly) Card Example */}
                        <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-left-info shadow h-100 py-2">
                            <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Users (This Month)</div>
                                <div className="row no-gutters align-items-center">
                                    <div className="col-auto">
                                    <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">{this.state.usersThisMonth}</div>
                                    </div>
                                    <div className="col">
                                    <div className="progress progress-sm mr-2">
                                        <div className="progress-bar bg-info" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="col-auto">
                                <i className="fas fa-clipboard-list fa-2x text-gray-300" />
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/* Pending Requests Card Example */}
                        <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-left-warning shadow h-100 py-2">
                            <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Users (Total)</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{this.state.usersTotal}</div>
                                </div>
                                <div className="col-auto">
                                <i className="fas fa-comments fa-2x text-gray-300" />
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* Content Row */}
                </div> 
            </>
        )
    }
}