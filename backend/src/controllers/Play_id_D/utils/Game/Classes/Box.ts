type rowT = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
type colT = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h";
class Box {
	row: rowT;
	col: colT;
	constructor(row: rowT, col: colT) {
		this.row = row;
		this.col = col;
	}
}
