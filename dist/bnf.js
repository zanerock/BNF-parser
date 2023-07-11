import * as _Shared from "./shared.js";
const _ctx = new WebAssembly.Instance(
  new WebAssembly.Module(
    _Shared.DecodeBase64("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")
  ),
  {js: {print_i32: console.log}}
);
export function program (data, refMapping = true) {
  return _Shared.Parse(_ctx, data, refMapping, "program");
}
export function w (data, refMapping = true) {
  return _Shared.Parse(_ctx, data, refMapping, "w");
}
export function comment (data, refMapping = true) {
  return _Shared.Parse(_ctx, data, refMapping, "comment");
}
export function name (data, refMapping = true) {
  return _Shared.Parse(_ctx, data, refMapping, "name");
}
export function letter (data, refMapping = true) {
  return _Shared.Parse(_ctx, data, refMapping, "letter");
}
export function digit (data, refMapping = true) {
  return _Shared.Parse(_ctx, data, refMapping, "digit");
}
export function hex (data, refMapping = true) {
  return _Shared.Parse(_ctx, data, refMapping, "hex");
}
export function constant (data, refMapping = true) {
  return _Shared.Parse(_ctx, data, refMapping, "constant");
}
export function frag (data, refMapping = true) {
  return _Shared.Parse(_ctx, data, refMapping, "frag");
}
export function escape (data, refMapping = true) {
  return _Shared.Parse(_ctx, data, refMapping, "escape");
}
export function byte (data, refMapping = true) {
  return _Shared.Parse(_ctx, data, refMapping, "byte");
}
export function def (data, refMapping = true) {
  return _Shared.Parse(_ctx, data, refMapping, "def");
}
export function expr (data, refMapping = true) {
  return _Shared.Parse(_ctx, data, refMapping, "expr");
}
export function expr_arg (data, refMapping = true) {
  return _Shared.Parse(_ctx, data, refMapping, "expr_arg");
}
export function expr_prefix (data, refMapping = true) {
  return _Shared.Parse(_ctx, data, refMapping, "expr_prefix");
}
export function expr_infix (data, refMapping = true) {
  return _Shared.Parse(_ctx, data, refMapping, "expr_infix");
}
export function expr_suffix (data, refMapping = true) {
  return _Shared.Parse(_ctx, data, refMapping, "expr_suffix");
}
export function expr_brackets (data, refMapping = true) {
  return _Shared.Parse(_ctx, data, refMapping, "expr_brackets");
}
