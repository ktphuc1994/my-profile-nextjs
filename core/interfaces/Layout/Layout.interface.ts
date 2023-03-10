import { BasePropsInterface } from '../commons/BaseProps.interface';

export interface InterfaceLayout extends BasePropsInterface {
  title?: string;
  description?: string;
  icon?: string;
}

export interface InterfaceHeader extends BasePropsInterface {
  handleSidebarToggle: () => void;
}

export interface InterfaceSidebar extends BasePropsInterface {
  isMobileOpen: boolean;
  handleSidebarClose: () => void;
}

// export interface InterfaceNavigation extends BasePropsInterface {
//   toggleSidebar: (open: boolean) => void;
// }
