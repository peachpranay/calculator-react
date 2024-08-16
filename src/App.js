
import './App.css';
import React, { useState } from 'react';

function App() {
  const [value, setValue] = useState('');

  const handleCalculation = () => {
    try {
      setValue(eval(value).toString()); 
    } catch (error) {
      setValue('Error!');
    }
  };

  const handleClear = () => {
    if (value === '' || value === 'Error!') {
      setValue('Error!');
    } else {
      setValue('');
    }
  };

  const handleDelete = () => {
    if (value === 'Error!' || value.length === 0) {
      setValue('Error!');
    } else {
      setValue(value.slice(0, -1));
    }
  };

  return (
    <div className="Container">
      <div className="Calculator">
        <form>
          <div>
            <input type="text" value={value} readOnly />
          </div>
          <div>
            <input type="button" value="AC" onClick={handleClear} />
            <input type="button" value="DE" onClick={handleDelete} />
            <input type="button" value="." onClick={(e) => setValue(value + e.target.value)} />
            <input type="button" value="*" onClick={(e) => setValue(value + e.target.value)} />
          </div>
          <div>
            <input type="button" value="7" onClick={(e) => setValue(value + e.target.value)} />
            <input type="button" value="8" onClick={(e) => setValue(value + e.target.value)} />
            <input type="button" value="9" onClick={(e) => setValue(value + e.target.value)} />
            <input type="button" value="/" onClick={(e) => setValue(value + e.target.value)} />
          </div>
          <div>
            <input type="button" value="4" onClick={(e) => setValue(value + e.target.value)} />
            <input type="button" value="5" onClick={(e) => setValue(value + e.target.value)} />
            <input type="button" value="6" onClick={(e) => setValue(value + e.target.value)} />
            <input type="button" value="-" onClick={(e) => setValue(value + e.target.value)} />
          </div>
          <div>
            <input type="button" value="1" onClick={(e) => setValue(value + e.target.value)} />
            <input type="button" value="2" onClick={(e) => setValue(value + e.target.value)} />
            <input type="button" value="3" onClick={(e) => setValue(value + e.target.value)} />
            <input type="button" value="+" onClick={(e) => setValue(value + e.target.value)} />
          </div>
          <div>
            <input type="button" value="0" onClick={(e) => setValue(value + e.target.value)} />
            <input type="button" value="00" onClick={(e) => setValue(value + e.target.value)} />
            <input type="button" value="=" className="Equal" onClick={handleCalculation} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
