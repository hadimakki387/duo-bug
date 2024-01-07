import { ReactNode } from "react";

export interface DropdownValue {
  value: any;
  label: string;
  group?: string;
  priority?: number;
}

export interface IconProps extends React.SVGAttributes<HTMLOrSVGElement> {
  size?: number;
}

export type AccordionType = {
  title: ReactNode | string;
  content: ReactNode | string;
  id: string;
};