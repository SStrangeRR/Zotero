var frontpage = function(t) {
var e = {};
function n(r) {
if (e[r]) return e[r].exports;
var o = e[r] = {
i: r,
l: !1,
exports: {}
};
return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
}
return n.m = t, n.c = e, n.d = function(t, e, r) {
n.o(t, e) || Object.defineProperty(t, e, {
enumerable: !0,
get: r
});
}, n.r = function(t) {
"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
value: "Module"
}), Object.defineProperty(t, "__esModule", {
value: !0
});
}, n.t = function(t, e) {
if (1 & e && (t = n(t)), 8 & e) return t;
if (4 & e && "object" == typeof t && t && t.__esModule) return t;
var r = Object.create(null);
if (n.r(r), Object.defineProperty(r, "default", {
enumerable: !0,
value: t
}), 2 & e && "string" != typeof t) for (var o in t) n.d(r, o, function(e) {
return t[e];
}.bind(null, o));
return r;
}, n.n = function(t) {
var e = t && t.__esModule ? function() {
return t.default;
} : function() {
return t;
};
return n.d(e, "a", e), e;
}, n.o = function(t, e) {
return Object.prototype.hasOwnProperty.call(t, e);
}, n.p = "/pack/", n(n.s = 406);
}({
0: function(t, e) {
t.exports = {
lang: "ru",
currency: {
code: "RUB",
sign: "₽"
},
env: "production",
ordersMail: "orders@javascript.info",
providers: [ {
name: "Facebook",
id: "facebook"
}, {
name: "Google+",
id: "google"
}, {
name: "Вконтакте",
id: "vkontakte"
}, {
name: "Github",
id: "github"
}, {
name: "Яндекс",
id: "yandex"
} ],
stripeKey: "pk_live_ukCHHaAAUHELtXYFa9EwbROW"
};
},
1: function(t, e, n) {
"use strict";
var r = new (n(5))("en"), o = console.error;
function i(t) {
return r.hasPhrase(s, t) || o("No such phrase", t), r.t.apply(r, [ s ].concat(Array.prototype.slice.call(arguments)));
}
t.exports = i;
var s = n(0).lang;
"en" !== s && r.setFallback(s, "en"), r.add = function() {
for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
return r.addPhrase.apply(r, [ s ].concat(e));
}, i.i18n = r;
},
10: function(t, e) {
t.exports = function() {
var t = document.cookie.match(/XSRF-TOKEN=([\w-]+)/);
return t ? t[1] : null;
};
},
107: function(t, e, n) {
function r(t) {
return function(t) {
if (Array.isArray(t)) {
for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
return n;
}
}(t) || function(t) {
if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t);
}(t) || function() {
throw new TypeError("Invalid attempt to spread non-iterable instance");
}();
}
var o = n(9), i = n(4), s = n(2), a = n(108), c = n(1), u = n(0).lang;
function l(t, e) {
if (t.elements.email.value) {
var n, a = t.elements.slug, u = r(a.querySelectorAll("option:checked")).map(function(t) {
return t.value;
});
if (u.length || (u = a.value), t.elements["subscribe-email"] && (n = !0), n || u.length) {
var l = {
email: t.elements.email.value,
slug: u
};
n && (l.replace = !0);
var f = i({
method: "POST",
url: t.action,
body: l
}), p = t.querySelector('[type="submit"]'), h = new o({
elem: p,
size: "small",
elemClass: "button_loading"
});
h.start(), p.disabled = !0, f.addEventListener("loadend", function() {
h.stop(), p.disabled = !1;
}), f.addEventListener("success", function(n) {
if (200 == this.status) {
new s.Success(n.result.message, "slow");
var r = t.elements.gaEvent && JSON.parse(t.elements.gaEvent.value);
r && window.ga("send", "event", r), e && e();
} else new s.Error(n.result.message);
});
} else new s.Error(c("newsletter.client.choose_newsletter"));
}
}
c.i18n.add("newsletter.client", n(110)("./" + u + ".yml")), e.initNewsletterForm = function() {
var t = document.querySelector("[data-newsletter-subscribe-form]");
if (t) {
var e = "hidden" === t.elements.email.type, n = t.querySelector(".multiselect");
if (n) {
var r = new a({
elem: n
}), o = t.querySelector('button[type="submit"]'), i = o.querySelector("span");
t.elements.slug && t.elements.slug.addEventListener("change", function() {
o.disabled = !r.getValues().length && !e, !r.getValues().length && e ? i.textContent = c("site.subscribe.button_unsubscribe") : i.textContent = c("site.subscribe.button");
});
}
t.onsubmit = function(e) {
e.preventDefault(), l(t);
};
}
}, e.initNewsletterLink = function() {
var t = document.querySelector("[data-newsletter-subscribe-link]");
t && (t.onclick = function(e) {
e.preventDefault();
var n = prompt(c("newsletter.client.email_please"), window.currentUser && window.currentUser.email || "");
n && i({
method: "POST",
url: "/newsletter/subscribe",
body: {
slug: t.dataset.slug,
email: n
}
}).addEventListener("success", function(e) {
if (200 == this.status) {
new s.Success(e.result.message, "slow");
var n = t.dataset.gaEvent && JSON.parse(t.dataset.gaEvent);
n && window.ga("send", "event", n);
} else new s.Error(e.result.message);
});
});
}, e.submitSubscribeForm = l;
},
108: function(t, e, n) {
function r(t) {
return function(t) {
if (Array.isArray(t)) {
for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
return n;
}
}(t) || function(t) {
if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t);
}(t) || function() {
throw new TypeError("Invalid attempt to spread non-iterable instance");
}();
}
function o(t, e) {
for (var n = 0; n < e.length; n++) {
var r = e[n];
r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
Object.defineProperty(t, r.key, r);
}
}
var i = n(1), s = n(48), a = function() {
function t(e) {
!function(t, e) {
if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}(this, t), this.elem = e.elem, this.select = this.elem.querySelector("select"), 
this.textContainer = this.elem.querySelector(".multiselect__active-button"), this.options = r(this.select.querySelectorAll("option")), 
this.defaultValue = this.textContainer.textContent, this.status = "closed", this.elem.querySelector(".multiselect__container").insertAdjacentHTML("beforeend", this.createDropdown()), 
this.setButtonTitle(), this.bindHandlers();
}
var e, n, a;
return e = t, (n = [ {
key: "createDropdown",
value: function() {
return "\n      <div class='multiselect__dropdown-container'>\n        <div class='multiselect__dropdown'>\n          ".concat(this.options.map(function(t) {
return "<div class='multiselect__item".concat(t.selected ? " multiselect__item_checked" : "", "' data-value='").concat(t.value, "'>\n                <span class='multiselect__item-title'>").concat(t.textContent + ("advanced" === t.value ? "<span class='multiselect__greyed-text'>".concat(i("site.subscribe.common_updates_text"), "</span>") : ""), "</span>\n              </div>");
}).join(""), "\n        </div>\n      </div>\n    ");
}
}, {
key: "bindHandlers",
value: function() {
this.textContainer.addEventListener("click", this.toggleDropdown.bind(this));
var t = !0, e = !1, n = void 0;
try {
for (var r, o = this.elem.querySelectorAll(".multiselect__item")[Symbol.iterator](); !(t = (r = o.next()).done); t = !0) {
r.value.addEventListener("click", this.onChange.bind(this));
}
} catch (t) {
e = !0, n = t;
} finally {
try {
t || null == o.return || o.return();
} finally {
if (e) throw n;
}
}
this.select.addEventListener("change", this.setButtonTitle.bind(this));
}
}, {
key: "toggleDropdown",
value: function(t) {
t.stopPropagation(), this.elem.classList.toggle("multiselect_opened"), this.toggleStatus(), 
"opened" === this.status && (this.boundCloseDropdown = this.closeDropdown.bind(this), 
document.addEventListener("click", this.boundCloseDropdown));
}
}, {
key: "toggleStatus",
value: function() {
"closed" === this.status ? this.status = "opened" : this.status = "closed";
}
}, {
key: "closeDropdown",
value: function(t) {
t.target.closest(".multiselect__dropdown-container") || (this.status = "closed", 
this.elem.classList.remove("multiselect_opened"), document.removeEventListener("click", this.boundCloseDropdown));
}
}, {
key: "onChange",
value: function(t) {
var e = t.target.closest(".multiselect__item");
e.classList.toggle("multiselect__item_checked"), this.options.filter(function(t) {
return t.value === e.getAttribute("data-value");
}).pop().selected = e.classList.contains("multiselect__item_checked"), this.select.dispatchEvent(new Event("change"));
}
}, {
key: "setButtonTitle",
value: function() {
var t = this.getValues();
1 === t.length && t.includes("advanced") ? this.textContainer.textContent = this.defaultValue : t.length ? this.textContainer.textContent = t.length + " " + s(t.length, i("site.subscribe.newsletters")) : this.textContainer.textContent = i("site.subscribe.no_selected");
}
}, {
key: "getValues",
value: function() {
return this.options.filter(function(t) {
return t.selected;
}).map(function(t) {
return t.value;
});
}
} ]) && o(e.prototype, n), a && o(e, a), t;
}();
t.exports = a;
},
11: function(t, e, n) {
var r = {
"./ru.yml": 12
};
function o(t) {
var e = i(t);
return n(e);
}
function i(t) {
if (!n.o(r, t)) {
var e = new Error("Cannot find module '" + t + "'");
throw e.code = "MODULE_NOT_FOUND", e;
}
return r[t];
}
o.keys = function() {
return Object.keys(r);
}, o.resolve = i, t.exports = o, o.id = 11;
},
110: function(t, e, n) {
var r = {
"./ru.yml": 111
};
function o(t) {
var e = i(t);
return n(e);
}
function i(t) {
if (!n.o(r, t)) {
var e = new Error("Cannot find module '" + t + "'");
throw e.code = "MODULE_NOT_FOUND", e;
}
return r[t];
}
o.keys = function() {
return Object.keys(r);
}, o.resolve = i, t.exports = o, o.id = 110;
},
111: function(t, e) {
t.exports = {
choose_newsletter: "Выберите рассылки из списка.",
email_please: "Ваш e-mail?"
};
},
12: function(t, e) {
t.exports = {
site: {
privacy_policy: "политика конфиденциальности",
terms: "пользовательское соглашение",
gdpr_dialog: {
title: "Этот сайт использует cookie",
text: 'Мы используем браузерные технологии, такие как cookie и local storage для хранения ваших предпочтений. Вы принимаете <a href="/privacy">политику конфиденциальности</a> и <a href="/terms">соглашение пользователя</a>?',
accept: "Принять",
cancel: "Отмена"
},
toolbar: {
lang_switcher: {
cta_text: 'Мы хотим сделать этот проект с открытым исходным кодом доступным для людей во всем мире. Пожалуйста, <a href="https://github.com/javascript-tutorial/translate" rel="noopener noreferrer" target="_blank">помогите нам перевести</a> это руководство на свой язык',
footer_text: "количество контента, переведенное на соотвествующий язык",
old_version: "Опубликована полная, но предыдущая версия учебника."
},
logo: {
normal: {
svg: "sitetoolbar__logo_ru.svg",
width: 171
},
"normal-white": {
svg: "sitetoolbar__logo_ru-white.svg"
},
small: {
svg: "sitetoolbar__logo_small_ru.svg",
width: 80
},
"small-white": {
svg: "sitetoolbar__logo_small_ru-white.svg"
}
},
sections: [ {
slug: "tutorial",
url: "/",
title: "Учебник"
}, {
slug: "courses",
title: "Курсы"
}, {
url: "https://javascript.ru/forum/",
title: "Форум"
}, {
url: "https://es5.javascript.ru",
title: "ES5"
}, {
slug: "quiz",
title: "Тесты знаний"
} ],
sections_bak: [ {
slug: "jobs",
title: "Стажировки"
} ],
buy_ebook_extra: "Купить",
buy_ebook: "EPUB/PDF",
search_placeholder: "Искать на Javascript.ru",
search_button: "Найти",
public_profile: "Публичный профиль",
account: "Аккаунт",
notifications: "Уведомления",
admin: "Админ",
logout: "Выйти"
},
sorry_old_browser: "Извините, IE<10 не поддерживается, пожалуйста используйте более новый браузер.",
contact_us: "связаться с нами",
about_the_project: "о проекте",
ilya_kantor: "Илья Кантор",
comments: "Комментарии",
loading: "Загружается...",
search: "Искать",
share: "Поделиться",
read_before_commenting: "перед тем как писать…",
last_updated_at: "Последнее обновление: #{date}",
"tablet-menu": {
choose_section: "Выберите раздел",
search_placeholder: "Поиск в учебнике",
search_button: "Поиск"
},
comment: {
help: [ 'Если вам кажется, что в статье что-то не так - вместо комментария напишите <a href="https://github.com/javascript-tutorial/ru.javascript.info/issues/new">на GitHub</a>.', "Для одной строки кода используйте тег <code>&lt;code&gt;</code>, для нескольких строк кода&nbsp;&mdash; тег <code>&lt;pre&gt;</code>, если больше 10 строк&nbsp;&mdash; ссылку на песочницу (<a href='https://plnkr.co/edit/?p=preview'>plnkr</a>, <a href='http://jsbin.com'>JSBin</a>, <a href='http://codepen.io'>codepen</a>…)", "Если что-то непонятно в статье&nbsp;&mdash; пишите, что именно и с какого места." ]
},
meta: {
description: "Современный учебник JavaScript, начиная с основ, включающий в себя много тонкостей и фишек JavaScript/DOM."
},
edit_on_github: "Редактировать на GitHub",
error: "ошибка",
close: "закрыть",
hide_forever: "не показывать",
hidden_forever: "Эта информация больше не будет выводиться.",
subscribe: {
title: "Следите за обновлениями javascript.ru",
text: "Мы не рассылаем рекламу, все только по делу. Вы сами выбираете, что получать:",
agreement: 'Подписываясь на рассылку, вы соглашаетесь с <a href="#{link}" target="_blank">пользовательским соглашением</a>.',
button: "Подписаться",
button_unsubscribe: "Отписаться от всех",
common_updates: "Общие обновления",
common_updates_text: "новые курсы, интенсивы, выпуски статей и скринкастов",
your_email: "ваш@email",
newsletters: "рассылка,рассылки,рассылок",
no_selected: "Не выбрано"
},
form: {
value_must_not_be_empty: "Значение не должно быть пустым.",
value_is_too_long: "Значение слишком длинное.",
value_is_too_short: "Значение слишком короткое.",
invalid_email: "Некорректный email.",
invalid_value: "Некорректное значение.",
invalid_autocomplete: "Пожалуйста, выберите значение из списка",
invalid_date: "Дата неверна, формат: дд.мм.гггг.",
invalid_range: "Такой даты здесь не может быть.",
save: "Сохранить",
upload_file: "Загрузить файл",
cancel: "Отмена",
server_error: "Ошибка загрузки, статус"
}
}
};
},
13: function(t, e, n) {
var r = {
"./ru.yml": 14
};
function o(t) {
var e = i(t);
return n(e);
}
function i(t) {
if (!n.o(r, t)) {
var e = new Error("Cannot find module '" + t + "'");
throw e.code = "MODULE_NOT_FOUND", e;
}
return r[t];
}
o.keys = function() {
return Object.keys(r);
}, o.resolve = i, t.exports = o, o.id = 13;
},
14: function(t, e) {
t.exports = {
server_connection_error: "Ошибка связи с сервером.",
server_request_timeout: "Превышено максимально допустимое время ожидания ответа от сервера.",
request_aborted: "Запрос был прерван.",
no_response: "Не получен ответ от сервера.",
server_error: "Ошибка на стороне сервера (код #{status}), попытайтесь позднее.",
invalid_format: "Некорректный формат ответа от сервера."
};
},
159: function(t, e, n) {},
2: function(t, e, n) {
"use strict";
function r(t) {
return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
return typeof t;
} : function(t) {
return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
})(t);
}
function o(t, e) {
return !e || "object" !== r(e) && "function" != typeof e ? function(t) {
if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
return t;
}(t) : e;
}
function i(t) {
return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
return t.__proto__ || Object.getPrototypeOf(t);
})(t);
}
function s(t, e) {
if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
t.prototype = Object.create(e && e.prototype, {
constructor: {
value: t,
writable: !0,
configurable: !0
}
}), e && a(t, e);
}
function a(t, e) {
return (a = Object.setPrototypeOf || function(t, e) {
return t.__proto__ = e, t;
})(t, e);
}
function c(t, e) {
if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function u(t, e) {
for (var n = 0; n < e.length; n++) {
var r = e[n];
r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
Object.defineProperty(t, r.key, r);
}
}
function l(t, e, n) {
return e && u(t.prototype, e), n && u(t, n), t;
}
n.r(e), n.d(e, "init", function() {
return h;
}), n.d(e, "Info", function() {
return v;
}), n.d(e, "Warning", function() {
return m;
}), n.d(e, "Success", function() {
return g;
}), n.d(e, "Error", function() {
return y;
});
var f = n(3), p = function() {
function t() {
var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
c(this, t), this.notifications = [], this.verticalSpace = e.verticalSpace || 8;
}
return l(t, [ {
key: "register",
value: function(t) {
var e = this;
this.notifications.unshift(t), setTimeout(function() {
return e.recalculate();
}, 20);
}
}, {
key: "unregister",
value: function(t) {
var e = this.notifications.indexOf(t);
this.notifications.splice(e, 1), this.recalculate();
}
}, {
key: "recalculate",
value: function() {
var t = this, e = this.verticalSpace;
this.notifications.forEach(function(n) {
n.top = e, e += n.height + t.verticalSpace;
});
}
} ]), t;
}();
function h(t) {
window.notificationManager || (window.notificationManager = new p(t));
}
var d = function() {
function t(e, n, r) {
c(this, t);
var o = '<div class="notification notification_popup notification_'.concat(n, '">\n    <div class="notification__content">').concat(e, '</div>\n    <button title="Закрыть" class="notification__close"></button></div>');
switch (document.body.insertAdjacentHTML("beforeEnd", o), this.elem = document.body.lastElementChild, 
r) {
case void 0:
this.timeout = this.TIMEOUT_DEFAULT;
break;

case "slow":
this.timeout = this.TIMEOUT_SLOW;
break;

case "fast":
this.timeout = this.TIMEOUT_FAST;
break;

default:
this.timeout = r;
}
window.notificationManager.register(this), this.setupCloseHandler(), this.setupCloseTimeout();
}
return l(t, [ {
key: "close",
value: function() {
this.elem.parentNode && (this.elem.remove(), window.notificationManager.unregister(this));
}
}, {
key: "setupCloseHandler",
value: function() {
var t = this;
this.delegate(".notification__close", "click", function() {
return t.close();
});
}
}, {
key: "setupCloseTimeout",
value: function() {
var t = this;
this.timeout && setTimeout(function() {
return t.close();
}, this.timeout);
}
}, {
key: "TIMEOUT_DEFAULT",
get: function() {
return 3e3;
}
}, {
key: "TIMEOUT_SLOW",
get: function() {
return 5e3;
}
}, {
key: "TIMEOUT_FAST",
get: function() {
return 1500;
}
}, {
key: "height",
get: function() {
return this.elem.offsetHeight;
}
}, {
key: "top",
set: function(t) {
this.elem.style.transform = "translateY(" + t + "px)";
}
} ]), t;
}();
f.delegateMixin(d.prototype);
var v = function(t) {
function e(t, n) {
return c(this, e), o(this, i(e).call(this, t, "info", n));
}
return s(e, d), e;
}(), m = function(t) {
function e(t, n) {
return c(this, e), o(this, i(e).call(this, t, "warning", n));
}
return s(e, d), e;
}(), g = function(t) {
function e(t, n) {
return c(this, e), o(this, i(e).call(this, t, "success", n));
}
return s(e, d), e;
}(), y = function(t) {
function e(t, n) {
return c(this, e), o(this, i(e).call(this, t, "error", n));
}
return s(e, d), l(e, [ {
key: "TIMEOUT_DEFAULT",
get: function() {
return 5e3;
}
} ]), e;
}();
},
3: function(t, e) {
function n(t, e, n, r, o) {
t.addEventListener(n, function(t) {
var n = function(t, e) {
for (var n = t.target; n; ) {
if (n.matches(e)) return n;
if (n == t.currentTarget) break;
n = n.parentElement;
}
return null;
}(t, e);
t.delegateTarget = n, n && r.call(o || this, t);
});
}
n.delegateMixin = function(t) {
t.delegate = function(t, e, r) {
n(this.elem, t, e, r, this);
};
}, t.exports = n;
},
4: function(t, e, n) {
var r = n(2), o = n(10), i = n(0).lang, s = n(1);
s.i18n.add("", n(11)("./" + i + ".yml")), s.i18n.add("error.network", n(13)("./" + i + ".yml")), 
document.addEventListener("xhrfail", function(t) {
new r.Error(t.reason);
}), t.exports = function(t) {
var e = new XMLHttpRequest(), n = t.method || "GET", r = t.body, i = t.url;
e.open(n, i, !t.sync), e.method = n;
var a = o();
a && !t.skipCsrf && e.setRequestHeader("X-XSRF-TOKEN", a), t.responseType && (e.responseType = t.responseType), 
"[object Object]" == {}.toString.call(r) && (e.setRequestHeader("Content-Type", "application/json;charset=UTF-8"), 
r = JSON.stringify(r)), t.noDocumentEvents || (e.addEventListener("loadstart", function(t) {
e.timeStart = Date.now();
var n = u("xhrstart", t);
document.dispatchEvent(n);
}), e.addEventListener("loadend", function(t) {
var e = u("xhrend", t);
document.dispatchEvent(e);
}), e.addEventListener("success", function(t) {
var e = u("xhrsuccess", t);
e.result = t.result, document.dispatchEvent(e);
}), e.addEventListener("fail", function(t) {
var e = u("xhrfail", t);
e.reason = t.reason, document.dispatchEvent(e);
})), t.raw || e.setRequestHeader("Accept", "application/json"), e.setRequestHeader("X-Requested-With", "XMLHttpRequest");
var c = t.normalStatuses || [ 200 ];
function u(t, e) {
var n = new CustomEvent(t);
return n.originalEvent = e, n;
}
function l(t, n) {
var r = u("fail", n);
r.reason = t, e.dispatchEvent(r);
}
return e.addEventListener("error", function(t) {
l(s("error.network.server_connection_error"), t);
}), e.addEventListener("timeout", function(t) {
l(s("error.network.server_request_timeout"), t);
}), e.addEventListener("abort", function(t) {
l(s("error.network.request_aborted"), t);
}), e.addEventListener("load", function(n) {
if (e.status) if (c.includes(e.status)) {
var r = t.responseType && "text" !== t.responseType ? e.response : e.responseText;
if ((e.getResponseHeader("Content-Type") || "").match(/^application\/json/) || t.json) try {
r = JSON.parse(r);
} catch (n) {
return void l(s("error.network.invalid_format"), n);
}
!function(t, n) {
var r = u("success", n);
r.result = t, e.dispatchEvent(r);
}(r, n);
} else l(s("error.network.server_error", {
status: e.status
}), n); else l(s("error.network.no_response"), n);
}), setTimeout(function() {
e.send(r);
}, 0), e;
};
},
406: function(t, e, n) {
n(407), t.exports = n(159);
},
407: function(t, e, n) {
n(107).initNewsletterForm();
},
48: function(t, e) {
t.exports = function(t, e) {
var n, r = (n = t) % 10 == 1 && n % 100 != 11 ? "one" : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14) && n == Math.floor(n) ? "few" : n % 10 == 0 || n % 10 >= 5 && n % 10 <= 9 || n % 100 >= 11 && n % 100 <= 14 && n == Math.floor(n) ? "many" : "other", o = e.split(",");
switch (r) {
case "one":
return o[0];

case "few":
return o[1];

case "many":
return o[2];

default:
throw new Error("Unsupported count: " + t);
}
};
},
5: function(t, e, n) {
t.exports = n(6);
},
6: function(t, e, n) {
"use strict";
function r(t) {
return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
return typeof t;
} : function(t) {
return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
})(t);
}
var o = n(7), i = n(8);
function s(t) {
return Object.prototype.toString.call(t);
}
function a(t) {
return "[object String]" === s(t);
}
function c(t) {
return !isNaN(t) && isFinite(t);
}
function u(t) {
return !0 === t || !1 === t;
}
function l(t) {
return "[object Object]" === s(t);
}
var f = Array.isArray || function(t) {
return "[object Array]" === s(t);
}, p = Array.prototype.forEach;
function h(t, e, n) {
if (null !== t) if (p && t.forEach === p) t.forEach(e, n); else if (t.length === +t.length) for (var r = 0, o = t.length; r < o; r += 1) e.call(n, t[r], r, t); else for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && e.call(n, t[i], i, t);
}
var d = /%[sdj%]/g;
function v(t) {
var e = 1, n = arguments, r = n.length;
return String(t).replace(d, function(t) {
if ("%%" === t) return "%";
if (e >= r) return t;
switch (t) {
case "%s":
return String(n[e++]);

case "%d":
return Number(n[e++]);

case "%j":
return JSON.stringify(n[e++]);

default:
return t;
}
});
}
var m = "en";
function g(t) {
var e = {};
return h(t || {}, function(t, n) {
t && "object" === r(t) ? h(g(t), function(t, r) {
e[n + "." + r] = t;
}) : e[n] = t;
}), e;
}
var y = "#@$";
function _(t, e) {
return t + y + e;
}
function b(t, e, n) {
var r = _(e, n), o = t._storage;
if (o.hasOwnProperty(r)) return r;
if (e === t._defaultLocale) return null;
var i = t._fallbacks_cache;
if (i.hasOwnProperty(r)) return i[r];
for (var s, a = t._fallbacks[e] || [ t._defaultLocale ], c = 0, u = a.length; c < u; c++) if (s = _(a[c], n), 
o.hasOwnProperty(s)) return i[r] = s, i[r];
return i[r] = null, null;
}
function w(t, e, n) {
var r = i.indexOf(t, e);
return -1 === r ? v('[pluralizer for "%s" locale not found]', t) : void 0 === n[r] ? v('[plural form %d ("%s") not found in translation]', r, i.forms(t)[r]) : n[r];
}
function k(t) {
if (!(this instanceof k)) return new k(t);
this._defaultLocale = t ? String(t) : m, this._fallbacks = {}, this._fallbacks_cache = {}, 
this._storage = {}, this._plurals_cache = {};
}
k.prototype.addPhrase = function(t, e, n, r) {
var o, i = this;
if (u(r)) o = r ? 1 / 0 : 0; else if (c(r)) {
if ((o = Math.floor(r)) < 0) throw new TypeError("Invalid flatten level (should be >= 0).");
} else o = 1 / 0;
if (l(n) && o > 0) return h(n, function(n, r) {
i.addPhrase(t, (e ? e + "." : "") + r, n, o - 1);
}), this;
if (a(n)) this._storage[_(t, e)] = {
translation: n,
locale: t,
raw: !1
}; else {
if (!(f(n) || c(n) || u(n) || 0 === o && l(n))) throw new TypeError("Invalid translation - [String|Object|Array|Number|Boolean] expected.");
this._storage[_(t, e)] = {
translation: n,
locale: t,
raw: !0
};
}
return i._fallbacks_cache = {}, this;
}, k.prototype.setFallback = function(t, e) {
var n = this._defaultLocale;
if (n === t) throw new Error("Default locale can't have fallbacks");
var r = f(e) ? e.slice() : [ e ];
return r[r.length - 1] !== n && r.push(n), this._fallbacks[t] = r, this._fallbacks_cache = {}, 
this;
};
var F = /#\{|\(\(|\\\\/;
k.prototype.translate = function(t, e, n) {
var r, i = b(this, t, e);
return i ? (r = this._storage[i]).raw ? r.translation : (r.hasOwnProperty("compiled") || (r.compiled = function(t, e, n) {
var r, i, s, a, c, u;
return F.test(e) ? 1 === (r = o.parse(e)).length && "literal" === r[0].type ? r[0].text : (t._plurals_cache[n] || (t._plurals_cache[n] = new k(n)), 
u = t._plurals_cache[n], (i = []).push([ 'var str = "", strict, strict_exec, forms, forms_exec, plrl, cache, loc, loc_plzr, anchor;' ]), 
i.push("params = flatten(params);"), h(r, function(t) {
if ("literal" !== t.type) {
if ("variable" === t.type) return s = t.anchor, void i.push(v('str += ("undefined" === typeof (params[%j])) ? "[missed variable: %s]" : params[%j];', s, s, s));
if ("plural" !== t.type) throw new Error("Unknown node type");
s = t.anchor, a = {}, h(t.strict, function(e, r) {
var i = o.parse(e);
if (1 === i.length && "literal" === i[0].type) return a[r] = !1, void (t.strict[r] = i[0].text);
a[r] = !0, u.hasPhrase(n, e, !0) || u.addPhrase(n, e, e);
}), c = {}, h(t.forms, function(e, r) {
var i, s = o.parse(e);
if (1 === s.length && "literal" === s[0].type) return i = s[0].text, t.forms[r] = i, 
void (c[i] = !1);
c[e] = !0, u.hasPhrase(n, e, !0) || u.addPhrase(n, e, e);
}), i.push(v("loc = %j;", n)), i.push(v("loc_plzr = %j;", n.split(/[-_]/)[0])), 
i.push(v("anchor = params[%j];", s)), i.push(v("cache = this._plurals_cache[loc];")), 
i.push(v("strict = %j;", t.strict)), i.push(v("strict_exec = %j;", a)), i.push(v("forms = %j;", t.forms)), 
i.push(v("forms_exec = %j;", c)), i.push("if (+(anchor) != anchor) {"), i.push(v('  str += "[invalid plurals amount: %s(" + anchor + ")]";', s)), 
i.push("} else {"), i.push("  if (strict[anchor] !== undefined) {"), i.push("    plrl = strict[anchor];"), 
i.push("    str += strict_exec[anchor] ? cache.t(loc, plrl, params) : plrl;"), i.push("  } else {"), 
i.push("    plrl = pluralizer(loc_plzr, +anchor, forms);"), i.push("    str += forms_exec[plrl] ? cache.t(loc, plrl, params) : plrl;"), 
i.push("  }"), i.push("}");
} else i.push(v("str += %j;", t.text));
}), i.push("return str;"), new Function("params", "flatten", "pluralizer", i.join("\n"))) : e;
}(this, r.translation, r.locale)), "[object Function]" !== s(r.compiled) ? r.compiled : ((c(n) || a(n)) && (n = {
count: n,
value: n
}), r.compiled.call(this, n, g, w))) : t + ": No translation for [" + e + "]";
}, k.prototype.hasPhrase = function(t, e, n) {
return n ? this._storage.hasOwnProperty(_(t, e)) : !!b(this, t, e);
}, k.prototype.getLocale = function(t, e, n) {
if (n) return this._storage.hasOwnProperty(_(t, e)) ? t : null;
var r = b(this, t, e);
return r ? r.split(y, 2)[0] : null;
}, k.prototype.t = k.prototype.translate, k.prototype.stringify = function(t) {
var e = this, n = {};
h(this._storage, function(t, e) {
n[e.split(y)[1]] = !0;
});
var r = {};
h(n, function(n, o) {
var i = b(e, t, o);
if (i) {
var s = e._storage[i].locale;
r[s] || (r[s] = {}), r[s][o] = e._storage[i].translation;
}
});
var o = {
fallback: {},
locales: r
}, i = (e._fallbacks[t] || []).slice(0, -1);
return i.length && (o.fallback[t] = i), JSON.stringify(o);
}, k.prototype.load = function(t) {
var e = this;
return a(t) && (t = JSON.parse(t)), h(t.locales, function(t, n) {
h(t, function(t, r) {
e.addPhrase(n, r, t, 0);
});
}), h(t.fallback, function(t, n) {
e.setFallback(n, t);
}), this;
}, t.exports = k;
},
7: function(t, e) {
t.exports = function() {
function t(t, e, n, r, o, i) {
this.message = t, this.expected = e, this.found = n, this.offset = r, this.line = o, 
this.column = i, this.name = "SyntaxError";
}
return function(t, e) {
function n() {
this.constructor = t;
}
n.prototype = e.prototype, t.prototype = new n();
}(t, Error), {
SyntaxError: t,
parse: function(e) {
var n, r = arguments.length > 1 ? arguments[1] : {}, o = {}, i = {
start: lt
}, s = lt, a = o, c = "((", u = {
type: "literal",
value: "((",
description: '"(("'
}, l = "))", f = {
type: "literal",
value: "))",
description: '"))"'
}, p = null, h = function(t, e) {
return {
type: "plural",
forms: function(t) {
for (var e = [], n = 0; n < t.length; n++) void 0 === t[n].strict && e.push(t[n].text);
return e;
}(t),
strict: function(t) {
for (var e = {}, n = 0; n < t.length; n++) void 0 !== t[n].strict && (e[t[n].strict] = t[n].text);
return e;
}(t),
anchor: e || "count"
};
}, d = "|", v = {
type: "literal",
value: "|",
description: '"|"'
}, m = function(t, e) {
return [ t ].concat(e);
}, g = function(t) {
return [ t ];
}, y = "=", _ = {
type: "literal",
value: "=",
description: '"="'
}, b = /^[0-9]/, w = {
type: "class",
value: "[0-9]",
description: "[0-9]"
}, k = " ", F = {
type: "literal",
value: " ",
description: '" "'
}, x = function(t, e) {
return {
strict: t.join(""),
text: e.join("")
};
}, E = function() {
return {
text: st()
};
}, j = "\\", S = {
type: "literal",
value: "\\",
description: '"\\\\"'
}, O = /^[\\|)(]/, A = {
type: "class",
value: "[\\\\|)(]",
description: "[\\\\|)(]"
}, C = function(t) {
return t;
}, T = void 0, L = {
type: "any",
description: "any character"
}, P = function() {
return st();
}, z = ":", M = {
type: "literal",
value: ":",
description: '":"'
}, q = function(t) {
return t;
}, U = "#{", D = {
type: "literal",
value: "#{",
description: '"#{"'
}, N = "}", R = {
type: "literal",
value: "}",
description: '"}"'
}, H = function(t) {
return {
type: "variable",
anchor: t
};
}, I = ".", J = {
type: "literal",
value: ".",
description: '"."'
}, $ = function() {
return st();
}, B = /^[a-zA-Z_$]/, X = {
type: "class",
value: "[a-zA-Z_$]",
description: "[a-zA-Z_$]"
}, V = /^[a-zA-Z0-9_$]/, Z = {
type: "class",
value: "[a-zA-Z0-9_$]",
description: "[a-zA-Z0-9_$]"
}, G = function(t) {
return t;
}, W = function(t) {
return {
type: "literal",
text: t.join("")
};
}, K = /^[\\#()|]/, Y = {
type: "class",
value: "[\\\\#()|]",
description: "[\\\\#()|]"
}, Q = 0, tt = 0, et = 0, nt = {
line: 1,
column: 1,
seenCR: !1
}, rt = 0, ot = [], it = 0;
if ("startRule" in r) {
if (!(r.startRule in i)) throw new Error("Can't start parsing from rule \"" + r.startRule + '".');
s = i[r.startRule];
}
function st() {
return e.substring(tt, Q);
}
function at(t) {
return et !== t && (et > t && (et = 0, nt = {
line: 1,
column: 1,
seenCR: !1
}), function(t, n, r) {
var o, i;
for (o = n; o < r; o++) "\n" === (i = e.charAt(o)) ? (t.seenCR || t.line++, t.column = 1, 
t.seenCR = !1) : "\r" === i || "\u2028" === i || "\u2029" === i ? (t.line++, t.column = 1, 
t.seenCR = !0) : (t.column++, t.seenCR = !1);
}(nt, et, t), et = t), nt;
}
function ct(t) {
Q < rt || (Q > rt && (rt = Q, ot = []), ot.push(t));
}
function ut(n, r, o) {
var i = at(o), s = o < e.length ? e.charAt(o) : null;
return null !== r && function(t) {
var e = 1;
for (t.sort(function(t, e) {
return t.description < e.description ? -1 : t.description > e.description ? 1 : 0;
}); e < t.length; ) t[e - 1] === t[e] ? t.splice(e, 1) : e++;
}(r), new t(null !== n ? n : function(t, e) {
var n, r = new Array(t.length);
for (n = 0; n < t.length; n++) r[n] = t[n].description;
return "Expected " + (t.length > 1 ? r.slice(0, -1).join(", ") + " or " + r[t.length - 1] : r[0]) + " but " + (e ? '"' + function(t) {
function e(t) {
return t.charCodeAt(0).toString(16).toUpperCase();
}
return t.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\x08/g, "\\b").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\f/g, "\\f").replace(/\r/g, "\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(t) {
return "\\x0" + e(t);
}).replace(/[\x10-\x1F\x80-\xFF]/g, function(t) {
return "\\x" + e(t);
}).replace(/[\u0180-\u0FFF]/g, function(t) {
return "\\u0" + e(t);
}).replace(/[\u1080-\uFFFF]/g, function(t) {
return "\\u" + e(t);
});
}(e) + '"' : "end of input") + " found.";
}(r, s), r, s, o, i.line, i.column);
}
function lt() {
var t, e;
for (t = [], (e = gt()) === o && (e = ft()) === o && (e = dt()); e !== o; ) t.push(e), 
(e = gt()) === o && (e = ft()) === o && (e = dt());
return t;
}
function ft() {
var t, n, r, i, s;
return t = Q, e.substr(Q, 2) === c ? (n = c, Q += 2) : (n = o, 0 === it && ct(u)), 
n !== o && (r = function t() {
var n, r, i, s;
return n = Q, (r = pt()) !== o ? (124 === e.charCodeAt(Q) ? (i = d, Q++) : (i = o, 
0 === it && ct(v)), i !== o && (s = t()) !== o ? (tt = n, r = m(r, s), n = r) : (Q = n, 
n = a)) : (Q = n, n = a), n === o && (n = Q, (r = pt()) !== o && (tt = n, r = g(r)), 
n = r), n;
}()) !== o ? (e.substr(Q, 2) === l ? (i = l, Q += 2) : (i = o, 0 === it && ct(f)), 
i !== o ? ((s = function() {
var t, n, r;
return t = Q, 58 === e.charCodeAt(Q) ? (n = z, Q++) : (n = o, 0 === it && ct(M)), 
n !== o && (r = vt()) !== o ? (tt = t, n = q(r), t = n) : (Q = t, t = a), t;
}()) === o && (s = p), s !== o ? (tt = t, t = n = h(r, s)) : (Q = t, t = a)) : (Q = t, 
t = a)) : (Q = t, t = a), t;
}
function pt() {
var t, n, r, i, s, c;
if (t = Q, 61 === e.charCodeAt(Q) ? (n = y, Q++) : (n = o, 0 === it && ct(_)), n !== o) {
if (r = [], b.test(e.charAt(Q)) ? (i = e.charAt(Q), Q++) : (i = o, 0 === it && ct(w)), 
i !== o) for (;i !== o; ) r.push(i), b.test(e.charAt(Q)) ? (i = e.charAt(Q), Q++) : (i = o, 
0 === it && ct(w)); else r = a;
if (r !== o) if (32 === e.charCodeAt(Q) ? (i = k, Q++) : (i = o, 0 === it && ct(F)), 
i === o && (i = p), i !== o) {
if (s = [], (c = ht()) !== o) for (;c !== o; ) s.push(c), c = ht(); else s = a;
s !== o ? (tt = t, t = n = x(r, s)) : (Q = t, t = a);
} else Q = t, t = a; else Q = t, t = a;
} else Q = t, t = a;
if (t === o) {
if (t = Q, n = [], (r = ht()) !== o) for (;r !== o; ) n.push(r), r = ht(); else n = a;
n !== o && (tt = t, n = E()), t = n;
}
return t;
}
function ht() {
var t, n, r;
return t = Q, 92 === e.charCodeAt(Q) ? (n = j, Q++) : (n = o, 0 === it && ct(S)), 
n !== o ? (O.test(e.charAt(Q)) ? (r = e.charAt(Q), Q++) : (r = o, 0 === it && ct(A)), 
r !== o ? (tt = t, t = n = C(r)) : (Q = t, t = a)) : (Q = t, t = a), t === o && (t = Q, 
n = Q, it++, 124 === e.charCodeAt(Q) ? (r = d, Q++) : (r = o, 0 === it && ct(v)), 
r === o && (e.substr(Q, 2) === l ? (r = l, Q += 2) : (r = o, 0 === it && ct(f))), 
it--, r === o ? n = T : (Q = n, n = a), n !== o ? (e.length > Q ? (r = e.charAt(Q), 
Q++) : (r = o, 0 === it && ct(L)), r !== o ? (tt = t, t = n = P()) : (Q = t, t = a)) : (Q = t, 
t = a)), t;
}
function dt() {
var t, n, r, i;
return t = Q, e.substr(Q, 2) === U ? (n = U, Q += 2) : (n = o, 0 === it && ct(D)), 
n !== o && (r = vt()) !== o ? (125 === e.charCodeAt(Q) ? (i = N, Q++) : (i = o, 
0 === it && ct(R)), i !== o ? (tt = t, t = n = H(r)) : (Q = t, t = a)) : (Q = t, 
t = a), t;
}
function vt() {
var t, n, r, i;
if (t = Q, mt() !== o) if (46 === e.charCodeAt(Q) ? (n = I, Q++) : (n = o, 0 === it && ct(J)), 
n !== o) {
if (r = [], (i = vt()) !== o) for (;i !== o; ) r.push(i), i = vt(); else r = a;
r !== o ? (tt = t, t = $()) : (Q = t, t = a);
} else Q = t, t = a; else Q = t, t = a;
return t === o && (t = mt()), t;
}
function mt() {
var t, n, r, i;
if (t = Q, B.test(e.charAt(Q)) ? (n = e.charAt(Q), Q++) : (n = o, 0 === it && ct(X)), 
n !== o) {
for (r = [], V.test(e.charAt(Q)) ? (i = e.charAt(Q), Q++) : (i = o, 0 === it && ct(Z)); i !== o; ) r.push(i), 
V.test(e.charAt(Q)) ? (i = e.charAt(Q), Q++) : (i = o, 0 === it && ct(Z));
r !== o ? (tt = t, t = n = P()) : (Q = t, t = a);
} else Q = t, t = a;
return t;
}
function gt() {
var t, e, n, r, i;
if (t = Q, e = [], n = Q, r = Q, it++, (i = ft()) === o && (i = dt()), it--, i === o ? r = T : (Q = r, 
r = a), r !== o && (i = yt()) !== o ? (tt = n, n = r = G(i)) : (Q = n, n = a), n !== o) for (;n !== o; ) e.push(n), 
n = Q, r = Q, it++, (i = ft()) === o && (i = dt()), it--, i === o ? r = T : (Q = r, 
r = a), r !== o && (i = yt()) !== o ? (tt = n, n = r = G(i)) : (Q = n, n = a); else e = a;
return e !== o && (tt = t, e = W(e)), t = e;
}
function yt() {
var t, n, r;
return t = Q, 92 === e.charCodeAt(Q) ? (n = j, Q++) : (n = o, 0 === it && ct(S)), 
n !== o ? (K.test(e.charAt(Q)) ? (r = e.charAt(Q), Q++) : (r = o, 0 === it && ct(Y)), 
r !== o ? (tt = t, t = n = C(r)) : (Q = t, t = a)) : (Q = t, t = a), t === o && (e.length > Q ? (t = e.charAt(Q), 
Q++) : (t = o, 0 === it && ct(L))), t;
}
if ((n = s()) !== o && Q === e.length) return n;
throw n !== o && Q < e.length && ct({
type: "end",
description: "end of input"
}), ut(null, ot, rt);
}
};
}();
},
8: function(t, e, n) {
"use strict";
var r = {};
function o(t) {
var e;
return r[t] ? t : (e = t.toLowerCase().replace("_", "-"), r[e] ? e : (e = e.split("-")[0], 
r[e] ? e : null));
}
function i(t, e) {
var n = o(t);
if (!n) return -1;
if (!r[n].cFn) return 0;
var i = String(e), s = i.indexOf(".") < 0 ? "" : i.split(".")[1], a = s.length, c = +e, u = +i.split(".")[0], l = 0 === s.length ? 0 : +s.replace(/0+$/, "");
return r[n].cFn(c, u, a, +s, l);
}
function s(t, e) {
var n = o(t);
if (!n) return -1;
if (!r[n].oFn) return 0;
var i = String(e), s = i.indexOf(".") < 0 ? "" : i.split(".")[1], a = s.length, c = +e, u = +i.split(".")[0], l = 0 === s.length ? 0 : +s.replace(/0+$/, "");
return r[n].oFn(c, u, a, +s, l);
}
t.exports = function(t, e) {
var n = o(t);
return n ? r[n].c[i(n, e)] : null;
}, t.exports.indexOf = i, t.exports.forms = function(t) {
var e = o(t);
return r[e] ? r[e].c : null;
}, t.exports.ordinal = function(t, e) {
var n = o(t);
return r[n] ? r[n].o[s(n, e)] : null;
}, t.exports.ordinal.indexOf = s, t.exports.ordinal.forms = function(t) {
var e = o(t);
return r[e] ? r[e].o : null;
};
var a = [ "zero", "one", "two", "few", "many", "other" ];
function c(t) {
return a[t];
}
function u(t, e) {
var n;
for (e.c = e.c ? e.c.map(c) : [ "other" ], e.o = e.o ? e.o.map(c) : [ "other" ], 
n = 0; n < t.length; n++) r[t[n]] = e;
}
function l(t, e, n) {
return t <= n && n <= e && n % 1 == 0;
}
function f(t, e) {
return t.indexOf(e) >= 0;
}
u([ "af", "asa", "bem", "bez", "bg", "brx", "ce", "cgg", "chr", "ckb", "dv", "ee", "el", "eo", "es", "eu", "fo", "fur", "gsw", "ha", "haw", "jgo", "jmc", "kaj", "kcg", "kkj", "kl", "ks", "ksb", "ku", "ky", "lb", "lg", "mas", "mgo", "ml", "mn", "nah", "nb", "nd", "nn", "nnh", "no", "nr", "ny", "nyn", "om", "or", "os", "pap", "ps", "rm", "rof", "rwk", "saq", "sdh", "seh", "sn", "so", "ss", "ssy", "st", "syr", "ta", "te", "teo", "tig", "tk", "tn", "tr", "ts", "ug", "uz", "ve", "vo", "vun", "wae", "xh", "xog" ], {
c: [ 1, 5 ],
cFn: function(t) {
return 1 === t ? 0 : 1;
}
}), u([ "ak", "bh", "guw", "ln", "mg", "nso", "pa", "ti", "wa" ], {
c: [ 1, 5 ],
cFn: function(t) {
return l(0, 1, t) ? 0 : 1;
}
}), u([ "am", "fa", "kn", "zu" ], {
c: [ 1, 5 ],
cFn: function(t, e) {
return 0 === e || 1 === t ? 0 : 1;
}
}), u([ "ar", "ars" ], {
c: [ 0, 1, 2, 3, 4, 5 ],
cFn: function(t) {
var e = t % 100;
return 0 === t ? 0 : 1 === t ? 1 : 2 === t ? 2 : l(3, 10, e) ? 3 : l(11, 99, e) ? 4 : 5;
}
}), u([ "as", "bn" ], {
c: [ 1, 5 ],
cFn: function(t, e) {
return 0 === e || 1 === t ? 0 : 1;
},
o: [ 1, 2, 3, 4, 5 ],
oFn: function(t) {
return f([ 1, 5, 7, 8, 9, 10 ], t) ? 0 : f([ 2, 3 ], t) ? 1 : 4 === t ? 2 : 6 === t ? 3 : 4;
}
}), u([ "ast", "de", "et", "fi", "fy", "gl", "ji", "nl", "sw", "ur", "yi" ], {
c: [ 1, 5 ],
cFn: function(t, e, n) {
return 1 === e && 0 === n ? 0 : 1;
}
}), u([ "az" ], {
c: [ 1, 5 ],
cFn: function(t) {
return 1 === t ? 0 : 1;
},
o: [ 1, 3, 4, 5 ],
oFn: function(t, e) {
var n = e % 10, r = e % 100, o = e % 1e3;
return f([ 1, 2, 5, 7, 8 ], n) || f([ 20, 50, 70, 80 ], r) ? 0 : f([ 3, 4 ], n) || f([ 100, 200, 300, 400, 500, 600, 700, 800, 900 ], o) ? 1 : 0 === e || 6 === n || f([ 40, 60, 90 ], r) ? 2 : 3;
}
}), u([ "be" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(t) {
var e = t % 10, n = t % 100;
return 1 === e && 11 !== n ? 0 : l(2, 4, e) && !l(12, 14, n) ? 1 : 0 === e || l(5, 9, e) || l(11, 14, n) ? 2 : 3;
},
o: [ 3, 5 ],
oFn: function(t) {
var e = t % 100;
return f([ 2, 3 ], t % 10) && !f([ 12, 13 ], e) ? 0 : 1;
}
}), u([ "bm", "bo", "dz", "id", "ig", "ii", "in", "ja", "jbo", "jv", "jw", "kde", "kea", "km", "ko", "lkt", "my", "nqo", "root", "sah", "ses", "sg", "th", "to", "wo", "yo", "yue", "zh" ], {}), 
u([ "br" ], {
c: [ 1, 2, 3, 4, 5 ],
cFn: function(t) {
var e = t % 10, n = t % 100, r = t % 1e6;
return 1 !== e || f([ 11, 71, 91 ], n) ? 2 !== e || f([ 12, 72, 92 ], n) ? !l(3, 4, e) && 9 !== e || l(10, 19, n) || l(70, 79, n) || l(90, 99, n) ? 0 !== t && 0 === r ? 3 : 4 : 2 : 1 : 0;
}
}), u([ "bs", "hr", "sh", "sr" ], {
c: [ 1, 3, 5 ],
cFn: function(t, e, n, r) {
var o = e % 10, i = e % 100, s = r % 10, a = r % 100;
return 0 === n && 1 === o && 11 !== i || 1 === s && 11 !== a ? 0 : 0 === n && l(2, 4, o) && !l(12, 14, i) || l(2, 4, s) && !l(12, 14, a) ? 1 : 2;
}
}), u([ "ca" ], {
c: [ 1, 5 ],
cFn: function(t, e, n) {
return 1 === e && 0 === n ? 0 : 1;
},
o: [ 1, 2, 3, 5 ],
oFn: function(t) {
return f([ 1, 3 ], t) ? 0 : 2 === t ? 1 : 4 === t ? 2 : 3;
}
}), u([ "cs", "sk" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(t, e, n) {
return 1 === e && 0 === n ? 0 : l(2, 4, e) && 0 === n ? 1 : 0 !== n ? 2 : 3;
}
}), u([ "cy" ], {
c: [ 0, 1, 2, 3, 4, 5 ],
cFn: function(t) {
return 0 === t ? 0 : 1 === t ? 1 : 2 === t ? 2 : 3 === t ? 3 : 6 === t ? 4 : 5;
},
o: [ 0, 1, 2, 3, 4, 5 ],
oFn: function(t) {
return f([ 0, 7, 8, 9 ], t) ? 0 : 1 === t ? 1 : 2 === t ? 2 : f([ 3, 4 ], t) ? 3 : f([ 5, 6 ], t) ? 4 : 5;
}
}), u([ "da" ], {
c: [ 1, 5 ],
cFn: function(t, e, n, r, o) {
return 1 === t || 0 !== o && f([ 0, 1 ], e) ? 0 : 1;
}
}), u([ "dsb", "hsb" ], {
c: [ 1, 2, 3, 5 ],
cFn: function(t, e, n, r) {
var o = e % 100, i = r % 100;
return 0 === n && 1 === o || 1 === i ? 0 : 0 === n && 2 === o || 2 === i ? 1 : 0 === n && l(3, 4, o) || l(3, 4, i) ? 2 : 3;
}
}), u([ "en" ], {
c: [ 1, 5 ],
cFn: function(t, e, n) {
return 1 === e && 0 === n ? 0 : 1;
},
o: [ 1, 2, 3, 5 ],
oFn: function(t) {
var e = t % 10, n = t % 100;
return 1 === e && 11 !== n ? 0 : 2 === e && 12 !== n ? 1 : 3 === e && 13 !== n ? 2 : 3;
}
}), u([ "ff", "kab" ], {
c: [ 1, 5 ],
cFn: function(t, e) {
return f([ 0, 1 ], e) ? 0 : 1;
}
}), u([ "fil", "tl" ], {
c: [ 1, 5 ],
cFn: function(t, e, n, r) {
var o = e % 10, i = r % 10;
return 0 === n && f([ 1, 2, 3 ], e) || 0 === n && !f([ 4, 6, 9 ], o) || 0 !== n && !f([ 4, 6, 9 ], i) ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(t) {
return 1 === t ? 0 : 1;
}
}), u([ "fr", "hy" ], {
c: [ 1, 5 ],
cFn: function(t, e) {
return f([ 0, 1 ], e) ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(t) {
return 1 === t ? 0 : 1;
}
}), u([ "ga" ], {
c: [ 1, 2, 3, 4, 5 ],
cFn: function(t) {
return 1 === t ? 0 : 2 === t ? 1 : l(3, 6, t) ? 2 : l(7, 10, t) ? 3 : 4;
},
o: [ 1, 5 ],
oFn: function(t) {
return 1 === t ? 0 : 1;
}
}), u([ "gd" ], {
c: [ 1, 2, 3, 5 ],
cFn: function(t) {
return f([ 1, 11 ], t) ? 0 : f([ 2, 12 ], t) ? 1 : l(3, 10, t) || l(13, 19, t) ? 2 : 3;
}
}), u([ "gu", "hi" ], {
c: [ 1, 5 ],
cFn: function(t, e) {
return 0 === e || 1 === t ? 0 : 1;
},
o: [ 1, 2, 3, 4, 5 ],
oFn: function(t) {
return 1 === t ? 0 : f([ 2, 3 ], t) ? 1 : 4 === t ? 2 : 6 === t ? 3 : 4;
}
}), u([ "gv" ], {
c: [ 1, 2, 3, 4, 5 ],
cFn: function(t, e, n) {
var r = e % 10;
return 0 === n && 1 === r ? 0 : 0 === n && 2 === r ? 1 : 0 === n && f([ 0, 20, 40, 60, 80 ], e % 100) ? 2 : 0 !== n ? 3 : 4;
}
}), u([ "he", "iw" ], {
c: [ 1, 2, 4, 5 ],
cFn: function(t, e, n) {
var r = t % 10;
return 1 === e && 0 === n ? 0 : 2 === e && 0 === n ? 1 : 0 !== n || l(0, 10, t) || 0 !== r ? 3 : 2;
}
}), u([ "hu" ], {
c: [ 1, 5 ],
cFn: function(t) {
return 1 === t ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(t) {
return f([ 1, 5 ], t) ? 0 : 1;
}
}), u([ "is" ], {
c: [ 1, 5 ],
cFn: function(t, e, n, r, o) {
return 0 === o && 1 === e % 10 && 11 !== e % 100 || 0 !== o ? 0 : 1;
}
}), u([ "it" ], {
c: [ 1, 5 ],
cFn: function(t, e, n) {
return 1 === e && 0 === n ? 0 : 1;
},
o: [ 4, 5 ],
oFn: function(t) {
return f([ 11, 8, 80, 800 ], t) ? 0 : 1;
}
}), u([ "iu", "kw", "naq", "se", "sma", "smi", "smj", "smn", "sms" ], {
c: [ 1, 2, 5 ],
cFn: function(t) {
return 1 === t ? 0 : 2 === t ? 1 : 2;
}
}), u([ "ka" ], {
c: [ 1, 5 ],
cFn: function(t) {
return 1 === t ? 0 : 1;
},
o: [ 1, 4, 5 ],
oFn: function(t, e) {
var n = e % 100;
return 1 === e ? 0 : 0 === e || l(2, 20, n) || 40 === n || 60 === n || 80 === n ? 1 : 2;
}
}), u([ "kk" ], {
c: [ 1, 5 ],
cFn: function(t) {
return 1 === t ? 0 : 1;
},
o: [ 4, 5 ],
oFn: function(t) {
var e = t % 10;
return 6 === e || 9 === e || 0 === e && 0 !== t ? 0 : 1;
}
}), u([ "ksh" ], {
c: [ 0, 1, 5 ],
cFn: function(t) {
return 0 === t ? 0 : 1 === t ? 1 : 2;
}
}), u([ "lag" ], {
c: [ 0, 1, 5 ],
cFn: function(t, e) {
return 0 === t ? 0 : f([ 0, 1 ], e) && 0 !== t ? 1 : 2;
}
}), u([ "lo", "ms", "vi" ], {
o: [ 1, 5 ],
oFn: function(t) {
return 1 === t ? 0 : 1;
}
}), u([ "lt" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(t, e, n, r) {
var o = t % 10, i = t % 100;
return 1 !== o || l(11, 19, i) ? l(2, 9, o) && !l(11, 19, i) ? 1 : 0 !== r ? 2 : 3 : 0;
}
}), u([ "lv", "prg" ], {
c: [ 0, 1, 5 ],
cFn: function(t, e, n, r) {
var o = t % 10, i = t % 100, s = r % 100, a = r % 10;
return 0 === o || l(11, 19, i) || 2 === n && l(11, 19, s) ? 0 : 1 === o && 11 !== i || 2 === n && 1 === a && 11 !== s || 2 !== n && 1 === a ? 1 : 2;
}
}), u([ "mk" ], {
c: [ 1, 5 ],
cFn: function(t, e, n, r) {
return 0 === n && 1 === e % 10 || 1 === r % 10 ? 0 : 1;
},
o: [ 1, 2, 4, 5 ],
oFn: function(t, e) {
var n = e % 10, r = e % 100;
return 1 === n && 11 !== r ? 0 : 2 === n && 12 !== r ? 1 : f([ 7, 8 ], n) && !f([ 17, 18 ], r) ? 2 : 3;
}
}), u([ "mo", "ro" ], {
c: [ 1, 3, 5 ],
cFn: function(t, e, n) {
return 1 === e && 0 === n ? 0 : 0 !== n || 0 === t || 1 !== t && l(1, 19, t % 100) ? 1 : 2;
},
o: [ 1, 5 ],
oFn: function(t) {
return 1 === t ? 0 : 1;
}
}), u([ "mr" ], {
c: [ 1, 5 ],
cFn: function(t, e) {
return 0 === e || 1 === t ? 0 : 1;
},
o: [ 1, 2, 3, 5 ],
oFn: function(t) {
return 1 === t ? 0 : f([ 2, 3 ], t) ? 1 : 4 === t ? 2 : 3;
}
}), u([ "mt" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(t) {
var e = t % 100;
return 1 === t ? 0 : 0 === t || l(2, 10, e) ? 1 : l(11, 19, e) ? 2 : 3;
}
}), u([ "ne" ], {
c: [ 1, 5 ],
cFn: function(t) {
return 1 === t ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(t) {
return l(1, 4, t) ? 0 : 1;
}
}), u([ "pl" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(t, e, n) {
var r = e % 10, o = e % 100;
return 1 === e && 0 === n ? 0 : 0 === n && l(2, 4, r) && !l(12, 14, o) ? 1 : 0 === n && 1 !== e && l(0, 1, r) || 0 === n && l(5, 9, r) || 0 === n && l(12, 14, o) ? 2 : 3;
}
}), u([ "pt" ], {
c: [ 1, 5 ],
cFn: function(t) {
return l(0, 2, t) && 2 !== t ? 0 : 1;
}
}), u([ "pt-pt" ], {
c: [ 1, 5 ],
cFn: function(t, e, n) {
return 1 === t && 0 === n ? 0 : 1;
}
}), u([ "ru" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(t, e, n) {
var r = e % 10, o = e % 100;
return 0 === n && 1 === r && 11 !== o ? 0 : 0 === n && l(2, 4, r) && !l(12, 14, o) ? 1 : 0 === n && 0 === r || 0 === n && l(5, 9, r) || 0 === n && l(11, 14, o) ? 2 : 3;
}
}), u([ "shi" ], {
c: [ 1, 3, 5 ],
cFn: function(t, e) {
return 0 === e || 1 === t ? 0 : l(2, 10, t) ? 1 : 2;
}
}), u([ "si" ], {
c: [ 1, 5 ],
cFn: function(t, e, n, r) {
return f([ 0, 1 ], t) || 0 === e && 1 === r ? 0 : 1;
}
}), u([ "sl" ], {
c: [ 1, 2, 3, 5 ],
cFn: function(t, e, n) {
var r = e % 100;
return 0 === n && 1 === r ? 0 : 0 === n && 2 === r ? 1 : 0 === n && l(3, 4, r) || 0 !== n ? 2 : 3;
}
}), u([ "sq" ], {
c: [ 1, 5 ],
cFn: function(t) {
return 1 === t ? 0 : 1;
},
o: [ 1, 4, 5 ],
oFn: function(t) {
return 1 === t ? 0 : 4 === t % 10 && 14 !== t % 100 ? 1 : 2;
}
}), u([ "sv" ], {
c: [ 1, 5 ],
cFn: function(t, e, n) {
return 1 === e && 0 === n ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(t) {
var e = t % 100;
return f([ 1, 2 ], t % 10) && !f([ 11, 12 ], e) ? 0 : 1;
}
}), u([ "tzm" ], {
c: [ 1, 5 ],
cFn: function(t) {
return l(0, 1, t) || l(11, 99, t) ? 0 : 1;
}
}), u([ "uk" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(t, e, n) {
var r = e % 10, o = e % 100;
return 0 === n && 1 === r && 11 !== o ? 0 : 0 === n && l(2, 4, r) && !l(12, 14, o) ? 1 : 0 === n && 0 === r || 0 === n && l(5, 9, r) || 0 === n && l(11, 14, o) ? 2 : 3;
},
o: [ 3, 5 ],
oFn: function(t) {
return 3 === t % 10 && 13 !== t % 100 ? 0 : 1;
}
});
},
9: function(t, e) {
function n(t) {
if (t = t || {}, this.elem = t.elem, this.size = t.size || "medium", this.class = t.class ? " " + t.class : "", 
this.elemClass = t.elemClass, "medium" != this.size && "small" != this.size && "large" != this.size) throw new Error("Unsupported size: " + this.size);
this.elem || (this.elem = document.createElement("div"));
}
n.prototype.start = function() {
this.elemClass && this.elem.classList.toggle(this.elemClass), this.elem.insertAdjacentHTML("beforeend", '<span class="spinner spinner_active spinner_' + this.size + this.class + '"><span class="spinner__dot spinner__dot_1"></span><span class="spinner__dot spinner__dot_2"></span><span class="spinner__dot spinner__dot_3"></span></span>');
}, n.prototype.stop = function() {
var t = this.elem.querySelector(".spinner");
t && (t.remove(), this.elemClass && this.elem.classList.toggle(this.elemClass));
}, window.Spinner = n, t.exports = n;
}
});