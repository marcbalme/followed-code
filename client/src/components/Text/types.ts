import { ReactNode } from 'react';

export interface TextPropsTypes {
  children?: ReactNode | string;
  theme?: string;
  bold?: boolean;
  italic?: boolean;
  align?: string;
  size: string;
  customStyle?: Object;
  multiline: boolean;
}
