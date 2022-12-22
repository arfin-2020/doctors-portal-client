import Container from "@mui/material/Container";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import React from 'react';
import Footer from '../Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
const FQA = () => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    return (
        <>
            <Navigation />
            <h1 className="text-3xl">Comming Soon</h1>
            <Container className="mt-5 " >
            <Grid 
            container 
            rowSpacing={2} 
            columnSpacing={{ xs: 1, sm: 2, md: 3 }} 
            sx={{
              display: 'flex',
              alignItems: 'center',
              

            }}>
                <Grid item xs={12} sm={12} md={4}>
                <Item><h1>Comming Soon</h1></Item>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <Item><h1>Comming Soon</h1></Item>
                </Grid>

            </Grid>
            </Container>
            <Footer />
        </>
    );
};

export default FQA;