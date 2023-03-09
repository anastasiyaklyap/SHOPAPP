import PropTypes from 'prop-types';
import styles from './OptionColor.module.scss';
import clsx from 'clsx';

const OptionColor = ({ colors, currentColor, changeColor }) => {
	const colorClassName = (color) => {
		console.log(
			`color${color[0].toUpperCase()}${color.substr(1).toLowerCase()}`,
			'color class name'
		);
		return `color${color[0].toUpperCase()}${color.substr(1).toLowerCase()}`;
	};
	return (
		<div className={styles.colors}>
			<h3 className={styles.optionLabel}>Colors</h3>
			<ul className={styles.choices}>
				{colors.map((color) => {
					return (
						<li key={color}>
							<button
								type='button'
								className={clsx(
									styles[colorClassName(color)],
									currentColor === color && styles.active
								)}
								onClick={() => changeColor(color)}
							/>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
OptionColor.propTypes = {
	colors: PropTypes.array,
	currentColor: PropTypes.string,
	changeColor: PropTypes.func,
};

export default OptionColor;
