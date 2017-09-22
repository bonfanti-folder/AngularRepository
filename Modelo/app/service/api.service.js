"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var angular2_jwt_1 = require("angular2-jwt");
var FileSaver = require("file-saver");
var ApiService = (function () {
    function ApiService(http, router, loadingService, alertService) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.loadingService = loadingService;
        this.alertService = alertService;
        this.jwtHelper = new angular2_jwt_1.JwtHelper();
        this.baseURL = 'api/';
        this.headers = new http_1.Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        });
        this.http.get('assets/license.json')
            .map(function (res) { return res.json(); })
            .first().toPromise()
            .then(function (data) {
            localStorage.setItem('license', _this.jwtHelper.decodeToken(data.token).license);
            localStorage.setItem('client', _this.jwtHelper.decodeToken(data.token).client);
        });
    }
    ApiService.prototype.isAuthNecessary = function (isAuthNecessary) {
        this.headers.set('Accept', 'application/json');
        if (!isAuthNecessary)
            return;
        // use jwt
        if (!this.headers.get('authorization')) {
            var user = JSON.parse(localStorage.getItem('currentUser'));
            var jwt = this.jwtHelper.decodeToken(user.token);
            if (user && user.token)
                this.headers.append('authorization', user.token);
            if (jwt.exp < Date.now() / 1000) {
                this.removeJwt();
                localStorage.removeItem('currentUser');
            }
        }
        // check if logged
        if (!this.headers.get('authorization')) {
            localStorage.removeItem('currentUser');
            this.router.navigate(['/']);
        }
    };
    ApiService.prototype.removeJwt = function () {
        this.headers.delete('authorization');
    };
    ApiService.prototype.getResponse = function (path, isAuthNecessary) {
        if (isAuthNecessary === void 0) { isAuthNecessary = true; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.loadingService.start();
                this.isAuthNecessary(isAuthNecessary);
                return [2 /*return*/, this.http.get("" + this.baseURL + path, { headers: this.headers })
                        .map(function (response) { return response.json()
                        .finally(function () { return _this.loadingService.finish(); }); })];
            });
        });
    };
    ApiService.prototype.get = function (path, isAuthNecessary) {
        if (isAuthNecessary === void 0) { isAuthNecessary = true; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.loadingService.start();
                this.isAuthNecessary(isAuthNecessary);
                this.mPromise = this.http.get("" + this.baseURL + path, { headers: this.headers })
                    .map(this.processResponse)
                    .finally(function () { return _this.loadingService.finish(); })
                    .first().toPromise();
                Promise.all([this.mPromise]).catch(function (error) { return _this.catchError(error); });
                return [2 /*return*/, this.mPromise];
            });
        });
    };
    ApiService.prototype.getFile = function (path, mimeType, filename, obj, isAuthNecessary) {
        if (isAuthNecessary === void 0) { isAuthNecessary = true; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var options;
            return __generator(this, function (_a) {
                this.loadingService.start();
                this.isAuthNecessary(isAuthNecessary);
                this.headers.set('Accept', mimeType);
                options = {
                    responseType: http_1.ResponseContentType.Blob,
                    headers: this.headers
                };
                this.mPromise = this.http.post("" + this.baseURL + path, JSON.stringify(obj), options)
                    .map(function (response) {
                    var content = response.blob();
                    var contentDisposition = response.headers.get('Content-Disposition') || '';
                    FileSaver.saveAs(content, filename);
                    return response;
                })
                    .finally(function () { return _this.loadingService.finish(); })
                    .first().toPromise();
                Promise.all([this.mPromise]).catch(function (error) { return _this.catchError(error); });
                return [2 /*return*/, this.mPromise];
            });
        });
    };
    ApiService.prototype.post = function (path, body, isAuthNecessary) {
        if (isAuthNecessary === void 0) { isAuthNecessary = true; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.loadingService.start();
                this.isAuthNecessary(isAuthNecessary);
                this.mPromise = this.http
                    .post("" + this.baseURL + path, JSON.stringify(body), { headers: this.headers })
                    .map(this.processResponse)
                    .finally(function () { return _this.loadingService.finish(); })
                    .first().toPromise();
                Promise.all([this.mPromise]).catch(function (error) { return _this.catchError(error); });
                return [2 /*return*/, this.mPromise];
            });
        });
    };
    ApiService.prototype.put = function (path, body, isAuthNecessary) {
        if (isAuthNecessary === void 0) { isAuthNecessary = true; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.loadingService.start();
                this.isAuthNecessary(isAuthNecessary);
                this.mPromise = this.http
                    .put("" + this.baseURL + path, JSON.stringify(body), { headers: this.headers })
                    .map(this.processResponse)
                    .finally(function () { return _this.loadingService.finish(); })
                    .first().toPromise();
                Promise.all([this.mPromise]).catch(function (error) { return _this.catchError(error); });
                return [2 /*return*/, this.mPromise];
            });
        });
    };
    ApiService.prototype.patch = function (path, body, isAuthNecessary) {
        if (isAuthNecessary === void 0) { isAuthNecessary = true; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.loadingService.start();
                this.isAuthNecessary(isAuthNecessary);
                this.mPromise = this.http
                    .patch("" + this.baseURL + path, JSON.stringify(body), { headers: this.headers })
                    .map(this.processResponse)
                    .finally(function () { return _this.loadingService.finish(); })
                    .first().toPromise();
                Promise.all([this.mPromise]).catch(function (error) { return _this.catchError(error); });
                return [2 /*return*/, this.mPromise];
            });
        });
    };
    ApiService.prototype.delete = function (path, isAuthNecessary) {
        if (isAuthNecessary === void 0) { isAuthNecessary = true; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.loadingService.start();
                this.isAuthNecessary(isAuthNecessary);
                this.mPromise = this.http.delete("" + this.baseURL + path, { headers: this.headers })
                    .map(this.processResponse)
                    .finally(function () { return _this.loadingService.finish(); })
                    .first().toPromise();
                Promise.all([this.mPromise]).catch(function (error) { return _this.catchError(error); });
                return [2 /*return*/, this.mPromise];
            });
        });
    };
    ApiService.prototype.loginPost = function (path, body) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.loadingService.start();
                this.mPromise = this.http
                    .post("" + this.baseURL + path, JSON.stringify(body), { headers: this.headers })
                    .map(function (response) {
                    body.token = response.headers.get('authorization').slice(7);
                    if (body && body.token) {
                        // store user details and jwt token in local storage to keep user logged in between page refreshes
                        localStorage.setItem('currentUser', JSON.stringify(body));
                    }
                })
                    .finally(function () { return _this.loadingService.finish(); })
                    .first().toPromise();
                Promise.all([this.mPromise]).catch(function (error) { return _this.catchError(error); });
                return [2 /*return*/, this.mPromise];
            });
        });
    };
    ApiService.prototype.processResponse = function (response) {
        if (response.status >= 200 && response.status < 300)
            return response.json();
    };
    ApiService.prototype.catchError = function (error) {
        return __awaiter(this, void 0, void 0, function () {
            var body, mensaje, mensaje;
            return __generator(this, function (_a) {
                this.loadingService.reset();
                try {
                    body = error.json();
                    mensaje = 'Error Interno, por favor intente mas tarde';
                    if (body.error)
                        mensaje = body.error;
                    if (body.message)
                        mensaje = body.message;
                    if (body.exception && body.exception === 'io.jsonwebtoken.ExpiredJwtException') {
                        mensaje = 'Sesion vencida';
                        window.location.reload();
                    }
                    this.alertService.error(mensaje);
                }
                catch (error) {
                    mensaje = 'Error Interno, por favor intente mas tarde';
                    this.alertService.error(mensaje);
                }
                return [2 /*return*/];
            });
        });
    };
    ApiService = __decorate([
        core_1.Injectable()
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;
