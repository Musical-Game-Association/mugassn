(function(root, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports"], factory);
    } else if (typeof exports === "object") {
        factory(exports);
    } else {
        factory(root.babelHelpers = {});
    }
})(this, function(global) {
    var babelHelpers = global;
    babelHelpers.typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    babelHelpers.jsx = function() {
        var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7;
        return function createRawReactElement(type, props, key, children) {
            var defaultProps = type && type.defaultProps;
            var childrenLength = arguments.length - 3;
            if (!props && childrenLength !== 0) {
                props = {};
            }
            if (props && defaultProps) {
                for (var propName in defaultProps) {
                    if (props[propName] === void 0) {
                        props[propName] = defaultProps[propName];
                    }
                }
            } else if (!props) {
                props = defaultProps || {};
            }
            if (childrenLength === 1) {
                props.children = children;
            } else if (childrenLength > 1) {
                var childArray = Array(childrenLength);
                for (var i = 0; i < childrenLength; i++) {
                    childArray[i] = arguments[i + 3];
                }
                props.children = childArray;
            }
            return {
                $$typeof: REACT_ELEMENT_TYPE,
                type: type,
                key: key === undefined ? null : '' + key,
                ref: null,
                props: props,
                _owner: null
            };
        };
    }();
    babelHelpers.asyncToGenerator = function(fn) {
        return function() {
            var gen = fn.apply(this, arguments);
            return new Promise(function(resolve, reject) {
                function step(key, arg) {
                    try {
                        var info = gen[key](arg);
                        var value = info.value;
                    } catch (error) {
                        reject(error);
                        return;
                    }
                    if (info.done) {
                        resolve(value);
                    } else {
                        return Promise.resolve(value).then(function(value) {
                            return step("next", value);
                        }, function(err) {
                            return step("throw", err);
                        });
                    }
                }
                return step("next");
            });
        };
    };
    babelHelpers.classCallCheck = function(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    };
    babelHelpers.createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();
    babelHelpers.defineEnumerableProperties = function(obj, descs) {
        for (var key in descs) {
            var desc = descs[key];
            desc.configurable = desc.enumerable = true;
            if ("value" in desc) desc.writable = true;
            Object.defineProperty(obj, key, desc);
        }
        return obj;
    };
    babelHelpers.defaults = function(obj, defaults) {
        var keys = Object.getOwnPropertyNames(defaults);
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            var value = Object.getOwnPropertyDescriptor(defaults, key);
            if (value && value.configurable && obj[key] === undefined) {
                Object.defineProperty(obj, key, value);
            }
        }
        return obj;
    };
    babelHelpers.defineProperty = function(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            obj[key] = value;
        }
        return obj;
    };
    babelHelpers.extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    babelHelpers.get = function get(object, property, receiver) {
        if (object === null) object = Function.prototype;
        var desc = Object.getOwnPropertyDescriptor(object, property);
        if (desc === undefined) {
            var parent = Object.getPrototypeOf(object);
            if (parent === null) {
                return undefined;
            } else {
                return get(parent, property, receiver);
            }
        } else if ("value" in desc) {
            return desc.value;
        } else {
            var getter = desc.get;
            if (getter === undefined) {
                return undefined;
            }
            return getter.call(receiver);
        }
    };
    babelHelpers.inherits = function(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    };
    babelHelpers.instanceof = function(left, right) {
        if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
            return right[Symbol.hasInstance](left);
        } else {
            return left instanceof right;
        }
    };
    babelHelpers.interopRequireDefault = function(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    };
    babelHelpers.interopRequireWildcard = function(obj) {
        if (obj && obj.__esModule) {
            return obj;
        } else {
            var newObj = {};
            if (obj != null) {
                for (var key in obj) {
                    if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                }
            }
            newObj.default = obj;
            return newObj;
        }
    };
    babelHelpers.newArrowCheck = function(innerThis, boundThis) {
        if (innerThis !== boundThis) {
            throw new TypeError("Cannot instantiate an arrow function");
        }
    };
    babelHelpers.objectDestructuringEmpty = function(obj) {
        if (obj == null) throw new TypeError("Cannot destructure undefined");
    };
    babelHelpers.objectWithoutProperties = function(obj, keys) {
        var target = {};
        for (var i in obj) {
            if (keys.indexOf(i) >= 0) continue;
            if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
            target[i] = obj[i];
        }
        return target;
    };
    babelHelpers.possibleConstructorReturn = function(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    };
    babelHelpers.selfGlobal = typeof global === "undefined" ? self : global;
    babelHelpers.set = function set(object, property, value, receiver) {
        var desc = Object.getOwnPropertyDescriptor(object, property);
        if (desc === undefined) {
            var parent = Object.getPrototypeOf(object);
            if (parent !== null) {
                set(parent, property, value, receiver);
            }
        } else if ("value" in desc && desc.writable) {
            desc.value = value;
        } else {
            var setter = desc.set;
            if (setter !== undefined) {
                setter.call(receiver, value);
            }
        }
        return value;
    };
    babelHelpers.slicedToArray = function() {
        function sliceIterator(arr, i) {
            var _arr = [];
            var _n = true;
            var _d = false;
            var _e = undefined;
            try {
                for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                    _arr.push(_s.value);
                    if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;
                _e = err;
            } finally {
                try {
                    if (!_n && _i["return"]) _i["return"]();
                } finally {
                    if (_d) throw _e;
                }
            }
            return _arr;
        }
        return function(arr, i) {
            if (Array.isArray(arr)) {
                return arr;
            } else if (Symbol.iterator in Object(arr)) {
                return sliceIterator(arr, i);
            } else {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
        };
    }();
    babelHelpers.slicedToArrayLoose = function(arr, i) {
        if (Array.isArray(arr)) {
            return arr;
        } else if (Symbol.iterator in Object(arr)) {
            var _arr = [];
            for (var _iterator = arr[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
                _arr.push(_step.value);
                if (i && _arr.length === i) break;
            }
            return _arr;
        } else {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
    };
    babelHelpers.taggedTemplateLiteral = function(strings, raw) {
        return Object.freeze(Object.defineProperties(strings, {
            raw: {
                value: Object.freeze(raw)
            }
        }));
    };
    babelHelpers.taggedTemplateLiteralLoose = function(strings, raw) {
        strings.raw = raw;
        return strings;
    };
    babelHelpers.temporalRef = function(val, name, undef) {
        if (val === undef) {
            throw new ReferenceError(name + " is not defined - temporal dead zone");
        } else {
            return val;
        }
    };
    babelHelpers.temporalUndefined = {};
    babelHelpers.toArray = function(arr) {
        return Array.isArray(arr) ? arr : Array.from(arr);
    };
    babelHelpers.toConsumableArray = function(arr) {
        if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];
            return arr2;
        } else {
            return Array.from(arr);
        }
    };
});
/*! jQuery v2.2.4 | (c) jQuery Foundation | jquery.org/license */
! function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = [],
        d = a.document,
        e = c.slice,
        f = c.concat,
        g = c.push,
        h = c.indexOf,
        i = {},
        j = i.toString,
        k = i.hasOwnProperty,
        l = {},
        m = "2.2.4",
        n = function(a, b) {
            return new n.fn.init(a, b)
        },
        o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        p = /^-ms-/,
        q = /-([\da-z])/gi,
        r = function(a, b) {
            return b.toUpperCase()
        };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function() {
            return e.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this)
        },
        pushStack: function(a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a) {
            return n.each(this, a)
        },
        map: function(a) {
            return this.pushStack(n.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(e.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: g,
        sort: c.sort,
        splice: c.splice
    }, n.extend = n.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (a = arguments[h]))
                for (b in a) c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === n.type(a)
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            var b = a && a.toString();
            return !n.isArray(a) && b - parseFloat(b) + 1 >= 0
        },
        isPlainObject: function(a) {
            var b;
            if ("object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;
            if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype || {}, "isPrototypeOf")) return !1;
            for (b in a);
            return void 0 === b || k.call(a, b)
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a
        },
        globalEval: function(a) {
            var b, c = eval;
            a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = d.createElement("script"), b.text = a, d.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        },
        camelCase: function(a) {
            return a.replace(p, "ms-").replace(q, r)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b) {
            var c, d = 0;
            if (s(a)) {
                for (c = a.length; c > d; d++)
                    if (b.call(a[d], d, a[d]) === !1) break
            } else
                for (d in a)
                    if (b.call(a[d], d, a[d]) === !1) break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(o, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : h.call(b, a, c)
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, e, g = 0,
                h = [];
            if (s(a))
                for (d = a.length; d > g; g++) e = b(a[g], g, c), null != e && h.push(e);
            else
                for (g in a) e = b(a[g], g, c), null != e && h.push(e);
            return f.apply([], h)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, f;
            return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (d = e.call(arguments, 2), f = function() {
                return a.apply(b || this, d.concat(e.call(arguments)))
            }, f.guid = a.guid = a.guid || n.guid++, f) : void 0
        },
        now: Date.now,
        support: l
    }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
        i["[object " + b + "]"] = b.toLowerCase()
    });

    function s(a) {
        var b = !!a && "length" in a && a.length,
            c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var t = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = ga(),
            z = ga(),
            A = ga(),
            B = function(a, b) {
                return a === b && (l = !0), 0
            },
            C = 1 << 31,
            D = {}.hasOwnProperty,
            E = [],
            F = E.pop,
            G = E.push,
            H = E.push,
            I = E.slice,
            J = function(a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1
            },
            K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
            O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
            P = new RegExp(L + "+", "g"),
            Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            R = new RegExp("^" + L + "*," + L + "*"),
            S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
            U = new RegExp(O),
            V = new RegExp("^" + M + "$"),
            W = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M + "|[*])"),
                ATTR: new RegExp("^" + N),
                PSEUDO: new RegExp("^" + O),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + K + ")$", "i"),
                needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
            },
            X = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            Z = /^[^{]+\{\s*\[native \w/,
            $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            _ = /[+~]/,
            aa = /'|\\/g,
            ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
            ca = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            },
            da = function() {
                m()
            };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
        } catch (ea) {
            H = {
                apply: E.length ? function(a, b) {
                    G.apply(a, I.call(b))
                } : function(a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }

        function fa(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w = b && b.ownerDocument,
                x = b ? b.nodeType : 9;
            if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d;
            if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                if (11 !== x && (o = $.exec(a)))
                    if (f = o[1]) {
                        if (9 === x) {
                            if (!(j = b.getElementById(f))) return d;
                            if (j.id === f) return d.push(j), d
                        } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d
                    } else {
                        if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                        if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d
                    }
                if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== x) w = b, s = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&"): b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";
                        while (h--) r[h] = l + " " + qa(r[h]);
                        s = r.join(","), w = _.test(a) && oa(b.parentNode) || b
                    }
                    if (s) try {
                        return H.apply(d, w.querySelectorAll(s)), d
                    } catch (y) {} finally {
                        k === u && b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(Q, "$1"), b, d, e)
        }

        function ga() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }

        function ha(a) {
            return a[u] = !0, a
        }

        function ia(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function ja(a, b) {
            var c = a.split("|"),
                e = c.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function ka(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function la(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function ma(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function na(a) {
            return ha(function(b) {
                return b = +b, ha(function(c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function oa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        c = fa.support = {}, f = fa.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = fa.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ia(function(a) {
                return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function(a) {
                return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c ? [c] : []
                }
            }, d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0
            }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }), ia(function(a) {
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function(a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1
            }, B = b ? function(a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
            } : function(a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    g = [a],
                    h = [b];
                if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f) return ka(a, b);
                c = a;
                while (c = c.parentNode) g.unshift(c);
                c = b;
                while (c = c.parentNode) h.unshift(c);
                while (g[d] === h[d]) d++;
                return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
            }, n) : n
        }, fa.matches = function(a, b) {
            return fa(a, null, null, b)
        }, fa.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return fa(b, n, null, [a]).length > 0
        }, fa.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, fa.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, fa.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, fa.uniqueSort = function(a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1)
            }
            return k = null, a
        }, e = fa.getText = function(a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else
                while (b = a[d++]) c += e(b);
            return c
        }, d = fa.selectors = {
            cacheLength: 50,
            createPseudo: ha,
            match: W,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ba, ca).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = fa.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h,
                            t = !1;
                        if (q) {
                            if (f) {
                                while (p) {
                                    m = b;
                                    while (m = m[p])
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if (1 === m.nodeType && ++t && m === b) {
                                        k[a] = [w, n, t];
                                        break
                                    }
                            } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1)
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
                            return t -= e, t === d || t % d === 0 && t / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function(a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: ha(function(a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(Q, "$1"));
                    return d[u] ? ha(function(a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: ha(function(a) {
                    return function(b) {
                        return fa(a, b).length > 0
                    }
                }),
                contains: ha(function(a) {
                    return a = a.replace(ba, ca),
                        function(b) {
                            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                        }
                }),
                lang: ha(function(a) {
                    return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return Y.test(a.nodeName)
                },
                input: function(a) {
                    return X.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: na(function() {
                    return [0]
                }),
                last: na(function(a, b) {
                    return [b - 1]
                }),
                eq: na(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: na(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: na(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: na(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: na(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) d.pseudos[b] = la(b);
        for (b in {
                submit: !0,
                reset: !0
            }) d.pseudos[b] = ma(b);

        function pa() {}
        pa.prototype = d.filters = d.pseudos, d.setFilters = new pa, g = fa.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(Q, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? fa.error(a) : z(a, i).slice(0)
        };

        function qa(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function ra(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j, k = [w, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2];
                            if (i[d] = k, k[2] = a(b, c, g)) return !0
                        }
            }
        }

        function sa(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function ta(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) fa(a, b[d], c);
            return c
        }

        function ua(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
            return g
        }

        function va(a, b, c, d, e, f) {
            return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function(f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || ta(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : ua(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = ua(r, n), d(j, [], h, i), k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
            })
        }

        function wa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function(a) {
                    return a === b
                }, h, !0), l = ra(function(a) {
                    return J(b, a) > -1
                }, h, !0), m = [function(a, c, d) {
                    var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                    return b = null, e
                }]; f > i; i++)
                if (c = d.relative[a[i].type]) m = [ra(sa(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type]) break;
                        return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a))
                    }
                    m.push(c)
                }
            return sa(m)
        }

        function xa(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, h, i, k) {
                    var l, o, q, r = 0,
                        s = "0",
                        t = f && [],
                        u = [],
                        v = j,
                        x = f || e && d.find.TAG("*", k),
                        y = w += null == v ? 1 : Math.random() || .1,
                        z = x.length;
                    for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                        if (e && l) {
                            o = 0, g || l.ownerDocument === n || (m(l), h = !p);
                            while (q = a[o++])
                                if (q(l, g || n, h)) {
                                    i.push(l);
                                    break
                                }
                            k && (w = y)
                        }
                        c && ((l = !q && l) && r--, f && t.push(l))
                    }
                    if (r += s, c && s !== r) {
                        o = 0;
                        while (q = b[o++]) q(t, u, g, h);
                        if (f) {
                            if (r > 0)
                                while (s--) t[s] || u[s] || (u[s] = F.call(i));
                            u = ua(u)
                        }
                        H.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i)
                    }
                    return k && (w = y, j = v), t
                };
            return c ? ha(f) : f
        }
        return h = fa.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = wa(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, xa(e, d)), f.selector = a
            }
            return f
        }, i = fa.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = W.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type]) break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && qa(j), !a) return H.apply(e, f), e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ia(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), ia(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || ja("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ia(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || ja("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), ia(function(a) {
            return null == a.getAttribute("disabled")
        }) || ja(K, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), fa
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = function(a, b, c) {
            var d = [],
                e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType)
                if (1 === a.nodeType) {
                    if (e && n(a).is(c)) break;
                    d.push(a)
                }
            return d
        },
        v = function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        },
        w = n.expr.match.needsContext,
        x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        y = /^.[^:#\[\.,]*$/;

    function z(a, b, c) {
        if (n.isFunction(b)) return n.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return n.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (y.test(b)) return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function(a) {
            return h.call(b, a) > -1 !== c
        })
    }
    n.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, n.fn.extend({
        find: function(a) {
            var b, c = this.length,
                d = [],
                e = this;
            if ("string" != typeof a) return this.pushStack(n(a).filter(function() {
                for (b = 0; c > b; b++)
                    if (n.contains(e[b], this)) return !0
            }));
            for (b = 0; c > b; b++) n.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
        },
        filter: function(a) {
            return this.pushStack(z(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(z(this, a || [], !0))
        },
        is: function(a) {
            return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length
        }
    });
    var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        C = n.fn.init = function(a, b, c) {
            var e, f;
            if (!a) return this;
            if (c = c || A, "string" == typeof a) {
                if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
                if (e[1]) {
                    if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b))
                        for (e in b) n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                    return this
                }
                return f = d.getElementById(e[2]), f && f.parentNode && (this.length = 1, this[0] = f), this.context = d, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
        };
    C.prototype = n.fn, A = n(d);
    var D = /^(?:parents|prev(?:Until|All))/,
        E = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    n.fn.extend({
        has: function(a) {
            var b = n(a, this),
                c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++)
                    if (n.contains(this, b[a])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? h.call(n(a), this[0]) : h.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function F(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType);
        return a
    }
    n.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return u(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return u(a, "parentNode", c)
        },
        next: function(a) {
            return F(a, "nextSibling")
        },
        prev: function(a) {
            return F(a, "previousSibling")
        },
        nextAll: function(a) {
            return u(a, "nextSibling")
        },
        prevAll: function(a) {
            return u(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return u(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return u(a, "previousSibling", c)
        },
        siblings: function(a) {
            return v((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return v(a.firstChild)
        },
        contents: function(a) {
            return a.contentDocument || n.merge([], a.childNodes)
        }
    }, function(a, b) {
        n.fn[a] = function(c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || n.uniqueSort(e), D.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var G = /\S+/g;

    function H(a) {
        var b = {};
        return n.each(a.match(G) || [], function(a, c) {
            b[c] = !0
        }), b
    }
    n.Callbacks = function(a) {
        a = "string" == typeof a ? H(a) : n.extend({}, a);
        var b, c, d, e, f = [],
            g = [],
            h = -1,
            i = function() {
                for (e = a.once, d = b = !0; g.length; h = -1) {
                    c = g.shift();
                    while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1)
                }
                a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
            },
            j = {
                add: function() {
                    return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
                        n.each(b, function(b, c) {
                            n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c)
                        })
                    }(arguments), c && !b && i()), this
                },
                remove: function() {
                    return n.each(arguments, function(a, b) {
                        var c;
                        while ((c = n.inArray(b, f, c)) > -1) f.splice(c, 1), h >= c && h--
                    }), this
                },
                has: function(a) {
                    return a ? n.inArray(a, f) > -1 : f.length > 0
                },
                empty: function() {
                    return f && (f = []), this
                },
                disable: function() {
                    return e = g = [], f = c = "", this
                },
                disabled: function() {
                    return !f
                },
                lock: function() {
                    return e = g = [], c || (f = c = ""), this
                },
                locked: function() {
                    return !!e
                },
                fireWith: function(a, c) {
                    return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this
                },
                fire: function() {
                    return j.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!d
                }
            };
        return j
    }, n.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", n.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", n.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", n.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return n.Deferred(function(c) {
                            n.each(b, function(b, f) {
                                var g = n.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? n.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, n.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b = 0,
                c = e.call(arguments),
                d = c.length,
                f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
                g = 1 === f ? a : n.Deferred(),
                h = function(a, b, c) {
                    return function(d) {
                        b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                },
                i, j, k;
            if (d > 1)
                for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var I;
    n.fn.ready = function(a) {
        return n.ready.promise().done(a), this
    }, n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? n.readyWait++ : n.ready(!0)
        },
        ready: function(a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))))
        }
    });

    function J() {
        d.removeEventListener("DOMContentLoaded", J), a.removeEventListener("load", J), n.ready()
    }
    n.ready.promise = function(b) {
        return I || (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(n.ready) : (d.addEventListener("DOMContentLoaded", J), a.addEventListener("load", J))), I.promise(b)
    }, n.ready.promise();
    var K = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === n.type(c)) {
                e = !0;
                for (h in c) K(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                    return j.call(n(a), c)
                })), b))
                for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        L = function(a) {
            return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
        };

    function M() {
        this.expando = n.expando + M.uid++
    }
    M.uid = 1, M.prototype = {
        register: function(a, b) {
            var c = b || {};
            return a.nodeType ? a[this.expando] = c : Object.defineProperty(a, this.expando, {
                value: c,
                writable: !0,
                configurable: !0
            }), a[this.expando]
        },
        cache: function(a) {
            if (!L(a)) return {};
            var b = a[this.expando];
            return b || (b = {}, L(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                value: b,
                configurable: !0
            }))), b
        },
        set: function(a, b, c) {
            var d, e = this.cache(a);
            if ("string" == typeof b) e[b] = c;
            else
                for (d in b) e[d] = b[d];
            return e
        },
        get: function(a, b) {
            return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][b]
        },
        access: function(a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
        },
        remove: function(a, b) {
            var c, d, e, f = a[this.expando];
            if (void 0 !== f) {
                if (void 0 === b) this.register(a);
                else {
                    n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in f ? d = [b, e] : (d = e, d = d in f ? [d] : d.match(G) || [])), c = d.length;
                    while (c--) delete f[d[c]]
                }(void 0 === b || n.isEmptyObject(f)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
            }
        },
        hasData: function(a) {
            var b = a[this.expando];
            return void 0 !== b && !n.isEmptyObject(b)
        }
    };
    var N = new M,
        O = new M,
        P = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Q = /[A-Z]/g;

    function R(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(Q, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : P.test(c) ? n.parseJSON(c) : c;
                } catch (e) {}
                O.set(a, b, c)
            } else c = void 0;
        return c
    }
    n.extend({
        hasData: function(a) {
            return O.hasData(a) || N.hasData(a)
        },
        data: function(a, b, c) {
            return O.access(a, b, c)
        },
        removeData: function(a, b) {
            O.remove(a, b)
        },
        _data: function(a, b, c) {
            return N.access(a, b, c)
        },
        _removeData: function(a, b) {
            N.remove(a, b)
        }
    }), n.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = O.get(f), 1 === f.nodeType && !N.get(f, "hasDataAttrs"))) {
                    c = g.length;
                    while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), R(f, d, e[d])));
                    N.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                O.set(this, a)
            }) : K(this, function(b) {
                var c, d;
                if (f && void 0 === b) {
                    if (c = O.get(f, a) || O.get(f, a.replace(Q, "-$&").toLowerCase()), void 0 !== c) return c;
                    if (d = n.camelCase(a), c = O.get(f, d), void 0 !== c) return c;
                    if (c = R(f, d, void 0), void 0 !== c) return c
                } else d = n.camelCase(a), this.each(function() {
                    var c = O.get(this, d);
                    O.set(this, d, b), a.indexOf("-") > -1 && void 0 !== c && O.set(this, a, b)
                })
            }, null, b, arguments.length > 1, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                O.remove(this, a)
            })
        }
    }), n.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = N.get(a, b), c && (!d || n.isArray(c) ? d = N.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = n.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = n._queueHooks(a, b),
                g = function() {
                    n.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return N.get(a, c) || N.access(a, c, {
                empty: n.Callbacks("once memory").add(function() {
                    N.remove(a, [b + "queue", c])
                })
            })
        }
    }), n.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                n.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1,
                e = n.Deferred(),
                f = this,
                g = this.length,
                h = function() {
                    --d || e.resolveWith(f, [f])
                };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) c = N.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        T = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
        U = ["Top", "Right", "Bottom", "Left"],
        V = function(a, b) {
            return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
        };

    function W(a, b, c, d) {
        var e, f = 1,
            g = 20,
            h = d ? function() {
                return d.cur()
            } : function() {
                return n.css(a, b, "")
            },
            i = h(),
            j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
            k = (n.cssNumber[b] || "px" !== j && +i) && T.exec(n.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;
            do f = f || ".5", k /= f, n.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
    }
    var X = /^(?:checkbox|radio)$/i,
        Y = /<([\w:-]+)/,
        Z = /^$|\/(?:java|ecma)script/i,
        $ = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    $.optgroup = $.option, $.tbody = $.tfoot = $.colgroup = $.caption = $.thead, $.th = $.td;

    function _(a, b) {
        var c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c
    }

    function aa(a, b) {
        for (var c = 0, d = a.length; d > c; c++) N.set(a[c], "globalEval", !b || N.get(b[c], "globalEval"))
    }
    var ba = /<|&#?\w+;/;

    function ca(a, b, c, d, e) {
        for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], o = 0, p = a.length; p > o; o++)
            if (f = a[o], f || 0 === f)
                if ("object" === n.type(f)) n.merge(m, f.nodeType ? [f] : f);
                else if (ba.test(f)) {
            g = g || l.appendChild(b.createElement("div")), h = (Y.exec(f) || ["", ""])[1].toLowerCase(), i = $[h] || $._default, g.innerHTML = i[1] + n.htmlPrefilter(f) + i[2], k = i[0];
            while (k--) g = g.lastChild;
            n.merge(m, g.childNodes), g = l.firstChild, g.textContent = ""
        } else m.push(b.createTextNode(f));
        l.textContent = "", o = 0;
        while (f = m[o++])
            if (d && n.inArray(f, d) > -1) e && e.push(f);
            else if (j = n.contains(f.ownerDocument, f), g = _(l.appendChild(f), "script"), j && aa(g), c) {
            k = 0;
            while (f = g[k++]) Z.test(f.type || "") && c.push(f)
        }
        return l
    }! function() {
        var a = d.createDocumentFragment(),
            b = a.appendChild(d.createElement("div")),
            c = d.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var da = /^key/,
        ea = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        fa = /^([^.]*)(?:\.(.+)|)/;

    function ga() {
        return !0
    }

    function ha() {
        return !1
    }

    function ia() {
        try {
            return d.activeElement
        } catch (a) {}
    }

    function ja(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c, c = void 0);
            for (h in b) ja(a, h, c, d, b[h], f);
            return a
        }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = ha;
        else if (!e) return a;
        return 1 === f && (g = e, e = function(a) {
            return n().off(a), g.apply(this, arguments)
        }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function() {
            n.event.add(this, b, e, d, c)
        })
    }
    n.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = N.get(a);
            if (r) {
                c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function(b) {
                    return "undefined" != typeof n && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0
                }), b = (b || "").match(G) || [""], j = b.length;
                while (j--) h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && n.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0)
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = N.hasData(a) && N.get(a);
            if (r && (i = r.events)) {
                b = (b || "").match(G) || [""], j = b.length;
                while (j--)
                    if (h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
                        while (f--) k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o])
                    } else
                        for (o in i) n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(i) && N.remove(a, "handle events")
            }
        },
        dispatch: function(a) {
            a = n.event.fix(a);
            var b, c, d, f, g, h = [],
                i = e.call(arguments),
                j = (N.get(this, "events") || {})[a.type] || [],
                k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, c = 0;
                    while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
                for (; i !== this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, e, f, g = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || d, e = c.documentElement, f = c.body, a.pageX = b.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
            }
        },
        fix: function(a) {
            if (a[n.expando]) return a;
            var b, c, e, f = a.type,
                g = a,
                h = this.fixHooks[f];
            h || (this.fixHooks[f] = h = ea.test(f) ? this.mouseHooks : da.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length;
            while (b--) c = e[b], a[c] = g[c];
            return a.target || (a.target = d), 3 === a.target.nodeType && (a.target = a.target.parentNode), h.filter ? h.filter(a, g) : a
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== ia() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === ia() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return n.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        }
    }, n.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    }, n.Event = function(a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ga : ha) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
    }, n.Event.prototype = {
        constructor: n.Event,
        isDefaultPrevented: ha,
        isPropagationStopped: ha,
        isImmediatePropagationStopped: ha,
        isSimulated: !1,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = ga, a && !this.isSimulated && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = ga, a && !this.isSimulated && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = ga, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return e && (e === d || n.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), n.fn.extend({
        on: function(a, b, c, d) {
            return ja(this, a, b, c, d)
        },
        one: function(a, b, c, d) {
            return ja(this, a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = ha), this.each(function() {
                n.event.remove(this, a, c, b)
            })
        }
    });
    var ka = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        la = /<script|<style|<link/i,
        ma = /checked\s*(?:[^=]|=\s*.checked.)/i,
        na = /^true\/(.*)/,
        oa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function pa(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function qa(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function ra(a) {
        var b = na.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function sa(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (N.hasData(a) && (f = N.access(a), g = N.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)
                    for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c])
            }
            O.hasData(a) && (h = O.access(a), i = n.extend({}, h), O.set(b, i))
        }
    }

    function ta(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && X.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
    }

    function ua(a, b, c, d) {
        b = f.apply([], b);
        var e, g, h, i, j, k, m = 0,
            o = a.length,
            p = o - 1,
            q = b[0],
            r = n.isFunction(q);
        if (r || o > 1 && "string" == typeof q && !l.checkClone && ma.test(q)) return a.each(function(e) {
            var f = a.eq(e);
            r && (b[0] = q.call(this, e, f.html())), ua(f, b, c, d)
        });
        if (o && (e = ca(b, a[0].ownerDocument, !1, a, d), g = e.firstChild, 1 === e.childNodes.length && (e = g), g || d)) {
            for (h = n.map(_(e, "script"), qa), i = h.length; o > m; m++) j = e, m !== p && (j = n.clone(j, !0, !0), i && n.merge(h, _(j, "script"))), c.call(a[m], j, m);
            if (i)
                for (k = h[h.length - 1].ownerDocument, n.map(h, ra), m = 0; i > m; m++) j = h[m], Z.test(j.type || "") && !N.access(j, "globalEval") && n.contains(k, j) && (j.src ? n._evalUrl && n._evalUrl(j.src) : n.globalEval(j.textContent.replace(oa, "")))
        }
        return a
    }

    function va(a, b, c) {
        for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || n.cleanData(_(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && aa(_(d, "script")), d.parentNode.removeChild(d));
        return a
    }
    n.extend({
        htmlPrefilter: function(a) {
            return a.replace(ka, "<$1></$2>")
        },
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0),
                i = n.contains(a.ownerDocument, a);
            if (!(l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                for (g = _(h), f = _(a), d = 0, e = f.length; e > d; d++) ta(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || _(a), g = g || _(h), d = 0, e = f.length; e > d; d++) sa(f[d], g[d]);
                else sa(a, h);
            return g = _(h, "script"), g.length > 0 && aa(g, !i && _(a, "script")), h
        },
        cleanData: function(a) {
            for (var b, c, d, e = n.event.special, f = 0; void 0 !== (c = a[f]); f++)
                if (L(c)) {
                    if (b = c[N.expando]) {
                        if (b.events)
                            for (d in b.events) e[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
                        c[N.expando] = void 0
                    }
                    c[O.expando] && (c[O.expando] = void 0)
                }
        }
    }), n.fn.extend({
        domManip: ua,
        detach: function(a) {
            return va(this, a, !0)
        },
        remove: function(a) {
            return va(this, a)
        },
        text: function(a) {
            return K(this, function(a) {
                return void 0 === a ? n.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function() {
            return ua(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = pa(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return ua(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = pa(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return ua(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return ua(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (n.cleanData(_(a, !1)), a.textContent = "");
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return n.clone(this, a, b)
            })
        },
        html: function(a) {
            return K(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !la.test(a) && !$[(Y.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = n.htmlPrefilter(a);
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(_(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = [];
            return ua(this, arguments, function(b) {
                var c = this.parentNode;
                n.inArray(this, a) < 0 && (n.cleanData(_(this)), c && c.replaceChild(b, this))
            }, a)
        }
    }), n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        n.fn[a] = function(a) {
            for (var c, d = [], e = n(a), f = e.length - 1, h = 0; f >= h; h++) c = h === f ? this : this.clone(!0), n(e[h])[b](c), g.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var wa, xa = {
        HTML: "block",
        BODY: "block"
    };

    function ya(a, b) {
        var c = n(b.createElement(a)).appendTo(b.body),
            d = n.css(c[0], "display");
        return c.detach(), d
    }

    function za(a) {
        var b = d,
            c = xa[a];
        return c || (c = ya(a, b), "none" !== c && c || (wa = (wa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = wa[0].contentDocument, b.write(), b.close(), c = ya(a, b), wa.detach()), xa[a] = c), c
    }
    var Aa = /^margin/,
        Ba = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
        Ca = function(b) {
            var c = b.ownerDocument.defaultView;
            return c && c.opener || (c = a), c.getComputedStyle(b)
        },
        Da = function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e
        },
        Ea = d.documentElement;
    ! function() {
        var b, c, e, f, g = d.createElement("div"),
            h = d.createElement("div");
        if (h.style) {
            h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === h.style.backgroundClip, g.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", g.appendChild(h);

            function i() {
                h.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", h.innerHTML = "", Ea.appendChild(g);
                var d = a.getComputedStyle(h);
                b = "1%" !== d.top, f = "2px" === d.marginLeft, c = "4px" === d.width, h.style.marginRight = "50%", e = "4px" === d.marginRight, Ea.removeChild(g)
            }
            n.extend(l, {
                pixelPosition: function() {
                    return i(), b
                },
                boxSizingReliable: function() {
                    return null == c && i(), c
                },
                pixelMarginRight: function() {
                    return null == c && i(), e
                },
                reliableMarginLeft: function() {
                    return null == c && i(), f
                },
                reliableMarginRight: function() {
                    var b, c = h.appendChild(d.createElement("div"));
                    return c.style.cssText = h.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", h.style.width = "1px", Ea.appendChild(g), b = !parseFloat(a.getComputedStyle(c).marginRight), Ea.removeChild(g), h.removeChild(c), b
                }
            })
        }
    }();

    function Fa(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ca(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), c && !l.pixelMarginRight() && Ba.test(g) && Aa.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 !== g ? g + "" : g
    }

    function Ga(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }
    var Ha = /^(none|table(?!-c[ea]).+)/,
        Ia = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ja = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ka = ["Webkit", "O", "Moz", "ms"],
        La = d.createElement("div").style;

    function Ma(a) {
        if (a in La) return a;
        var b = a[0].toUpperCase() + a.slice(1),
            c = Ka.length;
        while (c--)
            if (a = Ka[c] + b, a in La) return a
    }

    function Na(a, b, c) {
        var d = T.exec(b);
        return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b
    }

    function Oa(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + U[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + U[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + U[f] + "Width", !0, e))) : (g += n.css(a, "padding" + U[f], !0, e), "padding" !== c && (g += n.css(a, "border" + U[f] + "Width", !0, e)));
        return g
    }

    function Pa(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = Ca(a),
            g = "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Fa(a, b, f), (0 > e || null == e) && (e = a.style[b]), Ba.test(e)) return e;
            d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + Oa(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    function Qa(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = N.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && V(d) && (f[g] = N.access(d, "olddisplay", za(d.nodeName)))) : (e = V(d), "none" === c && e || N.set(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }
    n.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Fa(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b),
                    i = a.style;
                return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = T.exec(c)) && e[1] && (c = W(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Fa(a, b, d)), "normal" === e && b in Ja && (e = Ja[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e
        }
    }), n.each(["height", "width"], function(a, b) {
        n.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Ha.test(n.css(a, "display")) && 0 === a.offsetWidth ? Da(a, Ia, function() {
                    return Pa(a, b, d)
                }) : Pa(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e, f = d && Ca(a),
                    g = d && Oa(a, b, d, "border-box" === n.css(a, "boxSizing", !1, f), f);
                return g && (e = T.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = n.css(a, b)), Na(a, c, g)
            }
        }
    }), n.cssHooks.marginLeft = Ga(l.reliableMarginLeft, function(a, b) {
        return b ? (parseFloat(Fa(a, "marginLeft")) || a.getBoundingClientRect().left - Da(a, {
            marginLeft: 0
        }, function() {
            return a.getBoundingClientRect().left
        })) + "px" : void 0
    }), n.cssHooks.marginRight = Ga(l.reliableMarginRight, function(a, b) {
        return b ? Da(a, {
            display: "inline-block"
        }, Fa, [a, "marginRight"]) : void 0
    }), n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        n.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + U[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Aa.test(a) || (n.cssHooks[a + b].set = Na)
    }), n.fn.extend({
        css: function(a, b) {
            return K(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (n.isArray(b)) {
                    for (d = Ca(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return Qa(this, !0)
        },
        hide: function() {
            return Qa(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                V(this) ? n(this).show() : n(this).hide()
            })
        }
    });

    function Ra(a, b, c, d, e) {
        return new Ra.prototype.init(a, b, c, d, e)
    }
    n.Tween = Ra, Ra.prototype = {
        constructor: Ra,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = Ra.propHooks[this.prop];
            return a && a.get ? a.get(this) : Ra.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = Ra.propHooks[this.prop];
            return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ra.propHooks._default.set(this), this
        }
    }, Ra.prototype.init.prototype = Ra.prototype, Ra.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
            },
            set: function(a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    }, Ra.propHooks.scrollTop = Ra.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, n.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    }, n.fx = Ra.prototype.init, n.fx.step = {};
    var Sa, Ta, Ua = /^(?:toggle|show|hide)$/,
        Va = /queueHooks$/;

    function Wa() {
        return a.setTimeout(function() {
            Sa = void 0
        }), Sa = n.now()
    }

    function Xa(a, b) {
        var c, d = 0,
            e = {
                height: a
            };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = U[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function Ya(a, b, c) {
        for (var d, e = (_a.tweeners[b] || []).concat(_a.tweeners["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function Za(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this,
            m = {},
            o = a.style,
            p = a.nodeType && V(a),
            q = N.get(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, l.always(function() {
            l.always(function() {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? N.get(a, "olddisplay") || za(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function() {
            o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], Ua.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                    if ("show" !== e || !q || void 0 === q[d]) continue;
                    p = !0
                }
                m[d] = q && q[d] || n.style(a, d)
            } else j = void 0;
        if (n.isEmptyObject(m)) "inline" === ("none" === j ? za(a.nodeName) : j) && (o.display = j);
        else {
            q ? "hidden" in q && (p = q.hidden) : q = N.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function() {
                n(a).hide()
            }), l.done(function() {
                var b;
                N.remove(a, "fxshow");
                for (b in m) n.style(a, b, m[b])
            });
            for (d in m) g = Ya(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function $a(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function _a(a, b, c) {
        var d, e, f = 0,
            g = _a.prefilters.length,
            h = n.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = Sa || Wa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: n.extend({}, b),
                opts: n.extend(!0, {
                    specialEasing: {},
                    easing: n.easing._default
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: Sa || Wa(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for ($a(k, j.opts.specialEasing); g > f; f++)
            if (d = _a.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;
        return n.map(k, Ya, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    n.Animation = n.extend(_a, {
            tweeners: {
                "*": [function(a, b) {
                    var c = this.createTween(a, b);
                    return W(c.elem, a, T.exec(b), c), c
                }]
            },
            tweener: function(a, b) {
                n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G);
                for (var c, d = 0, e = a.length; e > d; d++) c = a[d], _a.tweeners[c] = _a.tweeners[c] || [], _a.tweeners[c].unshift(b)
            },
            prefilters: [Za],
            prefilter: function(a, b) {
                b ? _a.prefilters.unshift(a) : _a.prefilters.push(a)
            }
        }), n.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? n.extend({}, a) : {
                complete: c || !c && b || n.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !n.isFunction(b) && b
            };
            return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
            }, d
        }, n.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(V).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = n.isEmptyObject(a),
                    f = n.speed(b, c, d),
                    g = function() {
                        var b = _a(this, n.extend({}, a), f);
                        (e || N.get(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = n.timers,
                        g = N.get(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && Va.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    !b && c || n.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = N.get(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = n.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), n.each(["toggle", "show", "hide"], function(a, b) {
            var c = n.fn[b];
            n.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Xa(b, !0), a, d, e)
            }
        }), n.each({
            slideDown: Xa("show"),
            slideUp: Xa("hide"),
            slideToggle: Xa("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            n.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), n.timers = [], n.fx.tick = function() {
            var a, b = 0,
                c = n.timers;
            for (Sa = n.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
            c.length || n.fx.stop(), Sa = void 0
        }, n.fx.timer = function(a) {
            n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
        }, n.fx.interval = 13, n.fx.start = function() {
            Ta || (Ta = a.setInterval(n.fx.tick, n.fx.interval))
        }, n.fx.stop = function() {
            a.clearInterval(Ta), Ta = null
        }, n.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, n.fn.delay = function(b, c) {
            return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
                var e = a.setTimeout(c, b);
                d.stop = function() {
                    a.clearTimeout(e)
                }
            })
        },
        function() {
            var a = d.createElement("input"),
                b = d.createElement("select"),
                c = b.appendChild(d.createElement("option"));
            a.type = "checkbox", l.checkOn = "" !== a.value, l.optSelected = c.selected, b.disabled = !0, l.optDisabled = !c.disabled, a = d.createElement("input"), a.value = "t", a.type = "radio", l.radioValue = "t" === a.value
        }();
    var ab, bb = n.expr.attrHandle;
    n.fn.extend({
        attr: function(a, b) {
            return K(this, n.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                n.removeAttr(this, a)
            })
        }
    }), n.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ab : void 0)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d))
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(G);
            if (f && 1 === a.nodeType)
                while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
        }
    }), ab = {
        set: function(a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = bb[b] || n.find.attr;
        bb[b] = function(a, b, d) {
            var e, f;
            return d || (f = bb[b], bb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, bb[b] = f), e
        }
    });
    var cb = /^(?:input|select|textarea|button)$/i,
        db = /^(?:a|area)$/i;
    n.fn.extend({
        prop: function(a, b) {
            return K(this, n.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[n.propFix[a] || a]
            })
        }
    }), n.extend({
        prop: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]),
                void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = n.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : cb.test(a.nodeName) || db.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), l.optSelected || (n.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        },
        set: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
        }
    }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        n.propFix[this.toLowerCase()] = this
    });
    var eb = /[\t\r\n\f]/g;

    function fb(a) {
        return a.getAttribute && a.getAttribute("class") || ""
    }
    n.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).addClass(a.call(this, b, fb(this)))
            });
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++])
                    if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
                        g = 0;
                        while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        h = n.trim(d), e !== h && c.setAttribute("class", h)
                    }
            }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).removeClass(a.call(this, b, fb(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++])
                    if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
                        g = 0;
                        while (f = b[g++])
                            while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
                        h = n.trim(d), e !== h && c.setAttribute("class", h)
                    }
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function(c) {
                n(this).toggleClass(a.call(this, c, fb(this), b), b)
            }) : this.each(function() {
                var b, d, e, f;
                if ("string" === c) {
                    d = 0, e = n(this), f = a.match(G) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else void 0 !== a && "boolean" !== c || (b = fb(this), b && N.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : N.get(this, "__className__") || ""))
            })
        },
        hasClass: function(a) {
            var b, c, d = 0;
            b = " " + a + " ";
            while (c = this[d++])
                if (1 === c.nodeType && (" " + fb(c) + " ").replace(eb, " ").indexOf(b) > -1) return !0;
            return !1
        }
    });
    var gb = /\r/g,
        hb = /[\x20\t\r\n\f]+/g;
    n.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = n.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                        return null == a ? "" : a + ""
                    })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(gb, "") : null == c ? "" : c)
            }
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.trim(n.text(a)).replace(hb, " ")
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
                            if (b = n(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    var c, d, e = a.options,
                        f = n.makeArray(b),
                        g = e.length;
                    while (g--) d = e[g], (d.selected = n.inArray(n.valHooks.option.get(d), f) > -1) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), n.each(["radio", "checkbox"], function() {
        n.valHooks[this] = {
            set: function(a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0
            }
        }, l.checkOn || (n.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var ib = /^(?:focusinfocus|focusoutblur)$/;
    n.extend(n.event, {
        trigger: function(b, c, e, f) {
            var g, h, i, j, l, m, o, p = [e || d],
                q = k.call(b, "type") ? b.type : b,
                r = k.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !ib.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), l = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, f || !o.trigger || o.trigger.apply(e, c) !== !1)) {
                if (!f && !o.noBubble && !n.isWindow(e)) {
                    for (j = o.delegateType || q, ib.test(j + q) || (h = h.parentNode); h; h = h.parentNode) p.push(h), i = h;
                    i === (e.ownerDocument || d) && p.push(i.defaultView || i.parentWindow || a)
                }
                g = 0;
                while ((h = p[g++]) && !b.isPropagationStopped()) b.type = g > 1 ? j : o.bindType || q, m = (N.get(h, "events") || {})[b.type] && N.get(h, "handle"), m && m.apply(h, c), m = l && h[l], m && m.apply && L(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
                return b.type = q, f || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !L(e) || l && n.isFunction(e[q]) && !n.isWindow(e) && (i = e[l], i && (e[l] = null), n.event.triggered = q, e[q](), n.event.triggered = void 0, i && (e[l] = i)), b.result
            }
        },
        simulate: function(a, b, c) {
            var d = n.extend(new n.Event, c, {
                type: a,
                isSimulated: !0
            });
            n.event.trigger(d, null, b)
        }
    }), n.fn.extend({
        trigger: function(a, b) {
            return this.each(function() {
                n.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        n.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), n.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }), l.focusin = "onfocusin" in a, l.focusin || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            n.event.simulate(b, a.target, n.event.fix(a))
        };
        n.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = N.access(d, b);
                e || d.addEventListener(a, c, !0), N.access(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = N.access(d, b) - 1;
                e ? N.access(d, b, e) : (d.removeEventListener(a, c, !0), N.remove(d, b))
            }
        }
    });
    var jb = a.location,
        kb = n.now(),
        lb = /\?/;
    n.parseJSON = function(a) {
        return JSON.parse(a + "")
    }, n.parseXML = function(b) {
        var c;
        if (!b || "string" != typeof b) return null;
        try {
            c = (new a.DOMParser).parseFromString(b, "text/xml")
        } catch (d) {
            c = void 0
        }
        return c && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c
    };
    var mb = /#.*$/,
        nb = /([?&])_=[^&]*/,
        ob = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        pb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        qb = /^(?:GET|HEAD)$/,
        rb = /^\/\//,
        sb = {},
        tb = {},
        ub = "*/".concat("*"),
        vb = d.createElement("a");
    vb.href = jb.href;

    function wb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(G) || [];
            if (n.isFunction(c))
                while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function xb(a, b, c, d) {
        var e = {},
            f = a === tb;

        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function yb(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && n.extend(!0, a, d), a
    }

    function zb(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                }
        if (i[0] in c) f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function Ab(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break
                    }
            if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try {
                    b = g(b)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: g ? l : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: jb.href,
            type: "GET",
            isLocal: pb.test(jb.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": ub,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? yb(yb(a, n.ajaxSettings), b) : yb(n.ajaxSettings, a)
        },
        ajaxPrefilter: wb(sb),
        ajaxTransport: wb(tb),
        ajax: function(b, c) {
            "object" == typeof b && (c = b, b = void 0), c = c || {};
            var e, f, g, h, i, j, k, l, m = n.ajaxSetup({}, c),
                o = m.context || m,
                p = m.context && (o.nodeType || o.jquery) ? n(o) : n.event,
                q = n.Deferred(),
                r = n.Callbacks("once memory"),
                s = m.statusCode || {},
                t = {},
                u = {},
                v = 0,
                w = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === v) {
                            if (!h) {
                                h = {};
                                while (b = ob.exec(g)) h[b[1].toLowerCase()] = b[2]
                            }
                            b = h[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === v ? g : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return v || (a = u[c] = u[c] || a, t[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return v || (m.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > v)
                                for (b in a) s[b] = [s[b], a[b]];
                            else x.always(a[x.status]);
                        return this
                    },
                    abort: function(a) {
                        var b = a || w;
                        return e && e.abort(b), z(0, b), this
                    }
                };
            if (q.promise(x).complete = r.add, x.success = x.done, x.error = x.fail, m.url = ((b || m.url || jb.href) + "").replace(mb, "").replace(rb, jb.protocol + "//"), m.type = c.method || c.type || m.method || m.type, m.dataTypes = n.trim(m.dataType || "*").toLowerCase().match(G) || [""], null == m.crossDomain) {
                j = d.createElement("a");
                try {
                    j.href = m.url, j.href = j.href, m.crossDomain = vb.protocol + "//" + vb.host != j.protocol + "//" + j.host
                } catch (y) {
                    m.crossDomain = !0
                }
            }
            if (m.data && m.processData && "string" != typeof m.data && (m.data = n.param(m.data, m.traditional)), xb(sb, m, c, x), 2 === v) return x;
            k = n.event && m.global, k && 0 === n.active++ && n.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !qb.test(m.type), f = m.url, m.hasContent || (m.data && (f = m.url += (lb.test(f) ? "&" : "?") + m.data, delete m.data), m.cache === !1 && (m.url = nb.test(f) ? f.replace(nb, "$1_=" + kb++) : f + (lb.test(f) ? "&" : "?") + "_=" + kb++)), m.ifModified && (n.lastModified[f] && x.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && x.setRequestHeader("If-None-Match", n.etag[f])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && x.setRequestHeader("Content-Type", m.contentType), x.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + ub + "; q=0.01" : "") : m.accepts["*"]);
            for (l in m.headers) x.setRequestHeader(l, m.headers[l]);
            if (m.beforeSend && (m.beforeSend.call(o, x, m) === !1 || 2 === v)) return x.abort();
            w = "abort";
            for (l in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) x[l](m[l]);
            if (e = xb(tb, m, c, x)) {
                if (x.readyState = 1, k && p.trigger("ajaxSend", [x, m]), 2 === v) return x;
                m.async && m.timeout > 0 && (i = a.setTimeout(function() {
                    x.abort("timeout")
                }, m.timeout));
                try {
                    v = 1, e.send(t, z)
                } catch (y) {
                    if (!(2 > v)) throw y;
                    z(-1, y)
                }
            } else z(-1, "No Transport");

            function z(b, c, d, h) {
                var j, l, t, u, w, y = c;
                2 !== v && (v = 2, i && a.clearTimeout(i), e = void 0, g = h || "", x.readyState = b > 0 ? 4 : 0, j = b >= 200 && 300 > b || 304 === b, d && (u = zb(m, x, d)), u = Ab(m, u, x, j), j ? (m.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (n.lastModified[f] = w), w = x.getResponseHeader("etag"), w && (n.etag[f] = w)), 204 === b || "HEAD" === m.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = u.state, l = u.data, t = u.error, j = !t)) : (t = y, !b && y || (y = "error", 0 > b && (b = 0))), x.status = b, x.statusText = (c || y) + "", j ? q.resolveWith(o, [l, y, x]) : q.rejectWith(o, [x, y, t]), x.statusCode(s), s = void 0, k && p.trigger(j ? "ajaxSuccess" : "ajaxError", [x, m, j ? l : t]), r.fireWith(o, [x, y]), k && (p.trigger("ajaxComplete", [x, m]), --n.active || n.event.trigger("ajaxStop")))
            }
            return x
        },
        getJSON: function(a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return n.get(a, void 0, b, "script")
        }
    }), n.each(["get", "post"], function(a, b) {
        n[b] = function(a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, n.isPlainObject(a) && a))
        }
    }), n._evalUrl = function(a) {
        return n.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, n.fn.extend({
        wrapAll: function(a) {
            var b;
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                var a = this;
                while (a.firstElementChild) a = a.firstElementChild;
                return a
            }).append(this)), this)
        },
        wrapInner: function(a) {
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = n(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = n.isFunction(a);
            return this.each(function(c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    }), n.expr.filters.hidden = function(a) {
        return !n.expr.filters.visible(a)
    }, n.expr.filters.visible = function(a) {
        return a.offsetWidth > 0 || a.offsetHeight > 0 || a.getClientRects().length > 0
    };
    var Bb = /%20/g,
        Cb = /\[\]$/,
        Db = /\r?\n/g,
        Eb = /^(?:submit|button|image|reset|file)$/i,
        Fb = /^(?:input|select|textarea|keygen)/i;

    function Gb(a, b, c, d) {
        var e;
        if (n.isArray(b)) n.each(b, function(b, e) {
            c || Cb.test(a) ? d(a, e) : Gb(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== n.type(b)) d(a, b);
        else
            for (e in b) Gb(a + "[" + e + "]", b[e], c, d)
    }
    n.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function() {
            e(this.name, this.value)
        });
        else
            for (c in a) Gb(c, a[c], b, e);
        return d.join("&").replace(Bb, "+")
    }, n.fn.extend({
        serialize: function() {
            return n.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && Fb.test(this.nodeName) && !Eb.test(a) && (this.checked || !X.test(a))
            }).map(function(a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Db, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Db, "\r\n")
                }
            }).get()
        }
    }), n.ajaxSettings.xhr = function() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    };
    var Hb = {
            0: 200,
            1223: 204
        },
        Ib = n.ajaxSettings.xhr();
    l.cors = !!Ib && "withCredentials" in Ib, l.ajax = Ib = !!Ib, n.ajaxTransport(function(b) {
        var c, d;
        return l.cors || Ib && !b.crossDomain ? {
            send: function(e, f) {
                var g, h = b.xhr();
                if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                    for (g in b.xhrFields) h[g] = b.xhrFields[g];
                b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                for (g in e) h.setRequestHeader(g, e[g]);
                c = function(a) {
                    return function() {
                        c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Hb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
                            binary: h.response
                        } : {
                            text: h.responseText
                        }, h.getAllResponseHeaders()))
                    }
                }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function() {
                    4 === h.readyState && a.setTimeout(function() {
                        c && d()
                    })
                }, c = c("abort");
                try {
                    h.send(b.hasContent && b.data || null)
                } catch (i) {
                    if (c) throw i
                }
            },
            abort: function() {
                c && c()
            }
        } : void 0
    }), n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                return n.globalEval(a), a
            }
        }
    }), n.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), n.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(e, f) {
                    b = n("<script>").prop({
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(), c = null, a && f("error" === a.type ? 404 : 200, a.type)
                    }), d.head.appendChild(b[0])
                },
                abort: function() {
                    c && c()
                }
            }
        }
    });
    var Jb = [],
        Kb = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Jb.pop() || n.expando + "_" + kb++;
            return this[a] = !0, a
        }
    }), n.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Kb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Kb.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Kb, "$1" + e) : b.jsonp !== !1 && (b.url += (lb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || n.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Jb.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), n.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || d;
        var e = x.exec(a),
            f = !c && [];
        return e ? [b.createElement(e[1])] : (e = ca([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes))
    };
    var Lb = n.fn.load;
    n.fn.load = function(a, b, c) {
        if ("string" != typeof a && Lb) return Lb.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h > -1 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).always(c && function(a, b) {
            g.each(function() {
                c.apply(this, f || [a.responseText, b, a])
            })
        }), this
    }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        n.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), n.expr.filters.animated = function(a) {
        return n.grep(n.timers, function(b) {
            return a === b.elem
        }).length
    };

    function Mb(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    n.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"),
                l = n(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, n.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                n.offset.setOffset(this, a, b)
            });
            var b, c, d = this[0],
                e = {
                    top: 0,
                    left: 0
                },
                f = d && d.ownerDocument;
            if (f) return b = f.documentElement, n.contains(b, d) ? (e = d.getBoundingClientRect(), c = Mb(f), {
                top: e.top + c.pageYOffset - b.clientTop,
                left: e.left + c.pageXOffset - b.clientLeft
            }) : e
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0],
                    d = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - n.css(c, "marginTop", !0),
                    left: b.left - d.left - n.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent;
                while (a && "static" === n.css(a, "position")) a = a.offsetParent;
                return a || Ea
            })
        }
    }), n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = "pageYOffset" === b;
        n.fn[a] = function(d) {
            return K(this, function(a, d, e) {
                var f = Mb(a);
                return void 0 === e ? f ? f[b] : a[d] : void(f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e)
            }, a, d, arguments.length)
        }
    }), n.each(["top", "left"], function(a, b) {
        n.cssHooks[b] = Ga(l.pixelPosition, function(a, c) {
            return c ? (c = Fa(a, b), Ba.test(c) ? n(a).position()[b] + "px" : c) : void 0
        })
    }), n.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            n.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return K(this, function(b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), n.fn.extend({
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        },
        size: function() {
            return this.length
        }
    }), n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return n
    });
    var Nb = a.jQuery,
        Ob = a.$;
    return n.noConflict = function(b) {
        return a.$ === n && (a.$ = Ob), b && a.jQuery === n && (a.jQuery = Nb), n
    }, b || (a.jQuery = a.$ = n), n
});

