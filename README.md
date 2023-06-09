# Cookie Clicker Redux

Cookie Clicker Redux is a fun and addictive idle game where you click on a giant cookie to earn cookies. The more cookies you earn, the more upgrades and power-ups you can unlock to automate the cookie production process and earn even more cookies.

This repository contains the source code and assets for the Cookie Clicker Redux game. Feel free to explore, modify, and contribute to the development of the game.

## Prerequisites

Before cloning and running the React app, make sure you have the following prerequisites installed on your system:

- [Node.js](https://nodejs.org) (version 17 or higher)
- [npm](https://www.npmjs.com/) (usually comes with Node.js installation)

## Features

- Click on the giant cookie to earn cookies
- Purchase upgrades to increase your cookie production
- Hire grandmas, factories, and other cookie-producing entities
- Engage in a competitive global leaderboard

## Installation

To install and run the React app, follow these steps:

1. Clone this repository:

```bash
git clone https://github.com/X-Tripen/Cookie-Clicker-Redux
```

2. Navigate to the project directory:

```bash
cd cookie-clicker
```

3. Install the dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run start
```

This will start the development server at [http://localhost:3000](http://localhost:3000).

5. Open [http://localhost:3000](http://localhost:3000) in your web browser to view the app.

## Usage

The `src` directory contains the main code for your React application. You can start modifying and building your app by editing the files in this directory.

The entry point for the application is `src/index.js`, where the root component is rendered.

The `public` directory contains the public assets for your application, such as HTML and favicon files. You can customize the `public/index.html` file to include any additional scripts or stylesheets.

## Running Cypress Tests

Cypress is an end-to-end testing framework for web applications. To run the Cypress tests for this project, follow these steps:

1. Make sure the development server is running. Start it with the following command:

```bash
npm run start
```

This will start the development server at [http://localhost:3000](http://localhost:3000).

2. Open a new terminal window/tab and navigate to the project directory.

3. Run the following command:

```bash
npx cypress open
```

This will launch the Cypress Test Runner.

3. Please note that the command:

```bash
npx npm run start
```

on port 3000 [http://localhost:3000] should be executed before running Cypress tests to ensure that the development server is running.

4. In the Cypress Test Runner, click on a test file to run the tests.

## Building for Production

To build the app for production, use the following command:

```bash
npm run build
```

This will create an optimized and minified version of your app in the `build` directory.

You can then deploy the contents of the `build` directory to your web server or any static hosting platform.

## Contributing

Contributions to this React app template are always welcome! If you have any ideas, bug fixes, or improvements, please follow these steps:

1. Fork the repository.

2. Create a new branch:

```bash
git checkout -b my-feature
```

3. Make your modifications and commit changes:

```bash
git commit -am 'Add my feature'
```

4. Push the branch:

```bash
git push origin my-feature
```

5.

Create a pull request.

Please ensure that your code follows the project's coding style and conventions.

## License

The Cookie Clicker Redux project is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute this project for personal and commercial purposes.

## Contact

If you have any questions, suggestions, or feedback, feel free to contact the project maintainer:

- Name: Hubert Paprocki
- Email: hubertpaprocki.dev@gmail.com

I hope you enjoy playing Cookie Clicker Redux! Happy clicking!
