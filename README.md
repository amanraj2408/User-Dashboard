

# User Management Dashboard

## Project Overview

This project develops a simple web application where users can view, add, edit, and delete user details from a mock backend API. The app fetches data from JSONPlaceholder's `/users` endpoint to simulate real backend functionality.

## Features

- Display user list with ID, First Name, Last Name, Email, and Department.
- Add new user via a form (simulated API post).
- Edit existing user details fetched from the API and update them.
- Delete users with API delete requests.
- Pagination with selectable page sizes (10, 25, 50, 100).
- Filter popup to filter users by first name, last name, email, and department.
- Search and sort functionalities across user fields.
- Responsive UI design for desktop and mobile.
- Error handling for API failures with user-friendly messages.
- Client-side validation for user input forms.

## Technologies Used

- Frontend: React (or any other chosen framework/library)
- HTTP requests: Axios or Fetch API
- Mock backend API: JSONPlaceholder (`/users` endpoint)

## Setup and Running Instructions

1. Clone the repository:

   ```bash
   git clone  https://github.com/amanraj2408/Dashboard.git
   cd user-management-dashboard
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. The app will be accessible at `http://localhost:3000`. Use the interface to manage user data.

## Challenges Faced

- Handling the limitations of JSONPlaceholder’s API, which does not persist data changes but simulates responses.
- Implementing a flexible filtering and pagination system while keeping the UI responsive.
- Managing state updates optimistically (given that the API responses are simulated).
- Balancing client-side validation and API request handling for better user experience.

## Possible Improvements

- Replace mock API with a real backend to persist data changes.
- Enhance UI/UX with richer design and animations.
- Add role-based access control for sensitive operations.
- Implement unit and integration tests for components and API interactions.
- Optimize for performance with large datasets (e.g., virtualized list rendering).

 
"# Dashboard" 
"# User-Dashboard" 
"# User-Dashboard" 
