import React, {useState} from 'react';
import {
    Box,
    Card,
    CardActions,
    CardContent,
    Collapse,
    Button,
    Typography,
    Rating,
    useTheme,
    useMediaQuery,
  } from "@mui/material";
import Header from "components/Header";
import { useGetProductsQuery } from "state/api";
import Product from './product';


const Products = () => {
    const { data, isLoading } = useGetProductsQuery();
    const isNonMobile = useMediaQuery("(min-width: 1000px)");
    
    return (
        <Box m="1.5rem 2.5rem">
            <Header title="Products" subtitle="See your list of products"/>
            { data || !isLoading
                ? (
                <Box
                    mt="20px"
                    display="grid"
                    gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                    justifyContent="space-between"
                    rowGap="20px"
                    columnGap="1.33%"
                    sx={{
                        "& > div":
                            { gridColumn: isNonMobile ? undefined : "span 4" }
                    }}
                >
                    {data.map(({
                        _id,
                        name,
                        price,
                        description,
                        category,
                        rating,
                        supply,
                        stat,
                    }) => (
                        <Product
                            key={_id}
                            _id={_id}
                            name={name}
                            price={price}
                            description={description}
                            category={category}
                            rating={rating}
                            supply={supply}
                            stat={stat}
                        />
                    ))}
                </Box>
                ) : (
                <>Loading...</>
            )}
        </Box>
    );
};

export default Products;