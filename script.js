// LICENSE (MIT) Copyright 2019 David Bau
// Seeded random number generator for JavaScript.
// Version 3.0.5
// Author: David Bau
// Date: 2019-09-14
!function (f, a, c) { var s, l = 256, p = "random", d = c.pow(l, 6), g = c.pow(2, 52), y = 2 * g, h = l - 1; function n(n, t, r) { function e() { for (var n = u.g(6), t = d, r = 0; n < g;)n = (n + r) * l, t *= l, r = u.g(1); for (; y <= n;)n /= 2, t /= 2, r >>>= 1; return (n + r) / t } var o = [], i = j(function n(t, r) { var e, o = [], i = typeof t; if (r && "object" == i) for (e in t) try { o.push(n(t[e], r - 1)) } catch (n) { } return o.length ? o : "string" == i ? t : t + "\0" }((t = 1 == t ? { entropy: !0 } : t || {}).entropy ? [n, S(a)] : null == n ? function () { try { var n; return s && (n = s.randomBytes) ? n = n(l) : (n = new Uint8Array(l), (f.crypto || f.msCrypto).getRandomValues(n)), S(n) } catch (n) { var t = f.navigator, r = t && t.plugins; return [+new Date, f, r, f.screen, S(a)] } }() : n, 3), o), u = new m(o); return e.int32 = function () { return 0 | u.g(4) }, e.quick = function () { return u.g(4) / 4294967296 }, e.double = e, j(S(u.S), a), (t.pass || r || function (n, t, r, e) { return e && (e.S && v(e, u), n.state = function () { return v(u, {}) }), r ? (c[p] = n, t) : n })(e, i, "global" in t ? t.global : this == c, t.state) } function m(n) { var t, r = n.length, u = this, e = 0, o = u.i = u.j = 0, i = u.S = []; for (r || (n = [r++]); e < l;)i[e] = e++; for (e = 0; e < l; e++)i[e] = i[o = h & o + n[e % r] + (t = i[e])], i[o] = t; (u.g = function (n) { for (var t, r = 0, e = u.i, o = u.j, i = u.S; n--;)t = i[e = h & e + 1], r = r * l + i[h & (i[e] = i[o = h & o + t]) + (i[o] = t)]; return u.i = e, u.j = o, r })(l) } function v(n, t) { return t.i = n.i, t.j = n.j, t.S = n.S.slice(), t } function j(n, t) { for (var r, e = n + "", o = 0; o < e.length;)t[h & o] = h & (r ^= 19 * t[h & o]) + e.charCodeAt(o++); return S(t) } function S(n) { return String.fromCharCode.apply(0, n) } if (j(c.random(), a), "object" == typeof module && module.exports) { module.exports = n; try { s = require("crypto") } catch (n) { } } else "function" == typeof define && define.amd ? define(function () { return n }) : c["seed" + p] = n }("undefined" != typeof self ? self : this, [], Math);

