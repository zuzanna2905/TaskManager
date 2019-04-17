import React from 'react';

class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleFormChange = (event) => {
        const {name, value} = event.target; 
        this.setState({[name]: value})
    }

    onSubmitSignIn = () => {
        fetch('http://localhost:3001/signin', {
            method: 'post',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        })
        .then(response => response.json())
        .then(user => {
            if(user.id){
              this.props.loadUser(user);
              this.props.onRouteChange('home');
            }
        })
    }

    render() {
    const { onRouteChange } = this.props;
    return (
        <div>
        <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
            <main className="pa4 bg-white-30 black-90">
                <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f3 fw6 ph0 mh0">Sign In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email">Email</label>
                            <input 
                                className="pa2 input-reset ba bg-transparent w-100" 
                                type="email" 
                                name="email"  
                                id="email"
                                onChange = {this.handleFormChange}
                            />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input 
                                className="b pa2 input-reset ba bg-transparent w-100" 
                                type="password" 
                                name="password"  
                                id="password"
                                onChange = {this.handleFormChange}
                            />
                        </div>
                    </fieldset>
                    <div className="">
                        <input 
                        id = "signinsubmit"
                        onClick={this.onSubmitSignIn}
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                        type="submit" 
                        value="Sign in"/>
                    </div>
                    <div className="lh-copy mt3">
                        <p onClick={() => onRouteChange('register')}
                        className="f5 link dim black db"
                        >Register</p>    
                    </div>
                </div>
            </main>
            </article>
            </div>
            );  
        }
    }

export default SignIn;