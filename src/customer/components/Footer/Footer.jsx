import { Button, Grid, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <div className='text-center'>
            <Grid className='bg-black text-white text-center mt-10' container
                sx={{ bgcolor: "black", color: "white", py: 3 }}
            >
                <Grid item xs={12} sm={6} md={3}>
                    <div>
                        <Typography className='pb-6' variant='h6'>{" "}Company{" "}</Typography>
                    </div>
                    <div>
                        <Button className='pb-6' variant='h6' >{" "}About{" "}</Button>
                    </div>
                    <div>
                        <Button className='pb-6' variant='h6' >{" "}Blog{" "}</Button>
                    </div>
                    <div>
                        <Button className='pb-6' variant='h6' >{" "}Jobs{" "}</Button>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <div>
                        <Typography className='pb-6' variant='h6'>{" "}Solution{" "}</Typography>
                    </div>
                    <div>
                        <Button className='pb-6' variant='h6' >{" "}Marketing{" "}</Button>
                    </div>
                    <div>
                        <Button className='pb-6' variant='h6' >{" "}Analytics{" "}</Button>
                    </div>
                    <div>
                        <Button className='pb-6' variant='h6' >{" "}Commerce{" "}</Button>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <div>
                        <Typography className='pb-6' variant='h6'>{" "}Documentation{" "}</Typography>
                    </div>
                    <div>
                        <Button className='pb-6' variant='h6' >{" "}Guides{" "}</Button>
                    </div>
                    <div>
                        <Button className='pb-6' variant='h6' >{" "}API Status{" "}</Button>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <div>
                        <Typography className='pb-6' variant='h6'>{" "}Legal{" "}</Typography>
                    </div>
                    <div>
                        <Button className='pb-6' variant='h6' >{" "}Clain{" "}</Button>
                    </div>
                    <div>
                        <Button className='pb-6' variant='h6' >{" "}Privacy{" "}</Button>
                    </div>
                    <div>
                        <Button className='pb-6' variant='h6' >{" "}Terms{" "}</Button>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer
