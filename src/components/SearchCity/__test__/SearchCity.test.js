import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import SearchCity from "../SearchCity";

describe("SearchCity Component", () => {
  it("updates the city input value", () => {
    render(<SearchCity />);
    const cityInput = screen.getByLabelText(/city/i);

    // Simulate user typing in the input field
    fireEvent.change(cityInput, { target: { value: "Paris" } });

    // Check if the input value is updated
    expect(cityInput.value).toBe("Paris");
  });

  it("triggers the search callback on input change", () => {
    // Create a mock function to pass as a prop
    const mockSearchCallback = jest.fn();

    render(<SearchCity onCityChange={mockSearchCallback} />);
    const cityInput = screen.getByLabelText(/city/i);

    // Simulate user typing in the input field
    fireEvent.change(cityInput, { target: { value: "New York" } });

    // Check if the search callback was called with the correct argument
    expect(mockSearchCallback).toHaveBeenCalledWith(expect.any(Object)); // Use expect.any(Object) to match any object argument
  });
});
