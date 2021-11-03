import logo from '../../assets/logo.svg';
import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <img src={logo} alt="dt money" />
      <button type="button">Nova Transação</button>
    </Container>
  )
}