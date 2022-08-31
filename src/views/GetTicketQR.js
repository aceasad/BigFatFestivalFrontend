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
    const [error, setError] = useState("")
    const [qrCode, setQRcode] = useState("")
    const [show, setShow] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // POST REQUEST TO API 
        axios.get("http://13.235.83.97:4242/api/userticket", { params: { email: data.get('Email') } }).then(res => {
            console.log(res.data.message)
            try {
                aws.config = config;
                const s3 = new aws.S3()
                console.log(res)
                var params = { Bucket: "big-fat-festival-ticket", Key: res.data.qr_key };
                var promise = s3.getSignedUrlPromise('getObject', params);
                promise.then((url) => {
                    setQRcode(url)
                    setShow(true)
                    console.log(url)
                }, (err) => {
                    console.log(err)
                    setError(res.data.message)

                });

            } catch (err) {
                console.warn(err);
                setError(res.data.message)
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
                    <h1 style={{ fontFamily: 'BebasNeue' }}>
                        Get Ticket Pass QR
                    </h1>
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
                        <h2 style={{ textAlign: "center" }}>{error}</h2>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Get QR Ticket
                        </Button>
                        <Grid container>
                            <Grid item>
                                {show ? (<img alt="qrCode" src={qrCode}></img>) : (<></>)}
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default GetTicketQR;