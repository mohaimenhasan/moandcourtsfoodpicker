import * as React from "react";

import { useDencrypt } from "use-dencrypt-effect";

const values = ["Decision Maker", "Life Hacks"];

const Decrypter = () => {
  const { result, dencrypt } = useDencrypt();

  React.useEffect(() => {
    let i = 0;

    const action = setInterval(() => {
      dencrypt(values[i]);

      i = i === values.length - 1 ? 0 : i + 1;
    }, 3000);

    return () => clearInterval(action);
  }, []);

  return (<h1 style={{fontSize: '60px', color: '#FF5A5F'}}>{result}</h1>);
};

export default Decrypter;