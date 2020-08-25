import { mockedResponse } from './mockedResponse';

const apiCall = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(JSON.stringify(mockedResponse));
    }, 500)
  });
}

export default apiCall;
