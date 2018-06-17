import React from 'react';
import { create } from 'react-test-renderer';
import { Loading } from './Loading';
 
it('renders product page correctly', () => {
  const component = create(<Loading />)
    .toJSON();
  expect(component).toMatchSnapshot();
});
