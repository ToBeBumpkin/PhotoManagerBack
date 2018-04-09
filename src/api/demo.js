import axios from 'axios';
import request from './request';

export const demo = async(params) => {
  const url = `/gw-member/member/enterprise/V1/register`
  const method = "POST"
  const data = {
    loginName : params.loginName,
    password : params.password || '',
  }
  try {
    return await request(url,method,data)
  } catch (err) {
    return err
  }
}
