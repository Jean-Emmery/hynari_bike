(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apps/nest-app/src/app/app.controller.ts":
/*!*************************************************!*\
  !*** ./apps/nest-app/src/app/app.controller.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const jwt_auth_guard_1 = __webpack_require__(/*! ../auth/jwt-auth.guard */ "./apps/nest-app/src/auth/jwt-auth.guard.ts");
const local_auth_guard_1 = __webpack_require__(/*! ../auth/local-auth.guard */ "./apps/nest-app/src/auth/local-auth.guard.ts");
const auth_service_1 = __webpack_require__(/*! ../auth/auth.service */ "./apps/nest-app/src/auth/auth.service.ts");
const users_service_1 = __webpack_require__(/*! ../users/users.service */ "./apps/nest-app/src/users/users.service.ts");
let AppController = class AppController {
    constructor(authService, usersService) {
        this.authService = authService;
        this.usersService = usersService;
    }
    getData() {
        throw new Error('Method not implemented.');
    }
    login(req) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log("req.user");
            console.log(req.user);
            return this.authService.login(req.user);
        });
    }
    getProfile(req) {
        console.log("app.controller:profile:req.user");
        console.log(req.user);
        return this.usersService.profile(req.user);
    }
    register(req) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log("app.controller:register()");
            console.log("req.body");
            console.log(req.body);
            return this.usersService.register(req.body);
        });
    }
    findAll() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log("app.controller:FindAll()");
            return this.usersService.findAll();
        });
    }
};
tslib_1.__decorate([
    common_1.UseGuards(local_auth_guard_1.LocalAuthGuard),
    common_1.Post('auth/login'),
    tslib_1.__param(0, common_1.Request()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AppController.prototype, "login", null);
tslib_1.__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard) // Si l'utilisateur est connecté et a son token
    ,
    common_1.Get('profile'),
    tslib_1.__param(0, common_1.Request()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], AppController.prototype, "getProfile", null);
tslib_1.__decorate([
    common_1.Post('user/register'),
    tslib_1.__param(0, common_1.Request()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AppController.prototype, "register", null);
tslib_1.__decorate([
    common_1.Get('user/all'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], AppController.prototype, "findAll", null);
AppController = tslib_1.__decorate([
    common_1.Controller(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object, typeof (_b = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _b : Object])
], AppController);
exports.AppController = AppController;


/***/ }),

/***/ "./apps/nest-app/src/app/app.module.ts":
/*!*********************************************!*\
  !*** ./apps/nest-app/src/app/app.module.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_module_1 = __webpack_require__(/*! ../auth/auth.module */ "./apps/nest-app/src/auth/auth.module.ts");
const users_module_1 = __webpack_require__(/*! ../users/users.module */ "./apps/nest-app/src/users/users.module.ts");
const app_controller_1 = __webpack_require__(/*! ./app.controller */ "./apps/nest-app/src/app/app.controller.ts");
const app_service_1 = __webpack_require__(/*! ./app.service */ "./apps/nest-app/src/app/app.service.ts");
const garage_module_1 = __webpack_require__(/*! ../garage/garage.module */ "./apps/nest-app/src/garage/garage.module.ts");
const bikes_module_1 = __webpack_require__(/*! ../bikes/bikes.module */ "./apps/nest-app/src/bikes/bikes.module.ts");
const station_module_1 = __webpack_require__(/*! ../station/station.module */ "./apps/nest-app/src/station/station.module.ts");
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    common_1.Module({
        imports: [
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            garage_module_1.GarageModule,
            bikes_module_1.BikesModule,
            station_module_1.StationModule
        ],
        controllers: [
            app_controller_1.AppController
        ],
        providers: [
            app_service_1.AppService,
        ],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./apps/nest-app/src/app/app.service.ts":
/*!**********************************************!*\
  !*** ./apps/nest-app/src/app/app.service.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let AppService = class AppService {
    getData() {
        return { message: 'Welcome to nest-app!' };
    }
};
AppService = tslib_1.__decorate([
    common_1.Injectable()
], AppService);
exports.AppService = AppService;


/***/ }),

/***/ "./apps/nest-app/src/auth/auth.controller.ts":
/*!***************************************************!*\
  !*** ./apps/nest-app/src/auth/auth.controller.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./apps/nest-app/src/auth/auth.service.ts");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
};
AuthController = tslib_1.__decorate([
    common_1.Controller('auth'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], AuthController);
exports.AuthController = AuthController;


/***/ }),

