import Layout from "../../components/Layout";
import Image from "next/image";
import Col from "../../components/Col";
import Container from "../../components/Container";
import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";


import { getAlbums } from "../../lib/api";

import { Link } from "react-router-dom";

export async function getStaticProps() {
    const albums = getAlbums();
    return {
        props: {
            albums
        }
    }
}

const AlbumsPage = ({ albums }) => {
    return <Layout>
        <Container>
            <Heading level='1'>Albums</Heading>
            {albums.map((album, index) => {
                const { featuredImage, title, slug } = album;
                const { src, alt, width, height } = featuredImage;
                return <Col key={index} xs='6' sm='4'>
                    <Image
                        src={`/images/${src}.jpg`}
                        alt={alt}
                        width={width}
                        height={height}
                    />
                    <Heading level='3'>
                        {title}
                    </Heading>
                    <Paragraph>
                        <Link href={`/albums/${slug}`}>
                            <a>Read More</a>
                        </Link>
                    </Paragraph>
                </Col>
            })}


        </Container>
    </Layout>
}

export default AlbumsPage;