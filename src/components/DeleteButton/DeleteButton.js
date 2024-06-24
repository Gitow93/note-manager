import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteNoteRequest } from "../../api/DeleteNoteRequest";
import { useNavigate } from "react-router-dom";

const DeleteButton = ({ noteId, imgSrc, imgAlt, className }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = async () => {
    if (window.confirm("¿Estás seguro de que deseas eliminar esta nota?")) {
      await dispatch(deleteNoteRequest(noteId));
      navigate("/");
    }
  };

  return (
    <button className={className} onClick={handleDelete}>
      <img src={imgSrc} alt={imgAlt} />
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
