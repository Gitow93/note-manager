import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteNoteRequest } from "../../api/DeleteNoteRequest";
import { useNavigate } from "react-router-dom";
import { deleteNoteSuccess } from "../../redux/notesSlice";

const DeleteButton = ({ noteId, imgSrc, imgAlt, className, classNameimg }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = async (e) => {
    e.preventDefault();

    if (window.confirm("¿Estás seguro de que deseas eliminar esta nota?")) {
      await deleteNoteRequest(noteId)
      dispatch(deleteNoteSuccess(noteId));
      navigate("/");
    }
  };

  return (
    // EL CLASSNAME TIENES QUE PONERSELO A LA IMAGEN, NO AL BUTTON
    <button className={className} onClick={handleDelete}>
      <img src={imgSrc} alt={imgAlt} className={classNameimg}/>
    </button>
  );
};

DeleteButton.propTypes = {
  noteId: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default DeleteButton;
