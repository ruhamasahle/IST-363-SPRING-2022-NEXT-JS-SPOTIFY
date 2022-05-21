import Link from 'next/link'
import classNames from 'classnames';
import styles from './nav.module.scss'
import Container from './Container';

let cx = classNames.bind(styles)

const navLinks = [
    {
        label: "Premium",
        slug: "premium"
    },
    {
        label: "Support",
        slug: "support"
    },
    {
        label: "Download",
        slug: "download"
    },
    {
        label: "Account",
        slug: "account"
    },
    {
        label: "Logout",
        slug: "logout"
    }];



const Nav = ({mobile, flexDirection}) => {
    let navClasses = cx({
        nav:true,
        mobile: mobile
    })
    let listClasses = cx({
        list:true,
        [`flex-direction-${flexDirection}`]: flexDirection
    })
    return <Container>
    <nav className={navClasses}>
        <ul className={listClasses} >
            {navLinks.map((navLink, index) => {
                return <li key={index} className={styles.listItem}>
                    <Link
                        href={`/${navLink.slug}`}
                       >
                        <a className={styles.link}>{navLink.label}</a>
                    </Link>
                </li>
            })}

        </ul>
    </nav>
</Container>
        }    
export default Nav;