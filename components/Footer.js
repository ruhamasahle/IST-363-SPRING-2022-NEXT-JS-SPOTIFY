import Col from "./Col";
import Container from "./Container";
import Row from "./Row";
import styles from './footer.module.scss'
import Logo from "./Logo";
import Nav from "./Nav";

const Footer = () => {
    return <footer className={styles.footer}>
        <Container>
            <Row alignItems="center">
                <Col xs="6" sm="6">
                    <Logo color="white"/>
                </Col>
                <Col xs="12" sm="9">
                    <Nav/>
                </Col>
            </Row>
            <Row>
                <Col>
                    Copyright 2022 Spotify, Inc.
                </Col>
            </Row>
            
        </Container>
    </footer>
}

export default Footer;