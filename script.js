//your JS code here. If required.
let student={
	name:"Pintu"
};
Object.prototype.getKeys = function() {
    return Object.keys(this);
};
console.log(student.getKeys());