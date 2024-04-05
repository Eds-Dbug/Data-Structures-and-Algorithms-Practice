function timeConversion(s) {
	// Write your code here
	// remove PM or AM from string
	// split the string into hour, min and secs
	// check for pm or am if its pm add 12

	let period = s.slice(s.indexOf('PM'));
	//console.log('period', period)
	let time = s.slice(0, 8).split(':');

	if (period === 'PM') {
		if (time[0] !== '12') {
			time[0] = Number(time[0]) + 12;
		}
	} else {
		if (time[0] === '12') {
			time[0] = '00';
		}
	}

	return `${time[0]}:${time[1]}:${time[2]}`;
}
