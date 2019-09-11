import React from 'react';

import {cleanup, render} from "@testing-library/react";
import App from "./App";

afterEach(cleanup);


it('shows a button labelled submit', () => {
    const page = render(<App/>);
    const submitButton = page.getByText(`Submit`);
    expect(submitButton).toBeDefined();
})

it('shows a label with initial default text', () => {
    const page = render(<App/>);
    const hintLabel = page.getByLabelText(`Click the button`);
    expect(hintLabel).toBeDefined();
})
;
