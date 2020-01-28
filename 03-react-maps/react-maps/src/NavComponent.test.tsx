import React from 'react';

import {cleanup, fireEvent, render} from "@testing-library/react";
import App from "./App";

// Arrange
afterEach(cleanup);

it('shows a button labelled submit', () => {

    // Arrange
    const page = render(<App/>);
    const resetButton = page.getByText(`Reset`);

    // Assert
    expect(resetButton).toBeDefined();
});
