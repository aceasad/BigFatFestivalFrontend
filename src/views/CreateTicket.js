import react, { useState } from 'react'
import { Container, Typography, Button, CssBaseline, TextField, Grid, Box } from '@mui/material';
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

const CreateTicket = () => {
    const [error, setError] = useState({})
    const [res, setRes] = useState("")
    const [qrCode, setQRcode] = useState("")
    const [pass, setPass] = useState("")
    const handleChange = (event) => {
        setPass(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // POST REQUEST TO API 
        const params = {
            "email": data.get('Email'),
            "name": data.get('Name'),
            "pass_type": data.get('Pass_Type')
        }
        axios.post("http://13.235.83.97:4242/api/userticket", params).then(res => {
            setRes(res.data.message)
            try {
                aws.config = config;
                const s3 = new aws.S3()
                console.log(res)
                var params = { Bucket: "big-fat-festival-ticket", Key: res.data.key };
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
                        Create Ticket Pass
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
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="Name"
                            label="Name"
                            type="text"
                            id="text"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="Pass_Type"
                            label="Pass Type"
                            type="text"
                            id="text"
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
                                <h1>{res}</h1>
                                <img alt="qrCode" src={qrCode}></img>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default CreateTicket;