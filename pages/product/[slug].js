import {
    Button,
    Card,
    Grid,
    Link,
    List,
    ListItem,
    Typography
} from '@material-ui/core';
import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import NextLink from 'next/link';
import React from 'react';
import Layout from '../../components/Layout';
import data from '../../utils/data';
import useStyle from '../../utils/styles';
export default function ProductScreen() {
  const classes = useStyle();
  const router = useRouter();
  const { slug } = router.query;
  const product = data.products.find((a) => a.slug);
  if (!product) {
    return <div>Sorry, Nothing Found</div>;
  }
  return (
    <Layout title={product.name} description={product.description}>
      <div className={classes.section}>
        <NextLink href="/" passHref>
          <Link>
            <Typography>Back to Products Page</Typography>
          </Link>
        </NextLink>
      </div>
      <Grid container spacing={1}>
        <Grid items md={6} xs={12}>
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            layout="responsive"
          ></Image>
        </Grid>
        <Grid items md={3} xs={12}>
          <List>
          <ListItem>
              <Typography component="h1">{product.name} </Typography>
            </ListItem>
            <ListItem>
              <Typography> Category: {product.category} </Typography>
            </ListItem>
            <ListItem>
              <Typography> Brand: {product.brand} </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                Ratings: {product.rating} Stars ({product.numReviews} Reviews)
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>Description: {product.description}</Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid items md={3} xs={12}>
          <Card>
            <List>
                <ListItem>
                <Grid container >
                <Grid items xs={6}>
                  <Typography>Price:</Typography>
                </Grid>
                <Grid items xs={6}>
                  <Typography>${product.price}</Typography>
                </Grid>
                </Grid>
                </ListItem>
                <ListItem>
                <Grid container >
                <Grid items xs={6}>
                  <Typography>Status:</Typography>
                </Grid>
                <Grid items xs={6}>
                  <Typography>{product.countInStock>0? 'In Stock' : 'Not Available'}</Typography>
                </Grid>
                </Grid>
                </ListItem>
                <ListItem>
                    <Button fullWidth variant="contained" color="primary">Add to Cart</Button>
                </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}