/***/ "./apps/nest-app/src/auth/auth.module.ts":
/*!***********************************************!*\
  !*** ./apps/nest-app/src/auth/auth.module.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./apps/nest-app/src/auth/auth.service.ts");
const local_strategy_1 = __webpack_require__(/*! ./local.strategy */ "./apps/nest-app/src/auth/local.strategy.ts");
const users_module_1 = __webpack_require__(/*! ../users/users.module */ "./apps/nest-app/src/users/users.module.ts");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const constants_1 = __webpack_require__(/*! ./constants */ "./apps/nest-app/src/auth/constants.ts");
const jwt_statregy_1 = __webpack_require__(/*! ./jwt.statregy */ "./apps/nest-app/src/auth/jwt.statregy.ts");
const auth_controller_1 = __webpack_require__(/*! ./auth.controller */ "./apps/nest-app/src/auth/auth.controller.ts");
let AuthModule = class AuthModule {
};
AuthModule = tslib_1.__decorate([
    common_1.Module({
        imports: [
            users_module_1.UsersModule,
            passport_1.PassportModule,
            jwt_1.JwtModule.register({
                secret: constants_1.jwtConstants.secret,
                signOptions: { expiresIn: '3600s' },
            }),
        ],
        providers: [auth_service_1.AuthService, local_strategy_1.LocalStrategy, jwt_statregy_1.JwtStrategy],
        exports: [auth_service_1.AuthService],
        controllers: [auth_controller_1.AuthController],
    })
], AuthModule);
exports.AuthModule = AuthModule;


/***/ }),

/***/ "./apps/nest-app/src/auth/auth.service.ts":
/*!************************************************!*\
  !*** ./apps/nest-app/src/auth/auth.service.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const users_service_1 = __webpack_require__(/*! ../users/users.service */ "./apps/nest-app/src/users/users.service.ts");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
let AuthService = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    validateUser(username, pass) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield this.usersService.findOne(username);
            console.log("authService:validateUser:user");
            console.log(user);
            console.log("authService:validateUser:password&pass");
            console.log(user.password + " - " + pass);
            if (user && user.password === pass) {
                const { password } = user, result = tslib_1.__rest(user, ["password"]);
                console.log("authService:validateUser:result");
                console.log(result);
                return result;
            }
            return null;
        });
    }
    login(user) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log("authService:login:user");
            console.log(user);
            const payload = {
                id: user.id,
                username: user.email,
                first_name: user.firstname,
                last_name: user.lastname,
                role: user.role,
            };
            const access_token = this.jwtService.sign(payload);
            console.log("authService:login:access_token");
            console.log(access_token);
            console.log("authService:login:payload");
            console.log(payload);
            console.log("authService:login:user");
            console.log(user);
            return {
                access_token,
                user: user
            };
        });
    }
};
AuthService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object])
], AuthService);
exports.AuthService = AuthService;


/***/ }),

/***/ "./apps/nest-app/src/auth/constants.ts":
/*!*********************************************!*\
  !*** ./apps/nest-app/src/auth/constants.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtConstants = void 0;
exports.jwtConstants = {
    secret: 'secretKey',
};


/***/ }),

/***/ "./apps/nest-app/src/auth/jwt-auth.guard.ts":
/*!**************************************************!*\
  !*** ./apps/nest-app/src/auth/jwt-auth.guard.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtAuthGuard = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
let JwtAuthGuard = class JwtAuthGuard extends passport_1.AuthGuard('jwt') {
    canActivate(context) {
        // Add your custom authentication logic here
        // for example, call super.logIn(request) to establish a session.
        return super.canActivate(context);
    }
    handleRequest(err, user, info) {
        // You can throw an exception based on either "info" or "err" arguments
        if (err || !user) {
            throw err || new common_1.UnauthorizedException();
        }
        return user;
    }
};
JwtAuthGuard = tslib_1.__decorate([
    common_1.Injectable()
], JwtAuthGuard);
exports.JwtAuthGuard = JwtAuthGuard;


/***/ }),

/***/ "./apps/nest-app/src/auth/jwt.statregy.ts":
/*!************************************************!*\
  !*** ./apps/nest-app/src/auth/jwt.statregy.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtStrategy = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const passport_jwt_1 = __webpack_require__(/*! passport-jwt */ "passport-jwt");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const constants_1 = __webpack_require__(/*! ./constants */ "./apps/nest-app/src/auth/constants.ts");
