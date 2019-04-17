import React from 'react';

class Register extends React.Component { 
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            name: ''
        }
    }

    handleFormChange = (event) => {
        const {name, value} = event.target; 
        this.setState({[name]: value})
    }

    onSubmitRegister = () => {
        fetch('http://localhost:3001/register', {
            method: 'post',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            })
        })
        .then(response => response.json())
        .then(user => {
            if(user[0]){
                this.props.loadUser(user);
                this.props.onRouteChange('home');
            }
        })
    }

    render() {
    return (
    <div>
    <article className="br5 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 bg-white-30 black-90">
            <div className="measure">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f3 fw6 ph0 mh0">Register</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                        <input 
                            className="pa2 input-reset b--black ba bg-transparent w-100" 
                            type="text" 
                            name="name"  
                            id="name"
                            onChange = {this.handleFormChange}    
                        />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email">Email</label>
                        <input 
                            className="pa2 input-reset b--black ba bg-transparent w-100" 
                            type="email" 
                            name="email" 
                            id="email"
                            onChange = {this.handleFormChange}
                        />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input 
                            className="b pa2 input-reset ba b--black bg-transparent w-100" 
                            type="password" 
                            name="password"  
                            id="password"
                            onChange = {this.handleFormChange}
                        />
                    </div>
                </fieldset>
                <div className="">
                    <input 
                    id="registersubmit"
                    onClick={this.onSubmitRegister}
                    className="b ph3 pv2 input-reset black ba b--black bg-transparent grow pointer f6 dib" 
                    type="submit" 
                    value="Register"/>
                </div>
            </div>
        </main>
        </article>
        </div>
        )
    }
}

export default Register;