var words3 = ["ACE", "ACT", "ADD", "ADO", "AGE", "AGO", "AID", "AIL", "AIM", "AIR", "ALE", "ALL", "AND", "ANT", "ANY", "APE", "APT", "ARC", "ARE", "ARM", "ART", "ASH", "ASK", "ATE", "AWE", "AXE", "AYE", "BAD", "BAG", "BAN", "BAR", "BAT", "BAY", "BED", "BEE", "BEG", "BET", "BID", "BIG", "BIN", "BIT", "BOG", "BOO", "BOW", "BOX", "BOY", "BRA", "BUD", "BUG", "BUM", "BUN", "BUS", "BUT", "BUY", "BYE", "CAB", "CAN", "CAP", "CAR", "CAT", "COD", "CON", "COP", "COW", "CRY", "CUB", "CUE", "CUP", "CUT", "DAB", "DAD", "DAM", "DAY", "DEN", "DID", "DIE", "DIG", "DIM", "DIP", "DOG", "DON", "DOT", "DRY", "DUB", "DUE", "DUG", "DYE", "EAR", "EAT", "EGG", "EGO", "ELF", "ELM", "END", "ERA", "EVE", "EYE", "FAN", "FAR", "FAT", "FAX", "FED", "FEE", "FEW", "FIG", "FIN", "FIR", "FIT", "FIX", "FLU", "FLY", "FOG", "FOR", "FOX", "FRY", "FUN", "FUR", "GAG", "GAP", "GAS", "GEL", "GEM", "GET", "GIG", "GIN", "GOD", "GOO", "GOT", "GUM", "GUN", "GUT", "GUY", "GYM", "HAD", "HAG", "HAM", "HAS", "HAT", "HAY", "HEM", "HEN", "HER", "HEY", "HIM", "HIP", "HIS", "HIT", "HOG", "HOP", "HOT", "HOW", "HUB", "HUG", "HUM", "HUT", "ICE", "ICY", "ILL", "INK", "INN", "ION", "ITS", "IVY", "JAB", "JAM", "JAR", "JAW", "JAY", "JET", "JIG", "JOB", "JOG", "JOT", "JOY", "JUG", "KEY", "KID", "KIN", "KIT", "LAB", "LAD", "LAG", "LAP", "LAW", "LAY", "LEG", "LET", "LID", "LIE", "LIP", "LIT", "LOB", "LOG", "LOO", "LOT", "LOW", "MAD", "MAN", "MAP", "MAT", "MAY", "MEN", "MET", "MID", "MIX", "MOB", "MOM", "MOP", "MOW", "MUD", "MUG", "MUM", "NAG", "NAP", "NET", "NEW", "NIL", "NIP", "NOD", "NON", "NOR", "NOT", "NOW", "NUN", "NUT", "OAK", "OAR", "ODD", "OFF", "OIL", "OLD", "ONE", "OPT", "OUR", "OUT", "OWE", "OWL", "OWN", "PAD", "PAL", "PAN", "PAR", "PAT", "PAW", "PAY", "PEA", "PEG", "PEN", "PEP", "PET", "PIE", "PIG", "PIN", "PIP", "PIT", "PLY", "POD", "POP", "POT", "PUB", "PUP", "PUT", "RAG", "RAM", "RAN", "RAP", "RAT", "RAW", "RAY", "RED", "REP", "RIB", "RID", "RIG", "RIM", "RIP", "ROB", "ROD", "ROT", "ROW", "RUB", "RUG", "RUM", "RUN", "RYE", "SAC", "SAD", "SAG", "SAP", "SAT", "SAW", "SAY", "SEA", "SEE", "SET", "SEW", "SHE", "SHY", "SIN", "SIP", "SIR", "SIT", "SIX", "SKI", "SKY", "SOB", "SON", "SOW", "SPA", "SPY", "SUB", "SUM", "SUN", "TAB", "TAG", "TAN", "TAP", "TAR", "TAX", "TEA", "TEE", "TEN", "THE", "TIE", "TIN", "TIP", "TOE", "TON", "TOO", "TOP", "TOW", "TOY", "TRY", "TUB", "TUG", "TWO", "URN", "USE", "VAN", "VAT", "VET", "VEX", "VIA", "VOW", "WAD", "WAG", "WAR", "WAS", "WAX", "WAY", "WEB", "WEE", "WET", "WHO", "WHY", "WIG", "WIN", "WIT", "WON", "WOO", "WOW", "WRY", "YAK", "YAM", "YES", "YET", "YOU", "YUK", "YUM", "ZAP", "ZIP", "ZOO"];
var words4 = ["ABLE", "ACHE", "ACID", "ACRE", "AGED", "AIDE", "AJAR", "ALLY", "ALSO", "AMEN", "AMID", "AREA", "ARMS", "ARMY", "ARTS", "ATOM", "ATOP", "AUNT", "AUTO", "AWAY", "AXIS", "BABY", "BACK", "BAIL", "BAIT", "BAKE", "BALD", "BALE", "BALL", "BAND", "BANG", "BANK", "BARB", "BARE", "BARK", "BARN", "BASE", "BASH", "BASS", "BATH", "BEAD", "BEAK", "BEAM", "BEAN", "BEAR", "BEAT", "BEEF", "BEEN", "BEEP", "BEER", "BELL", "BELT", "BEND", "BENT", "BEST", "BIAS", "BIKE", "BILE", "BILL", "BIND", "BIRD", "BITE", "BLIP", "BLOB", "BLOG", "BLOT", "BLOW", "BLUE", "BLUR", "BOAR", "BOAT", "BODY", "BOIL", "BOLD", "BOLT", "BOMB", "BOND", "BONE", "BOOK", "BOOM", "BOOT", "BORE", "BORN", "BOSS", "BOTH", "BOUT", "BOWL", "BREW", "BROW", "BUCK", "BULB", "BULK", "BULL", "BUMP", "BUNG", "BUNK", "BUOY", "BURN", "BURY", "BUSH", "BUST", "BUSY", "BUZZ", "CAFE", "CAGE", "CAKE", "CALF", "CALL", "CALM", "CAME", "CAMP", "CANE", "CAPE", "CARD", "CARE", "CARS", "CART", "CASE", "CASH", "CAST", "CAVE", "CELL", "CENT", "CHAP", "CHAR", "CHAT", "CHEF", "CHEW", "CHIN", "CHIP", "CHOP", "CHUM", "CITE", "CITY", "CLAM", "CLAP", "CLAW", "CLAY", "CLIP", "CLOG", "CLOT", "CLUB", "CLUE", "COAL", "COAT", "CODE", "COIL", "COIN", "COLD", "COMA", "COMB", "COME", "CONE", "COOK", "COOL", "COPE", "COPY", "CORD", "CORE", "CORK", "CORN", "COST", "COSY", "COUP", "CRAB", "CRAM", "CREW", "CRIB", "CROP", "CROW", "CRUX", "CUBE", "CUFF", "CULT", "CURB", "CURE", "CURL", "CUTE", "DAFT", "DALE", "DAME", "DAMN", "DAMP", "DARE", "DARK", "DARN", "DART", "DASH", "DATA", "DATE", "DAWN", "DEAD", "DEAF", "DEAL", "DEAR", "DEBT", "DECK", "DEED", "DEEM", "DEEP", "DEER", "DEFY", "DEMO", "DENT", "DENY", "DESK", "DIAL", "DICE", "DIET", "DIME", "DINE", "DING", "DIRE", "DIRT", "DISC", "DISH", "DISK", "DIVE", "DOCK", "DOLE", "DOLL", "DOME", "DONE", "DOOM", "DOOR", "DOPE", "DOSE", "DOVE", "DOWN", "DOZE", "DRAB", "DRAG", "DRAW", "DRIP", "DROP", "DRUG", "DRUM", "DUAL", "DUCK", "DUDE", "DUKE", "DULL", "DULY", "DUMB", "DUMP", "DUST", "DUTY", "EACH", "EARL", "EARN", "EASE", "EAST", "EASY", "ECHO", "EDGE", "EDIT", "ELSE", "EMIT", "ENVY", "EPIC", "EVEN", "EVER", "EVIL", "EXAM", "EXIT", "FACE", "FACT", "FADE", "FAIL", "FAIR", "FAKE", "FALL", "FAME", "FANG", "FARE", "FARM", "FAST", "FATE", "FEAR", "FEED", "FEEL", "FEES", "FEET", "FELL", "FELT", "FEND", "FERN", "FILE", "FILL", "FILM", "FIND", "FINE", "FIRE", "FIRM", "FISH", "FIST", "FIVE", "FIZZ", "FLAG", "FLAP", "FLAT", "FLAW", "FLEA", "FLEE", "FLEX", "FLIP", "FLOG", "FLOP", "FLOW", "FLUX", "FOAM", "FOLD", "FOLK", "FOND", "FONT", "FOOD", "FOOL", "FOOT", "FORD", "FORE", "FORK", "FORM", "FORT", "FOUL", "FOUR", "FOWL", "FRAY", "FREE", "FROG", "FROM", "FUEL", "FULL", "FUME", "FUND", "FURY", "FUSE", "FUSS", "GAIN", "GALA", "GALE", "GALL", "GAME", "GANG", "GASP", "GATE", "GAVE", "GAZE", "GEAR", "GENE", "GERM", "GIFT", "GIRL", "GIVE", "GLAD", "GLIB", "GLOW", "GLUE", "GOAL", "GOAT", "GOLD", "GOLF", "GONE", "GOOD", "GOSH", "GOWN", "GRAB", "GRAM", "GREY", "GRID", "GRIM", "GRIN", "GRIP", "GRIT", "GROW", "GRUB", "GULF", "HACK", "HAIL", "HAIR", "HALF", "HALL", "HALT", "HAND", "HARD", "HARE", "HARM", "HATE", "HAUL", "HAVE", "HAWK", "HEAD", "HEAL", "HEAP", "HEAR", "HEAT", "HECK", "HEED", "HEEL", "HEIR", "HELD", "HELL", "HELP", "HERB", "HERD", "HERE", "HERO", "HERS", "HIDE", "HIGH", "HIKE", "HILL", "HIND", "HINT", "HIRE", "HISS", "HOLD", "HOLE", "HOLY", "HOME", "HOOD", "HOOF", "HOOK", "HOOT", "HOPE", "HORN", "HOSE", "HOST", "HOUR", "HOWL", "HUGE", "HULL", "HUMP", "HUNG", "HUNK", "HUNT", "HURT", "HUSH", "HYMN", "ICKY", "ICON", "IDEA", "IDLE", "IDOL", "INCH", "INFO", "INTO", "IRIS", "IRON", "ISLE", "ITCH", "ITEM", "JADE", "JAIL", "JAZZ", "JERK", "JOIN", "JOKE", "JUMP", "JUNK", "JURY", "JUST", "KEEL", "KEEN", "KEEP", "KEPT", "KERB", "KICK", "KIDS", "KILL", "KILO", "KIND", "KING", "KINK", "KISS", "KITE", "KNEE", "KNIT", "KNOB", "KNOT", "KNOW", "LACE", "LACK", "LADY", "LAKE", "LAMB", "LAME", "LAMP", "LAND", "LANE", "LARK", "LASH", "LAST", "LATE", "LAWN", "LAZY", "LEAD", "LEAF", "LEAK", "LEAN", "LEAP", "LEEK", "LEFT", "LEND", "LENS", "LESS", "LEVY", "LIAR", "LICK", "LIEU", "LIFE", "LIFT", "LIKE", "LILY", "LIMB", "LIME", "LIMP", "LINE", "LINK", "LION", "LIST", "LIVE", "LOAD", "LOAF", "LOAN", "LOCK", "LOFT", "LOGO", "LONE", "LONG", "LOOK", "LOOM", "LOOP", "LOOT", "LORD", "LOSE", "LOSS", "LOST", "LOTS", "LOUD", "LOUT", "LOVE", "LUCK", "LUMP", "LUNG", "LURK", "LUSH", "LUST", "MADE", "MAID", "MAIL", "MAIN", "MAKE", "MALE", "MALL", "MANY", "MARE", "MARK", "MARS", "MASH", "MASK", "MASS", "MAST", "MATE", "MATH", "MEAL", "MEAN", "MEAT", "MEEK", "MEET", "MELT", "MEMO", "MEND", "MENU", "MERE", "MESH", "MESS", "MILD", "MILE", "MILK", "MILL", "MIND", "MINE", "MINI", "MINT", "MISS", "MIST", "MOAN", "MOCK", "MODE", "MOLE", "MONK", "MOOD", "MOON", "MOOR", "MORE", "MOSS", "MOST", "MOTH", "MOVE", "MUCH", "MUCK", "MUST", "MUTE", "MYTH", "NAIL", "NAME", "NAVY", "NEAR", "NEAT", "NECK", "NEED", "NEST", "NEWS", "NEXT", "NICE", "NIGH", "NINE", "NODE", "NONE", "NOON", "NOPE", "NORM", "NOSE", "NOSY", "NOTE", "NULL", "NUMB", "OATH", "OBEY", "ODDS", "OKAY", "OMEN", "OMIT", "ONCE", "ONLY", "ONTO", "ONUS", "OOZE", "OPEN", "OURS", "OUST", "OVAL", "OVEN", "OVER", "PACE", "PACK", "PACT", "PAGE", "PAID", "PAIL", "PAIN", "PAIR", "PALE", "PALM", "PANE", "PARK", "PART", "PASS", "PAST", "PATH", "PAVE", "PEAK", "PEAR", "PECK", "PEEL", "PEEP", "PEER", "PERK", "PEST", "PICK", "PIER", "PILE", "PILL", "PINE", "PINK", "PINT", "PIPE", "PITY", "PLAN", "PLAY", "PLEA", "PLOT", "PLOY", "PLUG", "PLUM", "PLUS", "POEM", "POET", "POKE", "POLE", "POLL", "POLO", "POLY", "POND", "PONY", "POOL", "POOR", "POPE", "PORE", "PORK", "PORT", "POSE", "POSH", "POST", "POUR", "PRAY", "PREP", "PREY", "PROM", "PROP", "PUFF", "PULL", "PUMP", "PUNY", "PURE", "PUSH", "QUAY", "QUID", "QUIT", "QUIZ", "RACE", "RACK", "RAFT", "RAGE", "RAID", "RAIL", "RAIN", "RAKE", "RAMP", "RANG", "RANK", "RARE", "RASH", "RATE", "RAVE", "READ", "REAL", "REAP", "REAR", "REDO", "REED", "REEF", "REEL", "REIN", "RELY", "RENT", "REST", "RICE", "RICH", "RIDE", "RING", "RINK", "RIOT", "RIPE", "RISE", "RISK", "RITE", "ROAD", "ROAM", "ROAR", "ROBE", "ROCK", "ROLE", "ROLL", "ROOF", "ROOM", "ROOT", "ROPE", "ROSE", "RUBY", "RUDE", "RUIN", "RULE", "RUSH", "RUST", "SACK", "SAFE", "SAGA", "SAGE", "SAIL", "SAKE", "SALE", "SALT", "SAME", "SAND", "SANE", "SAVE", "SCAN", "SCAR", "SEAL", "SEAM", "SEAT", "SECT", "SEED", "SEEK", "SEEM", "SEEN", "SEEP", "SELF", "SELL", "SEND", "SENT", "SHED", "SHIP", "SHOE", "SHOP", "SHOT", "SHOW", "SHUT", "SICK", "SIDE", "SIGH", "SIGN", "SILK", "SILL", "SING", "SINK", "SITE", "SIZE", "SKIM", "SKIN", "SKIP", "SLAB", "SLAM", "SLAP", "SLIM", "SLIP", "SLOP", "SLOT", "SLOW", "SLUM", "SNAG", "SNAP", "SNOW", "SOAK", "SOAP", "SOAR", "SOCK", "SODA", "SOFA", "SOFT", "SOIL", "SOLD", "SOLE", "SOLO", "SOME", "SONG", "SOON", "SOOT", "SORE", "SORT", "SOUL", "SOUP", "SOUR", "SOYA", "SPAN", "SPAR", "SPEW", "SPIN", "SPIT", "SPOT", "SPUD", "SPUR", "STAB", "STAG", "STAR", "STAY", "STEM", "STEP", "STEW", "STIR", "STOP", "STOW", "STUB", "STUD", "STUN", "SUCH", "SUIT", "SULK", "SURE", "SURF", "SUSS", "SWAN", "SWAP", "SWAY", "SWIM", "TACK", "TACT", "TAIL", "TAKE", "TALE", "TALK", "TALL", "TAME", "TANK", "TAPE", "TASK", "TAXI", "TEAM", "TEAR", "TECH", "TEEN", "TELL", "TEND", "TENT", "TERM", "TEST", "TEXT", "THAN", "THAT", "THAW", "THEM", "THEN", "THEY", "THIN", "THIS", "THUS", "TICK", "TIDE", "TIDY", "TIER", "TILE", "TILL", "TILT", "TIME", "TINT", "TINY", "TIRE", "TOAD", "TOLD", "TOLL", "TOMB", "TONE", "TOOK", "TOOL", "TORE", "TORN", "TOSS", "TOUR", "TOUT", "TOWN", "TRAM", "TRAP", "TRAY", "TREE", "TREK", "TRIM", "TRIO", "TRIP", "TROT", "TRUE", "TUBE", "TUCK", "TUNA", "TUNE", "TURF", "TURN", "TWIG", "TWIN", "TYPE", "UGLY", "UNDO", "UNIT", "UPON", "URGE", "USED", "USER", "VAIN", "VALE", "VARY", "VASE", "VAST", "VEAL", "VEER", "VEIL", "VEIN", "VENT", "VERY", "VEST", "VETO", "VICE", "VIEW", "VILE", "VINE", "VISA", "VOID", "VOLT", "VOTE", "WADE", "WAGE", "WAIT", "WAKE", "WALK", "WALL", "WARD", "WARM", "WARN", "WARY", "WASH", "WASP", "WAVE", "WEAK", "WEAR", "WEED", "WEEK", "WEEP", "WELD", "WELL", "WEST", "WHAT", "WHEN", "WHIM", "WHIP", "WHOM", "WICK", "WIDE", "WIFE", "WILD", "WILL", "WIND", "WINE", "WING", "WINK", "WIRE", "WIRY", "WISE", "WISH", "WITH", "WOLF", "WOMB", "WOOD", "WOOL", "WORD", "WORK", "WORM", "WORN", "WRAP", "WREN", "WRIT", "YARD", "YARN", "YAWN", "YEAR", "YELL", "YOGA", "YOKE", "YOUR", "ZANY", "ZEAL", "ZERO", "ZINC", "ZONE", "ZOOM"];

