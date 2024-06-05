import React, { FC } from "react";

type Props = {
  className?: string;
  type?: string;
};

type SpreadProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  keyof Props
>;

const InputText: FC<Props & SpreadProps> = ({ type, className, ...rest }) => {
  return <input type={type} className={className} {...rest} />;
};

export default InputText;
