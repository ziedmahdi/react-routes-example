import React, { Component } from 'react';
import SimpleSchema from 'simpl-schema';
import { SimpleSchema2Bridge } from 'uniforms-bridge-simple-schema-2';
import { AutoForm } from 'uniforms-bootstrap4';
import Axios from 'axios';
import { Link } from 'react-router-dom';


const signupSchema = new SimpleSchema({
  firstName: String,
  lastName: String,
  gender: {
    type: String,
    allowedValues: ['male', 'female']
  },
  email: {
    label: 'Email Address',
    type: String,
    regEx: SimpleSchema.RegEx.EmailWithTLD
  },
  password: {
    type: String,
    min: 6,
    uniforms: {
      type: 'password'
    }
  },
  confirmPassword: {
    type: String,
    uniforms: {
      type: 'password'
    },
    custom() {
      if (this.field('password').value != this.value) {
        return 'passwordMismatch';
      }
    }
  }
});

signupSchema.messageBox.messages({
  en: {
    "passwordMismatch": "Passwords mismatch",
  },
});

const formSignupSchema = new SimpleSchema2Bridge(signupSchema);



export class Signup extends Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(user) {
      
      try {
        const result = await Axios.post(process.env.REACT_APP_API_URL + '/users', user);
        window.location.replace('/')
      } catch (error) {
        console.log(error)
      }
    }

    render() {
      return (
  
        <div className="card o-hidden border-0 shadow-lg my-5">
          <div className="card-body p-0">
            {/* Nested Row within Card Body */}
            <div className="row">
              <div className="col-lg-5 d-none d-lg-block bg-register-image" />
              <div className="col-lg-7">
                <div className="p-5">
                  <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                  </div>
                  <AutoForm schema={formSignupSchema} onSubmit={this.handleSubmit} />
                  
                  <hr />
                  <div className="text-center">
                    <a className="small" href="forgot-password.html">Forgot Password?</a>
                  </div>
                  <div className="text-center">
                    <Link className="small" to="/login">Already have an account? Login!</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }