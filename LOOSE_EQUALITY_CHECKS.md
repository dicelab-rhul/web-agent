# List of loose equality checks

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 89: `return id != null ? id : x;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 228: `var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 413: `if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 414: `if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 978: `if (root.nodeType == 11) target = root.getSelection ? root : root.ownerDocument;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 983: `return node ? dom == node || dom.contains(node.nodeType != 1 ? node.parentNode : node) : false;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1002: `if (dom.nodeType == 3) return textRange(dom, 0, dom.nodeValue.length).getClientRects();`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1003: `else if (dom.nodeType == 1) return dom.getClientRects();`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1020: `if (node == targetNode && off == targetOff) return true;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1021: `if (off == (dir < 0 ? 0 : maxOffset(node))) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1022: `if (node.nodeName == "DIV") return false;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1024: `if (!parent || parent.nodeType != 1) return false;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1027: `} else if (node.nodeType == 1) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1029: `if (node.nodeType == 1 && node.contentEditable == "false") return false;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1035: `return node.nodeType == 3 ? node.nodeValue.length : node.childNodes.length;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1063: `if (cur.nodeType == 1) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1064: `let bounding, top = cur == doc.body;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1081: `if (y == "nearest") {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1091: `let targetTop = y == "center" && rectHeight <= boundingHeight ? rect.top + rectHeight / 2 - boundingHeight / 2 : y == "start" || y == "center" && side < 0 ? rect.top - yMargin : rect.bottom - boundingHeight + yMargin;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1094: `if (x == "nearest") {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1103: `let targetLeft = x == "center" ? rect.left + (rect.right - rect.left) / 2 - (bounding.right - bounding.left) / 2 : x == "start" == ltr ? rect.left - xMargin : rect.right - (bounding.right - bounding.left) + xMargin;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1132: `} else if (cur.nodeType == 11) cur = cur.host;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1144: `return this.anchorNode == domSel.anchorNode && this.anchorOffset == domSel.anchorOffset && this.focusNode == domSel.focusNode && this.focusOffset == domSel.focusOffset;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1165: `if (cur == cur.ownerDocument) break;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1167: `dom.focus(preventScrollSupported == null ? {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1179: `if (elt.scrollTop != top) elt.scrollTop = top;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1180: `if (elt.scrollLeft != left) elt.scrollLeft = left;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1209: `if (node && (node.nodeType == 9 || node.nodeType == 11 && node.host)) return node;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1219: `if (!node || selection.anchorNode != node || selection.anchorOffset != offset) return false;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1222: `if (node.nodeType != 1) return false;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1224: `if (prev.contentEditable == "false") offset--;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1229: `} else if (node == doc) return true;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1272: `if (child == view) return pos;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1300: `if (track && !track.written && track.node == parent && next != child.dom) track.written = true;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1301: `if (child.dom.parentNode == parent) while(next && next != child.dom)next = rm$1(next);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1306: `if (next && track && track.node == parent) track.written = true;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1318: `if (node == this.dom) after = this.dom.childNodes[offset];`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1320: `let bias = maxOffset(node) == 0 ? 0 : offset == 0 ? -1 : 1;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1323: `if (parent == this.dom) break;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1324: `if (bias == 0 && parent.firstChild != parent.lastChild) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1325: `if (node == parent.firstChild) bias = -1;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1333: `if (after == this.dom.firstChild) return 0;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1338: `if (child.dom == after) return pos;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1347: `if (end >= from && fromI == -1) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1351: `if (pos > to && child.dom.parentNode == this.dom) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1379: `if (this.parent != parent) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1400: `if (child.parent == this) child.destroy();`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1419: `return name + (this.children.length ? "(" + this.children.join() + ")" : this.length ? "[" + (name == "Text" ? this.text : this.length) + "]" : "") + (this.breakAfter ? "#" : "");`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1434: `return other.constructor == this.constructor;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1462: `if (pos > this.pos || pos == this.pos && (bias > 0 || this.i == 0 || this.children[this.i - 1].breakAfter)) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1477: `if (fromI == toI && before && !breakAtStart && !breakAtEnd && insert.length < 2 && before.merge(fromOff, toOff, insert.length ? last : null, fromOff == 0, openStart, openEnd)) return;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1484: `if (fromI == toI) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1511: `else if (fromOff < before.length || before.children.length && before.children[before.children.length - 1].length == 0) before.merge(fromOff, before.length, null, false, openStart, 0);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1539: `let nav = typeof navigator != "undefined" ? navigator : {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1544: `let doc = typeof document != "undefined" ? document : {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1579: `tabSize: doc.documentElement.style.tabSize != null ? "tab-size" : "-moz-tab-size"`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1595: `if (this.dom.nodeValue != this.text) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1596: `if (track && track.node == this.dom) track.written = true;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1601: `if (dom.nodeType == 3) this.createDOM(dom);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1616: `return node == this.dom ? offset : offset ? this.text.length : 0;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1648: `if (node.nodeName == this.mark.tagName.toUpperCase()) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1692: `if (pos == 0 && side < 0 || pos == length && side >= 0) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1709: `if (browser.safari && !flatten && rect.width == 0) rect = Array.prototype.find.call(rects, (r)=>r.width) || rect;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1746: `if (other.length == this.length && other instanceof WidgetView && other.side == this.side) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1747: `if (this.widget.constructor == other.widget.constructor) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1763: `if (this.length == 0) return (0, _state.Text).empty;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1770: `return pos == 0 ? DOMPos.before(this.dom) : DOMPos.after(this.dom, pos == this.length);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1780: `if (pos > 0 ? i == 0 : i == rects.length - 1 || rect.top < rect.bottom) break;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1839: `if (pos < len || pos == len && desc.getSide() <= 0) return hasComp ? scanCompositionTree(pos, side, desc, text, enterView, fromText) : enterView(desc, pos, side);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1843: `} else if (view.dom == text) return fromText(pos, side);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1852: `else if (view.dom == text) return Math.min(offset, text.nodeValue.length);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1870: `return other instanceof WidgetBufferView && other.side == this.side;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1927: `if (last && last.nodeName == "BR") return last.getClientRects()[0];`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1937: `if (end == off && child.getSide() <= 0) continue;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1938: `if (pos > off && pos < end && child.dom.parentNode == dom) return child.domAtPos(pos - off);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1944: `if (prev.dom.parentNode == dom) return prev.domAtPos(prev.length);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1948: `if (next.dom.parentNode == dom) return next.domAtPos(0);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1969: `else if (!after && (end > pos || off == end && child.getSide() > 0)) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1972: `} else if (off < pos || off == end && child.getSide() < 0) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1982: `if (target) return target.coordsAt(Math.max(0, target == before ? beforePos : afterPos), side);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1993: `if (name == "class" && target.class) target.class += " " + source.class;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 1994: `else if (name == "style" && target.style) target.style += ";" + source.style;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 2000: `if (a == b) return true;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 2003: `if (keysA.length != keysB.length) return false;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 2005: `if (keysB.indexOf(key) == -1 || a[key] !== b[key]) return false;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 2015: `for(let name in attrs)if (!(prev && prev[name] == attrs[name])) dom.setAttribute(changed = name, attrs[name]);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 2049: `return this == other || this.constructor == other.constructor && this.eq(other);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 2186: `return this == other || other instanceof MarkDecoration && this.tagName == other.tagName && this.class == other.class && attrsEq(this.attrs, other.attrs);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 2202: `if (to != from) throw new RangeError("Line decoration ranges must be zero-length");`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 2215: `// Only relevant when this.block == true`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 2223: `return other instanceof PointDecoration && widgetsEq(this.widget, other.widget) && this.block == other.block && this.startSide == other.startSide && this.endSide == other.endSide;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 2226: `if (this.isReplace && (from > to || from == to && this.startSide > 0 && this.endSide <= 0)) throw new RangeError("Invalid range for replacement decoration");`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 2227: `if (!this.isReplace && to != from) throw new RangeError("Widget decorations can only have zero-length ranges");`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 2234: `if (start == null) start = spec.inclusive;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 2235: `if (end == null) end = spec.inclusive;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 2242: `return a == b || !!(a && b && a.compare(b));`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 2271: `if (this.length == 0) return end;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 2279: `while(i > 0 && this.children[i - 1].length == 0)this.children[--i].destroy();`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 2317: `if (node.nodeName == "DIV") {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 2341: `if (!last || !this.length || last.nodeName != "BR" && ((_a = ContentView.get(last)) === null || _a === void 0 ? void 0 : _a.isEditable) == false && (!browser.ios || !this.children.some((ch)=>ch instanceof TextView))) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 2348: `if (this.children.length == 0 || this.length > 20) return null;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 2353: `if (rects.length != 1) return null;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 2397: `return pos == 0 ? DOMPos.before(this.dom) : DOMPos.after(this.dom, pos == this.length);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 2424: `if (other instanceof BlockWidgetView && other.type == this.type && other.widget.constructor == this.widget.constructor) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 2465: `if (this.content.length == 0) return !this.breakAtStart && this.doc.lineAt(this.pos).from != this.pos;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 2467: `return !last.breakAfter && !(last instanceof BlockWidgetView && last.type == BlockType.WidgetBefore);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 2494: `if (this.textOff == this.text.length) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 2534: `if (type == BlockType.WidgetAfter && !this.posCovered()) this.getLine();`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 2541: `if (this.pendingBuffer == 2 /* Buf.IfCursor */  && !cursorBefore) this.pendingBuffer = 0 /* Buf.No */ ;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 2551: `} else if (this.doc.lineAt(this.pos).from == this.pos) this.getLine().addLineDeco(deco);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 2584: `return other.tag == this.tag;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 2590: `return elt.nodeName.toLowerCase() == this.tag;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 2761: `if (ranges.length == 0) return diff;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 2764: `let next = dI == diff.length ? null : diff[dI], off = posA - posB;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 2804: `if (focus != view.inputState.notifiedFocused) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 2851: `return this.flags == 0 && this.transactions.length == 0;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 2892: `return ch <= 0xf7 ? LowTypes[ch] : 0x590 <= ch && ch <= 0x5f4 ? 2 /* T.R */  : 0x600 <= ch && ch <= 0x6f9 ? ArabicTypes[ch - 0x600] : 0x6ee <= ch && ch <= 0x8ac ? 4 /* T.AL */  : 0x2000 <= ch && ch <= 0x200b ? 256 /* T.NI */  : 0xfb50 <= ch && ch <= 0xfdff ? 4 /* T.AL */  : ch == 0x200c ? 256 /* T.NI */  : 1 /* T.L */ ;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 2924: `return this.dir == dir == end ? this.to : this.from;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 2933: `if (span.level == level) return i;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 2934: `// When multiple spans match, if assoc != 0, take the one that`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 2937: `if (maybe < 0 || (assoc != 0 ? assoc < 0 ? span.from < index : span.to > index : order[maybe].level > span.level)) maybe = i;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 2947: `let len = line.length, outerType = direction == LTR ? 1 /* T.L */  : 2 /* T.R */ , oppositeType = direction == LTR ? 2 /* T.R */  : 1 /* T.L */ ;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 2948: `if (!line || outerType == 1 /* T.L */  && !BidiRE.test(line)) return trivialOrder(len);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 2961: `if (type == 512 /* T.NSM */ ) type = prev;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 2962: `else if (type == 8 /* T.EN */  && prevStrong == 4 /* T.AL */ ) type = 16 /* T.AN */ ;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 2963: `types[i] = type == 4 /* T.AL */  ? 2 /* T.R */  : type;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 2977: `if (type == 128 /* T.CS */ ) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 2978: `if (i < len - 1 && prev == types[i + 1] && prev & 24 /* T.Num */ ) type = types[i] = prev;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 2980: `} else if (type == 64 /* T.ET */ ) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 2982: `while(end < len && types[end] == 64 /* T.ET */ )end++;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 2983: `let replace = i && prev == 8 /* T.EN */  || end < len && types[end] == 8 /* T.EN */  ? prevStrong == 1 /* T.L */  ? 1 /* T.L */  : 8 /* T.EN */  : 256 /* T.NI */ ;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 2986: `} else if (type == 8 /* T.EN */  && prevStrong == 1 /* T.L */ ) types[i] = 1 /* T.L */ ;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 2999: `for(let sJ = sI - 3; sJ >= 0; sJ -= 3)if (BracketStack[sJ + 1] == -br) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3006: `} else if (BracketStack.length == 189 /* Bracketed.MaxDepth */ ) break;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3012: `} else if ((type = types[i]) == 2 /* T.R */  || type == 1 /* T.L */ ) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3013: `let embed = type == outerType;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3033: `for(let i = 0; i < len; i++)if (types[i] == 256 /* T.NI */ ) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3035: `while(end < len && types[end] == 256 /* T.NI */ )end++;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3036: `let beforeL = (i ? types[i - 1] : outerType) == 1 /* T.L */ ;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3037: `let afterL = (end < len ? types[end] : outerType) == 1 /* T.L */ ;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3038: `let replace = beforeL == afterL ? beforeL ? 1 /* T.L */  : 2 /* T.R */  : outerType;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3048: `if (outerType == 1 /* T.L */ ) for(let i = 0; i < len;){`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3049: `let start = i, rtl = types[i++] != 1 /* T.L */ ;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3050: `while(i < len && rtl == (types[i] != 1 /* T.L */ ))i++;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3052: `let end = j, l = types[--j] != 2 /* T.R */ ;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3053: `while(j > start && l == (types[j - 1] != 2 /* T.R */ ))j--;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3059: `let start = i, rtl = types[i++] == 2 /* T.R */ ;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3060: `while(i < len && rtl == (types[i] == 2 /* T.R */ ))i++;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3074: `if (startIndex == 0) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3076: `if (order[0].level != dir) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3080: `} else if (startIndex == line.length) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3083: `if (last.level != dir) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3091: `if (startIndex == span.side(forward, dir)) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3095: `let indexForward = forward == (span.dir == dir);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3098: `if (nextIndex != span.side(forward, dir)) return (0, _state.EditorSelection).cursor(nextIndex + line.from, indexForward ? -1 : 1, span.level);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3099: `let nextSpan = spanI == (forward ? order.length - 1 : 0) ? null : order[spanI + (forward ? 1 : -1)];`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3100: `if (!nextSpan && span.level != dir) return (0, _state.EditorSelection).cursor(forward ? line.to : line.from, forward ? -1 : 1, dir);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3124: `if (next == end) break;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3126: `if (view && nextView ? view.breakAfter : (view ? view.breakAfter : isBlockElement(cur)) || isBlockElement(next) && (cur.nodeName != "BR" || cur.cmIgnore)) this.lineBreak();`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3134: `for (let point of this.points)if (point.node == node) point.pos = this.text.length + Math.min(point.offset, text.length);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3148: `for (let point of this.points)if (point.node == node && point.pos > this.text.length) point.pos -= breakSize - 1;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3157: `if (fromView != null) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3161: `} else if (node.nodeType == 3) this.readTextNode(node);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3162: `else if (node.nodeName == "BR") {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3164: `} else if (node.nodeType == 1) this.readRange(node.firstChild, null);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3167: `for (let point of this.points)if (point.node == node && node.childNodes[point.offset] == next) point.pos = this.text.length;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3170: `for (let point of this.points)if (node.nodeType == 3 ? point.node == node : node.contains(point.node)) point.pos = this.text.length + Math.min(maxLen, point.offset);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3174: `return node.nodeType == 1 && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(node.nodeName);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3244: `if ((browser.ie || browser.chrome) && !this.compositionDeco.size && update && update.state.doc.lines != update.startState.doc.lines) this.forceSelection = true;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3248: `if (this.dirty == 0 /* Dirty.Not */  && changedRanges.length == 0) return false;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3278: `if (track && (track.written || observer.selectionRange.focusNode != track.node)) this.forceSelection = true;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3337: `if (nextTo && nextTo != 3 /* NextTo.After */ ) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3338: `let text = nearbyTextNode(anchor.node, anchor.offset, nextTo == 1 /* NextTo.Before */  ? 1 : -1);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3339: `if (text) anchor = new DOMPos(text, nextTo == 1 /* NextTo.Before */  ? 0 : text.nodeValue.length);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3343: `if (main.bidiLevel != null && domSel.cursorBidiLevel != null) domSel.cursorBidiLevel = main.bidiLevel;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3382: `if (cursor.head == lineStart || cursor.head == lineStart + line.length) return;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3392: `if (view.docView.posFromDOM(newRange.anchorNode, newRange.anchorOffset) != cursor.from) sel.collapse(anchorNode, anchorOffset);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3396: `return active == this.dom || hasSelection(this.dom, this.view.observer.selectionRange) && !(active && this.dom.contains(active));`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3401: `if (domView && domView.rootView == this) return domView;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3424: `if (pos > start || pos == start && child.type != BlockType.WidgetBefore && child.type != BlockType.WidgetAfter && (!i || side == 2 || this.children[i - 1].breakAfter || this.children[i - 1].type == BlockType.WidgetBefore && side > -2)) return child.coordsAt(pos - start, side);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3432: `let widest = -1, ltr = this.view.textDirection == Direction.LTR;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3460: `return getComputedStyle(this.children[i].dom).direction == "rtl" ? Direction.RTL : Direction.LTR;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3495: `let next = i == vs.viewports.length ? null : vs.viewports[i];`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3513: `let dynamic = this.dynamicDecorationMap[i] = typeof d == "function";`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3537: `if (left != null) mLeft = Math.max(mLeft, left);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3538: `if (right != null) mRight = Math.max(mRight, right);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3539: `if (top != null) mTop = Math.max(mTop, top);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3540: `if (bottom != null) mBottom = Math.max(mBottom, bottom);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3548: `scrollRectIntoView(this.view.scrollDOM, targetRect, range.head < range.anchor ? -1 : 1, target.x, target.y, target.xMargin, target.yMargin, this.view.textDirection == Direction.LTR);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3552: `return pos.node.nodeType == 1 && pos.node.firstChild && (pos.offset == 0 || pos.node.childNodes[pos.offset - 1].contentEditable == "false") && (pos.offset == pos.node.childNodes.length || pos.node.childNodes[pos.offset].contentEditable == "false");`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3565: `return other.height == this.height;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3583: `while(topNode.parentNode != cView.dom)topNode = topNode.parentNode;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3614: `let { state  } = view, text = node.nodeType == 3 ? node.nodeValue : new DOMReader([], state).readRange(node.firstChild, null).text;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3616: `if (state.doc.sliceString(newFrom, Math.min(state.doc.length, newFrom + text.length), LineBreakPlaceholder) == text) newTo = newFrom + text.length;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3617: `else if (state.doc.sliceString(Math.max(0, newTo - text.length), newTo, LineBreakPlaceholder) == text) newFrom = newTo - text.length;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3619: `} else if (state.doc.sliceString(newFrom, newTo, LineBreakPlaceholder) != text) return Decoration.none;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3636: `return this.top == other.top && this.text == other.text;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3650: `if (node.nodeType == 3) return node;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3651: `if (node.nodeType == 1 && offset > 0 && side <= 0) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3654: `} else if (node.nodeType == 1 && offset < node.childNodes.length && side >= 0) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3661: `if (node.nodeType != 1) return 0;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3662: `return (offset && node.childNodes[offset - 1].contentEditable == "false" ? 1 /* NextTo.Before */  : 0) | (offset < node.childNodes.length && node.childNodes[offset].contentEditable == "false" ? 2 /* NextTo.After */  : 0);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3681: `for(let cur = node; cur && cur != inside; cur = cur.assignedSlot || cur.parentNode){`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3682: `if (cur.nodeType == 1 && cur.contentEditable == "false") return true;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3689: `if (line.length == 0) return (0, _state.EditorSelection).cursor(pos);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3690: `if (linePos == 0) bias = 1;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3691: `else if (linePos == line.length) bias = -1;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3698: `if (categorize(line.text.slice(prev, from)) != cat) break;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3703: `if (categorize(line.text.slice(to, next)) != cat) break;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3745: `if (dx == 0 && dy == 0) return child.nodeType == 3 ? domPosInText(child, x, y) : domPosAtCoords(child, x, y);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3746: `if (!closest || closestY > dy || closestY == dy && closestX > dx) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3753: `if (dx == 0) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3777: `if (closest.nodeType == 3) return domPosInText(closest, clipX, y);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3778: `if (closestOverlap && closest.contentEditable != "false") return domPosAtCoords(closest, clipX, y);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3792: `if (rect.top == rect.bottom) continue;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3801: `if (rectBefore.left == rect.right) after = !right;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3827: `if (block.type == BlockType.Text) break;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3842: `if (lineStart < view.viewport.from) return view.viewport.from == 0 ? 0 : precise ? null : posAtCoordsImprecise(view, content, block, x, y);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3843: `if (lineStart > view.viewport.to) return view.viewport.to == view.state.doc.length ? view.state.doc.length : precise ? null : posAtCoordsImprecise(view, content, block, x, y);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3858: `if (element && ((_a = view.docView.nearest(element)) === null || _a === void 0 ? void 0 : _a.isEditable) != false) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3893: `if (node.nodeType != 3 || offset != (len = node.nodeValue.length)) return false;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3894: `for(let next = node.nextSibling; next; next = next.nextSibling)if (next.nodeType != 1 || next.nodeName != "BR") return false;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3899: `if (offset != 0) return false;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3902: `if (!parent || parent.nodeType != 1 || parent.firstChild != cur) return false;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3906: `let rect = node.nodeType == 1 ? node.getBoundingClientRect() : textRange(node, 0, Math.max(node.nodeValue.length, 1)).getBoundingClientRect();`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3916: `x: forward == (direction == Direction.LTR) ? editorRect.right - 1 : editorRect.left + 1,`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3919: `if (pos != null) return (0, _state.EditorSelection).cursor(pos, forward ? -1 : 1);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3931: `if (line.number == (forward ? view.state.doc.lines : 1)) return cur;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3949: `if (cat == (0, _state.CharCategory).Space) cat = nextCat;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3950: `return cat == nextCat;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3955: `if (startPos == (forward ? view.state.doc.length : 0)) return (0, _state.EditorSelection).cursor(startPos, start.assoc);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3960: `if (goal == null) goal = startCoords.left - rect.left;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 3964: `if (goal == null) goal = Math.min(rect.right - rect.left, view.defaultCharacterWidth * (startPos - line.from));`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 4028: `if (type == "keydown" && this.keydown(view, event)) return;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 4035: `if (browser.chrome && browser.chrome_version == 102) // On Chrome 102, viewport updates somehow stop wheel-based`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 4066: `for(let type in handlers)if (this.registeredEvents.indexOf(type) < 0 && type != "scroll") {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 4102: `if (event.keyCode == 9 && Date.now() < this.lastEscPress + 2000) return true;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 4108: `if (browser.android && browser.chrome && !event.synthetic && (event.keyCode == 13 || event.keyCode == 8)) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 4118: `if (browser.ios && !event.synthetic && !event.altKey && !event.metaKey && ((pending = PendingKeys.find((key)=>key.keyCode == event.keyCode)) && !event.ctrlKey || EmacsyPendingKeys.indexOf(event.key) > -1 && event.ctrlKey && !event.shiftKey)) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 4147: `return event.type == "keydown" && event.keyCode != 229;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 4202: `this.dragging = isInPrimarySelection(view, startEvent) && getClickType(startEvent) == 1 ? null : false;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 4211: `if (event.buttons == 0) return this.destroy();`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 4216: `if (this.dragging == null) this.select(this.lastEvent);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 4228: `if (this.mustSelect || !selection.eq(this.view.state.selection) || selection.main.assoc != this.view.state.selection.main.assoc) this.view.dispatch({`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 4254: `if (!sel || sel.rangeCount == 0) return true;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 4265: `for(let node = event.target, cView; node != view.contentDOM; node = node.parentNode)if (!node || node.nodeType == 11 || (cView = ContentView.get(node)) && cView.ignoreEvent(event)) return false;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 4288: `let byLine = text.lines == state.selection.ranges.length;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 4289: `let linewise = lastLinewiseCopy != null && state.selection.ranges.every((r)=>r.empty) && lastLinewiseCopy == text.toString();`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 4294: `if (line.from == lastLine) return {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 4326: `if (event.keyCode == 27) view.inputState.lastEscPress = Date.now();`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 4347: `if (!style && event.button == 0) style = basicMouseSelection(view, event);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 4349: `let mustFocus = view.root.activeElement != view.contentDOM;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 4355: `if (type == 1) return (0, _state.EditorSelection).cursor(pos, bias);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 4356: `else if (type == 2) return groupAt(view.state, pos, bias);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 4360: `if (to < view.state.doc.length && to == line.to) to++;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 4374: `if (off == 0) return 1;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 4375: `if (off == line.length) return -1;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 4418: `if (lastEvent && event.clientX == lastEvent.clientX && event.clientY == lastEvent.clientY) cur = last;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 4424: `if (start.pos != cur.pos && !extend) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 4440: `if (sel.ranges[i].eq(range)) return (0, _state.EditorSelection).create(sel.ranges.slice(0, i).concat(sel.ranges.slice(i + 1)), sel.mainIndex == i ? 0 : sel.mainIndex - (sel.mainIndex > i ? 1 : 0));`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 4490: `if (++read == files.length) dropText(view, event, text.filter((s)=>s != null).join(view.state.lineBreak), false);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 4567: `if (event.type == "cut" && !view.state.readOnly) view.dispatch({`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 4575: `if (view.hasFocus != view.inputState.notifiedFocused) view.update([]);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 4592: `if (view.inputState.compositionFirstChange == null) view.inputState.compositionFirstChange = true;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 4619: `if (browser.chrome && browser.android && (pending = PendingKeys.find((key)=>key.inputType == event.inputType))) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 4621: `if (pending.key == "Backspace" || pending.key == "Delete") {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 4668: `return wrappingWhiteSpace.indexOf(whiteSpace) > -1 != this.lineWrapping;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 4684: `let changed = Math.round(lineHeight) != Math.round(this.lineHeight) || this.lineWrapping != lineWrapping;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 4779: `if (this.height != height) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 4826: `if (nodes.length == 1) return nodes[0];`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 4829: `if (i == j) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 4852: `if (nodes[i - 1] == null) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 4855: `} else if (nodes[i] == null) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 4894: `if (nodes.length == 1 && (node instanceof HeightMapText || node instanceof HeightMapGap && node.flags & 4 /* Flag.SingleLine */ ) && Math.abs(this.length - node.length) < 10) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 4930: `if (type == QueryType.ByHeight) return this.blockAt(value, doc, top, offset);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 4931: `if (type == QueryType.ByPosNoHeight) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 4943: `if (pos == from) top += lineHeight * (line.number - firstLine);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 4983: `if (singleHeight == -1) singleHeight = height;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 5020: `let left = type == QueryType.ByHeight ? value < rightTop : value < rightOffset;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 5023: `let subQuery = type == QueryType.ByPosNoHeight ? QueryType.ByPosNoHeight : QueryType.ByPos;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 5106: `if (nodes[around] == null && (before = nodes[around - 1]) instanceof HeightMapGap && (after = nodes[around + 1]) instanceof HeightMapGap) nodes.splice(around - 1, 3, new HeightMapGap(before.length + 1 + after.length));`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 5120: `return this.covering && this.nodes[this.nodes.length - 1] == this.covering;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 5152: `if (this.writtenTo < from - 1 || this.nodes[this.nodes.length - 1] == null) this.nodes.push(this.blankContent(this.writtenTo, from - 1));`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 5160: `if (this.oracle.doc.lineAt(from).to == to) gap.flags |= 4 /* Flag.SingleLine */ ;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 5173: `if (block.type == BlockType.WidgetAfter && !this.isCovered) this.ensureLine();`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 5176: `if (block.type != BlockType.WidgetBefore) this.covering = block;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 5186: `let last = this.nodes.length == 0 ? null : this.nodes[this.nodes.length - 1];`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 5188: `else if (this.writtenTo < this.pos || last == null) this.nodes.push(this.blankContent(this.writtenTo, this.pos));`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 5226: `for(let parent = dom.parentNode; parent && parent != doc.body;){`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 5227: `if (parent.nodeType == 1) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 5230: `if ((elt.scrollHeight > elt.clientHeight || elt.scrollWidth > elt.clientWidth) && style.overflow != "visible") {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 5235: `bottom = parent == dom.parentNode ? parentRect.bottom : Math.min(bottom, parentRect.bottom);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 5237: `parent = style.position == "absolute" || style.position == "fixed" ? elt.offsetParent : elt.parentNode;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 5238: `} else if (parent.nodeType == 11) parent = parent.host;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 5267: `if (a.length != b.length) return false;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 5270: `if (gA.from != gB.from || gA.to != gB.to || gA.size != gB.size) return false;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 5287: `return other.size == this.size && other.vertical == this.vertical;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 5339: `let guessWrapping = state.facet(contentAttributes).some((v)=>typeof v != "function" && v.class == "cm-lineWrapping");`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 5341: `this.stateDeco = state.facet(decorations).filter((d)=>typeof d != "function");`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 5369: `this.viewportLines.push(this.scaler.scale == 1 ? block : scaleBlock(block, this.scaler));`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 5375: `this.stateDeco = this.state.facet(decorations).filter((d)=>typeof d != "function");`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 5380: `if (this.heightMap.height != prevHeight) update.flags |= 2 /* UpdateFlag.Height */ ;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 5383: `let updateLines = !update.changes.empty || update.flags & 2 /* UpdateFlag.Height */  || viewport.from != this.viewport.from || viewport.to != this.viewport.to;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 5396: `this.defaultTextDirection = style.direction == "rtl" ? Direction.RTL : Direction.LTR;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 5398: `let measureContent = refresh || this.mustMeasureContent || this.contentDOMHeight != dom.clientHeight;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 5404: `if (this.paddingTop != paddingTop || this.paddingBottom != paddingBottom) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 5409: `if (this.editorWidth != view.scrollDOM.clientWidth) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 5419: `if (inView != this.inView) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 5425: `if (this.contentDOMWidth != contentWidth || this.editorHeight != view.scrollDOM.clientHeight) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 5445: `let heights = vp.from == this.viewport.from ? lineHeights : view.docView.measureVisibleLineHeights(vp);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 5487: `if (scrollTarget.y == "center") topPos = (block.top + block.bottom) / 2 - viewHeight / 2;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 5488: `else if (scrollTarget.y == "start" || scrollTarget.y == "nearest" && head < viewport.from) topPos = block.top;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 5506: `return (from == 0 || top <= visibleTop - Math.max(10 /* VP.MinCoverMargin */ , Math.min(-bias, 250 /* VP.MaxCoverMargin */ ))) && (to == this.state.doc.length || bottom >= visibleBottom + Math.max(10 /* VP.MinCoverMargin */ , Math.min(bias, 250 /* VP.MaxCoverMargin */ ))) && top > visibleTop - 2000 /* VP.Margin */  && bottom < visibleBottom + 2000 /* VP.Margin */ ;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 5525: `if (this.defaultTextDirection != Direction.LTR && !wrapping) return [];`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 5558: `if (target != null) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 5573: `if (target != null) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 5614: `let changed = ranges.length != this.visibleRanges.length || this.visibleRanges.some((r, i)=>r.from != ranges[i].from || r.to != ranges[i].to);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 5749: `if (scaler.scale == 1) return block;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 5768: `if (m == "&") return main;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 6030: `let head = iHead && iHead.node == domSel.focusNode && iHead.offset == domSel.focusOffset || !contains(view.contentDOM, domSel.focusNode) ? view.state.selection.main.head : view.docView.posFromDOM(domSel.focusNode, domSel.focusOffset);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 6031: `let anchor = iAnchor && iAnchor.node == domSel.anchorNode && iAnchor.offset == domSel.anchorOffset || !contains(view.contentDOM, domSel.anchorNode) ? view.state.selection.main.anchor : view.docView.posFromDOM(domSel.anchorNode, domSel.anchorOffset);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 6052: `if (browser.chrome && view.inputState.lastKeyCode == 13 && diff.toB == diff.from + 2 && domChange.text.slice(diff.from, diff.toB) == LineBreakPlaceholder + LineBreakPlaceholder) diff.toB--;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 6067: `else if (change && change.from >= sel.from && change.to <= sel.to && (change.from != sel.from || change.to != sel.to) && sel.to - sel.from - (change.to - change.from) <= 4) // If the change is inside the selection and covers most of it,`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 6075: `else if ((browser.mac || browser.android) && change && change.from == change.to && change.from == sel.head - 1 && /^\. ?$/.test(change.insert.toString())) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 6078: `if (newSel && change.insert.length == 2) newSel = (0, _state.EditorSelection).single(newSel.main.anchor - 1, newSel.main.head - 1);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 6086: `} else if (browser.chrome && change && change.from == change.to && change.from == sel.head && change.insert.toString() == "\n " && view.lineWrapping) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 6108: `if (browser.android && (change.from == sel.from && change.to == sel.to && change.insert.length == 1 && change.insert.lines == 2 && dispatchKey(view.contentDOM, "Enter", 13) || change.from == sel.from - 1 && change.to == sel.to && change.insert.length == 0 && dispatchKey(view.contentDOM, "Backspace", 8) || change.from == sel.from && change.to == sel.to + 1 && change.insert.length == 0 && dispatchKey(view.contentDOM, "Delete", 46))) return true;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 6113: `if (change.from >= sel.from && change.to <= sel.to && change.to - change.from >= (sel.to - sel.from) / 3 && (!newSel || newSel.main.empty && newSel.main.from == change.from + change.insert.length) && view.inputState.composing < 0) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 6126: `if (range.from == sel.from && range.to == sel.to) return {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 6131: `if (range.to - range.from != size || view.state.sliceDoc(from, to) != replaced || // Unfortunately, there's no way to make multiple`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 6169: `if (view.inputState.lastSelectionOrigin == "select") scrollIntoView = true;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 6183: `while(from < minLen && a.charCodeAt(from) == b.charCodeAt(from))from++;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 6184: `if (from == minLen && a.length == b.length) return null;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 6186: `while(toA > 0 && toB > 0 && a.charCodeAt(toA - 1) == b.charCodeAt(toB - 1)){`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 6190: `if (preferredSide == "end") {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 6213: `if (view.root.activeElement != view.contentDOM) return result;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 6217: `if (focusNode != anchorNode || focusOffset != anchorOffset) result.push(new DOMPoint(focusNode, focusOffset));`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 6222: `if (points.length == 0) return null;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 6223: `let anchor = points[0].pos, head = points.length == 2 ? points[1].pos : anchor;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 6275: `if ((browser.ie && browser.ie_version <= 11 || browser.ios && view.composing) && mutations.some((m)=>m.type == "childList" && m.removedNodes.length || m.type == "characterData" && m.oldValue.length > m.target.nodeValue.length)) this.flushSoon();`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 6290: `if (typeof ResizeObserver == "function") {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 6299: `if (typeof IntersectionObserver == "function") {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 6302: `if (entries.length > 0 && entries[entries.length - 1].intersectionRatio > 0 != this.intersecting) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 6304: `if (this.intersecting != this.view.inView) this.onScrollChanged(document.createEvent("Event"));`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 6338: `if (this.gapIntersection && (gaps.length != this.gaps.length || this.gaps.some((g, i)=>g != gaps[i]))) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 6348: `if (view.state.facet(editable) ? view.root.activeElement != this.dom : !hasSelection(view.dom, sel)) return;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 6367: `let range = browser.safari && view.root.nodeType == 11 && deepActiveElement(this.dom.ownerDocument) == this.dom && safariSelectionRangeHack(this.view) || getSelection(view.root);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 6393: `if (dom.nodeType == 1) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 6394: `if (!changed && i < this.scrollTargets.length && this.scrollTargets[i] == dom) i++;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 6398: `} else if (dom.nodeType == 11) dom = dom.host;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 6457: `if (!this.delayedAndroidKey || key == "Enter") this.delayedAndroidKey = {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 6494: `if (from == -1) ({ from , to  } = range);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 6527: `if (this.view.state == startState) this.view.update([]);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 6533: `cView.markDirty(rec.type == "attributes");`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 6534: `if (rec.type == "attributes") cView.dirty |= 4 /* Dirty.Attrs */ ;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 6535: `if (rec.type == "childList") {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 6543: `} else if (rec.type == "characterData") return {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 6546: `typeOver: rec.target.nodeValue == rec.oldValue`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 6551: `if (win != this.win) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 6586: `if (curView && curView.parent == cView) return curView;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 6588: `dom = parent != cView.dom ? parent : dir > 0 ? dom.nextSibling : dom.previousSibling;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 6752: `this._dispatch(input.length == 1 && input[0] instanceof (0, _state.Transaction) ? input[0] : this.state.update(...input));`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 6762: `if (this.updateState != 0 /* UpdateState.Idle */ ) throw new Error("Calls to EditorView.update are not allowed while an update is in progress");`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 6766: `if (tr.startState != state) throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 6784: `if (state.facet((0, _state.EditorState).phrases) != this.state.facet((0, _state.EditorState).phrases)) return this.setState(state);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 6804: `if (this.state.facet(styleModule) != this.styleModules) this.mountStyles();`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 6811: `if (update.startState.facet(theme) != update.state.facet(theme)) this.viewState.mustMeasureContent = true;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 6825: `if (this.updateState != 0 /* UpdateState.Idle */ ) throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 6851: `if (prevSpecs != specs) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 6862: `for (let plugin of this.plugins)if (plugin.mustUpdate != update) plugin.destroy(this);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 6885: `if (!changed && !this.measureRequests.length && this.viewState.scrollTarget == null) break;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 6915: `for(let i = 0; i < measuring.length; i++)if (measured[i] != BadMeasure) try {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 6935: `if (this.viewport.from == oldViewport.from && this.viewport.to == oldViewport.to && !scrolled && this.measureRequests.length == 0) break;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 6988: `if (this.updateState == 2 /* UpdateState.Updating */ ) throw new Error("Reading the editor layout isn't allowed during an update");`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 6989: `if (this.updateState == 0 /* UpdateState.Idle */  && this.measureScheduled > -1) this.measure(false);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 7001: `if (request.key != null) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 7017: `if (known === undefined || known && known.spec != plugin) this.pluginMap.set(plugin, known = this.plugins.find((p)=>p.spec == plugin) || null);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 7156: `if (!rect || rect.left == rect.right) return rect;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 7159: `return flattenRect(rect, span.dir == Direction.LTR == side > 0);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 7213: `for (let entry of this.bidiCache)if (entry.from == line.from && entry.dir == dir) return entry.order;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 7226: `return (this.dom.ownerDocument.hasFocus() || browser.safari && ((_a = this.inputState) === null || _a === void 0 ? void 0 : _a.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 7240: `if (this._root != root) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 7242: `this.observer.setWindow((root.nodeType == 9 ? root : root.ownerDocument).defaultView || window);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 7265: `return scrollIntoView.of(new ScrollTarget(typeof pos == "number" ? (0, _state.EditorSelection).cursor(pos) : pos, options.y, options.x, options.yMargin, options.xMargin));`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 7462: `if (entry.dir == lastDir && !changes.touchesRange(entry.from, entry.to)) result.push(new CachedOrder(changes.mapPos(entry.from, 1), changes.mapPos(entry.to, -1), entry.dir, entry.order));`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 7469: `let source = sources[i], value = typeof source == "function" ? source(view) : source;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 7478: `if (result == "Space") result = " ";`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 7487: `if (platform == "mac") meta = true;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 7542: `if (current == null) isPrefix[name] = is;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 7543: `else if (current != is) throw new Error("Key binding " + name + " is used both as a regular binding and as a multi-stroke prefix");`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 7562: `if (storedPrefix == ourObj) storedPrefix = null;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 7601: `let charCode = (0, _state.codePointAt)(name, 0), isChar = (0, _state.codePointSize)(charCode) == name.length && name != " ";`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 7603: `if (storedPrefix && storedPrefix.view == view && storedPrefix.scope == scope) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 7621: `if (isChar && (event.altKey || event.metaKey || event.ctrlKey) && (baseName = (0, _w3CKeyname.base)[event.keyCode]) && baseName != name) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 7623: `else if (event.shiftKey && (shiftName = (0, _w3CKeyname.shift)[event.keyCode]) != name && shiftName != baseName && runFor(scopeObj[prefix + modifiers(shiftName, event, false)])) return true;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 7651: `if (prev.className != this.className) return false;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 7662: `return this.left == p.left && this.top == p.top && this.width == p.width && this.height == p.height && this.className == p.className;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 7666: `return a.constructor == b.constructor && a.eq(b);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 7687: `if (update.startState.facet(layerOrder) != update.state.facet(layerOrder)) this.setOrder(update.state);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 7692: `while(pos < order.length && order[pos] != this.layer)pos++;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 7699: `if (markers.length != this.drawn.length || markers.some((p, i)=>!sameMarker(p, this.drawn[i]))) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 7765: `return update.startState.facet(selectionConfig) != update.startState.facet(selectionConfig);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 7773: `let prim = r == state.selection.main;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 7782: `if (update.transactions.some((tr)=>tr.scrollIntoView)) dom.style.animationName = dom.style.animationName == "cm-blink" ? "cm-blink2" : "cm-blink";`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 7819: `let left = view.textDirection == Direction.LTR ? rect.left : rect.right - view.scrollDOM.clientWidth;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 7836: `if (l.to > pos || l.to == pos && (l.to == line.to || l.type == BlockType.Text)) return l;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 7843: `let ltr = view.textDirection == Direction.LTR;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 7849: `let visualStart = startBlock.type == BlockType.Text ? startBlock : null;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 7850: `let visualEnd = endBlock.type == BlockType.Text ? endBlock : null;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 7855: `if (visualStart && visualEnd && visualStart.from == visualEnd.from) return pieces(drawForLine(range.from, range.to, visualStart));`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 7861: `else if (top.bottom < bottom.top && view.elementAtHeight((top.bottom + bottom.top) / 2).type == BlockType.Text) top.bottom = bottom.top = (top.bottom + bottom.top) / 2;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 7880: `let fromCoords = view.coordsAtPos(from, from == line.to ? -2 : 2);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 7881: `let toCoords = view.coordsAtPos(to, to == line.from ? 2 : -2);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 7884: `if (dir == Direction.LTR) horizontal.push(ltr && fromOpen ? leftSide : fromCoords.left, ltr && toOpen ? rightSide : toCoords.right);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 7894: `if (spanTo > pos) addSpan(Math.max(spanFrom, pos), from == null && spanFrom <= start, Math.min(spanTo, endPos), to == null && spanTo >= end, span.dir);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 7899: `if (horizontal.length == 0) addSpan(start, from == null, end, to == null, view.textDirection);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 7923: `return pos == null ? null : mapping.mapPos(pos);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 7931: `if (pos != null) pos = tr.changes.mapPos(pos);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 7947: `if (cursorPos == null) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 7948: `if (this.cursor != null) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 7957: `if (update.startState.field(dropCursorPos) != cursorPos || update.docChanged || update.geometryChanged) this.view.requestMeasure(this.measureReq);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 7962: `let rect = pos != null && this.view.coordsAtPos(pos);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 7984: `if (this.view.state.field(dropCursorPos) != pos) this.view.dispatch({`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 7997: `if (event.target == this.view.contentDOM || !this.view.contentDOM.contains(event.relatedTarget)) this.setDropPos(null);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 8024: `if (visible.length == 1 && visible[0].from == view.viewport.from && visible[0].to == view.viewport.to) return visible;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 8050: `else if (typeof decoration == "function") this.addMatch = (match, view, from, add)=>{`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 8102: `if (fromLine == toLine) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 8117: `const UnicodeRegexpSupport = /x/.unicode != null ? "gu" : "g";`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 8145: `if (_supportsTabSize == null && typeof document != "undefined" && document.body) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 8147: `_supportsTabSize = ((_a = styles.tabSize) !== null && _a !== void 0 ? _a : styles.MozTabSize) != null;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 8190: `if (code == 9) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 8206: `if (update.startState.facet(specialCharConfig) != conf) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 8220: `if (code == 10) return "␤";`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 8230: `return other.code == this.code;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 8254: `return other.width == this.width;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 8277: `if (height != this.height) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 8341: `wrap.appendChild(typeof this.content == "string" ? document.createTextNode(this.content) : this.content);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 8342: `if (typeof this.content == "string") wrap.setAttribute("aria-label", "placeholder " + this.content);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 8407: `let col = off > MaxOff ? -1 : off == line.length ? absoluteColumn(view, event.clientX) : (0, _state.countColumn)(line.text, view.state.tabSize, offset - line.from);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 8447: `let filter = (options === null || options === void 0 ? void 0 : options.eventFilter) || ((e)=>e.altKey && e.button == 0);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 8485: `if (this.isDown != isDown) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 8493: `this.set(e.keyCode == code || getter(e));`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 8496: `if (e.keyCode == code || !getter(e)) this.set(false);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 8534: `if (other && other.create == tip.create) known = i;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 8593: `this.intersectionObserver = typeof IntersectionObserver == "function" ? new IntersectionObserver((entries)=>{`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 8630: `if (newConfig.position != this.position) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 8635: `if (newConfig.parent != this.parent) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 8641: `} else if (this.parent && this.view.themeClasses != this.classes) this.classes = this.container.className = this.view.themeClasses;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 8695: `let offset = tView.offset || noOffset, ltr = this.view.textDirection == Direction.LTR;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 8698: `if (!tooltip.strictSide && (above ? pos.top - (size.bottom - size.top) - offset.y < space.top : pos.bottom + (size.bottom - size.top) + offset.y > space.bottom) && above == space.bottom - pos.bottom > pos.top - space.top) above = !above;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 8712: `if (this.position == "absolute") {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 8734: `if (this.inView != this.view.inView) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 8859: `end: Math.max(...tooltips.filter((t)=>t.end != null).map((t)=>t.end)),`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 8906: `if (pos == null) return;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 8908: `if (posCoords == null || lastMove.y < posCoords.top || lastMove.y > posCoords.bottom || lastMove.x < posCoords.left - this.view.defaultCharacterWidth || lastMove.x > posCoords.right + this.view.defaultCharacterWidth) return;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 8910: `let rtl = bidi && bidi.dir == Direction.RTL ? -1 : 1;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 8917: `if (this.pending == pending) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 8940: `if (pos == end ? this.view.posAtCoords(this.lastMove) != pos : !isOverRange(this.view, pos, end, event.clientX, event.clientY, 6 /* Hover.MaxDist */ )) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 8962: `for(let cur = elt; cur; cur = cur.parentNode)if (cur.nodeType == 1 && cur.classList.contains("cm-tooltip")) return true;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 9001: `if (newPos == null) return null;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 9004: `if (value.end != null) copy.end = tr.changes.mapPos(value.end);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 9093: `if (this.top.container != conf.topContainer) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 9097: `if (this.bottom.container != conf.bottomContainer) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 9104: `if (input != this.input) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 9160: `if (this.panels.length == 0) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 9175: `for (let panel of this.panels)if (panel.dom.parentNode == this.dom) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 9176: `while(curDOM != panel.dom)curDOM = rm(curDOM);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 9185: `if (!this.container || this.classes == this.view.themeClasses) return;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 9210: `return this == other || this.constructor == other.constructor && this.eq(other);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 9302: `if (this.view.state.facet(unfixGutters) != !this.fixed) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 9317: `for (let b of line.type)if (b.type == BlockType.Text) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 9321: `} else text = line.type == BlockType.Text ? line : undefined;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 9333: `if (prev == cur) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 9362: `if (!value || value.gutters.length == 0 || !value.fixed) return null;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 9363: `return view.textDirection == Direction.LTR ? {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 9377: `if (cursor.from == pos) collect.push(cursor.value);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 9396: `if (localMarkers.length == 0 && !gutter.config.renderEmptyElements) return;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 9398: `if (this.i == gutter.elements.length) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 9441: `if (updated != this.spacer.markers[0]) this.spacer.update(update.view, 0, 0, [`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 9462: `if (this.height != height) this.dom.style.height = (this.height = height) + "px";`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 9463: `if (this.above != above) this.dom.style.marginTop = (this.above = above) ? above + "px" : "";`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 9503: `if (a.length != b.length) return false;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 9533: `return this.number == other.number;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 9554: `lineMarkerChange: (update)=>update.startState.facet(lineNumberConfig) != update.state.facet(lineNumberConfig),`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 9560: `return max == spacer.number ? spacer : new NumberMarker(max);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 9690: `if (other == this) return true;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 9691: `if (other.length != this.length || other.lines != this.lines) return false;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 9698: `if (a.lineBreak != b.lineBreak || a.done != b.done || a.value != b.value) return false;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 9724: `if (from == null) inner = this.iter();`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 9726: `if (to == null) to = this.lines + 1;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 9728: `inner = this.iterRange(start, Math.max(start, to == this.lines + 1 ? this.length : to <= 1 ? 0 : this.line(to - 1).to));`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 9748: `if (text.length == 0) throw new RangeError("A document must have at least one line");`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 9749: `if (text.length == 1 && !text[0]) return Text.empty;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 9816: `if (part.length == 32 /* Tree.Branch */ ) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 9905: `if (iA == eA || iB == eB) return length;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 9907: `if (chA != chB) return length + chA.scanIdentical(chB, dir);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 9939: `if (currentLines == 0) return;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 9940: `chunked.push(currentChunk.length == 1 ? currentChunk[0] : TextNode.from(currentChunk, currentLen));`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 9946: `return chunked.length == 1 ? chunked[0] : new TextNode(chunked, length);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 9996: `if (offset == (dir > 0 ? size : 0)) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 9997: `if (last == 0) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 10005: `} else if ((offsetValue & 1) == (dir > 0 ? 0 : 1)) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 10007: `if (skip == 0) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 10018: `this.value = skip == 0 ? next : dir > 0 ? next.slice(skip) : next.slice(0, next.length - skip);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 10074: `return this.cursor.lineBreak && this.value != "";`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 10105: `if (typeof Symbol != "undefined") {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 10168: `if (pos == str.length) return pos;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 10175: `if (prev == ZWJ || next == ZWJ || includeExtending && isExtendingChar(next)) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 10184: `if (countBefore % 2 == 0) break;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 10210: `if (!surrogateHigh(code0) || pos + 1 == str.length) return code0;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 10285: `return this.sections.length == 0 || this.sections.length == 2 && this.sections[1] < 0;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 10349: `if (mode != MapMode.Simple && endA >= pos && (mode == MapMode.TrackDel && posA < pos && endA > pos || mode == MapMode.TrackBefore && posA < pos || mode == MapMode.TrackAfter && endA > pos)) return null;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 10350: `if (endA > pos || endA == pos && assoc < 0 && !len) return pos == posA || assoc < 0 ? posB : posB + ins;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 10389: `if (!Array.isArray(json) || json.length % 2 || json.some((a)=>typeof a != "number")) throw new RangeError("Invalid JSON representation of ChangeDesc");`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 10413: `if (this.length != doc.length) throw new RangeError("Applying change set to a document with the wrong length");`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 10486: `let next = i == ranges.length ? 1e9 : ranges[i++];`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 10487: `while(pos < next || pos == next && iter.len == 0){`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 10491: `let ins = iter.ins == -1 ? -1 : iter.off == 0 ? iter.ins : 0;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 10502: `addSection(filteredSections, len, iter.ins == -1 ? -1 : iter.off == 0 ? iter.ins : 0);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 10519: `else if (ins == 0) parts.push([`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 10546: `if (spec.length != length) throw new RangeError('Mismatched change set length (got ${spec.length}, expected ${length})');`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 10552: `let insText = !insert ? Text.empty : typeof insert == "string" ? Text.of(insert.split(lineSep || DefaultSplit)) : insert;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 10554: `if (from == to && insLen == 0) return;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 10582: `if (typeof part == "number") sections.push(part, -1);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 10583: `else if (!Array.isArray(part) || typeof part[0] != "number" || part.some((e, i)=>i && typeof e != "string")) throw new RangeError("Invalid JSON representation of ChangeSet");`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 10584: `else if (part.length == 1) sections.push(part[0], 0);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 10600: `if (len == 0 && ins <= 0) return;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 10602: `if (last >= 0 && ins <= 0 && ins == sections[last + 1]) sections[last] += len;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 10603: `else if (len == 0 && sections[last] == 0) sections[last + 1] += ins;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 10610: `if (value.length == 0) return;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 10631: `if (individual || i == desc.sections.length || desc.sections[i + 1] < 0) break;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 10651: `if (a.ins == -1 && b.ins == -1) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 10657: `} else if (b.ins >= 0 && (a.ins < 0 || inserted == a.i || a.off == 0 && (b.len < a.len || b.len == a.len && !before))) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 10679: `if (b.ins == -1) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 10684: `} else if (b.ins == 0 && b.len < left) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 10703: `else if (a.ins == 0) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 10706: `} else if (b.len == 0 && !b.done) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 10713: `if (a.ins == -1) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 10714: `let insB = b.ins == -1 ? -1 : b.off ? 0 : b.ins;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 10717: `} else if (b.ins == -1) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 10748: `return this.ins == -2;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 10759: `return index >= inserted.length && !len ? Text.empty : inserted[index].slice(this.off, len == null ? undefined : this.off + len);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 10762: `if (len == this.len) this.next();`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 10769: `if (this.ins == -1) this.forward(len);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 10770: `else if (len == this.ins) this.next();`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 10807: `return this.from == this.to;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 10822: `return level == 3 ? null : level;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 10831: `return value == 33554431 /* RangeFlag.NoGoalColumn */  ? undefined : value;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 10843: `return from == this.from && to == this.to ? this : new SelectionRange(from, to, this.flags);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 10855: `return this.anchor == other.anchor && this.head == other.head;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 10869: `if (!json || typeof json.anchor != "number" || typeof json.head != "number") throw new RangeError("Invalid JSON representation for SelectionRange");`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 10901: `if (this.ranges.length != other.ranges.length || this.mainIndex != other.mainIndex) return false;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 10916: `return this.ranges.length == 1 ? this : new EditorSelection([`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 10947: `if (!json || !Array.isArray(json.ranges) || typeof json.main != "number" || json.main >= json.ranges.length) throw new RangeError("Invalid JSON representation for EditorSelection");`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 10961: `if (ranges.length == 0) throw new RangeError("A selection needs at least one range");`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 10973: `return SelectionRange.create(pos, pos, (assoc == 0 ? 0 : assoc < 0 ? 4 /* RangeFlag.AssocBefore */  : 8 /* RangeFlag.AssocAfter */ ) | (bidiLevel == null ? 3 : Math.min(2, bidiLevel)) | (goalColumn !== null && goalColumn !== void 0 ? goalColumn : 33554431 /* RangeFlag.NoGoalColumn */ ) << 5 /* RangeFlag.GoalColumnOffset */ );`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 11027: `this.extensions = typeof enables == "function" ? enables(this) : enables;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 11066: `return a == b || a.length == b.length && a.every((e, i)=>e === b[i]);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 11080: `let id = this.id, idx = addresses[id] >> 1, multi = this.type == 2 /* Provider.Multi */ ;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 11083: `if (dep == "doc") depDoc = true;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 11084: `else if (dep == "selection") depSel = true;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 11085: `else if ((((_a = addresses[dep.id]) !== null && _a !== void 0 ? _a : 1) & 1) == 0) depAddrs.push(addresses[dep.id]);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 11104: `if (oldAddr != null) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 11107: `return dep instanceof Facet ? oldState.facet(dep) === state.facet(dep) : dep instanceof StateField ? oldState.field(dep, false) == state.field(dep, false) : true;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 11120: `if (a.length != b.length) return false;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 11138: `if (providerTypes[i] == 2 /* Provider.Multi */ ) for (let val of value)values.push(val);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 11202: `let init = state.facet(initField).find((i)=>i.field == this);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 11222: `if (oldState.config.address[this.id] != null) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 11346: `return addr == null ? facet.default : this.staticValues[addr >> 1];`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 11365: `if (providers.every((p)=>p.type == 0 /* Provider.Static */ )) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 11373: `for (let p of providers)if (p.type == 0 /* Provider.Static */ ) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 11399: `if (known != null) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 11432: `if (status == 4 /* SlotStatus.Computing */ ) throw new Error("Cyclic dependency between fields and/or facets");`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 11534: `return mapped === undefined ? undefined : mapped == this.value ? this : new StateEffect(this.type, mapped);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 11540: `return this.type == type;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 11607: `if (!annotations.some((a)=>a.type == Transaction.time)) this.annotations = annotations.concat(Transaction.time.of(Date.now()));`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 11644: `for (let ann of this.annotations)if (ann.type == type) return ann.value;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 11658: `return this.startState.config != this.state.config;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 11668: `return !!(e && (e == event || e.length > event.length && e.slice(0, event.length) == event && e[event.length] == "."));`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 11715: `if (iA < a.length && (iB == b.length || b[iB] >= a[iA])) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 11798: `else if (Array.isArray(filtered) && filtered.length == 1 && filtered[0] instanceof Transaction) tr = filtered[0];`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 11809: `return spec == tr ? tr : Transaction.create(state, tr.changes, tr.selection, spec.effects, spec.annotations, spec.scrollIntoView);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 11813: `return value == null ? none : Array.isArray(value) ? value : [`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 11842: `if (/\w/.test(ch) || ch > "\x80" && (ch.toUpperCase() != ch.toLowerCase() || nonASCIISingleCaseWordChar.test(ch))) return true;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 11886: `if (addr == null) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 11942: `if (typeof text == "string") text = this.toText(text);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 12008: `if (addr == null) return facet.default;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 12024: `if (value instanceof StateField && this.config.address[value.id] != null) result[prop] = value.spec.toJSON(this.field(fields[prop]), this);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 12034: `if (!json || typeof json.doc != "string") throw new RangeError("Invalid JSON representation for EditorState");`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 12095: `if (i == "$") return "$";`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 12147: `if (cat(text.slice(prev, start)) != CharCategory.Word) break;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 12152: `if (cat(text.slice(end, next)) != CharCategory.Word) break;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 12155: `return start == end ? null : EditorSelection.range(start + from, end + from);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 12203: `return kA.length == kB.length && kA.every((k)=>a[k] == b[k]);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 12288: `return this == other;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 12337: `// 'from' pos when 'end == false', 'to' when 'end == true'.`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 12341: `if (lo == hi) return lo;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 12344: `if (mid == lo) return diff >= 0 ? lo : hi;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 12356: `if (curFrom == curTo) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 12358: `if (mapped == null) continue;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 12360: `if (val.startSide != val.endSide) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 12367: `if (newFrom > newTo || newFrom == newTo && val.startSide > 0 && val.endSide <= 0) continue;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 12437: `if (add.length == 0 && !filter) return this;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 12446: `} else if (cur.rangeIndex == 1 && cur.chunkIndex < this.chunk.length && (i == add.length || this.chunkEnd(cur.chunkIndex) < add[i].from) && (!filter || filterFrom > this.chunkEnd(cur.chunkIndex) || filterTo < this.chunkPos[cur.chunkIndex]) && builder.addChunk(this.chunkPos[cur.chunkIndex], this.chunk[cur.chunkIndex])) cur.nextChunk();`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 12483: `return chunks.length == 0 ? next : new RangeSet(chunkPos, chunks, next || RangeSet.empty, maxPoint);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 12509: `return this.nextLayer == this;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 12534: `if (textDiff.empty && textDiff.length == 0) compare(sideA, 0, sideB, 0, 0, comparator);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 12540: `if (to == null) to = 999999999;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 12543: `if (a.length != b.length) return false;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 12548: `if (sideA.to != sideB.to || !sameValues(sideA.active, sideB.active) || sideA.point && (!sideB.point || !sideA.point.eq(sideB.point))) return false;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 12653: `if (this.from.length == 250 /* C.ChunkSize */ ) this.finishChunk(true);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 12688: `if (this.chunks.length == 0) return next;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 12700: `if (known != null && (textDiff ? textDiff.mapPos(known) : known) == set.chunkPos[i] && !(textDiff === null || textDiff === void 0 ? void 0 : textDiff.touchesRange(known, known + set.chunk[i].length))) shared.add(set.chunk[i]);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 12739: `for(;;)if (this.chunkIndex == this.layer.chunk.length) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 12754: `if (index == this.layer.chunk[this.chunkIndex].value.length) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 12778: `return heap.length == 1 ? heap[0] : new HeapCursor(heap);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 12795: `if (this.heap.length == 0) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 12872: `// After calling this, if 'this.point' != null, the next range is a`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 12900: `} else if (wasPoint && this.cursor.to == this.to && this.cursor.from < this.cursor.to) // Ignore any non-empty points that end precisely at the end of the prev point`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 12924: `if (this.activeTo[i] > to || this.activeTo[i] == to && this.active[i].endSide >= this.point.endSide) active.push(this.active[i]);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 12943: `if (!(a.point && b.point && (a.point == b.point || a.point.eq(b.point)) && sameValues(a.activeForPoint(a.to + dPos), b.activeForPoint(b.to)))) comparator.comparePoint(pos, clipEnd, a.point, b.point);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 12952: `if (a.length != b.length) return false;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 12953: `for(let i = 0; i < a.length; i++)if (a[i] != b[i] && !a[i].eq(b[i])) return false;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 12977: `for(let i = 0; i < to;)if (string.charCodeAt(i) == 9) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 12995: `if (i == string.length) break;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 12996: `n += string.charCodeAt(i) == 9 ? tabSize - n % tabSize : 1;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 13046: `const COUNT = typeof Symbol == "undefined" ? "__" + C : Symbol.for(C);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 13047: `const SET = typeof Symbol == "undefined" ? "__styleSet" + Math.floor(Math.random() * 1e8) : Symbol("styleSet");`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 13048: `const top = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : {};`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 13064: `let local = [], isAt = /^@(\w+)\b/.exec(selectors[0]), keyframes = isAt && isAt[1] == "keyframes";`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 13065: `if (isAt && spec == null) return target.push(selectors[0] + ";");`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 13069: `else if (value && typeof value == "object") {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 13072: `} else if (value != null) local.push(prop.replace(/_.*/, "").replace(/[A-Z]/g, (l)=>"-" + l.toLowerCase()) + ": " + value + ";");`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 13112: `if (!root.head && root.adoptedStyleSheets && typeof CSSStyleSheet != "undefined") {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 13142: `if (index == -1) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 13269: `var chrome = typeof navigator != "undefined" && /Chrome\/(\d+)/.exec(navigator.userAgent);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 13270: `var gecko = typeof navigator != "undefined" && /Gecko\/\d+/.test(navigator.userAgent);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 13271: `var mac = typeof navigator != "undefined" && /Mac/.test(navigator.platform);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 13272: `var ie = typeof navigator != "undefined" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 13286: `var ignoreKey = brokenModifierNames && (event.ctrlKey || event.altKey || event.metaKey) || ie && event.shiftKey && event.key && event.key.length == 1 || event.key == "Unidentified";`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 13289: `if (name == "Esc") name = "Escape";`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 13290: `if (name == "Del") name = "Delete";`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 13292: `if (name == "Left") name = "ArrowLeft";`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 13293: `if (name == "Up") name = "ArrowUp";`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 13294: `if (name == "Right") name = "ArrowRight";`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 13295: `if (name == "Down") name = "ArrowDown";`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 13413: `return languageDataFacetAt(state, pos, side) == this.data;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 13421: `if ((lang === null || lang === void 0 ? void 0 : lang.data) == this.data) return [`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 13430: `if (tree.prop(languageDataProp) == this.data) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 13439: `if (mount.tree.prop(languageDataProp) == this.data) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 13546: `if (success != syntaxTree(view.state)) view.dispatch({});`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 13636: `if (upto != null && upto >= this.state.doc.length) upto = undefined;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 13637: `if (this.tree != (0, _common.Tree).empty && this.isDone(upto !== null && upto !== void 0 ? upto : this.state.doc.length)) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 13643: `if (typeof until == "number") {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 13648: `if (upto != null && (this.parse.stoppedAt == null || this.parse.stoppedAt > upto) && upto < this.state.doc.length) this.parse.stopAt(upto);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 13652: `this.fragments = this.withoutTempSkipped((0, _common.TreeFragment).addTree(done, this.fragments, this.parse.stoppedAt != null));`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 13668: `if (this.parse.stoppedAt == null || this.parse.stoppedAt > pos) this.parse.stopAt(pos);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 13727: `if (this.viewport.from == viewport.from && this.viewport.to == viewport.to) return false;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 13797: `return this.treeLen >= upto && frags.length && frags[0].from == 0 && frags[0].to >= upto;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 13824: `if (!tr.docChanged && this.tree == this.context.tree) return this;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 13829: `let upto = this.context.treeLen == tr.startState.doc.length ? undefined : Math.max(tr.changes.mapPos(this.context.treeLen), newCx.viewport.to);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 13847: `if (tr.startState.facet(language) != tr.state.facet(language)) return LanguageState.init(tr.state);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 13855: `if (typeof requestIdleCallback != "undefined") requestIdle = (callback)=>{`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 13863: `const isInputPending = typeof navigator != "undefined" && ((_a = navigator.scheduling) === null || _a === void 0 ? void 0 : _a.isInputPending) ? ()=>navigator.scheduling.isInputPending() : null;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 13888: `if (field.tree != field.context.tree || !field.context.isDone(state.doc.length)) this.working = requestIdle(this.work);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 13899: `if (field.tree == field.context.tree && field.context.isDone(vpTo + 100000 /* Work.MaxParseAhead */ )) return;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 14050: `for (let d of descs)if (d.alias.some((a)=>a == name)) return d;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 14085: `return unit.charCodeAt(0) == 9 ? state.tabSize * unit.length : unit.length;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 14094: `if (state.facet(indentUnit).charCodeAt(0) == 9) while(cols >= ts){`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 14134: `if (indent == null) continue;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 14138: `if (cur != norm) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 14176: `if (simulateBreak != null && simulateBreak >= line.from && simulateBreak <= line.to) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 14177: `if (simulateDoubleBreak && simulateBreak == pos) return {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 14196: `if (this.options.simulateDoubleBreak && pos == this.options.simulateBreak) return "";`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 14246: `return cx.pos == cx.options.simulateBreak && cx.options.simulateDoubleBreak;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 14256: `return tree.parent == null ? topIndent : null;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 14305: `while(atBreak.parent && atBreak.parent.from == atBreak.from)atBreak = atBreak.parent;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 14320: `for(let cur = of; cur; cur = cur.parent)if (parent == cur) return true;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 14332: `let lineEnd = sim == null || sim <= openLine.from ? openLine.to : Math.min(openLine.to, sim);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 14335: `if (!next || next == last) return null;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 14355: `let closed = closing && after.slice(space, space + closing.length) == closing || closedAt == context.pos + space;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 14402: `if (line.from == last) continue;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 14405: `if (indent == null) continue;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 14408: `if (cur != norm) changes.push({`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 14455: `if (prop && (cur.to < tree.length - 50 || tree.length == state.doc.length || !isUnfinished(cur))) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 14464: `return ch && ch.to == node.to && ch.type.isError;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 14528: `filter: (from, to)=>e.value.from != from || e.value.to != to,`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 14560: `if (typeof from != "number" || typeof to != "number") throw new RangeError("Invalid JSON for fold state");`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 14586: `if (a == from && b == to) found = true;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 14748: `return this.config == other.config && this.open == other.open;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 14771: `if (update.docChanged || update.viewportChanged || update.startState.facet(language) != update.state.facet(language) || update.startState.field(foldState, false) != update.state.field(foldState, false) || syntaxTree(update.startState) != syntaxTree(update.state) || fullConfig.foldingChanged(update)) this.markers = this.buildMarkers(update.view);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 14847: `const all = typeof options.all == "string" ? options.all : options.all ? def(options.all) : undefined;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 14849: `this.scope = scopeOpt instanceof Language ? (type)=>type.prop(languageDataProp) == scopeOpt.data : scopeOpt ? (type)=>type == scopeOpt : undefined;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 14909: `return state.facet((0, _view.EditorView).darkTheme) == (themeType == "dark") ? [`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 14941: `let styleChange = highlighters != getHighlighters(update.startState);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 14942: `if (tree.length < update.view.viewport.to && !styleChange && tree.type == this.tree.type) this.decorations = this.decorations.map(update.changes);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 14943: `else if (tree != this.tree || update.viewportChanged || styleChange) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 15131: `if (node.name.length == 1) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 15133: `if (index > -1 && index % 2 == (dir < 0 ? 1 : 0)) return [`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 15160: `if (depth == 0 && matching.indexOf(cursor.type.name) > -1 && cursor.from < cursor.to) return {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 15170: `if (depth == 0) return {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 15172: `end: cursor.from == cursor.to ? undefined : {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 15190: `if (bracket < 0 || bracket % 2 == 0 != dir > 0) return null;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 15200: `for(let pos = dir > 0 ? 0 : text.length - 1, end = dir > 0 ? text.length : -1; pos != end; pos += dir){`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 15202: `if (found < 0 || tree.resolveInner(basePos + pos, 1).type != tokenType) continue;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 15203: `if (found % 2 == 0 == dir > 0) depth++;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 15204: `else if (depth == 1) return {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 15210: `matched: found >> 1 == bracket >> 1`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 15224: `if (end == null) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 15226: `if (end == -1) end = string.length;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 15229: `for(let i = startIndex; i < end; i++)if (string.charCodeAt(i) == 9) n += tabSize - n % tabSize;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 15264: `return this.pos == 0;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 15283: `if (typeof match == "string") ok = ch == match;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 15352: `if (typeof pattern == "string") {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 15355: `if (cased(substr) == cased(pattern)) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 15385: `if (typeof state != "object") return state;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 15423: `while(at && at.type != this.topNode)at = at.parent;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 15440: `if (end == pos) break;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 15465: `if (!inside && tree.type == lang.topNode) inside = true;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 15519: `let parseEnd = this.stoppedAt == null ? this.to : Math.min(this.to, this.stoppedAt);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 15539: `} else if (chunk == "\n") chunk = "";`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 15549: `if (index == this.ranges.length) break;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 15708: `else if (typeof value == "function") {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 15787: `if (typeof match != "function") match = NodeType.match(match);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 15875: `let flags = (spec.top ? 1 /* NodeFlag.Top */  : 0) | (spec.skipped ? 2 /* NodeFlag.Skipped */  : 0) | (spec.error ? 4 /* NodeFlag.Error */  : 0) | (spec.name == null ? 8 /* NodeFlag.Anonymous */  : 0);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 15911: `if (typeof name == "string") {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 15912: `if (this.name == name) return true;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 15916: `return this.id == name;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 15950: `for(let i = 0; i < types.length; i++)if (types[i].id != i) throw new RangeError("Node type ids should correspond to array positions when creating a node set");`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 16025: `for (let [prop, value] of props)this.props[typeof prop == "number" ? prop : prop.id] = value;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 16198: `if (endIndex == index) return result;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 16209: `for(let i = startIndex; i != endIndex; i = buffer[i + 3])if (checkSide(side, pos, buffer[i + 1], buffer[i + 2])) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 16249: `if (!last || last.to != scan.to) break;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 16250: `if (last.type.isError && last.from == last.to) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 16260: `while(node.from == node.to || (side < 1 ? node.from >= pos : node.from > pos) || (side > -1 ? node.to <= pos : node.to < pos)){`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 16268: `for(let scan = node, parent = scan.parent; parent; scan = parent, parent = scan.parent)if (scan instanceof TreeNode && scan.index < 0 && ((_a = parent.enter(pos, side, mode)) === null || _a === void 0 ? void 0 : _a.from) != scan.from) node = parent;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 16295: `for(let { children , positions  } = parent._tree, e = dir > 0 ? children.length : -1; i != e; i += dir){`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 16391: `if (before != null) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 16395: `if (after != null && cur.type.is(after)) return result;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 16397: `if (!cur.nextSibling()) return after == null ? result : [];`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 16404: `if (context[i] && context[i] != p.name) return false;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 16472: `if (this.index == parentStart) return this.externalSibling(-1);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 16623: `if (this.index != parentStart) return this.yieldBuf(buffer.findChild(parentStart, this.index, -1, 0, 4 /* Side.DontCare */ ));`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 16649: `if (index > -1) for(let i = index + dir, e = dir < 0 ? -1 : parent._tree.children.length; i != e; i += dir){`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 16683: `while(this.from == this.to || (side < 1 ? this.from >= pos : this.from > pos) || (side > -1 ? this.to <= pos : this.to < pos))if (!this.parent()) break;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 16693: `if (cache && cache.context == this.buffer) scan: for(let index = this.index, d = this.stack.length; d >= 0;){`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 16694: `for(let c = cache; c; c = c._parent)if (c.index == index) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 16695: `if (index == this.index) return c;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 16746: `if (context[i] && context[i] != type.name) return false;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 16767: `if (size == -1 /* SpecialRecord.Reuse */ ) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 16772: `} else if (size == -3 /* SpecialRecord.ContextChange */ ) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 16775: `} else if (size == -4 /* SpecialRecord.LookAhead */ ) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 16795: `while(cursor.pos > endPos)if (localInRepeat >= 0 && cursor.id == localInRepeat && cursor.size >= 0) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 16818: `if (!lastI && last.type == type && last.length == length) return last;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 16875: `if (fork.id == inRepeat && nodeSize >= 0) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 16893: `if (fork.size == -3 /* SpecialRecord.ContextChange */ ) localSkipped += 4;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 16902: `if (inRepeat < 0 || size == maxSize) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 16922: `} else if (size == -3 /* SpecialRecord.ContextChange */ ) contextHash = id;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 16923: `else if (size == -4 /* SpecialRecord.LookAhead */ ) lookAhead = id;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 16933: `if (!balanceType.isAnonymous || node instanceof TreeBuffer || node.type != balanceType) return 1;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 16935: `if (size == null) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 16938: `if (child.type != balanceType || !(child instanceof Tree)) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 16969: `if (i == groupFrom + 1) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 17113: `if (typeof input == "string") input = new StringInput(input);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 17199: `if (this.stoppedAt != null) for (let inner of this.inner)inner.parse.stopAt(this.stoppedAt);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 17201: `if (this.innerDone == this.inner.length) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 17203: `if (this.stoppedAt != null) result = new Tree(result.type, result.children, result.positions, result.length, result.propValues.concat([`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 17240: `scan: for(let nest, isCovered; this.stoppedAt == null || cursor.from < this.stoppedAt;){`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 17254: `} else if (covered && (isCovered = checkCover(covered.ranges, cursor.from, cursor.to))) enter = isCovered != 2 /* Cover.Full */ ;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 17258: `if (typeof nest.overlay == "function") overlay = new ActiveOverlay(nest.parser, nest.overlay, oldMounts, this.inner.length, cursor.from, cursor.tree, overlay);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 17334: `let isTarget = from + off == node.from && to + off == node.to && b[i] == node.type.id;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 17360: `if (!this.done && this.cursor.from + this.offset == cursor.from && this.cursor.tree) for(let tree = this.cursor.tree;;){`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 17361: `if (tree == cursor.tree) return true;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 17362: `if (tree.children.length && tree.positions[0] == 0 && tree.children[0] instanceof Tree) tree = tree.children[0];`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 17387: `if (this.fragI == this.fragments.length) this.curFrag = this.inner = null;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 17401: `if (mount && mount.parser == parser) for(let i = this.fragI; i < this.fragments.length; i++){`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 17404: `if (frag.tree == this.curFrag.tree) result.push({`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 17437: `let nextA = iA == a.length ? 1e9 : inA ? a[iA].to : a[iA].from;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 17438: `let nextB = iB == b.length ? 1e9 : inB ? b[iB].to : b[iB].from;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 17439: `if (inA != inB) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 17444: `if (pos == 1e9) break;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 17445: `if (nextA == pos) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 17452: `if (nextB == pos) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 17474: `let last = i == changes.length, end = last ? to : changes[i].from;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 17542: `/// == m1(t1)') and applying multiple modifiers will, regardless or`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 17543: `/// order, produce the same tag ('m1(m2(t1)) == m2(m1(t1))').`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 17565: `let exists = mods[0].instances.find((t)=>t.base == base && sameArray(mods, t.modified));`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 17575: `return a.length == b.length && a.every((x, i)=>x == b[i]);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 17643: `if (rest == "..." && pos > 0 && pos + 3 == part.length) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 17649: `pieces.push(m[0] == "*" ? "" : m[0][0] == '"' ? JSON.parse(m[0]) : m[0]);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 17651: `if (pos == part.length) break;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 17653: `if (pos == part.length && next == "!") {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 17657: `if (next != "/") throw new RangeError("Invalid path: " + part);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 17677: `return this.mode == 0 /* Mode.Opaque */ ;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 17680: `return this.mode == 1 /* Mode.Inherit */ ;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 17750: `if (cls != this.class) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 17769: `if (rule.mode == 1 /* Mode.Inherit */ ) inheritedClass += (inheritedClass ? " " : "") + tagCls;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 18367: `if (textBefore.slice(beforeOff - open.length, beforeOff) == open && textAfter.slice(spaceAfter, spaceAfter + close.length) == close) return {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 18385: `if (startText.slice(startSpace, startSpace + open.length) == open && endText.slice(endOff, endOff + close.length) == close) return {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 18417: `if (option != 2 /* CommentOption.Uncomment */  && !comments.every((c)=>c)) return {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 18432: `else if (option != 1 /* CommentOption.Comment */  && comments.some((c)=>c)) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 18458: `if (line.from > prevLine && (from == to || to > line.from)) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 18463: `let empty = indent == line.length;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 18464: `let comment = line.text.slice(indent, indent + token.length) == token ? indent : -1;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 18480: `if (lines.length == startI + 1) lines[startI].single = true;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 18482: `if (option != 2 /* CommentOption.Uncomment */  && lines.some((l)=>l.comment < 0 && (!l.empty || l.single))) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 18493: `} else if (option != 1 /* CommentOption.Comment */  && lines.some((l)=>l.comment >= 0)) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 18497: `if (line.text[to - line.from] == " ") to++;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 18550: `let other = from == 0 /* BranchName.Done */  ? state.undone : state.done;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 18553: `return new HistoryState(from == 0 /* BranchName.Done */  ? fromHist.rest : other, from == 0 /* BranchName.Done */  ? other : fromHist.rest);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 18556: `if (isolate == "full" || isolate == "before") state = state.isolate();`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 18562: `if (isolate == "full" || isolate == "after") state = state.isolate();`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 18583: `let command = e.inputType == "historyUndo" ? undo : e.inputType == "historyRedo" ? redo : null;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 18627: `let branch = side == 0 /* BranchName.Done */  ? histState.done : histState.undone;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 18644: `// changes == startSelection == undefined`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 18707: `return a.ranges.length == b.ranges.length && a.ranges.filter((r, i)=>r.empty != b.ranges[i].empty).length === 0;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 18779: `userEvent == "input.type.compose")) done = updateBranch(done, done.length - 1, maxLen, new HistEvent(event.changes.compose(lastEvent.changes), conc(event.effects, lastEvent.effects), lastEvent.mapped, lastEvent.startSelection, none));`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 18785: `if (last.length > 0 && time - this.prevTime < newGroupDelay && userEvent == this.prevUserEvent && userEvent && /^select($|\.)/.test(userEvent) && eqSelectionShape(last[last.length - 1], selection)) return this;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 18792: `let branch = side == 0 /* BranchName.Done */  ? this.done : this.undone;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 18793: `if (branch.length == 0) return null;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 18801: `userEvent: side == 0 /* BranchName.Done */  ? "select.undo" : "select.redo",`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 18806: `let rest = branch.length == 1 ? none : branch.slice(0, branch.length - 1);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 18817: `userEvent: side == 0 /* BranchName.Done */  ? "undo" : "redo",`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 18883: `return view.textDirectionAt(view.state.selection.main.head) == (0, _view.Direction).LTR;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 18923: `if (cat == (0, _state.CharCategory).Space) cat = nextCat;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 18924: `if (cat != nextCat) return false;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 18925: `if (cat == (0, _state.CharCategory).Word) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 18926: `if (next.toLowerCase() == next) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 18933: `if (sawUpper && forward && categorize(ahead = view.state.sliceDoc(pos, pos + 1)) == (0, _state.CharCategory).Word && ahead.toLowerCase() == ahead) return false;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 18983: `return moved.head != range.head ? moved : view.moveToLineBoundary(range, forward);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 19020: `if (moved.head == start.head && moved.head != (forward ? line.to : line.from)) moved = view.moveToLineBoundary(start, forward, false);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 19021: `if (!forward && moved.head == line.from && line.length) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 19023: `if (space && start.head != line.from + space) moved = (0, _state.EditorSelection).cursor(line.from + space);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 19054: `let head = matching.start.from == range.head ? matching.end.to : matching.end.from;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 19253: `if (from == to) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 19268: `return from == to ? {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 19282: `effects: event == "delete.selection" ? (0, _view.EditorView).announce.of(state.phrase("Selection deleted")) : undefined`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 19295: `if (before[before.length - 1] == "	") return pos - 1;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 19297: `for(let i = 0; i < drop && before[before.length - 1 - i] == " "; i++)pos--;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 19301: `if (targetPos == pos && line.number != (forward ? state.doc.lines : 1)) targetPos += forward ? 1 : -1;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 19316: `if (pos == (forward ? line.to : line.from)) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 19317: `if (pos == start && line.number != (forward ? state.doc.lines : 1)) pos += forward ? 1 : -1;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 19323: `if (cat != null && nextCat != cat) break;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 19324: `if (nextChar != " " || pos != start) cat = nextCat;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 19408: `if (!range.empty || range.from == 0 || range.from == state.doc.length) return {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 19412: `let from = pos == line.from ? pos - 1 : (0, _state.findClusterBreak)(line.text, pos - line.from, false) + line.from;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 19413: `let to = pos == line.to ? pos + 1 : (0, _state.findClusterBreak)(line.text, pos - line.from, true) + line.from;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 19434: `if (!range.empty && range.to == endLine.from) endLine = state.doc.lineAt(range.to - 1);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 19454: `if (forward ? block.to == state.doc.length : block.from == 0) continue;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 19553: `if (before && after && before.to <= pos && after.from >= pos && (closedBy = before.type.prop((0, _common.NodeProp).closedBy)) && closedBy.indexOf(after.name) > -1 && state.doc.lineAt(before.to).from == state.doc.lineAt(after.from).from) return {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 19574: `let explode = !atEof && from == to && isBetweenBrackets(state, from);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 19581: `if (indent == null) indent = /^\s*/.exec(state.doc.lineAt(from).text)[0].length;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 19635: `return found == null ? -1 : found;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 19640: `if (indent == null) return;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 19644: `if (cur != norm || range.from < line.from + cur.length) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 19683: `while(keep < space.length && keep < insert.length && space.charCodeAt(keep) == insert.charCodeAt(keep))keep++;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 20097: `const basicNormalize = typeof String.prototype.normalize == "function" ? (x)=>x.normalize("NFKD") : (x)=>x;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 20136: `if (this.bufferPos == this.buffer.length) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 20175: `if (i == norm.length - 1) break;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 20176: `if (pos == start && i < str.length && str.charCodeAt(i) == code) pos++;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 20184: `if (this.query.charCodeAt(index) == code) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 20185: `if (index == this.query.length - 1) match = {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 20199: `if (this.query.charCodeAt(0) == code) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 20200: `if (this.query.length == 1) match = {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 20210: `if (typeof Symbol != "undefined") SearchCursor.prototype[Symbol.iterator] = function() {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 20218: `const baseFlags = "gm" + (/x/.unicode == null ? "" : "u");`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 20272: `this.matchPos = toCharEnd(this.text, to + (from == to ? 1 : 0));`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 20273: `if (from == this.curLineStart + this.curLine.length) this.nextLine();`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 20310: `if (cached.from == from && cached.to == to) return cached;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 20340: `if (match && !match[0] && match.index == off) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 20354: `this.matchPos = toCharEnd(this.text, to + (from == to ? 1 : 0));`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 20358: `if (this.flat.to == this.to) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 20367: `if (typeof Symbol != "undefined") RegExpCursor.prototype[Symbol.iterator] = MultilineRegExpCursor.prototype[Symbol.iterator] = function() {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 20392: `if (event.keyCode == 27) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 20398: `} else if (event.keyCode == 13) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 20420: `if (sign) pc = pc * (sign == "-" ? -1 : 1) + startLine.number / state.doc.lines;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 20422: `} else if (ln && sign) line = line * (sign == "-" ? -1 : 1) + startLine.number;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 20463: `if (view.state.field(dialogField, false) == null) effects.push((0, _state.StateEffect).appendConfig.of([`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 20519: `return (from == 0 || check(state.sliceDoc(from - 1, from)) != (0, _state.CharCategory).Word) && (to == state.doc.length || check(state.sliceDoc(to, to + 1)) != (0, _state.CharCategory).Word);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 20523: `return check(state.sliceDoc(from, from + 1)) == (0, _state.CharCategory).Word && check(state.sliceDoc(to - 1, to)) == (0, _state.CharCategory).Word;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 20594: `let word = state.wordAt(main.head), fullWord = word && word.from == main.from && word.to == main.to;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 20602: `if (cycled && ranges.some((r)=>r.from == cursor.value.from)) continue;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 20605: `if (!word || word.from != cursor.value.from || word.to != cursor.value.to) continue;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 20621: `if (state.selection.ranges.some((r)=>state.sliceDoc(r.from, r.to) != searchedText)) return false;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 20670: `return this.literal ? text : text.replace(/\\([nrt\\])/g, (_, ch)=>ch == "n" ? "\n" : ch == "r" ? "\r" : ch == "t" ? "	" : "\\");`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 20675: `return this.search == other.search && this.replace == other.replace && this.caseSensitive == other.caseSensitive && this.regexp == other.regexp && this.wholeWord == other.wholeWord;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 20689: `if (to == null) to = st.doc.length;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 20707: `return (categorizer(charBefore(buf, from - bufPos)) != (0, _state.CharCategory).Word || categorizer(charAfter(buf, from - bufPos)) != (0, _state.CharCategory).Word) && (categorizer(charAfter(buf, to - bufPos)) != (0, _state.CharCategory).Word || categorizer(charBefore(buf, to - bufPos)) != (0, _state.CharCategory).Word);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 20727: `if (start == from) return null;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 20763: `return (_from, _to, match)=>!match[0].length || (categorizer(charBefore(match.input, match.index)) != (0, _state.CharCategory).Word || categorizer(charAfter(match.input, match.index)) != (0, _state.CharCategory).Word) && (categorizer(charAfter(match.input, match.index + match[0].length)) != (0, _state.CharCategory).Word || categorizer(charBefore(match.input, match.index + match[0].length)) != (0, _state.CharCategory).Word);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 20776: `if (range && (start == from || range.from > start + 10)) return range;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 20777: `if (start == from) return null;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 20784: `return this.spec.unquote(this.spec.replace.replace(/\$([$&\d+])/g, (m, i)=>i == "$" ? "$" : i == "&" ? result.match[0] : i != "0" && +i < result.match.length ? result.match[i] : m));`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 20830: `return ((_a = state.field(searchState, false)) === null || _a === void 0 ? void 0 : _a.panel) != null;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 20850: `if (state != update.startState.field(searchState) || update.docChanged || update.selectionSet || update.viewportChanged) this.decorations = this.highlight(state);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 20860: `let selected = view.state.selection.ranges.some((r)=>r.from == from && r.to == to);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 20934: `if (cur.value.from == from) main = ranges.length;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 20952: `if (next.from == from && next.to == to) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 20963: `let off = changes.length == 0 || changes[0].from >= next.to ? 0 : next.to - next.from - replacement.length;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 21025: `if (searchInput && searchInput != view.root.activeElement) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 21218: `else if (e.keyCode == 13 && e.target == this.searchField) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 21221: `} else if (e.keyCode == 13 && e.target == this.replaceField) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 21256: `if (start != line.from) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 21262: `if (end != lineEnd) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 21319: `if (typeof elt == "string") elt = document.createElement(elt);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 21321: `if (next && typeof next == "object" && next.nodeType == null && !Array.isArray(next)) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 21324: `if (typeof value == "string") elt.setAttribute(name, value);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 21325: `else if (value != null) elt[name] = value;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 21334: `if (typeof child == "string") elt.appendChild(document.createTextNode(child));`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 21335: `else if (child == null) ;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 21336: `else if (child.nodeType != null) elt.appendChild(child);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 21430: `return this.abortListeners == null;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 21437: `if (type == "abort" && this.abortListeners) this.abortListeners.push(listener);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 21462: `let options = list.map((o)=>typeof o == "string" ? {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 21511: `let addStart = start && source[0] != "^", addEnd = source[source.length - 1] != "$";`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 21525: `if (range == state.selection.main) return {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 21534: `if (!range.empty || len && state.sliceDoc(range.from - len, range.from) != state.sliceDoc(from, to)) return {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 21552: `if (typeof apply == "string") view.dispatch(Object.assign(Object.assign({}, insertCompletionText(view.state, apply, result.from, result.to)), {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 21581: `this.folded.push((0, _state.codePointAt)(upper == part ? part.toLowerCase() : upper, 0));`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 21584: `this.astral = pattern.length != this.chars.length;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 21594: `if (this.pattern.length == 0) return [`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 21601: `if (chars.length == 1) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 21603: `return first == chars[0] ? [`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 21607: `] : first == folded[0] ? [`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 21614: `if (direct == 0) return [`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 21623: `if (next == chars[anyTo] || next == folded[anyTo]) any[anyTo++] = i;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 21643: `if (preciseTo < len && next == chars[preciseTo]) precise[preciseTo++] = i;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 21645: `if (next == chars[adjacentTo] || next == folded[adjacentTo]) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 21646: `if (adjacentTo == 0) adjacentStart = i;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 21652: `let ch, type = next < 0xff ? next >= 48 && next <= 57 || next >= 97 && next <= 122 ? 2 /* Tp.Lower */  : next >= 65 && next <= 90 ? 1 /* Tp.Upper */  : 0 /* Tp.NonWord */  : (ch = (0, _state.fromCodePoint)(next)) != ch.toLowerCase() ? 1 /* Tp.Upper */  : ch != ch.toUpperCase() ? 2 /* Tp.Lower */  : 0 /* Tp.NonWord */ ;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 21653: `if (!i || type == 1 /* Tp.Upper */  && hasLower || prevType == 0 /* Tp.NonWord */  && type != 0 /* Tp.NonWord */ ) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 21654: `if (chars[byWordTo] == next || folded[byWordTo] == next && (byWordFolded = true)) byWord[byWordTo++] = i;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 21660: `if (byWordTo == len && byWord[0] == 0 && wordAdjacent) return this.result(-100 /* Penalty.ByWord */  + (byWordFolded ? -200 /* Penalty.CaseFold */  : 0), byWord, word);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 21661: `if (adjacentTo == len && adjacentStart == 0) return [`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 21671: `if (adjacentTo == len) return [`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 21676: `if (byWordTo == len) return this.result(-100 /* Penalty.ByWord */  + (byWordFolded ? -200 /* Penalty.CaseFold */  : 0) + -700 /* Penalty.NotStart */  + (wordAdjacent ? 0 : -1100 /* Penalty.Gap */ ), byWord, word);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 21677: `return chars.length == 2 ? null : this.result((any[0] ? -700 /* Penalty.NotStart */  : 0) + -200 /* Penalty.CaseFold */  + -1100 /* Penalty.Gap */ , any, word);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 21685: `if (i > 1 && result[i - 1] == pos) result[i - 1] = to;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 21801: `for(let dom = e.target, match; dom && dom != this.dom; dom = dom.parentNode)if (dom.nodeName == "LI" && (match = /-(\d+)$/.exec(dom.id)) && +match[1] < options.length) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 21819: `if (cState != prevState) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 21821: `if (((_a = cState.open) === null || _a === void 0 ? void 0 : _a.disabled) != ((_b = prevState.open) === null || _b === void 0 ? void 0 : _b.disabled)) this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!((_c = cState.open) === null || _c === void 0 ? void 0 : _c.disabled));`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 21849: `if (node && this.view.state.field(this.stateField, false) == cState) this.addInfoPane(node);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 21864: `if (i == selected) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 21891: `let rtl = this.view.textDirection == (0, _view.Direction).RTL, left = rtl, narrow = false, maxWidth;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 21977: `if (option.boost != null) match[0] += option.boost;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 21985: `if (!prev || prev.label != opt.completion.label || prev.detail != opt.completion.detail || prev.type != null && opt.completion.type != null && prev.type != opt.completion.type || prev.apply != opt.completion.apply) result.push(opt);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 22001: `return selected == this.selected || selected >= this.options.length ? this : new CompletionDialog(this.options, makeAttrs(id, selected), this.tooltip, this.timestamp, selected, this.disabled);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 22005: `if (!options.length) return prev && active.some((a)=>a.state == 1 /* State.Pending */ ) ? new CompletionDialog(prev.options, prev.attrs, prev.tooltip, prev.timestamp, prev.selected, true) : null;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 22007: `if (prev && prev.selected != selected && prev.selected != -1) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 22009: `for(let i = 0; i < options.length; i++)if (options[i].completion == selectedValue) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 22039: `let value = this.active.find((s)=>s.source == source) || new ActiveSource(source, this.active.some((a)=>a.state != 0 /* State.Inactive */ ) ? 1 /* State.Pending */  : 0 /* State.Inactive */ );`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 22042: `if (active.length == this.active.length && active.every((a, i)=>a == this.active[i])) active = this.active;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 22045: `else if (open && open.disabled && !active.some((a)=>a.state == 1 /* State.Pending */ )) open = null;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 22047: `if (!open && active.every((a)=>a.state != 1 /* State.Pending */ ) && active.some((a)=>a.hasResult())) active = active.map((a)=>a.hasResult() ? new ActiveSource(a.source, 0 /* State.Inactive */ ) : a);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 22049: `return active == this.active && open == this.open ? this : new CompletionState(active, this.id, open);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 22059: `if (a == b) return true;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 22063: `let endA = iA == a.length, endB = iB == b.length;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 22064: `if (endA || endB) return endA == endB;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 22065: `if (a[iA++].result != b[iB++].result) return false;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 22097: `else if (tr.selection && value.state != 0 /* State.Inactive */ ) value = new ActiveSource(value.source, 0 /* State.Inactive */ );`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 22102: `for (let active of effect.value)if (active.source == value.source) value = active;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 22108: `return type == "delete" || !conf.activateOnTyping ? this.map(tr.changes) : new ActiveSource(this.source, 1 /* State.Pending */ );`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 22131: `if ((this.explicitPos < 0 ? pos <= from : pos < this.from) || pos > to || type == "delete" && cur(tr.startState) == this.from) return new ActiveSource(this.source, type == "input" && conf.activateOnTyping ? 1 /* State.Pending */  : 0 /* State.Inactive */ );`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 22147: `return typeof validFor == "function" ? validFor(text, from, to, state) : ensureAnchor(validFor, true).test(text);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 22177: `if (by == "page" && (tooltip = (0, _view.getTooltip)(view, cState.open.tooltip))) step = Math.max(2, Math.floor(tooltip.dom.offsetHeight / tooltip.dom.querySelector("li").offsetHeight) - 1);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 22180: `if (selected < 0) selected = by == "page" ? 0 : length - 1;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 22181: `else if (selected >= length) selected = by == "page" ? length - 1 : 0;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 22210: `if (!cState || !cState.active.some((a)=>a.state != 0 /* State.Inactive */ )) return false;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 22235: `for (let active of view.state.field(completionState).active)if (active.state == 1 /* State.Pending */ ) this.startQuery(active);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 22239: `if (!update.selectionSet && !update.docChanged && update.startState.field(completionState) == cState) return;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 22256: `this.debounceUpdate = cState.active.some((a)=>a.state == 1 /* State.Pending */  && !this.running.some((q)=>q.active.source == a.source)) ? setTimeout(()=>this.startUpdate(), DebounceTime) : -1;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 22257: `if (this.composing != 0 /* CompositionState.None */ ) for (let tr of update.transactions){`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 22258: `if (getUserEvent(tr) == "input") this.composing = 2 /* CompositionState.Changed */ ;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 22259: `else if (this.composing == 2 /* CompositionState.Changed */  && tr.selection) this.composing = 3 /* CompositionState.ChangedAndMoved */ ;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 22265: `for (let active of cState.active)if (active.state == 1 /* State.Pending */  && !this.running.some((r)=>r.active.source == active.source)) this.startQuery(active);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 22269: `let context = new CompletionContext(state, pos, active.explicitPos == pos);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 22310: `let current = this.view.state.field(completionState).active.find((a)=>a.source == query.active.source);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 22311: `if (current && current.state == 1 /* State.Pending */ ) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 22312: `if (query.done == null) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 22317: `if (active.state != 1 /* State.Pending */ ) updated.push(active);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 22338: `if (this.composing == 3 /* CompositionState.ChangedAndMoved */ ) // Safari fires compositionend events synchronously, possibly`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 22514: `return from == null || to == null ? null : new FieldRange(this.field, from, to);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 22549: `for(let i = 0; i < fields.length; i++)if (seq != null ? fields[i].seq == seq : name ? fields[i].name == name : false) found = i;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 22552: `while(i < fields.length && (seq == null || fields[i].seq != null && fields[i].seq < seq))i++;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 22565: `for (let pos of positions)if (pos.line == lines.length && pos.from > esc.index) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 22594: `this.deco = (0, _view.Decoration).set(ranges.map((r)=>(r.from == r.to ? fieldMarker : fieldRange).range(r.from, r.to)));`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 22606: `return sel.ranges.every((range)=>this.ranges.some((r)=>r.field == this.active && r.from <= range.from && r.to >= range.to));`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 22631: `return (0, _state.EditorSelection).create(ranges.filter((r)=>r.field == field).map((r)=>(0, _state.EditorSelection).range(r.from, r.to)));`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 22693: `if (!active || dir < 0 && active.active == 0) return false;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 22694: `let next = active.active + dir, last = dir > 0 && !active.ranges.some((r)=>r.field == next + dir);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 22758: `})) == null) return false;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 22760: `if (!match || match.field == active.active) return false;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 22787: `while(m = wordRE.exec(value))if (!seen[m[0]] && pos + m.index != ignoreAt) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 22849: `return mapped == null ? undefined : mapped;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 22869: `if (lineStart != tr.changes.mapPos(prevLineStart, -1)) value = (0, _state.RangeSet).empty;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 22879: `filter: (from)=>from != effect.value`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 22899: `for(let i = 0; i < definedClosing.length; i += 2)if (definedClosing.charCodeAt(i) == ch) return definedClosing.charAt(i + 1);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 22905: `const android = typeof navigator == "object" && /*@__PURE__*/ /Android\b/.test(navigator.userAgent);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 22909: `if (insert.length > 2 || insert.length == 2 && (0, _state.codePointSize)((0, _state.codePointAt)(insert, 0)) == 1 || from != sel.from || to != sel.to) return false;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 22926: `if (token == before && nextChar(state.doc, range.head) == closing((0, _state.codePointAt)(token, 0))) return {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 22969: `if (bracket == tok) return closed == tok ? handleSame(state, tok, tokens.indexOf(tok + tok + tok) > -1, conf) : handleOpen(state, tok, closed, conf.before || defaults.before);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 22970: `if (bracket == closed && closedBracketAt(state, state.selection.main.from)) return handleClose(state, tok, closed);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 22977: `if (from == pos) found = true;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 22987: `return (0, _state.codePointSize)((0, _state.codePointAt)(prev, 0)) == prev.length ? prev : prev.slice(1);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 23025: `if (range.empty && nextChar(state.doc, range.head) == close) return (0, _state.EditorSelection).cursor(range.head + close.length);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 23054: `if (next == token) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 23064: `let isTriple = allowTriple && state.sliceDoc(pos, pos + token.length * 3) == token + token + token;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 23070: `} else if (allowTriple && state.sliceDoc(pos - 2 * token.length, pos) == token + token && (start = canStartStringAt(state, pos - 2 * token.length, stringPrefixes)) > -1 && nodeStart(state, start)) return {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 23078: `else if (state.charCategorizer(pos)(next) != (0, _state.CharCategory).Word) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 23099: `return tree.parent && tree.from == pos;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 23109: `while(first && first.from == node.from && first.to - first.from > quoteToken.length + quotePos){`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 23110: `if (state.sliceDoc(first.to - quoteToken.length, first.to) == quoteToken) return false;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 23115: `let parent = node.to == pos && node.parent;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 23123: `if (charCat(state.sliceDoc(pos - 1, pos)) != (0, _state.CharCategory).Word) return pos;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 23126: `if (state.sliceDoc(start, pos) == prefix && charCat(state.sliceDoc(start - 1, start)) != (0, _state.CharCategory).Word) return start;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 23193: `return cState && cState.active.some((a)=>a.state == 1 /* State.Pending */ ) ? "pending" : cState && cState.active.some((a)=>a.state != 0 /* State.Inactive */ ) ? "active" : null;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 23266: `return d.from == d.to || d.from == d.to - 1 && state.doc.lineAt(d.from).to == d.from ? (0, _view.Decoration).widget({`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 23282: `if (diagnostic && spec.diagnostic != diagnostic) return;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 23298: `return !selected || !panel || selected.from == selected.to ? (0, _view.Decoration).none : (0, _view.Decoration).set([`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 23363: `if (pos >= from && pos <= to && (from == to || (pos > from || side > 0) && (pos < to || side < 0))) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 23419: `if (!next.value || next.from == sel.from && next.to == sel.to) return false;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 23464: `if (this.view.state.doc == state.doc) this.view.dispatch(setDiagnostics(this.view.state, all));`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 23472: `if (update.docChanged || config != update.startState.facet(lintConfig)) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 23524: `if (/[a-zA-Z]/.test(ch) && !assigned.some((c)=>c.toLowerCase() == ch.toLowerCase())) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 23569: `return other.diagnostic == this.diagnostic;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 23591: `if (event.keyCode == 27) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 23594: `} else if (event.keyCode == 38 || event.keyCode == 33) this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 23595: `else if (event.keyCode == 40 || event.keyCode == 34) this.moveSelection((this.selectedIndex + 1) % this.items.length);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 23596: `else if (event.keyCode == 36) this.moveSelection(0);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 23597: `else if (event.keyCode == 35) this.moveSelection(this.items.length - 1);`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 23598: `else if (event.keyCode == 13) this.view.focus();`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 23601: `for(let i = 0; i < keys.length; i++)if (keys[i].toUpperCase().charCodeAt(0) == event.keyCode) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 23631: `for(let i = 0; i < this.items.length; i++)if (this.items[i].diagnostic == selected.diagnostic) return i;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 23639: `for(let j = i; j < this.items.length; j++)if (this.items[j].diagnostic == spec.diagnostic) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 23654: `if (selected && item.diagnostic == selected.diagnostic) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 23662: `while(i < this.items.length && !(this.items.length == 1 && this.items[0].diagnostic.from < 0)){`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 23666: `if (this.items.length == 0) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 23698: `for (let item of this.items)if (item.dom.parentNode == this.list) {`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 23699: `while(domPos != item.dom)rm();`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 23841: `return s == "error" || s == "warning" && max == "info" ? s : max;`

* File [experimental/dist/index.b71e74eb.js](experimental/dist/index.b71e74eb.js) - line 23859: `if (target.nodeType == 1 && target.classList.contains("cm-tooltip-lint")) return;`

**This file is autogenerated. Please do not edit it manually.**
