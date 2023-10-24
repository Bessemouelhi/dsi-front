import { Link } from "react-router-dom";
// import Wrapper from "./Wrapper";
import { useEffect, useState } from "react";
import Input from "../Input";

const UserRegex = /^[a-zA-Z][a-zA-Z0-9-_\.]{3,24}$/;
const EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PasswordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@&#$%]).{8,23}$/;
const PhoneNumberRegex = /^\+(?:\d{1,3})?\d{10,14}$/;

const Inscription2 = () => {
  const [userName, setUserName] = useState("");
  const [validUserName, setValidUserName] = useState(false);
  const [userNameFocus, setUserNameFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [phone, setPhone] = useState("");
  const [validPhone, setValidPhone] = useState(false);
  const [phoneFocus, setPhoneFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [password2, setPassword2] = useState("");
  const [validPassword2, setValidPassword2] = useState(false);
  const [password2Focus, setPassword2Focus] = useState(false);

  const [success, setSuccess] = useState(false);

  const inputArray = [
    {
      name: "username",
      state: userName,
      setState: setUserName,
      regex: UserRegex,
      valid: validUserName,
      setvalid: setValidUserName,
      focus: userNameFocus,
      setFocus: setUserNameFocus,
      type: "text",
      msg: "Entre 4 et 24 caractères. Doit commencer par une lettre. Doit comporter au moins une lettre et aucun caractère spécial.",
    },
    {
      name: "email",
      state: email,
      setState: setEmail,
      regex: EmailRegex,
      valid: validEmail,
      setvalid: setValidEmail,
      focus: emailFocus,
      setFocus: setEmailFocus,
      type: "email",
      msg: "L'adresse mail doit avoir le bon format.",
    },
    {
      name: "tel",
      state: phone,
      setState: setPhone,
      regex: PhoneNumberRegex,
      valid: validPhone,
      setvalid: setValidPhone,
      focus: phoneFocus,
      setFocus: setPhoneFocus,
      type: "tel",
      msg: "Le numéro de téléphone doit avoir le bon format.",
    },
    {
      name: "password",
      state: password,
      setState: setPassword2,
      regex: PasswordRegex,
      valid: validPassword2,
      setvalid: setValidPassword2,
      focus: password2Focus,
      setFocus: setPassword2Focus,
      type: "password",
      msg: "Doit contenir au moins 8 caractères, une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial.",
    },
    {
      name: "confirmPassword",
      state: password2,
      setState: setPassword,
      regex: PasswordRegex,
      valid: validPassword,
      setvalid: setValidPassword,
      focus: passwordFocus,
      setFocus: setPasswordFocus,
      type: "password",
      msg: "Doit contenir au moins 8 caractères, une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial.",
    },
  ];

  useEffect(() => {
    inputArray.forEach((element) => {
      const verif = element.regex.test(element.state);
      element.setvalid(verif);
    });
  }, [inputArray]);

  // useEffect(() => {
  //   const verif = userNameRegex.test(userName);
  //   setValidUserName(verif);
  // }, [userName]);

  // useEffect(() => {
  //   if (EmailRegex.test(email)) {
  //     setValidEmail(true);
  //   } else {
  //     setValidEmail(false);
  //   }
  // }, [email]);

  // const verifMail = (email)=>{
  //   let verif = EmailRegex.test(email);
  //   setEmail(email)
  //   if (verif) {
  //     setValidEmail(true)
  //   } else {
  //     setValidEmail(false)
  //   }
  // }

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Inscription</h2>
          <form>
            {inputArray.map((element, index) => {
              return <Input key={index}>{element}</Input>;
            })}

            <div className="d-flex mb-3 col-12 justify-content-between">
              <Link to={"/signin"}>Déjà un compte ?</Link>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={validEmail && validPassword ? true : true}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Inscription2;