var Tile = function (id, text, row, col, movable, solved) {
    this.id = id;
    this.text = text;
    this.row = row;
    this.col = col;
    this.movable = movable;
    this.solved = solved;
    this.spin = false;
};

Tile.prototype.getId = function () {
    return this.id;
};

Tile.prototype.getText = function () {
    return this.text;
};

Tile.prototype.getLocation = function () {
    return { "row": this.row, "col": this.col };
};

Tile.prototype.isBlank = function () {
    return this.text === " ";
};

Tile.prototype.isAdjacent = function (other) {
    // Same row
    if (other.row === this.row) {
        if (((other.col - 1) === this.col) || ((other.col + 1) === this.col)) {
            return true;
        }
    }
    // Same column
    if (other.col === this.col) {
        if (((other.row - 1) === this.row) || ((other.row + 1) === this.row)) {
            return true;
        }
    }
    return false;
};

Tile.prototype.canMoveTo = function (other) {
    return other.isBlank() && this.isAdjacent(other);
};

Tile.prototype.setMovable = function (movable) {
    this.movable = movable;
};

Tile.prototype.isMovable = function () {
    return this.movable;
};

Tile.prototype.setSolved = function (solved) {
    this.solved = solved;
};

Tile.prototype.isSolved = function () {
    return this.solved;
};

