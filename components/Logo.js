import Image from "next/image";

const Logo = ({color='black', size=1})=>{
    return <Image
    src={`/images/spotify-logo-${color}.svg`}
    alt='Spotify Logo'
    width={60 * size}
    height={20 * size}
    // layout="responsive"
    />
}

export default Logo;