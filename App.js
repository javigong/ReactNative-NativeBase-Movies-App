import { NativeBaseProvider } from "native-base";
import { StatusBar } from "expo-status-bar";

import AppStack from "./src/components/stacks/AppStack";

//App

const App = () => {
  return (
    <NativeBaseProvider>
      <StatusBar style="light" />
      <AppStack />
    </NativeBaseProvider>
  );
};
export default App;