Tile.prototype.setSpin = function (spin) {
    this.spin = spin;
};

Tile.prototype.getSpin = function () {
    return this.spin;
};

Tile.prototype.exchangeText = function (other) {
    var tempText = this.text;
    this.text = other.text;
    other.text = tempText;
    other.movable = ~other.movable;
    this.movable = ~this.movable;
};


var Board = function () {
    this.nRows = 4;
    this.nColumns = 4;
    this.tiles = [];
    this.DOMBoard = document.getElementById("board");
    this.main = document.getElementById("main");
    this.solution = "";
    this.allTilesInPlace = false;
    this.movesAvailable = 15;
    this.movesLeft = this.movesAvailable;
    // TODO do more difficulty level tweaking
    // Drawn from Power distribution - np.array(sorted(8-np.random.power(3, size=200)*7), dtype=int)
    this.scramblingStrengths = [5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 7];
    this.scramblingStrength = this.scramblingStrengths[Math.floor(myrng() * this.scramblingStrengths.length)];

    var selectedWords = this.generateRandomWordlist();

    // Record the original solution
    for (var i = 0; i < selectedWords.length; i++) {
        for (var j = 0; j < selectedWords[i].length; j++) {
            this.solution += selectedWords[i][j];
        }
    }

    // Construct a new tile board from scrambled words
    selectedWords = this.scrambleWordlist(selectedWords, this.scramblingStrength);

    var id = 0;
    for (var i = 0; i < selectedWords.length; i++) {
        for (var j = 0; j < selectedWords[i].length; j++) {
            var curLetter = selectedWords[i][j];
            var newTile = new Tile(id, curLetter, i + 1, j + 1, false);
            this.tiles.push(newTile);
            id++;
        }
    }

    // Set flags
    this.update();

    // Set css classes
    this.render();

};

