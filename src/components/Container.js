import Box from "./Box";

function Container() {
  var length = [...Array(25).keys()];

  return (
    <>
    <div id="container">
      {length.map((index) => {
        return <Box key={index} />;
      })}
    </div>
    </>
  );
}

export default Container;
