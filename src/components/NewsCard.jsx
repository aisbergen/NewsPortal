import React from 'react';
import { Box, Card, CardContent, Typography, CardMedia } from '@mui/material';
import './NewsCard.css';

function NewsCard({ data }) {
    return (
        <Box className="container">
            <Card>
                <CardMedia
                    height="200"
                    component="img"
                    image={data.urlToImage}
                    className="card-media"
                />
                <CardContent>
                    <Typography sx={{ fontWeight: "bold" }}>
                        {data.title}
                    </Typography>
                    <a href={data.url} target="_blank" rel="noopener noreferrer" className='btn'>
                        Read More
                    </a>
                </CardContent>
            </Card>
        </Box>
    );
}

export default NewsCard;
