import React from 'react';
import { create } from 'react-test-renderer';
import { CartProduct } from './Cart-Product';
 
it('renders product page correctly', () => {
  const product = {
    "id": "1",
    "title": "Blue Stripe Stoneware Plate",
    "brand": "Kiriko",
    "price": 40,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
    "image": "blue-stripe-stoneware-plate.jpg"
  };
  const component = create(<CartProduct
      key={product.id}
      product={product} />)
    .toJSON();
  expect(component).toMatchSnapshot();
});
