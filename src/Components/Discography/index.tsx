import { Container } from "./style";
import { useContext } from "react";
import { DiscographyContext } from "../../Providers/Discography";

import { CreateTrackModalComponent } from "../CreateTracksModal";
import { CreateAlbumModalComponent } from "../CreateAlbumModal";
import { SearchComponent } from "../Search";
import { FooterComponent } from "../Footer";
import { HeaderComponent } from "../Header";
import { ListAlbumsComponent } from "../ListAlbums";

export const DiscographyComponent = () => {
  const {
    album,
    modalAlbumIsOpen,
    modalTrackIsOpen,
    setModalAlbumIsOpen,
    setModalTrackIsOpen,
    deleteAlbum,
    deleteTrack,
  } = useContext(DiscographyContext);

  return (
    <Container>
      <HeaderComponent />
      <SearchComponent />

      <ListAlbumsComponent
        album={album}
        deleteAlbum={deleteAlbum}
        deleteTrack={deleteTrack}
      />

      <FooterComponent
        modalAlbumIsOpen={modalAlbumIsOpen}
        modalTrackIsOpen={modalTrackIsOpen}
        setModalAlbumIsOpen={setModalAlbumIsOpen}
        setModalTrackIsOpen={setModalTrackIsOpen}
      />

      <CreateAlbumModalComponent
        modalAlbumIsOpen={modalAlbumIsOpen}
        setModalAlbumIsOpen={setModalAlbumIsOpen}
      />
      <CreateTrackModalComponent
        modalTrackIsOpen={modalTrackIsOpen}
        setModalTrackIsOpen={setModalTrackIsOpen}
      />
    </Container>
  );
};
