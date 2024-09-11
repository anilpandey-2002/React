const ErrorMessage = ({ items }) => {
  return <>{items.length === 0 && <h3>hungry</h3>}</>;
};
export default ErrorMessage;
