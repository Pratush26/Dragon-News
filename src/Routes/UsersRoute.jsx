import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import Loader from "../Components/Loader";
import LoginRequiredPage from "../Pages/LoginRequired";

export default function UsersRoute({ children }) {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <Loader />;
  if (user) return children;
  return <LoginRequiredPage />;
}
