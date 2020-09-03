import { Message } from "@tmhao/helper";
import React from "react";
import { IntlProvider } from "react-intl";

interface Props {
  value: string | number
}

export const Foo: React.SFC<Props> = ({ value }) => {
  return (
    <IntlProvider locale="vi" messages={{ "hello": "Xin chao" }}>
      <Message />
    </IntlProvider>
  )
};
