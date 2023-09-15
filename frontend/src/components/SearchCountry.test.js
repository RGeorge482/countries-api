import { render, screen } from "@testing-library/react";
import SearchCountry from "./SearchCountry";
import userEvent from "@testing-library/user-event";

describe("Search Country component", () => {
  // test to verify if the Title appears on the page
  test("renders Search Country as a text", () => {
    render(<SearchCountry />);
    const searchCountryElement = screen.getByText("Search Country", {
      exact: false,
    });
    expect(searchCountryElement).toBeInTheDocument();
  });

  // test to verify if "Capital" is on the page after the button was cliked
  test("renders Capital as a text", () => {
    render(<SearchCountry />);
    const buttonElement = screen.getByText("DISPLAY COUNTRY");
    userEvent.click(buttonElement);
    const searchCountryElement = screen.getByText("Capital:", { exact: true });
    expect(searchCountryElement).toBeInTheDocument();
  });

  // test to verify if "image" is on the page after the button was cliked
  test("renders image as a text", () => {
    render(<SearchCountry />);
    const buttonElement = screen.getByText("DISPLAY COUNTRY");
    userEvent.click(buttonElement);
    const searchCountryElement = screen.getByText("image", { exact: false });
    expect(searchCountryElement).toBeInTheDocument();
  });
});

describe("Async function", () => {
  // test to verify if we get data from the API
  test("renders post if request was successful", async () => {
    render(<SearchCountry />);
    const countryInfoElements = await screen.findAllByRole("countryInfo");
    expect(countryInfoElements).not.toHaveLength(0);
  });
});
