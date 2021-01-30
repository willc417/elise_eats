import React from 'react';

export default class extends React.Component {
  constructor(props) {
	super(props);
	this.state = { content: '', name: '', email: '', response: '' };
	this.handleNameChange = this.handleNameChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);

	this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
	return (
  	<form>
        <div className="formHolder">
    	<h2 className="dessertHeader">Send an email to pinkhouse38012@gmail.com:</h2>
        <textarea
        	id="name"
        	name="name"
        	onChange={this.handleNameChange}
        	placeholder="Enter your name"
        	required
        	value={this.state.name}
        	style={{width: '15%', height: '20px', margin: '5px'}}
      	/>
        <textarea
        	id="return-email"
        	name="return-email"
        	onChange={this.handleEmailChange}
        	placeholder="Enter your email"
        	required
        	value={this.state.email}
        	style={{width: '15%', height: '20px', margin: '5px'}}
      	/>
      	<textarea
        	id="email-text"
        	name="email-text"
        	onChange={this.handleContentChange}
        	placeholder="Type your message to Pink House Catering"
        	required
        	value={this.state.feedback}
        	style={{width: '50%', height: '150px', margin: '5px'}}
      	/>
    	<input type="button" value="Submit" className="btn btn--submit" onClick={this.handleSubmit} />
        <p>{this.state.response}</p>
        </div>
  	</form>
	)
  }

  handleNameChange(event) {
    this.setState({name: event.target.value})
  }
  handleEmailChange(event) {
    this.setState({email: event.target.value})
  }
  handleContentChange(event) {
    this.setState({content: event.target.value})
  }

  handleSubmit() {
      fetch("https://xf1hw27lqf.execute-api.us-east-2.amazonaws.com/prod/email", {
          method: 'POST',
          headers: {'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
          body: JSON.stringify({
              name: this.state.name,
              email: this.state.email,
              content: this.state.content,
          }),
          crossDomain: true})
        .then(res => res.text())
        .then(
            (result) => {
                console.log(result)
                this.setState({
                    response: "Email Sent!"
                });
            }
        )
  }



}
