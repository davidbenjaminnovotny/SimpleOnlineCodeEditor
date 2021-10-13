
export const clearLocalStorage = () => {
   
    window.localStorage.removeItem("js");
    window.localStorage.removeItem("css");
    window.localStorage.removeItem("html");
    window.location.reload(false);
};

export default clearLocalStorage;