import React,{Component} from 'react';
import '../App.css'

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      phone: 0,
      password: "",
      confirmPassword: ""
    }
    
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  
  }

    handleSubmit (event)  {
      event.preventDefault();
      if (
        this.state.username &&
        this.state.email &&
        this.state.phone &&
        this.state.password &&
        this.state.confirmPassword &&
        this.state.password === this.state.confirmPassword &&
        this.state.password.length >= 6
      ) {
        console.log('submitted successfully!');
      } 
      
      else {
        console.error('failed. Please check for errors.');
      }

      }
    
      
      handleInputChange (event) {
      this.setState({ [event.target.name]: event.target.value });
      }
      
     



render() {
  const { username, email, phone, password, confirmPassword } = this.state;
  const isDisabled = !username || !email || !phone || !password || !confirmPassword || password !== confirmPassword;
  return (
    <form onSubmit={this.handleSubmit}>
      <div>
        <label>Username:</label>
        <input type="text" name="username" value={username} onChange={this.handleInputChange} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={email} onChange={this.handleInputChange} />
      </div>
      <div>
        <label>Phone:</label>
        <input type="tel" name="phone" value={phone} onChange={this.handleInputChange} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password" value={password} onChange={this.handleInputChange} />
      </div>
      <div>
        <label>Confirm Password:</label>
        <input type="password" name="confirmPassword" value={confirmPassword} onChange={this.handleInputChange} />
      </div>
      <button type="submit" disabled={isDisabled}>Submit</button>
    </form>
  );
  
}


}

export default RegisterForm
