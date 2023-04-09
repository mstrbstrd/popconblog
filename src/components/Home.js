import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

function Home({ blogPosts }) {
  const truncate = (str, length) => {
    return str.length > length ? str.substring(0, length) + "..." : str;
  };

  return (
    <Box>
      {blogPosts.map((post) => (
        <Link
          to={`/blog/${post.title}`}
          key={post.title}
          style={{ textDecoration: "none" }}
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
    </Box>
  );
}

export default Home;
