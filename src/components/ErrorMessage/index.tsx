import { Container, Alert } from 'react-bootstrap';

export function ErrorMessage({ text }: { text: string }) {
  return (
    <Container>
      <Alert variant="danger">{text}</Alert>
    </Container>
  );
}
