import {
  Button,
  Card, Grid, LinearProgress, Link,
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
  const product = data.products.find((a) => a.slug === slug);
  if (!product) {
    return <div>
      <Grid container>
        <LinearProgress />
        </Grid>
        <Typography>loading...</Typography>
      </div>;
  }
  return (
    <Layout title={product.name} description={product.description}>
      <div className={classes.section}>
        <NextLink href="/" passHref>
          <Link>
            <Typography>Back to Home Page</Typography>
          </Link>
        </NextLink>
      </div>
      <Grid container spacing={1}>
        <Grid items md={5} xs={12}>
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            layout="responsive"
          ></Image>
        </Grid>
        <Grid items md={4} xs={12}>
          <List>
          <ListItem>
              <Typography component="h1" variant="h1">{product.name} </Typography>
            </ListItem>
            <ListItem>
              <Typography><strong>Category:</strong> {product.category} </Typography>
            </ListItem>
            <ListItem>
              <Typography> <strong>Brand:</strong>  {product.brand} </Typography>
            </ListItem>
            <ListItem>
              <Typography>
              <strong>Ratings:</strong>  {product.rating} Stars ({product.numReviews} Reviews)
              </Typography>
            </ListItem>
            <ListItem>
            <Typography> <strong>Warranty:</strong> {product.warranty>0? '3 Months' : 'Not Available'}</Typography>
            </ListItem>
            <ListItem>
            <Typography variant='h6' component='h6'> Ask Question: </Typography>
            </ListItem>
            <ListItem>
            <Typography ><strong>{product.phoneNumber}</strong></Typography>
            </ListItem>
            {/* <ListItem>
              <Typography>Description: {product.description}</Typography>
            </ListItem> */}
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
                    <Button fullWidth variant="contained" color="secondary">WishList</Button>
                </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
      <Grid className={classes.description} items md={12} xs={12}>
          <Card>
            <List>
                <ListItem>
                <Grid container >
                <Grid items>
                <Typography component='h2' variant="h2">Detailed Description of {product.name}</Typography>
                {/* <Typography component='h2' variant="h2">{product.name}</Typography> */}
                <Typography>{product.description}</Typography>
                </Grid>
                </Grid>
                </ListItem>
            </List>
          </Card>
        </Grid>
    </Layout>
  );
}
