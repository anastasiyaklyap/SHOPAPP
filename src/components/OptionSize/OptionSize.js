import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './OptionSize.module.scss';

const OptionSize = ({ sizes, currentSize, changeSize }) => {
	return (
		<div className={styles.sizes}>
			<h3 className={styles.optionLabel}>Sizes</h3>
			<ul className={styles.choices}>
				{sizes.map((size) => {
					return (
						<li key={size.name}>
							<button
								type='button'
								className={clsx(currentSize === size.name && styles.active)}
								onClick={() => changeSize(size.name)}
							>
								{size.name}
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
OptionSize.propTypes = {
	sizes: PropTypes.array,
	currentSize: PropTypes.string,
	changeSize: PropTypes.func,
};
export default OptionSize;
