// src/app/utils/caesarCipher.ts
export function caesarCipher(message: string, direction: 'left' | 'right', shift: number): string {
  if (direction === 'left') {
    shift = 26 - (shift % 26);
  }

  return message
    .split('')
    .map(char => {
      const code = char.charCodeAt(0);

      if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
        const offset = code >= 97 ? 97 : 65;
        return String.fromCharCode(((code - offset + shift) % 26) + offset);
      }

      return char;
    })
    .join('');
}