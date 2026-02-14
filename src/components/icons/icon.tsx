import { ark, type HTMLArkProps } from '@ark-ui/react';

export type IconProps = HTMLArkProps<'svg'> & {
  size?: string | number;
};

export const Icon = (props: React.PropsWithChildren<IconProps>) => {
  const { width = '1em', height = '1em', size, ...rest } = props;

  return (
    <ark.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 18"
      width={size ?? width}
      height={size ?? height}
      role="img"
      {...rest}
    />
  );
};
