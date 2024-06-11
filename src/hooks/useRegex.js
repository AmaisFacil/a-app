const useRegex = () => {
  
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-ZÀ-ú$*&@#]{4,10}$/;

const email = (value) => emailRegex.test(value) === false;
const password = (value) => passwordRegex.test(value) === false;

return { email, password }
};


export default useRegex