import styles from './buttonui.module.scss';
import Image from 'next/image';
import classNames from 'classnames';

let cx= classNames.bind(styles);


const ButtonUI = ({icon, color, clickHandler})=>{
    let btnClasses= cx({
        btnui :true, 
        [`${icon}`]: icon,
    })
   return <button 
   className={btnClasses}
   onClick={()=>{
       clickHandler(true)

   }}>
    <Image
        src={`/images/icon-${icon}-${color}.svg`}
        alt={`${icon} icon `}
        width='36'
        height='36'
    ></Image>
    </button>
}

export default ButtonUI;