import { createContext, FC, ReactNode, useEffect, useState } from "react";
import { VehicleContextType, VehicleType } from "./contextTypes";


export const GameServerVehicleContext = createContext<VehicleContextType>({
  vehicles: [],
  addVehicle: () => {},
  updateVehicle: () => {},
});

export const GameServerVehicleContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [vehicles, setVehicles] = useState<VehicleType[]>([]);
  
  
  useEffect(() => {
    const moveVehicles = () => {
      // move all the vehicles
    }
    
    // run movement logic on a 20 millisecond timer
    const intervalId = window.setInterval(moveVehicles, 20);
    
    return () => window.clearInterval(intervalId);
  }, [vehicles]);
  
  const addVehicle = (_id: number) => { }
  const updateVehicle = (
    _id: number,
    _vehicleAction:
      | "moveForward"
      | "moveBackward"
      | "turnLeft"
      | "turnRight"
      | "stopForwards"
      | "stopBackwards"
      | "stopLeft"
      | "stopRight"
  ) => {}

  return (
    <GameServerVehicleContext.Provider
      value={{
        vehicles,
        addVehicle,
        updateVehicle,
      }}
    >
      {children}
    </GameServerVehicleContext.Provider>
  );
};
