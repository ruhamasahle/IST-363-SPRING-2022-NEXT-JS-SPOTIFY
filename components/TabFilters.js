const TabFilters = ({ items, activeItem, handleChange}) => {
	return <div>
			<label htmlFor="trackSort">Sort tracks by</label><br />
			<select name="trackSort" onChange={(event) => {
				handleChange(event.target.value)
			}}>
				{items.map((item, index) => {
					return <option key={index} value={item.value}>{item.label}</option>
				})}
			</select>
		</div>
}
export default TabFilters;
