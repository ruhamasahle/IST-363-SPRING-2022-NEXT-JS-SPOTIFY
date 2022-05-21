import Layout from "../../components/Layout"
import Heading from "../../components/Heading"
import Paragraph from "../../components/Paragraph"
import Row from "../../components/Row"
import Col from "../../components/Col"

import Link from 'next/link'

import Image from "next/image";
import { getAllArtistSlugs, getSingleArtistData } from '../../lib/api';


// WATERFALL



// 1.getStaticPaths
export async function getStaticPaths() {
    const paths = getAllArtistSlugs();
    return {
        paths,
        fallback: false
    }
}
// 2.getStaticProps
export async function getStaticProps({ params }) {
    const artistData = await getSingleArtistData(params.id)
    return {
        props: {
            artistData
            // error: undefined
        }
    }
}

// 3. use data
const singleArtistPage = ({ artistData }) => {
    const { title, featuredImage } = artistData;
    const { sourceUrl, altText, mediaDetails } = featuredImage.node;
    const { artistToAlbums } = artistInformation;
    return <Layout level='1'>
        <Image
            src={sourceUrl}
            alt={altText}
            width={mediaDetails.width}
            height={mediaDetails.height}
        />
        <Heading level='1'>{title}</Heading>
        {artistToAlbums &&
            <section>
                <Heading level="2">Albums</Heading>
                <Row>
                    {artistToAlbums.map((album) => {
                        const { title, featuredImage } = album;
                        const { sourceUrl, altText, mediaDetails } = featuredImage.node;
                        return <Col xs='6' sm='4' md='3'>
                            <Link href={`/albums/${slug}`}>
                                <a>
                                    <Image
                                        src={sourceUrl}
                                        alt={altText}
                                        width={mediaDetails.width}
                                        height={mediaDetails.height}
                                    />
                                </a>
                            </Link>
                            <Heading level='3'>{title}</Heading>
                        </Col>
                    })}
                </Row>
            </section>
        }
        <Paragraph>
            <Link href="/artists">
            <a>
                Back to Artists
            </a></Link>
        </Paragraph>
    </Layout>
}

export default singleArtistPage

