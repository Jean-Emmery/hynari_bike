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

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const app_service_1 = __webpack_require__(/*! ./app.service */ "./apps/nest-app/src/app/app.service.ts");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getData() {
        return this.appService.getData();
    }
};
tslib_1.__decorate([
    common_1.Get(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], AppController.prototype, "getData", null);
AppController = tslib_1.__decorate([
    common_1.Controller(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
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
const app_controller_1 = __webpack_require__(/*! ./app.controller */ "./apps/nest-app/src/app/app.controller.ts");
const app_service_1 = __webpack_require__(/*! ./app.service */ "./apps/nest-app/src/app/app.service.ts");
const garage_module_1 = __webpack_require__(/*! ../garage/garage.module */ "./apps/nest-app/src/garage/garage.module.ts");
const bikes_module_1 = __webpack_require__(/*! ../bikes/bikes.module */ "./apps/nest-app/src/bikes/bikes.module.ts");
const station_module_1 = __webpack_require__(/*! ../station/station.module */ "./apps/nest-app/src/station/station.module.ts");
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    common_1.Module({
        imports: [garage_module_1.GarageModule, bikes_module_1.BikesModule, station_module_1.StationModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
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

/***/ "./apps/nest-app/src/bikes/bikes.controller.ts":
/*!*****************************************************!*\
  !*** ./apps/nest-app/src/bikes/bikes.controller.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a, _b;
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
    getBikesByStationId(data) {
        return this.bikesService.getBikesByStationId(data.id);
    }
    addBike(bike) {
        return this.bikesService.addBike(bike);
    }
    editBike(bike) {
        return this.bikesService.editBike(bike);
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
], BikesController.prototype, "getBikesByStationId", null);
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
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof bikes_service_1.BikesService !== "undefined" && bikes_service_1.BikesService) === "function" ? _b : Object])
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
    getBikesByStationId(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return knex_lib_1.k.getBikesByStationIdDb(id);
        });
    }
    addBike(bike) {
        return knex_lib_1.k.addBikeDb(bike);
    }
    editBike(bike) {
        console.log('service' + bike);
        return knex_lib_1.k.editBikeDb(bike);
    }
    getBikeById(id) {
        return knex_lib_1.k.getBikeByIdDb(id);
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
};
StationService = tslib_1.__decorate([
    common_1.Injectable()
], StationService);
exports.StationService = StationService;


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
const options = {
    client: 'mysql2',
    connection: {
        host: 'localhost',
        user: 'root',
        password: '',
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
    getBikesByStationIdDb(id) {
        return knex('bikes').select('*').where({ station_id: id });
    }
    getStationByGarageIdDb(id) {
        return knex('station').select('*').where({ garage_id: id });
    }
    getGarageDb() {
        return knex('garage').select('id');
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
            station_id: bike.station,
        });
    }
    getBikeByIdDb(id) {
        return knex('bikes').select('*').where({ id: id });
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
        console.log('db' + station.id);
        return knex('station').where({ id: station.id }).update({
            id: station.id,
            capacityMax: station.capacityMax,
            garage_id: station.garage,
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

module.exports = __webpack_require__(/*! C:\Users\jeane\Desktop\YNOV M1\Fullstack\TP FINAL\hynari_bike\apps\nest-app\src\main.ts */"./apps/nest-app/src/main.ts");


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

/***/ "knex":
/*!***********************!*\
  !*** external "knex" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("knex");

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