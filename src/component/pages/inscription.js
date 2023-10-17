import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import {useState} from 'react';
import { useNavigate  } from 'react-router-dom';

function Inscription() {

  const navigate = useNavigate();

  function isValidUsername(username) {
    // - Entre 4 et 24 caractères : ^.{4,24}$
    // - Commence par une lettre : ^[a-zA-Z]
    // - Comporte au moins une lettre : (?=.*[a-zA-Z])
    // - Aucun caractère spécial : /^[a-zA-Z0-9]+$/
    const regex = /^(?=.{4,24}$)(?=.*[a-zA-Z])[a-zA-Z0-9]*$/;
    console.log('isValidUsername : ' + regex.test(username));
    return regex.test(username);
}

  function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log('isValidEmail : ' + regex.test(email));
    return regex.test(email);
}

function isValidPhone(phone) {
  const regex = /^(0\d)(?:[\s-]?(\d{2})){4}$/;
  console.log('isValidPhone : ' + regex.test(phone));
  return regex.test(phone);
}

function isValidPassword(password) {
  // - Au moins 8 caractères: .{8,}
  // - Au moins 1 lettre majuscule: (?=.*[A-Z])
  // - Au moins 1 lettre minuscule: (?=.*[a-z])
  // - Au moins 1 chiffre: (?=.*\d)
  // - Au moins 1 caractère spécial: (?=.*[@$!%*?&#])
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#]).{8,}$/;
  console.log('isValidPassword : ' + regex.test(password));
  return regex.test(password);
}

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isValid, setIsValid] = useState(false);

  function checkForm() {
    if (isValidUsername(username) && isValidEmail(email) && isValidPhone(tel) && isValidPassword(password)) {// (password === confirmPassword)
      document.getElementById('submit').removeAttribute('disabled');
      setIsValid(true);
      console.log('(password === confirmPassword) : ' + (password === confirmPassword));
      console.log('checkForm : ' + true);
      return true;
    }
    console.log('checkForm : ' + false);
    return false;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submit Inscription');
    checkForm()
    navigate('/account');
  
  };

  return (
    <Container className='text-center mycenter'>
    <Card style={{ width: '50%', padding:'15px' }}>
        <h2>Inscription</h2>
    <Form onChange={checkForm} onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>username</Form.Label>
        <Form.Control type="username" name="username" placeholder="username" 
        value={username}
        onChange={(e) => {
          const newVal = e.target.value;
          setUsername(newVal);
          if(!isValidUsername(newVal)) {
            e.target.classList.add('is-invalid');
            document.getElementById('submit').setAttribute('disabled', '');
          } else {
            e.target.classList.remove('is-invalid');
            document.getElementById('submit').removeAttribute('disabled');
          }
          //checkForm();
        }}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" 
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if(!isValidEmail(email)) {
            e.target.classList.add('is-invalid');
            document.getElementById('submit').setAttribute('disabled', '');
          } else {
            e.target.classList.remove('is-invalid');
            document.getElementById('submit').removeAttribute('disabled');
          }
          //checkForm();
        }}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicTel">
        <Form.Label>Téléphone</Form.Label>
        <Form.Control type="tel" name="tel"  placeholder="Téléphone" 
        value={tel}
        onChange={(e) => {
          setTel(e.target.value);
          if(!isValidPhone(tel)) {
            e.target.classList.add('is-invalid');
            document.getElementById('submit').setAttribute('disabled', '');
          } else {
            e.target.classList.remove('is-invalid');
            document.getElementById('submit').removeAttribute('disabled');
          }
          //checkForm();
        }}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Mot de passe:</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" 
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          if(!isValidPassword(password)) {
            e.target.classList.add('is-invalid');
            document.getElementById('submit').setAttribute('disabled', '');
          } else {
            e.target.classList.remove('is-invalid');
            document.getElementById('submit').removeAttribute('disabled');
          }
          //checkForm();
        }}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="password-repeat">
        <Form.Label>Répétez le mot de passe:</Form.Label>
        <Form.Control type="password" name="confirmPassword" placeholder="Password" 
        value={confirmPassword}
        onChange={(e) => {
          setConfirmPassword(e.target.value);
          if(password !== confirmPassword) {
            e.target.classList.add('is-invalid');
            document.getElementById('submit').setAttribute('disabled', '');
          } else {
            e.target.classList.remove('is-invalid');
            document.getElementById('submit').removeAttribute('disabled');
          }
          //checkForm();
        }}/>
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <Button id="submit" variant="primary" type="submit">
        Envoyer
      </Button>
    </Form>
    </Card>
    <Link to="/signin">Déjà un compte ?</Link>
    
    {username.length > 0 & username.length < 4 ? 
                <div className="mt-2 alert alert-danger">
                    Entre 4 et 24 caractères.
                    Doit commencer par une lettre.
                    Doit comporter au moins une lettre et aucun caractère spécial.
                </div> 
                : null}

    {email.length > 0 & !isValidEmail(email) ? 
                    <div className="mt-2 alert alert-danger">
                    L'adresse mail doit avoir le bon format.
                </div> 
                    : null}

{tel.length > 0 & !isValidPhone(tel) ? 
                    <div className="mt-2 alert alert-danger">
                    le numero de téléphone doit avoir le bon format.
                </div> 
                    : null}

{password.length > 0 & !isValidPassword(password) ? 
                    <div className="mt-2 alert alert-danger">
                    le mot de passe doit contenir au moins 8 caractères.
                    le mot de passe doit comporter au moins 1 lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial.
                </div> 
                    : null}

{confirmPassword.length > 0 & confirmPassword !== password ? 
                    <div className="mt-2 alert alert-danger">
                    les mot de passe doivent correspondre.
                </div> 
                    : null}
    </Container>
  );
}

export default Inscription;