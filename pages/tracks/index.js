import Link from 'next/link'
import Heading from '../../components/Heading'
import Layout from '../../components/Heading'
import { getTracks } from '../../lib/api'


export async function getStaticProps(){
	const tracks = getTracks();
	
	return {
		props: {
			tracks
		} 
	}
}
const TracksLandingPage= ({tracks})=>{
    return <Layout>
        <Heading level ='1'>
            All tracks
        </Heading >
        {tracks.map((track, index)=>{
            return <p key={index}>
                <Link href={`/tracks/${tracks.slug}`}>
                <a>{track.title}
                </a>
                </Link>
                </p>
        })}
    </Layout>
}

export default TracksLandingPage;