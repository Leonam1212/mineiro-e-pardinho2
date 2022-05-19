import { useContext } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import ModalComponent from "../Modal";

import TextField from "@mui/material/TextField";
import Button from "../Button";
import { DiscographyContext } from "../../Providers/Discography";

interface ICreateAlbumModalComponentProps {
  modalTrackIsOpen: boolean;
  setModalTrackIsOpen: any;
}

export const CreateTrackModalComponent = ({
  modalTrackIsOpen,
  setModalTrackIsOpen,
}: ICreateAlbumModalComponentProps) => {
  const { addTrackInsideAlbum } = useContext(DiscographyContext);
  const schema = yup.object().shape({
    album_id: yup.number().required("Campo obrigatório"),
    number: yup.number().required("Campo obrigatório"),
    title: yup.string().required("Campo obrigatório"),
    duration: yup.number().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleCreateTrack = (data: any) => {
    addTrackInsideAlbum(data);
  };

  const inputStyle = {
    margin: "10px auto",
    width: "100%",
    maxWidth: "350px",
  };

  const formStyle = {
    width: "100%",
  };

  return (
    <>
      <ModalComponent
        modalIsOpen={modalTrackIsOpen}
        setModalIsOpen={setModalTrackIsOpen}
        title="Adicionar Faixa"
        content={
          <form style={formStyle} onSubmit={handleSubmit(handleCreateTrack)}>
            <TextField
              label="Identificador do album"
              style={inputStyle}
              {...register("album_id")}
              helperText={errors.album_id?.message}
            />
            <TextField
              label="Número da faixa"
              style={inputStyle}
              {...register("number")}
              helperText={errors.number?.message}
            />
            <TextField
              label="Título da faixa"
              style={inputStyle}
              {...register("title")}
              helperText={errors.title?.message}
            />
            <TextField
              label="Duração da faixa"
              style={inputStyle}
              {...register("duration")}
              helperText={errors.duration?.message}
            />

            <Button text="Criar faixa" type="submit" />
          </form>
        }
      />
    </>
  );
};
