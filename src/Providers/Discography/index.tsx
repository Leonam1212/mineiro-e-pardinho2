import { createContext, useState, useEffect, ReactNode } from "react";
import toast from "react-hot-toast";
import { api } from "../../Services/api";

interface ITrack {
  id: number;
  number: number;
  title: string;
  duration: number;
}

interface IAlbum {
  id?: number;
  name: string;
  year: string;
  tracks?: Array<ITrack>;
}

interface IDiscographyProvider {
  children: ReactNode;
}

interface IDiscographyProviderData {
  album: any;
  addAlbum: (item: IAlbum) => void;
  deleteAlbum: (id: number) => void;
  searchAlbum: (item: string) => void;
  setModalAlbumIsOpen: (item: boolean) => void;
  modalAlbumIsOpen: boolean;

  addTrackInsideAlbum: (item: ITrack) => void;
  deleteTrack: (id: number) => void;
  setModalTrackIsOpen: (item: boolean) => void;
  modalTrackIsOpen: boolean;
}

export const DiscographyContext = createContext<IDiscographyProviderData>(
  {} as IDiscographyProviderData
);

export const DiscographyProvider = ({ children }: IDiscographyProvider) => {
  const [album, setAlbum] = useState(Array);
  const [updateDiscography, setUpdateDiscography] = useState(true);
  const [modalAlbumIsOpen, setModalAlbumIsOpen] = useState(false);
  const [modalTrackIsOpen, setModalTrackIsOpen] = useState(false);
  const [filterAlbum, setFilterAlbum] = useState("");

  const token = "leonam_5000@hotmail.com";

  const getAlbums = () => {
    api
      .get(`/album?keyword=${filterAlbum}`, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((response) => {
        setAlbum(response.data["data"]);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAlbums();
  }, [updateDiscography]);

  const searchAlbum = (inputValue: string) => {
    setFilterAlbum(inputValue);
    setUpdateDiscography(() => !updateDiscography);
  };

  const addAlbum = (data: IAlbum) => {
    api
      .post("/album", data, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setAlbum([...album, response.data]);
        toast.success("Album adicionado com sucesso!");
      })
      .catch((error) => toast.error("Album já adicionado!"));
  };

  const deleteAlbum = (id: number) => {
    api
      .delete(`/album/${id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then(() => toast.success("Album deletado com sucesso!"))
      .catch((error) => console.log(error));

    const newAlbumList = album.filter((album: any ) => album.id !== id);
    setAlbum(newAlbumList);
  };

  const addTrackInsideAlbum = (data: ITrack) => {
    api
      .post("/track", data, {
        headers: {
          Authorization: token,
        },
      })
      .then(() => toast.success("Faixa adicionada com sucesso!"))
      .catch((error) => {
        if ("number" in error.response.data.detail) {
          return toast.error("Número da faixa já existe!");
        } else {
          return toast.error("Título da faixa já existe!");
        }
      });

    setUpdateDiscography(() => !updateDiscography);
  };

  const deleteTrack = (id: number) => {
    api
      .delete(`/track/${id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then(() => toast.success("Faixa deletada com sucesso!"))
      .catch((error) => console.log(error));

    setUpdateDiscography(() => !updateDiscography);
  };

  return (
    <DiscographyContext.Provider
      value={{
        album,
        modalTrackIsOpen,
        modalAlbumIsOpen,
        setModalTrackIsOpen,
        setModalAlbumIsOpen,
        addAlbum,
        searchAlbum,
        addTrackInsideAlbum,
        deleteAlbum,
        deleteTrack,
      }}
    >
      {children}
    </DiscographyContext.Provider>
  );
};
