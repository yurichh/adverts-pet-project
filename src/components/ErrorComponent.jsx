const ErrorComponent = ({ error }) => {
  return (
    <div
      style={{
        textAlign: 'center',
        fontSize: 40,
        marginTop: 250,
      }}
    >
      Ooops... We can't get any contacts
      <p style={{ marginTop: 30 }}>{error}</p>
    </div>
  );
};

export default ErrorComponent;
