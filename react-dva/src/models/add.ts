
export default  {
  namespace: 'add',
  state: {
    add: true,
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
    // *fetch({ payload }, { call, put }) {
    //   // eslint-disable-line
    //   yield put({ type: 'save' });
    // },
  },

  reducers: {
    save(state: any, action: any) {
      return { ...state, ...action.payload };
    },
  },
};
;