/* eslint default-case: 0, consistent-return: 0 */
// BEGIN (write your solution here)
export const make = (a, b, c) => (message) => {
	switch (message) {
		case 'get1':
			return a;
		case 'get2':
      return b;
    case 'get3':
      return c;
	}
};

export const get1 = (make) => make('get1');
export const get2 = (make) => make('get2');
export const get3 = (make) => make('get3');
// END
