/**
 * reproducing: this file must be a standalone module
 */

var Some = {
  // reproducing: must be `foo(bar) {}` or `foo: bar => {}`
  // which cannot reproduce: `foo: function(bar) {}`
  method(arg) {
    return arg.first && arg.second;
  },
};

export function theExport(value) {
  // reproducing: must be `x.y(value)`
  return Some.method(value);
}
