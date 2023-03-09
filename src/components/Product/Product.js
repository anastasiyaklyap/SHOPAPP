import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Product.module.scss';
import ProductImage from '../ProductImage/ProductImage';
import ProductOption from '../ProductOptions/ProductOptions';

const Product = ({ name, title, colors, sizes, basePrice }) => {
	const [currentColor, setCurrentColor] = useState(colors[0]);
	const [currentSize, setCurrentSize] = useState(sizes[0].name);

	const changeColor = (color) => {
		setCurrentColor(color);
	};
	const changeSize = (size) => {
		setCurrentSize(size);
	};
	const getPrice = () => {
		return (
			basePrice + sizes.find(({ name }) => name === currentSize).additionalPrice
		);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(e);
		console.log(`Name: ${title}`);
		console.log(`Price: ${getPrice()}`);
		console.log(`Size: ${currentSize}`);
		console.log(`Color: ${currentColor}`);
	};
	return (
		<article className={styles.product}>
			<ProductImage
				title={title}
				name={name}
				currentColor={currentColor}
			/>
			<div>
				<header>
					<h2 className={styles.name}>{title}</h2>
					<span className={styles.price}>Price: {getPrice()}$</span>
				</header>
				<ProductOption
					action={handleSubmit}
					sizes={sizes}
					currentSize={currentSize}
					currentColor={currentColor}
					changeSize={changeSize}
					changeColor={changeColor}
					colors={colors}
				/>
			</div>
		</article>
	);
};
Product.propTypes = {
	name: PropTypes.string,
	title: PropTypes.string,
	colors: PropTypes.array,
	sizes: PropTypes.array,
	basePrice: PropTypes.number,
};
export default Product;
