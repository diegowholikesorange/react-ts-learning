import React from 'react';

import {cleanup, fireEvent, render} from "@testing-library/react";
import App from "./App";

// Arrange
afterEach(cleanup);

it('shows a button labelled submit', () => {

    // Arrange
    const page = render(<App/>);
    const submitButton = page.getByText(`Submit`);

    // Assert
    expect(submitButton).toBeDefined();
});

it('shows a label with initial default text', () => {

    // Arrange
    const page = render(<App/>);
    const hintLabel = page.getByLabelText(`Click the button`);

    // Assert
    expect(hintLabel).toBeDefined();
});

it('changes label when button is clicked', () => {

    // Arrange
    const page = render(<App/>);
    const submitButton = page.getByText(`Submit`);

    // Act
    fireEvent.click(submitButton);

    // Assert
    expect(page.getByLabelText(`Thanks`)).toBeDefined();
});
