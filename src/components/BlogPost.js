import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  CardMedia,
  Container,
} from "@mui/material";

function BlogPost({ blogPosts }) {
  const { title } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const foundPost = blogPosts.find((p) => p.title === title);
    setPost(foundPost);
  }, [title, blogPosts]);

  if (!post) {
    return <div>Loading...</div>;
  }

  const { author, date, content, image } = post;
  const formattedContent = content.split("\n").map((paragraph, index) => (
    <Typography
      key={index}
      variant="body1"
      sx={{
        mb: 2,
        textAlign: "justify",
        textJustify: "inter-word",
        lineHeight: 1.6,
        marginTop: (theme) => theme.spacing(1),
        marginBottom: (theme) => theme.spacing(1),
      }}
    >
      {paragraph}
    </Typography>
  ));

  return (
    <Container maxWidth="md">
    <Card sx={{ mb: 4, display: "flex", flexDirection: "column" }}>
      {title && (
        <CardHeader title={title} subheader={`By ${author} on ${date}`} />
      )}
      {image && (
        <CardMedia
          component="img"
          alt={title}
          height="400px"
          width="100%"
          image={image}
        />
      )}
      {formattedContent && (
        <CardContent sx={{ flexGrow: 1 }}>{formattedContent}</CardContent>
      )}
    </Card>
    </Container>
  );
}

export default BlogPost;
