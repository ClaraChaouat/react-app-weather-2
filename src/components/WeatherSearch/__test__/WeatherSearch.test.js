import { render, screen, fireEvent } from "@testing-library/react";
import WeatherSearch from "../WeatherSearch";

describe("WeatherSearch component", () => {
  it("should renders the search input field", () => {
    render(<WeatherSearch />);
  });

  it("should updates the city state when the search input field value changes", () => {
    render(<WeatherSearch />);
    const searchInput = screen.getByPlaceholderText(/Enter city name/i);
    fireEvent.change(searchInput, { target: { value: "New York" } });
    expect(searchInput).toHaveValue("New York");
  });
});
