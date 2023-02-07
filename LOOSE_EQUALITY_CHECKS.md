# List of loose equality checks

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 196: `get aborted() { return this.abortListeners == null; }`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 203: `if (type == "abort" && this.abortListeners)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 229: `let options = list.map(o => typeof o == "string" ? { label: o } : o);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 273: `let addStart = start && source[0] != "^", addEnd = source[source.length - 1] != "$";`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 290: `if (range == state.selection.main)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 297: `len && state.sliceDoc(range.from - len, range.from) != state.sliceDoc(from, to))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 308: `if (typeof apply == "string")`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 340: `this.folded.push((0,_codemirror_state__WEBPACK_IMPORTED_MODULE_1__.codePointAt)(upper == part ? part.toLowerCase() : upper, 0));`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 343: `this.astral = pattern.length != this.chars.length;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 353: `if (this.pattern.length == 0)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 360: `if (chars.length == 1) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 362: `return first == chars[0] ? [0, 0, (0,_codemirror_state__WEBPACK_IMPORTED_MODULE_1__.codePointSize)(first)]`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 363: `: first == folded[0] ? [-200 /* Penalty.CaseFold */, 0, (0,_codemirror_state__WEBPACK_IMPORTED_MODULE_1__.codePointSize)(first)] : null;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 366: `if (direct == 0)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 372: `if (next == chars[anyTo] || next == folded[anyTo])`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 394: `if (preciseTo < len && next == chars[preciseTo])`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 397: `if (next == chars[adjacentTo] || next == folded[adjacentTo]) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 398: `if (adjacentTo == 0)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 410: `: ((ch = (0,_codemirror_state__WEBPACK_IMPORTED_MODULE_1__.fromCodePoint)(next)) != ch.toLowerCase() ? 1 /* Tp.Upper */ : ch != ch.toUpperCase() ? 2 /* Tp.Lower */ : 0 /* Tp.NonWord */);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 411: `if (!i || type == 1 /* Tp.Upper */ && hasLower || prevType == 0 /* Tp.NonWord */ && type != 0 /* Tp.NonWord */) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 412: `if (chars[byWordTo] == next || (folded[byWordTo] == next && (byWordFolded = true)))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 420: `if (byWordTo == len && byWord[0] == 0 && wordAdjacent)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 422: `if (adjacentTo == len && adjacentStart == 0)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 426: `if (adjacentTo == len)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 428: `if (byWordTo == len)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 431: `return chars.length == 2 ? null : this.result((any[0] ? -700 /* Penalty.NotStart */ : 0) + -200 /* Penalty.CaseFold */ + -1100 /* Penalty.Gap */, any, word);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 437: `if (i > 1 && result[i - 1] == pos)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 559: `for (let dom = e.target, match; dom && dom != this.dom; dom = dom.parentNode) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 560: `if (dom.nodeName == "LI" && (match = /-(\d+)$/.exec(dom.id)) && +match[1] < options.length) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 579: `if (cState != prevState) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 581: `if (((_a = cState.open) === null || _a === void 0 ? void 0 : _a.disabled) != ((_b = prevState.open) === null || _b === void 0 ? void 0 : _b.disabled))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 587: `if (cls != this.currentClass) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 627: `if (node && this.view.state.field(this.stateField, false) == cState)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 646: `if (i == selected) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 676: `let rtl = this.view.textDirection == _codemirror_view__WEBPACK_IMPORTED_MODULE_2__.Direction.RTL, left = rtl, narrow = false, maxWidth;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 779: `if (option.boost != null)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 788: `if (!prev || prev.label != opt.completion.label || prev.detail != opt.completion.detail ||`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 789: `(prev.type != null && opt.completion.type != null && prev.type != opt.completion.type) ||`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 790: `prev.apply != opt.completion.apply)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 808: `return selected == this.selected || selected >= this.options.length ? this`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 814: `return prev && active.some(a => a.state == 1 /* State.Pending */) ?`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 818: `if (prev && prev.selected != selected && prev.selected != -1) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 821: `if (options[i].completion == selectedValue) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 850: `let value = this.active.find(s => s.source == source) ||`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 851: `new ActiveSource(source, this.active.some(a => a.state != 0 /* State.Inactive */) ? 1 /* State.Pending */ : 0 /* State.Inactive */);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 854: `if (active.length == this.active.length && active.every((a, i) => a == this.active[i]))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 862: `else if (open && open.disabled && !active.some(a => a.state == 1 /* State.Pending */))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 864: `if (!open && active.every(a => a.state != 1 /* State.Pending */) && active.some(a => a.hasResult()))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 869: `return active == this.active && open == this.open ? this : new CompletionState(active, this.id, open);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 875: `if (a == b)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 882: `let endA = iA == a.length, endB = iB == b.length;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 884: `return endA == endB;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 885: `if (a[iA++].result != b[iB++].result)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 919: `else if (tr.selection && value.state != 0 /* State.Inactive */)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 928: `if (active.source == value.source)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 934: `return type == "delete" || !conf.activateOnTyping ? this.map(tr.changes) : new ActiveSource(this.source, 1 /* State.Pending */);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 957: `type == "delete" && cur(tr.startState) == this.from)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 958: `return new ActiveSource(this.source, type == "input" && conf.activateOnTyping ? 1 /* State.Pending */ : 0 /* State.Inactive */);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 979: `return typeof validFor == "function" ? validFor(text, from, to, state) : ensureAnchor(validFor, true).test(text);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 1007: `if (by == "page" && (tooltip = (0,_codemirror_view__WEBPACK_IMPORTED_MODULE_2__.getTooltip)(view, cState.open.tooltip)))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 1013: `selected = by == "page" ? 0 : length - 1;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 1015: `selected = by == "page" ? length - 1 : 0;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 1047: `if (!cState || !cState.active.some(a => a.state != 0 /* State.Inactive */))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 1072: `if (active.state == 1 /* State.Pending */)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 1077: `if (!update.selectionSet && !update.docChanged && update.startState.field(completionState) == cState)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 1103: `this.debounceUpdate = cState.active.some(a => a.state == 1 /* State.Pending */ && !this.running.some(q => q.active.source == a.source))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 1105: `if (this.composing != 0 /* CompositionState.None */)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 1107: `if (getUserEvent(tr) == "input")`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 1109: `else if (this.composing == 2 /* CompositionState.Changed */ && tr.selection)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 1117: `if (active.state == 1 /* State.Pending */ && !this.running.some(r => r.active.source == active.source))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 1123: `let context = new CompletionContext(state, pos, active.explicitPos == pos);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 1167: `let current = this.view.state.field(completionState).active.find(a => a.source == query.active.source);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 1168: `if (current && current.state == 1 /* State.Pending */) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 1169: `if (query.done == null) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 1175: `if (active.state != 1 /* State.Pending */)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 1198: `if (this.composing == 3 /* CompositionState.ChangedAndMoved */) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 1340: `return from == null || to == null ? null : new FieldRange(this.field, from, to);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 1372: `if (seq != null ? fields[i].seq == seq : name ? fields[i].name == name : false)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 1377: `while (i < fields.length && (seq == null || (fields[i].seq != null && fields[i].seq < seq)))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 1391: `if (pos.line == lines.length && pos.from > esc.index) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 1414: `this.deco = _codemirror_view__WEBPACK_IMPORTED_MODULE_2__.Decoration.set(ranges.map(r => (r.from == r.to ? fieldMarker : fieldRange).range(r.from, r.to)));`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 1427: `return sel.ranges.every(range => this.ranges.some(r => r.field == this.active && r.from <= range.from && r.to >= range.to));`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 1452: `return _codemirror_state__WEBPACK_IMPORTED_MODULE_1__.EditorSelection.create(ranges.filter(r => r.field == field).map(r => _codemirror_state__WEBPACK_IMPORTED_MODULE_1__.EditorSelection.range(r.from, r.to)));`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 1506: `if (!active || dir < 0 && active.active == 0)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 1508: `let next = active.active + dir, last = dir > 0 && !active.ranges.some(r => r.field == next + dir);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 1560: `if (!active || (pos = view.posAtCoords({ x: event.clientX, y: event.clientY })) == null)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 1563: `if (!match || match.field == active.active)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 1594: `if (!seen[m[0]] && pos + m.index != ignoreAt) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 1658: `return mapped == null ? undefined : mapped;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 1674: `if (lineStart != tr.changes.mapPos(prevLineStart, -1))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 1682: `value = value.update({ filter: from => from != effect.value });`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 1700: `if (definedClosing.charCodeAt(i) == ch)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 1707: `const android = typeof navigator == "object" && /*@__PURE__*//Android\b/.test(navigator.userAgent);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 1712: `if (insert.length > 2 || insert.length == 2 && (0,_codemirror_state__WEBPACK_IMPORTED_MODULE_1__.codePointSize)((0,_codemirror_state__WEBPACK_IMPORTED_MODULE_1__.codePointAt)(insert, 0)) == 1 ||`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 1713: `from != sel.from || to != sel.to)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 1734: `if (token == before && nextChar(state.doc, range.head) == closing((0,_codemirror_state__WEBPACK_IMPORTED_MODULE_1__.codePointAt)(token, 0)))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 1768: `if (bracket == tok)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 1769: `return closed == tok ? handleSame(state, tok, tokens.indexOf(tok + tok + tok) > -1, conf)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 1771: `if (bracket == closed && closedBracketAt(state, state.selection.main.from))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 1779: `if (from == pos)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 1790: `return (0,_codemirror_state__WEBPACK_IMPORTED_MODULE_1__.codePointSize)((0,_codemirror_state__WEBPACK_IMPORTED_MODULE_1__.codePointAt)(prev, 0)) == prev.length ? prev : prev.slice(1);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 1812: `if (range.empty && nextChar(state.doc, range.head) == close)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 1832: `if (next == token) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 1839: `let isTriple = allowTriple && state.sliceDoc(pos, pos + token.length * 3) == token + token + token;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 1844: `else if (allowTriple && state.sliceDoc(pos - 2 * token.length, pos) == token + token &&`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 1851: `else if (state.charCategorizer(pos)(next) != _codemirror_state__WEBPACK_IMPORTED_MODULE_1__.CharCategory.Word) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 1866: `return tree.parent && tree.from == pos;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 1876: `while (first && first.from == node.from && first.to - first.from > quoteToken.length + quotePos) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 1877: `if (state.sliceDoc(first.to - quoteToken.length, first.to) == quoteToken)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 1883: `let parent = node.to == pos && node.parent;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 1892: `if (charCat(state.sliceDoc(pos - 1, pos)) != _codemirror_state__WEBPACK_IMPORTED_MODULE_1__.CharCategory.Word)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 1896: `if (state.sliceDoc(start, pos) == prefix && charCat(state.sliceDoc(start - 1, start)) != _codemirror_state__WEBPACK_IMPORTED_MODULE_1__.CharCategory.Word)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 1943: `return cState && cState.active.some(a => a.state == 1 /* State.Pending */) ? "pending"`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 1944: `: cState && cState.active.some(a => a.state != 0 /* State.Inactive */) ? "active" : null;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 2174: `if (textBefore.slice(beforeOff - open.length, beforeOff) == open &&`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 2175: `textAfter.slice(spaceAfter, spaceAfter + close.length) == close) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 2189: `if (startText.slice(startSpace, startSpace + open.length) == open &&`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 2190: `endText.slice(endOff, endOff + close.length) == close) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 2218: `if (option != 2 /* CommentOption.Uncomment */ && !comments.every(c => c)) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 2225: `else if (option != 1 /* CommentOption.Comment */ && comments.some(c => c)) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 2244: `if (line.from > prevLine && (from == to || to > line.from)) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 2250: `let empty = indent == line.length;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 2251: `let comment = line.text.slice(indent, indent + token.length) == token ? indent : -1;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 2262: `if (lines.length == startI + 1)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 2265: `if (option != 2 /* CommentOption.Uncomment */ && lines.some(l => l.comment < 0 && (!l.empty || l.single))) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 2273: `else if (option != 1 /* CommentOption.Comment */ && lines.some(l => l.comment >= 0)) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 2278: `if (line.text[to - line.from] == " ")`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 2332: `let other = from == 0 /* BranchName.Done */ ? state.undone : state.done;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 2337: `return new HistoryState(from == 0 /* BranchName.Done */ ? fromHist.rest : other, from == 0 /* BranchName.Done */ ? other : fromHist.rest);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 2340: `if (isolate == "full" || isolate == "before")`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 2350: `if (isolate == "full" || isolate == "after")`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 2370: `let command = e.inputType == "historyUndo" ? undo : e.inputType == "historyRedo" ? redo : null;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 2424: `let branch = side == 0 /* BranchName.Done */ ? histState.done : histState.undone;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 2444: `// changes == startSelection == undefined`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 2514: `return a.ranges.length == b.ranges.length &&`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 2515: `a.ranges.filter((r, i) => r.empty != b.ranges[i].empty).length === 0;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 2592: `userEvent == "input.type.compose")) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 2604: `userEvent == this.prevUserEvent && userEvent && /^select($|\.)/.test(userEvent) &&`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 2613: `let branch = side == 0 /* BranchName.Done */ ? this.done : this.undone;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 2614: `if (branch.length == 0)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 2621: `userEvent: side == 0 /* BranchName.Done */ ? "select.undo" : "select.redo",`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 2629: `let rest = branch.length == 1 ? none : branch.slice(0, branch.length - 1);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 2638: `userEvent: side == 0 /* BranchName.Done */ ? "undo" : "redo",`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 2681: `return view.textDirectionAt(view.state.selection.main.head) == _codemirror_view__WEBPACK_IMPORTED_MODULE_2__.Direction.LTR;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 2730: `if (cat == _codemirror_state__WEBPACK_IMPORTED_MODULE_1__.CharCategory.Space)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 2732: `if (cat != nextCat)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 2734: `if (cat == _codemirror_state__WEBPACK_IMPORTED_MODULE_1__.CharCategory.Word) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 2735: `if (next.toLowerCase() == next) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 2746: `if (sawUpper && forward && categorize(ahead = view.state.sliceDoc(pos, pos + 1)) == _codemirror_state__WEBPACK_IMPORTED_MODULE_1__.CharCategory.Word &&`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 2747: `ahead.toLowerCase() == ahead)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 2809: `return moved.head != range.head ? moved : view.moveToLineBoundary(range, forward);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 2848: `if (moved.head == start.head && moved.head != (forward ? line.to : line.from))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 2850: `if (!forward && moved.head == line.from && line.length) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 2852: `if (space && start.head != line.from + space)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 2894: `let head = matching.start.from == range.head ? matching.end.to : matching.end.from;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 3111: `if (from == to) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 3128: `return from == to ? { range } : { changes: { from, to }, range: _codemirror_state__WEBPACK_IMPORTED_MODULE_1__.EditorSelection.cursor(from) };`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 3135: `effects: event == "delete.selection" ? _codemirror_view__WEBPACK_IMPORTED_MODULE_2__.EditorView.announce.of(state.phrase("Selection deleted")) : undefined`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 3152: `if (before[before.length - 1] == "\t")`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 3155: `for (let i = 0; i < drop && before[before.length - 1 - i] == " "; i++)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 3161: `if (targetPos == pos && line.number != (forward ? state.doc.lines : 1))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 3179: `if (pos == (forward ? line.to : line.from)) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 3180: `if (pos == start && line.number != (forward ? state.doc.lines : 1))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 3187: `if (cat != null && nextCat != cat)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 3189: `if (nextChar != " " || pos != start)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 3272: `if (!range.empty || range.from == 0 || range.from == state.doc.length)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 3275: `let from = pos == line.from ? pos - 1 : (0,_codemirror_state__WEBPACK_IMPORTED_MODULE_1__.findClusterBreak)(line.text, pos - line.from, false) + line.from;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 3276: `let to = pos == line.to ? pos + 1 : (0,_codemirror_state__WEBPACK_IMPORTED_MODULE_1__.findClusterBreak)(line.text, pos - line.from, true) + line.from;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 3289: `if (!range.empty && range.to == endLine.from)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 3308: `if (forward ? block.to == state.doc.length : block.from == 0)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 3393: `state.doc.lineAt(before.to).from == state.doc.lineAt(after.from).from)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 3415: `let explode = !atEof && from == to && isBetweenBrackets(state, from);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 3420: `if (indent == null)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 3466: `return found == null ? -1 : found;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 3470: `if (indent == null)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 3476: `if (cur != norm || range.from < line.from + cur.length) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 3510: `while (keep < space.length && keep < insert.length && space.charCodeAt(keep) == insert.charCodeAt(keep))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 3842: `let isWord = inner.name == "VariableName" ||`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 3862: `if ((obj === null || obj === void 0 ? void 0 : obj.name) == "VariableName") {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 3866: `else if ((obj === null || obj === void 0 ? void 0 : obj.name) == "MemberExpression" && ((_a = (prop = obj.lastChild)) === null || _a === void 0 ? void 0 : _a.name) == "PropertyName") {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 3888: `if (inner.name == "PropertyName") {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 3894: `else if (inner.name == "VariableName" || inner.to - inner.from < 20 && Identifier.test(read(inner))) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 3897: `else if ((inner.name == "." || inner.name == "?.") && inner.parent.name == "MemberExpression") {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 3900: `else if (inner.name == "MemberExpression") {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 3923: `type: typeof value == "function" ? (/^[A-Z]/.test(name) ? "class" : top ? "function" : "method")`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 4041: `if (node.name == "JSXOpenTag" || node.name == "JSXSelfClosingTag" || node.name == "JSXFragmentTag")`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 4050: `if (ch.name == "JSXIdentifier" || ch.name == "JSXBuiltin" || ch.name == "JSXNamespacedName" ||`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 4051: `ch.name == "JSXMemberExpression")`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 4056: `const android = typeof navigator == "object" && /*@__PURE__*//Android\b/.test(navigator.userAgent);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 4063: `from != to || (text != ">" && text != "/") ||`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 4070: `if (around.name == "JSXStartTag")`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 4072: `if (text == ">" && around.name == "JSXFragmentTag") {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 4075: `else if (text == "/" && around.name == "JSXFragmentTag") {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 4077: `if (empty.from == head - 1 && ((_a = base.lastChild) === null || _a === void 0 ? void 0 : _a.name) != "JSXEndTag" &&`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 4083: `else if (text == ">") {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 4085: `if (openTag && ((_b = openTag.lastChild) === null || _b === void 0 ? void 0 : _b.name) != "JSXEndTag" &&`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 4086: `state.sliceDoc(head, head + 2) != "</" &&`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 4135: `return doc.line(line + offset.line).from + col + (line == 1 ? offset.col - 1 : -1);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 4141: `to: input.endLine != null && input.endColumn != 1 ? mapPos(input.endLine, input.endColumn, doc, offset) : start,`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 4144: `severity: input.severity == 1 ? "warning" : "error",`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 4296: `return languageDataFacetAt(state, pos, side) == this.data;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 4305: `if ((lang === null || lang === void 0 ? void 0 : lang.data) == this.data)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 4311: `if (tree.prop(languageDataProp) == this.data) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 4317: `if (mount.tree.prop(languageDataProp) == this.data) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 4437: `if (success != syntaxTree(view.state))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 4547: `if (upto != null && upto >= this.state.doc.length)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 4549: `if (this.tree != _lezer_common__WEBPACK_IMPORTED_MODULE_0__.Tree.empty && this.isDone(upto !== null && upto !== void 0 ? upto : this.state.doc.length)) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 4555: `if (typeof until == "number") {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 4561: `if (upto != null && (this.parse.stoppedAt == null || this.parse.stoppedAt > upto) &&`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 4567: `this.fragments = this.withoutTempSkipped(_lezer_common__WEBPACK_IMPORTED_MODULE_0__.TreeFragment.addTree(done, this.fragments, this.parse.stoppedAt != null));`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 4587: `if (this.parse.stoppedAt == null || this.parse.stoppedAt > pos)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 4639: `if (this.viewport.from == viewport.from && this.viewport.to == viewport.to)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 4711: `return this.treeLen >= upto && frags.length && frags[0].from == 0 && frags[0].to >= upto;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 4731: `if (!tr.docChanged && this.tree == this.context.tree)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 4737: `let upto = this.context.treeLen == tr.startState.doc.length ? undefined`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 4757: `if (tr.startState.facet(language) != tr.state.facet(language))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 4766: `if (typeof requestIdleCallback != "undefined")`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 4773: `const isInputPending = typeof navigator != "undefined" && ((_a = navigator.scheduling) === null || _a === void 0 ? void 0 : _a.isInputPending)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 4802: `if (field.tree != field.context.tree || !field.context.isDone(state.doc.length))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 4815: `if (field.tree == field.context.tree && field.context.isDone(vpTo + 100000 /* Work.MaxParseAhead */))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 4981: `if (d.alias.some(a => a == name))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 5026: `return unit.charCodeAt(0) == 9 ? state.tabSize * unit.length : unit.length;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 5036: `if (state.facet(indentUnit).charCodeAt(0) == 9)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 5077: `if (indent == null)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 5083: `if (cur != norm) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 5124: `if (simulateBreak != null && simulateBreak >= line.from && simulateBreak <= line.to) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 5125: `if (simulateDoubleBreak && simulateBreak == pos)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 5139: `if (this.options.simulateDoubleBreak && pos == this.options.simulateBreak)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 5197: `return cx.pos == cx.options.simulateBreak && cx.options.simulateDoubleBreak;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 5208: `return tree.parent == null ? topIndent : null;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 5264: `while (atBreak.parent && atBreak.parent.from == atBreak.from)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 5283: `if (parent == cur)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 5297: `let lineEnd = sim == null || sim <= openLine.from ? openLine.to : Math.min(openLine.to, sim);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 5300: `if (!next || next == last)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 5323: `let closed = closing && after.slice(space, space + closing.length) == closing || closedAt == context.pos + space;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 5378: `if (line.from == last)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 5382: `if (indent == null)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 5386: `if (cur != norm)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 5428: `if (prop && (cur.to < tree.length - 50 || tree.length == state.doc.length || !isUnfinished(cur))) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 5438: `return ch && ch.to == node.to && ch.type.isError;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 5498: `folded = folded.update({ filter: (from, to) => e.value.from != from || e.value.to != to,`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 5527: `if (typeof from != "number" || typeof to != "number")`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 5552: `folded.between(from, from, (a, b) => { if (a == from && b == to)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 5689: `eq(other) { return this.config == other.config && this.open == other.open; }`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 5714: `update.startState.facet(language) != update.state.facet(language) ||`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 5715: `update.startState.field(foldState, false) != update.state.field(foldState, false) ||`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 5716: `syntaxTree(update.startState) != syntaxTree(update.state) ||`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 5792: `const all = typeof options.all == "string" ? options.all : options.all ? def(options.all) : undefined;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 5794: `this.scope = scopeOpt instanceof Language ? (type) => type.prop(languageDataProp) == scopeOpt.data`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 5795: `: scopeOpt ? (type) => type == scopeOpt : undefined;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 5850: `return state.facet(_codemirror_view__WEBPACK_IMPORTED_MODULE_4__.EditorView.darkTheme) == (themeType == "dark") ? [highlighter] : [];`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 5884: `let styleChange = highlighters != getHighlighters(update.startState);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 5885: `if (tree.length < update.view.viewport.to && !styleChange && tree.type == this.tree.type) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 5888: `else if (tree != this.tree || update.viewportChanged || styleChange) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 6025: `if (node.name.length == 1) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 6027: `if (index > -1 && index % 2 == (dir < 0 ? 1 : 0))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 6061: `if (depth == 0 && matching.indexOf(cursor.type.name) > -1 && cursor.from < cursor.to) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 6069: `if (depth == 0) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 6086: `if (bracket < 0 || (bracket % 2 == 0) != (dir > 0))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 6095: `for (let pos = dir > 0 ? 0 : text.length - 1, end = dir > 0 ? text.length : -1; pos != end; pos += dir) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 6097: `if (found < 0 || tree.resolveInner(basePos + pos, 1).type != tokenType)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 6099: `if ((found % 2 == 0) == (dir > 0)) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 6102: `else if (depth == 1) { // Closing`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 6103: `return { start: startToken, end: { from: basePos + pos, to: basePos + pos + 1 }, matched: (found >> 1) == (bracket >> 1) };`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 6118: `if (end == null) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 6120: `if (end == -1)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 6125: `if (string.charCodeAt(i) == 9)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 6170: `sol() { return this.pos == 0; }`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 6190: `if (typeof match == "string")`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 6191: `ok = ch == match;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 6266: `if (typeof pattern == "string") {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 6269: `if (cased(substr) == cased(pattern)) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 6305: `if (typeof state != "object")`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 6340: `while (at && at.type != this.topNode)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 6365: `if (end == pos)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 6389: `if (!inside && tree.type == lang.topNode)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 6441: `let parseEnd = this.stoppedAt == null ? this.to : Math.min(this.to, this.stoppedAt);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 6467: `else if (chunk == "\n") {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 6480: `if (index == this.ranges.length)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 6608: `else if (typeof value == "function") {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 6690: `return d.from == d.to || (d.from == d.to - 1 && state.doc.lineAt(d.from).to == d.from)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 6706: `if (diagnostic && spec.diagnostic != diagnostic)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 6721: `return !selected || !panel || selected.from == selected.to ? _codemirror_view__WEBPACK_IMPORTED_MODULE_1__.Decoration.none : _codemirror_view__WEBPACK_IMPORTED_MODULE_1__.Decoration.set([`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 6788: `(from == to || ((pos > from || side > 0) && (pos < to || side < 0)))) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 6843: `if (!next.value || next.from == sel.from && next.to == sel.to)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 6879: `if (this.view.state.doc == state.doc)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 6886: `if (update.docChanged || config != update.startState.facet(lintConfig)) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 6937: `if (/[a-zA-Z]/.test(ch) && !assigned.some(c => c.toLowerCase() == ch.toLowerCase())) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 6974: `eq(other) { return other.diagnostic == this.diagnostic; }`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 6993: `if (event.keyCode == 27) { // Escape`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 6997: `else if (event.keyCode == 38 || event.keyCode == 33) { // ArrowUp, PageUp`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 7000: `else if (event.keyCode == 40 || event.keyCode == 34) { // ArrowDown, PageDown`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 7003: `else if (event.keyCode == 36) { // Home`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 7006: `else if (event.keyCode == 35) { // End`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 7009: `else if (event.keyCode == 13) { // Enter`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 7015: `if (keys[i].toUpperCase().charCodeAt(0) == event.keyCode) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 7052: `if (this.items[i].diagnostic == selected.diagnostic)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 7062: `if (this.items[j].diagnostic == spec.diagnostic) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 7078: `if (selected && item.diagnostic == selected.diagnostic) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 7089: `while (i < this.items.length && !(this.items.length == 1 && this.items[0].diagnostic.from < 0)) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 7093: `if (this.items.length == 0) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 7128: `if (item.dom.parentNode == this.list) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 7129: `while (domPos != item.dom)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 7252: `return s == "error" || s == "warning" && max == "info" ? s : max;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 7274: `if (target.nodeType == 1 && target.classList.contains("cm-tooltip-lint"))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 7449: `const basicNormalize = typeof String.prototype.normalize == "function"`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 7490: `if (this.bufferPos == this.buffer.length) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 7533: `if (i == norm.length - 1)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 7535: `if (pos == start && i < str.length && str.charCodeAt(i) == code)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 7544: `if (this.query.charCodeAt(index) == code) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 7545: `if (index == this.query.length - 1) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 7558: `if (this.query.charCodeAt(0) == code) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 7559: `if (this.query.length == 1)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 7569: `if (typeof Symbol != "undefined")`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 7573: `const baseFlags = "gm" + (/x/.unicode == null ? "" : "u");`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 7638: `this.matchPos = toCharEnd(this.text, to + (from == to ? 1 : 0));`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 7639: `if (from == this.curLineStart + this.curLine.length)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 7673: `if (cached.from == from && cached.to == to)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 7705: `if (match && !match[0] && match.index == off) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 7716: `this.matchPos = toCharEnd(this.text, to + (from == to ? 1 : 0));`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 7720: `if (this.flat.to == this.to) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 7729: `if (typeof Symbol != "undefined") {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 7756: `if (event.keyCode == 27) { // Escape`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 7761: `else if (event.keyCode == 13) { // Enter`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 7782: `pc = pc * (sign == "-" ? -1 : 1) + (startLine.number / state.doc.lines);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 7786: `line = line * (sign == "-" ? -1 : 1) + startLine.number;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 7825: `if (view.state.field(dialogField, false) == null)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 7872: `return (from == 0 || check(state.sliceDoc(from - 1, from)) != _codemirror_state__WEBPACK_IMPORTED_MODULE_1__.CharCategory.Word) &&`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 7873: `(to == state.doc.length || check(state.sliceDoc(to, to + 1)) != _codemirror_state__WEBPACK_IMPORTED_MODULE_1__.CharCategory.Word);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 7877: `return check(state.sliceDoc(from, from + 1)) == _codemirror_state__WEBPACK_IMPORTED_MODULE_1__.CharCategory.Word`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 7878: `&& check(state.sliceDoc(to - 1, to)) == _codemirror_state__WEBPACK_IMPORTED_MODULE_1__.CharCategory.Word;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 7957: `let word = state.wordAt(main.head), fullWord = word && word.from == main.from && word.to == main.to;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 7967: `if (cycled && ranges.some(r => r.from == cursor.value.from))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 7971: `if (!word || word.from != cursor.value.from || word.to != cursor.value.to)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 7987: `if (state.selection.ranges.some(r => state.sliceDoc(r.from, r.to) != searchedText))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 8041: `text.replace(/\\([nrt\\])/g, (_, ch) => ch == "n" ? "\n" : ch == "r" ? "\r" : ch == "t" ? "\t" : "\\");`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 8047: `return this.search == other.search && this.replace == other.replace &&`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 8048: `this.caseSensitive == other.caseSensitive && this.regexp == other.regexp &&`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 8049: `this.wholeWord == other.wholeWord;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 8063: `if (to == null)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 8082: `return (categorizer(charBefore(buf, from - bufPos)) != _codemirror_state__WEBPACK_IMPORTED_MODULE_1__.CharCategory.Word ||`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 8083: `categorizer(charAfter(buf, from - bufPos)) != _codemirror_state__WEBPACK_IMPORTED_MODULE_1__.CharCategory.Word) &&`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 8084: `(categorizer(charAfter(buf, to - bufPos)) != _codemirror_state__WEBPACK_IMPORTED_MODULE_1__.CharCategory.Word ||`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 8085: `categorizer(charBefore(buf, to - bufPos)) != _codemirror_state__WEBPACK_IMPORTED_MODULE_1__.CharCategory.Word);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 8108: `if (start == from)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 8147: `(categorizer(charBefore(match.input, match.index)) != _codemirror_state__WEBPACK_IMPORTED_MODULE_1__.CharCategory.Word ||`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 8148: `categorizer(charAfter(match.input, match.index)) != _codemirror_state__WEBPACK_IMPORTED_MODULE_1__.CharCategory.Word) &&`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 8149: `(categorizer(charAfter(match.input, match.index + match[0].length)) != _codemirror_state__WEBPACK_IMPORTED_MODULE_1__.CharCategory.Word ||`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 8150: `categorizer(charBefore(match.input, match.index + match[0].length)) != _codemirror_state__WEBPACK_IMPORTED_MODULE_1__.CharCategory.Word);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 8165: `if (range && (start == from || range.from > start + 10))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 8167: `if (start == from)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 8176: `return this.spec.unquote(this.spec.replace.replace(/\$([$&\d+])/g, (m, i) => i == "$" ? "$"`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 8177: `: i == "&" ? result.match[0]`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 8178: `: i != "0" && +i < result.match.length ? result.match[i]`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 8232: `return ((_a = state.field(searchState, false)) === null || _a === void 0 ? void 0 : _a.panel) != null;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 8248: `if (state != update.startState.field(searchState) || update.docChanged || update.selectionSet || update.viewportChanged)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 8261: `let selected = view.state.selection.ranges.some(r => r.from == from && r.to == to);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 8338: `if (cur.value.from == from)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 8360: `if (next.from == from && next.to == to) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 8367: `let off = changes.length == 0 || changes[0].from >= next.to ? 0 : next.to - next.from - replacement.length;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 8427: `if (searchInput && searchInput != view.root.activeElement) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 8563: `else if (e.keyCode == 13 && e.target == this.searchField) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 8567: `else if (e.keyCode == 13 && e.target == this.replaceField) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 8600: `if (start != line.from) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 8607: `if (end != lineEnd) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 8748: `if (other == this)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 8750: `if (other.length != this.length || other.lines != this.lines)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 8758: `if (a.lineBreak != b.lineBreak || a.done != b.done || a.value != b.value)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 8785: `if (from == null) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 8789: `if (to == null)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 8792: `inner = this.iterRange(start, Math.max(start, to == this.lines + 1 ? this.length : to <= 1 ? 0 : this.line(to - 1).to));`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 8813: `if (text.length == 0)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 8815: `if (text.length == 1 && !text[0])`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 8889: `if (part.length == 32 /* Tree.Branch */) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 8980: `if (iA == eA || iB == eB)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 8983: `if (chA != chB)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 9026: `if (currentLines == 0)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 9028: `chunked.push(currentChunk.length == 1 ? currentChunk[0] : TextNode.from(currentChunk, currentLen));`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 9035: `return chunked.length == 1 ? chunked[0] : new TextNode(chunked, length);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 9082: `if (offset == (dir > 0 ? size : 0)) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 9083: `if (last == 0) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 9093: `else if ((offsetValue & 1) == (dir > 0 ? 0 : 1)) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 9095: `if (skip == 0) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 9107: `this.value = skip == 0 ? next : dir > 0 ? next.slice(skip) : next.slice(0, next.length - skip);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 9168: `get lineBreak() { return this.cursor.lineBreak && this.value != ""; }`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 9200: `if (typeof Symbol != "undefined") {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 9274: `if (pos == str.length)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 9283: `if (prev == ZWJ || next == ZWJ || includeExtending && isExtendingChar(next)) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 9293: `if (countBefore % 2 == 0)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 9322: `if (!surrogateHigh(code0) || pos + 1 == str.length)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 9412: `get empty() { return this.sections.length == 0 || this.sections.length == 2 && this.sections[1] < 0; }`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 9483: `if (mode != MapMode.Simple && endA >= pos &&`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 9484: `(mode == MapMode.TrackDel && posA < pos && endA > pos ||`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 9485: `mode == MapMode.TrackBefore && posA < pos ||`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 9486: `mode == MapMode.TrackAfter && endA > pos))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 9488: `if (endA > pos || endA == pos && assoc < 0 && !len)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 9489: `return pos == posA || assoc < 0 ? posB : posB + ins;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 9532: `if (!Array.isArray(json) || json.length % 2 || json.some(a => typeof a != "number"))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 9560: `if (this.length != doc.length)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 9633: `let next = i == ranges.length ? 1e9 : ranges[i++];`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 9634: `while (pos < next || pos == next && iter.len == 0) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 9639: `let ins = iter.ins == -1 ? -1 : iter.off == 0 ? iter.ins : 0;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 9652: `addSection(filteredSections, len, iter.ins == -1 ? -1 : iter.off == 0 ? iter.ins : 0);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 9669: `else if (ins == 0)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 9700: `if (spec.length != length)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 9709: `let insText = !insert ? Text.empty : typeof insert == "string" ? Text.of(insert.split(lineSep || DefaultSplit)) : insert;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 9711: `if (from == to && insLen == 0)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 9742: `if (typeof part == "number") {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 9745: `else if (!Array.isArray(part) || typeof part[0] != "number" || part.some((e, i) => i && typeof e != "string")) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 9748: `else if (part.length == 1) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 9768: `if (len == 0 && ins <= 0)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 9771: `if (last >= 0 && ins <= 0 && ins == sections[last + 1])`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 9773: `else if (len == 0 && sections[last] == 0)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 9783: `if (value.length == 0)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 9810: `if (individual || i == desc.sections.length || desc.sections[i + 1] < 0)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 9831: `if (a.ins == -1 && b.ins == -1) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 9838: `else if (b.ins >= 0 && (a.ins < 0 || inserted == a.i || a.off == 0 && (b.len < a.len || b.len == a.len && !before))) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 9862: `if (b.ins == -1) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 9868: `else if (b.ins == 0 && b.len < left) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 9898: `else if (a.ins == 0) { // Deletion in A`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 9902: `else if (b.len == 0 && !b.done) { // Insertion in B`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 9913: `if (a.ins == -1) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 9914: `let insB = b.ins == -1 ? -1 : b.off ? 0 : b.ins;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 9919: `else if (b.ins == -1) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 9953: `get done() { return this.ins == -2; }`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 9962: `: inserted[index].slice(this.off, len == null ? undefined : this.off + len);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 9965: `if (len == this.len)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 9973: `if (this.ins == -1)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 9975: `else if (len == this.ins)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 10017: `get empty() { return this.from == this.to; }`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 10031: `return level == 3 ? null : level;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 10041: `return value == 33554431 /* RangeFlag.NoGoalColumn */ ? undefined : value;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 10056: `return from == this.from && to == this.to ? this : new SelectionRange(from, to, this.flags);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 10071: `return this.anchor == other.anchor && this.head == other.head;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 10082: `if (!json || typeof json.anchor != "number" || typeof json.head != "number")`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 10124: `if (this.ranges.length != other.ranges.length ||`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 10125: `this.mainIndex != other.mainIndex)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 10143: `return this.ranges.length == 1 ? this : new EditorSelection([this.main], 0);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 10171: `if (!json || !Array.isArray(json.ranges) || typeof json.main != "number" || json.main >= json.ranges.length)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 10186: `if (ranges.length == 0)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 10201: `return SelectionRange.create(pos, pos, (assoc == 0 ? 0 : assoc < 0 ? 4 /* RangeFlag.AssocBefore */ : 8 /* RangeFlag.AssocAfter */) |`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 10202: `(bidiLevel == null ? 3 : Math.min(2, bidiLevel)) |`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 10210: `(bidiLevel == null ? 3 : Math.min(2, bidiLevel));`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 10273: `this.extensions = typeof enables == "function" ? enables(this) : enables;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 10317: `return a == b || a.length == b.length && a.every((e, i) => e === b[i]);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 10331: `let id = this.id, idx = addresses[id] >> 1, multi = this.type == 2 /* Provider.Multi */;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 10334: `if (dep == "doc")`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 10336: `else if (dep == "selection")`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 10338: `else if ((((_a = addresses[dep.id]) !== null && _a !== void 0 ? _a : 1) & 1) == 0)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 10358: `if (oldAddr != null) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 10362: `dep instanceof StateField ? oldState.field(dep, false) == state.field(dep, false) : true;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 10378: `if (a.length != b.length)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 10401: `if (providerTypes[i] == 2 /* Provider.Multi */)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 10477: `let init = state.facet(initField).find(i => i.field == this);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 10499: `if (oldState.config.address[this.id] != null) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 10617: `return addr == null ? facet.default : this.staticValues[addr >> 1];`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 10640: `if (providers.every(p => p.type == 0 /* Provider.Static */)) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 10652: `if (p.type == 0 /* Provider.Static */) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 10674: `if (known != null) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 10723: `if (status == 4 /* SlotStatus.Computing */)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 10844: `return mapped === undefined ? undefined : mapped == this.value ? this : new StateEffect(this.type, mapped);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 10850: `is(type) { return this.type == type; }`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 10938: `if (!annotations.some((a) => a.type == Transaction.time))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 10983: `if (ann.type == type)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 10997: `get reconfigured() { return this.startState.config != this.state.config; }`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 11007: `return !!(e && (e == event || e.length > event.length && e.slice(0, event.length) == event && e[event.length] == "."));`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 11058: `if (iA < a.length && (iB == b.length || b[iB] >= a[iA])) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 11154: `else if (Array.isArray(filtered) && filtered.length == 1 && filtered[0] instanceof Transaction)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 11168: `return spec == tr ? tr : Transaction.create(state, tr.changes, tr.selection, spec.effects, spec.annotations, spec.scrollIntoView);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 11172: `return value == null ? none : Array.isArray(value) ? value : [value];`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 11205: `if (/\w/.test(ch) || ch > "\x80" && (ch.toUpperCase() != ch.toLowerCase() || nonASCIISingleCaseWordChar.test(ch)))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 11266: `if (addr == null) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 11331: `if (typeof text == "string")`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 11397: `if (addr == null)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 11416: `if (value instanceof StateField && this.config.address[value.id] != null)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 11428: `if (!json || typeof json.doc != "string")`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 11494: `if (i == "$")`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 11553: `if (cat(text.slice(prev, start)) != CharCategory.Word)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 11559: `if (cat(text.slice(end, next)) != CharCategory.Word)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 11563: `return start == end ? null : EditorSelection.range(start + from, end + from);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 11616: `return kA.length == kB.length && kA.every(k => a[k] == b[k]);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 11716: `eq(other) { return this == other; }`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 11770: `// 'from' pos when 'end == false', 'to' when 'end == true'.`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 11774: `if (lo == hi)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 11778: `if (mid == lo)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 11795: `if (curFrom == curTo) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 11797: `if (mapped == null)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 11800: `if (val.startSide != val.endSide) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 11809: `if (newFrom > newTo || newFrom == newTo && val.startSide > 0 && val.endSide <= 0)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 11896: `if (add.length == 0 && !filter)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 11910: `else if (cur.rangeIndex == 1 && cur.chunkIndex < this.chunk.length &&`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 11911: `(i == add.length || this.chunkEnd(cur.chunkIndex) < add[i].from) &&`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 11952: `return chunks.length == 0 ? next : new RangeSet(chunkPos, chunks, next || RangeSet.empty, maxPoint);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 11981: `get isEmpty() { return this.nextLayer == this; }`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 12011: `if (textDiff.empty && textDiff.length == 0)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 12019: `if (to == null)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 12023: `if (a.length != b.length)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 12030: `if (sideA.to != sideB.to ||`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 12154: `if (this.from.length == 250 /* C.ChunkSize */)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 12196: `if (this.chunks.length == 0)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 12213: `if (known != null && (textDiff ? textDiff.mapPos(known) : known) == set.chunkPos[i] &&`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 12256: `if (this.chunkIndex == this.layer.chunk.length) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 12274: `if (index == this.layer.chunk[this.chunkIndex].value.length) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 12308: `return heap.length == 1 ? heap[0] : new HeapCursor(heap);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 12328: `if (this.heap.length == 0) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 12412: `// After calling this, if 'this.point' != null, the next range is a`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 12445: `else if (wasPoint && this.cursor.to == this.to && this.cursor.from < this.cursor.to) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 12474: `if (this.activeTo[i] > to || this.activeTo[i] == to && this.active[i].endSide >= this.point.endSide)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 12495: `if (!(a.point && b.point && (a.point == b.point || a.point.eq(b.point)) &&`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 12513: `if (a.length != b.length)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 12516: `if (a[i] != b[i] && !a[i].eq(b[i]))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 12547: `if (string.charCodeAt(i) == 9) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 12569: `if (i == string.length)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 12571: `n += string.charCodeAt(i) == 9 ? tabSize - (n % tabSize) : 1;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 12646: `if (root.nodeType == 11) { // Shadow root`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 12655: `return node ? dom == node || dom.contains(node.nodeType != 1 ? node.parentNode : node) : false;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 12677: `if (dom.nodeType == 3)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 12679: `else if (dom.nodeType == 1)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 12700: `if (node == targetNode && off == targetOff)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 12702: `if (off == (dir < 0 ? 0 : maxOffset(node))) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 12703: `if (node.nodeName == "DIV")`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 12706: `if (!parent || parent.nodeType != 1)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 12711: `else if (node.nodeType == 1) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 12713: `if (node.nodeType == 1 && node.contentEditable == "false")`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 12723: `return node.nodeType == 3 ? node.nodeValue.length : node.childNodes.length;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 12737: `if (cur.nodeType == 1) { // Element`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 12738: `let bounding, top = cur == doc.body;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 12753: `if (y == "nearest") {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 12767: `let targetTop = y == "center" && rectHeight <= boundingHeight ? rect.top + rectHeight / 2 - boundingHeight / 2 :`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 12768: `y == "start" || y == "center" && side < 0 ? rect.top - yMargin :`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 12772: `if (x == "nearest") {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 12785: `let targetLeft = x == "center" ? rect.left + (rect.right - rect.left) / 2 - (bounding.right - bounding.left) / 2 :`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 12786: `(x == "start") == ltr ? rect.left - xMargin :`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 12818: `else if (cur.nodeType == 11) { // A shadow root`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 12829: `if (cur == doc.body) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 12832: `else if (cur.nodeType == 1) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 12837: `else if (cur.nodeType == 11) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 12854: `return this.anchorNode == domSel.anchorNode && this.anchorOffset == domSel.anchorOffset &&`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 12855: `this.focusNode == domSel.focusNode && this.focusOffset == domSel.focusOffset;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 12878: `if (cur == cur.ownerDocument)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 12881: `dom.focus(preventScrollSupported == null ? {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 12891: `if (elt.scrollTop != top)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 12893: `if (elt.scrollLeft != left)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 12917: `if (node && (node.nodeType == 9 || node.nodeType == 11 && node.host))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 12929: `if (!node || selection.anchorNode != node || selection.anchorOffset != offset)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 12933: `if (node.nodeType != 1)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 12936: `if (prev.contentEditable == "false")`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 12943: `else if (node == doc) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 12984: `if (child == view)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 13012: `if (track && !track.written && track.node == parent && next != child.dom)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 13014: `if (child.dom.parentNode == parent) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 13015: `while (next && next != child.dom)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 13024: `if (next && track && track.node == parent)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 13040: `if (node == this.dom) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 13044: `let bias = maxOffset(node) == 0 ? 0 : offset == 0 ? -1 : 1;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 13047: `if (parent == this.dom)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 13049: `if (bias == 0 && parent.firstChild != parent.lastChild) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 13050: `if (node == parent.firstChild)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 13062: `if (after == this.dom.firstChild)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 13070: `if (child.dom == after)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 13081: `if (end >= from && fromI == -1) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 13085: `if (pos > to && child.dom.parentNode == this.dom) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 13112: `if (this.parent != parent) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 13136: `if (child.parent == this)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 13154: `this.length ? "[" + (name == "Text" ? this.text : this.length) + "]" : "") +`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 13163: `canReuseDOM(other) { return other.constructor == this.constructor; }`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 13188: `if (pos > this.pos || pos == this.pos &&`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 13189: `(bias > 0 || this.i == 0 || this.children[this.i - 1].breakAfter)) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 13204: `if (fromI == toI && before && !breakAtStart && !breakAtEnd && insert.length < 2 &&`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 13205: `before.merge(fromOff, toOff, insert.length ? last : null, fromOff == 0, openStart, openEnd))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 13213: `if (fromI == toI) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 13248: `else if (fromOff < before.length || before.children.length && before.children[before.children.length - 1].length == 0) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 13287: `let nav = typeof navigator != "undefined" ? navigator : { userAgent: "", vendor: "", platform: "" };`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 13288: `let doc = typeof document != "undefined" ? document : { documentElement: { style: {} } };`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 13313: `tabSize: doc.documentElement.style.tabSize != null ? "tab-size" : "-moz-tab-size"`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 13329: `if (this.dom.nodeValue != this.text) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 13330: `if (track && track.node == this.dom)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 13336: `if (dom.nodeType == 3)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 13353: `return node == this.dom ? offset : offset ? this.text.length : 0;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 13382: `if (node.nodeName == this.mark.tagName.toUpperCase()) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 13433: `if (pos == 0 && side < 0 || pos == length && side >= 0) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 13455: `if (browser.safari && !flatten && rect.width == 0)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 13494: `if (other.length == this.length && other instanceof WidgetView && other.side == this.side) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 13495: `if (this.widget.constructor == other.widget.constructor) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 13509: `if (this.length == 0)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 13518: `return pos == 0 ? DOMPos.before(this.dom) : DOMPos.after(this.dom, pos == this.length);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 13527: `if (pos > 0 ? i == 0 : i == rects.length - 1 || rect.top < rect.bottom)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 13580: `if (pos < len || pos == len && desc.getSide() <= 0)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 13586: `else if (view.dom == text) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 13602: `else if (view.dom == text) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 13618: `return other instanceof WidgetBufferView && other.side == this.side;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 13664: `if (last && last.nodeName == "BR")`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 13675: `if (end == off && child.getSide() <= 0)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 13677: `if (pos > off && pos < end && child.dom.parentNode == dom)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 13685: `if (prev.dom.parentNode == dom)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 13690: `if (next.dom.parentNode == dom)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 13717: `else if (!after && (end > pos || off == end && child.getSide() > 0)) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 13721: `else if (off < pos || (off == end && child.getSide() < 0)) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 13732: `return target.coordsAt(Math.max(0, target == before ? beforePos : afterPos), side);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 13745: `if (name == "class" && target.class)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 13747: `else if (name == "style" && target.style)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 13755: `if (a == b)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 13760: `if (keysA.length != keysB.length)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 13763: `if (keysB.indexOf(key) == -1 || a[key] !== b[key])`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 13776: `if (!(prev && prev[name] == attrs[name]))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 13811: `return this == other || this.constructor == other.constructor && this.eq(other);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 13964: `return this == other ||`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 13966: `this.tagName == other.tagName &&`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 13967: `this.class == other.class &&`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 13983: `this.spec.class == other.spec.class &&`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 13987: `if (to != from)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 14001: `// Only relevant when this.block == true`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 14010: `this.block == other.block &&`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 14011: `this.startSide == other.startSide && this.endSide == other.endSide;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 14014: `if (this.isReplace && (from > to || (from == to && this.startSide > 0 && this.endSide <= 0)))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 14016: `if (!this.isReplace && to != from)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 14024: `if (start == null)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 14026: `if (end == null)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 14031: `return a == b || !!(a && b && a.compare(b));`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 14066: `if (this.length == 0)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 14076: `while (i > 0 && this.children[i - 1].length == 0)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 14116: `if (node.nodeName == "DIV") {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 14143: `last.nodeName != "BR" && ((_a = ContentView.get(last)) === null || _a === void 0 ? void 0 : _a.isEditable) == false &&`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 14151: `if (this.children.length == 0 || this.length > 20)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 14158: `if (rects.length != 1)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 14203: `return pos == 0 ? DOMPos.before(this.dom) : DOMPos.after(this.dom, pos == this.length);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 14227: `if (other instanceof BlockWidgetView && other.type == this.type &&`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 14228: `other.widget.constructor == this.widget.constructor) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 14270: `if (this.content.length == 0)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 14271: `return !this.breakAtStart && this.doc.lineAt(this.pos).from != this.pos;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 14273: `return !last.breakAfter && !(last instanceof BlockWidgetView && last.type == BlockType.WidgetBefore);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 14303: `if (this.textOff == this.text.length) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 14352: `if (type == BlockType.WidgetAfter && !this.posCovered())`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 14361: `if (this.pendingBuffer == 2 /* Buf.IfCursor */ && !cursorBefore)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 14375: `else if (this.doc.lineAt(this.pos).from == this.pos) { // Line decoration`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 14412: `eq(other) { return other.tag == this.tag; }`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 14414: `updateDOM(elt) { return elt.nodeName.toLowerCase() == this.tag; }`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 14609: `if (ranges.length == 0)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 14613: `let next = dI == diff.length ? null : diff[dI], off = posA - posB;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 14666: `if (focus != view.inputState.notifiedFocused) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 14720: `get empty() { return this.flags == 0 && this.transactions.length == 0; }`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 14766: `ch == 0x200c ? 256 /* T.NI */ : 1 /* T.L */;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 14805: `side(end, dir) { return (this.dir == dir) == end ? this.to : this.from; }`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 14814: `if (span.level == level)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 14816: `// When multiple spans match, if assoc != 0, take the one that`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 14819: `if (maybe < 0 || (assoc != 0 ? (assoc < 0 ? span.from < index : span.to > index) : order[maybe].level > span.level))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 14831: `let len = line.length, outerType = direction == LTR ? 1 /* T.L */ : 2 /* T.R */, oppositeType = direction == LTR ? 2 /* T.R */ : 1 /* T.L */;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 14832: `if (!line || outerType == 1 /* T.L */ && !BidiRE.test(line))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 14846: `if (type == 512 /* T.NSM */)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 14848: `else if (type == 8 /* T.EN */ && prevStrong == 4 /* T.AL */)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 14850: `types[i] = type == 4 /* T.AL */ ? 2 /* T.R */ : type;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 14865: `if (type == 128 /* T.CS */) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 14866: `if (i < len - 1 && prev == types[i + 1] && (prev & 24 /* T.Num */))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 14871: `else if (type == 64 /* T.ET */) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 14873: `while (end < len && types[end] == 64 /* T.ET */)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 14875: `let replace = (i && prev == 8 /* T.EN */) || (end < len && types[end] == 8 /* T.EN */) ? (prevStrong == 1 /* T.L */ ? 1 /* T.L */ : 8 /* T.EN */) : 256 /* T.NI */;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 14880: `else if (type == 8 /* T.EN */ && prevStrong == 1 /* T.L */) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 14897: `if (BracketStack[sJ + 1] == -br) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 14909: `else if (BracketStack.length == 189 /* Bracketed.MaxDepth */) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 14918: `else if ((type = types[i]) == 2 /* T.R */ || type == 1 /* T.L */) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 14919: `let embed = type == outerType;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 14944: `if (types[i] == 256 /* T.NI */) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 14946: `while (end < len && types[end] == 256 /* T.NI */)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 14948: `let beforeL = (i ? types[i - 1] : outerType) == 1 /* T.L */;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 14949: `let afterL = (end < len ? types[end] : outerType) == 1 /* T.L */;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 14950: `let replace = beforeL == afterL ? (beforeL ? 1 /* T.L */ : 2 /* T.R */) : outerType;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 14962: `if (outerType == 1 /* T.L */) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 14964: `let start = i, rtl = types[i++] != 1 /* T.L */;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 14965: `while (i < len && rtl == (types[i] != 1 /* T.L */))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 14969: `let end = j, l = types[--j] != 2 /* T.R */;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 14970: `while (j > start && l == (types[j - 1] != 2 /* T.R */))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 14982: `let start = i, rtl = types[i++] == 2 /* T.R */;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 14983: `while (i < len && rtl == (types[i] == 2 /* T.R */))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 14997: `if (startIndex == 0) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15000: `if (order[0].level != dir) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15005: `else if (startIndex == line.length) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15009: `if (last.level != dir) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15018: `if (startIndex == span.side(forward, dir)) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15022: `let indexForward = forward == (span.dir == dir);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15025: `if (nextIndex != span.side(forward, dir))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15027: `let nextSpan = spanI == (forward ? order.length - 1 : 0) ? null : order[spanI + (forward ? 1 : -1)];`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15028: `if (!nextSpan && span.level != dir)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15056: `if (next == end)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15061: `(isBlockElement(next) && (cur.nodeName != "BR" || cur.cmIgnore)))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15071: `if (point.node == node)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15089: `if (point.node == node && point.pos > this.text.length)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15099: `if (fromView != null) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15108: `else if (node.nodeType == 3) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15111: `else if (node.nodeName == "BR") {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15115: `else if (node.nodeType == 1) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15121: `if (point.node == node && node.childNodes[point.offset] == next)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15126: `if (node.nodeType == 3 ? point.node == node : node.contains(point.node))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15131: `return node.nodeType == 1 && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(node.nodeName);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15199: `update.state.doc.lines != update.startState.doc.lines)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15204: `if (this.dirty == 0 /* Dirty.Not */ && changedRanges.length == 0) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15234: `if (track && (track.written || observer.selectionRange.focusNode != track.node))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15299: `if (nextTo && nextTo != (1 /* NextTo.Before */ | 2 /* NextTo.After */)) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15300: `let text = nearbyTextNode(anchor.node, anchor.offset, nextTo == 1 /* NextTo.Before */ ? 1 : -1);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15302: `anchor = new DOMPos(text, nextTo == 1 /* NextTo.Before */ ? 0 : text.nodeValue.length);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15306: `if (main.bidiLevel != null && domSel.cursorBidiLevel != null)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15350: `if (cursor.head == lineStart || cursor.head == lineStart + line.length)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15362: `if (view.docView.posFromDOM(newRange.anchorNode, newRange.anchorOffset) != cursor.from)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15367: `return active == this.dom ||`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15373: `if (domView && domView.rootView == this)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15400: `(pos == start && child.type != BlockType.WidgetBefore && child.type != BlockType.WidgetAfter &&`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15401: `(!i || side == 2 || this.children[i - 1].breakAfter ||`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15402: `(this.children[i - 1].type == BlockType.WidgetBefore && side > -2))))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15411: `let widest = -1, ltr = this.view.textDirection == Direction.LTR;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15440: `return getComputedStyle(this.children[i].dom).direction == "rtl" ? Direction.RTL : Direction.LTR;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15476: `let next = i == vs.viewports.length ? null : vs.viewports[i];`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15495: `let dynamic = this.dynamicDecorationMap[i] = typeof d == "function";`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15519: `if (left != null)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15521: `if (right != null)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15523: `if (top != null)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15525: `if (bottom != null)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15532: `scrollRectIntoView(this.view.scrollDOM, targetRect, range.head < range.anchor ? -1 : 1, target.x, target.y, target.xMargin, target.yMargin, this.view.textDirection == Direction.LTR);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15536: `return pos.node.nodeType == 1 && pos.node.firstChild &&`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15537: `(pos.offset == 0 || pos.node.childNodes[pos.offset - 1].contentEditable == "false") &&`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15538: `(pos.offset == pos.node.childNodes.length || pos.node.childNodes[pos.offset].contentEditable == "false");`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15550: `eq(other) { return other.height == this.height; }`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15567: `while (topNode.parentNode != cView.dom)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15594: `let { state } = view, text = node.nodeType == 3 ? node.nodeValue :`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15597: `if (state.doc.sliceString(newFrom, Math.min(state.doc.length, newFrom + text.length), LineBreakPlaceholder) == text)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15599: `else if (state.doc.sliceString(Math.max(0, newTo - text.length), newTo, LineBreakPlaceholder) == text)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15604: `else if (state.doc.sliceString(newFrom, newTo, LineBreakPlaceholder) != text) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15622: `eq(other) { return this.top == other.top && this.text == other.text; }`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15629: `if (node.nodeType == 3)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15631: `if (node.nodeType == 1 && offset > 0 && side <= 0) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15635: `else if (node.nodeType == 1 && offset < node.childNodes.length && side >= 0) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15645: `if (node.nodeType != 1)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15647: `return (offset && node.childNodes[offset - 1].contentEditable == "false" ? 1 /* NextTo.Before */ : 0) |`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15648: `(offset < node.childNodes.length && node.childNodes[offset].contentEditable == "false" ? 2 /* NextTo.After */ : 0);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15663: `for (let cur = node; cur && cur != inside; cur = cur.assignedSlot || cur.parentNode) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15664: `if (cur.nodeType == 1 && cur.contentEditable == 'false') {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15674: `if (line.length == 0)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15676: `if (linePos == 0)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15678: `else if (linePos == line.length)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15688: `if (categorize(line.text.slice(prev, from)) != cat)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15694: `if (categorize(line.text.slice(to, next)) != cat)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15728: `if (dx == 0 && dy == 0)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15729: `return child.nodeType == 3 ? domPosInText(child, x, y) : domPosAtCoords(child, x, y);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15730: `if (!closest || closestY > dy || closestY == dy && closestX > dx) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15738: `if (dx == 0) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15767: `if (closest.nodeType == 3)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15769: `if (closestOverlap && closest.contentEditable != "false")`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15782: `if (rect.top == rect.bottom)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15793: `if (rectBefore.left == rect.right)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15817: `if (block.type == BlockType.Text)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15836: `return view.viewport.from == 0 ? 0 : precise ? null : posAtCoordsImprecise(view, content, block, x, y);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15838: `return view.viewport.to == view.state.doc.length ? view.state.doc.length :`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15856: `if (element && ((_a = view.docView.nearest(element)) === null || _a === void 0 ? void 0 : _a.isEditable) != false) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15897: `if (node.nodeType != 3 || offset != (len = node.nodeValue.length))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15900: `if (next.nodeType != 1 || next.nodeName != "BR")`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15906: `if (offset != 0)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15910: `if (!parent || parent.nodeType != 1 || parent.firstChild != cur)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15916: `let rect = node.nodeType == 1 ? node.getBoundingClientRect()`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15927: `let pos = view.posAtCoords({ x: forward == (direction == Direction.LTR) ? editorRect.right - 1 : editorRect.left + 1,`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15929: `if (pos != null)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15942: `if (line.number == (forward ? view.state.doc.lines : 1))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15965: `if (cat == _codemirror_state__WEBPACK_IMPORTED_MODULE_2__.CharCategory.Space)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15967: `return cat == nextCat;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15972: `if (startPos == (forward ? view.state.doc.length : 0))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15978: `if (goal == null)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 15984: `if (goal == null)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 16050: `if (event.type == "keydown" && this.keydown(view, event))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 16068: `if (event.target == view.scrollDOM)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 16071: `if (browser.chrome && browser.chrome_version == 102) { // FIXME remove at some point`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 16104: `if (this.registeredEvents.indexOf(type) < 0 && type != "scroll") {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 16149: `if (event.keyCode == 9 && Date.now() < this.lastEscPress + 2000)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 16157: `(event.keyCode == 13 || event.keyCode == 8)) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 16168: `((pending = PendingKeys.find(key => key.keyCode == event.keyCode)) && !event.ctrlKey ||`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 16201: `return event.type == "keydown" && event.keyCode != 229;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 16245: `this.dragging = isInPrimarySelection(view, startEvent) && getClickType(startEvent) == 1 ? null : false;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 16255: `if (event.buttons == 0)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 16274: `if (this.dragging == null)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 16312: `selection.main.assoc != this.view.state.selection.main.assoc)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 16341: `if (!sel || sel.rangeCount == 0)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 16357: `for (let node = event.target, cView; node != view.contentDOM; node = node.parentNode)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 16358: `if (!node || node.nodeType == 11 || ((cView = ContentView.get(node)) && cView.ignoreEvent(event)))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 16384: `let byLine = text.lines == state.selection.ranges.length;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 16385: `let linewise = lastLinewiseCopy != null && state.selection.ranges.every(r => r.empty) && lastLinewiseCopy == text.toString();`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 16390: `if (line.from == lastLine)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 16415: `if (event.keyCode == 27)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 16438: `if (!style && event.button == 0)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 16441: `let mustFocus = view.root.activeElement != view.contentDOM;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 16448: `if (type == 1) { // Single click`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 16451: `else if (type == 2) { // Double click`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 16457: `if (to < view.state.doc.length && to == line.to)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 16473: `if (off == 0)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 16475: `if (off == line.length)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 16516: `if (start.pos != cur.pos && !extend) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 16535: `return _codemirror_state__WEBPACK_IMPORTED_MODULE_2__.EditorSelection.create(sel.ranges.slice(0, i).concat(sel.ranges.slice(i + 1)), sel.mainIndex == i ? 0 : sel.mainIndex - (sel.mainIndex > i ? 1 : 0));`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 16575: `if (++read == files.length)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 16576: `dropText(view, event, text.filter(s => s != null).join(view.state.lineBreak), false);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 16660: `if (event.type == "cut" && !view.state.readOnly)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 16669: `if (view.hasFocus != view.inputState.notifiedFocused)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 16687: `if (view.inputState.compositionFirstChange == null)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 16719: `if (browser.chrome && browser.android && (pending = PendingKeys.find(key => key.inputType == event.inputType))) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 16721: `if (pending.key == "Backspace" || pending.key == "Delete") {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 16763: `return (wrappingWhiteSpace.indexOf(whiteSpace) > -1) != this.lineWrapping;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 16781: `let changed = Math.round(lineHeight) != Math.round(this.lineHeight) || this.lineWrapping != lineWrapping;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 16881: `if (this.height != height) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 16924: `if (nodes.length == 1)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 16928: `if (i == j) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 16963: `if (nodes[i - 1] == null) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 16967: `else if (nodes[i] == null) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 17006: `if (nodes.length == 1 && (node instanceof HeightMapText || node instanceof HeightMapGap && (node.flags & 4 /* Flag.SingleLine */)) &&`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 17045: `if (type == QueryType.ByHeight)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 17047: `if (type == QueryType.ByPosNoHeight) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 17059: `if (pos == from)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 17106: `if (singleHeight == -1)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 17145: `let left = type == QueryType.ByHeight ? value < rightTop : value < rightOffset;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 17150: `let subQuery = type == QueryType.ByPosNoHeight ? QueryType.ByPosNoHeight : QueryType.ByPos;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 17249: `if (nodes[around] == null &&`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 17266: `return this.covering && this.nodes[this.nodes.length - 1] == this.covering;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 17310: `if (this.writtenTo < from - 1 || this.nodes[this.nodes.length - 1] == null)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 17320: `if (this.oracle.doc.lineAt(from).to == to)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 17335: `if (block.type == BlockType.WidgetAfter && !this.isCovered)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 17339: `if (block.type != BlockType.WidgetBefore)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 17350: `let last = this.nodes.length == 0 ? null : this.nodes[this.nodes.length - 1];`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 17353: `else if (this.writtenTo < this.pos || last == null)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 17395: `for (let parent = dom.parentNode; parent && parent != doc.body;) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 17396: `if (parent.nodeType == 1) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 17400: `style.overflow != "visible") {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 17405: `bottom = parent == dom.parentNode ? parentRect.bottom : Math.min(bottom, parentRect.bottom);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 17407: `parent = style.position == "absolute" || style.position == "fixed" ? elt.offsetParent : elt.parentNode;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 17409: `else if (parent.nodeType == 11) { // Shadow root`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 17434: `if (a.length != b.length)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 17438: `if (gA.from != gB.from || gA.to != gB.to || gA.size != gB.size)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 17453: `eq(other) { return other.size == this.size && other.vertical == this.vertical; }`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 17499: `let guessWrapping = state.facet(contentAttributes).some(v => typeof v != "function" && v.class == "cm-lineWrapping");`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 17501: `this.stateDeco = state.facet(decorations).filter(d => typeof d != "function");`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 17526: `this.viewportLines.push(this.scaler.scale == 1 ? block : scaleBlock(block, this.scaler));`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 17532: `this.stateDeco = this.state.facet(decorations).filter(d => typeof d != "function");`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 17537: `if (this.heightMap.height != prevHeight)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 17544: `viewport.from != this.viewport.from || viewport.to != this.viewport.to;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 17563: `this.defaultTextDirection = style.direction == "rtl" ? Direction.RTL : Direction.LTR;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 17565: `let measureContent = refresh || this.mustMeasureContent || this.contentDOMHeight != dom.clientHeight;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 17571: `if (this.paddingTop != paddingTop || this.paddingBottom != paddingBottom) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 17576: `if (this.editorWidth != view.scrollDOM.clientWidth) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 17587: `if (inView != this.inView) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 17595: `if (this.contentDOMWidth != contentWidth || this.editorHeight != view.scrollDOM.clientHeight) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 17618: `let heights = vp.from == this.viewport.from ? lineHeights : view.docView.measureVisibleLineHeights(vp);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 17659: `if (scrollTarget.y == "center")`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 17661: `else if (scrollTarget.y == "start" || scrollTarget.y == "nearest" && head < viewport.from)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 17682: `return (from == 0 || top <= visibleTop - Math.max(10 /* VP.MinCoverMargin */, Math.min(-bias, 250 /* VP.MaxCoverMargin */))) &&`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 17683: `(to == this.state.doc.length ||`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 17707: `if (this.defaultTextDirection != Direction.LTR && !wrapping)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 17749: `if (target != null) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 17766: `if (target != null) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 17810: `let changed = ranges.length != this.visibleRanges.length ||`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 17811: `this.visibleRanges.some((r, i) => r.from != ranges[i].from || r.to != ranges[i].to);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 17936: `if (scaler.scale == 1)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 17950: `if (m == "&")`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 18208: `let head = iHead && iHead.node == domSel.focusNode && iHead.offset == domSel.focusOffset ||`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 18212: `let anchor = iAnchor && iAnchor.node == domSel.anchorNode && iAnchor.offset == domSel.anchorOffset ||`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 18237: `if (browser.chrome && view.inputState.lastKeyCode == 13 &&`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 18238: `diff.toB == diff.from + 2 && domChange.text.slice(diff.from, diff.toB) == LineBreakPlaceholder + LineBreakPlaceholder)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 18254: `(change.from != sel.from || change.to != sel.to) &&`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 18264: `else if ((browser.mac || browser.android) && change && change.from == change.to && change.from == sel.head - 1 &&`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 18268: `if (newSel && change.insert.length == 2)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 18272: `else if (browser.chrome && change && change.from == change.to && change.from == sel.head &&`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 18273: `change.insert.toString() == "\n " && view.lineWrapping) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 18292: `((change.from == sel.from && change.to == sel.to &&`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 18293: `change.insert.length == 1 && change.insert.lines == 2 &&`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 18295: `(change.from == sel.from - 1 && change.to == sel.to && change.insert.length == 0 &&`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 18297: `(change.from == sel.from && change.to == sel.to + 1 && change.insert.length == 0 &&`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 18307: `(!newSel || newSel.main.empty && newSel.main.from == change.from + change.insert.length) &&`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 18324: `if (range.from == sel.from && range.to == sel.to)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 18327: `if (range.to - range.from != size || view.state.sliceDoc(from, to) != replaced ||`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 18363: `if (view.inputState.lastSelectionOrigin == "select")`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 18377: `while (from < minLen && a.charCodeAt(from) == b.charCodeAt(from))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 18379: `if (from == minLen && a.length == b.length)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 18382: `while (toA > 0 && toB > 0 && a.charCodeAt(toA - 1) == b.charCodeAt(toB - 1)) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 18386: `if (preferredSide == "end") {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 18406: `if (view.root.activeElement != view.contentDOM)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 18411: `if (focusNode != anchorNode || focusOffset != anchorOffset)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 18417: `if (points.length == 0)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 18419: `let anchor = points[0].pos, head = points.length == 2 ? points[1].pos : anchor;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 18475: `mutations.some(m => m.type == "childList" && m.removedNodes.length ||`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 18476: `m.type == "characterData" && m.oldValue.length > m.target.nodeValue.length))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 18492: `if (typeof ResizeObserver == "function") {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 18504: `if (typeof IntersectionObserver == "function") {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 18508: `if (entries.length > 0 && (entries[entries.length - 1].intersectionRatio > 0) != this.intersecting) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 18510: `if (this.intersecting != this.view.inView)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 18549: `if (this.gapIntersection && (gaps.length != this.gaps.length || this.gaps.some((g, i) => g != gaps[i]))) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 18561: `if (view.state.facet(editable) ? view.root.activeElement != this.dom : !hasSelection(view.dom, sel))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 18585: `let range = browser.safari && view.root.nodeType == 11 &&`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 18586: `deepActiveElement(this.dom.ownerDocument) == this.dom &&`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 18618: `if (dom.nodeType == 1) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 18619: `if (!changed && i < this.scrollTargets.length && this.scrollTargets[i] == dom)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 18627: `else if (dom.nodeType == 11) { // Shadow root`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 18700: `if (!this.delayedAndroidKey || key == "Enter")`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 18739: `if (from == -1) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 18775: `if (this.view.state == startState)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 18783: `cView.markDirty(rec.type == "attributes");`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 18784: `if (rec.type == "attributes")`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 18786: `if (rec.type == "childList") {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 18792: `else if (rec.type == "characterData") {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 18793: `return { from: cView.posAtStart, to: cView.posAtEnd, typeOver: rec.target.nodeValue == rec.oldValue };`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 18800: `if (win != this.win) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 18837: `if (curView && curView.parent == cView)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 18840: `dom = parent != cView.dom ? parent : dir > 0 ? dom.nextSibling : dom.previousSibling;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 18994: `this._dispatch(input.length == 1 && input[0] instanceof _codemirror_state__WEBPACK_IMPORTED_MODULE_2__.Transaction ? input[0]`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 19006: `if (this.updateState != 0 /* UpdateState.Idle */)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 19011: `if (tr.startState != state)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 19034: `if (state.facet(_codemirror_state__WEBPACK_IMPORTED_MODULE_2__.EditorState.phrases) != this.state.facet(_codemirror_state__WEBPACK_IMPORTED_MODULE_2__.EditorState.phrases))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 19058: `if (this.state.facet(styleModule) != this.styleModules)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 19067: `if (update.startState.facet(theme) != update.state.facet(theme))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 19087: `if (this.updateState != 0 /* UpdateState.Idle */)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 19118: `if (prevSpecs != specs) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 19132: `if (plugin.mustUpdate != update)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 19165: `if (!changed && !this.measureRequests.length && this.viewState.scrollTarget == null)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 19200: `if (measured[i] != BadMeasure) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 19226: `if (this.viewport.from == oldViewport.from && this.viewport.to == oldViewport.to &&`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 19227: `!scrolled && this.measureRequests.length == 0)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 19291: `if (this.updateState == 2 /* UpdateState.Updating */)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 19293: `if (this.updateState == 0 /* UpdateState.Idle */ && this.measureScheduled > -1)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 19310: `if (request.key != null)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 19328: `if (known === undefined || known && known.spec != plugin)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 19329: `this.pluginMap.set(plugin, known = this.plugins.find(p => p.spec == plugin) || null);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 19479: `if (!rect || rect.left == rect.right)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 19483: `return flattenRect(rect, (span.dir == Direction.LTR) == (side > 0));`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 19538: `if (entry.from == line.from && entry.dir == dir)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 19554: `this.root.activeElement == this.contentDOM;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 19570: `if (this._root != root) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 19572: `this.observer.setWindow((root.nodeType == 9 ? root : root.ownerDocument).defaultView || window);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 19599: `return scrollIntoView.of(new ScrollTarget(typeof pos == "number" ? _codemirror_state__WEBPACK_IMPORTED_MODULE_2__.EditorSelection.cursor(pos) : pos, options.y, options.x, options.yMargin, options.xMargin));`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 19812: `if (entry.dir == lastDir && !changes.touchesRange(entry.from, entry.to))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 19820: `let source = sources[i], value = typeof source == "function" ? source(view) : source;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 19831: `if (result == "Space")`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 19845: `if (platform == "mac")`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 19913: `if (current == null)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 19915: `else if (current != is)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 19930: `setTimeout(() => { if (storedPrefix == ourObj)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 19967: `let charCode = (0,_codemirror_state__WEBPACK_IMPORTED_MODULE_2__.codePointAt)(name, 0), isChar = (0,_codemirror_state__WEBPACK_IMPORTED_MODULE_2__.codePointSize)(charCode) == name.length && name != " ";`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 19969: `if (storedPrefix && storedPrefix.view == view && storedPrefix.scope == scope) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 19995: `(baseName = w3c_keyname__WEBPACK_IMPORTED_MODULE_1__.base[event.keyCode]) && baseName != name) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 19998: `else if (event.shiftKey && (shiftName = w3c_keyname__WEBPACK_IMPORTED_MODULE_1__.shift[event.keyCode]) != name && shiftName != baseName &&`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 20035: `if (prev.className != this.className)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 20043: `if (this.width != null)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 20048: `return this.left == p.left && this.top == p.top && this.width == p.width && this.height == p.height &&`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 20049: `this.className == p.className;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 20073: `let left = view.textDirection == Direction.LTR ? rect.left : rect.right - view.scrollDOM.clientWidth;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 20086: `if (l.to > pos || l.to == pos && (l.to == line.to || l.type == BlockType.Text))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 20095: `let ltr = view.textDirection == Direction.LTR;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 20101: `let visualStart = startBlock.type == BlockType.Text ? startBlock : null;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 20102: `let visualEnd = endBlock.type == BlockType.Text ? endBlock : null;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 20109: `if (visualStart && visualEnd && visualStart.from == visualEnd.from) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 20118: `else if (top.bottom < bottom.top && view.elementAtHeight((top.bottom + bottom.top) / 2).type == BlockType.Text)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 20139: `let fromCoords = view.coordsAtPos(from, (from == line.to ? -2 : 2));`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 20140: `let toCoords = view.coordsAtPos(to, (to == line.from ? 2 : -2));`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 20143: `if (dir == Direction.LTR)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 20159: `addSpan(Math.max(spanFrom, pos), from == null && spanFrom <= start, Math.min(spanTo, endPos), to == null && spanTo >= end, span.dir);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 20166: `if (horizontal.length == 0)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 20167: `addSpan(start, from == null, end, to == null, view.textDirection);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 20176: `return a.constructor == b.constructor && a.eq(b);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 20197: `if (update.startState.facet(layerOrder) != update.state.facet(layerOrder))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 20204: `while (pos < order.length && order[pos] != this.layer)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 20212: `if (markers.length != this.drawn.length || markers.some((p, i) => !sameMarker(p, this.drawn[i]))) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 20289: `return update.startState.facet(selectionConfig) != update.state.facet(selectionConfig);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 20297: `let prim = r == state.selection.main;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 20309: `dom.style.animationName = dom.style.animationName == "cm-blink" ? "cm-blink2" : "cm-blink";`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 20345: `map(pos, mapping) { return pos == null ? null : mapping.mapPos(pos); }`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 20350: `if (pos != null)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 20364: `if (cursorPos == null) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 20365: `if (this.cursor != null) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 20375: `if (update.startState.field(dropCursorPos) != cursorPos || update.docChanged || update.geometryChanged)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 20381: `let rect = pos != null && this.view.coordsAtPos(pos);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 20408: `if (this.view.state.field(dropCursorPos) != pos)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 20417: `if (event.target == this.view.contentDOM || !this.view.contentDOM.contains(event.relatedTarget))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 20446: `if (visible.length == 1 && visible[0].from == view.viewport.from &&`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 20447: `visible[0].to == view.viewport.to)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 20478: `else if (typeof decoration == "function") {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 20545: `if (fromLine == toLine) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 20560: `const UnicodeRegexpSupport = /x/.unicode != null ? "gu" : "g";`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 20588: `if (_supportsTabSize == null && typeof document != "undefined" && document.body) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 20590: `_supportsTabSize = ((_a = styles.tabSize) !== null && _a !== void 0 ? _a : styles.MozTabSize) != null;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 20635: `if (code == 9) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 20648: `if (update.startState.facet(specialCharConfig) != conf) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 20666: `if (code == 10)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 20676: `eq(other) { return other.code == this.code; }`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 20697: `eq(other) { return other.width == this.width; }`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 20716: `if (height != this.height) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 20775: `wrap.appendChild(typeof this.content == "string" ? document.createTextNode(this.content) : this.content);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 20776: `if (typeof this.content == "string")`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 20836: `: off == line.length ? absoluteColumn(view, event.clientX)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 20875: `let filter = (options === null || options === void 0 ? void 0 : options.eventFilter) || (e => e.altKey && e.button == 0);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 20900: `if (this.isDown != isDown) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 20908: `this.set(e.keyCode == code || getter(e));`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 20911: `if (e.keyCode == code || !getter(e))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 20951: `if (other && other.create == tip.create)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 21007: `this.intersectionObserver = typeof IntersectionObserver == "function" ? new IntersectionObserver(entries => {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 21049: `if (newConfig.position != this.position) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 21055: `if (newConfig.parent != this.parent) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 21064: `else if (this.parent && this.view.themeClasses != this.classes) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 21125: `let offset = tView.offset || noOffset, ltr = this.view.textDirection == Direction.LTR;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 21133: `above == (space.bottom - pos.bottom > pos.top - space.top))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 21152: `if (this.position == "absolute") {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 21174: `if (this.inView != this.view.inView) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 21300: `end: Math.max(...tooltips.filter(t => t.end != null).map(t => t.end)),`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 21345: `if (pos == null)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 21348: `if (posCoords == null || lastMove.y < posCoords.top || lastMove.y > posCoords.bottom ||`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 21353: `let rtl = bidi && bidi.dir == Direction.RTL ? -1 : 1;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 21358: `if (this.pending == pending) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 21377: `if ((pos == end ? this.view.posAtCoords(this.lastMove) != pos`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 21398: `if (cur.nodeType == 1 && cur.classList.contains("cm-tooltip"))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 21440: `if (newPos == null)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 21444: `if (value.end != null)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 21540: `if (this.top.container != conf.topContainer) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 21544: `if (this.bottom.container != conf.bottomContainer) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 21551: `if (input != this.input) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 21612: `if (this.panels.length == 0) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 21628: `if (panel.dom.parentNode == this.dom) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 21629: `while (curDOM != panel.dom)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 21647: `if (!this.container || this.classes == this.view.themeClasses)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 21681: `return this == other || this.constructor == other.constructor && this.eq(other);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 21778: `if (this.view.state.facet(unfixGutters) != !this.fixed) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 21795: `if (b.type == BlockType.Text) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 21801: `text = line.type == BlockType.Text ? line : undefined;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 21820: `if (prev == cur) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 21857: `if (!value || value.gutters.length == 0 || !value.fixed)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 21859: `return view.textDirection == Direction.LTR ? { left: value.dom.offsetWidth } : { right: value.dom.offsetWidth };`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 21865: `if (cursor.from == pos)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 21886: `if (localMarkers.length == 0 && !gutter.config.renderEmptyElements)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 21889: `if (this.i == gutter.elements.length) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 21920: `if (target != this.dom && this.dom.contains(target)) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 21921: `while (target.parentNode != this.dom)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 21946: `if (updated != this.spacer.markers[0])`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 21968: `if (this.height != height)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 21970: `if (this.above != above)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 22021: `if (a.length != b.length)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 22051: `eq(other) { return this.number == other.number; }`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 22066: `lineMarkerChange: update => update.startState.facet(lineNumberConfig) != update.state.facet(lineNumberConfig),`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 22072: `return max == spacer.number ? spacer : new NumberMarker(max);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 22234: `if (typeof match != "function")`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 22316: `(spec.error ? 4 /* NodeFlag.Error */ : 0) | (spec.name == null ? 8 /* NodeFlag.Anonymous */ : 0);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 22345: `if (typeof name == 'string') {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 22346: `if (this.name == name)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 22351: `return this.id == name;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 22390: `if (types[i].id != i)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 22473: `this.props[typeof prop == "number" ? prop : prop.id] = value;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 22640: `if (endIndex == index)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 22652: `for (let i = startIndex; i != endIndex; i = buffer[i + 3]) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 22689: `if (!last || last.to != scan.to)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 22691: `if (last.type.isError && last.from == last.to) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 22704: `while (node.from == node.to ||`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 22716: `if (scan instanceof TreeNode && scan.index < 0 && ((_a = parent.enter(pos, side, mode)) === null || _a === void 0 ? void 0 : _a.from) != scan.from)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 22740: `for (let { children, positions } = parent._tree, e = dir > 0 ? children.length : -1; i != e; i += dir) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 22829: `if (before != null)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 22834: `if (after != null && cur.type.is(after))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 22839: `return after == null ? result : [];`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 22847: `if (context[i] && context[i] != p.name)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 22904: `if (this.index == parentStart)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 23048: `if (this.index != parentStart)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 23081: `for (let i = index + dir, e = dir < 0 ? -1 : parent._tree.children.length; i != e; i += dir) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 23118: `while (this.from == this.to ||`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 23133: `if (cache && cache.context == this.buffer) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 23136: `if (c.index == index) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 23137: `if (index == this.index)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 23197: `if (context[i] && context[i] != type.name)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 23219: `if (size == -1 /* SpecialRecord.Reuse */) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 23225: `else if (size == -3 /* SpecialRecord.ContextChange */) { // Context change`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 23229: `else if (size == -4 /* SpecialRecord.LookAhead */) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 23255: `if (localInRepeat >= 0 && cursor.id == localInRepeat && cursor.size >= 0) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 23286: `if (!lastI && last.type == type && last.length == length)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 23327: `if (fork.id == inRepeat && nodeSize >= 0) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 23346: `if (fork.size == -3 /* SpecialRecord.ContextChange */)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 23360: `if (inRepeat < 0 || size == maxSize) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 23382: `else if (size == -3 /* SpecialRecord.ContextChange */) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 23385: `else if (size == -4 /* SpecialRecord.LookAhead */) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 23398: `if (!balanceType.isAnonymous || node instanceof TreeBuffer || node.type != balanceType)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 23401: `if (size == null) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 23404: `if (child.type != balanceType || !(child instanceof Tree)) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 23444: `if (i == groupFrom + 1) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 23601: `if (typeof input == "string")`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 23677: `if (this.stoppedAt != null)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 23681: `if (this.innerDone == this.inner.length) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 23683: `if (this.stoppedAt != null)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 23723: `scan: for (let nest, isCovered; this.stoppedAt == null || cursor.from < this.stoppedAt;) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 23738: `enter = isCovered != 2 /* Cover.Full */;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 23744: `if (typeof nest.overlay == "function") {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 23835: `let isTarget = from + off == node.from && to + off == node.to && b[i] == node.type.id;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 23863: `if (!this.done && this.cursor.from + this.offset == cursor.from && this.cursor.tree) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 23865: `if (tree == cursor.tree)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 23867: `if (tree.children.length && tree.positions[0] == 0 && tree.children[0] instanceof Tree)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 23899: `if (this.fragI == this.fragments.length) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 23915: `if (mount && mount.parser == parser) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 23920: `if (frag.tree == this.curFrag.tree)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 23964: `let nextA = iA == a.length ? 1e9 : inA ? a[iA].to : a[iA].from;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 23965: `let nextB = iB == b.length ? 1e9 : inB ? b[iB].to : b[iB].from;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 23966: `if (inA != inB) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 23972: `if (pos == 1e9)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 23974: `if (nextA == pos) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 23982: `if (nextB == pos) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 24005: `let last = i == changes.length, end = last ? to : changes[i].from;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 24097: `/// == m1(t1)') and applying multiple modifiers will, regardless or`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 24098: `/// order, produce the same tag ('m1(m2(t1)) == m2(m1(t1))').`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 24122: `let exists = mods[0].instances.find(t => t.base == base && sameArray(mods, t.modified));`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 24137: `return a.length == b.length && a.every((x, i) => x == b[i]);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 24207: `if (rest == "..." && pos > 0 && pos + 3 == part.length) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 24214: `pieces.push(m[0] == "*" ? "" : m[0][0] == '"' ? JSON.parse(m[0]) : m[0]);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 24216: `if (pos == part.length)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 24219: `if (pos == part.length && next == "!") {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 24223: `if (next != "/")`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 24244: `get opaque() { return this.mode == 0 /* Mode.Opaque */; }`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 24245: `get inherit() { return this.mode == 1 /* Mode.Inherit */; }`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 24319: `if (cls != this.class) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 24343: `if (rule.mode == 1 /* Mode.Inherit */)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 24738: `return term == LineComment || term == BlockComment || term == spaces ? context : term == newline`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 24745: `if ((next == braceR || next == -1 || stack.context) && stack.canShift(insertSemi))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 24752: `if (next == slash && ((after = input.peek(1)) == slash || after == star)) return`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 24753: `if (next != braceR && next != semicolon && next != -1 && !stack.context && stack.canShift(noSemi))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 24759: `if (next == plus || next == minus) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 24761: `if (next == input.next) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 24943: `return '[${this.stack.filter((_, i) => i % 3 == 0).concat(this.state)}]@${this.pos}${this.score ? "!" + this.score : ""}';`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 24971: `if (depth == 0) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 24991: `if (start == this.p.lastBigReductionStart) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 25021: `if (term == 0 /* Term.Err */ &&`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 25025: `if (top == 0 && cur.parent) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 25029: `if (top > 0 && cur.buffer[top - 4] == 0 /* Term.Err */ && cur.buffer[top - 1] > -1) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 25030: `if (start == end)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 25038: `if (!isReduce || this.pos == end) { // Simple case, just append`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 25043: `if (index > 0 && this.buffer[index - 4] != 0 /* Term.Err */)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 25067: `else if ((action & 262144 /* Action.StayFlag */) == 0) { // Regular shift`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 25098: `if (index < 0 || this.p.reused[index] != value) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 25105: `this.buffer.push(index, start, this.reducePos, -1 /* size == -1 means this is a reused value */);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 25124: `while (parent && base == parent.bufferBase)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 25145: `if (action == 0)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 25147: `if ((action & 65536 /* Action.ReduceFlag */) == 0)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 25162: `if ((s = nextStates[i + 1]) != this.state && this.p.parser.hasAction(s, next))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 25168: `if (!best.some((v, i) => (i & 1) && v == s))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 25176: `if (s == this.state)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 25192: `if ((reduce & 65536 /* Action.ReduceFlag */) == 0)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 25221: `if (this.stack.length != 3)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 25224: `return parser.data[parser.stateSlot(this.state, 1 /* ParseState.Actions */)] == 65535 /* Seq.End */ &&`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 25228: `/// when this.stack.length == 3 (state is directly below the top`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 25236: `if (this.state != other.state || this.stack.length != other.stack.length)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 25239: `if (this.stack[i] != other.stack[i])`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 25259: `if (last < 0 || this.buffer[last] != -3)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 25265: `if (last < 0 || this.buffer[last] != -4)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 25269: `if (context != this.curContext.context) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 25271: `if (newCx.hash != this.curContext.hash)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 25319: `if (depth == 0) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 25320: `if (this.stack == this.start.stack)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 25340: `if (this.index == 0)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 25348: `if (next != null) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 25361: `if (this.index == 0)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 25372: `if (typeof input != "string")`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 25379: `if (next == 126 /* Encode.BigValCode */) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 25460: `if (index == this.ranges.length - 1)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 25494: `if (resolved == null)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 25519: `if (end == null || end < this.token.start)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 25546: `if (this.chunkOff == this.chunk.length)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 25556: `if (this.rangeIndex == this.ranges.length - 1)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 25584: `if (this.pos != pos) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 25586: `if (pos == this.end) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 25640: `this.data = typeof data == "string" ? decodeArray(data) : data;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 25649: `if (this.elseToken == null)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 25703: `if ((groupMask & data[state]) == 0)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 25713: `(input.token.value == -1 || input.token.value == term ||`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 25721: `if (input.next < 0 && high > low && data[accEnd + high * 3 - 3] == 65535 /* Seq.End */ && data[accEnd + high * 3 - 3] == 65535 /* Seq.End */) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 25744: `for (let i = start, next; (next = data[i]) != 65535 /* Seq.End */; i++)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 25745: `if (next == term)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 25755: `const verbose = typeof process != "undefined" && process.env && /\bparse\b/.test(process.env.LOG);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 25791: `let fr = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 25824: `if (index == top.children.length) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 25837: `if (start == pos) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 25877: `if (((1 << i) & mask) == 0)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 25882: `if (tokenizer.contextual || token.start != stack.pos || token.mask != mask || token.context != context) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 25889: `if (token.value != 0 /* Term.Err */) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 25905: `if (!main && stack.pos == this.stream.end) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 25920: `main.value = pos == p.stream.end ? p.parser.eofTerm : 0 /* Term.Err */;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 25929: `if (parser.specialized[i] == token.value) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 25932: `if ((result & 1) == 0 /* Specialize.Specialize */)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 25948: `if (this.actions[i] == action)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 25959: `if (data[i] == 65535 /* Seq.End */) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 25960: `if (data[i + 1] == 1 /* Seq.Next */) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 25964: `if (index == 0 && data[i + 1] == 2 /* Seq.Other */)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 25969: `if (data[i] == token)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 26033: `if (this.bigReductionCount > 1000 /* Rec.MaxLeftAssociativeReductionCount */ && stacks.length == 1) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 26076: `let finished = this.stoppedAt != null && stopped[0].pos > this.stoppedAt ? stopped[0]`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 26082: `let maxRemaining = this.recovering == 1 ? 1 : this.recovering * 3 /* Rec.MaxRemainingPerStep */;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 26119: `if (this.stoppedAt != null && this.stoppedAt < pos)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 26130: `if (this.stoppedAt != null && start > this.stoppedAt)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 26135: `let match = this.parser.nodeSet.types[cached.type.id] == cached.type ? parser.getGoto(stack.state, cached.type.id) : -1;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 26136: `if (match > -1 && cached.length && (!strictCx || (cached.prop(_lezer_common__WEBPACK_IMPORTED_MODULE_0__.NodeProp.contextHash) || 0) == cxHash)) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 26142: `if (!(cached instanceof _lezer_common__WEBPACK_IMPORTED_MODULE_0__.Tree) || cached.children.length == 0 || cached.positions[0] > 0)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 26145: `if (inner instanceof _lezer_common__WEBPACK_IMPORTED_MODULE_0__.Tree && cached.positions[0] == 0)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 26164: `let last = i == actions.length || !split;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 26168: `console.log(base + this.stackID(localStack) + ' (via ${(action & 65536 /* Action.ReduceFlag */) == 0 ? "shift"`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 26169: `: 'reduce of ${parser.getName(action & 65535 /* Action.ValueMask */)}'} for ${parser.getName(term)} @ ${start}${localStack == stack ? "" : ", split"})');`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 26225: `if (tokenEnd == stack.pos) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 26262: `if (other.pos == stack.pos && other.sameState(stack)) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 26276: `allows(term) { return !this.disabled || this.disabled[term] == 0; }`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 26309: `if (spec.version != 14 /* File.Version */)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 26325: `if (typeof prop == "string")`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 26345: `error: i == 0,`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 26363: `this.tokenizers = spec.tokenizers.map(value => typeof value == "number" ? new TokenGroup(tokenArray, value) : value);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 26390: `if (table[pos] == state)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 26401: `if ((next = data[i]) == 65535 /* Seq.End */) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 26402: `if (data[i + 1] == 1 /* Seq.Next */)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 26404: `else if (data[i + 1] == 2 /* Seq.Other */)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 26409: `if (next == terminal || next == 0 /* Term.Err */)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 26425: `if (action == this.stateSlot(state, 4 /* ParseState.DefaultReduce */))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 26428: `if (this.data[i] == 65535 /* Seq.End */) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 26429: `if (this.data[i + 1] == 1 /* Seq.Next */)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 26434: `if (action == pair(this.data, i + 1))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 26443: `if (this.data[i] == 65535 /* Seq.End */) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 26444: `if (this.data[i + 1] == 1 /* Seq.Next */)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 26449: `if ((this.data[i + 2] & (65536 /* Action.ReduceFlag */ >> 16)) == 0) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 26451: `if (!result.some((v, i) => (i & 1) && v == value))`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 26474: `let found = config.tokenizers.find(r => r.from == t);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 26480: `let found = config.specializers.find(r => r.from == s.external);`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 26492: `if (config.strict != null)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 26496: `if (config.bufferLength != null)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 26520: `return prec == null ? 0 : prec[term] || 0;`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 26534: `for (let j = this.dialects[values[i]], id; (id = this.data[j++]) != 65535 /* Seq.End */;)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 26550: `if ((stack.pos == stack.p.stream.end || stopped != null && stack.pos > stopped) &&`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 26701: `if (typeof elt == "string") elt = document.createElement(elt)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 26703: `if (next && typeof next == "object" && next.nodeType == null && !Array.isArray(next)) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 26706: `if (typeof value == "string") elt.setAttribute(name, value)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 26707: `else if (value != null) elt[name] = value`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 26716: `if (typeof child == "string") {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 26718: `} else if (child == null) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 26719: `} else if (child.nodeType != null) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 26742: `const COUNT = typeof Symbol == "undefined" ? "__" + C : Symbol.for(C)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 26743: `const SET = typeof Symbol == "undefined" ? "__styleSet" + Math.floor(Math.random() * 1e8) : Symbol("styleSet")`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 26744: `const top = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : {}`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 26770: `let local = [], isAt = /^@(\w+)\b/.exec(selectors[0]), keyframes = isAt && isAt[1] == "keyframes"`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 26771: `if (isAt && spec == null) return target.push(selectors[0] + ";")`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 26777: `} else if (value && typeof value == "object") {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 26780: `} else if (value != null) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 26827: `if (!root.head && root.adoptedStyleSheets && typeof CSSStyleSheet != "undefined") {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 26854: `if (index == -1) {`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 26997: `var chrome = typeof navigator != "undefined" && /Chrome\/(\d+)/.exec(navigator.userAgent)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 26998: `var gecko = typeof navigator != "undefined" && /Gecko\/\d+/.test(navigator.userAgent)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 26999: `var mac = typeof navigator != "undefined" && /Mac/.test(navigator.platform)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 27000: `var ie = typeof navigator != "undefined" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent)`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 27020: `ie && event.shiftKey && event.key && event.key.length == 1 ||`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 27021: `event.key == "Unidentified"`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 27026: `if (name == "Esc") name = "Escape"`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 27027: `if (name == "Del") name = "Delete"`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 27029: `if (name == "Left") name = "ArrowLeft"`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 27030: `if (name == "Up") name = "ArrowUp"`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 27031: `if (name == "Right") name = "ArrowRight"`

* File [teleora_editor/dist/js/main.js](teleora_editor/dist/js/main.js) - line 27032: `if (name == "Down") name = "ArrowDown"`

**This file is autogenerated. Please do not edit it manually.**