! function(t, e) {
    "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e(require, exports, module) : t.Tether = e()
}(this, function(t, e, o) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t) {
        var e = t.getBoundingClientRect(),
            o = {};
        for (var n in e) o[n] = e[n];
        if (t.ownerDocument !== document) {
            var r = t.ownerDocument.defaultView.frameElement;
            if (r) {
                var s = i(r);
                o.top += s.top, o.bottom += s.top, o.left += s.left, o.right += s.left
            }
        }
        return o
    }

    function r(t) {
        var e = getComputedStyle(t) || {},
            o = e.position,
            n = [];
        if ("fixed" === o) return [t];
        for (var i = t;
            (i = i.parentNode) && i && 1 === i.nodeType;) {
            var r = void 0;
            try {
                r = getComputedStyle(i)
            } catch (s) {}
            if ("undefined" == typeof r || null === r) return n.push(i), n;
            var a = r,
                f = a.overflow,
                l = a.overflowX,
                h = a.overflowY;
            /(auto|scroll)/.test(f + h + l) && ("absolute" !== o || ["relative", "absolute", "fixed"].indexOf(r.position) >= 0) && n.push(i)
        }
        return n.push(t.ownerDocument.body), t.ownerDocument !== document && n.push(t.ownerDocument.defaultView), n
    }

    function s() {
        A && document.body.removeChild(A), A = null
    }

    function a(t) {
        var e = void 0;
        t === document ? (e = document, t = document.documentElement) : e = t.ownerDocument;
        var o = e.documentElement,
            n = i(t),
            r = P();
        return n.top -= r.top, n.left -= r.left, "undefined" == typeof n.width && (n.width = document.body.scrollWidth - n.left - n.right), "undefined" == typeof n.height && (n.height = document.body.scrollHeight - n.top - n.bottom), n.top = n.top - o.clientTop, n.left = n.left - o.clientLeft, n.right = e.body.clientWidth - n.width - n.left, n.bottom = e.body.clientHeight - n.height - n.top, n
    }

    function f(t) {
        return t.offsetParent || document.documentElement
    }

    function l() {
        if (M) return M;
        var t = document.createElement("div");
        t.style.width = "100%", t.style.height = "200px";
        var e = document.createElement("div");
        h(e.style, {
            position: "absolute",
            top: 0,
            left: 0,
            pointerEvents: "none",
            visibility: "hidden",
            width: "200px",
            height: "150px",
            overflow: "hidden"
        }), e.appendChild(t), document.body.appendChild(e);
        var o = t.offsetWidth;
        e.style.overflow = "scroll";
        var n = t.offsetWidth;
        o === n && (n = e.clientWidth), document.body.removeChild(e);
        var i = o - n;
        return M = {
            width: i,
            height: i
        }
    }

    function h() {
        var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
            e = [];
        return Array.prototype.push.apply(e, arguments), e.slice(1).forEach(function(e) {
            if (e)
                for (var o in e)({}).hasOwnProperty.call(e, o) && (t[o] = e[o])
        }), t
    }

    function d(t, e) {
        if ("undefined" != typeof t.classList) e.split(" ").forEach(function(e) {
            e.trim() && t.classList.remove(e)
        });
        else {
            var o = new RegExp("(^| )" + e.split(" ").join("|") + "( |$)", "gi"),
                n = c(t).replace(o, " ");
            g(t, n)
        }
    }

    function u(t, e) {
        if ("undefined" != typeof t.classList) e.split(" ").forEach(function(e) {
            e.trim() && t.classList.add(e)
        });
        else {
            d(t, e);
            var o = c(t) + (" " + e);
            g(t, o)
        }
    }

    function p(t, e) {
        if ("undefined" != typeof t.classList) return t.classList.contains(e);
        var o = c(t);
        return new RegExp("(^| )" + e + "( |$)", "gi").test(o)
    }

    function c(t) {
        return t.className instanceof t.ownerDocument.defaultView.SVGAnimatedString ? t.className.baseVal : t.className
    }

    function g(t, e) {
        t.setAttribute("class", e)
    }

    function m(t, e, o) {
        o.forEach(function(o) {
            -1 === e.indexOf(o) && p(t, o) && d(t, o)
        }), e.forEach(function(e) {
            p(t, e) || u(t, e)
        })
    }

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function v(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    function y(t, e) {
        var o = arguments.length <= 2 || void 0 === arguments[2] ? 1 : arguments[2];
        return t + o >= e && e >= t - o
    }

    function b() {
        return "undefined" != typeof performance && "undefined" != typeof performance.now ? performance.now() : +new Date
    }

    function w() {
        for (var t = {
                top: 0,
                left: 0
            }, e = arguments.length, o = Array(e), n = 0; e > n; n++) o[n] = arguments[n];
        return o.forEach(function(e) {
            var o = e.top,
                n = e.left;
            "string" == typeof o && (o = parseFloat(o, 10)), "string" == typeof n && (n = parseFloat(n, 10)), t.top += o, t.left += n
        }), t
    }

    function C(t, e) {
        return "string" == typeof t.left && -1 !== t.left.indexOf("%") && (t.left = parseFloat(t.left, 10) / 100 * e.width), "string" == typeof t.top && -1 !== t.top.indexOf("%") && (t.top = parseFloat(t.top, 10) / 100 * e.height), t
    }

    function O(t, e) {
        return "scrollParent" === e ? e = t.scrollParents[0] : "window" === e && (e = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset]), e === document && (e = e.documentElement), "undefined" != typeof e.nodeType && ! function() {
            var t = e,
                o = a(e),
                n = o,
                i = getComputedStyle(e);
            if (e = [n.left, n.top, o.width + n.left, o.height + n.top], t.ownerDocument !== document) {
                var r = t.ownerDocument.defaultView;
                e[0] += r.pageXOffset, e[1] += r.pageYOffset, e[2] += r.pageXOffset, e[3] += r.pageYOffset
            }
            G.forEach(function(t, o) {
                t = t[0].toUpperCase() + t.substr(1), "Top" === t || "Left" === t ? e[o] += parseFloat(i["border" + t + "Width"]) : e[o] -= parseFloat(i["border" + t + "Width"])
            })
        }(), e
    }
    var E = function() {
            function t(t, e) {
                for (var o = 0; o < e.length; o++) {
                    var n = e[o];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, o, n) {
                return o && t(e.prototype, o), n && t(e, n), e
            }
        }(),
        x = void 0;
    "undefined" == typeof x && (x = {
        modules: []
    });
    var A = null,
        T = function() {
            var t = 0;
            return function() {
                return ++t
            }
        }(),
        S = {},
        P = function() {
            var t = A;
            t || (t = document.createElement("div"), t.setAttribute("data-tether-id", T()), h(t.style, {
                top: 0,
                left: 0,
                position: "absolute"
            }), document.body.appendChild(t), A = t);
            var e = t.getAttribute("data-tether-id");
            return "undefined" == typeof S[e] && (S[e] = i(t), k(function() {
                delete S[e]
            })), S[e]
        },
        M = null,
        W = [],
        k = function(t) {
            W.push(t)
        },
        _ = function() {
            for (var t = void 0; t = W.pop();) t()
        },
        B = function() {
            function t() {
                n(this, t)
            }
            return E(t, [{
                key: "on",
                value: function(t, e, o) {
                    var n = arguments.length <= 3 || void 0 === arguments[3] ? !1 : arguments[3];
                    "undefined" == typeof this.bindings && (this.bindings = {}), "undefined" == typeof this.bindings[t] && (this.bindings[t] = []), this.bindings[t].push({
                        handler: e,
                        ctx: o,
                        once: n
                    })
                }
            }, {
                key: "once",
                value: function(t, e, o) {
                    this.on(t, e, o, !0)
                }
            }, {
                key: "off",
                value: function(t, e) {
                    if ("undefined" != typeof this.bindings && "undefined" != typeof this.bindings[t])
                        if ("undefined" == typeof e) delete this.bindings[t];
                        else
                            for (var o = 0; o < this.bindings[t].length;) this.bindings[t][o].handler === e ? this.bindings[t].splice(o, 1) : ++o
                }
            }, {
                key: "trigger",
                value: function(t) {
                    if ("undefined" != typeof this.bindings && this.bindings[t]) {
                        for (var e = 0, o = arguments.length, n = Array(o > 1 ? o - 1 : 0), i = 1; o > i; i++) n[i - 1] = arguments[i];
                        for (; e < this.bindings[t].length;) {
                            var r = this.bindings[t][e],
                                s = r.handler,
                                a = r.ctx,
                                f = r.once,
                                l = a;
                            "undefined" == typeof l && (l = this), s.apply(l, n), f ? this.bindings[t].splice(e, 1) : ++e
                        }
                    }
                }
            }]), t
        }();
    x.Utils = {
        getActualBoundingClientRect: i,
        getScrollParents: r,
        getBounds: a,
        getOffsetParent: f,
        extend: h,
        addClass: u,
        removeClass: d,
        hasClass: p,
        updateClasses: m,
        defer: k,
        flush: _,
        uniqueId: T,
        Evented: B,
        getScrollBarSize: l,
        removeUtilElements: s
    };
    var z = function() {
            function t(t, e) {
                var o = [],
                    n = !0,
                    i = !1,
                    r = void 0;
                try {
                    for (var s, a = t[Symbol.iterator](); !(n = (s = a.next()).done) && (o.push(s.value), !e || o.length !== e); n = !0);
                } catch (f) {
                    i = !0, r = f
                } finally {
                    try {
                        !n && a["return"] && a["return"]()
                    } finally {
                        if (i) throw r
                    }
                }
                return o
            }
            return function(e, o) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return t(e, o);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(),
        E = function() {
            function t(t, e) {
                for (var o = 0; o < e.length; o++) {
                    var n = e[o];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, o, n) {
                return o && t(e.prototype, o), n && t(e, n), e
            }
        }(),
        j = function(t, e, o) {
            for (var n = !0; n;) {
                var i = t,
                    r = e,
                    s = o;
                n = !1, null === i && (i = Function.prototype);
                var a = Object.getOwnPropertyDescriptor(i, r);
                if (void 0 !== a) {
                    if ("value" in a) return a.value;
                    var f = a.get;
                    if (void 0 === f) return;
                    return f.call(s)
                }
                var l = Object.getPrototypeOf(i);
                if (null === l) return;
                t = l, e = r, o = s, n = !0, a = l = void 0
            }
        };
    if ("undefined" == typeof x) throw new Error("You must include the utils.js file before tether.js");
    var Y = x.Utils,
        r = Y.getScrollParents,
        a = Y.getBounds,
        f = Y.getOffsetParent,
        h = Y.extend,
        u = Y.addClass,
        d = Y.removeClass,
        m = Y.updateClasses,
        k = Y.defer,
        _ = Y.flush,
        l = Y.getScrollBarSize,
        s = Y.removeUtilElements,
        L = function() {
            if ("undefined" == typeof document) return "";
            for (var t = document.createElement("div"), e = ["transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform"], o = 0; o < e.length; ++o) {
                var n = e[o];
                if (void 0 !== t.style[n]) return n
            }
        }(),
        D = [],
        X = function() {
            D.forEach(function(t) {
                t.position(!1)
            }), _()
        };
    ! function() {
        var t = null,
            e = null,
            o = null,
            n = function i() {
                return "undefined" != typeof e && e > 16 ? (e = Math.min(e - 16, 250), void(o = setTimeout(i, 250))) : void("undefined" != typeof t && b() - t < 10 || (null != o && (clearTimeout(o), o = null), t = b(), X(), e = b() - t))
            };
        "undefined" != typeof window && "undefined" != typeof window.addEventListener && ["resize", "scroll", "touchmove"].forEach(function(t) {
            window.addEventListener(t, n)
        })
    }();
    var F = {
            center: "center",
            left: "right",
            right: "left"
        },
        H = {
            middle: "middle",
            top: "bottom",
            bottom: "top"
        },
        N = {
            top: 0,
            left: 0,
            middle: "50%",
            center: "50%",
            bottom: "100%",
            right: "100%"
        },
        U = function(t, e) {
            var o = t.left,
                n = t.top;
            return "auto" === o && (o = F[e.left]), "auto" === n && (n = H[e.top]), {
                left: o,
                top: n
            }
        },
        V = function(t) {
            var e = t.left,
                o = t.top;
            return "undefined" != typeof N[t.left] && (e = N[t.left]), "undefined" != typeof N[t.top] && (o = N[t.top]), {
                left: e,
                top: o
            }
        },
        R = function(t) {
            var e = t.split(" "),
                o = z(e, 2),
                n = o[0],
                i = o[1];
            return {
                top: n,
                left: i
            }
        },
        q = R,
        I = function(t) {
            function e(t) {
                var o = this;
                n(this, e), j(Object.getPrototypeOf(e.prototype), "constructor", this).call(this), this.position = this.position.bind(this), D.push(this), this.history = [], this.setOptions(t, !1), x.modules.forEach(function(t) {
                    "undefined" != typeof t.initialize && t.initialize.call(o)
                }), this.position()
            }
            return v(e, t), E(e, [{
                key: "getClass",
                value: function() {
                    var t = arguments.length <= 0 || void 0 === arguments[0] ? "" : arguments[0],
                        e = this.options.classes;
                    return "undefined" != typeof e && e[t] ? this.options.classes[t] : this.options.classPrefix ? this.options.classPrefix + "-" + t : t
                }
            }, {
                key: "setOptions",
                value: function(t) {
                    var e = this,
                        o = arguments.length <= 1 || void 0 === arguments[1] ? !0 : arguments[1],
                        n = {
                            offset: "0 0",
                            targetOffset: "0 0",
                            targetAttachment: "auto auto",
                            classPrefix: "tether"
                        };
                    this.options = h(n, t);
                    var i = this.options,
                        s = i.element,
                        a = i.target,
                        f = i.targetModifier;
                    if (this.element = s, this.target = a, this.targetModifier = f, "viewport" === this.target ? (this.target = document.body, this.targetModifier = "visible") : "scroll-handle" === this.target && (this.target = document.body, this.targetModifier = "scroll-handle"), ["element", "target"].forEach(function(t) {
                            if ("undefined" == typeof e[t]) throw new Error("Tether Error: Both element and target must be defined");
                            "undefined" != typeof e[t].jquery ? e[t] = e[t][0] : "string" == typeof e[t] && (e[t] = document.querySelector(e[t]))
                        }), u(this.element, this.getClass("element")), this.options.addTargetClasses !== !1 && u(this.target, this.getClass("target")), !this.options.attachment) throw new Error("Tether Error: You must provide an attachment");
                    this.targetAttachment = q(this.options.targetAttachment), this.attachment = q(this.options.attachment), this.offset = R(this.options.offset), this.targetOffset = R(this.options.targetOffset), "undefined" != typeof this.scrollParents && this.disable(), "scroll-handle" === this.targetModifier ? this.scrollParents = [this.target] : this.scrollParents = r(this.target), this.options.enabled !== !1 && this.enable(o)
                }
            }, {
                key: "getTargetBounds",
                value: function() {
                    if ("undefined" == typeof this.targetModifier) return a(this.target);
                    if ("visible" === this.targetModifier) {
                        if (this.target === document.body) return {
                            top: pageYOffset,
                            left: pageXOffset,
                            height: innerHeight,
                            width: innerWidth
                        };
                        var t = a(this.target),
                            e = {
                                height: t.height,
                                width: t.width,
                                top: t.top,
                                left: t.left
                            };
                        return e.height = Math.min(e.height, t.height - (pageYOffset - t.top)), e.height = Math.min(e.height, t.height - (t.top + t.height - (pageYOffset + innerHeight))), e.height = Math.min(innerHeight, e.height), e.height -= 2, e.width = Math.min(e.width, t.width - (pageXOffset - t.left)), e.width = Math.min(e.width, t.width - (t.left + t.width - (pageXOffset + innerWidth))), e.width = Math.min(innerWidth, e.width), e.width -= 2, e.top < pageYOffset && (e.top = pageYOffset), e.left < pageXOffset && (e.left = pageXOffset), e
                    }
                    if ("scroll-handle" === this.targetModifier) {
                        var t = void 0,
                            o = this.target;
                        o === document.body ? (o = document.documentElement, t = {
                            left: pageXOffset,
                            top: pageYOffset,
                            height: innerHeight,
                            width: innerWidth
                        }) : t = a(o);
                        var n = getComputedStyle(o),
                            i = o.scrollWidth > o.clientWidth || [n.overflow, n.overflowX].indexOf("scroll") >= 0 || this.target !== document.body,
                            r = 0;
                        i && (r = 15);
                        var s = t.height - parseFloat(n.borderTopWidth) - parseFloat(n.borderBottomWidth) - r,
                            e = {
                                width: 15,
                                height: .975 * s * (s / o.scrollHeight),
                                left: t.left + t.width - parseFloat(n.borderLeftWidth) - 15
                            },
                            f = 0;
                        408 > s && this.target === document.body && (f = -11e-5 * Math.pow(s, 2) - .00727 * s + 22.58), this.target !== document.body && (e.height = Math.max(e.height, 24));
                        var l = this.target.scrollTop / (o.scrollHeight - s);
                        return e.top = l * (s - e.height - f) + t.top + parseFloat(n.borderTopWidth), this.target === document.body && (e.height = Math.max(e.height, 24)), e
                    }
                }
            }, {
                key: "clearCache",
                value: function() {
                    this._cache = {}
                }
            }, {
                key: "cache",
                value: function(t, e) {
                    return "undefined" == typeof this._cache && (this._cache = {}), "undefined" == typeof this._cache[t] && (this._cache[t] = e.call(this)), this._cache[t]
                }
            }, {
                key: "enable",
                value: function() {
                    var t = this,
                        e = arguments.length <= 0 || void 0 === arguments[0] ? !0 : arguments[0];
                    this.options.addTargetClasses !== !1 && u(this.target, this.getClass("enabled")), u(this.element, this.getClass("enabled")), this.enabled = !0, this.scrollParents.forEach(function(e) {
                        e !== t.target.ownerDocument && e.addEventListener("scroll", t.position)
                    }), e && this.position()
                }
            }, {
                key: "disable",
                value: function() {
                    var t = this;
                    d(this.target, this.getClass("enabled")), d(this.element, this.getClass("enabled")), this.enabled = !1, "undefined" != typeof this.scrollParents && this.scrollParents.forEach(function(e) {
                        e.removeEventListener("scroll", t.position)
                    })
                }
            }, {
                key: "destroy",
                value: function() {
                    var t = this;
                    this.disable(), D.forEach(function(e, o) {
                        e === t && D.splice(o, 1)
                    }), 0 === D.length && s()
                }
            }, {
                key: "updateAttachClasses",
                value: function(t, e) {
                    var o = this;
                    t = t || this.attachment, e = e || this.targetAttachment;
                    var n = ["left", "top", "bottom", "right", "middle", "center"];
                    "undefined" != typeof this._addAttachClasses && this._addAttachClasses.length && this._addAttachClasses.splice(0, this._addAttachClasses.length), "undefined" == typeof this._addAttachClasses && (this._addAttachClasses = []);
                    var i = this._addAttachClasses;
                    t.top && i.push(this.getClass("element-attached") + "-" + t.top), t.left && i.push(this.getClass("element-attached") + "-" + t.left), e.top && i.push(this.getClass("target-attached") + "-" + e.top), e.left && i.push(this.getClass("target-attached") + "-" + e.left);
                    var r = [];
                    n.forEach(function(t) {
                        r.push(o.getClass("element-attached") + "-" + t), r.push(o.getClass("target-attached") + "-" + t)
                    }), k(function() {
                        "undefined" != typeof o._addAttachClasses && (m(o.element, o._addAttachClasses, r), o.options.addTargetClasses !== !1 && m(o.target, o._addAttachClasses, r), delete o._addAttachClasses)
                    })
                }
            }, {
                key: "position",
                value: function() {
                    var t = this,
                        e = arguments.length <= 0 || void 0 === arguments[0] ? !0 : arguments[0];
                    if (this.enabled) {
                        this.clearCache();
                        var o = U(this.targetAttachment, this.attachment);
                        this.updateAttachClasses(this.attachment, o);
                        var n = this.cache("element-bounds", function() {
                                return a(t.element)
                            }),
                            i = n.width,
                            r = n.height;
                        if (0 === i && 0 === r && "undefined" != typeof this.lastSize) {
                            var s = this.lastSize;
                            i = s.width, r = s.height
                        } else this.lastSize = {
                            width: i,
                            height: r
                        };
                        var h = this.cache("target-bounds", function() {
                                return t.getTargetBounds()
                            }),
                            d = h,
                            u = C(V(this.attachment), {
                                width: i,
                                height: r
                            }),
                            p = C(V(o), d),
                            c = C(this.offset, {
                                width: i,
                                height: r
                            }),
                            g = C(this.targetOffset, d);
                        u = w(u, c), p = w(p, g);
                        for (var m = h.left + p.left - u.left, v = h.top + p.top - u.top, y = 0; y < x.modules.length; ++y) {
                            var b = x.modules[y],
                                O = b.position.call(this, {
                                    left: m,
                                    top: v,
                                    targetAttachment: o,
                                    targetPos: h,
                                    elementPos: n,
                                    offset: u,
                                    targetOffset: p,
                                    manualOffset: c,
                                    manualTargetOffset: g,
                                    scrollbarSize: S,
                                    attachment: this.attachment
                                });
                            if (O === !1) return !1;
                            "undefined" != typeof O && "object" == typeof O && (v = O.top, m = O.left)
                        }
                        var E = {
                                page: {
                                    top: v,
                                    left: m
                                },
                                viewport: {
                                    top: v - pageYOffset,
                                    bottom: pageYOffset - v - r + innerHeight,
                                    left: m - pageXOffset,
                                    right: pageXOffset - m - i + innerWidth
                                }
                            },
                            A = this.target.ownerDocument,
                            T = A.defaultView,
                            S = void 0;
                        return T.innerHeight > A.documentElement.clientHeight && (S = this.cache("scrollbar-size", l), E.viewport.bottom -= S.height), T.innerWidth > A.documentElement.clientWidth && (S = this.cache("scrollbar-size", l), E.viewport.right -= S.width), (-1 === ["", "static"].indexOf(A.body.style.position) || -1 === ["", "static"].indexOf(A.body.parentElement.style.position)) && (E.page.bottom = A.body.scrollHeight - v - r, E.page.right = A.body.scrollWidth - m - i), "undefined" != typeof this.options.optimizations && this.options.optimizations.moveElement !== !1 && "undefined" == typeof this.targetModifier && ! function() {
                            var e = t.cache("target-offsetparent", function() {
                                    return f(t.target)
                                }),
                                o = t.cache("target-offsetparent-bounds", function() {
                                    return a(e)
                                }),
                                n = getComputedStyle(e),
                                i = o,
                                r = {};
                            if (["Top", "Left", "Bottom", "Right"].forEach(function(t) {
                                    r[t.toLowerCase()] = parseFloat(n["border" + t + "Width"])
                                }), o.right = A.body.scrollWidth - o.left - i.width + r.right, o.bottom = A.body.scrollHeight - o.top - i.height + r.bottom, E.page.top >= o.top + r.top && E.page.bottom >= o.bottom && E.page.left >= o.left + r.left && E.page.right >= o.right) {
                                var s = e.scrollTop,
                                    l = e.scrollLeft;
                                E.offset = {
                                    top: E.page.top - o.top + s - r.top,
                                    left: E.page.left - o.left + l - r.left
                                }
                            }
                        }(), this.move(E), this.history.unshift(E), this.history.length > 3 && this.history.pop(), e && _(), !0
                    }
                }
            }, {
                key: "move",
                value: function(t) {
                    var e = this;
                    if ("undefined" != typeof this.element.parentNode) {
                        var o = {};
                        for (var n in t) {
                            o[n] = {};
                            for (var i in t[n]) {
                                for (var r = !1, s = 0; s < this.history.length; ++s) {
                                    var a = this.history[s];
                                    if ("undefined" != typeof a[n] && !y(a[n][i], t[n][i])) {
                                        r = !0;
                                        break
                                    }
                                }
                                r || (o[n][i] = !0)
                            }
                        }
                        var l = {
                                top: "",
                                left: "",
                                right: "",
                                bottom: ""
                            },
                            d = function(t, o) {
                                var n = "undefined" != typeof e.options.optimizations,
                                    i = n ? e.options.optimizations.gpu : null;
                                if (i !== !1) {
                                    var r = void 0,
                                        s = void 0;
                                    if (t.top ? (l.top = 0, r = o.top) : (l.bottom = 0, r = -o.bottom), t.left ? (l.left = 0, s = o.left) : (l.right = 0, s = -o.right), window.matchMedia) {
                                        var a = window.matchMedia("only screen and (min-resolution: 1.3dppx)").matches || window.matchMedia("only screen and (-webkit-min-device-pixel-ratio: 1.3)").matches;
                                        a || (s = Math.round(s), r = Math.round(r))
                                    }
                                    l[L] = "translateX(" + s + "px) translateY(" + r + "px)", "msTransform" !== L && (l[L] += " translateZ(0)")
                                } else t.top ? l.top = o.top + "px" : l.bottom = o.bottom + "px", t.left ? l.left = o.left + "px" : l.right = o.right + "px"
                            },
                            u = !1;
                        if ((o.page.top || o.page.bottom) && (o.page.left || o.page.right) ? (l.position = "absolute", d(o.page, t.page)) : (o.viewport.top || o.viewport.bottom) && (o.viewport.left || o.viewport.right) ? (l.position = "fixed", d(o.viewport, t.viewport)) : "undefined" != typeof o.offset && o.offset.top && o.offset.left ? ! function() {
                                l.position = "absolute";
                                var n = e.cache("target-offsetparent", function() {
                                    return f(e.target)
                                });
                                f(e.element) !== n && k(function() {
                                    e.element.parentNode.removeChild(e.element), n.appendChild(e.element)
                                }), d(o.offset, t.offset), u = !0
                            }() : (l.position = "absolute", d({
                                top: !0,
                                left: !0
                            }, t.page)), !u) {
                            for (var p = !0, c = this.element.parentNode; c && 1 === c.nodeType && "BODY" !== c.tagName;) {
                                if ("static" !== getComputedStyle(c).position) {
                                    p = !1;
                                    break
                                }
                                c = c.parentNode
                            }
                            p || (this.element.parentNode.removeChild(this.element), this.element.ownerDocument.body.appendChild(this.element))
                        }
                        var g = {},
                            m = !1;
                        for (var i in l) {
                            var v = l[i],
                                b = this.element.style[i];
                            b !== v && (m = !0, g[i] = v)
                        }
                        m && k(function() {
                            h(e.element.style, g), e.trigger("repositioned")
                        })
                    }
                }
            }]), e
        }(B);
    I.modules = [], x.position = X;
    var $ = h(I, x),
        z = function() {
            function t(t, e) {
                var o = [],
                    n = !0,
                    i = !1,
                    r = void 0;
                try {
                    for (var s, a = t[Symbol.iterator](); !(n = (s = a.next()).done) && (o.push(s.value), !e || o.length !== e); n = !0);
                } catch (f) {
                    i = !0, r = f
                } finally {
                    try {
                        !n && a["return"] && a["return"]()
                    } finally {
                        if (i) throw r
                    }
                }
                return o
            }
            return function(e, o) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return t(e, o);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(),
        Y = x.Utils,
        a = Y.getBounds,
        h = Y.extend,
        m = Y.updateClasses,
        k = Y.defer,
        G = ["left", "top", "right", "bottom"];
    x.modules.push({
        position: function(t) {
            var e = this,
                o = t.top,
                n = t.left,
                i = t.targetAttachment;
            if (!this.options.constraints) return !0;
            var r = this.cache("element-bounds", function() {
                    return a(e.element)
                }),
                s = r.height,
                f = r.width;
            if (0 === f && 0 === s && "undefined" != typeof this.lastSize) {
                var l = this.lastSize;
                f = l.width, s = l.height
            }
            var d = this.cache("target-bounds", function() {
                    return e.getTargetBounds()
                }),
                u = d.height,
                p = d.width,
                c = [this.getClass("pinned"), this.getClass("out-of-bounds")];
            this.options.constraints.forEach(function(t) {
                var e = t.outOfBoundsClass,
                    o = t.pinnedClass;
                e && c.push(e), o && c.push(o)
            }), c.forEach(function(t) {
                ["left", "top", "right", "bottom"].forEach(function(e) {
                    c.push(t + "-" + e)
                })
            });
            var g = [],
                v = h({}, i),
                y = h({}, this.attachment);
            return this.options.constraints.forEach(function(t) {
                var r = t.to,
                    a = t.attachment,
                    l = t.pin;
                "undefined" == typeof a && (a = "");
                var h = void 0,
                    d = void 0;
                if (a.indexOf(" ") >= 0) {
                    var c = a.split(" "),
                        m = z(c, 2);
                    d = m[0], h = m[1]
                } else h = d = a;
                var b = O(e, r);
                ("target" === d || "both" === d) && (o < b[1] && "top" === v.top && (o += u, v.top = "bottom"), o + s > b[3] && "bottom" === v.top && (o -= u, v.top = "top")), "together" === d && ("top" === v.top && ("bottom" === y.top && o < b[1] ? (o += u, v.top = "bottom", o += s, y.top = "top") : "top" === y.top && o + s > b[3] && o - (s - u) >= b[1] && (o -= s - u, v.top = "bottom", y.top = "bottom")), "bottom" === v.top && ("top" === y.top && o + s > b[3] ? (o -= u, v.top = "top", o -= s, y.top = "bottom") : "bottom" === y.top && o < b[1] && o + (2 * s - u) <= b[3] && (o += s - u, v.top = "top", y.top = "top")), "middle" === v.top && (o + s > b[3] && "top" === y.top ? (o -= s, y.top = "bottom") : o < b[1] && "bottom" === y.top && (o += s, y.top = "top"))), ("target" === h || "both" === h) && (n < b[0] && "left" === v.left && (n += p, v.left = "right"), n + f > b[2] && "right" === v.left && (n -= p, v.left = "left")), "together" === h && (n < b[0] && "left" === v.left ? "right" === y.left ? (n += p, v.left = "right", n += f, y.left = "left") : "left" === y.left && (n += p, v.left = "right", n -= f, y.left = "right") : n + f > b[2] && "right" === v.left ? "left" === y.left ? (n -= p, v.left = "left", n -= f, y.left = "right") : "right" === y.left && (n -= p, v.left = "left", n += f, y.left = "left") : "center" === v.left && (n + f > b[2] && "left" === y.left ? (n -= f, y.left = "right") : n < b[0] && "right" === y.left && (n += f, y.left = "left"))), ("element" === d || "both" === d) && (o < b[1] && "bottom" === y.top && (o += s, y.top = "top"), o + s > b[3] && "top" === y.top && (o -= s, y.top = "bottom")), ("element" === h || "both" === h) && (n < b[0] && ("right" === y.left ? (n += f, y.left = "left") : "center" === y.left && (n += f / 2, y.left = "left")), n + f > b[2] && ("left" === y.left ? (n -= f, y.left = "right") : "center" === y.left && (n -= f / 2, y.left = "right"))), "string" == typeof l ? l = l.split(",").map(function(t) {
                    return t.trim()
                }) : l === !0 && (l = ["top", "left", "right", "bottom"]), l = l || [];
                var w = [],
                    C = [];
                o < b[1] && (l.indexOf("top") >= 0 ? (o = b[1], w.push("top")) : C.push("top")), o + s > b[3] && (l.indexOf("bottom") >= 0 ? (o = b[3] - s, w.push("bottom")) : C.push("bottom")), n < b[0] && (l.indexOf("left") >= 0 ? (n = b[0], w.push("left")) : C.push("left")), n + f > b[2] && (l.indexOf("right") >= 0 ? (n = b[2] - f, w.push("right")) : C.push("right")), w.length && ! function() {
                    var t = void 0;
                    t = "undefined" != typeof e.options.pinnedClass ? e.options.pinnedClass : e.getClass("pinned"), g.push(t), w.forEach(function(e) {
                        g.push(t + "-" + e)
                    })
                }(), C.length && ! function() {
                    var t = void 0;
                    t = "undefined" != typeof e.options.outOfBoundsClass ? e.options.outOfBoundsClass : e.getClass("out-of-bounds"), g.push(t), C.forEach(function(e) {
                        g.push(t + "-" + e)
                    })
                }(), (w.indexOf("left") >= 0 || w.indexOf("right") >= 0) && (y.left = v.left = !1), (w.indexOf("top") >= 0 || w.indexOf("bottom") >= 0) && (y.top = v.top = !1), (v.top !== i.top || v.left !== i.left || y.top !== e.attachment.top || y.left !== e.attachment.left) && (e.updateAttachClasses(y, v), e.trigger("update", {
                    attachment: y,
                    targetAttachment: v
                }))
            }), k(function() {
                e.options.addTargetClasses !== !1 && m(e.target, g, c), m(e.element, g, c)
            }), {
                top: o,
                left: n
            }
        }
    });
    var Y = x.Utils,
        a = Y.getBounds,
        m = Y.updateClasses,
        k = Y.defer;
    x.modules.push({
        position: function(t) {
            var e = this,
                o = t.top,
                n = t.left,
                i = this.cache("element-bounds", function() {
                    return a(e.element)
                }),
                r = i.height,
                s = i.width,
                f = this.getTargetBounds(),
                l = o + r,
                h = n + s,
                d = [];
            o <= f.bottom && l >= f.top && ["left", "right"].forEach(function(t) {
                var e = f[t];
                (e === n || e === h) && d.push(t)
            }), n <= f.right && h >= f.left && ["top", "bottom"].forEach(function(t) {
                var e = f[t];
                (e === o || e === l) && d.push(t)
            });
            var u = [],
                p = [],
                c = ["left", "top", "right", "bottom"];
            return u.push(this.getClass("abutted")), c.forEach(function(t) {
                u.push(e.getClass("abutted") + "-" + t)
            }), d.length && p.push(this.getClass("abutted")), d.forEach(function(t) {
                p.push(e.getClass("abutted") + "-" + t)
            }), k(function() {
                e.options.addTargetClasses !== !1 && m(e.target, p, u), m(e.element, p, u)
            }), !0
        }
    });
    var z = function() {
        function t(t, e) {
            var o = [],
                n = !0,
                i = !1,
                r = void 0;
            try {
                for (var s, a = t[Symbol.iterator](); !(n = (s = a.next()).done) && (o.push(s.value), !e || o.length !== e); n = !0);
            } catch (f) {
                i = !0, r = f
            } finally {
                try {
                    !n && a["return"] && a["return"]()
                } finally {
                    if (i) throw r
                }
            }
            return o
        }
        return function(e, o) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return t(e, o);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }();
    return x.modules.push({
        position: function(t) {
            var e = t.top,
                o = t.left;
            if (this.options.shift) {
                var n = this.options.shift;
                "function" == typeof this.options.shift && (n = this.options.shift.call(this, {
                    top: e,
                    left: o
                }));
                var i = void 0,
                    r = void 0;
                if ("string" == typeof n) {
                    n = n.split(" "), n[1] = n[1] || n[0];
                    var s = n,
                        a = z(s, 2);
                    i = a[0], r = a[1], i = parseFloat(i, 10), r = parseFloat(r, 10)
                } else i = n.top, r = n.left;
                return e += i, o += r, {
                    top: e,
                    left: o
                }
            }
        }
    }), $
});
/*!
 * Bootstrap v4.0.0-alpha.4 (http://getbootstrap.com)
 * Copyright 2011-2016 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(a) {
    var b = a.fn.jquery.split(" ")[0].split(".");
    if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
}(jQuery), + function(a) {
    "use strict";

    function b(a, b) {
        if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
        a.prototype = Object.create(b && b.prototype, {
            constructor: {
                value: a,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
    }

    function c(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }
    var d = function(a, b, c) {
            for (var d = !0; d;) {
                var e = a,
                    f = b,
                    g = c;
                d = !1, null === e && (e = Function.prototype);
                var h = Object.getOwnPropertyDescriptor(e, f);
                if (void 0 !== h) {
                    if ("value" in h) return h.value;
                    var i = h.get;
                    if (void 0 === i) return;
                    return i.call(g)
                }
                var j = Object.getPrototypeOf(e);
                if (null === j) return;
                a = j, b = f, c = g, d = !0, h = j = void 0
            }
        },
        e = function() {
            function a(a, b) {
                for (var c = 0; c < b.length; c++) {
                    var d = b[c];
                    d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                }
            }
            return function(b, c, d) {
                return c && a(b.prototype, c), d && a(b, d), b
            }
        }(),
        f = function(a) {
            function b(a) {
                return {}.toString.call(a).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
            }

            function c(a) {
                return (a[0] || a).nodeType
            }

            function d() {
                return {
                    bindType: h.end,
                    delegateType: h.end,
                    handle: function(b) {
                        if (a(b.target).is(this)) return b.handleObj.handler.apply(this, arguments)
                    }
                }
            }

            function e() {
                if (window.QUnit) return !1;
                var a = document.createElement("bootstrap");
                for (var b in j)
                    if (void 0 !== a.style[b]) return {
                        end: j[b]
                    };
                return !1
            }

            function f(b) {
                var c = this,
                    d = !1;
                return a(this).one(k.TRANSITION_END, function() {
                    d = !0
                }), setTimeout(function() {
                    d || k.triggerTransitionEnd(c)
                }, b), this
            }

            function g() {
                h = e(), a.fn.emulateTransitionEnd = f, k.supportsTransitionEnd() && (a.event.special[k.TRANSITION_END] = d())
            }
            var h = !1,
                i = 1e6,
                j = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                },
                k = {
                    TRANSITION_END: "bsTransitionEnd",
                    getUID: function(a) {
                        do a += ~~(Math.random() * i); while (document.getElementById(a));
                        return a
                    },
                    getSelectorFromElement: function(a) {
                        var b = a.getAttribute("data-target");
                        return b || (b = a.getAttribute("href") || "", b = /^#[a-z]/i.test(b) ? b : null), b
                    },
                    reflow: function(a) {
                        new Function("bs", "return bs")(a.offsetHeight)
                    },
                    triggerTransitionEnd: function(b) {
                        a(b).trigger(h.end)
                    },
                    supportsTransitionEnd: function() {
                        return Boolean(h)
                    },
                    typeCheckConfig: function(a, d, e) {
                        for (var f in e)
                            if (e.hasOwnProperty(f)) {
                                var g = e[f],
                                    h = d[f],
                                    i = void 0;
                                if (i = h && c(h) ? "element" : b(h), !new RegExp(g).test(i)) throw new Error(a.toUpperCase() + ": " + ('Option "' + f + '" provided type "' + i + '" ') + ('but expected type "' + g + '".'))
                            }
                    }
                };
            return g(), k
        }(jQuery),
        g = (function(a) {
            var b = "alert",
                d = "4.0.0-alpha.4",
                g = "bs.alert",
                h = "." + g,
                i = ".data-api",
                j = a.fn[b],
                k = 150,
                l = {
                    DISMISS: '[data-dismiss="alert"]'
                },
                m = {
                    CLOSE: "close" + h,
                    CLOSED: "closed" + h,
                    CLICK_DATA_API: "click" + h + i
                },
                n = {
                    ALERT: "alert",
                    FADE: "fade",
                    IN: "in"
                },
                o = function() {
                    function b(a) {
                        c(this, b), this._element = a
                    }
                    return e(b, [{
                        key: "close",
                        value: function(a) {
                            a = a || this._element;
                            var b = this._getRootElement(a),
                                c = this._triggerCloseEvent(b);
                            c.isDefaultPrevented() || this._removeElement(b)
                        }
                    }, {
                        key: "dispose",
                        value: function() {
                            a.removeData(this._element, g), this._element = null
                        }
                    }, {
                        key: "_getRootElement",
                        value: function(b) {
                            var c = f.getSelectorFromElement(b),
                                d = !1;
                            return c && (d = a(c)[0]), d || (d = a(b).closest("." + n.ALERT)[0]), d
                        }
                    }, {
                        key: "_triggerCloseEvent",
                        value: function(b) {
                            var c = a.Event(m.CLOSE);
                            return a(b).trigger(c), c
                        }
                    }, {
                        key: "_removeElement",
                        value: function(b) {
                            return a(b).removeClass(n.IN), f.supportsTransitionEnd() && a(b).hasClass(n.FADE) ? void a(b).one(f.TRANSITION_END, a.proxy(this._destroyElement, this, b)).emulateTransitionEnd(k) : void this._destroyElement(b)
                        }
                    }, {
                        key: "_destroyElement",
                        value: function(b) {
                            a(b).detach().trigger(m.CLOSED).remove()
                        }
                    }], [{
                        key: "_jQueryInterface",
                        value: function(c) {
                            return this.each(function() {
                                var d = a(this),
                                    e = d.data(g);
                                e || (e = new b(this), d.data(g, e)), "close" === c && e[c](this)
                            })
                        }
                    }, {
                        key: "_handleDismiss",
                        value: function(a) {
                            return function(b) {
                                b && b.preventDefault(), a.close(this)
                            }
                        }
                    }, {
                        key: "VERSION",
                        get: function() {
                            return d
                        }
                    }]), b
                }();
            return a(document).on(m.CLICK_DATA_API, l.DISMISS, o._handleDismiss(new o)), a.fn[b] = o._jQueryInterface, a.fn[b].Constructor = o, a.fn[b].noConflict = function() {
                return a.fn[b] = j, o._jQueryInterface
            }, o
        }(jQuery), function(a) {
            var b = "button",
                d = "4.0.0-alpha.4",
                f = "bs.button",
                g = "." + f,
                h = ".data-api",
                i = a.fn[b],
                j = {
                    ACTIVE: "active",
                    BUTTON: "btn",
                    FOCUS: "focus"
                },
                k = {
                    DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
                    DATA_TOGGLE: '[data-toggle="buttons"]',
                    INPUT: "input",
                    ACTIVE: ".active",
                    BUTTON: ".btn"
                },
                l = {
                    CLICK_DATA_API: "click" + g + h,
                    FOCUS_BLUR_DATA_API: "focus" + g + h + " " + ("blur" + g + h)
                },
                m = function() {
                    function b(a) {
                        c(this, b), this._element = a
                    }
                    return e(b, [{
                        key: "toggle",
                        value: function() {
                            var b = !0,
                                c = a(this._element).closest(k.DATA_TOGGLE)[0];
                            if (c) {
                                var d = a(this._element).find(k.INPUT)[0];
                                if (d) {
                                    if ("radio" === d.type)
                                        if (d.checked && a(this._element).hasClass(j.ACTIVE)) b = !1;
                                        else {
                                            var e = a(c).find(k.ACTIVE)[0];
                                            e && a(e).removeClass(j.ACTIVE)
                                        }
                                    b && (d.checked = !a(this._element).hasClass(j.ACTIVE), a(this._element).trigger("change")), d.focus()
                                }
                            } else this._element.setAttribute("aria-pressed", !a(this._element).hasClass(j.ACTIVE));
                            b && a(this._element).toggleClass(j.ACTIVE)
                        }
                    }, {
                        key: "dispose",
                        value: function() {
                            a.removeData(this._element, f), this._element = null
                        }
                    }], [{
                        key: "_jQueryInterface",
                        value: function(c) {
                            return this.each(function() {
                                var d = a(this).data(f);
                                d || (d = new b(this), a(this).data(f, d)), "toggle" === c && d[c]()
                            })
                        }
                    }, {
                        key: "VERSION",
                        get: function() {
                            return d
                        }
                    }]), b
                }();
            return a(document).on(l.CLICK_DATA_API, k.DATA_TOGGLE_CARROT, function(b) {
                b.preventDefault();
                var c = b.target;
                a(c).hasClass(j.BUTTON) || (c = a(c).closest(k.BUTTON)), m._jQueryInterface.call(a(c), "toggle")
            }).on(l.FOCUS_BLUR_DATA_API, k.DATA_TOGGLE_CARROT, function(b) {
                var c = a(b.target).closest(k.BUTTON)[0];
                a(c).toggleClass(j.FOCUS, /^focus(in)?$/.test(b.type))
            }), a.fn[b] = m._jQueryInterface, a.fn[b].Constructor = m, a.fn[b].noConflict = function() {
                return a.fn[b] = i, m._jQueryInterface
            }, m
        }(jQuery), function(a) {
            var b = "carousel",
                d = "4.0.0-alpha.4",
                g = "bs.carousel",
                h = "." + g,
                i = ".data-api",
                j = a.fn[b],
                k = 600,
                l = 37,
                m = 39,
                n = {
                    interval: 5e3,
                    keyboard: !0,
                    slide: !1,
                    pause: "hover",
                    wrap: !0
                },
                o = {
                    interval: "(number|boolean)",
                    keyboard: "boolean",
                    slide: "(boolean|string)",
                    pause: "(string|boolean)",
                    wrap: "boolean"
                },
                p = {
                    NEXT: "next",
                    PREVIOUS: "prev"
                },
                q = {
                    SLIDE: "slide" + h,
                    SLID: "slid" + h,
                    KEYDOWN: "keydown" + h,
                    MOUSEENTER: "mouseenter" + h,
                    MOUSELEAVE: "mouseleave" + h,
                    LOAD_DATA_API: "load" + h + i,
                    CLICK_DATA_API: "click" + h + i
                },
                r = {
                    CAROUSEL: "carousel",
                    ACTIVE: "active",
                    SLIDE: "slide",
                    RIGHT: "right",
                    LEFT: "left",
                    ITEM: "carousel-item"
                },
                s = {
                    ACTIVE: ".active",
                    ACTIVE_ITEM: ".active.carousel-item",
                    ITEM: ".carousel-item",
                    NEXT_PREV: ".next, .prev",
                    INDICATORS: ".carousel-indicators",
                    DATA_SLIDE: "[data-slide], [data-slide-to]",
                    DATA_RIDE: '[data-ride="carousel"]'
                },
                t = function() {
                    function i(b, d) {
                        c(this, i), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this._config = this._getConfig(d), this._element = a(b)[0], this._indicatorsElement = a(this._element).find(s.INDICATORS)[0], this._addEventListeners()
                    }
                    return e(i, [{
                        key: "next",
                        value: function() {
                            this._isSliding || this._slide(p.NEXT)
                        }
                    }, {
                        key: "nextWhenVisible",
                        value: function() {
                            document.hidden || this.next()
                        }
                    }, {
                        key: "prev",
                        value: function() {
                            this._isSliding || this._slide(p.PREVIOUS)
                        }
                    }, {
                        key: "pause",
                        value: function(b) {
                            b || (this._isPaused = !0), a(this._element).find(s.NEXT_PREV)[0] && f.supportsTransitionEnd() && (f.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                        }
                    }, {
                        key: "cycle",
                        value: function(b) {
                            b || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval(a.proxy(document.visibilityState ? this.nextWhenVisible : this.next, this), this._config.interval))
                        }
                    }, {
                        key: "to",
                        value: function(b) {
                            var c = this;
                            this._activeElement = a(this._element).find(s.ACTIVE_ITEM)[0];
                            var d = this._getItemIndex(this._activeElement);
                            if (!(b > this._items.length - 1 || b < 0)) {
                                if (this._isSliding) return void a(this._element).one(q.SLID, function() {
                                    return c.to(b)
                                });
                                if (d === b) return this.pause(), void this.cycle();
                                var e = b > d ? p.NEXT : p.PREVIOUS;
                                this._slide(e, this._items[b])
                            }
                        }
                    }, {
                        key: "dispose",
                        value: function() {
                            a(this._element).off(h), a.removeData(this._element, g), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
                        }
                    }, {
                        key: "_getConfig",
                        value: function(c) {
                            return c = a.extend({}, n, c), f.typeCheckConfig(b, c, o), c
                        }
                    }, {
                        key: "_addEventListeners",
                        value: function() {
                            this._config.keyboard && a(this._element).on(q.KEYDOWN, a.proxy(this._keydown, this)), "hover" !== this._config.pause || "ontouchstart" in document.documentElement || a(this._element).on(q.MOUSEENTER, a.proxy(this.pause, this)).on(q.MOUSELEAVE, a.proxy(this.cycle, this))
                        }
                    }, {
                        key: "_keydown",
                        value: function(a) {
                            if (a.preventDefault(), !/input|textarea/i.test(a.target.tagName)) switch (a.which) {
                                case l:
                                    this.prev();
                                    break;
                                case m:
                                    this.next();
                                    break;
                                default:
                                    return
                            }
                        }
                    }, {
                        key: "_getItemIndex",
                        value: function(b) {
                            return this._items = a.makeArray(a(b).parent().find(s.ITEM)), this._items.indexOf(b)
                        }
                    }, {
                        key: "_getItemByDirection",
                        value: function(a, b) {
                            var c = a === p.NEXT,
                                d = a === p.PREVIOUS,
                                e = this._getItemIndex(b),
                                f = this._items.length - 1,
                                g = d && 0 === e || c && e === f;
                            if (g && !this._config.wrap) return b;
                            var h = a === p.PREVIOUS ? -1 : 1,
                                i = (e + h) % this._items.length;
                            return i === -1 ? this._items[this._items.length - 1] : this._items[i]
                        }
                    }, {
                        key: "_triggerSlideEvent",
                        value: function(b, c) {
                            var d = a.Event(q.SLIDE, {
                                relatedTarget: b,
                                direction: c
                            });
                            return a(this._element).trigger(d), d
                        }
                    }, {
                        key: "_setActiveIndicatorElement",
                        value: function(b) {
                            if (this._indicatorsElement) {
                                a(this._indicatorsElement).find(s.ACTIVE).removeClass(r.ACTIVE);
                                var c = this._indicatorsElement.children[this._getItemIndex(b)];
                                c && a(c).addClass(r.ACTIVE)
                            }
                        }
                    }, {
                        key: "_slide",
                        value: function(b, c) {
                            var d = this,
                                e = a(this._element).find(s.ACTIVE_ITEM)[0],
                                g = c || e && this._getItemByDirection(b, e),
                                h = Boolean(this._interval),
                                i = b === p.NEXT ? r.LEFT : r.RIGHT;
                            if (g && a(g).hasClass(r.ACTIVE)) return void(this._isSliding = !1);
                            var j = this._triggerSlideEvent(g, i);
                            if (!j.isDefaultPrevented() && e && g) {
                                this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(g);
                                var l = a.Event(q.SLID, {
                                    relatedTarget: g,
                                    direction: i
                                });
                                f.supportsTransitionEnd() && a(this._element).hasClass(r.SLIDE) ? (a(g).addClass(b), f.reflow(g), a(e).addClass(i), a(g).addClass(i), a(e).one(f.TRANSITION_END, function() {
                                    a(g).removeClass(i).removeClass(b), a(g).addClass(r.ACTIVE), a(e).removeClass(r.ACTIVE).removeClass(b).removeClass(i), d._isSliding = !1, setTimeout(function() {
                                        return a(d._element).trigger(l)
                                    }, 0)
                                }).emulateTransitionEnd(k)) : (a(e).removeClass(r.ACTIVE), a(g).addClass(r.ACTIVE), this._isSliding = !1, a(this._element).trigger(l)), h && this.cycle()
                            }
                        }
                    }], [{
                        key: "_jQueryInterface",
                        value: function(b) {
                            return this.each(function() {
                                var c = a(this).data(g),
                                    d = a.extend({}, n, a(this).data());
                                "object" == typeof b && a.extend(d, b);
                                var e = "string" == typeof b ? b : d.slide;
                                if (c || (c = new i(this, d), a(this).data(g, c)), "number" == typeof b) c.to(b);
                                else if ("string" == typeof e) {
                                    if (void 0 === c[e]) throw new Error('No method named "' + e + '"');
                                    c[e]()
                                } else d.interval && (c.pause(), c.cycle())
                            })
                        }
                    }, {
                        key: "_dataApiClickHandler",
                        value: function(b) {
                            var c = f.getSelectorFromElement(this);
                            if (c) {
                                var d = a(c)[0];
                                if (d && a(d).hasClass(r.CAROUSEL)) {
                                    var e = a.extend({}, a(d).data(), a(this).data()),
                                        h = this.getAttribute("data-slide-to");
                                    h && (e.interval = !1), i._jQueryInterface.call(a(d), e), h && a(d).data(g).to(h), b.preventDefault()
                                }
                            }
                        }
                    }, {
                        key: "VERSION",
                        get: function() {
                            return d
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return n
                        }
                    }]), i
                }();
            return a(document).on(q.CLICK_DATA_API, s.DATA_SLIDE, t._dataApiClickHandler), a(window).on(q.LOAD_DATA_API, function() {
                a(s.DATA_RIDE).each(function() {
                    var b = a(this);
                    t._jQueryInterface.call(b, b.data())
                })
            }), a.fn[b] = t._jQueryInterface, a.fn[b].Constructor = t, a.fn[b].noConflict = function() {
                return a.fn[b] = j, t._jQueryInterface
            }, t
        }(jQuery), function(a) {
            var b = "collapse",
                d = "4.0.0-alpha.4",
                g = "bs.collapse",
                h = "." + g,
                i = ".data-api",
                j = a.fn[b],
                k = 600,
                l = {
                    toggle: !0,
                    parent: ""
                },
                m = {
                    toggle: "boolean",
                    parent: "string"
                },
                n = {
                    SHOW: "show" + h,
                    SHOWN: "shown" + h,
                    HIDE: "hide" + h,
                    HIDDEN: "hidden" + h,
                    CLICK_DATA_API: "click" + h + i
                },
                o = {
                    IN: "in",
                    COLLAPSE: "collapse",
                    COLLAPSING: "collapsing",
                    COLLAPSED: "collapsed"
                },
                p = {
                    WIDTH: "width",
                    HEIGHT: "height"
                },
                q = {
                    ACTIVES: ".panel > .in, .panel > .collapsing",
                    DATA_TOGGLE: '[data-toggle="collapse"]'
                },
                r = function() {
                    function h(b, d) {
                        c(this, h), this._isTransitioning = !1, this._element = b, this._config = this._getConfig(d), this._triggerArray = a.makeArray(a('[data-toggle="collapse"][href="#' + b.id + '"],' + ('[data-toggle="collapse"][data-target="#' + b.id + '"]'))), this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                    }
                    return e(h, [{
                        key: "toggle",
                        value: function() {
                            a(this._element).hasClass(o.IN) ? this.hide() : this.show()
                        }
                    }, {
                        key: "show",
                        value: function() {
                            var b = this;
                            if (!this._isTransitioning && !a(this._element).hasClass(o.IN)) {
                                var c = void 0,
                                    d = void 0;
                                if (this._parent && (c = a.makeArray(a(q.ACTIVES)), c.length || (c = null)), !(c && (d = a(c).data(g), d && d._isTransitioning))) {
                                    var e = a.Event(n.SHOW);
                                    if (a(this._element).trigger(e), !e.isDefaultPrevented()) {
                                        c && (h._jQueryInterface.call(a(c), "hide"), d || a(c).data(g, null));
                                        var i = this._getDimension();
                                        a(this._element).removeClass(o.COLLAPSE).addClass(o.COLLAPSING), this._element.style[i] = 0, this._element.setAttribute("aria-expanded", !0), this._triggerArray.length && a(this._triggerArray).removeClass(o.COLLAPSED).attr("aria-expanded", !0), this.setTransitioning(!0);
                                        var j = function() {
                                            a(b._element).removeClass(o.COLLAPSING).addClass(o.COLLAPSE).addClass(o.IN), b._element.style[i] = "", b.setTransitioning(!1), a(b._element).trigger(n.SHOWN)
                                        };
                                        if (!f.supportsTransitionEnd()) return void j();
                                        var l = i[0].toUpperCase() + i.slice(1),
                                            m = "scroll" + l;
                                        a(this._element).one(f.TRANSITION_END, j).emulateTransitionEnd(k), this._element.style[i] = this._element[m] + "px"
                                    }
                                }
                            }
                        }
                    }, {
                        key: "hide",
                        value: function() {
                            var b = this;
                            if (!this._isTransitioning && a(this._element).hasClass(o.IN)) {
                                var c = a.Event(n.HIDE);
                                if (a(this._element).trigger(c), !c.isDefaultPrevented()) {
                                    var d = this._getDimension(),
                                        e = d === p.WIDTH ? "offsetWidth" : "offsetHeight";
                                    this._element.style[d] = this._element[e] + "px", f.reflow(this._element), a(this._element).addClass(o.COLLAPSING).removeClass(o.COLLAPSE).removeClass(o.IN), this._element.setAttribute("aria-expanded", !1), this._triggerArray.length && a(this._triggerArray).addClass(o.COLLAPSED).attr("aria-expanded", !1), this.setTransitioning(!0);
                                    var g = function() {
                                        b.setTransitioning(!1), a(b._element).removeClass(o.COLLAPSING).addClass(o.COLLAPSE).trigger(n.HIDDEN)
                                    };
                                    return this._element.style[d] = 0, f.supportsTransitionEnd() ? void a(this._element).one(f.TRANSITION_END, g).emulateTransitionEnd(k) : void g()
                                }
                            }
                        }
                    }, {
                        key: "setTransitioning",
                        value: function(a) {
                            this._isTransitioning = a
                        }
                    }, {
                        key: "dispose",
                        value: function() {
                            a.removeData(this._element, g), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
                        }
                    }, {
                        key: "_getConfig",
                        value: function(c) {
                            return c = a.extend({}, l, c), c.toggle = Boolean(c.toggle), f.typeCheckConfig(b, c, m), c
                        }
                    }, {
                        key: "_getDimension",
                        value: function() {
                            var b = a(this._element).hasClass(p.WIDTH);
                            return b ? p.WIDTH : p.HEIGHT
                        }
                    }, {
                        key: "_getParent",
                        value: function() {
                            var b = this,
                                c = a(this._config.parent)[0],
                                d = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                            return a(c).find(d).each(function(a, c) {
                                b._addAriaAndCollapsedClass(h._getTargetFromElement(c), [c])
                            }), c
                        }
                    }, {
                        key: "_addAriaAndCollapsedClass",
                        value: function(b, c) {
                            if (b) {
                                var d = a(b).hasClass(o.IN);
                                b.setAttribute("aria-expanded", d), c.length && a(c).toggleClass(o.COLLAPSED, !d).attr("aria-expanded", d)
                            }
                        }
                    }], [{
                        key: "_getTargetFromElement",
                        value: function(b) {
                            var c = f.getSelectorFromElement(b);
                            return c ? a(c)[0] : null
                        }
                    }, {
                        key: "_jQueryInterface",
                        value: function(b) {
                            return this.each(function() {
                                var c = a(this),
                                    d = c.data(g),
                                    e = a.extend({}, l, c.data(), "object" == typeof b && b);
                                if (!d && e.toggle && /show|hide/.test(b) && (e.toggle = !1), d || (d = new h(this, e), c.data(g, d)), "string" == typeof b) {
                                    if (void 0 === d[b]) throw new Error('No method named "' + b + '"');
                                    d[b]()
                                }
                            })
                        }
                    }, {
                        key: "VERSION",
                        get: function() {
                            return d
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return l
                        }
                    }]), h
                }();
            return a(document).on(n.CLICK_DATA_API, q.DATA_TOGGLE, function(b) {
                b.preventDefault();
                var c = r._getTargetFromElement(this),
                    d = a(c).data(g),
                    e = d ? "toggle" : a(this).data();
                r._jQueryInterface.call(a(c), e)
            }), a.fn[b] = r._jQueryInterface, a.fn[b].Constructor = r, a.fn[b].noConflict = function() {
                return a.fn[b] = j, r._jQueryInterface
            }, r
        }(jQuery), function(a) {
            var b = "dropdown",
                d = "4.0.0-alpha.4",
                g = "bs.dropdown",
                h = "." + g,
                i = ".data-api",
                j = a.fn[b],
                k = 27,
                l = 38,
                m = 40,
                n = 3,
                o = {
                    HIDE: "hide" + h,
                    HIDDEN: "hidden" + h,
                    SHOW: "show" + h,
                    SHOWN: "shown" + h,
                    CLICK: "click" + h,
                    CLICK_DATA_API: "click" + h + i,
                    KEYDOWN_DATA_API: "keydown" + h + i
                },
                p = {
                    BACKDROP: "dropdown-backdrop",
                    DISABLED: "disabled",
                    OPEN: "open"
                },
                q = {
                    BACKDROP: ".dropdown-backdrop",
                    DATA_TOGGLE: '[data-toggle="dropdown"]',
                    FORM_CHILD: ".dropdown form",
                    ROLE_MENU: '[role="menu"]',
                    ROLE_LISTBOX: '[role="listbox"]',
                    NAVBAR_NAV: ".navbar-nav",
                    VISIBLE_ITEMS: '[role="menu"] li:not(.disabled) a, [role="listbox"] li:not(.disabled) a'
                },
                r = function() {
                    function b(a) {
                        c(this, b), this._element = a, this._addEventListeners()
                    }
                    return e(b, [{
                        key: "toggle",
                        value: function() {
                            if (this.disabled || a(this).hasClass(p.DISABLED)) return !1;
                            var c = b._getParentFromElement(this),
                                d = a(c).hasClass(p.OPEN);
                            if (b._clearMenus(), d) return !1;
                            if ("ontouchstart" in document.documentElement && !a(c).closest(q.NAVBAR_NAV).length) {
                                var e = document.createElement("div");
                                e.className = p.BACKDROP, a(e).insertBefore(this), a(e).on("click", b._clearMenus)
                            }
                            var f = {
                                    relatedTarget: this
                                },
                                g = a.Event(o.SHOW, f);
                            return a(c).trigger(g), !g.isDefaultPrevented() && (this.focus(), this.setAttribute("aria-expanded", "true"), a(c).toggleClass(p.OPEN), a(c).trigger(a.Event(o.SHOWN, f)), !1)
                        }
                    }, {
                        key: "dispose",
                        value: function() {
                            a.removeData(this._element, g), a(this._element).off(h), this._element = null
                        }
                    }, {
                        key: "_addEventListeners",
                        value: function() {
                            a(this._element).on(o.CLICK, this.toggle)
                        }
                    }], [{
                        key: "_jQueryInterface",
                        value: function(c) {
                            return this.each(function() {
                                var d = a(this).data(g);
                                if (d || a(this).data(g, d = new b(this)), "string" == typeof c) {
                                    if (void 0 === d[c]) throw new Error('No method named "' + c + '"');
                                    d[c].call(this)
                                }
                            })
                        }
                    }, {
                        key: "_clearMenus",
                        value: function(c) {
                            if (!c || c.which !== n) {
                                var d = a(q.BACKDROP)[0];
                                d && d.parentNode.removeChild(d);
                                for (var e = a.makeArray(a(q.DATA_TOGGLE)), f = 0; f < e.length; f++) {
                                    var g = b._getParentFromElement(e[f]),
                                        h = {
                                            relatedTarget: e[f]
                                        };
                                    if (a(g).hasClass(p.OPEN) && !(c && "click" === c.type && /input|textarea/i.test(c.target.tagName) && a.contains(g, c.target))) {
                                        var i = a.Event(o.HIDE, h);
                                        a(g).trigger(i), i.isDefaultPrevented() || (e[f].setAttribute("aria-expanded", "false"), a(g).removeClass(p.OPEN).trigger(a.Event(o.HIDDEN, h)))
                                    }
                                }
                            }
                        }
                    }, {
                        key: "_getParentFromElement",
                        value: function(b) {
                            var c = void 0,
                                d = f.getSelectorFromElement(b);
                            return d && (c = a(d)[0]), c || b.parentNode
                        }
                    }, {
                        key: "_dataApiKeydownHandler",
                        value: function(c) {
                            if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName) && (c.preventDefault(), c.stopPropagation(), !this.disabled && !a(this).hasClass(p.DISABLED))) {
                                var d = b._getParentFromElement(this),
                                    e = a(d).hasClass(p.OPEN);
                                if (!e && c.which !== k || e && c.which === k) {
                                    if (c.which === k) {
                                        var f = a(d).find(q.DATA_TOGGLE)[0];
                                        a(f).trigger("focus")
                                    }
                                    return void a(this).trigger("click")
                                }
                                var g = a.makeArray(a(q.VISIBLE_ITEMS));
                                if (g = g.filter(function(a) {
                                        return a.offsetWidth || a.offsetHeight
                                    }), g.length) {
                                    var h = g.indexOf(c.target);
                                    c.which === l && h > 0 && h--, c.which === m && h < g.length - 1 && h++, h < 0 && (h = 0), g[h].focus()
                                }
                            }
                        }
                    }, {
                        key: "VERSION",
                        get: function() {
                            return d
                        }
                    }]), b
                }();
            return a(document).on(o.KEYDOWN_DATA_API, q.DATA_TOGGLE, r._dataApiKeydownHandler).on(o.KEYDOWN_DATA_API, q.ROLE_MENU, r._dataApiKeydownHandler).on(o.KEYDOWN_DATA_API, q.ROLE_LISTBOX, r._dataApiKeydownHandler).on(o.CLICK_DATA_API, r._clearMenus).on(o.CLICK_DATA_API, q.DATA_TOGGLE, r.prototype.toggle).on(o.CLICK_DATA_API, q.FORM_CHILD, function(a) {
                a.stopPropagation()
            }), a.fn[b] = r._jQueryInterface, a.fn[b].Constructor = r, a.fn[b].noConflict = function() {
                return a.fn[b] = j, r._jQueryInterface
            }, r
        }(jQuery), function(a) {
            var b = "modal",
                d = "4.0.0-alpha.4",
                g = "bs.modal",
                h = "." + g,
                i = ".data-api",
                j = a.fn[b],
                k = 300,
                l = 150,
                m = 27,
                n = {
                    backdrop: !0,
                    keyboard: !0,
                    focus: !0,
                    show: !0
                },
                o = {
                    backdrop: "(boolean|string)",
                    keyboard: "boolean",
                    focus: "boolean",
                    show: "boolean"
                },
                p = {
                    HIDE: "hide" + h,
                    HIDDEN: "hidden" + h,
                    SHOW: "show" + h,
                    SHOWN: "shown" + h,
                    FOCUSIN: "focusin" + h,
                    RESIZE: "resize" + h,
                    CLICK_DISMISS: "click.dismiss" + h,
                    KEYDOWN_DISMISS: "keydown.dismiss" + h,
                    MOUSEUP_DISMISS: "mouseup.dismiss" + h,
                    MOUSEDOWN_DISMISS: "mousedown.dismiss" + h,
                    CLICK_DATA_API: "click" + h + i
                },
                q = {
                    SCROLLBAR_MEASURER: "modal-scrollbar-measure",
                    BACKDROP: "modal-backdrop",
                    OPEN: "modal-open",
                    FADE: "fade",
                    IN: "in"
                },
                r = {
                    DIALOG: ".modal-dialog",
                    DATA_TOGGLE: '[data-toggle="modal"]',
                    DATA_DISMISS: '[data-dismiss="modal"]',
                    FIXED_CONTENT: ".navbar-fixed-top, .navbar-fixed-bottom, .is-fixed"
                },
                s = function() {
                    function i(b, d) {
                        c(this, i), this._config = this._getConfig(d), this._element = b, this._dialog = a(b).find(r.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0
                    }
                    return e(i, [{
                        key: "toggle",
                        value: function(a) {
                            return this._isShown ? this.hide() : this.show(a)
                        }
                    }, {
                        key: "show",
                        value: function(b) {
                            var c = this,
                                d = a.Event(p.SHOW, {
                                    relatedTarget: b
                                });
                            a(this._element).trigger(d), this._isShown || d.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), a(document.body).addClass(q.OPEN), this._setEscapeEvent(), this._setResizeEvent(), a(this._element).on(p.CLICK_DISMISS, r.DATA_DISMISS, a.proxy(this.hide, this)), a(this._dialog).on(p.MOUSEDOWN_DISMISS, function() {
                                a(c._element).one(p.MOUSEUP_DISMISS, function(b) {
                                    a(b.target).is(c._element) && (c._ignoreBackdropClick = !0)
                                })
                            }), this._showBackdrop(a.proxy(this._showElement, this, b)))
                        }
                    }, {
                        key: "hide",
                        value: function(b) {
                            b && b.preventDefault();
                            var c = a.Event(p.HIDE);
                            a(this._element).trigger(c), this._isShown && !c.isDefaultPrevented() && (this._isShown = !1, this._setEscapeEvent(), this._setResizeEvent(), a(document).off(p.FOCUSIN), a(this._element).removeClass(q.IN), a(this._element).off(p.CLICK_DISMISS), a(this._dialog).off(p.MOUSEDOWN_DISMISS), f.supportsTransitionEnd() && a(this._element).hasClass(q.FADE) ? a(this._element).one(f.TRANSITION_END, a.proxy(this._hideModal, this)).emulateTransitionEnd(k) : this._hideModal())
                        }
                    }, {
                        key: "dispose",
                        value: function() {
                            a.removeData(this._element, g), a(window).off(h), a(document).off(h), a(this._element).off(h), a(this._backdrop).off(h), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._originalBodyPadding = null, this._scrollbarWidth = null
                        }
                    }, {
                        key: "_getConfig",
                        value: function(c) {
                            return c = a.extend({}, n, c), f.typeCheckConfig(b, c, o), c
                        }
                    }, {
                        key: "_showElement",
                        value: function(b) {
                            var c = this,
                                d = f.supportsTransitionEnd() && a(this._element).hasClass(q.FADE);
                            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, d && f.reflow(this._element), a(this._element).addClass(q.IN), this._config.focus && this._enforceFocus();
                            var e = a.Event(p.SHOWN, {
                                    relatedTarget: b
                                }),
                                g = function() {
                                    c._config.focus && c._element.focus(), a(c._element).trigger(e)
                                };
                            d ? a(this._dialog).one(f.TRANSITION_END, g).emulateTransitionEnd(k) : g()
                        }
                    }, {
                        key: "_enforceFocus",
                        value: function() {
                            var b = this;
                            a(document).off(p.FOCUSIN).on(p.FOCUSIN, function(c) {
                                document === c.target || b._element === c.target || a(b._element).has(c.target).length || b._element.focus()
                            })
                        }
                    }, {
                        key: "_setEscapeEvent",
                        value: function() {
                            var b = this;
                            this._isShown && this._config.keyboard ? a(this._element).on(p.KEYDOWN_DISMISS, function(a) {
                                a.which === m && b.hide()
                            }) : this._isShown || a(this._element).off(p.KEYDOWN_DISMISS)
                        }
                    }, {
                        key: "_setResizeEvent",
                        value: function() {
                            this._isShown ? a(window).on(p.RESIZE, a.proxy(this._handleUpdate, this)) : a(window).off(p.RESIZE)
                        }
                    }, {
                        key: "_hideModal",
                        value: function() {
                            var b = this;
                            this._element.style.display = "none", this._element.setAttribute("aria-hidden", "true"), this._showBackdrop(function() {
                                a(document.body).removeClass(q.OPEN), b._resetAdjustments(), b._resetScrollbar(), a(b._element).trigger(p.HIDDEN)
                            })
                        }
                    }, {
                        key: "_removeBackdrop",
                        value: function() {
                            this._backdrop && (a(this._backdrop).remove(), this._backdrop = null)
                        }
                    }, {
                        key: "_showBackdrop",
                        value: function(b) {
                            var c = this,
                                d = a(this._element).hasClass(q.FADE) ? q.FADE : "";
                            if (this._isShown && this._config.backdrop) {
                                var e = f.supportsTransitionEnd() && d;
                                if (this._backdrop = document.createElement("div"), this._backdrop.className = q.BACKDROP, d && a(this._backdrop).addClass(d), a(this._backdrop).appendTo(document.body), a(this._element).on(p.CLICK_DISMISS, function(a) {
                                        return c._ignoreBackdropClick ? void(c._ignoreBackdropClick = !1) : void(a.target === a.currentTarget && ("static" === c._config.backdrop ? c._element.focus() : c.hide()))
                                    }), e && f.reflow(this._backdrop), a(this._backdrop).addClass(q.IN), !b) return;
                                if (!e) return void b();
                                a(this._backdrop).one(f.TRANSITION_END, b).emulateTransitionEnd(l)
                            } else if (!this._isShown && this._backdrop) {
                                a(this._backdrop).removeClass(q.IN);
                                var g = function() {
                                    c._removeBackdrop(), b && b()
                                };
                                f.supportsTransitionEnd() && a(this._element).hasClass(q.FADE) ? a(this._backdrop).one(f.TRANSITION_END, g).emulateTransitionEnd(l) : g()
                            } else b && b()
                        }
                    }, {
                        key: "_handleUpdate",
                        value: function() {
                            this._adjustDialog()
                        }
                    }, {
                        key: "_adjustDialog",
                        value: function() {
                            var a = this._element.scrollHeight > document.documentElement.clientHeight;
                            !this._isBodyOverflowing && a && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !a && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                        }
                    }, {
                        key: "_resetAdjustments",
                        value: function() {
                            this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                        }
                    }, {
                        key: "_checkScrollbar",
                        value: function() {
                            this._isBodyOverflowing = document.body.clientWidth < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
                        }
                    }, {
                        key: "_setScrollbar",
                        value: function() {
                            var b = parseInt(a(r.FIXED_CONTENT).css("padding-right") || 0, 10);
                            this._originalBodyPadding = document.body.style.paddingRight || "", this._isBodyOverflowing && (document.body.style.paddingRight = b + this._scrollbarWidth + "px")
                        }
                    }, {
                        key: "_resetScrollbar",
                        value: function() {
                            document.body.style.paddingRight = this._originalBodyPadding
                        }
                    }, {
                        key: "_getScrollbarWidth",
                        value: function() {
                            var a = document.createElement("div");
                            a.className = q.SCROLLBAR_MEASURER, document.body.appendChild(a);
                            var b = a.offsetWidth - a.clientWidth;
                            return document.body.removeChild(a), b
                        }
                    }], [{
                        key: "_jQueryInterface",
                        value: function(b, c) {
                            return this.each(function() {
                                var d = a(this).data(g),
                                    e = a.extend({}, i.Default, a(this).data(), "object" == typeof b && b);
                                if (d || (d = new i(this, e), a(this).data(g, d)), "string" == typeof b) {
                                    if (void 0 === d[b]) throw new Error('No method named "' + b + '"');
                                    d[b](c)
                                } else e.show && d.show(c)
                            })
                        }
                    }, {
                        key: "VERSION",
                        get: function() {
                            return d
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return n
                        }
                    }]), i
                }();
            return a(document).on(p.CLICK_DATA_API, r.DATA_TOGGLE, function(b) {
                var c = this,
                    d = void 0,
                    e = f.getSelectorFromElement(this);
                e && (d = a(e)[0]);
                var h = a(d).data(g) ? "toggle" : a.extend({}, a(d).data(), a(this).data());
                "A" === this.tagName && b.preventDefault();
                var i = a(d).one(p.SHOW, function(b) {
                    b.isDefaultPrevented() || i.one(p.HIDDEN, function() {
                        a(c).is(":visible") && c.focus()
                    })
                });
                s._jQueryInterface.call(a(d), h, this)
            }), a.fn[b] = s._jQueryInterface, a.fn[b].Constructor = s, a.fn[b].noConflict = function() {
                return a.fn[b] = j, s._jQueryInterface
            }, s
        }(jQuery), function(a) {
            var b = "scrollspy",
                d = "4.0.0-alpha.4",
                g = "bs.scrollspy",
                h = "." + g,
                i = ".data-api",
                j = a.fn[b],
                k = {
                    offset: 10,
                    method: "auto",
                    target: ""
                },
                l = {
                    offset: "number",
                    method: "string",
                    target: "(string|element)"
                },
                m = {
                    ACTIVATE: "activate" + h,
                    SCROLL: "scroll" + h,
                    LOAD_DATA_API: "load" + h + i
                },
                n = {
                    DROPDOWN_ITEM: "dropdown-item",
                    DROPDOWN_MENU: "dropdown-menu",
                    NAV_LINK: "nav-link",
                    NAV: "nav",
                    ACTIVE: "active"
                },
                o = {
                    DATA_SPY: '[data-spy="scroll"]',
                    ACTIVE: ".active",
                    LIST_ITEM: ".list-item",
                    LI: "li",
                    LI_DROPDOWN: "li.dropdown",
                    NAV_LINKS: ".nav-link",
                    DROPDOWN: ".dropdown",
                    DROPDOWN_ITEMS: ".dropdown-item",
                    DROPDOWN_TOGGLE: ".dropdown-toggle"
                },
                p = {
                    OFFSET: "offset",
                    POSITION: "position"
                },
                q = function() {
                    function i(b, d) {
                        c(this, i), this._element = b, this._scrollElement = "BODY" === b.tagName ? window : b, this._config = this._getConfig(d), this._selector = this._config.target + " " + o.NAV_LINKS + "," + (this._config.target + " " + o.DROPDOWN_ITEMS), this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, a(this._scrollElement).on(m.SCROLL, a.proxy(this._process, this)), this.refresh(), this._process()
                    }
                    return e(i, [{
                        key: "refresh",
                        value: function() {
                            var b = this,
                                c = this._scrollElement !== this._scrollElement.window ? p.POSITION : p.OFFSET,
                                d = "auto" === this._config.method ? c : this._config.method,
                                e = d === p.POSITION ? this._getScrollTop() : 0;
                            this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight();
                            var g = a.makeArray(a(this._selector));
                            g.map(function(b) {
                                var c = void 0,
                                    g = f.getSelectorFromElement(b);
                                return g && (c = a(g)[0]), c && (c.offsetWidth || c.offsetHeight) ? [a(c)[d]().top + e, g] : null
                            }).filter(function(a) {
                                return a
                            }).sort(function(a, b) {
                                return a[0] - b[0]
                            }).forEach(function(a) {
                                b._offsets.push(a[0]), b._targets.push(a[1])
                            })
                        }
                    }, {
                        key: "dispose",
                        value: function() {
                            a.removeData(this._element, g), a(this._scrollElement).off(h), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
                        }
                    }, {
                        key: "_getConfig",
                        value: function(c) {
                            if (c = a.extend({}, k, c), "string" != typeof c.target) {
                                var d = a(c.target).attr("id");
                                d || (d = f.getUID(b), a(c.target).attr("id", d)), c.target = "#" + d
                            }
                            return f.typeCheckConfig(b, c, l), c
                        }
                    }, {
                        key: "_getScrollTop",
                        value: function() {
                            return this._scrollElement === window ? this._scrollElement.scrollY : this._scrollElement.scrollTop
                        }
                    }, {
                        key: "_getScrollHeight",
                        value: function() {
                            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                        }
                    }, {
                        key: "_process",
                        value: function() {
                            var a = this._getScrollTop() + this._config.offset,
                                b = this._getScrollHeight(),
                                c = this._config.offset + b - this._scrollElement.offsetHeight;
                            if (this._scrollHeight !== b && this.refresh(), a >= c) {
                                var d = this._targets[this._targets.length - 1];
                                this._activeTarget !== d && this._activate(d)
                            }
                            if (this._activeTarget && a < this._offsets[0]) return this._activeTarget = null, void this._clear();
                            for (var e = this._offsets.length; e--;) {
                                var f = this._activeTarget !== this._targets[e] && a >= this._offsets[e] && (void 0 === this._offsets[e + 1] || a < this._offsets[e + 1]);
                                f && this._activate(this._targets[e])
                            }
                        }
                    }, {
                        key: "_activate",
                        value: function(b) {
                            this._activeTarget = b, this._clear();
                            var c = this._selector.split(",");
                            c = c.map(function(a) {
                                return a + '[data-target="' + b + '"],' + (a + '[href="' + b + '"]')
                            });
                            var d = a(c.join(","));
                            d.hasClass(n.DROPDOWN_ITEM) ? (d.closest(o.DROPDOWN).find(o.DROPDOWN_TOGGLE).addClass(n.ACTIVE), d.addClass(n.ACTIVE)) : d.parents(o.LI).find(o.NAV_LINKS).addClass(n.ACTIVE), a(this._scrollElement).trigger(m.ACTIVATE, {
                                relatedTarget: b
                            })
                        }
                    }, {
                        key: "_clear",
                        value: function() {
                            a(this._selector).filter(o.ACTIVE).removeClass(n.ACTIVE)
                        }
                    }], [{
                        key: "_jQueryInterface",
                        value: function(b) {
                            return this.each(function() {
                                var c = a(this).data(g),
                                    d = "object" == typeof b && b || null;
                                if (c || (c = new i(this, d), a(this).data(g, c)), "string" == typeof b) {
                                    if (void 0 === c[b]) throw new Error('No method named "' + b + '"');
                                    c[b]()
                                }
                            })
                        }
                    }, {
                        key: "VERSION",
                        get: function() {
                            return d
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return k
                        }
                    }]), i
                }();
            return a(window).on(m.LOAD_DATA_API, function() {
                for (var b = a.makeArray(a(o.DATA_SPY)), c = b.length; c--;) {
                    var d = a(b[c]);
                    q._jQueryInterface.call(d, d.data())
                }
            }), a.fn[b] = q._jQueryInterface, a.fn[b].Constructor = q, a.fn[b].noConflict = function() {
                return a.fn[b] = j, q._jQueryInterface
            }, q
        }(jQuery), function(a) {
            var b = "tab",
                d = "4.0.0-alpha.4",
                g = "bs.tab",
                h = "." + g,
                i = ".data-api",
                j = a.fn[b],
                k = 150,
                l = {
                    HIDE: "hide" + h,
                    HIDDEN: "hidden" + h,
                    SHOW: "show" + h,
                    SHOWN: "shown" + h,
                    CLICK_DATA_API: "click" + h + i
                },
                m = {
                    DROPDOWN_MENU: "dropdown-menu",
                    ACTIVE: "active",
                    FADE: "fade",
                    IN: "in"
                },
                n = {
                    A: "a",
                    LI: "li",
                    DROPDOWN: ".dropdown",
                    UL: "ul:not(.dropdown-menu)",
                    FADE_CHILD: "> .nav-item .fade, > .fade",
                    ACTIVE: ".active",
                    ACTIVE_CHILD: "> .nav-item > .active, > .active",
                    DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"]',
                    DROPDOWN_TOGGLE: ".dropdown-toggle",
                    DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active"
                },
                o = function() {
                    function b(a) {
                        c(this, b), this._element = a
                    }
                    return e(b, [{
                        key: "show",
                        value: function() {
                            var b = this;
                            if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE || !a(this._element).hasClass(m.ACTIVE)) {
                                var c = void 0,
                                    d = void 0,
                                    e = a(this._element).closest(n.UL)[0],
                                    g = f.getSelectorFromElement(this._element);
                                e && (d = a.makeArray(a(e).find(n.ACTIVE)), d = d[d.length - 1]);
                                var h = a.Event(l.HIDE, {
                                        relatedTarget: this._element
                                    }),
                                    i = a.Event(l.SHOW, {
                                        relatedTarget: d
                                    });
                                if (d && a(d).trigger(h), a(this._element).trigger(i), !i.isDefaultPrevented() && !h.isDefaultPrevented()) {
                                    g && (c = a(g)[0]), this._activate(this._element, e);
                                    var j = function() {
                                        var c = a.Event(l.HIDDEN, {
                                                relatedTarget: b._element
                                            }),
                                            e = a.Event(l.SHOWN, {
                                                relatedTarget: d
                                            });
                                        a(d).trigger(c), a(b._element).trigger(e)
                                    };
                                    c ? this._activate(c, c.parentNode, j) : j()
                                }
                            }
                        }
                    }, {
                        key: "dispose",
                        value: function() {
                            a.removeClass(this._element, g), this._element = null
                        }
                    }, {
                        key: "_activate",
                        value: function(b, c, d) {
                            var e = a(c).find(n.ACTIVE_CHILD)[0],
                                g = d && f.supportsTransitionEnd() && (e && a(e).hasClass(m.FADE) || Boolean(a(c).find(n.FADE_CHILD)[0])),
                                h = a.proxy(this._transitionComplete, this, b, e, g, d);
                            e && g ? a(e).one(f.TRANSITION_END, h).emulateTransitionEnd(k) : h(), e && a(e).removeClass(m.IN)
                        }
                    }, {
                        key: "_transitionComplete",
                        value: function(b, c, d, e) {
                            if (c) {
                                a(c).removeClass(m.ACTIVE);
                                var g = a(c).find(n.DROPDOWN_ACTIVE_CHILD)[0];
                                g && a(g).removeClass(m.ACTIVE), c.setAttribute("aria-expanded", !1)
                            }
                            if (a(b).addClass(m.ACTIVE), b.setAttribute("aria-expanded", !0), d ? (f.reflow(b), a(b).addClass(m.IN)) : a(b).removeClass(m.FADE), b.parentNode && a(b.parentNode).hasClass(m.DROPDOWN_MENU)) {
                                var h = a(b).closest(n.DROPDOWN)[0];
                                h && a(h).find(n.DROPDOWN_TOGGLE).addClass(m.ACTIVE), b.setAttribute("aria-expanded", !0)
                            }
                            e && e()
                        }
                    }], [{
                        key: "_jQueryInterface",
                        value: function(c) {
                            return this.each(function() {
                                var d = a(this),
                                    e = d.data(g);
                                if (e || (e = e = new b(this), d.data(g, e)), "string" == typeof c) {
                                    if (void 0 === e[c]) throw new Error('No method named "' + c + '"');
                                    e[c]()
                                }
                            })
                        }
                    }, {
                        key: "VERSION",
                        get: function() {
                            return d
                        }
                    }]), b
                }();
            return a(document).on(l.CLICK_DATA_API, n.DATA_TOGGLE, function(b) {
                b.preventDefault(), o._jQueryInterface.call(a(this), "show")
            }), a.fn[b] = o._jQueryInterface, a.fn[b].Constructor = o, a.fn[b].noConflict = function() {
                return a.fn[b] = j, o._jQueryInterface
            }, o
        }(jQuery), function(a) {
            if (void 0 === window.Tether) throw new Error("Bootstrap tooltips require Tether (http://github.hubspot.com/tether/)");
            var b = "tooltip",
                d = "4.0.0-alpha.4",
                g = "bs.tooltip",
                h = "." + g,
                i = a.fn[b],
                j = 150,
                k = "bs-tether",
                l = {
                    animation: !0,
                    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                    trigger: "hover focus",
                    title: "",
                    delay: 0,
                    html: !1,
                    selector: !1,
                    placement: "top",
                    offset: "0 0",
                    constraints: []
                },
                m = {
                    animation: "boolean",
                    template: "string",
                    title: "(string|element|function)",
                    trigger: "string",
                    delay: "(number|object)",
                    html: "boolean",
                    selector: "(string|boolean)",
                    placement: "(string|function)",
                    offset: "string",
                    constraints: "array"
                },
                n = {
                    TOP: "bottom center",
                    RIGHT: "middle left",
                    BOTTOM: "top center",
                    LEFT: "middle right"
                },
                o = {
                    IN: "in",
                    OUT: "out"
                },
                p = {
                    HIDE: "hide" + h,
                    HIDDEN: "hidden" + h,
                    SHOW: "show" + h,
                    SHOWN: "shown" + h,
                    INSERTED: "inserted" + h,
                    CLICK: "click" + h,
                    FOCUSIN: "focusin" + h,
                    FOCUSOUT: "focusout" + h,
                    MOUSEENTER: "mouseenter" + h,
                    MOUSELEAVE: "mouseleave" + h
                },
                q = {
                    FADE: "fade",
                    IN: "in"
                },
                r = {
                    TOOLTIP: ".tooltip",
                    TOOLTIP_INNER: ".tooltip-inner"
                },
                s = {
                    element: !1,
                    enabled: !1
                },
                t = {
                    HOVER: "hover",
                    FOCUS: "focus",
                    CLICK: "click",
                    MANUAL: "manual"
                },
                u = function() {
                    function i(a, b) {
                        c(this, i), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._tether = null, this.element = a, this.config = this._getConfig(b), this.tip = null, this._setListeners()
                    }
                    return e(i, [{
                        key: "enable",
                        value: function() {
                            this._isEnabled = !0
                        }
                    }, {
                        key: "disable",
                        value: function() {
                            this._isEnabled = !1
                        }
                    }, {
                        key: "toggleEnabled",
                        value: function() {
                            this._isEnabled = !this._isEnabled
                        }
                    }, {
                        key: "toggle",
                        value: function(b) {
                            if (b) {
                                var c = this.constructor.DATA_KEY,
                                    d = a(b.currentTarget).data(c);
                                d || (d = new this.constructor(b.currentTarget, this._getDelegateConfig()), a(b.currentTarget).data(c, d)), d._activeTrigger.click = !d._activeTrigger.click, d._isWithActiveTrigger() ? d._enter(null, d) : d._leave(null, d)
                            } else {
                                if (a(this.getTipElement()).hasClass(q.IN)) return void this._leave(null, this);
                                this._enter(null, this)
                            }
                        }
                    }, {
                        key: "dispose",
                        value: function() {
                            clearTimeout(this._timeout), this.cleanupTether(), a.removeData(this.element, this.constructor.DATA_KEY), a(this.element).off(this.constructor.EVENT_KEY), this.tip && a(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._tether = null, this.element = null, this.config = null, this.tip = null
                        }
                    }, {
                        key: "show",
                        value: function() {
                            var b = this,
                                c = a.Event(this.constructor.Event.SHOW);
                            if (this.isWithContent() && this._isEnabled) {
                                a(this.element).trigger(c);
                                var d = a.contains(this.element.ownerDocument.documentElement, this.element);
                                if (c.isDefaultPrevented() || !d) return;
                                var e = this.getTipElement(),
                                    g = f.getUID(this.constructor.NAME);
                                e.setAttribute("id", g), this.element.setAttribute("aria-describedby", g), this.setContent(), this.config.animation && a(e).addClass(q.FADE);
                                var h = "function" == typeof this.config.placement ? this.config.placement.call(this, e, this.element) : this.config.placement,
                                    j = this._getAttachment(h);
                                a(e).data(this.constructor.DATA_KEY, this).appendTo(document.body), a(this.element).trigger(this.constructor.Event.INSERTED), this._tether = new Tether({
                                    attachment: j,
                                    element: e,
                                    target: this.element,
                                    classes: s,
                                    classPrefix: k,
                                    offset: this.config.offset,
                                    constraints: this.config.constraints,
                                    addTargetClasses: !1
                                }), f.reflow(e), this._tether.position(), a(e).addClass(q.IN);
                                var l = function() {
                                    var c = b._hoverState;
                                    b._hoverState = null, a(b.element).trigger(b.constructor.Event.SHOWN), c === o.OUT && b._leave(null, b)
                                };
                                if (f.supportsTransitionEnd() && a(this.tip).hasClass(q.FADE)) return void a(this.tip).one(f.TRANSITION_END, l).emulateTransitionEnd(i._TRANSITION_DURATION);
                                l()
                            }
                        }
                    }, {
                        key: "hide",
                        value: function(b) {
                            var c = this,
                                d = this.getTipElement(),
                                e = a.Event(this.constructor.Event.HIDE),
                                g = function() {
                                    c._hoverState !== o.IN && d.parentNode && d.parentNode.removeChild(d), c.element.removeAttribute("aria-describedby"), a(c.element).trigger(c.constructor.Event.HIDDEN), c.cleanupTether(), b && b()
                                };
                            a(this.element).trigger(e), e.isDefaultPrevented() || (a(d).removeClass(q.IN), f.supportsTransitionEnd() && a(this.tip).hasClass(q.FADE) ? a(d).one(f.TRANSITION_END, g).emulateTransitionEnd(j) : g(), this._hoverState = "")
                        }
                    }, {
                        key: "isWithContent",
                        value: function() {
                            return Boolean(this.getTitle())
                        }
                    }, {
                        key: "getTipElement",
                        value: function() {
                            return this.tip = this.tip || a(this.config.template)[0]
                        }
                    }, {
                        key: "setContent",
                        value: function() {
                            var b = a(this.getTipElement());
                            this.setElementContent(b.find(r.TOOLTIP_INNER), this.getTitle()), b.removeClass(q.FADE).removeClass(q.IN), this.cleanupTether()
                        }
                    }, {
                        key: "setElementContent",
                        value: function(b, c) {
                            var d = this.config.html;
                            "object" == typeof c && (c.nodeType || c.jquery) ? d ? a(c).parent().is(b) || b.empty().append(c) : b.text(a(c).text()) : b[d ? "html" : "text"](c)
                        }
                    }, {
                        key: "getTitle",
                        value: function() {
                            var a = this.element.getAttribute("data-original-title");
                            return a || (a = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), a
                        }
                    }, {
                        key: "cleanupTether",
                        value: function() {
                            this._tether && this._tether.destroy()
                        }
                    }, {
                        key: "_getAttachment",
                        value: function(a) {
                            return n[a.toUpperCase()]
                        }
                    }, {
                        key: "_setListeners",
                        value: function() {
                            var b = this,
                                c = this.config.trigger.split(" ");
                            c.forEach(function(c) {
                                if ("click" === c) a(b.element).on(b.constructor.Event.CLICK, b.config.selector, a.proxy(b.toggle, b));
                                else if (c !== t.MANUAL) {
                                    var d = c === t.HOVER ? b.constructor.Event.MOUSEENTER : b.constructor.Event.FOCUSIN,
                                        e = c === t.HOVER ? b.constructor.Event.MOUSELEAVE : b.constructor.Event.FOCUSOUT;
                                    a(b.element).on(d, b.config.selector, a.proxy(b._enter, b)).on(e, b.config.selector, a.proxy(b._leave, b))
                                }
                            }), this.config.selector ? this.config = a.extend({}, this.config, {
                                trigger: "manual",
                                selector: ""
                            }) : this._fixTitle()
                        }
                    }, {
                        key: "_fixTitle",
                        value: function() {
                            var a = typeof this.element.getAttribute("data-original-title");
                            (this.element.getAttribute("title") || "string" !== a) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                        }
                    }, {
                        key: "_enter",
                        value: function(b, c) {
                            var d = this.constructor.DATA_KEY;
                            return c = c || a(b.currentTarget).data(d), c || (c = new this.constructor(b.currentTarget, this._getDelegateConfig()), a(b.currentTarget).data(d, c)), b && (c._activeTrigger["focusin" === b.type ? t.FOCUS : t.HOVER] = !0), a(c.getTipElement()).hasClass(q.IN) || c._hoverState === o.IN ? void(c._hoverState = o.IN) : (clearTimeout(c._timeout), c._hoverState = o.IN, c.config.delay && c.config.delay.show ? void(c._timeout = setTimeout(function() {
                                c._hoverState === o.IN && c.show()
                            }, c.config.delay.show)) : void c.show())
                        }
                    }, {
                        key: "_leave",
                        value: function(b, c) {
                            var d = this.constructor.DATA_KEY;
                            if (c = c || a(b.currentTarget).data(d), c || (c = new this.constructor(b.currentTarget, this._getDelegateConfig()), a(b.currentTarget).data(d, c)), b && (c._activeTrigger["focusout" === b.type ? t.FOCUS : t.HOVER] = !1), !c._isWithActiveTrigger()) return clearTimeout(c._timeout), c._hoverState = o.OUT, c.config.delay && c.config.delay.hide ? void(c._timeout = setTimeout(function() {
                                c._hoverState === o.OUT && c.hide()
                            }, c.config.delay.hide)) : void c.hide()
                        }
                    }, {
                        key: "_isWithActiveTrigger",
                        value: function() {
                            for (var a in this._activeTrigger)
                                if (this._activeTrigger[a]) return !0;
                            return !1
                        }
                    }, {
                        key: "_getConfig",
                        value: function(c) {
                            return c = a.extend({}, this.constructor.Default, a(this.element).data(), c), c.delay && "number" == typeof c.delay && (c.delay = {
                                show: c.delay,
                                hide: c.delay
                            }), f.typeCheckConfig(b, c, this.constructor.DefaultType), c
                        }
                    }, {
                        key: "_getDelegateConfig",
                        value: function() {
                            var a = {};
                            if (this.config)
                                for (var b in this.config) this.constructor.Default[b] !== this.config[b] && (a[b] = this.config[b]);
                            return a
                        }
                    }], [{
                        key: "_jQueryInterface",
                        value: function(b) {
                            return this.each(function() {
                                var c = a(this).data(g),
                                    d = "object" == typeof b ? b : null;
                                if ((c || !/destroy|hide/.test(b)) && (c || (c = new i(this, d), a(this).data(g, c)), "string" == typeof b)) {
                                    if (void 0 === c[b]) throw new Error('No method named "' + b + '"');
                                    c[b]()
                                }
                            })
                        }
                    }, {
                        key: "VERSION",
                        get: function() {
                            return d
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return l
                        }
                    }, {
                        key: "NAME",
                        get: function() {
                            return b
                        }
                    }, {
                        key: "DATA_KEY",
                        get: function() {
                            return g
                        }
                    }, {
                        key: "Event",
                        get: function() {
                            return p
                        }
                    }, {
                        key: "EVENT_KEY",
                        get: function() {
                            return h
                        }
                    }, {
                        key: "DefaultType",
                        get: function() {
                            return m
                        }
                    }]), i
                }();
            return a.fn[b] = u._jQueryInterface, a.fn[b].Constructor = u, a.fn[b].noConflict = function() {
                return a.fn[b] = i, u._jQueryInterface
            }, u
        }(jQuery));
    (function(a) {
        var f = "popover",
            h = "4.0.0-alpha.4",
            i = "bs.popover",
            j = "." + i,
            k = a.fn[f],
            l = a.extend({}, g.Default, {
                placement: "right",
                trigger: "click",
                content: "",
                template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
            }),
            m = a.extend({}, g.DefaultType, {
                content: "(string|element|function)"
            }),
            n = {
                FADE: "fade",
                IN: "in"
            },
            o = {
                TITLE: ".popover-title",
                CONTENT: ".popover-content",
                ARROW: ".popover-arrow"
            },
            p = {
                HIDE: "hide" + j,
                HIDDEN: "hidden" + j,
                SHOW: "show" + j,
                SHOWN: "shown" + j,
                INSERTED: "inserted" + j,
                CLICK: "click" + j,
                FOCUSIN: "focusin" + j,
                FOCUSOUT: "focusout" + j,
                MOUSEENTER: "mouseenter" + j,
                MOUSELEAVE: "mouseleave" + j
            },
            q = function(g) {
                function k() {
                    c(this, k), d(Object.getPrototypeOf(k.prototype), "constructor", this).apply(this, arguments)
                }
                return b(k, g), e(k, [{
                    key: "isWithContent",
                    value: function() {
                        return this.getTitle() || this._getContent()
                    }
                }, {
                    key: "getTipElement",
                    value: function() {
                        return this.tip = this.tip || a(this.config.template)[0]
                    }
                }, {
                    key: "setContent",
                    value: function() {
                        var b = a(this.getTipElement());
                        this.setElementContent(b.find(o.TITLE), this.getTitle()), this.setElementContent(b.find(o.CONTENT), this._getContent()), b.removeClass(n.FADE).removeClass(n.IN), this.cleanupTether()
                    }
                }, {
                    key: "_getContent",
                    value: function() {
                        return this.element.getAttribute("data-content") || ("function" == typeof this.config.content ? this.config.content.call(this.element) : this.config.content)
                    }
                }], [{
                    key: "_jQueryInterface",
                    value: function(b) {
                        return this.each(function() {
                            var c = a(this).data(i),
                                d = "object" == typeof b ? b : null;
                            if ((c || !/destroy|hide/.test(b)) && (c || (c = new k(this, d), a(this).data(i, c)), "string" == typeof b)) {
                                if (void 0 === c[b]) throw new Error('No method named "' + b + '"');
                                c[b]()
                            }
                        })
                    }
                }, {
                    key: "VERSION",
                    get: function() {
                        return h
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return l
                    }
                }, {
                    key: "NAME",
                    get: function() {
                        return f
                    }
                }, {
                    key: "DATA_KEY",
                    get: function() {
                        return i
                    }
                }, {
                    key: "Event",
                    get: function() {
                        return p
                    }
                }, {
                    key: "EVENT_KEY",
                    get: function() {
                        return j
                    }
                }, {
                    key: "DefaultType",
                    get: function() {
                        return m
                    }
                }]), k
            }(g);
        return a.fn[f] = q._jQueryInterface, a.fn[f].Constructor = q, a.fn[f].noConflict = function() {
            return a.fn[f] = k, q._jQueryInterface
        }, q
    })(jQuery)
}(jQuery);
/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
! function(global, factory) {
    if ("function" == typeof define && define.amd) define("/State", ["exports", "jquery"], factory);
    else if ("undefined" != typeof exports) factory(exports, require("jquery"));
    else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.jQuery), global.State = mod.exports
    }
}(this, function(exports, _jquery) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _jquery2 = babelHelpers.interopRequireDefault(_jquery),
        _class = function() {
            function _class(states) {
                babelHelpers.classCallCheck(this, _class), this._states = Object.assign({}, states), this._values = {}, this._relations = {}, this._callbacks = {}, this._define()
            }
            return babelHelpers.createClass(_class, [{
                key: "_define",
                value: function() {
                    for (var _this = this, self = this, keys = Object.keys(this._states), obj = {}, tmpRelations = [], composites = [], _loop = function(i, l) {
                            var key = keys[i],
                                value = _this._states[key];
                            "function" != typeof value ? (Object.defineProperty(obj, key, {
                                set: function() {
                                    return !1
                                },
                                get: function() {
                                    return tmpRelations.push(key), self._states[key]
                                },
                                enumerable: !0,
                                configurable: !0
                            }), _this._values[key] = _this._states[key], _this._relations[key] = []) : composites.push(key)
                        }, i = 0, l = keys.length; i < l; i++) _loop(i, l);
                    for (var _loop2 = function(_i, _l) {
                            var key = composites[_i];
                            Object.defineProperty(obj, key, {
                                set: function() {
                                    return !1
                                },
                                get: function() {
                                    var value = self._states[key].call(obj);
                                    return self._addRelation(key, tmpRelations), tmpRelations = [], self._values[key] = value, value
                                },
                                enumerable: !0,
                                configurable: !0
                            }), obj[key]
                        }, _i = 0, _l = composites.length; _i < _l; _i++) _loop2(_i, _l)
                }
            }, {
                key: "_compare",
                value: function(state) {
                    if (this._states[state] !== this._values[state]) {
                        var value = this._values[state];
                        this._values[state] = this._states[state], this._dispatch(state, value, this._states[state]), this._compareComposite(state)
                    }
                }
            }, {
                key: "_compareComposite",
                value: function(state) {
                    var relations = this.getRelation(state);
                    if (relations && relations.length > 0)
                        for (var i = 0, l = relations.length; i < l; i++) {
                            var _state = relations[i],
                                value = this._states[_state]();
                            value !== this._values[_state] && (this._dispatch(_state, this._values[_state], value), this._values[_state] = value)
                        }
                }
            }, {
                key: "_addRelation",
                value: function(state, relations) {
                    for (var i = 0, l = relations.length; i < l; i++) {
                        var pros = relations[i];
                        this._relations[pros].push(state)
                    }
                }
            }, {
                key: "_dispatch",
                value: function(state, origValue, newValue) {
                    this._callbacks[state] && this._callbacks[state].fire([newValue, origValue])
                }
            }, {
                key: "getRelation",
                value: function(state) {
                    return this._relations[state].length > 0 ? this._relations[state] : null
                }
            }, {
                key: "on",
                value: function(state, callback) {
                    "function" == typeof state && (callback = state, state = "all"), this._callbacks[state] || (this._callbacks[state] = _jquery2.default.Callbacks()), this._callbacks[state].add(callback)
                }
            }, {
                key: "off",
                value: function(state, callback) {
                    this._callbacks[state] && this._callbacks[state].remove(callback)
                }
            }, {
                key: "set",
                value: function(state, value) {
                    var isDeep = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if ("string" == typeof state && "undefined" != typeof value && "function" != typeof this._states[state]) this._states[state] = value, isDeep || this._compare(state);
                    else if ("object" === ("undefined" == typeof state ? "undefined" : babelHelpers.typeof(state))) {
                        for (var _key in state) "function" != typeof state[_key] && this.set(_key, state[_key], !0);
                        for (var _key2 in state) "function" != typeof state[_key2] && this._compare(_key2)
                    }
                    return this._states[state]
                }
            }, {
                key: "get",
                value: function(state) {
                    return state ? this._values[state] : this._values
                }
            }]), _class
        }();
    exports.default = _class
});
/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
! function(global, factory) {
    if ("function" == typeof define && define.amd) define("/Component", ["exports", "jquery", "State"], factory);
    else if ("undefined" != typeof exports) factory(exports, require("jquery"), require("State"));
    else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.jQuery, global.State), global.Component = mod.exports
    }
}(this, function(exports, _jquery, _State) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _jquery2 = babelHelpers.interopRequireDefault(_jquery),
        _State2 = babelHelpers.interopRequireDefault(_State);
    "undefined" == typeof Object.assign && (Object.assign = _jquery2.default.extend);
    var _class = function() {
        function _class() {
            var options = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            babelHelpers.classCallCheck(this, _class), this.$el = options.$el ? options.$el : (0, _jquery2.default)(document), this.el = this.$el[0], delete options.$el, this.children = this.getDefaultChildren(), this.actions = this.getDefaultActions(), this.initialState = this.getDefaultState(), this._willProcess = _jquery2.default.Callbacks(), this._processed = _jquery2.default.Callbacks(), this.willProcess && this._willProcess.add(this.willProcess), this.processed && this._processed.add(this.processed), this.isProcessed = !1, this.mix(options), this.state = null
        }
        return babelHelpers.createClass(_class, [{
            key: "_combineInitialState",
            value: function() {
                for (var childrenInitialState = {}, i = 0, l = this.children.length; i < l; i++) {
                    var child = this.children[i];
                    Object.assign(childrenInitialState, child.initialState)
                }
                return Object.assign(childrenInitialState, this.initialState)
            }
        }, {
            key: "_process",
            value: function(state) {
                this._willProcess.fireWith(this), this.state = state ? state : new _State2.default(this.initialState), this._registerActions();
                for (var i = 0, l = this.children.length; i < l; i++) this.children[i]._process(this.state), this.children[i].isProcessed = !0;
                this._processed.fireWith(this)
            }
        }, {
            key: "_registerActions",
            value: function() {
                var _this = this,
                    actions = this.actions,
                    _loop = function(state) {
                        var action = actions[state];
                        "function" == typeof action ? _this.state.on(state, function() {
                            for (var _actions$state, _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) params[_key] = arguments[_key];
                            (_actions$state = actions[state]).apply.apply(_actions$state, [_this].concat(params))
                        }) : "string" == typeof action && "function" == typeof _this[action] && _this.state.on(state, function() {
                            for (var _action, _len2 = arguments.length, params = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) params[_key2] = arguments[_key2];
                            (_action = _this[action]).apply.apply(_action, [_this].concat(params))
                        })
                    };
                for (var state in actions) _loop(state)
            }
        }, {
            key: "run",
            value: function() {
                this.isProcessed || (this._process(), this.isProcessed = !0), this.setState.apply(this, arguments)
            }
        }, {
            key: "setState",
            value: function() {
                if (this.state) {
                    var _state;
                    (_state = this.state).set.apply(_state, arguments)
                }
            }
        }, {
            key: "getState",
            value: function() {
                if (this.state) {
                    var _state2;
                    return (_state2 = this.state).get.apply(_state2, arguments)
                }
                return null
            }
        }, {
            key: "getDefaultState",
            value: function() {
                return {}
            }
        }, {
            key: "getDefaultChildren",
            value: function() {
                return []
            }
        }, {
            key: "getDefaultActions",
            value: function() {
                return {}
            }
        }, {
            key: "mix",
            value: function() {
                var options = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (!this.isInit) {
                    var _options$children = options.children,
                        children = void 0 === _options$children ? [] : _options$children,
                        _options$actions = options.actions,
                        actions = void 0 === _options$actions ? {} : _options$actions,
                        _options$state = options.state,
                        state = void 0 === _options$state ? {} : _options$state,
                        _options$willProcess = options.willProcess,
                        willProcess = void 0 !== _options$willProcess && _options$willProcess,
                        _options$processed = options.processed,
                        processed = void 0 !== _options$processed && _options$processed;
                    return children = children.filter(function(child) {
                        return child instanceof Component
                    }), this.children = [].concat(babelHelpers.toConsumableArray(this.children), babelHelpers.toConsumableArray(children)), this.actions = Object.assign({}, this.actions, actions), this.initialState = Object.assign({}, this.initialState, state), this.initialState = this._combineInitialState(), "function" != typeof willProcess && this._willProcess.add(willProcess), "function" != typeof processed && this._processed.add(processed), delete options.children, delete options.actions, delete options.state, delete options.willProcess, delete options.processed, Object.assign(this, options), this
                }
            }
        }, {
            key: "triggerResize",
            value: function() {
                if (document.createEvent) {
                    var ev = document.createEvent("Event");
                    ev.initEvent("resize", !0, !0), window.dispatchEvent(ev)
                } else {
                    element = document.documentElement;
                    var event = document.createEventObject();
                    element.fireEvent("onresize", event)
                }
            }
        }]), _class
    }();
    exports.default = _class
});
/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
! function(global, factory) {
    if ("function" == typeof define && define.amd) define("/Plugin", ["exports", "jquery"], factory);
    else if ("undefined" != typeof exports) factory(exports, require("jquery"));
    else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.jQuery), global.Plugin = mod.exports
    }
}(this, function(exports, _jquery) {
    "use strict";

    function getPluginAPI(name) {
        return "undefined" == typeof name ? apis : apis[name]
    }

    function getPlugin(name) {
        return "undefined" != typeof plugins[name] && plugins[name]
    }

    function getDefaults(name) {
        var PluginClass = getPlugin(name);
        return PluginClass && (M['is_lteie9'] || M['is_ie10'] ? name != 'appear' : true) ? PluginClass.getDefaults() : {}
    }

    function pluginFactory(name, $el) {
        var options = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            PluginClass = getPlugin(name);
        if (PluginClass && "undefined" == typeof PluginClass.api) return new PluginClass($el, _jquery2.default.extend(!0, {}, getDefaults(name), options));
        if (_jquery2.default.fn[name]) {
            var plugin = new Plugin($el, options);
            return plugin.getName = function() {
                return name
            }, plugin.name = name, plugin
        }
        return "undefined" != typeof PluginClass.api, !1
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.pluginFactory = exports.getDefaults = exports.getPlugin = exports.getPluginAPI = exports.Plugin = void 0;
    var _jquery2 = babelHelpers.interopRequireDefault(_jquery),
        plugins = {},
        apis = {},
        Plugin = function() {
            function Plugin($el) {
                var options = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                babelHelpers.classCallCheck(this, Plugin), this.name = this.getName(), this.$el = $el, this.options = options, this.isRendered = !1
            }
            return babelHelpers.createClass(Plugin, [{
                key: "getName",
                value: function() {
                    return "plugin"
                }
            }, {
                key: "render",
                value: function() {
                    return !!_jquery2.default.fn[this.name] && void this.$el[this.name](this.options)
                }
            }, {
                key: "initialize",
                value: function() {
                    return !this.isRendered && (this.render(), void(this.isRendered = !0))
                }
            }], [{
                key: "getDefaults",
                value: function() {
                    return {}
                }
            }, {
                key: "register",
                value: function(name, obj) {
                    "undefined" != typeof obj && (plugins[name] = obj, "undefined" != typeof obj.api && Plugin.registerApi(name, obj))
                }
            }, {
                key: "registerApi",
                value: function(name, obj) {
                    var api = obj.api();
                    "string" == typeof api ? ! function() {
                        var api = obj.api().split("|"),
                            event = api[0] + (".plugin." + name),
                            func = api[1] || "render",
                            callback = function(e) {
                                var $el = (0, _jquery2.default)(this),
                                    plugin = $el.data("pluginInstance");
                                plugin || (plugin = new obj($el, _jquery2.default.extend(!0, {}, getDefaults(name), $el.data())), plugin.initialize(), $el.data("pluginInstance", plugin)), plugin[func](e)
                            };
                        apis[name] = function(selector, context) {
                            context ? ((0, _jquery2.default)(context).off(event), (0, _jquery2.default)(context).on(event, selector, callback)) : (0, _jquery2.default)(selector).on(event, callback)
                        }
                    }() : "function" == typeof api && (apis[name] = api)
                }
            }]), Plugin
        }();
    exports.default = Plugin, exports.Plugin = Plugin, exports.getPluginAPI = getPluginAPI, exports.getPlugin = getPlugin, exports.getDefaults = getDefaults, exports.pluginFactory = pluginFactory
});
/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
! function(global, factory) {
    if ("function" == typeof define && define.amd) define("/Base", ["exports", "jquery", "Component", "Plugin"], factory);
    else if ("undefined" != typeof exports) factory(exports, require("jquery"), require("Component"), require("Plugin"));
    else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.jQuery, global.Component, global.Plugin), global.Base = mod.exports
    }
}(this, function(exports, _jquery, _Component2, _Plugin) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _jquery2 = babelHelpers.interopRequireDefault(_jquery),
        _Component3 = babelHelpers.interopRequireDefault(_Component2),
        _class = function(_Component) {
            function _class() {
                return babelHelpers.classCallCheck(this, _class), babelHelpers.possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments))
            }
            return babelHelpers.inherits(_class, _Component), babelHelpers.createClass(_class, [{
                key: "initializePlugins",
                value: function() {
                    var context = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    (0, _jquery2.default)("[data-plugin]", context || this.$el).each(function() {
                        var $this = (0, _jquery2.default)(this),
                            name = $this.data("plugin"),
                            plugin = (0, _Plugin.pluginFactory)(name, $this, $this.data());
                        plugin && plugin.initialize()
                    })
                }
            }, {
                key: "initializePluginAPIs",
                value: function() {
                    var context = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document,
                        apis = (0, _Plugin.getPluginAPI)();
                    for (var name in apis)(0, _Plugin.getPluginAPI)(name)("[data-plugin=" + name + "]", context)
                }
            }]), _class
        }(_Component3.default);
    exports.default = _class
});
/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
! function(global, factory) {
    if ("function" == typeof define && define.amd) define("/Config", ["exports"], factory);
    else if ("undefined" != typeof exports) factory(exports);
    else {
        var mod = {
            exports: {}
        };
        factory(mod.exports), global.Config = mod.exports
    }
}(this, function(exports) {
    "use strict";

    function get() {
        for (var data = values, callback = function(data, name) {
                return data[name]
            }, _len = arguments.length, names = Array(_len), _key = 0; _key < _len; _key++) names[_key] = arguments[_key];
        for (var i = 0; i < names.length; i++) {
            var name = names[i];
            data = callback(data, name)
        }
        return data
    }

    function set(name, value) {
        "string" == typeof name && "undefined" != typeof value ? values[name] = value : "object" === ("undefined" == typeof name ? "undefined" : babelHelpers.typeof(name)) && (values = $.extend(!0, {}, values, name))
    }

    function getColor(name, level) {
        if ("primary" === name && (name = get("primaryColor"), name || (name = "red")), "undefined" == typeof values.colors) return null;
        if ("undefined" != typeof values.colors[name]) {
            if (level && "undefined" != typeof values.colors[name][level]) return values.colors[name][level];
            if ("undefined" == typeof level) return values.colors[name]
        }
        return null
    }

    function colors(name, level) {
        return getColor(name, level)
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var values = {
        fontFamily: "Noto Sans, sans-serif",
        primaryColor: "blue",
        assets: "../assets"
    };
    exports.get = get, exports.set = set, exports.getColor = getColor, exports.colors = colors
});
/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
! function(global, factory) {
    if ("function" == typeof define && define.amd) define("/Site", ["exports", "jquery", "Config", "Base"], factory);
    else if ("undefined" != typeof exports) factory(exports, require("jquery"), require("Config"), require("Base"));
    else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.jQuery, global.Config, global.Base), global.Site = mod.exports
    }
}(this, function(exports, _jquery, _Config, _Base2) {
    "use strict";

    function getInstance() {
        return instance = new Site, instance
    }

    function run() {
        var site = getInstance();
        site.run()
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.getInstance = exports.run = exports.Site = void 0;
    var _jquery2 = babelHelpers.interopRequireDefault(_jquery),
        Config = babelHelpers.interopRequireWildcard(_Config),
        _Base3 = babelHelpers.interopRequireDefault(_Base2),
        DOC = document,
        $DOC = (0, _jquery2.default)(document),
        $BODY = (0, _jquery2.default)("body"),
        Site = function(_Base) {
            function Site() {
                return babelHelpers.classCallCheck(this, Site), babelHelpers.possibleConstructorReturn(this, (Site.__proto__ || Object.getPrototypeOf(Site)).apply(this, arguments))
            }
            return babelHelpers.inherits(Site, _Base), babelHelpers.createClass(Site, [{
                key: "willProcess",
                value: function() {
                    this.initializePluginAPIs(), this.initializePlugins()
                }
            }, {
                key: "processed",
                value: function() {
                    this.polyfillIEWidth(), this.initBootstrap(), this.setupFullScreen(), this.setupMegaNavbar(), this.setupTour(), this.$el.on("click", ".dropdown-menu-media", function(e) {
                        e.stopPropagation()
                    })
                }
            }, {
                key: "getCurrentBreakpoint",
                value: function() {
                    var bp = Breakpoints.current();
                    return bp ? bp.name : "lg"
                }
            }, {
                key: "initBootstrap",
                value: function() {
                    $DOC.tooltip({
                        selector: "[data-tooltip=true]",
                        container: "body"
                    }), (0, _jquery2.default)('[data-toggle="tooltip"]').tooltip(), (0, _jquery2.default)('[data-toggle="popover"]').popover()
                }
            }, {
                key: "polyfillIEWidth",
                value: function() {
                    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
                        var msViewportStyle = DOC.createElement("style");
                        msViewportStyle.appendChild(DOC.createTextNode("@-ms-viewport{width:auto!important}")), DOC.querySelector("head").appendChild(msViewportStyle)
                    }
                }
            }, {
                key: "setupFullScreen",
                value: function() {
                    "undefined" != typeof screenfull && ($DOC.on("click", '[data-toggle="fullscreen"]', function() {
                        return screenfull.enabled && screenfull.toggle(), !1
                    }), screenfull.enabled && DOC.addEventListener(screenfull.raw.fullscreenchange, function() {
                        (0, _jquery2.default)('[data-toggle="fullscreen"]').toggleClass("active", screenfull.isFullscreen)
                    }))
                }
            }, {
                key: "setupMegaNavbar",
                value: function() {
                    $DOC.on("click", ".navbar-mega .dropdown-menu", function(e) {
                        e.stopPropagation()
                    }).on("show.bs.dropdown", function(e) {
                        var $target = (0, _jquery2.default)(e.target),
                            $trigger = e.relatedTarget ? (0, _jquery2.default)(e.relatedTarget) : $target.children('[data-toggle="dropdown"]'),
                            animation = $trigger.data("animation");
                        animation && ! function() {
                            var $menu = $target.children(".dropdown-menu");
                            $menu.addClass("animation-" + animation).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                                $menu.removeClass("animation-" + animation)
                            })
                        }()
                    }).on("shown.bs.dropdown", function(e) {
                        var $menu = (0, _jquery2.default)(e.target).find(".dropdown-menu-media > .list-group");
                        if ($menu.length > 0) {
                            var api = $menu.data("asScrollable");
                            api ? api.update() : $menu.asScrollable({
                                namespace: "scrollable",
                                contentSelector: "> [data-role='content']",
                                containerSelector: "> [data-role='container']",
                                mousewheelControlOutside: $menu.data('mousewheel-control-out')
                            })
                        }
                    })
                }
            }, {
                key: "setupTour",
                value: function(flag) {
                    var _this3 = this;
                    if ("undefined" == typeof this.tour) {
                        var _ret2 = function() {
                            if ("undefined" == typeof introJs) return {
                                v: void 0
                            };
                            var overflow = (0, _jquery2.default)("body").css("overflow"),
                                self = _this3,
                                tourOptions = Config.get("tour");
                            _this3.tour = introJs(), _this3.tour.onbeforechange(function() {
                                (0, _jquery2.default)("body").css("overflow", "hidden")
                            }), _this3.tour.oncomplete(function() {
                                (0, _jquery2.default)("body").css("overflow", overflow)
                            }), _this3.tour.onexit(function() {
                                (0, _jquery2.default)("body").css("overflow", overflow)
                            }), _this3.tour.setOptions(tourOptions), (0, _jquery2.default)(".site-tour-trigger").on("click", function() {
                                self.tour.start()
                            })
                        }();
                        if ("object" === ("undefined" == typeof _ret2 ? "undefined" : babelHelpers.typeof(_ret2))) return _ret2.v
                    }
                }
            }]), Site
        }(_Base3.default),
        instance = null;
    exports.default = Site, exports.Site = Site, exports.run = run, exports.getInstance = getInstance
});
/**
 * breakpoints-js v1.0.4
 * https://github.com/amazingSurge/breakpoints-js
 *
 * Copyright (c) amazingSurge
 * Released under the LGPL-3.0 license
 */
! function(t, n) {
    if ("function" == typeof define && define.amd) define(["exports"], n);
    else if ("undefined" != typeof exports) n(exports);
    else {
        var e = {
            exports: {}
        };
        n(e.exports), t.breakpoints = e.exports
    }
}(this, function(t) {
    "use strict";

    function n(t, n) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !n || "object" != typeof n && "function" != typeof n ? t : n
    }

    function e(t, n) {
        if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + typeof n);
        t.prototype = Object.create(n && n.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(t, n) : t.__proto__ = n)
    }

    function i(t, n) {
        if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
            function t(t, n) {
                for (var e = 0; e < n.length; e++) {
                    var i = n[e];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(n, e, i) {
                return e && t(n.prototype, e), i && t(n, i), n
            }
        }(),
        o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        },
        s = {
            xs: {
                min: 0,
                max: 767
            },
            sm: {
                min: 768,
                max: 991
            },
            md: {
                min: 992,
                max: 1199
            },
            lg: {
                min: 1200,
                max: 1 / 0
            }
        },
        a = {
            each: function(t, n) {
                var e = void 0;
                for (var i in t)
                    if (("object" !== ("undefined" == typeof t ? "undefined" : o(t)) || t.hasOwnProperty(i)) && (e = n(i, t[i]), e === !1)) break
            },
            isFunction: function(t) {
                return "function" == typeof t || !1
            },
            extend: function(t, n) {
                for (var e in n) t[e] = n[e];
                return t
            }
        },
        u = function() {
            function t() {
                i(this, t), this.length = 0, this.list = []
            }
            return r(t, [{
                key: "add",
                value: function(t, n) {
                    var e = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    this.list.push({
                        fn: t,
                        data: n,
                        one: e
                    }), this.length++
                }
            }, {
                key: "remove",
                value: function(t) {
                    for (var n = 0; n < this.list.length; n++) this.list[n].fn === t && (this.list.splice(n, 1), this.length--, n--)
                }
            }, {
                key: "empty",
                value: function() {
                    this.list = [], this.length = 0
                }
            }, {
                key: "call",
                value: function(t, n) {
                    var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    n || (n = this.length - 1);
                    var i = this.list[n];
                    a.isFunction(e) ? e.call(this, t, i, n) : a.isFunction(i.fn) && i.fn.call(t || window, i.data), i.one && (delete this.list[n], this.length--)
                }
            }, {
                key: "fire",
                value: function(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    for (var e in this.list) this.list.hasOwnProperty(e) && this.call(t, e, n)
                }
            }]), t
        }(),
        f = {
            current: null,
            callbacks: new u,
            trigger: function(t) {
                var n = this.current;
                this.current = t, this.callbacks.fire(t, function(e, i) {
                    a.isFunction(i.fn) && i.fn.call({
                        current: t,
                        previous: n
                    }, i.data)
                })
            },
            one: function(t, n) {
                return this.on(t, n, !0)
            },
            on: function(t, n) {
                var e = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                "undefined" == typeof n && a.isFunction(t) && (n = t, t = void 0), a.isFunction(n) && this.callbacks.add(n, t, e)
            },
            off: function(t) {
                "undefined" == typeof t && this.callbacks.empty()
            }
        },
        c = function() {
            function t(n, e) {
                i(this, t), this.name = n, this.media = e, this.initialize()
            }
            return r(t, [{
                key: "initialize",
                value: function() {
                    this.callbacks = {
                        enter: new u,
                        leave: new u
                    }, this.mql = window.matchMedia && window.matchMedia(this.media) || {
                        matches: !1,
                        media: this.media,
                        addListener: function() {},
                        removeListener: function() {}
                    };
                    var t = this;
                    this.mqlListener = function(n) {
                        var e = n.matches && "enter" || "leave";
                        t.callbacks[e].fire(t)
                    }, this.mql.addListener(this.mqlListener)
                }
            }, {
                key: "on",
                value: function(t, n, e) {
                    var i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    if ("object" === ("undefined" == typeof t ? "undefined" : o(t))) {
                        for (var r in t) t.hasOwnProperty(r) && this.on(r, n, t[r], i);
                        return this
                    }
                    return "undefined" == typeof e && a.isFunction(n) && (e = n, n = void 0), a.isFunction(e) ? ("undefined" != typeof this.callbacks[t] && (this.callbacks[t].add(e, n, i), "enter" === t && this.isMatched() && this.callbacks[t].call(this)), this) : this
                }
            }, {
                key: "one",
                value: function(t, n, e) {
                    return this.on(t, n, e, !0)
                }
            }, {
                key: "off",
                value: function(t, n) {
                    var e = void 0;
                    if ("object" === ("undefined" == typeof t ? "undefined" : o(t))) {
                        for (e in t) t.hasOwnProperty(e) && this.off(e, t[e]);
                        return this
                    }
                    return "undefined" == typeof t ? (this.callbacks.enter.empty(), this.callbacks.leave.empty()) : t in this.callbacks && (n ? this.callbacks[t].remove(n) : this.callbacks[t].empty()), this
                }
            }, {
                key: "isMatched",
                value: function() {
                    return this.mql.matches
                }
            }, {
                key: "destroy",
                value: function() {
                    this.off()
                }
            }]), t
        }(),
        l = {
            min: function(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "px";
                return "(min-width: " + t + n + ")"
            },
            max: function(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "px";
                return "(max-width: " + t + n + ")"
            },
            between: function(t, n) {
                var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "px";
                return "(min-width: " + t + e + ") and (max-width: " + n + e + ")"
            },
            get: function(t, n) {
                var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "px";
                return 0 === t ? this.max(n, e) : n === 1 / 0 ? this.min(t, e) : this.between(t, n, e)
            }
        },
        h = function(t) {
            function o(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1 / 0,
                    s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "px";
                i(this, o);
                var a = l.get(e, r, s),
                    u = n(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, t, a));
                u.min = e, u.max = r, u.unit = s;
                var c = u;
                return u.changeListener = function() {
                    c.isMatched() && f.trigger(c)
                }, u.isMatched() && (f.current = u), u.mql.addListener(u.changeListener), u
            }
            return e(o, t), r(o, [{
                key: "destroy",
                value: function() {
                    this.off(), this.mql.removeListener(this.changeHander)
                }
            }]), o
        }(c),
        d = function(t) {
            function r(t) {
                i(this, r);
                var e = [],
                    o = [];
                return a.each(t.split(" "), function(t, n) {
                    var i = g.get(n);
                    i && (e.push(i), o.push(i.media))
                }), n(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, t, o.join(",")))
            }
            return e(r, t), r
        }(c),
        v = {
            version: "1.0.4"
        },
        p = {},
        y = {},
        m = window.Breakpoints = function() {
            for (var t = arguments.length, n = Array(t), e = 0; e < t; e++) n[e] = arguments[e];
            m.define.apply(m, n)
        };
    m.defaults = s, m = a.extend(m, {
        version: v.version,
        defined: !1,
        define: function(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            this.defined && this.destroy(), t || (t = m.defaults), this.options = a.extend(n, {
                unit: "px"
            });
            for (var e in t) t.hasOwnProperty(e) && this.set(e, t[e].min, t[e].max, this.options.unit);
            this.defined = !0
        },
        destroy: function() {
            a.each(p, function(t, n) {
                n.destroy()
            }), p = {}, f.current = null
        },
        is: function(t) {
            var n = this.get(t);
            return n ? n.isMatched() : null
        },
        all: function() {
            var t = [];
            return a.each(p, function(n) {
                t.push(n)
            }), t
        },
        set: function(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1 / 0,
                i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "px",
                r = this.get(t);
            return r && r.destroy(), p[t] = new h(t, n, e, i), p[t]
        },
        get: function(t) {
            return p.hasOwnProperty(t) ? p[t] : null
        },
        getUnion: function(t) {
            return y.hasOwnProperty(t) ? y[t] : (y[t] = new d(t), y[t])
        },
        getMin: function(t) {
            var n = this.get(t);
            return n ? n.min : null
        },
        getMax: function(t) {
            var n = this.get(t);
            return n ? n.max : null
        },
        current: function() {
            return f.current
        },
        getMedia: function(t) {
            var n = this.get(t);
            return n ? n.media : null
        },
        on: function(t, n, e, i) {
            var r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            if (t = t.trim(), "change" === t) return i = e, e = n, f.on(e, i, r);
            if (t.indexOf(' ') >= 0) {
                var o = this.getUnion(t);
                o && o.on(n, e, i, r)
            } else {
                var s = this.get(t);
                s && s.on(n, e, i, r)
            }
            return this
        },
        one: function(t, n, e, i) {
            return this.on(t, n, e, i, !0)
        },
        off: function(t, n, e) {
            if (t = t.trim(), "change" === t) return f.off(n);
            if (t.indexOf(' ') >= 0) {
                var i = this.getUnion(t);
                i && i.off(n, e)
            } else {
                var r = this.get(t);
                r && r.off(n, e)
            }
            return this
        }
    });
    var g = m;
    t.default = g
});
/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
;
window.Modernizr = function(a, b, c) {
        function C(a) {
            j.cssText = a
        }

        function D(a, b) {
            return C(n.join(a + ";") + (b || ""))
        }

        function E(a, b) {
            return typeof a === b
        }

        function F(a, b) {
            return !!~("" + a).indexOf(b)
        }

        function G(a, b) {
            for (var d in a) {
                var e = a[d];
                if (!F(e, "-") && j[e] !== c) return b == "pfx" ? e : !0
            }
            return !1
        }

        function H(a, b, d) {
            for (var e in a) {
                var f = b[a[e]];
                if (f !== c) return d === !1 ? a[e] : E(f, "function") ? f.bind(d || b) : f
            }
            return !1
        }

        function I(a, b, c) {
            var d = a.charAt(0).toUpperCase() + a.slice(1),
                e = (a + " " + p.join(d + " ") + d).split(" ");
            return E(b, "string") || E(b, "undefined") ? G(e, b) : (e = (a + " " + q.join(d + " ") + d).split(" "), H(e, b, c))
        }

        function J() {
            e.input = function(c) {
                for (var d = 0, e = c.length; d < e; d++) u[c[d]] = c[d] in k;
                return u.list && (u.list = !!b.createElement("datalist") && !!a.HTMLDataListElement), u
            }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), e.inputtypes = function(a) {
                for (var d = 0, e, f, h, i = a.length; d < i; d++) k.setAttribute("type", f = a[d]), e = k.type !== "text", e && (k.value = l, k.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(f) && k.style.WebkitAppearance !== c ? (g.appendChild(k), h = b.defaultView, e = h.getComputedStyle && h.getComputedStyle(k, null).WebkitAppearance !== "textfield" && k.offsetHeight !== 0, g.removeChild(k)) : /^(search|tel)$/.test(f) || (/^(url|email)$/.test(f) ? e = k.checkValidity && k.checkValidity() === !1 : e = k.value != l)), t[a[d]] = !!e;
                return t
            }("search tel url email datetime date month week time datetime-local number range color".split(" "))
        }
        var d = "2.8.3",
            e = {},
            f = !0,
            g = b.documentElement,
            h = "modernizr",
            i = b.createElement(h),
            j = i.style,
            k = b.createElement("input"),
            l = ":)",
            m = {}.toString,
            n = " -webkit- -moz- -o- -ms- ".split(" "),
            o = "Webkit Moz O ms",
            p = o.split(" "),
            q = o.toLowerCase().split(" "),
            r = {
                svg: "http://www.w3.org/2000/svg"
            },
            s = {},
            t = {},
            u = {},
            v = [],
            w = v.slice,
            x, y = function(a, c, d, e) {
                var f, i, j, k, l = b.createElement("div"),
                    m = b.body,
                    n = m || b.createElement("body");
                if (parseInt(d, 10))
                    while (d--) j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), l.appendChild(j);
                return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""), l.id = h, (m ? l : n).innerHTML += f, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)), i = c(l, a), m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), g.style.overflow = k), !!i
            },
            z = function() {
                function d(d, e) {
                    e = e || b.createElement(a[d] || "div"), d = "on" + d;
                    var f = d in e;
                    return f || (e.setAttribute || (e = b.createElement("div")), e.setAttribute && e.removeAttribute && (e.setAttribute(d, ""), f = E(e[d], "function"), E(e[d], "undefined") || (e[d] = c), e.removeAttribute(d))), e = null, f
                }
                var a = {
                    select: "input",
                    change: "input",
                    submit: "form",
                    reset: "form",
                    error: "img",
                    load: "img",
                    abort: "img"
                };
                return d
            }(),
            A = {}.hasOwnProperty,
            B;
        !E(A, "undefined") && !E(A.call, "undefined") ? B = function(a, b) {
            return A.call(a, b)
        } : B = function(a, b) {
            return b in a && E(a.constructor.prototype[b], "undefined")
        }, Function.prototype.bind || (Function.prototype.bind = function(b) {
            var c = this;
            if (typeof c != "function") throw new TypeError;
            var d = w.call(arguments, 1),
                e = function() {
                    if (this instanceof e) {
                        var a = function() {};
                        a.prototype = c.prototype;
                        var f = new a,
                            g = c.apply(f, d.concat(w.call(arguments)));
                        return Object(g) === g ? g : f
                    }
                    return c.apply(b, d.concat(w.call(arguments)))
                };
            return e
        }), s.flexbox = function() {
            return I("flexWrap")
        }, s.canvas = function() {
            var a = b.createElement("canvas");
            return !!a.getContext && !!a.getContext("2d")
        }, s.canvastext = function() {
            return !!e.canvas && !!E(b.createElement("canvas").getContext("2d").fillText, "function")
        }, s.webgl = function() {
            return !!a.WebGLRenderingContext
        }, s.touch = function() {
            var c;
            return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : y(["@media (", n.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(a) {
                c = a.offsetTop === 9
            }), c
        }, s.geolocation = function() {
            return "geolocation" in navigator
        }, s.postmessage = function() {
            return !!a.postMessage
        }, s.websqldatabase = function() {
            return !!a.openDatabase
        }, s.indexedDB = function() {
            return !!I("indexedDB", a)
        }, s.hashchange = function() {
            return z("hashchange", a) && (b.documentMode === c || b.documentMode > 7)
        }, s.history = function() {
            return !!a.history && !!history.pushState
        }, s.draganddrop = function() {
            var a = b.createElement("div");
            return "draggable" in a || "ondragstart" in a && "ondrop" in a
        }, s.websockets = function() {
            return "WebSocket" in a || "MozWebSocket" in a
        }, s.rgba = function() {
            return C("background-color:rgba(150,255,150,.5)"), F(j.backgroundColor, "rgba")
        }, s.hsla = function() {
            return C("background-color:hsla(120,40%,100%,.5)"), F(j.backgroundColor, "rgba") || F(j.backgroundColor, "hsla")
        }, s.multiplebgs = function() {
            return C("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(j.background)
        }, s.backgroundsize = function() {
            return I("backgroundSize")
        }, s.borderimage = function() {
            return I("borderImage")
        }, s.borderradius = function() {
            return I("borderRadius")
        }, s.boxshadow = function() {
            return I("boxShadow")
        }, s.textshadow = function() {
            return b.createElement("div").style.textShadow === ""
        }, s.opacity = function() {
            return D("opacity:.55"), /^0.55$/.test(j.opacity)
        }, s.cssanimations = function() {
            return I("animationName")
        }, s.csscolumns = function() {
            return I("columnCount")
        }, s.cssgradients = function() {
            var a = "background-image:",
                b = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
                c = "linear-gradient(left top,#9f9, white);";
            return C((a + "-webkit- ".split(" ").join(b + a) + n.join(c + a)).slice(0, -a.length)), F(j.backgroundImage, "gradient")
        }, s.cssreflections = function() {
            return I("boxReflect")
        }, s.csstransforms = function() {
            return !!I("transform")
        }, s.csstransforms3d = function() {
            var a = !!I("perspective");
            return a && "webkitPerspective" in g.style && y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(b, c) {
                a = b.offsetLeft === 9 && b.offsetHeight === 3
            }), a
        }, s.csstransitions = function() {
            return I("transition")
        }, s.fontface = function() {
            var a;
            return y('@font-face {font-family:"font";src:url("https://")}', function(c, d) {
                var e = b.getElementById("smodernizr"),
                    f = e.sheet || e.styleSheet,
                    g = f ? f.cssRules && f.cssRules[0] ? f.cssRules[0].cssText : f.cssText || "" : "";
                a = /src/i.test(g) && g.indexOf(d.split(" ")[0]) === 0
            }), a
        }, s.generatedcontent = function() {
            var a;
            return y(["#", h, "{font:0/0 a}#", h, ':after{content:"', l, '";visibility:hidden;font:3px/1 a}'].join(""), function(b) {
                a = b.offsetHeight >= 3
            }), a
        }, s.video = function() {
            var a = b.createElement("video"),
                c = !1;
            try {
                if (c = !!a.canPlayType) c = new Boolean(c), c.ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), c.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), c.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "")
            } catch (d) {}
            return c
        }, s.audio = function() {
            var a = b.createElement("audio"),
                c = !1;
            try {
                if (c = !!a.canPlayType) c = new Boolean(c), c.ogg = a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), c.mp3 = a.canPlayType("audio/mpeg;").replace(/^no$/, ""), c.wav = a.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), c.m4a = (a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")).replace(/^no$/, "")
            } catch (d) {}
            return c
        }, s.localstorage = function() {
            try {
                return localStorage.setItem(h, h), localStorage.removeItem(h), !0
            } catch (a) {
                return !1
            }
        }, s.sessionstorage = function() {
            try {
                return sessionStorage.setItem(h, h), sessionStorage.removeItem(h), !0
            } catch (a) {
                return !1
            }
        }, s.webworkers = function() {
            return !!a.Worker
        }, s.applicationcache = function() {
            return !!a.applicationCache
        }, s.svg = function() {
            return !!b.createElementNS && !!b.createElementNS(r.svg, "svg").createSVGRect
        }, s.inlinesvg = function() {
            var a = b.createElement("div");
            return a.innerHTML = "<svg/>", (a.firstChild && a.firstChild.namespaceURI) == r.svg
        }, s.smil = function() {
            return !!b.createElementNS && /SVGAnimate/.test(m.call(b.createElementNS(r.svg, "animate")))
        }, s.svgclippaths = function() {
            return !!b.createElementNS && /SVGClipPath/.test(m.call(b.createElementNS(r.svg, "clipPath")))
        };
        for (var K in s) B(s, K) && (x = K.toLowerCase(), e[x] = s[K](), v.push((e[x] ? "" : "no-") + x));
        return e.input || J(), e.addTest = function(a, b) {
                if (typeof a == "object")
                    for (var d in a) B(a, d) && e.addTest(d, a[d]);
                else {
                    a = a.toLowerCase();
                    if (e[a] !== c) return e;
                    b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
                }
                return e
            }, C(""), i = k = null,
            function(a, b) {
                function l(a, b) {
                    var c = a.createElement("p"),
                        d = a.getElementsByTagName("head")[0] || a.documentElement;
                    return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
                }

                function m() {
                    var a = s.elements;
                    return typeof a == "string" ? a.split(" ") : a
                }

                function n(a) {
                    var b = j[a[h]];
                    return b || (b = {}, i++, a[h] = i, j[i] = b), b
                }

                function o(a, c, d) {
                    c || (c = b);
                    if (k) return c.createElement(a);
                    d || (d = n(c));
                    var g;
                    return d.cache[a] ? g = d.cache[a].cloneNode() : f.test(a) ? g = (d.cache[a] = d.createElem(a)).cloneNode() : g = d.createElem(a), g.canHaveChildren && !e.test(a) && !g.tagUrn ? d.frag.appendChild(g) : g
                }

                function p(a, c) {
                    a || (a = b);
                    if (k) return a.createDocumentFragment();
                    c = c || n(a);
                    var d = c.frag.cloneNode(),
                        e = 0,
                        f = m(),
                        g = f.length;
                    for (; e < g; e++) d.createElement(f[e]);
                    return d
                }

                function q(a, b) {
                    b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c) {
                        return s.shivMethods ? o(c, a, b) : b.createElem(c)
                    }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + m().join().replace(/[\w\-]+/g, function(a) {
                        return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
                    }) + ");return n}")(s, b.frag)
                }

                function r(a) {
                    a || (a = b);
                    var c = n(a);
                    return s.shivCSS && !g && !c.hasCSS && (c.hasCSS = !!l(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), k || q(a, c), a
                }
                var c = "3.7.0",
                    d = a.html5 || {},
                    e = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    g, h = "_html5shiv",
                    i = 0,
                    j = {},
                    k;
                (function() {
                    try {
                        var a = b.createElement("a");
                        a.innerHTML = "<xyz></xyz>", g = "hidden" in a, k = a.childNodes.length == 1 || function() {
                            b.createElement("a");
                            var a = b.createDocumentFragment();
                            return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
                        }()
                    } catch (c) {
                        g = !0, k = !0
                    }
                })();
                var s = {
                    elements: d.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                    version: c,
                    shivCSS: d.shivCSS !== !1,
                    supportsUnknownElements: k,
                    shivMethods: d.shivMethods !== !1,
                    type: "default",
                    shivDocument: r,
                    createElement: o,
                    createDocumentFragment: p
                };
                a.html5 = s, r(b)
            }(this, b), e._version = d, e._prefixes = n, e._domPrefixes = q, e._cssomPrefixes = p, e.hasEvent = z, e.testProp = function(a) {
                return G([a])
            }, e.testAllProps = I, e.testStyles = y, e.prefixed = function(a, b, c) {
                return b ? I(a, b, c) : I(a, "pfx")
            }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + v.join(" ") : ""), e
    }(this, this.document),
    function(a, b, c) {
        function d(a) {
            return "[object Function]" == o.call(a)
        }

        function e(a) {
            return "string" == typeof a
        }

        function f() {}

        function g(a) {
            return !a || "loaded" == a || "complete" == a || "uninitialized" == a
        }

        function h() {
            var a = p.shift();
            q = 1, a ? a.t ? m(function() {
                ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
            }, 0) : (a(), h()) : q = 0
        }

        function i(a, c, d, e, f, i, j) {
            function k(b) {
                if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
                    "img" != a && m(function() {
                        t.removeChild(l)
                    }, 50);
                    for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload()
                }
            }
            var j = j || B.errorTimeout,
                l = b.createElement(a),
                o = 0,
                r = 0,
                u = {
                    t: d,
                    s: c,
                    e: f,
                    a: i,
                    x: j
                };
            1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() {
                k.call(this, r)
            }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
        }

        function j(a, b, c, d, f) {
            return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this
        }

        function k() {
            var a = B;
            return a.loader = {
                load: j,
                i: 0
            }, a
        }
        var l = b.documentElement,
            m = a.setTimeout,
            n = b.getElementsByTagName("script")[0],
            o = {}.toString,
            p = [],
            q = 0,
            r = "MozAppearance" in l.style,
            s = r && !!b.createRange().compareNode,
            t = s ? l : n.parentNode,
            l = a.opera && "[object Opera]" == o.call(a.opera),
            l = !!b.attachEvent && !l,
            u = r ? "object" : l ? "script" : "img",
            v = l ? "script" : u,
            w = Array.isArray || function(a) {
                return "[object Array]" == o.call(a)
            },
            x = [],
            y = {},
            z = {
                timeout: function(a, b) {
                    return b.length && (a.timeout = b[0]), a
                }
            },
            A, B;
        B = function(a) {
            function b(a) {
                var a = a.split("!"),
                    b = x.length,
                    c = a.pop(),
                    d = a.length,
                    c = {
                        url: c,
                        origUrl: c,
                        prefixes: a
                    },
                    e, f, g;
                for (f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
                for (f = 0; f < b; f++) c = x[f](c);
                return c
            }

            function g(a, e, f, g, h) {
                var i = b(a),
                    j = i.autoCallback;
                i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function() {
                    k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2
                })))
            }

            function h(a, b) {
                function c(a, c) {
                    if (a) {
                        if (e(a)) c || (j = function() {
                            var a = [].slice.call(arguments);
                            k.apply(this, a), l()
                        }), g(a, j, b, 0, h);
                        else if (Object(a) === a)
                            for (n in m = function() {
                                    var b = 0,
                                        c;
                                    for (c in a) a.hasOwnProperty(c) && b++;
                                    return b
                                }(), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function() {
                                var a = [].slice.call(arguments);
                                k.apply(this, a), l()
                            } : j[n] = function(a) {
                                return function() {
                                    var b = [].slice.call(arguments);
                                    a && a.apply(this, b), l()
                                }
                            }(k[n])), g(a[n], j, b, n, h))
                    } else !c && l()
                }
                var h = !!a.test,
                    i = a.load || a.both,
                    j = a.callback || f,
                    k = j,
                    l = a.complete || f,
                    m, n;
                c(h ? a.yep : a.nope, !!i), i && c(i)
            }
            var i, j, l = this.yepnope.loader;
            if (e(a)) g(a, 0, l, 0);
            else if (w(a))
                for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
            else Object(a) === a && h(a, l)
        }, B.addPrefix = function(a, b) {
            z[a] = b
        }, B.addFilter = function(a) {
            x.push(a)
        }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function() {
            b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
        }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j) {
            var k = b.createElement("script"),
                l, o, e = e || B.errorTimeout;
            k.src = a;
            for (o in d) k.setAttribute(o, d[o]);
            c = j ? h : c || f, k.onreadystatechange = k.onload = function() {
                !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
            }, m(function() {
                l || (l = 1, c(1))
            }, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
        }, a.yepnope.injectCss = function(a, c, d, e, g, i) {
            var e = b.createElement("link"),
                j, c = i ? h : c || f;
            e.href = a, e.rel = "stylesheet", e.type = "text/css";
            for (j in d) e.setAttribute(j, d[j]);
            g || (n.parentNode.insertBefore(e, n), m(c, 0))
        }
    }(this, document), Modernizr.load = function() {
        yepnope.apply(window, [].slice.call(arguments, 0))
    };
