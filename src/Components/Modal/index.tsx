import Modal from "react-modal";
import { FaWindowClose } from "react-icons/fa";
import { CloseModal, ModalContent } from "./style";

interface IModalProps {
  modalIsOpen: boolean;
  setModalIsOpen: any;
  title: string;
  content: any;
}

const ModalComponent = ({
  modalIsOpen,
  setModalIsOpen,
  title,
  content,
}: IModalProps) => {
  const closeModal = () => {
    setModalIsOpen(false);
  };

  const modalStyle: any = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: "80%",
      maxWidth: "500px",
      transform: "translate(-50%, -50%)",
      textAlign: "center",
      borderRadius: "15px",
    },
  };

  return (
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={modalStyle}>
      <CloseModal onClick={closeModal}>
        <FaWindowClose />
      </CloseModal>
      <ModalContent>
        <h2>{title}</h2>
        <>{content}</>
      </ModalContent>
    </Modal>
  );
};

export default ModalComponent;
