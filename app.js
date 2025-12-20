document.addEventListener('DOMContentLoaded', () => {
    const appGrid = document.getElementById('app-grid');
    const loader = document.getElementById('loader');
    const emptyState = document.getElementById('empty-state');

    async function fetchApps() {
        try {
            const response = await fetch('data.json');
            if (!response.ok) throw new Error('Failed to fetch data');
            const data = await response.json();
            
            // The data structure from GraphQL will be processed by the GitHub Action
            // but we expect an array of repository objects.
            renderApps(data);
        } catch (error) {
            console.error('Error loading apps:', error);
            loader.classList.add('hidden');
            emptyState.classList.remove('hidden');
            emptyState.innerHTML = `<p>Error loading projects. Please try again later.</p>`;
        }
    }

    function renderApps(apps) {
        loader.classList.add('hidden');
        
        if (!apps || apps.length === 0) {
            emptyState.classList.remove('hidden');
            return;
        }

        appGrid.innerHTML = '';
        apps.forEach((app, index) => {
            const card = createAppCard(app, index);
            appGrid.appendChild(card);
        });
    }

    function createAppCard(app, index) {
        const div = document.createElement('div');
        div.className = 'app-card';
        div.style.animationDelay = `${index * 0.1}s`;
        
        const langColor = app.primaryLanguage?.color || '#8b949e';
        const langName = app.primaryLanguage?.name || 'Unknown';
        
        div.innerHTML = `
            <div class="card-header">
                <h3 class="card-title">
                    <span>${app.name}</span>
                </h3>
                <p class="card-description">${app.description || 'No description provided.'}</p>
                <div class="card-meta">
                    <span class="lang-badge">
                        <span class="lang-dot" style="background-color: ${langColor}"></span>
                        ${langName}
                    </span>
                    <span class="star-count">
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" fill="currentColor"><path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"></path></svg>
                        ${app.stargazerCount}
                    </span>
                </div>
            </div>
            <div class="card-actions">
                ${app.homepageUrl ? `<a href="${app.homepageUrl}" target="_blank" class="btn btn-primary">Live Demo</a>` : ''}
                <a href="${app.url}" target="_blank" class="btn btn-secondary">Source Code</a>
            </div>
        `;

        // Make the whole card clickable to the live demo if it exists, otherwise the repo
        div.addEventListener('click', (e) => {
            if (e.target.tagName !== 'A') {
                const targetUrl = app.homepageUrl || app.url;
                window.open(targetUrl, '_blank');
            }
        });

        return div;
    }

    fetchApps();
});