let JwtStrategy = class JwtStrategy extends passport_1.PassportStrategy(passport_jwt_1.Strategy) {
    constructor() {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: true,
            secretOrKey: constants_1.jwtConstants.secret,
        });
    }
    validate(payload) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log("jwt.strategy:valide:payload");
            console.log(payload);
            return {
                userId: payload.id,
                username: payload.username,
                first_name: payload.first_name,
                last_name: payload.last_name
            };
        });
    }
};
JwtStrategy = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [])
], JwtStrategy);
exports.JwtStrategy = JwtStrategy;


/***/ }),

/***/ "./apps/nest-app/src/auth/local-auth.guard.ts":
/*!****************************************************!*\
  !*** ./apps/nest-app/src/auth/local-auth.guard.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalAuthGuard = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
let LocalAuthGuard = class LocalAuthGuard extends passport_1.AuthGuard('local') {
};
LocalAuthGuard = tslib_1.__decorate([
    common_1.Injectable()
], LocalAuthGuard);
exports.LocalAuthGuard = LocalAuthGuard;


/***/ }),

/***/ "./apps/nest-app/src/auth/local.strategy.ts":
/*!**************************************************!*\
  !*** ./apps/nest-app/src/auth/local.strategy.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalStrategy = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const passport_local_1 = __webpack_require__(/*! passport-local */ "passport-local");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./apps/nest-app/src/auth/auth.service.ts");
let LocalStrategy = class LocalStrategy extends passport_1.PassportStrategy(passport_local_1.Strategy) {
    constructor(authService) {
        super();
        this.authService = authService;
    }
    validate(username, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log("local.strategy:valide:username&password");
            console.log(username);
            console.log(password);
            const user = yield this.authService.validateUser(username, password);
            if (!user) {
                throw new common_1.UnauthorizedException();
            }
            return user;
        });
    }
};
LocalStrategy = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], LocalStrategy);
exports.LocalStrategy = LocalStrategy;


/***/ }),

/***/ "./apps/nest-app/src/bikes/bikes.controller.ts":
/*!*****************************************************!*\
  !*** ./apps/nest-app/src/bikes/bikes.controller.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BikesController = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const bikes_service_1 = __webpack_require__(/*! ./bikes.service */ "./apps/nest-app/src/bikes/bikes.service.ts");
