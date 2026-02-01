process.stdin.setEncoding("utf8");
console.log(process.memoryUsage())

process.stdout.write("Enter your name: ");
process.stdin.once("data", (chunk) => {
    const name = chunk.trim();
    process.stdout.write(`Hello, ${name}\n`);
    process.exitCode = 0;
    process.stdin.pause();
});
