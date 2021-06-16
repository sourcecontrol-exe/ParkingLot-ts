class Car {
	C_number: string;
	C_color: string;
	C_slot: number;
	constructor(C_color: string, C_number: string, C_slot: number) {
		this.C_color = C_color;
		this.C_number = C_number;
		this.C_slot = C_slot
	}

	isEqual(carA: Car, CarB: Car) {
		return ((carA.C_number.toLowerCase() === CarB.C_number.toLowerCase()) &&
			carA.C_color.toLowerCase() == CarB.C_color.toLowerCase())
	}

}

class ParkingSpace {
	MaxParkingSlots: number;
	ParkingSlots: any;
	slotsOccupied: number
	constructor() {
		this.MaxParkingSlots = 0;
		this.slotsOccupied = 0;
		this.ParkingSlots = new Set()
	}

	createParkingLot(input: string) {
		let space = parseInt(input.split(" ")[1]);
		if (space > 0) this.MaxParkingSlots = space;
		else throw new Error(" Please enter a valid Space for the parking Lot")
	}

	registerCarEntry(input: string) {
		if (this.MaxParkingSlots <= 0) {
			throw new Error("Please Create Space for Parking lot")
		}

		let C_color = input.split(" ")[2];
		let C_number = input.split(" ")[1];
		let C_Slot = this.ParkingSlots.size()
		if(this.slotsOccupied < this.MaxParkingSlots){
			let car = new Car(C_color,C_number,C_slot);
		}

	}

	leaveCarByNumber(input: string) {

	}

	getSlotDetails(input: string) {

	}


	findNearestSlot() {

	}

}