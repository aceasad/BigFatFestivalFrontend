import react, { useState } from 'react'
import { Avatar, Stack, Container, Typography, LockOutlinedIcon, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import aws from 'aws-sdk';
import axios from 'axios'

const theme = createTheme();


const config = {
    bucketName: "big-fat-festival-ticket",
    dirName: "qrTickets" /* optional */,
    region: "ap-south-1",
    accessKeyId: "AKIA6BBWZLUKWCXY4HEF",
    secretAccessKey: "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",
    s3Url: "https://big-fat-festival-ticket.s3.ap-south-1.amazonaws.com" /* optional */,
};

const DeleteTicket = () => {
    const [error, setError] = useState({})
    const [qrCode, setQRcode] = useState("")
    const [message, setMessage] = useState("")
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        // POST REQUEST TO API 
        axios.delete("http://13.235.83.97:4242/api/userticket", { params: { email: data.get('Email') } }).then(res => {
            setMessage(res.data.message)
        })
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Delete Ticket Pass
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="Email"
                            autoFocus
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Delete Ticket
                        </Button>
                        <Grid container>
                            <Grid item>
                                <h1>{message}</h1>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default DeleteTicket;