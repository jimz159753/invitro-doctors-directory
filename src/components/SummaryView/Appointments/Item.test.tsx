import { render } from "@testing-library/react";
import Item from "./Item";

describe("Item Component", () => {
  it("should render without crashing", () => {
    const mockData = {
      appt: {
        id: 1,
        name: "Dr. Sarah Connor",
        specialty: "Cardiology",
        location: "New York",
        availability: ["10:00 AM", "2:00 PM"],
        photo:
          "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 4.7,
        time: "2:00 PM",
      },
    };

    render(<Item {...mockData} />);
  });
});
