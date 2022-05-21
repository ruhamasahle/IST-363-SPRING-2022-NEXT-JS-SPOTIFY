import classNames from 'classnames/bind'
import styles from './row.module.scss'

let cx = classNames.bind(styles)

const Row = ({children, justifyContent, alignItems}) => {
	// rowClasses = result of cx function
	 
	let rowClasses = cx({
		row : true,
		// use justify-content-remainder if what is in curly brackets is what is in brackets.
		[`justify-content-${justifyContent}`] : justifyContent,
		[`align-items-${alignItems}`] : alignItems
	})
	return <div className={rowClasses
}>{children}</div>
}
export default Row;
