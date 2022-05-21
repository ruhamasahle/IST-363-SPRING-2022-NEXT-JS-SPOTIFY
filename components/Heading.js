import classNames from 'classnames/bind'
import styles from './heading.module.scss'

let cx = classNames.bind(styles)

const Heading = ({ level, children }) => {
    // return <div>{children}</div>
    let headingClasses = cx({
        // use heading if it exists
        heading: true,
        // use heading1 if the level is set to 1
        heading1: level === '1',
        heading2: level === '2',
        heading3: level === '3'
    });

    if (level === '1') {
        return <h1 className={headingClasses}>{children}</h1>
    } else if (level === '2') {
        return <h2 className={headingClasses}>{children}</h2>
    } else if (level === '3') {
        return <h2 className={headingClasses}>{children}</h2>
    } return <p>Heading Component</p>
}

export default Heading; 