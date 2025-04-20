import React from "react";
import { fireEvent, render, screen, within } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  it("should render Modal component after reserving an appointment", () => {
    render(<App />);

    const cards = screen.getAllByRole("card");
    expect(cards.length).toBe(6);
    const button = within(cards[0]).getByRole("button"); // First Book Appointment button
    fireEvent.click(button);
    const modal = screen.getByRole("dialog");
    expect(modal).toBeInTheDocument();
  });
});
