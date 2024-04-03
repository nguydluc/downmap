import { LocationProvider } from "./LocationContext";
import { UserProvider } from "./UserContext";

// eslint-disable-next-line react/prop-types
const Providers = ({ children }) => (
  <LocationProvider>
    <UserProvider>{children}</UserProvider>
  </LocationProvider>
);

export default Providers;
