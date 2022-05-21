import styles from './col.module.scss'
import classNames from 'classnames';
import text from 'body-parser/lib/types/text';

let cx= classNames.bind(styles)

const Col = ({children, xs, sm, md, lg, textAlign}) =>{
    let colClasses= cx ({
        col: true,
        [`col-xs-${xs}`]: xs,
        [`col-sm-${sm}`]: sm,
        [`col-md-${md}`]: md,
        [`col-lg-${lg}`]: lg,
        [`text-align-${textAlign}`]: textAlign


    })
    return <div className={colClasses}>
        {children}
    </div>
}

export default Col; 