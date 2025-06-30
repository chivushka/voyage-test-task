import axios from 'axios';
import {
  Auth0Login,
  UserLogin,
} from '../../../Library/Utils/Types/ApiTypes/userModels';
import {post, get, postAuth0} from '../../ApiService';
import {ApiUrl} from '../../Utils/ApiUrl';

export const doUserLogin = async (body: UserLogin) => {
  const res = await post(ApiUrl.authModule.userLogin, body);
  return res;
};

export const authApiUser = async () => {
  try {
    const res = await get(ApiUrl.authModule.authUserApi);
    return res;
  } catch (error: any) {
    return error.response;
  }
};

export const loginAuth0ApiUser = async (
  access_token: string,
  id_token: string,
) => {
  try {
    const res = await postAuth0(ApiUrl.authModule.userAuth0Login, {
      access_token,
      id_token,
    });
    return res.data;
  } catch (error: any) {
    return error.response;
  }
};

export const forgotPassword = async (body: any) => {
  // const res = await postWithoutHeaders(
  //   ApiUrl.authModule.userForgotPassword,
  //   body,
  // );
  const response = await axios.post(ApiUrl.authModule.userForgotPassword, body);
  return response;
};

export const resetPassword = async (body: any) => {
  try {
    const res = await post(ApiUrl.authModule.userResetPassword, body);
    return res;
  } catch (error: any) {
    return error.response;
  }
};
export const getUserProjectList = async (region: any) => {
  try {
    const res = await get(
      `${ApiUrl.authModule.userProjectList}?region=${region}&status=active`,
    );
    return res;
  } catch (error: any) {
    return error.response;
  }
};
