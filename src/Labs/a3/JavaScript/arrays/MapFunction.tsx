const square = (a: number) => a * a;

const squareLi = (a: number, index: number) => (
  <li key={index}>
    {a} * {a} = {a * a}
  </li>
);

function MapFunction() {
  let numberArray1 = [1, 1, 2, 3, 3, 4, 5, 6];

  const squares = numberArray1.map(square);
  const cubes = numberArray1.map((a) => a * a * a);
  const squareLis = numberArray1.map(squareLi);

  return (
    <>
      <h4>Map Function</h4>
      numberArray1 = {numberArray1}
      <br />
      squares = {squares}
      <br />
      cubes = {cubes}
      <br />
      <ul>{squareLis}</ul>
      <ol>
        {numberArray1.map((a, index) => (
          <li key={index}>{a * a}</li>
        ))}
      </ol>
    </>
  );
}

export default MapFunction;
