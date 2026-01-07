# Changelog

All notable changes to this project will be documented in this file.

## [v1.7.1] - 2026-01-07

### Fixed
- **Deployment Lag**: Fixed an issue where data updates would not trigger a new site deployment, resulting in stale content. The sync workflow now explicitly triggers a rebuild.
- **Browser Caching**: Implemented aggressive cache-busting for `data.json` fetches (`?t=timestamp`) to ensure users always see the latest project list immediately.

## [v1.7.0] - 2026-01-07

### Added
- **Friendly Names**: Implemented automated extraction of "Friendly Names" (e.g., "Blessed Draw App") from each repository's README title.
- **Enhanced UI**: Updated project cards to display the friendly name prominently as the main title, with the repository name (`repo-name`) as a cleaner subtitle for technical reference.

### Changed
- **Data Sync**: Updated GitHub Actions workflow to parse README content during the daily sync, enriching `data.json` with human-readable titles.

## [v1.6.0] - 2026-01-06

### Added
- **GitHub Pages Fallback**: Implemented automatic fallback to GitHub Pages URL format for repositories without a configured homepage.
- **Improved View Counters**: Integrated standardized `hits.sh` badges across all project cards using the `:owner.github.io/:repo` format for consistency.
- **Enhanced Metadata**: Added `lastUpdated` timestamp and sync status UI to track data freshness.

### Changed
- **Platform Standardization**: Unified all internal asset links and deployment workflows to meet the latest v1.14.0+ compliance standards.
- **Sync Optimization**: Streamlined the data synchronization workflow for improved performance.

## [v1.5.0] - 2026-01-06 (Consolidated into v1.6.0)

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
