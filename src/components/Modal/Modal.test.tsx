import { render } from '@testing-library/react';
import Modal from '../Modal';

describe('Modal Component', () => {
    it('should render without crashing', () => {
        render(
            <Modal 
                bookAppointment={jest.fn()} 
                setSelectedDoctor={jest.fn()} 
            />
        );
    })
});