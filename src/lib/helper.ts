// import Cookies from "js-cookie";

// export const getDataLocalStorage = (key: string) => {
//   try {
//     const dataStorage = localStorage.getItem(key);
//     if (dataStorage) {
//       return JSON.parse(dataStorage);
//     }
//     return dataStorage;
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// };

// export const setDataLocalStorage = (key: string, value: any) => {
//   try {
//     localStorage.setItem(key, JSON.stringify(value));
//     return true;
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// };

// export const deleteDataLocalStorage = (key: string) => {
//   try {
//     localStorage.removeItem(key);
//     return true;
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// };

// export const setDataCookie = (
//   key: string,
//   value: number | string | undefined,
//   expires: number | string
// ) => {
//   try {
//     Cookies.set(key, JSON.stringify(value), { expires: expires });
//     return true;
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// };

// export const getDataCookie = (key: string) => {
//   try {
//     const dataCookie = Cookies.get(key);
//     return JSON.parse(dataCookie);
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// };

// export const deleteDataCookie = (key: string) => {
//   try {
//     Cookies.remove(key);
//     return true;
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// };

// export const getDatasessionStorage = (key: string) => {
//   try {
//     const dataStorage = sessionStorage.getItem(key);
//     if (dataStorage) {
//       return JSON.parse(dataStorage);
//     }
//     return dataStorage;
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// };

// export const setDatasessionStorage = (key: string, value: any) => {
//   try {
//     sessionStorage.setItem(key, JSON.stringify(value));
//     return true;
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// };

// export const deleteDatasessionStorage = (key: string) => {
//   try {
//     sessionStorage.removeItem(key);
//     return true;
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// };
