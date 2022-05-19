import { ReactNode } from "react";
import { DiscographyProvider } from "./Discography";

interface IProvidersProp {
  children: ReactNode;
}
const Providers = ({ children }: IProvidersProp) => {
  return <DiscographyProvider>{children}</DiscographyProvider>;
};
export default Providers;