const bike_1 = __webpack_require__(/*! @hynari_bike/bike */ "./libs/bike/src/index.ts");
let BikesController = class BikesController {
    constructor(bikesService) {
        this.bikesService = bikesService;
    }
    getAllBikes() {
        return this.bikesService.getAllBikes();
    }
    getBikesUpByStationId(data) {
        return this.bikesService.getBikesUpByStationId(data.id);
    }
    getBikesByUserId(data) {
        return this.bikesService.getBikesByUserId(data.id);
    }
    dropBike(data) {
        return this.bikesService.dropBike(data.id);
    }
    // @Get(':id')
    // getBikesByStationId(@Param() data) {
    //   return this.bikesService.getBikesByStationId(data.id);
    // }
    addBike(bike) {
        return this.bikesService.addBike(bike);
    }
    editBike(bike) {
        return this.bikesService.editBike(bike);
    }
    pickUpBike(bike) {
        console.log("Post:PickupBike");
        return this.bikesService.pickUpBike(bike);
    }
    getBikeById(data) {
        return this.bikesService.getBikeById(data.id);
    }
    deleteBike(data) {
        return this.bikesService.deleteBike(data.id);
    }
};
tslib_1.__decorate([
    common_1.Get('/'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], BikesController.prototype, "getAllBikes", null);
tslib_1.__decorate([
    common_1.Get(':id'),
    tslib_1.__param(0, common_1.Param()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], BikesController.prototype, "getBikesUpByStationId", null);
tslib_1.__decorate([
    common_1.Get('my/:id'),
    tslib_1.__param(0, common_1.Param()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], BikesController.prototype, "getBikesByUserId", null);
tslib_1.__decorate([
    common_1.Post('drop/:id'),
    tslib_1.__param(0, common_1.Param()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], BikesController.prototype, "dropBike", null);
tslib_1.__decorate([
    common_1.Post('new'),
    tslib_1.__param(0, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], BikesController.prototype, "addBike", null);
tslib_1.__decorate([
    common_1.Post('editBike'),
    tslib_1.__param(0, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof bike_1.IBike !== "undefined" && bike_1.IBike) === "function" ? _a : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], BikesController.prototype, "editBike", null);
tslib_1.__decorate([
    common_1.Post('pickUpBike'),
    tslib_1.__param(0, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof bike_1.IBike !== "undefined" && bike_1.IBike) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], BikesController.prototype, "pickUpBike", null);
tslib_1.__decorate([
    common_1.Get('show/:id'),
    tslib_1.__param(0, common_1.Param()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], BikesController.prototype, "getBikeById", null);
tslib_1.__decorate([
    common_1.Delete(':id'),
    tslib_1.__param(0, common_1.Param()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], BikesController.prototype, "deleteBike", null);
BikesController = tslib_1.__decorate([
    common_1.Controller('bikes'),
    tslib_1.__metadata("design:paramtypes", [typeof (_c = typeof bikes_service_1.BikesService !== "undefined" && bikes_service_1.BikesService) === "function" ? _c : Object])
], BikesController);
exports.BikesController = BikesController;


/***/ }),

/***/ "./apps/nest-app/src/bikes/bikes.module.ts":
/*!*************************************************!*\
  !*** ./apps/nest-app/src/bikes/bikes.module.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BikesModule = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const bikes_controller_1 = __webpack_require__(/*! ./bikes.controller */ "./apps/nest-app/src/bikes/bikes.controller.ts");
const bikes_service_1 = __webpack_require__(/*! ./bikes.service */ "./apps/nest-app/src/bikes/bikes.service.ts");
let BikesModule = class BikesModule {
};
BikesModule = tslib_1.__decorate([
    common_1.Module({
        controllers: [bikes_controller_1.BikesController],
        providers: [bikes_service_1.BikesService],
    })
], BikesModule);
exports.BikesModule = BikesModule;


/***/ }),

/***/ "./apps/nest-app/src/bikes/bikes.service.ts":
/*!**************************************************!*\
  !*** ./apps/nest-app/src/bikes/bikes.service.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BikesService = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const knex_lib_1 = __webpack_require__(/*! @hynari_bike/knex-lib */ "./libs/knex-lib/src/index.ts");
let BikesService = class BikesService {
    getAllBikes() {
        return knex_lib_1.k.getAllBikesDb();
    }
    // async getBikesByStationId(id) {
    //   return k.getBikesByStationIdDb(id);
    // }
    getBikesUpByStationId(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return knex_lib_1.k.getBikesUpByStationIdDb(id);
        });
    }
    addBike(bike) {
        return knex_lib_1.k.addBikeDb(bike);
    }
    editBike(bike) {
        console.log('service');
        console.log(bike);
        return knex_lib_1.k.editBikeDb(bike);
    }
    pickUpBike(bike) {
        console.log('service' + bike);
        return knex_lib_1.k.pickUpBikeDb(bike);
    }
    getBikeById(id) {
        return knex_lib_1.k.getBikeByIdDb(id);
    }
    getBikesByUserId(id) {
        return knex_lib_1.k.getBikesByUserIdDb(id);
    }
    dropBike(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return knex_lib_1.k.dropBikeDb(id);
        });
    }
    deleteBike(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return knex_lib_1.k.deleteBikeDb(id);
        });
    }
};
BikesService = tslib_1.__decorate([
    common_1.Injectable()
], BikesService);
exports.BikesService = BikesService;


/***/ }),

/***/ "./apps/nest-app/src/garage/garage.controller.ts":
/*!*******************************************************!*\
  !*** ./apps/nest-app/src/garage/garage.controller.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GarageController = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const garage_1 = __webpack_require__(/*! @hynari_bike/garage */ "./libs/garage/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const garage_service_1 = __webpack_require__(/*! ./garage.service */ "./apps/nest-app/src/garage/garage.service.ts");
