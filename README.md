# Featured Web Apps (v1.0.1) 🕸️

![Version](https://img.shields.io/badge/version-v1.0.1-6366f1?style=flat-square)
![Status](https://img.shields.io/badge/status-active-success?style=flat-square)

A premium, automated showcase of kuancheen's curated web applications from GitHub Star Lists.

## Features ✨

- **Automated Updates**: Keeps in sync with the [GitHub Stars List](https://github.com/stars/kuancheen/lists/web-apps) automatically via GitHub Actions.
- **Premium Design**: Dark-themed, glassmorphic UI with smooth animations and responsive layout.
- **Fast & Lightweight**: Built with vanilla HTML, CSS, and JS for maximum performance.
- **Direct Access**: Quick links to live demos and source code for each featured app.

## Tech Stack 🛠️

- **Frontend**: HTML5, CSS3 (Custom Properties, Grid, Backdrop-filter), ES6+ JavaScript.
- **Data**: GitHub GraphQL API.
- **Automation**: GitHub Actions (Daily sync & Auto-deploy).
- **Hosting**: GitHub Pages.

## How it Works ⚙️

1. **GitHub Action**: A scheduled workflow runs daily, querying the GitHub GraphQL API for the latest repositories in the `web-apps` star list.
2. **Data Sync**: The result is saved to `data.json` and committed to the repository.
3. **Rendering**: The web page fetches `data.json` client-side and dynamically builds the project cards.

## Development 🚀

To run locally:
1. Clone the repository.
2. Open `index.html` in your browser.

---
Built with ❤️ by [kuancheen](https://github.com/kuancheen)
