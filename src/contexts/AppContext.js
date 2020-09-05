import { createContext } from 'react';

const AppContext = createContext();
const AppConsumer = AppContext.Consumer;
const AppProvider = AppContext.Provider;

export default AppContext;
export {AppConsumer, AppProvider};
