# NGO Website Project

## Table of Contents
1. [Overview](#overview)
2. [Project Structure](#project-structure)
3. [Setup and Installation](#setup-and-installation)
4. [Components](#components)
5. [Pages](#pages)
6. [Styling](#styling)
7. [Data Management](#data-management)
8. [Development](#development)
9. [Building for Production](#building-for-production)
10. [Contributing](#contributing)

## Overview
This project is a comprehensive website for a Non-Governmental Organization (NGO) built using React and Vite. It showcases the organization's projects, facilitates donations, and provides information about the NGO's mission and team.

## Project Structure
```
ngo/
├── src/
│   ├── components/
│   │   ├── FAQ.jsx
│   │   ├── Footer.jsx
│   │   ├── Fundraising.jsx
│   │   ├── FundraisingStats.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Team.jsx
│   │   └── WorkWithUs.jsx
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Donate.jsx
│   │   ├── FAQsPage.jsx
│   │   ├── GetInvolve.jsx
│   │   ├── Home.jsx
│   │   ├── Project.jsx
│   │   └── ProjectDetail.jsx
│   ├── data/
│   │   └── FAQsAPI.json
│   ├── assets/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── public/
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js
```

## Setup and Installation

### Prerequisites
- Node.js (v14 or later recommended)
- npm (v6 or later)

### Steps
1. Clone the repository:
   ``` 
   git clone [(https://github.com/Rofiatmuritala/-Gocingo.git)]
   cd ngo-website
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open the provided localhost URL in your browser.

## Components
Located in `src/components/`:
- FAQ.jsx: Frequently Asked Questions 
- Footer.jsx: Website footer
- Fundraising.jsx: Displays Fundraising information
- FundraisingStats.jsx: Displays fundraising statistics
- Hero.jsx: Hero section for landing page
- Navbar.jsx: Navigation bar
- Team.jsx: Team members showcase
- WorkWithUs.jsx: Information on joining as a volunteer the NGO

## Pages
Located in `src/pages/`:
- About.jsx: About the NGO
- Contact.jsx: Contact information and form
- Donate.jsx: Donation page
- FAQsPage.jsx: FAQ page
- GetInvolve.jsx: Ways to get involved
- Home.jsx: Landing page
- Project.jsx: Projects overview
- ProjectDetail.jsx: Detailed view of a project

## Styling
- The project uses Tailwind CSS for styling
- Tailwind configuration is in `tailwind.config.js`
- Additional styles may be found in `src/index.css` and `src/App.css`

## Data Management
- Some data (e.g., FAQs) is stored in JSON format in the `src/data/` directory
- Consider implementing a CMS or backend API for dynamic data management in future iterations

## Development
To start the development server:
```
npm run dev
```
This will start the Vite development server with hot module replacement.

## Building for Production
To build the project for production:
```
npm run build
```
This will generate optimized assets in the `dist/` directory.

To preview the production build locally:
```
npm run preview
```

## Contributing
We welcome contributions to improve the website. Please follow these steps:
1. Fork the repository
2. Create a new branch (`git checkout -b README`)
3. Commit your changes (`git commit -m 'updating the readme'`)
4. Push to the branch (`git push origin README`)
5. Open a Pull Request

---
