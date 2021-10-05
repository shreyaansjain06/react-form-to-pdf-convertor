import React, { useRef } from 'react';
import { render } from 'react-dom';
import { useReactToPrint } from 'react-to-print';
import Form from "./components/Form"

const App = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div>
      <Form ref={componentRef} handlePrint={handlePrint} />
    </div>
  );
};
render(<App />, document.querySelector('#root'));
