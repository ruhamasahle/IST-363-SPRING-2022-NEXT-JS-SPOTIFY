import { Fragment } from 'react'

import Footer from './Footer'
import Header from './Header'

import styles from './layout.module.scss'

export default function Layout({ children }) {
	return <Fragment>
		<Header/>
			<main>
				{children}
			</main>

		<Footer/>
	
	</Fragment>
}
