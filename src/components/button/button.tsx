import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick: () => void;
}

/**
 * A button
 */
const Button: FC<Props> = ({ children, onClick }) => (
  <button onClick={onClick}>{children}</button>
);

export default Button;
