import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { Content, InfoContent, ListAlbums } from "./style";

interface ITrack {
  id: number;
  number: number;
  title: string;
  duration: number;
}
interface IAlbum {
  id: number;
  name: string;
  year: number;
  tracks?: Array<ITrack>;
}

interface IListAlbumsProps {
  album: Array<IAlbum>;
  deleteAlbum: (id: number) => void;
  deleteTrack: (id: number) => void;
}

export const ListAlbumsComponent = ({
  album,
  deleteAlbum,
  deleteTrack,
}: IListAlbumsProps) => {
  const [idVisibility, setIdVisibility] = useState(false);

  const handleVisibility = () => {
    setIdVisibility(!idVisibility);
  };

  return (
    <ListAlbums>
      {album.map((album: IAlbum, index: any) => (
        <Content key={index}>
          <h2>
            <div>
              Álbum: {album.name}, {album.year}
              <span>ID: {album.id}</span>
            </div>
            <span onClick={() => deleteAlbum(album.id)}>
              <FaTrashAlt />
            </span>
          </h2>

          <InfoContent>
            <div>
              <span>N</span>
              <span>Faixa</span>
              <span></span>
            </div>
            <div>
              <span>Duração</span>
              <span></span>
            </div>
          </InfoContent>

          {album["tracks"] === undefined
            ? ""
            : album.tracks.map((item: ITrack, index: any) => (
                <InfoContent key={index}>
                  <div>
                    <span>{item.number}</span>
                    <span>{item.title}</span>
                  </div>
                  <div>
                    <span>
                      {String((item.duration / 100).toFixed(2)).replace(
                        ".",
                        ":"
                      )}
                    </span>
                    <span
                      onClick={() => deleteTrack(item.id)}
                      className="remove"
                    >
                      <IoMdRemoveCircleOutline />
                    </span>
                  </div>
                </InfoContent>
              ))}
        </Content>
      ))}
    </ListAlbums>
  );
};
