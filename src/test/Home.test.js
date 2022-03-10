import React from 'react';
import {Home} from '../screens/Home'

describe('Render Home', () => {
   it('renders correctly', () => {
      const tree = renderer.create(
        <Home />
        ).toJSON();
      expect(tree).toMatchSnapshot();
    });
})
