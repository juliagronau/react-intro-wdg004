const Hallo = ({ name }) => {
  // console.log(props.name);
  // return (
  //   <div>Hallo {props.name}</div>
  // )

  console.log(name);
  const handleClick = () => {
    alert(`Hallo ${name}`);
  };
  return (
    <>
      <div>Hallo {name}</div>
      <button onClick={handleClick}>Sag Hallo</button>
    </>
  );
};

export default Hallo;
