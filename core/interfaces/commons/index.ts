import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';

import { BasePropsInterface } from './BaseProps.interface';

export interface InterfaceCustomCollapse extends BasePropsInterface {
  titleClassName?: string;
  titleSx?: SxProps<Theme>;
  title?: React.ReactNode;
}
