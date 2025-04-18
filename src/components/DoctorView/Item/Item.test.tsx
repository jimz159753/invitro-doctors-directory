import { render, screen } from '@testing-library/react';
import Item from '../Item';

describe('Item Component', () => {
    it('should render without crashing', () => {
        const mockData = {
            doc: {
                id: 1,
                name: "Dr. John Doe",
                specialty: "Cardiology",
                availability: ["9:00 AM", "10:00 AM"],
                rating: 4.5,
                location: "123 Main St, Springfield",
                photo: "https://example.com/photo.jpg",
            },
            setSelectedDoctor: jest.fn(),
        };
        render(<Item {...mockData} />);
        expect(screen.getByText("Dr. John Doe")).toBeInTheDocument();
        expect(screen.getByText("Cardiology")).toBeInTheDocument();
    })
});