import React, { useEffect } from "react";
import { useState } from "react";

export default function CounterState() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Houveram: ${count} cliques`;
  });

  return (
    <React.Fragment>
      <p>Houveram {count}</p>
      <button onClick={() => setCount(count + 1)}>Aumentar cliques</button>
    </React.Fragment>
  );
}
