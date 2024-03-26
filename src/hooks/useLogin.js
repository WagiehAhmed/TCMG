import { useState } from "react";
import { useNavigate } from "react-router-dom";
import  {adminSchema}  from "../util/validation";
import { serverUrl } from './../util/serverURL';

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  //navigation
  const navigate = useNavigate();

  const login = async (adminData) => {
    //check user data
    const { error } = adminSchema.validate(adminData);
    if (!error) {
      try {
        // set loading with true
        setLoading(true);
        //fetch request to server with the user data
        const response = await fetch(`${serverUrl}/api/admins/login`, {
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
          localStorage.setItem("token",JSON.stringify(json.token))
          // redirect to tasks page
          navigate("/dashboard", { replace: true });
        }


        // reset loading with false
        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    } else {
      setError(error.details[0].path[0]);
    }
  };

  return { login, loading, error };
};
