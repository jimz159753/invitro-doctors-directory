import { IAppointment } from "../interfaces";
import AppointmentList from "./Appointments/List";

interface SummaryViewProps {
  appointments: IAppointment[];
}

const SummaryView = ({ appointments }: SummaryViewProps) => (
  <div className="summary-view">
    {appointments.length === 0 ? (
      <p>No appointments booked yet.</p>
    ) : (
      <AppointmentList appointments={appointments} />
    )}
  </div>
);

export default SummaryView;
