class Vehical {
	V_number: string;
	V_color: string;
	V_slot: string;
	V_driver: string;
	V_contact: string;
	V_type: string;
	constructor(VehicalColor: string, VehicalNumber: string, AllottedSlot: string, Owner: string, ContactDetails: string, Type: string) {
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
	MaxSlotsPerFloor: number
	//Imrpove this any intitailization
	ParkingSpace: any
	ParkingMap: any
	constructor() {
		this.MaxFloor = 0;
		this.MaxSlotsPerFloor = 0;
		this.ParkingSpace = [];
		this.ParkingMap = new Map()
	}

	createParkingLot(input: string) {
		let MaxFloor = parseInt(input.split(" ")[1]);
		let MaxSlotsPerFloor = parseInt(input.split(" ")[2]);
		if (MaxFloor <= 0 || MaxSlotsPerFloor <= 0) {
			throw new Error("Please enter value greater than zero");
		}
		this.MaxFloor = MaxFloor;
		this.MaxSlotsPerFloor = MaxSlotsPerFloor;
		this.ParkingSpace = new Array(this.MaxFloor).fill(0).map(floor => new Array(this.MaxSlotsPerFloor).fill(null));
		return this.ParkingSpace;
	}

	registerVehicalEntry(input: string) {
		
	}

	getVehicalByNumber(input: string) {
		let [_, numberToSearch] = input.split(" ");
		let slot = this.ParkingMap.get(numberToSearch);
		let [i, j] = slot.split(",").map((ele: string): number => parseInt(ele));
		return this.ParkingSpace[i][j];
	}

	getSlotDetails(input: string) {
		let [_, slotNumber] = input.split(" ");
		for (let [key, value] of this.ParkingMap) {
			if (value == slotNumber) {
				let [i, j] = key.split(',').map((ele: string): number => parseInt(ele))
				return this.ParkingSpace[i][j];
			}
		}
	}

	_findNearestSlot() {
		let [k, l] = [-1, -1]
		for (let i = 0; i < this.ParkingSpace.length; i++) {
			for (let j = 0; j < this.ParkingSpace[i].length; j++) {
				if (this.ParkingSpace[i][j] !== -1)
					[k, l] = [i, j];
				return [k, l]
			}
		};
	}

}
let park = new ParkingSpace();
console.log(park)
//console.log(park.createParkingLot("park 12 54"));



