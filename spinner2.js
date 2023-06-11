const spinner =['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r\|   '];
time = 100;

for (let postion of spinner){
setTimeout(() => {
  process.stdout.write(postion);
}, time);
time += 200
};
