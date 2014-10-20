var sum = 0;
for (var i = process.argv.length - 1; i >= 2; i--) {
	// console.log(process.argv[i]);
	sum += +process.argv[i]
};

console.log(sum);