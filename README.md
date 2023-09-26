# My Next Gym Frontend Application

Welcome to the My Next Gym frontend application repository! This application helps users find the right gym easily. It includes user authentication, user profiles, a map view, and the ability to save favorite places and track workout histories.

## Demo

Check out a live demo of the application [here](https://www.youtube.com/watch?v=VFmsh5oNHYA&t=2s).

## Backend Repository

The backend code for this project can be found in [this GitHub repository](https://github.com/doinyco/Backend-next-gym).

## Table of Contents

- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)

## Technologies Used

- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [Axios](https://axios-http.com/)

## Getting Started

To get started with this project, follow these steps:

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/your-username/my-next-gym-frontend.git

2. Navigate to the project directory:
   ```shell
   cd my-next-gym-frontend
   ```
3. Install the necessary dependencies:
   ```shell
   npm install
  ```
4. Start the development server:
  ```shell
  npm start
  ```
5. Open your browser and visit http://localhost:3000 to view the application.

## Usage
- The main application component can be found in App.js, which includes the homepage layout and user authentication components.
- User profiles, including saved places and workout histories, are managed in the User.js component.
- API calls to retrieve and manipulate data are located in the backendAPI.js file.
- Additional components include:
  - `Auth.js`: Manages user authentication.
  - `EditUserForm.js`: Handles editing user profile data.
  - `Histories.js`: Displays a list of workout histories.
  - `History.js`: Displays individual workout history details.
  - `HistoryForm.js`: Provides a form for users to add workout history entries.
  - `Login.js`: Manages user login functionality.
  - `Logout.js`: Handles user logout.
  - `Map.js`: Displays a map view of gym locations and user interactions.
  - `Place.js`: Represents individual gym locations with the option to save or remove as a favorite.
  - `PlaceList.js`: Lists saved gym locations.
  - `SearchMenu.js`: Provides search functionality to find gym locations based on user preferences.
  - `CreateProfile.js`: Allows users to create a profile with a username and password.
