"use strict";
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var loadingPhrases = ['⛽ Refilling fuel...', '🔥 Warming engines...', '📡 Mapping meteors...'];
module.exports = {
    name: 'init',
    description: 'Generate project',
    run: function (toolbox) { return __awaiter(_this, void 0, void 0, function () {
        var print, parameters, system, filesystem, array, options, name, workDir, clone, modifiers;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    print = toolbox.print, parameters = toolbox.parameters, system = toolbox.system, filesystem = toolbox.filesystem;
                    array = parameters.array, options = parameters.options;
                    name = array[0];
                    workDir = filesystem.path(name || '');
                    clone = function (modifier, template) { return __awaiter(_this, void 0, void 0, function () {
                        var spinner, install, _a, err_1;
                        var _this = this;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    spinner = print.spin(loadingPhrases[Math.floor(Math.random() * loadingPhrases.length)]);
                                    install = function (pkg, hasGit) { return __awaiter(_this, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            return [2 /*return*/, system.run((name ? `cd ${name} && ` : '') + `cd ${name}${modifier} && ` + (pkg ? "yarn add " + pkg : 'yarn') + " " + (hasGit && '&& yarn rimraf .git'))];
                                        });
                                    }); };
                                    _b.label = 1;
                                case 1:
                                    _b.trys.push([1, 12, , 13]);
                                    _a = modifier;
                                    switch (_a) {
                                        case 'api': return [3 /*break*/, 2];
                                        case 'web': return [3 /*break*/, 5];
                                        case 'app': return [3 /*break*/, 8];
                                    }
                                    return [3 /*break*/, 10];
                                case 2: return [4 /*yield*/, system.run(`git clone https://github.com/accalia-io/accalia-tools-template-API ${workDir}/${name}API`)];
                                case 3:
                                    _b.sent();
                                    return [4 /*yield*/, install(null, true)];
                                case 4:
                                    _b.sent();
                                    return [3 /*break*/, 11];
                                case 5: return [4 /*yield*/, system.run(`git clone https://github.com/accalia-io/accalia-tools-template-WEB ${workDir}/${name}WEB`)];
                                case 6:
                                    _b.sent();
                                    return [4 /*yield*/, install(null, true)];
                                case 7:
                                    _b.sent();
                                    return [3 /*break*/, 11];
                                case 8: return [4 /*yield*/, system.run((name ? `cd ${name} && ` : '') + `npx react-native init ${name}APP`)];
                                case 9:
                                    _b.sent();
                                    return [3 /*break*/, 11];
                                case 10:
                                    system.run('Missing modifier.');
                                    _b.label = 11;
                                case 11: return [2 /*return*/, spinner.succeed(modifier.toUpperCase() + " installed!")];
                                case 12:
                                    err_1 = _b.sent();
                                    spinner.fail(modifier.toUpperCase() + " failed!");
                                    return [3 /*break*/, 13];
                                case 13: return [2 /*return*/];
                            }
                        });
                    }); };
                    print.info('✨ Welcome aboard! Please take a seat while we prepare your launch.');
                    if (!(name !== '')) return [3 /*break*/, 2];
                    return [4 /*yield*/, system.run(`mkdir ${name} && cd ${name}`)];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    modifiers = (options.only && options.only.split(',')) || ['api', 'web', 'app'];
                    return [4 /*yield*/, Promise.all(modifiers.map(function (modifier) { return clone(modifier, options[modifier]); }))];
                case 3:
                    _a.sent();
                    print.success('🚀 Launched!');
                    return [2 /*return*/];
            }
        });
    }); },
};
