import { getAlbums, getAllAlbumSlugs, getSingleAlbumData } from "../../lib/api"
import Layout from "../../components/Layout"
import Heading from "../../components/Heading"

import Image from "next/image"
import Link from "next/link"

// 1
export async function getStaticPaths() {
    const paths = await getAllAlbumSlugs()
    return {
        paths,
        fallback: false
    }
}


// 2
export async function getStaticProps({ params }) {
    const albumData = getSingleAlbumData(params.id)
    return {
        props: {
            albumData
            // error: undefined
        }
    }
}


// 3
const SingleAlbumPage = ({ albumData }) => {
    const { title, featuredImage, albumInformation } = albumData;
    const { sourceUrl, altText, mediaDetails } = featuredImage.node;
    const { year, songsToAlbums } = albumInformation
    return <Layout>
        <Image
            src={sourceUrl}
            alt={altText}
            width={mediaDetails.width}
            height={mediaDetails.height}
        />

        <Heading level='1'>{title}</Heading>
        <Heading level='2'>{year}</Heading>

        {artistToAlbums && artistToAlbums.map((artist, index) => {
            return <Heading level='2'>
                <Link href={`/artists/${slug}`}>
                    <a>
                        {title}
                    </a></Link>
            </Heading>
        })}
        {songsToAlbums &&
        <section>
            <Heading level="2">Songs</Heading>
            <Row>
                {songsToAlbums.map((song, index) => {
                    const { title } = song;
                    return <Col key={index} xs="12" sm="12">
                        <Heading level='3'>{title}</Heading>
                        <Heading level='3'>{year}</Heading>
                    </Col>
                })}
            </Row>
        </section>
        }
    </Layout>
}

export default SingleAlbumPage;