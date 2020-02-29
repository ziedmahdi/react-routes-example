import React, { Component } from 'react';

export class OutsideAppLayout extends Component {
    componentDidMount() {
        window.$('body').addClass('bg-gradient-primary');
    }

    componentWillUnmount() {
        window.$('body').removeClass('bg-gradient-primary');
    }
    
    render() {
        return (
        
            <div className="container">
                {this.props.children}
            </div>
            
        )
    }
}