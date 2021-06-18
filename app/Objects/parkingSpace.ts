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
		for (let i = 0; i < MaxFloor; i++) {
			let temp = []
			for (let j = 0; j < MaxSlotsPerFloor; j++{
				temp.push(-1);
			}
			this.ParkingSpace.push(temp);
		}
	}

	registerVehicalEntry(input: string) {
		if (this.MaxFloor <= 0 || this.MaxSlotsPerFloor <= 0) {
			throw new Error("Please Create Space for Parking lot")
		}
		let [_, VehicalNumber, VehicalColor, Owner, ContactDetails, Type] = input.split(' ');

		if (VehicalNumber && VehicalColor && Owner && ContactDetails && Type) {
			let slot = await this._findNearestSlot();
			if (slot.length !== 0) {
				let [i, j] = slot;
				let key = i + "," + j;
				let vehical = new Vehical(VehicalColor, VehicalNumber, key, Owner, ContactDetails, Type);
				this.ParkingSpace[i][j] = vehical;
				this.ParkingMap.set(VehicalNumber, key);
				return vehical;
			}
			else
				throw new Error("Parking Space is full")

		}
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

	async _findNearestSlot() {
		for (let i = 0; i < this.ParkingSpace.length; i++) {
			for (let j = 0; j < this.ParkingSpace[i].length; j++) {
				if (this.ParkingSpace[i][j] !== -1)
					return [i, j];
			}
		};

		return [];
	}

}

let garage = new ParkingSpace();
console.log(garage.createParkingLot("apce 21 23"));
/*
	multi story building
	0
	1
	2
	3
	4
	5
*/
