export interface LoginResponce {
  url: string;
  token: string;
  user: User;
}

interface User {
  id: number;
  company: string;
  venues: Venue[];
  firstName: string;
  lastName: string;
  phone?: any;
  mobile: string;
  showTips?: any;
  address1: string;
  address2: string;
  city: string;
  country: string;
  postcode: string;
  email: string;
  scacCode?: any;
  sections: string[];
  permissions: string[];
  userRole: string;
  companyRole: string;
  companyId: string;
  languageCode?: any;
}

interface Venue {
  name: string;
  urlComponent: string;
  url: string;
  token: string;
}
