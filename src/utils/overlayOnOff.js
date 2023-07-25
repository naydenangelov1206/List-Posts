const overlayOnOff = (typeOfForm, formOverlay, setFormOverlay) => {
  if (typeOfForm === "addForm" && !formOverlay[typeOfForm]) {
    setFormOverlay({ ...formOverlay, addForm: true });
  } else if (typeOfForm === "addForm" && formOverlay[typeOfForm]) {
    setFormOverlay({ ...formOverlay, addForm: false });
  } else if (typeOfForm === "editForm" && !formOverlay[typeOfForm]) {
    setFormOverlay({ ...formOverlay, editForm: true });
  } else if (typeOfForm === "editForm" && formOverlay[typeOfForm]) {
    setFormOverlay({ ...formOverlay, editForm: false });
  } else if (typeOfForm === "comment" && !formOverlay[typeOfForm]) {
    setFormOverlay({ ...formOverlay, comment: true });
  } else if (typeOfForm === "comment" && formOverlay[typeOfForm]) {
    setFormOverlay({ ...formOverlay, comment: false });
  }
};

export default overlayOnOff;
