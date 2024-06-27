import Proptypes from "prop-types";
import trashGrey from "./../icons/trash-grey.png";
import trashRed from "./../icons/trash-red.png";
import { useTranslation } from "react-i18next";
import "./NoteCard.css";
import DeleteButton from "../../DeleteButton/DeleteButton";

const NoteCard = ({ id, title, created_at, content }) => {
  const handleClickDelete = (e) => {
    e.preventDefault();
    alert(`Delete ${id}`);
  };
  const { t } = useTranslation("translation");

  return (
    <article className="note-card">
      <div className="note-card-container">
        <div className="buttons">
          {/* // AL SUPERPONER LOS DOS BOTONES HAY QUE PONER preventDefault EN AMBOS */}
          <button
            aria-label={t("note-card.aria-label-delete-btn")}
            className="ic-trash-grey"
            onClick={handleClickDelete}
          >
            <img              
              src={trashGrey}
              alt={t("note-card.alt-grey-trash")}
            />
          </button>
          <DeleteButton
            noteId={id}
            imgSrc={trashRed}
            imgAlt={t("note-detail.delete")}
            className="ic-trash-red"
          />
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
