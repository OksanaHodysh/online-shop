import { InjectionToken } from '@angular/core';

export const RANDOM_STRING = new InjectionToken<any[]>('Random String Generator');

export function RandomLengthStringFactory(strLen: number) {
  return (): string => {
    // Смысл фабрики заключается в том, что у вас есть сервис, который выполнет код, описанный ниже в одном из своих методов,
    // в который передается параметр.
    // А фабрика использует этот сервис возвращает результат работы этого сервис с зарегистрированным значением параметра в providers
    const allowedChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    for (let i = 0; i < strLen; i++) {
      result += allowedChars.charAt(Math.floor(Math.random() * strLen));
    }
    return result;
  };
}

