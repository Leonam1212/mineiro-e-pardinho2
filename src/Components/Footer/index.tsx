import { IoIosAlbums } from "react-icons/io";
import { MdAudiotrack } from "react-icons/md";
import { Footer } from "./style";

interface IFooterComponentProps {
  modalAlbumIsOpen: boolean;
  modalTrackIsOpen: boolean;
  setModalTrackIsOpen: (item: boolean) => void;
  setModalAlbumIsOpen: (item: boolean) => void;
}
export const FooterComponent = ({
  modalAlbumIsOpen,
  setModalAlbumIsOpen,
  modalTrackIsOpen,
  setModalTrackIsOpen,
}: IFooterComponentProps ) => {
  const openModalAlbum = () => {
    setModalAlbumIsOpen(true);
  };

  const openModalTrack = () => {
    setModalTrackIsOpen(true);
  };

  return (
    <Footer>
      <div>
        <button onClick={openModalAlbum} title="Adicionar album">
          <IoIosAlbums />
        </button>
      </div>
      <div>
        <button onClick={openModalTrack} title="Adicionar faixa">
          <MdAudiotrack />
        </button>
      </div>
    </Footer>
  );
};
