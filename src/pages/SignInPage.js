import { useContext, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Button, Container, Form, Input, StyledLink } from "../components/FormComponents/index"
import Logo from "../components/Logo"
import AuthContext from "../contexts/AuthContext";
import api from "../services/api";

function SignInPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [disabled, setDisabled] = useState(false)
  const { setAuth } = useContext(AuthContext)
  let navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    setDisabled(true)

    const promise = api.signIn({ email, password })

    promise.then(response => {
      setAuth(response.data)
      navigate("/")
    }).catch(error => {
      Swal.fire({ icon: 'error', text: error.response.data })
      setDisabled(false)
    })
  }

  return (
    <Container>
      <Logo />
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          disabled={disabled}
        />
        <Input
          type="password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          disabled={disabled}
        />
        <Button type="submit" disabled={disabled}>
          {disabled ?
            <ThreeDots color="#FFF" height={50} width={50} />
            :
            "Entrar"
          }
        </Button>
      </Form>
      <StyledLink to="/cadastro">Primeira vez? Cadastre-se</StyledLink>
    </Container>
  )
}

export default SignInPage;