import React, { FC } from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
};

type SpreadProps = Omit<
  React.HtmlHTMLAttributes<HTMLLabelElement>,
  keyof Props
>;

const LabelField: FC<Props & SpreadProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <label className={className} {...rest}>
      {children}
    </label>
  );
};

export default LabelField;
