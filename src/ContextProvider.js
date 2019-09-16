import React from 'react';

const ContextState = {
  challengeName: '',
  participantName: ''
};
const MyContext = React.createContext(ContextState);

export default MyContext;
export { ContextState };
