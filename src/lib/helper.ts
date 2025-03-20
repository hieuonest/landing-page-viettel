import Cookies from "js-cookie";

export const getDataLocalStorage = (key: string) => {
  try {
    const dataStorage = localStorage.getItem(key);
    if (dataStorage) {
      return JSON.parse(dataStorage);
    }
    return dataStorage;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const setDataLocalStorage = (key: string, value: any) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const deleteDataLocalStorage = (key: string) => {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const setDataCookie = (
  key: string,
  value: number | string | undefined,
  expires: number | string
) => {
  try {
    const expiresOption = typeof expires === 'string' ? new Date(expires) : expires;
    Cookies.set(key, JSON.stringify(value), { expires: expiresOption });
    return true;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getDataCookie = (key: string) => {
  try {
    const dataCookie = Cookies.get(key);
    return dataCookie ? JSON.parse(dataCookie) : null;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const deleteDataCookie = (key: string) => {
  try {
    Cookies.remove(key);
    return true;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getDatasessionStorage = (key: string) => {
  try {
    const dataStorage = sessionStorage.getItem(key);
    if (dataStorage) {
      return JSON.parse(dataStorage);
    }
    return dataStorage;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const setDatasessionStorage = (key: string, value: any) => {
  try {
    sessionStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const deleteDatasessionStorage = (key: string) => {
  try {
    sessionStorage.removeItem(key);
    return true;
  } catch (error) {
    console.log(error);
    return error;
  }
};
export const screenDetail = {
  '3xl': '1572px',
  'xxs': "400px",
	'xs': '480px',
  'xm': '576px',
	'sm': '640px', 
	'md': '768px',
	'lg': '992px',
	'xl': '1200px',
  'xl-2': '1280px'
}
