enum VehicalType{
	"TwoWeeler",
	"LMV",
	"SMV"
}

class Vehical {
	V_number: string;
	V_color: string;
	V_slot: number;
	V_driver : string;
	V_contact : number;
	V_type: VehicalType;
	constructor(VehicalColor: string, VehicalNumber: string, AllottedSlot: number , Owner : string, ContactDetails: number, Type: VehicalType) {
		this.V_color = VehicalColor;
		this.V_number = VehicalNumber;
		this.V_slot = AllottedSlot;
		this.V_driver = Owner;
		this.V_contact = ContactDetails;
		this.V_type = Type;
	}

	isEqual(carA: Vehical, VehicalB: Vehical) {
		return ((carA.V_number.toLowerCase() === VehicalB.V_number.toLowerCase()) &&
			carA.V_color.toLowerCase() == VehicalB.V_color.toLowerCase())
	}

}

class ParkingSpace {
	MaxFloor: number;
	MaxSlotsPerNumber : number;
	SlotIndex : []  
	constructor() {
		this.MaxParkingSlots = 0;
		this.slotsOccupied = 0;
		this.ParkingSlots = [];
	}

	createParkingLot(input: string) {
		let space = parseInt(input.split(" ")[1]);
		if (space > 0) this.MaxParkingSlots = space;
		else throw new Error(" Please enter a valid Space for the parking Lot")
	}

	registerVehicalEntry(input: string) {
		if (this.MaxParkingSlots <= 0) {
			throw new Error("Please Create Space for Parking lot")
		}

		let C_color = input.split(" ")[2];
		let C_number = input.split(" ")[1];
		let C_Slot = this.ParkingSlots.size()
		if(this.slotsOccupied < this.MaxParkingSlots){
			let car = new Vehical(C_color,C_number,C_slot);
		}

	}

	leaveVehicalByNumber(input: string) {

	}

	getSlotDetails(input: string) {

	}

	findNearestSlot() {

	}

}
/*
	multi story building
	0
	1
	2
	3
	4
	5
*/
