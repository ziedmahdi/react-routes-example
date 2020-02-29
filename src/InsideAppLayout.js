import React, { Component } from 'react';
import { SideBar } from './SideBar';
import { TopBar } from './TopBar';
import { Footer } from './Footer';

export class InsideAppLayout extends Component {
    render() {
        return (

            <div id="wrapper">
              <SideBar />
              {/* Content Wrapper */}
              <div id="content-wrapper" className="d-flex flex-column">
                {/* Main Content */}
                <div id="content">
                  <TopBar />
                  {/* Begin Page Content */}
                  {this.props.children}
                  {/* /.container-fluid */}
                </div>
                {/* End of Main Content */}
                <Footer />
              </div>
              {/* End of Content Wrapper */}
            </div>
          );
    }
}