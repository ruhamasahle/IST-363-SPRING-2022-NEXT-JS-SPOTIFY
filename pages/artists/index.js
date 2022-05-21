import Layout from "../../components/Layout"
import Heading from "../../components/Heading"
import Col from "../../components/Col"
import Row from "../../components/Row"

import Link from "next/link"

import { getArtists } from '../../lib/api'

import Image from "next/image"
import Paragraph from "../../components/Paragraph"

export async function getStaticProps() {
    const artists = await getArtists();
    return {
        props: {
            artists
        }
    }
}
const ArtistsLandingPage = ({ artists }) => {
    console.log(artists)
    return <Layout>
        <Heading level='1'>Artists</Heading>
        <Row>
            {artists.map((artist, index) => {
                const { title, slug, featuredImage } = artist.node;
                const { sourceUrl, altText, mediaDetails } = featuredImage.node
                return <Col key={index} xs='6' sm='6'>
                    <Image
                        src={sourceUrl}
                        alt={altText}
                        height={mediaDetails.height}
                        width={mediaDetails.width}
                    />
                    <Heading level='3'>
                        {artist.title}
                    </Heading>
                    <Paragraph>
                        <Link href={`/artists/${slug}`}>
                            <a>
                                Read More
                            </a>
                        </Link>
                    </Paragraph>
                </Col>
            })}
        </Row>
    </Layout>
}

export default ArtistsLandingPage;