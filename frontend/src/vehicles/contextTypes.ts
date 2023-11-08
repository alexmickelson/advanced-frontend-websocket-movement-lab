export interface VehicleType {
  id: number;

  // state of the vehicle
  xPosition: number;
  yPosition: number;
  rotation: number;

  // flags needed to determine next state
  turnLeft: boolean;
  turnRight: boolean;
  goForwards: boolean;
  goBackwards: boolean;
}

export interface VehicleContextType {
  vehicles: VehicleType[];
  addVehicle: (_id: number) => void;
  updateVehicle: (
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
  ) => void;
}
