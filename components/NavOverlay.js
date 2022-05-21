import ButtonUI from './ButtonUI';
import Logo from './Logo';
import Nav from './Nav';
import styles from './navoverlay.module.scss'; 

const NavOverlay = ({size, clickHandler, flexDirection})=>{
    return (
    <div className={styles.navOverlay}>
        <Logo color='white'  size={2}/>
        <Nav color="white" flexDirection = 'column'/>
        <ButtonUI 
        icon="close" 
        clickHandler={()=>{
            clickHandler(false)
        }} color="white"/>
        
    </div>)
}

export default NavOverlay;