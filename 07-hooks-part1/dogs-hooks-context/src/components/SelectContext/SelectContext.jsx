import { createContext, useState } from 'react';

export const SelectContext = createContext();

const SelectContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [images, setImages] = useState([]);
  const handleSelect = ({ target: { value } }) =>
    setCount(value);

  return (
    <SelectContext.Provider
      value={{ count, handleSelect, images, setImages }}>
      {children}
    </SelectContext.Provider>
  );
};
export default SelectContextProvider;

// const Modal = ({ prop }) => {
//   return (
//     <div>
//       <Img prop={prop} />
//     </div>
//   );
// };
// const Img = ({ prop }) => {
//   return (
//     <div>
//       <MyImg prop={prop} />
//     </div>
//   );
// };
