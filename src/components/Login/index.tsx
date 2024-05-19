import React, { FormEvent, useState } from 'react';
import { Box, Button, TextField, Typography, IconButton } from '@mui/material';
import { Google as GoogleIcon, Instagram as InstagramIcon } from '@mui/icons-material';

export function Login () {
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
		<>
			<Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%', maxWidth: '400px', backgroundColor: '#f4f5f6', padding: '5px', borderRadius: '25px', border: '6px solid var(--white-100)', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)'}} onSubmit={handleSubmit}>
				<Typography variant="h5" align="center">Login</Typography>
				
				<TextField value={email} onChange={(e) => setEmail(e.target.value)} label="Email" variant="outlined" fullWidth required/>
				<TextField value={password} onChange={(e) => setPassword(e.target.value)} label="Senha" type="password" variant="outlined" fullWidth required />
				{error && <div className="error-message">{error}</div>}
				<Button type="submit" variant="contained" color="primary" fullWidth>Entrar</Button>
				
				<Typography variant="body2" align="center" sx={{ mt: 0 }}>
					<a href="#">Forgot password?</a>
				</Typography>
				
				<Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
					<IconButton color="primary" onClick={() => { console.log('login com Google')}}>
						<GoogleIcon />
					</IconButton>
					<IconButton color="secondary" onClick={() => { console.log('Login com instagram')}}>
						<InstagramIcon />
					</IconButton>
				</Box>
			</Box>
		</>
  );
};
