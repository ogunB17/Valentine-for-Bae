# Valentine's Proposal App 💝

A beautiful multi-page React application featuring three different Valentine's Day proposal designs.

## Features

- 🏠 Home page with navigation to all three designs
- 🧸 Whimsical Bear Proposal - Cute teddy bear with floating hearts
- 🐶 Puppy Eyes Plea - Adorable puppy with emotional appeal
- 💝 Reasons to Say Yes - Interactive checklist of reasons

## Tech Stack

- React 18
- React Router v6 for navigation
- Tailwind CSS for styling
- Vite for build tooling
- Google Fonts (Plus Jakarta Sans, Caveat)
- Material Symbols icons

## Getting Started

### Prerequisites

- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd valentine-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit: `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Project Structure

```
valentine-app/
├── src/
│   ├── pages/
│   │   ├── Home.jsx              # Landing page with navigation
│   │   ├── WhimsicalProposal.jsx # Teddy bear design
│   │   ├── PuppyEyesPlea.jsx     # Puppy design
│   │   └── ReasonsToSayYes.jsx   # Checklist design
│   ├── App.jsx                   # Main app with routing
│   ├── main.jsx                  # Entry point
│   └── index.css                 # Global styles
├── index.html
├── tailwind.config.js
└── package.json
```

## Routes

- `/` - Home page
- `/whimsical` - Whimsical Bear Proposal
- `/puppy` - Puppy Eyes Plea
- `/reasons` - Reasons to Say Yes

## Customization

### Changing Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  "primary": "#f42547", // Change to your preferred color
  "background-light": "#f8f5f6",
  "background-dark": "#221013",
}
```

### Adding More Pages

1. Create a new component in `src/pages/`
2. Add a route in `src/App.jsx`
3. Add a navigation link in `src/pages/Home.jsx`

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready to deploy to any static hosting service.

## Deployment Options

- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## License

Feel free to use this for your Valentine's Day proposals! ❤️

## Credits

Design inspiration from Google Stitch
Built with React and Tailwind CSS
