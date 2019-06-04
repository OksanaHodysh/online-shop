import { InjectionToken } from '@angular/core';

export const RANDOM_STRING = new InjectionToken<any[]>('Random String Generator');

export function RandomLengthStringFactory(strLen: number) {
  return (): string => {
    const allowedChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    for (let i = 0; i < strLen; i++) {
      result += allowedChars.charAt(Math.floor(Math.random() * strLen));
    }
    return result;
  };
}
