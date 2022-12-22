import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
import Footer from '../Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const Offers = () => {
  
    return (
        <Box>
            <Navigation />
            <h1 className='text-3xl font-bold mt-5' style={{ color: "#1976d2" }}>Special offers</h1>
            <p className='text-2xl'>Credibly innovate granular internal or "organic" sources whereas high standards <br />in web-readiness. Energistically scale future-proof core competencies vis-a-vis impactful experiences.</p>
            <div className='m-5'>
            <Grid item xs={2} md={8} container style={{marginLeft:'350px'}}  columns={{ xs: 4, sm: 8, md: 12 }}>                                 
                <Grid item xs={6} md={4}>
                            <a href="/signup" className="mr-5 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                <p className="font-bold text-gray-700 dark:text-gray-400 text-1xl">Basic</p>
                                <h5 className="mb-2 text-5xl font-bold tracking-tight text-gray-900 dark:text-white text-blue-600/100">$150</h5>
                                <p className="font-bold text-2xl text-gray-700 dark:text-gray-400">Regular medical treatments</p>
                                <p className="font-bold text-1xl  m-2 rounded-md p-2 bg-orange-100">Routine Check Up 20$</p>
                                <p className="font-bold text-1xl  m-2 rounded-md p-2 bg-yellow-600">100 Tests & Treatments 80$</p>
                                <p className="font-bold text-1xl  m-2 rounded-md p-2 bg-lime-500">Regular Health Checkups 40$</p>
                            </a> 
                </Grid>
                <Grid item xs={6} md={4}>
                    <a href="/signup" className="mr-5 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <p className="font-bold text-gray-700 dark:text-gray-400 text-1xl">Advance</p>
                        <h5 className="mb-2 text-5xl font-bold tracking-tight text-gray-900 dark:text-white text-blue-600/100">$650</h5>
                        <p className="font-bold text-2xl text-gray-700 dark:text-gray-400">Regular medical treatments</p>
                        <p className="font-bold text-1xl  m-2 rounded-md p-2 bg-orange-100">Routine Check Up 20$</p>
                        <p className="font-bold text-1xl  m-2 rounded-md p-2 bg-yellow-600">100 Tests & Treatments 80$</p>
                        <p className="font-bold text-1xl  m-2 rounded-md p-2 bg-lime-500">Regular Health Checkups 40$</p>
                        <p className="font-bold text-1xl  m-2 rounded-md p-2 bg-lime-500">24h Assisance 120$</p>
                        <p className="font-bold text-1xl  m-2 rounded-md p-2 bg-lime-500">Home Visits 400$</p>
                        <p className="font-bold text-1xl  m-2 rounded-md p-2 bg-lime-500">Urgent calls 400$</p>
                    </a>
                </Grid>
                <Grid item xs={6} md={4}>
                    <a href="/signup" className="mr-5 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <p className="font-bold text-gray-700 dark:text-gray-400 text-1xl">Classic</p>
                        <h5 className="mb-2 text-5xl font-bold tracking-tight text-gray-900 dark:text-white text-blue-600/100">$250</h5>
                        <p className="font-bold text-2xl text-gray-700 dark:text-gray-400">Regular medical treatments</p>
                        <p className="font-bold text-1xl  m-2 rounded-md p-2 bg-orange-100">Routine Check Up 20$</p>
                        <p className="font-bold text-1xl  m-2 rounded-md p-2 bg-yellow-600">100 Tests & Treatments 80$</p>
                        <p className="font-bold text-1xl  m-2 rounded-md p-2 bg-lime-500">Regular Health Checkups 40$</p>
                        <p className="font-bold text-1xl  m-2 rounded-md p-2 bg-lime-500">24h Assisance 120$</p>
                        <p className="font-bold text-1xl  m-2 rounded-md p-2 bg-lime-500">Home Visits 400$</p>
                    </a>
                </Grid>
            </Grid>
            </div>
            <Footer />
        </Box>


    );
};

export default Offers;