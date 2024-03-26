import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from './useStore';
import { serverUrl } from "../util/serverURL";

export const useAdmins = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  // const [data, setData] = useState("");

  //navigation
  const navigate = useNavigate();
const {storeDispatch} = useStore();

  //get all admins
  const getAdmins = async () => {
    try {
      // set loading with true
      setLoading(true);
      //fetch request to server with the user data
      const response = await fetch(`${serverUrl}/api/admins`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      });

      const json = await response.json();
      if (!response.ok) {
        setLoading(false);
        throw Error(json.message);
      }
      
      if (response.ok) {
storeDispatch({type:"SET_ADMINS",payload:json.admins})
        // setData(json.admins);
      }
      
      // reset loading with false
      setLoading(false);
    } catch (error) {
      setError(error.message);
    }
  };

   //add admin
   const addAdmin = async (adminData) => {
    try {
      // set loading with true
      setLoading(true);
     
      const response = await fetch(`${serverUrl}/api/admins`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(adminData),
      });
      const json = await response.json();
      if (!response.ok) {
        setLoading(false);
        throw Error(json.message);
      }
      if (response.ok) {
        storeDispatch({type:"ADD_ADMIN",payload:json.admin})
        // console.log(json.admin);
      }
      setLoading(false);
    } catch (error) {
      setError(error.message);
    }
  };
  
   //delete admin
   const deleteAdmin = async (id) => {
    try {
      // set loading with true
      setLoading(true);
     
      const response = await fetch(`${serverUrl}/api/admins/${id}`, {
        method: "DELETE",
        // headers: {
        //   "Content-Type": "application/json",
        // },
      });
      const json = await response.json();
      if (!response.ok) {
        setLoading(false);
        throw Error(json.message);
      }
      if (response.ok) {
        storeDispatch({type:"DELETE_ADMIN",payload:json.adminId})
      }
      setLoading(false);
    } catch (error) {
      setError(error.message);
    }
  };

   //update admin
   const updateAdmin = async (id,adminData) => {
    // console.log(adminData)
    try {
      // set loading with true
      setLoading(true);
     
      const response = await fetch(`${serverUrl}/api/admins/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(adminData),
      });
      const json = await response.json();
      if (!response.ok) {
        setLoading(false);
        throw Error(json.message);
      }
      if (response.ok) {
        storeDispatch({type:"DELETE_ADMIN",payload:id})
        storeDispatch({type:"ADD_ADMIN",payload:json.updatedAdmin})
      }
      setLoading(false);
    } catch (error) {
      setError(error.message);
    }
  };

  return { loading, error, getAdmins, addAdmin, deleteAdmin, updateAdmin };
};
