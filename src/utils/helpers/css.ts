import type React from 'react';

import clsx, { type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const css = (...classes: ClassValue[]) => {
  return twMerge(clsx(classes));
};

interface StyleSheet extends React.CSSProperties {
  [key: `--${string}`]: string | number | undefined;
}

export const style = (prop: StyleSheet) => prop as React.CSSProperties;
