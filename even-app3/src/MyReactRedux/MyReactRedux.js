import React from 'react';

const MyReduxContext = React.createContext(null);

export const MyProvider = ({ store, children }) => {
  return (
    <MyReduxContext.Provider value={store}>{children}</MyReduxContext.Provider>
  );
};

//export default myconnect(mapStateToProps, mapDispatchToProps)(Counter);

// const mapStateToProps = (state) => {
//     return {
//       counterValue: state.value,
//     };
//   };

// const mapDispatchToProps = (dispatch) => {
//     return {
//       hanldeAdd: () => dispatch({ type: 'COUNTER_ADD' }),
//       hanldeSub: () => dispatch({ type: 'COUNTER_SUB' }),
//     };
//   };

export const myconnect = (mapStateToProps, mapDispatchToProps) => {
  return (WrapperComponent) => {
    return class NewComponent extends React.Component {

      static contextType = MyReduxContext;
      componentDidMount() {
        const { subscribe } = this.context;
        this.unsubscribe = subscribe(() => this.forceUpdate());
      }

      componentWillUnmount(){
        this.unsubscribe();
      }

      render() {
        console.log('MyReduxContext', this.context);
        const { getState, dispatch } = this.context;

        const passStateToProps = mapStateToProps(getState());
        const passDispatchToProps = mapDispatchToProps(dispatch);

        return (
          <WrapperComponent
            {...passStateToProps}
            {...passDispatchToProps}
            {...this.props}
          ></WrapperComponent>
        );
      }
    };
  };
};
