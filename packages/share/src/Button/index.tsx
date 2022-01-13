// import Button from "antd/lib/button";
import React from "react";
// import './index.css';

console.log('The client React version', React.version);

// export { Button };
export const Button: React.FC = ({children}) => <button>
  {children}
</button>
