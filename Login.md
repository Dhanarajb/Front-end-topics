# Interview Scenario: Implementing a Login System with Token-Based Authentication in Node.js

**Interviewer Question:**  
*"How would you implement a login system with token-based authentication in Node.js?"*

**Candidate Response:**

### 1. Clarify the Problem:
*“Just to confirm, you want me to build a system where a user logs in, and if successful, they get a token that they can use to access other secure parts of the app, right?”*

### 2. Break Down the Problem:
*“I'll break this down into three steps:*
1. *First, the user logs in by providing their username and password.*
2. *Second, if the password is correct, we generate a token.*
3. *Third, we protect certain routes in the app by checking if the user has a valid token when they try to access them.”*

*“I’ll use two tools for this:*
- *bcrypt to securely check passwords,*
- *JWT (JSON Web Token) to handle the token.”*

### 3. High-Level Solution:
*“When a user logs in, the system will compare their password to the one stored in the database using bcrypt. If it’s a match, I’ll create a JWT token using a secret key and send it back to the user. For secure routes, a middleware function will check the token to confirm the user’s identity before allowing access.”*

### 4. Thought Process:
*“I chose JWT because it allows us to manage authentication without having to store session data on the server. Using bcrypt helps ensure that passwords are securely stored and difficult to crack.”*

### 5. Implementation Plan:
*“I would start by creating a login route in Express. Then, I'll hash and compare passwords using bcrypt. After that, I'll generate a JWT token using a secret key. Lastly, I’ll write a middleware that checks the token for all routes that need protection."*

### 6. Trade-offs and Optimizations:
*“This method is simple and scales well, but if the token is stolen, someone else could use it. To prevent this, I’d make the tokens expire after a short time, and maybe add refresh tokens so users can stay logged in.”*

### 7. Edge Cases and Testing:
*“I’ll take care of situations like incorrect passwords, expired tokens, or missing tokens. I’d write tests to make sure the login system and token validation work correctly.”*

### 8. Stay Open to Feedback:
*“Does this cover everything you're looking for, or is there a part you'd like me to explain in more detail?”*
