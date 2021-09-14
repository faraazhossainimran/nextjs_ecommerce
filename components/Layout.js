import {
  AppBar,
  Container,
  Link,
  Toolbar,
  Typography
} from '@material-ui/core';
import Head from 'next/head';
import NextLink from 'next/link';
import React from 'react';
import useStyles from '../utils/styles';

export default function Layout({ title, description, children }) {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>{title ? `${title} -Ezintle.com` : 'Ezintle.com'} </title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <NextLink href="/" passHref>
            <Link>
            <Typography className={classes.brand}>Ezintle.com</Typography>
            </Link>
          </NextLink>
          <div className={classes.grow}></div>
          <NextLink href="/cart" passHref>
            <Link>Cart</Link>
          </NextLink>
          <NextLink href="/login" passHref>
            <Link>login</Link>
          </NextLink>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>All Right Reserved. @Ecommerce</Typography>
      </footer>
    </div>
  );
}
