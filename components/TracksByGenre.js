import { useState } from 'react'

import Tabs from './Tabs'
import Tracks from './Tracks'

import { getTracks, getGenres, filterTracksByGenre } from '../lib/api';


// getstaticprops= components get pushed before webiste is rendered.



	
const TracksByGenre = () => {
	
	const tracks = getTracks();
	const genres = getGenres();


	const [activeGenre, setActiveGenre] = useState("Rock");

	return <div>
		<h2>Top Songs by Genre</h2>
		<Tabs 
			items={genres} 
			activeItem={activeGenre} 
			clickHandler={setActiveGenre}
		/>
		<Tracks items={filterTracksByGenre(tracks,activeGenre)}/>
	</div>
}
export default TracksByGenre;
