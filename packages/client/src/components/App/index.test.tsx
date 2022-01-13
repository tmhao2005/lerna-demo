import React from "react";
import {
  render, fireEvent, waitFor, prettyDOM
} from '@testing-library/react';
import { App } from ".";

it('should work normally', async () => {
  const { container } = render(
    <App />
  );

  console.log(prettyDOM(container));
});
