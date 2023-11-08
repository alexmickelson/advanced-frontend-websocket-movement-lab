export interface VehicleType {
  id: number;

  xPosition: number;
  yPosition: number;
  rotation: number;

  turnLeft: boolean;
  turnRight: boolean;
  goForwards: boolean;
  goBackwards: boolean;
}

export interface VehicleContextType {
  vehicles: VehicleType[];
  addVehicle: (id: number) => void;
  updateVehicle: (
    id: number,
    vehicleAction:
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
