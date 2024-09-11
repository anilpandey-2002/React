const ErrorMessage = ({ items }) => {
  return <>{items.length === 0 && <h3>I am hungry what to eat!</h3>}</>;
};
export default ErrorMessage;
