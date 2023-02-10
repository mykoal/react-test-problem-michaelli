import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import App from './App';

// import your story from App.stories.js


// Add your tests here
// See https://storybook.js.org/docs/react/writing-tests/importing-stories-in-tests#example-with-testing-library


describe('App', () => {
  it('renders the button with text "click me"', () => {
    render(<App />);
    const button = screen.getByText(/click me/i);
    expect(button).toBeInTheDocument();
  });

  it('changes the text of the button to "thanks" when clicked', () => {
    render(<App />);
    const button = screen.getByText(/click me/i);
    fireEvent.click(button);
    expect(button).toHaveTextContent(/thanks/i);
  });
});
