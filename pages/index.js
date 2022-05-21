import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Button from '../components/button'
import Col from '../components/Col'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Layout from '../components/layout'
import Paragraph from '../components/Paragraph'
import Row from '../components/Row'
import TracksByGenre from '../components/tracksbygenre'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Spotify IST 363</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name='description' content='Summary of my Website' />
      </Head>
      <section>
        <Container>
          <Row>
            <Col sm='6' md='4' lg='3'> Col 1</Col>
            <Col sm='6' md='4' lg='3'> Col 2</Col>
            <Col sm='6' md='4' lg='3'> Col 3</Col>
            <Col sm='6' md='4' lg='3'> Col 4</Col>
          </Row>
        </Container>
      </section>
      <TracksByGenre />
    </Layout>
  )
}
