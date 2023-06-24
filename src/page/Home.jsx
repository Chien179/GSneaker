import { Container, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import product from '../data/shoes.json'
import nike from '../assets/nike.png'
import Product from '../component/product/Product'
import Cart from '../component/cart/Cart'
import './Home.css'

function Home() {
    const allProduct = product.shoes
    const cartDatas = JSON.parse(localStorage.getItem("cartDatas"))
    const [carts, setCarts] = useState(cartDatas?.length > 0 ? cartDatas : [])

    useEffect(() => {
        localStorage.setItem("cartDatas", JSON.stringify(carts))
    }, [carts])

    return (
        <Container maxWidth="md">
            <Stack
                direction="row"
                spacing={5}
                mt={10}
                px={5}
                height="580px">
                <Stack                    
                    px={4}
                    spacing={5}
                    className='card'>
                    <Stack alignItems="start" spacing={2} mt={2} sx={{
                        zIndex: '1',
                    }}>
                        <img src={nike}
                            alt='nike'
                            style={{ width: '60px' }} />
                        <Typography variant='h5'
                            sx={{
                                fontWeight: 'bold'
                            }}>
                            Our Products
                        </Typography>
                    </Stack>
                    <Stack
                        spacing={5}
                        className='scroll'
                        pb={5}>
                        {allProduct.map((data) =>
                            <Product key={data.id} data={data} carts={carts} setCarts={setCarts} />
                        )}
                    </Stack>
                </Stack>
                <Stack
                    pb={3}
                    px={4}
                    spacing={5}
                    className='card'>
                    <Stack alignItems="start" spacing={2} mt={2} sx={{
                        zIndex: '1',
                    }}
                    >
                        <img src={nike}
                            alt='nike'
                            style={{ width: '60px' }} />
                        <Stack
                            direction="row"
                            display="flex"
                            justifyContent='space-between'
                            width="100%">
                            <Typography variant='h5'
                                sx={{
                                    fontWeight: 'bold'
                                }}>
                                Your cart
                            </Typography>
                            <Typography variant='h5'
                                sx={{
                                    fontWeight: 'bold'
                                }}>
                                ${carts.reduce((sum, cart) => sum + cart.count * cart.price, 0).toFixed(2)}
                            </Typography>
                        </Stack>
                    </Stack>
                    <Stack className='scroll scroll-cart'>
                        {carts?.length > 0 ?
                            (carts?.map((data) =>
                                <Cart key={data.id} data={data} carts={carts} setCarts={setCarts} />
                            ))
                            : <Typography variant='body2'>
                                Your cart is empty.
                            </Typography>}
                    </Stack>
                </Stack>
            </Stack>
        </Container>
    )
}

export default Home