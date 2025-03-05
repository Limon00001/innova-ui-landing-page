<div align="center">

![Author](https://img.shields.io/badge/Limon-5E0D73?style=flat&logo=autocad&logoColor=whitesmoke) ![Contributor](https://img.shields.io/badge/Contributor-000?style=flat&logo=c&logoColor=whitesmoke) ![React](https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=black) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) ![NPM](https://img.shields.io/badge/Npm-CC342D?style=flat&logo=npm&logoColor=white)
![GitHub](https://img.shields.io/badge/Github-000?style=flat&logo=github&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/-TailwindCss-38BDF8?style=flat&logo=tailwind-css&logoColor=white) ![Visual Studio Code](https://custom-icon-badges.demolab.com/badge/Visual%20Studio%20Code-0078d7.svg?logo=vsc&logoColor=white) ![GitHub Copilot](https://img.shields.io/badge/GitHub%20Copilot-000?logo=githubcopilot&logoColor=fff) ![Google Chrome](https://img.shields.io/badge/Google%20Chrome-4285F4?logo=GoogleChrome&logoColor=white) ![Vercel](https://img.shields.io/badge/Vercel-%23000000.svg?logo=vercel&logoColor=white) ![Read the Docs](https://img.shields.io/badge/Read%20the%20Docs-8CA1AF?logo=readthedocs&logoColor=fff) ![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff)

</div>

# Project Documentation

## Project Description

A modern React-based landing page featuring various interactive components and responsive design principles, including accordions, video playback controls, and responsive navigation. The project serves as both a practical implementation and a learning resource for advanced React concepts.

## Key Features

- **Interactive Navigation System:** Provides a seamless and responsive user experience across various devices.

- **Component Architecture:** Implements a modular design that promotes reusability and scalability.

- **Accordion System:** Utilizes smooth CSS transitions and React state management for engaging interactions.

- **Video Player Integration:** Features custom video controls including play/pause functionality and progress tracking.

- **Viewport Visibility Tracking with Scroll:** Combines complex state management with responsive layouts for optimal content display.

- **Dark Mode:** Enables users to switch between light and dark modes for a personalized experience.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Tech Stack](#tech-stack)
- [Development Challenges and Solutions](#development-challenges-and-solutions)
- [Troubleshooting](#troubleshooting)
- [Lessons Learned](#lessons-learned)

## Installation

To set up the project locally, follow these steps:

```bash
# Clone the repository
git clone [repository-url]

# Navigate to the client directory
cd [project-folder]/client

# Install project dependencies
npm install

# Start the development server
npm run dev
```

## Usage

Customize the landing page by modifying component props and configuration files. The key features include:

- **Responsive Navigation**: Seamless user experience across devices.

- **Interactive Accordions**: Engaging and smoothly animated content sections.

- **Custom Video Player**: Integrated video player with tailored controls.

- **Dynamic Section**: Easily updatable content layout with reusable components.

- **Dark Mode**: Personalized experience for users.

## Tech Stack

- **React**: Version 19.x
- **React Router Dom**
- **React Icons**
- **Tailwind CSS**: Version 4.x
- **Vite**: Fast build tool for rapid development

## Development Challenges and Solutions

### 1. Accordion Implementation

- **Challenge:** Develop interactive accordions with smooth animations.

- **Solution:**

  - Utilized React's `useState` hook to manage accordion states.

  - Implemented CSS transitions (using transform and max-height properties) to ensure smooth animations.

### 2. Video Play/Pause Functionality

- **Challenge:** Efficiently manage video playback states and integrate custom controls.

- **Solution:**

  - Leveraged React refs to create and manage custom video controls.

  - Implemented state management to toggle play/pause functionality and added event listeners to track video progress.

### 3. Viewport Visibility Tracking

- **Challenge:** Handle complex state management while maintaining a responsive layout.

- **Solution:**

  - Applied responsive design patterns using CSS Grid and Flexbox.

  - Structured reusable components to enhance maintainability and scalability.

## Troubleshooting

### Common Issues:

1. Video Playback Issues:

   - Verify browser compatibility and ensure that the video format is supported.

2. Accordion Animation Glitches:

   - Clear your browser cache.
   - Review CSS transition properties for any discrepancies.

## Lessons Learned

Throughout the development process, several key insights were gained:

- **Component Architecture**: Improved understanding of effective state management, component composition, and performance optimization.

- **Accordion Implementation**: Reinforced best practices for CSS transitions, React state management, and accessibility.

- **Video Player Controls**: Enhanced knowledge of browser API integration and custom control implementation.

- **Responsive Design**: Deepened understanding of viewport visibility tracking and responsive layouts.

## Author

[![Github][github-shield]][github-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

[github-shield]: https://img.shields.io/badge/Github-000?style=flat&logo=github&logoColor=white
[github-url]: https://github.com/Limon00001
[linkedin-shield]: https://custom-icon-badges.demolab.com/badge/LinkedIn-0A66C2?logo=linkedin-white&logoColor=fff
[linkedin-url]: https://www.linkedin.com/in/monayem-hossain-limon/
