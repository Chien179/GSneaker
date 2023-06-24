import React from 'react'
import { Button, Stack, Typography } from '@mui/material'
import check from '../../assets/check.png'
import './Product.css'

function Product({ data, carts, setCarts }) {
    const cartIds = carts?.map(cart => cart.id)

    const handleAddToCart = () => {
        setCarts((prev) => [...prev, {
            id: data.id,
            name: data.name,
            image: data.image,
            price: data.price,
            color: data.color,
            count: 1
        }])
    }

    return (
        <Stack alignItems="start" textAlign="start" spacing={2}>
            <img src={data.image}
                alt={data.name}
                style={{
                    backgroundColor: data.color,
                }}
                className='img-product' />
            <Typography variant='h6' sx={{
                fontWeight: 'bold'
            }}>
                {data.name}
            </Typography>

            <Typography variant='body2'
                sx={{
                    color: "#777777"
                }}
            >
                {data.description}
            </Typography>
            <Stack
                direction="row"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                width="100%">
                <Typography variant='h6' sx={{
                    fontWeight: 'bold'
                }}>
                    ${data.price}
                </Typography>
                {cartIds?.includes(data.id) ?
                    <div className='div-check'>
                        <img src={check} alt="checked" className='img-check' />
                    </div>
                    : <Button
                        className='button-add-to-cart'
                        onClick={handleAddToCart}
                    >
                        <Typography variant='body1' sx={{
                            fontWeight: 'bold'
                        }}>
                            ADD TO CART
                        </Typography>
                    </Button>
                }
            </Stack>
        </Stack>
    )
}

export default Product