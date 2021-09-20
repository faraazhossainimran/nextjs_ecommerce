import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid, Skeleton, Typography
} from '@material-ui/core';
import NextLink from 'next/link';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import data from '../utils/data';
export default function Home() {
  const [loading, setLoading] =useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <Layout>
      <div> 
        <div>
        {loading ? <Skeleton width={400} height={200} /> : <div>done</div> }
        </div>
          <h1>Category</h1>
          <Grid container spacing={3}>
          {data.categories.map((category) => (
            <Grid item md={3} key={category.name}>
              <Card>
                <NextLink href={`/category/${category.slug}`}>
                  <Typography component={'h5'} variant={'h5'}>{category.categoryName}</Typography>
                </NextLink>
              </Card>
            </Grid>
           ))}
          </Grid>
       
        <h1>Featured Products</h1>
        <Grid container spacing={3}>
          {data.products.map((product) => (
            <Grid item md={3} key={product.name}>
              <Card>
                <NextLink href={`/product/${product.slug}`} passHref>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={product.image}
                      title={product.name}
                    ></CardMedia>
                    <CardContent>
                      <Typography>{product.name}</Typography>
                    </CardContent>
                  </CardActionArea>
                </NextLink>
                <CardActions>
                  <Typography>${product.price}</Typography>
                  <Button variant="outlined" size="small" color="primary">
                    Add to cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
      <div>
        <h1>New Arival Products</h1>
        <Grid container spacing={3}>
          {data.products.map((product) => (
            <Grid item md={3} key={product.name}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={product.image}
                    title={product.name}
                  ></CardMedia>
                  <CardContent>
                    <Typography>{product.name}</Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Typography>${product.price}</Typography>
                  <Button size="small" color="secondary">
                    Add to cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
     
      </div>
    </Layout>
  );
}
