import axios from 'axios';

type HttpRequestMethods = 'get' | 'delete' | 'post' | 'put' | 'patch';
const baseURL = `https://${process.env.REACT_APP_PROJECT_ID}-default-rtdb.firebaseio.com/`;

const axiosClient = axios.create({
  baseURL,
  timeout: 5000, // Set the default timeout for requests to 5 seconds
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
});

// 다음과 같은 API 호출을 수행하고자 하는 경우
// METHOD: GET, URL: '/my-request'
// 다음과 같이 실행합니다.
// await AxiosRequest('get', '/my-request')
const AxiosRequest = async (
  method: HttpRequestMethods,
  endpoint: string,
  body?: Record<string, unknown>
) => {
  let response = null;
  const jsonEndpoint = `${endpoint}.json`;
  try {
    if (method === 'get' || method === 'delete') {
      response = await axiosClient[method](jsonEndpoint, {
        data: body,
        headers: {
          accept: 'application/json',
        },
      });
    } else {
      response = await axiosClient[method](jsonEndpoint, body, {
        headers: {
          accept: 'application/json',
        },
      });
    }
  } catch (e) {
    console.error('API ERROR::', e);
  }

  if (response?.data && Array.isArray(response.data)) {
    return response.data.filter(
      (item: unknown) => !!item !== undefined && item !== null
    );
  }
  return response?.data ? response.data : null;
};

export default AxiosRequest;
