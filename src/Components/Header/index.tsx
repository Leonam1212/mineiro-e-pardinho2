import logo from "../../Assets/logo.png";
import { Header } from "./style";

export const HeaderComponent = () => {
  return (
    <Header>
      <figure>
        <img src={logo} alt="Logo Tião Carreiro"></img>
      </figure>
      <h1>Discografia</h1>
    </Header>
  );
};
