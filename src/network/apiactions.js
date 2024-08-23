import {conn, connWithAuth} from './api';
//import { getToken, checkAuthed } from "../auth/auth";

const getCrossword = () => {
  return new Promise((resolve,reject) => {
    conn.get('/api/getcrossword')
    .then( (response) => {
      return resolve(response.data);
    }).catch((err) => {
      console.log(err);
      return reject('An error occured');
    });
  });
}



//Type:
// null - Just get the standard test
// adv - get the test with options
// inc - get incorrectly answered questions
// const getTest = async (payload,type=null) => {
//   let url = '/api/gettest/';
//   switch (type) {
//     case 'adv':
//       url = '/api/gettestadv/';
//       break;
//     case 'inc':
//       url = '/api/gettestincorrect/';
//       break
//     case 'basic':
//       url = '/api/gettestbasic/';
//       break
//     default:
//       url = '/api/gettest/';
//       break;
//   }

//   if(url === '/api/gettestbasic/') {
//     //Get the basic test
//     return new Promise((resolve,reject) => {
//       conn.post(url,payload)
//       .then( (response) => {
//         return resolve(response.data);
//       }).catch((err) => {
//         console.log(err);
//         return reject(err);
//       });
//     });
//   } else {
//     //Get test for signed in users
//     const token = await getToken();
//     return new Promise((resolve,reject) => {
      
//       const conn = connWithAuth(token);
//       conn.post(url,payload)
//       .then( (response) => {
//         return resolve(response.data);
//       }).catch((err) => {
//         console.log(err);
//         return reject(err);
//       });
//     });
//   }
// }

// const getSpecificTest = async (payload) => {
//   const token = await getToken();
//   const url = '/api/getspecific/';
//   return new Promise((resolve,reject) => {
//     const conn = connWithAuth(token);
//     conn.post(url,payload)
//     .then( (response) => {
//       return resolve(response.data);
//     }).catch((err) => {
//       console.log(err);
//       return reject(err);
//     });
//   });
// }


// const scoreTest = async (payload) => {
//   const authed = await checkAuthed();
//   if(authed) {
//     const token = await getToken();
//     return new Promise((resolve,reject) => {
//       const conn = connWithAuth(token)
//       conn.post('/api/marktest/',payload)
//       .then( (response) => {
//         return resolve(response.data);
//       }).catch((err) => {
//         console.log(err);
//         return reject('An error occured');
//       });
//     });
//   } else {
//     //Mark the test without authentication
//     return new Promise((resolve,reject) => {
//       conn.post('/api/marktestbasic/',payload)
//       .then( (response) => {
//         return resolve(response.data);
//       }).catch((err) => {
//         console.log(err);
//         return reject('An error occured');
//       });
//     });
//   }
// }

// const getTestHistory = async (payload) => {
//   const token = await getToken();
//   return new Promise((resolve,reject) => {
//     const conn = connWithAuth(token)
//     conn.post('/api/history/',payload)
//     .then( (response) => {
//       return resolve(response.data);
//     }).catch((err) => {
//       console.log(err);
//       return reject('An error occured');
//     });
//   });
// }

// const getAttemptedQuestions = async (payload) => {
//   const token = await getToken();
//   return new Promise((resolve,reject) => {
//     const conn = connWithAuth(token)
//     conn.post('/api/attempted/',payload)
//     .then( (response) => {
//       return resolve(response.data);
//     }).catch((err) => {
//       console.log(err);
//       return reject('An error occured');
//     });
//   });
// }

// const register = async (payload) => {
//   return new Promise((resolve,reject) => {
//     conn.post('/api/createaccount/',payload)
//     .then( (response) => {
//       return resolve(response);
//     }).catch((err) => {
//       console.log(err);
//       return reject('An error occured');
//     });
//   });
// }

// const forgot = async (payload) => {
//   return new Promise((resolve,reject) => {
//     conn.post('/api/forgotpassword/',payload)
//     .then( (response) => {
//       return resolve(response);
//     }).catch((err) => {
//       console.log(err);
//       return reject('An error occured');
//     });
//   });
// }


// const reset = async (payload) => {
//   return new Promise((resolve,reject) => {
//     conn.post('/api/resetpassword/',payload)
//     .then( (response) => {
//       return resolve(response);
//     }).catch((err) => {
//       console.log(err);
//       return reject('An error occured');
//     });
//   });
// }

// const confirm = async (payload) => {
//   return new Promise((resolve,reject) => {
//     conn.post('/api/confirmaccount/',payload)
//     .then( (response) => {
//       return resolve(response);
//     }).catch((err) => {
//       console.log(err);
//       return reject('An error occured');
//     });
//   });
// }


// const getReasonOptions = async () => {
//   return new Promise((resolve,reject) => {
//     conn.get('/api/getreasonoptions/')
//     .then( (response) => {
//       return resolve(response);
//     }).catch((err) => {
//       console.log(err);
//       return reject('An error occured');
//     });
//   });
// }


// const reportQuestion = async (payload) => {
//   const token = await getToken();
//   const conn = connWithAuth(token);

//   return new Promise((resolve,reject) => {
//     conn.post('/api/reportquestion',payload)
//     .then( (response) => {
//       return resolve(response);
//     }).catch((err) => {
//       console.log(err);
//       return reject('An error occured');
//     });
//   });
// }

export {getCrossword};