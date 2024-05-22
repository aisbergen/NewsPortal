import React, { useEffect, useState } from 'react';
import NewsCard from './NewsCard';
import { Grid, Container, TextField, Button } from '@mui/material';

function Home() {
    const [news, setNews] = useState([]);
    const [query, setQuery] = useState('Apple'); // default search query
    const [searchTerm, setSearchTerm] = useState('');

    const getNews = (query) => {
        fetch(`https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&apiKey=9ed4555f2426411ea2f8e1f44665bce4`)
            .then(res => res.json())
            .then(json => setNews(json.articles));
    };

    useEffect(() => {
        getNews(query);
    }, [query]);

    const handleSearch = () => {
        setQuery(searchTerm);
    };

    const filteredNews = news.filter(article => article.urlToImage);

    return (
        <Container>
            <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                <TextField
                    label="Search News"
                    variant="outlined"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ marginRight: '10px' }}
                />
                <Button variant="contained" color="primary" onClick={handleSearch}>
                    Search
                </Button>
            </div>
            <Grid container spacing={2}>
                {filteredNews.map((data, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <NewsCard data={data} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Home;
