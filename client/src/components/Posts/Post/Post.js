import React from 'react';
import { useSelector } from 'react-redux';
import { TextField, Button, Typography, Paper } from '@material-ui/core';

import useStyles from './styles';
const Post = () => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();
  console.log(posts);
  return <h2>FORM</h2>;
};

export default Post;
