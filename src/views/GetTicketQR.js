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

const GetTicketQR = () => {
    const [error, setError] = useState({})
    const [qrCode, setQRcode] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // POST REQUEST TO API 
        axios.get("http://13.235.83.97:4242/api/userticket", { params: { email: data.get('Email') } }).then(res => {
            console.log(res.data)
            try {
                aws.config = config;
                const s3 = new aws.S3()
                console.log(res)
                var params = { Bucket: "big-fat-festival-ticket", Key: res.data.qr_key };
                var promise = s3.getSignedUrlPromise('getObject', params);
                promise.then((url) => {
                    setQRcode(url)
                    console.log(url)
                }, (err) => {
                    console.log(err)
                });

            } catch (err) {
                console.warn(err);
            }

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
                        Get Ticket Pass QR
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
                            Create Ticket
                        </Button>
                        <Grid container>
                            <Grid item>
                                <img alt="qrCode" src={qrCode}></img>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default GetTicketQR;