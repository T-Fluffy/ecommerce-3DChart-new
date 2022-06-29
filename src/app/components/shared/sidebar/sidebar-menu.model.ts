// export class SidenavMenu {
//   constructor(public id: number,
//               public title: string,
//               public routerLink: string,
//               public href: string,
//               public target: string,
//               public hasSubMenu: boolean,
//               public parentId: number) { }
// }
export interface SidenavMenu {
  displayName: string;
  disabled?: boolean;
  iconName: string;
  route?: string;
  children?: SidenavMenu[];
}