/*!
 * 框架基础参数、基础功能
 * M['classnow']    当前栏目ID
 * M['device_type'] 客户端判断（d：PC端，t：平板端，m：手机端）
 */
// 网站参数
window.MSTR = $('meta[name="generator"]').data('variable').split('|');
window.M = [];
M['weburl'] = MSTR[0];
M['classnow'] = 10001;
// 客户端判断
M['useragent'] = navigator.userAgent;
M['useragent_tlc'] = M['useragent'].toLowerCase();
M['device_type'] = device_type = /iPad/.test(M['useragent']) ? 't' : /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk/.test(M['useragent']) ? 'm' : 'd';
M['is_ucbro'] = /UC/.test(M['useragent']);
M['is_lteie9'] = false;
M['is_ie10'] = false;
// lte IE9、IE10浏览器判断
if (new RegExp('msie').test(M['useragent_tlc'])) {
    M['iebrowser_ver'] = (M['useragent_tlc'].match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [0, '0'])[1];
    if (M['iebrowser_ver'] == 10) M['is_ie10'] = true;
    if (M['iebrowser_ver'] < 10) M['is_lteie9'] = true;
}
// 延迟加载参数(模板前台用户设置)
window.neko_lazyloadbg = 'templates/web/images/loading.gif';
if (neko_lazyloadbg.indexOf(M['weburl']) < 0 && neko_lazyloadbg.indexOf('http') < 0 && neko_lazyloadbg.indexOf('../') < 0) neko_lazyloadbg = M['weburl'] + neko_lazyloadbg;
if (neko_lazyloadbg == M['weburl'] || (neko_lazyloadbg.indexOf('.png') < 0 && neko_lazyloadbg.indexOf('.gif') < 0 && neko_lazyloadbg.indexOf('.jpg') < 0)) neko_lazyloadbg = 'templates/web/images/loading.gif';
if (!!window.ActiveXObject || 'ActiveXObject' in window || M['is_ucbro']) neko_lazyloadbg = 'base64';
M['lazyloadbg'] = neko_lazyloadbg;
if (typeof Breakpoints != 'undefined') Breakpoints(); // 窗口宽度断点函数
// js严格模式
(function(document, window, $) {
    'use strict';
    var Site = window.Site;
    $(function() {
        Site.run();
        // 中间弹窗隐藏效果优化（点击弹窗框外上下方隐藏弹窗）
        $(document).on('click', '.modal-dialog.modal-center', function(e) {
            if (!$(e.target).closest(".modal-dialog.modal-center .modal-content").length && $('.modal-backdrop').length) $(this).parents('.modal:eq(0)').modal('hide');
        });
        // 手机端弹窗位置取消垂直居中
        Breakpoints.on('xs', {
            enter: function() {
                $(document).on('show.bs.modal', '.modal', function(event) {
                    if ($('.modal-dialog', this).hasClass('modal-center')) $('.modal-dialog', this).removeClass('modal-center');
                });
            }
        })
        // 弹窗高度过高时，其位置取消垂直居中
        $(document).on('shown.bs.modal', '.modal', function(event) {
            if ($('.modal-dialog', this).hasClass('modal-center') && $('.modal-content', this).height() > $(window).height()) $('.modal-dialog', this).removeClass('modal-center');
        });
    })
})(document, window, jQuery);
window.includeFile = [];
window.includeFileIndex = 0;
window.includeFileNum = 0;
$.extend({
    /**
     * 异步加载文件
     * @param String   file      文件路径
     * @param Number   num_start 文件加载排序开始值
     * @param Number   num_end   文件加载排序结束值
     * @param Function fun       回调函数
     */
    includeFile: function(file, num_start, num_end, fun, special) {
        var name = file.replace(/^\s|\s$/g, ""),
            att = name.split('.'),
            ext = att[att.length - 1].toLowerCase().split('?'),
            loadFun = function() {
                includeFileIndex++;
                if (includeFileIndex < num_end) {
                    $.includeFile(includeFile[includeFileIndex], num_start, num_end, fun, special);
                } else {
                    if (special == 'siterun') Site.run();
                    if (typeof fun === "function") fun();
                }
            };
        if (includeFileIndex >= num_start && includeFileIndex < num_end) {
            if (ext[0] == 'js') {
                var filesi = document.createElement('script'),
                    src = name;
                filesi.src = src;
                filesi.type = "text/javascript",
                    file_index = $.inArray(name, includeFile);
                if (includeFileIndex > file_index) {
                    loadFun();
                } else {
                    if (($('script[src="' + src + '"]').length && includeFileIndex == file_index) || (!$('script[src="' + src + '"]').length && typeof filesi != "undefined")) {
                        document.getElementsByTagName('html')[0].appendChild(filesi);
                    } else {
                        setTimeout(function() {
                            $.includeFile(file, num_start, num_end, fun, special);
                        }, 5)
                        return false;
                    }
                    // 文件加载完成回调
                    filesi.onload = filesi.onreadystatechange = function() {
                        var r = filesi.readyState;
                        if (!r || r === 'loaded' || r === 'complete') {
                            filesi.onload = filesi.onreadystatechange = null;
                            loadFun();
                        }
                    };
                }
            } else if (ext[0] == 'css') {
                var filesi = document.createElement('link'),
                    href = name;
                filesi.href = href;
                filesi.type = 'text/css';
                filesi.rel = "stylesheet";
                if (!$('link[href="' + href + '"]').length && typeof filesi != "undefined") document.getElementsByTagName('head')[0].appendChild(filesi);
                if ($('link[href="' + href + '"]').length) loadFun(); // 文件加载完成回调
            }
        } else if (includeFileIndex < num_start) {
            setTimeout(function() {
                if (includeFileIndex < num_end) $.includeFile(includeFile[includeFileIndex], num_start, num_end, fun, special);
            }, 5)
        }
    },
    /**
     * include 异步加载文件集合
     * @param  {String}   file 文件路径
     * @param  {function} fun  文件加载完成回调
     */
    include: function(file, fun, special) {
        var files = typeof file == "string" ? [file] : file,
            fileallnum = typeof file == "string" ? 1 : files.length,
            num_start = includeFileNum,
            num_end = num_start + fileallnum;
        includeFileNum += fileallnum;
        includeFile = includeFile.concat(files);
        $.includeFile(includeFile[num_start], num_start, num_end, fun, special);
    }
});
// ajax多次加载相同文件判断，定义一个全局script的标记数组，用来标记是否某个script已经下载到本地
window.scriptsArray = [];
$.cachedScript = function(url, options) {
    // 循环script标记数组
    for (var s in scriptsArray) {
        // 如果某个数组已经下载到了本地
        if (scriptsArray[s] == url) {
            return { // 则返回一个对象字面量，其中的done之所以叫做done是为了与下面$.ajax中的done相对应
                done: function(method) {
                    if (typeof method == 'function') { // 如果传入参数为一个方法
                        method();
                    }
                }
            };
        }
    }
    // 这里是jquery官方提供类似getScript实现的方法，也就是说getScript其实也就是对ajax方法的一个拓展
    options = $.extend(options || {}, {
        dataType: "script",
        url: url,
        cache: true // 其实现在这缓存加与不加没多大区别
    });
    scriptsArray.push(url); // 将url地址放入script标记数组中
    return $.ajax(options);
};
/*!
 * 前台模板通用功能
 * M['classnow']  	当前栏目ID
 * M['device_type'] 客户端判断（d：PC端，t：平板端，m：手机端）
 */
