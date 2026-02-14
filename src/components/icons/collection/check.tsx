import { Icon, type IconProps } from '../icon';

export const Check = (props: IconProps) => {
  return (
    <Icon {...props}>
      <g fill="currentColor">
        <polyline
          points="2.75 9.25 6.75 14.25 15.25 3.75"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
      </g>
    </Icon>
  );
};
