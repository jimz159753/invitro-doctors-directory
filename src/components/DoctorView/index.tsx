import { IDoctor } from "../interfaces";
import DocItem from "./Item";
import './doctorView.css';


interface DocViewProps {
  filteredDoctors: IDoctor[];
  setSelectedDoctor: (doctor?: IDoctor) => void;
}

const DocView = ({ filteredDoctors, setSelectedDoctor }: DocViewProps) => (
  <div className="list-container">
    {filteredDoctors.map((doc) => (
      <DocItem key={doc.id} doc={doc} setSelectedDoctor={setSelectedDoctor} />
    ))}
  </div>
);

export default DocView;
