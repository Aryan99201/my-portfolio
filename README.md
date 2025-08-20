# Personal Portfolio Website

A modern, responsive personal portfolio website built with React.js, featuring smooth animations and a professional design.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Navigation**: Smooth scrolling between sections
- **Skills Showcase**: Animated progress bars showing technical proficiency
- **Project Portfolio**: Display of featured projects with live demos and GitHub links
- **Contact Form**: Professional contact form with validation (UI only)
- **Social Links**: Links to professional social media profiles

## Technologies Used

- React.js 18
- CSS3 with Flexbox and Grid
- HTML5
- Google Fonts (Inter)
- Responsive Web Design
- CSS Animations and Transitions

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine:
- Node.js (version 14.0 or higher)
- npm (usually comes with Node.js)

### Installation

1. **Create the project directory:**
   ```bash
   mkdir my-portfolio
   cd my-portfolio
   ```

2. **Initialize the React project:**
   ```bash
   npx create-react-app .
   ```

3. **Replace the default files with the portfolio files:**
   - Copy all the provided files into their respective directories
   - Make sure to maintain the folder structure as specified

4. **Install dependencies:**
   ```bash
   npm install
   ```

### Running the Website

1. **Start the development server:**
   ```bash
   npm start
   ```

2. **Open your browser and navigate to:**
   ```
   http://localhost:3000
   ```

The website will automatically open in your default browser and will hot-reload when you make changes.

## Customization

### Personal Information

1. **Update Hero Section (src/components/Hero.js):**
   - Change "Aryan" to your actual name
   - Update the professional description
   - Replace the profile photo URL with your own image

2. **Update Skills (src/components/Skills.js):**
   - Modify the skills array with your actual technical skills
   - Add or remove skill categories as needed

3. **Update Projects (src/components/Projects.js):**
   - Replace the projects with your projects
   - Update project descriptions, technologies, and links
   - Add your GitHub repository and live demo URLs

4. **Update Contact Information (src/components/Contact.js):**
   - Change email, phone, and location to your details
   - Update social media links to your profiles

### Styling

- Main styles are in `src/styles/App.css`
- Colors can be customized by changing the CSS variables and gradient values
- The design uses a purple gradient theme that can be easily modified

### Adding Functionality

The contact form is currently for display purposes only. To make it functional:

1. Set up a backend service (Node.js, PHP, etc.)
2. Or use a service like Formspree, Netlify Forms, or EmailJS
3. Update the form submission handler in `src/components/Contact.js`

## Building for Production

To create a production build:

```bash
npm run build
```

This creates a `build` folder with optimized files ready for deployment.

## Deployment

### Netlify (Recommended)
1. Build the project: `npm run build`
2. Drag and drop the `build` folder to Netlify
3. Or connect your GitHub repository for continuous deployment

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d build"`
3. Run: `npm run deploy`

## Project Structure

```
my-portfolio/
├── public/
│   ├── index.html          # HTML template
│   └── favicon.ico         # Website icon
├── src/
│   ├── components/         # React components
│   │   ├── Header.js       # Navigation header
│   │   ├── Hero.js         # Hero/intro section
│   │   ├── Skills.js       # Skills showcase
│   │   ├── Projects.js     # Projects portfolio
│   │   └── Contact.js      # Contact form & info
│   ├── styles/
│   │   └── App.css         # All styles
│   ├── App.js              # Main app component
│   └── index.js            # React entry point
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

## Contributing

This is a personal portfolio template. Feel free to fork it and customize it for your own use!

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Happy coding!** 🚀
