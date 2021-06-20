export const isLoading = (data: any): boolean => {
  return data.api_status.isLoading;
};

export const isValid = (data: any): boolean => {
  return data.api_status.isValid;
};

export const isEmpty = (data: any): boolean => {
  return data.api_status.isEmpty;
};

export const isError = (data: any): boolean => {
  return data.api_status.isError;
};
