import React from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  CardMedia,
} from "@mui/material";

function BlogPost({ blogPosts }) {
  const { title } = useParams();
  const post = blogPosts.find((post) => post.title === title);

  if (!post) {
    return null;
  }

  const { author, date, content, image } = post;
  const formattedContent = content.split("\n").map((paragraph, index) => (
    <Typography key={index} variant="body1" sx={{ mb: 2 }}>
      {paragraph}
    </Typography>
  ));

  return (
    <Card sx={{ mb: 4 }}>
      <CardHeader title={title} subheader={`By ${author} on ${date}`} />
      <CardMedia
        component="img"
        alt={title}
        height="400px"
        width="100%"
        image={image}
      />
      <CardContent>{formattedContent}</CardContent>
    </Card>
  );
}

export default BlogPost;
