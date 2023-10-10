import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import {useState} from 'react';

function Inscription() {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submit Inscription');
  };

  return (
    <Container className='text-center mycenter'>
    <Card style={{ width: '50%', padding:'15px' }}>
        <h2>Inscription</h2>
    <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>username</Form.Label>
        <Form.Control type="username" name="username" placeholder="username" 
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
          if(username.length < 4) {
            e.target.classList.add('is-invalid');
            document.getElementById('submit').setAttribute('disabled', '');
          } else {
            e.target.classList.remove('is-invalid');
            document.getElementById('submit').setAttribute('');
          }
        }}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Téléphone</Form.Label>
        <Form.Control type="tel" name="tel"  placeholder="Enter email" 
        value={tel}
        onChange={(e) => setTel(e.target.value)}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Mot de passe:</Form.Label>
        <Form.Control type="password" name="password" required 
        minLength="4" placeholder="Password" isInvalid={!isValid} 
        value={password}
        onChange={(e) => setPassword(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="password-repeat">
        <Form.Label>Répétez le mot de passe:</Form.Label>
        <Form.Control type="password" name="confirmPassword" required minLength="4" placeholder="Password" 
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
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
    </Container>
  );
}

export default Inscription;