let GarageController = class GarageController {
    constructor(garageService) {
        this.garageService = garageService;
    }
    getAllGarage() {
        return this.garageService.getAllGarage();
    }
    getAllBikes() {
        console.log('contro');
        return this.garageService.getAllBikes();
    }
    getGarageIdByName(data) {
        console.log("garage.controller:getId:data");
        console.log(data);
        return this.garageService.getGarageIdByName(data.name);
    }
    getGarage() {
        return this.garageService.getGarage();
    }
    addGarage(garage) {
        return this.garageService.addGarage(garage);
    }
    deleteGarage(data) {
        return this.garageService.deleteGarage(data.id);
    }
    editGarage(garage) {
        console.log('editcontroller');
        return this.garageService.editGarage(garage);
    }
    getGarageById(data) {
        return this.garageService.getGarageById(data.id);
    }
};
tslib_1.__decorate([
    common_1.Get(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], GarageController.prototype, "getAllGarage", null);
tslib_1.__decorate([
    common_1.Get('bikes'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], GarageController.prototype, "getAllBikes", null);
tslib_1.__decorate([
    common_1.Get('getId/:name'),
    tslib_1.__param(0, common_1.Param()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], GarageController.prototype, "getGarageIdByName", null);
tslib_1.__decorate([
    common_1.Get('/garageList'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], GarageController.prototype, "getGarage", null);
tslib_1.__decorate([
    common_1.Post('new'),
    tslib_1.__param(0, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], GarageController.prototype, "addGarage", null);
tslib_1.__decorate([
    common_1.Delete(':id'),
    tslib_1.__param(0, common_1.Param()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], GarageController.prototype, "deleteGarage", null);
tslib_1.__decorate([
    common_1.Post('editGarage'),
    tslib_1.__param(0, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof garage_1.IGarage !== "undefined" && garage_1.IGarage) === "function" ? _a : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], GarageController.prototype, "editGarage", null);
tslib_1.__decorate([
    common_1.Get('show/:id'),
    tslib_1.__param(0, common_1.Param()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], GarageController.prototype, "getGarageById", null);
GarageController = tslib_1.__decorate([
    common_1.Controller('garage'),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof garage_service_1.GarageService !== "undefined" && garage_service_1.GarageService) === "function" ? _b : Object])
], GarageController);
exports.GarageController = GarageController;


/***/ }),

/***/ "./apps/nest-app/src/garage/garage.module.ts":
/*!***************************************************!*\
  !*** ./apps/nest-app/src/garage/garage.module.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GarageModule = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const garage_controller_1 = __webpack_require__(/*! ./garage.controller */ "./apps/nest-app/src/garage/garage.controller.ts");
const garage_service_1 = __webpack_require__(/*! ./garage.service */ "./apps/nest-app/src/garage/garage.service.ts");
let GarageModule = class GarageModule {
};
GarageModule = tslib_1.__decorate([
    common_1.Module({
        controllers: [garage_controller_1.GarageController],
        providers: [garage_service_1.GarageService],
    })
], GarageModule);
exports.GarageModule = GarageModule;


/***/ }),

/***/ "./apps/nest-app/src/garage/garage.service.ts":
/*!****************************************************!*\
  !*** ./apps/nest-app/src/garage/garage.service.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GarageService = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const knex_lib_1 = __webpack_require__(/*! @hynari_bike/knex-lib */ "./libs/knex-lib/src/index.ts");
let GarageService = class GarageService {
    getAllGarage() {
        return knex_lib_1.k.getAllGarageDb();
    }
    getGarage() {
        return knex_lib_1.k.getGarageDb();
    }
    addGarage(garage) {
        return knex_lib_1.k.addGarageDb(garage);
    }
    getAllBikes() {
        return knex_lib_1.k.getAllBikesDb();
    }
    deleteGarage(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return knex_lib_1.k.deleteGarageDb(id);
        });
    }
    editGarage(garage) {
        console.log('service' + garage);
        return knex_lib_1.k.editGarageDb(garage);
    }
    getGarageById(id) {
        return knex_lib_1.k.getGarageByIdDb(id);
    }
    getGarageIdByName(name) {
        return knex_lib_1.k.getGarageIdByNameDb(name);
    }
};
GarageService = tslib_1.__decorate([
    common_1.Injectable()
], GarageService);
exports.GarageService = GarageService;


/***/ }),

/***/ "./apps/nest-app/src/main.ts":
/*!***********************************!*\
  !*** ./apps/nest-app/src/main.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const app_module_1 = __webpack_require__(/*! ./app/app.module */ "./apps/nest-app/src/app/app.module.ts");
function bootstrap() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule);
        app.enableCors(); // Cors = cross origin ressoure sharing
        const globalPrefix = 'api';
        app.setGlobalPrefix(globalPrefix);
        const port = process.env.PORT || 3333;
        yield app.listen(port, () => {
            common_1.Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
        });
    });
}
bootstrap();


/***/ }),

/***/ "./apps/nest-app/src/station/station.controller.ts":
/*!*********************************************************!*\
  !*** ./apps/nest-app/src/station/station.controller.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.StationController = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const station_1 = __webpack_require__(/*! @hynari_bike/station */ "./libs/station/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const station_service_1 = __webpack_require__(/*! ./station.service */ "./apps/nest-app/src/station/station.service.ts");
