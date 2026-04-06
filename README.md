# User Authentication API (Node.js + SQLite)
Backend API with a complete authentication system using JWT and bcrypt.
Supports user registration,login and acces to protected routes.

# Features
-User registration with encrypted passwords (bcrypt)
-User login
-JWT token generation
-Protected routes using authentication middleware

# Endpoints
-POST /register -> Register a new user
-POST /login -> User login
-GET /profile -> Protected route (requires token)

# Tech Stack
1.Node.js
2.Express
3.SLite
4.bcrypt
5.JSON Web token (JWT)

# Purpose
The goal of this project is to learn how to implement authentication in a real backend application.

# Example usage
1.Register a new user
2.Login to obtain a token
3.Use the token to access protected routes
Header:
Authorization: Bearer TOKEN

# Technical Decisions

-JWT for stateless authentication
-bcrypt for password hashing
-SQLite for simplicity and portability
-Middleware to separate authentication logic

# Project Improvements

-Refactored routes using express.Router()
-Separated business logic into controllers
-Improved project structure and maintainability

# Debugging Experience
-Isue: Request was hanging
-Cause: Missing response in controller
-Solution: Added response handling (res.json)

# Login Flow

1.The user sends email and password via POST request
2.The server validates input  fields
3.The user is searched in the SQLite database
4.Password is compared using bcrypt
5.If valid,a JWT token is generated
6.The server returns the token and user data
7.The token is used to access protected routes

# Possible Errors
-User not found
-Incorrect password
-Missing fields
-Invalid token
-Brute force attacks (not implemented yet)

# Limitations
-No rate limiting
-No refresh tokens
-No advanced input validation
-No automated testing

# What i learned

1.How to implement authentication with JWT
2.Using bcrypt for password security
3.Structuring a backend (routes,controllers,middleware)
4.Handling errors in APIs
