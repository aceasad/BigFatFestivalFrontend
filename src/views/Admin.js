import react, { useState } from 'react'
import { Container, Stack, Typography, Button, CssBaseline, Link, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import aws from 'aws-sdk';
import axios from 'axios'

const theme = createTheme();
const Admin = () => {
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
                        Big Fat Festival Admin Panel
                    </Typography>
                    <Stack sx={{ mt: 1 }}>
                        <a href='/createTicket'>
                            Create A New Ticket
                        </a>

                        <a href='/updateTicket'>
                            Update Ticket to Used
                        </a>

                        <a href='/deleteTicket'>
                            Delete a Ticket

                        </a>

                        <a href="getTicketQr">
                            Get QR Code for a Ticket
                        </a>


                    </Stack>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default Admin;