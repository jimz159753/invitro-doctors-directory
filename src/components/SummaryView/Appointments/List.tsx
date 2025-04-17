import { IAppointment } from "../../interfaces";
import AppoinmentItem from "./Item";
import './list.css'

interface AppointmentListProps {
    appointments: IAppointment[];
    }

const AppointmentList = ({appointments}: AppointmentListProps) => (
  <ul>
    {appointments.map((appt, idx) => (
      <AppoinmentItem key={idx} appt={appt} />
    ))}
  </ul>
);

export default AppointmentList; 