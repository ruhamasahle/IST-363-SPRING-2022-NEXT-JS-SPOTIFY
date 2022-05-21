// two variants 
import classNames from "classnames/bind"
import styles from './paragraph.module.scss'


let cx = classNames.bind(styles)


const Paragraph = ({intro, children}) => {
   let paragraphClasses = cx({
    paragraph: true,
    // if intro is included, use the intro styling in CSS
    intro: intro
   });
   return <p className={paragraphClasses}>{children}</p>
}

export default Paragraph;