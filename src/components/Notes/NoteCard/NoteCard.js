import Proptypes from "prop-types";
import trashGrey from "./../icons/trash-grey.png";
import trashRed from "./../icons/trash-red.png";
import "./NoteCard.css";

const NoteCard = ({ id, title, created_at, content }) => {
  const handleClickDelete = (e) => {
    e.preventDefault();
    alert(`Delete ${id}`);
  };

  return (
    <article className="note-card">
      <div className="note-card-container">
        <div className="buttons">
          <button
            aria-label="Delete Button"
            className="button-delete"
            onClick={handleClickDelete}
          >
            <img
              className="ic-trash-grey"
              src={trashGrey}
              alt="Grey Trash Icon"
            />
            <img className="ic-trash-red" src={trashRed} alt="Red Trash Icon" />
          </button>
        </div>
        <h2 className="title">{title}</h2>
        <p className="created_at">{created_at}</p>
        <p className="content">{content}</p>
      </div>
    </article>
  );
};

NoteCard.propTypes = {
  id: Proptypes.string,
  title: Proptypes.string.isRequired,
  created_at: Proptypes.string.isRequired,
  content: Proptypes.string.isRequired,
};

export default NoteCard;
