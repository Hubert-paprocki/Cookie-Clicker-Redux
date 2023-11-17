import { createPortal } from "react-dom";
import ModalContent from "./ModalContent";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { changeModal } from "../../app/slices/modalSlice";

function ModalBox() {
  const modal = useAppSelector((state) => state.modal.modal);
  const dispatch = useAppDispatch();
  const closeModal = (num: number) => dispatch(changeModal(num));
  if (modal === 5) {
    dispatch(changeModal(0));
  }
  return (
    <>
      {modal
        ? createPortal(<ModalContent onClick={closeModal} />, document.body)
        : ""}
    </>
  );
}

export default ModalBox;
