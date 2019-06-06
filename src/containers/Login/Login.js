import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import validator from 'validator';
import { login } from '../../actions/login';
import LoginContainer from '../../components/LoginContainer';

const { Control, Group } = Form;

class Login extends Component {
	state = {
		email: '',
		password: '',
	};

	handleChange = e => {
		this.setState({ [e.target.type]: e.target.value });
	};

	handleSubmit = e => {
		e.preventDefault();
		const { email, password } = this.state;
		const { login } = this.props;
		if (validator.isEmail(email) && validator.isLength(password, { min: 6, max: 12 })) {
			login({ email, password });
		}
	};

	render() {
		const { email, password } = this.state;
		return (
			<LoginContainer>
				<h3>Login</h3>
				<Form onSubmit={this.handleSubmit}>
					<Group>
						<Control
							type='email'
							value={email}
							onChange={this.handleChange}
							placeholder='Email...'
						/>
					</Group>
					<Group>
						<Control
							type='password'
							value={password}
							onChange={this.handleChange}
							placeholder='Password...'
						/>
					</Group>
					<Group style={{ display: 'flex', alignContent: 'flex-end' }}>
						<Button type='submit'>Log in</Button>
						<Link style={{ marginLeft: 'auto', alignSelf: 'flex-end' }} to='/signup'>
							Sign up
						</Link>
					</Group>
				</Form>
			</LoginContainer>
		);
	}
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
	login,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Login);
