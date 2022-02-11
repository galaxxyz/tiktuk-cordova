import { Spinner } from 'react-bootstrap';

export function Loader() {
  return (
    <div className="text-center pt-5">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}
