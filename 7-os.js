const os= require('os')
console.log(`user info ${JSON.stringify(os.userInfo())}`);
console.log(`Uptime ${os.uptime()}`);
const user = {
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    arch:os.arch(),
    freemem:os.freemem(),
}
console.log(`${JSON.stringify(user,null,2)}`);