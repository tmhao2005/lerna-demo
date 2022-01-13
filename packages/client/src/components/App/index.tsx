import React from "react";
import { IntlProvider } from "react-intl";

import "@tmhao/share/dist/index.css"
import { Message, Button } from "@tmhao/share";
import { Thing } from "@tmhao/tsdx";

export const App: React.FC = () => {
  return (
    <IntlProvider locale="vi" messages={{ "hello": "Xin chao" }}>
      <Message />
      <Button>Button 1</Button>
      <Thing />
    </IntlProvider>
  )
};
