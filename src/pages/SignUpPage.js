import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Button, Container, Form, Input, StyledLink } from "../components/FormComponents/index"
import Logo from "../components/Logo"
import api from "../services/api";

function SignUpPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [disabled, setDisabled] = useState(false)
  let navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    setDisabled(true)

    if (password !== confirmPassword) {
      Swal.fire({ icon: 'error', text: "As senhas não são iguais" })
      setDisabled(false)
      return
    }

    if (password.length < 6) {
      Swal.fire({ icon: 'error', text: "A senha deve ter no mínimo seis caracteres" })
      setDisabled(false)
      return
    }

    try {
      await api.signUp({ name, email, password })
      navigate("/login")
    } catch (error) {
      Swal.fire({ icon: 'error', text: error.response.data })
      setDisabled(false)
    }
  }

  return (
    <Container>
      <Logo />
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
          disabled={disabled}
        />
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
        <Input
          type="password"
          placeholder="Confirme a senha"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
          disabled={disabled}
        />
        <Button type="submit" disabled={disabled}>
          {disabled ?
            <ThreeDots color="#FFF" height={50} width={50} />
            :
            "Cadastrar"
          }
        </Button>
      </Form>
      <StyledLink to="/login">Já tem uma conta? Entre agora!</StyledLink>
    </Container>
  )

}

export default SignUpPage;