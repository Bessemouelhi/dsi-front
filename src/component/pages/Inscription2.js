import { Button, Form, Card, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Inscription2() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    tel: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  const validations = {
    username: value => /^(?=.{4,24}$)(?=.*[a-zA-Z])[a-zA-Z0-9]*$/.test(value) || "Entre 4 et 24 caractères. Commence par une lettre. Pas de caractère spécial.",
    email: value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || "L'adresse mail doit avoir le bon format.",
    tel: value => /^(0\d)(?:[\s-]?(\d{2})){4}$/.test(value) || "Le numéro de téléphone doit avoir le bon format.",
    password: value => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#]).{8,}$/.test(value) || "Doit contenir au moins 8 caractères, au moins 1 majuscule, 1 minuscule, 1 chiffre et 1 caractère spécial.",
    confirmPassword: value => value === formData.password || "Les mots de passe doivent correspondre."
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));

    const error = validations[name](value);
    setErrors(prevState => ({ ...prevState, [name]: typeof error === "string" ? error : undefined }));
  };

  const isFormValid = () => Object.values(validations).every(validation => validation(formData[name]) === true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      console.log('Submit Inscription');
      navigate('/account');
    }
  };

  return (
    <Container className='text-center mycenter'>
      <Card style={{ width: '50%', padding: '15px' }}>
        <h2>Inscription</h2>
        <Form onChange={handleInputChange} onSubmit={handleSubmit}>
          {["username", "email", "tel", "password", "confirmPassword"].map(name => (
            <Form.Group key={name} className="mb-3" controlId={`formBasic${name}`}>
              <Form.Label>{name}</Form.Label>
              <Form.Control
                type={name}
                name={name}
                placeholder={name}
                value={formData[name]}
                isInvalid={!!errors[name]}
              />
              {errors[name] && <div className="invalid-feedback">{errors[name]}</div>}
            </Form.Group>
          ))}
          <Button id="submit" variant="primary" type="submit" disabled={!isFormValid()}>
            Envoyer
          </Button>
        </Form>
      </Card>
      <Link to="/signin">Déjà un compte ?</Link>
    </Container>
  );
}

export default Inscription2;
