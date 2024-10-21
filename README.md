# Savory 🍽️

## Introduction

Savory is a modern recipe application designed to help users discover and enjoy a wide variety of delicious recipes. The app provides a user-friendly interface where users can explore recipes by categories, view detailed information, and easily navigate through various sections.

## Demo

Check out the live demo here: [Savory](https://recipes-app-nada-malashs-projects.vercel.app)

## Features

- **Home Page:**
  A welcoming dashboard that showcases featured recipes and categories, inviting users to explore more.

- **About Page:**
  Provides information about the chef, who inspires food lovers with creative recipes.

- **Categories Page:**
  Allows users to browse recipes based on different categories, making it easy to find specific types of meals.

- **Contact Page:**  
  A form for users to get in touch, share feedback, or ask questions.

- **Recipe Details:**
  Clicking on a recipe displays detailed information such ingredients.

- **Responsive Design and User-Friendly Navigation:**
  The app is fully responsive, providing an optimal viewing experience across devices, with intuitive navigation for seamless page transitions.

## Technologies Used

- **Frontend:**

  - **Angular 17**: This project leverages features such as **Services**, **Routing**, **Custom Pipes**, **Custom Directives**, **Lazy Loading**, **Reusable Components**, and **Reactive Forms**.

  - **SCSS**: For more maintainable and modular styles.

  - **Bootstrap**: For developing responsive, mobile-first UI.

- **Backend:**

  The frontend project is integrated with the [Edamam Recipe API](https://api.edamam.com/doc/open-api/recipe-search-v2.json) for access to a vast database of recipes.

## Installation

To run the project locally, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/nadamalash/recipes-app.git
   ```
2. Navigate to the project directory:
   ```
   cd recipes-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Configure the Edamam API:

   - Create an account on Edamam and get your API keys.
   - Add the API keys to your environment configuration file (src/environments/environment.ts).

5. Run the development server:
   ```
   ng serve
   ```
   Navigate to http://localhost:4200/ to view the application.