function hamming(s, t) {
    var dist = 0;
    for (var i = 0; i < s.length; i++) {
        if (s[i] !== t[i]) {
            dist++;
        }
    }
    return dist;
};

Board.prototype.scrambleWordlist = function (wordlist, strength) {
    var originalWordlist = String(wordlist);

    // Keep going until we hit the desired strength measured as Hamming distance
    while (hamming(originalWordlist, String(wordlist)) <= strength) {
        // Find the blank
        var blankI = 0;
        var blankJ = 0;
        for (var i = 0; i < wordlist.length; i++) {
            wordlist[i] = wordlist[i].split("");  // Convert to char array
            for (var j = 0; j < wordlist[i].length; j++) {
                if (wordlist[i][j] === " ") {
                    blankI = i;
                    blankJ = j;
                }
            }
        }
        // Find a random adjacent letter
        var randomI = blankI;
        var randomJ = blankJ;
        do {
            var r = myrng();
            // Pick new row
            if (r > (2.0 / 3.0)) {
                randomI = blankI + 1;
            } else if (r > (1.0 / 3.0)) {
                randomI = blankI;
            } else {
                randomI = blankI - 1;
            }
            // Pick new column
            r = myrng();
            if (randomI == blankI) {
                if (r > 0.5) {
                    randomJ = blankJ + 1;
                } else {
                    randomJ = blankJ - 1;
                }
            } else {
                randomJ = blankJ;
            }

        } while (randomI < 0 || randomJ < 0 || randomI >= this.nRows || randomJ >= this.nColumns);
        // Swap the blank with a random adjacent letter
        var temp = wordlist[blankI][blankJ];
        wordlist[blankI][blankJ] = wordlist[randomI][randomJ];
        wordlist[randomI][randomJ] = temp;

        // Convert back to strings
        for (i = 0; i < wordlist.length; i++) {
            wordlist[i] = wordlist[i].join("");
        }
    }
    return wordlist;
};

