import { useState } from "react";
import { Button, Container, Form, Input, Page, StyledLink } from "../components/FormComponents/index"
import Logo from "../components/Logo"

function SignInPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <Page>
      <Logo />
      <Container>
        <Form>
          <Input
            type="email"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Input
            type="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <Button>Entrar</Button>
        </Form>
        <StyledLink to="/register">Primeira vez? Cadastre-se</StyledLink>
      </Container>

    </Page>


  )

}

export default SignInPage;