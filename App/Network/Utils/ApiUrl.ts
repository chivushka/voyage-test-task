import {Config} from 'react-native-config';

const AUTH_URL = `${Config.REACT_APP_BASEURL}/auth`;
const NEW_BASE_URL = `${Config.REACT_APP_LOGIN_URL}/api/sso`;
const BASE_URL = NEW_BASE_URL;

const mainUrls = {
  authModule: {
    userLogin: `${NEW_BASE_URL}/jwt/token/`,
    userAuth0Login: `${Config.REACT_APP_LOGIN_URL}/api/sso/users/social/auth0/login/`,
    refreshToken: `${NEW_BASE_URL}/jwt/token/refresh/`,
    verifyToken: `${NEW_BASE_URL}/jwt/token/verify/`,
    userForgotPassword: `${NEW_BASE_URL}/users/password/forgot/`,
    userResetPassword: `${BASE_URL}/users/password/reset/`,
    projectRoles: `${BASE_URL}/projects/roles/`,
    userInvite: `${BASE_URL}/users/invite/`,
    userProjectList: `${BASE_URL}/projects/`,
    companyList: `${BASE_URL}/users/organization/suggestion/`,
    userSignup: `${BASE_URL}/users/signup/`,
    organizationData: `${BASE_URL}/users/activate/`,
    authUserApi: `${BASE_URL}/users/me/`,
    featureFlag: `${AUTH_URL}/feature-flags/`,
  },
  profileModule: {
    getProjectDetailsCall: `${BASE_URL}/projects/`,
    getProjectSettings: `${Config.REACT_APP_BASEURL}/v1/projects/settings/`,
    getAccountUserDetails: `${AUTH_URL}/users/me/`,
    getAccountUserPreferenceDetails: `${Config.REACT_APP_BASEURL}/v1/users/mypreference`,
    getLanguages: `${Config.REACT_APP_BASEURL}/v1/preferences/language/`,
    getDateFormates: `${Config.REACT_APP_BASEURL}/v1/preferences/date/format/`,
    getTimeFormates: `${Config.REACT_APP_BASEURL}/v1/preferences/time/format/`,
    getCalenderDays: `${Config.REACT_APP_BASEURL}/v1/preferences/calender/days/`,
    addUserDetail: `${BASE_URL}/users/me/`,
    userUpdatePassword: `${BASE_URL}/users/password/change/`,
    getOrganizationDetails: `${BASE_URL}/organizations/me/`,
    getUserList: `${BASE_URL}/organizations/users/`,
    getOrganizationRoleList: `${BASE_URL}/organizations/roles/list/`,
    updateOrgRole: `${BASE_URL}/organizations/role/update/`,
    removeUserFromOrg: `${BASE_URL}/organizations/user/remove/`,
    updateOrganizationDetails: `${BASE_URL}/organizations/`,
    getBookingDetailData: `${Config.REACT_APP_BASEURL}/v1/booking-fields/`,
  },
  siteManagement: {
    getSiteList: `${Config.REACT_APP_BASEURL}/v1/sites/`,
    getListProject: `${Config.REACT_APP_BASEURL}/v1/projects/`,
    getListAccessPoint: `${Config.REACT_APP_BASEURL}/v1/projects/access-point/`,
    getSiteDetail: `${BASE_URL}/projects/`,
    getContactList: `${Config.REACT_APP_BASEURL}/v1/projects/contacts/`,
    getResourceList: `${Config.REACT_APP_BASEURL}/v1/projects/resource/`,
    getTimes: `${Config.REACT_APP_BASEURL}/v1/legacy/time/`,
    getSite: `${Config.REACT_APP_BASEURL}/v1/sites/`,
    getSiteAvailablity: `${Config.REACT_APP_BASEURL}/v1/projects/sites/availability/`,
  },
  Availability: {
    getResourceList: `${BASE_URL}/projects/resource/`,
    getAvailablity: `${BASE_URL}/availability/`,
    getTimes: `${Config.REACT_APP_BASEURL}/v1/legacy/time/`,
    addSiteBreak: `${BASE_URL}/projects/sites/`,
  },
  UserManagement: {
    getUserList: `${BASE_URL}/users/`,
    getUserdetailbyid: `${BASE_URL}/users/`,
    postUserdetail: `${BASE_URL}/users/`,
    organization: `${BASE_URL}/organizations/`,
    updateProjectRole: `${BASE_URL}/projects/role/update/`,
  },
  booking: {
    reserveSlots: `${Config.REACT_APP_BASEURL}/v1/bookings/slots/reserve/`,
    getVehicleTypes: `${Config.REACT_APP_BASEURL}/v1/booking-fields/vehicle-type/`,
    getBookingList: `${Config.REACT_APP_BASEURL}/v1/bookings/`,
    getListOfBookings: `${Config.REACT_APP_BASEURL}/v1/bookings/list/`,
    getBookingAttachments: `${Config.REACT_APP_BASEURL}/v1/booking-fields/attachments/`,
    getAuditLog: `${Config.REACT_APP_BASEURL}/v1/auditlog/booking/`,
    createBooking: `${Config.REACT_APP_BASEURL}/v1/bookings/`,
    bookingFields: `${Config.REACT_APP_BASEURL}/v1/booking-fields/`,
    uploadFlexFiles: `${Config.REACT_APP_BASEURL}/v1/booking-fields/attachments/`,
    getCalendarBookingList: `${Config.REACT_APP_BASEURL}/v1/bookings/calendar/`,
    undoStatus: `${Config.REACT_APP_BASEURL}/v1/bookings/`,
  },
  notifications: {
    defaultPreference: `${BASE_URL}/notifications/preferences/me`,
  },
  default: {
    default: `${Config.REACT_APP_BASEURL}/v1`,
  },
};

export const ApiUrl = mainUrls;

export const getUrl = (url1: string, url2: string, site: any) => {
  return url1 + site + url2;
};
