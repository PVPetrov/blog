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
			signup({ email, password });
		}
	};

	render() {
		const fields = [
			{ name: 'firstaName', placeholder: 'First Name', type: 'text' },
			{ name: 'lastaName', placeholder: 'Last Name', type: 'text' },
			{ name: 'nickname', placeholder: 'Nickname', type: 'text' },
			{ name: 'email', placeholder: 'Email', type: 'email' },
			{ name: 'password', placeholder: 'Password', type: 'password' },
			{ name: 'confirm', placeholder: 'Confirm password', type: 'password' },
		];

		const { state } = this;
		return (
			<LoginContainer>
				<h3>Signup</h3>
				<Form onSubmit={this.handleSubmit}>
					{fields.map(f => (
						<Group>
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
