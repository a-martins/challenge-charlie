import React, { createContext, useState } from "react";

export type Coordinates = {
  latitude?: number;
  longitude?: number;
};

export type UserLocationContextType = {
  coordinates: Coordinates | undefined;
  setCoordinates: React.Dispatch<React.SetStateAction<Coordinates | undefined>>;
};

const UserLocationContext = createContext<UserLocationContextType | null>(null);

const UserLocationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [coordinates, setCoordinates] = useState<Coordinates>();
  return (
    <UserLocationContext.Provider value={{ coordinates, setCoordinates }}>
      {children}
    </UserLocationContext.Provider>
  );
};

export { UserLocationContext, UserLocationProvider };
