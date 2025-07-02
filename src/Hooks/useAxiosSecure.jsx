import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Contexts/AuthContext";

const AxiosSecure = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_URL}`
})

const useAxiosSecure = () => {
    const {user} = useContext(AuthContext)
    // const token = localStorage.getItem('token')
    // console.log(token);
   useEffect(() => {
     const requestInterceptor = AxiosSecure.interceptors.request.use(
      config => {
        console.log('intercepting request', user?.accessToken); //For debugging
        config.headers.Authorization = `Bearer ${user?.accessToken}`;
        return config;
      },
      error => {
        console.log('interceptor error', error);
        return Promise.reject(error);
      }
    );

    return () => {
      console.log('removing interceptor'); //For debugging
      AxiosSecure.interceptors.request.eject(requestInterceptor);
    };

    
   },[user])


    return AxiosSecure
};

export default useAxiosSecure;