let StationController = class StationController {
    constructor(stationService) {
        this.stationService = stationService;
    }
    getAllStation() {
        console.log('station contro');
        return this.stationService.getAllStation();
    }
    getStationByGarageId(data) {
        return this.stationService.getStationByGarageId(data.id);
    }
    editStation(station) {
        return this.stationService.editStation(station);
    }
    deleteBike(data) {
        return this.stationService.deleteStation(data.id);
    }
    addStation(station) {
        return this.stationService.addStation(station);
    }
    getStationById(data) {
        return this.stationService.getStationById(data.id);
    }
    getStation() {
        return this.stationService.getStation();
    }
    getStationIdByName(data) {
        return this.stationService.getStationIdByName(data.name);
    }
};
tslib_1.__decorate([
    common_1.Get('/'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], StationController.prototype, "getAllStation", null);
tslib_1.__decorate([
    common_1.Get(':id'),
    tslib_1.__param(0, common_1.Param()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], StationController.prototype, "getStationByGarageId", null);
tslib_1.__decorate([
    common_1.Post('editStation'),
    tslib_1.__param(0, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof station_1.IStation !== "undefined" && station_1.IStation) === "function" ? _a : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], StationController.prototype, "editStation", null);
tslib_1.__decorate([
    common_1.Delete(':id'),
    tslib_1.__param(0, common_1.Param()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], StationController.prototype, "deleteBike", null);
tslib_1.__decorate([
    common_1.Post('new'),
    tslib_1.__param(0, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], StationController.prototype, "addStation", null);
tslib_1.__decorate([
    common_1.Get('show/:id'),
    tslib_1.__param(0, common_1.Param()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], StationController.prototype, "getStationById", null);
tslib_1.__decorate([
    common_1.Get('/stationList'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], StationController.prototype, "getStation", null);
tslib_1.__decorate([
    common_1.Get('/getId/:name'),
    tslib_1.__param(0, common_1.Param()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], StationController.prototype, "getStationIdByName", null);
StationController = tslib_1.__decorate([
    common_1.Controller('station'),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof station_service_1.StationService !== "undefined" && station_service_1.StationService) === "function" ? _b : Object])
], StationController);
exports.StationController = StationController;


/***/ }),

/***/ "./apps/nest-app/src/station/station.module.ts":
/*!*****************************************************!*\
  !*** ./apps/nest-app/src/station/station.module.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.StationModule = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const station_controller_1 = __webpack_require__(/*! ./station.controller */ "./apps/nest-app/src/station/station.controller.ts");
const station_service_1 = __webpack_require__(/*! ./station.service */ "./apps/nest-app/src/station/station.service.ts");
let StationModule = class StationModule {
};
StationModule = tslib_1.__decorate([
    common_1.Module({
        controllers: [station_controller_1.StationController],
        providers: [station_service_1.StationService],
    })
], StationModule);
exports.StationModule = StationModule;


/***/ }),

/***/ "./apps/nest-app/src/station/station.service.ts":
/*!******************************************************!*\
  !*** ./apps/nest-app/src/station/station.service.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.StationService = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const knex_lib_1 = __webpack_require__(/*! @hynari_bike/knex-lib */ "./libs/knex-lib/src/index.ts");
let StationService = class StationService {
    getStationByGarageId(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return knex_lib_1.k.getStationByGarageIdDb(id);
        });
    }
    getAllStation() {
        return knex_lib_1.k.getAllStationDb();
    }
    editStation(station) {
        console.log('service' + station);
        return knex_lib_1.k.editStationDb(station);
    }
    deleteStation(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return knex_lib_1.k.deleteStationDb(id);
        });
    }
    addStation(station) {
        return knex_lib_1.k.addStationDb(station);
    }
    getStation() {
        return knex_lib_1.k.getStationDb();
    }
    getStationById(id) {
        return knex_lib_1.k.getStationByIdDb(id);
    }
    getStationIdByName(name) {
        return knex_lib_1.k.getStationIdByNameDb(name);
    }
};
StationService = tslib_1.__decorate([
    common_1.Injectable()
], StationService);
exports.StationService = StationService;


/***/ }),

/***/ "./apps/nest-app/src/users/users.module.ts":
/*!*************************************************!*\
  !*** ./apps/nest-app/src/users/users.module.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const users_service_1 = __webpack_require__(/*! ./users.service */ "./apps/nest-app/src/users/users.service.ts");
