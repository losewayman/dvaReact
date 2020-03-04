import {query,login,iflogin,sign} from '../services/example' 
import { routerRedux } from 'dva/router';
export default {

    namespace: 'login',
  
    state: {
        login:{},
        iflogin:{}
    },
  
    effects: {
      *login({ payload,callback }, { call, put }) {  // eslint-disable-line
        let response = yield call(login,payload);
        callback(response);
      },

      *iflogin({payload},{call,put}){
          let response = yield call(iflogin,payload)
          if(response.data.status===0){
            yield put(routerRedux.push('/login'))
          }else{
            yield put({ type: 'Savelogin',payload:response });
          }
      },

      *sign({payload,callback},{call,put}){
          let response = yield call(sign,payload);
          callback(response);
      }
    },
  
    reducers: {
        Savelogin(state, action) {
            return { 
                ...state,
                login:action.payload
            };
        },
        Saveiflogin(state, action) {
            return { 
                ...state,
                iflogin:action.payload.data
            };
        },
      },
    
    };
    