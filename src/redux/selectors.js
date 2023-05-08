export const getUserEmail = state => state.auth.user.email;

export const getContacts = state => state.contacts.items;
export const getIsLoading = state => state.contacts.isLoading;
export const getFilter = state => state.filter;
