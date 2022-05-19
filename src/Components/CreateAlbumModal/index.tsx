import { useContext } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import ModalComponent from "../Modal";
import { DiscographyContext } from "../../Providers/Discography";
import TextField from "@mui/material/TextField";
import Button from "../Button";

interface ICreateAlbumModalComponentProps {
  modalAlbumIsOpen: boolean;
  setModalAlbumIsOpen: (item: boolean) => void;
}

export const CreateAlbumModalComponent = ({
  modalAlbumIsOpen,
  setModalAlbumIsOpen,
}: ICreateAlbumModalComponentProps) => {
  const { addAlbum } = useContext(DiscographyContext);

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    year: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleCreateAlbum = (data: any) => {
    addAlbum(data);
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
        modalIsOpen={modalAlbumIsOpen}
        setModalIsOpen={setModalAlbumIsOpen}
        title="Adicionar Album"
        content={
          <form style={formStyle} onSubmit={handleSubmit(handleCreateAlbum)}>
            <TextField
              label="Album"
              style={inputStyle}
              {...register("name")}
              helperText={errors.name?.message}
            />
            <TextField
              label="Ano"
              style={inputStyle}
              {...register("year")}
              helperText={errors.year?.message}
            />

            <Button text="Criar album" type="submit" />
          </form>
        }
      />
    </>
  );
};
