import React from 'react';
import { create } from 'react-test-renderer';
import { Carousel } from './Carousel';
 
it('renders product page correctly', () => {
  const component = create(<Carousel />)
    .toJSON();
  expect(component).toMatchSnapshot();
});