Board.prototype.generateRandomWordlist = function () {
    var selectedWords = [];

    // Pick a random 3-letter word
    var randomElement = words3[Math.floor(myrng() * words3.length)];
    selectedWords.push(randomElement + " ");

    // Pick 3 random 4-letter words
    randomElement = words4[Math.floor(myrng() * words4.length)];
    selectedWords.push(randomElement);
    randomElement = words4[Math.floor(myrng() * words4.length)];
    selectedWords.push(randomElement);
    randomElement = words4[Math.floor(myrng() * words4.length)];
    selectedWords.push(randomElement);

    // Shuffle selected words
    var cmp = function (a, b) {
        return myrng() - 0.5;
    };
    selectedWords.sort(cmp);

    return selectedWords;
};

Board.prototype.decrementMovesLeft = function () {
    this.movesLeft -= 1;
};

Board.prototype.canContinue = function () {
    return !this.allTilesInPlace && this.movesLeft > 0;
};

Board.prototype.update = function () {
    // Find the blank tile
    var blankTile = null;
    for (var i = 0; i < this.tiles.length; i++) {
        if (this.tiles[i].isBlank()) {
            blankTile = this.tiles[i];
        }
    }

    // Mark tiles next to the blank as movable
    // Mark tiles in the right spots as solved
    // Update winning flag
    this.allTilesInPlace = true;
    for (i = 0; i < this.tiles.length; i++) {
        var curTile = this.tiles[i];
        if (curTile.isAdjacent(blankTile)) {
            curTile.setMovable(true);
        } else {
            curTile.setMovable(false);
        }
        if (curTile.getText() === this.solution[i]) {
            curTile.setSolved(true);
        } else {
            curTile.setSolved(false);
            this.allTilesInPlace = false;
        }
    }

    // Set game won animation
    if (this.allTilesInPlace) {
        for (var i = 0; i < this.tiles.length; i++) {
            var curTile = this.tiles[i];
            curTile.setSpin(true);
        }
    }

};

