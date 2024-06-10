import NoteCard from "./NoteCard/NoteCard";
import "./NotesList.css";
import Proptypes from "prop-types";
import { Link } from "react-router-dom";

const NotesList = ({ notes }) => {
  return (
    <div className="notes-list">
      <div className="notes-list-container">
        <ul>
          {notes.map(({ id, title, created_at, content }) => (
            <li key={id}>
              <Link to={`/note/${id}`}>
                <NoteCard
                  id={id}
                  title={title}
                  created_at={created_at}
                  content={content}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

NotesList.propTypes = {
  notes: Proptypes.array.isRequired,
};

export default NotesList;
