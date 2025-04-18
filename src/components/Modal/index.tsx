import { IDoctor } from "../interfaces";
import "./modal.css";
import { useEffect, useRef, useState } from "react";

interface ModalProps {
  selectedDoctor?: IDoctor;
  bookAppointment: (doctor: IDoctor, time: string) => void;
  setSelectedDoctor: (doctor?: IDoctor) => void;
}

const Modal = ({
  selectedDoctor,
  bookAppointment,
  setSelectedDoctor,
}: ModalProps) => {
  const [timeSlot, setTimeSlot] = useState<string>("");
  const currentSlot = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (selectedDoctor) {
      if (currentSlot.current) {
        currentSlot.current.focus();
      }
    }
  }, [selectedDoctor]);

  const handleCancel = () => {
    setSelectedDoctor(undefined);
    setTimeSlot("");
  };

  const handleConfirm = () => {
    if (selectedDoctor && timeSlot) {
      bookAppointment(selectedDoctor, timeSlot);
      setTimeSlot("");
    } else {
      alert("Please select a time slot before confirming.");
    }
  }

  return (
    <div>
      {selectedDoctor && (
        <div
          className="modal-container"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="modal-body">
            <h2 id="modal-title" className="">
              Book Appointment with {selectedDoctor.name}
            </h2>
            <p>Available Time Slots:</p>
            <ul>
              {selectedDoctor.availability.map((time, idx) => (
                <li key={idx}>
                  <button
                    ref={idx === 0 ? currentSlot : null}
                    className={"time-slot-button " + (timeSlot === time ? "selected" : "")}
                    onClick={() => setTimeSlot(time)}
                    aria-pressed={timeSlot === time}
                    aria-label="Select time slot"
                  >
                    {time}
                  </button>
                </li>
              ))}
            </ul>
            <div className="btns-container">
              <button
                className="cancel-button"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button className="confirm-btn" onClick={handleConfirm}>Confirm</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Modal;

