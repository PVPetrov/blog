import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import validador from 'validator';
import { signup } from '../../actions/login';
import LoginContainer from '../../components/LoginContainer';

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
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	handleSubmit = e => {
		e.preventDefault();
		const { firstname, lastname, email, nickname, password, repeatPassword } = this.state;
		const { signup } = this.props;
		if (
			validador.isAlpha(firstname) &&
			validador.isAlpha(lastname) &&
			validador.isAlpha(nickname) &&
			validador.isEmail(email) &&
			validador.isLength(password, { min: 6, max: 12 } && password === repeatPassword)
		) {
			const credentials = { ...this.state };
			delete credentials.repeatPassword;
			signup(credentials);
		} else {
			console.log('something is wrong', this.state);
		}
	};

	render() {
		const fields = [
			{ key: 'firstname', placeholder: 'First Name', type: 'text' },
			{ key: 'lastname', placeholder: 'Last Name', type: 'text' },
			{ key: 'nickname', placeholder: 'Nickname', type: 'text' },
			{ key: 'email', placeholder: 'Email', type: 'email' },
			{ key: 'password', placeholder: 'Password', type: 'password' },
			{ key: 'repeatPassword', placeholder: 'Confirm password', type: 'password' },
		];

		const { state } = this;
		return (
			<LoginContainer>
				<h3>Signup</h3>
				<Form onSubmit={this.handleSubmit}>
					{fields.map(f => (
						<Group key={f.key}>
							<Control
								type={f.type}
								name={f.key}
								value={state[f]}
								onChange={this.handleChange}
								placeholder={f.placeholder}
							/>
						</Group>
					))}
					<Group style={{ display: 'flex', alignContent: 'flex-end' }}>
						<Button type='submit'>Signup</Button>
						<Link style={{ marginLeft: 'auto', alignSelf: 'flex-end' }} to='/login'>
							Login
						</Link>
					</Group>
				</Form>
			</LoginContainer>
		);
	}
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
	signup,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Signup);
