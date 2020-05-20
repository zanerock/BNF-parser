const {BNF_SyntaxNode, BNF_SyntaxError, BNF_Reference, BNF_Tree, BNF_Parse} = require('./types.js');

function HighlightArea(input, fromRef, toRef){
  let index = fromRef.index;

  function IsInBound(col) {
    if (fromRef && toRef) {
      return fromRef.col <= col && col <= toRef.col;
    }
    if (fromRef && fromRef.col <= col) {
      return true;
    }
    if (toRef && col <= toRef.col) {
      return true;
    }
  }

  // Get the previous newline
  let begin;
  for (begin=index; begin>0 && input[begin] != "\n"; begin--) {}
  // Get the next newline
  let end;
  for (end=index; end<input.length && input[end] != "\n"; end++) {}

  let snippet = input.slice(begin, end);
  let area = "";
  let lineLen = end-begin;
  for (let col=1; col<lineLen; col++) {
    area += IsInBound(col) ? "^" : " ";
  }

  return snippet + "\n" + area;
}


module.exports = {
  HighlightArea
};