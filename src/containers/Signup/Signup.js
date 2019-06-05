import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import validador from 'validator';
import { login } from '../../actions/login';

import './Signup.sass';

const { Control, Group } = Form;

class Signup extends Component {
	state = {
		firstname: '',
		lastname: '',
		email: '',
		nickname: '',
		password: '',
		repeatPassword: '',
	};

	handleChange = e => {
		this.setState({ [e.target.type]: e.target.value });
	};

	handleSubmit = e => {
		e.preventDefault();
		const { firstname, lastname, email, nickname, password, repeatPassword } = this.state;
		const { login } = this.props;
		if (
			validador.isAlpha(firstname) &&
			validador.isAlpha(lastname) &&
			validador.isAlpha(nickname) &&
			validador.validator.isEmail(email) &&
			validador.isLength(password, { min: 6, max: 12 } && password === repeatPassword)
		) {
			login({ email, password });
		}
	};

	render() {
		const { firstname, lastname, email, nickname, password, repeatPassword } = this.state;
		return (
			<div className='login-container'>
				<h3>Login</h3>
				<Form onSubmit={this.handleSubmit}>
					<Group>
						<Control
							type='text'
							name='firstname'
							value={firstname}
							onChange={this.handleChange}
							placeholder='First name'
						/>
					</Group>
					<Group>
						<Control
							type='text'
							name='lastname'
							value={lastname}
							onChange={this.handleChange}
							placeholder='Last name'
						/>
					</Group>
					<Group>
						<Control
							type='text'
							name='nickname'
							value={nickname}
							onChange={this.handleChange}
							placeholder='Nickname'
						/>
					</Group>
					<Group>
						<Control
							type='email'
							name='email'
							value={email}
							onChange={this.handleChange}
							placeholder='Email'
						/>
					</Group>
					<Group>
						<Control
							type='password'
							name='password'
							value={password}
							onChange={this.handleChange}
							placeholder='Password'
						/>
					</Group>
					<Group>
						<Control
							type='password'
							name='repeatPassword'
							value={repeatPassword}
							onChange={this.handleChange}
							placeholder='Repeat Password'
						/>
					</Group>
					<Group style={{ display: 'flex', alignContent: 'flex-end' }}>
						<Button type='submit'>Log in</Button>
						<Link style={{ marginLeft: 'auto', alignSelf: 'flex-end' }} to='/signup'>
							Sign up
						</Link>
					</Group>
				</Form>
			</div>
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
)(Signup);
