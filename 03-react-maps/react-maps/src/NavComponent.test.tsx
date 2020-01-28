import {cleanup, fireEvent, render} from "@testing-library/react";
import NavComponent from "./NavComponent";
import React from "react";
import {MapsContext, MyAppContextProvider} from "./MyAppContext";

// Arrange
afterEach(cleanup);

it('shows a button labelled reset', () => {

    // Arrange
    const page = render(<NavComponent/>);
    const resetButton = page.getByText(`Reset`);

    // Assert
    expect(resetButton).toBeDefined();

});



it('clicking the reset button should set scale in context to 42', () => {

    // mock the tightly coupled Context with a Context that is not using the state hook and therefore is accessible in this test
    let mockMapsContext: MapsContext = {
        scale: 0,
        scaleSetter: (setStateAction) => {
            mockMapsContext.scale = +setStateAction.toString(); // a complete hack to get the argument out of the Dispatch<SetStateAction<number>>
        }
    };

    // Arrange
    const page = render(
        <MyAppContextProvider value={mockMapsContext}>
            <NavComponent/>
        </MyAppContextProvider>
    );
    const resetButton = page.getByText(`Reset`);

    // Act
    fireEvent.click(resetButton);

    // Assert
    expect(mockMapsContext.scale).toEqual(42);

});
