import { SyntaxNode, ParseError, Reference, ReferenceRange } from "./syntax.js";
import { Compile } from "./compiler.js";
import { Parser } from "./parser.js";

import { bnf_json } from "./preload.js";

const BNF = new Parser( bnf_json );

export {
	BNF,
	Parser,
	Compile,
	SyntaxNode,
	ParseError,
	Reference,
	ReferenceRange
};