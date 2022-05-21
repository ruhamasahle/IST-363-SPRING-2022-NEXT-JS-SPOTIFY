import { getTracks } from '../lib/api'
import style from './track.module.scss'

const Tracks = ({items}) => {
	const tracks = getTracks();
	
	return <ul className={style.track}>
		{items.map((item, index) =>{
			return <li
			 key={index}
			 className={style.trackItem}>
			<h3> {item.title}</h3>
			<h3> {item.artist}</h3>
			</li>
		})} 
	</ul>
}
export default Tracks;
