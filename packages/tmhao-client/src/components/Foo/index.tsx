import { isNumber } from "@tmhao/helper/dist/isNumber";
import * as React from "react";

interface Props {
  value: string | number
}

export const Foo: React.SFC<Props> = ({ value }) => <div>{isNumber(value) ? "Number" : "String"}</div>;
