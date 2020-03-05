import React, { Component } from "react";
import { Link } from "react-router-dom";
import SimpleSchema from "simpl-schema";
import SimpleSchema2Bridge from "uniforms-bridge-simple-schema-2";
import { AutoForm } from "uniforms-bootstrap4";

const loginSchema = new SimpleSchema({
    email: {
        type: String,
        regEx: SimpleSchema.RegEx.EmailWithTLD
    },
    password: {
        type: String,
        min: 6,
        uniforms: {
            type: 'password'
        }
    }
});

const loginFormSchema = new SimpleSchema2Bridge(loginSchema);

export class Login extends Component {
    authenticateUser(user) {
        console.log(user)
    }
    
    render() {
        return (
            <>
            <div className="row justify-content-center">
                <div className="col-xl-10 col-lg-12 col-md-9">
                    <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">
                        {/* Nested Row within Card Body */}
                        <div className="row">
                        <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                        <div className="col-lg-6">
                            <div className="p-5">
                            <div className="text-center">
                                <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                            </div>
                            <AutoForm schema={loginFormSchema} onSubmit={this.authenticateUser} />
                            <hr />
                            <div className="text-center">
                                <a className="small" href="#">Forgot Password?</a>
                            </div>
                            <div className="text-center">
                                <Link className="small" to="/signup">Create an Account!</Link>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

            </>
        )
    }
}