import React from 'react';
import Button from '../src/components/Button';

export default {
  title: 'Button',
};

export const general = () => (
  <Button
    type="text"
    name="button"
    className="button"
    value="Test"
    label="Test Label"
    placeholder="Test Placeholder"
  />
);
