// LICENSE (MIT) Copyright 2019 David Bau
// Seeded random number generator for JavaScript.
// Version 3.0.5
// Author: David Bau
// Date: 2019-09-14
!function (f, a, c) { var s, l = 256, p = "random", d = c.pow(l, 6), g = c.pow(2, 52), y = 2 * g, h = l - 1; function n(n, t, r) { function e() { for (var n = u.g(6), t = d, r = 0; n < g;)n = (n + r) * l, t *= l, r = u.g(1); for (; y <= n;)n /= 2, t /= 2, r >>>= 1; return (n + r) / t } var o = [], i = j(function n(t, r) { var e, o = [], i = typeof t; if (r && "object" == i) for (e in t) try { o.push(n(t[e], r - 1)) } catch (n) { } return o.length ? o : "string" == i ? t : t + "\0" }((t = 1 == t ? { entropy: !0 } : t || {}).entropy ? [n, S(a)] : null == n ? function () { try { var n; return s && (n = s.randomBytes) ? n = n(l) : (n = new Uint8Array(l), (f.crypto || f.msCrypto).getRandomValues(n)), S(n) } catch (n) { var t = f.navigator, r = t && t.plugins; return [+new Date, f, r, f.screen, S(a)] } }() : n, 3), o), u = new m(o); return e.int32 = function () { return 0 | u.g(4) }, e.quick = function () { return u.g(4) / 4294967296 }, e.double = e, j(S(u.S), a), (t.pass || r || function (n, t, r, e) { return e && (e.S && v(e, u), n.state = function () { return v(u, {}) }), r ? (c[p] = n, t) : n })(e, i, "global" in t ? t.global : this == c, t.state) } function m(n) { var t, r = n.length, u = this, e = 0, o = u.i = u.j = 0, i = u.S = []; for (r || (n = [r++]); e < l;)i[e] = e++; for (e = 0; e < l; e++)i[e] = i[o = h & o + n[e % r] + (t = i[e])], i[o] = t; (u.g = function (n) { for (var t, r = 0, e = u.i, o = u.j, i = u.S; n--;)t = i[e = h & e + 1], r = r * l + i[h & (i[e] = i[o = h & o + t]) + (i[o] = t)]; return u.i = e, u.j = o, r })(l) } function v(n, t) { return t.i = n.i, t.j = n.j, t.S = n.S.slice(), t } function j(n, t) { for (var r, e = n + "", o = 0; o < e.length;)t[h & o] = h & (r ^= 19 * t[h & o]) + e.charCodeAt(o++); return S(t) } function S(n) { return String.fromCharCode.apply(0, n) } if (j(c.random(), a), "object" == typeof module && module.exports) { module.exports = n; try { s = require("crypto") } catch (n) { } } else "function" == typeof define && define.amd ? define(function () { return n }) : c["seed" + p] = n }("undefined" != typeof self ? self : this, [], Math);

var words3 = ["ACE", "ACT", "AGE", "AGO", "AID", "AIR", "ALL", "AND", "APE", "ARE", "ARM", "ASK", "ATE", "BAD", "BAG", "BAT", "BED", "BEE", "BIG", "BIT", "BOX", "BOY", "BUN", "BUS", "BUT", "BUY", "BYE", "CAB", "CAN", "CAR", "CAT", "COW", "CRY", "CUB", "CUT", "DAB", "DAD", "DAM", "DAY", "DEN", "DID", "DIP", "DOG", "DOT", "DUG", "EAR", "EAT", "EGG", "ELF", "END", "EYE", "FAN", "FAR", "FAT", "FEW", "FIG", "FIN", "FIT", "FIX", "FLY", "FOR", "FOX", "FRY", "FUN", "GAS", "GEL", "GET", "GOD", "GOT", "HAD", "HAS", "HAT", "HEN", "HER", "HIS", "HIT", "HOW", "ICE", "ILL", "INK", "JAB", "JAM", "JAR", "JET", "JOB", "JOG", "JUG", "KEY", "KIT", "LAY", "LET", "LIT", "LOT", "MAD", "MAN", "MAP", "MAT", "MAY", "MET", "MIX", "MOM", "MUD", "MUG", "MUM", "NAP", "NET", "NEW", "NOD", "NOT", "NOW", "NUT", "OAR", "ODD", "OLD", "ONE", "OUR", "OUT", "OWL", "OWN", "PAT", "PAW", "PEG", "PET", "PIN", "PIT", "POP", "POT", "PUP", "PUT", "RAG", "RAM", "RAP", "RAT", "ROW", "RUB", "RUG", "RUN", "SAT", "SAW", "SEE", "SET", "SIR", "SIT", "SOB", "SOW", "TAG", "TAN", "TAP", "TEN", "TIP", "TOE", "TOP", "TOW", "TUG", "TWO", "URN", "USE", "VAN", "VET", "WAR", "WAS", "WAY", "WET", "WHO", "WHY", "WIG", "WIN", "WON", "WOW", "YAK", "YES", "YET", "YOU", "ZAP", "ZIP"];
var words4 = ["ABLE", "ACID", "AGED", "ALSO", "AWAY", "BABY", "BACK", "BAKE", "BALL", "BANK", "BASE", "BEAM", "BEEN", "BELL", "BEND", "BEST", "BIRD", "BLUE", "BOAT", "BOOK", "BUSY", "CAKE", "CALM", "CAME", "CARD", "CARE", "CASH", "CHAT", "CITY", "COAT", "COLD", "COME", "COOK", "COOL", "CROW", "CUTE", "DARK", "DUCK", "EACH", "EVEN", "EVER", "EVIL", "EXIT", "FACE", "FACT", "FAIR", "FEEL", "FELL", "FILM", "FINE", "FIRE", "FISH", "FIVE", "FOUR", "FROM", "GAME", "GATE", "GIRL", "GIVE", "GOAT", "GOLD", "GONE", "GOOD", "HAIR", "HARD", "HAVE", "HEAR", "HERE", "HIDE", "HOME", "HOPE", "HUGE", "INTO", "IRON", "JUMP", "KEEP", "KICK", "KILL", "KING", "LACE", "LAND", "LEAF", "LIFE", "LIKE", "LION", "LIST", "LOVE", "MAIN", "MARS", "MATH", "MEET", "MOON", "MORE", "MOVE", "NEAR", "NEED", "NINE", "NOSE", "ONLY", "OPEN", "PAIN", "PEAR", "PLAY", "PULL", "PUSH", "RACE", "RAIN", "RICE", "RIDE", "RING", "ROOM", "ROSE", "SALE", "SELL", "SHIP", "SING", "SNOW", "STAR", "STAY", "TIDE", "TIME", "TOWN", "TREE", "TRUE", "WISE", "WOLF", "WOOD", "WORD", "WORK", "ZERO"];

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
    // Drawn from Power distribution
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

var hamming = function (s, t) {
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
// var myrng = Math.random;

var board = new Board();
