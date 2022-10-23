export interface IUser {
	name: string;
}

var flag1 = 5;
var flag2 = 5 - flag1;
if (flag1 - flag2 == 0) {
	alert('true');
}
var exObject = { asd: 1, bnm: 3 };

function exFunc(foo: number, bar: number, baz: number) {
	switch (foo) {
		case 1:
			return 'f';
		case 2:
			return 'o';
		default:
			return baz;
	}

	return bar;
}

if (exObject.asd + exObject.bnm != 10) {
	var objL = exFunc(1, 2, 3);
	alert(objL);
}
