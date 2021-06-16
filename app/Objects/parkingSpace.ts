import { parse } from "path/posix";

class ParkingSpace {
	MaxParkingSlots: number;
	ParkingSlots;
	constructor() {
		this.MaxParkingSlots = 0;
		this.ParkingSlots = new Map()
	}

	createpParkingLot(input: string){
		this.MaxParkingSlots  = parseInt(input.split(" ")[1]);
		if(this.MaxParkingSlots <= 0){
			throw new Error("Minimum One slot is required");
		}
		
	}

}