import { IDoctor } from "../../interfaces";
import "./item.css";

interface DocCardProps {
  doc: IDoctor;
  setSelectedDoctor: (doctor?: IDoctor) => void;
}

const DocItem = ({ doc, setSelectedDoctor }: DocCardProps) => (
  <div className="doc-card" role="region" aria-labelledby={`doctor-${doc.id}`}>
    <img src={doc.photo} alt={doc.name} />
    <div className="doc-details">
        <h2 id={`doctor-${doc.id}`}>{doc.name}</h2>
      <div className="doc-info">
        <div className="box">
          <p className="title">Specialization</p>
          <p>{doc.specialty}</p>
        </div>
        <div className="box">
          <p className="title">Location</p>
          <p>{doc.location}</p>
        </div>
        <div className="box">
          <p className="title">Rating</p>
          <p>⭐ {doc.rating}</p>
        </div>
      </div>
      {
        doc.availability.length > 0 ? (<button
          onClick={() => setSelectedDoctor(doc)}
          aria-label={`Book appointment with ${doc.name}`}
        >
          BOOK AN APPOINMENT
        </button>) : (
          <button
            className="no-availability"
            disabled
          >
            NO AVAILABILITY
          </button>
        )
      }
    </div>
  </div>
);

export default DocItem;
