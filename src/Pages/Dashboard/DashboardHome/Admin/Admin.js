import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const Admin = () => {
const [email, setEmail] = useState('');

const handleSubmit = (e) =>{
    e.preventDefault();
    // setEmail(e.)
    console.log(email)
}
    return (
        <div>
            <h1>Make an Admin</h1>
            <form onSubmit={handleSubmit}>
                <TextField 
                    label = 'Email' 
                    type = 'email'
                    variant='standard'
                    onBlur={(e)=>setEmail(e.target.value)}
                /> {""}
                <Button type="submit" variant='contained'>Make Admin</Button>
            </form>
        </div>
    );
};

export default Admin;