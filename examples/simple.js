var mod_extsprintf = require('extsprintf');
console.log(mod_extsprintf.sprintf('hello %25s', 'world'));

mod_extsprintf.printf('hi there\nvia %20s', 'printf');