$(function() {
    if (M['classnow'] == 10001) {
        // 首页首屏内动画预加载
        var $neko_indexbody1_appear = $('.neko-index-body:eq(0) [data-plugin="appear"]');
        if ($neko_indexbody1_appear.length) {
            $neko_indexbody1_appear.scrollFun(function(val) {
                val.appearDiy();
            });
        }
    }
    // 列表图片高度预设及删除
    var $imagesize = $('.imagesize[data-scale]');
    if ($imagesize.length) $imagesize.imageSize();
    // 图片延迟加载
    var $original = $('[data-original]');
    if ($original.length) {
        if (typeof $.fn.lazyload == 'function') {
            $original.lazyload();
        } else if ($('script[src*="js/basic.js"]').length) {
            var interval_lazyload_time = 0,
                interval_lazyload = setInterval(function() {
                    interval_lazyload_time += 50;
                    if (typeof $.fn.lazyload == 'function') {
                        $original.lazyload();
                        clearInterval(interval_lazyload);
                    } else if (interval_lazyload_time > 7000) {
                        console.log('lazyload插件没有加载！');
                        clearInterval(interval_lazyload);
                    }
                }, 50);
        }
    }
    // 内页子栏目导航水平滚动
    var $nekocolumn_nav = $('.neko-column-nav-ul');
    if ($nekocolumn_nav.length) {
        Breakpoints.on('xs', {
            enter: function() {
                $nekocolumn_nav.navtabSwiper();
            }
        })
    }
    if ($('[boxmh-mh]').length) $('[boxmh-mh]').boxMh('[boxmh-h]'); //左右区块最小高度设置
    // 侧栏图片列表
    var $sidebar_piclist = $('.sidebar-piclist-ul');
    if ($sidebar_piclist.find('.masonry-child').length > 1) {
        // 图片列表瀑布流
        Breakpoints.on('xs sm', {
            enter: function() {
                setTimeout(function() {
                    $sidebar_piclist.masonry({
                        itemSelector: ".masonry-child"
                    });
                }, 500)
            }
        });
    }
    // 视频插件异步加载
    if ($(".nekovideobox").length && !$('link[href*="video-js.css"]').length && !$(".nekovideobox .nekovideo").length) {
        $(".nekovideobox").each(function() {
            var data = $(this).attr("data-nekovideo").split("|"),
                width = data[0],
                height = data[1],
                poster = data[2],
                autoplay = data[3] || false,
                src = data[4],
                vhtml = '<div class="nekovideobox"><video class="nekovideo video-js vjs-default-skin" controls preload="none" width="' + width + '" height="' + height + '" poster="' + poster + '" data-setup=\'{"autoplay":' + autoplay + '}\' webkit-playsinline playsinline x5-playsinline x-webkit-airplay="allow" x5-video-player-type="h5" x5-video-player-fullscreen><source src="' + src + '" type="video/mp4" /></video></div>';
            $(this).after(vhtml).remove();
        });
        $.include('templates/web/images/css/video-js.css');
        if (M['device_type'] == 'd') {
            $.include("templates/web/images/js/video_hack.js", function() {
                setTimeout(function() {
                    $('.nekovideo').videoSizeRes();
                }, 0)
            });
        } else {
            $('.nekovideo').videoSizeRes();
        }
    }
    if ($('.neko-editor iframe,.neko-editor embed').length) $('.neko-editor iframe,.neko-editor embed').videoSizeRes();
});
// 全局函数
$.fn.extend({
    // 选项卡列表水平滚动处理（需调用swiper插件）
    navtabSwiper: function() {
        var $self = $(this),
            $navObj_p = $(this).parents('.subcolumn-nav'),
            navtabsDefault = function() {
                if (typeof Swiper == 'undefined') return false;
                var navObjW = $self.find('>li').parentWidth();
                if (navObjW > $self.parent().width()) {
                    // 添加或初始化水平滚动处理
                    if ($self.hasClass('swiper-wrapper')) {
                        if (!$self.hasClass('flex-start')) $self.addClass('flex-start');
                    } else {
                        $self
                            .addClass("swiper-wrapper flex-start")
                            .wrap("<div class=\"swiper-container swiper-navtab\"></div>").after('<div class="swiper-scrollbar"></div>')
                            .find(">li").addClass("swiper-slide");
                        var swiperNavtab = new Swiper('.swiper-navtab', {
                            slidesPerView: 'auto',
                            scrollbar: '.swiper-scrollbar',
                            scrollbarHide: false,
                            scrollbarDraggable: true
                        });
                    }
                    if ($navObj_p.length && $('.product-search').length) $navObj_p.height('auto').css({
                        'margin-bottom': 10
                    });
                    // 下拉菜单被隐藏特殊情况处理
                    if ($self.find('.dropdown').length && $(".swiper-navtab").length) {
                        if (!$(".swiper-navtab").hasClass('overflow-visible')) $(".swiper-navtab").addClass("overflow-visible");
                    }
                } else if ($self.hasClass('flex-start')) {
                    $self.removeClass('flex-start');
                    $navObj_p.css({
                        'margin-bottom': 0
                    });
                }
            };
        navtabsDefault();
        $(window).resize(function() {
            navtabsDefault();
        })
        // 移动端下拉菜单浮动方向
        Breakpoints.on('xs sm', {
            enter: function() {
                $self.find('.dropdown-menu').each(function() {
                    if ($(this).parent('li').offset().left > $(window).width() / 2 - $(this).parent('li').width() / 2) {
                        $(this).addClass('dropdown-menu-right');
                    }
                });
            }
        });
    },
    // 单张图片加载完成回调
    imageloadFunAlone: function(fun) {
        var img = new Image();
        img.src = $(this).data('original') || $(this).data('lazy') || $(this).attr('src');
        if (img.complete) {
            if (typeof fun === "function") fun();
            return;
        }
        img.onload = function() {
            if (typeof fun === "function") fun();
        };
    },
    // 图片加载完成回调
    imageloadFun: function(fun) {
        $(this).each(function() {
            if ($(this).data('lazy') || $(this).data('original')) { // 图片延迟加载时
                var thisimg = $(this),
                    loadtime = setInterval(function() {
                        if (thisimg.attr('src') == thisimg.data('original') || thisimg.attr('src') == thisimg.data('lazy')) {
                            clearInterval(loadtime);
                            thisimg.imageloadFunAlone(fun);
                        }
                    }, 100)
            } else if ($(this).attr('src')) {
                $(this).imageloadFunAlone(fun);
            }
        });
    },
    /**
     * imageSize 图片高度预设及删除
     * @param    {String} imgObj 目标图片类
     */
    imageSize: function(imgObj) {
        var imgObj = imgObj || 'img';
        $(this).each(function() {
            var scale = $(this).data('scale'),
                $self_scale = $(this),
                $img = $(imgObj, this),
                img_length = $img.length;
            if (!isNaN(scale)) scale = scale.toString();
            // 图片对象筛选
            for (var i = 0; i < img_length; i++) {
                for (var s = 0; s < $img.length; s++) {
                    if ($($img[s]).parents('[data-scale]').eq(0).index('[data-scale]') != $self_scale.index('[data-scale]')) {
                        $img.splice(s, 1);
                        break;
                    }
                }
                if (s == $img.length) break;
            }
            if ($img.length && scale.indexOf('x') >= 0) {
                scale = scale.split('x');
                scale = scale[0] / scale[1];
                // 图片高度预设
                if ($img.attr('src')) {
                    $img.height(Math.round($img.width() * scale));
                } else {
                    var time = setInterval(function() {
                        if ($img.attr('src')) {
                            $img.height(Math.round($img.width() * scale));
                            clearInterval(time);
                        }
                    }, 30);
                }
                $(window).resize(function() {
                    $img.each(function() {
                        if ($(this).is(':visible') && $(this).data('original') && $(this).attr('src') != $(this).data('original')) $(this).height(Math.round($(this).width() * scale));
                    })
                });
                // 图片高度删除
                $img.each(function() {
                    var $self = $(this);
                    $(this).imageloadFun(function() {
                        $self.height('').removeAttr('height');
                    })
                });
            }
        });
    },
    // 父元素宽度计算
    parentWidth: function(sonNum) {
        var sonTrueNum = $(this).length,
            parentObjW = 0;
        if (sonNum > sonTrueNum || !sonNum) sonNum = sonTrueNum;
        $(this).each(function(index, el) {
            var sonObjW = $(this).outerWidth() + parseInt($(this).css('marginLeft')) + parseInt($(this).css('marginRight'));
            parentObjW += sonObjW;
        });
        return parentObjW + sonNum;
    },
    /**
     * scrollFun 窗口距离触发
     * @param  {Number}  top            离窗口触发的距离，默认为30
     * @param  {Boolean} loop           是否循环触发，默认不循环触发
     * @param  {Boolean} skip_invisible 不可见元素的是否触发事件，默认不触发
     */
    scrollFun: function(fun, options) {
        if (typeof fun === "function") {
            options = $.extend({
                top: 30,
                loop: false,
                skip_invisible: true
            }, options);
            $(this).each(function() {
                var $self = $(this),
                    fun_open = true,
                    windowDistanceFun = function() { // 窗口距离触发回调
                        if (fun_open) {
                            var this_t = $self.offset().top,
                                scroll_t = $(window).scrollTop(),
                                this_scroll_t = this_t - scroll_t - $(window).height(),
                                this_scroll_b = this_t + $self.outerHeight() - scroll_t,
                                visible = options.skip_invisible ? $self.is(":visible") : true;
                            if (this_scroll_t < options.top && this_scroll_b > 0 && visible) {
                                if (!options.loop) fun_open = false;
                                fun($self);
                            }
                        }
                    };
                windowDistanceFun();
                // 滚动时窗口距离触发回调
                if (fun_open) {
                    $(window).scroll(function() {
                        if (fun_open) windowDistanceFun();
                    })
                }
            });
        }
    },
    /**
     * appearDiy 手动appear动画（需调用appear插件）
     */
    appearDiy: function() {
        if (typeof $.fn.appear != 'undefined') {
            setTimeout(function() {
                $(this).appear({
                    force_process: true,
                    interval: 0
                });
            }, 300);
        }
    },
    /**
     * galleryLoad 画廊（需调用lightGallery插件）
     * @param  {Array} dynamic 自定义图片数组
     */
    galleryLoad: function(dynamic) {
        if (typeof $.fn.lightGallery == 'undefined') return false;
        $("body").addClass("neko-lightgallery"); //画廊皮肤
        if (dynamic) {
            // 自定义图片数组
            $(this).lightGallery({
                loop: true,
                dynamic: true,
                dynamicEl: dynamic,
                thumbWidth: 64,
                thumbContHeight: 84
            });
        } else {
            // 默认加载画廊
            $(this).lightGallery({
                selector: '.lg-item-box:not(.slick-cloned)',
                exThumbImage: 'data-exthumbimage',
                thumbWidth: 64,
                thumbContHeight: 84,
                nextHtml: '<i class="iconfont icon-next"></i>',
                prevHtml: '<i class="iconfont icon-prev"></i>'
            });
        }
    },
    // 内页左右区块最小高度设置
    boxMh: function(boxmh_h) {
        if ($(this).length && $(boxmh_h).length) {
            var $self = $(this),
                $boxmh_h = $(boxmh_h),
                box_mh = function() {
                    var boxmh_mh_t = $self.offset().top,
                        boxmh_h_t = $boxmh_h.offset().top,
                        mh = $boxmh_h.outerHeight();
                    if (boxmh_mh_t == boxmh_h_t) { //两个区块并排时
                        if (mh != $boxmh_h.attr('data-height')) {
                            $boxmh_h.attr({
                                'data-height': mh
                            });
                            $self.css({
                                'min-height': mh
                            });
                        }
                    } else {
                        $boxmh_h.attr({
                            'data-height': ''
                        });
                        $self.css({
                            'min-height': ''
                        });
                    }
                };
            box_mh();
            setInterval(function() {
                box_mh();
            }, 50)
        }
    },
    // 视频尺寸自适应
    videoSizeRes: function() {
        $(this).each(function() {
            var $self = $(this),
                scale = $(this).attr('height') / $(this).attr('width'),
                width = $(this).width();
            if (!scale) scale = parseInt($(this).css('height')) / parseInt($(this).css('width'));
            if (scale) {
                $(this).height($(this).width() * scale);
                $(window).resize(function() {
                    if ($self.width() <= width) $self.height($self.width() * scale);
                });
            }
        });
    },
    // 表格响应式格式化（需调用tablesaw插件）
    tablexys: function() {
        var $self = $(this);
        $self.each(function() {
            if (!$(this).hasClass('tablesaw')) $(this).addClass('tablesaw table-striped table-bordered table-hover tablesaw-sortable tablesaw-swipe').attr({
                "data-tablesaw-mode": "swipe",
                'data-tablesaw-sortable': ''
            });
            var $editor = $(this).parents('.neko-editor');
            if ($(this).width() > $editor.width()) {
                $(this).css({
                    'max-width': $editor.width() - parseInt($editor.css('paddingLeft')) - parseInt($editor.css('paddingRight'))
                });
            }
        })
        Breakpoints.get('xs').on({
            enter: function() {
                $self.each(function() {
                    if (!$('thead', this).length) {
                        var td = $("tbody tr:eq(0) td", this),
                            th = '';
                        if (td.length == 0) td = $("tbody tr:eq(0) th", this);
                        td.each(function() {
                            th += $(this).prop('outerHTML');
                        });
                        if (th.indexOf('</td>') >= 0) th = th.replace(/<\/td>/g, '</th>');
                        if (th.indexOf('<td') >= 0) th = th.replace(/<td/g, '<th');
                        $(this).prepend("<thead><tr>" + th + "</tr></thead>");
                        $("tbody tr:eq(0)", this).remove();
                        $("td,th", this).attr('width', 'auto');
                    }
                });
                $(document).trigger("enhance.tablesaw");
            }
        });
    }
});
// 加载当前页面js
function nekoPageJs(js) {
    $('body').append('<script src="' + js + '"></script>');
}
// 执行模板UI自定义的函数
function nekoui(array) {
    for (var key in array) {
        if (typeof array[key] == 'string' && key == 'name') {
            NEKOUI[array[key]] = $('.' + array[key]);
        } else if (typeof array[key] == 'function') {
            array[key]();
        }
    }
}
window.NEKOUI = [];
window.NEKOUI_FUN = [];