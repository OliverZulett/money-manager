export const sidebarMenu: MenuItem[] = [
  {
    label: 'Casos',
    link: '/dashboard/cases',
    icon: 'fa-users-line',
  },
  {
    label: 'Money Manager',
    link: '/dashboard/mm',
    icon: 'fa-people-group',
  },
];

export interface MenuItem {
  label: string;
  link: string;
  icon?: string;
}
