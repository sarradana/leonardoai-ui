export const getUserInfoFromStorage = (): import('./types').UserInfo | null => {
  if (typeof window === 'undefined') return null;
  const stored = localStorage.getItem('userInfo');
  if (!stored) return null;
  try {
    return JSON.parse(stored);
  } catch {
    return null;
  }
};

export const setUserInfoToStorage = (userInfo: import('./types').UserInfo) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem('userInfo', JSON.stringify(userInfo));
};

