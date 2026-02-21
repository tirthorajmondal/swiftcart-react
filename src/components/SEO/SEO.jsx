import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, }) => {
    return (

        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content="swiftcart, swiftcart ecommerce, ecommerce, online shopping, trending shopping , online store, best buy" />
        </Helmet>
    );
};

export default SEO;