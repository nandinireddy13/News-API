const newsContainer = document.getElementById('news-container');

async function fetchBusinessNews() {
    const url = 'news.json';
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayNews(data.articles);
    } catch (error) {
        console.error('Error fetching news:', error);
        newsContainer.innerHTML = '<p>Failed to load news. Please try again later.</p>';
    }
}

function displayNews(articles) {
    newsContainer.innerHTML = ''; 
    if (articles.length === 0) {
        newsContainer.innerHTML = '<p>No news articles found.</p>';
        return;
    }

    articles.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.classList.add('article');
        articleElement.innerHTML = `
            <h3>${article.title}</h3>
            ${article.urlToImage ? `<img src="${article.urlToImage}" alt="${article.title}" style="max-width: 100%; height: auto;" />` : ''}
            <p>${article.description || 'No description available.'}</p>
            <a href="${article.url}" target="_blank">Read More</a>
        `;
        newsContainer.appendChild(articleElement);
    });
}

fetchBusinessNews();
