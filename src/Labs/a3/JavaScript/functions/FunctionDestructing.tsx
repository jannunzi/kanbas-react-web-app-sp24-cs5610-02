const add = (a: number, b: number) => a + b;
const subtract = ({ a, b }: { a: number; b: number }) => a - b;
const multiply = ({ c, d }: { c: number; d: number }) => c * d;

function FunctionDestructing() {
  const sum = add(1, 2);
  const difference = subtract({ a: 4, b: 2 });
  //   const params = { c: 3, d: 4 };
  const product = multiply({ c: 3, d: 4 });

  return (
    <div>
      <h2>Function Destructing</h2>
      const add = (a, b) =&gt; a + b;
      <br />
      const sum = add(1, 2);
      <br />
      const subtract = (&#123; a, b &#125;) =&gt; a - b;
      <br />
      const difference = subtract(&#123; a: 4, b: 2 &#125;);
      <br />
      sum = {sum}
      <br />
      difference = {difference}
    </div>
  );
}
export default FunctionDestructing;
