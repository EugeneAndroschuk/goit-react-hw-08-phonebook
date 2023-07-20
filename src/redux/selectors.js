export const getUserEmail = state => state.auth.user.email;
export const getUserIsLoggedIn = state => state.auth.isLoggedIn;
export const getUserIsRefreshing = state => state.auth.isRefreshing;
export const getUserTheme = state => state.auth.theme;
export const getUserError = state => state.auth.error;
export const getUserRegistered = state => state.auth.isRegistered;

export const getContacts = state => state.contacts.items;
export const getIsLoading = state => state.contacts.isLoading;
export const getFilter = state => state.filter;