Board.prototype.render = function () {

    // Display moves left
    var score = document.getElementById("score");
    score.innerHTML = '';
    var newScore = document.createTextNode("Moves left: " + this.movesLeft + "/" + this.movesAvailable);
    score.appendChild(newScore);
    // Create DOM elements
    this.DOMBoard.innerHTML = '';
    for (i = 0; i < this.tiles.length; i++) {
        var curTile = this.tiles[i];
        var domTile = document.createElement("div");
        domTile.setAttribute("id", curTile.getId());

        if (curTile.isMovable()) {
            domTile.setAttribute("class", "tile tile-movable");
            if (curTile.isSolved()) {
                domTile.setAttribute("class", "tile tile-movable tile-solved");
            }
            domTile.setAttribute("draggable", "true");
            domTile.addEventListener("dragstart", onDragStart);
            domTile.addEventListener("dragover", onDragOver);
        } else {
            if (curTile.isBlank()) {
                domTile.setAttribute("class", "tile tile-blank");
                domTile.setAttribute("draggable", "false");
                domTile.addEventListener("dragover", onDragOver);
                domTile.addEventListener("drop", onDrop);
            }
            else if (curTile.isSolved()) {
                domTile.setAttribute("class", "tile tile-solved");
                domTile.setAttribute("draggable", "false");
            }
            else {
                domTile.setAttribute("class", "tile");
                domTile.setAttribute("draggable", "false");
            }
        }
        // Game won - do spin animation
        if (curTile.getSpin()) {
            domTile.setAttribute("class", "tile tile-solved tile-won");
        }
        domTile.appendChild(document.createTextNode(curTile.getText()));
        this.DOMBoard.appendChild(domTile);
    }

};

