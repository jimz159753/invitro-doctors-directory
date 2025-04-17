import { IAppointment } from "../../interfaces";
import "./list.css";

interface AppoinmentItemProps {
  appt: IAppointment;
}

const AppoinmentItem = ({ appt }: AppoinmentItemProps) => (
  <li className="appt-item">
    <h3>{appt.name}</h3>
    <div className="appt-info">
      <h5>Specialty:</h5>
      <p>{appt.specialty}</p>
    </div>
    <div className="appt-info">
      <h5>Location:</h5>
      <p>{appt.location}</p>
    </div>
    <div className="appt-info">
      <h5>Time:</h5>
      <p>{appt.time}</p>
    </div>
  </li>
);

export default AppoinmentItem;
