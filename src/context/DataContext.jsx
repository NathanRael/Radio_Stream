import { createContext, useState,useEffect } from "react";
import fetchApi from "../functions/fetchApi";
const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [allUser, setAllUser] = useState([]);

  const getUser = async () => {
    fetchApi("user.php")
      .then((data) => {
        setAllUser(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getUser();
  }, []);


  return (
    <DataContext.Provider value={{ allUser, setAllUser, getUser }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
