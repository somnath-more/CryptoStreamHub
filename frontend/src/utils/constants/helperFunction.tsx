import Bitcoin from '../../../public/assets/icons/Bitcoin.svg';
import {
  CRYPTO_NAME_LIST,
  CRYPTO_SYMBOL_LIST,
  CRYPTO_ID_LIST,
  CRYPTO_ICONS,
  CRYPTO_ICONS_BY_NAME,
  CRYPTO_KEY_LIST,
} from '.';

export const validateEmailFormat = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const evaluatePasswordStrength = (password: string) => {
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
};
// Define a type for the keys of CRYPTO_ICONS
type CryptoKey = keyof typeof CRYPTO_ICONS;

export const getCryptoIconById = (cryptokey: CryptoKey) => {
  if (cryptokey in CRYPTO_ICONS) {
    return CRYPTO_ICONS[cryptokey];
  }

  return Bitcoin;
};

type CRYPTO_ICONS_BY_NAME_KEY = keyof typeof CRYPTO_ICONS_BY_NAME;

export const getCryptoIconByName = (cryptoName: CRYPTO_ICONS_BY_NAME_KEY) => {
  if (cryptoName in CRYPTO_ICONS_BY_NAME) {
    return CRYPTO_ICONS_BY_NAME[cryptoName];
  }

  return Bitcoin;
};
type CRYPTO_NAME_LIST_KEY = keyof typeof CRYPTO_NAME_LIST;
export const getCryptoNameById = (cryptoKey: CRYPTO_NAME_LIST_KEY) => {
  if (cryptoKey in CRYPTO_NAME_LIST) {
    return CRYPTO_NAME_LIST[cryptoKey];
  }

  return cryptoKey.toUpperCase();
};
type CRYPTO_SYMBOL_LIST_KEY = keyof typeof CRYPTO_SYMBOL_LIST;
export const getCryptoSymbolById = (cryptoKey: CRYPTO_SYMBOL_LIST_KEY) => {
  if (cryptoKey in CRYPTO_SYMBOL_LIST) {
    return CRYPTO_SYMBOL_LIST[cryptoKey];
  }

  return cryptoKey.toUpperCase();
};
type CRYPTO_ID_LIST_KEY = keyof typeof CRYPTO_ID_LIST;
export const getCryptoIdByKey = (
  cryptoKey: CRYPTO_ID_LIST_KEY,
  index: number
) => {
  if (cryptoKey in CRYPTO_ID_LIST) {
    return CRYPTO_ID_LIST[cryptoKey];
  }

  return index;
};
type CRYPTO_KEY_LIST_KEY = keyof typeof CRYPTO_KEY_LIST;
export const getCryptoKeyById = (id: CRYPTO_KEY_LIST_KEY) => {
  if (id in CRYPTO_KEY_LIST) {
    return CRYPTO_KEY_LIST[id];
  }
};

export const formatCurrentDate = (currentDate: Date): string => {
  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const day = currentDate.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const formattedBalance = (totalBalance: number | undefined) => {
  return totalBalance?.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};
