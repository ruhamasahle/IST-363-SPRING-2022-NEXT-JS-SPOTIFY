import Layout from '../../components/Layout'
import {getAllTrackPaths, getSingleTrackData} from '../../lib/api'
// import { getStaticProps ÷} from '.';


import Container from '../../components/Container';
import Col from '../../components/Col';
import Row from '../../components/Row';
import Heading from '../../components/Heading';
import Link from 'next/link';


// WATERFALL
// 1. get a list of paths to prerender
export async function getStaticPaths(){
    const paths = getAllTrackPaths();
    return {
        paths,
        fallback: false
    }
}
// 2. get the data that belongs to the single song.
export async function getStaticProps({params}){
   const singleTrackData= getSingleTrackData(params.id)
    return {
        props: {
            singleTrackData
        }
    }
}
const SingleTrackTemplate= ({singleTrackData})=>{
    const {matchingTrack} = singleTrackData;
    const {title, artist} = matchingTrack;
    return <Layout>
        <Container>
            <Row>
                <Col>
                <Heading level='3'>
                    <Link href='./'>
                    <a>
                        Back to All Songs
                    </a></Link>
                </Heading>

                <Heading level='1'>{title}</Heading>
                <Heading level='2'>{artist}</Heading>
                </Col>
            </Row>
        </Container>
        {/* <p>{singleTrackData.title}</p> */}
    </Layout>

}
export default SingleTrackTemplate;