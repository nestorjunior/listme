import { FormEvent, useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  TextField,
  Button,
} from "@mui/material";
import { styled } from "styled-components";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";

const StyledCard = styled(Card)`
  max-width: 600px;
  margin: 20px auto;
  padding: 16px;
  border-radius: 16px !important;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
`;

export function Login() {
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

  const handleGoogleLogin = () => {
    console.log("Google login");
  };

  const handleInstagramLogin = () => {
    console.log("Instagram login");
  };

  return (
    <>
      <StyledCard>
        <CardContent>
          <Typography
            variant="h5"
            align="center"
            gutterBottom
            sx={{ color: "#212529bf", fontWeight: "bold" }}
          >
            Login
          </Typography>
          <Box
						component="form" 
            sx={{
              maxWidth: 600,
              margin: "auto",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
						onSubmit={handleSubmit}
          >
            <TextField
							value={email} 
							onChange={(e) => setEmail(e.target.value)} 
              fullWidth
              label="Email"
              variant="outlined"
              size="small"
              type="email"
              placeholder="Enter your email"
              margin="normal"
							required
            />
            <TextField
							value={password} 
							onChange={(e) => setPassword(e.target.value)} 
              fullWidth
              label="Password"
              variant="outlined"
              size="small"
              type="password"
              placeholder="Enter your password"
              margin="normal"
							required
            />
						
						{error && <div className="error-message">{error}</div>}

            <Button type='submit' variant="contained" color="primary" size="large">
              Login
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={handleGoogleLogin}
              startIcon={<GoogleIcon />}
              size="large"
            >
              Login with Google
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleInstagramLogin}
              startIcon={<InstagramIcon />}
              size="large"
            >
              Login with Instagram
            </Button>
          </Box>
        </CardContent>
      </StyledCard>
    </>
  );
}
