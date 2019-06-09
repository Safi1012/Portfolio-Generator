export const validateDirection = (direction = '') => {
  const lowerCaseDirection = direction.toLocaleLowerCase()

  if (['top', 'bottom', 'left', 'right'].includes(lowerCaseDirection)) {
    return lowerCaseDirection
  }
  return 'right';
}

export const validateColor = (color = '', fallbackColorInHex = '#FFF') => {
  const hexRegex = /^[0-9a-fA-F]{3,8}$/

  color.replace('\\', '');
  color.replace('#', '');

  if (hexRegex.test(color)) {
    return '#' + color;
  }

  return fallbackColorInHex;
}

