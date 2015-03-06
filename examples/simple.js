var mod_extsprintf = require('extsprintf');
console.log(mod_extsprintf.sprintf('hello %25s', 'world'));

mod_extsprintf.printf('hi there\nvia %20s\n', 'printf');
mod_extsprintf.fprintf(process.stderr, 'sent to std%6s %03d\n', 'err', 7);
