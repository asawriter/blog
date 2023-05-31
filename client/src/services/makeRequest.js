import axios from "axios";

const baseURL = "http://localhost:5000";

const makeRequest = axios.create({
  baseURL,
  withCredentials: true,
});

makeRequest.interceptors.request.use(
  (config) => {
    const accessToken = JSON.parse(
      localStorage.getItem("userData")
    ).accessToken;
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (err) => Promise.reject(err)
);

// const AxiosInterceptor = ({ children }) => {
//   console.log("interceptor");
//   const [isSet, setIsSet] = useState(false);

//   // RESPONSE
//   useEffect(() => {
//     console.log("useEffect res");

//     const resInterceptor = (response) => {
//       console.log("resInterceptor res");
//       return response;
//     };

//     const errInterceptor = async (error) => {
//       console.log("errInterceptor res");
//       if (error.response.status === 401) {
//         const dataRT = await axios.get(
//           `http://localhost:5000/auth/${userData?.userId}/refresh-token`
//         );
//         const refreshToken = dataRT.data.refreshToken;

//         if (refreshToken) {
//           const newTokens = await axios.post(
//             "http://localhost:5000/auth/refresh-token",
//             { refreshToken }
//           );

//           const newAccessToken = newTokens.data.accessToken;

//           if (newAccessToken) {
//             localStorage.setItem(
//               "userData",
//               JSON.stringify({
//                 ...userData,
//                 accessToken: newTokens.data.accessToken,
//               })
//             );

//             makeRequest.defaults.headers.common[
//               "Authorization"
//             ] = `Bearer ${newTokens.data.accessToken}`;
//           }
//         }
//       }
//     };

//     const interceptor = makeRequest.interceptors.response.use(
//       resInterceptor,
//       errInterceptor
//     );

//     setIsSet(true);
//     return () => makeRequest.interceptors.response.eject(interceptor);
//   }, []);

//   return isSet && children;
// };

// export { AxiosInterceptor };
export default makeRequest;
