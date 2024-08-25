# Login and Logout Flow using JWT

## 1. User Requests the Login Page
- **User → Browser:** The user initiates the process by requesting the login page from their browser. This step is typically where the user accesses the login URL of the application.

## 2. User Submits Login Credentials
- **Browser → Server:** The user fills in their username and password and submits the form. The browser sends these credentials to the server as a login request.

## 3. Server Validates the Credentials
- **Server → DB:** The server receives the login request and then checks the provided credentials against the stored data in the database (DB). The server queries the database to see if the username and password match any records.

## 4. Database Returns Validation Result
- **DB → Server:** The database sends back a response to the server, indicating whether the credentials are valid or invalid.

## 5. Server Handles Login Success or Failure
### If the credentials are valid:
- **Server → JWT:** The server generates a JSON Web Token (JWT) as a way to securely represent the user’s session.
- **JWT → Server:** The JWT is returned to the server.
- **Server → Browser:** The server sends the JWT back to the browser as part of the response, indicating that the login was successful.
- **Browser → User:** The browser updates the UI to show that the user is logged in, typically by redirecting to a dashboard or home page.

### If the credentials are invalid:
- **Server → Browser:** The server sends an error message to the browser, indicating that the login attempt failed.
- **Browser → User:** The browser displays an error message to the user, prompting them to try again.

## 6. User Initiates Logout
- **User → Browser:** When the user wants to log out, they click on the logout button or link.

## 7. Browser Sends Logout Request
- **Browser → Server:** The browser sends a logout request to the server, typically including the JWT so that the server knows which session to invalidate.

## 8. Server Invalidates the JWT
- **Server → JWT:** The server communicates with the JWT management system to invalidate the token, ensuring that it can no longer be used for authentication.
- **JWT → Server:** The JWT system confirms that the token has been invalidated.

## 9. Server Confirms Logout
- **Server → Browser:** The server sends a confirmation to the browser that the logout was successful.
- **Browser → User:** The browser then redirects the user back to the login page or another appropriate page, completing the logout process.

---
![mermaid-ai-diagram-2024-08-25-100152](https://github.com/user-attachments/assets/70692b8d-471d-4b32-923f-100eedbc1fc3)
