import react from 'react'
import { Container, Stack, Typography } from "@mui/material"
const Artist = () => {

    return (
        <Container style={{ flexDirection: 'column', justifyContent: 'center' }}>
            <Stack style={{ textAlign: "center" }} className="artist">
                <h2>ARTIST LINEUP</h2>
                <a href="https://instagram.com/nael440">INDENIAL</a>
                <a href="https://instagram.com/mustisphotos/">MUSTI</a>
                <a href="https://instagram.com/scamusic_">SCAM MUSIC</a>
                <a href="https://instagram.com/izzchughtaimusic">IZZ CHUGTAI</a>
                <a href="https://instagram.com/aleeboyondabeat">ALISTAIR ALVIN</a>
                <a href="https://instagram.com/marshallahmadd">MARSHALL AHMAD</a>
                <a href="https://instagram.com/alemamelghandour">ALEMAM EIGHANDAUR</a>
                <a href="https://instagram.com/hassanbaigmusicx">HASSAM BAIG</a>
                <a href="https://instagram.com/abdulhannanmusic">ABDUL HANNAN</a>

                <h2>DJ LINEUP</h2>
                <a href="https://www.instagram.com/mbm__music">MBM</a>
                <a href="https://www.instagram.com/fuzzynocturnal">FUZZY</a>
                <a href="https://www.instagram.com/v_i_v_i_d__">VIVID</a>
                <a href="https://www.instagram.com/moodroomcrew">HAIDAR UPPAL</a>
                <h5>-----------</h5>
                <div className="getqrcode">
                    <a href="/getTicketQr">
                        <p style={{ fontFamily: 'BebasNeue', color: "maroon" }}>Get your QR Code from here see you at the venue!</p>
                    </a>
                </div>
            </Stack>
        </Container>)
}

export default Artist;