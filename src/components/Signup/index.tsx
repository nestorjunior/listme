import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import {
	Box,
	Button,
	Card,
	CardContent,
	TextField,
	Typography,
} from "@mui/material";
import { type FormEvent, useState } from "react";
import { styled } from "styled-components";

const StyledCard = styled(Card)`
  max-width: 600px;
  margin: 20px auto;
  padding: 16px;
  border-radius: 16px !important;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
`;

export function Signup() {
	const handleGoogleLogin = () => {
		console.log("Google login");
	};

	const handleInstagramLogin = () => {
		console.log("Instagram login");
	};

	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [confirmPassword, setConfirmPassword] = useState<string>("");
	const [error, setError] = useState<string>("");

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (!validateEmail(email)) {
			setError("Invalid email");
			return;
		}

		if (!validatePassword(password)) {
			setError("Password must be at least 6 characters long");
			return;
		}

		if (password !== confirmPassword) {
			console.log("Passwords do not match");
			return;
		}
	};

	const validateEmail = (email: string): boolean => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	const validatePassword = (password: string): boolean => {
		return password.length >= 6;
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
						Signup
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
						<TextField
							value={password}
							onChange={(e) => setConfirmPassword(e.target.value)}
							fullWidth
							label="Confirm Password"
							variant="outlined"
							size="small"
							type="password"
							placeholder="Confirm your password"
							margin="normal"
							required
						/>

						{error && <div className="error-message">{error}</div>}

						<Button variant="contained" color="primary" size="large">
							Signup
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
