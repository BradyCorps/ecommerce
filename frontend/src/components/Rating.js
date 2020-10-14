import React from 'react';

const Rating = ({ value, text, color }) => {
	return (
		<div className="rating">
			<span>
				<i
					style={{ color }}
					// if value is greater or equal to 1 show full star ELSE value is less than or equal to 0.5 show Half Star ELSE show empty star
					className={
						value >= 1
							? 'fas fa-star'
							: value >= 0.5
							? 'fas fa-star-half-alt'
							: 'far fa-star'
					}
				></i>
			</span>
			<span>
				<i
					style={{ color }}
					// if value is greater or equal to 2 show full star ELSE value is less than or equal to 1.5 show Half Star ELSE show empty star (since second star)
					className={
						value >= 2
							? 'fas fa-star'
							: value >= 1.5
							? 'fas fa-star-half-alt'
							: 'far fa-star'
					}
				></i>
			</span>
			<span>
				<i
					style={{ color }}
					// if value is greater or equal to 3 show full star ELSE value is less than or equal to 2.5 show Half Star ELSE show empty star
					className={
						value >= 3
							? 'fas fa-star'
							: value >= 2.5
							? 'fas fa-star-half-alt'
							: 'far fa-star'
					}
				></i>
			</span>
			<span>
				<i
					style={{ color }}
					className={
						value >= 4
							? 'fas fa-star'
							: value >= 3.5
							? 'fas fa-star-half-alt'
							: 'far fa-star'
					}
				></i>
			</span>
			<span>
				<i
					style={{ color }}
					className={
						value >= 5
							? 'fas fa-star'
							: value >= 4.5
							? 'fas fa-star-half-alt'
							: 'far fa-star'
					}
				></i>
			</span>
			{/* double ampersand === if text ... text exists ... show text  */}

			<span className="px-2">{text && text}</span>
		</div>
	);
};

// Setting default Prop value
Rating.defaultProps = {
	color: '#64b498',
};

export default Rating;
