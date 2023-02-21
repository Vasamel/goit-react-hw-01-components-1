export function GetRandomColor() {
  // Генеруємо випадкове число від 0 до 255 для червоного, зеленого та синього каналів
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  
  // Перевіряємо, чи отриманий колір не чорний
  if (red === 0 && green === 0 && blue === 0) {
    // Якщо отримали чорний колір, генеруємо новий
    return GetRandomColor();
  }
  
  // Перетворюємо отримані значення в формат HEX
  const hexRed = red.toString(16).padStart(2, '0');
  const hexGreen = green.toString(16).padStart(2, '0');
  const hexBlue = blue.toString(16).padStart(2, '0');
  const hexColor = `#${hexRed}${hexGreen}${hexBlue}`;
  
  // Повертаємо отриманий колір у форматі HEX
  return hexColor;
}
  