Board.prototype.makeEmojiScoreBoard = function () {
    var banner = "";
    var green = "🟩";
    var yellow = "🟨";
    var grey = "⬛";
    if (this.allTilesInPlace) {
        banner = "Congratulations, you won!\n\n";
    } else {
        banner = "Game over, you lost!\n\n";
    }
    banner += "Slidle " + this.movesLeft + "/" + this.movesAvailable + "\n\n";
    for (var i = 0; i < this.tiles.length; i++) {
        if (this.tiles[i].isSolved() && !this.tiles[i].isBlank()) {
            banner += green;
        } else if (this.tiles[i].isBlank()) {
            banner += grey;
        } else {
            banner += yellow;
        }
        if (i > 0 && ((1 + i) % this.nColumns === 0)) {
            banner += "\n";
        }
    }
    banner += "\n";

    return banner;
};

Board.prototype.showScore = function () {
    var modal = document.getElementById("share-score");
    modal.setAttribute("class", "show-modal");
    var emojis = document.getElementById("emojis");
    var banner = board.makeEmojiScoreBoard();
    var finalScore = document.createTextNode(banner);
    emojis.appendChild(finalScore);
    // Add copy to clipboard button
    var copyButton = document.createElement("button");
    var buttonText = document.createTextNode("Copy to clipboard");
    copyButton.appendChild(buttonText);
    copyButton.addEventListener("click", copyToClipboard);
    emojis.appendChild(copyButton);
};

Board.prototype.print = function () {
    var s = "";
    var idx = 0;
    for (var i = 0; i < this.nRows; i++) {
        for (var j = 0; j < this.nRows; j++) {
            s += this.tiles[idx].getText();
            idx++;
        }
        s += "\n";
    }
    console.log(s);
};

function onDragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
    event.dataTransfer.effectAllowed = "copy";
}

function onDragOver(event) {
    event.preventDefault();  // required
}

function onDrop(event) {
    event.preventDefault();  // recommended
    // Get ids of both elements
    var sourceId = parseInt(event.dataTransfer.getData("text"));
    var targetId = parseInt(event.target.id);
    // Update the model
    board.tiles[sourceId].exchangeText(board.tiles[targetId]);

    board.update();

    board.decrementMovesLeft();

    board.render();

    // Print emoji score board
    if (!board.canContinue()) {
        board.showScore();
    }
}

function copyToClipboard() {
    var text = board.makeEmojiScoreBoard();
    navigator.clipboard.writeText(text);
}

// Main
// Get seed value for the random number generator
var now = new Date();
var utc_timestamp = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
var myrng = new Math.seedrandom(utc_timestamp);
// De-comment this to get a new board every time
// var myrng = Math.random;

var board = new Board();
