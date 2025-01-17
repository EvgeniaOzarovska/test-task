import React, { useEffect, useState } from "react";
import { Alert, Button, styled, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const CustomButton = styled(Button)({
  backgroundColor: "#6495ED",
  color: "white",
  width: "220px",
  margin: "10px",
  transition: "background-color 0.3s ease",

  "&:hover": {
    backgroundColor: "#191970",
  },
});

export const CustomLoginSection = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  height: "100vh",
  width: "100vw",
});

const CustomTextField = styled(TextField)({
  display: "flex",
  alignContent: "center",
  margin: 10,
  width: "220px",
});

export const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    const loginName = localStorage.getItem("admin");
    const loginPassword = localStorage.getItem("admin123");

    if (loginName && loginPassword) {
      setUsername(loginName);
      setPassword(loginPassword);
    }
  }, []);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const loginName = "admin";
    const loginPassword = "admin123";
    if (username === loginName && password === loginPassword) {
      setError("");
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("userPassword", password);
      localStorage.setItem("userName", username);
      navigate("/main");
    } else {
      setError("Invalid credentials. Try again.");
    }
  };
  return (
    <CustomLoginSection data-testid="login">
      <h1>LogIn</h1>
      <form onSubmit={handleLogin}>
        <CustomTextField
          data-testid="username"
          type="text"
          label="User name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <CustomTextField
          data-testid="password"
          type="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && (
          <Alert data-testid="login-error-msg" severity="error">
            {error}
          </Alert>
        )}
        <CustomButton data-testid="login-btn" type="submit">
          Login
        </CustomButton>
      </form>
    </CustomLoginSection>
  );
};
