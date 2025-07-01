export interface UserData {
  id: number;
  ref: string;
  isAdmin: boolean;
  isGlobalAdminUser: boolean;
  email: string;
  isActive: boolean;
  projectList: ProjectList[];
  lastLogin: string;
  createdAt: string;
  modifiedAt: string;
  projects: UserProject[];
  name: string;
}

export interface UserProject {
  id: number;
  logoImage: string | null;
  name: string;
  organization: any;
  platform: any;
  ref: string;
  region: any;
  role: any;
  slug: string;
  timezone: string;
}

interface ProjectList {
  id: number;
  ref: string;
  name: string;
  awsRegion: AwsRegion;
  createdAt: string;
  modifiedAt: string;
}

interface AwsRegion {
  id: number;
  name: string;
}

export interface UserLogin {
  email: string;
  password: string;
}

export interface Auth0Login {
  access_token: string;
  id_token: string;
}

export interface AuthState {
  isLogged: boolean;
  isLoading: boolean;
  isAlert: boolean;
  accessToken: string | null;
  refreshToken: string | null;
  alertData: string;
  isSSO: boolean;
}

export interface Preferences {
  id: number;
  user: number;
  language: Language;
  dateFormat: DateFormat;
  timeFormat: DateFormat;
  startDay: StartDay;
}

interface StartDay {
  id: number;
  day: string;
}

interface DateFormat {
  id: number;
  format: string;
}

interface Language {
  id: number;
  code: string;
  name: string;
}

export interface OrganizationData {
  id: number;
  name: string;
  isActive: boolean;
  status: string;
  createdAt: string;
  address1: string;
  address2: string;
  postcode: string;
  city: string;
  country: string;
  logoOrganization: string;
  organizationAdmin: OrganizationAdmin[];
  projects: Project[];
}

interface Project {
  ref: string;
  name: string;
  status: string;
}

export interface OrganizationAdmin {
  id: number;
  ref: string;
  userStatus: number;
  userStatusText: string;
  isActive: boolean;
  email: string;
  firstName: string;
  lastName: string;
  mobile: string;
  profileImage?: any;
  organizationRole: OrganizationRole;
  projectRole: string;
  organization: OrganizationData;
}

interface OrganizationRole {
  id: number;
  name: string;
}
