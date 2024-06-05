import React, { FC } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

type SpreadProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  keyof Props
>;

const Button: FC<Props & SpreadProps> = ({
  children,
  onClick,
  className,
  ...rest
}) => {
  return (
    <button onClick={onClick} className={className} {...rest}>
      {children}
    </button>
  );
};

export default Button;
