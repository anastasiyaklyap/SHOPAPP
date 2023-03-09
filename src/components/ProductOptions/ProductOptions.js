import PropTypes from 'prop-types';
import styles from './ProductOptions.module.scss';
import Button from '../Button/Button';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';

const ProductOption = ({
	action,
	sizes,
	currentSize,
	changeSize,
	changeColor,
	colors,
	currentColor,
}) => {
	return (
		<form onSubmit={action}>
			<OptionSize
				sizes={sizes}
				currentSize={currentSize}
				changeSize={changeSize}
			/>
			<OptionColor
				colors={colors}
				currentColor={currentColor}
				changeColor={changeColor}
			/>
			<Button className={styles.button}>
				<span className='fa fa-shopping-cart' />
			</Button>
		</form>
	);
};
OptionSize.propTypes = {
	action: PropTypes.func,
	sizes: PropTypes.array,
	currentSize: PropTypes.string,
	changeSize: PropTypes.func,
	changeColor: PropTypes.func,
	colors: PropTypes.array,
	currentColor: PropTypes.string,
};
export default ProductOption;
