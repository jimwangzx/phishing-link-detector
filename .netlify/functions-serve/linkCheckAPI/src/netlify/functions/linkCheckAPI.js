var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key2 of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key2) && key2 !== "default")
        __defProp(target, key2, { get: () => module2[key2], enumerable: !(desc = __getOwnPropDesc(module2, key2)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/entities/lib/maps/decode.json
var require_decode = __commonJS({
  "node_modules/entities/lib/maps/decode.json"(exports, module2) {
    module2.exports = { "0": 65533, "128": 8364, "130": 8218, "131": 402, "132": 8222, "133": 8230, "134": 8224, "135": 8225, "136": 710, "137": 8240, "138": 352, "139": 8249, "140": 338, "142": 381, "145": 8216, "146": 8217, "147": 8220, "148": 8221, "149": 8226, "150": 8211, "151": 8212, "152": 732, "153": 8482, "154": 353, "155": 8250, "156": 339, "158": 382, "159": 376 };
  }
});

// node_modules/entities/lib/decode_codepoint.js
var require_decode_codepoint = __commonJS({
  "node_modules/entities/lib/decode_codepoint.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var decode_json_1 = __importDefault(require_decode());
    var fromCodePoint = String.fromCodePoint || function(codePoint) {
      var output = "";
      if (codePoint > 65535) {
        codePoint -= 65536;
        output += String.fromCharCode(codePoint >>> 10 & 1023 | 55296);
        codePoint = 56320 | codePoint & 1023;
      }
      output += String.fromCharCode(codePoint);
      return output;
    };
    function decodeCodePoint(codePoint) {
      if (codePoint >= 55296 && codePoint <= 57343 || codePoint > 1114111) {
        return "\uFFFD";
      }
      if (codePoint in decode_json_1.default) {
        codePoint = decode_json_1.default[codePoint];
      }
      return fromCodePoint(codePoint);
    }
    exports.default = decodeCodePoint;
  }
});

// node_modules/entities/lib/maps/entities.json
var require_entities = __commonJS({
  "node_modules/entities/lib/maps/entities.json"(exports, module2) {
    module2.exports = { Aacute: "\xC1", aacute: "\xE1", Abreve: "\u0102", abreve: "\u0103", ac: "\u223E", acd: "\u223F", acE: "\u223E\u0333", Acirc: "\xC2", acirc: "\xE2", acute: "\xB4", Acy: "\u0410", acy: "\u0430", AElig: "\xC6", aelig: "\xE6", af: "\u2061", Afr: "\u{1D504}", afr: "\u{1D51E}", Agrave: "\xC0", agrave: "\xE0", alefsym: "\u2135", aleph: "\u2135", Alpha: "\u0391", alpha: "\u03B1", Amacr: "\u0100", amacr: "\u0101", amalg: "\u2A3F", amp: "&", AMP: "&", andand: "\u2A55", And: "\u2A53", and: "\u2227", andd: "\u2A5C", andslope: "\u2A58", andv: "\u2A5A", ang: "\u2220", ange: "\u29A4", angle: "\u2220", angmsdaa: "\u29A8", angmsdab: "\u29A9", angmsdac: "\u29AA", angmsdad: "\u29AB", angmsdae: "\u29AC", angmsdaf: "\u29AD", angmsdag: "\u29AE", angmsdah: "\u29AF", angmsd: "\u2221", angrt: "\u221F", angrtvb: "\u22BE", angrtvbd: "\u299D", angsph: "\u2222", angst: "\xC5", angzarr: "\u237C", Aogon: "\u0104", aogon: "\u0105", Aopf: "\u{1D538}", aopf: "\u{1D552}", apacir: "\u2A6F", ap: "\u2248", apE: "\u2A70", ape: "\u224A", apid: "\u224B", apos: "'", ApplyFunction: "\u2061", approx: "\u2248", approxeq: "\u224A", Aring: "\xC5", aring: "\xE5", Ascr: "\u{1D49C}", ascr: "\u{1D4B6}", Assign: "\u2254", ast: "*", asymp: "\u2248", asympeq: "\u224D", Atilde: "\xC3", atilde: "\xE3", Auml: "\xC4", auml: "\xE4", awconint: "\u2233", awint: "\u2A11", backcong: "\u224C", backepsilon: "\u03F6", backprime: "\u2035", backsim: "\u223D", backsimeq: "\u22CD", Backslash: "\u2216", Barv: "\u2AE7", barvee: "\u22BD", barwed: "\u2305", Barwed: "\u2306", barwedge: "\u2305", bbrk: "\u23B5", bbrktbrk: "\u23B6", bcong: "\u224C", Bcy: "\u0411", bcy: "\u0431", bdquo: "\u201E", becaus: "\u2235", because: "\u2235", Because: "\u2235", bemptyv: "\u29B0", bepsi: "\u03F6", bernou: "\u212C", Bernoullis: "\u212C", Beta: "\u0392", beta: "\u03B2", beth: "\u2136", between: "\u226C", Bfr: "\u{1D505}", bfr: "\u{1D51F}", bigcap: "\u22C2", bigcirc: "\u25EF", bigcup: "\u22C3", bigodot: "\u2A00", bigoplus: "\u2A01", bigotimes: "\u2A02", bigsqcup: "\u2A06", bigstar: "\u2605", bigtriangledown: "\u25BD", bigtriangleup: "\u25B3", biguplus: "\u2A04", bigvee: "\u22C1", bigwedge: "\u22C0", bkarow: "\u290D", blacklozenge: "\u29EB", blacksquare: "\u25AA", blacktriangle: "\u25B4", blacktriangledown: "\u25BE", blacktriangleleft: "\u25C2", blacktriangleright: "\u25B8", blank: "\u2423", blk12: "\u2592", blk14: "\u2591", blk34: "\u2593", block: "\u2588", bne: "=\u20E5", bnequiv: "\u2261\u20E5", bNot: "\u2AED", bnot: "\u2310", Bopf: "\u{1D539}", bopf: "\u{1D553}", bot: "\u22A5", bottom: "\u22A5", bowtie: "\u22C8", boxbox: "\u29C9", boxdl: "\u2510", boxdL: "\u2555", boxDl: "\u2556", boxDL: "\u2557", boxdr: "\u250C", boxdR: "\u2552", boxDr: "\u2553", boxDR: "\u2554", boxh: "\u2500", boxH: "\u2550", boxhd: "\u252C", boxHd: "\u2564", boxhD: "\u2565", boxHD: "\u2566", boxhu: "\u2534", boxHu: "\u2567", boxhU: "\u2568", boxHU: "\u2569", boxminus: "\u229F", boxplus: "\u229E", boxtimes: "\u22A0", boxul: "\u2518", boxuL: "\u255B", boxUl: "\u255C", boxUL: "\u255D", boxur: "\u2514", boxuR: "\u2558", boxUr: "\u2559", boxUR: "\u255A", boxv: "\u2502", boxV: "\u2551", boxvh: "\u253C", boxvH: "\u256A", boxVh: "\u256B", boxVH: "\u256C", boxvl: "\u2524", boxvL: "\u2561", boxVl: "\u2562", boxVL: "\u2563", boxvr: "\u251C", boxvR: "\u255E", boxVr: "\u255F", boxVR: "\u2560", bprime: "\u2035", breve: "\u02D8", Breve: "\u02D8", brvbar: "\xA6", bscr: "\u{1D4B7}", Bscr: "\u212C", bsemi: "\u204F", bsim: "\u223D", bsime: "\u22CD", bsolb: "\u29C5", bsol: "\\", bsolhsub: "\u27C8", bull: "\u2022", bullet: "\u2022", bump: "\u224E", bumpE: "\u2AAE", bumpe: "\u224F", Bumpeq: "\u224E", bumpeq: "\u224F", Cacute: "\u0106", cacute: "\u0107", capand: "\u2A44", capbrcup: "\u2A49", capcap: "\u2A4B", cap: "\u2229", Cap: "\u22D2", capcup: "\u2A47", capdot: "\u2A40", CapitalDifferentialD: "\u2145", caps: "\u2229\uFE00", caret: "\u2041", caron: "\u02C7", Cayleys: "\u212D", ccaps: "\u2A4D", Ccaron: "\u010C", ccaron: "\u010D", Ccedil: "\xC7", ccedil: "\xE7", Ccirc: "\u0108", ccirc: "\u0109", Cconint: "\u2230", ccups: "\u2A4C", ccupssm: "\u2A50", Cdot: "\u010A", cdot: "\u010B", cedil: "\xB8", Cedilla: "\xB8", cemptyv: "\u29B2", cent: "\xA2", centerdot: "\xB7", CenterDot: "\xB7", cfr: "\u{1D520}", Cfr: "\u212D", CHcy: "\u0427", chcy: "\u0447", check: "\u2713", checkmark: "\u2713", Chi: "\u03A7", chi: "\u03C7", circ: "\u02C6", circeq: "\u2257", circlearrowleft: "\u21BA", circlearrowright: "\u21BB", circledast: "\u229B", circledcirc: "\u229A", circleddash: "\u229D", CircleDot: "\u2299", circledR: "\xAE", circledS: "\u24C8", CircleMinus: "\u2296", CirclePlus: "\u2295", CircleTimes: "\u2297", cir: "\u25CB", cirE: "\u29C3", cire: "\u2257", cirfnint: "\u2A10", cirmid: "\u2AEF", cirscir: "\u29C2", ClockwiseContourIntegral: "\u2232", CloseCurlyDoubleQuote: "\u201D", CloseCurlyQuote: "\u2019", clubs: "\u2663", clubsuit: "\u2663", colon: ":", Colon: "\u2237", Colone: "\u2A74", colone: "\u2254", coloneq: "\u2254", comma: ",", commat: "@", comp: "\u2201", compfn: "\u2218", complement: "\u2201", complexes: "\u2102", cong: "\u2245", congdot: "\u2A6D", Congruent: "\u2261", conint: "\u222E", Conint: "\u222F", ContourIntegral: "\u222E", copf: "\u{1D554}", Copf: "\u2102", coprod: "\u2210", Coproduct: "\u2210", copy: "\xA9", COPY: "\xA9", copysr: "\u2117", CounterClockwiseContourIntegral: "\u2233", crarr: "\u21B5", cross: "\u2717", Cross: "\u2A2F", Cscr: "\u{1D49E}", cscr: "\u{1D4B8}", csub: "\u2ACF", csube: "\u2AD1", csup: "\u2AD0", csupe: "\u2AD2", ctdot: "\u22EF", cudarrl: "\u2938", cudarrr: "\u2935", cuepr: "\u22DE", cuesc: "\u22DF", cularr: "\u21B6", cularrp: "\u293D", cupbrcap: "\u2A48", cupcap: "\u2A46", CupCap: "\u224D", cup: "\u222A", Cup: "\u22D3", cupcup: "\u2A4A", cupdot: "\u228D", cupor: "\u2A45", cups: "\u222A\uFE00", curarr: "\u21B7", curarrm: "\u293C", curlyeqprec: "\u22DE", curlyeqsucc: "\u22DF", curlyvee: "\u22CE", curlywedge: "\u22CF", curren: "\xA4", curvearrowleft: "\u21B6", curvearrowright: "\u21B7", cuvee: "\u22CE", cuwed: "\u22CF", cwconint: "\u2232", cwint: "\u2231", cylcty: "\u232D", dagger: "\u2020", Dagger: "\u2021", daleth: "\u2138", darr: "\u2193", Darr: "\u21A1", dArr: "\u21D3", dash: "\u2010", Dashv: "\u2AE4", dashv: "\u22A3", dbkarow: "\u290F", dblac: "\u02DD", Dcaron: "\u010E", dcaron: "\u010F", Dcy: "\u0414", dcy: "\u0434", ddagger: "\u2021", ddarr: "\u21CA", DD: "\u2145", dd: "\u2146", DDotrahd: "\u2911", ddotseq: "\u2A77", deg: "\xB0", Del: "\u2207", Delta: "\u0394", delta: "\u03B4", demptyv: "\u29B1", dfisht: "\u297F", Dfr: "\u{1D507}", dfr: "\u{1D521}", dHar: "\u2965", dharl: "\u21C3", dharr: "\u21C2", DiacriticalAcute: "\xB4", DiacriticalDot: "\u02D9", DiacriticalDoubleAcute: "\u02DD", DiacriticalGrave: "`", DiacriticalTilde: "\u02DC", diam: "\u22C4", diamond: "\u22C4", Diamond: "\u22C4", diamondsuit: "\u2666", diams: "\u2666", die: "\xA8", DifferentialD: "\u2146", digamma: "\u03DD", disin: "\u22F2", div: "\xF7", divide: "\xF7", divideontimes: "\u22C7", divonx: "\u22C7", DJcy: "\u0402", djcy: "\u0452", dlcorn: "\u231E", dlcrop: "\u230D", dollar: "$", Dopf: "\u{1D53B}", dopf: "\u{1D555}", Dot: "\xA8", dot: "\u02D9", DotDot: "\u20DC", doteq: "\u2250", doteqdot: "\u2251", DotEqual: "\u2250", dotminus: "\u2238", dotplus: "\u2214", dotsquare: "\u22A1", doublebarwedge: "\u2306", DoubleContourIntegral: "\u222F", DoubleDot: "\xA8", DoubleDownArrow: "\u21D3", DoubleLeftArrow: "\u21D0", DoubleLeftRightArrow: "\u21D4", DoubleLeftTee: "\u2AE4", DoubleLongLeftArrow: "\u27F8", DoubleLongLeftRightArrow: "\u27FA", DoubleLongRightArrow: "\u27F9", DoubleRightArrow: "\u21D2", DoubleRightTee: "\u22A8", DoubleUpArrow: "\u21D1", DoubleUpDownArrow: "\u21D5", DoubleVerticalBar: "\u2225", DownArrowBar: "\u2913", downarrow: "\u2193", DownArrow: "\u2193", Downarrow: "\u21D3", DownArrowUpArrow: "\u21F5", DownBreve: "\u0311", downdownarrows: "\u21CA", downharpoonleft: "\u21C3", downharpoonright: "\u21C2", DownLeftRightVector: "\u2950", DownLeftTeeVector: "\u295E", DownLeftVectorBar: "\u2956", DownLeftVector: "\u21BD", DownRightTeeVector: "\u295F", DownRightVectorBar: "\u2957", DownRightVector: "\u21C1", DownTeeArrow: "\u21A7", DownTee: "\u22A4", drbkarow: "\u2910", drcorn: "\u231F", drcrop: "\u230C", Dscr: "\u{1D49F}", dscr: "\u{1D4B9}", DScy: "\u0405", dscy: "\u0455", dsol: "\u29F6", Dstrok: "\u0110", dstrok: "\u0111", dtdot: "\u22F1", dtri: "\u25BF", dtrif: "\u25BE", duarr: "\u21F5", duhar: "\u296F", dwangle: "\u29A6", DZcy: "\u040F", dzcy: "\u045F", dzigrarr: "\u27FF", Eacute: "\xC9", eacute: "\xE9", easter: "\u2A6E", Ecaron: "\u011A", ecaron: "\u011B", Ecirc: "\xCA", ecirc: "\xEA", ecir: "\u2256", ecolon: "\u2255", Ecy: "\u042D", ecy: "\u044D", eDDot: "\u2A77", Edot: "\u0116", edot: "\u0117", eDot: "\u2251", ee: "\u2147", efDot: "\u2252", Efr: "\u{1D508}", efr: "\u{1D522}", eg: "\u2A9A", Egrave: "\xC8", egrave: "\xE8", egs: "\u2A96", egsdot: "\u2A98", el: "\u2A99", Element: "\u2208", elinters: "\u23E7", ell: "\u2113", els: "\u2A95", elsdot: "\u2A97", Emacr: "\u0112", emacr: "\u0113", empty: "\u2205", emptyset: "\u2205", EmptySmallSquare: "\u25FB", emptyv: "\u2205", EmptyVerySmallSquare: "\u25AB", emsp13: "\u2004", emsp14: "\u2005", emsp: "\u2003", ENG: "\u014A", eng: "\u014B", ensp: "\u2002", Eogon: "\u0118", eogon: "\u0119", Eopf: "\u{1D53C}", eopf: "\u{1D556}", epar: "\u22D5", eparsl: "\u29E3", eplus: "\u2A71", epsi: "\u03B5", Epsilon: "\u0395", epsilon: "\u03B5", epsiv: "\u03F5", eqcirc: "\u2256", eqcolon: "\u2255", eqsim: "\u2242", eqslantgtr: "\u2A96", eqslantless: "\u2A95", Equal: "\u2A75", equals: "=", EqualTilde: "\u2242", equest: "\u225F", Equilibrium: "\u21CC", equiv: "\u2261", equivDD: "\u2A78", eqvparsl: "\u29E5", erarr: "\u2971", erDot: "\u2253", escr: "\u212F", Escr: "\u2130", esdot: "\u2250", Esim: "\u2A73", esim: "\u2242", Eta: "\u0397", eta: "\u03B7", ETH: "\xD0", eth: "\xF0", Euml: "\xCB", euml: "\xEB", euro: "\u20AC", excl: "!", exist: "\u2203", Exists: "\u2203", expectation: "\u2130", exponentiale: "\u2147", ExponentialE: "\u2147", fallingdotseq: "\u2252", Fcy: "\u0424", fcy: "\u0444", female: "\u2640", ffilig: "\uFB03", fflig: "\uFB00", ffllig: "\uFB04", Ffr: "\u{1D509}", ffr: "\u{1D523}", filig: "\uFB01", FilledSmallSquare: "\u25FC", FilledVerySmallSquare: "\u25AA", fjlig: "fj", flat: "\u266D", fllig: "\uFB02", fltns: "\u25B1", fnof: "\u0192", Fopf: "\u{1D53D}", fopf: "\u{1D557}", forall: "\u2200", ForAll: "\u2200", fork: "\u22D4", forkv: "\u2AD9", Fouriertrf: "\u2131", fpartint: "\u2A0D", frac12: "\xBD", frac13: "\u2153", frac14: "\xBC", frac15: "\u2155", frac16: "\u2159", frac18: "\u215B", frac23: "\u2154", frac25: "\u2156", frac34: "\xBE", frac35: "\u2157", frac38: "\u215C", frac45: "\u2158", frac56: "\u215A", frac58: "\u215D", frac78: "\u215E", frasl: "\u2044", frown: "\u2322", fscr: "\u{1D4BB}", Fscr: "\u2131", gacute: "\u01F5", Gamma: "\u0393", gamma: "\u03B3", Gammad: "\u03DC", gammad: "\u03DD", gap: "\u2A86", Gbreve: "\u011E", gbreve: "\u011F", Gcedil: "\u0122", Gcirc: "\u011C", gcirc: "\u011D", Gcy: "\u0413", gcy: "\u0433", Gdot: "\u0120", gdot: "\u0121", ge: "\u2265", gE: "\u2267", gEl: "\u2A8C", gel: "\u22DB", geq: "\u2265", geqq: "\u2267", geqslant: "\u2A7E", gescc: "\u2AA9", ges: "\u2A7E", gesdot: "\u2A80", gesdoto: "\u2A82", gesdotol: "\u2A84", gesl: "\u22DB\uFE00", gesles: "\u2A94", Gfr: "\u{1D50A}", gfr: "\u{1D524}", gg: "\u226B", Gg: "\u22D9", ggg: "\u22D9", gimel: "\u2137", GJcy: "\u0403", gjcy: "\u0453", gla: "\u2AA5", gl: "\u2277", glE: "\u2A92", glj: "\u2AA4", gnap: "\u2A8A", gnapprox: "\u2A8A", gne: "\u2A88", gnE: "\u2269", gneq: "\u2A88", gneqq: "\u2269", gnsim: "\u22E7", Gopf: "\u{1D53E}", gopf: "\u{1D558}", grave: "`", GreaterEqual: "\u2265", GreaterEqualLess: "\u22DB", GreaterFullEqual: "\u2267", GreaterGreater: "\u2AA2", GreaterLess: "\u2277", GreaterSlantEqual: "\u2A7E", GreaterTilde: "\u2273", Gscr: "\u{1D4A2}", gscr: "\u210A", gsim: "\u2273", gsime: "\u2A8E", gsiml: "\u2A90", gtcc: "\u2AA7", gtcir: "\u2A7A", gt: ">", GT: ">", Gt: "\u226B", gtdot: "\u22D7", gtlPar: "\u2995", gtquest: "\u2A7C", gtrapprox: "\u2A86", gtrarr: "\u2978", gtrdot: "\u22D7", gtreqless: "\u22DB", gtreqqless: "\u2A8C", gtrless: "\u2277", gtrsim: "\u2273", gvertneqq: "\u2269\uFE00", gvnE: "\u2269\uFE00", Hacek: "\u02C7", hairsp: "\u200A", half: "\xBD", hamilt: "\u210B", HARDcy: "\u042A", hardcy: "\u044A", harrcir: "\u2948", harr: "\u2194", hArr: "\u21D4", harrw: "\u21AD", Hat: "^", hbar: "\u210F", Hcirc: "\u0124", hcirc: "\u0125", hearts: "\u2665", heartsuit: "\u2665", hellip: "\u2026", hercon: "\u22B9", hfr: "\u{1D525}", Hfr: "\u210C", HilbertSpace: "\u210B", hksearow: "\u2925", hkswarow: "\u2926", hoarr: "\u21FF", homtht: "\u223B", hookleftarrow: "\u21A9", hookrightarrow: "\u21AA", hopf: "\u{1D559}", Hopf: "\u210D", horbar: "\u2015", HorizontalLine: "\u2500", hscr: "\u{1D4BD}", Hscr: "\u210B", hslash: "\u210F", Hstrok: "\u0126", hstrok: "\u0127", HumpDownHump: "\u224E", HumpEqual: "\u224F", hybull: "\u2043", hyphen: "\u2010", Iacute: "\xCD", iacute: "\xED", ic: "\u2063", Icirc: "\xCE", icirc: "\xEE", Icy: "\u0418", icy: "\u0438", Idot: "\u0130", IEcy: "\u0415", iecy: "\u0435", iexcl: "\xA1", iff: "\u21D4", ifr: "\u{1D526}", Ifr: "\u2111", Igrave: "\xCC", igrave: "\xEC", ii: "\u2148", iiiint: "\u2A0C", iiint: "\u222D", iinfin: "\u29DC", iiota: "\u2129", IJlig: "\u0132", ijlig: "\u0133", Imacr: "\u012A", imacr: "\u012B", image: "\u2111", ImaginaryI: "\u2148", imagline: "\u2110", imagpart: "\u2111", imath: "\u0131", Im: "\u2111", imof: "\u22B7", imped: "\u01B5", Implies: "\u21D2", incare: "\u2105", in: "\u2208", infin: "\u221E", infintie: "\u29DD", inodot: "\u0131", intcal: "\u22BA", int: "\u222B", Int: "\u222C", integers: "\u2124", Integral: "\u222B", intercal: "\u22BA", Intersection: "\u22C2", intlarhk: "\u2A17", intprod: "\u2A3C", InvisibleComma: "\u2063", InvisibleTimes: "\u2062", IOcy: "\u0401", iocy: "\u0451", Iogon: "\u012E", iogon: "\u012F", Iopf: "\u{1D540}", iopf: "\u{1D55A}", Iota: "\u0399", iota: "\u03B9", iprod: "\u2A3C", iquest: "\xBF", iscr: "\u{1D4BE}", Iscr: "\u2110", isin: "\u2208", isindot: "\u22F5", isinE: "\u22F9", isins: "\u22F4", isinsv: "\u22F3", isinv: "\u2208", it: "\u2062", Itilde: "\u0128", itilde: "\u0129", Iukcy: "\u0406", iukcy: "\u0456", Iuml: "\xCF", iuml: "\xEF", Jcirc: "\u0134", jcirc: "\u0135", Jcy: "\u0419", jcy: "\u0439", Jfr: "\u{1D50D}", jfr: "\u{1D527}", jmath: "\u0237", Jopf: "\u{1D541}", jopf: "\u{1D55B}", Jscr: "\u{1D4A5}", jscr: "\u{1D4BF}", Jsercy: "\u0408", jsercy: "\u0458", Jukcy: "\u0404", jukcy: "\u0454", Kappa: "\u039A", kappa: "\u03BA", kappav: "\u03F0", Kcedil: "\u0136", kcedil: "\u0137", Kcy: "\u041A", kcy: "\u043A", Kfr: "\u{1D50E}", kfr: "\u{1D528}", kgreen: "\u0138", KHcy: "\u0425", khcy: "\u0445", KJcy: "\u040C", kjcy: "\u045C", Kopf: "\u{1D542}", kopf: "\u{1D55C}", Kscr: "\u{1D4A6}", kscr: "\u{1D4C0}", lAarr: "\u21DA", Lacute: "\u0139", lacute: "\u013A", laemptyv: "\u29B4", lagran: "\u2112", Lambda: "\u039B", lambda: "\u03BB", lang: "\u27E8", Lang: "\u27EA", langd: "\u2991", langle: "\u27E8", lap: "\u2A85", Laplacetrf: "\u2112", laquo: "\xAB", larrb: "\u21E4", larrbfs: "\u291F", larr: "\u2190", Larr: "\u219E", lArr: "\u21D0", larrfs: "\u291D", larrhk: "\u21A9", larrlp: "\u21AB", larrpl: "\u2939", larrsim: "\u2973", larrtl: "\u21A2", latail: "\u2919", lAtail: "\u291B", lat: "\u2AAB", late: "\u2AAD", lates: "\u2AAD\uFE00", lbarr: "\u290C", lBarr: "\u290E", lbbrk: "\u2772", lbrace: "{", lbrack: "[", lbrke: "\u298B", lbrksld: "\u298F", lbrkslu: "\u298D", Lcaron: "\u013D", lcaron: "\u013E", Lcedil: "\u013B", lcedil: "\u013C", lceil: "\u2308", lcub: "{", Lcy: "\u041B", lcy: "\u043B", ldca: "\u2936", ldquo: "\u201C", ldquor: "\u201E", ldrdhar: "\u2967", ldrushar: "\u294B", ldsh: "\u21B2", le: "\u2264", lE: "\u2266", LeftAngleBracket: "\u27E8", LeftArrowBar: "\u21E4", leftarrow: "\u2190", LeftArrow: "\u2190", Leftarrow: "\u21D0", LeftArrowRightArrow: "\u21C6", leftarrowtail: "\u21A2", LeftCeiling: "\u2308", LeftDoubleBracket: "\u27E6", LeftDownTeeVector: "\u2961", LeftDownVectorBar: "\u2959", LeftDownVector: "\u21C3", LeftFloor: "\u230A", leftharpoondown: "\u21BD", leftharpoonup: "\u21BC", leftleftarrows: "\u21C7", leftrightarrow: "\u2194", LeftRightArrow: "\u2194", Leftrightarrow: "\u21D4", leftrightarrows: "\u21C6", leftrightharpoons: "\u21CB", leftrightsquigarrow: "\u21AD", LeftRightVector: "\u294E", LeftTeeArrow: "\u21A4", LeftTee: "\u22A3", LeftTeeVector: "\u295A", leftthreetimes: "\u22CB", LeftTriangleBar: "\u29CF", LeftTriangle: "\u22B2", LeftTriangleEqual: "\u22B4", LeftUpDownVector: "\u2951", LeftUpTeeVector: "\u2960", LeftUpVectorBar: "\u2958", LeftUpVector: "\u21BF", LeftVectorBar: "\u2952", LeftVector: "\u21BC", lEg: "\u2A8B", leg: "\u22DA", leq: "\u2264", leqq: "\u2266", leqslant: "\u2A7D", lescc: "\u2AA8", les: "\u2A7D", lesdot: "\u2A7F", lesdoto: "\u2A81", lesdotor: "\u2A83", lesg: "\u22DA\uFE00", lesges: "\u2A93", lessapprox: "\u2A85", lessdot: "\u22D6", lesseqgtr: "\u22DA", lesseqqgtr: "\u2A8B", LessEqualGreater: "\u22DA", LessFullEqual: "\u2266", LessGreater: "\u2276", lessgtr: "\u2276", LessLess: "\u2AA1", lesssim: "\u2272", LessSlantEqual: "\u2A7D", LessTilde: "\u2272", lfisht: "\u297C", lfloor: "\u230A", Lfr: "\u{1D50F}", lfr: "\u{1D529}", lg: "\u2276", lgE: "\u2A91", lHar: "\u2962", lhard: "\u21BD", lharu: "\u21BC", lharul: "\u296A", lhblk: "\u2584", LJcy: "\u0409", ljcy: "\u0459", llarr: "\u21C7", ll: "\u226A", Ll: "\u22D8", llcorner: "\u231E", Lleftarrow: "\u21DA", llhard: "\u296B", lltri: "\u25FA", Lmidot: "\u013F", lmidot: "\u0140", lmoustache: "\u23B0", lmoust: "\u23B0", lnap: "\u2A89", lnapprox: "\u2A89", lne: "\u2A87", lnE: "\u2268", lneq: "\u2A87", lneqq: "\u2268", lnsim: "\u22E6", loang: "\u27EC", loarr: "\u21FD", lobrk: "\u27E6", longleftarrow: "\u27F5", LongLeftArrow: "\u27F5", Longleftarrow: "\u27F8", longleftrightarrow: "\u27F7", LongLeftRightArrow: "\u27F7", Longleftrightarrow: "\u27FA", longmapsto: "\u27FC", longrightarrow: "\u27F6", LongRightArrow: "\u27F6", Longrightarrow: "\u27F9", looparrowleft: "\u21AB", looparrowright: "\u21AC", lopar: "\u2985", Lopf: "\u{1D543}", lopf: "\u{1D55D}", loplus: "\u2A2D", lotimes: "\u2A34", lowast: "\u2217", lowbar: "_", LowerLeftArrow: "\u2199", LowerRightArrow: "\u2198", loz: "\u25CA", lozenge: "\u25CA", lozf: "\u29EB", lpar: "(", lparlt: "\u2993", lrarr: "\u21C6", lrcorner: "\u231F", lrhar: "\u21CB", lrhard: "\u296D", lrm: "\u200E", lrtri: "\u22BF", lsaquo: "\u2039", lscr: "\u{1D4C1}", Lscr: "\u2112", lsh: "\u21B0", Lsh: "\u21B0", lsim: "\u2272", lsime: "\u2A8D", lsimg: "\u2A8F", lsqb: "[", lsquo: "\u2018", lsquor: "\u201A", Lstrok: "\u0141", lstrok: "\u0142", ltcc: "\u2AA6", ltcir: "\u2A79", lt: "<", LT: "<", Lt: "\u226A", ltdot: "\u22D6", lthree: "\u22CB", ltimes: "\u22C9", ltlarr: "\u2976", ltquest: "\u2A7B", ltri: "\u25C3", ltrie: "\u22B4", ltrif: "\u25C2", ltrPar: "\u2996", lurdshar: "\u294A", luruhar: "\u2966", lvertneqq: "\u2268\uFE00", lvnE: "\u2268\uFE00", macr: "\xAF", male: "\u2642", malt: "\u2720", maltese: "\u2720", Map: "\u2905", map: "\u21A6", mapsto: "\u21A6", mapstodown: "\u21A7", mapstoleft: "\u21A4", mapstoup: "\u21A5", marker: "\u25AE", mcomma: "\u2A29", Mcy: "\u041C", mcy: "\u043C", mdash: "\u2014", mDDot: "\u223A", measuredangle: "\u2221", MediumSpace: "\u205F", Mellintrf: "\u2133", Mfr: "\u{1D510}", mfr: "\u{1D52A}", mho: "\u2127", micro: "\xB5", midast: "*", midcir: "\u2AF0", mid: "\u2223", middot: "\xB7", minusb: "\u229F", minus: "\u2212", minusd: "\u2238", minusdu: "\u2A2A", MinusPlus: "\u2213", mlcp: "\u2ADB", mldr: "\u2026", mnplus: "\u2213", models: "\u22A7", Mopf: "\u{1D544}", mopf: "\u{1D55E}", mp: "\u2213", mscr: "\u{1D4C2}", Mscr: "\u2133", mstpos: "\u223E", Mu: "\u039C", mu: "\u03BC", multimap: "\u22B8", mumap: "\u22B8", nabla: "\u2207", Nacute: "\u0143", nacute: "\u0144", nang: "\u2220\u20D2", nap: "\u2249", napE: "\u2A70\u0338", napid: "\u224B\u0338", napos: "\u0149", napprox: "\u2249", natural: "\u266E", naturals: "\u2115", natur: "\u266E", nbsp: "\xA0", nbump: "\u224E\u0338", nbumpe: "\u224F\u0338", ncap: "\u2A43", Ncaron: "\u0147", ncaron: "\u0148", Ncedil: "\u0145", ncedil: "\u0146", ncong: "\u2247", ncongdot: "\u2A6D\u0338", ncup: "\u2A42", Ncy: "\u041D", ncy: "\u043D", ndash: "\u2013", nearhk: "\u2924", nearr: "\u2197", neArr: "\u21D7", nearrow: "\u2197", ne: "\u2260", nedot: "\u2250\u0338", NegativeMediumSpace: "\u200B", NegativeThickSpace: "\u200B", NegativeThinSpace: "\u200B", NegativeVeryThinSpace: "\u200B", nequiv: "\u2262", nesear: "\u2928", nesim: "\u2242\u0338", NestedGreaterGreater: "\u226B", NestedLessLess: "\u226A", NewLine: "\n", nexist: "\u2204", nexists: "\u2204", Nfr: "\u{1D511}", nfr: "\u{1D52B}", ngE: "\u2267\u0338", nge: "\u2271", ngeq: "\u2271", ngeqq: "\u2267\u0338", ngeqslant: "\u2A7E\u0338", nges: "\u2A7E\u0338", nGg: "\u22D9\u0338", ngsim: "\u2275", nGt: "\u226B\u20D2", ngt: "\u226F", ngtr: "\u226F", nGtv: "\u226B\u0338", nharr: "\u21AE", nhArr: "\u21CE", nhpar: "\u2AF2", ni: "\u220B", nis: "\u22FC", nisd: "\u22FA", niv: "\u220B", NJcy: "\u040A", njcy: "\u045A", nlarr: "\u219A", nlArr: "\u21CD", nldr: "\u2025", nlE: "\u2266\u0338", nle: "\u2270", nleftarrow: "\u219A", nLeftarrow: "\u21CD", nleftrightarrow: "\u21AE", nLeftrightarrow: "\u21CE", nleq: "\u2270", nleqq: "\u2266\u0338", nleqslant: "\u2A7D\u0338", nles: "\u2A7D\u0338", nless: "\u226E", nLl: "\u22D8\u0338", nlsim: "\u2274", nLt: "\u226A\u20D2", nlt: "\u226E", nltri: "\u22EA", nltrie: "\u22EC", nLtv: "\u226A\u0338", nmid: "\u2224", NoBreak: "\u2060", NonBreakingSpace: "\xA0", nopf: "\u{1D55F}", Nopf: "\u2115", Not: "\u2AEC", not: "\xAC", NotCongruent: "\u2262", NotCupCap: "\u226D", NotDoubleVerticalBar: "\u2226", NotElement: "\u2209", NotEqual: "\u2260", NotEqualTilde: "\u2242\u0338", NotExists: "\u2204", NotGreater: "\u226F", NotGreaterEqual: "\u2271", NotGreaterFullEqual: "\u2267\u0338", NotGreaterGreater: "\u226B\u0338", NotGreaterLess: "\u2279", NotGreaterSlantEqual: "\u2A7E\u0338", NotGreaterTilde: "\u2275", NotHumpDownHump: "\u224E\u0338", NotHumpEqual: "\u224F\u0338", notin: "\u2209", notindot: "\u22F5\u0338", notinE: "\u22F9\u0338", notinva: "\u2209", notinvb: "\u22F7", notinvc: "\u22F6", NotLeftTriangleBar: "\u29CF\u0338", NotLeftTriangle: "\u22EA", NotLeftTriangleEqual: "\u22EC", NotLess: "\u226E", NotLessEqual: "\u2270", NotLessGreater: "\u2278", NotLessLess: "\u226A\u0338", NotLessSlantEqual: "\u2A7D\u0338", NotLessTilde: "\u2274", NotNestedGreaterGreater: "\u2AA2\u0338", NotNestedLessLess: "\u2AA1\u0338", notni: "\u220C", notniva: "\u220C", notnivb: "\u22FE", notnivc: "\u22FD", NotPrecedes: "\u2280", NotPrecedesEqual: "\u2AAF\u0338", NotPrecedesSlantEqual: "\u22E0", NotReverseElement: "\u220C", NotRightTriangleBar: "\u29D0\u0338", NotRightTriangle: "\u22EB", NotRightTriangleEqual: "\u22ED", NotSquareSubset: "\u228F\u0338", NotSquareSubsetEqual: "\u22E2", NotSquareSuperset: "\u2290\u0338", NotSquareSupersetEqual: "\u22E3", NotSubset: "\u2282\u20D2", NotSubsetEqual: "\u2288", NotSucceeds: "\u2281", NotSucceedsEqual: "\u2AB0\u0338", NotSucceedsSlantEqual: "\u22E1", NotSucceedsTilde: "\u227F\u0338", NotSuperset: "\u2283\u20D2", NotSupersetEqual: "\u2289", NotTilde: "\u2241", NotTildeEqual: "\u2244", NotTildeFullEqual: "\u2247", NotTildeTilde: "\u2249", NotVerticalBar: "\u2224", nparallel: "\u2226", npar: "\u2226", nparsl: "\u2AFD\u20E5", npart: "\u2202\u0338", npolint: "\u2A14", npr: "\u2280", nprcue: "\u22E0", nprec: "\u2280", npreceq: "\u2AAF\u0338", npre: "\u2AAF\u0338", nrarrc: "\u2933\u0338", nrarr: "\u219B", nrArr: "\u21CF", nrarrw: "\u219D\u0338", nrightarrow: "\u219B", nRightarrow: "\u21CF", nrtri: "\u22EB", nrtrie: "\u22ED", nsc: "\u2281", nsccue: "\u22E1", nsce: "\u2AB0\u0338", Nscr: "\u{1D4A9}", nscr: "\u{1D4C3}", nshortmid: "\u2224", nshortparallel: "\u2226", nsim: "\u2241", nsime: "\u2244", nsimeq: "\u2244", nsmid: "\u2224", nspar: "\u2226", nsqsube: "\u22E2", nsqsupe: "\u22E3", nsub: "\u2284", nsubE: "\u2AC5\u0338", nsube: "\u2288", nsubset: "\u2282\u20D2", nsubseteq: "\u2288", nsubseteqq: "\u2AC5\u0338", nsucc: "\u2281", nsucceq: "\u2AB0\u0338", nsup: "\u2285", nsupE: "\u2AC6\u0338", nsupe: "\u2289", nsupset: "\u2283\u20D2", nsupseteq: "\u2289", nsupseteqq: "\u2AC6\u0338", ntgl: "\u2279", Ntilde: "\xD1", ntilde: "\xF1", ntlg: "\u2278", ntriangleleft: "\u22EA", ntrianglelefteq: "\u22EC", ntriangleright: "\u22EB", ntrianglerighteq: "\u22ED", Nu: "\u039D", nu: "\u03BD", num: "#", numero: "\u2116", numsp: "\u2007", nvap: "\u224D\u20D2", nvdash: "\u22AC", nvDash: "\u22AD", nVdash: "\u22AE", nVDash: "\u22AF", nvge: "\u2265\u20D2", nvgt: ">\u20D2", nvHarr: "\u2904", nvinfin: "\u29DE", nvlArr: "\u2902", nvle: "\u2264\u20D2", nvlt: "<\u20D2", nvltrie: "\u22B4\u20D2", nvrArr: "\u2903", nvrtrie: "\u22B5\u20D2", nvsim: "\u223C\u20D2", nwarhk: "\u2923", nwarr: "\u2196", nwArr: "\u21D6", nwarrow: "\u2196", nwnear: "\u2927", Oacute: "\xD3", oacute: "\xF3", oast: "\u229B", Ocirc: "\xD4", ocirc: "\xF4", ocir: "\u229A", Ocy: "\u041E", ocy: "\u043E", odash: "\u229D", Odblac: "\u0150", odblac: "\u0151", odiv: "\u2A38", odot: "\u2299", odsold: "\u29BC", OElig: "\u0152", oelig: "\u0153", ofcir: "\u29BF", Ofr: "\u{1D512}", ofr: "\u{1D52C}", ogon: "\u02DB", Ograve: "\xD2", ograve: "\xF2", ogt: "\u29C1", ohbar: "\u29B5", ohm: "\u03A9", oint: "\u222E", olarr: "\u21BA", olcir: "\u29BE", olcross: "\u29BB", oline: "\u203E", olt: "\u29C0", Omacr: "\u014C", omacr: "\u014D", Omega: "\u03A9", omega: "\u03C9", Omicron: "\u039F", omicron: "\u03BF", omid: "\u29B6", ominus: "\u2296", Oopf: "\u{1D546}", oopf: "\u{1D560}", opar: "\u29B7", OpenCurlyDoubleQuote: "\u201C", OpenCurlyQuote: "\u2018", operp: "\u29B9", oplus: "\u2295", orarr: "\u21BB", Or: "\u2A54", or: "\u2228", ord: "\u2A5D", order: "\u2134", orderof: "\u2134", ordf: "\xAA", ordm: "\xBA", origof: "\u22B6", oror: "\u2A56", orslope: "\u2A57", orv: "\u2A5B", oS: "\u24C8", Oscr: "\u{1D4AA}", oscr: "\u2134", Oslash: "\xD8", oslash: "\xF8", osol: "\u2298", Otilde: "\xD5", otilde: "\xF5", otimesas: "\u2A36", Otimes: "\u2A37", otimes: "\u2297", Ouml: "\xD6", ouml: "\xF6", ovbar: "\u233D", OverBar: "\u203E", OverBrace: "\u23DE", OverBracket: "\u23B4", OverParenthesis: "\u23DC", para: "\xB6", parallel: "\u2225", par: "\u2225", parsim: "\u2AF3", parsl: "\u2AFD", part: "\u2202", PartialD: "\u2202", Pcy: "\u041F", pcy: "\u043F", percnt: "%", period: ".", permil: "\u2030", perp: "\u22A5", pertenk: "\u2031", Pfr: "\u{1D513}", pfr: "\u{1D52D}", Phi: "\u03A6", phi: "\u03C6", phiv: "\u03D5", phmmat: "\u2133", phone: "\u260E", Pi: "\u03A0", pi: "\u03C0", pitchfork: "\u22D4", piv: "\u03D6", planck: "\u210F", planckh: "\u210E", plankv: "\u210F", plusacir: "\u2A23", plusb: "\u229E", pluscir: "\u2A22", plus: "+", plusdo: "\u2214", plusdu: "\u2A25", pluse: "\u2A72", PlusMinus: "\xB1", plusmn: "\xB1", plussim: "\u2A26", plustwo: "\u2A27", pm: "\xB1", Poincareplane: "\u210C", pointint: "\u2A15", popf: "\u{1D561}", Popf: "\u2119", pound: "\xA3", prap: "\u2AB7", Pr: "\u2ABB", pr: "\u227A", prcue: "\u227C", precapprox: "\u2AB7", prec: "\u227A", preccurlyeq: "\u227C", Precedes: "\u227A", PrecedesEqual: "\u2AAF", PrecedesSlantEqual: "\u227C", PrecedesTilde: "\u227E", preceq: "\u2AAF", precnapprox: "\u2AB9", precneqq: "\u2AB5", precnsim: "\u22E8", pre: "\u2AAF", prE: "\u2AB3", precsim: "\u227E", prime: "\u2032", Prime: "\u2033", primes: "\u2119", prnap: "\u2AB9", prnE: "\u2AB5", prnsim: "\u22E8", prod: "\u220F", Product: "\u220F", profalar: "\u232E", profline: "\u2312", profsurf: "\u2313", prop: "\u221D", Proportional: "\u221D", Proportion: "\u2237", propto: "\u221D", prsim: "\u227E", prurel: "\u22B0", Pscr: "\u{1D4AB}", pscr: "\u{1D4C5}", Psi: "\u03A8", psi: "\u03C8", puncsp: "\u2008", Qfr: "\u{1D514}", qfr: "\u{1D52E}", qint: "\u2A0C", qopf: "\u{1D562}", Qopf: "\u211A", qprime: "\u2057", Qscr: "\u{1D4AC}", qscr: "\u{1D4C6}", quaternions: "\u210D", quatint: "\u2A16", quest: "?", questeq: "\u225F", quot: '"', QUOT: '"', rAarr: "\u21DB", race: "\u223D\u0331", Racute: "\u0154", racute: "\u0155", radic: "\u221A", raemptyv: "\u29B3", rang: "\u27E9", Rang: "\u27EB", rangd: "\u2992", range: "\u29A5", rangle: "\u27E9", raquo: "\xBB", rarrap: "\u2975", rarrb: "\u21E5", rarrbfs: "\u2920", rarrc: "\u2933", rarr: "\u2192", Rarr: "\u21A0", rArr: "\u21D2", rarrfs: "\u291E", rarrhk: "\u21AA", rarrlp: "\u21AC", rarrpl: "\u2945", rarrsim: "\u2974", Rarrtl: "\u2916", rarrtl: "\u21A3", rarrw: "\u219D", ratail: "\u291A", rAtail: "\u291C", ratio: "\u2236", rationals: "\u211A", rbarr: "\u290D", rBarr: "\u290F", RBarr: "\u2910", rbbrk: "\u2773", rbrace: "}", rbrack: "]", rbrke: "\u298C", rbrksld: "\u298E", rbrkslu: "\u2990", Rcaron: "\u0158", rcaron: "\u0159", Rcedil: "\u0156", rcedil: "\u0157", rceil: "\u2309", rcub: "}", Rcy: "\u0420", rcy: "\u0440", rdca: "\u2937", rdldhar: "\u2969", rdquo: "\u201D", rdquor: "\u201D", rdsh: "\u21B3", real: "\u211C", realine: "\u211B", realpart: "\u211C", reals: "\u211D", Re: "\u211C", rect: "\u25AD", reg: "\xAE", REG: "\xAE", ReverseElement: "\u220B", ReverseEquilibrium: "\u21CB", ReverseUpEquilibrium: "\u296F", rfisht: "\u297D", rfloor: "\u230B", rfr: "\u{1D52F}", Rfr: "\u211C", rHar: "\u2964", rhard: "\u21C1", rharu: "\u21C0", rharul: "\u296C", Rho: "\u03A1", rho: "\u03C1", rhov: "\u03F1", RightAngleBracket: "\u27E9", RightArrowBar: "\u21E5", rightarrow: "\u2192", RightArrow: "\u2192", Rightarrow: "\u21D2", RightArrowLeftArrow: "\u21C4", rightarrowtail: "\u21A3", RightCeiling: "\u2309", RightDoubleBracket: "\u27E7", RightDownTeeVector: "\u295D", RightDownVectorBar: "\u2955", RightDownVector: "\u21C2", RightFloor: "\u230B", rightharpoondown: "\u21C1", rightharpoonup: "\u21C0", rightleftarrows: "\u21C4", rightleftharpoons: "\u21CC", rightrightarrows: "\u21C9", rightsquigarrow: "\u219D", RightTeeArrow: "\u21A6", RightTee: "\u22A2", RightTeeVector: "\u295B", rightthreetimes: "\u22CC", RightTriangleBar: "\u29D0", RightTriangle: "\u22B3", RightTriangleEqual: "\u22B5", RightUpDownVector: "\u294F", RightUpTeeVector: "\u295C", RightUpVectorBar: "\u2954", RightUpVector: "\u21BE", RightVectorBar: "\u2953", RightVector: "\u21C0", ring: "\u02DA", risingdotseq: "\u2253", rlarr: "\u21C4", rlhar: "\u21CC", rlm: "\u200F", rmoustache: "\u23B1", rmoust: "\u23B1", rnmid: "\u2AEE", roang: "\u27ED", roarr: "\u21FE", robrk: "\u27E7", ropar: "\u2986", ropf: "\u{1D563}", Ropf: "\u211D", roplus: "\u2A2E", rotimes: "\u2A35", RoundImplies: "\u2970", rpar: ")", rpargt: "\u2994", rppolint: "\u2A12", rrarr: "\u21C9", Rrightarrow: "\u21DB", rsaquo: "\u203A", rscr: "\u{1D4C7}", Rscr: "\u211B", rsh: "\u21B1", Rsh: "\u21B1", rsqb: "]", rsquo: "\u2019", rsquor: "\u2019", rthree: "\u22CC", rtimes: "\u22CA", rtri: "\u25B9", rtrie: "\u22B5", rtrif: "\u25B8", rtriltri: "\u29CE", RuleDelayed: "\u29F4", ruluhar: "\u2968", rx: "\u211E", Sacute: "\u015A", sacute: "\u015B", sbquo: "\u201A", scap: "\u2AB8", Scaron: "\u0160", scaron: "\u0161", Sc: "\u2ABC", sc: "\u227B", sccue: "\u227D", sce: "\u2AB0", scE: "\u2AB4", Scedil: "\u015E", scedil: "\u015F", Scirc: "\u015C", scirc: "\u015D", scnap: "\u2ABA", scnE: "\u2AB6", scnsim: "\u22E9", scpolint: "\u2A13", scsim: "\u227F", Scy: "\u0421", scy: "\u0441", sdotb: "\u22A1", sdot: "\u22C5", sdote: "\u2A66", searhk: "\u2925", searr: "\u2198", seArr: "\u21D8", searrow: "\u2198", sect: "\xA7", semi: ";", seswar: "\u2929", setminus: "\u2216", setmn: "\u2216", sext: "\u2736", Sfr: "\u{1D516}", sfr: "\u{1D530}", sfrown: "\u2322", sharp: "\u266F", SHCHcy: "\u0429", shchcy: "\u0449", SHcy: "\u0428", shcy: "\u0448", ShortDownArrow: "\u2193", ShortLeftArrow: "\u2190", shortmid: "\u2223", shortparallel: "\u2225", ShortRightArrow: "\u2192", ShortUpArrow: "\u2191", shy: "\xAD", Sigma: "\u03A3", sigma: "\u03C3", sigmaf: "\u03C2", sigmav: "\u03C2", sim: "\u223C", simdot: "\u2A6A", sime: "\u2243", simeq: "\u2243", simg: "\u2A9E", simgE: "\u2AA0", siml: "\u2A9D", simlE: "\u2A9F", simne: "\u2246", simplus: "\u2A24", simrarr: "\u2972", slarr: "\u2190", SmallCircle: "\u2218", smallsetminus: "\u2216", smashp: "\u2A33", smeparsl: "\u29E4", smid: "\u2223", smile: "\u2323", smt: "\u2AAA", smte: "\u2AAC", smtes: "\u2AAC\uFE00", SOFTcy: "\u042C", softcy: "\u044C", solbar: "\u233F", solb: "\u29C4", sol: "/", Sopf: "\u{1D54A}", sopf: "\u{1D564}", spades: "\u2660", spadesuit: "\u2660", spar: "\u2225", sqcap: "\u2293", sqcaps: "\u2293\uFE00", sqcup: "\u2294", sqcups: "\u2294\uFE00", Sqrt: "\u221A", sqsub: "\u228F", sqsube: "\u2291", sqsubset: "\u228F", sqsubseteq: "\u2291", sqsup: "\u2290", sqsupe: "\u2292", sqsupset: "\u2290", sqsupseteq: "\u2292", square: "\u25A1", Square: "\u25A1", SquareIntersection: "\u2293", SquareSubset: "\u228F", SquareSubsetEqual: "\u2291", SquareSuperset: "\u2290", SquareSupersetEqual: "\u2292", SquareUnion: "\u2294", squarf: "\u25AA", squ: "\u25A1", squf: "\u25AA", srarr: "\u2192", Sscr: "\u{1D4AE}", sscr: "\u{1D4C8}", ssetmn: "\u2216", ssmile: "\u2323", sstarf: "\u22C6", Star: "\u22C6", star: "\u2606", starf: "\u2605", straightepsilon: "\u03F5", straightphi: "\u03D5", strns: "\xAF", sub: "\u2282", Sub: "\u22D0", subdot: "\u2ABD", subE: "\u2AC5", sube: "\u2286", subedot: "\u2AC3", submult: "\u2AC1", subnE: "\u2ACB", subne: "\u228A", subplus: "\u2ABF", subrarr: "\u2979", subset: "\u2282", Subset: "\u22D0", subseteq: "\u2286", subseteqq: "\u2AC5", SubsetEqual: "\u2286", subsetneq: "\u228A", subsetneqq: "\u2ACB", subsim: "\u2AC7", subsub: "\u2AD5", subsup: "\u2AD3", succapprox: "\u2AB8", succ: "\u227B", succcurlyeq: "\u227D", Succeeds: "\u227B", SucceedsEqual: "\u2AB0", SucceedsSlantEqual: "\u227D", SucceedsTilde: "\u227F", succeq: "\u2AB0", succnapprox: "\u2ABA", succneqq: "\u2AB6", succnsim: "\u22E9", succsim: "\u227F", SuchThat: "\u220B", sum: "\u2211", Sum: "\u2211", sung: "\u266A", sup1: "\xB9", sup2: "\xB2", sup3: "\xB3", sup: "\u2283", Sup: "\u22D1", supdot: "\u2ABE", supdsub: "\u2AD8", supE: "\u2AC6", supe: "\u2287", supedot: "\u2AC4", Superset: "\u2283", SupersetEqual: "\u2287", suphsol: "\u27C9", suphsub: "\u2AD7", suplarr: "\u297B", supmult: "\u2AC2", supnE: "\u2ACC", supne: "\u228B", supplus: "\u2AC0", supset: "\u2283", Supset: "\u22D1", supseteq: "\u2287", supseteqq: "\u2AC6", supsetneq: "\u228B", supsetneqq: "\u2ACC", supsim: "\u2AC8", supsub: "\u2AD4", supsup: "\u2AD6", swarhk: "\u2926", swarr: "\u2199", swArr: "\u21D9", swarrow: "\u2199", swnwar: "\u292A", szlig: "\xDF", Tab: "	", target: "\u2316", Tau: "\u03A4", tau: "\u03C4", tbrk: "\u23B4", Tcaron: "\u0164", tcaron: "\u0165", Tcedil: "\u0162", tcedil: "\u0163", Tcy: "\u0422", tcy: "\u0442", tdot: "\u20DB", telrec: "\u2315", Tfr: "\u{1D517}", tfr: "\u{1D531}", there4: "\u2234", therefore: "\u2234", Therefore: "\u2234", Theta: "\u0398", theta: "\u03B8", thetasym: "\u03D1", thetav: "\u03D1", thickapprox: "\u2248", thicksim: "\u223C", ThickSpace: "\u205F\u200A", ThinSpace: "\u2009", thinsp: "\u2009", thkap: "\u2248", thksim: "\u223C", THORN: "\xDE", thorn: "\xFE", tilde: "\u02DC", Tilde: "\u223C", TildeEqual: "\u2243", TildeFullEqual: "\u2245", TildeTilde: "\u2248", timesbar: "\u2A31", timesb: "\u22A0", times: "\xD7", timesd: "\u2A30", tint: "\u222D", toea: "\u2928", topbot: "\u2336", topcir: "\u2AF1", top: "\u22A4", Topf: "\u{1D54B}", topf: "\u{1D565}", topfork: "\u2ADA", tosa: "\u2929", tprime: "\u2034", trade: "\u2122", TRADE: "\u2122", triangle: "\u25B5", triangledown: "\u25BF", triangleleft: "\u25C3", trianglelefteq: "\u22B4", triangleq: "\u225C", triangleright: "\u25B9", trianglerighteq: "\u22B5", tridot: "\u25EC", trie: "\u225C", triminus: "\u2A3A", TripleDot: "\u20DB", triplus: "\u2A39", trisb: "\u29CD", tritime: "\u2A3B", trpezium: "\u23E2", Tscr: "\u{1D4AF}", tscr: "\u{1D4C9}", TScy: "\u0426", tscy: "\u0446", TSHcy: "\u040B", tshcy: "\u045B", Tstrok: "\u0166", tstrok: "\u0167", twixt: "\u226C", twoheadleftarrow: "\u219E", twoheadrightarrow: "\u21A0", Uacute: "\xDA", uacute: "\xFA", uarr: "\u2191", Uarr: "\u219F", uArr: "\u21D1", Uarrocir: "\u2949", Ubrcy: "\u040E", ubrcy: "\u045E", Ubreve: "\u016C", ubreve: "\u016D", Ucirc: "\xDB", ucirc: "\xFB", Ucy: "\u0423", ucy: "\u0443", udarr: "\u21C5", Udblac: "\u0170", udblac: "\u0171", udhar: "\u296E", ufisht: "\u297E", Ufr: "\u{1D518}", ufr: "\u{1D532}", Ugrave: "\xD9", ugrave: "\xF9", uHar: "\u2963", uharl: "\u21BF", uharr: "\u21BE", uhblk: "\u2580", ulcorn: "\u231C", ulcorner: "\u231C", ulcrop: "\u230F", ultri: "\u25F8", Umacr: "\u016A", umacr: "\u016B", uml: "\xA8", UnderBar: "_", UnderBrace: "\u23DF", UnderBracket: "\u23B5", UnderParenthesis: "\u23DD", Union: "\u22C3", UnionPlus: "\u228E", Uogon: "\u0172", uogon: "\u0173", Uopf: "\u{1D54C}", uopf: "\u{1D566}", UpArrowBar: "\u2912", uparrow: "\u2191", UpArrow: "\u2191", Uparrow: "\u21D1", UpArrowDownArrow: "\u21C5", updownarrow: "\u2195", UpDownArrow: "\u2195", Updownarrow: "\u21D5", UpEquilibrium: "\u296E", upharpoonleft: "\u21BF", upharpoonright: "\u21BE", uplus: "\u228E", UpperLeftArrow: "\u2196", UpperRightArrow: "\u2197", upsi: "\u03C5", Upsi: "\u03D2", upsih: "\u03D2", Upsilon: "\u03A5", upsilon: "\u03C5", UpTeeArrow: "\u21A5", UpTee: "\u22A5", upuparrows: "\u21C8", urcorn: "\u231D", urcorner: "\u231D", urcrop: "\u230E", Uring: "\u016E", uring: "\u016F", urtri: "\u25F9", Uscr: "\u{1D4B0}", uscr: "\u{1D4CA}", utdot: "\u22F0", Utilde: "\u0168", utilde: "\u0169", utri: "\u25B5", utrif: "\u25B4", uuarr: "\u21C8", Uuml: "\xDC", uuml: "\xFC", uwangle: "\u29A7", vangrt: "\u299C", varepsilon: "\u03F5", varkappa: "\u03F0", varnothing: "\u2205", varphi: "\u03D5", varpi: "\u03D6", varpropto: "\u221D", varr: "\u2195", vArr: "\u21D5", varrho: "\u03F1", varsigma: "\u03C2", varsubsetneq: "\u228A\uFE00", varsubsetneqq: "\u2ACB\uFE00", varsupsetneq: "\u228B\uFE00", varsupsetneqq: "\u2ACC\uFE00", vartheta: "\u03D1", vartriangleleft: "\u22B2", vartriangleright: "\u22B3", vBar: "\u2AE8", Vbar: "\u2AEB", vBarv: "\u2AE9", Vcy: "\u0412", vcy: "\u0432", vdash: "\u22A2", vDash: "\u22A8", Vdash: "\u22A9", VDash: "\u22AB", Vdashl: "\u2AE6", veebar: "\u22BB", vee: "\u2228", Vee: "\u22C1", veeeq: "\u225A", vellip: "\u22EE", verbar: "|", Verbar: "\u2016", vert: "|", Vert: "\u2016", VerticalBar: "\u2223", VerticalLine: "|", VerticalSeparator: "\u2758", VerticalTilde: "\u2240", VeryThinSpace: "\u200A", Vfr: "\u{1D519}", vfr: "\u{1D533}", vltri: "\u22B2", vnsub: "\u2282\u20D2", vnsup: "\u2283\u20D2", Vopf: "\u{1D54D}", vopf: "\u{1D567}", vprop: "\u221D", vrtri: "\u22B3", Vscr: "\u{1D4B1}", vscr: "\u{1D4CB}", vsubnE: "\u2ACB\uFE00", vsubne: "\u228A\uFE00", vsupnE: "\u2ACC\uFE00", vsupne: "\u228B\uFE00", Vvdash: "\u22AA", vzigzag: "\u299A", Wcirc: "\u0174", wcirc: "\u0175", wedbar: "\u2A5F", wedge: "\u2227", Wedge: "\u22C0", wedgeq: "\u2259", weierp: "\u2118", Wfr: "\u{1D51A}", wfr: "\u{1D534}", Wopf: "\u{1D54E}", wopf: "\u{1D568}", wp: "\u2118", wr: "\u2240", wreath: "\u2240", Wscr: "\u{1D4B2}", wscr: "\u{1D4CC}", xcap: "\u22C2", xcirc: "\u25EF", xcup: "\u22C3", xdtri: "\u25BD", Xfr: "\u{1D51B}", xfr: "\u{1D535}", xharr: "\u27F7", xhArr: "\u27FA", Xi: "\u039E", xi: "\u03BE", xlarr: "\u27F5", xlArr: "\u27F8", xmap: "\u27FC", xnis: "\u22FB", xodot: "\u2A00", Xopf: "\u{1D54F}", xopf: "\u{1D569}", xoplus: "\u2A01", xotime: "\u2A02", xrarr: "\u27F6", xrArr: "\u27F9", Xscr: "\u{1D4B3}", xscr: "\u{1D4CD}", xsqcup: "\u2A06", xuplus: "\u2A04", xutri: "\u25B3", xvee: "\u22C1", xwedge: "\u22C0", Yacute: "\xDD", yacute: "\xFD", YAcy: "\u042F", yacy: "\u044F", Ycirc: "\u0176", ycirc: "\u0177", Ycy: "\u042B", ycy: "\u044B", yen: "\xA5", Yfr: "\u{1D51C}", yfr: "\u{1D536}", YIcy: "\u0407", yicy: "\u0457", Yopf: "\u{1D550}", yopf: "\u{1D56A}", Yscr: "\u{1D4B4}", yscr: "\u{1D4CE}", YUcy: "\u042E", yucy: "\u044E", yuml: "\xFF", Yuml: "\u0178", Zacute: "\u0179", zacute: "\u017A", Zcaron: "\u017D", zcaron: "\u017E", Zcy: "\u0417", zcy: "\u0437", Zdot: "\u017B", zdot: "\u017C", zeetrf: "\u2128", ZeroWidthSpace: "\u200B", Zeta: "\u0396", zeta: "\u03B6", zfr: "\u{1D537}", Zfr: "\u2128", ZHcy: "\u0416", zhcy: "\u0436", zigrarr: "\u21DD", zopf: "\u{1D56B}", Zopf: "\u2124", Zscr: "\u{1D4B5}", zscr: "\u{1D4CF}", zwj: "\u200D", zwnj: "\u200C" };
  }
});

// node_modules/entities/lib/maps/legacy.json
var require_legacy = __commonJS({
  "node_modules/entities/lib/maps/legacy.json"(exports, module2) {
    module2.exports = { Aacute: "\xC1", aacute: "\xE1", Acirc: "\xC2", acirc: "\xE2", acute: "\xB4", AElig: "\xC6", aelig: "\xE6", Agrave: "\xC0", agrave: "\xE0", amp: "&", AMP: "&", Aring: "\xC5", aring: "\xE5", Atilde: "\xC3", atilde: "\xE3", Auml: "\xC4", auml: "\xE4", brvbar: "\xA6", Ccedil: "\xC7", ccedil: "\xE7", cedil: "\xB8", cent: "\xA2", copy: "\xA9", COPY: "\xA9", curren: "\xA4", deg: "\xB0", divide: "\xF7", Eacute: "\xC9", eacute: "\xE9", Ecirc: "\xCA", ecirc: "\xEA", Egrave: "\xC8", egrave: "\xE8", ETH: "\xD0", eth: "\xF0", Euml: "\xCB", euml: "\xEB", frac12: "\xBD", frac14: "\xBC", frac34: "\xBE", gt: ">", GT: ">", Iacute: "\xCD", iacute: "\xED", Icirc: "\xCE", icirc: "\xEE", iexcl: "\xA1", Igrave: "\xCC", igrave: "\xEC", iquest: "\xBF", Iuml: "\xCF", iuml: "\xEF", laquo: "\xAB", lt: "<", LT: "<", macr: "\xAF", micro: "\xB5", middot: "\xB7", nbsp: "\xA0", not: "\xAC", Ntilde: "\xD1", ntilde: "\xF1", Oacute: "\xD3", oacute: "\xF3", Ocirc: "\xD4", ocirc: "\xF4", Ograve: "\xD2", ograve: "\xF2", ordf: "\xAA", ordm: "\xBA", Oslash: "\xD8", oslash: "\xF8", Otilde: "\xD5", otilde: "\xF5", Ouml: "\xD6", ouml: "\xF6", para: "\xB6", plusmn: "\xB1", pound: "\xA3", quot: '"', QUOT: '"', raquo: "\xBB", reg: "\xAE", REG: "\xAE", sect: "\xA7", shy: "\xAD", sup1: "\xB9", sup2: "\xB2", sup3: "\xB3", szlig: "\xDF", THORN: "\xDE", thorn: "\xFE", times: "\xD7", Uacute: "\xDA", uacute: "\xFA", Ucirc: "\xDB", ucirc: "\xFB", Ugrave: "\xD9", ugrave: "\xF9", uml: "\xA8", Uuml: "\xDC", uuml: "\xFC", Yacute: "\xDD", yacute: "\xFD", yen: "\xA5", yuml: "\xFF" };
  }
});

// node_modules/entities/lib/maps/xml.json
var require_xml = __commonJS({
  "node_modules/entities/lib/maps/xml.json"(exports, module2) {
    module2.exports = { amp: "&", apos: "'", gt: ">", lt: "<", quot: '"' };
  }
});

// node_modules/htmlparser2/lib/Tokenizer.js
var require_Tokenizer = __commonJS({
  "node_modules/htmlparser2/lib/Tokenizer.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var decode_codepoint_1 = __importDefault(require_decode_codepoint());
    var entities_json_1 = __importDefault(require_entities());
    var legacy_json_1 = __importDefault(require_legacy());
    var xml_json_1 = __importDefault(require_xml());
    function whitespace(c) {
      return c === " " || c === "\n" || c === "	" || c === "\f" || c === "\r";
    }
    function isASCIIAlpha(c) {
      return c >= "a" && c <= "z" || c >= "A" && c <= "Z";
    }
    function ifElseState(upper, SUCCESS, FAILURE) {
      var lower = upper.toLowerCase();
      if (upper === lower) {
        return function(t, c) {
          if (c === lower) {
            t._state = SUCCESS;
          } else {
            t._state = FAILURE;
            t._index--;
          }
        };
      }
      return function(t, c) {
        if (c === lower || c === upper) {
          t._state = SUCCESS;
        } else {
          t._state = FAILURE;
          t._index--;
        }
      };
    }
    function consumeSpecialNameChar(upper, NEXT_STATE) {
      var lower = upper.toLowerCase();
      return function(t, c) {
        if (c === lower || c === upper) {
          t._state = NEXT_STATE;
        } else {
          t._state = 3;
          t._index--;
        }
      };
    }
    var stateBeforeCdata1 = ifElseState("C", 24, 16);
    var stateBeforeCdata2 = ifElseState("D", 25, 16);
    var stateBeforeCdata3 = ifElseState("A", 26, 16);
    var stateBeforeCdata4 = ifElseState("T", 27, 16);
    var stateBeforeCdata5 = ifElseState("A", 28, 16);
    var stateBeforeScript1 = consumeSpecialNameChar("R", 35);
    var stateBeforeScript2 = consumeSpecialNameChar("I", 36);
    var stateBeforeScript3 = consumeSpecialNameChar("P", 37);
    var stateBeforeScript4 = consumeSpecialNameChar("T", 38);
    var stateAfterScript1 = ifElseState("R", 40, 1);
    var stateAfterScript2 = ifElseState("I", 41, 1);
    var stateAfterScript3 = ifElseState("P", 42, 1);
    var stateAfterScript4 = ifElseState("T", 43, 1);
    var stateBeforeStyle1 = consumeSpecialNameChar("Y", 45);
    var stateBeforeStyle2 = consumeSpecialNameChar("L", 46);
    var stateBeforeStyle3 = consumeSpecialNameChar("E", 47);
    var stateAfterStyle1 = ifElseState("Y", 49, 1);
    var stateAfterStyle2 = ifElseState("L", 50, 1);
    var stateAfterStyle3 = ifElseState("E", 51, 1);
    var stateBeforeSpecialT = consumeSpecialNameChar("I", 54);
    var stateBeforeTitle1 = consumeSpecialNameChar("T", 55);
    var stateBeforeTitle2 = consumeSpecialNameChar("L", 56);
    var stateBeforeTitle3 = consumeSpecialNameChar("E", 57);
    var stateAfterSpecialTEnd = ifElseState("I", 58, 1);
    var stateAfterTitle1 = ifElseState("T", 59, 1);
    var stateAfterTitle2 = ifElseState("L", 60, 1);
    var stateAfterTitle3 = ifElseState("E", 61, 1);
    var stateBeforeEntity = ifElseState("#", 63, 64);
    var stateBeforeNumericEntity = ifElseState("X", 66, 65);
    var Tokenizer = function() {
      function Tokenizer2(options, cbs) {
        var _a;
        this._state = 1;
        this.buffer = "";
        this.sectionStart = 0;
        this._index = 0;
        this.bufferOffset = 0;
        this.baseState = 1;
        this.special = 1;
        this.running = true;
        this.ended = false;
        this.cbs = cbs;
        this.xmlMode = !!(options === null || options === void 0 ? void 0 : options.xmlMode);
        this.decodeEntities = (_a = options === null || options === void 0 ? void 0 : options.decodeEntities) !== null && _a !== void 0 ? _a : true;
      }
      Tokenizer2.prototype.reset = function() {
        this._state = 1;
        this.buffer = "";
        this.sectionStart = 0;
        this._index = 0;
        this.bufferOffset = 0;
        this.baseState = 1;
        this.special = 1;
        this.running = true;
        this.ended = false;
      };
      Tokenizer2.prototype.write = function(chunk) {
        if (this.ended)
          this.cbs.onerror(Error(".write() after done!"));
        this.buffer += chunk;
        this.parse();
      };
      Tokenizer2.prototype.end = function(chunk) {
        if (this.ended)
          this.cbs.onerror(Error(".end() after done!"));
        if (chunk)
          this.write(chunk);
        this.ended = true;
        if (this.running)
          this.finish();
      };
      Tokenizer2.prototype.pause = function() {
        this.running = false;
      };
      Tokenizer2.prototype.resume = function() {
        this.running = true;
        if (this._index < this.buffer.length) {
          this.parse();
        }
        if (this.ended) {
          this.finish();
        }
      };
      Tokenizer2.prototype.getAbsoluteIndex = function() {
        return this.bufferOffset + this._index;
      };
      Tokenizer2.prototype.stateText = function(c) {
        if (c === "<") {
          if (this._index > this.sectionStart) {
            this.cbs.ontext(this.getSection());
          }
          this._state = 2;
          this.sectionStart = this._index;
        } else if (this.decodeEntities && c === "&" && (this.special === 1 || this.special === 4)) {
          if (this._index > this.sectionStart) {
            this.cbs.ontext(this.getSection());
          }
          this.baseState = 1;
          this._state = 62;
          this.sectionStart = this._index;
        }
      };
      Tokenizer2.prototype.isTagStartChar = function(c) {
        return isASCIIAlpha(c) || this.xmlMode && !whitespace(c) && c !== "/" && c !== ">";
      };
      Tokenizer2.prototype.stateBeforeTagName = function(c) {
        if (c === "/") {
          this._state = 5;
        } else if (c === "<") {
          this.cbs.ontext(this.getSection());
          this.sectionStart = this._index;
        } else if (c === ">" || this.special !== 1 || whitespace(c)) {
          this._state = 1;
        } else if (c === "!") {
          this._state = 15;
          this.sectionStart = this._index + 1;
        } else if (c === "?") {
          this._state = 17;
          this.sectionStart = this._index + 1;
        } else if (!this.isTagStartChar(c)) {
          this._state = 1;
        } else {
          this._state = !this.xmlMode && (c === "s" || c === "S") ? 32 : !this.xmlMode && (c === "t" || c === "T") ? 52 : 3;
          this.sectionStart = this._index;
        }
      };
      Tokenizer2.prototype.stateInTagName = function(c) {
        if (c === "/" || c === ">" || whitespace(c)) {
          this.emitToken("onopentagname");
          this._state = 8;
          this._index--;
        }
      };
      Tokenizer2.prototype.stateBeforeClosingTagName = function(c) {
        if (whitespace(c)) {
        } else if (c === ">") {
          this._state = 1;
        } else if (this.special !== 1) {
          if (this.special !== 4 && (c === "s" || c === "S")) {
            this._state = 33;
          } else if (this.special === 4 && (c === "t" || c === "T")) {
            this._state = 53;
          } else {
            this._state = 1;
            this._index--;
          }
        } else if (!this.isTagStartChar(c)) {
          this._state = 20;
          this.sectionStart = this._index;
        } else {
          this._state = 6;
          this.sectionStart = this._index;
        }
      };
      Tokenizer2.prototype.stateInClosingTagName = function(c) {
        if (c === ">" || whitespace(c)) {
          this.emitToken("onclosetag");
          this._state = 7;
          this._index--;
        }
      };
      Tokenizer2.prototype.stateAfterClosingTagName = function(c) {
        if (c === ">") {
          this._state = 1;
          this.sectionStart = this._index + 1;
        }
      };
      Tokenizer2.prototype.stateBeforeAttributeName = function(c) {
        if (c === ">") {
          this.cbs.onopentagend();
          this._state = 1;
          this.sectionStart = this._index + 1;
        } else if (c === "/") {
          this._state = 4;
        } else if (!whitespace(c)) {
          this._state = 9;
          this.sectionStart = this._index;
        }
      };
      Tokenizer2.prototype.stateInSelfClosingTag = function(c) {
        if (c === ">") {
          this.cbs.onselfclosingtag();
          this._state = 1;
          this.sectionStart = this._index + 1;
          this.special = 1;
        } else if (!whitespace(c)) {
          this._state = 8;
          this._index--;
        }
      };
      Tokenizer2.prototype.stateInAttributeName = function(c) {
        if (c === "=" || c === "/" || c === ">" || whitespace(c)) {
          this.cbs.onattribname(this.getSection());
          this.sectionStart = -1;
          this._state = 10;
          this._index--;
        }
      };
      Tokenizer2.prototype.stateAfterAttributeName = function(c) {
        if (c === "=") {
          this._state = 11;
        } else if (c === "/" || c === ">") {
          this.cbs.onattribend(void 0);
          this._state = 8;
          this._index--;
        } else if (!whitespace(c)) {
          this.cbs.onattribend(void 0);
          this._state = 9;
          this.sectionStart = this._index;
        }
      };
      Tokenizer2.prototype.stateBeforeAttributeValue = function(c) {
        if (c === '"') {
          this._state = 12;
          this.sectionStart = this._index + 1;
        } else if (c === "'") {
          this._state = 13;
          this.sectionStart = this._index + 1;
        } else if (!whitespace(c)) {
          this._state = 14;
          this.sectionStart = this._index;
          this._index--;
        }
      };
      Tokenizer2.prototype.handleInAttributeValue = function(c, quote) {
        if (c === quote) {
          this.emitToken("onattribdata");
          this.cbs.onattribend(quote);
          this._state = 8;
        } else if (this.decodeEntities && c === "&") {
          this.emitToken("onattribdata");
          this.baseState = this._state;
          this._state = 62;
          this.sectionStart = this._index;
        }
      };
      Tokenizer2.prototype.stateInAttributeValueDoubleQuotes = function(c) {
        this.handleInAttributeValue(c, '"');
      };
      Tokenizer2.prototype.stateInAttributeValueSingleQuotes = function(c) {
        this.handleInAttributeValue(c, "'");
      };
      Tokenizer2.prototype.stateInAttributeValueNoQuotes = function(c) {
        if (whitespace(c) || c === ">") {
          this.emitToken("onattribdata");
          this.cbs.onattribend(null);
          this._state = 8;
          this._index--;
        } else if (this.decodeEntities && c === "&") {
          this.emitToken("onattribdata");
          this.baseState = this._state;
          this._state = 62;
          this.sectionStart = this._index;
        }
      };
      Tokenizer2.prototype.stateBeforeDeclaration = function(c) {
        this._state = c === "[" ? 23 : c === "-" ? 18 : 16;
      };
      Tokenizer2.prototype.stateInDeclaration = function(c) {
        if (c === ">") {
          this.cbs.ondeclaration(this.getSection());
          this._state = 1;
          this.sectionStart = this._index + 1;
        }
      };
      Tokenizer2.prototype.stateInProcessingInstruction = function(c) {
        if (c === ">") {
          this.cbs.onprocessinginstruction(this.getSection());
          this._state = 1;
          this.sectionStart = this._index + 1;
        }
      };
      Tokenizer2.prototype.stateBeforeComment = function(c) {
        if (c === "-") {
          this._state = 19;
          this.sectionStart = this._index + 1;
        } else {
          this._state = 16;
        }
      };
      Tokenizer2.prototype.stateInComment = function(c) {
        if (c === "-")
          this._state = 21;
      };
      Tokenizer2.prototype.stateInSpecialComment = function(c) {
        if (c === ">") {
          this.cbs.oncomment(this.buffer.substring(this.sectionStart, this._index));
          this._state = 1;
          this.sectionStart = this._index + 1;
        }
      };
      Tokenizer2.prototype.stateAfterComment1 = function(c) {
        if (c === "-") {
          this._state = 22;
        } else {
          this._state = 19;
        }
      };
      Tokenizer2.prototype.stateAfterComment2 = function(c) {
        if (c === ">") {
          this.cbs.oncomment(this.buffer.substring(this.sectionStart, this._index - 2));
          this._state = 1;
          this.sectionStart = this._index + 1;
        } else if (c !== "-") {
          this._state = 19;
        }
      };
      Tokenizer2.prototype.stateBeforeCdata6 = function(c) {
        if (c === "[") {
          this._state = 29;
          this.sectionStart = this._index + 1;
        } else {
          this._state = 16;
          this._index--;
        }
      };
      Tokenizer2.prototype.stateInCdata = function(c) {
        if (c === "]")
          this._state = 30;
      };
      Tokenizer2.prototype.stateAfterCdata1 = function(c) {
        if (c === "]")
          this._state = 31;
        else
          this._state = 29;
      };
      Tokenizer2.prototype.stateAfterCdata2 = function(c) {
        if (c === ">") {
          this.cbs.oncdata(this.buffer.substring(this.sectionStart, this._index - 2));
          this._state = 1;
          this.sectionStart = this._index + 1;
        } else if (c !== "]") {
          this._state = 29;
        }
      };
      Tokenizer2.prototype.stateBeforeSpecialS = function(c) {
        if (c === "c" || c === "C") {
          this._state = 34;
        } else if (c === "t" || c === "T") {
          this._state = 44;
        } else {
          this._state = 3;
          this._index--;
        }
      };
      Tokenizer2.prototype.stateBeforeSpecialSEnd = function(c) {
        if (this.special === 2 && (c === "c" || c === "C")) {
          this._state = 39;
        } else if (this.special === 3 && (c === "t" || c === "T")) {
          this._state = 48;
        } else
          this._state = 1;
      };
      Tokenizer2.prototype.stateBeforeSpecialLast = function(c, special) {
        if (c === "/" || c === ">" || whitespace(c)) {
          this.special = special;
        }
        this._state = 3;
        this._index--;
      };
      Tokenizer2.prototype.stateAfterSpecialLast = function(c, sectionStartOffset) {
        if (c === ">" || whitespace(c)) {
          this.special = 1;
          this._state = 6;
          this.sectionStart = this._index - sectionStartOffset;
          this._index--;
        } else
          this._state = 1;
      };
      Tokenizer2.prototype.parseFixedEntity = function(map) {
        if (map === void 0) {
          map = this.xmlMode ? xml_json_1.default : entities_json_1.default;
        }
        if (this.sectionStart + 1 < this._index) {
          var entity = this.buffer.substring(this.sectionStart + 1, this._index);
          if (Object.prototype.hasOwnProperty.call(map, entity)) {
            this.emitPartial(map[entity]);
            this.sectionStart = this._index + 1;
          }
        }
      };
      Tokenizer2.prototype.parseLegacyEntity = function() {
        var start = this.sectionStart + 1;
        var limit = Math.min(this._index - start, 6);
        while (limit >= 2) {
          var entity = this.buffer.substr(start, limit);
          if (Object.prototype.hasOwnProperty.call(legacy_json_1.default, entity)) {
            this.emitPartial(legacy_json_1.default[entity]);
            this.sectionStart += limit + 1;
            return;
          }
          limit--;
        }
      };
      Tokenizer2.prototype.stateInNamedEntity = function(c) {
        if (c === ";") {
          this.parseFixedEntity();
          if (this.baseState === 1 && this.sectionStart + 1 < this._index && !this.xmlMode) {
            this.parseLegacyEntity();
          }
          this._state = this.baseState;
        } else if ((c < "0" || c > "9") && !isASCIIAlpha(c)) {
          if (this.xmlMode || this.sectionStart + 1 === this._index) {
          } else if (this.baseState !== 1) {
            if (c !== "=") {
              this.parseFixedEntity(legacy_json_1.default);
            }
          } else {
            this.parseLegacyEntity();
          }
          this._state = this.baseState;
          this._index--;
        }
      };
      Tokenizer2.prototype.decodeNumericEntity = function(offset, base, strict) {
        var sectionStart = this.sectionStart + offset;
        if (sectionStart !== this._index) {
          var entity = this.buffer.substring(sectionStart, this._index);
          var parsed = parseInt(entity, base);
          this.emitPartial(decode_codepoint_1.default(parsed));
          this.sectionStart = strict ? this._index + 1 : this._index;
        }
        this._state = this.baseState;
      };
      Tokenizer2.prototype.stateInNumericEntity = function(c) {
        if (c === ";") {
          this.decodeNumericEntity(2, 10, true);
        } else if (c < "0" || c > "9") {
          if (!this.xmlMode) {
            this.decodeNumericEntity(2, 10, false);
          } else {
            this._state = this.baseState;
          }
          this._index--;
        }
      };
      Tokenizer2.prototype.stateInHexEntity = function(c) {
        if (c === ";") {
          this.decodeNumericEntity(3, 16, true);
        } else if ((c < "a" || c > "f") && (c < "A" || c > "F") && (c < "0" || c > "9")) {
          if (!this.xmlMode) {
            this.decodeNumericEntity(3, 16, false);
          } else {
            this._state = this.baseState;
          }
          this._index--;
        }
      };
      Tokenizer2.prototype.cleanup = function() {
        if (this.sectionStart < 0) {
          this.buffer = "";
          this.bufferOffset += this._index;
          this._index = 0;
        } else if (this.running) {
          if (this._state === 1) {
            if (this.sectionStart !== this._index) {
              this.cbs.ontext(this.buffer.substr(this.sectionStart));
            }
            this.buffer = "";
            this.bufferOffset += this._index;
            this._index = 0;
          } else if (this.sectionStart === this._index) {
            this.buffer = "";
            this.bufferOffset += this._index;
            this._index = 0;
          } else {
            this.buffer = this.buffer.substr(this.sectionStart);
            this._index -= this.sectionStart;
            this.bufferOffset += this.sectionStart;
          }
          this.sectionStart = 0;
        }
      };
      Tokenizer2.prototype.parse = function() {
        while (this._index < this.buffer.length && this.running) {
          var c = this.buffer.charAt(this._index);
          if (this._state === 1) {
            this.stateText(c);
          } else if (this._state === 12) {
            this.stateInAttributeValueDoubleQuotes(c);
          } else if (this._state === 9) {
            this.stateInAttributeName(c);
          } else if (this._state === 19) {
            this.stateInComment(c);
          } else if (this._state === 20) {
            this.stateInSpecialComment(c);
          } else if (this._state === 8) {
            this.stateBeforeAttributeName(c);
          } else if (this._state === 3) {
            this.stateInTagName(c);
          } else if (this._state === 6) {
            this.stateInClosingTagName(c);
          } else if (this._state === 2) {
            this.stateBeforeTagName(c);
          } else if (this._state === 10) {
            this.stateAfterAttributeName(c);
          } else if (this._state === 13) {
            this.stateInAttributeValueSingleQuotes(c);
          } else if (this._state === 11) {
            this.stateBeforeAttributeValue(c);
          } else if (this._state === 5) {
            this.stateBeforeClosingTagName(c);
          } else if (this._state === 7) {
            this.stateAfterClosingTagName(c);
          } else if (this._state === 32) {
            this.stateBeforeSpecialS(c);
          } else if (this._state === 21) {
            this.stateAfterComment1(c);
          } else if (this._state === 14) {
            this.stateInAttributeValueNoQuotes(c);
          } else if (this._state === 4) {
            this.stateInSelfClosingTag(c);
          } else if (this._state === 16) {
            this.stateInDeclaration(c);
          } else if (this._state === 15) {
            this.stateBeforeDeclaration(c);
          } else if (this._state === 22) {
            this.stateAfterComment2(c);
          } else if (this._state === 18) {
            this.stateBeforeComment(c);
          } else if (this._state === 33) {
            this.stateBeforeSpecialSEnd(c);
          } else if (this._state === 53) {
            stateAfterSpecialTEnd(this, c);
          } else if (this._state === 39) {
            stateAfterScript1(this, c);
          } else if (this._state === 40) {
            stateAfterScript2(this, c);
          } else if (this._state === 41) {
            stateAfterScript3(this, c);
          } else if (this._state === 34) {
            stateBeforeScript1(this, c);
          } else if (this._state === 35) {
            stateBeforeScript2(this, c);
          } else if (this._state === 36) {
            stateBeforeScript3(this, c);
          } else if (this._state === 37) {
            stateBeforeScript4(this, c);
          } else if (this._state === 38) {
            this.stateBeforeSpecialLast(c, 2);
          } else if (this._state === 42) {
            stateAfterScript4(this, c);
          } else if (this._state === 43) {
            this.stateAfterSpecialLast(c, 6);
          } else if (this._state === 44) {
            stateBeforeStyle1(this, c);
          } else if (this._state === 29) {
            this.stateInCdata(c);
          } else if (this._state === 45) {
            stateBeforeStyle2(this, c);
          } else if (this._state === 46) {
            stateBeforeStyle3(this, c);
          } else if (this._state === 47) {
            this.stateBeforeSpecialLast(c, 3);
          } else if (this._state === 48) {
            stateAfterStyle1(this, c);
          } else if (this._state === 49) {
            stateAfterStyle2(this, c);
          } else if (this._state === 50) {
            stateAfterStyle3(this, c);
          } else if (this._state === 51) {
            this.stateAfterSpecialLast(c, 5);
          } else if (this._state === 52) {
            stateBeforeSpecialT(this, c);
          } else if (this._state === 54) {
            stateBeforeTitle1(this, c);
          } else if (this._state === 55) {
            stateBeforeTitle2(this, c);
          } else if (this._state === 56) {
            stateBeforeTitle3(this, c);
          } else if (this._state === 57) {
            this.stateBeforeSpecialLast(c, 4);
          } else if (this._state === 58) {
            stateAfterTitle1(this, c);
          } else if (this._state === 59) {
            stateAfterTitle2(this, c);
          } else if (this._state === 60) {
            stateAfterTitle3(this, c);
          } else if (this._state === 61) {
            this.stateAfterSpecialLast(c, 5);
          } else if (this._state === 17) {
            this.stateInProcessingInstruction(c);
          } else if (this._state === 64) {
            this.stateInNamedEntity(c);
          } else if (this._state === 23) {
            stateBeforeCdata1(this, c);
          } else if (this._state === 62) {
            stateBeforeEntity(this, c);
          } else if (this._state === 24) {
            stateBeforeCdata2(this, c);
          } else if (this._state === 25) {
            stateBeforeCdata3(this, c);
          } else if (this._state === 30) {
            this.stateAfterCdata1(c);
          } else if (this._state === 31) {
            this.stateAfterCdata2(c);
          } else if (this._state === 26) {
            stateBeforeCdata4(this, c);
          } else if (this._state === 27) {
            stateBeforeCdata5(this, c);
          } else if (this._state === 28) {
            this.stateBeforeCdata6(c);
          } else if (this._state === 66) {
            this.stateInHexEntity(c);
          } else if (this._state === 65) {
            this.stateInNumericEntity(c);
          } else if (this._state === 63) {
            stateBeforeNumericEntity(this, c);
          } else {
            this.cbs.onerror(Error("unknown _state"), this._state);
          }
          this._index++;
        }
        this.cleanup();
      };
      Tokenizer2.prototype.finish = function() {
        if (this.sectionStart < this._index) {
          this.handleTrailingData();
        }
        this.cbs.onend();
      };
      Tokenizer2.prototype.handleTrailingData = function() {
        var data = this.buffer.substr(this.sectionStart);
        if (this._state === 29 || this._state === 30 || this._state === 31) {
          this.cbs.oncdata(data);
        } else if (this._state === 19 || this._state === 21 || this._state === 22) {
          this.cbs.oncomment(data);
        } else if (this._state === 64 && !this.xmlMode) {
          this.parseLegacyEntity();
          if (this.sectionStart < this._index) {
            this._state = this.baseState;
            this.handleTrailingData();
          }
        } else if (this._state === 65 && !this.xmlMode) {
          this.decodeNumericEntity(2, 10, false);
          if (this.sectionStart < this._index) {
            this._state = this.baseState;
            this.handleTrailingData();
          }
        } else if (this._state === 66 && !this.xmlMode) {
          this.decodeNumericEntity(3, 16, false);
          if (this.sectionStart < this._index) {
            this._state = this.baseState;
            this.handleTrailingData();
          }
        } else if (this._state !== 3 && this._state !== 8 && this._state !== 11 && this._state !== 10 && this._state !== 9 && this._state !== 13 && this._state !== 12 && this._state !== 14 && this._state !== 6) {
          this.cbs.ontext(data);
        }
      };
      Tokenizer2.prototype.getSection = function() {
        return this.buffer.substring(this.sectionStart, this._index);
      };
      Tokenizer2.prototype.emitToken = function(name) {
        this.cbs[name](this.getSection());
        this.sectionStart = -1;
      };
      Tokenizer2.prototype.emitPartial = function(value) {
        if (this.baseState !== 1) {
          this.cbs.onattribdata(value);
        } else {
          this.cbs.ontext(value);
        }
      };
      return Tokenizer2;
    }();
    exports.default = Tokenizer;
  }
});

// node_modules/htmlparser2/lib/Parser.js
var require_Parser = __commonJS({
  "node_modules/htmlparser2/lib/Parser.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Parser = void 0;
    var Tokenizer_1 = __importDefault(require_Tokenizer());
    var formTags = new Set([
      "input",
      "option",
      "optgroup",
      "select",
      "button",
      "datalist",
      "textarea"
    ]);
    var pTag = new Set(["p"]);
    var openImpliesClose = {
      tr: new Set(["tr", "th", "td"]),
      th: new Set(["th"]),
      td: new Set(["thead", "th", "td"]),
      body: new Set(["head", "link", "script"]),
      li: new Set(["li"]),
      p: pTag,
      h1: pTag,
      h2: pTag,
      h3: pTag,
      h4: pTag,
      h5: pTag,
      h6: pTag,
      select: formTags,
      input: formTags,
      output: formTags,
      button: formTags,
      datalist: formTags,
      textarea: formTags,
      option: new Set(["option"]),
      optgroup: new Set(["optgroup", "option"]),
      dd: new Set(["dt", "dd"]),
      dt: new Set(["dt", "dd"]),
      address: pTag,
      article: pTag,
      aside: pTag,
      blockquote: pTag,
      details: pTag,
      div: pTag,
      dl: pTag,
      fieldset: pTag,
      figcaption: pTag,
      figure: pTag,
      footer: pTag,
      form: pTag,
      header: pTag,
      hr: pTag,
      main: pTag,
      nav: pTag,
      ol: pTag,
      pre: pTag,
      section: pTag,
      table: pTag,
      ul: pTag,
      rt: new Set(["rt", "rp"]),
      rp: new Set(["rt", "rp"]),
      tbody: new Set(["thead", "tbody"]),
      tfoot: new Set(["thead", "tbody"])
    };
    var voidElements2 = new Set([
      "area",
      "base",
      "basefont",
      "br",
      "col",
      "command",
      "embed",
      "frame",
      "hr",
      "img",
      "input",
      "isindex",
      "keygen",
      "link",
      "meta",
      "param",
      "source",
      "track",
      "wbr"
    ]);
    var foreignContextElements = new Set(["math", "svg"]);
    var htmlIntegrationElements = new Set([
      "mi",
      "mo",
      "mn",
      "ms",
      "mtext",
      "annotation-xml",
      "foreignObject",
      "desc",
      "title"
    ]);
    var reNameEnd = /\s|\//;
    var Parser2 = function() {
      function Parser3(cbs, options) {
        if (options === void 0) {
          options = {};
        }
        var _a, _b, _c, _d, _e;
        this.startIndex = 0;
        this.endIndex = null;
        this.tagname = "";
        this.attribname = "";
        this.attribvalue = "";
        this.attribs = null;
        this.stack = [];
        this.foreignContext = [];
        this.options = options;
        this.cbs = cbs !== null && cbs !== void 0 ? cbs : {};
        this.lowerCaseTagNames = (_a = options.lowerCaseTags) !== null && _a !== void 0 ? _a : !options.xmlMode;
        this.lowerCaseAttributeNames = (_b = options.lowerCaseAttributeNames) !== null && _b !== void 0 ? _b : !options.xmlMode;
        this.tokenizer = new ((_c = options.Tokenizer) !== null && _c !== void 0 ? _c : Tokenizer_1.default)(this.options, this);
        (_e = (_d = this.cbs).onparserinit) === null || _e === void 0 ? void 0 : _e.call(_d, this);
      }
      Parser3.prototype.updatePosition = function(initialOffset) {
        if (this.endIndex === null) {
          if (this.tokenizer.sectionStart <= initialOffset) {
            this.startIndex = 0;
          } else {
            this.startIndex = this.tokenizer.sectionStart - initialOffset;
          }
        } else {
          this.startIndex = this.endIndex + 1;
        }
        this.endIndex = this.tokenizer.getAbsoluteIndex();
      };
      Parser3.prototype.ontext = function(data) {
        var _a, _b;
        this.updatePosition(1);
        this.endIndex--;
        (_b = (_a = this.cbs).ontext) === null || _b === void 0 ? void 0 : _b.call(_a, data);
      };
      Parser3.prototype.onopentagname = function(name) {
        var _a, _b;
        if (this.lowerCaseTagNames) {
          name = name.toLowerCase();
        }
        this.tagname = name;
        if (!this.options.xmlMode && Object.prototype.hasOwnProperty.call(openImpliesClose, name)) {
          var el = void 0;
          while (this.stack.length > 0 && openImpliesClose[name].has(el = this.stack[this.stack.length - 1])) {
            this.onclosetag(el);
          }
        }
        if (this.options.xmlMode || !voidElements2.has(name)) {
          this.stack.push(name);
          if (foreignContextElements.has(name)) {
            this.foreignContext.push(true);
          } else if (htmlIntegrationElements.has(name)) {
            this.foreignContext.push(false);
          }
        }
        (_b = (_a = this.cbs).onopentagname) === null || _b === void 0 ? void 0 : _b.call(_a, name);
        if (this.cbs.onopentag)
          this.attribs = {};
      };
      Parser3.prototype.onopentagend = function() {
        var _a, _b;
        this.updatePosition(1);
        if (this.attribs) {
          (_b = (_a = this.cbs).onopentag) === null || _b === void 0 ? void 0 : _b.call(_a, this.tagname, this.attribs);
          this.attribs = null;
        }
        if (!this.options.xmlMode && this.cbs.onclosetag && voidElements2.has(this.tagname)) {
          this.cbs.onclosetag(this.tagname);
        }
        this.tagname = "";
      };
      Parser3.prototype.onclosetag = function(name) {
        this.updatePosition(1);
        if (this.lowerCaseTagNames) {
          name = name.toLowerCase();
        }
        if (foreignContextElements.has(name) || htmlIntegrationElements.has(name)) {
          this.foreignContext.pop();
        }
        if (this.stack.length && (this.options.xmlMode || !voidElements2.has(name))) {
          var pos = this.stack.lastIndexOf(name);
          if (pos !== -1) {
            if (this.cbs.onclosetag) {
              pos = this.stack.length - pos;
              while (pos--) {
                this.cbs.onclosetag(this.stack.pop());
              }
            } else
              this.stack.length = pos;
          } else if (name === "p" && !this.options.xmlMode) {
            this.onopentagname(name);
            this.closeCurrentTag();
          }
        } else if (!this.options.xmlMode && (name === "br" || name === "p")) {
          this.onopentagname(name);
          this.closeCurrentTag();
        }
      };
      Parser3.prototype.onselfclosingtag = function() {
        if (this.options.xmlMode || this.options.recognizeSelfClosing || this.foreignContext[this.foreignContext.length - 1]) {
          this.closeCurrentTag();
        } else {
          this.onopentagend();
        }
      };
      Parser3.prototype.closeCurrentTag = function() {
        var _a, _b;
        var name = this.tagname;
        this.onopentagend();
        if (this.stack[this.stack.length - 1] === name) {
          (_b = (_a = this.cbs).onclosetag) === null || _b === void 0 ? void 0 : _b.call(_a, name);
          this.stack.pop();
        }
      };
      Parser3.prototype.onattribname = function(name) {
        if (this.lowerCaseAttributeNames) {
          name = name.toLowerCase();
        }
        this.attribname = name;
      };
      Parser3.prototype.onattribdata = function(value) {
        this.attribvalue += value;
      };
      Parser3.prototype.onattribend = function(quote) {
        var _a, _b;
        (_b = (_a = this.cbs).onattribute) === null || _b === void 0 ? void 0 : _b.call(_a, this.attribname, this.attribvalue, quote);
        if (this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname)) {
          this.attribs[this.attribname] = this.attribvalue;
        }
        this.attribname = "";
        this.attribvalue = "";
      };
      Parser3.prototype.getInstructionName = function(value) {
        var idx = value.search(reNameEnd);
        var name = idx < 0 ? value : value.substr(0, idx);
        if (this.lowerCaseTagNames) {
          name = name.toLowerCase();
        }
        return name;
      };
      Parser3.prototype.ondeclaration = function(value) {
        if (this.cbs.onprocessinginstruction) {
          var name_1 = this.getInstructionName(value);
          this.cbs.onprocessinginstruction("!" + name_1, "!" + value);
        }
      };
      Parser3.prototype.onprocessinginstruction = function(value) {
        if (this.cbs.onprocessinginstruction) {
          var name_2 = this.getInstructionName(value);
          this.cbs.onprocessinginstruction("?" + name_2, "?" + value);
        }
      };
      Parser3.prototype.oncomment = function(value) {
        var _a, _b, _c, _d;
        this.updatePosition(4);
        (_b = (_a = this.cbs).oncomment) === null || _b === void 0 ? void 0 : _b.call(_a, value);
        (_d = (_c = this.cbs).oncommentend) === null || _d === void 0 ? void 0 : _d.call(_c);
      };
      Parser3.prototype.oncdata = function(value) {
        var _a, _b, _c, _d, _e, _f;
        this.updatePosition(1);
        if (this.options.xmlMode || this.options.recognizeCDATA) {
          (_b = (_a = this.cbs).oncdatastart) === null || _b === void 0 ? void 0 : _b.call(_a);
          (_d = (_c = this.cbs).ontext) === null || _d === void 0 ? void 0 : _d.call(_c, value);
          (_f = (_e = this.cbs).oncdataend) === null || _f === void 0 ? void 0 : _f.call(_e);
        } else {
          this.oncomment("[CDATA[" + value + "]]");
        }
      };
      Parser3.prototype.onerror = function(err) {
        var _a, _b;
        (_b = (_a = this.cbs).onerror) === null || _b === void 0 ? void 0 : _b.call(_a, err);
      };
      Parser3.prototype.onend = function() {
        var _a, _b;
        if (this.cbs.onclosetag) {
          for (var i = this.stack.length; i > 0; this.cbs.onclosetag(this.stack[--i]))
            ;
        }
        (_b = (_a = this.cbs).onend) === null || _b === void 0 ? void 0 : _b.call(_a);
      };
      Parser3.prototype.reset = function() {
        var _a, _b, _c, _d;
        (_b = (_a = this.cbs).onreset) === null || _b === void 0 ? void 0 : _b.call(_a);
        this.tokenizer.reset();
        this.tagname = "";
        this.attribname = "";
        this.attribs = null;
        this.stack = [];
        (_d = (_c = this.cbs).onparserinit) === null || _d === void 0 ? void 0 : _d.call(_c, this);
      };
      Parser3.prototype.parseComplete = function(data) {
        this.reset();
        this.end(data);
      };
      Parser3.prototype.write = function(chunk) {
        this.tokenizer.write(chunk);
      };
      Parser3.prototype.end = function(chunk) {
        this.tokenizer.end(chunk);
      };
      Parser3.prototype.pause = function() {
        this.tokenizer.pause();
      };
      Parser3.prototype.resume = function() {
        this.tokenizer.resume();
      };
      Parser3.prototype.parseChunk = function(chunk) {
        this.write(chunk);
      };
      Parser3.prototype.done = function(chunk) {
        this.end(chunk);
      };
      return Parser3;
    }();
    exports.Parser = Parser2;
  }
});

// node_modules/domelementtype/lib/index.js
var require_lib = __commonJS({
  "node_modules/domelementtype/lib/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Doctype = exports.CDATA = exports.Tag = exports.Style = exports.Script = exports.Comment = exports.Directive = exports.Text = exports.Root = exports.isTag = exports.ElementType = void 0;
    var ElementType;
    (function(ElementType2) {
      ElementType2["Root"] = "root";
      ElementType2["Text"] = "text";
      ElementType2["Directive"] = "directive";
      ElementType2["Comment"] = "comment";
      ElementType2["Script"] = "script";
      ElementType2["Style"] = "style";
      ElementType2["Tag"] = "tag";
      ElementType2["CDATA"] = "cdata";
      ElementType2["Doctype"] = "doctype";
    })(ElementType = exports.ElementType || (exports.ElementType = {}));
    function isTag2(elem) {
      return elem.type === ElementType.Tag || elem.type === ElementType.Script || elem.type === ElementType.Style;
    }
    exports.isTag = isTag2;
    exports.Root = ElementType.Root;
    exports.Text = ElementType.Text;
    exports.Directive = ElementType.Directive;
    exports.Comment = ElementType.Comment;
    exports.Script = ElementType.Script;
    exports.Style = ElementType.Style;
    exports.Tag = ElementType.Tag;
    exports.CDATA = ElementType.CDATA;
    exports.Doctype = ElementType.Doctype;
  }
});

// node_modules/domhandler/lib/node.js
var require_node = __commonJS({
  "node_modules/domhandler/lib/node.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.cloneNode = exports.hasChildren = exports.isDocument = exports.isDirective = exports.isComment = exports.isText = exports.isCDATA = exports.isTag = exports.Element = exports.Document = exports.NodeWithChildren = exports.ProcessingInstruction = exports.Comment = exports.Text = exports.DataNode = exports.Node = void 0;
    var domelementtype_1 = require_lib();
    var nodeTypes = new Map([
      [domelementtype_1.ElementType.Tag, 1],
      [domelementtype_1.ElementType.Script, 1],
      [domelementtype_1.ElementType.Style, 1],
      [domelementtype_1.ElementType.Directive, 1],
      [domelementtype_1.ElementType.Text, 3],
      [domelementtype_1.ElementType.CDATA, 4],
      [domelementtype_1.ElementType.Comment, 8],
      [domelementtype_1.ElementType.Root, 9]
    ]);
    var Node3 = function() {
      function Node4(type) {
        this.type = type;
        this.parent = null;
        this.prev = null;
        this.next = null;
        this.startIndex = null;
        this.endIndex = null;
      }
      Object.defineProperty(Node4.prototype, "nodeType", {
        get: function() {
          var _a;
          return (_a = nodeTypes.get(this.type)) !== null && _a !== void 0 ? _a : 1;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(Node4.prototype, "parentNode", {
        get: function() {
          return this.parent;
        },
        set: function(parent) {
          this.parent = parent;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(Node4.prototype, "previousSibling", {
        get: function() {
          return this.prev;
        },
        set: function(prev) {
          this.prev = prev;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(Node4.prototype, "nextSibling", {
        get: function() {
          return this.next;
        },
        set: function(next) {
          this.next = next;
        },
        enumerable: false,
        configurable: true
      });
      Node4.prototype.cloneNode = function(recursive) {
        if (recursive === void 0) {
          recursive = false;
        }
        return cloneNode(this, recursive);
      };
      return Node4;
    }();
    exports.Node = Node3;
    var DataNode = function(_super) {
      __extends(DataNode2, _super);
      function DataNode2(type, data) {
        var _this = _super.call(this, type) || this;
        _this.data = data;
        return _this;
      }
      Object.defineProperty(DataNode2.prototype, "nodeValue", {
        get: function() {
          return this.data;
        },
        set: function(data) {
          this.data = data;
        },
        enumerable: false,
        configurable: true
      });
      return DataNode2;
    }(Node3);
    exports.DataNode = DataNode;
    var Text3 = function(_super) {
      __extends(Text4, _super);
      function Text4(data) {
        return _super.call(this, domelementtype_1.ElementType.Text, data) || this;
      }
      return Text4;
    }(DataNode);
    exports.Text = Text3;
    var Comment3 = function(_super) {
      __extends(Comment4, _super);
      function Comment4(data) {
        return _super.call(this, domelementtype_1.ElementType.Comment, data) || this;
      }
      return Comment4;
    }(DataNode);
    exports.Comment = Comment3;
    var ProcessingInstruction = function(_super) {
      __extends(ProcessingInstruction2, _super);
      function ProcessingInstruction2(name, data) {
        var _this = _super.call(this, domelementtype_1.ElementType.Directive, data) || this;
        _this.name = name;
        return _this;
      }
      return ProcessingInstruction2;
    }(DataNode);
    exports.ProcessingInstruction = ProcessingInstruction;
    var NodeWithChildren = function(_super) {
      __extends(NodeWithChildren2, _super);
      function NodeWithChildren2(type, children) {
        var _this = _super.call(this, type) || this;
        _this.children = children;
        return _this;
      }
      Object.defineProperty(NodeWithChildren2.prototype, "firstChild", {
        get: function() {
          var _a;
          return (_a = this.children[0]) !== null && _a !== void 0 ? _a : null;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(NodeWithChildren2.prototype, "lastChild", {
        get: function() {
          return this.children.length > 0 ? this.children[this.children.length - 1] : null;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(NodeWithChildren2.prototype, "childNodes", {
        get: function() {
          return this.children;
        },
        set: function(children) {
          this.children = children;
        },
        enumerable: false,
        configurable: true
      });
      return NodeWithChildren2;
    }(Node3);
    exports.NodeWithChildren = NodeWithChildren;
    var Document4 = function(_super) {
      __extends(Document5, _super);
      function Document5(children) {
        return _super.call(this, domelementtype_1.ElementType.Root, children) || this;
      }
      return Document5;
    }(NodeWithChildren);
    exports.Document = Document4;
    var Element3 = function(_super) {
      __extends(Element4, _super);
      function Element4(name, attribs, children, type) {
        if (children === void 0) {
          children = [];
        }
        if (type === void 0) {
          type = name === "script" ? domelementtype_1.ElementType.Script : name === "style" ? domelementtype_1.ElementType.Style : domelementtype_1.ElementType.Tag;
        }
        var _this = _super.call(this, type, children) || this;
        _this.name = name;
        _this.attribs = attribs;
        return _this;
      }
      Object.defineProperty(Element4.prototype, "tagName", {
        get: function() {
          return this.name;
        },
        set: function(name) {
          this.name = name;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(Element4.prototype, "attributes", {
        get: function() {
          var _this = this;
          return Object.keys(this.attribs).map(function(name) {
            var _a, _b;
            return {
              name,
              value: _this.attribs[name],
              namespace: (_a = _this["x-attribsNamespace"]) === null || _a === void 0 ? void 0 : _a[name],
              prefix: (_b = _this["x-attribsPrefix"]) === null || _b === void 0 ? void 0 : _b[name]
            };
          });
        },
        enumerable: false,
        configurable: true
      });
      return Element4;
    }(NodeWithChildren);
    exports.Element = Element3;
    function isTag2(node) {
      return domelementtype_1.isTag(node);
    }
    exports.isTag = isTag2;
    function isCDATA(node) {
      return node.type === domelementtype_1.ElementType.CDATA;
    }
    exports.isCDATA = isCDATA;
    function isText(node) {
      return node.type === domelementtype_1.ElementType.Text;
    }
    exports.isText = isText;
    function isComment(node) {
      return node.type === domelementtype_1.ElementType.Comment;
    }
    exports.isComment = isComment;
    function isDirective(node) {
      return node.type === domelementtype_1.ElementType.Directive;
    }
    exports.isDirective = isDirective;
    function isDocument(node) {
      return node.type === domelementtype_1.ElementType.Root;
    }
    exports.isDocument = isDocument;
    function hasChildren(node) {
      return Object.prototype.hasOwnProperty.call(node, "children");
    }
    exports.hasChildren = hasChildren;
    function cloneNode(node, recursive) {
      if (recursive === void 0) {
        recursive = false;
      }
      var result;
      if (isText(node)) {
        result = new Text3(node.data);
      } else if (isComment(node)) {
        result = new Comment3(node.data);
      } else if (isTag2(node)) {
        var children = recursive ? cloneChildren(node.children) : [];
        var clone_1 = new Element3(node.name, __assign({}, node.attribs), children);
        children.forEach(function(child) {
          return child.parent = clone_1;
        });
        if (node["x-attribsNamespace"]) {
          clone_1["x-attribsNamespace"] = __assign({}, node["x-attribsNamespace"]);
        }
        if (node["x-attribsPrefix"]) {
          clone_1["x-attribsPrefix"] = __assign({}, node["x-attribsPrefix"]);
        }
        result = clone_1;
      } else if (isCDATA(node)) {
        var children = recursive ? cloneChildren(node.children) : [];
        var clone_2 = new NodeWithChildren(domelementtype_1.ElementType.CDATA, children);
        children.forEach(function(child) {
          return child.parent = clone_2;
        });
        result = clone_2;
      } else if (isDocument(node)) {
        var children = recursive ? cloneChildren(node.children) : [];
        var clone_3 = new Document4(children);
        children.forEach(function(child) {
          return child.parent = clone_3;
        });
        if (node["x-mode"]) {
          clone_3["x-mode"] = node["x-mode"];
        }
        result = clone_3;
      } else if (isDirective(node)) {
        var instruction = new ProcessingInstruction(node.name, node.data);
        if (node["x-name"] != null) {
          instruction["x-name"] = node["x-name"];
          instruction["x-publicId"] = node["x-publicId"];
          instruction["x-systemId"] = node["x-systemId"];
        }
        result = instruction;
      } else {
        throw new Error("Not implemented yet: " + node.type);
      }
      result.startIndex = node.startIndex;
      result.endIndex = node.endIndex;
      return result;
    }
    exports.cloneNode = cloneNode;
    function cloneChildren(childs) {
      var children = childs.map(function(child) {
        return cloneNode(child, true);
      });
      for (var i = 1; i < children.length; i++) {
        children[i].prev = children[i - 1];
        children[i - 1].next = children[i];
      }
      return children;
    }
  }
});

// node_modules/domhandler/lib/index.js
var require_lib2 = __commonJS({
  "node_modules/domhandler/lib/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DomHandler = void 0;
    var domelementtype_1 = require_lib();
    var node_1 = require_node();
    __exportStar(require_node(), exports);
    var reWhitespace = /\s+/g;
    var defaultOpts = {
      normalizeWhitespace: false,
      withStartIndices: false,
      withEndIndices: false
    };
    var DomHandler = function() {
      function DomHandler2(callback, options, elementCB) {
        this.dom = [];
        this.root = new node_1.Document(this.dom);
        this.done = false;
        this.tagStack = [this.root];
        this.lastNode = null;
        this.parser = null;
        if (typeof options === "function") {
          elementCB = options;
          options = defaultOpts;
        }
        if (typeof callback === "object") {
          options = callback;
          callback = void 0;
        }
        this.callback = callback !== null && callback !== void 0 ? callback : null;
        this.options = options !== null && options !== void 0 ? options : defaultOpts;
        this.elementCB = elementCB !== null && elementCB !== void 0 ? elementCB : null;
      }
      DomHandler2.prototype.onparserinit = function(parser) {
        this.parser = parser;
      };
      DomHandler2.prototype.onreset = function() {
        var _a;
        this.dom = [];
        this.root = new node_1.Document(this.dom);
        this.done = false;
        this.tagStack = [this.root];
        this.lastNode = null;
        this.parser = (_a = this.parser) !== null && _a !== void 0 ? _a : null;
      };
      DomHandler2.prototype.onend = function() {
        if (this.done)
          return;
        this.done = true;
        this.parser = null;
        this.handleCallback(null);
      };
      DomHandler2.prototype.onerror = function(error) {
        this.handleCallback(error);
      };
      DomHandler2.prototype.onclosetag = function() {
        this.lastNode = null;
        var elem = this.tagStack.pop();
        if (this.options.withEndIndices) {
          elem.endIndex = this.parser.endIndex;
        }
        if (this.elementCB)
          this.elementCB(elem);
      };
      DomHandler2.prototype.onopentag = function(name, attribs) {
        var type = this.options.xmlMode ? domelementtype_1.ElementType.Tag : void 0;
        var element = new node_1.Element(name, attribs, void 0, type);
        this.addNode(element);
        this.tagStack.push(element);
      };
      DomHandler2.prototype.ontext = function(data) {
        var normalizeWhitespace = this.options.normalizeWhitespace;
        var lastNode = this.lastNode;
        if (lastNode && lastNode.type === domelementtype_1.ElementType.Text) {
          if (normalizeWhitespace) {
            lastNode.data = (lastNode.data + data).replace(reWhitespace, " ");
          } else {
            lastNode.data += data;
          }
        } else {
          if (normalizeWhitespace) {
            data = data.replace(reWhitespace, " ");
          }
          var node = new node_1.Text(data);
          this.addNode(node);
          this.lastNode = node;
        }
      };
      DomHandler2.prototype.oncomment = function(data) {
        if (this.lastNode && this.lastNode.type === domelementtype_1.ElementType.Comment) {
          this.lastNode.data += data;
          return;
        }
        var node = new node_1.Comment(data);
        this.addNode(node);
        this.lastNode = node;
      };
      DomHandler2.prototype.oncommentend = function() {
        this.lastNode = null;
      };
      DomHandler2.prototype.oncdatastart = function() {
        var text = new node_1.Text("");
        var node = new node_1.NodeWithChildren(domelementtype_1.ElementType.CDATA, [text]);
        this.addNode(node);
        text.parent = node;
        this.lastNode = text;
      };
      DomHandler2.prototype.oncdataend = function() {
        this.lastNode = null;
      };
      DomHandler2.prototype.onprocessinginstruction = function(name, data) {
        var node = new node_1.ProcessingInstruction(name, data);
        this.addNode(node);
      };
      DomHandler2.prototype.handleCallback = function(error) {
        if (typeof this.callback === "function") {
          this.callback(error, this.dom);
        } else if (error) {
          throw error;
        }
      };
      DomHandler2.prototype.addNode = function(node) {
        var parent = this.tagStack[this.tagStack.length - 1];
        var previousSibling2 = parent.children[parent.children.length - 1];
        if (this.options.withStartIndices) {
          node.startIndex = this.parser.startIndex;
        }
        if (this.options.withEndIndices) {
          node.endIndex = this.parser.endIndex;
        }
        parent.children.push(node);
        if (previousSibling2) {
          node.prev = previousSibling2;
          previousSibling2.next = node;
        }
        node.parent = parent;
        this.lastNode = null;
      };
      return DomHandler2;
    }();
    exports.DomHandler = DomHandler;
    exports.default = DomHandler;
  }
});

// node_modules/entities/lib/decode.js
var require_decode2 = __commonJS({
  "node_modules/entities/lib/decode.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.decodeHTML = exports.decodeHTMLStrict = exports.decodeXML = void 0;
    var entities_json_1 = __importDefault(require_entities());
    var legacy_json_1 = __importDefault(require_legacy());
    var xml_json_1 = __importDefault(require_xml());
    var decode_codepoint_1 = __importDefault(require_decode_codepoint());
    var strictEntityRe = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
    exports.decodeXML = getStrictDecoder(xml_json_1.default);
    exports.decodeHTMLStrict = getStrictDecoder(entities_json_1.default);
    function getStrictDecoder(map) {
      var replace2 = getReplacer(map);
      return function(str) {
        return String(str).replace(strictEntityRe, replace2);
      };
    }
    var sorter = function(a, b) {
      return a < b ? 1 : -1;
    };
    exports.decodeHTML = function() {
      var legacy = Object.keys(legacy_json_1.default).sort(sorter);
      var keys2 = Object.keys(entities_json_1.default).sort(sorter);
      for (var i = 0, j = 0; i < keys2.length; i++) {
        if (legacy[j] === keys2[i]) {
          keys2[i] += ";?";
          j++;
        } else {
          keys2[i] += ";";
        }
      }
      var re = new RegExp("&(?:" + keys2.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g");
      var replace2 = getReplacer(entities_json_1.default);
      function replacer(str) {
        if (str.substr(-1) !== ";")
          str += ";";
        return replace2(str);
      }
      return function(str) {
        return String(str).replace(re, replacer);
      };
    }();
    function getReplacer(map) {
      return function replace2(str) {
        if (str.charAt(1) === "#") {
          var secondChar = str.charAt(2);
          if (secondChar === "X" || secondChar === "x") {
            return decode_codepoint_1.default(parseInt(str.substr(3), 16));
          }
          return decode_codepoint_1.default(parseInt(str.substr(2), 10));
        }
        return map[str.slice(1, -1)] || str;
      };
    }
  }
});

// node_modules/entities/lib/encode.js
var require_encode = __commonJS({
  "node_modules/entities/lib/encode.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.escapeUTF8 = exports.escape = exports.encodeNonAsciiHTML = exports.encodeHTML = exports.encodeXML = void 0;
    var xml_json_1 = __importDefault(require_xml());
    var inverseXML = getInverseObj(xml_json_1.default);
    var xmlReplacer = getInverseReplacer(inverseXML);
    exports.encodeXML = getASCIIEncoder(inverseXML);
    var entities_json_1 = __importDefault(require_entities());
    var inverseHTML = getInverseObj(entities_json_1.default);
    var htmlReplacer = getInverseReplacer(inverseHTML);
    exports.encodeHTML = getInverse(inverseHTML, htmlReplacer);
    exports.encodeNonAsciiHTML = getASCIIEncoder(inverseHTML);
    function getInverseObj(obj) {
      return Object.keys(obj).sort().reduce(function(inverse, name) {
        inverse[obj[name]] = "&" + name + ";";
        return inverse;
      }, {});
    }
    function getInverseReplacer(inverse) {
      var single = [];
      var multiple = [];
      for (var _i = 0, _a = Object.keys(inverse); _i < _a.length; _i++) {
        var k = _a[_i];
        if (k.length === 1) {
          single.push("\\" + k);
        } else {
          multiple.push(k);
        }
      }
      single.sort();
      for (var start = 0; start < single.length - 1; start++) {
        var end = start;
        while (end < single.length - 1 && single[end].charCodeAt(1) + 1 === single[end + 1].charCodeAt(1)) {
          end += 1;
        }
        var count = 1 + end - start;
        if (count < 3)
          continue;
        single.splice(start, count, single[start] + "-" + single[end]);
      }
      multiple.unshift("[" + single.join("") + "]");
      return new RegExp(multiple.join("|"), "g");
    }
    var reNonASCII = /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g;
    var getCodePoint = String.prototype.codePointAt != null ? function(str) {
      return str.codePointAt(0);
    } : function(c) {
      return (c.charCodeAt(0) - 55296) * 1024 + c.charCodeAt(1) - 56320 + 65536;
    };
    function singleCharReplacer(c) {
      return "&#x" + (c.length > 1 ? getCodePoint(c) : c.charCodeAt(0)).toString(16).toUpperCase() + ";";
    }
    function getInverse(inverse, re) {
      return function(data) {
        return data.replace(re, function(name) {
          return inverse[name];
        }).replace(reNonASCII, singleCharReplacer);
      };
    }
    var reEscapeChars = new RegExp(xmlReplacer.source + "|" + reNonASCII.source, "g");
    function escape2(data) {
      return data.replace(reEscapeChars, singleCharReplacer);
    }
    exports.escape = escape2;
    function escapeUTF8(data) {
      return data.replace(xmlReplacer, singleCharReplacer);
    }
    exports.escapeUTF8 = escapeUTF8;
    function getASCIIEncoder(obj) {
      return function(data) {
        return data.replace(reEscapeChars, function(c) {
          return obj[c] || singleCharReplacer(c);
        });
      };
    }
  }
});

// node_modules/entities/lib/index.js
var require_lib3 = __commonJS({
  "node_modules/entities/lib/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.decodeXMLStrict = exports.decodeHTML5Strict = exports.decodeHTML4Strict = exports.decodeHTML5 = exports.decodeHTML4 = exports.decodeHTMLStrict = exports.decodeHTML = exports.decodeXML = exports.encodeHTML5 = exports.encodeHTML4 = exports.escapeUTF8 = exports.escape = exports.encodeNonAsciiHTML = exports.encodeHTML = exports.encodeXML = exports.encode = exports.decodeStrict = exports.decode = void 0;
    var decode_1 = require_decode2();
    var encode_1 = require_encode();
    function decode(data, level) {
      return (!level || level <= 0 ? decode_1.decodeXML : decode_1.decodeHTML)(data);
    }
    exports.decode = decode;
    function decodeStrict(data, level) {
      return (!level || level <= 0 ? decode_1.decodeXML : decode_1.decodeHTMLStrict)(data);
    }
    exports.decodeStrict = decodeStrict;
    function encode(data, level) {
      return (!level || level <= 0 ? encode_1.encodeXML : encode_1.encodeHTML)(data);
    }
    exports.encode = encode;
    var encode_2 = require_encode();
    Object.defineProperty(exports, "encodeXML", { enumerable: true, get: function() {
      return encode_2.encodeXML;
    } });
    Object.defineProperty(exports, "encodeHTML", { enumerable: true, get: function() {
      return encode_2.encodeHTML;
    } });
    Object.defineProperty(exports, "encodeNonAsciiHTML", { enumerable: true, get: function() {
      return encode_2.encodeNonAsciiHTML;
    } });
    Object.defineProperty(exports, "escape", { enumerable: true, get: function() {
      return encode_2.escape;
    } });
    Object.defineProperty(exports, "escapeUTF8", { enumerable: true, get: function() {
      return encode_2.escapeUTF8;
    } });
    Object.defineProperty(exports, "encodeHTML4", { enumerable: true, get: function() {
      return encode_2.encodeHTML;
    } });
    Object.defineProperty(exports, "encodeHTML5", { enumerable: true, get: function() {
      return encode_2.encodeHTML;
    } });
    var decode_2 = require_decode2();
    Object.defineProperty(exports, "decodeXML", { enumerable: true, get: function() {
      return decode_2.decodeXML;
    } });
    Object.defineProperty(exports, "decodeHTML", { enumerable: true, get: function() {
      return decode_2.decodeHTML;
    } });
    Object.defineProperty(exports, "decodeHTMLStrict", { enumerable: true, get: function() {
      return decode_2.decodeHTMLStrict;
    } });
    Object.defineProperty(exports, "decodeHTML4", { enumerable: true, get: function() {
      return decode_2.decodeHTML;
    } });
    Object.defineProperty(exports, "decodeHTML5", { enumerable: true, get: function() {
      return decode_2.decodeHTML;
    } });
    Object.defineProperty(exports, "decodeHTML4Strict", { enumerable: true, get: function() {
      return decode_2.decodeHTMLStrict;
    } });
    Object.defineProperty(exports, "decodeHTML5Strict", { enumerable: true, get: function() {
      return decode_2.decodeHTMLStrict;
    } });
    Object.defineProperty(exports, "decodeXMLStrict", { enumerable: true, get: function() {
      return decode_2.decodeXML;
    } });
  }
});

// node_modules/htmlparser2/node_modules/dom-serializer/lib/foreignNames.js
var require_foreignNames = __commonJS({
  "node_modules/htmlparser2/node_modules/dom-serializer/lib/foreignNames.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.attributeNames = exports.elementNames = void 0;
    exports.elementNames = new Map([
      ["altglyph", "altGlyph"],
      ["altglyphdef", "altGlyphDef"],
      ["altglyphitem", "altGlyphItem"],
      ["animatecolor", "animateColor"],
      ["animatemotion", "animateMotion"],
      ["animatetransform", "animateTransform"],
      ["clippath", "clipPath"],
      ["feblend", "feBlend"],
      ["fecolormatrix", "feColorMatrix"],
      ["fecomponenttransfer", "feComponentTransfer"],
      ["fecomposite", "feComposite"],
      ["feconvolvematrix", "feConvolveMatrix"],
      ["fediffuselighting", "feDiffuseLighting"],
      ["fedisplacementmap", "feDisplacementMap"],
      ["fedistantlight", "feDistantLight"],
      ["fedropshadow", "feDropShadow"],
      ["feflood", "feFlood"],
      ["fefunca", "feFuncA"],
      ["fefuncb", "feFuncB"],
      ["fefuncg", "feFuncG"],
      ["fefuncr", "feFuncR"],
      ["fegaussianblur", "feGaussianBlur"],
      ["feimage", "feImage"],
      ["femerge", "feMerge"],
      ["femergenode", "feMergeNode"],
      ["femorphology", "feMorphology"],
      ["feoffset", "feOffset"],
      ["fepointlight", "fePointLight"],
      ["fespecularlighting", "feSpecularLighting"],
      ["fespotlight", "feSpotLight"],
      ["fetile", "feTile"],
      ["feturbulence", "feTurbulence"],
      ["foreignobject", "foreignObject"],
      ["glyphref", "glyphRef"],
      ["lineargradient", "linearGradient"],
      ["radialgradient", "radialGradient"],
      ["textpath", "textPath"]
    ]);
    exports.attributeNames = new Map([
      ["definitionurl", "definitionURL"],
      ["attributename", "attributeName"],
      ["attributetype", "attributeType"],
      ["basefrequency", "baseFrequency"],
      ["baseprofile", "baseProfile"],
      ["calcmode", "calcMode"],
      ["clippathunits", "clipPathUnits"],
      ["diffuseconstant", "diffuseConstant"],
      ["edgemode", "edgeMode"],
      ["filterunits", "filterUnits"],
      ["glyphref", "glyphRef"],
      ["gradienttransform", "gradientTransform"],
      ["gradientunits", "gradientUnits"],
      ["kernelmatrix", "kernelMatrix"],
      ["kernelunitlength", "kernelUnitLength"],
      ["keypoints", "keyPoints"],
      ["keysplines", "keySplines"],
      ["keytimes", "keyTimes"],
      ["lengthadjust", "lengthAdjust"],
      ["limitingconeangle", "limitingConeAngle"],
      ["markerheight", "markerHeight"],
      ["markerunits", "markerUnits"],
      ["markerwidth", "markerWidth"],
      ["maskcontentunits", "maskContentUnits"],
      ["maskunits", "maskUnits"],
      ["numoctaves", "numOctaves"],
      ["pathlength", "pathLength"],
      ["patterncontentunits", "patternContentUnits"],
      ["patterntransform", "patternTransform"],
      ["patternunits", "patternUnits"],
      ["pointsatx", "pointsAtX"],
      ["pointsaty", "pointsAtY"],
      ["pointsatz", "pointsAtZ"],
      ["preservealpha", "preserveAlpha"],
      ["preserveaspectratio", "preserveAspectRatio"],
      ["primitiveunits", "primitiveUnits"],
      ["refx", "refX"],
      ["refy", "refY"],
      ["repeatcount", "repeatCount"],
      ["repeatdur", "repeatDur"],
      ["requiredextensions", "requiredExtensions"],
      ["requiredfeatures", "requiredFeatures"],
      ["specularconstant", "specularConstant"],
      ["specularexponent", "specularExponent"],
      ["spreadmethod", "spreadMethod"],
      ["startoffset", "startOffset"],
      ["stddeviation", "stdDeviation"],
      ["stitchtiles", "stitchTiles"],
      ["surfacescale", "surfaceScale"],
      ["systemlanguage", "systemLanguage"],
      ["tablevalues", "tableValues"],
      ["targetx", "targetX"],
      ["targety", "targetY"],
      ["textlength", "textLength"],
      ["viewbox", "viewBox"],
      ["viewtarget", "viewTarget"],
      ["xchannelselector", "xChannelSelector"],
      ["ychannelselector", "yChannelSelector"],
      ["zoomandpan", "zoomAndPan"]
    ]);
  }
});

// node_modules/htmlparser2/node_modules/dom-serializer/lib/index.js
var require_lib4 = __commonJS({
  "node_modules/htmlparser2/node_modules/dom-serializer/lib/index.js"(exports) {
    "use strict";
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var ElementType = __importStar(require_lib());
    var entities_1 = require_lib3();
    var foreignNames_1 = require_foreignNames();
    var unencodedElements = new Set([
      "style",
      "script",
      "xmp",
      "iframe",
      "noembed",
      "noframes",
      "plaintext",
      "noscript"
    ]);
    function formatAttributes(attributes, opts) {
      if (!attributes)
        return;
      return Object.keys(attributes).map(function(key2) {
        var _a, _b;
        var value = (_a = attributes[key2]) !== null && _a !== void 0 ? _a : "";
        if (opts.xmlMode === "foreign") {
          key2 = (_b = foreignNames_1.attributeNames.get(key2)) !== null && _b !== void 0 ? _b : key2;
        }
        if (!opts.emptyAttrs && !opts.xmlMode && value === "") {
          return key2;
        }
        return key2 + '="' + (opts.decodeEntities !== false ? entities_1.encodeXML(value) : value.replace(/"/g, "&quot;")) + '"';
      }).join(" ");
    }
    var singleTag = new Set([
      "area",
      "base",
      "basefont",
      "br",
      "col",
      "command",
      "embed",
      "frame",
      "hr",
      "img",
      "input",
      "isindex",
      "keygen",
      "link",
      "meta",
      "param",
      "source",
      "track",
      "wbr"
    ]);
    function render(node, options) {
      if (options === void 0) {
        options = {};
      }
      var nodes = "length" in node ? node : [node];
      var output = "";
      for (var i = 0; i < nodes.length; i++) {
        output += renderNode(nodes[i], options);
      }
      return output;
    }
    exports.default = render;
    function renderNode(node, options) {
      switch (node.type) {
        case ElementType.Root:
          return render(node.children, options);
        case ElementType.Directive:
        case ElementType.Doctype:
          return renderDirective(node);
        case ElementType.Comment:
          return renderComment(node);
        case ElementType.CDATA:
          return renderCdata(node);
        case ElementType.Script:
        case ElementType.Style:
        case ElementType.Tag:
          return renderTag(node, options);
        case ElementType.Text:
          return renderText(node, options);
      }
    }
    var foreignModeIntegrationPoints = new Set([
      "mi",
      "mo",
      "mn",
      "ms",
      "mtext",
      "annotation-xml",
      "foreignObject",
      "desc",
      "title"
    ]);
    var foreignElements = new Set(["svg", "math"]);
    function renderTag(elem, opts) {
      var _a;
      if (opts.xmlMode === "foreign") {
        elem.name = (_a = foreignNames_1.elementNames.get(elem.name)) !== null && _a !== void 0 ? _a : elem.name;
        if (elem.parent && foreignModeIntegrationPoints.has(elem.parent.name)) {
          opts = __assign(__assign({}, opts), { xmlMode: false });
        }
      }
      if (!opts.xmlMode && foreignElements.has(elem.name)) {
        opts = __assign(__assign({}, opts), { xmlMode: "foreign" });
      }
      var tag = "<" + elem.name;
      var attribs = formatAttributes(elem.attribs, opts);
      if (attribs) {
        tag += " " + attribs;
      }
      if (elem.children.length === 0 && (opts.xmlMode ? opts.selfClosingTags !== false : opts.selfClosingTags && singleTag.has(elem.name))) {
        if (!opts.xmlMode)
          tag += " ";
        tag += "/>";
      } else {
        tag += ">";
        if (elem.children.length > 0) {
          tag += render(elem.children, opts);
        }
        if (opts.xmlMode || !singleTag.has(elem.name)) {
          tag += "</" + elem.name + ">";
        }
      }
      return tag;
    }
    function renderDirective(elem) {
      return "<" + elem.data + ">";
    }
    function renderText(elem, opts) {
      var data = elem.data || "";
      if (opts.decodeEntities !== false && !(!opts.xmlMode && elem.parent && unencodedElements.has(elem.parent.name))) {
        data = entities_1.encodeXML(data);
      }
      return data;
    }
    function renderCdata(elem) {
      return "<![CDATA[" + elem.children[0].data + "]]>";
    }
    function renderComment(elem) {
      return "<!--" + elem.data + "-->";
    }
  }
});

// node_modules/htmlparser2/node_modules/domutils/lib/stringify.js
var require_stringify = __commonJS({
  "node_modules/htmlparser2/node_modules/domutils/lib/stringify.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.innerText = exports.textContent = exports.getText = exports.getInnerHTML = exports.getOuterHTML = void 0;
    var domhandler_1 = require_lib2();
    var dom_serializer_1 = __importDefault(require_lib4());
    var domelementtype_1 = require_lib();
    function getOuterHTML(node, options) {
      return dom_serializer_1.default(node, options);
    }
    exports.getOuterHTML = getOuterHTML;
    function getInnerHTML(node, options) {
      return domhandler_1.hasChildren(node) ? node.children.map(function(node2) {
        return getOuterHTML(node2, options);
      }).join("") : "";
    }
    exports.getInnerHTML = getInnerHTML;
    function getText2(node) {
      if (Array.isArray(node))
        return node.map(getText2).join("");
      if (domhandler_1.isTag(node))
        return node.name === "br" ? "\n" : getText2(node.children);
      if (domhandler_1.isCDATA(node))
        return getText2(node.children);
      if (domhandler_1.isText(node))
        return node.data;
      return "";
    }
    exports.getText = getText2;
    function textContent(node) {
      if (Array.isArray(node))
        return node.map(textContent).join("");
      if (domhandler_1.isTag(node))
        return textContent(node.children);
      if (domhandler_1.isCDATA(node))
        return textContent(node.children);
      if (domhandler_1.isText(node))
        return node.data;
      return "";
    }
    exports.textContent = textContent;
    function innerText(node) {
      if (Array.isArray(node))
        return node.map(innerText).join("");
      if (domhandler_1.hasChildren(node) && node.type === domelementtype_1.ElementType.Tag) {
        return innerText(node.children);
      }
      if (domhandler_1.isCDATA(node))
        return innerText(node.children);
      if (domhandler_1.isText(node))
        return node.data;
      return "";
    }
    exports.innerText = innerText;
  }
});

// node_modules/htmlparser2/node_modules/domutils/lib/traversal.js
var require_traversal = __commonJS({
  "node_modules/htmlparser2/node_modules/domutils/lib/traversal.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.prevElementSibling = exports.nextElementSibling = exports.getName = exports.hasAttrib = exports.getAttributeValue = exports.getSiblings = exports.getParent = exports.getChildren = void 0;
    var domhandler_1 = require_lib2();
    var emptyArray = [];
    function getChildren2(elem) {
      var _a;
      return (_a = elem.children) !== null && _a !== void 0 ? _a : emptyArray;
    }
    exports.getChildren = getChildren2;
    function getParent2(elem) {
      return elem.parent || null;
    }
    exports.getParent = getParent2;
    function getSiblings2(elem) {
      var _a, _b;
      var parent = getParent2(elem);
      if (parent != null)
        return getChildren2(parent);
      var siblings = [elem];
      var prev = elem.prev, next = elem.next;
      while (prev != null) {
        siblings.unshift(prev);
        _a = prev, prev = _a.prev;
      }
      while (next != null) {
        siblings.push(next);
        _b = next, next = _b.next;
      }
      return siblings;
    }
    exports.getSiblings = getSiblings2;
    function getAttributeValue2(elem, name) {
      var _a;
      return (_a = elem.attribs) === null || _a === void 0 ? void 0 : _a[name];
    }
    exports.getAttributeValue = getAttributeValue2;
    function hasAttrib2(elem, name) {
      return elem.attribs != null && Object.prototype.hasOwnProperty.call(elem.attribs, name) && elem.attribs[name] != null;
    }
    exports.hasAttrib = hasAttrib2;
    function getName2(elem) {
      return elem.name;
    }
    exports.getName = getName2;
    function nextElementSibling2(elem) {
      var _a;
      var next = elem.next;
      while (next !== null && !domhandler_1.isTag(next))
        _a = next, next = _a.next;
      return next;
    }
    exports.nextElementSibling = nextElementSibling2;
    function prevElementSibling(elem) {
      var _a;
      var prev = elem.prev;
      while (prev !== null && !domhandler_1.isTag(prev))
        _a = prev, prev = _a.prev;
      return prev;
    }
    exports.prevElementSibling = prevElementSibling;
  }
});

// node_modules/htmlparser2/node_modules/domutils/lib/manipulation.js
var require_manipulation = __commonJS({
  "node_modules/htmlparser2/node_modules/domutils/lib/manipulation.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.prepend = exports.prependChild = exports.append = exports.appendChild = exports.replaceElement = exports.removeElement = void 0;
    function removeElement(elem) {
      if (elem.prev)
        elem.prev.next = elem.next;
      if (elem.next)
        elem.next.prev = elem.prev;
      if (elem.parent) {
        var childs = elem.parent.children;
        childs.splice(childs.lastIndexOf(elem), 1);
      }
    }
    exports.removeElement = removeElement;
    function replaceElement(elem, replacement) {
      var prev = replacement.prev = elem.prev;
      if (prev) {
        prev.next = replacement;
      }
      var next = replacement.next = elem.next;
      if (next) {
        next.prev = replacement;
      }
      var parent = replacement.parent = elem.parent;
      if (parent) {
        var childs = parent.children;
        childs[childs.lastIndexOf(elem)] = replacement;
      }
    }
    exports.replaceElement = replaceElement;
    function appendChild(elem, child) {
      removeElement(child);
      child.next = null;
      child.parent = elem;
      if (elem.children.push(child) > 1) {
        var sibling = elem.children[elem.children.length - 2];
        sibling.next = child;
        child.prev = sibling;
      } else {
        child.prev = null;
      }
    }
    exports.appendChild = appendChild;
    function append2(elem, next) {
      removeElement(next);
      var parent = elem.parent;
      var currNext = elem.next;
      next.next = currNext;
      next.prev = elem;
      elem.next = next;
      next.parent = parent;
      if (currNext) {
        currNext.prev = next;
        if (parent) {
          var childs = parent.children;
          childs.splice(childs.lastIndexOf(currNext), 0, next);
        }
      } else if (parent) {
        parent.children.push(next);
      }
    }
    exports.append = append2;
    function prependChild(elem, child) {
      removeElement(child);
      child.parent = elem;
      child.prev = null;
      if (elem.children.unshift(child) !== 1) {
        var sibling = elem.children[1];
        sibling.prev = child;
        child.next = sibling;
      } else {
        child.next = null;
      }
    }
    exports.prependChild = prependChild;
    function prepend(elem, prev) {
      removeElement(prev);
      var parent = elem.parent;
      if (parent) {
        var childs = parent.children;
        childs.splice(childs.indexOf(elem), 0, prev);
      }
      if (elem.prev) {
        elem.prev.next = prev;
      }
      prev.parent = parent;
      prev.prev = elem.prev;
      prev.next = elem;
      elem.prev = prev;
    }
    exports.prepend = prepend;
  }
});

// node_modules/htmlparser2/node_modules/domutils/lib/querying.js
var require_querying = __commonJS({
  "node_modules/htmlparser2/node_modules/domutils/lib/querying.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.findAll = exports.existsOne = exports.findOne = exports.findOneChild = exports.find = exports.filter = void 0;
    var domhandler_1 = require_lib2();
    function filter(test, node, recurse, limit) {
      if (recurse === void 0) {
        recurse = true;
      }
      if (limit === void 0) {
        limit = Infinity;
      }
      if (!Array.isArray(node))
        node = [node];
      return find(test, node, recurse, limit);
    }
    exports.filter = filter;
    function find(test, nodes, recurse, limit) {
      var result = [];
      for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
        var elem = nodes_1[_i];
        if (test(elem)) {
          result.push(elem);
          if (--limit <= 0)
            break;
        }
        if (recurse && domhandler_1.hasChildren(elem) && elem.children.length > 0) {
          var children = find(test, elem.children, recurse, limit);
          result.push.apply(result, children);
          limit -= children.length;
          if (limit <= 0)
            break;
        }
      }
      return result;
    }
    exports.find = find;
    function findOneChild(test, nodes) {
      return nodes.find(test);
    }
    exports.findOneChild = findOneChild;
    function findOne2(test, nodes, recurse) {
      if (recurse === void 0) {
        recurse = true;
      }
      var elem = null;
      for (var i = 0; i < nodes.length && !elem; i++) {
        var checked = nodes[i];
        if (!domhandler_1.isTag(checked)) {
          continue;
        } else if (test(checked)) {
          elem = checked;
        } else if (recurse && checked.children.length > 0) {
          elem = findOne2(test, checked.children);
        }
      }
      return elem;
    }
    exports.findOne = findOne2;
    function existsOne2(test, nodes) {
      return nodes.some(function(checked) {
        return domhandler_1.isTag(checked) && (test(checked) || checked.children.length > 0 && existsOne2(test, checked.children));
      });
    }
    exports.existsOne = existsOne2;
    function findAll2(test, nodes) {
      var _a;
      var result = [];
      var stack = nodes.filter(domhandler_1.isTag);
      var elem;
      while (elem = stack.shift()) {
        var children = (_a = elem.children) === null || _a === void 0 ? void 0 : _a.filter(domhandler_1.isTag);
        if (children && children.length > 0) {
          stack.unshift.apply(stack, children);
        }
        if (test(elem))
          result.push(elem);
      }
      return result;
    }
    exports.findAll = findAll2;
  }
});

// node_modules/htmlparser2/node_modules/domutils/lib/legacy.js
var require_legacy2 = __commonJS({
  "node_modules/htmlparser2/node_modules/domutils/lib/legacy.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getElementsByTagType = exports.getElementsByTagName = exports.getElementById = exports.getElements = exports.testElement = void 0;
    var domhandler_1 = require_lib2();
    var querying_1 = require_querying();
    var Checks = {
      tag_name: function(name) {
        if (typeof name === "function") {
          return function(elem) {
            return domhandler_1.isTag(elem) && name(elem.name);
          };
        } else if (name === "*") {
          return domhandler_1.isTag;
        }
        return function(elem) {
          return domhandler_1.isTag(elem) && elem.name === name;
        };
      },
      tag_type: function(type) {
        if (typeof type === "function") {
          return function(elem) {
            return type(elem.type);
          };
        }
        return function(elem) {
          return elem.type === type;
        };
      },
      tag_contains: function(data) {
        if (typeof data === "function") {
          return function(elem) {
            return domhandler_1.isText(elem) && data(elem.data);
          };
        }
        return function(elem) {
          return domhandler_1.isText(elem) && elem.data === data;
        };
      }
    };
    function getAttribCheck(attrib, value) {
      if (typeof value === "function") {
        return function(elem) {
          return domhandler_1.isTag(elem) && value(elem.attribs[attrib]);
        };
      }
      return function(elem) {
        return domhandler_1.isTag(elem) && elem.attribs[attrib] === value;
      };
    }
    function combineFuncs(a, b) {
      return function(elem) {
        return a(elem) || b(elem);
      };
    }
    function compileTest(options) {
      var funcs = Object.keys(options).map(function(key2) {
        var value = options[key2];
        return key2 in Checks ? Checks[key2](value) : getAttribCheck(key2, value);
      });
      return funcs.length === 0 ? null : funcs.reduce(combineFuncs);
    }
    function testElement(options, node) {
      var test = compileTest(options);
      return test ? test(node) : true;
    }
    exports.testElement = testElement;
    function getElements(options, nodes, recurse, limit) {
      if (limit === void 0) {
        limit = Infinity;
      }
      var test = compileTest(options);
      return test ? querying_1.filter(test, nodes, recurse, limit) : [];
    }
    exports.getElements = getElements;
    function getElementById(id, nodes, recurse) {
      if (recurse === void 0) {
        recurse = true;
      }
      if (!Array.isArray(nodes))
        nodes = [nodes];
      return querying_1.findOne(getAttribCheck("id", id), nodes, recurse);
    }
    exports.getElementById = getElementById;
    function getElementsByTagName(tagName15, nodes, recurse, limit) {
      if (recurse === void 0) {
        recurse = true;
      }
      if (limit === void 0) {
        limit = Infinity;
      }
      return querying_1.filter(Checks.tag_name(tagName15), nodes, recurse, limit);
    }
    exports.getElementsByTagName = getElementsByTagName;
    function getElementsByTagType(type, nodes, recurse, limit) {
      if (recurse === void 0) {
        recurse = true;
      }
      if (limit === void 0) {
        limit = Infinity;
      }
      return querying_1.filter(Checks.tag_type(type), nodes, recurse, limit);
    }
    exports.getElementsByTagType = getElementsByTagType;
  }
});

// node_modules/htmlparser2/node_modules/domutils/lib/helpers.js
var require_helpers = __commonJS({
  "node_modules/htmlparser2/node_modules/domutils/lib/helpers.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.uniqueSort = exports.compareDocumentPosition = exports.removeSubsets = void 0;
    var domhandler_1 = require_lib2();
    function removeSubsets2(nodes) {
      var idx = nodes.length;
      while (--idx >= 0) {
        var node = nodes[idx];
        if (idx > 0 && nodes.lastIndexOf(node, idx - 1) >= 0) {
          nodes.splice(idx, 1);
          continue;
        }
        for (var ancestor = node.parent; ancestor; ancestor = ancestor.parent) {
          if (nodes.includes(ancestor)) {
            nodes.splice(idx, 1);
            break;
          }
        }
      }
      return nodes;
    }
    exports.removeSubsets = removeSubsets2;
    function compareDocumentPosition(nodeA, nodeB) {
      var aParents = [];
      var bParents = [];
      if (nodeA === nodeB) {
        return 0;
      }
      var current = domhandler_1.hasChildren(nodeA) ? nodeA : nodeA.parent;
      while (current) {
        aParents.unshift(current);
        current = current.parent;
      }
      current = domhandler_1.hasChildren(nodeB) ? nodeB : nodeB.parent;
      while (current) {
        bParents.unshift(current);
        current = current.parent;
      }
      var maxIdx = Math.min(aParents.length, bParents.length);
      var idx = 0;
      while (idx < maxIdx && aParents[idx] === bParents[idx]) {
        idx++;
      }
      if (idx === 0) {
        return 1;
      }
      var sharedParent = aParents[idx - 1];
      var siblings = sharedParent.children;
      var aSibling = aParents[idx];
      var bSibling = bParents[idx];
      if (siblings.indexOf(aSibling) > siblings.indexOf(bSibling)) {
        if (sharedParent === nodeB) {
          return 4 | 16;
        }
        return 4;
      }
      if (sharedParent === nodeA) {
        return 2 | 8;
      }
      return 2;
    }
    exports.compareDocumentPosition = compareDocumentPosition;
    function uniqueSort(nodes) {
      nodes = nodes.filter(function(node, i, arr) {
        return !arr.includes(node, i + 1);
      });
      nodes.sort(function(a, b) {
        var relative = compareDocumentPosition(a, b);
        if (relative & 2) {
          return -1;
        } else if (relative & 4) {
          return 1;
        }
        return 0;
      });
      return nodes;
    }
    exports.uniqueSort = uniqueSort;
  }
});

// node_modules/htmlparser2/node_modules/domutils/lib/index.js
var require_lib5 = __commonJS({
  "node_modules/htmlparser2/node_modules/domutils/lib/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.hasChildren = exports.isDocument = exports.isComment = exports.isText = exports.isCDATA = exports.isTag = void 0;
    __exportStar(require_stringify(), exports);
    __exportStar(require_traversal(), exports);
    __exportStar(require_manipulation(), exports);
    __exportStar(require_querying(), exports);
    __exportStar(require_legacy2(), exports);
    __exportStar(require_helpers(), exports);
    var domhandler_1 = require_lib2();
    Object.defineProperty(exports, "isTag", { enumerable: true, get: function() {
      return domhandler_1.isTag;
    } });
    Object.defineProperty(exports, "isCDATA", { enumerable: true, get: function() {
      return domhandler_1.isCDATA;
    } });
    Object.defineProperty(exports, "isText", { enumerable: true, get: function() {
      return domhandler_1.isText;
    } });
    Object.defineProperty(exports, "isComment", { enumerable: true, get: function() {
      return domhandler_1.isComment;
    } });
    Object.defineProperty(exports, "isDocument", { enumerable: true, get: function() {
      return domhandler_1.isDocument;
    } });
    Object.defineProperty(exports, "hasChildren", { enumerable: true, get: function() {
      return domhandler_1.hasChildren;
    } });
  }
});

// node_modules/htmlparser2/lib/FeedHandler.js
var require_FeedHandler = __commonJS({
  "node_modules/htmlparser2/lib/FeedHandler.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parseFeed = exports.FeedHandler = void 0;
    var domhandler_1 = __importDefault(require_lib2());
    var DomUtils = __importStar(require_lib5());
    var Parser_1 = require_Parser();
    var FeedItemMediaMedium;
    (function(FeedItemMediaMedium2) {
      FeedItemMediaMedium2[FeedItemMediaMedium2["image"] = 0] = "image";
      FeedItemMediaMedium2[FeedItemMediaMedium2["audio"] = 1] = "audio";
      FeedItemMediaMedium2[FeedItemMediaMedium2["video"] = 2] = "video";
      FeedItemMediaMedium2[FeedItemMediaMedium2["document"] = 3] = "document";
      FeedItemMediaMedium2[FeedItemMediaMedium2["executable"] = 4] = "executable";
    })(FeedItemMediaMedium || (FeedItemMediaMedium = {}));
    var FeedItemMediaExpression;
    (function(FeedItemMediaExpression2) {
      FeedItemMediaExpression2[FeedItemMediaExpression2["sample"] = 0] = "sample";
      FeedItemMediaExpression2[FeedItemMediaExpression2["full"] = 1] = "full";
      FeedItemMediaExpression2[FeedItemMediaExpression2["nonstop"] = 2] = "nonstop";
    })(FeedItemMediaExpression || (FeedItemMediaExpression = {}));
    var FeedHandler = function(_super) {
      __extends(FeedHandler2, _super);
      function FeedHandler2(callback, options) {
        var _this = this;
        if (typeof callback === "object") {
          callback = void 0;
          options = callback;
        }
        _this = _super.call(this, callback, options) || this;
        return _this;
      }
      FeedHandler2.prototype.onend = function() {
        var _a, _b;
        var feedRoot = getOneElement(isValidFeed, this.dom);
        if (!feedRoot) {
          this.handleCallback(new Error("couldn't find root of feed"));
          return;
        }
        var feed = {};
        if (feedRoot.name === "feed") {
          var childs = feedRoot.children;
          feed.type = "atom";
          addConditionally(feed, "id", "id", childs);
          addConditionally(feed, "title", "title", childs);
          var href = getAttribute("href", getOneElement("link", childs));
          if (href) {
            feed.link = href;
          }
          addConditionally(feed, "description", "subtitle", childs);
          var updated = fetch("updated", childs);
          if (updated) {
            feed.updated = new Date(updated);
          }
          addConditionally(feed, "author", "email", childs, true);
          feed.items = getElements("entry", childs).map(function(item) {
            var entry = {};
            var children = item.children;
            addConditionally(entry, "id", "id", children);
            addConditionally(entry, "title", "title", children);
            var href2 = getAttribute("href", getOneElement("link", children));
            if (href2) {
              entry.link = href2;
            }
            var description = fetch("summary", children) || fetch("content", children);
            if (description) {
              entry.description = description;
            }
            var pubDate = fetch("updated", children);
            if (pubDate) {
              entry.pubDate = new Date(pubDate);
            }
            entry.media = getMediaElements(children);
            return entry;
          });
        } else {
          var childs = (_b = (_a = getOneElement("channel", feedRoot.children)) === null || _a === void 0 ? void 0 : _a.children) !== null && _b !== void 0 ? _b : [];
          feed.type = feedRoot.name.substr(0, 3);
          feed.id = "";
          addConditionally(feed, "title", "title", childs);
          addConditionally(feed, "link", "link", childs);
          addConditionally(feed, "description", "description", childs);
          var updated = fetch("lastBuildDate", childs);
          if (updated) {
            feed.updated = new Date(updated);
          }
          addConditionally(feed, "author", "managingEditor", childs, true);
          feed.items = getElements("item", feedRoot.children).map(function(item) {
            var entry = {};
            var children = item.children;
            addConditionally(entry, "id", "guid", children);
            addConditionally(entry, "title", "title", children);
            addConditionally(entry, "link", "link", children);
            addConditionally(entry, "description", "description", children);
            var pubDate = fetch("pubDate", children);
            if (pubDate)
              entry.pubDate = new Date(pubDate);
            entry.media = getMediaElements(children);
            return entry;
          });
        }
        this.feed = feed;
        this.handleCallback(null);
      };
      return FeedHandler2;
    }(domhandler_1.default);
    exports.FeedHandler = FeedHandler;
    function getMediaElements(where) {
      return getElements("media:content", where).map(function(elem) {
        var media = {
          medium: elem.attribs.medium,
          isDefault: !!elem.attribs.isDefault
        };
        if (elem.attribs.url) {
          media.url = elem.attribs.url;
        }
        if (elem.attribs.fileSize) {
          media.fileSize = parseInt(elem.attribs.fileSize, 10);
        }
        if (elem.attribs.type) {
          media.type = elem.attribs.type;
        }
        if (elem.attribs.expression) {
          media.expression = elem.attribs.expression;
        }
        if (elem.attribs.bitrate) {
          media.bitrate = parseInt(elem.attribs.bitrate, 10);
        }
        if (elem.attribs.framerate) {
          media.framerate = parseInt(elem.attribs.framerate, 10);
        }
        if (elem.attribs.samplingrate) {
          media.samplingrate = parseInt(elem.attribs.samplingrate, 10);
        }
        if (elem.attribs.channels) {
          media.channels = parseInt(elem.attribs.channels, 10);
        }
        if (elem.attribs.duration) {
          media.duration = parseInt(elem.attribs.duration, 10);
        }
        if (elem.attribs.height) {
          media.height = parseInt(elem.attribs.height, 10);
        }
        if (elem.attribs.width) {
          media.width = parseInt(elem.attribs.width, 10);
        }
        if (elem.attribs.lang) {
          media.lang = elem.attribs.lang;
        }
        return media;
      });
    }
    function getElements(tagName15, where) {
      return DomUtils.getElementsByTagName(tagName15, where, true);
    }
    function getOneElement(tagName15, node) {
      return DomUtils.getElementsByTagName(tagName15, node, true, 1)[0];
    }
    function fetch(tagName15, where, recurse) {
      if (recurse === void 0) {
        recurse = false;
      }
      return DomUtils.getText(DomUtils.getElementsByTagName(tagName15, where, recurse, 1)).trim();
    }
    function getAttribute(name, elem) {
      if (!elem) {
        return null;
      }
      var attribs = elem.attribs;
      return attribs[name];
    }
    function addConditionally(obj, prop2, what, where, recurse) {
      if (recurse === void 0) {
        recurse = false;
      }
      var tmp = fetch(what, where, recurse);
      if (tmp)
        obj[prop2] = tmp;
    }
    function isValidFeed(value) {
      return value === "rss" || value === "feed" || value === "rdf:RDF";
    }
    function parseFeed(feed, options) {
      if (options === void 0) {
        options = { xmlMode: true };
      }
      var handler5 = new FeedHandler(options);
      new Parser_1.Parser(handler5, options).end(feed);
      return handler5.feed;
    }
    exports.parseFeed = parseFeed;
  }
});

// node_modules/htmlparser2/lib/index.js
var require_lib6 = __commonJS({
  "node_modules/htmlparser2/lib/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RssHandler = exports.DefaultHandler = exports.DomUtils = exports.ElementType = exports.Tokenizer = exports.createDomStream = exports.parseDOM = exports.parseDocument = exports.DomHandler = exports.Parser = void 0;
    var Parser_1 = require_Parser();
    Object.defineProperty(exports, "Parser", { enumerable: true, get: function() {
      return Parser_1.Parser;
    } });
    var domhandler_1 = require_lib2();
    Object.defineProperty(exports, "DomHandler", { enumerable: true, get: function() {
      return domhandler_1.DomHandler;
    } });
    Object.defineProperty(exports, "DefaultHandler", { enumerable: true, get: function() {
      return domhandler_1.DomHandler;
    } });
    function parseDocument(data, options) {
      var handler5 = new domhandler_1.DomHandler(void 0, options);
      new Parser_1.Parser(handler5, options).end(data);
      return handler5.root;
    }
    exports.parseDocument = parseDocument;
    function parseDOM(data, options) {
      return parseDocument(data, options).children;
    }
    exports.parseDOM = parseDOM;
    function createDomStream(cb, options, elementCb) {
      var handler5 = new domhandler_1.DomHandler(cb, options, elementCb);
      return new Parser_1.Parser(handler5, options);
    }
    exports.createDomStream = createDomStream;
    var Tokenizer_1 = require_Tokenizer();
    Object.defineProperty(exports, "Tokenizer", { enumerable: true, get: function() {
      return __importDefault(Tokenizer_1).default;
    } });
    var ElementType = __importStar(require_lib());
    exports.ElementType = ElementType;
    __exportStar(require_FeedHandler(), exports);
    exports.DomUtils = __importStar(require_lib5());
    var FeedHandler_1 = require_FeedHandler();
    Object.defineProperty(exports, "RssHandler", { enumerable: true, get: function() {
      return FeedHandler_1.FeedHandler;
    } });
  }
});

// node_modules/css-select/node_modules/dom-serializer/lib/foreignNames.js
var require_foreignNames2 = __commonJS({
  "node_modules/css-select/node_modules/dom-serializer/lib/foreignNames.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.attributeNames = exports.elementNames = void 0;
    exports.elementNames = new Map([
      ["altglyph", "altGlyph"],
      ["altglyphdef", "altGlyphDef"],
      ["altglyphitem", "altGlyphItem"],
      ["animatecolor", "animateColor"],
      ["animatemotion", "animateMotion"],
      ["animatetransform", "animateTransform"],
      ["clippath", "clipPath"],
      ["feblend", "feBlend"],
      ["fecolormatrix", "feColorMatrix"],
      ["fecomponenttransfer", "feComponentTransfer"],
      ["fecomposite", "feComposite"],
      ["feconvolvematrix", "feConvolveMatrix"],
      ["fediffuselighting", "feDiffuseLighting"],
      ["fedisplacementmap", "feDisplacementMap"],
      ["fedistantlight", "feDistantLight"],
      ["fedropshadow", "feDropShadow"],
      ["feflood", "feFlood"],
      ["fefunca", "feFuncA"],
      ["fefuncb", "feFuncB"],
      ["fefuncg", "feFuncG"],
      ["fefuncr", "feFuncR"],
      ["fegaussianblur", "feGaussianBlur"],
      ["feimage", "feImage"],
      ["femerge", "feMerge"],
      ["femergenode", "feMergeNode"],
      ["femorphology", "feMorphology"],
      ["feoffset", "feOffset"],
      ["fepointlight", "fePointLight"],
      ["fespecularlighting", "feSpecularLighting"],
      ["fespotlight", "feSpotLight"],
      ["fetile", "feTile"],
      ["feturbulence", "feTurbulence"],
      ["foreignobject", "foreignObject"],
      ["glyphref", "glyphRef"],
      ["lineargradient", "linearGradient"],
      ["radialgradient", "radialGradient"],
      ["textpath", "textPath"]
    ]);
    exports.attributeNames = new Map([
      ["definitionurl", "definitionURL"],
      ["attributename", "attributeName"],
      ["attributetype", "attributeType"],
      ["basefrequency", "baseFrequency"],
      ["baseprofile", "baseProfile"],
      ["calcmode", "calcMode"],
      ["clippathunits", "clipPathUnits"],
      ["diffuseconstant", "diffuseConstant"],
      ["edgemode", "edgeMode"],
      ["filterunits", "filterUnits"],
      ["glyphref", "glyphRef"],
      ["gradienttransform", "gradientTransform"],
      ["gradientunits", "gradientUnits"],
      ["kernelmatrix", "kernelMatrix"],
      ["kernelunitlength", "kernelUnitLength"],
      ["keypoints", "keyPoints"],
      ["keysplines", "keySplines"],
      ["keytimes", "keyTimes"],
      ["lengthadjust", "lengthAdjust"],
      ["limitingconeangle", "limitingConeAngle"],
      ["markerheight", "markerHeight"],
      ["markerunits", "markerUnits"],
      ["markerwidth", "markerWidth"],
      ["maskcontentunits", "maskContentUnits"],
      ["maskunits", "maskUnits"],
      ["numoctaves", "numOctaves"],
      ["pathlength", "pathLength"],
      ["patterncontentunits", "patternContentUnits"],
      ["patterntransform", "patternTransform"],
      ["patternunits", "patternUnits"],
      ["pointsatx", "pointsAtX"],
      ["pointsaty", "pointsAtY"],
      ["pointsatz", "pointsAtZ"],
      ["preservealpha", "preserveAlpha"],
      ["preserveaspectratio", "preserveAspectRatio"],
      ["primitiveunits", "primitiveUnits"],
      ["refx", "refX"],
      ["refy", "refY"],
      ["repeatcount", "repeatCount"],
      ["repeatdur", "repeatDur"],
      ["requiredextensions", "requiredExtensions"],
      ["requiredfeatures", "requiredFeatures"],
      ["specularconstant", "specularConstant"],
      ["specularexponent", "specularExponent"],
      ["spreadmethod", "spreadMethod"],
      ["startoffset", "startOffset"],
      ["stddeviation", "stdDeviation"],
      ["stitchtiles", "stitchTiles"],
      ["surfacescale", "surfaceScale"],
      ["systemlanguage", "systemLanguage"],
      ["tablevalues", "tableValues"],
      ["targetx", "targetX"],
      ["targety", "targetY"],
      ["textlength", "textLength"],
      ["viewbox", "viewBox"],
      ["viewtarget", "viewTarget"],
      ["xchannelselector", "xChannelSelector"],
      ["ychannelselector", "yChannelSelector"],
      ["zoomandpan", "zoomAndPan"]
    ]);
  }
});

// node_modules/css-select/node_modules/dom-serializer/lib/index.js
var require_lib7 = __commonJS({
  "node_modules/css-select/node_modules/dom-serializer/lib/index.js"(exports) {
    "use strict";
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var ElementType = __importStar(require_lib());
    var entities_1 = require_lib3();
    var foreignNames_1 = require_foreignNames2();
    var unencodedElements = new Set([
      "style",
      "script",
      "xmp",
      "iframe",
      "noembed",
      "noframes",
      "plaintext",
      "noscript"
    ]);
    function formatAttributes(attributes, opts) {
      if (!attributes)
        return;
      return Object.keys(attributes).map(function(key2) {
        var _a, _b;
        var value = (_a = attributes[key2]) !== null && _a !== void 0 ? _a : "";
        if (opts.xmlMode === "foreign") {
          key2 = (_b = foreignNames_1.attributeNames.get(key2)) !== null && _b !== void 0 ? _b : key2;
        }
        if (!opts.emptyAttrs && !opts.xmlMode && value === "") {
          return key2;
        }
        return key2 + '="' + (opts.decodeEntities !== false ? entities_1.encodeXML(value) : value.replace(/"/g, "&quot;")) + '"';
      }).join(" ");
    }
    var singleTag = new Set([
      "area",
      "base",
      "basefont",
      "br",
      "col",
      "command",
      "embed",
      "frame",
      "hr",
      "img",
      "input",
      "isindex",
      "keygen",
      "link",
      "meta",
      "param",
      "source",
      "track",
      "wbr"
    ]);
    function render(node, options) {
      if (options === void 0) {
        options = {};
      }
      var nodes = "length" in node ? node : [node];
      var output = "";
      for (var i = 0; i < nodes.length; i++) {
        output += renderNode(nodes[i], options);
      }
      return output;
    }
    exports.default = render;
    function renderNode(node, options) {
      switch (node.type) {
        case ElementType.Root:
          return render(node.children, options);
        case ElementType.Directive:
        case ElementType.Doctype:
          return renderDirective(node);
        case ElementType.Comment:
          return renderComment(node);
        case ElementType.CDATA:
          return renderCdata(node);
        case ElementType.Script:
        case ElementType.Style:
        case ElementType.Tag:
          return renderTag(node, options);
        case ElementType.Text:
          return renderText(node, options);
      }
    }
    var foreignModeIntegrationPoints = new Set([
      "mi",
      "mo",
      "mn",
      "ms",
      "mtext",
      "annotation-xml",
      "foreignObject",
      "desc",
      "title"
    ]);
    var foreignElements = new Set(["svg", "math"]);
    function renderTag(elem, opts) {
      var _a;
      if (opts.xmlMode === "foreign") {
        elem.name = (_a = foreignNames_1.elementNames.get(elem.name)) !== null && _a !== void 0 ? _a : elem.name;
        if (elem.parent && foreignModeIntegrationPoints.has(elem.parent.name)) {
          opts = __assign(__assign({}, opts), { xmlMode: false });
        }
      }
      if (!opts.xmlMode && foreignElements.has(elem.name)) {
        opts = __assign(__assign({}, opts), { xmlMode: "foreign" });
      }
      var tag = "<" + elem.name;
      var attribs = formatAttributes(elem.attribs, opts);
      if (attribs) {
        tag += " " + attribs;
      }
      if (elem.children.length === 0 && (opts.xmlMode ? opts.selfClosingTags !== false : opts.selfClosingTags && singleTag.has(elem.name))) {
        if (!opts.xmlMode)
          tag += " ";
        tag += "/>";
      } else {
        tag += ">";
        if (elem.children.length > 0) {
          tag += render(elem.children, opts);
        }
        if (opts.xmlMode || !singleTag.has(elem.name)) {
          tag += "</" + elem.name + ">";
        }
      }
      return tag;
    }
    function renderDirective(elem) {
      return "<" + elem.data + ">";
    }
    function renderText(elem, opts) {
      var data = elem.data || "";
      if (opts.decodeEntities !== false && !(!opts.xmlMode && elem.parent && unencodedElements.has(elem.parent.name))) {
        data = entities_1.encodeXML(data);
      }
      return data;
    }
    function renderCdata(elem) {
      return "<![CDATA[" + elem.children[0].data + "]]>";
    }
    function renderComment(elem) {
      return "<!--" + elem.data + "-->";
    }
  }
});

// node_modules/css-select/node_modules/domutils/lib/stringify.js
var require_stringify2 = __commonJS({
  "node_modules/css-select/node_modules/domutils/lib/stringify.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.innerText = exports.textContent = exports.getText = exports.getInnerHTML = exports.getOuterHTML = void 0;
    var domhandler_1 = require_lib2();
    var dom_serializer_1 = __importDefault(require_lib7());
    var domelementtype_1 = require_lib();
    function getOuterHTML(node, options) {
      return dom_serializer_1.default(node, options);
    }
    exports.getOuterHTML = getOuterHTML;
    function getInnerHTML(node, options) {
      return domhandler_1.hasChildren(node) ? node.children.map(function(node2) {
        return getOuterHTML(node2, options);
      }).join("") : "";
    }
    exports.getInnerHTML = getInnerHTML;
    function getText2(node) {
      if (Array.isArray(node))
        return node.map(getText2).join("");
      if (domhandler_1.isTag(node))
        return node.name === "br" ? "\n" : getText2(node.children);
      if (domhandler_1.isCDATA(node))
        return getText2(node.children);
      if (domhandler_1.isText(node))
        return node.data;
      return "";
    }
    exports.getText = getText2;
    function textContent(node) {
      if (Array.isArray(node))
        return node.map(textContent).join("");
      if (domhandler_1.isTag(node))
        return textContent(node.children);
      if (domhandler_1.isCDATA(node))
        return textContent(node.children);
      if (domhandler_1.isText(node))
        return node.data;
      return "";
    }
    exports.textContent = textContent;
    function innerText(node) {
      if (Array.isArray(node))
        return node.map(innerText).join("");
      if (domhandler_1.hasChildren(node) && node.type === domelementtype_1.ElementType.Tag) {
        return innerText(node.children);
      }
      if (domhandler_1.isCDATA(node))
        return innerText(node.children);
      if (domhandler_1.isText(node))
        return node.data;
      return "";
    }
    exports.innerText = innerText;
  }
});

// node_modules/css-select/node_modules/domutils/lib/traversal.js
var require_traversal2 = __commonJS({
  "node_modules/css-select/node_modules/domutils/lib/traversal.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.prevElementSibling = exports.nextElementSibling = exports.getName = exports.hasAttrib = exports.getAttributeValue = exports.getSiblings = exports.getParent = exports.getChildren = void 0;
    var domhandler_1 = require_lib2();
    var emptyArray = [];
    function getChildren2(elem) {
      var _a;
      return (_a = elem.children) !== null && _a !== void 0 ? _a : emptyArray;
    }
    exports.getChildren = getChildren2;
    function getParent2(elem) {
      return elem.parent || null;
    }
    exports.getParent = getParent2;
    function getSiblings2(elem) {
      var _a, _b;
      var parent = getParent2(elem);
      if (parent != null)
        return getChildren2(parent);
      var siblings = [elem];
      var prev = elem.prev, next = elem.next;
      while (prev != null) {
        siblings.unshift(prev);
        _a = prev, prev = _a.prev;
      }
      while (next != null) {
        siblings.push(next);
        _b = next, next = _b.next;
      }
      return siblings;
    }
    exports.getSiblings = getSiblings2;
    function getAttributeValue2(elem, name) {
      var _a;
      return (_a = elem.attribs) === null || _a === void 0 ? void 0 : _a[name];
    }
    exports.getAttributeValue = getAttributeValue2;
    function hasAttrib2(elem, name) {
      return elem.attribs != null && Object.prototype.hasOwnProperty.call(elem.attribs, name) && elem.attribs[name] != null;
    }
    exports.hasAttrib = hasAttrib2;
    function getName2(elem) {
      return elem.name;
    }
    exports.getName = getName2;
    function nextElementSibling2(elem) {
      var _a;
      var next = elem.next;
      while (next !== null && !domhandler_1.isTag(next))
        _a = next, next = _a.next;
      return next;
    }
    exports.nextElementSibling = nextElementSibling2;
    function prevElementSibling(elem) {
      var _a;
      var prev = elem.prev;
      while (prev !== null && !domhandler_1.isTag(prev))
        _a = prev, prev = _a.prev;
      return prev;
    }
    exports.prevElementSibling = prevElementSibling;
  }
});

// node_modules/css-select/node_modules/domutils/lib/manipulation.js
var require_manipulation2 = __commonJS({
  "node_modules/css-select/node_modules/domutils/lib/manipulation.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.prepend = exports.prependChild = exports.append = exports.appendChild = exports.replaceElement = exports.removeElement = void 0;
    function removeElement(elem) {
      if (elem.prev)
        elem.prev.next = elem.next;
      if (elem.next)
        elem.next.prev = elem.prev;
      if (elem.parent) {
        var childs = elem.parent.children;
        childs.splice(childs.lastIndexOf(elem), 1);
      }
    }
    exports.removeElement = removeElement;
    function replaceElement(elem, replacement) {
      var prev = replacement.prev = elem.prev;
      if (prev) {
        prev.next = replacement;
      }
      var next = replacement.next = elem.next;
      if (next) {
        next.prev = replacement;
      }
      var parent = replacement.parent = elem.parent;
      if (parent) {
        var childs = parent.children;
        childs[childs.lastIndexOf(elem)] = replacement;
      }
    }
    exports.replaceElement = replaceElement;
    function appendChild(elem, child) {
      removeElement(child);
      child.next = null;
      child.parent = elem;
      if (elem.children.push(child) > 1) {
        var sibling = elem.children[elem.children.length - 2];
        sibling.next = child;
        child.prev = sibling;
      } else {
        child.prev = null;
      }
    }
    exports.appendChild = appendChild;
    function append2(elem, next) {
      removeElement(next);
      var parent = elem.parent;
      var currNext = elem.next;
      next.next = currNext;
      next.prev = elem;
      elem.next = next;
      next.parent = parent;
      if (currNext) {
        currNext.prev = next;
        if (parent) {
          var childs = parent.children;
          childs.splice(childs.lastIndexOf(currNext), 0, next);
        }
      } else if (parent) {
        parent.children.push(next);
      }
    }
    exports.append = append2;
    function prependChild(elem, child) {
      removeElement(child);
      child.parent = elem;
      child.prev = null;
      if (elem.children.unshift(child) !== 1) {
        var sibling = elem.children[1];
        sibling.prev = child;
        child.next = sibling;
      } else {
        child.next = null;
      }
    }
    exports.prependChild = prependChild;
    function prepend(elem, prev) {
      removeElement(prev);
      var parent = elem.parent;
      if (parent) {
        var childs = parent.children;
        childs.splice(childs.indexOf(elem), 0, prev);
      }
      if (elem.prev) {
        elem.prev.next = prev;
      }
      prev.parent = parent;
      prev.prev = elem.prev;
      prev.next = elem;
      elem.prev = prev;
    }
    exports.prepend = prepend;
  }
});

// node_modules/css-select/node_modules/domutils/lib/querying.js
var require_querying2 = __commonJS({
  "node_modules/css-select/node_modules/domutils/lib/querying.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.findAll = exports.existsOne = exports.findOne = exports.findOneChild = exports.find = exports.filter = void 0;
    var domhandler_1 = require_lib2();
    function filter(test, node, recurse, limit) {
      if (recurse === void 0) {
        recurse = true;
      }
      if (limit === void 0) {
        limit = Infinity;
      }
      if (!Array.isArray(node))
        node = [node];
      return find(test, node, recurse, limit);
    }
    exports.filter = filter;
    function find(test, nodes, recurse, limit) {
      var result = [];
      for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
        var elem = nodes_1[_i];
        if (test(elem)) {
          result.push(elem);
          if (--limit <= 0)
            break;
        }
        if (recurse && domhandler_1.hasChildren(elem) && elem.children.length > 0) {
          var children = find(test, elem.children, recurse, limit);
          result.push.apply(result, children);
          limit -= children.length;
          if (limit <= 0)
            break;
        }
      }
      return result;
    }
    exports.find = find;
    function findOneChild(test, nodes) {
      return nodes.find(test);
    }
    exports.findOneChild = findOneChild;
    function findOne2(test, nodes, recurse) {
      if (recurse === void 0) {
        recurse = true;
      }
      var elem = null;
      for (var i = 0; i < nodes.length && !elem; i++) {
        var checked = nodes[i];
        if (!domhandler_1.isTag(checked)) {
          continue;
        } else if (test(checked)) {
          elem = checked;
        } else if (recurse && checked.children.length > 0) {
          elem = findOne2(test, checked.children);
        }
      }
      return elem;
    }
    exports.findOne = findOne2;
    function existsOne2(test, nodes) {
      return nodes.some(function(checked) {
        return domhandler_1.isTag(checked) && (test(checked) || checked.children.length > 0 && existsOne2(test, checked.children));
      });
    }
    exports.existsOne = existsOne2;
    function findAll2(test, nodes) {
      var _a;
      var result = [];
      var stack = nodes.filter(domhandler_1.isTag);
      var elem;
      while (elem = stack.shift()) {
        var children = (_a = elem.children) === null || _a === void 0 ? void 0 : _a.filter(domhandler_1.isTag);
        if (children && children.length > 0) {
          stack.unshift.apply(stack, children);
        }
        if (test(elem))
          result.push(elem);
      }
      return result;
    }
    exports.findAll = findAll2;
  }
});

// node_modules/css-select/node_modules/domutils/lib/legacy.js
var require_legacy3 = __commonJS({
  "node_modules/css-select/node_modules/domutils/lib/legacy.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getElementsByTagType = exports.getElementsByTagName = exports.getElementById = exports.getElements = exports.testElement = void 0;
    var domhandler_1 = require_lib2();
    var querying_1 = require_querying2();
    var Checks = {
      tag_name: function(name) {
        if (typeof name === "function") {
          return function(elem) {
            return domhandler_1.isTag(elem) && name(elem.name);
          };
        } else if (name === "*") {
          return domhandler_1.isTag;
        }
        return function(elem) {
          return domhandler_1.isTag(elem) && elem.name === name;
        };
      },
      tag_type: function(type) {
        if (typeof type === "function") {
          return function(elem) {
            return type(elem.type);
          };
        }
        return function(elem) {
          return elem.type === type;
        };
      },
      tag_contains: function(data) {
        if (typeof data === "function") {
          return function(elem) {
            return domhandler_1.isText(elem) && data(elem.data);
          };
        }
        return function(elem) {
          return domhandler_1.isText(elem) && elem.data === data;
        };
      }
    };
    function getAttribCheck(attrib, value) {
      if (typeof value === "function") {
        return function(elem) {
          return domhandler_1.isTag(elem) && value(elem.attribs[attrib]);
        };
      }
      return function(elem) {
        return domhandler_1.isTag(elem) && elem.attribs[attrib] === value;
      };
    }
    function combineFuncs(a, b) {
      return function(elem) {
        return a(elem) || b(elem);
      };
    }
    function compileTest(options) {
      var funcs = Object.keys(options).map(function(key2) {
        var value = options[key2];
        return key2 in Checks ? Checks[key2](value) : getAttribCheck(key2, value);
      });
      return funcs.length === 0 ? null : funcs.reduce(combineFuncs);
    }
    function testElement(options, node) {
      var test = compileTest(options);
      return test ? test(node) : true;
    }
    exports.testElement = testElement;
    function getElements(options, nodes, recurse, limit) {
      if (limit === void 0) {
        limit = Infinity;
      }
      var test = compileTest(options);
      return test ? querying_1.filter(test, nodes, recurse, limit) : [];
    }
    exports.getElements = getElements;
    function getElementById(id, nodes, recurse) {
      if (recurse === void 0) {
        recurse = true;
      }
      if (!Array.isArray(nodes))
        nodes = [nodes];
      return querying_1.findOne(getAttribCheck("id", id), nodes, recurse);
    }
    exports.getElementById = getElementById;
    function getElementsByTagName(tagName15, nodes, recurse, limit) {
      if (recurse === void 0) {
        recurse = true;
      }
      if (limit === void 0) {
        limit = Infinity;
      }
      return querying_1.filter(Checks.tag_name(tagName15), nodes, recurse, limit);
    }
    exports.getElementsByTagName = getElementsByTagName;
    function getElementsByTagType(type, nodes, recurse, limit) {
      if (recurse === void 0) {
        recurse = true;
      }
      if (limit === void 0) {
        limit = Infinity;
      }
      return querying_1.filter(Checks.tag_type(type), nodes, recurse, limit);
    }
    exports.getElementsByTagType = getElementsByTagType;
  }
});

// node_modules/css-select/node_modules/domutils/lib/helpers.js
var require_helpers2 = __commonJS({
  "node_modules/css-select/node_modules/domutils/lib/helpers.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.uniqueSort = exports.compareDocumentPosition = exports.removeSubsets = void 0;
    var domhandler_1 = require_lib2();
    function removeSubsets2(nodes) {
      var idx = nodes.length;
      while (--idx >= 0) {
        var node = nodes[idx];
        if (idx > 0 && nodes.lastIndexOf(node, idx - 1) >= 0) {
          nodes.splice(idx, 1);
          continue;
        }
        for (var ancestor = node.parent; ancestor; ancestor = ancestor.parent) {
          if (nodes.includes(ancestor)) {
            nodes.splice(idx, 1);
            break;
          }
        }
      }
      return nodes;
    }
    exports.removeSubsets = removeSubsets2;
    function compareDocumentPosition(nodeA, nodeB) {
      var aParents = [];
      var bParents = [];
      if (nodeA === nodeB) {
        return 0;
      }
      var current = domhandler_1.hasChildren(nodeA) ? nodeA : nodeA.parent;
      while (current) {
        aParents.unshift(current);
        current = current.parent;
      }
      current = domhandler_1.hasChildren(nodeB) ? nodeB : nodeB.parent;
      while (current) {
        bParents.unshift(current);
        current = current.parent;
      }
      var maxIdx = Math.min(aParents.length, bParents.length);
      var idx = 0;
      while (idx < maxIdx && aParents[idx] === bParents[idx]) {
        idx++;
      }
      if (idx === 0) {
        return 1;
      }
      var sharedParent = aParents[idx - 1];
      var siblings = sharedParent.children;
      var aSibling = aParents[idx];
      var bSibling = bParents[idx];
      if (siblings.indexOf(aSibling) > siblings.indexOf(bSibling)) {
        if (sharedParent === nodeB) {
          return 4 | 16;
        }
        return 4;
      }
      if (sharedParent === nodeA) {
        return 2 | 8;
      }
      return 2;
    }
    exports.compareDocumentPosition = compareDocumentPosition;
    function uniqueSort(nodes) {
      nodes = nodes.filter(function(node, i, arr) {
        return !arr.includes(node, i + 1);
      });
      nodes.sort(function(a, b) {
        var relative = compareDocumentPosition(a, b);
        if (relative & 2) {
          return -1;
        } else if (relative & 4) {
          return 1;
        }
        return 0;
      });
      return nodes;
    }
    exports.uniqueSort = uniqueSort;
  }
});

// node_modules/css-select/node_modules/domutils/lib/index.js
var require_lib8 = __commonJS({
  "node_modules/css-select/node_modules/domutils/lib/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.hasChildren = exports.isDocument = exports.isComment = exports.isText = exports.isCDATA = exports.isTag = void 0;
    __exportStar(require_stringify2(), exports);
    __exportStar(require_traversal2(), exports);
    __exportStar(require_manipulation2(), exports);
    __exportStar(require_querying2(), exports);
    __exportStar(require_legacy3(), exports);
    __exportStar(require_helpers2(), exports);
    var domhandler_1 = require_lib2();
    Object.defineProperty(exports, "isTag", { enumerable: true, get: function() {
      return domhandler_1.isTag;
    } });
    Object.defineProperty(exports, "isCDATA", { enumerable: true, get: function() {
      return domhandler_1.isCDATA;
    } });
    Object.defineProperty(exports, "isText", { enumerable: true, get: function() {
      return domhandler_1.isText;
    } });
    Object.defineProperty(exports, "isComment", { enumerable: true, get: function() {
      return domhandler_1.isComment;
    } });
    Object.defineProperty(exports, "isDocument", { enumerable: true, get: function() {
      return domhandler_1.isDocument;
    } });
    Object.defineProperty(exports, "hasChildren", { enumerable: true, get: function() {
      return domhandler_1.hasChildren;
    } });
  }
});

// node_modules/boolbase/index.js
var require_boolbase = __commonJS({
  "node_modules/boolbase/index.js"(exports, module2) {
    module2.exports = {
      trueFunc: function trueFunc() {
        return true;
      },
      falseFunc: function falseFunc() {
        return false;
      }
    };
  }
});

// node_modules/css-what/lib/parse.js
var require_parse = __commonJS({
  "node_modules/css-what/lib/parse.js"(exports) {
    "use strict";
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isTraversal = void 0;
    var reName = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/;
    var reEscape = /\\([\da-f]{1,6}\s?|(\s)|.)/gi;
    var actionTypes = new Map([
      ["~", "element"],
      ["^", "start"],
      ["$", "end"],
      ["*", "any"],
      ["!", "not"],
      ["|", "hyphen"]
    ]);
    var Traversals = {
      ">": "child",
      "<": "parent",
      "~": "sibling",
      "+": "adjacent"
    };
    var attribSelectors = {
      "#": ["id", "equals"],
      ".": ["class", "element"]
    };
    var unpackPseudos = new Set([
      "has",
      "not",
      "matches",
      "is",
      "host",
      "host-context"
    ]);
    var traversalNames = new Set(__spreadArray([
      "descendant"
    ], Object.keys(Traversals).map(function(k) {
      return Traversals[k];
    })));
    var caseInsensitiveAttributes = new Set([
      "accept",
      "accept-charset",
      "align",
      "alink",
      "axis",
      "bgcolor",
      "charset",
      "checked",
      "clear",
      "codetype",
      "color",
      "compact",
      "declare",
      "defer",
      "dir",
      "direction",
      "disabled",
      "enctype",
      "face",
      "frame",
      "hreflang",
      "http-equiv",
      "lang",
      "language",
      "link",
      "media",
      "method",
      "multiple",
      "nohref",
      "noresize",
      "noshade",
      "nowrap",
      "readonly",
      "rel",
      "rev",
      "rules",
      "scope",
      "scrolling",
      "selected",
      "shape",
      "target",
      "text",
      "type",
      "valign",
      "valuetype",
      "vlink"
    ]);
    function isTraversal(selector) {
      return traversalNames.has(selector.type);
    }
    exports.isTraversal = isTraversal;
    var stripQuotesFromPseudos = new Set(["contains", "icontains"]);
    var quotes = new Set(['"', "'"]);
    function funescape(_, escaped, escapedWhitespace) {
      var high = parseInt(escaped, 16) - 65536;
      return high !== high || escapedWhitespace ? escaped : high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
    }
    function unescapeCSS(str) {
      return str.replace(reEscape, funescape);
    }
    function isWhitespace(c) {
      return c === " " || c === "\n" || c === "	" || c === "\f" || c === "\r";
    }
    function parse3(selector, options) {
      var subselects = [];
      var endIndex = parseSelector(subselects, "" + selector, options, 0);
      if (endIndex < selector.length) {
        throw new Error("Unmatched selector: " + selector.slice(endIndex));
      }
      return subselects;
    }
    exports.default = parse3;
    function parseSelector(subselects, selector, options, selectorIndex) {
      var _a, _b;
      if (options === void 0) {
        options = {};
      }
      var tokens = [];
      var sawWS = false;
      function getName2(offset) {
        var match = selector.slice(selectorIndex + offset).match(reName);
        if (!match) {
          throw new Error("Expected name, found " + selector.slice(selectorIndex));
        }
        var name = match[0];
        selectorIndex += offset + name.length;
        return unescapeCSS(name);
      }
      function stripWhitespace(offset) {
        while (isWhitespace(selector.charAt(selectorIndex + offset)))
          offset++;
        selectorIndex += offset;
      }
      function isEscaped(pos) {
        var slashCount = 0;
        while (selector.charAt(--pos) === "\\")
          slashCount++;
        return (slashCount & 1) === 1;
      }
      function ensureNotTraversal() {
        if (tokens.length > 0 && isTraversal(tokens[tokens.length - 1])) {
          throw new Error("Did not expect successive traversals.");
        }
      }
      stripWhitespace(0);
      while (selector !== "") {
        var firstChar = selector.charAt(selectorIndex);
        if (isWhitespace(firstChar)) {
          sawWS = true;
          stripWhitespace(1);
        } else if (firstChar in Traversals) {
          ensureNotTraversal();
          tokens.push({ type: Traversals[firstChar] });
          sawWS = false;
          stripWhitespace(1);
        } else if (firstChar === ",") {
          if (tokens.length === 0) {
            throw new Error("Empty sub-selector");
          }
          subselects.push(tokens);
          tokens = [];
          sawWS = false;
          stripWhitespace(1);
        } else if (selector.startsWith("/*", selectorIndex)) {
          var endIndex = selector.indexOf("*/", selectorIndex + 2);
          if (endIndex < 0) {
            throw new Error("Comment was not terminated");
          }
          selectorIndex = endIndex + 2;
        } else {
          if (sawWS) {
            ensureNotTraversal();
            tokens.push({ type: "descendant" });
            sawWS = false;
          }
          if (firstChar in attribSelectors) {
            var _c = attribSelectors[firstChar], name_1 = _c[0], action = _c[1];
            tokens.push({
              type: "attribute",
              name: name_1,
              action,
              value: getName2(1),
              namespace: null,
              ignoreCase: options.xmlMode ? null : false
            });
          } else if (firstChar === "[") {
            stripWhitespace(1);
            var name_2 = void 0;
            var namespace = null;
            if (selector.charAt(selectorIndex) === "|") {
              namespace = "";
              selectorIndex += 1;
            }
            if (selector.startsWith("*|", selectorIndex)) {
              namespace = "*";
              selectorIndex += 2;
            }
            name_2 = getName2(0);
            if (namespace === null && selector.charAt(selectorIndex) === "|" && selector.charAt(selectorIndex + 1) !== "=") {
              namespace = name_2;
              name_2 = getName2(1);
            }
            if ((_a = options.lowerCaseAttributeNames) !== null && _a !== void 0 ? _a : !options.xmlMode) {
              name_2 = name_2.toLowerCase();
            }
            stripWhitespace(0);
            var action = "exists";
            var possibleAction = actionTypes.get(selector.charAt(selectorIndex));
            if (possibleAction) {
              action = possibleAction;
              if (selector.charAt(selectorIndex + 1) !== "=") {
                throw new Error("Expected `=`");
              }
              stripWhitespace(2);
            } else if (selector.charAt(selectorIndex) === "=") {
              action = "equals";
              stripWhitespace(1);
            }
            var value = "";
            var ignoreCase2 = null;
            if (action !== "exists") {
              if (quotes.has(selector.charAt(selectorIndex))) {
                var quote = selector.charAt(selectorIndex);
                var sectionEnd = selectorIndex + 1;
                while (sectionEnd < selector.length && (selector.charAt(sectionEnd) !== quote || isEscaped(sectionEnd))) {
                  sectionEnd += 1;
                }
                if (selector.charAt(sectionEnd) !== quote) {
                  throw new Error("Attribute value didn't end");
                }
                value = unescapeCSS(selector.slice(selectorIndex + 1, sectionEnd));
                selectorIndex = sectionEnd + 1;
              } else {
                var valueStart = selectorIndex;
                while (selectorIndex < selector.length && (!isWhitespace(selector.charAt(selectorIndex)) && selector.charAt(selectorIndex) !== "]" || isEscaped(selectorIndex))) {
                  selectorIndex += 1;
                }
                value = unescapeCSS(selector.slice(valueStart, selectorIndex));
              }
              stripWhitespace(0);
              var forceIgnore = selector.charAt(selectorIndex);
              if (forceIgnore === "s" || forceIgnore === "S") {
                ignoreCase2 = false;
                stripWhitespace(1);
              } else if (forceIgnore === "i" || forceIgnore === "I") {
                ignoreCase2 = true;
                stripWhitespace(1);
              }
            }
            if (!options.xmlMode) {
              ignoreCase2 !== null && ignoreCase2 !== void 0 ? ignoreCase2 : ignoreCase2 = caseInsensitiveAttributes.has(name_2);
            }
            if (selector.charAt(selectorIndex) !== "]") {
              throw new Error("Attribute selector didn't terminate");
            }
            selectorIndex += 1;
            var attributeSelector = {
              type: "attribute",
              name: name_2,
              action,
              value,
              namespace,
              ignoreCase: ignoreCase2
            };
            tokens.push(attributeSelector);
          } else if (firstChar === ":") {
            if (selector.charAt(selectorIndex + 1) === ":") {
              tokens.push({
                type: "pseudo-element",
                name: getName2(2).toLowerCase()
              });
              continue;
            }
            var name_3 = getName2(1).toLowerCase();
            var data = null;
            if (selector.charAt(selectorIndex) === "(") {
              if (unpackPseudos.has(name_3)) {
                if (quotes.has(selector.charAt(selectorIndex + 1))) {
                  throw new Error("Pseudo-selector " + name_3 + " cannot be quoted");
                }
                data = [];
                selectorIndex = parseSelector(data, selector, options, selectorIndex + 1);
                if (selector.charAt(selectorIndex) !== ")") {
                  throw new Error("Missing closing parenthesis in :" + name_3 + " (" + selector + ")");
                }
                selectorIndex += 1;
              } else {
                selectorIndex += 1;
                var start = selectorIndex;
                var counter = 1;
                for (; counter > 0 && selectorIndex < selector.length; selectorIndex++) {
                  if (selector.charAt(selectorIndex) === "(" && !isEscaped(selectorIndex)) {
                    counter++;
                  } else if (selector.charAt(selectorIndex) === ")" && !isEscaped(selectorIndex)) {
                    counter--;
                  }
                }
                if (counter) {
                  throw new Error("Parenthesis not matched");
                }
                data = selector.slice(start, selectorIndex - 1);
                if (stripQuotesFromPseudos.has(name_3)) {
                  var quot = data.charAt(0);
                  if (quot === data.slice(-1) && quotes.has(quot)) {
                    data = data.slice(1, -1);
                  }
                  data = unescapeCSS(data);
                }
              }
            }
            tokens.push({ type: "pseudo", name: name_3, data });
          } else {
            var namespace = null;
            var name_4 = void 0;
            if (firstChar === "*") {
              selectorIndex += 1;
              name_4 = "*";
            } else if (reName.test(selector.slice(selectorIndex))) {
              if (selector.charAt(selectorIndex) === "|") {
                namespace = "";
                selectorIndex += 1;
              }
              name_4 = getName2(0);
            } else {
              if (tokens.length && tokens[tokens.length - 1].type === "descendant") {
                tokens.pop();
              }
              addToken(subselects, tokens);
              return selectorIndex;
            }
            if (selector.charAt(selectorIndex) === "|") {
              namespace = name_4;
              if (selector.charAt(selectorIndex + 1) === "*") {
                name_4 = "*";
                selectorIndex += 2;
              } else {
                name_4 = getName2(1);
              }
            }
            if (name_4 === "*") {
              tokens.push({ type: "universal", namespace });
            } else {
              if ((_b = options.lowerCaseTags) !== null && _b !== void 0 ? _b : !options.xmlMode) {
                name_4 = name_4.toLowerCase();
              }
              tokens.push({ type: "tag", name: name_4, namespace });
            }
          }
        }
      }
      addToken(subselects, tokens);
      return selectorIndex;
    }
    function addToken(subselects, tokens) {
      if (subselects.length > 0 && tokens.length === 0) {
        throw new Error("Empty sub-selector");
      }
      subselects.push(tokens);
    }
  }
});

// node_modules/css-what/lib/stringify.js
var require_stringify3 = __commonJS({
  "node_modules/css-what/lib/stringify.js"(exports) {
    "use strict";
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var actionTypes = {
      equals: "",
      element: "~",
      start: "^",
      end: "$",
      any: "*",
      not: "!",
      hyphen: "|"
    };
    var charsToEscape = new Set(__spreadArray(__spreadArray([], Object.keys(actionTypes).map(function(typeKey) {
      return actionTypes[typeKey];
    }).filter(Boolean)), [
      ":",
      "[",
      "]",
      " ",
      "\\",
      "(",
      ")",
      "'"
    ]));
    function stringify(selector) {
      return selector.map(stringifySubselector).join(", ");
    }
    exports.default = stringify;
    function stringifySubselector(token) {
      return token.map(stringifyToken).join("");
    }
    function stringifyToken(token) {
      switch (token.type) {
        case "child":
          return " > ";
        case "parent":
          return " < ";
        case "sibling":
          return " ~ ";
        case "adjacent":
          return " + ";
        case "descendant":
          return " ";
        case "universal":
          return getNamespace(token.namespace) + "*";
        case "tag":
          return getNamespacedName(token);
        case "pseudo-element":
          return "::" + escapeName(token.name);
        case "pseudo":
          if (token.data === null)
            return ":" + escapeName(token.name);
          if (typeof token.data === "string") {
            return ":" + escapeName(token.name) + "(" + escapeName(token.data) + ")";
          }
          return ":" + escapeName(token.name) + "(" + stringify(token.data) + ")";
        case "attribute": {
          if (token.name === "id" && token.action === "equals" && !token.ignoreCase && !token.namespace) {
            return "#" + escapeName(token.value);
          }
          if (token.name === "class" && token.action === "element" && !token.ignoreCase && !token.namespace) {
            return "." + escapeName(token.value);
          }
          var name_1 = getNamespacedName(token);
          if (token.action === "exists") {
            return "[" + name_1 + "]";
          }
          return "[" + name_1 + actionTypes[token.action] + "='" + escapeName(token.value) + "'" + (token.ignoreCase ? "i" : token.ignoreCase === false ? "s" : "") + "]";
        }
      }
    }
    function getNamespacedName(token) {
      return "" + getNamespace(token.namespace) + escapeName(token.name);
    }
    function getNamespace(namespace) {
      return namespace !== null ? (namespace === "*" ? "*" : escapeName(namespace)) + "|" : "";
    }
    function escapeName(str) {
      return str.split("").map(function(c) {
        return charsToEscape.has(c) ? "\\" + c : c;
      }).join("");
    }
  }
});

// node_modules/css-what/lib/index.js
var require_lib9 = __commonJS({
  "node_modules/css-what/lib/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.stringify = exports.parse = void 0;
    __exportStar(require_parse(), exports);
    var parse_1 = require_parse();
    Object.defineProperty(exports, "parse", { enumerable: true, get: function() {
      return __importDefault(parse_1).default;
    } });
    var stringify_1 = require_stringify3();
    Object.defineProperty(exports, "stringify", { enumerable: true, get: function() {
      return __importDefault(stringify_1).default;
    } });
  }
});

// node_modules/css-select/lib/procedure.js
var require_procedure = __commonJS({
  "node_modules/css-select/lib/procedure.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isTraversal = exports.procedure = void 0;
    exports.procedure = {
      universal: 50,
      tag: 30,
      attribute: 1,
      pseudo: 0,
      "pseudo-element": 0,
      descendant: -1,
      child: -1,
      parent: -1,
      sibling: -1,
      adjacent: -1,
      _flexibleDescendant: -1
    };
    function isTraversal(t) {
      return exports.procedure[t.type] < 0;
    }
    exports.isTraversal = isTraversal;
  }
});

// node_modules/css-select/lib/sort.js
var require_sort = __commonJS({
  "node_modules/css-select/lib/sort.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var procedure_1 = require_procedure();
    var attributes = {
      exists: 10,
      equals: 8,
      not: 7,
      start: 6,
      end: 6,
      any: 5,
      hyphen: 4,
      element: 4
    };
    function sortByProcedure(arr) {
      var procs = arr.map(getProcedure);
      for (var i = 1; i < arr.length; i++) {
        var procNew = procs[i];
        if (procNew < 0)
          continue;
        for (var j = i - 1; j >= 0 && procNew < procs[j]; j--) {
          var token = arr[j + 1];
          arr[j + 1] = arr[j];
          arr[j] = token;
          procs[j + 1] = procs[j];
          procs[j] = procNew;
        }
      }
    }
    exports.default = sortByProcedure;
    function getProcedure(token) {
      var proc = procedure_1.procedure[token.type];
      if (token.type === "attribute") {
        proc = attributes[token.action];
        if (proc === attributes.equals && token.name === "id") {
          proc = 9;
        }
        if (token.ignoreCase) {
          proc >>= 1;
        }
      } else if (token.type === "pseudo") {
        if (!token.data) {
          proc = 3;
        } else if (token.name === "has" || token.name === "contains") {
          proc = 0;
        } else if (Array.isArray(token.data)) {
          proc = 0;
          for (var i = 0; i < token.data.length; i++) {
            if (token.data[i].length !== 1)
              continue;
            var cur = getProcedure(token.data[i][0]);
            if (cur === 0) {
              proc = 0;
              break;
            }
            if (cur > proc)
              proc = cur;
          }
          if (token.data.length > 1 && proc > 0)
            proc -= 1;
        } else {
          proc = 1;
        }
      }
      return proc;
    }
  }
});

// node_modules/css-select/lib/attributes.js
var require_attributes = __commonJS({
  "node_modules/css-select/lib/attributes.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.attributeRules = void 0;
    var boolbase_1 = require_boolbase();
    var reChars = /[-[\]{}()*+?.,\\^$|#\s]/g;
    function escapeRegex(value) {
      return value.replace(reChars, "\\$&");
    }
    exports.attributeRules = {
      equals: function(next, data, _a) {
        var adapter2 = _a.adapter;
        var name = data.name;
        var value = data.value;
        if (data.ignoreCase) {
          value = value.toLowerCase();
          return function(elem) {
            var attr = adapter2.getAttributeValue(elem, name);
            return attr != null && attr.length === value.length && attr.toLowerCase() === value && next(elem);
          };
        }
        return function(elem) {
          return adapter2.getAttributeValue(elem, name) === value && next(elem);
        };
      },
      hyphen: function(next, data, _a) {
        var adapter2 = _a.adapter;
        var name = data.name;
        var value = data.value;
        var len = value.length;
        if (data.ignoreCase) {
          value = value.toLowerCase();
          return function hyphenIC(elem) {
            var attr = adapter2.getAttributeValue(elem, name);
            return attr != null && (attr.length === len || attr.charAt(len) === "-") && attr.substr(0, len).toLowerCase() === value && next(elem);
          };
        }
        return function hyphen(elem) {
          var attr = adapter2.getAttributeValue(elem, name);
          return attr != null && (attr.length === len || attr.charAt(len) === "-") && attr.substr(0, len) === value && next(elem);
        };
      },
      element: function(next, _a, _b) {
        var name = _a.name, value = _a.value, ignoreCase2 = _a.ignoreCase;
        var adapter2 = _b.adapter;
        if (/\s/.test(value)) {
          return boolbase_1.falseFunc;
        }
        var regex = new RegExp("(?:^|\\s)" + escapeRegex(value) + "(?:$|\\s)", ignoreCase2 ? "i" : "");
        return function element(elem) {
          var attr = adapter2.getAttributeValue(elem, name);
          return attr != null && attr.length >= value.length && regex.test(attr) && next(elem);
        };
      },
      exists: function(next, _a, _b) {
        var name = _a.name;
        var adapter2 = _b.adapter;
        return function(elem) {
          return adapter2.hasAttrib(elem, name) && next(elem);
        };
      },
      start: function(next, data, _a) {
        var adapter2 = _a.adapter;
        var name = data.name;
        var value = data.value;
        var len = value.length;
        if (len === 0) {
          return boolbase_1.falseFunc;
        }
        if (data.ignoreCase) {
          value = value.toLowerCase();
          return function(elem) {
            var attr = adapter2.getAttributeValue(elem, name);
            return attr != null && attr.length >= len && attr.substr(0, len).toLowerCase() === value && next(elem);
          };
        }
        return function(elem) {
          var _a2;
          return !!((_a2 = adapter2.getAttributeValue(elem, name)) === null || _a2 === void 0 ? void 0 : _a2.startsWith(value)) && next(elem);
        };
      },
      end: function(next, data, _a) {
        var adapter2 = _a.adapter;
        var name = data.name;
        var value = data.value;
        var len = -value.length;
        if (len === 0) {
          return boolbase_1.falseFunc;
        }
        if (data.ignoreCase) {
          value = value.toLowerCase();
          return function(elem) {
            var _a2;
            return ((_a2 = adapter2.getAttributeValue(elem, name)) === null || _a2 === void 0 ? void 0 : _a2.substr(len).toLowerCase()) === value && next(elem);
          };
        }
        return function(elem) {
          var _a2;
          return !!((_a2 = adapter2.getAttributeValue(elem, name)) === null || _a2 === void 0 ? void 0 : _a2.endsWith(value)) && next(elem);
        };
      },
      any: function(next, data, _a) {
        var adapter2 = _a.adapter;
        var name = data.name, value = data.value;
        if (value === "") {
          return boolbase_1.falseFunc;
        }
        if (data.ignoreCase) {
          var regex_1 = new RegExp(escapeRegex(value), "i");
          return function anyIC(elem) {
            var attr = adapter2.getAttributeValue(elem, name);
            return attr != null && attr.length >= value.length && regex_1.test(attr) && next(elem);
          };
        }
        return function(elem) {
          var _a2;
          return !!((_a2 = adapter2.getAttributeValue(elem, name)) === null || _a2 === void 0 ? void 0 : _a2.includes(value)) && next(elem);
        };
      },
      not: function(next, data, _a) {
        var adapter2 = _a.adapter;
        var name = data.name;
        var value = data.value;
        if (value === "") {
          return function(elem) {
            return !!adapter2.getAttributeValue(elem, name) && next(elem);
          };
        } else if (data.ignoreCase) {
          value = value.toLowerCase();
          return function(elem) {
            var attr = adapter2.getAttributeValue(elem, name);
            return (attr == null || attr.length !== value.length || attr.toLowerCase() !== value) && next(elem);
          };
        }
        return function(elem) {
          return adapter2.getAttributeValue(elem, name) !== value && next(elem);
        };
      }
    };
  }
});

// node_modules/nth-check/lib/parse.js
var require_parse2 = __commonJS({
  "node_modules/nth-check/lib/parse.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parse = void 0;
    var RE_NTH_ELEMENT = /^([+-]?\d*n)?\s*(?:([+-]?)\s*(\d+))?$/;
    function parse3(formula) {
      formula = formula.trim().toLowerCase();
      if (formula === "even") {
        return [2, 0];
      } else if (formula === "odd") {
        return [2, 1];
      }
      var parsed = formula.match(RE_NTH_ELEMENT);
      if (!parsed) {
        throw new Error("n-th rule couldn't be parsed ('" + formula + "')");
      }
      var a;
      if (parsed[1]) {
        a = parseInt(parsed[1], 10);
        if (isNaN(a)) {
          a = parsed[1].startsWith("-") ? -1 : 1;
        }
      } else
        a = 0;
      var b = (parsed[2] === "-" ? -1 : 1) * (parsed[3] ? parseInt(parsed[3], 10) : 0);
      return [a, b];
    }
    exports.parse = parse3;
  }
});

// node_modules/nth-check/lib/compile.js
var require_compile = __commonJS({
  "node_modules/nth-check/lib/compile.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.compile = void 0;
    var boolbase_1 = require_boolbase();
    function compile2(parsed) {
      var a = parsed[0];
      var b = parsed[1] - 1;
      if (b < 0 && a <= 0)
        return boolbase_1.falseFunc;
      if (a === -1)
        return function(index) {
          return index <= b;
        };
      if (a === 0)
        return function(index) {
          return index === b;
        };
      if (a === 1)
        return b < 0 ? boolbase_1.trueFunc : function(index) {
          return index >= b;
        };
      var absA = Math.abs(a);
      var bMod = (b % absA + absA) % absA;
      return a > 1 ? function(index) {
        return index >= b && index % absA === bMod;
      } : function(index) {
        return index <= b && index % absA === bMod;
      };
    }
    exports.compile = compile2;
  }
});

// node_modules/nth-check/lib/index.js
var require_lib10 = __commonJS({
  "node_modules/nth-check/lib/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.compile = exports.parse = void 0;
    var parse_1 = require_parse2();
    Object.defineProperty(exports, "parse", { enumerable: true, get: function() {
      return parse_1.parse;
    } });
    var compile_1 = require_compile();
    Object.defineProperty(exports, "compile", { enumerable: true, get: function() {
      return compile_1.compile;
    } });
    function nthCheck(formula) {
      return compile_1.compile(parse_1.parse(formula));
    }
    exports.default = nthCheck;
  }
});

// node_modules/css-select/lib/pseudo-selectors/filters.js
var require_filters = __commonJS({
  "node_modules/css-select/lib/pseudo-selectors/filters.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.filters = void 0;
    var nth_check_1 = __importDefault(require_lib10());
    var boolbase_1 = require_boolbase();
    function getChildFunc(next, adapter2) {
      return function(elem) {
        var parent = adapter2.getParent(elem);
        return parent != null && adapter2.isTag(parent) && next(elem);
      };
    }
    exports.filters = {
      contains: function(next, text, _a) {
        var adapter2 = _a.adapter;
        return function contains(elem) {
          return next(elem) && adapter2.getText(elem).includes(text);
        };
      },
      icontains: function(next, text, _a) {
        var adapter2 = _a.adapter;
        var itext = text.toLowerCase();
        return function icontains(elem) {
          return next(elem) && adapter2.getText(elem).toLowerCase().includes(itext);
        };
      },
      "nth-child": function(next, rule, _a) {
        var adapter2 = _a.adapter, equals = _a.equals;
        var func = nth_check_1.default(rule);
        if (func === boolbase_1.falseFunc)
          return boolbase_1.falseFunc;
        if (func === boolbase_1.trueFunc)
          return getChildFunc(next, adapter2);
        return function nthChild(elem) {
          var siblings = adapter2.getSiblings(elem);
          var pos = 0;
          for (var i = 0; i < siblings.length; i++) {
            if (equals(elem, siblings[i]))
              break;
            if (adapter2.isTag(siblings[i])) {
              pos++;
            }
          }
          return func(pos) && next(elem);
        };
      },
      "nth-last-child": function(next, rule, _a) {
        var adapter2 = _a.adapter, equals = _a.equals;
        var func = nth_check_1.default(rule);
        if (func === boolbase_1.falseFunc)
          return boolbase_1.falseFunc;
        if (func === boolbase_1.trueFunc)
          return getChildFunc(next, adapter2);
        return function nthLastChild(elem) {
          var siblings = adapter2.getSiblings(elem);
          var pos = 0;
          for (var i = siblings.length - 1; i >= 0; i--) {
            if (equals(elem, siblings[i]))
              break;
            if (adapter2.isTag(siblings[i])) {
              pos++;
            }
          }
          return func(pos) && next(elem);
        };
      },
      "nth-of-type": function(next, rule, _a) {
        var adapter2 = _a.adapter, equals = _a.equals;
        var func = nth_check_1.default(rule);
        if (func === boolbase_1.falseFunc)
          return boolbase_1.falseFunc;
        if (func === boolbase_1.trueFunc)
          return getChildFunc(next, adapter2);
        return function nthOfType(elem) {
          var siblings = adapter2.getSiblings(elem);
          var pos = 0;
          for (var i = 0; i < siblings.length; i++) {
            var currentSibling = siblings[i];
            if (equals(elem, currentSibling))
              break;
            if (adapter2.isTag(currentSibling) && adapter2.getName(currentSibling) === adapter2.getName(elem)) {
              pos++;
            }
          }
          return func(pos) && next(elem);
        };
      },
      "nth-last-of-type": function(next, rule, _a) {
        var adapter2 = _a.adapter, equals = _a.equals;
        var func = nth_check_1.default(rule);
        if (func === boolbase_1.falseFunc)
          return boolbase_1.falseFunc;
        if (func === boolbase_1.trueFunc)
          return getChildFunc(next, adapter2);
        return function nthLastOfType(elem) {
          var siblings = adapter2.getSiblings(elem);
          var pos = 0;
          for (var i = siblings.length - 1; i >= 0; i--) {
            var currentSibling = siblings[i];
            if (equals(elem, currentSibling))
              break;
            if (adapter2.isTag(currentSibling) && adapter2.getName(currentSibling) === adapter2.getName(elem)) {
              pos++;
            }
          }
          return func(pos) && next(elem);
        };
      },
      root: function(next, _rule, _a) {
        var adapter2 = _a.adapter;
        return function(elem) {
          var parent = adapter2.getParent(elem);
          return (parent == null || !adapter2.isTag(parent)) && next(elem);
        };
      },
      scope: function(next, rule, options, context) {
        var equals = options.equals;
        if (!context || context.length === 0) {
          return exports.filters.root(next, rule, options);
        }
        if (context.length === 1) {
          return function(elem) {
            return equals(context[0], elem) && next(elem);
          };
        }
        return function(elem) {
          return context.includes(elem) && next(elem);
        };
      },
      hover: dynamicStatePseudo("isHovered"),
      visited: dynamicStatePseudo("isVisited"),
      active: dynamicStatePseudo("isActive")
    };
    function dynamicStatePseudo(name) {
      return function dynamicPseudo(next, _rule, _a) {
        var adapter2 = _a.adapter;
        var func = adapter2[name];
        if (typeof func !== "function") {
          return boolbase_1.falseFunc;
        }
        return function active(elem) {
          return func(elem) && next(elem);
        };
      };
    }
  }
});

// node_modules/css-select/lib/pseudo-selectors/pseudos.js
var require_pseudos = __commonJS({
  "node_modules/css-select/lib/pseudo-selectors/pseudos.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.verifyPseudoArgs = exports.pseudos = void 0;
    exports.pseudos = {
      empty: function(elem, _a) {
        var adapter2 = _a.adapter;
        return !adapter2.getChildren(elem).some(function(elem2) {
          return adapter2.isTag(elem2) || adapter2.getText(elem2) !== "";
        });
      },
      "first-child": function(elem, _a) {
        var adapter2 = _a.adapter, equals = _a.equals;
        var firstChild = adapter2.getSiblings(elem).find(function(elem2) {
          return adapter2.isTag(elem2);
        });
        return firstChild != null && equals(elem, firstChild);
      },
      "last-child": function(elem, _a) {
        var adapter2 = _a.adapter, equals = _a.equals;
        var siblings = adapter2.getSiblings(elem);
        for (var i = siblings.length - 1; i >= 0; i--) {
          if (equals(elem, siblings[i]))
            return true;
          if (adapter2.isTag(siblings[i]))
            break;
        }
        return false;
      },
      "first-of-type": function(elem, _a) {
        var adapter2 = _a.adapter, equals = _a.equals;
        var siblings = adapter2.getSiblings(elem);
        var elemName = adapter2.getName(elem);
        for (var i = 0; i < siblings.length; i++) {
          var currentSibling = siblings[i];
          if (equals(elem, currentSibling))
            return true;
          if (adapter2.isTag(currentSibling) && adapter2.getName(currentSibling) === elemName) {
            break;
          }
        }
        return false;
      },
      "last-of-type": function(elem, _a) {
        var adapter2 = _a.adapter, equals = _a.equals;
        var siblings = adapter2.getSiblings(elem);
        var elemName = adapter2.getName(elem);
        for (var i = siblings.length - 1; i >= 0; i--) {
          var currentSibling = siblings[i];
          if (equals(elem, currentSibling))
            return true;
          if (adapter2.isTag(currentSibling) && adapter2.getName(currentSibling) === elemName) {
            break;
          }
        }
        return false;
      },
      "only-of-type": function(elem, _a) {
        var adapter2 = _a.adapter, equals = _a.equals;
        var elemName = adapter2.getName(elem);
        return adapter2.getSiblings(elem).every(function(sibling) {
          return equals(elem, sibling) || !adapter2.isTag(sibling) || adapter2.getName(sibling) !== elemName;
        });
      },
      "only-child": function(elem, _a) {
        var adapter2 = _a.adapter, equals = _a.equals;
        return adapter2.getSiblings(elem).every(function(sibling) {
          return equals(elem, sibling) || !adapter2.isTag(sibling);
        });
      }
    };
    function verifyPseudoArgs(func, name, subselect) {
      if (subselect === null) {
        if (func.length > 2) {
          throw new Error("pseudo-selector :" + name + " requires an argument");
        }
      } else if (func.length === 2) {
        throw new Error("pseudo-selector :" + name + " doesn't have any arguments");
      }
    }
    exports.verifyPseudoArgs = verifyPseudoArgs;
  }
});

// node_modules/css-select/lib/pseudo-selectors/aliases.js
var require_aliases = __commonJS({
  "node_modules/css-select/lib/pseudo-selectors/aliases.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.aliases = void 0;
    exports.aliases = {
      "any-link": ":is(a, area, link)[href]",
      link: ":any-link:not(:visited)",
      disabled: ":is(\n        :is(button, input, select, textarea, optgroup, option)[disabled],\n        optgroup[disabled] > option,\n        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)\n    )",
      enabled: ":not(:disabled)",
      checked: ":is(:is(input[type=radio], input[type=checkbox])[checked], option:selected)",
      required: ":is(input, select, textarea)[required]",
      optional: ":is(input, select, textarea):not([required])",
      selected: "option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)",
      checkbox: "[type=checkbox]",
      file: "[type=file]",
      password: "[type=password]",
      radio: "[type=radio]",
      reset: "[type=reset]",
      image: "[type=image]",
      submit: "[type=submit]",
      parent: ":not(:empty)",
      header: ":is(h1, h2, h3, h4, h5, h6)",
      button: ":is(button, input[type=button])",
      input: ":is(input, textarea, select, button)",
      text: "input:is(:not([type!='']), [type=text])"
    };
  }
});

// node_modules/css-select/lib/pseudo-selectors/subselects.js
var require_subselects = __commonJS({
  "node_modules/css-select/lib/pseudo-selectors/subselects.js"(exports) {
    "use strict";
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.subselects = exports.getNextSiblings = exports.ensureIsTag = exports.PLACEHOLDER_ELEMENT = void 0;
    var boolbase_1 = require_boolbase();
    var procedure_1 = require_procedure();
    exports.PLACEHOLDER_ELEMENT = {};
    function ensureIsTag(next, adapter2) {
      if (next === boolbase_1.falseFunc)
        return boolbase_1.falseFunc;
      return function(elem) {
        return adapter2.isTag(elem) && next(elem);
      };
    }
    exports.ensureIsTag = ensureIsTag;
    function getNextSiblings(elem, adapter2) {
      var siblings = adapter2.getSiblings(elem);
      if (siblings.length <= 1)
        return [];
      var elemIndex = siblings.indexOf(elem);
      if (elemIndex < 0 || elemIndex === siblings.length - 1)
        return [];
      return siblings.slice(elemIndex + 1).filter(adapter2.isTag);
    }
    exports.getNextSiblings = getNextSiblings;
    var is2 = function(next, token, options, context, compileToken) {
      var opts = {
        xmlMode: !!options.xmlMode,
        adapter: options.adapter,
        equals: options.equals
      };
      var func = compileToken(token, opts, context);
      return function(elem) {
        return func(elem) && next(elem);
      };
    };
    exports.subselects = {
      is: is2,
      matches: is2,
      not: function(next, token, options, context, compileToken) {
        var opts = {
          xmlMode: !!options.xmlMode,
          adapter: options.adapter,
          equals: options.equals
        };
        var func = compileToken(token, opts, context);
        if (func === boolbase_1.falseFunc)
          return next;
        if (func === boolbase_1.trueFunc)
          return boolbase_1.falseFunc;
        return function not(elem) {
          return !func(elem) && next(elem);
        };
      },
      has: function(next, subselect, options, _context, compileToken) {
        var adapter2 = options.adapter;
        var opts = {
          xmlMode: !!options.xmlMode,
          adapter: adapter2,
          equals: options.equals
        };
        var context = subselect.some(function(s) {
          return s.some(procedure_1.isTraversal);
        }) ? [exports.PLACEHOLDER_ELEMENT] : void 0;
        var compiled = compileToken(subselect, opts, context);
        if (compiled === boolbase_1.falseFunc)
          return boolbase_1.falseFunc;
        if (compiled === boolbase_1.trueFunc) {
          return function(elem) {
            return adapter2.getChildren(elem).some(adapter2.isTag) && next(elem);
          };
        }
        var hasElement = ensureIsTag(compiled, adapter2);
        var _a = compiled.shouldTestNextSiblings, shouldTestNextSiblings = _a === void 0 ? false : _a;
        if (context) {
          return function(elem) {
            context[0] = elem;
            var childs = adapter2.getChildren(elem);
            var nextElements = shouldTestNextSiblings ? __spreadArray(__spreadArray([], childs), getNextSiblings(elem, adapter2)) : childs;
            return next(elem) && adapter2.existsOne(hasElement, nextElements);
          };
        }
        return function(elem) {
          return next(elem) && adapter2.existsOne(hasElement, adapter2.getChildren(elem));
        };
      }
    };
  }
});

// node_modules/css-select/lib/pseudo-selectors/index.js
var require_pseudo_selectors = __commonJS({
  "node_modules/css-select/lib/pseudo-selectors/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.compilePseudoSelector = exports.aliases = exports.pseudos = exports.filters = void 0;
    var boolbase_1 = require_boolbase();
    var css_what_1 = require_lib9();
    var filters_1 = require_filters();
    Object.defineProperty(exports, "filters", { enumerable: true, get: function() {
      return filters_1.filters;
    } });
    var pseudos_1 = require_pseudos();
    Object.defineProperty(exports, "pseudos", { enumerable: true, get: function() {
      return pseudos_1.pseudos;
    } });
    var aliases_1 = require_aliases();
    Object.defineProperty(exports, "aliases", { enumerable: true, get: function() {
      return aliases_1.aliases;
    } });
    var subselects_1 = require_subselects();
    function compilePseudoSelector(next, selector, options, context, compileToken) {
      var name = selector.name, data = selector.data;
      if (Array.isArray(data)) {
        return subselects_1.subselects[name](next, data, options, context, compileToken);
      }
      if (name in aliases_1.aliases) {
        if (data != null) {
          throw new Error("Pseudo " + name + " doesn't have any arguments");
        }
        var alias = css_what_1.parse(aliases_1.aliases[name], options);
        return subselects_1.subselects.is(next, alias, options, context, compileToken);
      }
      if (name in filters_1.filters) {
        return filters_1.filters[name](next, data, options, context);
      }
      if (name in pseudos_1.pseudos) {
        var pseudo_1 = pseudos_1.pseudos[name];
        pseudos_1.verifyPseudoArgs(pseudo_1, name, data);
        return pseudo_1 === boolbase_1.falseFunc ? boolbase_1.falseFunc : next === boolbase_1.trueFunc ? function(elem) {
          return pseudo_1(elem, options, data);
        } : function(elem) {
          return pseudo_1(elem, options, data) && next(elem);
        };
      }
      throw new Error("unmatched pseudo-class :" + name);
    }
    exports.compilePseudoSelector = compilePseudoSelector;
  }
});

// node_modules/css-select/lib/general.js
var require_general = __commonJS({
  "node_modules/css-select/lib/general.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.compileGeneralSelector = void 0;
    var attributes_1 = require_attributes();
    var pseudo_selectors_1 = require_pseudo_selectors();
    function compileGeneralSelector(next, selector, options, context, compileToken) {
      var adapter2 = options.adapter, equals = options.equals;
      switch (selector.type) {
        case "pseudo-element":
          throw new Error("Pseudo-elements are not supported by css-select");
        case "attribute":
          return attributes_1.attributeRules[selector.action](next, selector, options);
        case "pseudo":
          return pseudo_selectors_1.compilePseudoSelector(next, selector, options, context, compileToken);
        case "tag":
          return function tag(elem) {
            return adapter2.getName(elem) === selector.name && next(elem);
          };
        case "descendant":
          if (options.cacheResults === false || typeof WeakSet === "undefined") {
            return function descendant(elem) {
              var current = elem;
              while (current = adapter2.getParent(current)) {
                if (adapter2.isTag(current) && next(current)) {
                  return true;
                }
              }
              return false;
            };
          }
          var isFalseCache_1 = new WeakSet();
          return function cachedDescendant(elem) {
            var current = elem;
            while (current = adapter2.getParent(current)) {
              if (!isFalseCache_1.has(current)) {
                if (adapter2.isTag(current) && next(current)) {
                  return true;
                }
                isFalseCache_1.add(current);
              }
            }
            return false;
          };
        case "_flexibleDescendant":
          return function flexibleDescendant(elem) {
            var current = elem;
            do {
              if (adapter2.isTag(current) && next(current))
                return true;
            } while (current = adapter2.getParent(current));
            return false;
          };
        case "parent":
          return function parent(elem) {
            return adapter2.getChildren(elem).some(function(elem2) {
              return adapter2.isTag(elem2) && next(elem2);
            });
          };
        case "child":
          return function child(elem) {
            var parent = adapter2.getParent(elem);
            return parent != null && adapter2.isTag(parent) && next(parent);
          };
        case "sibling":
          return function sibling(elem) {
            var siblings = adapter2.getSiblings(elem);
            for (var i = 0; i < siblings.length; i++) {
              var currentSibling = siblings[i];
              if (equals(elem, currentSibling))
                break;
              if (adapter2.isTag(currentSibling) && next(currentSibling)) {
                return true;
              }
            }
            return false;
          };
        case "adjacent":
          return function adjacent(elem) {
            var siblings = adapter2.getSiblings(elem);
            var lastElement;
            for (var i = 0; i < siblings.length; i++) {
              var currentSibling = siblings[i];
              if (equals(elem, currentSibling))
                break;
              if (adapter2.isTag(currentSibling)) {
                lastElement = currentSibling;
              }
            }
            return !!lastElement && next(lastElement);
          };
        case "universal":
          return next;
      }
    }
    exports.compileGeneralSelector = compileGeneralSelector;
  }
});

// node_modules/css-select/lib/compile.js
var require_compile2 = __commonJS({
  "node_modules/css-select/lib/compile.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.compileToken = exports.compileUnsafe = exports.compile = void 0;
    var css_what_1 = require_lib9();
    var boolbase_1 = require_boolbase();
    var sort_1 = __importDefault(require_sort());
    var procedure_1 = require_procedure();
    var general_1 = require_general();
    var subselects_1 = require_subselects();
    function compile2(selector, options, context) {
      var next = compileUnsafe(selector, options, context);
      return subselects_1.ensureIsTag(next, options.adapter);
    }
    exports.compile = compile2;
    function compileUnsafe(selector, options, context) {
      var token = typeof selector === "string" ? css_what_1.parse(selector, options) : selector;
      return compileToken(token, options, context);
    }
    exports.compileUnsafe = compileUnsafe;
    function includesScopePseudo(t) {
      return t.type === "pseudo" && (t.name === "scope" || Array.isArray(t.data) && t.data.some(function(data) {
        return data.some(includesScopePseudo);
      }));
    }
    var DESCENDANT_TOKEN = { type: "descendant" };
    var FLEXIBLE_DESCENDANT_TOKEN = {
      type: "_flexibleDescendant"
    };
    var SCOPE_TOKEN = { type: "pseudo", name: "scope", data: null };
    function absolutize(token, _a, context) {
      var adapter2 = _a.adapter;
      var hasContext = !!(context === null || context === void 0 ? void 0 : context.every(function(e) {
        var parent = adapter2.isTag(e) && adapter2.getParent(e);
        return e === subselects_1.PLACEHOLDER_ELEMENT || parent && adapter2.isTag(parent);
      }));
      for (var _i = 0, token_1 = token; _i < token_1.length; _i++) {
        var t = token_1[_i];
        if (t.length > 0 && procedure_1.isTraversal(t[0]) && t[0].type !== "descendant") {
        } else if (hasContext && !t.some(includesScopePseudo)) {
          t.unshift(DESCENDANT_TOKEN);
        } else {
          continue;
        }
        t.unshift(SCOPE_TOKEN);
      }
    }
    function compileToken(token, options, context) {
      var _a;
      token = token.filter(function(t) {
        return t.length > 0;
      });
      token.forEach(sort_1.default);
      context = (_a = options.context) !== null && _a !== void 0 ? _a : context;
      var isArrayContext = Array.isArray(context);
      var finalContext = context && (Array.isArray(context) ? context : [context]);
      absolutize(token, options, finalContext);
      var shouldTestNextSiblings = false;
      var query2 = token.map(function(rules) {
        if (rules.length >= 2) {
          var first = rules[0], second = rules[1];
          if (first.type !== "pseudo" || first.name !== "scope") {
          } else if (isArrayContext && second.type === "descendant") {
            rules[1] = FLEXIBLE_DESCENDANT_TOKEN;
          } else if (second.type === "adjacent" || second.type === "sibling") {
            shouldTestNextSiblings = true;
          }
        }
        return compileRules(rules, options, finalContext);
      }).reduce(reduceRules, boolbase_1.falseFunc);
      query2.shouldTestNextSiblings = shouldTestNextSiblings;
      return query2;
    }
    exports.compileToken = compileToken;
    function compileRules(rules, options, context) {
      var _a;
      return rules.reduce(function(previous, rule) {
        return previous === boolbase_1.falseFunc ? boolbase_1.falseFunc : general_1.compileGeneralSelector(previous, rule, options, context, compileToken);
      }, (_a = options.rootFunc) !== null && _a !== void 0 ? _a : boolbase_1.trueFunc);
    }
    function reduceRules(a, b) {
      if (b === boolbase_1.falseFunc || a === boolbase_1.trueFunc) {
        return a;
      }
      if (a === boolbase_1.falseFunc || b === boolbase_1.trueFunc) {
        return b;
      }
      return function combine(elem) {
        return a(elem) || b(elem);
      };
    }
  }
});

// node_modules/css-select/lib/index.js
var require_lib11 = __commonJS({
  "node_modules/css-select/lib/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.aliases = exports.pseudos = exports.filters = exports.is = exports.selectOne = exports.selectAll = exports.prepareContext = exports._compileToken = exports._compileUnsafe = exports.compile = void 0;
    var DomUtils = __importStar(require_lib8());
    var boolbase_1 = require_boolbase();
    var compile_1 = require_compile2();
    var subselects_1 = require_subselects();
    var defaultEquals = function(a, b) {
      return a === b;
    };
    var defaultOptions = {
      adapter: DomUtils,
      equals: defaultEquals
    };
    function convertOptionFormats(options) {
      var _a, _b, _c, _d;
      var opts = options !== null && options !== void 0 ? options : defaultOptions;
      (_a = opts.adapter) !== null && _a !== void 0 ? _a : opts.adapter = DomUtils;
      (_b = opts.equals) !== null && _b !== void 0 ? _b : opts.equals = (_d = (_c = opts.adapter) === null || _c === void 0 ? void 0 : _c.equals) !== null && _d !== void 0 ? _d : defaultEquals;
      return opts;
    }
    function wrapCompile(func) {
      return function addAdapter(selector, options, context) {
        var opts = convertOptionFormats(options);
        return func(selector, opts, context);
      };
    }
    exports.compile = wrapCompile(compile_1.compile);
    exports._compileUnsafe = wrapCompile(compile_1.compileUnsafe);
    exports._compileToken = wrapCompile(compile_1.compileToken);
    function getSelectorFunc(searchFunc) {
      return function select(query2, elements, options) {
        var opts = convertOptionFormats(options);
        if (typeof query2 !== "function") {
          query2 = compile_1.compileUnsafe(query2, opts, elements);
        }
        var filteredElements = prepareContext(elements, opts.adapter, query2.shouldTestNextSiblings);
        return searchFunc(query2, filteredElements, opts);
      };
    }
    function prepareContext(elems, adapter2, shouldTestNextSiblings) {
      if (shouldTestNextSiblings === void 0) {
        shouldTestNextSiblings = false;
      }
      if (shouldTestNextSiblings) {
        elems = appendNextSiblings(elems, adapter2);
      }
      return Array.isArray(elems) ? adapter2.removeSubsets(elems) : adapter2.getChildren(elems);
    }
    exports.prepareContext = prepareContext;
    function appendNextSiblings(elem, adapter2) {
      var elems = Array.isArray(elem) ? elem.slice(0) : [elem];
      for (var i = 0; i < elems.length; i++) {
        var nextSiblings = subselects_1.getNextSiblings(elems[i], adapter2);
        elems.push.apply(elems, nextSiblings);
      }
      return elems;
    }
    exports.selectAll = getSelectorFunc(function(query2, elems, options) {
      return query2 === boolbase_1.falseFunc || !elems || elems.length === 0 ? [] : options.adapter.findAll(query2, elems);
    });
    exports.selectOne = getSelectorFunc(function(query2, elems, options) {
      return query2 === boolbase_1.falseFunc || !elems || elems.length === 0 ? null : options.adapter.findOne(query2, elems);
    });
    function is2(elem, query2, options) {
      var opts = convertOptionFormats(options);
      return (typeof query2 === "function" ? query2 : compile_1.compile(query2, opts))(elem);
    }
    exports.is = is2;
    exports.default = exports.selectAll;
    var pseudo_selectors_1 = require_pseudo_selectors();
    Object.defineProperty(exports, "filters", { enumerable: true, get: function() {
      return pseudo_selectors_1.filters;
    } });
    Object.defineProperty(exports, "pseudos", { enumerable: true, get: function() {
      return pseudo_selectors_1.pseudos;
    } });
    Object.defineProperty(exports, "aliases", { enumerable: true, get: function() {
      return pseudo_selectors_1.aliases;
    } });
  }
});

// node_modules/linkedom/node_modules/cssom/lib/StyleSheet.js
var require_StyleSheet = __commonJS({
  "node_modules/linkedom/node_modules/cssom/lib/StyleSheet.js"(exports) {
    var CSSOM = {};
    CSSOM.StyleSheet = function StyleSheet() {
      this.parentStyleSheet = null;
    };
    exports.StyleSheet = CSSOM.StyleSheet;
  }
});

// node_modules/linkedom/node_modules/cssom/lib/CSSRule.js
var require_CSSRule = __commonJS({
  "node_modules/linkedom/node_modules/cssom/lib/CSSRule.js"(exports) {
    var CSSOM = {};
    CSSOM.CSSRule = function CSSRule() {
      this.parentRule = null;
      this.parentStyleSheet = null;
    };
    CSSOM.CSSRule.UNKNOWN_RULE = 0;
    CSSOM.CSSRule.STYLE_RULE = 1;
    CSSOM.CSSRule.CHARSET_RULE = 2;
    CSSOM.CSSRule.IMPORT_RULE = 3;
    CSSOM.CSSRule.MEDIA_RULE = 4;
    CSSOM.CSSRule.FONT_FACE_RULE = 5;
    CSSOM.CSSRule.PAGE_RULE = 6;
    CSSOM.CSSRule.KEYFRAMES_RULE = 7;
    CSSOM.CSSRule.KEYFRAME_RULE = 8;
    CSSOM.CSSRule.MARGIN_RULE = 9;
    CSSOM.CSSRule.NAMESPACE_RULE = 10;
    CSSOM.CSSRule.COUNTER_STYLE_RULE = 11;
    CSSOM.CSSRule.SUPPORTS_RULE = 12;
    CSSOM.CSSRule.DOCUMENT_RULE = 13;
    CSSOM.CSSRule.FONT_FEATURE_VALUES_RULE = 14;
    CSSOM.CSSRule.VIEWPORT_RULE = 15;
    CSSOM.CSSRule.REGION_STYLE_RULE = 16;
    CSSOM.CSSRule.prototype = {
      constructor: CSSOM.CSSRule
    };
    exports.CSSRule = CSSOM.CSSRule;
  }
});

// node_modules/linkedom/node_modules/cssom/lib/CSSStyleRule.js
var require_CSSStyleRule = __commonJS({
  "node_modules/linkedom/node_modules/cssom/lib/CSSStyleRule.js"(exports) {
    var CSSOM = {
      CSSStyleDeclaration: require_CSSStyleDeclaration().CSSStyleDeclaration,
      CSSRule: require_CSSRule().CSSRule
    };
    CSSOM.CSSStyleRule = function CSSStyleRule() {
      CSSOM.CSSRule.call(this);
      this.selectorText = "";
      this.style = new CSSOM.CSSStyleDeclaration();
      this.style.parentRule = this;
    };
    CSSOM.CSSStyleRule.prototype = new CSSOM.CSSRule();
    CSSOM.CSSStyleRule.prototype.constructor = CSSOM.CSSStyleRule;
    CSSOM.CSSStyleRule.prototype.type = 1;
    Object.defineProperty(CSSOM.CSSStyleRule.prototype, "cssText", {
      get: function() {
        var text;
        if (this.selectorText) {
          text = this.selectorText + " {" + this.style.cssText + "}";
        } else {
          text = "";
        }
        return text;
      },
      set: function(cssText) {
        var rule = CSSOM.CSSStyleRule.parse(cssText);
        this.style = rule.style;
        this.selectorText = rule.selectorText;
      }
    });
    CSSOM.CSSStyleRule.parse = function(ruleText) {
      var i = 0;
      var state = "selector";
      var index;
      var j = i;
      var buffer = "";
      var SIGNIFICANT_WHITESPACE = {
        "selector": true,
        "value": true
      };
      var styleRule = new CSSOM.CSSStyleRule();
      var name, priority = "";
      for (var character; character = ruleText.charAt(i); i++) {
        switch (character) {
          case " ":
          case "	":
          case "\r":
          case "\n":
          case "\f":
            if (SIGNIFICANT_WHITESPACE[state]) {
              switch (ruleText.charAt(i - 1)) {
                case " ":
                case "	":
                case "\r":
                case "\n":
                case "\f":
                  break;
                default:
                  buffer += " ";
                  break;
              }
            }
            break;
          case '"':
            j = i + 1;
            index = ruleText.indexOf('"', j) + 1;
            if (!index) {
              throw '" is missing';
            }
            buffer += ruleText.slice(i, index);
            i = index - 1;
            break;
          case "'":
            j = i + 1;
            index = ruleText.indexOf("'", j) + 1;
            if (!index) {
              throw "' is missing";
            }
            buffer += ruleText.slice(i, index);
            i = index - 1;
            break;
          case "/":
            if (ruleText.charAt(i + 1) === "*") {
              i += 2;
              index = ruleText.indexOf("*/", i);
              if (index === -1) {
                throw new SyntaxError("Missing */");
              } else {
                i = index + 1;
              }
            } else {
              buffer += character;
            }
            break;
          case "{":
            if (state === "selector") {
              styleRule.selectorText = buffer.trim();
              buffer = "";
              state = "name";
            }
            break;
          case ":":
            if (state === "name") {
              name = buffer.trim();
              buffer = "";
              state = "value";
            } else {
              buffer += character;
            }
            break;
          case "!":
            if (state === "value" && ruleText.indexOf("!important", i) === i) {
              priority = "important";
              i += "important".length;
            } else {
              buffer += character;
            }
            break;
          case ";":
            if (state === "value") {
              styleRule.style.setProperty(name, buffer.trim(), priority);
              priority = "";
              buffer = "";
              state = "name";
            } else {
              buffer += character;
            }
            break;
          case "}":
            if (state === "value") {
              styleRule.style.setProperty(name, buffer.trim(), priority);
              priority = "";
              buffer = "";
            } else if (state === "name") {
              break;
            } else {
              buffer += character;
            }
            state = "selector";
            break;
          default:
            buffer += character;
            break;
        }
      }
      return styleRule;
    };
    exports.CSSStyleRule = CSSOM.CSSStyleRule;
  }
});

// node_modules/linkedom/node_modules/cssom/lib/CSSStyleSheet.js
var require_CSSStyleSheet = __commonJS({
  "node_modules/linkedom/node_modules/cssom/lib/CSSStyleSheet.js"(exports) {
    var CSSOM = {
      StyleSheet: require_StyleSheet().StyleSheet,
      CSSStyleRule: require_CSSStyleRule().CSSStyleRule
    };
    CSSOM.CSSStyleSheet = function CSSStyleSheet() {
      CSSOM.StyleSheet.call(this);
      this.cssRules = [];
    };
    CSSOM.CSSStyleSheet.prototype = new CSSOM.StyleSheet();
    CSSOM.CSSStyleSheet.prototype.constructor = CSSOM.CSSStyleSheet;
    CSSOM.CSSStyleSheet.prototype.insertRule = function(rule, index) {
      if (index < 0 || index > this.cssRules.length) {
        throw new RangeError("INDEX_SIZE_ERR");
      }
      var cssRule = CSSOM.parse(rule).cssRules[0];
      cssRule.parentStyleSheet = this;
      this.cssRules.splice(index, 0, cssRule);
      return index;
    };
    CSSOM.CSSStyleSheet.prototype.deleteRule = function(index) {
      if (index < 0 || index >= this.cssRules.length) {
        throw new RangeError("INDEX_SIZE_ERR");
      }
      this.cssRules.splice(index, 1);
    };
    CSSOM.CSSStyleSheet.prototype.toString = function() {
      var result = "";
      var rules = this.cssRules;
      for (var i = 0; i < rules.length; i++) {
        result += rules[i].cssText + "\n";
      }
      return result;
    };
    exports.CSSStyleSheet = CSSOM.CSSStyleSheet;
    CSSOM.parse = require_parse3().parse;
  }
});

// node_modules/linkedom/node_modules/cssom/lib/MediaList.js
var require_MediaList = __commonJS({
  "node_modules/linkedom/node_modules/cssom/lib/MediaList.js"(exports) {
    var CSSOM = {};
    CSSOM.MediaList = function MediaList() {
      this.length = 0;
    };
    CSSOM.MediaList.prototype = {
      constructor: CSSOM.MediaList,
      get mediaText() {
        return Array.prototype.join.call(this, ", ");
      },
      set mediaText(value) {
        var values = value.split(",");
        var length = this.length = values.length;
        for (var i = 0; i < length; i++) {
          this[i] = values[i].trim();
        }
      },
      appendMedium: function(medium) {
        if (Array.prototype.indexOf.call(this, medium) === -1) {
          this[this.length] = medium;
          this.length++;
        }
      },
      deleteMedium: function(medium) {
        var index = Array.prototype.indexOf.call(this, medium);
        if (index !== -1) {
          Array.prototype.splice.call(this, index, 1);
        }
      }
    };
    exports.MediaList = CSSOM.MediaList;
  }
});

// node_modules/linkedom/node_modules/cssom/lib/CSSImportRule.js
var require_CSSImportRule = __commonJS({
  "node_modules/linkedom/node_modules/cssom/lib/CSSImportRule.js"(exports) {
    var CSSOM = {
      CSSRule: require_CSSRule().CSSRule,
      CSSStyleSheet: require_CSSStyleSheet().CSSStyleSheet,
      MediaList: require_MediaList().MediaList
    };
    CSSOM.CSSImportRule = function CSSImportRule() {
      CSSOM.CSSRule.call(this);
      this.href = "";
      this.media = new CSSOM.MediaList();
      this.styleSheet = new CSSOM.CSSStyleSheet();
    };
    CSSOM.CSSImportRule.prototype = new CSSOM.CSSRule();
    CSSOM.CSSImportRule.prototype.constructor = CSSOM.CSSImportRule;
    CSSOM.CSSImportRule.prototype.type = 3;
    Object.defineProperty(CSSOM.CSSImportRule.prototype, "cssText", {
      get: function() {
        var mediaText = this.media.mediaText;
        return "@import url(" + this.href + ")" + (mediaText ? " " + mediaText : "") + ";";
      },
      set: function(cssText) {
        var i = 0;
        var state = "";
        var buffer = "";
        var index;
        for (var character; character = cssText.charAt(i); i++) {
          switch (character) {
            case " ":
            case "	":
            case "\r":
            case "\n":
            case "\f":
              if (state === "after-import") {
                state = "url";
              } else {
                buffer += character;
              }
              break;
            case "@":
              if (!state && cssText.indexOf("@import", i) === i) {
                state = "after-import";
                i += "import".length;
                buffer = "";
              }
              break;
            case "u":
              if (state === "url" && cssText.indexOf("url(", i) === i) {
                index = cssText.indexOf(")", i + 1);
                if (index === -1) {
                  throw i + ': ")" not found';
                }
                i += "url(".length;
                var url = cssText.slice(i, index);
                if (url[0] === url[url.length - 1]) {
                  if (url[0] === '"' || url[0] === "'") {
                    url = url.slice(1, -1);
                  }
                }
                this.href = url;
                i = index;
                state = "media";
              }
              break;
            case '"':
              if (state === "url") {
                index = cssText.indexOf('"', i + 1);
                if (!index) {
                  throw i + `: '"' not found`;
                }
                this.href = cssText.slice(i + 1, index);
                i = index;
                state = "media";
              }
              break;
            case "'":
              if (state === "url") {
                index = cssText.indexOf("'", i + 1);
                if (!index) {
                  throw i + `: "'" not found`;
                }
                this.href = cssText.slice(i + 1, index);
                i = index;
                state = "media";
              }
              break;
            case ";":
              if (state === "media") {
                if (buffer) {
                  this.media.mediaText = buffer.trim();
                }
              }
              break;
            default:
              if (state === "media") {
                buffer += character;
              }
              break;
          }
        }
      }
    });
    exports.CSSImportRule = CSSOM.CSSImportRule;
  }
});

// node_modules/linkedom/node_modules/cssom/lib/CSSGroupingRule.js
var require_CSSGroupingRule = __commonJS({
  "node_modules/linkedom/node_modules/cssom/lib/CSSGroupingRule.js"(exports) {
    var CSSOM = {
      CSSRule: require_CSSRule().CSSRule
    };
    CSSOM.CSSGroupingRule = function CSSGroupingRule() {
      CSSOM.CSSRule.call(this);
      this.cssRules = [];
    };
    CSSOM.CSSGroupingRule.prototype = new CSSOM.CSSRule();
    CSSOM.CSSGroupingRule.prototype.constructor = CSSOM.CSSGroupingRule;
    CSSOM.CSSGroupingRule.prototype.insertRule = function insertRule(rule, index) {
      if (index < 0 || index > this.cssRules.length) {
        throw new RangeError("INDEX_SIZE_ERR");
      }
      var cssRule = CSSOM.parse(rule).cssRules[0];
      cssRule.parentRule = this;
      this.cssRules.splice(index, 0, cssRule);
      return index;
    };
    CSSOM.CSSGroupingRule.prototype.deleteRule = function deleteRule(index) {
      if (index < 0 || index >= this.cssRules.length) {
        throw new RangeError("INDEX_SIZE_ERR");
      }
      this.cssRules.splice(index, 1)[0].parentRule = null;
    };
    exports.CSSGroupingRule = CSSOM.CSSGroupingRule;
  }
});

// node_modules/linkedom/node_modules/cssom/lib/CSSConditionRule.js
var require_CSSConditionRule = __commonJS({
  "node_modules/linkedom/node_modules/cssom/lib/CSSConditionRule.js"(exports) {
    var CSSOM = {
      CSSRule: require_CSSRule().CSSRule,
      CSSGroupingRule: require_CSSGroupingRule().CSSGroupingRule
    };
    CSSOM.CSSConditionRule = function CSSConditionRule() {
      CSSOM.CSSGroupingRule.call(this);
      this.cssRules = [];
    };
    CSSOM.CSSConditionRule.prototype = new CSSOM.CSSGroupingRule();
    CSSOM.CSSConditionRule.prototype.constructor = CSSOM.CSSConditionRule;
    CSSOM.CSSConditionRule.prototype.conditionText = "";
    CSSOM.CSSConditionRule.prototype.cssText = "";
    exports.CSSConditionRule = CSSOM.CSSConditionRule;
  }
});

// node_modules/linkedom/node_modules/cssom/lib/CSSMediaRule.js
var require_CSSMediaRule = __commonJS({
  "node_modules/linkedom/node_modules/cssom/lib/CSSMediaRule.js"(exports) {
    var CSSOM = {
      CSSRule: require_CSSRule().CSSRule,
      CSSGroupingRule: require_CSSGroupingRule().CSSGroupingRule,
      CSSConditionRule: require_CSSConditionRule().CSSConditionRule,
      MediaList: require_MediaList().MediaList
    };
    CSSOM.CSSMediaRule = function CSSMediaRule() {
      CSSOM.CSSConditionRule.call(this);
      this.media = new CSSOM.MediaList();
    };
    CSSOM.CSSMediaRule.prototype = new CSSOM.CSSConditionRule();
    CSSOM.CSSMediaRule.prototype.constructor = CSSOM.CSSMediaRule;
    CSSOM.CSSMediaRule.prototype.type = 4;
    Object.defineProperties(CSSOM.CSSMediaRule.prototype, {
      "conditionText": {
        get: function() {
          return this.media.mediaText;
        },
        set: function(value) {
          this.media.mediaText = value;
        },
        configurable: true,
        enumerable: true
      },
      "cssText": {
        get: function() {
          var cssTexts = [];
          for (var i = 0, length = this.cssRules.length; i < length; i++) {
            cssTexts.push(this.cssRules[i].cssText);
          }
          return "@media " + this.media.mediaText + " {" + cssTexts.join("") + "}";
        },
        configurable: true,
        enumerable: true
      }
    });
    exports.CSSMediaRule = CSSOM.CSSMediaRule;
  }
});

// node_modules/linkedom/node_modules/cssom/lib/CSSSupportsRule.js
var require_CSSSupportsRule = __commonJS({
  "node_modules/linkedom/node_modules/cssom/lib/CSSSupportsRule.js"(exports) {
    var CSSOM = {
      CSSRule: require_CSSRule().CSSRule,
      CSSGroupingRule: require_CSSGroupingRule().CSSGroupingRule,
      CSSConditionRule: require_CSSConditionRule().CSSConditionRule
    };
    CSSOM.CSSSupportsRule = function CSSSupportsRule() {
      CSSOM.CSSConditionRule.call(this);
    };
    CSSOM.CSSSupportsRule.prototype = new CSSOM.CSSConditionRule();
    CSSOM.CSSSupportsRule.prototype.constructor = CSSOM.CSSSupportsRule;
    CSSOM.CSSSupportsRule.prototype.type = 12;
    Object.defineProperty(CSSOM.CSSSupportsRule.prototype, "cssText", {
      get: function() {
        var cssTexts = [];
        for (var i = 0, length = this.cssRules.length; i < length; i++) {
          cssTexts.push(this.cssRules[i].cssText);
        }
        return "@supports " + this.conditionText + " {" + cssTexts.join("") + "}";
      }
    });
    exports.CSSSupportsRule = CSSOM.CSSSupportsRule;
  }
});

// node_modules/linkedom/node_modules/cssom/lib/CSSFontFaceRule.js
var require_CSSFontFaceRule = __commonJS({
  "node_modules/linkedom/node_modules/cssom/lib/CSSFontFaceRule.js"(exports) {
    var CSSOM = {
      CSSStyleDeclaration: require_CSSStyleDeclaration().CSSStyleDeclaration,
      CSSRule: require_CSSRule().CSSRule
    };
    CSSOM.CSSFontFaceRule = function CSSFontFaceRule() {
      CSSOM.CSSRule.call(this);
      this.style = new CSSOM.CSSStyleDeclaration();
      this.style.parentRule = this;
    };
    CSSOM.CSSFontFaceRule.prototype = new CSSOM.CSSRule();
    CSSOM.CSSFontFaceRule.prototype.constructor = CSSOM.CSSFontFaceRule;
    CSSOM.CSSFontFaceRule.prototype.type = 5;
    Object.defineProperty(CSSOM.CSSFontFaceRule.prototype, "cssText", {
      get: function() {
        return "@font-face {" + this.style.cssText + "}";
      }
    });
    exports.CSSFontFaceRule = CSSOM.CSSFontFaceRule;
  }
});

// node_modules/linkedom/node_modules/cssom/lib/CSSHostRule.js
var require_CSSHostRule = __commonJS({
  "node_modules/linkedom/node_modules/cssom/lib/CSSHostRule.js"(exports) {
    var CSSOM = {
      CSSRule: require_CSSRule().CSSRule
    };
    CSSOM.CSSHostRule = function CSSHostRule() {
      CSSOM.CSSRule.call(this);
      this.cssRules = [];
    };
    CSSOM.CSSHostRule.prototype = new CSSOM.CSSRule();
    CSSOM.CSSHostRule.prototype.constructor = CSSOM.CSSHostRule;
    CSSOM.CSSHostRule.prototype.type = 1001;
    Object.defineProperty(CSSOM.CSSHostRule.prototype, "cssText", {
      get: function() {
        var cssTexts = [];
        for (var i = 0, length = this.cssRules.length; i < length; i++) {
          cssTexts.push(this.cssRules[i].cssText);
        }
        return "@host {" + cssTexts.join("") + "}";
      }
    });
    exports.CSSHostRule = CSSOM.CSSHostRule;
  }
});

// node_modules/linkedom/node_modules/cssom/lib/CSSKeyframeRule.js
var require_CSSKeyframeRule = __commonJS({
  "node_modules/linkedom/node_modules/cssom/lib/CSSKeyframeRule.js"(exports) {
    var CSSOM = {
      CSSRule: require_CSSRule().CSSRule,
      CSSStyleDeclaration: require_CSSStyleDeclaration().CSSStyleDeclaration
    };
    CSSOM.CSSKeyframeRule = function CSSKeyframeRule() {
      CSSOM.CSSRule.call(this);
      this.keyText = "";
      this.style = new CSSOM.CSSStyleDeclaration();
      this.style.parentRule = this;
    };
    CSSOM.CSSKeyframeRule.prototype = new CSSOM.CSSRule();
    CSSOM.CSSKeyframeRule.prototype.constructor = CSSOM.CSSKeyframeRule;
    CSSOM.CSSKeyframeRule.prototype.type = 8;
    Object.defineProperty(CSSOM.CSSKeyframeRule.prototype, "cssText", {
      get: function() {
        return this.keyText + " {" + this.style.cssText + "} ";
      }
    });
    exports.CSSKeyframeRule = CSSOM.CSSKeyframeRule;
  }
});

// node_modules/linkedom/node_modules/cssom/lib/CSSKeyframesRule.js
var require_CSSKeyframesRule = __commonJS({
  "node_modules/linkedom/node_modules/cssom/lib/CSSKeyframesRule.js"(exports) {
    var CSSOM = {
      CSSRule: require_CSSRule().CSSRule
    };
    CSSOM.CSSKeyframesRule = function CSSKeyframesRule() {
      CSSOM.CSSRule.call(this);
      this.name = "";
      this.cssRules = [];
    };
    CSSOM.CSSKeyframesRule.prototype = new CSSOM.CSSRule();
    CSSOM.CSSKeyframesRule.prototype.constructor = CSSOM.CSSKeyframesRule;
    CSSOM.CSSKeyframesRule.prototype.type = 7;
    Object.defineProperty(CSSOM.CSSKeyframesRule.prototype, "cssText", {
      get: function() {
        var cssTexts = [];
        for (var i = 0, length = this.cssRules.length; i < length; i++) {
          cssTexts.push("  " + this.cssRules[i].cssText);
        }
        return "@" + (this._vendorPrefix || "") + "keyframes " + this.name + " { \n" + cssTexts.join("\n") + "\n}";
      }
    });
    exports.CSSKeyframesRule = CSSOM.CSSKeyframesRule;
  }
});

// node_modules/linkedom/node_modules/cssom/lib/CSSValue.js
var require_CSSValue = __commonJS({
  "node_modules/linkedom/node_modules/cssom/lib/CSSValue.js"(exports) {
    var CSSOM = {};
    CSSOM.CSSValue = function CSSValue() {
    };
    CSSOM.CSSValue.prototype = {
      constructor: CSSOM.CSSValue,
      set cssText(text) {
        var name = this._getConstructorName();
        throw new Error('DOMException: property "cssText" of "' + name + '" is readonly and can not be replaced with "' + text + '"!');
      },
      get cssText() {
        var name = this._getConstructorName();
        throw new Error('getter "cssText" of "' + name + '" is not implemented!');
      },
      _getConstructorName: function() {
        var s = this.constructor.toString(), c = s.match(/function\s([^\(]+)/), name = c[1];
        return name;
      }
    };
    exports.CSSValue = CSSOM.CSSValue;
  }
});

// node_modules/linkedom/node_modules/cssom/lib/CSSValueExpression.js
var require_CSSValueExpression = __commonJS({
  "node_modules/linkedom/node_modules/cssom/lib/CSSValueExpression.js"(exports) {
    var CSSOM = {
      CSSValue: require_CSSValue().CSSValue
    };
    CSSOM.CSSValueExpression = function CSSValueExpression(token, idx) {
      this._token = token;
      this._idx = idx;
    };
    CSSOM.CSSValueExpression.prototype = new CSSOM.CSSValue();
    CSSOM.CSSValueExpression.prototype.constructor = CSSOM.CSSValueExpression;
    CSSOM.CSSValueExpression.prototype.parse = function() {
      var token = this._token, idx = this._idx;
      var character = "", expression = "", error = "", info, paren = [];
      for (; ; ++idx) {
        character = token.charAt(idx);
        if (character === "") {
          error = "css expression error: unfinished expression!";
          break;
        }
        switch (character) {
          case "(":
            paren.push(character);
            expression += character;
            break;
          case ")":
            paren.pop(character);
            expression += character;
            break;
          case "/":
            if (info = this._parseJSComment(token, idx)) {
              if (info.error) {
                error = "css expression error: unfinished comment in expression!";
              } else {
                idx = info.idx;
              }
            } else if (info = this._parseJSRexExp(token, idx)) {
              idx = info.idx;
              expression += info.text;
            } else {
              expression += character;
            }
            break;
          case "'":
          case '"':
            info = this._parseJSString(token, idx, character);
            if (info) {
              idx = info.idx;
              expression += info.text;
            } else {
              expression += character;
            }
            break;
          default:
            expression += character;
            break;
        }
        if (error) {
          break;
        }
        if (paren.length === 0) {
          break;
        }
      }
      var ret;
      if (error) {
        ret = {
          error
        };
      } else {
        ret = {
          idx,
          expression
        };
      }
      return ret;
    };
    CSSOM.CSSValueExpression.prototype._parseJSComment = function(token, idx) {
      var nextChar = token.charAt(idx + 1), text;
      if (nextChar === "/" || nextChar === "*") {
        var startIdx = idx, endIdx, commentEndChar;
        if (nextChar === "/") {
          commentEndChar = "\n";
        } else if (nextChar === "*") {
          commentEndChar = "*/";
        }
        endIdx = token.indexOf(commentEndChar, startIdx + 1 + 1);
        if (endIdx !== -1) {
          endIdx = endIdx + commentEndChar.length - 1;
          text = token.substring(idx, endIdx + 1);
          return {
            idx: endIdx,
            text
          };
        } else {
          var error = "css expression error: unfinished comment in expression!";
          return {
            error
          };
        }
      } else {
        return false;
      }
    };
    CSSOM.CSSValueExpression.prototype._parseJSString = function(token, idx, sep) {
      var endIdx = this._findMatchedIdx(token, idx, sep), text;
      if (endIdx === -1) {
        return false;
      } else {
        text = token.substring(idx, endIdx + sep.length);
        return {
          idx: endIdx,
          text
        };
      }
    };
    CSSOM.CSSValueExpression.prototype._parseJSRexExp = function(token, idx) {
      var before2 = token.substring(0, idx).replace(/\s+$/, ""), legalRegx = [
        /^$/,
        /\($/,
        /\[$/,
        /\!$/,
        /\+$/,
        /\-$/,
        /\*$/,
        /\/\s+/,
        /\%$/,
        /\=$/,
        /\>$/,
        /<$/,
        /\&$/,
        /\|$/,
        /\^$/,
        /\~$/,
        /\?$/,
        /\,$/,
        /delete$/,
        /in$/,
        /instanceof$/,
        /new$/,
        /typeof$/,
        /void$/
      ];
      var isLegal = legalRegx.some(function(reg) {
        return reg.test(before2);
      });
      if (!isLegal) {
        return false;
      } else {
        var sep = "/";
        return this._parseJSString(token, idx, sep);
      }
    };
    CSSOM.CSSValueExpression.prototype._findMatchedIdx = function(token, idx, sep) {
      var startIdx = idx, endIdx;
      var NOT_FOUND = -1;
      while (true) {
        endIdx = token.indexOf(sep, startIdx + 1);
        if (endIdx === -1) {
          endIdx = NOT_FOUND;
          break;
        } else {
          var text = token.substring(idx + 1, endIdx), matched = text.match(/\\+$/);
          if (!matched || matched[0] % 2 === 0) {
            break;
          } else {
            startIdx = endIdx;
          }
        }
      }
      var nextNewLineIdx = token.indexOf("\n", idx + 1);
      if (nextNewLineIdx < endIdx) {
        endIdx = NOT_FOUND;
      }
      return endIdx;
    };
    exports.CSSValueExpression = CSSOM.CSSValueExpression;
  }
});

// node_modules/linkedom/node_modules/cssom/lib/MatcherList.js
var require_MatcherList = __commonJS({
  "node_modules/linkedom/node_modules/cssom/lib/MatcherList.js"(exports) {
    var CSSOM = {};
    CSSOM.MatcherList = function MatcherList() {
      this.length = 0;
    };
    CSSOM.MatcherList.prototype = {
      constructor: CSSOM.MatcherList,
      get matcherText() {
        return Array.prototype.join.call(this, ", ");
      },
      set matcherText(value) {
        var values = value.split(",");
        var length = this.length = values.length;
        for (var i = 0; i < length; i++) {
          this[i] = values[i].trim();
        }
      },
      appendMatcher: function(matcher) {
        if (Array.prototype.indexOf.call(this, matcher) === -1) {
          this[this.length] = matcher;
          this.length++;
        }
      },
      deleteMatcher: function(matcher) {
        var index = Array.prototype.indexOf.call(this, matcher);
        if (index !== -1) {
          Array.prototype.splice.call(this, index, 1);
        }
      }
    };
    exports.MatcherList = CSSOM.MatcherList;
  }
});

// node_modules/linkedom/node_modules/cssom/lib/CSSDocumentRule.js
var require_CSSDocumentRule = __commonJS({
  "node_modules/linkedom/node_modules/cssom/lib/CSSDocumentRule.js"(exports) {
    var CSSOM = {
      CSSRule: require_CSSRule().CSSRule,
      MatcherList: require_MatcherList().MatcherList
    };
    CSSOM.CSSDocumentRule = function CSSDocumentRule() {
      CSSOM.CSSRule.call(this);
      this.matcher = new CSSOM.MatcherList();
      this.cssRules = [];
    };
    CSSOM.CSSDocumentRule.prototype = new CSSOM.CSSRule();
    CSSOM.CSSDocumentRule.prototype.constructor = CSSOM.CSSDocumentRule;
    CSSOM.CSSDocumentRule.prototype.type = 10;
    Object.defineProperty(CSSOM.CSSDocumentRule.prototype, "cssText", {
      get: function() {
        var cssTexts = [];
        for (var i = 0, length = this.cssRules.length; i < length; i++) {
          cssTexts.push(this.cssRules[i].cssText);
        }
        return "@-moz-document " + this.matcher.matcherText + " {" + cssTexts.join("") + "}";
      }
    });
    exports.CSSDocumentRule = CSSOM.CSSDocumentRule;
  }
});

// node_modules/linkedom/node_modules/cssom/lib/parse.js
var require_parse3 = __commonJS({
  "node_modules/linkedom/node_modules/cssom/lib/parse.js"(exports) {
    var CSSOM = {};
    CSSOM.parse = function parse3(token) {
      var i = 0;
      var state = "before-selector";
      var index;
      var buffer = "";
      var valueParenthesisDepth = 0;
      var SIGNIFICANT_WHITESPACE = {
        "selector": true,
        "value": true,
        "value-parenthesis": true,
        "atRule": true,
        "importRule-begin": true,
        "importRule": true,
        "atBlock": true,
        "conditionBlock": true,
        "documentRule-begin": true
      };
      var styleSheet = new CSSOM.CSSStyleSheet();
      var currentScope = styleSheet;
      var parentRule;
      var ancestorRules = [];
      var hasAncestors = false;
      var prevScope;
      var name, priority = "", styleRule, mediaRule, supportsRule, importRule, fontFaceRule, keyframesRule, documentRule, hostRule;
      var atKeyframesRegExp = /@(-(?:\w+-)+)?keyframes/g;
      var parseError = function(message) {
        var lines = token.substring(0, i).split("\n");
        var lineCount = lines.length;
        var charCount = lines.pop().length + 1;
        var error = new Error(message + " (line " + lineCount + ", char " + charCount + ")");
        error.line = lineCount;
        error["char"] = charCount;
        error.styleSheet = styleSheet;
        throw error;
      };
      for (var character; character = token.charAt(i); i++) {
        switch (character) {
          case " ":
          case "	":
          case "\r":
          case "\n":
          case "\f":
            if (SIGNIFICANT_WHITESPACE[state]) {
              buffer += character;
            }
            break;
          case '"':
            index = i + 1;
            do {
              index = token.indexOf('"', index) + 1;
              if (!index) {
                parseError('Unmatched "');
              }
            } while (token[index - 2] === "\\");
            buffer += token.slice(i, index);
            i = index - 1;
            switch (state) {
              case "before-value":
                state = "value";
                break;
              case "importRule-begin":
                state = "importRule";
                break;
            }
            break;
          case "'":
            index = i + 1;
            do {
              index = token.indexOf("'", index) + 1;
              if (!index) {
                parseError("Unmatched '");
              }
            } while (token[index - 2] === "\\");
            buffer += token.slice(i, index);
            i = index - 1;
            switch (state) {
              case "before-value":
                state = "value";
                break;
              case "importRule-begin":
                state = "importRule";
                break;
            }
            break;
          case "/":
            if (token.charAt(i + 1) === "*") {
              i += 2;
              index = token.indexOf("*/", i);
              if (index === -1) {
                parseError("Missing */");
              } else {
                i = index + 1;
              }
            } else {
              buffer += character;
            }
            if (state === "importRule-begin") {
              buffer += " ";
              state = "importRule";
            }
            break;
          case "@":
            if (token.indexOf("@-moz-document", i) === i) {
              state = "documentRule-begin";
              documentRule = new CSSOM.CSSDocumentRule();
              documentRule.__starts = i;
              i += "-moz-document".length;
              buffer = "";
              break;
            } else if (token.indexOf("@media", i) === i) {
              state = "atBlock";
              mediaRule = new CSSOM.CSSMediaRule();
              mediaRule.__starts = i;
              i += "media".length;
              buffer = "";
              break;
            } else if (token.indexOf("@supports", i) === i) {
              state = "conditionBlock";
              supportsRule = new CSSOM.CSSSupportsRule();
              supportsRule.__starts = i;
              i += "supports".length;
              buffer = "";
              break;
            } else if (token.indexOf("@host", i) === i) {
              state = "hostRule-begin";
              i += "host".length;
              hostRule = new CSSOM.CSSHostRule();
              hostRule.__starts = i;
              buffer = "";
              break;
            } else if (token.indexOf("@import", i) === i) {
              state = "importRule-begin";
              i += "import".length;
              buffer += "@import";
              break;
            } else if (token.indexOf("@font-face", i) === i) {
              state = "fontFaceRule-begin";
              i += "font-face".length;
              fontFaceRule = new CSSOM.CSSFontFaceRule();
              fontFaceRule.__starts = i;
              buffer = "";
              break;
            } else {
              atKeyframesRegExp.lastIndex = i;
              var matchKeyframes = atKeyframesRegExp.exec(token);
              if (matchKeyframes && matchKeyframes.index === i) {
                state = "keyframesRule-begin";
                keyframesRule = new CSSOM.CSSKeyframesRule();
                keyframesRule.__starts = i;
                keyframesRule._vendorPrefix = matchKeyframes[1];
                i += matchKeyframes[0].length - 1;
                buffer = "";
                break;
              } else if (state === "selector") {
                state = "atRule";
              }
            }
            buffer += character;
            break;
          case "{":
            if (state === "selector" || state === "atRule") {
              styleRule.selectorText = buffer.trim();
              styleRule.style.__starts = i;
              buffer = "";
              state = "before-name";
            } else if (state === "atBlock") {
              mediaRule.media.mediaText = buffer.trim();
              if (parentRule) {
                ancestorRules.push(parentRule);
              }
              currentScope = parentRule = mediaRule;
              mediaRule.parentStyleSheet = styleSheet;
              buffer = "";
              state = "before-selector";
            } else if (state === "conditionBlock") {
              supportsRule.conditionText = buffer.trim();
              if (parentRule) {
                ancestorRules.push(parentRule);
              }
              currentScope = parentRule = supportsRule;
              supportsRule.parentStyleSheet = styleSheet;
              buffer = "";
              state = "before-selector";
            } else if (state === "hostRule-begin") {
              if (parentRule) {
                ancestorRules.push(parentRule);
              }
              currentScope = parentRule = hostRule;
              hostRule.parentStyleSheet = styleSheet;
              buffer = "";
              state = "before-selector";
            } else if (state === "fontFaceRule-begin") {
              if (parentRule) {
                fontFaceRule.parentRule = parentRule;
              }
              fontFaceRule.parentStyleSheet = styleSheet;
              styleRule = fontFaceRule;
              buffer = "";
              state = "before-name";
            } else if (state === "keyframesRule-begin") {
              keyframesRule.name = buffer.trim();
              if (parentRule) {
                ancestorRules.push(parentRule);
                keyframesRule.parentRule = parentRule;
              }
              keyframesRule.parentStyleSheet = styleSheet;
              currentScope = parentRule = keyframesRule;
              buffer = "";
              state = "keyframeRule-begin";
            } else if (state === "keyframeRule-begin") {
              styleRule = new CSSOM.CSSKeyframeRule();
              styleRule.keyText = buffer.trim();
              styleRule.__starts = i;
              buffer = "";
              state = "before-name";
            } else if (state === "documentRule-begin") {
              documentRule.matcher.matcherText = buffer.trim();
              if (parentRule) {
                ancestorRules.push(parentRule);
                documentRule.parentRule = parentRule;
              }
              currentScope = parentRule = documentRule;
              documentRule.parentStyleSheet = styleSheet;
              buffer = "";
              state = "before-selector";
            }
            break;
          case ":":
            if (state === "name") {
              name = buffer.trim();
              buffer = "";
              state = "before-value";
            } else {
              buffer += character;
            }
            break;
          case "(":
            if (state === "value") {
              if (buffer.trim() === "expression") {
                var info = new CSSOM.CSSValueExpression(token, i).parse();
                if (info.error) {
                  parseError(info.error);
                } else {
                  buffer += info.expression;
                  i = info.idx;
                }
              } else {
                state = "value-parenthesis";
                valueParenthesisDepth = 1;
                buffer += character;
              }
            } else if (state === "value-parenthesis") {
              valueParenthesisDepth++;
              buffer += character;
            } else {
              buffer += character;
            }
            break;
          case ")":
            if (state === "value-parenthesis") {
              valueParenthesisDepth--;
              if (valueParenthesisDepth === 0)
                state = "value";
            }
            buffer += character;
            break;
          case "!":
            if (state === "value" && token.indexOf("!important", i) === i) {
              priority = "important";
              i += "important".length;
            } else {
              buffer += character;
            }
            break;
          case ";":
            switch (state) {
              case "value":
                styleRule.style.setProperty(name, buffer.trim(), priority);
                priority = "";
                buffer = "";
                state = "before-name";
                break;
              case "atRule":
                buffer = "";
                state = "before-selector";
                break;
              case "importRule":
                importRule = new CSSOM.CSSImportRule();
                importRule.parentStyleSheet = importRule.styleSheet.parentStyleSheet = styleSheet;
                importRule.cssText = buffer + character;
                styleSheet.cssRules.push(importRule);
                buffer = "";
                state = "before-selector";
                break;
              default:
                buffer += character;
                break;
            }
            break;
          case "}":
            switch (state) {
              case "value":
                styleRule.style.setProperty(name, buffer.trim(), priority);
                priority = "";
              case "before-name":
              case "name":
                styleRule.__ends = i + 1;
                if (parentRule) {
                  styleRule.parentRule = parentRule;
                }
                styleRule.parentStyleSheet = styleSheet;
                currentScope.cssRules.push(styleRule);
                buffer = "";
                if (currentScope.constructor === CSSOM.CSSKeyframesRule) {
                  state = "keyframeRule-begin";
                } else {
                  state = "before-selector";
                }
                break;
              case "keyframeRule-begin":
              case "before-selector":
              case "selector":
                if (!parentRule) {
                  parseError("Unexpected }");
                }
                hasAncestors = ancestorRules.length > 0;
                while (ancestorRules.length > 0) {
                  parentRule = ancestorRules.pop();
                  if (parentRule.constructor.name === "CSSMediaRule" || parentRule.constructor.name === "CSSSupportsRule") {
                    prevScope = currentScope;
                    currentScope = parentRule;
                    currentScope.cssRules.push(prevScope);
                    break;
                  }
                  if (ancestorRules.length === 0) {
                    hasAncestors = false;
                  }
                }
                if (!hasAncestors) {
                  currentScope.__ends = i + 1;
                  styleSheet.cssRules.push(currentScope);
                  currentScope = styleSheet;
                  parentRule = null;
                }
                buffer = "";
                state = "before-selector";
                break;
            }
            break;
          default:
            switch (state) {
              case "before-selector":
                state = "selector";
                styleRule = new CSSOM.CSSStyleRule();
                styleRule.__starts = i;
                break;
              case "before-name":
                state = "name";
                break;
              case "before-value":
                state = "value";
                break;
              case "importRule-begin":
                state = "importRule";
                break;
            }
            buffer += character;
            break;
        }
      }
      return styleSheet;
    };
    exports.parse = CSSOM.parse;
    CSSOM.CSSStyleSheet = require_CSSStyleSheet().CSSStyleSheet;
    CSSOM.CSSStyleRule = require_CSSStyleRule().CSSStyleRule;
    CSSOM.CSSImportRule = require_CSSImportRule().CSSImportRule;
    CSSOM.CSSGroupingRule = require_CSSGroupingRule().CSSGroupingRule;
    CSSOM.CSSMediaRule = require_CSSMediaRule().CSSMediaRule;
    CSSOM.CSSConditionRule = require_CSSConditionRule().CSSConditionRule;
    CSSOM.CSSSupportsRule = require_CSSSupportsRule().CSSSupportsRule;
    CSSOM.CSSFontFaceRule = require_CSSFontFaceRule().CSSFontFaceRule;
    CSSOM.CSSHostRule = require_CSSHostRule().CSSHostRule;
    CSSOM.CSSStyleDeclaration = require_CSSStyleDeclaration().CSSStyleDeclaration;
    CSSOM.CSSKeyframeRule = require_CSSKeyframeRule().CSSKeyframeRule;
    CSSOM.CSSKeyframesRule = require_CSSKeyframesRule().CSSKeyframesRule;
    CSSOM.CSSValueExpression = require_CSSValueExpression().CSSValueExpression;
    CSSOM.CSSDocumentRule = require_CSSDocumentRule().CSSDocumentRule;
  }
});

// node_modules/linkedom/node_modules/cssom/lib/CSSStyleDeclaration.js
var require_CSSStyleDeclaration = __commonJS({
  "node_modules/linkedom/node_modules/cssom/lib/CSSStyleDeclaration.js"(exports) {
    var CSSOM = {};
    CSSOM.CSSStyleDeclaration = function CSSStyleDeclaration2() {
      this.length = 0;
      this.parentRule = null;
      this._importants = {};
    };
    CSSOM.CSSStyleDeclaration.prototype = {
      constructor: CSSOM.CSSStyleDeclaration,
      getPropertyValue: function(name) {
        return this[name] || "";
      },
      setProperty: function(name, value, priority) {
        if (this[name]) {
          var index = Array.prototype.indexOf.call(this, name);
          if (index < 0) {
            this[this.length] = name;
            this.length++;
          }
        } else {
          this[this.length] = name;
          this.length++;
        }
        this[name] = value + "";
        this._importants[name] = priority;
      },
      removeProperty: function(name) {
        if (!(name in this)) {
          return "";
        }
        var index = Array.prototype.indexOf.call(this, name);
        if (index < 0) {
          return "";
        }
        var prevValue = this[name];
        this[name] = "";
        Array.prototype.splice.call(this, index, 1);
        return prevValue;
      },
      getPropertyCSSValue: function() {
      },
      getPropertyPriority: function(name) {
        return this._importants[name] || "";
      },
      getPropertyShorthand: function() {
      },
      isPropertyImplicit: function() {
      },
      get cssText() {
        var properties = [];
        for (var i = 0, length = this.length; i < length; ++i) {
          var name = this[i];
          var value = this.getPropertyValue(name);
          var priority = this.getPropertyPriority(name);
          if (priority) {
            priority = " !" + priority;
          }
          properties[i] = name + ": " + value + priority + ";";
        }
        return properties.join(" ");
      },
      set cssText(text) {
        var i, name;
        for (i = this.length; i--; ) {
          name = this[i];
          this[name] = "";
        }
        Array.prototype.splice.call(this, 0, this.length);
        this._importants = {};
        var dummyRule = CSSOM.parse("#bogus{" + text + "}").cssRules[0].style;
        var length = dummyRule.length;
        for (i = 0; i < length; ++i) {
          name = dummyRule[i];
          this.setProperty(dummyRule[i], dummyRule.getPropertyValue(name), dummyRule.getPropertyPriority(name));
        }
      }
    };
    exports.CSSStyleDeclaration = CSSOM.CSSStyleDeclaration;
    CSSOM.parse = require_parse3().parse;
  }
});

// node_modules/linkedom/node_modules/cssom/lib/clone.js
var require_clone = __commonJS({
  "node_modules/linkedom/node_modules/cssom/lib/clone.js"(exports) {
    var CSSOM = {
      CSSStyleSheet: require_CSSStyleSheet().CSSStyleSheet,
      CSSRule: require_CSSRule().CSSRule,
      CSSStyleRule: require_CSSStyleRule().CSSStyleRule,
      CSSGroupingRule: require_CSSGroupingRule().CSSGroupingRule,
      CSSConditionRule: require_CSSConditionRule().CSSConditionRule,
      CSSMediaRule: require_CSSMediaRule().CSSMediaRule,
      CSSSupportsRule: require_CSSSupportsRule().CSSSupportsRule,
      CSSStyleDeclaration: require_CSSStyleDeclaration().CSSStyleDeclaration,
      CSSKeyframeRule: require_CSSKeyframeRule().CSSKeyframeRule,
      CSSKeyframesRule: require_CSSKeyframesRule().CSSKeyframesRule
    };
    CSSOM.clone = function clone(stylesheet) {
      var cloned = new CSSOM.CSSStyleSheet();
      var rules = stylesheet.cssRules;
      if (!rules) {
        return cloned;
      }
      for (var i = 0, rulesLength = rules.length; i < rulesLength; i++) {
        var rule = rules[i];
        var ruleClone = cloned.cssRules[i] = new rule.constructor();
        var style = rule.style;
        if (style) {
          var styleClone = ruleClone.style = new CSSOM.CSSStyleDeclaration();
          for (var j = 0, styleLength = style.length; j < styleLength; j++) {
            var name = styleClone[j] = style[j];
            styleClone[name] = style[name];
            styleClone._importants[name] = style.getPropertyPriority(name);
          }
          styleClone.length = style.length;
        }
        if (rule.hasOwnProperty("keyText")) {
          ruleClone.keyText = rule.keyText;
        }
        if (rule.hasOwnProperty("selectorText")) {
          ruleClone.selectorText = rule.selectorText;
        }
        if (rule.hasOwnProperty("mediaText")) {
          ruleClone.mediaText = rule.mediaText;
        }
        if (rule.hasOwnProperty("conditionText")) {
          ruleClone.conditionText = rule.conditionText;
        }
        if (rule.hasOwnProperty("cssRules")) {
          ruleClone.cssRules = clone(rule).cssRules;
        }
      }
      return cloned;
    };
    exports.clone = CSSOM.clone;
  }
});

// node_modules/linkedom/node_modules/cssom/lib/index.js
var require_lib12 = __commonJS({
  "node_modules/linkedom/node_modules/cssom/lib/index.js"(exports) {
    "use strict";
    exports.CSSStyleDeclaration = require_CSSStyleDeclaration().CSSStyleDeclaration;
    exports.CSSRule = require_CSSRule().CSSRule;
    exports.CSSGroupingRule = require_CSSGroupingRule().CSSGroupingRule;
    exports.CSSConditionRule = require_CSSConditionRule().CSSConditionRule;
    exports.CSSStyleRule = require_CSSStyleRule().CSSStyleRule;
    exports.MediaList = require_MediaList().MediaList;
    exports.CSSMediaRule = require_CSSMediaRule().CSSMediaRule;
    exports.CSSSupportsRule = require_CSSSupportsRule().CSSSupportsRule;
    exports.CSSImportRule = require_CSSImportRule().CSSImportRule;
    exports.CSSFontFaceRule = require_CSSFontFaceRule().CSSFontFaceRule;
    exports.CSSHostRule = require_CSSHostRule().CSSHostRule;
    exports.StyleSheet = require_StyleSheet().StyleSheet;
    exports.CSSStyleSheet = require_CSSStyleSheet().CSSStyleSheet;
    exports.CSSKeyframesRule = require_CSSKeyframesRule().CSSKeyframesRule;
    exports.CSSKeyframeRule = require_CSSKeyframeRule().CSSKeyframeRule;
    exports.MatcherList = require_MatcherList().MatcherList;
    exports.CSSDocumentRule = require_CSSDocumentRule().CSSDocumentRule;
    exports.CSSValue = require_CSSValue().CSSValue;
    exports.CSSValueExpression = require_CSSValueExpression().CSSValueExpression;
    exports.parse = require_parse3().parse;
    exports.clone = require_clone().clone;
  }
});

// node_modules/linkedom/commonjs/canvas.cjs
var require_canvas = __commonJS({
  "node_modules/linkedom/commonjs/canvas.cjs"(exports, module2) {
    try {
      module2.exports = require("canvas");
    } catch (fallback) {
      class Canvas2 {
        constructor(width, height) {
          this.width = width;
          this.height = height;
        }
        getContext() {
          return null;
        }
        toDataURL() {
          return "";
        }
      }
      module2.exports = {
        createCanvas: (width, height) => new Canvas2(width, height)
      };
    }
  }
});

// node_modules/psl/data/rules.json
var require_rules = __commonJS({
  "node_modules/psl/data/rules.json"(exports, module2) {
    module2.exports = [
      "ac",
      "com.ac",
      "edu.ac",
      "gov.ac",
      "net.ac",
      "mil.ac",
      "org.ac",
      "ad",
      "nom.ad",
      "ae",
      "co.ae",
      "net.ae",
      "org.ae",
      "sch.ae",
      "ac.ae",
      "gov.ae",
      "mil.ae",
      "aero",
      "accident-investigation.aero",
      "accident-prevention.aero",
      "aerobatic.aero",
      "aeroclub.aero",
      "aerodrome.aero",
      "agents.aero",
      "aircraft.aero",
      "airline.aero",
      "airport.aero",
      "air-surveillance.aero",
      "airtraffic.aero",
      "air-traffic-control.aero",
      "ambulance.aero",
      "amusement.aero",
      "association.aero",
      "author.aero",
      "ballooning.aero",
      "broker.aero",
      "caa.aero",
      "cargo.aero",
      "catering.aero",
      "certification.aero",
      "championship.aero",
      "charter.aero",
      "civilaviation.aero",
      "club.aero",
      "conference.aero",
      "consultant.aero",
      "consulting.aero",
      "control.aero",
      "council.aero",
      "crew.aero",
      "design.aero",
      "dgca.aero",
      "educator.aero",
      "emergency.aero",
      "engine.aero",
      "engineer.aero",
      "entertainment.aero",
      "equipment.aero",
      "exchange.aero",
      "express.aero",
      "federation.aero",
      "flight.aero",
      "freight.aero",
      "fuel.aero",
      "gliding.aero",
      "government.aero",
      "groundhandling.aero",
      "group.aero",
      "hanggliding.aero",
      "homebuilt.aero",
      "insurance.aero",
      "journal.aero",
      "journalist.aero",
      "leasing.aero",
      "logistics.aero",
      "magazine.aero",
      "maintenance.aero",
      "media.aero",
      "microlight.aero",
      "modelling.aero",
      "navigation.aero",
      "parachuting.aero",
      "paragliding.aero",
      "passenger-association.aero",
      "pilot.aero",
      "press.aero",
      "production.aero",
      "recreation.aero",
      "repbody.aero",
      "res.aero",
      "research.aero",
      "rotorcraft.aero",
      "safety.aero",
      "scientist.aero",
      "services.aero",
      "show.aero",
      "skydiving.aero",
      "software.aero",
      "student.aero",
      "trader.aero",
      "trading.aero",
      "trainer.aero",
      "union.aero",
      "workinggroup.aero",
      "works.aero",
      "af",
      "gov.af",
      "com.af",
      "org.af",
      "net.af",
      "edu.af",
      "ag",
      "com.ag",
      "org.ag",
      "net.ag",
      "co.ag",
      "nom.ag",
      "ai",
      "off.ai",
      "com.ai",
      "net.ai",
      "org.ai",
      "al",
      "com.al",
      "edu.al",
      "gov.al",
      "mil.al",
      "net.al",
      "org.al",
      "am",
      "co.am",
      "com.am",
      "commune.am",
      "net.am",
      "org.am",
      "ao",
      "ed.ao",
      "gv.ao",
      "og.ao",
      "co.ao",
      "pb.ao",
      "it.ao",
      "aq",
      "ar",
      "com.ar",
      "edu.ar",
      "gob.ar",
      "gov.ar",
      "int.ar",
      "mil.ar",
      "musica.ar",
      "net.ar",
      "org.ar",
      "tur.ar",
      "arpa",
      "e164.arpa",
      "in-addr.arpa",
      "ip6.arpa",
      "iris.arpa",
      "uri.arpa",
      "urn.arpa",
      "as",
      "gov.as",
      "asia",
      "at",
      "ac.at",
      "co.at",
      "gv.at",
      "or.at",
      "au",
      "com.au",
      "net.au",
      "org.au",
      "edu.au",
      "gov.au",
      "asn.au",
      "id.au",
      "info.au",
      "conf.au",
      "oz.au",
      "act.au",
      "nsw.au",
      "nt.au",
      "qld.au",
      "sa.au",
      "tas.au",
      "vic.au",
      "wa.au",
      "act.edu.au",
      "catholic.edu.au",
      "nsw.edu.au",
      "nt.edu.au",
      "qld.edu.au",
      "sa.edu.au",
      "tas.edu.au",
      "vic.edu.au",
      "wa.edu.au",
      "qld.gov.au",
      "sa.gov.au",
      "tas.gov.au",
      "vic.gov.au",
      "wa.gov.au",
      "education.tas.edu.au",
      "schools.nsw.edu.au",
      "aw",
      "com.aw",
      "ax",
      "az",
      "com.az",
      "net.az",
      "int.az",
      "gov.az",
      "org.az",
      "edu.az",
      "info.az",
      "pp.az",
      "mil.az",
      "name.az",
      "pro.az",
      "biz.az",
      "ba",
      "com.ba",
      "edu.ba",
      "gov.ba",
      "mil.ba",
      "net.ba",
      "org.ba",
      "bb",
      "biz.bb",
      "co.bb",
      "com.bb",
      "edu.bb",
      "gov.bb",
      "info.bb",
      "net.bb",
      "org.bb",
      "store.bb",
      "tv.bb",
      "*.bd",
      "be",
      "ac.be",
      "bf",
      "gov.bf",
      "bg",
      "a.bg",
      "b.bg",
      "c.bg",
      "d.bg",
      "e.bg",
      "f.bg",
      "g.bg",
      "h.bg",
      "i.bg",
      "j.bg",
      "k.bg",
      "l.bg",
      "m.bg",
      "n.bg",
      "o.bg",
      "p.bg",
      "q.bg",
      "r.bg",
      "s.bg",
      "t.bg",
      "u.bg",
      "v.bg",
      "w.bg",
      "x.bg",
      "y.bg",
      "z.bg",
      "0.bg",
      "1.bg",
      "2.bg",
      "3.bg",
      "4.bg",
      "5.bg",
      "6.bg",
      "7.bg",
      "8.bg",
      "9.bg",
      "bh",
      "com.bh",
      "edu.bh",
      "net.bh",
      "org.bh",
      "gov.bh",
      "bi",
      "co.bi",
      "com.bi",
      "edu.bi",
      "or.bi",
      "org.bi",
      "biz",
      "bj",
      "asso.bj",
      "barreau.bj",
      "gouv.bj",
      "bm",
      "com.bm",
      "edu.bm",
      "gov.bm",
      "net.bm",
      "org.bm",
      "bn",
      "com.bn",
      "edu.bn",
      "gov.bn",
      "net.bn",
      "org.bn",
      "bo",
      "com.bo",
      "edu.bo",
      "gob.bo",
      "int.bo",
      "org.bo",
      "net.bo",
      "mil.bo",
      "tv.bo",
      "web.bo",
      "academia.bo",
      "agro.bo",
      "arte.bo",
      "blog.bo",
      "bolivia.bo",
      "ciencia.bo",
      "cooperativa.bo",
      "democracia.bo",
      "deporte.bo",
      "ecologia.bo",
      "economia.bo",
      "empresa.bo",
      "indigena.bo",
      "industria.bo",
      "info.bo",
      "medicina.bo",
      "movimiento.bo",
      "musica.bo",
      "natural.bo",
      "nombre.bo",
      "noticias.bo",
      "patria.bo",
      "politica.bo",
      "profesional.bo",
      "plurinacional.bo",
      "pueblo.bo",
      "revista.bo",
      "salud.bo",
      "tecnologia.bo",
      "tksat.bo",
      "transporte.bo",
      "wiki.bo",
      "br",
      "9guacu.br",
      "abc.br",
      "adm.br",
      "adv.br",
      "agr.br",
      "aju.br",
      "am.br",
      "anani.br",
      "aparecida.br",
      "arq.br",
      "art.br",
      "ato.br",
      "b.br",
      "barueri.br",
      "belem.br",
      "bhz.br",
      "bio.br",
      "blog.br",
      "bmd.br",
      "boavista.br",
      "bsb.br",
      "campinagrande.br",
      "campinas.br",
      "caxias.br",
      "cim.br",
      "cng.br",
      "cnt.br",
      "com.br",
      "contagem.br",
      "coop.br",
      "cri.br",
      "cuiaba.br",
      "curitiba.br",
      "def.br",
      "ecn.br",
      "eco.br",
      "edu.br",
      "emp.br",
      "eng.br",
      "esp.br",
      "etc.br",
      "eti.br",
      "far.br",
      "feira.br",
      "flog.br",
      "floripa.br",
      "fm.br",
      "fnd.br",
      "fortal.br",
      "fot.br",
      "foz.br",
      "fst.br",
      "g12.br",
      "ggf.br",
      "goiania.br",
      "gov.br",
      "ac.gov.br",
      "al.gov.br",
      "am.gov.br",
      "ap.gov.br",
      "ba.gov.br",
      "ce.gov.br",
      "df.gov.br",
      "es.gov.br",
      "go.gov.br",
      "ma.gov.br",
      "mg.gov.br",
      "ms.gov.br",
      "mt.gov.br",
      "pa.gov.br",
      "pb.gov.br",
      "pe.gov.br",
      "pi.gov.br",
      "pr.gov.br",
      "rj.gov.br",
      "rn.gov.br",
      "ro.gov.br",
      "rr.gov.br",
      "rs.gov.br",
      "sc.gov.br",
      "se.gov.br",
      "sp.gov.br",
      "to.gov.br",
      "gru.br",
      "imb.br",
      "ind.br",
      "inf.br",
      "jab.br",
      "jampa.br",
      "jdf.br",
      "joinville.br",
      "jor.br",
      "jus.br",
      "leg.br",
      "lel.br",
      "londrina.br",
      "macapa.br",
      "maceio.br",
      "manaus.br",
      "maringa.br",
      "mat.br",
      "med.br",
      "mil.br",
      "morena.br",
      "mp.br",
      "mus.br",
      "natal.br",
      "net.br",
      "niteroi.br",
      "*.nom.br",
      "not.br",
      "ntr.br",
      "odo.br",
      "ong.br",
      "org.br",
      "osasco.br",
      "palmas.br",
      "poa.br",
      "ppg.br",
      "pro.br",
      "psc.br",
      "psi.br",
      "pvh.br",
      "qsl.br",
      "radio.br",
      "rec.br",
      "recife.br",
      "ribeirao.br",
      "rio.br",
      "riobranco.br",
      "riopreto.br",
      "salvador.br",
      "sampa.br",
      "santamaria.br",
      "santoandre.br",
      "saobernardo.br",
      "saogonca.br",
      "sjc.br",
      "slg.br",
      "slz.br",
      "sorocaba.br",
      "srv.br",
      "taxi.br",
      "tc.br",
      "teo.br",
      "the.br",
      "tmp.br",
      "trd.br",
      "tur.br",
      "tv.br",
      "udi.br",
      "vet.br",
      "vix.br",
      "vlog.br",
      "wiki.br",
      "zlg.br",
      "bs",
      "com.bs",
      "net.bs",
      "org.bs",
      "edu.bs",
      "gov.bs",
      "bt",
      "com.bt",
      "edu.bt",
      "gov.bt",
      "net.bt",
      "org.bt",
      "bv",
      "bw",
      "co.bw",
      "org.bw",
      "by",
      "gov.by",
      "mil.by",
      "com.by",
      "of.by",
      "bz",
      "com.bz",
      "net.bz",
      "org.bz",
      "edu.bz",
      "gov.bz",
      "ca",
      "ab.ca",
      "bc.ca",
      "mb.ca",
      "nb.ca",
      "nf.ca",
      "nl.ca",
      "ns.ca",
      "nt.ca",
      "nu.ca",
      "on.ca",
      "pe.ca",
      "qc.ca",
      "sk.ca",
      "yk.ca",
      "gc.ca",
      "cat",
      "cc",
      "cd",
      "gov.cd",
      "cf",
      "cg",
      "ch",
      "ci",
      "org.ci",
      "or.ci",
      "com.ci",
      "co.ci",
      "edu.ci",
      "ed.ci",
      "ac.ci",
      "net.ci",
      "go.ci",
      "asso.ci",
      "a\xE9roport.ci",
      "int.ci",
      "presse.ci",
      "md.ci",
      "gouv.ci",
      "*.ck",
      "!www.ck",
      "cl",
      "aprendemas.cl",
      "co.cl",
      "gob.cl",
      "gov.cl",
      "mil.cl",
      "cm",
      "co.cm",
      "com.cm",
      "gov.cm",
      "net.cm",
      "cn",
      "ac.cn",
      "com.cn",
      "edu.cn",
      "gov.cn",
      "net.cn",
      "org.cn",
      "mil.cn",
      "\u516C\u53F8.cn",
      "\u7F51\u7EDC.cn",
      "\u7DB2\u7D61.cn",
      "ah.cn",
      "bj.cn",
      "cq.cn",
      "fj.cn",
      "gd.cn",
      "gs.cn",
      "gz.cn",
      "gx.cn",
      "ha.cn",
      "hb.cn",
      "he.cn",
      "hi.cn",
      "hl.cn",
      "hn.cn",
      "jl.cn",
      "js.cn",
      "jx.cn",
      "ln.cn",
      "nm.cn",
      "nx.cn",
      "qh.cn",
      "sc.cn",
      "sd.cn",
      "sh.cn",
      "sn.cn",
      "sx.cn",
      "tj.cn",
      "xj.cn",
      "xz.cn",
      "yn.cn",
      "zj.cn",
      "hk.cn",
      "mo.cn",
      "tw.cn",
      "co",
      "arts.co",
      "com.co",
      "edu.co",
      "firm.co",
      "gov.co",
      "info.co",
      "int.co",
      "mil.co",
      "net.co",
      "nom.co",
      "org.co",
      "rec.co",
      "web.co",
      "com",
      "coop",
      "cr",
      "ac.cr",
      "co.cr",
      "ed.cr",
      "fi.cr",
      "go.cr",
      "or.cr",
      "sa.cr",
      "cu",
      "com.cu",
      "edu.cu",
      "org.cu",
      "net.cu",
      "gov.cu",
      "inf.cu",
      "cv",
      "cw",
      "com.cw",
      "edu.cw",
      "net.cw",
      "org.cw",
      "cx",
      "gov.cx",
      "cy",
      "ac.cy",
      "biz.cy",
      "com.cy",
      "ekloges.cy",
      "gov.cy",
      "ltd.cy",
      "name.cy",
      "net.cy",
      "org.cy",
      "parliament.cy",
      "press.cy",
      "pro.cy",
      "tm.cy",
      "cz",
      "de",
      "dj",
      "dk",
      "dm",
      "com.dm",
      "net.dm",
      "org.dm",
      "edu.dm",
      "gov.dm",
      "do",
      "art.do",
      "com.do",
      "edu.do",
      "gob.do",
      "gov.do",
      "mil.do",
      "net.do",
      "org.do",
      "sld.do",
      "web.do",
      "dz",
      "com.dz",
      "org.dz",
      "net.dz",
      "gov.dz",
      "edu.dz",
      "asso.dz",
      "pol.dz",
      "art.dz",
      "ec",
      "com.ec",
      "info.ec",
      "net.ec",
      "fin.ec",
      "k12.ec",
      "med.ec",
      "pro.ec",
      "org.ec",
      "edu.ec",
      "gov.ec",
      "gob.ec",
      "mil.ec",
      "edu",
      "ee",
      "edu.ee",
      "gov.ee",
      "riik.ee",
      "lib.ee",
      "med.ee",
      "com.ee",
      "pri.ee",
      "aip.ee",
      "org.ee",
      "fie.ee",
      "eg",
      "com.eg",
      "edu.eg",
      "eun.eg",
      "gov.eg",
      "mil.eg",
      "name.eg",
      "net.eg",
      "org.eg",
      "sci.eg",
      "*.er",
      "es",
      "com.es",
      "nom.es",
      "org.es",
      "gob.es",
      "edu.es",
      "et",
      "com.et",
      "gov.et",
      "org.et",
      "edu.et",
      "biz.et",
      "name.et",
      "info.et",
      "net.et",
      "eu",
      "fi",
      "aland.fi",
      "fj",
      "ac.fj",
      "biz.fj",
      "com.fj",
      "gov.fj",
      "info.fj",
      "mil.fj",
      "name.fj",
      "net.fj",
      "org.fj",
      "pro.fj",
      "*.fk",
      "fm",
      "fo",
      "fr",
      "asso.fr",
      "com.fr",
      "gouv.fr",
      "nom.fr",
      "prd.fr",
      "tm.fr",
      "aeroport.fr",
      "avocat.fr",
      "avoues.fr",
      "cci.fr",
      "chambagri.fr",
      "chirurgiens-dentistes.fr",
      "experts-comptables.fr",
      "geometre-expert.fr",
      "greta.fr",
      "huissier-justice.fr",
      "medecin.fr",
      "notaires.fr",
      "pharmacien.fr",
      "port.fr",
      "veterinaire.fr",
      "ga",
      "gb",
      "gd",
      "ge",
      "com.ge",
      "edu.ge",
      "gov.ge",
      "org.ge",
      "mil.ge",
      "net.ge",
      "pvt.ge",
      "gf",
      "gg",
      "co.gg",
      "net.gg",
      "org.gg",
      "gh",
      "com.gh",
      "edu.gh",
      "gov.gh",
      "org.gh",
      "mil.gh",
      "gi",
      "com.gi",
      "ltd.gi",
      "gov.gi",
      "mod.gi",
      "edu.gi",
      "org.gi",
      "gl",
      "co.gl",
      "com.gl",
      "edu.gl",
      "net.gl",
      "org.gl",
      "gm",
      "gn",
      "ac.gn",
      "com.gn",
      "edu.gn",
      "gov.gn",
      "org.gn",
      "net.gn",
      "gov",
      "gp",
      "com.gp",
      "net.gp",
      "mobi.gp",
      "edu.gp",
      "org.gp",
      "asso.gp",
      "gq",
      "gr",
      "com.gr",
      "edu.gr",
      "net.gr",
      "org.gr",
      "gov.gr",
      "gs",
      "gt",
      "com.gt",
      "edu.gt",
      "gob.gt",
      "ind.gt",
      "mil.gt",
      "net.gt",
      "org.gt",
      "gu",
      "com.gu",
      "edu.gu",
      "gov.gu",
      "guam.gu",
      "info.gu",
      "net.gu",
      "org.gu",
      "web.gu",
      "gw",
      "gy",
      "co.gy",
      "com.gy",
      "edu.gy",
      "gov.gy",
      "net.gy",
      "org.gy",
      "hk",
      "com.hk",
      "edu.hk",
      "gov.hk",
      "idv.hk",
      "net.hk",
      "org.hk",
      "\u516C\u53F8.hk",
      "\u6559\u80B2.hk",
      "\u654E\u80B2.hk",
      "\u653F\u5E9C.hk",
      "\u500B\u4EBA.hk",
      "\u4E2A\u4EBA.hk",
      "\u7B87\u4EBA.hk",
      "\u7DB2\u7EDC.hk",
      "\u7F51\u7EDC.hk",
      "\u7EC4\u7E54.hk",
      "\u7DB2\u7D61.hk",
      "\u7F51\u7D61.hk",
      "\u7EC4\u7EC7.hk",
      "\u7D44\u7E54.hk",
      "\u7D44\u7EC7.hk",
      "hm",
      "hn",
      "com.hn",
      "edu.hn",
      "org.hn",
      "net.hn",
      "mil.hn",
      "gob.hn",
      "hr",
      "iz.hr",
      "from.hr",
      "name.hr",
      "com.hr",
      "ht",
      "com.ht",
      "shop.ht",
      "firm.ht",
      "info.ht",
      "adult.ht",
      "net.ht",
      "pro.ht",
      "org.ht",
      "med.ht",
      "art.ht",
      "coop.ht",
      "pol.ht",
      "asso.ht",
      "edu.ht",
      "rel.ht",
      "gouv.ht",
      "perso.ht",
      "hu",
      "co.hu",
      "info.hu",
      "org.hu",
      "priv.hu",
      "sport.hu",
      "tm.hu",
      "2000.hu",
      "agrar.hu",
      "bolt.hu",
      "casino.hu",
      "city.hu",
      "erotica.hu",
      "erotika.hu",
      "film.hu",
      "forum.hu",
      "games.hu",
      "hotel.hu",
      "ingatlan.hu",
      "jogasz.hu",
      "konyvelo.hu",
      "lakas.hu",
      "media.hu",
      "news.hu",
      "reklam.hu",
      "sex.hu",
      "shop.hu",
      "suli.hu",
      "szex.hu",
      "tozsde.hu",
      "utazas.hu",
      "video.hu",
      "id",
      "ac.id",
      "biz.id",
      "co.id",
      "desa.id",
      "go.id",
      "mil.id",
      "my.id",
      "net.id",
      "or.id",
      "ponpes.id",
      "sch.id",
      "web.id",
      "ie",
      "gov.ie",
      "il",
      "ac.il",
      "co.il",
      "gov.il",
      "idf.il",
      "k12.il",
      "muni.il",
      "net.il",
      "org.il",
      "im",
      "ac.im",
      "co.im",
      "com.im",
      "ltd.co.im",
      "net.im",
      "org.im",
      "plc.co.im",
      "tt.im",
      "tv.im",
      "in",
      "co.in",
      "firm.in",
      "net.in",
      "org.in",
      "gen.in",
      "ind.in",
      "nic.in",
      "ac.in",
      "edu.in",
      "res.in",
      "gov.in",
      "mil.in",
      "info",
      "int",
      "eu.int",
      "io",
      "com.io",
      "iq",
      "gov.iq",
      "edu.iq",
      "mil.iq",
      "com.iq",
      "org.iq",
      "net.iq",
      "ir",
      "ac.ir",
      "co.ir",
      "gov.ir",
      "id.ir",
      "net.ir",
      "org.ir",
      "sch.ir",
      "\u0627\u06CC\u0631\u0627\u0646.ir",
      "\u0627\u064A\u0631\u0627\u0646.ir",
      "is",
      "net.is",
      "com.is",
      "edu.is",
      "gov.is",
      "org.is",
      "int.is",
      "it",
      "gov.it",
      "edu.it",
      "abr.it",
      "abruzzo.it",
      "aosta-valley.it",
      "aostavalley.it",
      "bas.it",
      "basilicata.it",
      "cal.it",
      "calabria.it",
      "cam.it",
      "campania.it",
      "emilia-romagna.it",
      "emiliaromagna.it",
      "emr.it",
      "friuli-v-giulia.it",
      "friuli-ve-giulia.it",
      "friuli-vegiulia.it",
      "friuli-venezia-giulia.it",
      "friuli-veneziagiulia.it",
      "friuli-vgiulia.it",
      "friuliv-giulia.it",
      "friulive-giulia.it",
      "friulivegiulia.it",
      "friulivenezia-giulia.it",
      "friuliveneziagiulia.it",
      "friulivgiulia.it",
      "fvg.it",
      "laz.it",
      "lazio.it",
      "lig.it",
      "liguria.it",
      "lom.it",
      "lombardia.it",
      "lombardy.it",
      "lucania.it",
      "mar.it",
      "marche.it",
      "mol.it",
      "molise.it",
      "piedmont.it",
      "piemonte.it",
      "pmn.it",
      "pug.it",
      "puglia.it",
      "sar.it",
      "sardegna.it",
      "sardinia.it",
      "sic.it",
      "sicilia.it",
      "sicily.it",
      "taa.it",
      "tos.it",
      "toscana.it",
      "trentin-sud-tirol.it",
      "trentin-s\xFCd-tirol.it",
      "trentin-sudtirol.it",
      "trentin-s\xFCdtirol.it",
      "trentin-sued-tirol.it",
      "trentin-suedtirol.it",
      "trentino-a-adige.it",
      "trentino-aadige.it",
      "trentino-alto-adige.it",
      "trentino-altoadige.it",
      "trentino-s-tirol.it",
      "trentino-stirol.it",
      "trentino-sud-tirol.it",
      "trentino-s\xFCd-tirol.it",
      "trentino-sudtirol.it",
      "trentino-s\xFCdtirol.it",
      "trentino-sued-tirol.it",
      "trentino-suedtirol.it",
      "trentino.it",
      "trentinoa-adige.it",
      "trentinoaadige.it",
      "trentinoalto-adige.it",
      "trentinoaltoadige.it",
      "trentinos-tirol.it",
      "trentinostirol.it",
      "trentinosud-tirol.it",
      "trentinos\xFCd-tirol.it",
      "trentinosudtirol.it",
      "trentinos\xFCdtirol.it",
      "trentinosued-tirol.it",
      "trentinosuedtirol.it",
      "trentinsud-tirol.it",
      "trentins\xFCd-tirol.it",
      "trentinsudtirol.it",
      "trentins\xFCdtirol.it",
      "trentinsued-tirol.it",
      "trentinsuedtirol.it",
      "tuscany.it",
      "umb.it",
      "umbria.it",
      "val-d-aosta.it",
      "val-daosta.it",
      "vald-aosta.it",
      "valdaosta.it",
      "valle-aosta.it",
      "valle-d-aosta.it",
      "valle-daosta.it",
      "valleaosta.it",
      "valled-aosta.it",
      "valledaosta.it",
      "vallee-aoste.it",
      "vall\xE9e-aoste.it",
      "vallee-d-aoste.it",
      "vall\xE9e-d-aoste.it",
      "valleeaoste.it",
      "vall\xE9eaoste.it",
      "valleedaoste.it",
      "vall\xE9edaoste.it",
      "vao.it",
      "vda.it",
      "ven.it",
      "veneto.it",
      "ag.it",
      "agrigento.it",
      "al.it",
      "alessandria.it",
      "alto-adige.it",
      "altoadige.it",
      "an.it",
      "ancona.it",
      "andria-barletta-trani.it",
      "andria-trani-barletta.it",
      "andriabarlettatrani.it",
      "andriatranibarletta.it",
      "ao.it",
      "aosta.it",
      "aoste.it",
      "ap.it",
      "aq.it",
      "aquila.it",
      "ar.it",
      "arezzo.it",
      "ascoli-piceno.it",
      "ascolipiceno.it",
      "asti.it",
      "at.it",
      "av.it",
      "avellino.it",
      "ba.it",
      "balsan-sudtirol.it",
      "balsan-s\xFCdtirol.it",
      "balsan-suedtirol.it",
      "balsan.it",
      "bari.it",
      "barletta-trani-andria.it",
      "barlettatraniandria.it",
      "belluno.it",
      "benevento.it",
      "bergamo.it",
      "bg.it",
      "bi.it",
      "biella.it",
      "bl.it",
      "bn.it",
      "bo.it",
      "bologna.it",
      "bolzano-altoadige.it",
      "bolzano.it",
      "bozen-sudtirol.it",
      "bozen-s\xFCdtirol.it",
      "bozen-suedtirol.it",
      "bozen.it",
      "br.it",
      "brescia.it",
      "brindisi.it",
      "bs.it",
      "bt.it",
      "bulsan-sudtirol.it",
      "bulsan-s\xFCdtirol.it",
      "bulsan-suedtirol.it",
      "bulsan.it",
      "bz.it",
      "ca.it",
      "cagliari.it",
      "caltanissetta.it",
      "campidano-medio.it",
      "campidanomedio.it",
      "campobasso.it",
      "carbonia-iglesias.it",
      "carboniaiglesias.it",
      "carrara-massa.it",
      "carraramassa.it",
      "caserta.it",
      "catania.it",
      "catanzaro.it",
      "cb.it",
      "ce.it",
      "cesena-forli.it",
      "cesena-forl\xEC.it",
      "cesenaforli.it",
      "cesenaforl\xEC.it",
      "ch.it",
      "chieti.it",
      "ci.it",
      "cl.it",
      "cn.it",
      "co.it",
      "como.it",
      "cosenza.it",
      "cr.it",
      "cremona.it",
      "crotone.it",
      "cs.it",
      "ct.it",
      "cuneo.it",
      "cz.it",
      "dell-ogliastra.it",
      "dellogliastra.it",
      "en.it",
      "enna.it",
      "fc.it",
      "fe.it",
      "fermo.it",
      "ferrara.it",
      "fg.it",
      "fi.it",
      "firenze.it",
      "florence.it",
      "fm.it",
      "foggia.it",
      "forli-cesena.it",
      "forl\xEC-cesena.it",
      "forlicesena.it",
      "forl\xECcesena.it",
      "fr.it",
      "frosinone.it",
      "ge.it",
      "genoa.it",
      "genova.it",
      "go.it",
      "gorizia.it",
      "gr.it",
      "grosseto.it",
      "iglesias-carbonia.it",
      "iglesiascarbonia.it",
      "im.it",
      "imperia.it",
      "is.it",
      "isernia.it",
      "kr.it",
      "la-spezia.it",
      "laquila.it",
      "laspezia.it",
      "latina.it",
      "lc.it",
      "le.it",
      "lecce.it",
      "lecco.it",
      "li.it",
      "livorno.it",
      "lo.it",
      "lodi.it",
      "lt.it",
      "lu.it",
      "lucca.it",
      "macerata.it",
      "mantova.it",
      "massa-carrara.it",
      "massacarrara.it",
      "matera.it",
      "mb.it",
      "mc.it",
      "me.it",
      "medio-campidano.it",
      "mediocampidano.it",
      "messina.it",
      "mi.it",
      "milan.it",
      "milano.it",
      "mn.it",
      "mo.it",
      "modena.it",
      "monza-brianza.it",
      "monza-e-della-brianza.it",
      "monza.it",
      "monzabrianza.it",
      "monzaebrianza.it",
      "monzaedellabrianza.it",
      "ms.it",
      "mt.it",
      "na.it",
      "naples.it",
      "napoli.it",
      "no.it",
      "novara.it",
      "nu.it",
      "nuoro.it",
      "og.it",
      "ogliastra.it",
      "olbia-tempio.it",
      "olbiatempio.it",
      "or.it",
      "oristano.it",
      "ot.it",
      "pa.it",
      "padova.it",
      "padua.it",
      "palermo.it",
      "parma.it",
      "pavia.it",
      "pc.it",
      "pd.it",
      "pe.it",
      "perugia.it",
      "pesaro-urbino.it",
      "pesarourbino.it",
      "pescara.it",
      "pg.it",
      "pi.it",
      "piacenza.it",
      "pisa.it",
      "pistoia.it",
      "pn.it",
      "po.it",
      "pordenone.it",
      "potenza.it",
      "pr.it",
      "prato.it",
      "pt.it",
      "pu.it",
      "pv.it",
      "pz.it",
      "ra.it",
      "ragusa.it",
      "ravenna.it",
      "rc.it",
      "re.it",
      "reggio-calabria.it",
      "reggio-emilia.it",
      "reggiocalabria.it",
      "reggioemilia.it",
      "rg.it",
      "ri.it",
      "rieti.it",
      "rimini.it",
      "rm.it",
      "rn.it",
      "ro.it",
      "roma.it",
      "rome.it",
      "rovigo.it",
      "sa.it",
      "salerno.it",
      "sassari.it",
      "savona.it",
      "si.it",
      "siena.it",
      "siracusa.it",
      "so.it",
      "sondrio.it",
      "sp.it",
      "sr.it",
      "ss.it",
      "suedtirol.it",
      "s\xFCdtirol.it",
      "sv.it",
      "ta.it",
      "taranto.it",
      "te.it",
      "tempio-olbia.it",
      "tempioolbia.it",
      "teramo.it",
      "terni.it",
      "tn.it",
      "to.it",
      "torino.it",
      "tp.it",
      "tr.it",
      "trani-andria-barletta.it",
      "trani-barletta-andria.it",
      "traniandriabarletta.it",
      "tranibarlettaandria.it",
      "trapani.it",
      "trento.it",
      "treviso.it",
      "trieste.it",
      "ts.it",
      "turin.it",
      "tv.it",
      "ud.it",
      "udine.it",
      "urbino-pesaro.it",
      "urbinopesaro.it",
      "va.it",
      "varese.it",
      "vb.it",
      "vc.it",
      "ve.it",
      "venezia.it",
      "venice.it",
      "verbania.it",
      "vercelli.it",
      "verona.it",
      "vi.it",
      "vibo-valentia.it",
      "vibovalentia.it",
      "vicenza.it",
      "viterbo.it",
      "vr.it",
      "vs.it",
      "vt.it",
      "vv.it",
      "je",
      "co.je",
      "net.je",
      "org.je",
      "*.jm",
      "jo",
      "com.jo",
      "org.jo",
      "net.jo",
      "edu.jo",
      "sch.jo",
      "gov.jo",
      "mil.jo",
      "name.jo",
      "jobs",
      "jp",
      "ac.jp",
      "ad.jp",
      "co.jp",
      "ed.jp",
      "go.jp",
      "gr.jp",
      "lg.jp",
      "ne.jp",
      "or.jp",
      "aichi.jp",
      "akita.jp",
      "aomori.jp",
      "chiba.jp",
      "ehime.jp",
      "fukui.jp",
      "fukuoka.jp",
      "fukushima.jp",
      "gifu.jp",
      "gunma.jp",
      "hiroshima.jp",
      "hokkaido.jp",
      "hyogo.jp",
      "ibaraki.jp",
      "ishikawa.jp",
      "iwate.jp",
      "kagawa.jp",
      "kagoshima.jp",
      "kanagawa.jp",
      "kochi.jp",
      "kumamoto.jp",
      "kyoto.jp",
      "mie.jp",
      "miyagi.jp",
      "miyazaki.jp",
      "nagano.jp",
      "nagasaki.jp",
      "nara.jp",
      "niigata.jp",
      "oita.jp",
      "okayama.jp",
      "okinawa.jp",
      "osaka.jp",
      "saga.jp",
      "saitama.jp",
      "shiga.jp",
      "shimane.jp",
      "shizuoka.jp",
      "tochigi.jp",
      "tokushima.jp",
      "tokyo.jp",
      "tottori.jp",
      "toyama.jp",
      "wakayama.jp",
      "yamagata.jp",
      "yamaguchi.jp",
      "yamanashi.jp",
      "\u6803\u6728.jp",
      "\u611B\u77E5.jp",
      "\u611B\u5A9B.jp",
      "\u5175\u5EAB.jp",
      "\u718A\u672C.jp",
      "\u8328\u57CE.jp",
      "\u5317\u6D77\u9053.jp",
      "\u5343\u8449.jp",
      "\u548C\u6B4C\u5C71.jp",
      "\u9577\u5D0E.jp",
      "\u9577\u91CE.jp",
      "\u65B0\u6F5F.jp",
      "\u9752\u68EE.jp",
      "\u9759\u5CA1.jp",
      "\u6771\u4EAC.jp",
      "\u77F3\u5DDD.jp",
      "\u57FC\u7389.jp",
      "\u4E09\u91CD.jp",
      "\u4EAC\u90FD.jp",
      "\u4F50\u8CC0.jp",
      "\u5927\u5206.jp",
      "\u5927\u962A.jp",
      "\u5948\u826F.jp",
      "\u5BAE\u57CE.jp",
      "\u5BAE\u5D0E.jp",
      "\u5BCC\u5C71.jp",
      "\u5C71\u53E3.jp",
      "\u5C71\u5F62.jp",
      "\u5C71\u68A8.jp",
      "\u5CA9\u624B.jp",
      "\u5C90\u961C.jp",
      "\u5CA1\u5C71.jp",
      "\u5CF6\u6839.jp",
      "\u5E83\u5CF6.jp",
      "\u5FB3\u5CF6.jp",
      "\u6C96\u7E04.jp",
      "\u6ECB\u8CC0.jp",
      "\u795E\u5948\u5DDD.jp",
      "\u798F\u4E95.jp",
      "\u798F\u5CA1.jp",
      "\u798F\u5CF6.jp",
      "\u79CB\u7530.jp",
      "\u7FA4\u99AC.jp",
      "\u9999\u5DDD.jp",
      "\u9AD8\u77E5.jp",
      "\u9CE5\u53D6.jp",
      "\u9E7F\u5150\u5CF6.jp",
      "*.kawasaki.jp",
      "*.kitakyushu.jp",
      "*.kobe.jp",
      "*.nagoya.jp",
      "*.sapporo.jp",
      "*.sendai.jp",
      "*.yokohama.jp",
      "!city.kawasaki.jp",
      "!city.kitakyushu.jp",
      "!city.kobe.jp",
      "!city.nagoya.jp",
      "!city.sapporo.jp",
      "!city.sendai.jp",
      "!city.yokohama.jp",
      "aisai.aichi.jp",
      "ama.aichi.jp",
      "anjo.aichi.jp",
      "asuke.aichi.jp",
      "chiryu.aichi.jp",
      "chita.aichi.jp",
      "fuso.aichi.jp",
      "gamagori.aichi.jp",
      "handa.aichi.jp",
      "hazu.aichi.jp",
      "hekinan.aichi.jp",
      "higashiura.aichi.jp",
      "ichinomiya.aichi.jp",
      "inazawa.aichi.jp",
      "inuyama.aichi.jp",
      "isshiki.aichi.jp",
      "iwakura.aichi.jp",
      "kanie.aichi.jp",
      "kariya.aichi.jp",
      "kasugai.aichi.jp",
      "kira.aichi.jp",
      "kiyosu.aichi.jp",
      "komaki.aichi.jp",
      "konan.aichi.jp",
      "kota.aichi.jp",
      "mihama.aichi.jp",
      "miyoshi.aichi.jp",
      "nishio.aichi.jp",
      "nisshin.aichi.jp",
      "obu.aichi.jp",
      "oguchi.aichi.jp",
      "oharu.aichi.jp",
      "okazaki.aichi.jp",
      "owariasahi.aichi.jp",
      "seto.aichi.jp",
      "shikatsu.aichi.jp",
      "shinshiro.aichi.jp",
      "shitara.aichi.jp",
      "tahara.aichi.jp",
      "takahama.aichi.jp",
      "tobishima.aichi.jp",
      "toei.aichi.jp",
      "togo.aichi.jp",
      "tokai.aichi.jp",
      "tokoname.aichi.jp",
      "toyoake.aichi.jp",
      "toyohashi.aichi.jp",
      "toyokawa.aichi.jp",
      "toyone.aichi.jp",
      "toyota.aichi.jp",
      "tsushima.aichi.jp",
      "yatomi.aichi.jp",
      "akita.akita.jp",
      "daisen.akita.jp",
      "fujisato.akita.jp",
      "gojome.akita.jp",
      "hachirogata.akita.jp",
      "happou.akita.jp",
      "higashinaruse.akita.jp",
      "honjo.akita.jp",
      "honjyo.akita.jp",
      "ikawa.akita.jp",
      "kamikoani.akita.jp",
      "kamioka.akita.jp",
      "katagami.akita.jp",
      "kazuno.akita.jp",
      "kitaakita.akita.jp",
      "kosaka.akita.jp",
      "kyowa.akita.jp",
      "misato.akita.jp",
      "mitane.akita.jp",
      "moriyoshi.akita.jp",
      "nikaho.akita.jp",
      "noshiro.akita.jp",
      "odate.akita.jp",
      "oga.akita.jp",
      "ogata.akita.jp",
      "semboku.akita.jp",
      "yokote.akita.jp",
      "yurihonjo.akita.jp",
      "aomori.aomori.jp",
      "gonohe.aomori.jp",
      "hachinohe.aomori.jp",
      "hashikami.aomori.jp",
      "hiranai.aomori.jp",
      "hirosaki.aomori.jp",
      "itayanagi.aomori.jp",
      "kuroishi.aomori.jp",
      "misawa.aomori.jp",
      "mutsu.aomori.jp",
      "nakadomari.aomori.jp",
      "noheji.aomori.jp",
      "oirase.aomori.jp",
      "owani.aomori.jp",
      "rokunohe.aomori.jp",
      "sannohe.aomori.jp",
      "shichinohe.aomori.jp",
      "shingo.aomori.jp",
      "takko.aomori.jp",
      "towada.aomori.jp",
      "tsugaru.aomori.jp",
      "tsuruta.aomori.jp",
      "abiko.chiba.jp",
      "asahi.chiba.jp",
      "chonan.chiba.jp",
      "chosei.chiba.jp",
      "choshi.chiba.jp",
      "chuo.chiba.jp",
      "funabashi.chiba.jp",
      "futtsu.chiba.jp",
      "hanamigawa.chiba.jp",
      "ichihara.chiba.jp",
      "ichikawa.chiba.jp",
      "ichinomiya.chiba.jp",
      "inzai.chiba.jp",
      "isumi.chiba.jp",
      "kamagaya.chiba.jp",
      "kamogawa.chiba.jp",
      "kashiwa.chiba.jp",
      "katori.chiba.jp",
      "katsuura.chiba.jp",
      "kimitsu.chiba.jp",
      "kisarazu.chiba.jp",
      "kozaki.chiba.jp",
      "kujukuri.chiba.jp",
      "kyonan.chiba.jp",
      "matsudo.chiba.jp",
      "midori.chiba.jp",
      "mihama.chiba.jp",
      "minamiboso.chiba.jp",
      "mobara.chiba.jp",
      "mutsuzawa.chiba.jp",
      "nagara.chiba.jp",
      "nagareyama.chiba.jp",
      "narashino.chiba.jp",
      "narita.chiba.jp",
      "noda.chiba.jp",
      "oamishirasato.chiba.jp",
      "omigawa.chiba.jp",
      "onjuku.chiba.jp",
      "otaki.chiba.jp",
      "sakae.chiba.jp",
      "sakura.chiba.jp",
      "shimofusa.chiba.jp",
      "shirako.chiba.jp",
      "shiroi.chiba.jp",
      "shisui.chiba.jp",
      "sodegaura.chiba.jp",
      "sosa.chiba.jp",
      "tako.chiba.jp",
      "tateyama.chiba.jp",
      "togane.chiba.jp",
      "tohnosho.chiba.jp",
      "tomisato.chiba.jp",
      "urayasu.chiba.jp",
      "yachimata.chiba.jp",
      "yachiyo.chiba.jp",
      "yokaichiba.chiba.jp",
      "yokoshibahikari.chiba.jp",
      "yotsukaido.chiba.jp",
      "ainan.ehime.jp",
      "honai.ehime.jp",
      "ikata.ehime.jp",
      "imabari.ehime.jp",
      "iyo.ehime.jp",
      "kamijima.ehime.jp",
      "kihoku.ehime.jp",
      "kumakogen.ehime.jp",
      "masaki.ehime.jp",
      "matsuno.ehime.jp",
      "matsuyama.ehime.jp",
      "namikata.ehime.jp",
      "niihama.ehime.jp",
      "ozu.ehime.jp",
      "saijo.ehime.jp",
      "seiyo.ehime.jp",
      "shikokuchuo.ehime.jp",
      "tobe.ehime.jp",
      "toon.ehime.jp",
      "uchiko.ehime.jp",
      "uwajima.ehime.jp",
      "yawatahama.ehime.jp",
      "echizen.fukui.jp",
      "eiheiji.fukui.jp",
      "fukui.fukui.jp",
      "ikeda.fukui.jp",
      "katsuyama.fukui.jp",
      "mihama.fukui.jp",
      "minamiechizen.fukui.jp",
      "obama.fukui.jp",
      "ohi.fukui.jp",
      "ono.fukui.jp",
      "sabae.fukui.jp",
      "sakai.fukui.jp",
      "takahama.fukui.jp",
      "tsuruga.fukui.jp",
      "wakasa.fukui.jp",
      "ashiya.fukuoka.jp",
      "buzen.fukuoka.jp",
      "chikugo.fukuoka.jp",
      "chikuho.fukuoka.jp",
      "chikujo.fukuoka.jp",
      "chikushino.fukuoka.jp",
      "chikuzen.fukuoka.jp",
      "chuo.fukuoka.jp",
      "dazaifu.fukuoka.jp",
      "fukuchi.fukuoka.jp",
      "hakata.fukuoka.jp",
      "higashi.fukuoka.jp",
      "hirokawa.fukuoka.jp",
      "hisayama.fukuoka.jp",
      "iizuka.fukuoka.jp",
      "inatsuki.fukuoka.jp",
      "kaho.fukuoka.jp",
      "kasuga.fukuoka.jp",
      "kasuya.fukuoka.jp",
      "kawara.fukuoka.jp",
      "keisen.fukuoka.jp",
      "koga.fukuoka.jp",
      "kurate.fukuoka.jp",
      "kurogi.fukuoka.jp",
      "kurume.fukuoka.jp",
      "minami.fukuoka.jp",
      "miyako.fukuoka.jp",
      "miyama.fukuoka.jp",
      "miyawaka.fukuoka.jp",
      "mizumaki.fukuoka.jp",
      "munakata.fukuoka.jp",
      "nakagawa.fukuoka.jp",
      "nakama.fukuoka.jp",
      "nishi.fukuoka.jp",
      "nogata.fukuoka.jp",
      "ogori.fukuoka.jp",
      "okagaki.fukuoka.jp",
      "okawa.fukuoka.jp",
      "oki.fukuoka.jp",
      "omuta.fukuoka.jp",
      "onga.fukuoka.jp",
      "onojo.fukuoka.jp",
      "oto.fukuoka.jp",
      "saigawa.fukuoka.jp",
      "sasaguri.fukuoka.jp",
      "shingu.fukuoka.jp",
      "shinyoshitomi.fukuoka.jp",
      "shonai.fukuoka.jp",
      "soeda.fukuoka.jp",
      "sue.fukuoka.jp",
      "tachiarai.fukuoka.jp",
      "tagawa.fukuoka.jp",
      "takata.fukuoka.jp",
      "toho.fukuoka.jp",
      "toyotsu.fukuoka.jp",
      "tsuiki.fukuoka.jp",
      "ukiha.fukuoka.jp",
      "umi.fukuoka.jp",
      "usui.fukuoka.jp",
      "yamada.fukuoka.jp",
      "yame.fukuoka.jp",
      "yanagawa.fukuoka.jp",
      "yukuhashi.fukuoka.jp",
      "aizubange.fukushima.jp",
      "aizumisato.fukushima.jp",
      "aizuwakamatsu.fukushima.jp",
      "asakawa.fukushima.jp",
      "bandai.fukushima.jp",
      "date.fukushima.jp",
      "fukushima.fukushima.jp",
      "furudono.fukushima.jp",
      "futaba.fukushima.jp",
      "hanawa.fukushima.jp",
      "higashi.fukushima.jp",
      "hirata.fukushima.jp",
      "hirono.fukushima.jp",
      "iitate.fukushima.jp",
      "inawashiro.fukushima.jp",
      "ishikawa.fukushima.jp",
      "iwaki.fukushima.jp",
      "izumizaki.fukushima.jp",
      "kagamiishi.fukushima.jp",
      "kaneyama.fukushima.jp",
      "kawamata.fukushima.jp",
      "kitakata.fukushima.jp",
      "kitashiobara.fukushima.jp",
      "koori.fukushima.jp",
      "koriyama.fukushima.jp",
      "kunimi.fukushima.jp",
      "miharu.fukushima.jp",
      "mishima.fukushima.jp",
      "namie.fukushima.jp",
      "nango.fukushima.jp",
      "nishiaizu.fukushima.jp",
      "nishigo.fukushima.jp",
      "okuma.fukushima.jp",
      "omotego.fukushima.jp",
      "ono.fukushima.jp",
      "otama.fukushima.jp",
      "samegawa.fukushima.jp",
      "shimogo.fukushima.jp",
      "shirakawa.fukushima.jp",
      "showa.fukushima.jp",
      "soma.fukushima.jp",
      "sukagawa.fukushima.jp",
      "taishin.fukushima.jp",
      "tamakawa.fukushima.jp",
      "tanagura.fukushima.jp",
      "tenei.fukushima.jp",
      "yabuki.fukushima.jp",
      "yamato.fukushima.jp",
      "yamatsuri.fukushima.jp",
      "yanaizu.fukushima.jp",
      "yugawa.fukushima.jp",
      "anpachi.gifu.jp",
      "ena.gifu.jp",
      "gifu.gifu.jp",
      "ginan.gifu.jp",
      "godo.gifu.jp",
      "gujo.gifu.jp",
      "hashima.gifu.jp",
      "hichiso.gifu.jp",
      "hida.gifu.jp",
      "higashishirakawa.gifu.jp",
      "ibigawa.gifu.jp",
      "ikeda.gifu.jp",
      "kakamigahara.gifu.jp",
      "kani.gifu.jp",
      "kasahara.gifu.jp",
      "kasamatsu.gifu.jp",
      "kawaue.gifu.jp",
      "kitagata.gifu.jp",
      "mino.gifu.jp",
      "minokamo.gifu.jp",
      "mitake.gifu.jp",
      "mizunami.gifu.jp",
      "motosu.gifu.jp",
      "nakatsugawa.gifu.jp",
      "ogaki.gifu.jp",
      "sakahogi.gifu.jp",
      "seki.gifu.jp",
      "sekigahara.gifu.jp",
      "shirakawa.gifu.jp",
      "tajimi.gifu.jp",
      "takayama.gifu.jp",
      "tarui.gifu.jp",
      "toki.gifu.jp",
      "tomika.gifu.jp",
      "wanouchi.gifu.jp",
      "yamagata.gifu.jp",
      "yaotsu.gifu.jp",
      "yoro.gifu.jp",
      "annaka.gunma.jp",
      "chiyoda.gunma.jp",
      "fujioka.gunma.jp",
      "higashiagatsuma.gunma.jp",
      "isesaki.gunma.jp",
      "itakura.gunma.jp",
      "kanna.gunma.jp",
      "kanra.gunma.jp",
      "katashina.gunma.jp",
      "kawaba.gunma.jp",
      "kiryu.gunma.jp",
      "kusatsu.gunma.jp",
      "maebashi.gunma.jp",
      "meiwa.gunma.jp",
      "midori.gunma.jp",
      "minakami.gunma.jp",
      "naganohara.gunma.jp",
      "nakanojo.gunma.jp",
      "nanmoku.gunma.jp",
      "numata.gunma.jp",
      "oizumi.gunma.jp",
      "ora.gunma.jp",
      "ota.gunma.jp",
      "shibukawa.gunma.jp",
      "shimonita.gunma.jp",
      "shinto.gunma.jp",
      "showa.gunma.jp",
      "takasaki.gunma.jp",
      "takayama.gunma.jp",
      "tamamura.gunma.jp",
      "tatebayashi.gunma.jp",
      "tomioka.gunma.jp",
      "tsukiyono.gunma.jp",
      "tsumagoi.gunma.jp",
      "ueno.gunma.jp",
      "yoshioka.gunma.jp",
      "asaminami.hiroshima.jp",
      "daiwa.hiroshima.jp",
      "etajima.hiroshima.jp",
      "fuchu.hiroshima.jp",
      "fukuyama.hiroshima.jp",
      "hatsukaichi.hiroshima.jp",
      "higashihiroshima.hiroshima.jp",
      "hongo.hiroshima.jp",
      "jinsekikogen.hiroshima.jp",
      "kaita.hiroshima.jp",
      "kui.hiroshima.jp",
      "kumano.hiroshima.jp",
      "kure.hiroshima.jp",
      "mihara.hiroshima.jp",
      "miyoshi.hiroshima.jp",
      "naka.hiroshima.jp",
      "onomichi.hiroshima.jp",
      "osakikamijima.hiroshima.jp",
      "otake.hiroshima.jp",
      "saka.hiroshima.jp",
      "sera.hiroshima.jp",
      "seranishi.hiroshima.jp",
      "shinichi.hiroshima.jp",
      "shobara.hiroshima.jp",
      "takehara.hiroshima.jp",
      "abashiri.hokkaido.jp",
      "abira.hokkaido.jp",
      "aibetsu.hokkaido.jp",
      "akabira.hokkaido.jp",
      "akkeshi.hokkaido.jp",
      "asahikawa.hokkaido.jp",
      "ashibetsu.hokkaido.jp",
      "ashoro.hokkaido.jp",
      "assabu.hokkaido.jp",
      "atsuma.hokkaido.jp",
      "bibai.hokkaido.jp",
      "biei.hokkaido.jp",
      "bifuka.hokkaido.jp",
      "bihoro.hokkaido.jp",
      "biratori.hokkaido.jp",
      "chippubetsu.hokkaido.jp",
      "chitose.hokkaido.jp",
      "date.hokkaido.jp",
      "ebetsu.hokkaido.jp",
      "embetsu.hokkaido.jp",
      "eniwa.hokkaido.jp",
      "erimo.hokkaido.jp",
      "esan.hokkaido.jp",
      "esashi.hokkaido.jp",
      "fukagawa.hokkaido.jp",
      "fukushima.hokkaido.jp",
      "furano.hokkaido.jp",
      "furubira.hokkaido.jp",
      "haboro.hokkaido.jp",
      "hakodate.hokkaido.jp",
      "hamatonbetsu.hokkaido.jp",
      "hidaka.hokkaido.jp",
      "higashikagura.hokkaido.jp",
      "higashikawa.hokkaido.jp",
      "hiroo.hokkaido.jp",
      "hokuryu.hokkaido.jp",
      "hokuto.hokkaido.jp",
      "honbetsu.hokkaido.jp",
      "horokanai.hokkaido.jp",
      "horonobe.hokkaido.jp",
      "ikeda.hokkaido.jp",
      "imakane.hokkaido.jp",
      "ishikari.hokkaido.jp",
      "iwamizawa.hokkaido.jp",
      "iwanai.hokkaido.jp",
      "kamifurano.hokkaido.jp",
      "kamikawa.hokkaido.jp",
      "kamishihoro.hokkaido.jp",
      "kamisunagawa.hokkaido.jp",
      "kamoenai.hokkaido.jp",
      "kayabe.hokkaido.jp",
      "kembuchi.hokkaido.jp",
      "kikonai.hokkaido.jp",
      "kimobetsu.hokkaido.jp",
      "kitahiroshima.hokkaido.jp",
      "kitami.hokkaido.jp",
      "kiyosato.hokkaido.jp",
      "koshimizu.hokkaido.jp",
      "kunneppu.hokkaido.jp",
      "kuriyama.hokkaido.jp",
      "kuromatsunai.hokkaido.jp",
      "kushiro.hokkaido.jp",
      "kutchan.hokkaido.jp",
      "kyowa.hokkaido.jp",
      "mashike.hokkaido.jp",
      "matsumae.hokkaido.jp",
      "mikasa.hokkaido.jp",
      "minamifurano.hokkaido.jp",
      "mombetsu.hokkaido.jp",
      "moseushi.hokkaido.jp",
      "mukawa.hokkaido.jp",
      "muroran.hokkaido.jp",
      "naie.hokkaido.jp",
      "nakagawa.hokkaido.jp",
      "nakasatsunai.hokkaido.jp",
      "nakatombetsu.hokkaido.jp",
      "nanae.hokkaido.jp",
      "nanporo.hokkaido.jp",
      "nayoro.hokkaido.jp",
      "nemuro.hokkaido.jp",
      "niikappu.hokkaido.jp",
      "niki.hokkaido.jp",
      "nishiokoppe.hokkaido.jp",
      "noboribetsu.hokkaido.jp",
      "numata.hokkaido.jp",
      "obihiro.hokkaido.jp",
      "obira.hokkaido.jp",
      "oketo.hokkaido.jp",
      "okoppe.hokkaido.jp",
      "otaru.hokkaido.jp",
      "otobe.hokkaido.jp",
      "otofuke.hokkaido.jp",
      "otoineppu.hokkaido.jp",
      "oumu.hokkaido.jp",
      "ozora.hokkaido.jp",
      "pippu.hokkaido.jp",
      "rankoshi.hokkaido.jp",
      "rebun.hokkaido.jp",
      "rikubetsu.hokkaido.jp",
      "rishiri.hokkaido.jp",
      "rishirifuji.hokkaido.jp",
      "saroma.hokkaido.jp",
      "sarufutsu.hokkaido.jp",
      "shakotan.hokkaido.jp",
      "shari.hokkaido.jp",
      "shibecha.hokkaido.jp",
      "shibetsu.hokkaido.jp",
      "shikabe.hokkaido.jp",
      "shikaoi.hokkaido.jp",
      "shimamaki.hokkaido.jp",
      "shimizu.hokkaido.jp",
      "shimokawa.hokkaido.jp",
      "shinshinotsu.hokkaido.jp",
      "shintoku.hokkaido.jp",
      "shiranuka.hokkaido.jp",
      "shiraoi.hokkaido.jp",
      "shiriuchi.hokkaido.jp",
      "sobetsu.hokkaido.jp",
      "sunagawa.hokkaido.jp",
      "taiki.hokkaido.jp",
      "takasu.hokkaido.jp",
      "takikawa.hokkaido.jp",
      "takinoue.hokkaido.jp",
      "teshikaga.hokkaido.jp",
      "tobetsu.hokkaido.jp",
      "tohma.hokkaido.jp",
      "tomakomai.hokkaido.jp",
      "tomari.hokkaido.jp",
      "toya.hokkaido.jp",
      "toyako.hokkaido.jp",
      "toyotomi.hokkaido.jp",
      "toyoura.hokkaido.jp",
      "tsubetsu.hokkaido.jp",
      "tsukigata.hokkaido.jp",
      "urakawa.hokkaido.jp",
      "urausu.hokkaido.jp",
      "uryu.hokkaido.jp",
      "utashinai.hokkaido.jp",
      "wakkanai.hokkaido.jp",
      "wassamu.hokkaido.jp",
      "yakumo.hokkaido.jp",
      "yoichi.hokkaido.jp",
      "aioi.hyogo.jp",
      "akashi.hyogo.jp",
      "ako.hyogo.jp",
      "amagasaki.hyogo.jp",
      "aogaki.hyogo.jp",
      "asago.hyogo.jp",
      "ashiya.hyogo.jp",
      "awaji.hyogo.jp",
      "fukusaki.hyogo.jp",
      "goshiki.hyogo.jp",
      "harima.hyogo.jp",
      "himeji.hyogo.jp",
      "ichikawa.hyogo.jp",
      "inagawa.hyogo.jp",
      "itami.hyogo.jp",
      "kakogawa.hyogo.jp",
      "kamigori.hyogo.jp",
      "kamikawa.hyogo.jp",
      "kasai.hyogo.jp",
      "kasuga.hyogo.jp",
      "kawanishi.hyogo.jp",
      "miki.hyogo.jp",
      "minamiawaji.hyogo.jp",
      "nishinomiya.hyogo.jp",
      "nishiwaki.hyogo.jp",
      "ono.hyogo.jp",
      "sanda.hyogo.jp",
      "sannan.hyogo.jp",
      "sasayama.hyogo.jp",
      "sayo.hyogo.jp",
      "shingu.hyogo.jp",
      "shinonsen.hyogo.jp",
      "shiso.hyogo.jp",
      "sumoto.hyogo.jp",
      "taishi.hyogo.jp",
      "taka.hyogo.jp",
      "takarazuka.hyogo.jp",
      "takasago.hyogo.jp",
      "takino.hyogo.jp",
      "tamba.hyogo.jp",
      "tatsuno.hyogo.jp",
      "toyooka.hyogo.jp",
      "yabu.hyogo.jp",
      "yashiro.hyogo.jp",
      "yoka.hyogo.jp",
      "yokawa.hyogo.jp",
      "ami.ibaraki.jp",
      "asahi.ibaraki.jp",
      "bando.ibaraki.jp",
      "chikusei.ibaraki.jp",
      "daigo.ibaraki.jp",
      "fujishiro.ibaraki.jp",
      "hitachi.ibaraki.jp",
      "hitachinaka.ibaraki.jp",
      "hitachiomiya.ibaraki.jp",
      "hitachiota.ibaraki.jp",
      "ibaraki.ibaraki.jp",
      "ina.ibaraki.jp",
      "inashiki.ibaraki.jp",
      "itako.ibaraki.jp",
      "iwama.ibaraki.jp",
      "joso.ibaraki.jp",
      "kamisu.ibaraki.jp",
      "kasama.ibaraki.jp",
      "kashima.ibaraki.jp",
      "kasumigaura.ibaraki.jp",
      "koga.ibaraki.jp",
      "miho.ibaraki.jp",
      "mito.ibaraki.jp",
      "moriya.ibaraki.jp",
      "naka.ibaraki.jp",
      "namegata.ibaraki.jp",
      "oarai.ibaraki.jp",
      "ogawa.ibaraki.jp",
      "omitama.ibaraki.jp",
      "ryugasaki.ibaraki.jp",
      "sakai.ibaraki.jp",
      "sakuragawa.ibaraki.jp",
      "shimodate.ibaraki.jp",
      "shimotsuma.ibaraki.jp",
      "shirosato.ibaraki.jp",
      "sowa.ibaraki.jp",
      "suifu.ibaraki.jp",
      "takahagi.ibaraki.jp",
      "tamatsukuri.ibaraki.jp",
      "tokai.ibaraki.jp",
      "tomobe.ibaraki.jp",
      "tone.ibaraki.jp",
      "toride.ibaraki.jp",
      "tsuchiura.ibaraki.jp",
      "tsukuba.ibaraki.jp",
      "uchihara.ibaraki.jp",
      "ushiku.ibaraki.jp",
      "yachiyo.ibaraki.jp",
      "yamagata.ibaraki.jp",
      "yawara.ibaraki.jp",
      "yuki.ibaraki.jp",
      "anamizu.ishikawa.jp",
      "hakui.ishikawa.jp",
      "hakusan.ishikawa.jp",
      "kaga.ishikawa.jp",
      "kahoku.ishikawa.jp",
      "kanazawa.ishikawa.jp",
      "kawakita.ishikawa.jp",
      "komatsu.ishikawa.jp",
      "nakanoto.ishikawa.jp",
      "nanao.ishikawa.jp",
      "nomi.ishikawa.jp",
      "nonoichi.ishikawa.jp",
      "noto.ishikawa.jp",
      "shika.ishikawa.jp",
      "suzu.ishikawa.jp",
      "tsubata.ishikawa.jp",
      "tsurugi.ishikawa.jp",
      "uchinada.ishikawa.jp",
      "wajima.ishikawa.jp",
      "fudai.iwate.jp",
      "fujisawa.iwate.jp",
      "hanamaki.iwate.jp",
      "hiraizumi.iwate.jp",
      "hirono.iwate.jp",
      "ichinohe.iwate.jp",
      "ichinoseki.iwate.jp",
      "iwaizumi.iwate.jp",
      "iwate.iwate.jp",
      "joboji.iwate.jp",
      "kamaishi.iwate.jp",
      "kanegasaki.iwate.jp",
      "karumai.iwate.jp",
      "kawai.iwate.jp",
      "kitakami.iwate.jp",
      "kuji.iwate.jp",
      "kunohe.iwate.jp",
      "kuzumaki.iwate.jp",
      "miyako.iwate.jp",
      "mizusawa.iwate.jp",
      "morioka.iwate.jp",
      "ninohe.iwate.jp",
      "noda.iwate.jp",
      "ofunato.iwate.jp",
      "oshu.iwate.jp",
      "otsuchi.iwate.jp",
      "rikuzentakata.iwate.jp",
      "shiwa.iwate.jp",
      "shizukuishi.iwate.jp",
      "sumita.iwate.jp",
      "tanohata.iwate.jp",
      "tono.iwate.jp",
      "yahaba.iwate.jp",
      "yamada.iwate.jp",
      "ayagawa.kagawa.jp",
      "higashikagawa.kagawa.jp",
      "kanonji.kagawa.jp",
      "kotohira.kagawa.jp",
      "manno.kagawa.jp",
      "marugame.kagawa.jp",
      "mitoyo.kagawa.jp",
      "naoshima.kagawa.jp",
      "sanuki.kagawa.jp",
      "tadotsu.kagawa.jp",
      "takamatsu.kagawa.jp",
      "tonosho.kagawa.jp",
      "uchinomi.kagawa.jp",
      "utazu.kagawa.jp",
      "zentsuji.kagawa.jp",
      "akune.kagoshima.jp",
      "amami.kagoshima.jp",
      "hioki.kagoshima.jp",
      "isa.kagoshima.jp",
      "isen.kagoshima.jp",
      "izumi.kagoshima.jp",
      "kagoshima.kagoshima.jp",
      "kanoya.kagoshima.jp",
      "kawanabe.kagoshima.jp",
      "kinko.kagoshima.jp",
      "kouyama.kagoshima.jp",
      "makurazaki.kagoshima.jp",
      "matsumoto.kagoshima.jp",
      "minamitane.kagoshima.jp",
      "nakatane.kagoshima.jp",
      "nishinoomote.kagoshima.jp",
      "satsumasendai.kagoshima.jp",
      "soo.kagoshima.jp",
      "tarumizu.kagoshima.jp",
      "yusui.kagoshima.jp",
      "aikawa.kanagawa.jp",
      "atsugi.kanagawa.jp",
      "ayase.kanagawa.jp",
      "chigasaki.kanagawa.jp",
      "ebina.kanagawa.jp",
      "fujisawa.kanagawa.jp",
      "hadano.kanagawa.jp",
      "hakone.kanagawa.jp",
      "hiratsuka.kanagawa.jp",
      "isehara.kanagawa.jp",
      "kaisei.kanagawa.jp",
      "kamakura.kanagawa.jp",
      "kiyokawa.kanagawa.jp",
      "matsuda.kanagawa.jp",
      "minamiashigara.kanagawa.jp",
      "miura.kanagawa.jp",
      "nakai.kanagawa.jp",
      "ninomiya.kanagawa.jp",
      "odawara.kanagawa.jp",
      "oi.kanagawa.jp",
      "oiso.kanagawa.jp",
      "sagamihara.kanagawa.jp",
      "samukawa.kanagawa.jp",
      "tsukui.kanagawa.jp",
      "yamakita.kanagawa.jp",
      "yamato.kanagawa.jp",
      "yokosuka.kanagawa.jp",
      "yugawara.kanagawa.jp",
      "zama.kanagawa.jp",
      "zushi.kanagawa.jp",
      "aki.kochi.jp",
      "geisei.kochi.jp",
      "hidaka.kochi.jp",
      "higashitsuno.kochi.jp",
      "ino.kochi.jp",
      "kagami.kochi.jp",
      "kami.kochi.jp",
      "kitagawa.kochi.jp",
      "kochi.kochi.jp",
      "mihara.kochi.jp",
      "motoyama.kochi.jp",
      "muroto.kochi.jp",
      "nahari.kochi.jp",
      "nakamura.kochi.jp",
      "nankoku.kochi.jp",
      "nishitosa.kochi.jp",
      "niyodogawa.kochi.jp",
      "ochi.kochi.jp",
      "okawa.kochi.jp",
      "otoyo.kochi.jp",
      "otsuki.kochi.jp",
      "sakawa.kochi.jp",
      "sukumo.kochi.jp",
      "susaki.kochi.jp",
      "tosa.kochi.jp",
      "tosashimizu.kochi.jp",
      "toyo.kochi.jp",
      "tsuno.kochi.jp",
      "umaji.kochi.jp",
      "yasuda.kochi.jp",
      "yusuhara.kochi.jp",
      "amakusa.kumamoto.jp",
      "arao.kumamoto.jp",
      "aso.kumamoto.jp",
      "choyo.kumamoto.jp",
      "gyokuto.kumamoto.jp",
      "kamiamakusa.kumamoto.jp",
      "kikuchi.kumamoto.jp",
      "kumamoto.kumamoto.jp",
      "mashiki.kumamoto.jp",
      "mifune.kumamoto.jp",
      "minamata.kumamoto.jp",
      "minamioguni.kumamoto.jp",
      "nagasu.kumamoto.jp",
      "nishihara.kumamoto.jp",
      "oguni.kumamoto.jp",
      "ozu.kumamoto.jp",
      "sumoto.kumamoto.jp",
      "takamori.kumamoto.jp",
      "uki.kumamoto.jp",
      "uto.kumamoto.jp",
      "yamaga.kumamoto.jp",
      "yamato.kumamoto.jp",
      "yatsushiro.kumamoto.jp",
      "ayabe.kyoto.jp",
      "fukuchiyama.kyoto.jp",
      "higashiyama.kyoto.jp",
      "ide.kyoto.jp",
      "ine.kyoto.jp",
      "joyo.kyoto.jp",
      "kameoka.kyoto.jp",
      "kamo.kyoto.jp",
      "kita.kyoto.jp",
      "kizu.kyoto.jp",
      "kumiyama.kyoto.jp",
      "kyotamba.kyoto.jp",
      "kyotanabe.kyoto.jp",
      "kyotango.kyoto.jp",
      "maizuru.kyoto.jp",
      "minami.kyoto.jp",
      "minamiyamashiro.kyoto.jp",
      "miyazu.kyoto.jp",
      "muko.kyoto.jp",
      "nagaokakyo.kyoto.jp",
      "nakagyo.kyoto.jp",
      "nantan.kyoto.jp",
      "oyamazaki.kyoto.jp",
      "sakyo.kyoto.jp",
      "seika.kyoto.jp",
      "tanabe.kyoto.jp",
      "uji.kyoto.jp",
      "ujitawara.kyoto.jp",
      "wazuka.kyoto.jp",
      "yamashina.kyoto.jp",
      "yawata.kyoto.jp",
      "asahi.mie.jp",
      "inabe.mie.jp",
      "ise.mie.jp",
      "kameyama.mie.jp",
      "kawagoe.mie.jp",
      "kiho.mie.jp",
      "kisosaki.mie.jp",
      "kiwa.mie.jp",
      "komono.mie.jp",
      "kumano.mie.jp",
      "kuwana.mie.jp",
      "matsusaka.mie.jp",
      "meiwa.mie.jp",
      "mihama.mie.jp",
      "minamiise.mie.jp",
      "misugi.mie.jp",
      "miyama.mie.jp",
      "nabari.mie.jp",
      "shima.mie.jp",
      "suzuka.mie.jp",
      "tado.mie.jp",
      "taiki.mie.jp",
      "taki.mie.jp",
      "tamaki.mie.jp",
      "toba.mie.jp",
      "tsu.mie.jp",
      "udono.mie.jp",
      "ureshino.mie.jp",
      "watarai.mie.jp",
      "yokkaichi.mie.jp",
      "furukawa.miyagi.jp",
      "higashimatsushima.miyagi.jp",
      "ishinomaki.miyagi.jp",
      "iwanuma.miyagi.jp",
      "kakuda.miyagi.jp",
      "kami.miyagi.jp",
      "kawasaki.miyagi.jp",
      "marumori.miyagi.jp",
      "matsushima.miyagi.jp",
      "minamisanriku.miyagi.jp",
      "misato.miyagi.jp",
      "murata.miyagi.jp",
      "natori.miyagi.jp",
      "ogawara.miyagi.jp",
      "ohira.miyagi.jp",
      "onagawa.miyagi.jp",
      "osaki.miyagi.jp",
      "rifu.miyagi.jp",
      "semine.miyagi.jp",
      "shibata.miyagi.jp",
      "shichikashuku.miyagi.jp",
      "shikama.miyagi.jp",
      "shiogama.miyagi.jp",
      "shiroishi.miyagi.jp",
      "tagajo.miyagi.jp",
      "taiwa.miyagi.jp",
      "tome.miyagi.jp",
      "tomiya.miyagi.jp",
      "wakuya.miyagi.jp",
      "watari.miyagi.jp",
      "yamamoto.miyagi.jp",
      "zao.miyagi.jp",
      "aya.miyazaki.jp",
      "ebino.miyazaki.jp",
      "gokase.miyazaki.jp",
      "hyuga.miyazaki.jp",
      "kadogawa.miyazaki.jp",
      "kawaminami.miyazaki.jp",
      "kijo.miyazaki.jp",
      "kitagawa.miyazaki.jp",
      "kitakata.miyazaki.jp",
      "kitaura.miyazaki.jp",
      "kobayashi.miyazaki.jp",
      "kunitomi.miyazaki.jp",
      "kushima.miyazaki.jp",
      "mimata.miyazaki.jp",
      "miyakonojo.miyazaki.jp",
      "miyazaki.miyazaki.jp",
      "morotsuka.miyazaki.jp",
      "nichinan.miyazaki.jp",
      "nishimera.miyazaki.jp",
      "nobeoka.miyazaki.jp",
      "saito.miyazaki.jp",
      "shiiba.miyazaki.jp",
      "shintomi.miyazaki.jp",
      "takaharu.miyazaki.jp",
      "takanabe.miyazaki.jp",
      "takazaki.miyazaki.jp",
      "tsuno.miyazaki.jp",
      "achi.nagano.jp",
      "agematsu.nagano.jp",
      "anan.nagano.jp",
      "aoki.nagano.jp",
      "asahi.nagano.jp",
      "azumino.nagano.jp",
      "chikuhoku.nagano.jp",
      "chikuma.nagano.jp",
      "chino.nagano.jp",
      "fujimi.nagano.jp",
      "hakuba.nagano.jp",
      "hara.nagano.jp",
      "hiraya.nagano.jp",
      "iida.nagano.jp",
      "iijima.nagano.jp",
      "iiyama.nagano.jp",
      "iizuna.nagano.jp",
      "ikeda.nagano.jp",
      "ikusaka.nagano.jp",
      "ina.nagano.jp",
      "karuizawa.nagano.jp",
      "kawakami.nagano.jp",
      "kiso.nagano.jp",
      "kisofukushima.nagano.jp",
      "kitaaiki.nagano.jp",
      "komagane.nagano.jp",
      "komoro.nagano.jp",
      "matsukawa.nagano.jp",
      "matsumoto.nagano.jp",
      "miasa.nagano.jp",
      "minamiaiki.nagano.jp",
      "minamimaki.nagano.jp",
      "minamiminowa.nagano.jp",
      "minowa.nagano.jp",
      "miyada.nagano.jp",
      "miyota.nagano.jp",
      "mochizuki.nagano.jp",
      "nagano.nagano.jp",
      "nagawa.nagano.jp",
      "nagiso.nagano.jp",
      "nakagawa.nagano.jp",
      "nakano.nagano.jp",
      "nozawaonsen.nagano.jp",
      "obuse.nagano.jp",
      "ogawa.nagano.jp",
      "okaya.nagano.jp",
      "omachi.nagano.jp",
      "omi.nagano.jp",
      "ookuwa.nagano.jp",
      "ooshika.nagano.jp",
      "otaki.nagano.jp",
      "otari.nagano.jp",
      "sakae.nagano.jp",
      "sakaki.nagano.jp",
      "saku.nagano.jp",
      "sakuho.nagano.jp",
      "shimosuwa.nagano.jp",
      "shinanomachi.nagano.jp",
      "shiojiri.nagano.jp",
      "suwa.nagano.jp",
      "suzaka.nagano.jp",
      "takagi.nagano.jp",
      "takamori.nagano.jp",
      "takayama.nagano.jp",
      "tateshina.nagano.jp",
      "tatsuno.nagano.jp",
      "togakushi.nagano.jp",
      "togura.nagano.jp",
      "tomi.nagano.jp",
      "ueda.nagano.jp",
      "wada.nagano.jp",
      "yamagata.nagano.jp",
      "yamanouchi.nagano.jp",
      "yasaka.nagano.jp",
      "yasuoka.nagano.jp",
      "chijiwa.nagasaki.jp",
      "futsu.nagasaki.jp",
      "goto.nagasaki.jp",
      "hasami.nagasaki.jp",
      "hirado.nagasaki.jp",
      "iki.nagasaki.jp",
      "isahaya.nagasaki.jp",
      "kawatana.nagasaki.jp",
      "kuchinotsu.nagasaki.jp",
      "matsuura.nagasaki.jp",
      "nagasaki.nagasaki.jp",
      "obama.nagasaki.jp",
      "omura.nagasaki.jp",
      "oseto.nagasaki.jp",
      "saikai.nagasaki.jp",
      "sasebo.nagasaki.jp",
      "seihi.nagasaki.jp",
      "shimabara.nagasaki.jp",
      "shinkamigoto.nagasaki.jp",
      "togitsu.nagasaki.jp",
      "tsushima.nagasaki.jp",
      "unzen.nagasaki.jp",
      "ando.nara.jp",
      "gose.nara.jp",
      "heguri.nara.jp",
      "higashiyoshino.nara.jp",
      "ikaruga.nara.jp",
      "ikoma.nara.jp",
      "kamikitayama.nara.jp",
      "kanmaki.nara.jp",
      "kashiba.nara.jp",
      "kashihara.nara.jp",
      "katsuragi.nara.jp",
      "kawai.nara.jp",
      "kawakami.nara.jp",
      "kawanishi.nara.jp",
      "koryo.nara.jp",
      "kurotaki.nara.jp",
      "mitsue.nara.jp",
      "miyake.nara.jp",
      "nara.nara.jp",
      "nosegawa.nara.jp",
      "oji.nara.jp",
      "ouda.nara.jp",
      "oyodo.nara.jp",
      "sakurai.nara.jp",
      "sango.nara.jp",
      "shimoichi.nara.jp",
      "shimokitayama.nara.jp",
      "shinjo.nara.jp",
      "soni.nara.jp",
      "takatori.nara.jp",
      "tawaramoto.nara.jp",
      "tenkawa.nara.jp",
      "tenri.nara.jp",
      "uda.nara.jp",
      "yamatokoriyama.nara.jp",
      "yamatotakada.nara.jp",
      "yamazoe.nara.jp",
      "yoshino.nara.jp",
      "aga.niigata.jp",
      "agano.niigata.jp",
      "gosen.niigata.jp",
      "itoigawa.niigata.jp",
      "izumozaki.niigata.jp",
      "joetsu.niigata.jp",
      "kamo.niigata.jp",
      "kariwa.niigata.jp",
      "kashiwazaki.niigata.jp",
      "minamiuonuma.niigata.jp",
      "mitsuke.niigata.jp",
      "muika.niigata.jp",
      "murakami.niigata.jp",
      "myoko.niigata.jp",
      "nagaoka.niigata.jp",
      "niigata.niigata.jp",
      "ojiya.niigata.jp",
      "omi.niigata.jp",
      "sado.niigata.jp",
      "sanjo.niigata.jp",
      "seiro.niigata.jp",
      "seirou.niigata.jp",
      "sekikawa.niigata.jp",
      "shibata.niigata.jp",
      "tagami.niigata.jp",
      "tainai.niigata.jp",
      "tochio.niigata.jp",
      "tokamachi.niigata.jp",
      "tsubame.niigata.jp",
      "tsunan.niigata.jp",
      "uonuma.niigata.jp",
      "yahiko.niigata.jp",
      "yoita.niigata.jp",
      "yuzawa.niigata.jp",
      "beppu.oita.jp",
      "bungoono.oita.jp",
      "bungotakada.oita.jp",
      "hasama.oita.jp",
      "hiji.oita.jp",
      "himeshima.oita.jp",
      "hita.oita.jp",
      "kamitsue.oita.jp",
      "kokonoe.oita.jp",
      "kuju.oita.jp",
      "kunisaki.oita.jp",
      "kusu.oita.jp",
      "oita.oita.jp",
      "saiki.oita.jp",
      "taketa.oita.jp",
      "tsukumi.oita.jp",
      "usa.oita.jp",
      "usuki.oita.jp",
      "yufu.oita.jp",
      "akaiwa.okayama.jp",
      "asakuchi.okayama.jp",
      "bizen.okayama.jp",
      "hayashima.okayama.jp",
      "ibara.okayama.jp",
      "kagamino.okayama.jp",
      "kasaoka.okayama.jp",
      "kibichuo.okayama.jp",
      "kumenan.okayama.jp",
      "kurashiki.okayama.jp",
      "maniwa.okayama.jp",
      "misaki.okayama.jp",
      "nagi.okayama.jp",
      "niimi.okayama.jp",
      "nishiawakura.okayama.jp",
      "okayama.okayama.jp",
      "satosho.okayama.jp",
      "setouchi.okayama.jp",
      "shinjo.okayama.jp",
      "shoo.okayama.jp",
      "soja.okayama.jp",
      "takahashi.okayama.jp",
      "tamano.okayama.jp",
      "tsuyama.okayama.jp",
      "wake.okayama.jp",
      "yakage.okayama.jp",
      "aguni.okinawa.jp",
      "ginowan.okinawa.jp",
      "ginoza.okinawa.jp",
      "gushikami.okinawa.jp",
      "haebaru.okinawa.jp",
      "higashi.okinawa.jp",
      "hirara.okinawa.jp",
      "iheya.okinawa.jp",
      "ishigaki.okinawa.jp",
      "ishikawa.okinawa.jp",
      "itoman.okinawa.jp",
      "izena.okinawa.jp",
      "kadena.okinawa.jp",
      "kin.okinawa.jp",
      "kitadaito.okinawa.jp",
      "kitanakagusuku.okinawa.jp",
      "kumejima.okinawa.jp",
      "kunigami.okinawa.jp",
      "minamidaito.okinawa.jp",
      "motobu.okinawa.jp",
      "nago.okinawa.jp",
      "naha.okinawa.jp",
      "nakagusuku.okinawa.jp",
      "nakijin.okinawa.jp",
      "nanjo.okinawa.jp",
      "nishihara.okinawa.jp",
      "ogimi.okinawa.jp",
      "okinawa.okinawa.jp",
      "onna.okinawa.jp",
      "shimoji.okinawa.jp",
      "taketomi.okinawa.jp",
      "tarama.okinawa.jp",
      "tokashiki.okinawa.jp",
      "tomigusuku.okinawa.jp",
      "tonaki.okinawa.jp",
      "urasoe.okinawa.jp",
      "uruma.okinawa.jp",
      "yaese.okinawa.jp",
      "yomitan.okinawa.jp",
      "yonabaru.okinawa.jp",
      "yonaguni.okinawa.jp",
      "zamami.okinawa.jp",
      "abeno.osaka.jp",
      "chihayaakasaka.osaka.jp",
      "chuo.osaka.jp",
      "daito.osaka.jp",
      "fujiidera.osaka.jp",
      "habikino.osaka.jp",
      "hannan.osaka.jp",
      "higashiosaka.osaka.jp",
      "higashisumiyoshi.osaka.jp",
      "higashiyodogawa.osaka.jp",
      "hirakata.osaka.jp",
      "ibaraki.osaka.jp",
      "ikeda.osaka.jp",
      "izumi.osaka.jp",
      "izumiotsu.osaka.jp",
      "izumisano.osaka.jp",
      "kadoma.osaka.jp",
      "kaizuka.osaka.jp",
      "kanan.osaka.jp",
      "kashiwara.osaka.jp",
      "katano.osaka.jp",
      "kawachinagano.osaka.jp",
      "kishiwada.osaka.jp",
      "kita.osaka.jp",
      "kumatori.osaka.jp",
      "matsubara.osaka.jp",
      "minato.osaka.jp",
      "minoh.osaka.jp",
      "misaki.osaka.jp",
      "moriguchi.osaka.jp",
      "neyagawa.osaka.jp",
      "nishi.osaka.jp",
      "nose.osaka.jp",
      "osakasayama.osaka.jp",
      "sakai.osaka.jp",
      "sayama.osaka.jp",
      "sennan.osaka.jp",
      "settsu.osaka.jp",
      "shijonawate.osaka.jp",
      "shimamoto.osaka.jp",
      "suita.osaka.jp",
      "tadaoka.osaka.jp",
      "taishi.osaka.jp",
      "tajiri.osaka.jp",
      "takaishi.osaka.jp",
      "takatsuki.osaka.jp",
      "tondabayashi.osaka.jp",
      "toyonaka.osaka.jp",
      "toyono.osaka.jp",
      "yao.osaka.jp",
      "ariake.saga.jp",
      "arita.saga.jp",
      "fukudomi.saga.jp",
      "genkai.saga.jp",
      "hamatama.saga.jp",
      "hizen.saga.jp",
      "imari.saga.jp",
      "kamimine.saga.jp",
      "kanzaki.saga.jp",
      "karatsu.saga.jp",
      "kashima.saga.jp",
      "kitagata.saga.jp",
      "kitahata.saga.jp",
      "kiyama.saga.jp",
      "kouhoku.saga.jp",
      "kyuragi.saga.jp",
      "nishiarita.saga.jp",
      "ogi.saga.jp",
      "omachi.saga.jp",
      "ouchi.saga.jp",
      "saga.saga.jp",
      "shiroishi.saga.jp",
      "taku.saga.jp",
      "tara.saga.jp",
      "tosu.saga.jp",
      "yoshinogari.saga.jp",
      "arakawa.saitama.jp",
      "asaka.saitama.jp",
      "chichibu.saitama.jp",
      "fujimi.saitama.jp",
      "fujimino.saitama.jp",
      "fukaya.saitama.jp",
      "hanno.saitama.jp",
      "hanyu.saitama.jp",
      "hasuda.saitama.jp",
      "hatogaya.saitama.jp",
      "hatoyama.saitama.jp",
      "hidaka.saitama.jp",
      "higashichichibu.saitama.jp",
      "higashimatsuyama.saitama.jp",
      "honjo.saitama.jp",
      "ina.saitama.jp",
      "iruma.saitama.jp",
      "iwatsuki.saitama.jp",
      "kamiizumi.saitama.jp",
      "kamikawa.saitama.jp",
      "kamisato.saitama.jp",
      "kasukabe.saitama.jp",
      "kawagoe.saitama.jp",
      "kawaguchi.saitama.jp",
      "kawajima.saitama.jp",
      "kazo.saitama.jp",
      "kitamoto.saitama.jp",
      "koshigaya.saitama.jp",
      "kounosu.saitama.jp",
      "kuki.saitama.jp",
      "kumagaya.saitama.jp",
      "matsubushi.saitama.jp",
      "minano.saitama.jp",
      "misato.saitama.jp",
      "miyashiro.saitama.jp",
      "miyoshi.saitama.jp",
      "moroyama.saitama.jp",
      "nagatoro.saitama.jp",
      "namegawa.saitama.jp",
      "niiza.saitama.jp",
      "ogano.saitama.jp",
      "ogawa.saitama.jp",
      "ogose.saitama.jp",
      "okegawa.saitama.jp",
      "omiya.saitama.jp",
      "otaki.saitama.jp",
      "ranzan.saitama.jp",
      "ryokami.saitama.jp",
      "saitama.saitama.jp",
      "sakado.saitama.jp",
      "satte.saitama.jp",
      "sayama.saitama.jp",
      "shiki.saitama.jp",
      "shiraoka.saitama.jp",
      "soka.saitama.jp",
      "sugito.saitama.jp",
      "toda.saitama.jp",
      "tokigawa.saitama.jp",
      "tokorozawa.saitama.jp",
      "tsurugashima.saitama.jp",
      "urawa.saitama.jp",
      "warabi.saitama.jp",
      "yashio.saitama.jp",
      "yokoze.saitama.jp",
      "yono.saitama.jp",
      "yorii.saitama.jp",
      "yoshida.saitama.jp",
      "yoshikawa.saitama.jp",
      "yoshimi.saitama.jp",
      "aisho.shiga.jp",
      "gamo.shiga.jp",
      "higashiomi.shiga.jp",
      "hikone.shiga.jp",
      "koka.shiga.jp",
      "konan.shiga.jp",
      "kosei.shiga.jp",
      "koto.shiga.jp",
      "kusatsu.shiga.jp",
      "maibara.shiga.jp",
      "moriyama.shiga.jp",
      "nagahama.shiga.jp",
      "nishiazai.shiga.jp",
      "notogawa.shiga.jp",
      "omihachiman.shiga.jp",
      "otsu.shiga.jp",
      "ritto.shiga.jp",
      "ryuoh.shiga.jp",
      "takashima.shiga.jp",
      "takatsuki.shiga.jp",
      "torahime.shiga.jp",
      "toyosato.shiga.jp",
      "yasu.shiga.jp",
      "akagi.shimane.jp",
      "ama.shimane.jp",
      "gotsu.shimane.jp",
      "hamada.shimane.jp",
      "higashiizumo.shimane.jp",
      "hikawa.shimane.jp",
      "hikimi.shimane.jp",
      "izumo.shimane.jp",
      "kakinoki.shimane.jp",
      "masuda.shimane.jp",
      "matsue.shimane.jp",
      "misato.shimane.jp",
      "nishinoshima.shimane.jp",
      "ohda.shimane.jp",
      "okinoshima.shimane.jp",
      "okuizumo.shimane.jp",
      "shimane.shimane.jp",
      "tamayu.shimane.jp",
      "tsuwano.shimane.jp",
      "unnan.shimane.jp",
      "yakumo.shimane.jp",
      "yasugi.shimane.jp",
      "yatsuka.shimane.jp",
      "arai.shizuoka.jp",
      "atami.shizuoka.jp",
      "fuji.shizuoka.jp",
      "fujieda.shizuoka.jp",
      "fujikawa.shizuoka.jp",
      "fujinomiya.shizuoka.jp",
      "fukuroi.shizuoka.jp",
      "gotemba.shizuoka.jp",
      "haibara.shizuoka.jp",
      "hamamatsu.shizuoka.jp",
      "higashiizu.shizuoka.jp",
      "ito.shizuoka.jp",
      "iwata.shizuoka.jp",
      "izu.shizuoka.jp",
      "izunokuni.shizuoka.jp",
      "kakegawa.shizuoka.jp",
      "kannami.shizuoka.jp",
      "kawanehon.shizuoka.jp",
      "kawazu.shizuoka.jp",
      "kikugawa.shizuoka.jp",
      "kosai.shizuoka.jp",
      "makinohara.shizuoka.jp",
      "matsuzaki.shizuoka.jp",
      "minamiizu.shizuoka.jp",
      "mishima.shizuoka.jp",
      "morimachi.shizuoka.jp",
      "nishiizu.shizuoka.jp",
      "numazu.shizuoka.jp",
      "omaezaki.shizuoka.jp",
      "shimada.shizuoka.jp",
      "shimizu.shizuoka.jp",
      "shimoda.shizuoka.jp",
      "shizuoka.shizuoka.jp",
      "susono.shizuoka.jp",
      "yaizu.shizuoka.jp",
      "yoshida.shizuoka.jp",
      "ashikaga.tochigi.jp",
      "bato.tochigi.jp",
      "haga.tochigi.jp",
      "ichikai.tochigi.jp",
      "iwafune.tochigi.jp",
      "kaminokawa.tochigi.jp",
      "kanuma.tochigi.jp",
      "karasuyama.tochigi.jp",
      "kuroiso.tochigi.jp",
      "mashiko.tochigi.jp",
      "mibu.tochigi.jp",
      "moka.tochigi.jp",
      "motegi.tochigi.jp",
      "nasu.tochigi.jp",
      "nasushiobara.tochigi.jp",
      "nikko.tochigi.jp",
      "nishikata.tochigi.jp",
      "nogi.tochigi.jp",
      "ohira.tochigi.jp",
      "ohtawara.tochigi.jp",
      "oyama.tochigi.jp",
      "sakura.tochigi.jp",
      "sano.tochigi.jp",
      "shimotsuke.tochigi.jp",
      "shioya.tochigi.jp",
      "takanezawa.tochigi.jp",
      "tochigi.tochigi.jp",
      "tsuga.tochigi.jp",
      "ujiie.tochigi.jp",
      "utsunomiya.tochigi.jp",
      "yaita.tochigi.jp",
      "aizumi.tokushima.jp",
      "anan.tokushima.jp",
      "ichiba.tokushima.jp",
      "itano.tokushima.jp",
      "kainan.tokushima.jp",
      "komatsushima.tokushima.jp",
      "matsushige.tokushima.jp",
      "mima.tokushima.jp",
      "minami.tokushima.jp",
      "miyoshi.tokushima.jp",
      "mugi.tokushima.jp",
      "nakagawa.tokushima.jp",
      "naruto.tokushima.jp",
      "sanagochi.tokushima.jp",
      "shishikui.tokushima.jp",
      "tokushima.tokushima.jp",
      "wajiki.tokushima.jp",
      "adachi.tokyo.jp",
      "akiruno.tokyo.jp",
      "akishima.tokyo.jp",
      "aogashima.tokyo.jp",
      "arakawa.tokyo.jp",
      "bunkyo.tokyo.jp",
      "chiyoda.tokyo.jp",
      "chofu.tokyo.jp",
      "chuo.tokyo.jp",
      "edogawa.tokyo.jp",
      "fuchu.tokyo.jp",
      "fussa.tokyo.jp",
      "hachijo.tokyo.jp",
      "hachioji.tokyo.jp",
      "hamura.tokyo.jp",
      "higashikurume.tokyo.jp",
      "higashimurayama.tokyo.jp",
      "higashiyamato.tokyo.jp",
      "hino.tokyo.jp",
      "hinode.tokyo.jp",
      "hinohara.tokyo.jp",
      "inagi.tokyo.jp",
      "itabashi.tokyo.jp",
      "katsushika.tokyo.jp",
      "kita.tokyo.jp",
      "kiyose.tokyo.jp",
      "kodaira.tokyo.jp",
      "koganei.tokyo.jp",
      "kokubunji.tokyo.jp",
      "komae.tokyo.jp",
      "koto.tokyo.jp",
      "kouzushima.tokyo.jp",
      "kunitachi.tokyo.jp",
      "machida.tokyo.jp",
      "meguro.tokyo.jp",
      "minato.tokyo.jp",
      "mitaka.tokyo.jp",
      "mizuho.tokyo.jp",
      "musashimurayama.tokyo.jp",
      "musashino.tokyo.jp",
      "nakano.tokyo.jp",
      "nerima.tokyo.jp",
      "ogasawara.tokyo.jp",
      "okutama.tokyo.jp",
      "ome.tokyo.jp",
      "oshima.tokyo.jp",
      "ota.tokyo.jp",
      "setagaya.tokyo.jp",
      "shibuya.tokyo.jp",
      "shinagawa.tokyo.jp",
      "shinjuku.tokyo.jp",
      "suginami.tokyo.jp",
      "sumida.tokyo.jp",
      "tachikawa.tokyo.jp",
      "taito.tokyo.jp",
      "tama.tokyo.jp",
      "toshima.tokyo.jp",
      "chizu.tottori.jp",
      "hino.tottori.jp",
      "kawahara.tottori.jp",
      "koge.tottori.jp",
      "kotoura.tottori.jp",
      "misasa.tottori.jp",
      "nanbu.tottori.jp",
      "nichinan.tottori.jp",
      "sakaiminato.tottori.jp",
      "tottori.tottori.jp",
      "wakasa.tottori.jp",
      "yazu.tottori.jp",
      "yonago.tottori.jp",
      "asahi.toyama.jp",
      "fuchu.toyama.jp",
      "fukumitsu.toyama.jp",
      "funahashi.toyama.jp",
      "himi.toyama.jp",
      "imizu.toyama.jp",
      "inami.toyama.jp",
      "johana.toyama.jp",
      "kamiichi.toyama.jp",
      "kurobe.toyama.jp",
      "nakaniikawa.toyama.jp",
      "namerikawa.toyama.jp",
      "nanto.toyama.jp",
      "nyuzen.toyama.jp",
      "oyabe.toyama.jp",
      "taira.toyama.jp",
      "takaoka.toyama.jp",
      "tateyama.toyama.jp",
      "toga.toyama.jp",
      "tonami.toyama.jp",
      "toyama.toyama.jp",
      "unazuki.toyama.jp",
      "uozu.toyama.jp",
      "yamada.toyama.jp",
      "arida.wakayama.jp",
      "aridagawa.wakayama.jp",
      "gobo.wakayama.jp",
      "hashimoto.wakayama.jp",
      "hidaka.wakayama.jp",
      "hirogawa.wakayama.jp",
      "inami.wakayama.jp",
      "iwade.wakayama.jp",
      "kainan.wakayama.jp",
      "kamitonda.wakayama.jp",
      "katsuragi.wakayama.jp",
      "kimino.wakayama.jp",
      "kinokawa.wakayama.jp",
      "kitayama.wakayama.jp",
      "koya.wakayama.jp",
      "koza.wakayama.jp",
      "kozagawa.wakayama.jp",
      "kudoyama.wakayama.jp",
      "kushimoto.wakayama.jp",
      "mihama.wakayama.jp",
      "misato.wakayama.jp",
      "nachikatsuura.wakayama.jp",
      "shingu.wakayama.jp",
      "shirahama.wakayama.jp",
      "taiji.wakayama.jp",
      "tanabe.wakayama.jp",
      "wakayama.wakayama.jp",
      "yuasa.wakayama.jp",
      "yura.wakayama.jp",
      "asahi.yamagata.jp",
      "funagata.yamagata.jp",
      "higashine.yamagata.jp",
      "iide.yamagata.jp",
      "kahoku.yamagata.jp",
      "kaminoyama.yamagata.jp",
      "kaneyama.yamagata.jp",
      "kawanishi.yamagata.jp",
      "mamurogawa.yamagata.jp",
      "mikawa.yamagata.jp",
      "murayama.yamagata.jp",
      "nagai.yamagata.jp",
      "nakayama.yamagata.jp",
      "nanyo.yamagata.jp",
      "nishikawa.yamagata.jp",
      "obanazawa.yamagata.jp",
      "oe.yamagata.jp",
      "oguni.yamagata.jp",
      "ohkura.yamagata.jp",
      "oishida.yamagata.jp",
      "sagae.yamagata.jp",
      "sakata.yamagata.jp",
      "sakegawa.yamagata.jp",
      "shinjo.yamagata.jp",
      "shirataka.yamagata.jp",
      "shonai.yamagata.jp",
      "takahata.yamagata.jp",
      "tendo.yamagata.jp",
      "tozawa.yamagata.jp",
      "tsuruoka.yamagata.jp",
      "yamagata.yamagata.jp",
      "yamanobe.yamagata.jp",
      "yonezawa.yamagata.jp",
      "yuza.yamagata.jp",
      "abu.yamaguchi.jp",
      "hagi.yamaguchi.jp",
      "hikari.yamaguchi.jp",
      "hofu.yamaguchi.jp",
      "iwakuni.yamaguchi.jp",
      "kudamatsu.yamaguchi.jp",
      "mitou.yamaguchi.jp",
      "nagato.yamaguchi.jp",
      "oshima.yamaguchi.jp",
      "shimonoseki.yamaguchi.jp",
      "shunan.yamaguchi.jp",
      "tabuse.yamaguchi.jp",
      "tokuyama.yamaguchi.jp",
      "toyota.yamaguchi.jp",
      "ube.yamaguchi.jp",
      "yuu.yamaguchi.jp",
      "chuo.yamanashi.jp",
      "doshi.yamanashi.jp",
      "fuefuki.yamanashi.jp",
      "fujikawa.yamanashi.jp",
      "fujikawaguchiko.yamanashi.jp",
      "fujiyoshida.yamanashi.jp",
      "hayakawa.yamanashi.jp",
      "hokuto.yamanashi.jp",
      "ichikawamisato.yamanashi.jp",
      "kai.yamanashi.jp",
      "kofu.yamanashi.jp",
      "koshu.yamanashi.jp",
      "kosuge.yamanashi.jp",
      "minami-alps.yamanashi.jp",
      "minobu.yamanashi.jp",
      "nakamichi.yamanashi.jp",
      "nanbu.yamanashi.jp",
      "narusawa.yamanashi.jp",
      "nirasaki.yamanashi.jp",
      "nishikatsura.yamanashi.jp",
      "oshino.yamanashi.jp",
      "otsuki.yamanashi.jp",
      "showa.yamanashi.jp",
      "tabayama.yamanashi.jp",
      "tsuru.yamanashi.jp",
      "uenohara.yamanashi.jp",
      "yamanakako.yamanashi.jp",
      "yamanashi.yamanashi.jp",
      "ke",
      "ac.ke",
      "co.ke",
      "go.ke",
      "info.ke",
      "me.ke",
      "mobi.ke",
      "ne.ke",
      "or.ke",
      "sc.ke",
      "kg",
      "org.kg",
      "net.kg",
      "com.kg",
      "edu.kg",
      "gov.kg",
      "mil.kg",
      "*.kh",
      "ki",
      "edu.ki",
      "biz.ki",
      "net.ki",
      "org.ki",
      "gov.ki",
      "info.ki",
      "com.ki",
      "km",
      "org.km",
      "nom.km",
      "gov.km",
      "prd.km",
      "tm.km",
      "edu.km",
      "mil.km",
      "ass.km",
      "com.km",
      "coop.km",
      "asso.km",
      "presse.km",
      "medecin.km",
      "notaires.km",
      "pharmaciens.km",
      "veterinaire.km",
      "gouv.km",
      "kn",
      "net.kn",
      "org.kn",
      "edu.kn",
      "gov.kn",
      "kp",
      "com.kp",
      "edu.kp",
      "gov.kp",
      "org.kp",
      "rep.kp",
      "tra.kp",
      "kr",
      "ac.kr",
      "co.kr",
      "es.kr",
      "go.kr",
      "hs.kr",
      "kg.kr",
      "mil.kr",
      "ms.kr",
      "ne.kr",
      "or.kr",
      "pe.kr",
      "re.kr",
      "sc.kr",
      "busan.kr",
      "chungbuk.kr",
      "chungnam.kr",
      "daegu.kr",
      "daejeon.kr",
      "gangwon.kr",
      "gwangju.kr",
      "gyeongbuk.kr",
      "gyeonggi.kr",
      "gyeongnam.kr",
      "incheon.kr",
      "jeju.kr",
      "jeonbuk.kr",
      "jeonnam.kr",
      "seoul.kr",
      "ulsan.kr",
      "kw",
      "com.kw",
      "edu.kw",
      "emb.kw",
      "gov.kw",
      "ind.kw",
      "net.kw",
      "org.kw",
      "ky",
      "edu.ky",
      "gov.ky",
      "com.ky",
      "org.ky",
      "net.ky",
      "kz",
      "org.kz",
      "edu.kz",
      "net.kz",
      "gov.kz",
      "mil.kz",
      "com.kz",
      "la",
      "int.la",
      "net.la",
      "info.la",
      "edu.la",
      "gov.la",
      "per.la",
      "com.la",
      "org.la",
      "lb",
      "com.lb",
      "edu.lb",
      "gov.lb",
      "net.lb",
      "org.lb",
      "lc",
      "com.lc",
      "net.lc",
      "co.lc",
      "org.lc",
      "edu.lc",
      "gov.lc",
      "li",
      "lk",
      "gov.lk",
      "sch.lk",
      "net.lk",
      "int.lk",
      "com.lk",
      "org.lk",
      "edu.lk",
      "ngo.lk",
      "soc.lk",
      "web.lk",
      "ltd.lk",
      "assn.lk",
      "grp.lk",
      "hotel.lk",
      "ac.lk",
      "lr",
      "com.lr",
      "edu.lr",
      "gov.lr",
      "org.lr",
      "net.lr",
      "ls",
      "ac.ls",
      "biz.ls",
      "co.ls",
      "edu.ls",
      "gov.ls",
      "info.ls",
      "net.ls",
      "org.ls",
      "sc.ls",
      "lt",
      "gov.lt",
      "lu",
      "lv",
      "com.lv",
      "edu.lv",
      "gov.lv",
      "org.lv",
      "mil.lv",
      "id.lv",
      "net.lv",
      "asn.lv",
      "conf.lv",
      "ly",
      "com.ly",
      "net.ly",
      "gov.ly",
      "plc.ly",
      "edu.ly",
      "sch.ly",
      "med.ly",
      "org.ly",
      "id.ly",
      "ma",
      "co.ma",
      "net.ma",
      "gov.ma",
      "org.ma",
      "ac.ma",
      "press.ma",
      "mc",
      "tm.mc",
      "asso.mc",
      "md",
      "me",
      "co.me",
      "net.me",
      "org.me",
      "edu.me",
      "ac.me",
      "gov.me",
      "its.me",
      "priv.me",
      "mg",
      "org.mg",
      "nom.mg",
      "gov.mg",
      "prd.mg",
      "tm.mg",
      "edu.mg",
      "mil.mg",
      "com.mg",
      "co.mg",
      "mh",
      "mil",
      "mk",
      "com.mk",
      "org.mk",
      "net.mk",
      "edu.mk",
      "gov.mk",
      "inf.mk",
      "name.mk",
      "ml",
      "com.ml",
      "edu.ml",
      "gouv.ml",
      "gov.ml",
      "net.ml",
      "org.ml",
      "presse.ml",
      "*.mm",
      "mn",
      "gov.mn",
      "edu.mn",
      "org.mn",
      "mo",
      "com.mo",
      "net.mo",
      "org.mo",
      "edu.mo",
      "gov.mo",
      "mobi",
      "mp",
      "mq",
      "mr",
      "gov.mr",
      "ms",
      "com.ms",
      "edu.ms",
      "gov.ms",
      "net.ms",
      "org.ms",
      "mt",
      "com.mt",
      "edu.mt",
      "net.mt",
      "org.mt",
      "mu",
      "com.mu",
      "net.mu",
      "org.mu",
      "gov.mu",
      "ac.mu",
      "co.mu",
      "or.mu",
      "museum",
      "academy.museum",
      "agriculture.museum",
      "air.museum",
      "airguard.museum",
      "alabama.museum",
      "alaska.museum",
      "amber.museum",
      "ambulance.museum",
      "american.museum",
      "americana.museum",
      "americanantiques.museum",
      "americanart.museum",
      "amsterdam.museum",
      "and.museum",
      "annefrank.museum",
      "anthro.museum",
      "anthropology.museum",
      "antiques.museum",
      "aquarium.museum",
      "arboretum.museum",
      "archaeological.museum",
      "archaeology.museum",
      "architecture.museum",
      "art.museum",
      "artanddesign.museum",
      "artcenter.museum",
      "artdeco.museum",
      "arteducation.museum",
      "artgallery.museum",
      "arts.museum",
      "artsandcrafts.museum",
      "asmatart.museum",
      "assassination.museum",
      "assisi.museum",
      "association.museum",
      "astronomy.museum",
      "atlanta.museum",
      "austin.museum",
      "australia.museum",
      "automotive.museum",
      "aviation.museum",
      "axis.museum",
      "badajoz.museum",
      "baghdad.museum",
      "bahn.museum",
      "bale.museum",
      "baltimore.museum",
      "barcelona.museum",
      "baseball.museum",
      "basel.museum",
      "baths.museum",
      "bauern.museum",
      "beauxarts.museum",
      "beeldengeluid.museum",
      "bellevue.museum",
      "bergbau.museum",
      "berkeley.museum",
      "berlin.museum",
      "bern.museum",
      "bible.museum",
      "bilbao.museum",
      "bill.museum",
      "birdart.museum",
      "birthplace.museum",
      "bonn.museum",
      "boston.museum",
      "botanical.museum",
      "botanicalgarden.museum",
      "botanicgarden.museum",
      "botany.museum",
      "brandywinevalley.museum",
      "brasil.museum",
      "bristol.museum",
      "british.museum",
      "britishcolumbia.museum",
      "broadcast.museum",
      "brunel.museum",
      "brussel.museum",
      "brussels.museum",
      "bruxelles.museum",
      "building.museum",
      "burghof.museum",
      "bus.museum",
      "bushey.museum",
      "cadaques.museum",
      "california.museum",
      "cambridge.museum",
      "can.museum",
      "canada.museum",
      "capebreton.museum",
      "carrier.museum",
      "cartoonart.museum",
      "casadelamoneda.museum",
      "castle.museum",
      "castres.museum",
      "celtic.museum",
      "center.museum",
      "chattanooga.museum",
      "cheltenham.museum",
      "chesapeakebay.museum",
      "chicago.museum",
      "children.museum",
      "childrens.museum",
      "childrensgarden.museum",
      "chiropractic.museum",
      "chocolate.museum",
      "christiansburg.museum",
      "cincinnati.museum",
      "cinema.museum",
      "circus.museum",
      "civilisation.museum",
      "civilization.museum",
      "civilwar.museum",
      "clinton.museum",
      "clock.museum",
      "coal.museum",
      "coastaldefence.museum",
      "cody.museum",
      "coldwar.museum",
      "collection.museum",
      "colonialwilliamsburg.museum",
      "coloradoplateau.museum",
      "columbia.museum",
      "columbus.museum",
      "communication.museum",
      "communications.museum",
      "community.museum",
      "computer.museum",
      "computerhistory.museum",
      "comunica\xE7\xF5es.museum",
      "contemporary.museum",
      "contemporaryart.museum",
      "convent.museum",
      "copenhagen.museum",
      "corporation.museum",
      "correios-e-telecomunica\xE7\xF5es.museum",
      "corvette.museum",
      "costume.museum",
      "countryestate.museum",
      "county.museum",
      "crafts.museum",
      "cranbrook.museum",
      "creation.museum",
      "cultural.museum",
      "culturalcenter.museum",
      "culture.museum",
      "cyber.museum",
      "cymru.museum",
      "dali.museum",
      "dallas.museum",
      "database.museum",
      "ddr.museum",
      "decorativearts.museum",
      "delaware.museum",
      "delmenhorst.museum",
      "denmark.museum",
      "depot.museum",
      "design.museum",
      "detroit.museum",
      "dinosaur.museum",
      "discovery.museum",
      "dolls.museum",
      "donostia.museum",
      "durham.museum",
      "eastafrica.museum",
      "eastcoast.museum",
      "education.museum",
      "educational.museum",
      "egyptian.museum",
      "eisenbahn.museum",
      "elburg.museum",
      "elvendrell.museum",
      "embroidery.museum",
      "encyclopedic.museum",
      "england.museum",
      "entomology.museum",
      "environment.museum",
      "environmentalconservation.museum",
      "epilepsy.museum",
      "essex.museum",
      "estate.museum",
      "ethnology.museum",
      "exeter.museum",
      "exhibition.museum",
      "family.museum",
      "farm.museum",
      "farmequipment.museum",
      "farmers.museum",
      "farmstead.museum",
      "field.museum",
      "figueres.museum",
      "filatelia.museum",
      "film.museum",
      "fineart.museum",
      "finearts.museum",
      "finland.museum",
      "flanders.museum",
      "florida.museum",
      "force.museum",
      "fortmissoula.museum",
      "fortworth.museum",
      "foundation.museum",
      "francaise.museum",
      "frankfurt.museum",
      "franziskaner.museum",
      "freemasonry.museum",
      "freiburg.museum",
      "fribourg.museum",
      "frog.museum",
      "fundacio.museum",
      "furniture.museum",
      "gallery.museum",
      "garden.museum",
      "gateway.museum",
      "geelvinck.museum",
      "gemological.museum",
      "geology.museum",
      "georgia.museum",
      "giessen.museum",
      "glas.museum",
      "glass.museum",
      "gorge.museum",
      "grandrapids.museum",
      "graz.museum",
      "guernsey.museum",
      "halloffame.museum",
      "hamburg.museum",
      "handson.museum",
      "harvestcelebration.museum",
      "hawaii.museum",
      "health.museum",
      "heimatunduhren.museum",
      "hellas.museum",
      "helsinki.museum",
      "hembygdsforbund.museum",
      "heritage.museum",
      "histoire.museum",
      "historical.museum",
      "historicalsociety.museum",
      "historichouses.museum",
      "historisch.museum",
      "historisches.museum",
      "history.museum",
      "historyofscience.museum",
      "horology.museum",
      "house.museum",
      "humanities.museum",
      "illustration.museum",
      "imageandsound.museum",
      "indian.museum",
      "indiana.museum",
      "indianapolis.museum",
      "indianmarket.museum",
      "intelligence.museum",
      "interactive.museum",
      "iraq.museum",
      "iron.museum",
      "isleofman.museum",
      "jamison.museum",
      "jefferson.museum",
      "jerusalem.museum",
      "jewelry.museum",
      "jewish.museum",
      "jewishart.museum",
      "jfk.museum",
      "journalism.museum",
      "judaica.museum",
      "judygarland.museum",
      "juedisches.museum",
      "juif.museum",
      "karate.museum",
      "karikatur.museum",
      "kids.museum",
      "koebenhavn.museum",
      "koeln.museum",
      "kunst.museum",
      "kunstsammlung.museum",
      "kunstunddesign.museum",
      "labor.museum",
      "labour.museum",
      "lajolla.museum",
      "lancashire.museum",
      "landes.museum",
      "lans.museum",
      "l\xE4ns.museum",
      "larsson.museum",
      "lewismiller.museum",
      "lincoln.museum",
      "linz.museum",
      "living.museum",
      "livinghistory.museum",
      "localhistory.museum",
      "london.museum",
      "losangeles.museum",
      "louvre.museum",
      "loyalist.museum",
      "lucerne.museum",
      "luxembourg.museum",
      "luzern.museum",
      "mad.museum",
      "madrid.museum",
      "mallorca.museum",
      "manchester.museum",
      "mansion.museum",
      "mansions.museum",
      "manx.museum",
      "marburg.museum",
      "maritime.museum",
      "maritimo.museum",
      "maryland.museum",
      "marylhurst.museum",
      "media.museum",
      "medical.museum",
      "medizinhistorisches.museum",
      "meeres.museum",
      "memorial.museum",
      "mesaverde.museum",
      "michigan.museum",
      "midatlantic.museum",
      "military.museum",
      "mill.museum",
      "miners.museum",
      "mining.museum",
      "minnesota.museum",
      "missile.museum",
      "missoula.museum",
      "modern.museum",
      "moma.museum",
      "money.museum",
      "monmouth.museum",
      "monticello.museum",
      "montreal.museum",
      "moscow.museum",
      "motorcycle.museum",
      "muenchen.museum",
      "muenster.museum",
      "mulhouse.museum",
      "muncie.museum",
      "museet.museum",
      "museumcenter.museum",
      "museumvereniging.museum",
      "music.museum",
      "national.museum",
      "nationalfirearms.museum",
      "nationalheritage.museum",
      "nativeamerican.museum",
      "naturalhistory.museum",
      "naturalhistorymuseum.museum",
      "naturalsciences.museum",
      "nature.museum",
      "naturhistorisches.museum",
      "natuurwetenschappen.museum",
      "naumburg.museum",
      "naval.museum",
      "nebraska.museum",
      "neues.museum",
      "newhampshire.museum",
      "newjersey.museum",
      "newmexico.museum",
      "newport.museum",
      "newspaper.museum",
      "newyork.museum",
      "niepce.museum",
      "norfolk.museum",
      "north.museum",
      "nrw.museum",
      "nyc.museum",
      "nyny.museum",
      "oceanographic.museum",
      "oceanographique.museum",
      "omaha.museum",
      "online.museum",
      "ontario.museum",
      "openair.museum",
      "oregon.museum",
      "oregontrail.museum",
      "otago.museum",
      "oxford.museum",
      "pacific.museum",
      "paderborn.museum",
      "palace.museum",
      "paleo.museum",
      "palmsprings.museum",
      "panama.museum",
      "paris.museum",
      "pasadena.museum",
      "pharmacy.museum",
      "philadelphia.museum",
      "philadelphiaarea.museum",
      "philately.museum",
      "phoenix.museum",
      "photography.museum",
      "pilots.museum",
      "pittsburgh.museum",
      "planetarium.museum",
      "plantation.museum",
      "plants.museum",
      "plaza.museum",
      "portal.museum",
      "portland.museum",
      "portlligat.museum",
      "posts-and-telecommunications.museum",
      "preservation.museum",
      "presidio.museum",
      "press.museum",
      "project.museum",
      "public.museum",
      "pubol.museum",
      "quebec.museum",
      "railroad.museum",
      "railway.museum",
      "research.museum",
      "resistance.museum",
      "riodejaneiro.museum",
      "rochester.museum",
      "rockart.museum",
      "roma.museum",
      "russia.museum",
      "saintlouis.museum",
      "salem.museum",
      "salvadordali.museum",
      "salzburg.museum",
      "sandiego.museum",
      "sanfrancisco.museum",
      "santabarbara.museum",
      "santacruz.museum",
      "santafe.museum",
      "saskatchewan.museum",
      "satx.museum",
      "savannahga.museum",
      "schlesisches.museum",
      "schoenbrunn.museum",
      "schokoladen.museum",
      "school.museum",
      "schweiz.museum",
      "science.museum",
      "scienceandhistory.museum",
      "scienceandindustry.museum",
      "sciencecenter.museum",
      "sciencecenters.museum",
      "science-fiction.museum",
      "sciencehistory.museum",
      "sciences.museum",
      "sciencesnaturelles.museum",
      "scotland.museum",
      "seaport.museum",
      "settlement.museum",
      "settlers.museum",
      "shell.museum",
      "sherbrooke.museum",
      "sibenik.museum",
      "silk.museum",
      "ski.museum",
      "skole.museum",
      "society.museum",
      "sologne.museum",
      "soundandvision.museum",
      "southcarolina.museum",
      "southwest.museum",
      "space.museum",
      "spy.museum",
      "square.museum",
      "stadt.museum",
      "stalbans.museum",
      "starnberg.museum",
      "state.museum",
      "stateofdelaware.museum",
      "station.museum",
      "steam.museum",
      "steiermark.museum",
      "stjohn.museum",
      "stockholm.museum",
      "stpetersburg.museum",
      "stuttgart.museum",
      "suisse.museum",
      "surgeonshall.museum",
      "surrey.museum",
      "svizzera.museum",
      "sweden.museum",
      "sydney.museum",
      "tank.museum",
      "tcm.museum",
      "technology.museum",
      "telekommunikation.museum",
      "television.museum",
      "texas.museum",
      "textile.museum",
      "theater.museum",
      "time.museum",
      "timekeeping.museum",
      "topology.museum",
      "torino.museum",
      "touch.museum",
      "town.museum",
      "transport.museum",
      "tree.museum",
      "trolley.museum",
      "trust.museum",
      "trustee.museum",
      "uhren.museum",
      "ulm.museum",
      "undersea.museum",
      "university.museum",
      "usa.museum",
      "usantiques.museum",
      "usarts.museum",
      "uscountryestate.museum",
      "usculture.museum",
      "usdecorativearts.museum",
      "usgarden.museum",
      "ushistory.museum",
      "ushuaia.museum",
      "uslivinghistory.museum",
      "utah.museum",
      "uvic.museum",
      "valley.museum",
      "vantaa.museum",
      "versailles.museum",
      "viking.museum",
      "village.museum",
      "virginia.museum",
      "virtual.museum",
      "virtuel.museum",
      "vlaanderen.museum",
      "volkenkunde.museum",
      "wales.museum",
      "wallonie.museum",
      "war.museum",
      "washingtondc.museum",
      "watchandclock.museum",
      "watch-and-clock.museum",
      "western.museum",
      "westfalen.museum",
      "whaling.museum",
      "wildlife.museum",
      "williamsburg.museum",
      "windmill.museum",
      "workshop.museum",
      "york.museum",
      "yorkshire.museum",
      "yosemite.museum",
      "youth.museum",
      "zoological.museum",
      "zoology.museum",
      "\u05D9\u05E8\u05D5\u05E9\u05DC\u05D9\u05DD.museum",
      "\u0438\u043A\u043E\u043C.museum",
      "mv",
      "aero.mv",
      "biz.mv",
      "com.mv",
      "coop.mv",
      "edu.mv",
      "gov.mv",
      "info.mv",
      "int.mv",
      "mil.mv",
      "museum.mv",
      "name.mv",
      "net.mv",
      "org.mv",
      "pro.mv",
      "mw",
      "ac.mw",
      "biz.mw",
      "co.mw",
      "com.mw",
      "coop.mw",
      "edu.mw",
      "gov.mw",
      "int.mw",
      "museum.mw",
      "net.mw",
      "org.mw",
      "mx",
      "com.mx",
      "org.mx",
      "gob.mx",
      "edu.mx",
      "net.mx",
      "my",
      "com.my",
      "net.my",
      "org.my",
      "gov.my",
      "edu.my",
      "mil.my",
      "name.my",
      "mz",
      "ac.mz",
      "adv.mz",
      "co.mz",
      "edu.mz",
      "gov.mz",
      "mil.mz",
      "net.mz",
      "org.mz",
      "na",
      "info.na",
      "pro.na",
      "name.na",
      "school.na",
      "or.na",
      "dr.na",
      "us.na",
      "mx.na",
      "ca.na",
      "in.na",
      "cc.na",
      "tv.na",
      "ws.na",
      "mobi.na",
      "co.na",
      "com.na",
      "org.na",
      "name",
      "nc",
      "asso.nc",
      "nom.nc",
      "ne",
      "net",
      "nf",
      "com.nf",
      "net.nf",
      "per.nf",
      "rec.nf",
      "web.nf",
      "arts.nf",
      "firm.nf",
      "info.nf",
      "other.nf",
      "store.nf",
      "ng",
      "com.ng",
      "edu.ng",
      "gov.ng",
      "i.ng",
      "mil.ng",
      "mobi.ng",
      "name.ng",
      "net.ng",
      "org.ng",
      "sch.ng",
      "ni",
      "ac.ni",
      "biz.ni",
      "co.ni",
      "com.ni",
      "edu.ni",
      "gob.ni",
      "in.ni",
      "info.ni",
      "int.ni",
      "mil.ni",
      "net.ni",
      "nom.ni",
      "org.ni",
      "web.ni",
      "nl",
      "no",
      "fhs.no",
      "vgs.no",
      "fylkesbibl.no",
      "folkebibl.no",
      "museum.no",
      "idrett.no",
      "priv.no",
      "mil.no",
      "stat.no",
      "dep.no",
      "kommune.no",
      "herad.no",
      "aa.no",
      "ah.no",
      "bu.no",
      "fm.no",
      "hl.no",
      "hm.no",
      "jan-mayen.no",
      "mr.no",
      "nl.no",
      "nt.no",
      "of.no",
      "ol.no",
      "oslo.no",
      "rl.no",
      "sf.no",
      "st.no",
      "svalbard.no",
      "tm.no",
      "tr.no",
      "va.no",
      "vf.no",
      "gs.aa.no",
      "gs.ah.no",
      "gs.bu.no",
      "gs.fm.no",
      "gs.hl.no",
      "gs.hm.no",
      "gs.jan-mayen.no",
      "gs.mr.no",
      "gs.nl.no",
      "gs.nt.no",
      "gs.of.no",
      "gs.ol.no",
      "gs.oslo.no",
      "gs.rl.no",
      "gs.sf.no",
      "gs.st.no",
      "gs.svalbard.no",
      "gs.tm.no",
      "gs.tr.no",
      "gs.va.no",
      "gs.vf.no",
      "akrehamn.no",
      "\xE5krehamn.no",
      "algard.no",
      "\xE5lg\xE5rd.no",
      "arna.no",
      "brumunddal.no",
      "bryne.no",
      "bronnoysund.no",
      "br\xF8nn\xF8ysund.no",
      "drobak.no",
      "dr\xF8bak.no",
      "egersund.no",
      "fetsund.no",
      "floro.no",
      "flor\xF8.no",
      "fredrikstad.no",
      "hokksund.no",
      "honefoss.no",
      "h\xF8nefoss.no",
      "jessheim.no",
      "jorpeland.no",
      "j\xF8rpeland.no",
      "kirkenes.no",
      "kopervik.no",
      "krokstadelva.no",
      "langevag.no",
      "langev\xE5g.no",
      "leirvik.no",
      "mjondalen.no",
      "mj\xF8ndalen.no",
      "mo-i-rana.no",
      "mosjoen.no",
      "mosj\xF8en.no",
      "nesoddtangen.no",
      "orkanger.no",
      "osoyro.no",
      "os\xF8yro.no",
      "raholt.no",
      "r\xE5holt.no",
      "sandnessjoen.no",
      "sandnessj\xF8en.no",
      "skedsmokorset.no",
      "slattum.no",
      "spjelkavik.no",
      "stathelle.no",
      "stavern.no",
      "stjordalshalsen.no",
      "stj\xF8rdalshalsen.no",
      "tananger.no",
      "tranby.no",
      "vossevangen.no",
      "afjord.no",
      "\xE5fjord.no",
      "agdenes.no",
      "al.no",
      "\xE5l.no",
      "alesund.no",
      "\xE5lesund.no",
      "alstahaug.no",
      "alta.no",
      "\xE1lt\xE1.no",
      "alaheadju.no",
      "\xE1laheadju.no",
      "alvdal.no",
      "amli.no",
      "\xE5mli.no",
      "amot.no",
      "\xE5mot.no",
      "andebu.no",
      "andoy.no",
      "and\xF8y.no",
      "andasuolo.no",
      "ardal.no",
      "\xE5rdal.no",
      "aremark.no",
      "arendal.no",
      "\xE5s.no",
      "aseral.no",
      "\xE5seral.no",
      "asker.no",
      "askim.no",
      "askvoll.no",
      "askoy.no",
      "ask\xF8y.no",
      "asnes.no",
      "\xE5snes.no",
      "audnedaln.no",
      "aukra.no",
      "aure.no",
      "aurland.no",
      "aurskog-holand.no",
      "aurskog-h\xF8land.no",
      "austevoll.no",
      "austrheim.no",
      "averoy.no",
      "aver\xF8y.no",
      "balestrand.no",
      "ballangen.no",
      "balat.no",
      "b\xE1l\xE1t.no",
      "balsfjord.no",
      "bahccavuotna.no",
      "b\xE1hccavuotna.no",
      "bamble.no",
      "bardu.no",
      "beardu.no",
      "beiarn.no",
      "bajddar.no",
      "b\xE1jddar.no",
      "baidar.no",
      "b\xE1id\xE1r.no",
      "berg.no",
      "bergen.no",
      "berlevag.no",
      "berlev\xE5g.no",
      "bearalvahki.no",
      "bearalv\xE1hki.no",
      "bindal.no",
      "birkenes.no",
      "bjarkoy.no",
      "bjark\xF8y.no",
      "bjerkreim.no",
      "bjugn.no",
      "bodo.no",
      "bod\xF8.no",
      "badaddja.no",
      "b\xE5d\xE5ddj\xE5.no",
      "budejju.no",
      "bokn.no",
      "bremanger.no",
      "bronnoy.no",
      "br\xF8nn\xF8y.no",
      "bygland.no",
      "bykle.no",
      "barum.no",
      "b\xE6rum.no",
      "bo.telemark.no",
      "b\xF8.telemark.no",
      "bo.nordland.no",
      "b\xF8.nordland.no",
      "bievat.no",
      "biev\xE1t.no",
      "bomlo.no",
      "b\xF8mlo.no",
      "batsfjord.no",
      "b\xE5tsfjord.no",
      "bahcavuotna.no",
      "b\xE1hcavuotna.no",
      "dovre.no",
      "drammen.no",
      "drangedal.no",
      "dyroy.no",
      "dyr\xF8y.no",
      "donna.no",
      "d\xF8nna.no",
      "eid.no",
      "eidfjord.no",
      "eidsberg.no",
      "eidskog.no",
      "eidsvoll.no",
      "eigersund.no",
      "elverum.no",
      "enebakk.no",
      "engerdal.no",
      "etne.no",
      "etnedal.no",
      "evenes.no",
      "evenassi.no",
      "even\xE1\u0161\u0161i.no",
      "evje-og-hornnes.no",
      "farsund.no",
      "fauske.no",
      "fuossko.no",
      "fuoisku.no",
      "fedje.no",
      "fet.no",
      "finnoy.no",
      "finn\xF8y.no",
      "fitjar.no",
      "fjaler.no",
      "fjell.no",
      "flakstad.no",
      "flatanger.no",
      "flekkefjord.no",
      "flesberg.no",
      "flora.no",
      "fla.no",
      "fl\xE5.no",
      "folldal.no",
      "forsand.no",
      "fosnes.no",
      "frei.no",
      "frogn.no",
      "froland.no",
      "frosta.no",
      "frana.no",
      "fr\xE6na.no",
      "froya.no",
      "fr\xF8ya.no",
      "fusa.no",
      "fyresdal.no",
      "forde.no",
      "f\xF8rde.no",
      "gamvik.no",
      "gangaviika.no",
      "g\xE1\u014Bgaviika.no",
      "gaular.no",
      "gausdal.no",
      "gildeskal.no",
      "gildesk\xE5l.no",
      "giske.no",
      "gjemnes.no",
      "gjerdrum.no",
      "gjerstad.no",
      "gjesdal.no",
      "gjovik.no",
      "gj\xF8vik.no",
      "gloppen.no",
      "gol.no",
      "gran.no",
      "grane.no",
      "granvin.no",
      "gratangen.no",
      "grimstad.no",
      "grong.no",
      "kraanghke.no",
      "kr\xE5anghke.no",
      "grue.no",
      "gulen.no",
      "hadsel.no",
      "halden.no",
      "halsa.no",
      "hamar.no",
      "hamaroy.no",
      "habmer.no",
      "h\xE1bmer.no",
      "hapmir.no",
      "h\xE1pmir.no",
      "hammerfest.no",
      "hammarfeasta.no",
      "h\xE1mm\xE1rfeasta.no",
      "haram.no",
      "hareid.no",
      "harstad.no",
      "hasvik.no",
      "aknoluokta.no",
      "\xE1k\u014Boluokta.no",
      "hattfjelldal.no",
      "aarborte.no",
      "haugesund.no",
      "hemne.no",
      "hemnes.no",
      "hemsedal.no",
      "heroy.more-og-romsdal.no",
      "her\xF8y.m\xF8re-og-romsdal.no",
      "heroy.nordland.no",
      "her\xF8y.nordland.no",
      "hitra.no",
      "hjartdal.no",
      "hjelmeland.no",
      "hobol.no",
      "hob\xF8l.no",
      "hof.no",
      "hol.no",
      "hole.no",
      "holmestrand.no",
      "holtalen.no",
      "holt\xE5len.no",
      "hornindal.no",
      "horten.no",
      "hurdal.no",
      "hurum.no",
      "hvaler.no",
      "hyllestad.no",
      "hagebostad.no",
      "h\xE6gebostad.no",
      "hoyanger.no",
      "h\xF8yanger.no",
      "hoylandet.no",
      "h\xF8ylandet.no",
      "ha.no",
      "h\xE5.no",
      "ibestad.no",
      "inderoy.no",
      "inder\xF8y.no",
      "iveland.no",
      "jevnaker.no",
      "jondal.no",
      "jolster.no",
      "j\xF8lster.no",
      "karasjok.no",
      "karasjohka.no",
      "k\xE1r\xE1\u0161johka.no",
      "karlsoy.no",
      "galsa.no",
      "g\xE1ls\xE1.no",
      "karmoy.no",
      "karm\xF8y.no",
      "kautokeino.no",
      "guovdageaidnu.no",
      "klepp.no",
      "klabu.no",
      "kl\xE6bu.no",
      "kongsberg.no",
      "kongsvinger.no",
      "kragero.no",
      "krager\xF8.no",
      "kristiansand.no",
      "kristiansund.no",
      "krodsherad.no",
      "kr\xF8dsherad.no",
      "kvalsund.no",
      "rahkkeravju.no",
      "r\xE1hkker\xE1vju.no",
      "kvam.no",
      "kvinesdal.no",
      "kvinnherad.no",
      "kviteseid.no",
      "kvitsoy.no",
      "kvits\xF8y.no",
      "kvafjord.no",
      "kv\xE6fjord.no",
      "giehtavuoatna.no",
      "kvanangen.no",
      "kv\xE6nangen.no",
      "navuotna.no",
      "n\xE1vuotna.no",
      "kafjord.no",
      "k\xE5fjord.no",
      "gaivuotna.no",
      "g\xE1ivuotna.no",
      "larvik.no",
      "lavangen.no",
      "lavagis.no",
      "loabat.no",
      "loab\xE1t.no",
      "lebesby.no",
      "davvesiida.no",
      "leikanger.no",
      "leirfjord.no",
      "leka.no",
      "leksvik.no",
      "lenvik.no",
      "leangaviika.no",
      "lea\u014Bgaviika.no",
      "lesja.no",
      "levanger.no",
      "lier.no",
      "lierne.no",
      "lillehammer.no",
      "lillesand.no",
      "lindesnes.no",
      "lindas.no",
      "lind\xE5s.no",
      "lom.no",
      "loppa.no",
      "lahppi.no",
      "l\xE1hppi.no",
      "lund.no",
      "lunner.no",
      "luroy.no",
      "lur\xF8y.no",
      "luster.no",
      "lyngdal.no",
      "lyngen.no",
      "ivgu.no",
      "lardal.no",
      "lerdal.no",
      "l\xE6rdal.no",
      "lodingen.no",
      "l\xF8dingen.no",
      "lorenskog.no",
      "l\xF8renskog.no",
      "loten.no",
      "l\xF8ten.no",
      "malvik.no",
      "masoy.no",
      "m\xE5s\xF8y.no",
      "muosat.no",
      "muos\xE1t.no",
      "mandal.no",
      "marker.no",
      "marnardal.no",
      "masfjorden.no",
      "meland.no",
      "meldal.no",
      "melhus.no",
      "meloy.no",
      "mel\xF8y.no",
      "meraker.no",
      "mer\xE5ker.no",
      "moareke.no",
      "mo\xE5reke.no",
      "midsund.no",
      "midtre-gauldal.no",
      "modalen.no",
      "modum.no",
      "molde.no",
      "moskenes.no",
      "moss.no",
      "mosvik.no",
      "malselv.no",
      "m\xE5lselv.no",
      "malatvuopmi.no",
      "m\xE1latvuopmi.no",
      "namdalseid.no",
      "aejrie.no",
      "namsos.no",
      "namsskogan.no",
      "naamesjevuemie.no",
      "n\xE5\xE5mesjevuemie.no",
      "laakesvuemie.no",
      "nannestad.no",
      "narvik.no",
      "narviika.no",
      "naustdal.no",
      "nedre-eiker.no",
      "nes.akershus.no",
      "nes.buskerud.no",
      "nesna.no",
      "nesodden.no",
      "nesseby.no",
      "unjarga.no",
      "unj\xE1rga.no",
      "nesset.no",
      "nissedal.no",
      "nittedal.no",
      "nord-aurdal.no",
      "nord-fron.no",
      "nord-odal.no",
      "norddal.no",
      "nordkapp.no",
      "davvenjarga.no",
      "davvenj\xE1rga.no",
      "nordre-land.no",
      "nordreisa.no",
      "raisa.no",
      "r\xE1isa.no",
      "nore-og-uvdal.no",
      "notodden.no",
      "naroy.no",
      "n\xE6r\xF8y.no",
      "notteroy.no",
      "n\xF8tter\xF8y.no",
      "odda.no",
      "oksnes.no",
      "\xF8ksnes.no",
      "oppdal.no",
      "oppegard.no",
      "oppeg\xE5rd.no",
      "orkdal.no",
      "orland.no",
      "\xF8rland.no",
      "orskog.no",
      "\xF8rskog.no",
      "orsta.no",
      "\xF8rsta.no",
      "os.hedmark.no",
      "os.hordaland.no",
      "osen.no",
      "osteroy.no",
      "oster\xF8y.no",
      "ostre-toten.no",
      "\xF8stre-toten.no",
      "overhalla.no",
      "ovre-eiker.no",
      "\xF8vre-eiker.no",
      "oyer.no",
      "\xF8yer.no",
      "oygarden.no",
      "\xF8ygarden.no",
      "oystre-slidre.no",
      "\xF8ystre-slidre.no",
      "porsanger.no",
      "porsangu.no",
      "pors\xE1\u014Bgu.no",
      "porsgrunn.no",
      "radoy.no",
      "rad\xF8y.no",
      "rakkestad.no",
      "rana.no",
      "ruovat.no",
      "randaberg.no",
      "rauma.no",
      "rendalen.no",
      "rennebu.no",
      "rennesoy.no",
      "rennes\xF8y.no",
      "rindal.no",
      "ringebu.no",
      "ringerike.no",
      "ringsaker.no",
      "rissa.no",
      "risor.no",
      "ris\xF8r.no",
      "roan.no",
      "rollag.no",
      "rygge.no",
      "ralingen.no",
      "r\xE6lingen.no",
      "rodoy.no",
      "r\xF8d\xF8y.no",
      "romskog.no",
      "r\xF8mskog.no",
      "roros.no",
      "r\xF8ros.no",
      "rost.no",
      "r\xF8st.no",
      "royken.no",
      "r\xF8yken.no",
      "royrvik.no",
      "r\xF8yrvik.no",
      "rade.no",
      "r\xE5de.no",
      "salangen.no",
      "siellak.no",
      "saltdal.no",
      "salat.no",
      "s\xE1l\xE1t.no",
      "s\xE1lat.no",
      "samnanger.no",
      "sande.more-og-romsdal.no",
      "sande.m\xF8re-og-romsdal.no",
      "sande.vestfold.no",
      "sandefjord.no",
      "sandnes.no",
      "sandoy.no",
      "sand\xF8y.no",
      "sarpsborg.no",
      "sauda.no",
      "sauherad.no",
      "sel.no",
      "selbu.no",
      "selje.no",
      "seljord.no",
      "sigdal.no",
      "siljan.no",
      "sirdal.no",
      "skaun.no",
      "skedsmo.no",
      "ski.no",
      "skien.no",
      "skiptvet.no",
      "skjervoy.no",
      "skjerv\xF8y.no",
      "skierva.no",
      "skierv\xE1.no",
      "skjak.no",
      "skj\xE5k.no",
      "skodje.no",
      "skanland.no",
      "sk\xE5nland.no",
      "skanit.no",
      "sk\xE1nit.no",
      "smola.no",
      "sm\xF8la.no",
      "snillfjord.no",
      "snasa.no",
      "sn\xE5sa.no",
      "snoasa.no",
      "snaase.no",
      "sn\xE5ase.no",
      "sogndal.no",
      "sokndal.no",
      "sola.no",
      "solund.no",
      "songdalen.no",
      "sortland.no",
      "spydeberg.no",
      "stange.no",
      "stavanger.no",
      "steigen.no",
      "steinkjer.no",
      "stjordal.no",
      "stj\xF8rdal.no",
      "stokke.no",
      "stor-elvdal.no",
      "stord.no",
      "stordal.no",
      "storfjord.no",
      "omasvuotna.no",
      "strand.no",
      "stranda.no",
      "stryn.no",
      "sula.no",
      "suldal.no",
      "sund.no",
      "sunndal.no",
      "surnadal.no",
      "sveio.no",
      "svelvik.no",
      "sykkylven.no",
      "sogne.no",
      "s\xF8gne.no",
      "somna.no",
      "s\xF8mna.no",
      "sondre-land.no",
      "s\xF8ndre-land.no",
      "sor-aurdal.no",
      "s\xF8r-aurdal.no",
      "sor-fron.no",
      "s\xF8r-fron.no",
      "sor-odal.no",
      "s\xF8r-odal.no",
      "sor-varanger.no",
      "s\xF8r-varanger.no",
      "matta-varjjat.no",
      "m\xE1tta-v\xE1rjjat.no",
      "sorfold.no",
      "s\xF8rfold.no",
      "sorreisa.no",
      "s\xF8rreisa.no",
      "sorum.no",
      "s\xF8rum.no",
      "tana.no",
      "deatnu.no",
      "time.no",
      "tingvoll.no",
      "tinn.no",
      "tjeldsund.no",
      "dielddanuorri.no",
      "tjome.no",
      "tj\xF8me.no",
      "tokke.no",
      "tolga.no",
      "torsken.no",
      "tranoy.no",
      "tran\xF8y.no",
      "tromso.no",
      "troms\xF8.no",
      "tromsa.no",
      "romsa.no",
      "trondheim.no",
      "troandin.no",
      "trysil.no",
      "trana.no",
      "tr\xE6na.no",
      "trogstad.no",
      "tr\xF8gstad.no",
      "tvedestrand.no",
      "tydal.no",
      "tynset.no",
      "tysfjord.no",
      "divtasvuodna.no",
      "divttasvuotna.no",
      "tysnes.no",
      "tysvar.no",
      "tysv\xE6r.no",
      "tonsberg.no",
      "t\xF8nsberg.no",
      "ullensaker.no",
      "ullensvang.no",
      "ulvik.no",
      "utsira.no",
      "vadso.no",
      "vads\xF8.no",
      "cahcesuolo.no",
      "\u010D\xE1hcesuolo.no",
      "vaksdal.no",
      "valle.no",
      "vang.no",
      "vanylven.no",
      "vardo.no",
      "vard\xF8.no",
      "varggat.no",
      "v\xE1rgg\xE1t.no",
      "vefsn.no",
      "vaapste.no",
      "vega.no",
      "vegarshei.no",
      "veg\xE5rshei.no",
      "vennesla.no",
      "verdal.no",
      "verran.no",
      "vestby.no",
      "vestnes.no",
      "vestre-slidre.no",
      "vestre-toten.no",
      "vestvagoy.no",
      "vestv\xE5g\xF8y.no",
      "vevelstad.no",
      "vik.no",
      "vikna.no",
      "vindafjord.no",
      "volda.no",
      "voss.no",
      "varoy.no",
      "v\xE6r\xF8y.no",
      "vagan.no",
      "v\xE5gan.no",
      "voagat.no",
      "vagsoy.no",
      "v\xE5gs\xF8y.no",
      "vaga.no",
      "v\xE5g\xE5.no",
      "valer.ostfold.no",
      "v\xE5ler.\xF8stfold.no",
      "valer.hedmark.no",
      "v\xE5ler.hedmark.no",
      "*.np",
      "nr",
      "biz.nr",
      "info.nr",
      "gov.nr",
      "edu.nr",
      "org.nr",
      "net.nr",
      "com.nr",
      "nu",
      "nz",
      "ac.nz",
      "co.nz",
      "cri.nz",
      "geek.nz",
      "gen.nz",
      "govt.nz",
      "health.nz",
      "iwi.nz",
      "kiwi.nz",
      "maori.nz",
      "mil.nz",
      "m\u0101ori.nz",
      "net.nz",
      "org.nz",
      "parliament.nz",
      "school.nz",
      "om",
      "co.om",
      "com.om",
      "edu.om",
      "gov.om",
      "med.om",
      "museum.om",
      "net.om",
      "org.om",
      "pro.om",
      "onion",
      "org",
      "pa",
      "ac.pa",
      "gob.pa",
      "com.pa",
      "org.pa",
      "sld.pa",
      "edu.pa",
      "net.pa",
      "ing.pa",
      "abo.pa",
      "med.pa",
      "nom.pa",
      "pe",
      "edu.pe",
      "gob.pe",
      "nom.pe",
      "mil.pe",
      "org.pe",
      "com.pe",
      "net.pe",
      "pf",
      "com.pf",
      "org.pf",
      "edu.pf",
      "*.pg",
      "ph",
      "com.ph",
      "net.ph",
      "org.ph",
      "gov.ph",
      "edu.ph",
      "ngo.ph",
      "mil.ph",
      "i.ph",
      "pk",
      "com.pk",
      "net.pk",
      "edu.pk",
      "org.pk",
      "fam.pk",
      "biz.pk",
      "web.pk",
      "gov.pk",
      "gob.pk",
      "gok.pk",
      "gon.pk",
      "gop.pk",
      "gos.pk",
      "info.pk",
      "pl",
      "com.pl",
      "net.pl",
      "org.pl",
      "aid.pl",
      "agro.pl",
      "atm.pl",
      "auto.pl",
      "biz.pl",
      "edu.pl",
      "gmina.pl",
      "gsm.pl",
      "info.pl",
      "mail.pl",
      "miasta.pl",
      "media.pl",
      "mil.pl",
      "nieruchomosci.pl",
      "nom.pl",
      "pc.pl",
      "powiat.pl",
      "priv.pl",
      "realestate.pl",
      "rel.pl",
      "sex.pl",
      "shop.pl",
      "sklep.pl",
      "sos.pl",
      "szkola.pl",
      "targi.pl",
      "tm.pl",
      "tourism.pl",
      "travel.pl",
      "turystyka.pl",
      "gov.pl",
      "ap.gov.pl",
      "ic.gov.pl",
      "is.gov.pl",
      "us.gov.pl",
      "kmpsp.gov.pl",
      "kppsp.gov.pl",
      "kwpsp.gov.pl",
      "psp.gov.pl",
      "wskr.gov.pl",
      "kwp.gov.pl",
      "mw.gov.pl",
      "ug.gov.pl",
      "um.gov.pl",
      "umig.gov.pl",
      "ugim.gov.pl",
      "upow.gov.pl",
      "uw.gov.pl",
      "starostwo.gov.pl",
      "pa.gov.pl",
      "po.gov.pl",
      "psse.gov.pl",
      "pup.gov.pl",
      "rzgw.gov.pl",
      "sa.gov.pl",
      "so.gov.pl",
      "sr.gov.pl",
      "wsa.gov.pl",
      "sko.gov.pl",
      "uzs.gov.pl",
      "wiih.gov.pl",
      "winb.gov.pl",
      "pinb.gov.pl",
      "wios.gov.pl",
      "witd.gov.pl",
      "wzmiuw.gov.pl",
      "piw.gov.pl",
      "wiw.gov.pl",
      "griw.gov.pl",
      "wif.gov.pl",
      "oum.gov.pl",
      "sdn.gov.pl",
      "zp.gov.pl",
      "uppo.gov.pl",
      "mup.gov.pl",
      "wuoz.gov.pl",
      "konsulat.gov.pl",
      "oirm.gov.pl",
      "augustow.pl",
      "babia-gora.pl",
      "bedzin.pl",
      "beskidy.pl",
      "bialowieza.pl",
      "bialystok.pl",
      "bielawa.pl",
      "bieszczady.pl",
      "boleslawiec.pl",
      "bydgoszcz.pl",
      "bytom.pl",
      "cieszyn.pl",
      "czeladz.pl",
      "czest.pl",
      "dlugoleka.pl",
      "elblag.pl",
      "elk.pl",
      "glogow.pl",
      "gniezno.pl",
      "gorlice.pl",
      "grajewo.pl",
      "ilawa.pl",
      "jaworzno.pl",
      "jelenia-gora.pl",
      "jgora.pl",
      "kalisz.pl",
      "kazimierz-dolny.pl",
      "karpacz.pl",
      "kartuzy.pl",
      "kaszuby.pl",
      "katowice.pl",
      "kepno.pl",
      "ketrzyn.pl",
      "klodzko.pl",
      "kobierzyce.pl",
      "kolobrzeg.pl",
      "konin.pl",
      "konskowola.pl",
      "kutno.pl",
      "lapy.pl",
      "lebork.pl",
      "legnica.pl",
      "lezajsk.pl",
      "limanowa.pl",
      "lomza.pl",
      "lowicz.pl",
      "lubin.pl",
      "lukow.pl",
      "malbork.pl",
      "malopolska.pl",
      "mazowsze.pl",
      "mazury.pl",
      "mielec.pl",
      "mielno.pl",
      "mragowo.pl",
      "naklo.pl",
      "nowaruda.pl",
      "nysa.pl",
      "olawa.pl",
      "olecko.pl",
      "olkusz.pl",
      "olsztyn.pl",
      "opoczno.pl",
      "opole.pl",
      "ostroda.pl",
      "ostroleka.pl",
      "ostrowiec.pl",
      "ostrowwlkp.pl",
      "pila.pl",
      "pisz.pl",
      "podhale.pl",
      "podlasie.pl",
      "polkowice.pl",
      "pomorze.pl",
      "pomorskie.pl",
      "prochowice.pl",
      "pruszkow.pl",
      "przeworsk.pl",
      "pulawy.pl",
      "radom.pl",
      "rawa-maz.pl",
      "rybnik.pl",
      "rzeszow.pl",
      "sanok.pl",
      "sejny.pl",
      "slask.pl",
      "slupsk.pl",
      "sosnowiec.pl",
      "stalowa-wola.pl",
      "skoczow.pl",
      "starachowice.pl",
      "stargard.pl",
      "suwalki.pl",
      "swidnica.pl",
      "swiebodzin.pl",
      "swinoujscie.pl",
      "szczecin.pl",
      "szczytno.pl",
      "tarnobrzeg.pl",
      "tgory.pl",
      "turek.pl",
      "tychy.pl",
      "ustka.pl",
      "walbrzych.pl",
      "warmia.pl",
      "warszawa.pl",
      "waw.pl",
      "wegrow.pl",
      "wielun.pl",
      "wlocl.pl",
      "wloclawek.pl",
      "wodzislaw.pl",
      "wolomin.pl",
      "wroclaw.pl",
      "zachpomor.pl",
      "zagan.pl",
      "zarow.pl",
      "zgora.pl",
      "zgorzelec.pl",
      "pm",
      "pn",
      "gov.pn",
      "co.pn",
      "org.pn",
      "edu.pn",
      "net.pn",
      "post",
      "pr",
      "com.pr",
      "net.pr",
      "org.pr",
      "gov.pr",
      "edu.pr",
      "isla.pr",
      "pro.pr",
      "biz.pr",
      "info.pr",
      "name.pr",
      "est.pr",
      "prof.pr",
      "ac.pr",
      "pro",
      "aaa.pro",
      "aca.pro",
      "acct.pro",
      "avocat.pro",
      "bar.pro",
      "cpa.pro",
      "eng.pro",
      "jur.pro",
      "law.pro",
      "med.pro",
      "recht.pro",
      "ps",
      "edu.ps",
      "gov.ps",
      "sec.ps",
      "plo.ps",
      "com.ps",
      "org.ps",
      "net.ps",
      "pt",
      "net.pt",
      "gov.pt",
      "org.pt",
      "edu.pt",
      "int.pt",
      "publ.pt",
      "com.pt",
      "nome.pt",
      "pw",
      "co.pw",
      "ne.pw",
      "or.pw",
      "ed.pw",
      "go.pw",
      "belau.pw",
      "py",
      "com.py",
      "coop.py",
      "edu.py",
      "gov.py",
      "mil.py",
      "net.py",
      "org.py",
      "qa",
      "com.qa",
      "edu.qa",
      "gov.qa",
      "mil.qa",
      "name.qa",
      "net.qa",
      "org.qa",
      "sch.qa",
      "re",
      "asso.re",
      "com.re",
      "nom.re",
      "ro",
      "arts.ro",
      "com.ro",
      "firm.ro",
      "info.ro",
      "nom.ro",
      "nt.ro",
      "org.ro",
      "rec.ro",
      "store.ro",
      "tm.ro",
      "www.ro",
      "rs",
      "ac.rs",
      "co.rs",
      "edu.rs",
      "gov.rs",
      "in.rs",
      "org.rs",
      "ru",
      "rw",
      "ac.rw",
      "co.rw",
      "coop.rw",
      "gov.rw",
      "mil.rw",
      "net.rw",
      "org.rw",
      "sa",
      "com.sa",
      "net.sa",
      "org.sa",
      "gov.sa",
      "med.sa",
      "pub.sa",
      "edu.sa",
      "sch.sa",
      "sb",
      "com.sb",
      "edu.sb",
      "gov.sb",
      "net.sb",
      "org.sb",
      "sc",
      "com.sc",
      "gov.sc",
      "net.sc",
      "org.sc",
      "edu.sc",
      "sd",
      "com.sd",
      "net.sd",
      "org.sd",
      "edu.sd",
      "med.sd",
      "tv.sd",
      "gov.sd",
      "info.sd",
      "se",
      "a.se",
      "ac.se",
      "b.se",
      "bd.se",
      "brand.se",
      "c.se",
      "d.se",
      "e.se",
      "f.se",
      "fh.se",
      "fhsk.se",
      "fhv.se",
      "g.se",
      "h.se",
      "i.se",
      "k.se",
      "komforb.se",
      "kommunalforbund.se",
      "komvux.se",
      "l.se",
      "lanbib.se",
      "m.se",
      "n.se",
      "naturbruksgymn.se",
      "o.se",
      "org.se",
      "p.se",
      "parti.se",
      "pp.se",
      "press.se",
      "r.se",
      "s.se",
      "t.se",
      "tm.se",
      "u.se",
      "w.se",
      "x.se",
      "y.se",
      "z.se",
      "sg",
      "com.sg",
      "net.sg",
      "org.sg",
      "gov.sg",
      "edu.sg",
      "per.sg",
      "sh",
      "com.sh",
      "net.sh",
      "gov.sh",
      "org.sh",
      "mil.sh",
      "si",
      "sj",
      "sk",
      "sl",
      "com.sl",
      "net.sl",
      "edu.sl",
      "gov.sl",
      "org.sl",
      "sm",
      "sn",
      "art.sn",
      "com.sn",
      "edu.sn",
      "gouv.sn",
      "org.sn",
      "perso.sn",
      "univ.sn",
      "so",
      "com.so",
      "edu.so",
      "gov.so",
      "me.so",
      "net.so",
      "org.so",
      "sr",
      "ss",
      "biz.ss",
      "com.ss",
      "edu.ss",
      "gov.ss",
      "net.ss",
      "org.ss",
      "st",
      "co.st",
      "com.st",
      "consulado.st",
      "edu.st",
      "embaixada.st",
      "gov.st",
      "mil.st",
      "net.st",
      "org.st",
      "principe.st",
      "saotome.st",
      "store.st",
      "su",
      "sv",
      "com.sv",
      "edu.sv",
      "gob.sv",
      "org.sv",
      "red.sv",
      "sx",
      "gov.sx",
      "sy",
      "edu.sy",
      "gov.sy",
      "net.sy",
      "mil.sy",
      "com.sy",
      "org.sy",
      "sz",
      "co.sz",
      "ac.sz",
      "org.sz",
      "tc",
      "td",
      "tel",
      "tf",
      "tg",
      "th",
      "ac.th",
      "co.th",
      "go.th",
      "in.th",
      "mi.th",
      "net.th",
      "or.th",
      "tj",
      "ac.tj",
      "biz.tj",
      "co.tj",
      "com.tj",
      "edu.tj",
      "go.tj",
      "gov.tj",
      "int.tj",
      "mil.tj",
      "name.tj",
      "net.tj",
      "nic.tj",
      "org.tj",
      "test.tj",
      "web.tj",
      "tk",
      "tl",
      "gov.tl",
      "tm",
      "com.tm",
      "co.tm",
      "org.tm",
      "net.tm",
      "nom.tm",
      "gov.tm",
      "mil.tm",
      "edu.tm",
      "tn",
      "com.tn",
      "ens.tn",
      "fin.tn",
      "gov.tn",
      "ind.tn",
      "intl.tn",
      "nat.tn",
      "net.tn",
      "org.tn",
      "info.tn",
      "perso.tn",
      "tourism.tn",
      "edunet.tn",
      "rnrt.tn",
      "rns.tn",
      "rnu.tn",
      "mincom.tn",
      "agrinet.tn",
      "defense.tn",
      "turen.tn",
      "to",
      "com.to",
      "gov.to",
      "net.to",
      "org.to",
      "edu.to",
      "mil.to",
      "tr",
      "av.tr",
      "bbs.tr",
      "bel.tr",
      "biz.tr",
      "com.tr",
      "dr.tr",
      "edu.tr",
      "gen.tr",
      "gov.tr",
      "info.tr",
      "mil.tr",
      "k12.tr",
      "kep.tr",
      "name.tr",
      "net.tr",
      "org.tr",
      "pol.tr",
      "tel.tr",
      "tsk.tr",
      "tv.tr",
      "web.tr",
      "nc.tr",
      "gov.nc.tr",
      "tt",
      "co.tt",
      "com.tt",
      "org.tt",
      "net.tt",
      "biz.tt",
      "info.tt",
      "pro.tt",
      "int.tt",
      "coop.tt",
      "jobs.tt",
      "mobi.tt",
      "travel.tt",
      "museum.tt",
      "aero.tt",
      "name.tt",
      "gov.tt",
      "edu.tt",
      "tv",
      "tw",
      "edu.tw",
      "gov.tw",
      "mil.tw",
      "com.tw",
      "net.tw",
      "org.tw",
      "idv.tw",
      "game.tw",
      "ebiz.tw",
      "club.tw",
      "\u7DB2\u8DEF.tw",
      "\u7D44\u7E54.tw",
      "\u5546\u696D.tw",
      "tz",
      "ac.tz",
      "co.tz",
      "go.tz",
      "hotel.tz",
      "info.tz",
      "me.tz",
      "mil.tz",
      "mobi.tz",
      "ne.tz",
      "or.tz",
      "sc.tz",
      "tv.tz",
      "ua",
      "com.ua",
      "edu.ua",
      "gov.ua",
      "in.ua",
      "net.ua",
      "org.ua",
      "cherkassy.ua",
      "cherkasy.ua",
      "chernigov.ua",
      "chernihiv.ua",
      "chernivtsi.ua",
      "chernovtsy.ua",
      "ck.ua",
      "cn.ua",
      "cr.ua",
      "crimea.ua",
      "cv.ua",
      "dn.ua",
      "dnepropetrovsk.ua",
      "dnipropetrovsk.ua",
      "dominic.ua",
      "donetsk.ua",
      "dp.ua",
      "if.ua",
      "ivano-frankivsk.ua",
      "kh.ua",
      "kharkiv.ua",
      "kharkov.ua",
      "kherson.ua",
      "khmelnitskiy.ua",
      "khmelnytskyi.ua",
      "kiev.ua",
      "kirovograd.ua",
      "km.ua",
      "kr.ua",
      "krym.ua",
      "ks.ua",
      "kv.ua",
      "kyiv.ua",
      "lg.ua",
      "lt.ua",
      "lugansk.ua",
      "lutsk.ua",
      "lv.ua",
      "lviv.ua",
      "mk.ua",
      "mykolaiv.ua",
      "nikolaev.ua",
      "od.ua",
      "odesa.ua",
      "odessa.ua",
      "pl.ua",
      "poltava.ua",
      "rivne.ua",
      "rovno.ua",
      "rv.ua",
      "sb.ua",
      "sebastopol.ua",
      "sevastopol.ua",
      "sm.ua",
      "sumy.ua",
      "te.ua",
      "ternopil.ua",
      "uz.ua",
      "uzhgorod.ua",
      "vinnica.ua",
      "vinnytsia.ua",
      "vn.ua",
      "volyn.ua",
      "yalta.ua",
      "zaporizhzhe.ua",
      "zaporizhzhia.ua",
      "zhitomir.ua",
      "zhytomyr.ua",
      "zp.ua",
      "zt.ua",
      "ug",
      "co.ug",
      "or.ug",
      "ac.ug",
      "sc.ug",
      "go.ug",
      "ne.ug",
      "com.ug",
      "org.ug",
      "uk",
      "ac.uk",
      "co.uk",
      "gov.uk",
      "ltd.uk",
      "me.uk",
      "net.uk",
      "nhs.uk",
      "org.uk",
      "plc.uk",
      "police.uk",
      "*.sch.uk",
      "us",
      "dni.us",
      "fed.us",
      "isa.us",
      "kids.us",
      "nsn.us",
      "ak.us",
      "al.us",
      "ar.us",
      "as.us",
      "az.us",
      "ca.us",
      "co.us",
      "ct.us",
      "dc.us",
      "de.us",
      "fl.us",
      "ga.us",
      "gu.us",
      "hi.us",
      "ia.us",
      "id.us",
      "il.us",
      "in.us",
      "ks.us",
      "ky.us",
      "la.us",
      "ma.us",
      "md.us",
      "me.us",
      "mi.us",
      "mn.us",
      "mo.us",
      "ms.us",
      "mt.us",
      "nc.us",
      "nd.us",
      "ne.us",
      "nh.us",
      "nj.us",
      "nm.us",
      "nv.us",
      "ny.us",
      "oh.us",
      "ok.us",
      "or.us",
      "pa.us",
      "pr.us",
      "ri.us",
      "sc.us",
      "sd.us",
      "tn.us",
      "tx.us",
      "ut.us",
      "vi.us",
      "vt.us",
      "va.us",
      "wa.us",
      "wi.us",
      "wv.us",
      "wy.us",
      "k12.ak.us",
      "k12.al.us",
      "k12.ar.us",
      "k12.as.us",
      "k12.az.us",
      "k12.ca.us",
      "k12.co.us",
      "k12.ct.us",
      "k12.dc.us",
      "k12.de.us",
      "k12.fl.us",
      "k12.ga.us",
      "k12.gu.us",
      "k12.ia.us",
      "k12.id.us",
      "k12.il.us",
      "k12.in.us",
      "k12.ks.us",
      "k12.ky.us",
      "k12.la.us",
      "k12.ma.us",
      "k12.md.us",
      "k12.me.us",
      "k12.mi.us",
      "k12.mn.us",
      "k12.mo.us",
      "k12.ms.us",
      "k12.mt.us",
      "k12.nc.us",
      "k12.ne.us",
      "k12.nh.us",
      "k12.nj.us",
      "k12.nm.us",
      "k12.nv.us",
      "k12.ny.us",
      "k12.oh.us",
      "k12.ok.us",
      "k12.or.us",
      "k12.pa.us",
      "k12.pr.us",
      "k12.ri.us",
      "k12.sc.us",
      "k12.tn.us",
      "k12.tx.us",
      "k12.ut.us",
      "k12.vi.us",
      "k12.vt.us",
      "k12.va.us",
      "k12.wa.us",
      "k12.wi.us",
      "k12.wy.us",
      "cc.ak.us",
      "cc.al.us",
      "cc.ar.us",
      "cc.as.us",
      "cc.az.us",
      "cc.ca.us",
      "cc.co.us",
      "cc.ct.us",
      "cc.dc.us",
      "cc.de.us",
      "cc.fl.us",
      "cc.ga.us",
      "cc.gu.us",
      "cc.hi.us",
      "cc.ia.us",
      "cc.id.us",
      "cc.il.us",
      "cc.in.us",
      "cc.ks.us",
      "cc.ky.us",
      "cc.la.us",
      "cc.ma.us",
      "cc.md.us",
      "cc.me.us",
      "cc.mi.us",
      "cc.mn.us",
      "cc.mo.us",
      "cc.ms.us",
      "cc.mt.us",
      "cc.nc.us",
      "cc.nd.us",
      "cc.ne.us",
      "cc.nh.us",
      "cc.nj.us",
      "cc.nm.us",
      "cc.nv.us",
      "cc.ny.us",
      "cc.oh.us",
      "cc.ok.us",
      "cc.or.us",
      "cc.pa.us",
      "cc.pr.us",
      "cc.ri.us",
      "cc.sc.us",
      "cc.sd.us",
      "cc.tn.us",
      "cc.tx.us",
      "cc.ut.us",
      "cc.vi.us",
      "cc.vt.us",
      "cc.va.us",
      "cc.wa.us",
      "cc.wi.us",
      "cc.wv.us",
      "cc.wy.us",
      "lib.ak.us",
      "lib.al.us",
      "lib.ar.us",
      "lib.as.us",
      "lib.az.us",
      "lib.ca.us",
      "lib.co.us",
      "lib.ct.us",
      "lib.dc.us",
      "lib.fl.us",
      "lib.ga.us",
      "lib.gu.us",
      "lib.hi.us",
      "lib.ia.us",
      "lib.id.us",
      "lib.il.us",
      "lib.in.us",
      "lib.ks.us",
      "lib.ky.us",
      "lib.la.us",
      "lib.ma.us",
      "lib.md.us",
      "lib.me.us",
      "lib.mi.us",
      "lib.mn.us",
      "lib.mo.us",
      "lib.ms.us",
      "lib.mt.us",
      "lib.nc.us",
      "lib.nd.us",
      "lib.ne.us",
      "lib.nh.us",
      "lib.nj.us",
      "lib.nm.us",
      "lib.nv.us",
      "lib.ny.us",
      "lib.oh.us",
      "lib.ok.us",
      "lib.or.us",
      "lib.pa.us",
      "lib.pr.us",
      "lib.ri.us",
      "lib.sc.us",
      "lib.sd.us",
      "lib.tn.us",
      "lib.tx.us",
      "lib.ut.us",
      "lib.vi.us",
      "lib.vt.us",
      "lib.va.us",
      "lib.wa.us",
      "lib.wi.us",
      "lib.wy.us",
      "pvt.k12.ma.us",
      "chtr.k12.ma.us",
      "paroch.k12.ma.us",
      "ann-arbor.mi.us",
      "cog.mi.us",
      "dst.mi.us",
      "eaton.mi.us",
      "gen.mi.us",
      "mus.mi.us",
      "tec.mi.us",
      "washtenaw.mi.us",
      "uy",
      "com.uy",
      "edu.uy",
      "gub.uy",
      "mil.uy",
      "net.uy",
      "org.uy",
      "uz",
      "co.uz",
      "com.uz",
      "net.uz",
      "org.uz",
      "va",
      "vc",
      "com.vc",
      "net.vc",
      "org.vc",
      "gov.vc",
      "mil.vc",
      "edu.vc",
      "ve",
      "arts.ve",
      "co.ve",
      "com.ve",
      "e12.ve",
      "edu.ve",
      "firm.ve",
      "gob.ve",
      "gov.ve",
      "info.ve",
      "int.ve",
      "mil.ve",
      "net.ve",
      "org.ve",
      "rec.ve",
      "store.ve",
      "tec.ve",
      "web.ve",
      "vg",
      "vi",
      "co.vi",
      "com.vi",
      "k12.vi",
      "net.vi",
      "org.vi",
      "vn",
      "com.vn",
      "net.vn",
      "org.vn",
      "edu.vn",
      "gov.vn",
      "int.vn",
      "ac.vn",
      "biz.vn",
      "info.vn",
      "name.vn",
      "pro.vn",
      "health.vn",
      "vu",
      "com.vu",
      "edu.vu",
      "net.vu",
      "org.vu",
      "wf",
      "ws",
      "com.ws",
      "net.ws",
      "org.ws",
      "gov.ws",
      "edu.ws",
      "yt",
      "\u0627\u0645\u0627\u0631\u0627\u062A",
      "\u0570\u0561\u0575",
      "\u09AC\u09BE\u0982\u09B2\u09BE",
      "\u0431\u0433",
      "\u0431\u0435\u043B",
      "\u4E2D\u56FD",
      "\u4E2D\u570B",
      "\u0627\u0644\u062C\u0632\u0627\u0626\u0631",
      "\u0645\u0635\u0631",
      "\u0435\u044E",
      "\u03B5\u03C5",
      "\u0645\u0648\u0631\u064A\u062A\u0627\u0646\u064A\u0627",
      "\u10D2\u10D4",
      "\u03B5\u03BB",
      "\u9999\u6E2F",
      "\u516C\u53F8.\u9999\u6E2F",
      "\u6559\u80B2.\u9999\u6E2F",
      "\u653F\u5E9C.\u9999\u6E2F",
      "\u500B\u4EBA.\u9999\u6E2F",
      "\u7DB2\u7D61.\u9999\u6E2F",
      "\u7D44\u7E54.\u9999\u6E2F",
      "\u0CAD\u0CBE\u0CB0\u0CA4",
      "\u0B2D\u0B3E\u0B30\u0B24",
      "\u09AD\u09BE\u09F0\u09A4",
      "\u092D\u093E\u0930\u0924\u092E\u094D",
      "\u092D\u093E\u0930\u094B\u0924",
      "\u0680\u0627\u0631\u062A",
      "\u0D2D\u0D3E\u0D30\u0D24\u0D02",
      "\u092D\u093E\u0930\u0924",
      "\u0628\u0627\u0631\u062A",
      "\u0628\u06BE\u0627\u0631\u062A",
      "\u0C2D\u0C3E\u0C30\u0C24\u0C4D",
      "\u0AAD\u0ABE\u0AB0\u0AA4",
      "\u0A2D\u0A3E\u0A30\u0A24",
      "\u09AD\u09BE\u09B0\u09A4",
      "\u0B87\u0BA8\u0BCD\u0BA4\u0BBF\u0BAF\u0BBE",
      "\u0627\u06CC\u0631\u0627\u0646",
      "\u0627\u064A\u0631\u0627\u0646",
      "\u0639\u0631\u0627\u0642",
      "\u0627\u0644\u0627\u0631\u062F\u0646",
      "\uD55C\uAD6D",
      "\u049B\u0430\u0437",
      "\u0DBD\u0D82\u0D9A\u0DCF",
      "\u0B87\u0BB2\u0B99\u0BCD\u0B95\u0BC8",
      "\u0627\u0644\u0645\u063A\u0631\u0628",
      "\u043C\u043A\u0434",
      "\u043C\u043E\u043D",
      "\u6FB3\u9580",
      "\u6FB3\u95E8",
      "\u0645\u0644\u064A\u0633\u064A\u0627",
      "\u0639\u0645\u0627\u0646",
      "\u067E\u0627\u06A9\u0633\u062A\u0627\u0646",
      "\u067E\u0627\u0643\u0633\u062A\u0627\u0646",
      "\u0641\u0644\u0633\u0637\u064A\u0646",
      "\u0441\u0440\u0431",
      "\u043F\u0440.\u0441\u0440\u0431",
      "\u043E\u0440\u0433.\u0441\u0440\u0431",
      "\u043E\u0431\u0440.\u0441\u0440\u0431",
      "\u043E\u0434.\u0441\u0440\u0431",
      "\u0443\u043F\u0440.\u0441\u0440\u0431",
      "\u0430\u043A.\u0441\u0440\u0431",
      "\u0440\u0444",
      "\u0642\u0637\u0631",
      "\u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629",
      "\u0627\u0644\u0633\u0639\u0648\u062F\u06CC\u0629",
      "\u0627\u0644\u0633\u0639\u0648\u062F\u06CC\u06C3",
      "\u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0647",
      "\u0633\u0648\u062F\u0627\u0646",
      "\u65B0\u52A0\u5761",
      "\u0B9A\u0BBF\u0B99\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0BC2\u0BB0\u0BCD",
      "\u0633\u0648\u0631\u064A\u0629",
      "\u0633\u0648\u0631\u064A\u0627",
      "\u0E44\u0E17\u0E22",
      "\u0E28\u0E36\u0E01\u0E29\u0E32.\u0E44\u0E17\u0E22",
      "\u0E18\u0E38\u0E23\u0E01\u0E34\u0E08.\u0E44\u0E17\u0E22",
      "\u0E23\u0E31\u0E10\u0E1A\u0E32\u0E25.\u0E44\u0E17\u0E22",
      "\u0E17\u0E2B\u0E32\u0E23.\u0E44\u0E17\u0E22",
      "\u0E40\u0E19\u0E47\u0E15.\u0E44\u0E17\u0E22",
      "\u0E2D\u0E07\u0E04\u0E4C\u0E01\u0E23.\u0E44\u0E17\u0E22",
      "\u062A\u0648\u0646\u0633",
      "\u53F0\u7063",
      "\u53F0\u6E7E",
      "\u81FA\u7063",
      "\u0443\u043A\u0440",
      "\u0627\u0644\u064A\u0645\u0646",
      "xxx",
      "*.ye",
      "ac.za",
      "agric.za",
      "alt.za",
      "co.za",
      "edu.za",
      "gov.za",
      "grondar.za",
      "law.za",
      "mil.za",
      "net.za",
      "ngo.za",
      "nic.za",
      "nis.za",
      "nom.za",
      "org.za",
      "school.za",
      "tm.za",
      "web.za",
      "zm",
      "ac.zm",
      "biz.zm",
      "co.zm",
      "com.zm",
      "edu.zm",
      "gov.zm",
      "info.zm",
      "mil.zm",
      "net.zm",
      "org.zm",
      "sch.zm",
      "zw",
      "ac.zw",
      "co.zw",
      "gov.zw",
      "mil.zw",
      "org.zw",
      "aaa",
      "aarp",
      "abarth",
      "abb",
      "abbott",
      "abbvie",
      "abc",
      "able",
      "abogado",
      "abudhabi",
      "academy",
      "accenture",
      "accountant",
      "accountants",
      "aco",
      "actor",
      "adac",
      "ads",
      "adult",
      "aeg",
      "aetna",
      "afamilycompany",
      "afl",
      "africa",
      "agakhan",
      "agency",
      "aig",
      "aigo",
      "airbus",
      "airforce",
      "airtel",
      "akdn",
      "alfaromeo",
      "alibaba",
      "alipay",
      "allfinanz",
      "allstate",
      "ally",
      "alsace",
      "alstom",
      "amazon",
      "americanexpress",
      "americanfamily",
      "amex",
      "amfam",
      "amica",
      "amsterdam",
      "analytics",
      "android",
      "anquan",
      "anz",
      "aol",
      "apartments",
      "app",
      "apple",
      "aquarelle",
      "arab",
      "aramco",
      "archi",
      "army",
      "art",
      "arte",
      "asda",
      "associates",
      "athleta",
      "attorney",
      "auction",
      "audi",
      "audible",
      "audio",
      "auspost",
      "author",
      "auto",
      "autos",
      "avianca",
      "aws",
      "axa",
      "azure",
      "baby",
      "baidu",
      "banamex",
      "bananarepublic",
      "band",
      "bank",
      "bar",
      "barcelona",
      "barclaycard",
      "barclays",
      "barefoot",
      "bargains",
      "baseball",
      "basketball",
      "bauhaus",
      "bayern",
      "bbc",
      "bbt",
      "bbva",
      "bcg",
      "bcn",
      "beats",
      "beauty",
      "beer",
      "bentley",
      "berlin",
      "best",
      "bestbuy",
      "bet",
      "bharti",
      "bible",
      "bid",
      "bike",
      "bing",
      "bingo",
      "bio",
      "black",
      "blackfriday",
      "blockbuster",
      "blog",
      "bloomberg",
      "blue",
      "bms",
      "bmw",
      "bnpparibas",
      "boats",
      "boehringer",
      "bofa",
      "bom",
      "bond",
      "boo",
      "book",
      "booking",
      "bosch",
      "bostik",
      "boston",
      "bot",
      "boutique",
      "box",
      "bradesco",
      "bridgestone",
      "broadway",
      "broker",
      "brother",
      "brussels",
      "budapest",
      "bugatti",
      "build",
      "builders",
      "business",
      "buy",
      "buzz",
      "bzh",
      "cab",
      "cafe",
      "cal",
      "call",
      "calvinklein",
      "cam",
      "camera",
      "camp",
      "cancerresearch",
      "canon",
      "capetown",
      "capital",
      "capitalone",
      "car",
      "caravan",
      "cards",
      "care",
      "career",
      "careers",
      "cars",
      "casa",
      "case",
      "caseih",
      "cash",
      "casino",
      "catering",
      "catholic",
      "cba",
      "cbn",
      "cbre",
      "cbs",
      "ceb",
      "center",
      "ceo",
      "cern",
      "cfa",
      "cfd",
      "chanel",
      "channel",
      "charity",
      "chase",
      "chat",
      "cheap",
      "chintai",
      "christmas",
      "chrome",
      "church",
      "cipriani",
      "circle",
      "cisco",
      "citadel",
      "citi",
      "citic",
      "city",
      "cityeats",
      "claims",
      "cleaning",
      "click",
      "clinic",
      "clinique",
      "clothing",
      "cloud",
      "club",
      "clubmed",
      "coach",
      "codes",
      "coffee",
      "college",
      "cologne",
      "comcast",
      "commbank",
      "community",
      "company",
      "compare",
      "computer",
      "comsec",
      "condos",
      "construction",
      "consulting",
      "contact",
      "contractors",
      "cooking",
      "cookingchannel",
      "cool",
      "corsica",
      "country",
      "coupon",
      "coupons",
      "courses",
      "cpa",
      "credit",
      "creditcard",
      "creditunion",
      "cricket",
      "crown",
      "crs",
      "cruise",
      "cruises",
      "csc",
      "cuisinella",
      "cymru",
      "cyou",
      "dabur",
      "dad",
      "dance",
      "data",
      "date",
      "dating",
      "datsun",
      "day",
      "dclk",
      "dds",
      "deal",
      "dealer",
      "deals",
      "degree",
      "delivery",
      "dell",
      "deloitte",
      "delta",
      "democrat",
      "dental",
      "dentist",
      "desi",
      "design",
      "dev",
      "dhl",
      "diamonds",
      "diet",
      "digital",
      "direct",
      "directory",
      "discount",
      "discover",
      "dish",
      "diy",
      "dnp",
      "docs",
      "doctor",
      "dog",
      "domains",
      "dot",
      "download",
      "drive",
      "dtv",
      "dubai",
      "duck",
      "dunlop",
      "dupont",
      "durban",
      "dvag",
      "dvr",
      "earth",
      "eat",
      "eco",
      "edeka",
      "education",
      "email",
      "emerck",
      "energy",
      "engineer",
      "engineering",
      "enterprises",
      "epson",
      "equipment",
      "ericsson",
      "erni",
      "esq",
      "estate",
      "esurance",
      "etisalat",
      "eurovision",
      "eus",
      "events",
      "exchange",
      "expert",
      "exposed",
      "express",
      "extraspace",
      "fage",
      "fail",
      "fairwinds",
      "faith",
      "family",
      "fan",
      "fans",
      "farm",
      "farmers",
      "fashion",
      "fast",
      "fedex",
      "feedback",
      "ferrari",
      "ferrero",
      "fiat",
      "fidelity",
      "fido",
      "film",
      "final",
      "finance",
      "financial",
      "fire",
      "firestone",
      "firmdale",
      "fish",
      "fishing",
      "fit",
      "fitness",
      "flickr",
      "flights",
      "flir",
      "florist",
      "flowers",
      "fly",
      "foo",
      "food",
      "foodnetwork",
      "football",
      "ford",
      "forex",
      "forsale",
      "forum",
      "foundation",
      "fox",
      "free",
      "fresenius",
      "frl",
      "frogans",
      "frontdoor",
      "frontier",
      "ftr",
      "fujitsu",
      "fujixerox",
      "fun",
      "fund",
      "furniture",
      "futbol",
      "fyi",
      "gal",
      "gallery",
      "gallo",
      "gallup",
      "game",
      "games",
      "gap",
      "garden",
      "gay",
      "gbiz",
      "gdn",
      "gea",
      "gent",
      "genting",
      "george",
      "ggee",
      "gift",
      "gifts",
      "gives",
      "giving",
      "glade",
      "glass",
      "gle",
      "global",
      "globo",
      "gmail",
      "gmbh",
      "gmo",
      "gmx",
      "godaddy",
      "gold",
      "goldpoint",
      "golf",
      "goo",
      "goodyear",
      "goog",
      "google",
      "gop",
      "got",
      "grainger",
      "graphics",
      "gratis",
      "green",
      "gripe",
      "grocery",
      "group",
      "guardian",
      "gucci",
      "guge",
      "guide",
      "guitars",
      "guru",
      "hair",
      "hamburg",
      "hangout",
      "haus",
      "hbo",
      "hdfc",
      "hdfcbank",
      "health",
      "healthcare",
      "help",
      "helsinki",
      "here",
      "hermes",
      "hgtv",
      "hiphop",
      "hisamitsu",
      "hitachi",
      "hiv",
      "hkt",
      "hockey",
      "holdings",
      "holiday",
      "homedepot",
      "homegoods",
      "homes",
      "homesense",
      "honda",
      "horse",
      "hospital",
      "host",
      "hosting",
      "hot",
      "hoteles",
      "hotels",
      "hotmail",
      "house",
      "how",
      "hsbc",
      "hughes",
      "hyatt",
      "hyundai",
      "ibm",
      "icbc",
      "ice",
      "icu",
      "ieee",
      "ifm",
      "ikano",
      "imamat",
      "imdb",
      "immo",
      "immobilien",
      "inc",
      "industries",
      "infiniti",
      "ing",
      "ink",
      "institute",
      "insurance",
      "insure",
      "intel",
      "international",
      "intuit",
      "investments",
      "ipiranga",
      "irish",
      "ismaili",
      "ist",
      "istanbul",
      "itau",
      "itv",
      "iveco",
      "jaguar",
      "java",
      "jcb",
      "jcp",
      "jeep",
      "jetzt",
      "jewelry",
      "jio",
      "jll",
      "jmp",
      "jnj",
      "joburg",
      "jot",
      "joy",
      "jpmorgan",
      "jprs",
      "juegos",
      "juniper",
      "kaufen",
      "kddi",
      "kerryhotels",
      "kerrylogistics",
      "kerryproperties",
      "kfh",
      "kia",
      "kim",
      "kinder",
      "kindle",
      "kitchen",
      "kiwi",
      "koeln",
      "komatsu",
      "kosher",
      "kpmg",
      "kpn",
      "krd",
      "kred",
      "kuokgroup",
      "kyoto",
      "lacaixa",
      "lamborghini",
      "lamer",
      "lancaster",
      "lancia",
      "land",
      "landrover",
      "lanxess",
      "lasalle",
      "lat",
      "latino",
      "latrobe",
      "law",
      "lawyer",
      "lds",
      "lease",
      "leclerc",
      "lefrak",
      "legal",
      "lego",
      "lexus",
      "lgbt",
      "lidl",
      "life",
      "lifeinsurance",
      "lifestyle",
      "lighting",
      "like",
      "lilly",
      "limited",
      "limo",
      "lincoln",
      "linde",
      "link",
      "lipsy",
      "live",
      "living",
      "lixil",
      "llc",
      "llp",
      "loan",
      "loans",
      "locker",
      "locus",
      "loft",
      "lol",
      "london",
      "lotte",
      "lotto",
      "love",
      "lpl",
      "lplfinancial",
      "ltd",
      "ltda",
      "lundbeck",
      "lupin",
      "luxe",
      "luxury",
      "macys",
      "madrid",
      "maif",
      "maison",
      "makeup",
      "man",
      "management",
      "mango",
      "map",
      "market",
      "marketing",
      "markets",
      "marriott",
      "marshalls",
      "maserati",
      "mattel",
      "mba",
      "mckinsey",
      "med",
      "media",
      "meet",
      "melbourne",
      "meme",
      "memorial",
      "men",
      "menu",
      "merckmsd",
      "metlife",
      "miami",
      "microsoft",
      "mini",
      "mint",
      "mit",
      "mitsubishi",
      "mlb",
      "mls",
      "mma",
      "mobile",
      "moda",
      "moe",
      "moi",
      "mom",
      "monash",
      "money",
      "monster",
      "mormon",
      "mortgage",
      "moscow",
      "moto",
      "motorcycles",
      "mov",
      "movie",
      "msd",
      "mtn",
      "mtr",
      "mutual",
      "nab",
      "nadex",
      "nagoya",
      "nationwide",
      "natura",
      "navy",
      "nba",
      "nec",
      "netbank",
      "netflix",
      "network",
      "neustar",
      "new",
      "newholland",
      "news",
      "next",
      "nextdirect",
      "nexus",
      "nfl",
      "ngo",
      "nhk",
      "nico",
      "nike",
      "nikon",
      "ninja",
      "nissan",
      "nissay",
      "nokia",
      "northwesternmutual",
      "norton",
      "now",
      "nowruz",
      "nowtv",
      "nra",
      "nrw",
      "ntt",
      "nyc",
      "obi",
      "observer",
      "off",
      "office",
      "okinawa",
      "olayan",
      "olayangroup",
      "oldnavy",
      "ollo",
      "omega",
      "one",
      "ong",
      "onl",
      "online",
      "onyourside",
      "ooo",
      "open",
      "oracle",
      "orange",
      "organic",
      "origins",
      "osaka",
      "otsuka",
      "ott",
      "ovh",
      "page",
      "panasonic",
      "paris",
      "pars",
      "partners",
      "parts",
      "party",
      "passagens",
      "pay",
      "pccw",
      "pet",
      "pfizer",
      "pharmacy",
      "phd",
      "philips",
      "phone",
      "photo",
      "photography",
      "photos",
      "physio",
      "pics",
      "pictet",
      "pictures",
      "pid",
      "pin",
      "ping",
      "pink",
      "pioneer",
      "pizza",
      "place",
      "play",
      "playstation",
      "plumbing",
      "plus",
      "pnc",
      "pohl",
      "poker",
      "politie",
      "porn",
      "pramerica",
      "praxi",
      "press",
      "prime",
      "prod",
      "productions",
      "prof",
      "progressive",
      "promo",
      "properties",
      "property",
      "protection",
      "pru",
      "prudential",
      "pub",
      "pwc",
      "qpon",
      "quebec",
      "quest",
      "qvc",
      "racing",
      "radio",
      "raid",
      "read",
      "realestate",
      "realtor",
      "realty",
      "recipes",
      "red",
      "redstone",
      "redumbrella",
      "rehab",
      "reise",
      "reisen",
      "reit",
      "reliance",
      "ren",
      "rent",
      "rentals",
      "repair",
      "report",
      "republican",
      "rest",
      "restaurant",
      "review",
      "reviews",
      "rexroth",
      "rich",
      "richardli",
      "ricoh",
      "rightathome",
      "ril",
      "rio",
      "rip",
      "rmit",
      "rocher",
      "rocks",
      "rodeo",
      "rogers",
      "room",
      "rsvp",
      "rugby",
      "ruhr",
      "run",
      "rwe",
      "ryukyu",
      "saarland",
      "safe",
      "safety",
      "sakura",
      "sale",
      "salon",
      "samsclub",
      "samsung",
      "sandvik",
      "sandvikcoromant",
      "sanofi",
      "sap",
      "sarl",
      "sas",
      "save",
      "saxo",
      "sbi",
      "sbs",
      "sca",
      "scb",
      "schaeffler",
      "schmidt",
      "scholarships",
      "school",
      "schule",
      "schwarz",
      "science",
      "scjohnson",
      "scor",
      "scot",
      "search",
      "seat",
      "secure",
      "security",
      "seek",
      "select",
      "sener",
      "services",
      "ses",
      "seven",
      "sew",
      "sex",
      "sexy",
      "sfr",
      "shangrila",
      "sharp",
      "shaw",
      "shell",
      "shia",
      "shiksha",
      "shoes",
      "shop",
      "shopping",
      "shouji",
      "show",
      "showtime",
      "shriram",
      "silk",
      "sina",
      "singles",
      "site",
      "ski",
      "skin",
      "sky",
      "skype",
      "sling",
      "smart",
      "smile",
      "sncf",
      "soccer",
      "social",
      "softbank",
      "software",
      "sohu",
      "solar",
      "solutions",
      "song",
      "sony",
      "soy",
      "spa",
      "space",
      "sport",
      "spot",
      "spreadbetting",
      "srl",
      "stada",
      "staples",
      "star",
      "statebank",
      "statefarm",
      "stc",
      "stcgroup",
      "stockholm",
      "storage",
      "store",
      "stream",
      "studio",
      "study",
      "style",
      "sucks",
      "supplies",
      "supply",
      "support",
      "surf",
      "surgery",
      "suzuki",
      "swatch",
      "swiftcover",
      "swiss",
      "sydney",
      "symantec",
      "systems",
      "tab",
      "taipei",
      "talk",
      "taobao",
      "target",
      "tatamotors",
      "tatar",
      "tattoo",
      "tax",
      "taxi",
      "tci",
      "tdk",
      "team",
      "tech",
      "technology",
      "temasek",
      "tennis",
      "teva",
      "thd",
      "theater",
      "theatre",
      "tiaa",
      "tickets",
      "tienda",
      "tiffany",
      "tips",
      "tires",
      "tirol",
      "tjmaxx",
      "tjx",
      "tkmaxx",
      "tmall",
      "today",
      "tokyo",
      "tools",
      "top",
      "toray",
      "toshiba",
      "total",
      "tours",
      "town",
      "toyota",
      "toys",
      "trade",
      "trading",
      "training",
      "travel",
      "travelchannel",
      "travelers",
      "travelersinsurance",
      "trust",
      "trv",
      "tube",
      "tui",
      "tunes",
      "tushu",
      "tvs",
      "ubank",
      "ubs",
      "unicom",
      "university",
      "uno",
      "uol",
      "ups",
      "vacations",
      "vana",
      "vanguard",
      "vegas",
      "ventures",
      "verisign",
      "versicherung",
      "vet",
      "viajes",
      "video",
      "vig",
      "viking",
      "villas",
      "vin",
      "vip",
      "virgin",
      "visa",
      "vision",
      "viva",
      "vivo",
      "vlaanderen",
      "vodka",
      "volkswagen",
      "volvo",
      "vote",
      "voting",
      "voto",
      "voyage",
      "vuelos",
      "wales",
      "walmart",
      "walter",
      "wang",
      "wanggou",
      "watch",
      "watches",
      "weather",
      "weatherchannel",
      "webcam",
      "weber",
      "website",
      "wed",
      "wedding",
      "weibo",
      "weir",
      "whoswho",
      "wien",
      "wiki",
      "williamhill",
      "win",
      "windows",
      "wine",
      "winners",
      "wme",
      "wolterskluwer",
      "woodside",
      "work",
      "works",
      "world",
      "wow",
      "wtc",
      "wtf",
      "xbox",
      "xerox",
      "xfinity",
      "xihuan",
      "xin",
      "\u0915\u0949\u092E",
      "\u30BB\u30FC\u30EB",
      "\u4F5B\u5C71",
      "\u6148\u5584",
      "\u96C6\u56E2",
      "\u5728\u7EBF",
      "\u5927\u4F17\u6C7D\u8F66",
      "\u70B9\u770B",
      "\u0E04\u0E2D\u0E21",
      "\u516B\u5366",
      "\u0645\u0648\u0642\u0639",
      "\u516C\u76CA",
      "\u516C\u53F8",
      "\u9999\u683C\u91CC\u62C9",
      "\u7F51\u7AD9",
      "\u79FB\u52A8",
      "\u6211\u7231\u4F60",
      "\u043C\u043E\u0441\u043A\u0432\u0430",
      "\u043A\u0430\u0442\u043E\u043B\u0438\u043A",
      "\u043E\u043D\u043B\u0430\u0439\u043D",
      "\u0441\u0430\u0439\u0442",
      "\u8054\u901A",
      "\u05E7\u05D5\u05DD",
      "\u65F6\u5C1A",
      "\u5FAE\u535A",
      "\u6DE1\u9A6C\u9521",
      "\u30D5\u30A1\u30C3\u30B7\u30E7\u30F3",
      "\u043E\u0440\u0433",
      "\u0928\u0947\u091F",
      "\u30B9\u30C8\u30A2",
      "\u30A2\u30DE\u30BE\u30F3",
      "\uC0BC\uC131",
      "\u5546\u6807",
      "\u5546\u5E97",
      "\u5546\u57CE",
      "\u0434\u0435\u0442\u0438",
      "\u30DD\u30A4\u30F3\u30C8",
      "\u65B0\u95FB",
      "\u5DE5\u884C",
      "\u5BB6\u96FB",
      "\u0643\u0648\u0645",
      "\u4E2D\u6587\u7F51",
      "\u4E2D\u4FE1",
      "\u5A31\u4E50",
      "\u8C37\u6B4C",
      "\u96FB\u8A0A\u76C8\u79D1",
      "\u8D2D\u7269",
      "\u30AF\u30E9\u30A6\u30C9",
      "\u901A\u8CA9",
      "\u7F51\u5E97",
      "\u0938\u0902\u0917\u0920\u0928",
      "\u9910\u5385",
      "\u7F51\u7EDC",
      "\u043A\u043E\u043C",
      "\u4E9A\u9A6C\u900A",
      "\u8BFA\u57FA\u4E9A",
      "\u98DF\u54C1",
      "\u98DE\u5229\u6D66",
      "\u624B\u8868",
      "\u624B\u673A",
      "\u0627\u0631\u0627\u0645\u0643\u0648",
      "\u0627\u0644\u0639\u0644\u064A\u0627\u0646",
      "\u0627\u062A\u0635\u0627\u0644\u0627\u062A",
      "\u0628\u0627\u0632\u0627\u0631",
      "\u0627\u0628\u0648\u0638\u0628\u064A",
      "\u0643\u0627\u062B\u0648\u0644\u064A\u0643",
      "\u0647\u0645\u0631\u0627\u0647",
      "\uB2F7\uCEF4",
      "\u653F\u5E9C",
      "\u0634\u0628\u0643\u0629",
      "\u0628\u064A\u062A\u0643",
      "\u0639\u0631\u0628",
      "\u673A\u6784",
      "\u7EC4\u7EC7\u673A\u6784",
      "\u5065\u5EB7",
      "\u62DB\u8058",
      "\u0440\u0443\u0441",
      "\u73E0\u5B9D",
      "\u5927\u62FF",
      "\u307F\u3093\u306A",
      "\u30B0\u30FC\u30B0\u30EB",
      "\u4E16\u754C",
      "\u66F8\u7C4D",
      "\u7F51\u5740",
      "\uB2F7\uB137",
      "\u30B3\u30E0",
      "\u5929\u4E3B\u6559",
      "\u6E38\u620F",
      "verm\xF6gensberater",
      "verm\xF6gensberatung",
      "\u4F01\u4E1A",
      "\u4FE1\u606F",
      "\u5609\u91CC\u5927\u9152\u5E97",
      "\u5609\u91CC",
      "\u5E7F\u4E1C",
      "\u653F\u52A1",
      "xyz",
      "yachts",
      "yahoo",
      "yamaxun",
      "yandex",
      "yodobashi",
      "yoga",
      "yokohama",
      "you",
      "youtube",
      "yun",
      "zappos",
      "zara",
      "zero",
      "zip",
      "zone",
      "zuerich",
      "cc.ua",
      "inf.ua",
      "ltd.ua",
      "adobeaemcloud.com",
      "adobeaemcloud.net",
      "*.dev.adobeaemcloud.com",
      "beep.pl",
      "barsy.ca",
      "*.compute.estate",
      "*.alces.network",
      "altervista.org",
      "alwaysdata.net",
      "cloudfront.net",
      "*.compute.amazonaws.com",
      "*.compute-1.amazonaws.com",
      "*.compute.amazonaws.com.cn",
      "us-east-1.amazonaws.com",
      "cn-north-1.eb.amazonaws.com.cn",
      "cn-northwest-1.eb.amazonaws.com.cn",
      "elasticbeanstalk.com",
      "ap-northeast-1.elasticbeanstalk.com",
      "ap-northeast-2.elasticbeanstalk.com",
      "ap-northeast-3.elasticbeanstalk.com",
      "ap-south-1.elasticbeanstalk.com",
      "ap-southeast-1.elasticbeanstalk.com",
      "ap-southeast-2.elasticbeanstalk.com",
      "ca-central-1.elasticbeanstalk.com",
      "eu-central-1.elasticbeanstalk.com",
      "eu-west-1.elasticbeanstalk.com",
      "eu-west-2.elasticbeanstalk.com",
      "eu-west-3.elasticbeanstalk.com",
      "sa-east-1.elasticbeanstalk.com",
      "us-east-1.elasticbeanstalk.com",
      "us-east-2.elasticbeanstalk.com",
      "us-gov-west-1.elasticbeanstalk.com",
      "us-west-1.elasticbeanstalk.com",
      "us-west-2.elasticbeanstalk.com",
      "*.elb.amazonaws.com",
      "*.elb.amazonaws.com.cn",
      "s3.amazonaws.com",
      "s3-ap-northeast-1.amazonaws.com",
      "s3-ap-northeast-2.amazonaws.com",
      "s3-ap-south-1.amazonaws.com",
      "s3-ap-southeast-1.amazonaws.com",
      "s3-ap-southeast-2.amazonaws.com",
      "s3-ca-central-1.amazonaws.com",
      "s3-eu-central-1.amazonaws.com",
      "s3-eu-west-1.amazonaws.com",
      "s3-eu-west-2.amazonaws.com",
      "s3-eu-west-3.amazonaws.com",
      "s3-external-1.amazonaws.com",
      "s3-fips-us-gov-west-1.amazonaws.com",
      "s3-sa-east-1.amazonaws.com",
      "s3-us-gov-west-1.amazonaws.com",
      "s3-us-east-2.amazonaws.com",
      "s3-us-west-1.amazonaws.com",
      "s3-us-west-2.amazonaws.com",
      "s3.ap-northeast-2.amazonaws.com",
      "s3.ap-south-1.amazonaws.com",
      "s3.cn-north-1.amazonaws.com.cn",
      "s3.ca-central-1.amazonaws.com",
      "s3.eu-central-1.amazonaws.com",
      "s3.eu-west-2.amazonaws.com",
      "s3.eu-west-3.amazonaws.com",
      "s3.us-east-2.amazonaws.com",
      "s3.dualstack.ap-northeast-1.amazonaws.com",
      "s3.dualstack.ap-northeast-2.amazonaws.com",
      "s3.dualstack.ap-south-1.amazonaws.com",
      "s3.dualstack.ap-southeast-1.amazonaws.com",
      "s3.dualstack.ap-southeast-2.amazonaws.com",
      "s3.dualstack.ca-central-1.amazonaws.com",
      "s3.dualstack.eu-central-1.amazonaws.com",
      "s3.dualstack.eu-west-1.amazonaws.com",
      "s3.dualstack.eu-west-2.amazonaws.com",
      "s3.dualstack.eu-west-3.amazonaws.com",
      "s3.dualstack.sa-east-1.amazonaws.com",
      "s3.dualstack.us-east-1.amazonaws.com",
      "s3.dualstack.us-east-2.amazonaws.com",
      "s3-website-us-east-1.amazonaws.com",
      "s3-website-us-west-1.amazonaws.com",
      "s3-website-us-west-2.amazonaws.com",
      "s3-website-ap-northeast-1.amazonaws.com",
      "s3-website-ap-southeast-1.amazonaws.com",
      "s3-website-ap-southeast-2.amazonaws.com",
      "s3-website-eu-west-1.amazonaws.com",
      "s3-website-sa-east-1.amazonaws.com",
      "s3-website.ap-northeast-2.amazonaws.com",
      "s3-website.ap-south-1.amazonaws.com",
      "s3-website.ca-central-1.amazonaws.com",
      "s3-website.eu-central-1.amazonaws.com",
      "s3-website.eu-west-2.amazonaws.com",
      "s3-website.eu-west-3.amazonaws.com",
      "s3-website.us-east-2.amazonaws.com",
      "amsw.nl",
      "t3l3p0rt.net",
      "tele.amune.org",
      "apigee.io",
      "on-aptible.com",
      "user.aseinet.ne.jp",
      "gv.vc",
      "d.gv.vc",
      "user.party.eus",
      "pimienta.org",
      "poivron.org",
      "potager.org",
      "sweetpepper.org",
      "myasustor.com",
      "myfritz.net",
      "*.awdev.ca",
      "*.advisor.ws",
      "b-data.io",
      "backplaneapp.io",
      "balena-devices.com",
      "app.banzaicloud.io",
      "betainabox.com",
      "bnr.la",
      "blackbaudcdn.net",
      "boomla.net",
      "boxfuse.io",
      "square7.ch",
      "bplaced.com",
      "bplaced.de",
      "square7.de",
      "bplaced.net",
      "square7.net",
      "browsersafetymark.io",
      "uk0.bigv.io",
      "dh.bytemark.co.uk",
      "vm.bytemark.co.uk",
      "mycd.eu",
      "carrd.co",
      "crd.co",
      "uwu.ai",
      "ae.org",
      "ar.com",
      "br.com",
      "cn.com",
      "com.de",
      "com.se",
      "de.com",
      "eu.com",
      "gb.com",
      "gb.net",
      "hu.com",
      "hu.net",
      "jp.net",
      "jpn.com",
      "kr.com",
      "mex.com",
      "no.com",
      "qc.com",
      "ru.com",
      "sa.com",
      "se.net",
      "uk.com",
      "uk.net",
      "us.com",
      "uy.com",
      "za.bz",
      "za.com",
      "africa.com",
      "gr.com",
      "in.net",
      "us.org",
      "co.com",
      "c.la",
      "certmgr.org",
      "xenapponazure.com",
      "discourse.group",
      "discourse.team",
      "virtueeldomein.nl",
      "cleverapps.io",
      "*.lcl.dev",
      "*.stg.dev",
      "c66.me",
      "cloud66.ws",
      "cloud66.zone",
      "jdevcloud.com",
      "wpdevcloud.com",
      "cloudaccess.host",
      "freesite.host",
      "cloudaccess.net",
      "cloudcontrolled.com",
      "cloudcontrolapp.com",
      "cloudera.site",
      "trycloudflare.com",
      "workers.dev",
      "wnext.app",
      "co.ca",
      "*.otap.co",
      "co.cz",
      "c.cdn77.org",
      "cdn77-ssl.net",
      "r.cdn77.net",
      "rsc.cdn77.org",
      "ssl.origin.cdn77-secure.org",
      "cloudns.asia",
      "cloudns.biz",
      "cloudns.club",
      "cloudns.cc",
      "cloudns.eu",
      "cloudns.in",
      "cloudns.info",
      "cloudns.org",
      "cloudns.pro",
      "cloudns.pw",
      "cloudns.us",
      "cloudeity.net",
      "cnpy.gdn",
      "co.nl",
      "co.no",
      "webhosting.be",
      "hosting-cluster.nl",
      "ac.ru",
      "edu.ru",
      "gov.ru",
      "int.ru",
      "mil.ru",
      "test.ru",
      "dyn.cosidns.de",
      "dynamisches-dns.de",
      "dnsupdater.de",
      "internet-dns.de",
      "l-o-g-i-n.de",
      "dynamic-dns.info",
      "feste-ip.net",
      "knx-server.net",
      "static-access.net",
      "realm.cz",
      "*.cryptonomic.net",
      "cupcake.is",
      "*.customer-oci.com",
      "*.oci.customer-oci.com",
      "*.ocp.customer-oci.com",
      "*.ocs.customer-oci.com",
      "cyon.link",
      "cyon.site",
      "daplie.me",
      "localhost.daplie.me",
      "dattolocal.com",
      "dattorelay.com",
      "dattoweb.com",
      "mydatto.com",
      "dattolocal.net",
      "mydatto.net",
      "biz.dk",
      "co.dk",
      "firm.dk",
      "reg.dk",
      "store.dk",
      "*.dapps.earth",
      "*.bzz.dapps.earth",
      "builtwithdark.com",
      "edgestack.me",
      "debian.net",
      "dedyn.io",
      "dnshome.de",
      "online.th",
      "shop.th",
      "drayddns.com",
      "dreamhosters.com",
      "mydrobo.com",
      "drud.io",
      "drud.us",
      "duckdns.org",
      "dy.fi",
      "tunk.org",
      "dyndns-at-home.com",
      "dyndns-at-work.com",
      "dyndns-blog.com",
      "dyndns-free.com",
      "dyndns-home.com",
      "dyndns-ip.com",
      "dyndns-mail.com",
      "dyndns-office.com",
      "dyndns-pics.com",
      "dyndns-remote.com",
      "dyndns-server.com",
      "dyndns-web.com",
      "dyndns-wiki.com",
      "dyndns-work.com",
      "dyndns.biz",
      "dyndns.info",
      "dyndns.org",
      "dyndns.tv",
      "at-band-camp.net",
      "ath.cx",
      "barrel-of-knowledge.info",
      "barrell-of-knowledge.info",
      "better-than.tv",
      "blogdns.com",
      "blogdns.net",
      "blogdns.org",
      "blogsite.org",
      "boldlygoingnowhere.org",
      "broke-it.net",
      "buyshouses.net",
      "cechire.com",
      "dnsalias.com",
      "dnsalias.net",
      "dnsalias.org",
      "dnsdojo.com",
      "dnsdojo.net",
      "dnsdojo.org",
      "does-it.net",
      "doesntexist.com",
      "doesntexist.org",
      "dontexist.com",
      "dontexist.net",
      "dontexist.org",
      "doomdns.com",
      "doomdns.org",
      "dvrdns.org",
      "dyn-o-saur.com",
      "dynalias.com",
      "dynalias.net",
      "dynalias.org",
      "dynathome.net",
      "dyndns.ws",
      "endofinternet.net",
      "endofinternet.org",
      "endoftheinternet.org",
      "est-a-la-maison.com",
      "est-a-la-masion.com",
      "est-le-patron.com",
      "est-mon-blogueur.com",
      "for-better.biz",
      "for-more.biz",
      "for-our.info",
      "for-some.biz",
      "for-the.biz",
      "forgot.her.name",
      "forgot.his.name",
      "from-ak.com",
      "from-al.com",
      "from-ar.com",
      "from-az.net",
      "from-ca.com",
      "from-co.net",
      "from-ct.com",
      "from-dc.com",
      "from-de.com",
      "from-fl.com",
      "from-ga.com",
      "from-hi.com",
      "from-ia.com",
      "from-id.com",
      "from-il.com",
      "from-in.com",
      "from-ks.com",
      "from-ky.com",
      "from-la.net",
      "from-ma.com",
      "from-md.com",
      "from-me.org",
      "from-mi.com",
      "from-mn.com",
      "from-mo.com",
      "from-ms.com",
      "from-mt.com",
      "from-nc.com",
      "from-nd.com",
      "from-ne.com",
      "from-nh.com",
      "from-nj.com",
      "from-nm.com",
      "from-nv.com",
      "from-ny.net",
      "from-oh.com",
      "from-ok.com",
      "from-or.com",
      "from-pa.com",
      "from-pr.com",
      "from-ri.com",
      "from-sc.com",
      "from-sd.com",
      "from-tn.com",
      "from-tx.com",
      "from-ut.com",
      "from-va.com",
      "from-vt.com",
      "from-wa.com",
      "from-wi.com",
      "from-wv.com",
      "from-wy.com",
      "ftpaccess.cc",
      "fuettertdasnetz.de",
      "game-host.org",
      "game-server.cc",
      "getmyip.com",
      "gets-it.net",
      "go.dyndns.org",
      "gotdns.com",
      "gotdns.org",
      "groks-the.info",
      "groks-this.info",
      "ham-radio-op.net",
      "here-for-more.info",
      "hobby-site.com",
      "hobby-site.org",
      "home.dyndns.org",
      "homedns.org",
      "homeftp.net",
      "homeftp.org",
      "homeip.net",
      "homelinux.com",
      "homelinux.net",
      "homelinux.org",
      "homeunix.com",
      "homeunix.net",
      "homeunix.org",
      "iamallama.com",
      "in-the-band.net",
      "is-a-anarchist.com",
      "is-a-blogger.com",
      "is-a-bookkeeper.com",
      "is-a-bruinsfan.org",
      "is-a-bulls-fan.com",
      "is-a-candidate.org",
      "is-a-caterer.com",
      "is-a-celticsfan.org",
      "is-a-chef.com",
      "is-a-chef.net",
      "is-a-chef.org",
      "is-a-conservative.com",
      "is-a-cpa.com",
      "is-a-cubicle-slave.com",
      "is-a-democrat.com",
      "is-a-designer.com",
      "is-a-doctor.com",
      "is-a-financialadvisor.com",
      "is-a-geek.com",
      "is-a-geek.net",
      "is-a-geek.org",
      "is-a-green.com",
      "is-a-guru.com",
      "is-a-hard-worker.com",
      "is-a-hunter.com",
      "is-a-knight.org",
      "is-a-landscaper.com",
      "is-a-lawyer.com",
      "is-a-liberal.com",
      "is-a-libertarian.com",
      "is-a-linux-user.org",
      "is-a-llama.com",
      "is-a-musician.com",
      "is-a-nascarfan.com",
      "is-a-nurse.com",
      "is-a-painter.com",
      "is-a-patsfan.org",
      "is-a-personaltrainer.com",
      "is-a-photographer.com",
      "is-a-player.com",
      "is-a-republican.com",
      "is-a-rockstar.com",
      "is-a-socialist.com",
      "is-a-soxfan.org",
      "is-a-student.com",
      "is-a-teacher.com",
      "is-a-techie.com",
      "is-a-therapist.com",
      "is-an-accountant.com",
      "is-an-actor.com",
      "is-an-actress.com",
      "is-an-anarchist.com",
      "is-an-artist.com",
      "is-an-engineer.com",
      "is-an-entertainer.com",
      "is-by.us",
      "is-certified.com",
      "is-found.org",
      "is-gone.com",
      "is-into-anime.com",
      "is-into-cars.com",
      "is-into-cartoons.com",
      "is-into-games.com",
      "is-leet.com",
      "is-lost.org",
      "is-not-certified.com",
      "is-saved.org",
      "is-slick.com",
      "is-uberleet.com",
      "is-very-bad.org",
      "is-very-evil.org",
      "is-very-good.org",
      "is-very-nice.org",
      "is-very-sweet.org",
      "is-with-theband.com",
      "isa-geek.com",
      "isa-geek.net",
      "isa-geek.org",
      "isa-hockeynut.com",
      "issmarterthanyou.com",
      "isteingeek.de",
      "istmein.de",
      "kicks-ass.net",
      "kicks-ass.org",
      "knowsitall.info",
      "land-4-sale.us",
      "lebtimnetz.de",
      "leitungsen.de",
      "likes-pie.com",
      "likescandy.com",
      "merseine.nu",
      "mine.nu",
      "misconfused.org",
      "mypets.ws",
      "myphotos.cc",
      "neat-url.com",
      "office-on-the.net",
      "on-the-web.tv",
      "podzone.net",
      "podzone.org",
      "readmyblog.org",
      "saves-the-whales.com",
      "scrapper-site.net",
      "scrapping.cc",
      "selfip.biz",
      "selfip.com",
      "selfip.info",
      "selfip.net",
      "selfip.org",
      "sells-for-less.com",
      "sells-for-u.com",
      "sells-it.net",
      "sellsyourhome.org",
      "servebbs.com",
      "servebbs.net",
      "servebbs.org",
      "serveftp.net",
      "serveftp.org",
      "servegame.org",
      "shacknet.nu",
      "simple-url.com",
      "space-to-rent.com",
      "stuff-4-sale.org",
      "stuff-4-sale.us",
      "teaches-yoga.com",
      "thruhere.net",
      "traeumtgerade.de",
      "webhop.biz",
      "webhop.info",
      "webhop.net",
      "webhop.org",
      "worse-than.tv",
      "writesthisblog.com",
      "ddnss.de",
      "dyn.ddnss.de",
      "dyndns.ddnss.de",
      "dyndns1.de",
      "dyn-ip24.de",
      "home-webserver.de",
      "dyn.home-webserver.de",
      "myhome-server.de",
      "ddnss.org",
      "definima.net",
      "definima.io",
      "bci.dnstrace.pro",
      "ddnsfree.com",
      "ddnsgeek.com",
      "giize.com",
      "gleeze.com",
      "kozow.com",
      "loseyourip.com",
      "ooguy.com",
      "theworkpc.com",
      "casacam.net",
      "dynu.net",
      "accesscam.org",
      "camdvr.org",
      "freeddns.org",
      "mywire.org",
      "webredirect.org",
      "myddns.rocks",
      "blogsite.xyz",
      "dynv6.net",
      "e4.cz",
      "en-root.fr",
      "mytuleap.com",
      "onred.one",
      "staging.onred.one",
      "enonic.io",
      "customer.enonic.io",
      "eu.org",
      "al.eu.org",
      "asso.eu.org",
      "at.eu.org",
      "au.eu.org",
      "be.eu.org",
      "bg.eu.org",
      "ca.eu.org",
      "cd.eu.org",
      "ch.eu.org",
      "cn.eu.org",
      "cy.eu.org",
      "cz.eu.org",
      "de.eu.org",
      "dk.eu.org",
      "edu.eu.org",
      "ee.eu.org",
      "es.eu.org",
      "fi.eu.org",
      "fr.eu.org",
      "gr.eu.org",
      "hr.eu.org",
      "hu.eu.org",
      "ie.eu.org",
      "il.eu.org",
      "in.eu.org",
      "int.eu.org",
      "is.eu.org",
      "it.eu.org",
      "jp.eu.org",
      "kr.eu.org",
      "lt.eu.org",
      "lu.eu.org",
      "lv.eu.org",
      "mc.eu.org",
      "me.eu.org",
      "mk.eu.org",
      "mt.eu.org",
      "my.eu.org",
      "net.eu.org",
      "ng.eu.org",
      "nl.eu.org",
      "no.eu.org",
      "nz.eu.org",
      "paris.eu.org",
      "pl.eu.org",
      "pt.eu.org",
      "q-a.eu.org",
      "ro.eu.org",
      "ru.eu.org",
      "se.eu.org",
      "si.eu.org",
      "sk.eu.org",
      "tr.eu.org",
      "uk.eu.org",
      "us.eu.org",
      "eu-1.evennode.com",
      "eu-2.evennode.com",
      "eu-3.evennode.com",
      "eu-4.evennode.com",
      "us-1.evennode.com",
      "us-2.evennode.com",
      "us-3.evennode.com",
      "us-4.evennode.com",
      "twmail.cc",
      "twmail.net",
      "twmail.org",
      "mymailer.com.tw",
      "url.tw",
      "apps.fbsbx.com",
      "ru.net",
      "adygeya.ru",
      "bashkiria.ru",
      "bir.ru",
      "cbg.ru",
      "com.ru",
      "dagestan.ru",
      "grozny.ru",
      "kalmykia.ru",
      "kustanai.ru",
      "marine.ru",
      "mordovia.ru",
      "msk.ru",
      "mytis.ru",
      "nalchik.ru",
      "nov.ru",
      "pyatigorsk.ru",
      "spb.ru",
      "vladikavkaz.ru",
      "vladimir.ru",
      "abkhazia.su",
      "adygeya.su",
      "aktyubinsk.su",
      "arkhangelsk.su",
      "armenia.su",
      "ashgabad.su",
      "azerbaijan.su",
      "balashov.su",
      "bashkiria.su",
      "bryansk.su",
      "bukhara.su",
      "chimkent.su",
      "dagestan.su",
      "east-kazakhstan.su",
      "exnet.su",
      "georgia.su",
      "grozny.su",
      "ivanovo.su",
      "jambyl.su",
      "kalmykia.su",
      "kaluga.su",
      "karacol.su",
      "karaganda.su",
      "karelia.su",
      "khakassia.su",
      "krasnodar.su",
      "kurgan.su",
      "kustanai.su",
      "lenug.su",
      "mangyshlak.su",
      "mordovia.su",
      "msk.su",
      "murmansk.su",
      "nalchik.su",
      "navoi.su",
      "north-kazakhstan.su",
      "nov.su",
      "obninsk.su",
      "penza.su",
      "pokrovsk.su",
      "sochi.su",
      "spb.su",
      "tashkent.su",
      "termez.su",
      "togliatti.su",
      "troitsk.su",
      "tselinograd.su",
      "tula.su",
      "tuva.su",
      "vladikavkaz.su",
      "vladimir.su",
      "vologda.su",
      "channelsdvr.net",
      "u.channelsdvr.net",
      "fastly-terrarium.com",
      "fastlylb.net",
      "map.fastlylb.net",
      "freetls.fastly.net",
      "map.fastly.net",
      "a.prod.fastly.net",
      "global.prod.fastly.net",
      "a.ssl.fastly.net",
      "b.ssl.fastly.net",
      "global.ssl.fastly.net",
      "fastpanel.direct",
      "fastvps-server.com",
      "fhapp.xyz",
      "fedorainfracloud.org",
      "fedorapeople.org",
      "cloud.fedoraproject.org",
      "app.os.fedoraproject.org",
      "app.os.stg.fedoraproject.org",
      "mydobiss.com",
      "filegear.me",
      "filegear-au.me",
      "filegear-de.me",
      "filegear-gb.me",
      "filegear-ie.me",
      "filegear-jp.me",
      "filegear-sg.me",
      "firebaseapp.com",
      "flynnhub.com",
      "flynnhosting.net",
      "0e.vc",
      "freebox-os.com",
      "freeboxos.com",
      "fbx-os.fr",
      "fbxos.fr",
      "freebox-os.fr",
      "freeboxos.fr",
      "freedesktop.org",
      "*.futurecms.at",
      "*.ex.futurecms.at",
      "*.in.futurecms.at",
      "futurehosting.at",
      "futuremailing.at",
      "*.ex.ortsinfo.at",
      "*.kunden.ortsinfo.at",
      "*.statics.cloud",
      "service.gov.uk",
      "gehirn.ne.jp",
      "usercontent.jp",
      "gentapps.com",
      "lab.ms",
      "github.io",
      "githubusercontent.com",
      "gitlab.io",
      "glitch.me",
      "lolipop.io",
      "cloudapps.digital",
      "london.cloudapps.digital",
      "homeoffice.gov.uk",
      "ro.im",
      "shop.ro",
      "goip.de",
      "run.app",
      "a.run.app",
      "web.app",
      "*.0emm.com",
      "appspot.com",
      "*.r.appspot.com",
      "blogspot.ae",
      "blogspot.al",
      "blogspot.am",
      "blogspot.ba",
      "blogspot.be",
      "blogspot.bg",
      "blogspot.bj",
      "blogspot.ca",
      "blogspot.cf",
      "blogspot.ch",
      "blogspot.cl",
      "blogspot.co.at",
      "blogspot.co.id",
      "blogspot.co.il",
      "blogspot.co.ke",
      "blogspot.co.nz",
      "blogspot.co.uk",
      "blogspot.co.za",
      "blogspot.com",
      "blogspot.com.ar",
      "blogspot.com.au",
      "blogspot.com.br",
      "blogspot.com.by",
      "blogspot.com.co",
      "blogspot.com.cy",
      "blogspot.com.ee",
      "blogspot.com.eg",
      "blogspot.com.es",
      "blogspot.com.mt",
      "blogspot.com.ng",
      "blogspot.com.tr",
      "blogspot.com.uy",
      "blogspot.cv",
      "blogspot.cz",
      "blogspot.de",
      "blogspot.dk",
      "blogspot.fi",
      "blogspot.fr",
      "blogspot.gr",
      "blogspot.hk",
      "blogspot.hr",
      "blogspot.hu",
      "blogspot.ie",
      "blogspot.in",
      "blogspot.is",
      "blogspot.it",
      "blogspot.jp",
      "blogspot.kr",
      "blogspot.li",
      "blogspot.lt",
      "blogspot.lu",
      "blogspot.md",
      "blogspot.mk",
      "blogspot.mr",
      "blogspot.mx",
      "blogspot.my",
      "blogspot.nl",
      "blogspot.no",
      "blogspot.pe",
      "blogspot.pt",
      "blogspot.qa",
      "blogspot.re",
      "blogspot.ro",
      "blogspot.rs",
      "blogspot.ru",
      "blogspot.se",
      "blogspot.sg",
      "blogspot.si",
      "blogspot.sk",
      "blogspot.sn",
      "blogspot.td",
      "blogspot.tw",
      "blogspot.ug",
      "blogspot.vn",
      "cloudfunctions.net",
      "cloud.goog",
      "codespot.com",
      "googleapis.com",
      "googlecode.com",
      "pagespeedmobilizer.com",
      "publishproxy.com",
      "withgoogle.com",
      "withyoutube.com",
      "awsmppl.com",
      "fin.ci",
      "free.hr",
      "caa.li",
      "ua.rs",
      "conf.se",
      "hs.zone",
      "hs.run",
      "hashbang.sh",
      "hasura.app",
      "hasura-app.io",
      "hepforge.org",
      "herokuapp.com",
      "herokussl.com",
      "myravendb.com",
      "ravendb.community",
      "ravendb.me",
      "development.run",
      "ravendb.run",
      "bpl.biz",
      "orx.biz",
      "ng.city",
      "biz.gl",
      "ng.ink",
      "col.ng",
      "firm.ng",
      "gen.ng",
      "ltd.ng",
      "ngo.ng",
      "ng.school",
      "sch.so",
      "h\xE4kkinen.fi",
      "*.moonscale.io",
      "moonscale.net",
      "iki.fi",
      "dyn-berlin.de",
      "in-berlin.de",
      "in-brb.de",
      "in-butter.de",
      "in-dsl.de",
      "in-dsl.net",
      "in-dsl.org",
      "in-vpn.de",
      "in-vpn.net",
      "in-vpn.org",
      "biz.at",
      "info.at",
      "info.cx",
      "ac.leg.br",
      "al.leg.br",
      "am.leg.br",
      "ap.leg.br",
      "ba.leg.br",
      "ce.leg.br",
      "df.leg.br",
      "es.leg.br",
      "go.leg.br",
      "ma.leg.br",
      "mg.leg.br",
      "ms.leg.br",
      "mt.leg.br",
      "pa.leg.br",
      "pb.leg.br",
      "pe.leg.br",
      "pi.leg.br",
      "pr.leg.br",
      "rj.leg.br",
      "rn.leg.br",
      "ro.leg.br",
      "rr.leg.br",
      "rs.leg.br",
      "sc.leg.br",
      "se.leg.br",
      "sp.leg.br",
      "to.leg.br",
      "pixolino.com",
      "ipifony.net",
      "mein-iserv.de",
      "test-iserv.de",
      "iserv.dev",
      "iobb.net",
      "myjino.ru",
      "*.hosting.myjino.ru",
      "*.landing.myjino.ru",
      "*.spectrum.myjino.ru",
      "*.vps.myjino.ru",
      "*.triton.zone",
      "*.cns.joyent.com",
      "js.org",
      "kaas.gg",
      "khplay.nl",
      "keymachine.de",
      "kinghost.net",
      "uni5.net",
      "knightpoint.systems",
      "oya.to",
      "co.krd",
      "edu.krd",
      "git-repos.de",
      "lcube-server.de",
      "svn-repos.de",
      "leadpages.co",
      "lpages.co",
      "lpusercontent.com",
      "lelux.site",
      "co.business",
      "co.education",
      "co.events",
      "co.financial",
      "co.network",
      "co.place",
      "co.technology",
      "app.lmpm.com",
      "linkitools.space",
      "linkyard.cloud",
      "linkyard-cloud.ch",
      "members.linode.com",
      "nodebalancer.linode.com",
      "we.bs",
      "loginline.app",
      "loginline.dev",
      "loginline.io",
      "loginline.services",
      "loginline.site",
      "krasnik.pl",
      "leczna.pl",
      "lubartow.pl",
      "lublin.pl",
      "poniatowa.pl",
      "swidnik.pl",
      "uklugs.org",
      "glug.org.uk",
      "lug.org.uk",
      "lugs.org.uk",
      "barsy.bg",
      "barsy.co.uk",
      "barsyonline.co.uk",
      "barsycenter.com",
      "barsyonline.com",
      "barsy.club",
      "barsy.de",
      "barsy.eu",
      "barsy.in",
      "barsy.info",
      "barsy.io",
      "barsy.me",
      "barsy.menu",
      "barsy.mobi",
      "barsy.net",
      "barsy.online",
      "barsy.org",
      "barsy.pro",
      "barsy.pub",
      "barsy.shop",
      "barsy.site",
      "barsy.support",
      "barsy.uk",
      "*.magentosite.cloud",
      "mayfirst.info",
      "mayfirst.org",
      "hb.cldmail.ru",
      "miniserver.com",
      "memset.net",
      "cloud.metacentrum.cz",
      "custom.metacentrum.cz",
      "flt.cloud.muni.cz",
      "usr.cloud.muni.cz",
      "meteorapp.com",
      "eu.meteorapp.com",
      "co.pl",
      "azurecontainer.io",
      "azurewebsites.net",
      "azure-mobile.net",
      "cloudapp.net",
      "mozilla-iot.org",
      "bmoattachments.org",
      "net.ru",
      "org.ru",
      "pp.ru",
      "ui.nabu.casa",
      "pony.club",
      "of.fashion",
      "on.fashion",
      "of.football",
      "in.london",
      "of.london",
      "for.men",
      "and.mom",
      "for.mom",
      "for.one",
      "for.sale",
      "of.work",
      "to.work",
      "nctu.me",
      "bitballoon.com",
      "netlify.com",
      "4u.com",
      "ngrok.io",
      "nh-serv.co.uk",
      "nfshost.com",
      "dnsking.ch",
      "mypi.co",
      "n4t.co",
      "001www.com",
      "ddnslive.com",
      "myiphost.com",
      "forumz.info",
      "16-b.it",
      "32-b.it",
      "64-b.it",
      "soundcast.me",
      "tcp4.me",
      "dnsup.net",
      "hicam.net",
      "now-dns.net",
      "ownip.net",
      "vpndns.net",
      "dynserv.org",
      "now-dns.org",
      "x443.pw",
      "now-dns.top",
      "ntdll.top",
      "freeddns.us",
      "crafting.xyz",
      "zapto.xyz",
      "nsupdate.info",
      "nerdpol.ovh",
      "blogsyte.com",
      "brasilia.me",
      "cable-modem.org",
      "ciscofreak.com",
      "collegefan.org",
      "couchpotatofries.org",
      "damnserver.com",
      "ddns.me",
      "ditchyourip.com",
      "dnsfor.me",
      "dnsiskinky.com",
      "dvrcam.info",
      "dynns.com",
      "eating-organic.net",
      "fantasyleague.cc",
      "geekgalaxy.com",
      "golffan.us",
      "health-carereform.com",
      "homesecuritymac.com",
      "homesecuritypc.com",
      "hopto.me",
      "ilovecollege.info",
      "loginto.me",
      "mlbfan.org",
      "mmafan.biz",
      "myactivedirectory.com",
      "mydissent.net",
      "myeffect.net",
      "mymediapc.net",
      "mypsx.net",
      "mysecuritycamera.com",
      "mysecuritycamera.net",
      "mysecuritycamera.org",
      "net-freaks.com",
      "nflfan.org",
      "nhlfan.net",
      "no-ip.ca",
      "no-ip.co.uk",
      "no-ip.net",
      "noip.us",
      "onthewifi.com",
      "pgafan.net",
      "point2this.com",
      "pointto.us",
      "privatizehealthinsurance.net",
      "quicksytes.com",
      "read-books.org",
      "securitytactics.com",
      "serveexchange.com",
      "servehumour.com",
      "servep2p.com",
      "servesarcasm.com",
      "stufftoread.com",
      "ufcfan.org",
      "unusualperson.com",
      "workisboring.com",
      "3utilities.com",
      "bounceme.net",
      "ddns.net",
      "ddnsking.com",
      "gotdns.ch",
      "hopto.org",
      "myftp.biz",
      "myftp.org",
      "myvnc.com",
      "no-ip.biz",
      "no-ip.info",
      "no-ip.org",
      "noip.me",
      "redirectme.net",
      "servebeer.com",
      "serveblog.net",
      "servecounterstrike.com",
      "serveftp.com",
      "servegame.com",
      "servehalflife.com",
      "servehttp.com",
      "serveirc.com",
      "serveminecraft.net",
      "servemp3.com",
      "servepics.com",
      "servequake.com",
      "sytes.net",
      "webhop.me",
      "zapto.org",
      "stage.nodeart.io",
      "nodum.co",
      "nodum.io",
      "pcloud.host",
      "nyc.mn",
      "nom.ae",
      "nom.af",
      "nom.ai",
      "nom.al",
      "nym.by",
      "nom.bz",
      "nym.bz",
      "nom.cl",
      "nym.ec",
      "nom.gd",
      "nom.ge",
      "nom.gl",
      "nym.gr",
      "nom.gt",
      "nym.gy",
      "nym.hk",
      "nom.hn",
      "nym.ie",
      "nom.im",
      "nom.ke",
      "nym.kz",
      "nym.la",
      "nym.lc",
      "nom.li",
      "nym.li",
      "nym.lt",
      "nym.lu",
      "nom.lv",
      "nym.me",
      "nom.mk",
      "nym.mn",
      "nym.mx",
      "nom.nu",
      "nym.nz",
      "nym.pe",
      "nym.pt",
      "nom.pw",
      "nom.qa",
      "nym.ro",
      "nom.rs",
      "nom.si",
      "nym.sk",
      "nom.st",
      "nym.su",
      "nym.sx",
      "nom.tj",
      "nym.tw",
      "nom.ug",
      "nom.uy",
      "nom.vc",
      "nom.vg",
      "static.observableusercontent.com",
      "cya.gg",
      "cloudycluster.net",
      "nid.io",
      "opencraft.hosting",
      "operaunite.com",
      "skygearapp.com",
      "outsystemscloud.com",
      "ownprovider.com",
      "own.pm",
      "ox.rs",
      "oy.lc",
      "pgfog.com",
      "pagefrontapp.com",
      "art.pl",
      "gliwice.pl",
      "krakow.pl",
      "poznan.pl",
      "wroc.pl",
      "zakopane.pl",
      "pantheonsite.io",
      "gotpantheon.com",
      "mypep.link",
      "perspecta.cloud",
      "on-web.fr",
      "*.platform.sh",
      "*.platformsh.site",
      "dyn53.io",
      "co.bn",
      "xen.prgmr.com",
      "priv.at",
      "prvcy.page",
      "*.dweb.link",
      "protonet.io",
      "chirurgiens-dentistes-en-france.fr",
      "byen.site",
      "pubtls.org",
      "qualifioapp.com",
      "qbuser.com",
      "instantcloud.cn",
      "ras.ru",
      "qa2.com",
      "qcx.io",
      "*.sys.qcx.io",
      "dev-myqnapcloud.com",
      "alpha-myqnapcloud.com",
      "myqnapcloud.com",
      "*.quipelements.com",
      "vapor.cloud",
      "vaporcloud.io",
      "rackmaze.com",
      "rackmaze.net",
      "*.on-k3s.io",
      "*.on-rancher.cloud",
      "*.on-rio.io",
      "readthedocs.io",
      "rhcloud.com",
      "app.render.com",
      "onrender.com",
      "repl.co",
      "repl.run",
      "resindevice.io",
      "devices.resinstaging.io",
      "hzc.io",
      "wellbeingzone.eu",
      "ptplus.fit",
      "wellbeingzone.co.uk",
      "git-pages.rit.edu",
      "sandcats.io",
      "logoip.de",
      "logoip.com",
      "schokokeks.net",
      "gov.scot",
      "scrysec.com",
      "firewall-gateway.com",
      "firewall-gateway.de",
      "my-gateway.de",
      "my-router.de",
      "spdns.de",
      "spdns.eu",
      "firewall-gateway.net",
      "my-firewall.org",
      "myfirewall.org",
      "spdns.org",
      "senseering.net",
      "biz.ua",
      "co.ua",
      "pp.ua",
      "shiftedit.io",
      "myshopblocks.com",
      "shopitsite.com",
      "mo-siemens.io",
      "1kapp.com",
      "appchizi.com",
      "applinzi.com",
      "sinaapp.com",
      "vipsinaapp.com",
      "siteleaf.net",
      "bounty-full.com",
      "alpha.bounty-full.com",
      "beta.bounty-full.com",
      "stackhero-network.com",
      "static.land",
      "dev.static.land",
      "sites.static.land",
      "apps.lair.io",
      "*.stolos.io",
      "spacekit.io",
      "customer.speedpartner.de",
      "api.stdlib.com",
      "storj.farm",
      "utwente.io",
      "soc.srcf.net",
      "user.srcf.net",
      "temp-dns.com",
      "applicationcloud.io",
      "scapp.io",
      "*.s5y.io",
      "*.sensiosite.cloud",
      "syncloud.it",
      "diskstation.me",
      "dscloud.biz",
      "dscloud.me",
      "dscloud.mobi",
      "dsmynas.com",
      "dsmynas.net",
      "dsmynas.org",
      "familyds.com",
      "familyds.net",
      "familyds.org",
      "i234.me",
      "myds.me",
      "synology.me",
      "vpnplus.to",
      "direct.quickconnect.to",
      "taifun-dns.de",
      "gda.pl",
      "gdansk.pl",
      "gdynia.pl",
      "med.pl",
      "sopot.pl",
      "edugit.org",
      "telebit.app",
      "telebit.io",
      "*.telebit.xyz",
      "gwiddle.co.uk",
      "thingdustdata.com",
      "cust.dev.thingdust.io",
      "cust.disrec.thingdust.io",
      "cust.prod.thingdust.io",
      "cust.testing.thingdust.io",
      "arvo.network",
      "azimuth.network",
      "bloxcms.com",
      "townnews-staging.com",
      "12hp.at",
      "2ix.at",
      "4lima.at",
      "lima-city.at",
      "12hp.ch",
      "2ix.ch",
      "4lima.ch",
      "lima-city.ch",
      "trafficplex.cloud",
      "de.cool",
      "12hp.de",
      "2ix.de",
      "4lima.de",
      "lima-city.de",
      "1337.pictures",
      "clan.rip",
      "lima-city.rocks",
      "webspace.rocks",
      "lima.zone",
      "*.transurl.be",
      "*.transurl.eu",
      "*.transurl.nl",
      "tuxfamily.org",
      "dd-dns.de",
      "diskstation.eu",
      "diskstation.org",
      "dray-dns.de",
      "draydns.de",
      "dyn-vpn.de",
      "dynvpn.de",
      "mein-vigor.de",
      "my-vigor.de",
      "my-wan.de",
      "syno-ds.de",
      "synology-diskstation.de",
      "synology-ds.de",
      "uber.space",
      "*.uberspace.de",
      "hk.com",
      "hk.org",
      "ltd.hk",
      "inc.hk",
      "virtualuser.de",
      "virtual-user.de",
      "urown.cloud",
      "dnsupdate.info",
      "lib.de.us",
      "2038.io",
      "router.management",
      "v-info.info",
      "voorloper.cloud",
      "v.ua",
      "wafflecell.com",
      "*.webhare.dev",
      "wedeploy.io",
      "wedeploy.me",
      "wedeploy.sh",
      "remotewd.com",
      "wmflabs.org",
      "myforum.community",
      "community-pro.de",
      "diskussionsbereich.de",
      "community-pro.net",
      "meinforum.net",
      "half.host",
      "xnbay.com",
      "u2.xnbay.com",
      "u2-local.xnbay.com",
      "cistron.nl",
      "demon.nl",
      "xs4all.space",
      "yandexcloud.net",
      "storage.yandexcloud.net",
      "website.yandexcloud.net",
      "official.academy",
      "yolasite.com",
      "ybo.faith",
      "yombo.me",
      "homelink.one",
      "ybo.party",
      "ybo.review",
      "ybo.science",
      "ybo.trade",
      "nohost.me",
      "noho.st",
      "za.net",
      "za.org",
      "now.sh",
      "bss.design",
      "basicserver.io",
      "virtualserver.io",
      "enterprisecloud.nu"
    ];
  }
});

// node_modules/psl/index.js
var require_psl = __commonJS({
  "node_modules/psl/index.js"(exports) {
    "use strict";
    var Punycode = require("punycode");
    var internals = {};
    internals.rules = require_rules().map(function(rule) {
      return {
        rule,
        suffix: rule.replace(/^(\*\.|\!)/, ""),
        punySuffix: -1,
        wildcard: rule.charAt(0) === "*",
        exception: rule.charAt(0) === "!"
      };
    });
    internals.endsWith = function(str, suffix) {
      return str.indexOf(suffix, str.length - suffix.length) !== -1;
    };
    internals.findRule = function(domain) {
      var punyDomain = Punycode.toASCII(domain);
      return internals.rules.reduce(function(memo, rule) {
        if (rule.punySuffix === -1) {
          rule.punySuffix = Punycode.toASCII(rule.suffix);
        }
        if (!internals.endsWith(punyDomain, "." + rule.punySuffix) && punyDomain !== rule.punySuffix) {
          return memo;
        }
        return rule;
      }, null);
    };
    exports.errorCodes = {
      DOMAIN_TOO_SHORT: "Domain name too short.",
      DOMAIN_TOO_LONG: "Domain name too long. It should be no more than 255 chars.",
      LABEL_STARTS_WITH_DASH: "Domain name label can not start with a dash.",
      LABEL_ENDS_WITH_DASH: "Domain name label can not end with a dash.",
      LABEL_TOO_LONG: "Domain name label should be at most 63 chars long.",
      LABEL_TOO_SHORT: "Domain name label should be at least 1 character long.",
      LABEL_INVALID_CHARS: "Domain name label can only contain alphanumeric characters or dashes."
    };
    internals.validate = function(input) {
      var ascii = Punycode.toASCII(input);
      if (ascii.length < 1) {
        return "DOMAIN_TOO_SHORT";
      }
      if (ascii.length > 255) {
        return "DOMAIN_TOO_LONG";
      }
      var labels = ascii.split(".");
      var label;
      for (var i = 0; i < labels.length; ++i) {
        label = labels[i];
        if (!label.length) {
          return "LABEL_TOO_SHORT";
        }
        if (label.length > 63) {
          return "LABEL_TOO_LONG";
        }
        if (label.charAt(0) === "-") {
          return "LABEL_STARTS_WITH_DASH";
        }
        if (label.charAt(label.length - 1) === "-") {
          return "LABEL_ENDS_WITH_DASH";
        }
        if (!/^[a-z0-9\-]+$/.test(label)) {
          return "LABEL_INVALID_CHARS";
        }
      }
    };
    exports.parse = function(input) {
      if (typeof input !== "string") {
        throw new TypeError("Domain name must be a string.");
      }
      var domain = input.slice(0).toLowerCase();
      if (domain.charAt(domain.length - 1) === ".") {
        domain = domain.slice(0, domain.length - 1);
      }
      var error = internals.validate(domain);
      if (error) {
        return {
          input,
          error: {
            message: exports.errorCodes[error],
            code: error
          }
        };
      }
      var parsed = {
        input,
        tld: null,
        sld: null,
        domain: null,
        subdomain: null,
        listed: false
      };
      var domainParts = domain.split(".");
      if (domainParts[domainParts.length - 1] === "local") {
        return parsed;
      }
      var handlePunycode = function() {
        if (!/xn--/.test(domain)) {
          return parsed;
        }
        if (parsed.domain) {
          parsed.domain = Punycode.toASCII(parsed.domain);
        }
        if (parsed.subdomain) {
          parsed.subdomain = Punycode.toASCII(parsed.subdomain);
        }
        return parsed;
      };
      var rule = internals.findRule(domain);
      if (!rule) {
        if (domainParts.length < 2) {
          return parsed;
        }
        parsed.tld = domainParts.pop();
        parsed.sld = domainParts.pop();
        parsed.domain = [parsed.sld, parsed.tld].join(".");
        if (domainParts.length) {
          parsed.subdomain = domainParts.pop();
        }
        return handlePunycode();
      }
      parsed.listed = true;
      var tldParts = rule.suffix.split(".");
      var privateParts = domainParts.slice(0, domainParts.length - tldParts.length);
      if (rule.exception) {
        privateParts.push(tldParts.shift());
      }
      parsed.tld = tldParts.join(".");
      if (!privateParts.length) {
        return handlePunycode();
      }
      if (rule.wildcard) {
        tldParts.unshift(privateParts.pop());
        parsed.tld = tldParts.join(".");
      }
      if (!privateParts.length) {
        return handlePunycode();
      }
      parsed.sld = privateParts.pop();
      parsed.domain = [parsed.sld, parsed.tld].join(".");
      if (privateParts.length) {
        parsed.subdomain = privateParts.join(".");
      }
      return handlePunycode();
    };
    exports.get = function(domain) {
      if (!domain) {
        return null;
      }
      return exports.parse(domain).domain || null;
    };
    exports.isValid = function(domain) {
      var parsed = exports.parse(domain);
      return Boolean(parsed.domain && parsed.listed);
    };
  }
});

// netlify/functions/linkCheckAPI.ts
__export(exports, {
  handler: () => handler4
});

// node_modules/linkedom/esm/shared/symbols.js
var CHANGED = Symbol("changed");
var CLASS_LIST = Symbol("classList");
var CUSTOM_ELEMENTS = Symbol("CustomElements");
var CONTENT = Symbol("content");
var DATASET = Symbol("dataset");
var DOCTYPE = Symbol("doctype");
var DOM_PARSER = Symbol("DOMParser");
var END = Symbol("end");
var EVENT_TARGET = Symbol("EventTarget");
var IMAGE = Symbol("image");
var MIME = Symbol("mime");
var MUTATION_OBSERVER = Symbol("MutationObserver");
var NEXT = Symbol("next");
var OWNER_ELEMENT = Symbol("ownerElement");
var PREV = Symbol("prev");
var PRIVATE = Symbol("private");
var SHEET = Symbol("sheet");
var START = Symbol("start");
var STYLE = Symbol("style");
var VALUE = Symbol("value");

// node_modules/linkedom/esm/shared/parse-from-string.js
var HTMLParser2 = __toModule(require_lib6());

// node_modules/linkedom/esm/shared/constants.js
var NODE_END = -1;
var ELEMENT_NODE = 1;
var ATTRIBUTE_NODE = 2;
var TEXT_NODE = 3;
var COMMENT_NODE = 8;
var DOCUMENT_NODE = 9;
var DOCUMENT_TYPE_NODE = 10;
var DOCUMENT_FRAGMENT_NODE = 11;
var SHOW_ALL = -1;
var SHOW_ELEMENT = 1;
var SHOW_TEXT = 4;
var SHOW_COMMENT = 128;
var DOCUMENT_POSITION_DISCONNECTED = 1;
var DOCUMENT_POSITION_PRECEDING = 2;
var DOCUMENT_POSITION_FOLLOWING = 4;
var DOCUMENT_POSITION_CONTAINS = 8;
var DOCUMENT_POSITION_CONTAINED_BY = 16;
var DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = 32;
var SVG_NAMESPACE = "http://www.w3.org/2000/svg";

// node_modules/linkedom/esm/shared/object.js
var {
  assign,
  create,
  defineProperties,
  entries,
  getOwnPropertyDescriptors,
  keys,
  setPrototypeOf
} = Object;

// node_modules/linkedom/esm/shared/utils.js
var $String = String;
var getEnd = (node) => node.nodeType === ELEMENT_NODE ? node[END] : node;
var ignoreCase = ({ ownerDocument }) => ownerDocument[MIME].ignoreCase;
var knownAdjacent = (prev, next) => {
  prev[NEXT] = next;
  next[PREV] = prev;
};
var knownBoundaries = (prev, current, next) => {
  knownAdjacent(prev, current);
  knownAdjacent(getEnd(current), next);
};
var knownSegment = (prev, start, end, next) => {
  knownAdjacent(prev, start);
  knownAdjacent(getEnd(end), next);
};
var knownSiblings = (prev, current, next) => {
  knownAdjacent(prev, current);
  knownAdjacent(current, next);
};
var localCase = ({ localName, ownerDocument }) => {
  return ownerDocument[MIME].ignoreCase ? localName.toUpperCase() : localName;
};
var setAdjacent = (prev, next) => {
  if (prev)
    prev[NEXT] = next;
  if (next)
    next[PREV] = prev;
};

// node_modules/linkedom/esm/interface/custom-element-registry.js
var reactive = false;
var Classes = new WeakMap();
var customElements = new WeakMap();
var attributeChangedCallback = (element, attributeName, oldValue, newValue) => {
  if (reactive && customElements.has(element) && element.attributeChangedCallback && element.constructor.observedAttributes.includes(attributeName)) {
    element.attributeChangedCallback(attributeName, oldValue, newValue);
  }
};
var createTrigger = (method, isConnected2) => (element) => {
  if (customElements.has(element)) {
    const info = customElements.get(element);
    if (info.connected !== isConnected2 && element.isConnected === isConnected2) {
      info.connected = isConnected2;
      if (method in element)
        element[method]();
    }
  }
};
var triggerConnected = createTrigger("connectedCallback", true);
var connectedCallback = (element) => {
  if (reactive) {
    triggerConnected(element);
    let { [NEXT]: next, [END]: end } = element;
    while (next !== end) {
      if (next.nodeType === ELEMENT_NODE)
        triggerConnected(next);
      next = next[NEXT];
    }
  }
};
var triggerDisconnected = createTrigger("disconnectedCallback", false);
var disconnectedCallback = (element) => {
  if (reactive) {
    triggerDisconnected(element);
    let { [NEXT]: next, [END]: end } = element;
    while (next !== end) {
      if (next.nodeType === ELEMENT_NODE)
        triggerDisconnected(next);
      next = next[NEXT];
    }
  }
};
var CustomElementRegistry = class {
  constructor(ownerDocument) {
    this.ownerDocument = ownerDocument;
    this.registry = new Map();
    this.waiting = new Map();
    this.active = false;
  }
  define(localName, Class, options = {}) {
    const { ownerDocument, registry, waiting } = this;
    if (registry.has(localName))
      throw new Error("unable to redefine " + localName);
    if (Classes.has(Class))
      throw new Error("unable to redefine the same class: " + Class);
    this.active = reactive = true;
    const { extends: extend } = options;
    Classes.set(Class, {
      ownerDocument,
      options: { is: extend ? localName : "" },
      localName: extend || localName
    });
    const check = extend ? (element) => {
      return element.localName === extend && element.getAttribute("is") === localName;
    } : (element) => element.localName === localName;
    registry.set(localName, { Class, check });
    if (waiting.has(localName)) {
      for (const resolve of waiting.get(localName))
        resolve(Class);
      waiting.delete(localName);
    }
    ownerDocument.querySelectorAll(extend ? `${extend}[is="${localName}"]` : localName).forEach(this.upgrade, this);
  }
  upgrade(element) {
    if (customElements.has(element))
      return;
    const { registry } = this;
    const ce = element.getAttribute("is") || element.localName;
    if (registry.has(ce)) {
      const { Class, check } = registry.get(ce);
      if (check(element)) {
        const { attributes, isConnected: isConnected2 } = element;
        for (const attr of attributes)
          element.removeAttributeNode(attr);
        const values = entries(element);
        for (const [key2] of values)
          delete element[key2];
        setPrototypeOf(element, new Class(this.ownerDocument, ce));
        customElements.set(element, { connected: isConnected2 });
        for (const [key2, value] of values)
          element[key2] = value;
        for (const attr of attributes)
          element.setAttributeNode(attr);
        if (isConnected2 && element.connectedCallback)
          element.connectedCallback();
      }
    }
  }
  whenDefined(localName) {
    const { registry, waiting } = this;
    return new Promise((resolve) => {
      if (registry.has(localName))
        resolve(registry.get(localName).Class);
      else {
        if (!waiting.has(localName))
          waiting.set(localName, []);
        waiting.get(localName).push(resolve);
      }
    });
  }
  get(localName) {
    const info = this.registry.get(localName);
    return info && info.Class;
  }
};

// node_modules/linkedom/esm/shared/parse-from-string.js
var { Parser } = HTMLParser2;
var notParsing = true;
var append = (self2, node, active) => {
  const end = self2[END];
  node.parentNode = self2;
  knownBoundaries(end[PREV], node, end);
  if (active && node.nodeType === ELEMENT_NODE)
    connectedCallback(node);
  return node;
};
var attribute = (element, end, attribute2, value, active) => {
  attribute2[VALUE] = value;
  attribute2.ownerElement = element;
  knownSiblings(end[PREV], attribute2, end);
  if (attribute2.name === "class")
    element.className = value;
  if (active)
    attributeChangedCallback(element, attribute2.name, null, value);
};
var parseFromString = (document, isHTML, markupLanguage) => {
  const { active, registry } = document[CUSTOM_ELEMENTS];
  let node = document;
  let ownerSVGElement = null;
  notParsing = false;
  const content = new Parser({
    onprocessinginstruction(name, data) {
      if (name.toLowerCase() === "!doctype")
        document.doctype = data.slice(name.length).trim();
    },
    onopentag(name, attributes) {
      let create3 = true;
      if (isHTML) {
        if (ownerSVGElement) {
          node = append(node, document.createElementNS(SVG_NAMESPACE, name), active);
          node.ownerSVGElement = ownerSVGElement;
          create3 = false;
        } else if (name === "svg" || name === "SVG") {
          ownerSVGElement = document.createElementNS(SVG_NAMESPACE, name);
          node = append(node, ownerSVGElement, active);
          create3 = false;
        } else if (active) {
          const ce = name.includes("-") ? name : attributes.is || "";
          if (ce && registry.has(ce)) {
            const { Class } = registry.get(ce);
            node = append(node, new Class(), active);
            delete attributes.is;
            create3 = false;
          }
        }
      }
      if (create3)
        node = append(node, document.createElement(name), false);
      let end = node[END];
      for (const name2 of keys(attributes))
        attribute(node, end, document.createAttribute(name2), attributes[name2], active);
    },
    oncomment(data) {
      append(node, document.createComment(data), active);
    },
    ontext(text) {
      append(node, document.createTextNode(text), active);
    },
    onclosetag() {
      if (isHTML && node === ownerSVGElement)
        ownerSVGElement = null;
      node = node.parentNode;
    }
  }, {
    decodeEntities: true,
    xmlMode: !isHTML
  });
  content.write(markupLanguage);
  content.end();
  notParsing = true;
  return document;
};

// node_modules/linkedom/esm/shared/register-html-class.js
var htmlClasses = new Map();
var registerHTMLClass = (names, Class) => {
  for (const name of [].concat(names)) {
    htmlClasses.set(name, Class);
    htmlClasses.set(name.toUpperCase(), Class);
  }
};

// node_modules/linkedom/esm/interface/document.js
var import_perf_hooks = __toModule(require("perf_hooks"));

// node_modules/linkedom/esm/shared/jsdon.js
var loopSegment = ({ [NEXT]: next, [END]: end }, json) => {
  while (next !== end) {
    switch (next.nodeType) {
      case ATTRIBUTE_NODE:
        attrAsJSON(next, json);
        break;
      case TEXT_NODE:
      case COMMENT_NODE:
        characterDataAsJSON(next, json);
        break;
      case ELEMENT_NODE:
        elementAsJSON(next, json);
        next = getEnd(next);
        break;
      case DOCUMENT_TYPE_NODE:
        documentTypeAsJSON(next, json);
        break;
    }
    next = next[NEXT];
  }
  const last = json.length - 1;
  const value = json[last];
  if (typeof value === "number" && value < 0)
    json[last] += NODE_END;
  else
    json.push(NODE_END);
};
var attrAsJSON = (attr, json) => {
  json.push(ATTRIBUTE_NODE, attr.name);
  const value = attr[VALUE].trim();
  if (value)
    json.push(value);
};
var characterDataAsJSON = (node, json) => {
  const value = node[VALUE];
  if (value.trim())
    json.push(node.nodeType, value);
};
var nonElementAsJSON = (node, json) => {
  json.push(node.nodeType);
  loopSegment(node, json);
};
var documentTypeAsJSON = ({ name, publicId, systemId }, json) => {
  json.push(DOCUMENT_TYPE_NODE, name);
  if (publicId)
    json.push(publicId);
  if (systemId)
    json.push(systemId);
};
var elementAsJSON = (element, json) => {
  json.push(ELEMENT_NODE, element.localName);
  loopSegment(element, json);
};

// node_modules/linkedom/esm/interface/mutation-observer.js
var createRecord = (type, target, addedNodes, removedNodes, attributeName, oldValue) => ({ type, target, addedNodes, removedNodes, attributeName, oldValue });
var queueAttribute = (observer, target, attributeName, attributeFilter, attributeOldValue, oldValue) => {
  if (!attributeFilter || attributeFilter.includes(attributeName)) {
    const { callback, records, scheduled } = observer;
    records.push(createRecord("attributes", target, [], [], attributeName, attributeOldValue ? oldValue : void 0));
    if (!scheduled) {
      observer.scheduled = true;
      Promise.resolve().then(() => {
        observer.scheduled = false;
        callback(records.splice(0), observer);
      });
    }
  }
};
var attributeChangedCallback2 = (element, attributeName, oldValue) => {
  const { ownerDocument } = element;
  const { active, observers } = ownerDocument[MUTATION_OBSERVER];
  if (active) {
    for (const observer of observers) {
      for (const [
        target,
        {
          childList,
          subtree,
          attributes,
          attributeFilter,
          attributeOldValue
        }
      ] of observer.nodes) {
        if (childList) {
          if (subtree && (target === ownerDocument || target.contains(element)) || !subtree && target.children.includes(element)) {
            queueAttribute(observer, element, attributeName, attributeFilter, attributeOldValue, oldValue);
            break;
          }
        } else if (attributes && target === element) {
          queueAttribute(observer, element, attributeName, attributeFilter, attributeOldValue, oldValue);
          break;
        }
      }
    }
  }
};
var moCallback = (element, parentNode) => {
  const { ownerDocument } = element;
  const { active, observers } = ownerDocument[MUTATION_OBSERVER];
  if (active) {
    for (const observer of observers) {
      for (const [target, { subtree, childList, characterData }] of observer.nodes) {
        if (childList) {
          if (parentNode && (target === parentNode || subtree && target.contains(parentNode)) || !parentNode && (subtree && (target === ownerDocument || target.contains(element)) || !subtree && target[characterData ? "childNodes" : "children"].includes(element))) {
            const { callback, records, scheduled } = observer;
            records.push(createRecord("childList", target, parentNode ? [] : [element], parentNode ? [element] : []));
            if (!scheduled) {
              observer.scheduled = true;
              Promise.resolve().then(() => {
                observer.scheduled = false;
                callback(records.splice(0), observer);
              });
            }
            break;
          }
        }
      }
    }
  }
};
var MutationObserverClass = class {
  constructor(ownerDocument) {
    const observers = new Set();
    this.observers = observers;
    this.active = false;
    this.class = class MutationObserver {
      constructor(callback) {
        this.callback = callback;
        this.nodes = new Map();
        this.records = [];
        this.scheduled = false;
      }
      disconnect() {
        this.records.splice(0);
        this.nodes.clear();
        observers.delete(this);
        ownerDocument[MUTATION_OBSERVER].active = !!observers.size;
      }
      observe(target, options = {
        subtree: false,
        childList: false,
        attributes: false,
        attributeFilter: null,
        attributeOldValue: false,
        characterData: false
      }) {
        if ("attributeOldValue" in options || "attributeFilter" in options)
          options.attributes = true;
        options.childList = !!options.childList;
        options.subtree = !!options.subtree;
        this.nodes.set(target, options);
        observers.add(this);
        ownerDocument[MUTATION_OBSERVER].active = true;
      }
      takeRecords() {
        return this.records.splice(0);
      }
    };
  }
};

// node_modules/linkedom/esm/shared/attributes.js
var emptyAttributes = new Set([
  "allowfullscreen",
  "allowpaymentrequest",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "class",
  "contenteditable",
  "controls",
  "default",
  "defer",
  "disabled",
  "draggable",
  "formnovalidate",
  "hidden",
  "id",
  "ismap",
  "itemscope",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "selected",
  "style",
  "truespeed"
]);
var setAttribute = (element, attribute2) => {
  const { [VALUE]: value, name } = attribute2;
  attribute2.ownerElement = element;
  knownSiblings(element, attribute2, element[NEXT]);
  if (name === "class")
    element.className = value;
  attributeChangedCallback2(element, name, null);
  attributeChangedCallback(element, name, null, value);
};
var removeAttribute = (element, attribute2) => {
  const { [VALUE]: value, name } = attribute2;
  knownAdjacent(attribute2[PREV], attribute2[NEXT]);
  attribute2.ownerElement = attribute2[PREV] = attribute2[NEXT] = null;
  if (name === "class")
    element[CLASS_LIST] = null;
  attributeChangedCallback2(element, name, value);
  attributeChangedCallback(element, name, value, null);
};
var booleanAttribute = {
  get(element, name) {
    return element.hasAttribute(name);
  },
  set(element, name, value) {
    if (value)
      element.setAttribute(name, "");
    else
      element.removeAttribute(name);
  }
};
var numericAttribute = {
  get(element, name) {
    return parseFloat(element.getAttribute(name) || 0);
  },
  set(element, name, value) {
    element.setAttribute(name, value);
  }
};
var stringAttribute = {
  get(element, name) {
    return element.getAttribute(name) || "";
  },
  set(element, name, value) {
    element.setAttribute(name, value);
  }
};

// node_modules/@ungap/event-target/esm/index.js
var self = {};
try {
  self.EventTarget = new EventTarget().constructor;
} catch (EventTarget2) {
  (function(Object2, wm) {
    var create3 = Object2.create;
    var defineProperty = Object2.defineProperty;
    var proto = EventTarget3.prototype;
    define(proto, "addEventListener", function(type, listener, options) {
      for (var secret = wm.get(this), listeners = secret[type] || (secret[type] = []), i = 0, length = listeners.length; i < length; i++) {
        if (listeners[i].listener === listener)
          return;
      }
      listeners.push({ target: this, listener, options });
    });
    define(proto, "dispatchEvent", function(event) {
      var secret = wm.get(this);
      var listeners = secret[event.type];
      if (listeners) {
        define(event, "target", this);
        define(event, "currentTarget", this);
        listeners.slice(0).some(dispatch, event);
        delete event.currentTarget;
        delete event.target;
      }
      return true;
    });
    define(proto, "removeEventListener", function(type, listener) {
      for (var secret = wm.get(this), listeners = secret[type] || (secret[type] = []), i = 0, length = listeners.length; i < length; i++) {
        if (listeners[i].listener === listener) {
          listeners.splice(i, 1);
          return;
        }
      }
    });
    self.EventTarget = EventTarget3;
    function EventTarget3() {
      "use strict";
      wm.set(this, create3(null));
    }
    function define(target, name, value) {
      defineProperty(target, name, {
        configurable: true,
        writable: true,
        value
      });
    }
    function dispatch(info) {
      var options = info.options;
      if (options && options.once)
        info.target.removeEventListener(this.type, info.listener);
      if (typeof info.listener === "function")
        info.listener.call(info.target, this);
      else
        info.listener.handleEvent(this);
      return this._stopImmediatePropagationFlag;
    }
  })(Object, new WeakMap());
}
var esm_default = self.EventTarget;

// node_modules/linkedom/esm/interface/event-target.js
var DOMEventTarget = class extends esm_default {
  _getParent() {
    return null;
  }
  dispatchEvent(event) {
    const dispatched = super.dispatchEvent(event);
    if (dispatched && event.bubbles && !event.cancelBubble) {
      const parent = this._getParent();
      if (parent && parent.dispatchEvent) {
        const options = {
          bubbles: event.bubbles,
          cancelable: event.cancelable,
          composed: event.composed
        };
        return parent.dispatchEvent(new event.constructor(event.type, options));
      }
    }
    return dispatched;
  }
};

// node_modules/linkedom/esm/interface/node-list.js
var NodeList = class extends Array {
  item(i) {
    return i < this.length ? this[i] : null;
  }
};

// node_modules/linkedom/esm/interface/node.js
var getParentNodeCount = ({ parentNode }) => {
  let count = 0;
  while (parentNode) {
    count++;
    parentNode = parentNode.parentNode;
  }
  return count;
};
var Node = class extends DOMEventTarget {
  static get ELEMENT_NODE() {
    return ELEMENT_NODE;
  }
  static get ATTRIBUTE_NODE() {
    return ATTRIBUTE_NODE;
  }
  static get TEXT_NODE() {
    return TEXT_NODE;
  }
  static get COMMENT_NODE() {
    return COMMENT_NODE;
  }
  static get DOCUMENT_NODE() {
    return DOCUMENT_NODE;
  }
  static get DOCUMENT_FRAGMENT_NODE() {
    return DOCUMENT_FRAGMENT_NODE;
  }
  static get DOCUMENT_TYPE_NODE() {
    return DOCUMENT_TYPE_NODE;
  }
  constructor(ownerDocument, localName, nodeType) {
    super();
    this.ownerDocument = ownerDocument;
    this.localName = localName;
    this.nodeType = nodeType;
    this.parentNode = null;
    this[NEXT] = null;
    this[PREV] = null;
  }
  get ELEMENT_NODE() {
    return ELEMENT_NODE;
  }
  get ATTRIBUTE_NODE() {
    return ATTRIBUTE_NODE;
  }
  get TEXT_NODE() {
    return TEXT_NODE;
  }
  get COMMENT_NODE() {
    return COMMENT_NODE;
  }
  get DOCUMENT_NODE() {
    return DOCUMENT_NODE;
  }
  get DOCUMENT_FRAGMENT_NODE() {
    return DOCUMENT_FRAGMENT_NODE;
  }
  get DOCUMENT_TYPE_NODE() {
    return DOCUMENT_TYPE_NODE;
  }
  get isConnected() {
    return false;
  }
  get nodeName() {
    return this.localName;
  }
  get parentElement() {
    return null;
  }
  get previousSibling() {
    return null;
  }
  get previousElementSibling() {
    return null;
  }
  get nextSibling() {
    return null;
  }
  get nextElementSibling() {
    return null;
  }
  get childNodes() {
    return new NodeList();
  }
  get firstChild() {
    return null;
  }
  get lastChild() {
    return null;
  }
  get nodeValue() {
    return null;
  }
  set nodeValue(value) {
  }
  get textContent() {
    return null;
  }
  set textContent(value) {
  }
  normalize() {
  }
  cloneNode() {
    return null;
  }
  contains() {
    return false;
  }
  insertBefore() {
  }
  appendChild() {
  }
  replaceChild() {
  }
  removeChild() {
  }
  toString() {
    return "";
  }
  hasChildNodes() {
    return !!this.lastChild;
  }
  isSameNode(node) {
    return this === node;
  }
  compareDocumentPosition(target) {
    let result = 0;
    if (this !== target) {
      let self2 = getParentNodeCount(this);
      let other = getParentNodeCount(target);
      if (self2 < other) {
        result += DOCUMENT_POSITION_FOLLOWING;
        if (this.contains(target))
          result += DOCUMENT_POSITION_CONTAINED_BY;
      } else if (other < self2) {
        result += DOCUMENT_POSITION_PRECEDING;
        if (target.contains(this))
          result += DOCUMENT_POSITION_CONTAINS;
      } else if (self2 && other) {
        const { childNodes } = this.parentNode;
        if (childNodes.indexOf(this) < childNodes.indexOf(target))
          result += DOCUMENT_POSITION_FOLLOWING;
        else
          result += DOCUMENT_POSITION_PRECEDING;
      }
      if (!self2 || !other) {
        result += DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
        result += DOCUMENT_POSITION_DISCONNECTED;
      }
    }
    return result;
  }
  isEqualNode(node) {
    if (this === node)
      return true;
    if (this.nodeType === node.nodeType) {
      switch (this.nodeType) {
        case DOCUMENT_NODE:
        case DOCUMENT_FRAGMENT_NODE: {
          const aNodes = this.childNodes;
          const bNodes = node.childNodes;
          return aNodes.length === bNodes.length && aNodes.every((node2, i) => node2.isEqualNode(bNodes[i]));
        }
      }
      return this.toString() === node.toString();
    }
    return false;
  }
  _getParent() {
    return this.parentNode;
  }
  getRootNode() {
    let root = this;
    while (root.parentNode)
      root = root.parentNode;
    return root.nodeType === DOCUMENT_NODE ? root.documentElement : root;
  }
};

// node_modules/linkedom/esm/interface/attr.js
var QUOTE = /"/g;
var Attr = class extends Node {
  constructor(ownerDocument, name, value = "") {
    super(ownerDocument, "#attribute", ATTRIBUTE_NODE);
    this.ownerElement = null;
    this.name = $String(name);
    this[VALUE] = $String(value);
    this[CHANGED] = false;
  }
  get value() {
    return this[VALUE];
  }
  set value(newValue) {
    const { [VALUE]: oldValue, name, ownerElement } = this;
    this[VALUE] = $String(newValue);
    this[CHANGED] = true;
    if (ownerElement) {
      attributeChangedCallback2(ownerElement, name, oldValue);
      attributeChangedCallback(ownerElement, name, oldValue, this[VALUE]);
    }
  }
  cloneNode() {
    const { ownerDocument, name, [VALUE]: value } = this;
    return new Attr(ownerDocument, name, value);
  }
  toString() {
    const { name, [VALUE]: value } = this;
    return emptyAttributes.has(name) && !value ? name : `${name}="${value.replace(QUOTE, "&quot;")}"`;
  }
  toJSON() {
    const json = [];
    attrAsJSON(this, json);
    return json;
  }
};

// node_modules/linkedom/esm/shared/node.js
var isConnected = ({ ownerDocument, parentNode }) => {
  while (parentNode) {
    if (parentNode === ownerDocument)
      return true;
    parentNode = parentNode.parentNode;
  }
  return false;
};
var parentElement = ({ parentNode }) => {
  if (parentNode) {
    switch (parentNode.nodeType) {
      case DOCUMENT_NODE:
      case DOCUMENT_FRAGMENT_NODE:
        return null;
    }
  }
  return parentNode;
};
var previousSibling = ({ [PREV]: prev }) => {
  switch (prev ? prev.nodeType : 0) {
    case NODE_END:
      return prev[START];
    case TEXT_NODE:
    case COMMENT_NODE:
      return prev;
  }
  return null;
};
var nextSibling = (node) => {
  const next = getEnd(node)[NEXT];
  return next && (next.nodeType === NODE_END ? null : next);
};

// node_modules/linkedom/esm/mixin/non-document-type-child-node.js
var nextElementSibling = (node) => {
  let next = nextSibling(node);
  while (next && next.nodeType !== ELEMENT_NODE)
    next = nextSibling(next);
  return next;
};
var previousElementSibling = (node) => {
  let prev = previousSibling(node);
  while (prev && prev.nodeType !== ELEMENT_NODE)
    prev = previousSibling(prev);
  return prev;
};

// node_modules/linkedom/esm/mixin/child-node.js
var asFragment = (ownerDocument, nodes) => {
  const fragment = ownerDocument.createDocumentFragment();
  fragment.append(...nodes);
  return fragment;
};
var before = (node, nodes) => {
  const { ownerDocument, parentNode } = node;
  if (parentNode)
    parentNode.insertBefore(asFragment(ownerDocument, nodes), node);
};
var after = (node, nodes) => {
  const { ownerDocument, parentNode } = node;
  if (parentNode)
    parentNode.insertBefore(asFragment(ownerDocument, nodes), getEnd(node)[NEXT]);
};
var replaceWith = (node, nodes) => {
  const { ownerDocument, parentNode } = node;
  if (parentNode) {
    parentNode.insertBefore(asFragment(ownerDocument, nodes), node);
    node.remove();
  }
};
var remove = (prev, current, next) => {
  const { parentNode, nodeType } = current;
  if (prev || next) {
    setAdjacent(prev, next);
    current[PREV] = null;
    getEnd(current)[NEXT] = null;
  }
  if (parentNode) {
    current.parentNode = null;
    moCallback(current, parentNode);
    if (nodeType === ELEMENT_NODE)
      disconnectedCallback(current);
  }
};

// node_modules/linkedom/esm/interface/character-data.js
var CharacterData = class extends Node {
  constructor(ownerDocument, localName, nodeType, data) {
    super(ownerDocument, localName, nodeType);
    this[VALUE] = $String(data);
  }
  get isConnected() {
    return isConnected(this);
  }
  get parentElement() {
    return parentElement(this);
  }
  get previousSibling() {
    return previousSibling(this);
  }
  get nextSibling() {
    return nextSibling(this);
  }
  get previousElementSibling() {
    return previousElementSibling(this);
  }
  get nextElementSibling() {
    return nextElementSibling(this);
  }
  before(...nodes) {
    before(this, nodes);
  }
  after(...nodes) {
    after(this, nodes);
  }
  replaceWith(...nodes) {
    replaceWith(this, nodes);
  }
  remove() {
    remove(this[PREV], this, this[NEXT]);
  }
  get data() {
    return this[VALUE];
  }
  set data(value) {
    this[VALUE] = $String(value);
    moCallback(this, this.parentNode);
  }
  get nodeValue() {
    return this.data;
  }
  set nodeValue(value) {
    this.data = value;
  }
  get textContent() {
    return this.data;
  }
  set textContent(value) {
    this.data = value;
  }
  get length() {
    return this.data.length;
  }
  substringData(offset, count) {
    return this.data.substr(offset, count);
  }
  appendData(data) {
    this.data += data;
  }
  insertData(offset, data) {
    const { data: t } = this;
    this.data = t.slice(0, offset) + data + t.slice(offset);
  }
  deleteData(offset, count) {
    const { data: t } = this;
    this.data = t.slice(0, offset) + t.slice(offset + count);
  }
  replaceData(offset, count, data) {
    const { data: t } = this;
    this.data = t.slice(0, offset) + data + t.slice(offset + count);
  }
  toJSON() {
    const json = [];
    characterDataAsJSON(this, json);
    return json;
  }
};

// node_modules/linkedom/esm/shared/text-escaper.js
var { replace } = "";
var ca = /[<>&\xA0]/g;
var esca = {
  "\xA0": "&nbsp;",
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;"
};
var pe = (m) => esca[m];
var escape = (es) => replace.call(es, ca, pe);

// node_modules/linkedom/esm/interface/comment.js
var Comment = class extends CharacterData {
  constructor(ownerDocument, data = "") {
    super(ownerDocument, "#comment", COMMENT_NODE, data);
  }
  cloneNode() {
    const { ownerDocument, [VALUE]: data } = this;
    return new Comment(ownerDocument, data);
  }
  toString() {
    return `<!--${escape(this[VALUE])}-->`;
  }
};

// node_modules/linkedom/esm/shared/matches.js
var CSSselect = __toModule(require_lib11());
var { isArray } = Array;
var isTag = ({ nodeType }) => nodeType === ELEMENT_NODE;
var existsOne = (test, elements) => elements.some((element) => isTag(element) && (test(element) || existsOne(test, getChildren(element))));
var getAttributeValue = (element, name) => element.getAttribute(name);
var getChildren = ({ childNodes }) => childNodes;
var getName = ({ localName }) => localName.toLowerCase();
var getParent = ({ parentNode }) => parentNode;
var getSiblings = (element) => {
  const { parentNode } = element;
  return parentNode ? getChildren(parentNode) : element;
};
var getText = (node) => {
  if (isArray(node))
    return node.map(getText).join("");
  if (isTag(node))
    return getText(getChildren(node));
  if (node.nodeType === TEXT_NODE)
    return node.data;
  return "";
};
var hasAttrib = (element, name) => element.hasAttribute(name);
var removeSubsets = (nodes) => {
  let { length } = nodes;
  while (length--) {
    const node = nodes[length];
    if (length && -1 < nodes.lastIndexOf(node, length - 1)) {
      nodes.splice(length, 1);
      continue;
    }
    for (let { parentNode } = node; parentNode; parentNode = parentNode.parentNode) {
      if (nodes.includes(parentNode)) {
        nodes.splice(length, 1);
        break;
      }
    }
  }
  return nodes;
};
var findAll = (test, nodes) => {
  const matches2 = [];
  for (const node of nodes) {
    if (isTag(node)) {
      if (test(node))
        matches2.push(node);
      matches2.push(...findAll(test, getChildren(node)));
    }
  }
  return matches2;
};
var findOne = (test, nodes) => {
  for (let node of nodes)
    if (test(node) || (node = findOne(test, getChildren(node))))
      return node;
  return null;
};
var adapter = {
  isTag,
  existsOne,
  getAttributeValue,
  getChildren,
  getName,
  getParent,
  getSiblings,
  getText,
  hasAttrib,
  removeSubsets,
  findAll,
  findOne
};
var prepareMatch = (element, selectors) => {
  return CSSselect.compile(selectors, {
    xmlMode: !ignoreCase(element),
    adapter
  });
};
var matches = (element, selectors) => {
  return CSSselect.is(element, selectors, {
    strict: true,
    xmlMode: !ignoreCase(element),
    adapter
  });
};

// node_modules/linkedom/esm/interface/text.js
var Text = class extends CharacterData {
  constructor(ownerDocument, data = "") {
    super(ownerDocument, "#text", TEXT_NODE, data);
  }
  get wholeText() {
    const text = [];
    let { previousSibling: previousSibling2, nextSibling: nextSibling2 } = this;
    while (previousSibling2) {
      if (previousSibling2.nodeType === TEXT_NODE)
        text.unshift(previousSibling2[VALUE]);
      else
        break;
      previousSibling2 = previousSibling2.previousSibling;
    }
    text.push(this[VALUE]);
    while (nextSibling2) {
      if (nextSibling2.nodeType === TEXT_NODE)
        text.push(nextSibling2[VALUE]);
      else
        break;
      nextSibling2 = nextSibling2.nextSibling;
    }
    return text.join("");
  }
  cloneNode() {
    const { ownerDocument, [VALUE]: data } = this;
    return new Text(ownerDocument, data);
  }
  toString() {
    return escape(this[VALUE]);
  }
};

// node_modules/linkedom/esm/mixin/parent-node.js
var isNode = (node) => node instanceof Node;
var insert = (parentNode, child, nodes) => {
  const { ownerDocument } = parentNode;
  for (const node of nodes)
    parentNode.insertBefore(isNode(node) ? node : new Text(ownerDocument, node), child);
};
var ParentNode = class extends Node {
  constructor(ownerDocument, localName, nodeType) {
    super(ownerDocument, localName, nodeType);
    this[PRIVATE] = null;
    this[NEXT] = this[END] = {
      [NEXT]: null,
      [PREV]: this,
      [START]: this,
      nodeType: NODE_END,
      ownerDocument: this.ownerDocument,
      parentNode: null
    };
  }
  get childNodes() {
    const childNodes = new NodeList();
    let { firstChild } = this;
    while (firstChild) {
      childNodes.push(firstChild);
      firstChild = nextSibling(firstChild);
    }
    return childNodes;
  }
  get children() {
    const children = new NodeList();
    let { firstElementChild } = this;
    while (firstElementChild) {
      children.push(firstElementChild);
      firstElementChild = nextElementSibling(firstElementChild);
    }
    return children;
  }
  get firstChild() {
    let { [NEXT]: next, [END]: end } = this;
    while (next.nodeType === ATTRIBUTE_NODE)
      next = next[NEXT];
    return next === end ? null : next;
  }
  get firstElementChild() {
    let { firstChild } = this;
    while (firstChild) {
      if (firstChild.nodeType === ELEMENT_NODE)
        return firstChild;
      firstChild = nextSibling(firstChild);
    }
    return null;
  }
  get lastChild() {
    const prev = this[END][PREV];
    switch (prev.nodeType) {
      case NODE_END:
        return prev[START];
      case ATTRIBUTE_NODE:
        return null;
    }
    return prev === this ? null : prev;
  }
  get lastElementChild() {
    let { lastChild } = this;
    while (lastChild) {
      if (lastChild.nodeType === ELEMENT_NODE)
        return lastChild;
      lastChild = previousSibling(lastChild);
    }
    return null;
  }
  get childElementCount() {
    return this.children.length;
  }
  prepend(...nodes) {
    insert(this, this.firstChild, nodes);
  }
  append(...nodes) {
    insert(this, this[END], nodes);
  }
  replaceChildren(...nodes) {
    let { [NEXT]: next, [END]: end } = this;
    while (next !== end && next.nodeType === ATTRIBUTE_NODE)
      next = next[NEXT];
    while (next !== end) {
      const after2 = getEnd(next)[NEXT];
      next.remove();
      next = after2;
    }
    if (nodes.length)
      insert(this, end, nodes);
  }
  getElementsByClassName(className) {
    const elements = new NodeList();
    let { [NEXT]: next, [END]: end } = this;
    while (next !== end) {
      if (next.nodeType === ELEMENT_NODE && next.hasAttribute("class") && next.classList.has(className))
        elements.push(next);
      next = next[NEXT];
    }
    return elements;
  }
  getElementsByTagName(tagName15) {
    const elements = new NodeList();
    let { [NEXT]: next, [END]: end } = this;
    while (next !== end) {
      if (next.nodeType === ELEMENT_NODE && (next.localName === tagName15 || localCase(next) === tagName15))
        elements.push(next);
      next = next[NEXT];
    }
    return elements;
  }
  querySelector(selectors) {
    const matches2 = prepareMatch(this, selectors);
    let { [NEXT]: next, [END]: end } = this;
    while (next !== end) {
      if (next.nodeType === ELEMENT_NODE && matches2(next))
        return next;
      next = next[NEXT];
    }
    return null;
  }
  querySelectorAll(selectors) {
    const matches2 = prepareMatch(this, selectors);
    const elements = new NodeList();
    let { [NEXT]: next, [END]: end } = this;
    while (next !== end) {
      if (next.nodeType === ELEMENT_NODE && matches2(next))
        elements.push(next);
      next = next[NEXT];
    }
    return elements;
  }
  appendChild(node) {
    return this.insertBefore(node, this[END]);
  }
  contains(node) {
    let parentNode = node;
    while (parentNode && parentNode !== this)
      parentNode = parentNode.parentNode;
    return parentNode === this;
  }
  insertBefore(node, before2 = null) {
    if (node === this)
      throw new Error("unable to append a node to itself");
    const next = before2 || this[END];
    switch (node.nodeType) {
      case ELEMENT_NODE:
        node.remove();
        node.parentNode = this;
        knownBoundaries(next[PREV], node, next);
        moCallback(node, null);
        connectedCallback(node);
        break;
      case DOCUMENT_FRAGMENT_NODE: {
        let { [PRIVATE]: parentNode, firstChild, lastChild } = node;
        if (firstChild) {
          knownSegment(next[PREV], firstChild, lastChild, next);
          knownAdjacent(node, node[END]);
          if (parentNode)
            parentNode.replaceChildren();
          do {
            firstChild.parentNode = this;
            moCallback(firstChild, null);
            if (firstChild.nodeType === ELEMENT_NODE)
              connectedCallback(firstChild);
          } while (firstChild !== lastChild && (firstChild = nextSibling(firstChild)));
        }
        break;
      }
      case TEXT_NODE:
      case COMMENT_NODE:
        node.remove();
      default:
        node.parentNode = this;
        knownSiblings(next[PREV], node, next);
        moCallback(node, null);
        break;
    }
    return node;
  }
  normalize() {
    let { [NEXT]: next, [END]: end } = this;
    while (next !== end) {
      const { [NEXT]: $next, [PREV]: $prev, nodeType } = next;
      if (nodeType === TEXT_NODE) {
        if (!next[VALUE])
          next.remove();
        else if ($prev && $prev.nodeType === TEXT_NODE) {
          $prev.textContent += next.textContent;
          next.remove();
        }
      }
      next = $next;
    }
  }
  removeChild(node) {
    if (node.parentNode !== this)
      throw new Error("node is not a child");
    node.remove();
    return node;
  }
  replaceChild(node, replaced) {
    const next = getEnd(replaced)[NEXT];
    replaced.remove();
    this.insertBefore(node, next);
    return replaced;
  }
};

// node_modules/linkedom/esm/mixin/non-element-parent-node.js
var NonElementParentNode = class extends ParentNode {
  getElementById(id) {
    let { [NEXT]: next, [END]: end } = this;
    while (next !== end) {
      if (next.nodeType === ELEMENT_NODE && next.id === id)
        return next;
      next = next[NEXT];
    }
    return null;
  }
  cloneNode(deep) {
    const { ownerDocument, constructor } = this;
    const nonEPN = new constructor(ownerDocument);
    if (deep) {
      const { [END]: end } = nonEPN;
      for (const node of this.childNodes)
        nonEPN.insertBefore(node.cloneNode(deep), end);
    }
    return nonEPN;
  }
  toString() {
    const { childNodes, localName } = this;
    return `<${localName}>${childNodes.join("")}</${localName}>`;
  }
  toJSON() {
    const json = [];
    nonElementAsJSON(this, json);
    return json;
  }
};

// node_modules/linkedom/esm/interface/document-fragment.js
var DocumentFragment = class extends NonElementParentNode {
  constructor(ownerDocument) {
    super(ownerDocument, "#document-fragment", DOCUMENT_FRAGMENT_NODE);
  }
};

// node_modules/linkedom/esm/interface/document-type.js
var DocumentType = class extends Node {
  constructor(ownerDocument, name, publicId = "", systemId = "") {
    super(ownerDocument, "#document-type", DOCUMENT_TYPE_NODE);
    this.name = name;
    this.publicId = publicId;
    this.systemId = systemId;
  }
  cloneNode() {
    const { ownerDocument, name, publicId, systemId } = this;
    return new DocumentType(ownerDocument, name, publicId, systemId);
  }
  toString() {
    const { name, publicId, systemId } = this;
    const hasPublic = 0 < publicId.length;
    const str = [name];
    if (hasPublic)
      str.push("PUBLIC", `"${publicId}"`);
    if (systemId.length) {
      if (!hasPublic)
        str.push("SYSTEM");
      str.push(`"${systemId}"`);
    }
    return `<!DOCTYPE ${str.join(" ")}>`;
  }
  toJSON() {
    const json = [];
    documentTypeAsJSON(this, json);
    return json;
  }
};

// node_modules/uhyphen/esm/index.js
var esm_default2 = (camel) => camel.replace(/(([A-Z0-9])([A-Z0-9][a-z]))|(([a-z])([A-Z]))/g, "$2$5-$3$6").toLowerCase();

// node_modules/linkedom/esm/dom/string-map.js
var refs = new WeakMap();
var key = (name) => `data-${esm_default2(name)}`;
var prop = (name) => name.slice(5).replace(/-([a-z])/g, (_, $1) => $1.toUpperCase());
var handler = {
  get(dataset, name) {
    if (name in dataset)
      return refs.get(dataset).getAttribute(key(name));
  },
  set(dataset, name, value) {
    dataset[name] = value;
    refs.get(dataset).setAttribute(key(name), value);
    return true;
  },
  deleteProperty(dataset, name) {
    if (name in dataset)
      refs.get(dataset).removeAttribute(key(name));
    return delete dataset[name];
  }
};
var DOMStringMap = class {
  constructor(ref) {
    for (const { name, value } of ref.attributes) {
      if (/^data-/.test(name))
        this[prop(name)] = value;
    }
    refs.set(this, ref);
    return new Proxy(this, handler);
  }
};
setPrototypeOf(DOMStringMap.prototype, null);

// node_modules/linkedom/esm/dom/token-list.js
var { add } = Set.prototype;
var addTokens = (self2, tokens) => {
  for (const token of tokens) {
    if (token)
      add.call(self2, token);
  }
};
var update = ({ [OWNER_ELEMENT]: ownerElement, value }) => {
  const attribute2 = ownerElement.getAttributeNode("class");
  if (attribute2)
    attribute2.value = value;
  else
    setAttribute(ownerElement, new Attr(ownerElement.ownerDocument, "class", value));
};
var DOMTokenList = class extends Set {
  constructor(ownerElement) {
    super();
    this[OWNER_ELEMENT] = ownerElement;
    const attribute2 = ownerElement.getAttributeNode("class");
    if (attribute2)
      addTokens(this, attribute2.value.split(/\s+/));
  }
  get length() {
    return this.size;
  }
  get value() {
    return [...this].join(" ");
  }
  add(...tokens) {
    addTokens(this, tokens);
    update(this);
  }
  contains(token) {
    return this.has(token);
  }
  remove(...tokens) {
    for (const token of tokens)
      this.delete(token);
    update(this);
  }
  toggle(token, force) {
    if (this.has(token)) {
      if (force)
        return true;
      this.delete(token);
      update(this);
    } else if (force || arguments.length === 1) {
      super.add(token);
      update(this);
      return true;
    }
    return false;
  }
  replace(token, newToken) {
    if (this.has(token)) {
      this.delete(token);
      super.add(newToken);
      update(this);
      return true;
    }
    return false;
  }
  supports() {
    return true;
  }
};

// node_modules/linkedom/esm/interface/css-style-declaration.js
var refs2 = new WeakMap();
var getKeys = (style) => [...style.keys()].filter((key2) => key2 !== PRIVATE);
var updateKeys = (style) => {
  const attr = refs2.get(style).getAttributeNode("style");
  if (!attr || attr[CHANGED] || style.get(PRIVATE) !== attr) {
    style.clear();
    if (attr) {
      style.set(PRIVATE, attr);
      for (const rule of attr[VALUE].split(/\s*;\s*/)) {
        const pair = rule.split(/\s*:\s*/);
        if (1 < pair.length) {
          let [key2, value] = pair;
          key2 = key2.trim();
          value = value.trim();
          if (key2 && value)
            style.set(key2, value);
        }
      }
    }
  }
  return attr;
};
var handler2 = {
  get(style, name) {
    if (name in prototype)
      return style[name];
    updateKeys(style);
    if (name === "length")
      return getKeys(style).length;
    if (/^\d+$/.test(name))
      return getKeys(style)[name];
    return style.get(esm_default2(name));
  },
  set(style, name, value) {
    if (name === "cssText")
      style[name] = value;
    else {
      let attr = updateKeys(style);
      if (value == null)
        style.delete(esm_default2(name));
      else
        style.set(esm_default2(name), value);
      if (!attr) {
        const element = refs2.get(style);
        attr = element.ownerDocument.createAttribute("style");
        element.setAttributeNode(attr);
        style.set(PRIVATE, attr);
      }
      attr[CHANGED] = false;
      attr[VALUE] = style.toString();
    }
    return true;
  }
};
var CSSStyleDeclaration = class extends Map {
  constructor(element) {
    super();
    refs2.set(this, element);
    return new Proxy(this, handler2);
  }
  get cssText() {
    return this.toString();
  }
  set cssText(value) {
    refs2.get(this).setAttribute("style", value);
  }
  [Symbol.iterator]() {
    const keys2 = getKeys(this[PRIVATE]);
    const { length } = keys2;
    let i = 0;
    return {
      next() {
        const done = i === length;
        return { done, value: done ? null : keys2[i++] };
      }
    };
  }
  get [PRIVATE]() {
    return this;
  }
  toString() {
    const self2 = this[PRIVATE];
    updateKeys(self2);
    const cssText = [];
    self2.forEach(push, cssText);
    return cssText.join(";");
  }
};
var { prototype } = CSSStyleDeclaration;
function push(value, key2) {
  if (key2 !== PRIVATE)
    this.push(`${key2}:${value}`);
}

// node_modules/linkedom/esm/interface/event.js
var BUBBLING_PHASE = 3;
var CAPTURING_PHASE = 1;
var GlobalEvent = typeof Event === "function" ? Event : class Event2 {
  static get BUBBLING_PHASE() {
    return BUBBLING_PHASE;
  }
  static get CAPTURING_PHASE() {
    return CAPTURING_PHASE;
  }
  constructor(type, eventInitDict = {}) {
    this.type = type;
    this.bubbles = !!eventInitDict.bubbles;
    this.cancelBubble = false;
    this._stopImmediatePropagationFlag = false;
    this.cancelable = !!eventInitDict.cancelable;
    this.eventPhase = this.BUBBLING_PHASE;
    this.timeStamp = Date.now();
    this.defaultPrevented = false;
    this.originalTarget = null;
    this.returnValue = null;
    this.srcElement = null;
    this.target = null;
  }
  get BUBBLING_PHASE() {
    return BUBBLING_PHASE;
  }
  get CAPTURING_PHASE() {
    return CAPTURING_PHASE;
  }
  preventDefault() {
    this.defaultPrevented = true;
  }
  stopPropagation() {
    this.cancelBubble = true;
  }
  stopImmediatePropagation() {
    this._stopImmediatePropagationFlag = true;
  }
};
var DOMEvent = class extends GlobalEvent {
  stopImmediatePropagation() {
    super.stopPropagation();
    if (typeof super.stopImmediatePropagation === "function")
      super.stopImmediatePropagation();
  }
};

// node_modules/linkedom/esm/interface/named-node-map.js
var NamedNodeMap = class extends Array {
  constructor(ownerElement) {
    super();
    this.ownerElement = ownerElement;
  }
  getNamedItem(name) {
    return this.ownerElement.getAttributeNode(name);
  }
  setNamedItem(attr) {
    this.ownerElement.setAttributeNode(attr);
    this.unshift(attr);
  }
  removeNamedItem(name) {
    const item = this.getNamedItem(name);
    this.ownerElement.removeAttribute(name);
    this.splice(this.indexOf(item), 1);
  }
  item(index) {
    return index < this.length ? this[index] : null;
  }
  getNamedItemNS(_, name) {
    return this.getNamedItem(name);
  }
  setNamedItemNS(_, attr) {
    return this.setNamedItem(attr);
  }
  removeNamedItemNS(_, name) {
    return this.removeNamedItem(name);
  }
};

// node_modules/linkedom/esm/interface/shadow-root.js
var ShadowRoot = class extends NonElementParentNode {
  constructor(ownerDocument) {
    super(ownerDocument, "#shadow-root", DOCUMENT_FRAGMENT_NODE);
  }
};

// node_modules/linkedom/esm/interface/element.js
var attributesHandler = {
  get(target, key2) {
    return key2 in target ? target[key2] : target.find(({ name }) => name === key2);
  }
};
var create2 = (ownerDocument, element, localName) => {
  if ("ownerSVGElement" in element) {
    const svg = ownerDocument.createElementNS(SVG_NAMESPACE, localName);
    svg.ownerSVGElement = element.ownerSVGElement;
    return svg;
  }
  return ownerDocument.createElement(localName);
};
var isVoid = ({ localName, ownerDocument }) => {
  return ownerDocument[MIME].voidElements.test(localName);
};
var shadowRoots = new WeakMap();
var Element = class extends ParentNode {
  constructor(ownerDocument, localName) {
    super(ownerDocument, localName, ELEMENT_NODE);
    this[CLASS_LIST] = null;
    this[DATASET] = null;
    this[STYLE] = null;
  }
  get isConnected() {
    return isConnected(this);
  }
  get parentElement() {
    return parentElement(this);
  }
  get previousSibling() {
    return previousSibling(this);
  }
  get nextSibling() {
    return nextSibling(this);
  }
  get previousElementSibling() {
    return previousElementSibling(this);
  }
  get nextElementSibling() {
    return nextElementSibling(this);
  }
  before(...nodes) {
    before(this, nodes);
  }
  after(...nodes) {
    after(this, nodes);
  }
  replaceWith(...nodes) {
    replaceWith(this, nodes);
  }
  remove() {
    remove(this[PREV], this, this[END][NEXT]);
  }
  get id() {
    return stringAttribute.get(this, "id");
  }
  set id(value) {
    stringAttribute.set(this, "id", value);
  }
  get className() {
    return this.classList.value;
  }
  set className(value) {
    const { classList } = this;
    classList.clear();
    classList.add(...value.split(/\s+/));
  }
  get nodeName() {
    return localCase(this);
  }
  get tagName() {
    return localCase(this);
  }
  get classList() {
    return this[CLASS_LIST] || (this[CLASS_LIST] = new DOMTokenList(this));
  }
  get dataset() {
    return this[DATASET] || (this[DATASET] = new DOMStringMap(this));
  }
  get nonce() {
    return stringAttribute.get(this, "nonce");
  }
  set nonce(value) {
    stringAttribute.set(this, "nonce", value);
  }
  get style() {
    return this[STYLE] || (this[STYLE] = new CSSStyleDeclaration(this));
  }
  get tabIndex() {
    return numericAttribute.get(this, "tabindex") || -1;
  }
  set tabIndex(value) {
    numericAttribute.set(this, "tabindex", value);
  }
  get innerText() {
    return this.textContent;
  }
  get textContent() {
    const text = [];
    let { [NEXT]: next, [END]: end } = this;
    while (next !== end) {
      if (next.nodeType === TEXT_NODE)
        text.push(next.textContent);
      next = next[NEXT];
    }
    return text.join("");
  }
  set textContent(text) {
    this.replaceChildren();
    if (text)
      this.appendChild(new Text(this.ownerDocument, text));
  }
  get innerHTML() {
    return this.childNodes.join("");
  }
  set innerHTML(html) {
    const { ownerDocument } = this;
    const { constructor } = ownerDocument;
    const document = new constructor();
    document[CUSTOM_ELEMENTS] = ownerDocument[CUSTOM_ELEMENTS];
    const { childNodes } = parseFromString(document, ignoreCase(this), html);
    this.replaceChildren(...childNodes);
  }
  get outerHTML() {
    return this.toString();
  }
  set outerHTML(html) {
    const template = this.ownerDocument.createElement("");
    template.innerHTML = html;
    this.replaceWith(...template.childNodes);
  }
  get attributes() {
    const attributes = new NamedNodeMap(this);
    let next = this[NEXT];
    while (next.nodeType === ATTRIBUTE_NODE) {
      attributes.push(next);
      next = next[NEXT];
    }
    return new Proxy(attributes, attributesHandler);
  }
  focus() {
    this.dispatchEvent(new DOMEvent("focus"));
  }
  getAttribute(name) {
    if (name === "class")
      return this.className;
    const attribute2 = this.getAttributeNode(name);
    return attribute2 && attribute2.value;
  }
  getAttributeNode(name) {
    let next = this[NEXT];
    while (next.nodeType === ATTRIBUTE_NODE) {
      if (next.name === name)
        return next;
      next = next[NEXT];
    }
    return null;
  }
  getAttributeNames() {
    const attributes = new NodeList();
    let next = this[NEXT];
    while (next.nodeType === ATTRIBUTE_NODE) {
      attributes.push(next.name);
      next = next[NEXT];
    }
    return attributes;
  }
  hasAttribute(name) {
    return !!this.getAttributeNode(name);
  }
  hasAttributes() {
    return this[NEXT].nodeType === ATTRIBUTE_NODE;
  }
  removeAttribute(name) {
    if (name === "class" && this[CLASS_LIST])
      this[CLASS_LIST].clear();
    let next = this[NEXT];
    while (next.nodeType === ATTRIBUTE_NODE) {
      if (next.name === name) {
        removeAttribute(this, next);
        return;
      }
      next = next[NEXT];
    }
  }
  removeAttributeNode(attribute2) {
    let next = this[NEXT];
    while (next.nodeType === ATTRIBUTE_NODE) {
      if (next === attribute2) {
        removeAttribute(this, next);
        return;
      }
      next = next[NEXT];
    }
  }
  setAttribute(name, value) {
    if (name === "class")
      this.className = value;
    else {
      const attribute2 = this.getAttributeNode(name);
      if (attribute2)
        attribute2.value = value;
      else
        setAttribute(this, new Attr(this.ownerDocument, name, value));
    }
  }
  setAttributeNode(attribute2) {
    const { name } = attribute2;
    const previously = this.getAttributeNode(name);
    if (previously !== attribute2) {
      if (previously)
        this.removeAttributeNode(previously);
      const { ownerElement } = attribute2;
      if (ownerElement)
        ownerElement.removeAttributeNode(attribute2);
      setAttribute(this, attribute2);
    }
    return previously;
  }
  toggleAttribute(name, force) {
    if (this.hasAttribute(name)) {
      if (!force) {
        this.removeAttribute(name);
        return false;
      }
      return true;
    } else if (force || arguments.length === 1) {
      this.setAttribute(name, "");
      return true;
    }
    return false;
  }
  get shadowRoot() {
    if (shadowRoots.has(this)) {
      const { mode, shadowRoot } = shadowRoots.get(this);
      if (mode === "open")
        return shadowRoot;
    }
    return null;
  }
  attachShadow(init) {
    if (shadowRoots.has(this))
      throw new Error("operation not supported");
    const shadowRoot = new ShadowRoot(this.ownerDocument);
    shadowRoot.append(...this.childNodes);
    shadowRoots.set(this, {
      mode: init.mode,
      shadowRoot
    });
    return shadowRoot;
  }
  matches(selectors) {
    return matches(this, selectors);
  }
  closest(selectors) {
    let parentElement2 = this;
    const matches2 = prepareMatch(parentElement2, selectors);
    while (parentElement2 && !matches2(parentElement2))
      parentElement2 = parentElement2.parentElement;
    return parentElement2;
  }
  insertAdjacentElement(position, element) {
    const { parentElement: parentElement2 } = this;
    switch (position) {
      case "beforebegin":
        if (parentElement2) {
          parentElement2.insertBefore(element, this);
          break;
        }
        return null;
      case "afterbegin":
        this.insertBefore(element, this.firstChild);
        break;
      case "beforeend":
        this.insertBefore(element, null);
        break;
      case "afterend":
        if (parentElement2) {
          parentElement2.insertBefore(element, this.nextSibling);
          break;
        }
        return null;
    }
    return element;
  }
  insertAdjacentHTML(position, html) {
    const template = this.ownerDocument.createElement("template");
    template.innerHTML = html;
    this.insertAdjacentElement(position, template.content);
  }
  insertAdjacentText(position, text) {
    const node = this.ownerDocument.createTextNode(text);
    this.insertAdjacentElement(position, node);
  }
  cloneNode(deep = false) {
    const { ownerDocument, localName } = this;
    const addNext = (next2) => {
      next2.parentNode = parentNode;
      knownAdjacent($next, next2);
      $next = next2;
    };
    const clone = create2(ownerDocument, this, localName);
    let parentNode = clone, $next = clone;
    let { [NEXT]: next, [END]: prev } = this;
    while (next !== prev && (deep || next.nodeType === ATTRIBUTE_NODE)) {
      switch (next.nodeType) {
        case NODE_END:
          knownAdjacent($next, parentNode[END]);
          $next = parentNode[END];
          parentNode = parentNode.parentNode;
          break;
        case ELEMENT_NODE: {
          const node = create2(ownerDocument, next, next.localName);
          addNext(node);
          parentNode = node;
          break;
        }
        case ATTRIBUTE_NODE:
        case TEXT_NODE:
        case COMMENT_NODE:
          addNext(next.cloneNode(deep));
          break;
      }
      next = next[NEXT];
    }
    knownAdjacent($next, clone[END]);
    return clone;
  }
  toString() {
    const out = [];
    const { [END]: end } = this;
    let next = { [NEXT]: this };
    let isOpened = false;
    do {
      next = next[NEXT];
      switch (next.nodeType) {
        case ATTRIBUTE_NODE: {
          const attr = " " + next;
          switch (attr) {
            case " id":
            case " class":
            case " style":
              break;
            default:
              out.push(attr);
          }
          break;
        }
        case NODE_END: {
          const start = next[START];
          if (isOpened) {
            if ("ownerSVGElement" in start)
              out.push(" />");
            else if (isVoid(start))
              out.push(ignoreCase(start) ? ">" : " />");
            else
              out.push(`></${start.localName}>`);
            isOpened = false;
          } else
            out.push(`</${start.localName}>`);
          break;
        }
        case ELEMENT_NODE:
          if (isOpened)
            out.push(">");
          if (next.toString !== this.toString) {
            out.push(next.toString());
            next = next[END];
            isOpened = false;
          } else {
            out.push(`<${next.localName}`);
            isOpened = true;
          }
          break;
        case TEXT_NODE:
        case COMMENT_NODE:
          out.push((isOpened ? ">" : "") + next);
          isOpened = false;
          break;
      }
    } while (next !== end);
    return out.join("");
  }
  toJSON() {
    const json = [];
    elementAsJSON(this, json);
    return json;
  }
  getAttributeNS(_, name) {
    return this.getAttribute(name);
  }
  getElementsByTagNameNS(_, name) {
    return this.getElementsByTagName(name);
  }
  hasAttributeNS(_, name) {
    return this.hasAttribute(name);
  }
  removeAttributeNS(_, name) {
    this.removeAttribute(name);
  }
  setAttributeNS(_, name, value) {
    this.setAttribute(name, value);
  }
  setAttributeNodeNS(attr) {
    return this.setAttributeNode(attr);
  }
};

// node_modules/linkedom/esm/svg/element.js
var classNames = new WeakMap();
var handler3 = {
  get(target, name) {
    return target[name];
  },
  set(target, name, value) {
    target[name] = value;
    return true;
  }
};
var SVGElement = class extends Element {
  constructor(ownerDocument, localName, ownerSVGElement = null) {
    super(ownerDocument, localName);
    this.ownerSVGElement = ownerSVGElement;
  }
  get className() {
    if (!classNames.has(this))
      classNames.set(this, new Proxy({ baseVal: "", animVal: "" }, handler3));
    return classNames.get(this);
  }
  set className(value) {
    const { classList } = this;
    classList.clear();
    classList.add(...value.split(/\s+/));
  }
  setAttribute(name, value) {
    if (name === "style") {
      const { className } = this;
      className.baseVal = className.animVal = value;
    }
    super.setAttribute(name, value);
  }
};

// node_modules/linkedom/esm/shared/facades.js
var illegalConstructor = () => {
  throw new TypeError("Illegal constructor");
};
function Attr2() {
  illegalConstructor();
}
setPrototypeOf(Attr2, Attr);
Attr2.prototype = Attr.prototype;
function CharacterData2() {
  illegalConstructor();
}
setPrototypeOf(CharacterData2, CharacterData);
CharacterData2.prototype = CharacterData.prototype;
function Comment2() {
  illegalConstructor();
}
setPrototypeOf(Comment2, Comment);
Comment2.prototype = Comment.prototype;
function DocumentFragment2() {
  illegalConstructor();
}
setPrototypeOf(DocumentFragment2, DocumentFragment);
DocumentFragment2.prototype = DocumentFragment.prototype;
function DocumentType2() {
  illegalConstructor();
}
setPrototypeOf(DocumentType2, DocumentType);
DocumentType2.prototype = DocumentType.prototype;
function Element2() {
  illegalConstructor();
}
setPrototypeOf(Element2, Element);
Element2.prototype = Element.prototype;
function Node2() {
  illegalConstructor();
}
setPrototypeOf(Node2, Node);
Node2.prototype = Node.prototype;
function ShadowRoot2() {
  illegalConstructor();
}
setPrototypeOf(ShadowRoot2, ShadowRoot);
ShadowRoot2.prototype = ShadowRoot.prototype;
function Text2() {
  illegalConstructor();
}
setPrototypeOf(Text2, Text);
Text2.prototype = Text.prototype;
function SVGElement2() {
  illegalConstructor();
}
setPrototypeOf(SVGElement2, SVGElement);
SVGElement2.prototype = SVGElement.prototype;
var Facades = {
  Attr: Attr2,
  CharacterData: CharacterData2,
  Comment: Comment2,
  DocumentFragment: DocumentFragment2,
  DocumentType: DocumentType2,
  Element: Element2,
  Node: Node2,
  ShadowRoot: ShadowRoot2,
  Text: Text2,
  SVGElement: SVGElement2
};

// node_modules/linkedom/esm/html/element.js
var Level0 = new WeakMap();
var level0 = {
  get(element, name) {
    return Level0.has(element) && Level0.get(element)[name] || null;
  },
  set(element, name, value) {
    if (!Level0.has(element))
      Level0.set(element, {});
    const handlers = Level0.get(element);
    const type = name.slice(2);
    if (handlers[name])
      element.removeEventListener(type, handlers[name], false);
    if (handlers[name] = value)
      element.addEventListener(type, value, false);
  }
};
var HTMLElement = class extends Element {
  static get observedAttributes() {
    return [];
  }
  constructor(ownerDocument = null, localName = "") {
    super(ownerDocument, localName);
    if (!ownerDocument) {
      const { constructor: Class, [END]: end } = this;
      if (!Classes.has(Class))
        throw new Error("unable to initialize this Custom Element");
      const { ownerDocument: ownerDocument2, localName: localName2, options } = Classes.get(Class);
      this.ownerDocument = end.ownerDocument = ownerDocument2;
      this.localName = localName2;
      customElements.set(this, { connected: false });
      if (options.is)
        this.setAttribute("is", options.is);
    }
  }
  blur() {
    this.dispatchEvent(new DOMEvent("blur"));
  }
  click() {
    this.dispatchEvent(new DOMEvent("click"));
  }
  get accessKeyLabel() {
    const { accessKey } = this;
    return accessKey && `Alt+Shift+${accessKey}`;
  }
  get isContentEditable() {
    return this.hasAttribute("contenteditable");
  }
  get contentEditable() {
    return booleanAttribute.get(this, "contenteditable");
  }
  set contentEditable(value) {
    booleanAttribute.set(this, "contenteditable", value);
  }
  get draggable() {
    return booleanAttribute.get(this, "draggable");
  }
  set draggable(value) {
    booleanAttribute.set(this, "draggable", value);
  }
  get hidden() {
    return booleanAttribute.get(this, "hidden");
  }
  set hidden(value) {
    booleanAttribute.set(this, "hidden", value);
  }
  get spellcheck() {
    return booleanAttribute.get(this, "spellcheck");
  }
  set spellcheck(value) {
    booleanAttribute.set(this, "spellcheck", value);
  }
  get accessKey() {
    return stringAttribute.get(this, "accesskey");
  }
  set accessKey(value) {
    stringAttribute.set(this, "accesskey", value);
  }
  get dir() {
    return stringAttribute.get(this, "dir");
  }
  set dir(value) {
    stringAttribute.set(this, "dir", value);
  }
  get lang() {
    return stringAttribute.get(this, "lang");
  }
  set lang(value) {
    stringAttribute.set(this, "lang", value);
  }
  get title() {
    return stringAttribute.get(this, "title");
  }
  set title(value) {
    stringAttribute.set(this, "title", value);
  }
  get onabort() {
    return level0.get(this, "onabort");
  }
  set onabort(value) {
    level0.set(this, "onabort", value);
  }
  get onblur() {
    return level0.get(this, "onblur");
  }
  set onblur(value) {
    level0.set(this, "onblur", value);
  }
  get oncancel() {
    return level0.get(this, "oncancel");
  }
  set oncancel(value) {
    level0.set(this, "oncancel", value);
  }
  get oncanplay() {
    return level0.get(this, "oncanplay");
  }
  set oncanplay(value) {
    level0.set(this, "oncanplay", value);
  }
  get oncanplaythrough() {
    return level0.get(this, "oncanplaythrough");
  }
  set oncanplaythrough(value) {
    level0.set(this, "oncanplaythrough", value);
  }
  get onchange() {
    return level0.get(this, "onchange");
  }
  set onchange(value) {
    level0.set(this, "onchange", value);
  }
  get onclick() {
    return level0.get(this, "onclick");
  }
  set onclick(value) {
    level0.set(this, "onclick", value);
  }
  get onclose() {
    return level0.get(this, "onclose");
  }
  set onclose(value) {
    level0.set(this, "onclose", value);
  }
  get oncontextmenu() {
    return level0.get(this, "oncontextmenu");
  }
  set oncontextmenu(value) {
    level0.set(this, "oncontextmenu", value);
  }
  get oncuechange() {
    return level0.get(this, "oncuechange");
  }
  set oncuechange(value) {
    level0.set(this, "oncuechange", value);
  }
  get ondblclick() {
    return level0.get(this, "ondblclick");
  }
  set ondblclick(value) {
    level0.set(this, "ondblclick", value);
  }
  get ondrag() {
    return level0.get(this, "ondrag");
  }
  set ondrag(value) {
    level0.set(this, "ondrag", value);
  }
  get ondragend() {
    return level0.get(this, "ondragend");
  }
  set ondragend(value) {
    level0.set(this, "ondragend", value);
  }
  get ondragenter() {
    return level0.get(this, "ondragenter");
  }
  set ondragenter(value) {
    level0.set(this, "ondragenter", value);
  }
  get ondragleave() {
    return level0.get(this, "ondragleave");
  }
  set ondragleave(value) {
    level0.set(this, "ondragleave", value);
  }
  get ondragover() {
    return level0.get(this, "ondragover");
  }
  set ondragover(value) {
    level0.set(this, "ondragover", value);
  }
  get ondragstart() {
    return level0.get(this, "ondragstart");
  }
  set ondragstart(value) {
    level0.set(this, "ondragstart", value);
  }
  get ondrop() {
    return level0.get(this, "ondrop");
  }
  set ondrop(value) {
    level0.set(this, "ondrop", value);
  }
  get ondurationchange() {
    return level0.get(this, "ondurationchange");
  }
  set ondurationchange(value) {
    level0.set(this, "ondurationchange", value);
  }
  get onemptied() {
    return level0.get(this, "onemptied");
  }
  set onemptied(value) {
    level0.set(this, "onemptied", value);
  }
  get onended() {
    return level0.get(this, "onended");
  }
  set onended(value) {
    level0.set(this, "onended", value);
  }
  get onerror() {
    return level0.get(this, "onerror");
  }
  set onerror(value) {
    level0.set(this, "onerror", value);
  }
  get onfocus() {
    return level0.get(this, "onfocus");
  }
  set onfocus(value) {
    level0.set(this, "onfocus", value);
  }
  get oninput() {
    return level0.get(this, "oninput");
  }
  set oninput(value) {
    level0.set(this, "oninput", value);
  }
  get oninvalid() {
    return level0.get(this, "oninvalid");
  }
  set oninvalid(value) {
    level0.set(this, "oninvalid", value);
  }
  get onkeydown() {
    return level0.get(this, "onkeydown");
  }
  set onkeydown(value) {
    level0.set(this, "onkeydown", value);
  }
  get onkeypress() {
    return level0.get(this, "onkeypress");
  }
  set onkeypress(value) {
    level0.set(this, "onkeypress", value);
  }
  get onkeyup() {
    return level0.get(this, "onkeyup");
  }
  set onkeyup(value) {
    level0.set(this, "onkeyup", value);
  }
  get onload() {
    return level0.get(this, "onload");
  }
  set onload(value) {
    level0.set(this, "onload", value);
  }
  get onloadeddata() {
    return level0.get(this, "onloadeddata");
  }
  set onloadeddata(value) {
    level0.set(this, "onloadeddata", value);
  }
  get onloadedmetadata() {
    return level0.get(this, "onloadedmetadata");
  }
  set onloadedmetadata(value) {
    level0.set(this, "onloadedmetadata", value);
  }
  get onloadstart() {
    return level0.get(this, "onloadstart");
  }
  set onloadstart(value) {
    level0.set(this, "onloadstart", value);
  }
  get onmousedown() {
    return level0.get(this, "onmousedown");
  }
  set onmousedown(value) {
    level0.set(this, "onmousedown", value);
  }
  get onmouseenter() {
    return level0.get(this, "onmouseenter");
  }
  set onmouseenter(value) {
    level0.set(this, "onmouseenter", value);
  }
  get onmouseleave() {
    return level0.get(this, "onmouseleave");
  }
  set onmouseleave(value) {
    level0.set(this, "onmouseleave", value);
  }
  get onmousemove() {
    return level0.get(this, "onmousemove");
  }
  set onmousemove(value) {
    level0.set(this, "onmousemove", value);
  }
  get onmouseout() {
    return level0.get(this, "onmouseout");
  }
  set onmouseout(value) {
    level0.set(this, "onmouseout", value);
  }
  get onmouseover() {
    return level0.get(this, "onmouseover");
  }
  set onmouseover(value) {
    level0.set(this, "onmouseover", value);
  }
  get onmouseup() {
    return level0.get(this, "onmouseup");
  }
  set onmouseup(value) {
    level0.set(this, "onmouseup", value);
  }
  get onmousewheel() {
    return level0.get(this, "onmousewheel");
  }
  set onmousewheel(value) {
    level0.set(this, "onmousewheel", value);
  }
  get onpause() {
    return level0.get(this, "onpause");
  }
  set onpause(value) {
    level0.set(this, "onpause", value);
  }
  get onplay() {
    return level0.get(this, "onplay");
  }
  set onplay(value) {
    level0.set(this, "onplay", value);
  }
  get onplaying() {
    return level0.get(this, "onplaying");
  }
  set onplaying(value) {
    level0.set(this, "onplaying", value);
  }
  get onprogress() {
    return level0.get(this, "onprogress");
  }
  set onprogress(value) {
    level0.set(this, "onprogress", value);
  }
  get onratechange() {
    return level0.get(this, "onratechange");
  }
  set onratechange(value) {
    level0.set(this, "onratechange", value);
  }
  get onreset() {
    return level0.get(this, "onreset");
  }
  set onreset(value) {
    level0.set(this, "onreset", value);
  }
  get onresize() {
    return level0.get(this, "onresize");
  }
  set onresize(value) {
    level0.set(this, "onresize", value);
  }
  get onscroll() {
    return level0.get(this, "onscroll");
  }
  set onscroll(value) {
    level0.set(this, "onscroll", value);
  }
  get onseeked() {
    return level0.get(this, "onseeked");
  }
  set onseeked(value) {
    level0.set(this, "onseeked", value);
  }
  get onseeking() {
    return level0.get(this, "onseeking");
  }
  set onseeking(value) {
    level0.set(this, "onseeking", value);
  }
  get onselect() {
    return level0.get(this, "onselect");
  }
  set onselect(value) {
    level0.set(this, "onselect", value);
  }
  get onshow() {
    return level0.get(this, "onshow");
  }
  set onshow(value) {
    level0.set(this, "onshow", value);
  }
  get onstalled() {
    return level0.get(this, "onstalled");
  }
  set onstalled(value) {
    level0.set(this, "onstalled", value);
  }
  get onsubmit() {
    return level0.get(this, "onsubmit");
  }
  set onsubmit(value) {
    level0.set(this, "onsubmit", value);
  }
  get onsuspend() {
    return level0.get(this, "onsuspend");
  }
  set onsuspend(value) {
    level0.set(this, "onsuspend", value);
  }
  get ontimeupdate() {
    return level0.get(this, "ontimeupdate");
  }
  set ontimeupdate(value) {
    level0.set(this, "ontimeupdate", value);
  }
  get ontoggle() {
    return level0.get(this, "ontoggle");
  }
  set ontoggle(value) {
    level0.set(this, "ontoggle", value);
  }
  get onvolumechange() {
    return level0.get(this, "onvolumechange");
  }
  set onvolumechange(value) {
    level0.set(this, "onvolumechange", value);
  }
  get onwaiting() {
    return level0.get(this, "onwaiting");
  }
  set onwaiting(value) {
    level0.set(this, "onwaiting", value);
  }
  get onauxclick() {
    return level0.get(this, "onauxclick");
  }
  set onauxclick(value) {
    level0.set(this, "onauxclick", value);
  }
  get ongotpointercapture() {
    return level0.get(this, "ongotpointercapture");
  }
  set ongotpointercapture(value) {
    level0.set(this, "ongotpointercapture", value);
  }
  get onlostpointercapture() {
    return level0.get(this, "onlostpointercapture");
  }
  set onlostpointercapture(value) {
    level0.set(this, "onlostpointercapture", value);
  }
  get onpointercancel() {
    return level0.get(this, "onpointercancel");
  }
  set onpointercancel(value) {
    level0.set(this, "onpointercancel", value);
  }
  get onpointerdown() {
    return level0.get(this, "onpointerdown");
  }
  set onpointerdown(value) {
    level0.set(this, "onpointerdown", value);
  }
  get onpointerenter() {
    return level0.get(this, "onpointerenter");
  }
  set onpointerenter(value) {
    level0.set(this, "onpointerenter", value);
  }
  get onpointerleave() {
    return level0.get(this, "onpointerleave");
  }
  set onpointerleave(value) {
    level0.set(this, "onpointerleave", value);
  }
  get onpointermove() {
    return level0.get(this, "onpointermove");
  }
  set onpointermove(value) {
    level0.set(this, "onpointermove", value);
  }
  get onpointerout() {
    return level0.get(this, "onpointerout");
  }
  set onpointerout(value) {
    level0.set(this, "onpointerout", value);
  }
  get onpointerover() {
    return level0.get(this, "onpointerover");
  }
  set onpointerover(value) {
    level0.set(this, "onpointerover", value);
  }
  get onpointerup() {
    return level0.get(this, "onpointerup");
  }
  set onpointerup(value) {
    level0.set(this, "onpointerup", value);
  }
};

// node_modules/linkedom/esm/html/template-element.js
var tagName = "template";
var HTMLTemplateElement = class extends HTMLElement {
  constructor(ownerDocument) {
    super(ownerDocument, tagName);
    const content = this.ownerDocument.createDocumentFragment();
    (this[CONTENT] = content)[PRIVATE] = this;
  }
  get content() {
    if (this.hasChildNodes() && !this[CONTENT].hasChildNodes()) {
      for (const node of this.childNodes)
        this[CONTENT].appendChild(node.cloneNode(true));
    }
    return this[CONTENT];
  }
};
registerHTMLClass(tagName, HTMLTemplateElement);

// node_modules/linkedom/esm/html/html-element.js
var HTMLHtmlElement = class extends HTMLElement {
  constructor(ownerDocument, localName = "html") {
    super(ownerDocument, localName);
  }
};

// node_modules/linkedom/esm/html/text-element.js
var { toString } = HTMLElement.prototype;
var TextElement = class extends HTMLElement {
  get innerHTML() {
    return this.textContent;
  }
  set innerHTML(html) {
    this.textContent = html;
  }
  toString() {
    const outerHTML = toString.call(this.cloneNode());
    return outerHTML.replace(/></, `>${this.textContent}<`);
  }
};

// node_modules/linkedom/esm/html/script-element.js
var tagName2 = "script";
var HTMLScriptElement = class extends TextElement {
  constructor(ownerDocument, localName = tagName2) {
    super(ownerDocument, localName);
  }
};
registerHTMLClass(tagName2, HTMLScriptElement);

// node_modules/linkedom/esm/html/frame-element.js
var HTMLFrameElement = class extends HTMLElement {
  constructor(ownerDocument, localName = "frame") {
    super(ownerDocument, localName);
  }
};

// node_modules/linkedom/esm/html/i-frame-element.js
var HTMLIFrameElement = class extends HTMLElement {
  constructor(ownerDocument, localName = "iframe") {
    super(ownerDocument, localName);
  }
};

// node_modules/linkedom/esm/html/object-element.js
var HTMLObjectElement = class extends HTMLElement {
  constructor(ownerDocument, localName = "object") {
    super(ownerDocument, localName);
  }
};

// node_modules/linkedom/esm/html/head-element.js
var HTMLHeadElement = class extends HTMLElement {
  constructor(ownerDocument, localName = "head") {
    super(ownerDocument, localName);
  }
};

// node_modules/linkedom/esm/html/body-element.js
var HTMLBodyElement = class extends HTMLElement {
  constructor(ownerDocument, localName = "body") {
    super(ownerDocument, localName);
  }
};

// node_modules/linkedom/esm/html/style-element.js
var import_cssom = __toModule(require_lib12());
var tagName3 = "style";
var HTMLStyleElement = class extends TextElement {
  constructor(ownerDocument, localName = tagName3) {
    super(ownerDocument, localName);
    this[SHEET] = null;
  }
  get sheet() {
    const sheet = this[SHEET];
    if (sheet !== null) {
      return sheet;
    }
    return this[SHEET] = (0, import_cssom.parse)(this.textContent);
  }
  get innerHTML() {
    return super.innerHTML || "";
  }
  set innerHTML(value) {
    super.textContent = value;
    this[SHEET] = null;
  }
  get innerText() {
    return super.innerText || "";
  }
  set innerText(value) {
    super.textContent = value;
    this[SHEET] = null;
  }
  get textContent() {
    return super.textContent || "";
  }
  set textContent(value) {
    super.textContent = value;
    this[SHEET] = null;
  }
};
registerHTMLClass(tagName3, HTMLStyleElement);

// node_modules/linkedom/esm/html/time-element.js
var HTMLTimeElement = class extends HTMLElement {
  constructor(ownerDocument, localName = "time") {
    super(ownerDocument, localName);
  }
};

// node_modules/linkedom/esm/html/field-set-element.js
var HTMLFieldSetElement = class extends HTMLElement {
  constructor(ownerDocument, localName = "fieldset") {
    super(ownerDocument, localName);
  }
};

// node_modules/linkedom/esm/html/embed-element.js
var HTMLEmbedElement = class extends HTMLElement {
  constructor(ownerDocument, localName = "embed") {
    super(ownerDocument, localName);
  }
};

// node_modules/linkedom/esm/html/hr-element.js
var HTMLHRElement = class extends HTMLElement {
  constructor(ownerDocument, localName = "hr") {
    super(ownerDocument, localName);
  }
};

// node_modules/linkedom/esm/html/progress-element.js
var HTMLProgressElement = class extends HTMLElement {
  constructor(ownerDocument, localName = "progress") {
    super(ownerDocument, localName);
  }
};

// node_modules/linkedom/esm/html/paragraph-element.js
var HTMLParagraphElement = class extends HTMLElement {
  constructor(ownerDocument, localName = "p") {
    super(ownerDocument, localName);
  }
};

// node_modules/linkedom/esm/html/table-element.js
var HTMLTableElement = class extends HTMLElement {
  constructor(ownerDocument, localName = "table") {
    super(ownerDocument, localName);
  }
};

// node_modules/linkedom/esm/html/frame-set-element.js
var HTMLFrameSetElement = class extends HTMLElement {
  constructor(ownerDocument, localName = "frameset") {
    super(ownerDocument, localName);
  }
};

// node_modules/linkedom/esm/html/li-element.js
var HTMLLIElement = class extends HTMLElement {
  constructor(ownerDocument, localName = "li") {
    super(ownerDocument, localName);
  }
};

// node_modules/linkedom/esm/html/base-element.js
var HTMLBaseElement = class extends HTMLElement {
  constructor(ownerDocument, localName = "base") {
    super(ownerDocument, localName);
  }
};

// node_modules/linkedom/esm/html/data-list-element.js
var HTMLDataListElement = class extends HTMLElement {
  constructor(ownerDocument, localName = "datalist") {
    super(ownerDocument, localName);
  }
};

// node_modules/linkedom/esm/html/input-element.js
var tagName4 = "input";
var HTMLInputElement = class extends HTMLElement {
  constructor(ownerDocument, localName = tagName4) {
    super(ownerDocument, localName);
  }
  get autofocus() {
    return booleanAttribute.get(this, "autofocus") || -1;
  }
  set autofocus(value) {
    booleanAttribute.set(this, "autofocus", value);
  }
  get disabled() {
    return booleanAttribute.get(this, "disabled");
  }
  set disabled(value) {
    booleanAttribute.set(this, "disabled", value);
  }
  get name() {
    return this.getAttribute("name");
  }
  set name(value) {
    this.setAttribute("name", value);
  }
  get placeholder() {
    return this.getAttribute("placeholder");
  }
  set placeholder(value) {
    this.setAttribute("placeholder", value);
  }
  get type() {
    return this.getAttribute("type");
  }
  set type(value) {
    this.setAttribute("type", value);
  }
};
registerHTMLClass(tagName4, HTMLInputElement);

// node_modules/linkedom/esm/html/param-element.js
var HTMLParamElement = class extends HTMLElement {
  constructor(ownerDocument, localName = "param") {
    super(ownerDocument, localName);
  }
};

// node_modules/linkedom/esm/html/media-element.js
var HTMLMediaElement = class extends HTMLElement {
  constructor(ownerDocument, localName = "media") {
    super(ownerDocument, localName);
  }
};

// node_modules/linkedom/esm/html/audio-element.js
var HTMLAudioElement = class extends HTMLElement {
  constructor(ownerDocument, localName = "audio") {
    super(ownerDocument, localName);
  }
};

// node_modules/linkedom/esm/html/heading-element.js
var tagName5 = "h1";
var HTMLHeadingElement = class extends HTMLElement {
  constructor(ownerDocument, localName = tagName5) {
    super(ownerDocument, localName);
  }
};
registerHTMLClass([tagName5, "h2", "h3", "h4", "h5", "h6"], HTMLHeadingElement);

// node_modules/linkedom/esm/html/directory-element.js
var HTMLDirectoryElement = class extends HTMLElement {
  constructor(ownerDocument, localName = "dir") {
    super(ownerDocument, localName);
  }
};

// node_modules/linkedom/esm/html/quote-element.js
var HTMLQuoteElement = class extends HTMLElement {
  constructor(ownerDocument, localName = "quote") {
    super(ownerDocument, localName);
  }
};

// node_modules/linkedom/esm/html/canvas-element.js
var import_canvas = __toModule(require_canvas());
var { createCanvas } = import_canvas.default;
var tagName6 = "canvas";
var HTMLCanvasElement = class extends HTMLElement {
  constructor(ownerDocument, localName = tagName6) {
    super(ownerDocument, localName);
    this[IMAGE] = createCanvas(300, 150);
  }
  get width() {
    return this[IMAGE].width;
  }
  set width(value) {
    numericAttribute.set(this, "width", value);
    this[IMAGE].width = value;
  }
  get height() {
    return this[IMAGE].height;
  }
  set height(value) {
    numericAttribute.set(this, "height", value);
    this[IMAGE].height = value;
  }
  getContext(type) {
    return this[IMAGE].getContext(type);
  }
  toDataURL(...args) {
    return this[IMAGE].toDataURL(...args);
  }
};
registerHTMLClass(tagName6, HTMLCanvasElement);

// node_modules/linkedom/esm/html/legend-element.js
var HTMLLegendElement = class extends HTMLElement {
  constructor(ownerDocument, localName = "legend") {
    super(ownerDocument, localName);
  }
};

// node_modules/linkedom/esm/html/option-element.js
var HTMLOptionElement = class extends HTMLElement {
  constructor(ownerDocument, localName = "option") {
    super(ownerDocument, localName);
  }
};

// node_modules/linkedom/esm/html/span-element.js
var HTMLSpanElement = class extends HTMLElement {
  constructor(ownerDocument, localName = "span") {
    super(ownerDocument, localName);
  }
};

// node_modules/linkedom/esm/html/meter-element.js
var HTMLMeterElement = class extends HTMLElement {
  constructor(ownerDocument, localName = "meter") {
    super(ownerDocument, localName);
  }
};

// node_modules/linkedom/esm/html/video-element.js
var HTMLVideoElement = class extends HTMLElement {
  constructor(ownerDocument, localName = "video") {
    super(ownerDocument, localName);
  }
};

// node_modules/linkedom/esm/html/table-cell-element.js
var HTMLTableCellElement = class extends HTMLElement {
  constructor(ownerDocument, localName = "td") {
    super(ownerDocument, localName);
  }
};

// node_modules/linkedom/esm/html/title-element.js
var tagName7 = "title";
var HTMLTitleElement = class extends TextElement {
  constructor(ownerDocument, localName = tagName7) {
    super(ownerDocument, localName);
  }
};
registerHTMLClass(tagName7, HTMLTitleElement);

// node_modules/linkedom/esm/html/output-element.js
var HTMLOutputElement = class extends HTMLElement {
  constructor(ownerDocument, localName = "output") {
    super(ownerDocument, localName);
  }
};

// node_modules/linkedom/esm/html/table-row-element.js
var HTMLTableRowElement = class extends HTMLElement {
  constructor(ownerDocument, localName = "tr") {
    super(ownerDocument, localName);
  }
};

// node_modules/linkedom/esm/html/data-element.js
var HTMLDataElement = class extends HTMLElement {
  constructor(ownerDocument, localName = "data") {
    super(ownerDocument, localName);
  }
};

// node_modules/linkedom/esm/html/menu-element.js
var HTMLMenuElement = class extends HTMLElement {
  constructor(ownerDocument, localName = "menu") {
    super(ownerDocument, localName);
  }
};

// node_modules/linkedom/esm/html/select-element.js
var tagName8 = "select";
var HTMLSelectElement = class extends HTMLElement {
  constructor(ownerDocument, localName = tagName8) {
    super(ownerDocument, localName);
  }
  get options() {
    let children = new NodeList();
    let { firstElementChild } = this;
    while (firstElementChild) {
      if (firstElementChild.tagName === "OPTGROUP")
        children.push(...firstElementChild.children);
      else
        children.push(firstElementChild);
      firstElementChild = firstElementChild.nextElementSibling;
    }
    return children;
  }
  get disabled() {
    return booleanAttribute.get(this, "disabled");
  }
  set disabled(value) {
    booleanAttribute.set(this, "disabled", value);
  }
  get name() {
    return this.getAttribute("name");
  }
  set name(value) {
    this.setAttribute("name", value);
  }
};
registerHTMLClass(tagName8, HTMLSelectElement);

// node_modules/linkedom/esm/html/br-element.js
var HTMLBRElement = class extends HTMLElement {
  constructor(ownerDocument, localName = "br") {
    super(ownerDocument, localName);
  }
};

// node_modules/linkedom/esm/html/button-element.js
var tagName9 = "button";
var HTMLButtonElement = class extends HTMLElement {
  constructor(ownerDocument, localName = tagName9) {
    super(ownerDocument, localName);
  }
  get disabled() {
    return booleanAttribute.get(this, "disabled");
  }
  set disabled(value) {
    booleanAttribute.set(this, "disabled", value);
  }
  get name() {
    return this.getAttribute("name");
  }
  set name(value) {
    this.setAttribute("name", value);
  }
  get type() {
    return this.getAttribute("type");
  }
  set type(value) {
    this.setAttribute("type", value);
  }
};
registerHTMLClass(tagName9, HTMLButtonElement);

// node_modules/linkedom/esm/html/map-element.js
var HTMLMapElement = class extends HTMLElement {
  constructor(ownerDocument, localName = "map") {
    super(ownerDocument, localName);
  }
};

// node_modules/linkedom/esm/html/opt-group-element.js
var HTMLOptGroupElement = class extends HTMLElement {
  constructor(ownerDocument, localName = "optgroup") {
    super(ownerDocument, localName);
  }
};

// node_modules/linkedom/esm/html/d-list-element.js
var HTMLDListElement = class extends HTMLElement {
  constructor(ownerDocument, localName = "dl") {
    super(ownerDocument, localName);
  }
};

// node_modules/linkedom/esm/html/text-area-element.js
var tagName10 = "textarea";
var HTMLTextAreaElement = class extends TextElement {
  constructor(ownerDocument, localName = tagName10) {
    super(ownerDocument, localName);
  }
  get disabled() {
    return booleanAttribute.get(this, "disabled");
  }
  set disabled(value) {
    booleanAttribute.set(this, "disabled", value);
  }
  get name() {
    return this.getAttribute("name");
  }
  set name(value) {
    this.setAttribute("name", value);
  }
  get placeholder() {
    return this.getAttribute("placeholder");
  }
  set placeholder(value) {
    this.setAttribute("placeholder", value);
  }
  get type() {
    return this.getAttribute("type");
  }
  set type(value) {
    this.setAttribute("type", value);
  }
  get value() {
    return this.textContent;
  }
  set value(content) {
    this.textContent = content;
  }
};
registerHTMLClass(tagName10, HTMLTextAreaElement);

// node_modules/linkedom/esm/html/font-element.js
var HTMLFontElement = class extends HTMLElement {
  constructor(ownerDocument, localName = "font") {
    super(ownerDocument, localName);
  }
};

// node_modules/linkedom/esm/html/div-element.js
var HTMLDivElement = class extends HTMLElement {
  constructor(ownerDocument, localName = "div") {
    super(ownerDocument, localName);
  }
};

// node_modules/linkedom/esm/html/link-element.js
var tagName11 = "link";
var HTMLLinkElement = class extends HTMLElement {
  constructor(ownerDocument, localName = tagName11) {
    super(ownerDocument, localName);
  }
  get disabled() {
    return booleanAttribute.get(this, "disabled");
  }
  set disabled(value) {
    booleanAttribute.set(this, "disabled", value);
  }
  get href() {
    return stringAttribute.get(this, "href");
  }
  set href(value) {
    stringAttribute.set(this, "href", value);
  }
  get hreflang() {
    return stringAttribute.get(this, "hreflang");
  }
  set hreflang(value) {
    stringAttribute.set(this, "hreflang", value);
  }
  get media() {
    return stringAttribute.get(this, "media");
  }
  set media(value) {
    stringAttribute.set(this, "media", value);
  }
  get rel() {
    return stringAttribute.get(this, "rel");
  }
  set rel(value) {
    stringAttribute.set(this, "rel", value);
  }
  get type() {
    return stringAttribute.get(this, "type");
  }
  set type(value) {
    stringAttribute.set(this, "type", value);
  }
};
registerHTMLClass(tagName11, HTMLLinkElement);

// node_modules/linkedom/esm/html/slot-element.js
var HTMLSlotElement = class extends HTMLElement {
  constructor(ownerDocument, localName = "slot") {
    super(ownerDocument, localName);
  }
};

// node_modules/linkedom/esm/html/form-element.js
var HTMLFormElement = class extends HTMLElement {
  constructor(ownerDocument, localName = "form") {
    super(ownerDocument, localName);
  }
};

// node_modules/linkedom/esm/html/image-element.js
var tagName12 = "img";
var HTMLImageElement = class extends HTMLElement {
  constructor(ownerDocument, localName = tagName12) {
    super(ownerDocument, localName);
  }
  get alt() {
    return stringAttribute.get(this, "alt");
  }
  set alt(value) {
    stringAttribute.set(this, "alt", value);
  }
  get sizes() {
    return stringAttribute.get(this, "sizes");
  }
  set sizes(value) {
    stringAttribute.set(this, "sizes", value);
  }
  get src() {
    return stringAttribute.get(this, "src");
  }
  set src(value) {
    stringAttribute.set(this, "src", value);
  }
  get srcset() {
    return stringAttribute.get(this, "srcset");
  }
  set srcset(value) {
    stringAttribute.set(this, "srcset", value);
  }
  get title() {
    return stringAttribute.get(this, "title");
  }
  set title(value) {
    stringAttribute.set(this, "title", value);
  }
  get width() {
    return numericAttribute.get(this, "width");
  }
  set width(value) {
    numericAttribute.set(this, "width", value);
  }
  get height() {
    return numericAttribute.get(this, "height");
  }
  set height(value) {
    numericAttribute.set(this, "height", value);
  }
};
registerHTMLClass(tagName12, HTMLImageElement);

// node_modules/linkedom/esm/html/pre-element.js
var HTMLPreElement = class extends HTMLElement {
  constructor(ownerDocument, localName = "pre") {
    super(ownerDocument, localName);
  }
};

// node_modules/linkedom/esm/html/u-list-element.js
var HTMLUListElement = class extends HTMLElement {
  constructor(ownerDocument, localName = "ul") {
    super(ownerDocument, localName);
  }
};

// node_modules/linkedom/esm/html/meta-element.js
var HTMLMetaElement = class extends HTMLElement {
  constructor(ownerDocument, localName = "meta") {
    super(ownerDocument, localName);
  }
};

// node_modules/linkedom/esm/html/picture-element.js
var HTMLPictureElement = class extends HTMLElement {
  constructor(ownerDocument, localName = "picture") {
    super(ownerDocument, localName);
  }
};

// node_modules/linkedom/esm/html/area-element.js
var HTMLAreaElement = class extends HTMLElement {
  constructor(ownerDocument, localName = "area") {
    super(ownerDocument, localName);
  }
};

// node_modules/linkedom/esm/html/o-list-element.js
var HTMLOListElement = class extends HTMLElement {
  constructor(ownerDocument, localName = "ol") {
    super(ownerDocument, localName);
  }
};

// node_modules/linkedom/esm/html/table-caption-element.js
var HTMLTableCaptionElement = class extends HTMLElement {
  constructor(ownerDocument, localName = "caption") {
    super(ownerDocument, localName);
  }
};

// node_modules/linkedom/esm/html/anchor-element.js
var tagName13 = "a";
var HTMLAnchorElement = class extends HTMLElement {
  constructor(ownerDocument, localName = tagName13) {
    super(ownerDocument, localName);
  }
  get href() {
    return encodeURI(stringAttribute.get(this, "href"));
  }
  set href(value) {
    stringAttribute.set(this, "href", decodeURI(value));
  }
  get download() {
    return encodeURI(stringAttribute.get(this, "download"));
  }
  set download(value) {
    stringAttribute.set(this, "download", decodeURI(value));
  }
  get target() {
    return stringAttribute.get(this, "target");
  }
  set target(value) {
    stringAttribute.set(this, "target", value);
  }
  get type() {
    return stringAttribute.get(this, "type");
  }
  set type(value) {
    stringAttribute.set(this, "type", value);
  }
};
registerHTMLClass(tagName13, HTMLAnchorElement);

// node_modules/linkedom/esm/html/label-element.js
var HTMLLabelElement = class extends HTMLElement {
  constructor(ownerDocument, localName = "label") {
    super(ownerDocument, localName);
  }
};

// node_modules/linkedom/esm/html/unknown-element.js
var HTMLUnknownElement = class extends HTMLElement {
  constructor(ownerDocument, localName = "unknown") {
    super(ownerDocument, localName);
  }
};

// node_modules/linkedom/esm/html/mod-element.js
var HTMLModElement = class extends HTMLElement {
  constructor(ownerDocument, localName = "mod") {
    super(ownerDocument, localName);
  }
};

// node_modules/linkedom/esm/html/details-element.js
var HTMLDetailsElement = class extends HTMLElement {
  constructor(ownerDocument, localName = "details") {
    super(ownerDocument, localName);
  }
};

// node_modules/linkedom/esm/html/source-element.js
var tagName14 = "source";
var HTMLSourceElement = class extends HTMLElement {
  constructor(ownerDocument, localName = tagName14) {
    super(ownerDocument, localName);
  }
  get src() {
    return stringAttribute.get(this, "src");
  }
  set src(value) {
    stringAttribute.set(this, "src", value);
  }
  get srcset() {
    return stringAttribute.get(this, "srcset");
  }
  set srcset(value) {
    stringAttribute.set(this, "srcset", value);
  }
  get sizes() {
    return stringAttribute.get(this, "sizes");
  }
  set sizes(value) {
    stringAttribute.set(this, "sizes", value);
  }
  get type() {
    return stringAttribute.get(this, "type");
  }
  set type(value) {
    stringAttribute.set(this, "type", value);
  }
};
registerHTMLClass(tagName14, HTMLSourceElement);

// node_modules/linkedom/esm/html/track-element.js
var HTMLTrackElement = class extends HTMLElement {
  constructor(ownerDocument, localName = "track") {
    super(ownerDocument, localName);
  }
};

// node_modules/linkedom/esm/html/marquee-element.js
var HTMLMarqueeElement = class extends HTMLElement {
  constructor(ownerDocument, localName = "marquee") {
    super(ownerDocument, localName);
  }
};

// node_modules/linkedom/esm/shared/html-classes.js
var HTMLClasses = {
  HTMLElement,
  HTMLTemplateElement,
  HTMLHtmlElement,
  HTMLScriptElement,
  HTMLFrameElement,
  HTMLIFrameElement,
  HTMLObjectElement,
  HTMLHeadElement,
  HTMLBodyElement,
  HTMLStyleElement,
  HTMLTimeElement,
  HTMLFieldSetElement,
  HTMLEmbedElement,
  HTMLHRElement,
  HTMLProgressElement,
  HTMLParagraphElement,
  HTMLTableElement,
  HTMLFrameSetElement,
  HTMLLIElement,
  HTMLBaseElement,
  HTMLDataListElement,
  HTMLInputElement,
  HTMLParamElement,
  HTMLMediaElement,
  HTMLAudioElement,
  HTMLHeadingElement,
  HTMLDirectoryElement,
  HTMLQuoteElement,
  HTMLCanvasElement,
  HTMLLegendElement,
  HTMLOptionElement,
  HTMLSpanElement,
  HTMLMeterElement,
  HTMLVideoElement,
  HTMLTableCellElement,
  HTMLTitleElement,
  HTMLOutputElement,
  HTMLTableRowElement,
  HTMLDataElement,
  HTMLMenuElement,
  HTMLSelectElement,
  HTMLBRElement,
  HTMLButtonElement,
  HTMLMapElement,
  HTMLOptGroupElement,
  HTMLDListElement,
  HTMLTextAreaElement,
  HTMLFontElement,
  HTMLDivElement,
  HTMLLinkElement,
  HTMLSlotElement,
  HTMLFormElement,
  HTMLImageElement,
  HTMLPreElement,
  HTMLUListElement,
  HTMLMetaElement,
  HTMLPictureElement,
  HTMLAreaElement,
  HTMLOListElement,
  HTMLTableCaptionElement,
  HTMLAnchorElement,
  HTMLLabelElement,
  HTMLUnknownElement,
  HTMLModElement,
  HTMLDetailsElement,
  HTMLSourceElement,
  HTMLTrackElement,
  HTMLMarqueeElement
};

// node_modules/linkedom/esm/shared/mime.js
var voidElements = { test: () => true };
var Mime = {
  "text/html": {
    docType: "<!DOCTYPE html>",
    ignoreCase: true,
    voidElements: /^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i
  },
  "image/svg+xml": {
    docType: '<?xml version="1.0" encoding="utf-8"?>',
    ignoreCase: false,
    voidElements
  },
  "text/xml": {
    docType: '<?xml version="1.0" encoding="utf-8"?>',
    ignoreCase: false,
    voidElements
  },
  "application/xml": {
    docType: '<?xml version="1.0" encoding="utf-8"?>',
    ignoreCase: false,
    voidElements
  },
  "application/xhtml+xml": {
    docType: '<?xml version="1.0" encoding="utf-8"?>',
    ignoreCase: false,
    voidElements
  }
};

// node_modules/linkedom/esm/interface/custom-event.js
var GlobalCustomEvent = typeof CustomEvent === "function" ? CustomEvent : class CustomEvent2 extends DOMEvent {
  constructor(type, eventInitDict = {}) {
    super(type, eventInitDict);
    this.detail = eventInitDict.detail;
  }
};

// node_modules/linkedom/esm/interface/input-event.js
var InputEvent = class extends DOMEvent {
  constructor(type, inputEventInit = {}) {
    super(type, inputEventInit);
    this.inputType = inputEventInit.inputType;
    this.data = inputEventInit.data;
    this.dataTransfer = inputEventInit.dataTransfer;
    this.isComposing = inputEventInit.isComposing || false;
    this.ranges = inputEventInit.ranges;
  }
};

// node_modules/linkedom/esm/interface/image.js
var ImageClass = (ownerDocument) => class Image extends HTMLImageElement {
  constructor(width, height) {
    super(ownerDocument);
    switch (arguments.length) {
      case 1:
        this.height = width;
        this.width = width;
        break;
      case 2:
        this.height = height;
        this.width = width;
        break;
    }
  }
};

// node_modules/linkedom/esm/interface/range.js
var deleteContents = ({ [START]: start, [END]: end }, fragment = null) => {
  setAdjacent(start[PREV], end[NEXT]);
  do {
    const after2 = getEnd(start);
    const next = after2 === end ? after2 : after2[NEXT];
    if (fragment)
      fragment.insertBefore(start, fragment[END]);
    else
      start.remove();
    start = next;
  } while (start !== end);
};
var Range = class {
  constructor() {
    this[START] = null;
    this[END] = null;
    this.commonAncestorContainer = null;
  }
  insertNode(newNode) {
    this[END].parentNode.insertBefore(newNode, this[START]);
  }
  selectNode(node) {
    this[START] = node;
    this[END] = getEnd(node);
  }
  surroundContents(parentNode) {
    parentNode.replaceChildren(this.extractContents());
  }
  setStartBefore(node) {
    this[START] = node;
  }
  setStartAfter(node) {
    this[START] = node.nextSibling;
  }
  setEndBefore(node) {
    this[END] = getEnd(node.previousSibling);
  }
  setEndAfter(node) {
    this[END] = getEnd(node);
  }
  cloneContents() {
    let { [START]: start, [END]: end } = this;
    const fragment = start.ownerDocument.createDocumentFragment();
    while (start !== end) {
      fragment.insertBefore(start.cloneNode(true), fragment[END]);
      start = getEnd(start);
      if (start !== end)
        start = start[NEXT];
    }
    return fragment;
  }
  deleteContents() {
    deleteContents(this);
  }
  extractContents() {
    const fragment = this[START].ownerDocument.createDocumentFragment();
    deleteContents(this, fragment);
    return fragment;
  }
  createContextualFragment(html) {
    const template = this.commonAncestorContainer.createElement("template");
    template.innerHTML = html;
    this.selectNode(template.content);
    return template.content;
  }
  cloneRange() {
    const range = new Range();
    range[START] = this[START];
    range[END] = this[END];
    return range;
  }
};

// node_modules/linkedom/esm/interface/tree-walker.js
var isOK = ({ nodeType }, mask) => {
  switch (nodeType) {
    case ELEMENT_NODE:
      return mask & SHOW_ELEMENT;
    case TEXT_NODE:
      return mask & SHOW_TEXT;
    case COMMENT_NODE:
      return mask & SHOW_COMMENT;
  }
  return 0;
};
var TreeWalker = class {
  constructor(root, whatToShow = SHOW_ALL) {
    this.root = root;
    this.currentNode = root;
    this.whatToShow = whatToShow;
    let { [NEXT]: next, [END]: end } = root;
    if (root.nodeType === DOCUMENT_NODE) {
      const { documentElement } = root;
      next = documentElement;
      end = documentElement[END];
    }
    const nodes = [];
    while (next !== end) {
      if (isOK(next, whatToShow))
        nodes.push(next);
      next = next[NEXT];
    }
    this[PRIVATE] = { i: 0, nodes };
  }
  nextNode() {
    const $ = this[PRIVATE];
    this.currentNode = $.i < $.nodes.length ? $.nodes[$.i++] : null;
    return this.currentNode;
  }
};

// node_modules/linkedom/esm/interface/document.js
var query = (method, ownerDocument, selectors) => {
  let { [NEXT]: next, [END]: end } = ownerDocument;
  return method.call({ ownerDocument, [NEXT]: next, [END]: end }, selectors);
};
var globalExports = assign({}, Facades, HTMLClasses, {
  CustomEvent: GlobalCustomEvent,
  Event: DOMEvent,
  EventTarget: DOMEventTarget,
  InputEvent,
  NamedNodeMap,
  NodeList
});
var window = new WeakMap();
var Document = class extends NonElementParentNode {
  constructor(type) {
    super(null, "#document", DOCUMENT_NODE);
    this[CUSTOM_ELEMENTS] = { active: false, registry: null };
    this[MUTATION_OBSERVER] = { active: false, class: null };
    this[MIME] = Mime[type];
    this[DOCTYPE] = null;
    this[DOM_PARSER] = null;
    this[IMAGE] = null;
  }
  get defaultView() {
    if (!window.has(this))
      window.set(this, new Proxy(globalThis, {
        set: (target, name, value) => {
          switch (name) {
            case "addEventListener":
            case "removeEventListener":
            case "dispatchEvent":
              this[EVENT_TARGET][name] = value;
              break;
            default:
              target[name] = value;
              break;
          }
          return true;
        },
        get: (globalThis2, name) => {
          switch (name) {
            case "addEventListener":
            case "removeEventListener":
            case "dispatchEvent":
              if (!this[EVENT_TARGET]) {
                const et = this[EVENT_TARGET] = new DOMEventTarget();
                et.dispatchEvent = et.dispatchEvent.bind(et);
                et.addEventListener = et.addEventListener.bind(et);
                et.removeEventListener = et.removeEventListener.bind(et);
              }
              return this[EVENT_TARGET][name];
            case "document":
              return this;
            case "navigator":
              return {
                userAgent: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36"
              };
            case "window":
              return window.get(this);
            case "customElements":
              if (!this[CUSTOM_ELEMENTS].registry)
                this[CUSTOM_ELEMENTS] = new CustomElementRegistry(this);
              return this[CUSTOM_ELEMENTS];
            case "performance":
              return import_perf_hooks.performance;
            case "DOMParser":
              return this[DOM_PARSER];
            case "Image":
              if (!this[IMAGE])
                this[IMAGE] = ImageClass(this);
              return this[IMAGE];
            case "MutationObserver":
              if (!this[MUTATION_OBSERVER].class)
                this[MUTATION_OBSERVER] = new MutationObserverClass(this);
              return this[MUTATION_OBSERVER].class;
          }
          return globalExports[name] || globalThis2[name];
        }
      }));
    return window.get(this);
  }
  get doctype() {
    const docType = this[DOCTYPE];
    if (docType)
      return docType;
    const { firstChild } = this;
    if (firstChild && firstChild.nodeType === DOCUMENT_TYPE_NODE)
      return this[DOCTYPE] = firstChild;
    return null;
  }
  set doctype(value) {
    if (/^([a-z:]+)(\s+system|\s+public(\s+"([^"]+)")?)?(\s+"([^"]+)")?/i.test(value)) {
      const { $1: name, $4: publicId, $6: systemId } = RegExp;
      this[DOCTYPE] = new DocumentType(this, name, publicId, systemId);
      knownSiblings(this, this[DOCTYPE], this[NEXT]);
    }
  }
  get documentElement() {
    return this.firstElementChild;
  }
  get isConnected() {
    return true;
  }
  createAttribute(name) {
    return new Attr(this, name);
  }
  createComment(textContent) {
    return new Comment(this, textContent);
  }
  createDocumentFragment() {
    return new DocumentFragment(this);
  }
  createDocumentType(name, publicId, systemId) {
    return new DocumentType(this, name, publicId, systemId);
  }
  createElement(localName) {
    return new Element(this, localName);
  }
  createRange() {
    const range = new Range();
    range.commonAncestorContainer = this;
    return range;
  }
  createTextNode(textContent) {
    return new Text(this, textContent);
  }
  createTreeWalker(root, whatToShow = -1) {
    return new TreeWalker(root, whatToShow);
  }
  createNodeIterator(root, whatToShow = -1) {
    return this.createTreeWalker(root, whatToShow);
  }
  createEvent(name) {
    const event = create(name === "Event" ? new DOMEvent("") : new GlobalCustomEvent(""));
    event.initEvent = event.initCustomEvent = (type, canBubble = false, cancelable = false, detail) => {
      defineProperties(event, {
        type: { value: type },
        canBubble: { value: canBubble },
        cancelable: { value: cancelable },
        detail: { value: detail }
      });
    };
    return event;
  }
  cloneNode(deep = false) {
    const {
      constructor,
      [CUSTOM_ELEMENTS]: customElements2,
      [DOCTYPE]: doctype
    } = this;
    const document = new constructor();
    document[CUSTOM_ELEMENTS] = customElements2;
    if (deep) {
      const end = document[END];
      const { childNodes } = this;
      for (let { length } = childNodes, i = 0; i < length; i++)
        document.insertBefore(childNodes[i].cloneNode(true), end);
      if (doctype)
        document[DOCTYPE] = childNodes[0];
    }
    return document;
  }
  importNode(externalNode) {
    const deep = 1 < arguments.length && !!arguments[1];
    const node = externalNode.cloneNode(deep);
    const { [CUSTOM_ELEMENTS]: customElements2 } = this;
    const { active } = customElements2;
    const upgrade = (element) => {
      const { ownerDocument, nodeType } = element;
      element.ownerDocument = this;
      if (active && ownerDocument !== this && nodeType === ELEMENT_NODE)
        customElements2.upgrade(element);
    };
    upgrade(node);
    if (deep) {
      switch (node.nodeType) {
        case ELEMENT_NODE:
        case DOCUMENT_FRAGMENT_NODE: {
          let { [NEXT]: next, [END]: end } = node;
          while (next !== end) {
            if (next.nodeType === ELEMENT_NODE)
              upgrade(next);
            next = next[NEXT];
          }
          break;
        }
      }
    }
    return node;
  }
  toString() {
    return this.childNodes.join("");
  }
  querySelector(selectors) {
    return query(super.querySelector, this, selectors);
  }
  querySelectorAll(selectors) {
    return query(super.querySelectorAll, this, selectors);
  }
  getElementsByTagNameNS(_, name) {
    return this.getElementsByTagName(name);
  }
  createAttributeNS(_, name) {
    return this.createAttribute(name);
  }
  createElementNS(nsp, localName, options) {
    return nsp === SVG_NAMESPACE ? new SVGElement(this, localName, null) : this.createElement(localName, options);
  }
};
setPrototypeOf(globalExports.Document = function Document2() {
  illegalConstructor();
}, Document).prototype = Document.prototype;

// node_modules/linkedom/esm/html/document.js
var createHTMLElement = (ownerDocument, builtin, localName, options) => {
  if (!builtin && htmlClasses.has(localName)) {
    const Class = htmlClasses.get(localName);
    return new Class(ownerDocument, localName);
  }
  const { [CUSTOM_ELEMENTS]: { active, registry } } = ownerDocument;
  if (active) {
    const ce = builtin ? options.is : localName;
    if (registry.has(ce)) {
      const { Class } = registry.get(ce);
      const element = new Class(ownerDocument, localName);
      customElements.set(element, { connected: false });
      return element;
    }
  }
  return new HTMLElement(ownerDocument, localName);
};
var HTMLDocument = class extends Document {
  constructor() {
    super("text/html");
  }
  get all() {
    const nodeList = new NodeList();
    let { [NEXT]: next, [END]: end } = this;
    while (next !== end) {
      switch (next.nodeType) {
        case ELEMENT_NODE:
          nodeList.push(next);
          break;
      }
      next = next[NEXT];
    }
    return nodeList;
  }
  get head() {
    const { documentElement } = this;
    let { firstElementChild } = documentElement;
    if (!firstElementChild) {
      firstElementChild = this.createElement("head");
      documentElement.prepend(firstElementChild);
    }
    return firstElementChild;
  }
  get body() {
    const { head } = this;
    let { nextElementSibling: nextElementSibling2 } = head;
    if (!nextElementSibling2) {
      nextElementSibling2 = this.createElement("body");
      head.after(nextElementSibling2);
    }
    return nextElementSibling2;
  }
  get title() {
    const { head } = this;
    let title = head.getElementsByTagName("title").shift();
    return title ? title.textContent : "";
  }
  set title(textContent) {
    const { head } = this;
    let title = head.getElementsByTagName("title").shift();
    if (title)
      title.textContent = textContent;
    else {
      head.insertBefore(this.createElement("title"), head.firstChild).textContent = textContent;
    }
  }
  createElement(localName, options) {
    const builtin = !!(options && options.is);
    const element = createHTMLElement(this, builtin, localName, options);
    if (builtin)
      element.setAttribute("is", options.is);
    return element;
  }
};

// node_modules/linkedom/esm/svg/document.js
var SVGDocument = class extends Document {
  constructor() {
    super("image/svg+xml");
  }
  toString() {
    return this[MIME].docType + super.toString();
  }
};

// node_modules/linkedom/esm/xml/document.js
var XMLDocument = class extends Document {
  constructor() {
    super("text/xml");
  }
  toString() {
    return this[MIME].docType + super.toString();
  }
};

// node_modules/linkedom/esm/dom/parser.js
var DOMParser = class {
  parseFromString(markupLanguage, mimeType) {
    let isHTML = false, document;
    if (mimeType === "text/html") {
      isHTML = true;
      document = new HTMLDocument();
    } else if (mimeType === "image/svg+xml")
      document = new SVGDocument();
    else
      document = new XMLDocument();
    document[DOM_PARSER] = DOMParser;
    return markupLanguage ? parseFromString(document, isHTML, markupLanguage) : document;
  }
};

// node_modules/linkedom/esm/index.js
var parseHTML = (html) => new DOMParser().parseFromString(html, "text/html").defaultView;
function Document3() {
  illegalConstructor();
}
setPrototypeOf(Document3, Document).prototype = Document.prototype;

// netlify/functions/linkCheck.ts
var psl = __toModule(require_psl());
function parseLinkTag(atag) {
  const { document } = parseHTML(atag);
  const htmlDocument = document;
  const htmlEl = htmlDocument.getElementsByTagName("a")[0];
  return htmlEl;
}
function extractLinkData(atag) {
  const htmlEl = parseLinkTag(atag.trim());
  const displayText = htmlEl.textContent.trim().replace(/ /g, "");
  let href = "";
  try {
    href = htmlEl.getAttribute("href");
  } catch {
    if (!href) {
      console.error("a tag has no href attribute");
      href = null;
      throw new Error("formatError");
    }
  }
  return { displayText, url: href };
}
function extractDomainName(url) {
  let urlParsed;
  try {
    urlParsed = new URL(url);
  } catch (err) {
    console.info("string can't be parsed to url", err);
    throw new Error("string can't be parsed to url: " + err);
  }
  const hostname = urlParsed.hostname;
  const parsedUrl = psl.parse(hostname);
  const domain = parsedUrl.domain;
  if (!domain) {
    console.error("domain can't be parsed");
    throw new Error("domain can't be parsed");
  }
  return domain;
}
function isURLlike(string) {
  let state = false;
  const looseURLCheck = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  const looseURLRegex = new RegExp(looseURLCheck);
  string = string.trim().replace(" ", "");
  if (string.match(looseURLRegex)) {
    state = true;
  } else {
    state = false;
  }
  return state;
}
function normalizeDisplayTextURL(displayTextURL) {
  const regexUrlProtocol = /^(?<proto>\w+):/g;
  const found = displayTextURL.match(regexUrlProtocol);
  if (!found) {
    displayTextURL = "http://" + displayTextURL;
  }
  return displayTextURL;
}
function getDomainNamefromDisplayedLink(displayText) {
  if (isURLlike(displayText) === false) {
    return null;
  }
  try {
    const normalizedDisplayTextURL = normalizeDisplayTextURL(displayText);
    let displayTextURL = extractDomainName(normalizedDisplayTextURL);
    return displayTextURL;
  } catch (err) {
    console.info("couldn't parse displayText into valid url", err);
    return null;
  }
}
function isFakeLink(linkData) {
  if (!linkData.url) {
    console.error("no url present to check");
    throw new Error("no url provided");
  }
  const urlExtracted = linkData.url;
  const linkURLdomainName = extractDomainName(urlExtracted);
  const displayText = linkData.displayText;
  const displayTextURL = getDomainNamefromDisplayedLink(displayText);
  if (!displayTextURL) {
    console.info("displayTextURL doesn't contain a link");
    return false;
  }
  console.log({ linkURLdomainName });
  console.log({ displayTextURL });
  if (displayTextURL == linkURLdomainName) {
    return false;
  }
  if (displayTextURL != linkURLdomainName) {
    return true;
  }
}

// netlify/functions/linkCheckAPI.ts
var handler4 = async (event, context) => {
  const aTagFromRequest = JSON.parse(event.body).aTag;
  const linkDataOfTag = extractLinkData(aTagFromRequest);
  try {
    const linkIsFake = isFakeLink(linkDataOfTag);
    console.log({ linkIsFake });
    return {
      statusCode: 200,
      body: JSON.stringify({ linkIsFake })
    };
  } catch (error) {
    console.log("error", error);
    return {
      statusCode: 200,
      body: JSON.stringify({ error: "formatingError" })
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
/*! (c) Andrea Giammarchi - ISC */
//# sourceMappingURL=linkCheckAPI.js.map
