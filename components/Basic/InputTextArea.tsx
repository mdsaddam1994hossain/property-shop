import React, { FC } from "react";

type Props = {
  className?: string;
};

type SpreadProps = Omit<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  keyof Props
>;

const InputTextArea: FC<Props & SpreadProps> = ({ className, ...rest }) => {
  return <textarea className={className} {...rest} />;
};

export default InputTextArea;
