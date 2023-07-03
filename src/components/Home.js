import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  Pagination,
} from '@mui/material';
import { Link } from 'react-router-dom';

function Home({ blogPosts }) {
  const postsPerPage = 3;
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const truncate = (str, length) => {
    return str.length > length ? str.substring(0, length) + '...' : str;
  };

  // Reverse the entire list before paginating
  const reversedPosts = [...blogPosts].reverse();

  const paginatedPosts = reversedPosts
    .slice((page - 1) * postsPerPage, page * postsPerPage);

  return (
    <Box>
      {paginatedPosts.map((post) => (
        <Link
          to={`/blog/${post.title}`}
          key={post.title}
          style={{ textDecoration: 'none' }}
        >
          <Card sx={{ mb: 4 }}>
            <CardMedia
              component="img"
              height="400"
              image={post.image}
              alt={`${post.title} image`}
            />
            <CardHeader
              title={post.title}
              subheader={`By ${post.author} on ${post.date}`}
            />
            <CardContent>
              <Typography variant="body1" sx={{ mb: 2 }}>
                {truncate(post.content, 56)}
              </Typography>
            </CardContent>
          </Card>
        </Link>
      ))}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
        <Pagination count={Math.ceil(blogPosts.length / postsPerPage)} page={page} onChange={handleChange} />
      </Box>
    </Box>
  );
}

export default Home;
