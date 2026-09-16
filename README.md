# Assignment 14 - Personal Portfolio Website

## Author

**Jordan Lerat**
Red River College Polytechnic
Full Stack Web Development Diploma

---

## Project Overview

This project is a responsive personal portfolio website built with Create React App and reusable components developed in previous assignments.

The portfolio highlights my school projects, technical skills, development resources, and preferred developer setup. The project also includes automated formatting, linting, testing, continuous integration, and a Dockerized production build.

---

## Technologies and Tools

- React
- TypeScript
- Create React App
- Storybook
- Styled Components
- Jest
- React Testing Library
- ESLint
- Prettier
- Husky
- GitHub Actions
- Docker
- Nginx

---

## Portfolio Sections

- Basic Information
- Featured Work
- Skills
- Resources
- Developer Setup

---

## Prerequisites

Install the following before running the project:

- Docker Desktop
- Node.js
- npm

---

## Run the Production Application with Docker

### 1. Build the Docker image

From the project root directory, run:

```bash
docker build -t lerat_jordan_coding_assignment14 .
```

### 2. Run the Docker container

```bash
docker run --name lerat_jordan_coding_assignment14 -p 5575:80 lerat_jordan_coding_assignment14
```

### 3. Open the application

Open a browser and navigate to:

```text
http://127.0.0.1:5575
```

The Docker container serves the production React build through Nginx.

---

## Required Docker Configuration

Container name:

```text
lerat_jordan_coding_assignment14
```

Working directory:

```text
lerat_jordan_final_site
```

Application address:

```text
http://127.0.0.1:5575
```

---

## Run the Application Locally

Install dependencies:

```bash
npm install
```

Start the Create React App development server:

```bash
npm start
```

Open:

```text
http://localhost:3000
```

---

## Run Storybook

Start Storybook:

```bash
npm run storybook
```

Open:

```text
http://localhost:6006
```

Storybook displays the reusable components developed in the previous assignments.

---

## Code Quality and Testing

Check formatting:

```bash
npm run format:check
```

Automatically format files:

```bash
npm run format
```

Run ESLint:

```bash
npm run lint
```

Run tests once:

```bash
npm test -- --watchAll=false
```

Create a production build:

```bash
npm run build
```

Husky runs formatting, linting, and unit tests before commits. GitHub Actions runs the same checks after pushes and pull requests.

---

## Dockerfile Summary

The Dockerfile uses a multi-stage production build:

1. Uses Node.js to install dependencies.
2. Creates the required `/lerat_jordan_final_site` working directory.
3. Generates an optimized Create React App production build.
4. Copies the build files into an Nginx container.
5. Serves the portfolio through port 80 inside the container.
6. Maps the application to `127.0.0.1:5575`.

---

## Repository Structure

```text
coding-assignment-14-portfolio/
│
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── .husky/
│   └── pre-commit
│
├── .storybook/
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── data/
│   ├── sections/
│   ├── App.js
│   └── App.test.js
│
├── Dockerfile
├── README.md
├── package.json
└── package-lock.json
```