let UsersModule = class UsersModule {
};
UsersModule = tslib_1.__decorate([
    common_1.Module({
        providers: [users_service_1.UsersService],
        exports: [users_service_1.UsersService]
    })
], UsersModule);
exports.UsersModule = UsersModule;


/***/ }),

/***/ "./apps/nest-app/src/users/users.service.ts":
/*!**************************************************!*\
  !*** ./apps/nest-app/src/users/users.service.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const knex_lib_1 = __webpack_require__(/*! @hynari_bike/knex-lib */ "./libs/knex-lib/src/index.ts");
let UsersService = class UsersService {
    constructor() {
        this.users = [
            {
                userId: 1,
                username: 'john@mail.com',
                first_name: 'john',
                last_name: 'cena',
                password: 'changeme',
            },
            {
                userId: 2,
                username: 'johnetta@mail.com',
                first_name: 'johnetta',
                last_name: 'cenatta',
                password: 'guess',
            },
        ];
    }
    // async findOne(username: string): Promise<User | undefined> {
    //   return this.users.find(user => user.username === username);
    // }
    findOne(username) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log("usersService:findOne:username");
            console.log(username);
            const user = yield knex_lib_1.k.findUser(username);
            console.log("usersService:findOne:user");
            console.log(user);
            return user;
        });
    }
    findAll() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield knex_lib_1.k.findAll();
        });
    }
    register(user) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log("user");
            console.log(user);
            knex_lib_1.k.registerUser(user)
                .then((el) => console.log(el))
                .catch((err) => console.log(err));
            return;
        });
    }
    profile(user) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log("users.services:profile:user");
            console.log(user);
            return user;
        });
    }
};
UsersService = tslib_1.__decorate([
    common_1.Injectable()
], UsersService);
exports.UsersService = UsersService;


/***/ }),

/***/ "./libs/bike/src/index.ts":
/*!********************************!*\
  !*** ./libs/bike/src/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
tslib_1.__exportStar(__webpack_require__(/*! ./lib/bike */ "./libs/bike/src/lib/bike.ts"), exports);


/***/ }),

/***/ "./libs/bike/src/lib/bike.ts":
/*!***********************************!*\
  !*** ./libs/bike/src/lib/bike.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./libs/garage/src/index.ts":
/*!**********************************!*\
  !*** ./libs/garage/src/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
tslib_1.__exportStar(__webpack_require__(/*! ./lib/garage */ "./libs/garage/src/lib/garage.ts"), exports);


/***/ }),

/***/ "./libs/garage/src/lib/garage.ts":
/*!***************************************!*\
  !*** ./libs/garage/src/lib/garage.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./libs/knex-lib/src/index.ts":
/*!************************************!*\
  !*** ./libs/knex-lib/src/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
tslib_1.__exportStar(__webpack_require__(/*! ./lib/knex-lib */ "./libs/knex-lib/src/lib/knex-lib.ts"), exports);


/***/ }),

