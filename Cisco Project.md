# DNA Spaces Project

**DNA Spaces** is a platform designed to optimize room occupancy and seating arrangements through a dynamic dashboard system. It supports various use cases, including:

- Manufacturing
- Retail
- Education
- Healthcare
- Workspaces
- Hospitality

The system provides real-time occupancy monitoring and route-based analytics to enhance space utilization. My role involved developing features for effective space management and customizable dashboards tailored to different industry needs. This project aimed to improve operational efficiency and user experience across diverse environments.

## Technology

We used **React** for the front end due to its component-based architecture, which made it easier to build a responsive UI.

## Benefits

The DNA Spaces project benefited users and stakeholders in several ways:

- **Improved Space Utilization:** By providing real-time data on room occupancy and seating arrangements, the platform helped users optimize how their spaces are used, leading to better management and efficiency.

- **Enhanced Decision-Making:** The route-based analytics and dynamic dashboards offered actionable insights, enabling stakeholders to make informed decisions about space allocation and layout adjustments.

- **Increased Operational Efficiency:** The system streamlined space management processes, reducing manual effort and time spent on planning and monitoring, which led to more efficient operations.

- **Tailored Solutions:** Customizable dashboards allowed different industries—such as manufacturing, retail, and healthcare—to get data and insights relevant to their specific needs, improving the relevance and usefulness of the information.

- **Better User Experience:** By improving how spaces are managed and used, the platform enhanced overall user experience in various environments, from classrooms to offices, making them more functional and comfortable.

<img width="1438" alt="Screenshot 2024-08-25 at 12 47 12 PM" src="https://github.com/user-attachments/assets/65eb10ae-6c76-4b29-86ba-f7fe83b76f2a">


----

# Project Architecture

## Frontend
We use **ReactJS** for the frontend, which is the part of the application that users interact with. ReactJS helps us build the user interface and manage interactions. When users need to view or update data, React sends requests to the backend.

## Backend
Our backend is built with **Kotlin**. It processes the requests from the React frontend, handles the application’s business logic, and manages communication with the database. Kotlin ensures that data operations and business rules are efficiently executed.

## Database
For our database, we use **Cassandra**. Cassandra stores all the data for our application, including user information and other content. The backend interacts with Cassandra to retrieve or save data as required.

## How It Works Together
1. **User Interaction**: When a user interacts with the React frontend (e.g., submitting a form or clicking a button), the frontend sends a request to the Kotlin backend.

2. **Backend Processing**: The Kotlin backend receives the request, processes it, and interacts with Cassandra to manage the data.

3. **Data Handling**: The backend retrieves or updates data in Cassandra and sends the results back to the React frontend.

4. **UI Update**: The React frontend then updates the user interface based on the data received from the backend.

This architecture ensures that the application is responsive and efficiently handles user interactions, data processing, and storage.

<img width="808" alt="Screenshot 2024-08-25 at 12 43 41 PM" src="https://github.com/user-attachments/assets/50854f37-8965-49ba-9be4-e86b68870366">

![Project Architecture Diagram](https://mermaid-js.github.io/mermaid-live-editor/#/edit/Z3JhcGggVERcbkF9IFJlYWN0SlMgRnJvbnRlbmQgfCB8IEEoVVNFUiBJbnRlcmFjdGlvbilbWmhPIFJlYWN0SlMgRnJvbnRlbmRdIFxuQiAtLT4gQyhjYXNhbmRyYSBkYXRhYmFzZSBhbmQgU2VydmVyYXRpb24gQ29tcGxldCBpbmZvKSBcblxuUCAtLT4gQmFzZSBhbmQgU2VydmVyYXRpb24gQ29tcGxldCBhbmQgQ2Fzc2FuZHJhIGRhdGFiYXNlIHByb3BlcnR5XG5BIFJlYWN0SlMgRnJvbnRlbmQgLS0gU2VydmVyYXRpb24gY29tcGxldCBpbiB0aGUgaGFuZGxlIHdpdGggdGhlIGRhdGFCYXNlIFxuQmFzZSAtLT4gU2VydmVyYXRpb24gQ29tcGxldCBhbmQgQ2Fzc2FuZHJhIGRhdGFiYXNlIHByb3BlcnR5


