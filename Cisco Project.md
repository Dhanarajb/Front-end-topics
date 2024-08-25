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

---

# Single SPA with Micro Frontends

**Single SPA** (Single Single Page Application) is a framework that enables the integration of multiple micro frontends into a single-page application. Here's a detailed overview of how Single SPA works with micro frontends:

## 1. Single SPA Container

- **Role**: Acts as the main application shell or container that integrates multiple micro frontends.
- **Function**: Manages overall application state, routing, and integration.

## 2. Micro Frontends

Micro frontends are separate pieces of the application, each responsible for different features or sections. Examples include:

- **Micro Frontend 1**: Could be developed using React and Angular.
- **Micro Frontend 2**: Might use Vue and React.
- **Micro Frontend 3**: Could be built with Angular and Vue.

## 3. Routing & Integration Layer

- **Role**: Handles the routing and integration of micro frontends within the Single SPA container.
- **Function**: Determines which micro frontend should be displayed based on the URL and manages transitions between different parts of the application.

### Components:

- **Shared Components**: Components used across multiple micro frontends to ensure consistency.
- **Inter-Micro Frontend Communication**: Mechanisms for communication between different micro frontends (e.g., shared state or events).
- **State Management**: Centralized state management to ensure consistent data across micro frontends.

## 4. Routing

- **How It Works**: Single SPA handles the URL routing and dynamically loads the appropriate micro frontend based on the current route.
- **Example**: Navigating to `/product` might load Micro Frontend 1 (e.g., the product catalog), while `/cart` loads Micro Frontend 2 (e.g., the shopping cart).

## 5. Integration

- **How It Works**: Single SPA ensures that micro frontends work together as part of a seamless user experience. It manages:
  - **Loading**: Ensuring that the correct micro frontend is loaded when needed.
  - **Unloading**: Removing micro frontends from the view when they are no longer needed.
  - **Shared Resources**: Handling shared dependencies to avoid duplication and ensure consistency.

## 6. Deployment

- **Independent Deployment**: Each micro frontend can be deployed separately, allowing teams to release updates without affecting the entire application.
- **Benefits**: Reduces deployment risk and allows for more agile development processes.

## 7. Inter-Micro Frontend Communication

- **How It Works**: Micro frontends might need to communicate with each other or share state. Single SPA provides mechanisms for:
  - **Event Bus**: A system for broadcasting events between micro frontends.
  - **Shared State**: Using a central store or API to manage and share data.

## 8. State Management

- **Centralized State**: Maintains the application state in a way that is accessible to all micro frontends.
- **Consistency**: Ensures that data remains consistent across different parts of the application.

## Example Scenario

Imagine a large e-commerce platform with the following features:

- **Micro Frontend 1**: Product catalog, built with React.
- **Micro Frontend 2**: Shopping cart, built with Angular.
- **Micro Frontend 3**: User profile, built with Vue.

When a user navigates to the product catalog, Single SPA dynamically loads Micro Frontend 1 and displays it. If the user then adds items to the cart and navigates to the cart, Single SPA will unload Micro Frontend 1 and load Micro Frontend 2.

Throughout this process, Single SPA manages the routing, ensures smooth transitions, and integrates all micro frontends into a unified experience, even if they use different technologies.
<img width="741" alt="Screenshot 2024-08-25 at 1 07 30 PM" src="https://github.com/user-attachments/assets/c8bfa818-7213-415b-912d-2a5dc580eaef">
---
# Challenging Project: Cisco Spaces Dashboard

## Project Overview
One of the toughest projects I worked on was building a detailed dashboard for Cisco Spaces. The project required connecting to many different APIs, making sure the dashboard looked good on all devices, and handling a lot of data in React. We had some performance problems because of the large amount of data. To fix this, I used techniques to speed up the code and made the API calls more efficient. I also led code reviews to make sure the team was following good coding practices, which helped reduce bugs and made the code easier to manage.

## Cross-Questions and Answers

### What specific performance issues did you face?
We had problems with the dashboard running slowly because it had to handle a lot of data at once.

### How did memoization help with the performance issues?
Memoization helped by storing the results of expensive calculations so they wouldn’t need to be done again, which sped up the dashboard.

### Can you explain how optimizing API calls improved performance?
I improved performance by making fewer API calls and combining them when possible, which reduced the amount of data being processed and made the dashboard faster.

### What were the main challenges in ensuring the dashboard was responsive across devices?
The main challenge was making sure the dashboard looked and worked well on different screen sizes and devices, which required careful design and testing.

### How did leading code reviews help with the project?
Leading code reviews helped by ensuring everyone followed good coding practices, which reduced bugs and made the code easier to maintain and understand.

### What best practices did you focus on during code reviews?
I focused on practices like writing clean code, following consistent naming conventions, and ensuring that the code was easy to understand and modify.

### What was the most challenging aspect of managing complex state in React?
Managing complex state was challenging because it involved keeping track of many different pieces of data and making sure they updated correctly across the dashboard.

### How did you ensure the dashboard worked well across different devices?
I tested the dashboard on various devices and screen sizes and used responsive design techniques to ensure it adjusted properly and looked good everywhere.



