import Login from "../src/components/Login";
import { useMoralis } from "react-moralis";
import Home from "./home";

export default function Renderizar() {
  const { isAuthenticated } = useMoralis()

  if (!isAuthenticated) {
    return (
      <Login></Login>
    )
  } else {
    return(
        <Home/>
    )
  }
}