/***/ "./libs/knex-lib/src/lib/knex-lib.ts":
/*!*******************************************!*\
  !*** ./libs/knex-lib/src/lib/knex-lib.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.k = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const options = {
    client: 'mysql2',
    connection: {
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'hynari_bike',
    },
};
const knex = __webpack_require__(/*! knex */ "knex")(options);
class KnexLib {
    getAllGarageDb() {
        return knex('garage').select('*');
    }
    getAllBikesDb() {
        return knex('bikes').select('*');
    }
    getAllStationDb() {
        return knex('station').select('*');
    }
    getUserByBikeIdDb(bikeId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield knex('bikes')
                .where({ id: bikeId })
                .then((row) => {
                console.log("user_id: " + row[0].user_id);
                return (row[0].user_id);
            });
        });
    }
    dropBikeDb(bikeId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log("knex-lib:dropBikeDb");
            console.log('bikeId: ' + bikeId);
            const userId = this.getUserByBikeIdDb(bikeId);
            console.log('userId: ' + userId);
            yield knex('bikes')
                .where({ id: bikeId })
                .update({ user_id: '0' });
            // pour l'instant userId est une promise, await devant le this.etc marche pas
            //return this.getBikesByUserIdDb(userId)
        });
    }
    // getBikesByStationIdDb(id) {
    //   return knex('bikes').select('*').where({ station_id: id });
    // }
    getBikesUpByStationIdDb(id) {
        return knex('bikes')
            .select('*')
            .where({ station_id: id, user_id: '0' });
    }
    getBikesByUserIdDb(id) {
        console.log("knex-lib:getBikesByUserIdDb:id=" + id);
        return knex('bikes').select('*').where({ user_id: id });
    }
    getStationByGarageIdDb(id) {
        return knex('station').select('*').where({ garage_id: id });
    }
    getGarageDb() {
        return knex('garage').select('*');
    }
    getStationDb() {
        return knex('station').select('id');
    }
    addBikeDb(bike) {
        return knex('bikes').insert({
            name: bike.name,
            pictureUrl: bike.pictureUrl,
            lat: bike.lat,
            lng: bike.lng,
            station_id: bike.station,
            user_id: bike.user_id,
        });
    }
    addGarageDb(garage) {
        return knex('garage').insert({
            name: garage.name,
            lat: garage.lat,
            lng: garage.lng,
        });
    }
    editBikeDb(bike) {
        console.log('db' + bike.id);
        return knex('bikes').where({ id: bike.id }).update({
            id: bike.id,
            name: bike.name,
            pictureUrl: bike.pictureUrl,
            station_id: bike.station_id,
            user_id: bike.user_id,
        });
    }
    getBikeByIdDb(id) {
        return knex('bikes').select('*').where({ id: id });
    }
    pickUpBikeDb(bike) {
        console.log('db' + bike.id);
        console.log('bike');
        console.log(bike);
        return knex('bikes').where({ id: bike.id }).update({
            id: bike.id,
            user_id: bike.user_id,
            station_id: bike.station_id,
        });
    }
    findUser(username) {
        console.log("knexlib:findUser:username");
        console.log(username);
        return knex('users')
            .select('email', 'firstname', 'lastname', 'password', 'role', 'id')
            .where({
            email: username,
        })
            .then((el) => {
            console.log("el");
            console.log(el[0]);
            return (el[0]);
        })
            .catch((err) => console.log(err));
        return null;
    }
    findAll() {
        return knex('users');
    }
    registerUser(user) {
        return knex('users').insert({
            email: user.username,
            firstname: user.firstname,
            lastname: user.lastname,
            password: user.password,
            role: '1'
        });
    }
    getStationIdByNameDb(stationName) {
        return knex('station').select('id').where({ name: stationName });
    }
    getGarageIdByNameDb(garageName) {
        return knex('garage').select('id').where({ name: garageName });
    }
    getStationByIdDb(id) {
        return knex('station').select('*').where({ id: id });
    }
    getGarageByIdDb(id) {
        return knex('garage').select('*').where({ id: id });
    }
    deleteBikeDb(id) {
        return knex('bikes').where({ id: id }).del();
    }
    deleteGarageDb(id) {
        return knex('garage').where({ id: id }).del();
    }
    editStationDb(station) {
        console.log('station');
        console.log(station);
        return knex('station').where({ id: station.id }).update({
            id: station.id,
            capacityMax: station.capacityMax,
            name: station.name,
            garage_id: station.garage_id,
        });
    }
    editGarageDb(garage) {
        console.log('db' + garage.id);
        return knex('garage').where({ id: garage.id }).update({
            id: garage.id,
            name: garage.name,
            lat: garage.lat,
            lng: garage.lng,
        });
    }
    deleteStationDb(id) {
        return knex('station').where({ id: id }).del();
    }
    addStationDb(station) {
        return knex('station').insert({
            capacityMax: station.capacityMax,
            name: station.name,
            garage_id: station.garage,
        });
    }
}
exports.k = new KnexLib();


/***/ }),

/***/ "./libs/station/src/index.ts":
/*!***********************************!*\
  !*** ./libs/station/src/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
tslib_1.__exportStar(__webpack_require__(/*! ./lib/station */ "./libs/station/src/lib/station.ts"), exports);


/***/ }),

/***/ "./libs/station/src/lib/station.ts":
/*!*****************************************!*\
  !*** ./libs/station/src/lib/station.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi ./apps/nest-app/src/main.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\romai\Documents\Ynov\MASTER_1\WEB FULL STACK\hynari_bike\apps\nest-app\src\main.ts */"./apps/nest-app/src/main.ts");


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/jwt":
/*!******************************!*\
  !*** external "@nestjs/jwt" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/jwt");

/***/ }),

/***/ "@nestjs/passport":
/*!***********************************!*\
  !*** external "@nestjs/passport" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/passport");

/***/ }),

/***/ "knex":
/*!***********************!*\
  !*** external "knex" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("knex");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("passport-jwt");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("passport-local");

/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map