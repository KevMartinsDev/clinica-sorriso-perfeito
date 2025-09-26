import { NAVIGATION_LINKS } from './constants';

export const navigationItems = NAVIGATION_LINKS;

export const getActiveRoute = (currentPath) => {
  return navigationItems.find(item => item.path === currentPath) || navigationItems[0];
};

export const isActiveRoute = (itemPath, currentPath) => {
  if (itemPath === '/') {
    return currentPath === '/';
  }
  return currentPath.startsWith(itemPath);
};