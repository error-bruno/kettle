export const INIT = 'INIT';
export const SERVER = 'SERVER';
const header = new Headers({
  'Access-Control-Allow-Origin': '',
  'Content-Type': 'multipart/form-data'
});

export function serverContact() {
  const getPromise = async () => {
    await fetch('http://localhost:8000/', { mode: 'cors', header }).then((response) => {
      console.log('here');
      return response.blob();
    }).catch((err) => {
      console.log(err);
    });
  };

  return {
    type: SERVER,
    payload: getPromise()
  };
}

export default function initializeStore() {
  return {
    type: INIT
  };
}
