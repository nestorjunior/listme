import React, { FormEvent, useState } from 'react';

import './styles';
import { 
	LoginFormContainer,
	LoginFormStyled,
	LoginFormTitle,
	LoginBoxSubmitButton,
	StyledSubmitButton
} from './styles'

export function LoginForm () {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateEmail(email)) {
      setError('Invalid email');
      return;
    }

    if (!validatePassword(password)) {
      setError('Password must be at least 6 characters long');
      return;
    }

    setError('');

    try {
      const token = await authenticateUser(email, password);
      localStorage.setItem('token', token);
      window.location.href = '/';
    } catch (error) {
      console.error('Error authenticating:', error);
      setError('Check your credentials and try again');
    }
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string): boolean => {
    return password.length >= 6;
  };

  const authenticateUser = async (
    email: string,
    password: string
  ): Promise<string> => {
    const url =
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD3qEBHWnUAwir0xQ2B9NztF7TIeOSLjPU';

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
    });

    if (!response.ok) {
      console.log(response);
      throw new Error('Authentication error');
    }

    const data = await response.json();
    return data.idToken;
  };

  return (
    <LoginFormContainer>
      <LoginFormStyled onSubmit={handleSubmit}>
			<LoginFormTitle>Login</LoginFormTitle>
        <div className="formEmailUser">
          <label className='form-label'>Email</label>
          <input
						className='form-control'
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
						style={{marginBottom: '15px'}}
          />
        </div>

        <div className="formEmailPassword">
					<label className='form-label'>Password</label>
          <input
						className='form-control'
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
						style={{marginBottom: '15px'}}
          />
        </div>

        {error && <div className="error-message">{error}</div>}

        <LoginBoxSubmitButton>
          <StyledSubmitButton className='btn btn-primary' type="submit">
            Submit
          </StyledSubmitButton>
        </LoginBoxSubmitButton>
      </LoginFormStyled>
    </LoginFormContainer>
  );
};