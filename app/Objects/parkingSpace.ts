
class Vehical {
	V_number: string;
	V_color: string;
	V_slot: string;
	constructor(VehicalColor: string, VehicalNumber: string, SlotNumber: string) {
		this.V_color = VehicalColor;
		this.V_number = VehicalNumber;
		this.V_slot = SlotNumber;
	}

	isEqual(carA: Vehical, VehicalB: Vehical) {
		return ((carA.V_number.toLowerCase() === VehicalB.V_number.toLowerCase()) &&
			carA.V_color.toLowerCase() == VehicalB.V_color.toLowerCase())
	}

}

class ParkingSpace {
	MaxFloor: number;
	MaxSlotsPerFloor: number;
	//parkign space for paking lot
	ParkingSpace: null[][] | string[][];
	//maps to color with array of Car numbers
	colorCars: Map<string, Array<string>>
	//maps to key with car number
	slots: Map<string, string>
	//car details constins the list of car numbr and their details
	carDetails: Map<string, Vehical>

	constructor() {
		this.MaxFloor = 0;
		this.MaxSlotsPerFloor = 0;
		this.ParkingSpace = [];
		this.colorCars = new Map()
		this.slots = new Map();
		this.carDetails = new Map();
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
		let carNumber = input.split(" ")[1];
		let carcolor = input.split(' ')[2];

		if (this.carDetails.has(carNumber)) {
			throw new Error("Car already registard");
		}
		let [i, j] = this._findNearestSlot()
		if (i < 0 || j < 0) {
			throw new Error(" No Parking Space Left");
		}
		let slot = i + "-" + j;
		let car = new Vehical(carcolor, carNumber,slot);

		this.ParkingSpace[i][j] = carNumber;
		if (!this.colorCars.has(carcolor)) {
			this.colorCars.set(carcolor, []);
		}
		let CarsOfSameColors = this.colorCars.get(carcolor);
		CarsOfSameColors!.push(carNumber);
		this.colorCars.set(carcolor, CarsOfSameColors!);
		this.slots.set(slot, carNumber);
		this.carDetails.set(carNumber, car);
		return car;
	}

	getVehicalByNumber(input: string) {
		return this.carDetails.get(input.split(" ")[1])
	}

	getSlotDetails(input: string) {
		let floor = parseInt(input.split(" ")[1]);
		let FloorIndex = parseInt(input.split(" ")[2]);
		let key = floor + "-" + FloorIndex;
		if (this.ParkingSpace[floor][FloorIndex] == null) {
			throw new Error("This is an Empty slot");
		}
		let carNumber = this.slots.get(key);
		return this.carDetails.get(carNumber!);
	}

	getSlotNumber(input: string){
		let carNumber = input.split(" ")[1];
		if(!carNumber){
			throw new Error("Please Enter your car number");
		}
		if(!this.carDetails.get(carNumber)){
			throw new Error('No car exist with the same number please anter a valid number');
		}
		let carDetails = this.carDetails.get(carNumber);
		return carDetails?.V_number;
	}

	_findNearestSlot() {
		for (var i = 0; i < this.MaxFloor; i++) {
			for (let j = 0; j < this.MaxSlotsPerFloor; j++) {
				if (this.ParkingSpace[i][j] == null) return [i, j]
			}
		}
		return [-1, -1];
	}

	carExit(input: string){
		let [_,floor,index]= input.split(" ")
		let key = floor+"-"+index;
		let carNumber = this.ParkingSpace[parseInt(floor)][parseInt(index)];
		this.ParkingSpace[parseInt(floor)][parseInt(index)] = null;
		let car = this.carDetails.get(carNumber!);
		this.carDetails.delete(carNumber!);
		let carOfSameColor = this.colorCars.get(car?.V_color!)
		carOfSameColor?.splice(carOfSameColor.indexOf(car?.V_number!),1)
		this.colorCars.set(car?.V_color!,[...carOfSameColor!]);
		this.slots.delete(key);
		return "SUCCESS";
	}

}
let park = new ParkingSpace();
park.createParkingLot("park 12 54");
console.log(park.registerVehicalEntry("park KA-01-HH-9999 White"))
console.log(park.registerVehicalEntry("park KA-01-HH-9992 White"))
console.log(park.getVehicalByNumber("park KA-01-HH-9992"))
console.log(park.getSlotNumber("slot KA-01-HH-9992"))
console.log(park.carExit("exit 0 1"));



