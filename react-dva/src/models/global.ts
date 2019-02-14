
// interface Istat {
//   counter: number;
// }

// interface Iglobal extends Imodels {
//   state: Istat;
// }


// const global: Iglobal = ;


export default {
  namespace: 'global',

  state: {
    counter: 0
  },

  // subscriptions: {
  //   setup({ dispatch, history }) {
  //     // eslint-disable-line
  //     history.listen(location => {
  //       console.log(1, location);
  //     });
  //   },
  // },

  effects: {
    *add({ payload }: any, { call, put, select, take, cancel }: any) {
      let {counter} = yield select((state: any) => {
        return state.global;
      });
      console.log(1);
      while(true) {
        yield take('continue');
        console.log(21);
        yield put({type:'save', payload:{counter: ++counter}}); 
        console.log(22);
      }
    },
    *continue({ payload }: any, { call, put, select, take }: any) {
      console.log(3);
      yield put({type:'save'}); 
    },
  },

  reducers: {
    save(state: any, action: any) {
      console.log('save');
      return { ...state, ...action.payload };
    },
  },
};