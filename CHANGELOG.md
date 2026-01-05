# Changelog

All notable changes to this project will be documented in this file.

## [v1.5.0] - 2026-01-06

### Changed
- **Platform-Wide Standardization**: Standardized all `hits.sh` view counter URLs to the `:owner.github.io/:repo` format. This simplifies the data synchronization process and ensures long-term consistency as individual projects migrate to this standard.
- **Sync Optimization**: Reverted README extraction logic to keep the metadata sync fast and lightweight.

## [v1.4.0] - 2026-01-06

### Added
- **Precise View Counters**: The data synchronization process now extracts exact `hits.sh` URLs from each repository's README. This ensures that the view counts displayed on the showcase cards perfectly match the counts on the individual project pages, resolving issues where counts were split across different URL paths.

### Changed
- **Branding Sync**: Standardized the `hits.sh` fallback path to `github.com/owner/repo` for improved consistency across the ecosystem.

## [v1.3.0] - 2026-01-06

### Added
- **Repository-Level View Counters**: Added `hits.sh` badges to each project card, providing live insight into the popularity and view counts of each featured application. This follows the same premium styling as the main application's view counter.

## [v1.2.0] - 2026-01-06

### Added
- **GitHub Pages Fallback**: Implemented automatic fallback to GitHub Pages URL format (`https://owner.github.io/repo`) in `app.js` for repositories where no homepage URL is explicitly configured in GitHub settings. This ensures every project card has a functional "Live Demo" button.

### Changed
- **Version Bump**: Bumped project version to `v1.2.0` across all documentation and asset links.

## [v1.1.2] - 2026-01-06

### Fixed
- **Version Mismatch**: Fixed an issue where `app.js` was loaded with an old version parameter (`v1.0.1`), causing it to fail when reading the new data structure.
- **Cache Busting**: Ensured all asset links are correctly versioned for consistent updates.

## [v1.1.1] - 2026-01-06

### Fixed
- **JSON Corruption**: Resolved git conflict markers in `data.json` that caused the "Error loading projects" crash.

## [v1.1.0] - 2026-01-06

### Added
- **Sync Metadata**: Added `lastUpdated` timestamp to `data.json` to track sync freshnes.
- **Sync Status Display**: Added "Last synced" human-readable time in the footer with a precise tooltip.
- **Data Structure**: Enhanced `data.json` with a metadata wrapper for better maintainability.

### Changed
- **Copyright Year**: Updated copyright notices to 2025-2026.

## [v1.0.1] - 2025-12-21

### Fixed
- Fixed typo in `.github/workflows/deploy.yml` that caused deployment failures.
- Added standard `line-clamp` property to `style.css` for better browser compatibility.
- Fixed version strings and added cache-busting to static assets.

## [1.0.0] - 2025-12-20

### Added
- Initial release of the Featured Web Apps page.
- Dark-themed premium UI with glassmorphism.
- GitHub Action for automated data sync from GitHub Star Lists.
- GitHub Pages deployment workflow.
- Responsive grid layout for project cards.
- Live demo and source code links for repositories.
