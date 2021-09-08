import { Link } from '@material-ui/core';
import { useRouter } from 'next/dist/client/router';
import NextLink from 'next/link';
import React from 'react';
import Layout from '../../components/Layout';
import data from '../../utils/data';
import useStyle from '../../utils/styles';
export default function ProductScreen() {
    const classes = useStyle();
    const router = useRouter ();
    const { slug } = router.query;
    const product = data.products.find((a) => a.slug);
    if (!product){
        return <div>Sorry, Nothing Found</div>;
    }
    return (
        <Layout title={product.name}>
            <div className={classes.section}>
                <NextLink href="/" passHref>
                    <Link>Back to Products Page</Link>
                </NextLink>
            </div>
        </Layout>
    )
}
