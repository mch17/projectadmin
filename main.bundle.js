webpackJsonp([1,4],{

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuardService = (function () {
    function AuthGuardService(router) {
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (localStorage.getItem('username')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page
        this.router.navigate(['/loginadmin']);
        return false;
    };
    return AuthGuardService;
}());
AuthGuardService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], AuthGuardService);

var _a;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_challenge_challenge_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_challenge_challenge_modal__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChallengeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChallengeComponent = (function () {
    function ChallengeComponent(challengeService, router) {
        this.challengeService = challengeService;
        this.router = router;
        this.challenge = new __WEBPACK_IMPORTED_MODULE_2_app_challenge_challenge_modal__["a" /* Challenge */]();
    }
    ChallengeComponent.prototype.ngOnInit = function () {
        this.getAllCourses();
    };
    ChallengeComponent.prototype.save = function () {
        var _this = this;
        this.successMessage = '';
        this.errorMessage = '';
        this.challengeService.createChallenge(this.challenge)
            .subscribe(function (challenge) {
            _this.successMessage = 'challenge was created!';
            console.log('challenge was created');
            console.log(challenge);
            _this.router.navigate(['/challengelist']);
            //  location.reload();
        });
    };
    ChallengeComponent.prototype.getAllCourses = function () {
        var _this = this;
        this.challengeService.getAllChallenges()
            .subscribe(function (challenges2) { return _this.challenges = challenges2; }, function (error) { return _this.errorMessage = error; });
    };
    return ChallengeComponent;
}());
ChallengeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-challenge',
        template: __webpack_require__(538),
        styles: [__webpack_require__(501)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_challenge_challenge_service__["a" /* ChallengeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_challenge_challenge_service__["a" /* ChallengeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object])
], ChallengeComponent);

var _a, _b;
//# sourceMappingURL=challenge.component.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_challenge_challenge_service__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChallengelistComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChallengelistComponent = (function () {
    function ChallengelistComponent(challengeService) {
        this.challengeService = challengeService;
    }
    ChallengelistComponent.prototype.ngOnInit = function () {
        this.getAllChallenges();
    };
    ChallengelistComponent.prototype.callType = function (filter) {
        var _this = this;
        this.challengeService.findChallengeById(filter)
            .subscribe(function (challenges2) { return _this.challenge = challenges2; }, function (error) { return _this.errorMessage = error; });
        console.log("sssssssssssssss" + filter);
        console.log("sssssssssssssss" + this.challenge.id);
    };
    ChallengelistComponent.prototype.getAllChallenges = function () {
        var _this = this;
        this.challengeService.getAllChallenges()
            .subscribe(function (challenges) { return _this.challenges = challenges; }, function (error) { return _this.errorMessage = error; });
    };
    return ChallengelistComponent;
}());
ChallengelistComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-challengelist',
        template: __webpack_require__(539),
        styles: [__webpack_require__(502)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_challenge_challenge_service__["a" /* ChallengeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_challenge_challenge_service__["a" /* ChallengeService */]) === "function" && _a || Object])
], ChallengelistComponent);

var _a;
//# sourceMappingURL=challengelist.component.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_challenge_challenge_service__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChallengemodifComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChallengemodifComponent = (function () {
    function ChallengemodifComponent(route, challengeService, router) {
        this.route = route;
        this.challengeService = challengeService;
        this.router = router;
    }
    ChallengemodifComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            _this.varGlobal = params['id'];
            _this.challengeService.findChallengeById(_this.varGlobal).subscribe(function (challenge) {
                _this.challenge = challenge;
            });
        });
    };
    ChallengemodifComponent.prototype.updateUser = function () {
        var _this = this;
        this.successMessage = '';
        this.errorMessage = '';
        this.challengeService.updateChallenge(this.challenge)
            .subscribe(function (challenge) {
            _this.successMessage = 'challenge was updated.';
            console.log('challenge was updated');
            _this.router.navigate(['/challengelist']);
        }, function (err) {
            _this.errorMessage = err;
            console.error(err);
        });
    };
    return ChallengemodifComponent;
}());
ChallengemodifComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-challengemodif',
        template: __webpack_require__(540),
        styles: [__webpack_require__(503)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_challenge_challenge_service__["a" /* ChallengeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_challenge_challenge_service__["a" /* ChallengeService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object])
], ChallengemodifComponent);

var _a, _b, _c;
//# sourceMappingURL=challengemodif.component.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DebdoubComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DebdoubComponent = (function () {
    function DebdoubComponent() {
        this.filterNoteValue = 0;
        this.listeCours = [
            {
                "id": 1,
                "NomCours": "cours1",
                "NotesCours": "1"
            },
            {
                "id": 2,
                "NomCours": "cours2",
                "NotesCours": "4"
            },
            {
                "id": 3,
                "NomCours": "cours3",
                "NotesCours": "2"
            },
            {
                "id": 4,
                "NomCours": "cours4",
                "NotesCours": "1"
            },
            {
                "id": 5,
                "NomCours": "cours5",
                "NotesCours": "3"
            },
            {
                "id": 6,
                "NomCours": "cours6",
                "NotesCours": "4"
            },
            {
                "id": 7,
                "NomCours": "cours7",
                "NotesCours": "5"
            }
        ];
    }
    DebdoubComponent.prototype.changed = function (value) {
        this.filterNoteValue = value;
    };
    return DebdoubComponent;
}());
DebdoubComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-debdoub',
        template: __webpack_require__(541),
        styles: [__webpack_require__(504)]
    })
], DebdoubComponent);

//# sourceMappingURL=debdoub.component.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_cours_cours_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_cours_cours_modal__ = __webpack_require__(175);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoursComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CoursComponent = (function () {
    function CoursComponent(coursService) {
        this.coursService = coursService;
        this.cours = new __WEBPACK_IMPORTED_MODULE_2_app_cours_cours_modal__["a" /* Cours */]();
        this.p = 1;
        this.page = 4;
        this.collection = [];
    }
    // ngOnInit() {
    //   this.getAllCourses();
    // }
    CoursComponent.prototype.ngOnInit = function () {
        for (var i = 1; i <= 100; i++) {
            this.collection.push("item " + i);
        }
        this.getAllCourses();
    };
    CoursComponent.prototype.clear = function () { };
    CoursComponent.prototype.save = function () {
        var _this = this;
        this.successMessage = '';
        this.errorMessage = '';
        this.coursService.createCours(this.cours)
            .subscribe(function (cours) {
            _this.successMessage = 'cours was created!';
            console.log('cours was created');
            console.log(cours);
            _this.getAllCourses();
            //  location.reload();
        });
    };
    CoursComponent.prototype.getAllCourses = function () {
        var _this = this;
        this.coursService.getAllCours()
            .subscribe(function (courses) { return _this.courses = courses; }, function (error) { return _this.errorMessage = error; });
    };
    return CoursComponent;
}());
CoursComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-cours',
        template: __webpack_require__(542),
        styles: [__webpack_require__(505)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_cours_cours_service__["a" /* CoursService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_cours_cours_service__["a" /* CoursService */]) === "function" && _a || Object])
], CoursComponent);

var _a;
//# sourceMappingURL=cours.component.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cours; });
var Cours = (function () {
    function Cours(id, aboutTheCours, title, whatwillStudy, requirement, durantion, nbofLecture, level, category) {
        this.id = id;
        this.aboutTheCours = aboutTheCours;
        this.title = title;
        this.whatwillStudy = whatwillStudy;
        this.requirement = requirement;
        this.durantion = durantion;
        this.nbofLecture = nbofLecture;
        this.level = level;
        this.category = category;
    }
    return Cours;
}());

//# sourceMappingURL=cours.modal.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_cours_cours_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_cours_section_modal__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_cours_section_service__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SectionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SectionComponent = (function () {
    function SectionComponent(sectionService, route, coursService) {
        this.sectionService = sectionService;
        this.route = route;
        this.coursService = coursService;
        this.errorMessage = '';
        this.section = new __WEBPACK_IMPORTED_MODULE_3_app_cours_section_modal__["a" /* Section */]();
    }
    SectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            _this.varGlobal = params['id'];
            _this.coursService.findCoursById(_this.varGlobal).subscribe(function (cours) {
                _this.cours = cours;
            });
        });
        this.getCoursSections(this.varGlobal);
    };
    SectionComponent.prototype.clear = function () { };
    SectionComponent.prototype.save = function () {
        var _this = this;
        this.sectionService.addSectionCours(this.section, this.varGlobal)
            .subscribe(function (quizQuestion) {
            _this.successMessage = 'section was created!';
            console.log('section was created');
            console.log(quizQuestion);
            _this.getCoursSections(_this.varGlobal);
            // navigate back to the users page
            // this.router.navigate(['/users']);
        });
    };
    SectionComponent.prototype.getCoursSections = function ($id) {
        var _this = this;
        this.sectionService.getCoursSections(this.varGlobal)
            .subscribe(function (sections) { return _this.sections = sections; }, function (error) { return _this.errorMessage = error; });
    };
    return SectionComponent;
}());
SectionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-section',
        template: __webpack_require__(543),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_app_cours_section_service__["a" /* SectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_cours_section_service__["a" /* SectionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_app_cours_cours_service__["a" /* CoursService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_cours_cours_service__["a" /* CoursService */]) === "function" && _c || Object])
], SectionComponent);

var _a, _b, _c;
//# sourceMappingURL=section.component.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Section; });
var Section = (function () {
    function Section(id, sectionName) {
        this.id = id;
        this.sectionName = sectionName;
    }
    return Section;
}());

//# sourceMappingURL=section.modal.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_cours_section_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_cours_support_cours_service__ = __webpack_require__(179);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportCoursComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SupportCoursComponent = (function () {
    function SupportCoursComponent(route, sectionService, supportCoursService) {
        this.route = route;
        this.sectionService = sectionService;
        this.supportCoursService = supportCoursService;
        this.URL = 'http://localhost:8080/api/cours/section/support';
        this.errorMessage = '';
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
    }
    SupportCoursComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            _this.varGlobal = params['id'];
            _this.uploader = new __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__["FileUploader"]({
                url: _this.URL + "/" + _this.varGlobal
            });
            //  this.sectionService.findSectionSupportById(this.varGlobal).subscribe(section => {
            //  this.Section = section;
            //  });
        });
        //this.getAllCourses();
    };
    SupportCoursComponent.prototype.getAllCourses = function () {
        var _this = this;
        this.supportCoursService.getAllSupports()
            .subscribe(function (supports) { return _this.supports = supports; }, function (error) { return _this.errorMessage = error; });
    };
    SupportCoursComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    SupportCoursComponent.prototype.fileOverAnother = function (e) {
        this.hasAnotherDropZoneOver = e;
    };
    return SupportCoursComponent;
}());
SupportCoursComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-upload-file',
        template: __webpack_require__(544),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_cours_section_service__["a" /* SectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_cours_section_service__["a" /* SectionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_app_cours_support_cours_service__["a" /* SupportCoursService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_cours_support_cours_service__["a" /* SupportCoursService */]) === "function" && _c || Object])
], SupportCoursComponent);

var _a, _b, _c;
//# sourceMappingURL=support-cours.component.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportCoursService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SupportCoursService = (function () {
    function SupportCoursService(http) {
        this.http = http;
        this.SupportUrl = 'http://localhost:8080/api/allsupportcours/18';
    }
    SupportCoursService.prototype.getAllSupports = function () {
        // ...using get request
        return this.http.get(this.SupportUrl)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    return SupportCoursService;
}());
SupportCoursService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], SupportCoursService);

var _a;
//# sourceMappingURL=support-cours.service.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginUserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginUserComponent = (function () {
    function LoginUserComponent() {
    }
    LoginUserComponent.prototype.ngOnInit = function () {
    };
    return LoginUserComponent;
}());
LoginUserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login-user',
        template: __webpack_require__(547),
        styles: [__webpack_require__(508)]
    }),
    __metadata("design:paramtypes", [])
], LoginUserComponent);

//# sourceMappingURL=login-user.component.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PdfReaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PdfReaderComponent = (function () {
    function PdfReaderComponent() {
        this.page = 1;
    }
    return PdfReaderComponent;
}());
PdfReaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-pdf-reader',
        template: __webpack_require__(548),
        styles: [__webpack_require__(509)]
    }),
    __metadata("design:paramtypes", [])
], PdfReaderComponent);

//# sourceMappingURL=pdf-reader.component.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_modal__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quiz_service__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__question_service__ = __webpack_require__(90);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailQuizComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DetailQuizComponent = (function () {
    function DetailQuizComponent(quizService, questionService, route) {
        this.quizService = quizService;
        this.questionService = questionService;
        this.route = route;
        this.successMessage = '';
        this.errorMessage = '';
        this.quizQuestion = new __WEBPACK_IMPORTED_MODULE_1__question_modal__["a" /* QuizQuestion */]();
    }
    DetailQuizComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            _this.varGlobal = params['id'];
            _this.quizService.findQuizById(_this.varGlobal).subscribe(function (quiz) {
                _this.quiz = quiz;
            });
        });
    };
    DetailQuizComponent.prototype.save = function () {
        var _this = this;
        this.questionService.addQuizQuestion(this.quizQuestion, this.varGlobal)
            .subscribe(function (quizQuestion) {
            _this.successMessage = 'quizQuestion was created!';
            console.log('quizQuestion was created');
            console.log(quizQuestion);
            _this.quizService.findQuizById(_this.varGlobal).subscribe(function (quiz) {
                _this.quiz = quiz;
            });
        });
    };
    DetailQuizComponent.prototype.clear = function () { };
    return DetailQuizComponent;
}());
DetailQuizComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-detail-cours',
        template: __webpack_require__(549)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__quiz_service__["a" /* QuizService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__quiz_service__["a" /* QuizService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__question_service__["a" /* QuestionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__question_service__["a" /* QuestionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], DetailQuizComponent);

var _a, _b, _c;
//# sourceMappingURL=detail-quiz.component.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quiz_modal__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quiz_service__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_cours_cours_service__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var QuizComponent = (function () {
    function QuizComponent(quizService, router, coursService) {
        this.quizService = quizService;
        this.router = router;
        this.coursService = coursService;
        this.quiz = new __WEBPACK_IMPORTED_MODULE_2__quiz_modal__["a" /* Quiz */]();
    }
    QuizComponent.prototype.ngOnInit = function () {
        this.getAllQuizs();
        this.getAllCourses();
    };
    QuizComponent.prototype.getAllQuizs = function () {
        var _this = this;
        this.quizService.getQuizs()
            .subscribe(function (quizs) { return _this.quizs = quizs; }, function (error) { return _this.errorMessage = error; });
    };
    QuizComponent.prototype.clear = function () { };
    QuizComponent.prototype.save = function () {
        var _this = this;
        this.successMessage = '';
        this.errorMessage = '';
        this.getAllQuizs();
        this.getAllCourses();
        this.quizService.createQuiz(this.quiz)
            .subscribe(function (quiz) {
            _this.successMessage = 'quiz was created!';
            console.log('quiz was created');
            console.log(quiz);
            location.reload();
        });
    };
    QuizComponent.prototype.getAllCourses = function () {
        var _this = this;
        this.coursService.getAllCours()
            .subscribe(function (courses) { return _this.courses = courses; }, function (error) { return _this.errorMessage = error; });
    };
    return QuizComponent;
}());
QuizComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-quiz',
        template: __webpack_require__(550),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__quiz_service__["a" /* QuizService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__quiz_service__["a" /* QuizService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_app_cours_cours_service__["a" /* CoursService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_cours_cours_service__["a" /* CoursService */]) === "function" && _c || Object])
], QuizComponent);

var _a, _b, _c;
//# sourceMappingURL=quiz.component.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reponse_modal__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reponse_service__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_quiz_question_service__ = __webpack_require__(90);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReponseComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReponseComponent = (function () {
    function ReponseComponent(questionService, reponseService, route) {
        this.questionService = questionService;
        this.reponseService = reponseService;
        this.route = route;
        this.reponsesAnswers = ['true', 'false'];
        this.reponse = new __WEBPACK_IMPORTED_MODULE_2__reponse_modal__["a" /* QuizReponse */]();
    }
    ReponseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            _this.varGlobal = params['id'];
            _this.questionService.findquestionsById(_this.varGlobal).subscribe(function (question) {
                _this.question = question;
            });
        });
        //  this.getAllReponses(this.varGlobal);
    };
    ReponseComponent.prototype.getAllReponses = function ($id) {
        var _this = this;
        this.reponseService.getReponses(this.varGlobal)
            .subscribe(function (reponses) { return _this.reponses = reponses; }, function (error) { return _this.errorMessage = error; });
    };
    ReponseComponent.prototype.clear = function () { };
    ReponseComponent.prototype.save = function () {
        var _this = this;
        this.successMessage = '';
        this.errorMessage = '';
        this.reponseService.addQuizReponses(this.reponse, this.varGlobal)
            .subscribe(function (reponse) {
            _this.successMessage = 'reponse was created!';
            console.log('reponse was created');
            console.log(reponse);
            _this.questionService.findquestionsById(_this.varGlobal).subscribe(function (question) {
                _this.question = question;
            });
        });
    };
    return ReponseComponent;
}());
ReponseComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-reponse',
        template: __webpack_require__(551),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_app_quiz_question_service__["a" /* QuestionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_quiz_question_service__["a" /* QuestionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__reponse_service__["a" /* ReponseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__reponse_service__["a" /* ReponseService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], ReponseComponent);

var _a, _b, _c;
//# sourceMappingURL=reponse.component.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReponseService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReponseService = (function () {
    function ReponseService(http) {
        this.http = http;
        this.ReponsesUrl = 'http://localhost:8080/api/quizreponses';
        this.url = 'http://localhost:8080/api/aaaaaaaaa';
    }
    ReponseService.prototype.addQuizReponses = function (body, id) {
        var bodyString = JSON.stringify(body); // Stringify payload
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers }); // Create a request option
        return this.http.post(this.ReponsesUrl + "/" + id, body, options) // ...using post request
            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
            .catch(this.handleError);
    };
    ReponseService.prototype.getReponses = function (id) {
        // ...using get request
        return this.http.get(this.url + "/" + id)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    ReponseService.prototype.handleError = function (err) {
        var errMessage;
        if (err instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Response */]) {
            var body = err.json() || '';
            var error = body.error || JSON.stringify(body);
            errMessage = err.status + " - " + (err.statusText || '') + " " + error;
        }
        else {
            errMessage = err.message ? err.message : err.toString();
        }
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(errMessage);
    };
    return ReponseService;
}());
ReponseService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], ReponseService);

var _a;
//# sourceMappingURL=reponse.service.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadFileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var URL = 'http://localhost:8080/api/k';
var UploadFileComponent = (function () {
    function UploadFileComponent() {
        this.uploader = new __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__["FileUploader"]({ url: URL });
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
    }
    UploadFileComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    UploadFileComponent.prototype.fileOverAnother = function (e) {
        this.hasAnotherDropZoneOver = e;
    };
    return UploadFileComponent;
}());
UploadFileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-upload-file',
        template: __webpack_require__(552),
        styles: [__webpack_require__(510)],
    })
], UploadFileComponent);

//# sourceMappingURL=upload-file.component.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_cours_section_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_cours_section_modal__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_cours_cours_service__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoursDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CoursDetailComponent = (function () {
    function CoursDetailComponent(sectionService, router, route, coursService) {
        this.sectionService = sectionService;
        this.router = router;
        this.route = route;
        this.coursService = coursService;
        this.errorMessage = '';
        this.section = new __WEBPACK_IMPORTED_MODULE_3_app_cours_section_modal__["a" /* Section */]();
    }
    CoursDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            _this.varGlobal = params['id'];
            _this.coursService.findCoursById(_this.varGlobal).subscribe(function (cours) {
                _this.cours = cours;
            });
        });
        this.getCoursSections(this.varGlobal);
    };
    CoursDetailComponent.prototype.getCoursSections = function ($id) {
        var _this = this;
        this.sectionService.getCoursSections(this.varGlobal)
            .subscribe(function (sections) { return _this.sections = sections; }, function (error) { return _this.errorMessage = error; });
    };
    return CoursDetailComponent;
}());
CoursDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-cours-detail',
        template: __webpack_require__(553),
        styles: [__webpack_require__(511)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_cours_section_service__["a" /* SectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_cours_section_service__["a" /* SectionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_app_cours_cours_service__["a" /* CoursService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_cours_cours_service__["a" /* CoursService */]) === "function" && _d || Object])
], CoursDetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=cours-detail.component.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplaySupportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DisplaySupportComponent = (function () {
    function DisplaySupportComponent(route, router) {
        this.route = route;
        this.router = router;
        this.videoStatus = 1;
        this.playpauseimg = '/assets/video/play.svg';
        this.volumeMuteImg = '/assets/video/volume.svg';
        this.currentTimeRange = 0;
        this.movieLoaded = false;
        this.videoDuration = '00:00';
        this.currTime = '';
        this.volume = 5;
        this.hidectrl = true;
        this.page = 1;
        this.pdfSrc = 'http://localhost:8080/api/allsupportcours';
    }
    DisplaySupportComponent.prototype.ngOnInit = function () {
        //
        // this.subscription = this.route.params.subscribe((params: any) => {
        //   this.varGlobal = params['id'];
        //   this.url = `${this.pdfSrc}/${this.varGlobal}`
        // });
        this.mimtype = this.route.snapshot.params['contentType'];
        this.varGlobal = this.route.snapshot.params['id'];
        console.log("hhh" + this.varGlobal);
        this.url = this.pdfSrc + "/" + this.varGlobal;
        this.noumrou = 1 + this.page;
        this.url2 = this.url;
    };
    ;
    DisplaySupportComponent.prototype.decrease = function () {
        this.noumrou--;
        this.page = -1 + this.page;
        console.log(this.page);
    };
    DisplaySupportComponent.prototype.increment = function () {
        this.page++;
        this.noumrou = 1 + this.page;
        console.log(this.page);
    };
    DisplaySupportComponent.prototype.getBrowser = function () {
        if (navigator.userAgent.indexOf('Chrome') !== -1) {
            return 'Webkit';
        }
        else if (navigator.userAgent.indexOf('Opera') !== -1) {
            return 'Opera';
        }
        else if (navigator.userAgent.indexOf('MSIE') !== -1) {
            return 'IE';
        }
        else if (navigator.userAgent.indexOf('Firefox') !== -1) {
            return 'Firefox';
        }
        else if (navigator.userAgent.indexOf('Safari') !== -1) {
            return 'Webkit';
        }
        else {
            return 'unknown';
        }
    };
    DisplaySupportComponent.prototype.secondsToMinutesAndSeconds = function (time) {
        var minutes = Math.floor(time / 60);
        var seconds = Math.round(time % 60);
        return '' + minutes + ':' + seconds;
    };
    DisplaySupportComponent.prototype.makeFullScreen = function (mp) {
        if (this.getBrowser() === 'Webkit') {
            mp.webkitEnterFullScreen();
        }
        else if (this.getBrowser() === 'Firefox') {
            mp.mozRequestFullScreen();
        }
        else {
            return 'unknown';
        }
    };
    DisplaySupportComponent.prototype.hideControl = function (show) {
        this.hidectrl = show;
    };
    DisplaySupportComponent.prototype.updateDisplayTime = function (moviePlayer) {
        this.currTime = this.secondsToMinutesAndSeconds(moviePlayer.currentTime);
        this.currentTimeRange = moviePlayer.currentTime;
    };
    DisplaySupportComponent.prototype.onMuteUnmute = function (moviePlayer) {
        if (moviePlayer.muted) {
            moviePlayer.muted = false;
            this.volumeMuteImg = '/assets/video/volume.svg';
        }
        else {
            moviePlayer.muted = true;
            this.volumeMuteImg = '/assets/video/mute.svg';
        }
    };
    DisplaySupportComponent.prototype.seek = function (evt, moviePlayer) {
        moviePlayer.pause();
        moviePlayer.currentTime = evt.target.value;
        this.currTime = this.secondsToMinutesAndSeconds(moviePlayer.currentTime);
        this.currentTimeRange = moviePlayer.currentTime;
        moviePlayer.play();
        this.playpauseimg = '/assets/video/pause.svg';
    };
    DisplaySupportComponent.prototype.seekVolume = function (event, moviePlayer) {
        var volumeToBeSet = event.target.value;
        moviePlayer.volume = volumeToBeSet / 10;
    };
    DisplaySupportComponent.prototype.processMetaData = function (moviePlayer) {
        var self = this;
        this.movieLoaded = true;
        moviePlayer.volume = 0.5;
        this.videoDuration = this.secondsToMinutesAndSeconds(moviePlayer.duration);
    };
    DisplaySupportComponent.prototype.onPlayPause = function (moviePlayer) {
        if (moviePlayer.paused) {
            moviePlayer.play();
            this.playpauseimg = '/assets/video/pause.svg';
        }
        else {
            moviePlayer.pause();
            this.playpauseimg = '/assets/video/play.svg';
        }
    };
    return DisplaySupportComponent;
}());
DisplaySupportComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-display-support',
        template: __webpack_require__(554),
        styles: [__webpack_require__(512)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], DisplaySupportComponent);

var _a, _b;
//# sourceMappingURL=display-support.component.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_cours_cours_modal__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_cours_cours_service__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListeCoursComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListeCoursComponent = (function () {
    function ListeCoursComponent(coursService) {
        this.coursService = coursService;
        this.cours = new __WEBPACK_IMPORTED_MODULE_1_app_cours_cours_modal__["a" /* Cours */]();
    }
    ListeCoursComponent.prototype.ngOnInit = function () {
        this.get();
    };
    ListeCoursComponent.prototype.get = function () {
        var _this = this;
        console.log("hello");
        this.coursService.getAllCours()
            .subscribe(function (courses) { return _this.courses = courses; }, function (error) { return _this.errorMessage = error; });
    };
    return ListeCoursComponent;
}());
ListeCoursComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-liste-cours',
        template: __webpack_require__(555),
        styles: [__webpack_require__(513)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_cours_cours_service__["a" /* CoursService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_cours_cours_service__["a" /* CoursService */]) === "function" && _a || Object])
], ListeCoursComponent);

var _a;
//# sourceMappingURL=liste-cours.component.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_user_lms_quiz_lms_quiz_service__ = __webpack_require__(191);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LmsQuizComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LmsQuizComponent = (function () {
    function LmsQuizComponent(quizService, router) {
        this.quizService = quizService;
        this.router = router;
        this.mohamed = 1;
        this.score = 0;
        this.score2 = 0;
        this.res2 = 0;
        this.numbers = new Array();
        this.cliks = new Array();
        this.res = 0;
        this.questionTypeId = 0;
        this.today = Date.now();
        this.config = {
            'allowBack': true,
            'allowReview': true,
            'autoMove': false,
            'duration': 0,
            'pageSize': 1,
            'requiredAll': false,
            'richText': false,
            'shuffleQuestions': false,
            'shuffleOptions': false,
            'showClock': false,
            'showPager': true,
            'theme': 'none'
        };
        this.pager = {
            index: 0,
            size: 1,
            count: 1
        };
        this.lineChartLabels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
        this.lineChartOptions = {
            responsive: true
        };
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                backgroundColor: 'rgba(77,83,96,0.2)',
                borderColor: 'rgba(77,83,96,1)',
                pointBackgroundColor: 'rgba(77,83,96,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            },
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
    }
    LmsQuizComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.quizService.getQuizs().subscribe(function (quiz) {
            _this.quiz = quiz;
            _this.pager.count = _this.quiz.questions.length;
            _this.mode = 'quiz';
        });
        //var length = this.numbers.push(1);
        // console.log("new numbers is : " + this.numbers.join(' , '));
    };
    Object.defineProperty(LmsQuizComponent.prototype, "filteredQuestions", {
        get: function () {
            return (this.quiz.questions) ?
                this.quiz.questions.slice(this.pager.index, this.pager.index + this.pager.size) : [];
        },
        enumerable: true,
        configurable: true
    });
    LmsQuizComponent.prototype.onSelect = function (question, option) {
        question.options.forEach(function (x) {
            if (x.id !== option.id)
                x.selected = false;
        });
        if (this.config.autoMove) {
            this.goTo(this.pager.index + 1);
        }
        if (question.options.every(function (x) { return x.selected === x.isAnswer; }) === true) {
            this.score2++;
            this.res2 = this.score2;
        }
        else {
            this.score2--;
            if (this.score2 < 0) {
                this.score2 = 0;
            }
            this.res2 = this.score2;
        }
        for (this.index = 0; this.index < 1; this.index++) {
            //  var length = this.numbers.push(0);
            var length = this.numbers.push(this.res2);
            var length2 = this.cliks.push(new Date().getSeconds());
            console.log("clicks" + this.numbers);
            console.log("eeeeeeeeeeeeeeeeeeeeee" + this.numbers);
        }
        // for (this.index2 = 1; this.index2 <= 1; this.index2++) {
        //   //  var length = this.numbers.push(0);
        //   var length = this.cliks.push(new Date().getSeconds());
        //   //  this.cliks.push(new UTC().toLocaleDateString());
        //   console.log("cliks" + this.cliks)
        // }
    };
    LmsQuizComponent.prototype.goTo = function (index) {
        if (index >= 0 && index < this.pager.count) {
            this.pager.index = index;
            this.mode = 'quiz';
        }
    };
    LmsQuizComponent.prototype.isAnswered = function (question) {
        return question.options.find(function (x) { return x.selected; }) ? 'Answered' : 'Not Answered';
    };
    ;
    LmsQuizComponent.prototype.isCorrect = function (question) {
        //this.score=this.pager.count
        if (question.options.every(function (x) { return x.selected === x.isAnswer; }) === true) {
            this.score++;
            this.res = this.score / 2;
        }
        return question.options.every(function (x) { return x.selected === x.isAnswer; }) ? 'correct' : 'wrong';
    };
    ;
    LmsQuizComponent.prototype.onSubmit = function () {
        var answers = [];
        this.quiz.questions.forEach(function (x) { return answers.push({ 'answered': x.answered }); });
        // Post your data to the server here. answers contains the questionId and the users' answer.
        // console.log("zzzzzzzzzzzzzzzzzzz" + this.quiz.questions)
        this.mode = 'result';
    };
    LmsQuizComponent.prototype.onTrackAnswers = function () {
        this.lineChartData = [
            { data: this.numbers, label: 'Score par rapport aux tentatives' },
        ];
        //  this.cliks.push(new UTC().toLocaleDateString());
        this.mode = 'track';
    };
    // events
    LmsQuizComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    LmsQuizComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    return LmsQuizComponent;
}());
LmsQuizComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-lms-quiz',
        template: __webpack_require__(556),
        styles: [__webpack_require__(514)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_user_lms_quiz_lms_quiz_service__["a" /* LmsQuizService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_user_lms_quiz_lms_quiz_service__["a" /* LmsQuizService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], LmsQuizComponent);

var _a, _b;
//# sourceMappingURL=lms-quiz.component.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LmsQuizService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LmsQuizService = (function () {
    function LmsQuizService(http) {
        this.http = http;
        this.QuizsUrl = 'http://localhost:8080/api/quiz/1';
    }
    LmsQuizService.prototype.getQuizs = function () {
        // ...using get request
        return this.http.get(this.QuizsUrl)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    return LmsQuizService;
}());
LmsQuizService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */]) === "function" && _a || Object])
], LmsQuizService);

var _a;
//# sourceMappingURL=lms-quiz.service.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChartsComponent = (function () {
    function ChartsComponent() {
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = ['Développement entreprise', 'Gestion de projet',
            'Entrepreneuriat', ' Développement personnel', 'Communication', 'Qualité',
            'Sécurité informatique'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [65, 40, 80, 70, 56, 32, 18], label: 'Catégorie' },
        ];
    }
    ChartsComponent.prototype.ngOnInit = function () {
    };
    // events
    ChartsComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    ChartsComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    return ChartsComponent;
}());
ChartsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-charts',
        template: __webpack_require__(557),
        styles: [__webpack_require__(515)]
    }),
    __metadata("design:paramtypes", [])
], ChartsComponent);

//# sourceMappingURL=charts.component.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_usersmanagm_loginAdmin_loginadmin_service__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginAdminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginAdminComponent = (function () {
    function LoginAdminComponent(router, loginService) {
        this.router = router;
        this.loginService = loginService;
    }
    LoginAdminComponent.prototype.login = function (event, username, password) {
        var _this = this;
        console.log('hello        ' + username);
        event.preventDefault();
        this.loginService.login3(username, password)
            .subscribe(function () {
            _this.router.navigate(['cours']);
        }, this.handleError);
    };
    LoginAdminComponent.prototype.handleError = function (error) {
        console.log(error.status);
    };
    LoginAdminComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(['/login']);
    };
    LoginAdminComponent.prototype.isLogged = function () {
        if (localStorage.getItem('username')) {
            return true;
        }
        else {
            return false;
        }
    };
    return LoginAdminComponent;
}());
LoginAdminComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login-admin',
        template: __webpack_require__(558),
        styles: [__webpack_require__(516)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_app_usersmanagm_loginAdmin_loginadmin_service__["a" /* LoginadminService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_usersmanagm_loginAdmin_loginadmin_service__["a" /* LoginadminService */]) === "function" && _b || Object])
], LoginAdminComponent);

var _a, _b;
//# sourceMappingURL=login-admin.component.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginadminService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginadminService = (function () {
    function LoginadminService(http) {
        this.http = http;
        this.loggedIn = false;
        this.authUrl = 'http://localhost:8080/api/authenticate';
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
        //  this.loggedIn = !!localStorage.getItem('auth_token');
    }
    LoginadminService.prototype.login3 = function (username, password) {
        var _this = this;
        var loginRequest = JSON.stringify({ username: username, password: password });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
        return this.http.post('http://localhost:8080/api/authenticate', loginRequest, { headers: headers })
            .map(function (response) {
            // login successful if there's a jwt token in the response
            var token = response.json() && response.json().id_token;
            if (token) {
                // set token property
                _this.token = token;
                console.log("token+++++++++++++++++" + token);
                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('token', token);
                localStorage.setItem('username', username);
                //     console.log("eeeeeeeeeee+"+JSON.stringify({   username: username, token: token }));
                //   localStorage.setItem('auth_token',token);
                // return true to indicate successful login
                return true;
            }
            else {
                // return false to indicate failed login
                return false;
            }
        });
    };
    LoginadminService.prototype.logout = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
    };
    LoginadminService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error');
    };
    LoginadminService.prototype.isSignedIn = function () {
        return localStorage.getItem('jwt') !== null;
    };
    return LoginadminService;
}());
LoginadminService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], LoginadminService);

var _a;
//# sourceMappingURL=loginadmin.service.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_usersmanagm_usersmang_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsermeditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsermeditComponent = (function () {
    function UsermeditComponent(UsersmangService, router, route) {
        this.UsersmangService = UsersmangService;
        this.router = router;
        this.route = route;
    }
    UsermeditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            _this.varGlobal = params['login'];
            _this.UsersmangService.findUserBylogin(_this.varGlobal).subscribe(function (user) {
                _this.user = user;
            });
        });
    };
    UsermeditComponent.prototype.updateUser = function () {
        var _this = this;
        this.successMessage = '';
        this.errorMessage = '';
        this.UsersmangService.updateUser(this.user)
            .subscribe(function (challenge) {
            _this.successMessage = 'user was updated.';
            console.log('user was updated');
            _this.router.navigate(['/userml']);
        }, function (err) {
            _this.errorMessage = err;
            console.error(err);
        });
    };
    return UsermeditComponent;
}());
UsermeditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-usermedit',
        template: __webpack_require__(559),
        styles: [__webpack_require__(517)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_usersmanagm_usersmang_service__["a" /* UsersmangService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_usersmanagm_usersmang_service__["a" /* UsersmangService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], UsermeditComponent);

var _a, _b, _c;
//# sourceMappingURL=usermedit.component.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_usersmanagm_usersmang_service__ = __webpack_require__(57);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsermlistComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsermlistComponent = (function () {
    function UsermlistComponent(UsersmangService) {
        this.UsersmangService = UsersmangService;
        this.errorMessage = 'error';
    }
    UsermlistComponent.prototype.ngOnInit = function () {
        this.getAllUserManaged();
    };
    UsermlistComponent.prototype.getAllUserManaged = function () {
        var _this = this;
        this.UsersmangService.getAllUsersM()
            .subscribe(function (courses) { return _this.users = courses; }, function (error) { return _this.errorMessage = error; });
    };
    return UsermlistComponent;
}());
UsermlistComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-usermlist',
        template: __webpack_require__(560),
        styles: [__webpack_require__(518)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_usersmanagm_usersmang_service__["a" /* UsersmangService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_usersmanagm_usersmang_service__["a" /* UsersmangService */]) === "function" && _a || Object])
], UsermlistComponent);

var _a;
//# sourceMappingURL=usermlist.component.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_usersmanagm_usersmang_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_usersmanagm_coucou__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsersComponent = (function () {
    function UsersComponent(UsersmangService, router) {
        this.UsersmangService = UsersmangService;
        this.router = router;
        this.user = new __WEBPACK_IMPORTED_MODULE_2_app_usersmanagm_coucou__["a" /* User */]();
    }
    UsersComponent.prototype.ngOnInit = function () {
    };
    UsersComponent.prototype.clear = function () { };
    UsersComponent.prototype.save = function () {
        var _this = this;
        this.successMessage = '';
        this.errorMessage = '';
        this.UsersmangService.createUSerrsM(this.user)
            .subscribe(function (user) {
            _this.successMessage = 'user was created!';
            console.log('user was created');
            console.log(user);
            _this.router.navigate(['userml']);
            //  location.reload();
        });
    };
    return UsersComponent;
}());
UsersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-users',
        template: __webpack_require__(561),
        styles: [__webpack_require__(519)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_usersmanagm_usersmang_service__["a" /* UsersmangService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_usersmanagm_usersmang_service__["a" /* UsersmangService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object])
], UsersComponent);

var _a, _b;
//# sourceMappingURL=users.component.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoReaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VideoReaderComponent = (function () {
    function VideoReaderComponent() {
        this.videoStatus = 1;
        this.playpauseimg = '/assets/video/play.svg';
        this.volumeMuteImg = '/assets/video/volume.svg';
        this.currentTimeRange = 0;
        this.movieLoaded = false;
        this.videoDuration = '00:00';
        this.currTime = '';
        this.volume = 5;
        this.hidectrl = true;
    }
    VideoReaderComponent.prototype.getBrowser = function () {
        if (navigator.userAgent.indexOf('Chrome') !== -1) {
            return 'Webkit';
        }
        else if (navigator.userAgent.indexOf('Opera') !== -1) {
            return 'Opera';
        }
        else if (navigator.userAgent.indexOf('MSIE') !== -1) {
            return 'IE';
        }
        else if (navigator.userAgent.indexOf('Firefox') !== -1) {
            return 'Firefox';
        }
        else if (navigator.userAgent.indexOf('Safari') !== -1) {
            return 'Webkit';
        }
        else {
            return 'unknown';
        }
    };
    VideoReaderComponent.prototype.secondsToMinutesAndSeconds = function (time) {
        var minutes = Math.floor(time / 60);
        var seconds = Math.round(time % 60);
        return '' + minutes + ':' + seconds;
    };
    VideoReaderComponent.prototype.makeFullScreen = function (mp) {
        if (this.getBrowser() === 'Webkit') {
            mp.webkitEnterFullScreen();
        }
        else if (this.getBrowser() === 'Firefox') {
            mp.mozRequestFullScreen();
        }
        else {
            return 'unknown';
        }
    };
    VideoReaderComponent.prototype.hideControl = function (show) {
        this.hidectrl = show;
    };
    VideoReaderComponent.prototype.updateDisplayTime = function (moviePlayer) {
        this.currTime = this.secondsToMinutesAndSeconds(moviePlayer.currentTime);
        this.currentTimeRange = moviePlayer.currentTime;
    };
    VideoReaderComponent.prototype.onMuteUnmute = function (moviePlayer) {
        if (moviePlayer.muted) {
            moviePlayer.muted = false;
            this.volumeMuteImg = '/assets/video/volume.svg';
        }
        else {
            moviePlayer.muted = true;
            this.volumeMuteImg = '/assets/video/mute.svg';
        }
    };
    VideoReaderComponent.prototype.seek = function (evt, moviePlayer) {
        moviePlayer.pause();
        moviePlayer.currentTime = evt.target.value;
        this.currTime = this.secondsToMinutesAndSeconds(moviePlayer.currentTime);
        this.currentTimeRange = moviePlayer.currentTime;
        moviePlayer.play();
        this.playpauseimg = '/assets/video/pause.svg';
    };
    VideoReaderComponent.prototype.seekVolume = function (event, moviePlayer) {
        var volumeToBeSet = event.target.value;
        moviePlayer.volume = volumeToBeSet / 10;
    };
    VideoReaderComponent.prototype.processMetaData = function (moviePlayer) {
        var self = this;
        this.movieLoaded = true;
        moviePlayer.volume = 0.5;
        this.videoDuration = this.secondsToMinutesAndSeconds(moviePlayer.duration);
    };
    VideoReaderComponent.prototype.onPlayPause = function (moviePlayer) {
        if (moviePlayer.paused) {
            moviePlayer.play();
            this.playpauseimg = '/assets/video/pause.svg';
        }
        else {
            moviePlayer.pause();
            this.playpauseimg = '/assets/video/play.svg';
        }
    };
    return VideoReaderComponent;
}());
VideoReaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-video-reader',
        template: __webpack_require__(562),
        styles: [__webpack_require__(520)]
    }),
    __metadata("design:paramtypes", [])
], VideoReaderComponent);

//# sourceMappingURL=video-reader.component.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoursService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CoursService = (function () {
    function CoursService(http) {
        this.http = http;
        this.CoursUrl = 'http://localhost:8080/api/cours';
    }
    CoursService.prototype.createCours = function (body) {
        var bodyString = JSON.stringify(body); // Stringify payload
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers }); // Create a request option
        return this.http.post(this.CoursUrl, body, options) // ...using post request
            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); }); //...errors if any
    };
    CoursService.prototype.getAllCours = function () {
        // ...using get request
        return this.http.get(this.CoursUrl)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    CoursService.prototype.findCoursById = function (id) {
        return this.http.get(this.CoursUrl + "/" + id).map(function (res) {
            return res.json();
        });
    };
    return CoursService;
}());
CoursService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], CoursService);

var _a;
//# sourceMappingURL=cours.service.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core_angular_core__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(397);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core_angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppheaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppheaderComponent = (function () {
    function AppheaderComponent(router) {
        this.router = router;
    }
    AppheaderComponent.prototype.ngOnInit = function () {
    };
    AppheaderComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(['/loginadmin']);
    };
    AppheaderComponent.prototype.isLogged = function () {
        if (localStorage.getItem('username')) {
            return true;
        }
        else {
            return false;
        }
    };
    return AppheaderComponent;
}());
AppheaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-appheader',
        template: __webpack_require__(535),
        styles: [__webpack_require__(498)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], AppheaderComponent);

var _a;
//# sourceMappingURL=appheader.component.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsideComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AsideComponent = (function () {
    function AsideComponent(router) {
        this.router = router;
    }
    AsideComponent.prototype.ngOnInit = function () {
    };
    AsideComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(['/loginadmin']);
    };
    AsideComponent.prototype.isLogged = function () {
        if (localStorage.getItem('username')) {
            return true;
        }
        else {
            return false;
        }
    };
    return AsideComponent;
}());
AsideComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-aside',
        template: __webpack_require__(536),
        styles: [__webpack_require__(499)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], AsideComponent);

var _a;
//# sourceMappingURL=aside.component.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(537),
        styles: [__webpack_require__(500)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_pagination__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__quiz_quiz_component__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_app_routing__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_quiz_quiz_service__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_quiz_question_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_quiz_detail_quiz_component__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_app_quiz_reponse_service__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__quiz_reponse_component__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__cours_cours_component__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_app_cours_cours_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__cours_section_component__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_app_cours_section_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_app_cours_support_cours_service__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_app_cours_support_cours_component__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__upload_file_upload_file_component__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ng2_file_upload__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng2_charts_ng2_charts__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ng2_pdf_viewer__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ng2_pdf_viewer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_ng2_pdf_viewer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pdf_reader_pdf_reader_component__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__login_user_login_user_component__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_app_user_liste_cours_liste_cours_component__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__layouts_footer_footer_component__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__layouts_header_header_component__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__user_cours_detail_cours_detail_component__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__user_display_support_display_support_component__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__video_reader_video_reader_component__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__user_lms_quiz_lms_quiz_component__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_app_user_lms_quiz_lms_quiz_service__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_app_Shared_adminlte_appheader_appheader_component__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_app_Shared_adminlte_aside_aside_component__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_app_usersmanagm_users_component__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37_app_usersmanagm_usersmang_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__usersmanagm_loginAdmin_login_admin_component__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_app_usersmanagm_loginAdmin_loginadmin_service__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__usersmanagm_user_list_usersm_list_usermlist_component__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41_ng2_pagination__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41_ng2_pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_41_ng2_pagination__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__usersmanagm_user_list_usersm_list_usermedit_component__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__challenge_challenge_component__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44_app_challenge_challenge_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45_ng2_date_countdown__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__challenge_challengelist_component__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__challenge_challengemodif_component__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__challenge_debdoub_debdoub_component__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__challenge_debdoub_my_new_pipe_pipe__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__usersmanagm_charts_charts_component__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51_app_auth_guard_service__ = __webpack_require__(169);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





 // <-- import the module














































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__quiz_quiz_component__["a" /* QuizComponent */],
            __WEBPACK_IMPORTED_MODULE_11_app_quiz_detail_quiz_component__["a" /* DetailQuizComponent */],
            __WEBPACK_IMPORTED_MODULE_13__quiz_reponse_component__["a" /* ReponseComponent */],
            __WEBPACK_IMPORTED_MODULE_14__cours_cours_component__["a" /* CoursComponent */],
            __WEBPACK_IMPORTED_MODULE_16__cours_section_component__["a" /* SectionComponent */],
            __WEBPACK_IMPORTED_MODULE_19_app_cours_support_cours_component__["a" /* SupportCoursComponent */],
            __WEBPACK_IMPORTED_MODULE_20__upload_file_upload_file_component__["a" /* UploadFileComponent */],
            __WEBPACK_IMPORTED_MODULE_23_ng2_pdf_viewer__["PdfViewerComponent"],
            __WEBPACK_IMPORTED_MODULE_24__pdf_reader_pdf_reader_component__["a" /* PdfReaderComponent */],
            __WEBPACK_IMPORTED_MODULE_25__login_user_login_user_component__["a" /* LoginUserComponent */],
            __WEBPACK_IMPORTED_MODULE_26_app_user_liste_cours_liste_cours_component__["a" /* ListeCoursComponent */],
            __WEBPACK_IMPORTED_MODULE_27__layouts_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_28__layouts_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_29__user_cours_detail_cours_detail_component__["a" /* CoursDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_30__user_display_support_display_support_component__["a" /* DisplaySupportComponent */],
            __WEBPACK_IMPORTED_MODULE_31__video_reader_video_reader_component__["a" /* VideoReaderComponent */],
            __WEBPACK_IMPORTED_MODULE_32__user_lms_quiz_lms_quiz_component__["a" /* LmsQuizComponent */],
            __WEBPACK_IMPORTED_MODULE_34_app_Shared_adminlte_appheader_appheader_component__["a" /* AppheaderComponent */], __WEBPACK_IMPORTED_MODULE_35_app_Shared_adminlte_aside_aside_component__["a" /* AsideComponent */], __WEBPACK_IMPORTED_MODULE_36_app_usersmanagm_users_component__["a" /* UsersComponent */], __WEBPACK_IMPORTED_MODULE_38__usersmanagm_loginAdmin_login_admin_component__["a" /* LoginAdminComponent */], __WEBPACK_IMPORTED_MODULE_40__usersmanagm_user_list_usersm_list_usermlist_component__["a" /* UsermlistComponent */], __WEBPACK_IMPORTED_MODULE_42__usersmanagm_user_list_usersm_list_usermedit_component__["a" /* UsermeditComponent */], __WEBPACK_IMPORTED_MODULE_43__challenge_challenge_component__["a" /* ChallengeComponent */],
            __WEBPACK_IMPORTED_MODULE_45_ng2_date_countdown__["a" /* CountDown */],
            __WEBPACK_IMPORTED_MODULE_46__challenge_challengelist_component__["a" /* ChallengelistComponent */],
            __WEBPACK_IMPORTED_MODULE_47__challenge_challengemodif_component__["a" /* ChallengemodifComponent */],
            __WEBPACK_IMPORTED_MODULE_48__challenge_debdoub_debdoub_component__["a" /* DebdoubComponent */],
            __WEBPACK_IMPORTED_MODULE_49__challenge_debdoub_my_new_pipe_pipe__["a" /* MyNewPipePipe */],
            __WEBPACK_IMPORTED_MODULE_50__usersmanagm_charts_charts_component__["a" /* ChartsComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_21_ng2_file_upload__["FileUploadModule"],
            __WEBPACK_IMPORTED_MODULE_8_app_app_routing__["a" /* routing */], __WEBPACK_IMPORTED_MODULE_22_ng2_charts_ng2_charts__["ChartsModule"], __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_41_ng2_pagination__["Ng2PaginationModule"],
            __WEBPACK_IMPORTED_MODULE_5_ngx_pagination__["a" /* NgxPaginationModule */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9_app_quiz_quiz_service__["a" /* QuizService */], __WEBPACK_IMPORTED_MODULE_10_app_quiz_question_service__["a" /* QuestionService */], __WEBPACK_IMPORTED_MODULE_12_app_quiz_reponse_service__["a" /* ReponseService */],
            __WEBPACK_IMPORTED_MODULE_15_app_cours_cours_service__["a" /* CoursService */], __WEBPACK_IMPORTED_MODULE_17_app_cours_section_service__["a" /* SectionService */], __WEBPACK_IMPORTED_MODULE_18_app_cours_support_cours_service__["a" /* SupportCoursService */], __WEBPACK_IMPORTED_MODULE_33_app_user_lms_quiz_lms_quiz_service__["a" /* LmsQuizService */], __WEBPACK_IMPORTED_MODULE_37_app_usersmanagm_usersmang_service__["a" /* UsersmangService */],
            __WEBPACK_IMPORTED_MODULE_39_app_usersmanagm_loginAdmin_loginadmin_service__["a" /* LoginadminService */], __WEBPACK_IMPORTED_MODULE_44_app_challenge_challenge_service__["a" /* ChallengeService */],
            __WEBPACK_IMPORTED_MODULE_51_app_auth_guard_service__["a" /* AuthGuardService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_quiz_quiz_component__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_quiz_detail_quiz_component__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_quiz_reponse_component__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_cours_cours_component__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_cours_section_component__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_cours_support_cours_component__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_upload_file_upload_file_component__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_pdf_reader_pdf_reader_component__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_login_user_login_user_component__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_user_liste_cours_liste_cours_component__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_user_cours_detail_cours_detail_component__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_app_user_display_support_display_support_component__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_app_video_reader_video_reader_component__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_app_user_lms_quiz_lms_quiz_component__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_app_usersmanagm_users_component__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_app_usersmanagm_loginAdmin_login_admin_component__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_app_usersmanagm_user_list_usersm_list_usermlist_component__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_app_usersmanagm_user_list_usersm_list_usermedit_component__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_app_challenge_challenge_component__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_app_challenge_challengelist_component__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_app_challenge_challengemodif_component__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_app_challenge_debdoub_debdoub_component__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_app_usersmanagm_charts_charts_component__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_app_auth_guard_service__ = __webpack_require__(169);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });

























var APP_ROUTES = [
    { path: 'quiz', component: __WEBPACK_IMPORTED_MODULE_1_app_quiz_quiz_component__["a" /* QuizComponent */] },
    { path: 'quiz/question/:id', component: __WEBPACK_IMPORTED_MODULE_2_app_quiz_detail_quiz_component__["a" /* DetailQuizComponent */] },
    { path: 'quiz/question/reponse/:id', component: __WEBPACK_IMPORTED_MODULE_3_app_quiz_reponse_component__["a" /* ReponseComponent */] },
    //////////////////////////////////////////////////////
    { path: 'cours', component: __WEBPACK_IMPORTED_MODULE_4_app_cours_cours_component__["a" /* CoursComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_24_app_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'cours/section/:id', component: __WEBPACK_IMPORTED_MODULE_5_app_cours_section_component__["a" /* SectionComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_24_app_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'cours/section/support/:id', component: __WEBPACK_IMPORTED_MODULE_6_app_cours_support_cours_component__["a" /* SupportCoursComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_24_app_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'upload', component: __WEBPACK_IMPORTED_MODULE_7_app_upload_file_upload_file_component__["a" /* UploadFileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_24_app_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'pdf', component: __WEBPACK_IMPORTED_MODULE_8_app_pdf_reader_pdf_reader_component__["a" /* PdfReaderComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_24_app_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_9_app_login_user_login_user_component__["a" /* LoginUserComponent */] },
    { path: 'usermc', component: __WEBPACK_IMPORTED_MODULE_15_app_usersmanagm_users_component__["a" /* UsersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_24_app_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'userml', component: __WEBPACK_IMPORTED_MODULE_17_app_usersmanagm_user_list_usersm_list_usermlist_component__["a" /* UsermlistComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_24_app_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'userml/:login', component: __WEBPACK_IMPORTED_MODULE_18_app_usersmanagm_user_list_usersm_list_usermedit_component__["a" /* UsermeditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_24_app_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'loginadmin', component: __WEBPACK_IMPORTED_MODULE_16_app_usersmanagm_loginAdmin_login_admin_component__["a" /* LoginAdminComponent */] },
    { path: 'charts', component: __WEBPACK_IMPORTED_MODULE_23_app_usersmanagm_charts_charts_component__["a" /* ChartsComponent */] },
    { path: 'lmscours', component: __WEBPACK_IMPORTED_MODULE_10_app_user_liste_cours_liste_cours_component__["a" /* ListeCoursComponent */] },
    { path: 'lmscours/:id', component: __WEBPACK_IMPORTED_MODULE_11_app_user_cours_detail_cours_detail_component__["a" /* CoursDetailComponent */] },
    { path: 'lmscours/display/:id', component: __WEBPACK_IMPORTED_MODULE_12_app_user_display_support_display_support_component__["a" /* DisplaySupportComponent */] },
    { path: 'videos', component: __WEBPACK_IMPORTED_MODULE_13_app_video_reader_video_reader_component__["a" /* VideoReaderComponent */] },
    { path: 'p', component: __WEBPACK_IMPORTED_MODULE_14_app_user_lms_quiz_lms_quiz_component__["a" /* LmsQuizComponent */] },
    { path: 'challenge', component: __WEBPACK_IMPORTED_MODULE_19_app_challenge_challenge_component__["a" /* ChallengeComponent */] },
    { path: 'challengelist', component: __WEBPACK_IMPORTED_MODULE_20_app_challenge_challengelist_component__["a" /* ChallengelistComponent */] },
    { path: 'challengelist/:id', component: __WEBPACK_IMPORTED_MODULE_21_app_challenge_challengemodif_component__["a" /* ChallengemodifComponent */] },
    { path: 'a', component: __WEBPACK_IMPORTED_MODULE_22_app_challenge_debdoub_debdoub_component__["a" /* DebdoubComponent */] },
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Challenge; });
var Challenge = (function () {
    function Challenge(id, name, difficulty, nbParticipants, date, dateChallenge, dateChallenge2, category) {
        this.id = id;
        this.name = name;
        this.difficulty = difficulty;
        this.nbParticipants = nbParticipants;
        this.date = date;
        this.dateChallenge = dateChallenge;
        this.dateChallenge2 = dateChallenge2;
        this.category = category;
    }
    return Challenge;
}());

//# sourceMappingURL=challenge.modal.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyNewPipePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MyNewPipePipe = (function () {
    function MyNewPipePipe() {
    }
    MyNewPipePipe.prototype.transform = function (items, filter) {
        if (!items || !filter) {
            return items;
        }
        return items.filter(function (item) { return item.NotesCours.indexOf(filter) !== -1; });
    };
    return MyNewPipePipe;
}());
MyNewPipePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'myNewPipe'
    })
], MyNewPipePipe);

//# sourceMappingURL=my-new-pipe.pipe.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(545),
        styles: [__webpack_require__(506)]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(router) {
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(['/login']);
    };
    HeaderComponent.prototype.isLogged = function () {
        if (localStorage.getItem('username')) {
            return true;
        }
        else {
            return false;
        }
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(546),
        styles: [__webpack_require__(507)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizQuestion; });
var QuizQuestion = (function () {
    function QuizQuestion(id, difficulty, name) {
        this.id = id;
        this.difficulty = difficulty;
        this.name = name;
    }
    return QuizQuestion;
}());

//# sourceMappingURL=question.modal.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Quiz; });
var Quiz = (function () {
    function Quiz(id, name, description, 
        //  public difficulty?: string,
        coursF, coursT) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.coursF = coursF;
        this.coursT = coursT;
    }
    return Quiz;
}());

//# sourceMappingURL=quiz.modal.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizReponse; });
var QuizReponse = (function () {
    function QuizReponse(id, name, isAnswer) {
        this.id = id;
        this.name = name;
        this.isAnswer = isAnswer;
        this.isAnswer = false;
    }
    return QuizReponse;
}());

//# sourceMappingURL=reponse.modal.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=coucou.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 498:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 499:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 500:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 501:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "   .countdown {\r\n      width: 100%;\r\n      height: 100px;\r\n      background: black;}\r\n\r\n    .two-dots {\r\n        display: none;\r\n      }\r\n\r\n      .measurements {\r\n        color: white;\r\n        margin-right: 5px;\r\n        padding: 10px;\r\n     }\r\n\r\n     .divider {\r\n      font-size: 30px;\r\n     }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 502:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 503:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 504:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 505:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 506:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 507:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 508:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 509:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".page-content {\r\n    padding-top: 10px;\r\n    width: 50%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n@media all and (max-width: 480px) {\r\n    .page-content {\r\n        width: 100%;\r\n        margin-left: 10px;\r\n        margin-right: 10px;\r\n    }\r\n}\r\n\r\n.select-file__container {\r\n    margin-top: 10px;\r\n    margin-bottom: 20px;\r\n}\r\n.select-file__container p {\r\n    margin-bottom: 0;\r\n}\r\n\r\n.page-number {\r\n    width: 50px;\r\n}\r\n\r\n.mb {\r\n    margin-bottom: 10px;\r\n}\r\n\r\npdf-viewer {\r\n    display: block;\r\n}\r\n\r\ninput[type=\"text\"]\r\n{\r\n    background: transparent;\r\n    border: none;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 510:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 511:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 512:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 513:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 514:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 515:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 516:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 517:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 518:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 519:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 520:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 521:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 213,
	"./af.js": 213,
	"./ar": 220,
	"./ar-dz": 214,
	"./ar-dz.js": 214,
	"./ar-kw": 215,
	"./ar-kw.js": 215,
	"./ar-ly": 216,
	"./ar-ly.js": 216,
	"./ar-ma": 217,
	"./ar-ma.js": 217,
	"./ar-sa": 218,
	"./ar-sa.js": 218,
	"./ar-tn": 219,
	"./ar-tn.js": 219,
	"./ar.js": 220,
	"./az": 221,
	"./az.js": 221,
	"./be": 222,
	"./be.js": 222,
	"./bg": 223,
	"./bg.js": 223,
	"./bn": 224,
	"./bn.js": 224,
	"./bo": 225,
	"./bo.js": 225,
	"./br": 226,
	"./br.js": 226,
	"./bs": 227,
	"./bs.js": 227,
	"./ca": 228,
	"./ca.js": 228,
	"./cs": 229,
	"./cs.js": 229,
	"./cv": 230,
	"./cv.js": 230,
	"./cy": 231,
	"./cy.js": 231,
	"./da": 232,
	"./da.js": 232,
	"./de": 235,
	"./de-at": 233,
	"./de-at.js": 233,
	"./de-ch": 234,
	"./de-ch.js": 234,
	"./de.js": 235,
	"./dv": 236,
	"./dv.js": 236,
	"./el": 237,
	"./el.js": 237,
	"./en-au": 238,
	"./en-au.js": 238,
	"./en-ca": 239,
	"./en-ca.js": 239,
	"./en-gb": 240,
	"./en-gb.js": 240,
	"./en-ie": 241,
	"./en-ie.js": 241,
	"./en-nz": 242,
	"./en-nz.js": 242,
	"./eo": 243,
	"./eo.js": 243,
	"./es": 245,
	"./es-do": 244,
	"./es-do.js": 244,
	"./es.js": 245,
	"./et": 246,
	"./et.js": 246,
	"./eu": 247,
	"./eu.js": 247,
	"./fa": 248,
	"./fa.js": 248,
	"./fi": 249,
	"./fi.js": 249,
	"./fo": 250,
	"./fo.js": 250,
	"./fr": 253,
	"./fr-ca": 251,
	"./fr-ca.js": 251,
	"./fr-ch": 252,
	"./fr-ch.js": 252,
	"./fr.js": 253,
	"./fy": 254,
	"./fy.js": 254,
	"./gd": 255,
	"./gd.js": 255,
	"./gl": 256,
	"./gl.js": 256,
	"./gom-latn": 257,
	"./gom-latn.js": 257,
	"./he": 258,
	"./he.js": 258,
	"./hi": 259,
	"./hi.js": 259,
	"./hr": 260,
	"./hr.js": 260,
	"./hu": 261,
	"./hu.js": 261,
	"./hy-am": 262,
	"./hy-am.js": 262,
	"./id": 263,
	"./id.js": 263,
	"./is": 264,
	"./is.js": 264,
	"./it": 265,
	"./it.js": 265,
	"./ja": 266,
	"./ja.js": 266,
	"./jv": 267,
	"./jv.js": 267,
	"./ka": 268,
	"./ka.js": 268,
	"./kk": 269,
	"./kk.js": 269,
	"./km": 270,
	"./km.js": 270,
	"./kn": 271,
	"./kn.js": 271,
	"./ko": 272,
	"./ko.js": 272,
	"./ky": 273,
	"./ky.js": 273,
	"./lb": 274,
	"./lb.js": 274,
	"./lo": 275,
	"./lo.js": 275,
	"./lt": 276,
	"./lt.js": 276,
	"./lv": 277,
	"./lv.js": 277,
	"./me": 278,
	"./me.js": 278,
	"./mi": 279,
	"./mi.js": 279,
	"./mk": 280,
	"./mk.js": 280,
	"./ml": 281,
	"./ml.js": 281,
	"./mr": 282,
	"./mr.js": 282,
	"./ms": 284,
	"./ms-my": 283,
	"./ms-my.js": 283,
	"./ms.js": 284,
	"./my": 285,
	"./my.js": 285,
	"./nb": 286,
	"./nb.js": 286,
	"./ne": 287,
	"./ne.js": 287,
	"./nl": 289,
	"./nl-be": 288,
	"./nl-be.js": 288,
	"./nl.js": 289,
	"./nn": 290,
	"./nn.js": 290,
	"./pa-in": 291,
	"./pa-in.js": 291,
	"./pl": 292,
	"./pl.js": 292,
	"./pt": 294,
	"./pt-br": 293,
	"./pt-br.js": 293,
	"./pt.js": 294,
	"./ro": 295,
	"./ro.js": 295,
	"./ru": 296,
	"./ru.js": 296,
	"./sd": 297,
	"./sd.js": 297,
	"./se": 298,
	"./se.js": 298,
	"./si": 299,
	"./si.js": 299,
	"./sk": 300,
	"./sk.js": 300,
	"./sl": 301,
	"./sl.js": 301,
	"./sq": 302,
	"./sq.js": 302,
	"./sr": 304,
	"./sr-cyrl": 303,
	"./sr-cyrl.js": 303,
	"./sr.js": 304,
	"./ss": 305,
	"./ss.js": 305,
	"./sv": 306,
	"./sv.js": 306,
	"./sw": 307,
	"./sw.js": 307,
	"./ta": 308,
	"./ta.js": 308,
	"./te": 309,
	"./te.js": 309,
	"./tet": 310,
	"./tet.js": 310,
	"./th": 311,
	"./th.js": 311,
	"./tl-ph": 312,
	"./tl-ph.js": 312,
	"./tlh": 313,
	"./tlh.js": 313,
	"./tr": 314,
	"./tr.js": 314,
	"./tzl": 315,
	"./tzl.js": 315,
	"./tzm": 317,
	"./tzm-latn": 316,
	"./tzm-latn.js": 316,
	"./tzm.js": 317,
	"./uk": 318,
	"./uk.js": 318,
	"./ur": 319,
	"./ur.js": 319,
	"./uz": 321,
	"./uz-latn": 320,
	"./uz-latn.js": 320,
	"./uz.js": 321,
	"./vi": 322,
	"./vi.js": 322,
	"./x-pseudo": 323,
	"./x-pseudo.js": 323,
	"./yo": 324,
	"./yo.js": 324,
	"./zh-cn": 325,
	"./zh-cn.js": 325,
	"./zh-hk": 326,
	"./zh-hk.js": 326,
	"./zh-tw": 327,
	"./zh-tw.js": 327
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 521;


/***/ }),

/***/ 535:
/***/ (function(module, exports) {

module.exports = "<header class=\"main-header\" *ngIf=\"isLogged()\">\n\n  <!-- Logo -->\n  <a href=\"index2.html\" class=\"logo\">\n    <!-- mini logo for sidebar mini 50x50 pixels -->\n    <span class=\"logo-mini\"><b>R</b>lean</span>\n    <!-- logo for regular state and mobile devices -->\n    <span class=\"logo-lg\"><b>Red</b>lean</span>\n  </a>\n\n  <!-- Header Navbar: style can be found in header.less -->\n  <nav class=\"navbar navbar-static-top\">\n    <!-- Sidebar toggle button-->\n    <a href=\"#\" class=\"sidebar-toggle\" data-toggle=\"offcanvas\" role=\"button\">\n      <span class=\"sr-only\">Toggle navigation</span>\n    </a>\n    <!-- Navbar Right Menu -->\n    <div class=\"navbar-custom-menu\">\n      <ul class=\"nav navbar-nav\">\n\n        <!-- User Account: style can be found in dropdown.less -->\n        <li class=\"dropdown user user-menu\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n            <img src=\"/assets/dist/img/user2-160x160.jpg\" class=\"user-image\" alt=\"User Image\">\n            <span class=\"hidden-xs\">Administrateur Redlean</span>\n          </a>\n        \n        </li>\n        <!-- Control Sidebar Toggle Button -->\n        <li>\n          <a (click)=\"logout()\" data-toggle=\"control-sidebar\"><i class=\"glyphicon glyphicon-log-out\"></i></a>\n        </li>\n      </ul>\n    </div>\n\n  </nav>\n</header>"

/***/ }),

/***/ 536:
/***/ (function(module, exports) {

module.exports = "<aside class=\"main-sidebar\" *ngIf=\"isLogged()\">\n  <!-- sidebar: style can be found in sidebar.less -->\n  <section class=\"sidebar\">\n    <!-- Sidebar user panel -->\n    <div class=\"user-panel\">\n      <div class=\"pull-left image\">\n        <img src=\"/assets/dist/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\n      </div>\n      <div class=\"pull-left info\">\n        <p>Admin</p>\n        <a href=\"#\"><i class=\"fa fa-circle text-success\"></i> Online</a>\n      </div>\n    </div>\n    <!-- search form -->\n    <form action=\"#\" method=\"get\" class=\"sidebar-form\">\n\n    </form>\n    <!-- /.search form -->\n    <!-- sidebar menu: : style can be found in sidebar.less -->\n    <ul class=\"sidebar-menu\">\n      <li class=\"treeview\">\n        <a href=\"#\">\n          <i class=\"fa fa-files-o\"></i>\n          <span>Les cours</span>\n          <span class=\"pull-right-container\">\n              <i class=\"fa fa-angle-left pull-right\"></i>\n            </span>\n        </a>\n        <ul class=\"treeview-menu\">\n          <li><a  [routerLink]=\"['../cours']\"><i class=\"fa fa-circle-o\"></i> Cours</a></li>\n          <li><a><i class=\"fa fa-circle-o\"></i> Modules</a></li>\n          <li><a><i class=\"fa fa-circle-o\"></i> Supports</a></li>\n        </ul>\n      </li>\n\n      <li class=\"treeview\">\n        <a href=\"#\">\n          <i class=\"fa fa-files-o\"></i>\n          <span>Les collaborateurs</span>\n          <span class=\"pull-right-container\">\n              <i class=\"fa fa-angle-left pull-right\"></i>\n            </span>\n        </a>\n        <ul class=\"treeview-menu\">\n          <li><a  [routerLink]=\"['../usermc']\"><i class=\"fa fa-circle-o\"></i> Gestion des Collaborateurs  </a></li>\n          <li><a  [routerLink]=\"['../userml'] \"><i class=\"fa fa-circle-o\"></i> Liste des Collaborateurs </a></li>\n\n          <li> <a  [routerLink]=\"['../charts'] \"><i class=\"fa fa-circle-o\"></i> Suivi des Collaborateurs </a></li>\n\n        </ul>\n      </li>\n\n\n\n      <li class=\"treeview\">\n        <a   [routerLink]=\"['../challengelist'] \">\n          <i class=\"fa fa-files-o\"></i>\n          <span > <a  [routerLink]=\"['../challengelist'] \"> Les Challenges </a></span>\n          <span class=\"pull-right-container\">\n              <span class=\"label label-primary pull-right\"></span>\n          </span>\n        </a>\n\n      </li>\n\n\n\n\n\n    </ul>\n  </section>\n  <!-- /.sidebar -->\n\n\n\n</aside>"

/***/ }),

/***/ 537:
/***/ (function(module, exports) {

module.exports = "<app-aside></app-aside>\n<app-appheader> </app-appheader>\n\n\n\n<div class=\"content-wrapper\">\n\n\n    <section class=\"content\">\n\n\n\n        <router-outlet> </router-outlet>\n\n    </section>\n\n</div>"

/***/ }),

/***/ 538:
/***/ (function(module, exports) {

module.exports = "<h2> Créer un challenge</h2>\n\n<form name=\"editForm\" role=\"form\" novalidate (ngSubmit)=\"save()\" #editForm=\"ngForm\" *ngIf=\"challenge\">\n\n  \n  <div class=\"modal-body\">\n\n    <div class=\"form-group\">\n      <label class=\"form-control-label\" for=\"field_name\">name</label>\n      <input type=\"text\" class=\"form-control\" required name=\"name\" id=\"field_name\" [(ngModel)]=\"challenge.name\" />\n    </div>\n\n\n    <div class=\"form-group\">\n      <label class=\"form-control-label\" for=\"field_date\">Date et Heure </label>\n      <div class=\"d-flex\">\n        <input id=\"field_date\" type=\"datetime-local\" class=\"form-control\" name=\"date\" [(ngModel)]=\"challenge.dateChallenge\" />\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label class=\"form-control-label\" for=\"field_name\">difficulty</label>\n\n      <select class=\"form-control\" name=\"difficulty\" id=\"field_category\" [(ngModel)]=\"challenge.difficulty\">\n                <option value=\"Débutant\">Débutant</option>\n                <option value=\"Intermédiaire\">Intermédiaire</option>\n                <option value=\"Avancé\">Avancé</option>\n              \n    </select >\n  \n  \n    </div>\n   <div class=\"form-group\">\n      <label class=\"form-control-label\" for=\"field_name\">nbParticipants</label>\n      <input type=\"number\" class=\"form-control\" required name=\"nbParticipants\" id=\"field_nbParticipants\" [(ngModel)]=\"challenge.nbParticipants\" />\n    </div>\n\n\n   <div class=\"form-group\">\n           <label class=\"form-control-label\" for=\"field_category\">Category</label>\n\n   <select class=\"form-control\" name=\"category\" id=\"field_category\" [(ngModel)]=\"challenge.category\">\n                <option value=\"Développement pour l'entreprise\">Développement pour l'entreprise</option>\n                <option value=\"Gestion de projet\">Gestion de projet</option>\n                <option value=\"Entrepreneuriat\">Entrepreneuriat</option>\n               <option value=\"Développement personnel\">Développement personnel</option>\n               <option value=\"Communication\">Communication</option>\n               <option value=\"Qualité\">Qualité</option>\n              <option value=\"Sécurité informatique\">Sécurité informatique</option>  \n</select >\n\n   </div>\n\n    </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"clear()\">\n            <span class=\"fa fa-ban\"></span>&nbsp;<span>Cancel</span>\n        </button>\n\n    <button type=\"submit\" [disabled]=\"!editForm.form.valid\" class=\"btn btn-primary\">\n            <span class=\"fa fa-save\"></span>&nbsp;<span>Save</span>\n        </button>\n  </div>\n</form>\n\n"

/***/ }),

/***/ 539:
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th><span>ID</span> <span class=\"fa fa-sort\"></span></th>\n      <th><span>Nom</span> <span class=\"fa fa-sort\"></span></th>\n      <th><span>Difficulté</span> <span class=\"fa fa-sort\"></span></th>\n      <th><span>nbParticipants</span> <span class=\"fa fa-sort\"></span></th>\n      <th><span>Date</span> <span class=\"fa fa-sort\"></span></th>\n\n      <th></th>\n    </tr>\n  </thead>\n\n  <tbody>\n\n    <tr *ngFor=\"let challenge of challenges| paginate: { itemsPerPage: 8, currentPage: p }\">\n      <td>\n        <a >{{challenge.id}}</a>\n      </td>\n     \n       <td>\n        {{challenge.name}}\n      </td>\n      \n       <td>\n        {{challenge.difficulty}}\n      </td>\n        <td>\n        {{challenge.nbParticipants}}\n      </td>\n      \n      <td>\n      \n\n              {{challenge.dateChallenge | date: 'dd'}}\n              /{{challenge.dateChallenge | date:'MM'}}/{{challenge.dateChallenge | date: 'yyyy'}} \n\n              \n    {{challenge.dateChallenge | date: 'shortTime'}}\n  \n      </td>\n      \n\n     \n\n    </tr>\n  </tbody>\n</table>\n\n\n\n<div class=\"text-center\">\n  <ngb-pagination [collectionSize]=\"40\" [(page)]=\"p\" [boundaryLinks]=\"true\"></ngb-pagination>\n</div>"

/***/ }),

/***/ 540:
/***/ (function(module, exports) {

module.exports = "<p>\n  challengemodif works!\n</p>\n<div *ngIf=\"challenge\">\n  <h3><span>aboutTheCours:</span></h3> {{challenge.id}}\n\n\n\n<form name=\"editForm\" role=\"form\" novalidate (ngSubmit)=\"updateUser()\" #editForm=\"ngForm\" *ngIf=\"challenge\">\n\n  \n  <div class=\"modal-body\">\n\n    <div class=\"form-group\">\n      <label class=\"form-control-label\" for=\"field_name\">name</label>\n      <input type=\"text\" class=\"form-control\" disabled name=\"name\" id=\"field_name\" [(ngModel)]=\"challenge.name\" />\n    </div>\n\n\n    <div class=\"form-group\">\n      <label class=\"form-control-label\" for=\"field_date\">Date et Heure </label>\n      <div class=\"d-flex\">\n        <input id=\"field_date\" type=\"datetime-local\" class=\"form-control\" name=\"date\" [(ngModel)]=\"challenge.dateChallenge\" />\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label class=\"form-control-label\" for=\"field_name\">difficulty</label>\n\n      <select class=\"form-control\" disabled  name=\"difficulty\" id=\"field_category\" [(ngModel)]=\"challenge.difficulty\">\n                <option value=\"Débutant\">Débutant</option>\n                <option value=\"Intermédiaire\">Intermédiaire</option>\n                <option value=\"Avancé\">Avancé</option>\n              \n    </select >\n  \n  \n    </div>\n   <div class=\"form-group\">\n      <label class=\"form-control-label\" for=\"field_name\">nbParticipants</label>\n      <input type=\"number\" class=\"form-control\" disabled name=\"nbParticipants\" id=\"field_nbParticipants\" [(ngModel)]=\"challenge.nbParticipants\" />\n    </div>\n\n\n   <div class=\"form-group\">\n           <label class=\"form-control-label\" for=\"field_category\">Category</label>\n\n   <select  disabled class=\"form-control\" name=\"category\" id=\"field_category\" [(ngModel)]=\"challenge.category\">\n                <option value=\"Développement pour l'entreprise\">Développement pour l'entreprise</option>\n                <option value=\"Gestion de projet\">Gestion de projet</option>\n                <option value=\"Entrepreneuriat\">Entrepreneuriat</option>\n               <option value=\"Développement personnel\">Développement personnel</option>\n               <option value=\"Communication\">Communication</option>\n               <option value=\"Qualité\">Qualité</option>\n              <option value=\"Sécurité informatique\">Sécurité informatique</option>  \n</select >\n\n   </div>\n\n    </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"clear()\">\n            <span class=\"fa fa-ban\"></span>&nbsp;<span>Cancel</span>\n        </button>\n\n    <button type=\"submit\" [disabled]=\"!editForm.form.valid\" class=\"btn btn-primary\">\n            <span class=\"fa fa-save\"></span>&nbsp;<span>Save</span>\n        </button>\n  </div>\n</form>\n\n  </div>\n"

/***/ }),

/***/ 541:
/***/ (function(module, exports) {

module.exports = "\n<label>Notes :</label>\n<input type=\"radio\" id=\"rating-5\" name=\"rating\" value=\"5\"  (change) = 'changed(5)' /><label for=\"rating-5\" >5</label>\n<input type=\"radio\" id=\"rating-4\" name=\"rating\" value=\"4\" (change) = 'changed(4)'/><label for=\"rating-4\" >4</label>\n<input type=\"radio\" id=\"rating-3\" name=\"rating\" value=\"3\" (change) = 'changed(3)'/><label for=\"rating-3\" >3</label>\n<input type=\"radio\" id=\"rating-2\" name=\"rating\" value=\"2\" (change) = 'changed(2)'/><label for=\"rating-2\" >2</label>\n<input type=\"radio\" id=\"rating-1\" name=\"rating\" value=\"1\" (change) = 'changed(1)'/><label for=\"rating-1\" >1</label>\n\n<ul>\n  <li *ngFor=\"let cour of listeCours | myNewPipe : filterNoteValue\">\n    <h2>{{cour.NomCours}}</h2>\n  </li>\n</ul>\n"

/***/ }),

/***/ 542:
/***/ (function(module, exports) {

module.exports = "<h2> Créer un Cours</h2>\n\n<form name=\"editForm\" role=\"form\" novalidate (ngSubmit)=\"save()\" #editForm=\"ngForm\" *ngIf=\"cours\">\n\n  <div class=\"modal-header\">\n\n  </div>\n  <div class=\"modal-body\">\n\n    <div class=\"form-group\">\n      <label class=\"form-control-label\" for=\"field_title\">Titre </label>\n      <input type=\"text\" class=\"form-control\" #titleInput=\"ngModel\"  minlength=3 required name=\"title\" id=\"field_title\"\n        [(ngModel)]=\"cours.title\" />\n      <!--**********************************-->\n      <small [hidden]=\"titleInput.valid || (titleInput.pristine && !editForm.submitted)\" class=\"text-danger\">\n            Titre est un champs obligatoire  (minimum 3 caractères).\n          </small>\n\n    </div>\n\n    <div class=\"form-group\">\n      <label class=\"form-control-label\" for=\"field_aboutTheCours\">A propos du cours</label>\n      <input type=\"text\" class=\"form-control\"  #aboutTheCoursInput=\"ngModel\"  minlength=10 required name=\"aboutTheCours\" id=\"field_aboutTheCours\" [(ngModel)]=\"cours.aboutTheCours\"\n      />\n  <small [hidden]=\"aboutTheCoursInput.valid || (aboutTheCoursInput.pristine && !editForm.submitted)\" class=\"text-danger\">\n           A propos du cours est un champs obligatoire  (minimum 10 caractères).\n          </small>\n\n\n    </div>\n\n    <div class=\"form-group\">\n      <label class=\"form-control-label\" for=\"field_whatwillStudy\">Objectifs du cours </label>\n      <input type=\"text\" class=\"form-control\"  #whatwillStudyInput=\"ngModel\"  minlength=10 required required name=\"whatwillStudy\" id=\"field_whatwillStudy\" [(ngModel)]=\"cours.whatwillStudy\"\n      />\n\n        <small [hidden]=\"whatwillStudyInput.valid || (whatwillStudyInput.pristine && !editForm.submitted)\" class=\"text-danger\">\n        Objectifs du cours est un champs obligatoire  (minimum 10 caractères).\n          </small>\n    </div>\n\n    <div class=\"form-group\">\n      <label class=\"form-control-label\" for=\"field_level\">Niveau</label>\n\n      <select class=\"form-control\" name=\"level\" id=\"field_level\" [(ngModel)]=\"cours.level\">\n           <option value=\"Débutant \">Débutant </option>\n          <option value=\"Intermédiaire\">Intermédiaire</option>\n           <option value=\"Avancé\">Avancé</option>\n      </select >\n    </div>\n\n\n    <div class=\"form-group\">\n      \n         <label class=\"form-control-label\" for=\"field_level\">Durée de la formation </label>\n      <input type=\"number\" class=\"form-control\" required name=\"durantion\" id=\"field_durantion\" [(ngModel)]=\"cours.durantion\" />\n    </div>\n\n    <div class=\"form-group\">\n      <label class=\"form-control-label\" for=\"field_category\">Catégorie</label>\n\n      <select class=\"form-control\" name=\"category\" id=\"field_category\" [(ngModel)]=\"cours.category\">\n                <option value=\"Développement pour l'entreprise\">Développement pour l'entreprise</option>\n                <option value=\"Gestion de projet\">Gestion de projet</option>\n                <option value=\"Entrepreneuriat\">Entrepreneuriat</option>\n               <option value=\"Développement personnel\">Développement personnel</option>\n               <option value=\"Communication\">Communication</option>\n               <option value=\"Qualité\">Qualité</option>\n              <option value=\"Sécurité informatique\">Sécurité informatique</option>  \n</select >\n      \n      \n      <!--<input type=\"text\" class=\"form-control\" required name=\"category\" id=\"field_category\" [(ngModel)]=\"cours.category\" />-->\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"clear()\">\n            <span class=\"fa fa-ban\"></span>&nbsp;<span>Cancel</span>\n        </button>\n\n    <button type=\"submit\" [disabled]=\"!editForm.form.valid\" class=\"btn btn-primary\">\n            <span class=\"fa fa-save\"></span>&nbsp;<span>Valider</span>\n        </button>\n  </div>\n</form>\n\n\n<div class=\"row\">\n</div>\n<br/>\n<div class=\"table-responsive\">\n  <table class=\"table table-striped\">\n    <thead>\n      <tr>\n        <th><span>ID</span> <span class=\"fa fa-sort\"></span></th>\n        <th><span>Titre</span> <span class=\"fa fa-sort\"></span></th>\n        <th><span>Catégorie</span> <span class=\"fa fa-sort\"></span></th>\n        <th><span>Niveau</span> <span class=\"fa fa-sort\"></span></th>\n        <th></th>\n      </tr>\n    </thead>\n\n    <tbody>\n\n      <tr *ngFor=\"let cours of courses | paginate: { itemsPerPage: 8, currentPage: p }\">\n        <td>\n          <a [routerLink]=\"['../cours/section', cours.id ]\">{{cours.id}}</a>\n        </td>\n        <td>{{cours.title}}</td>\n        <td>{{cours.category}}</td>\n        <td>{{cours.level}}</td>\n\n        <td class=\"text-right\">\n          <div class=\"btn-group flex-btn-group-container\">\n            <!--<button type=\"submit\" class=\"btn btn-info btn-sm\">\n                            <span class=\"fa fa-eye\"></span>\n                            <span class=\"hidden-md-down\">View</span>\n                        </button>-->\n            <button  [routerLink]=\"['../cours/section', cours.id ]\" type=\"submit\" replaceUrl=\"true\" class=\"btn btn-primary btn-sm\">\n                            <span class=\"fa fa-pencil\"></span>\n                            <span class=\"hidden-md-down\">Ajouter des chapitres</span>\n                        </button>\n            <!--<button type=\"submit\" replaceUrl=\"true\" class=\"btn btn-danger btn-sm\">\n                            <span class=\"fa fa-remove\"></span>\n                            <span class=\"hidden-md-down\">Delete</span>\n                        </button>-->\n          </div>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n\n\n\n\n\n\n\n<div class=\"text-center\">\n     <ngb-pagination [collectionSize]=\"40\" [(page)]=\"p\" [boundaryLinks]=\"true\"></ngb-pagination>\n</div>"

/***/ }),

/***/ 543:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"cours\">\n    <h3>A propos du cours:</h3>\n    {{cours.aboutTheCours}}\n\n    <h3><span>Titre:</span></h3> {{cours.title}}\n\n    <h3><span>Objectifs du cours </span></h3> {{cours.whatwillStudy}}\n\n    <h3><span>Durée:</span></h3>  <span class=\"glyphicon glyphicon-time\"> {{cours.durantion}}</span>\n    <h3><span>Niveau:</span></h3> {{cours.level}}\n\n    <h3><span>Catégorie:</span></h3> {{cours.category}}\n</div>\n\n\n<form name=\"editForm\" role=\"form\" novalidate (ngSubmit)=\"save()\" #editForm=\"ngForm\" *ngIf=\"section\">\n\n    <div class=\"modal-header\">\n\n    </div>\n\n\n    <div class=\"modal-body\">\n\n        <div class=\"form-group\">\n            <label class=\"form-control-label\" for=\"field_title\">Chapitre</label>\n            <input type=\"text\" class=\"form-control\" required name=\"sectionName\" id=\"field_sectionName\" [(ngModel)]=\"section.sectionName\"\n            />\n\n\n\n      <!--**********************************-->\n \n\n\n\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"clear()\">\n            <span class=\"fa fa-ban\"></span>&nbsp;<span>Cancel</span>\n        </button>\n\n            <button type=\"submit\" [disabled]=\"!editForm.form.valid\" class=\"btn btn-danger\">\n            <span class=\"fa fa-save\"></span>&nbsp;<span>Valider</span>\n        </button>\n        </div>\n    </div>\n</form>\n\n\n\n\n<h2>Liste des Chapitres</h2>\n<div class=\"table-responsive\">\n    <table class=\"table table-striped\">\n        <thead>\n            <tr>\n                <th><span>ID</span> <span class=\"fa fa-sort\"></span></th>\n                <th><span>Nom Chapitre</span> <span class=\"fa fa-sort\"></span></th>\n\n                <th></th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let section of sections\">\n                <td><a [routerLink]=\"['../support', section.id ]\">{{section.id}}</a></td>\n                <td>{{section.sectionName}}</td>\n\n                <td class=\"text-right\">\n                    <div class=\"btn-group flex-btn-group-container\">\n                        <!--<button type=\"submit\" class=\"btn btn-info btn-sm\">\n                            <span class=\"fa fa-eye\"></span>\n                            <span class=\"hidden-md-down\">View</span>\n                        </button>-->\n                        <button type=\"submit\" [routerLink]=\"['../support', section.id ]\" replaceUrl=\"true\" class=\"btn btn-danger btn-sm\">\n                            <span class=\"fa fa-pencil\"></span>\n                            <span class=\"hidden-md-down\">Ajouter SupportCours</span>\n                        </button>\n                        <!--<button type=\"submit\" replaceUrl=\"true\" class=\"btn btn-danger btn-sm\">\n                            <span class=\"fa fa-remove\"></span>\n                            <span class=\"hidden-md-down\">Delete</span>\n                        </button>-->\n                    </div>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</div>"

/***/ }),

/***/ 544:
/***/ (function(module, exports) {

module.exports = "<style>\n    .my-drop-zone { border: dotted 3px lightgray; }\n    .nv-file-over { border: dotted 3px red; } /* Default class applied to drop zones on over */\n    .another-file-over-class { border: dotted 3px green; }\n    html, body { height: 80%; }\n</style>\n\n\n\n<!--<pre>{{section | json}}       </pre>>   -->\n\n<div class=\"container\">\n\n  \n    <div class=\"row\">\n\n        <div class=\"col-md-3\">\n\n            <h3>Sélectionner les fichiers </h3>\n\n            <div ng2FileDrop\n                 [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\"\n                 (fileOver)=\"fileOverBase($event)\"\n                 [uploader]=\"uploader\"\n                 class=\"well my-drop-zone\">\n                Base drop zone\n            </div>\n\n            <div ng2FileDrop\n                 [ngClass]=\"{'another-file-over-class': hasAnotherDropZoneOver}\"\n                 (fileOver)=\"fileOverAnother($event)\"\n                 [uploader]=\"uploader\"\n                 class=\"well my-drop-zone\">\n                Another drop zone\n            </div>\n\n            Multiple\n            <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple  /><br/>\n\n            Unique\n            <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" />\n        </div>\n\n        <div class=\"col-md-7\" style=\"margin-bottom: 40px\">\n\n            <h3> Queue d'upload</h3>\n            <p>Longeur de la Queue: {{ uploader?.queue?.length }}</p>\n\n            <table class=\"table\">\n                <thead>\n                <tr>\n                    <th width=\"50%\">Nom</th>\n                    <th>Taille</th>\n                    <th>Progrès</th>\n                    <th>Statut</th>\n                    <th>Actions</th>\n                </tr>\n                </thead>\n                <tbody>\n                <tr *ngFor=\"let item of uploader.queue\">\n                    <td><strong>{{ item?.file?.name }}</strong></td>\n  <td *ngIf=\"uploader.isHTML5\" nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\n  <td *ngIf=\"uploader.isHTML5\">\n                        <div class=\"progress\" style=\"margin-bottom: 0;\">\n                            <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': item.progress + '%' }\"></div>\n                        </div>\n                    </td>\n                    <td class=\"text-center\">\n                        <span *ngIf=\"item.isSuccess\"><i class=\"glyphicon glyphicon-ok\"></i></span>\n                        <span *ngIf=\"item.isCancel\"><i class=\"glyphicon glyphicon-ban-circle\"></i></span>\n                        <span *ngIf=\"item.isError\"><i class=\"glyphicon glyphicon-remove\"></i></span>\n                    </td>\n                    <td nowrap>\n                        <button type=\"button\" class=\"btn btn-success btn-xs\"\n                                (click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\n                            <span class=\"glyphicon glyphicon-upload\"></span> Upload\n                        </button>\n                        <button type=\"button\" class=\"btn btn-warning btn-xs\"\n                                (click)=\"item.cancel()\" [disabled]=\"!item.isUploading\">\n                            <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel\n                        </button>\n                        <button type=\"button\" class=\"btn btn-danger btn-xs\"\n                                (click)=\"item.remove()\">\n                            <span class=\"glyphicon glyphicon-trash\"></span> Remove\n                        </button>\n                    </td>\n                </tr>\n                </tbody>\n            </table>\n\n            <div>\n                <div>\n                    Queue progress:\n                    <div class=\"progress\" style=\"\">\n                        <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\n                    </div>\n                </div>\n                <button type=\"button\" class=\"btn btn-success btn-s\"\n                        (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\n                    <span class=\"glyphicon glyphicon-upload\"></span> Upload all\n                </button>\n                <button type=\"button\" class=\"btn btn-warning btn-s\"\n                        (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">\n                    <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel all\n                </button>\n                <button type=\"button\" class=\"btn btn-danger btn-s\"\n                        (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\n                    <span class=\"glyphicon glyphicon-trash\"></span> Remove all\n                </button>\n            </div>\n\n        </div>\n\n    </div>\n\n</div>\n\n <!--\n<pdf-viewer [src]=\"'http://localhost:8080/api/allsupportcours/39'\" \n              [page]=\"page\" \n              [original-size]=\"true\" \n              style=\"display: block;\"\n              [show-all]=\"true\"\n\n  ></pdf-viewer>\n  \n  !-->"

/***/ }),

/***/ 545:
/***/ (function(module, exports) {

module.exports = "\n<footer>\n      <!--Newletter Wrap Start-->\n      \n      <!--Newletter Wrap End-->\n\n      <!--Footer List Wrap Start-->\n      <div class=\"gt_footer1_bg default_width\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-md-3 col-sm-6\">\n              <div class=\"gt_foo_about gt_widget_hdg\">\n                  <h5>Our Sevices</h5>\n                  <ul>\n                      <li><a href=\"#\">Courses</a></li>\n                      <li><a href=\"#\">Events</a></li>\n                      <li><a href=\"#\">Teachers</a></li>\n                      <li><a href=\"#\">Blog</a></li>\n                      <li><a href=\"#\">Gdaducation</a></li>\n                  </ul>\n              </div>\n            </div>\n            <div class=\"col-md-3 col-sm-6\">\n              <div class=\"gt_foo_about gt_widget_hdg\">\n                  <h5>My Account</h5>\n                  <ul>\n                      <li><a href=\"#\">My Account</a></li>\n                      <li><a href=\"#\">Order History</a></li>\n                      <li><a href=\"#\">Wishlist</a></li>\n                      <li><a href=\"#\">Newsletter</a></li>\n                      <li><a href=\"#\">Special</a></li>\n                  </ul>\n              </div>\n            </div>\n            <div class=\"col-md-3 col-sm-6\">\n              <div class=\"gt_foo_about gt_widget_hdg\">\n                  <h5>Our Support</h5>\n                  <ul>\n                      <li><a href=\"#\">Contact Us</a></li>\n                      <li><a href=\"#\">Shipping &#38; Taxes</a></li>\n                      <li><a href=\"#\">Return Policy</a></li>\n                      <li><a href=\"#\">Site Map</a></li>\n                      <li><a href=\"#\">Conatct Us</a></li>\n                  </ul>\n              </div>\n            </div>\n            <div class=\"col-md-3 col-sm-6\">\n              <div class=\"gt_foo_about gt_widget_hdg\">\n                  <h5>Information</h5>\n                  <ul>\n                      <li><a href=\"#\">About Us</a></li>\n                      <li><a href=\"#\">Top Sellers</a></li>\n                      <li><a href=\"#\">Special Products</a></li>\n                      <li><a href=\"#\">Privacy Policy</a></li>\n                      <li><a href=\"#\">Delivery Information</a></li>\n                  </ul>\n              </div>\n            </div>\n          </div>\n\n          <!--Footer Contact Wrap Start-->\n         \n          <!--Footer Contact Wrap End-->\n        </div>\n      </div>\n      <!--Footer List Wrap End-->\n\n      <!--Copyright Wrap End-->\n      <div class=\"gt_copyright_wrap\">\n        <div class=\"container\">\n            <div class=\"gt_copyright_des\">  \n                <p>Copyright © <a href=\"#\">Redlean </a> 2017. All rights reserved.</p>\n                <span>Created by: <a href=\"#\">Mochaouch</a></span>\n              </div>\n          </div>\n      </div>\n      <!--Copyright Wrap Start-->\n    </footer>"

/***/ }),

/***/ 546:
/***/ (function(module, exports) {

module.exports = "\n <header>\n    \n      <div class=\"gt_menu_bg default_width\">\n          <div class=\"container\">\n            <!--Logo Wrap Start-->\n            <div class=\"gt_logo\">\n               \n      <!--  -->    <a href=\"#\"><img src=\"/assets/sopra-hr2.png\"  height=\"75\" width=\"132\"></a>\n            </div>\n            <!--Logo Wrap End-->\n            <!--Cart Wrap Start-->\n            <div class=\"gt_cart_wrap\">\n              <a href=\"#\"><i class=\"fa fa-cart-arrow-down\"></i></a>\n                <div class=\"gt_cart_list\">\n                  <ul>\n                      <li>\n                          <figure>\n                              <img src=\"/assets/eduSkill/extra-images/product-02.png\" alt=\"\">\n                              <i class=\"fa fa-remove\"></i>\n                          </figure>\n                          <div class=\"gt_cart_item_detail\">\n                              <p>Lorem ipsum dolor sit amet</p>\n                              <span>$600</span>\n                          </div>\n                      </li>\n                      <li>\n                          <figure>\n                              <img src=\"/assets/eduSkill/extra-images/product-02.png\" alt=\"\">\n                              <i class=\"fa fa-remove\"></i>\n                          </figure>\n                          <div class=\"gt_cart_item_detail\">\n                              <p>Lorem ipsum dolor sit amet</p>\n                              <span>$600</span>\n                          </div>\n                      </li>\n                      <li>\n                          <span class=\"gt_product\">3 Product Added</span>\n                          <span class=\"gt_product_total\">$3000</span>\n                      </li>\n                      <li>\n                          <a class=\"gt_cart_btn\" href=\"#\">View Cart</a>\n                          <a class=\"gt_cart_btn\" href=\"#\">Checkout</a>\n                      </li>\n                  </ul>\n              </div>\n            </div>\n            <!--Logo Wrap End-->\n            <!--Search Wrap Start-->\n            <div class=\"gt_search_wrap\">\n              <span class=\"search-fld\"><i class=\"fa fa-search\"></i></span>\n                <div class=\"search-wrapper-area\">\n                    <form class=\"search-area\">\n                        <input type=\"text\" placeholder=\"Search Here\"/>\n                        <input type=\"submit\" value=\"Go\"/>\n                    </form>\n                    <span class=\"gt_search_remove_btn\"><i class=\"fa fa-remove\"></i></span>\n                </div>\n            </div>\n            <!--Search Wrap End-->\n            <!--Navigation Wrap Start-->\n            <nav class=\"gt_navigation\">\n              <button class=\"gt_mobile_menu\">\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n              </button>\n                <ul>\n                  <li><a href=\"javascript:avoid(0);\">Home</a>\n                    <ul>\n                      <li><a href=\"index.html\">Home 01</a></li>\n                      <li><a href=\"index-02.html\">Home 02</a></li><li><a href=\"index-03.html\">Home 03</a></li>\n                      <li><a href=\"index-revolution-slider.html\">Home Revolution Slider</a></li>\n                      <li><a href=\"index-static.html\">Home Static Background</a></li>\n\t\t\t\t\t  <li><a href=\"index-static-text-rotation.html\">Home Static Text Rotation</a></li>\n                      <li><a href=\"index-video.html\">Home Video Background</a></li>\n                      <li><a href=\"index-one-page.html\">Home One Page</a></li>\n                    </ul>\n                  </li>\n                  <li><a href=\"about-us.html\">About Us</a></li>\n                  <li><a href=\"javascript:avoid(0);\">Events</a>\n                    <ul>\n                      <li><a href=\"event-grid.html\">Event Grid</a></li>\n                      <li><a href=\"event-list.html\">Event List</a></li>\n                      <li><a href=\"event-detail.html\">Event Detail</a></li>\n                    </ul>\n                  </li>\n                  <li class=\"active\"><a href=\"javascript:avoid(0);\">Courses</a>\n                    <ul>\n                      <li><a href=\"course-grid.html\">Courses Grid</a></li>\n                      <li><a href=\"course-grid-style-02.html\">Courses Grid Style 02</a></li>\n                      <li><a href=\"course-grid-with-sidebar.html\">Courses Grid With Sidebar</a></li>\n                      <li><a href=\"course-listing.html\">Courses List</a></li>\n                      <li class=\"active\"><a href=\"course-detail.html\">Courses Detail</a></li>\n                    </ul>\n                  </li>\n                  <li><a href=\"javascript:avoid(0);\">Blog</a>\n                    <ul>\n                      <li><a href=\"blog-grid.html\">Blog Grid</a></li>\n                      <li><a href=\"blog-listing.html\">Blog List</a></li>\n                      <li><a href=\"blog-single.html\">Blog Single</a></li>\n                      <li><a href=\"blog-detail.html\">Blog Detail</a></li>\n                    </ul>\n                  </li>\n                  <li><a href=\"javascript:avoid(0);\">Shop</a>\n                    <ul>\n                      <li><a href=\"shop-product-01.html\">Shop Product 01</a></li>\n                      <li><a href=\"shop-product-02.html\">Shop Product 02</a></li>\n                      <li><a href=\"shop-detail.html\">Shop Detail</a></li>\n                    </ul>\n                  </li>\n                  <li><a href=\"javascript:avoid(0);\">Pages</a>\n                    <ul>\n                      <li><a href=\"javascript:avoid(0);\">404 Pages</a>\n                        <ul>\n                          <li><a href=\"404-page.html\">404 01</a></li>\n                          <li><a href=\"404-page-2.html\">404 02</a></li>\n                        </ul>\n                      </li>\n                      <li><a href=\"comming-soon.html\">Comming Soon</a></li>\n                      <li><a href=\"classes.html\">Classes</a></li>\n                      <li><a href=\"javascript:avoid(0);\">Team Pages</a>\n                        <ul>\n                          <li><a href=\"team-grid.html\">Team Grid</a></li>\n                          <li><a href=\"team-grid-02.html\">Team Grid Style 02</a></li>\n                          <li><a href=\"team-detail.html\">Team Detail</a></li>\n                        </ul>\n                      </li>\n                      <li><a href=\"javascript:avoid(0);\">Dashboard Pages</a>\n                        <ul>\n                          <li><a href=\"my-profile.html\">My Profile</a></li>\n                          <li><a href=\"profile-setting.html\">Profile Setting</a></li>\n                          <li><a href=\"privacy-setting.html\">Privacy Setting</a></li>\n                          <li><a href=\"report-achievement.html\">Reports and Achievement</a></li>\n                          <li><a href=\"dashboard-classes.html\">Dashboard Classes</a></li>\n                          <li><a href=\"dashboard-courses.html\">Dashboard Courses</a></li>\n                          <li><a href=\"dashboard-fav-courses.html\">Dashboard Favorite Courses</a></li>\n                        </ul>\n                      </li>\n                      <li><a href=\"login-register.html\">Login and Register</a></li>\n                    </ul>\n                  </li>\n                  <li><a href=\"contact-us.html\">Contact Us</a></li>\n                </ul>\n            </nav>\n            <!--Navigation Wrap End-->\n          </div>\n      </div>\n    </header>\n    <!--Header Wrap End-->"

/***/ }),

/***/ 547:
/***/ (function(module, exports) {

module.exports = "<p>\n  login-user works!\n</p>\n"

/***/ }),

/***/ 548:
/***/ (function(module, exports) {

module.exports = "<p>\n  pdf-reader works!\n</p>\n<div>\n\n  <div>\n    <label>Page:</label>\n    <input type=\"text\" placeholder=\"Page\" [(ngModel)]=\"page\">\n  </div>\n  <pdf-viewer [show-all]=\"true\" [zoom]=\"1.5\" [src]=\"pdfSrc\" [page]=\"page\" [original-size]=\"true\" style=\"display: block;\"></pdf-viewer>"

/***/ }),

/***/ 549:
/***/ (function(module, exports) {

module.exports = "<!--<div *ngIf=\"quiz\">\n    <pre>     {{quiz|json}}  </pre>\n  <h4><span>Cours</span> {{quiz.id}}</h4>\n  <h4><span>name</span> {{quiz.name}}</h4>\n  <h4><span>Description</span> {{quiz.description}}</h4>\n  <h4><span>Difficulty</span> {{quiz.difficulty}}</h4>\n   <div *ngFor=\"let faset of quiz.quizQuestions\" > \n    <pre> {{faset.id | json}} </pre>\n     \n<a [routerLink]=\"['../reponse', faset.id ]\"> {{faset.id}}</a>\n      </div>\n</div>-->\n<!--<pre>     {{quiz|json}}  </pre>-->\n\n    <h3 class=\"modal-title\" id=\"myQuizLabel\"> Créer les questions associées à ce Cours </h3>\n\n<form name=\"editForm\" role=\"form\" novalidate (ngSubmit)=\"save()\" #editForm=\"ngForm\" *ngIf=\"quizQuestion\">\n  <div class=\"modal-header\">\n  </div>\n  <div class=\"modal-body\">\n\n    <div class=\"form-group\">\n      <label class=\"form-control-label\" for=\"field_name\">Libellé Question </label>\n      <input type=\"text\" class=\"form-control\" required name=\"name\" id=\"field_name\" [(ngModel)]=\"quizQuestion.name\" />\n    </div>\n\n\n\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"clear()\">\n            <span class=\"fa fa-ban\"></span>&nbsp;<span>Cancel</span>\n        </button>\n\n      <button type=\"submit\" [disabled]=\"!editForm.form.valid\" class=\"btn btn-primary\">\n            <span class=\"fa fa-save\"></span>&nbsp;<span>Save</span>\n        </button>\n    </div>\n  </div>\n</form>\n\n\n\n\n\n\n<div *ngIf=\"quiz\">\n  <div class=\"table-responsive\">\n    <table class=\"table table-striped\">\n      <thead>\n        <tr>\n          <th><span>ID</span> <span class=\"fa fa-sort\"></span></th>\n\n          <th><span>Libellé Question</span> <span class=\"fa fa-sort\"></span></th>\n          <th></th>\n        </tr>\n      </thead>\n\n      <tbody>\n\n        <tr *ngFor=\"let faset of quiz.questions\">\n          <td>\n            <a [routerLink]=\"['../reponse', faset.id ]\">{{faset.id}}</a>\n          </td>\n          <td>{{faset.name}}</td>\n          <td>{{faset.difficulty}}</td>\n\n\n          <td class=\"text-right\">\n            <div class=\"btn-group flex-btn-group-container\">\n              <button  [routerLink]=\"['../reponse', faset.id ]\" type=\"submit\" class=\"btn btn-primary btn-sm\">\n                            <span class=\"hidden-md-down\">Ajouter Réponses</span>\n\n                              <span class=\"glyphicon glyphicon-ok\"></span>\n                        </button>\n              <!--<button type=\"submit\" replaceUrl=\"true\" class=\"btn btn-primary btn-sm\">\n                            <span class=\"fa fa-pencil\"></span>\n                            <span class=\"hidden-md-down\">Edit</span>\n                        </button>\n              <button type=\"submit\" replaceUrl=\"true\" class=\"btn btn-danger btn-sm\">\n                            <span class=\"fa fa-remove\"></span>\n                            <span class=\"hidden-md-down\">Delete</span>\n                        </button>-->\n            </div>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChallengeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChallengeService = (function () {
    function ChallengeService(http) {
        this.http = http;
        this.ChallengeUrl = 'http://localhost:8080/api/challenge';
    }
    ChallengeService.prototype.createChallenge = function (body) {
        var bodyString = JSON.stringify(body); // Stringify payload
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers }); // Create a request option
        return this.http.post(this.ChallengeUrl, body, options) // ...using post request
            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); }); //...errors if any
    };
    ChallengeService.prototype.getAllChallenges = function () {
        // ...using get request
        return this.http.get(this.ChallengeUrl)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    ChallengeService.prototype.findChallengeById = function (id) {
        return this.http.get(this.ChallengeUrl + "/" + id).map(function (res) {
            return res.json();
        });
    };
    ChallengeService.prototype.updateChallenge = function (body) {
        var bodyString = JSON.stringify(body); // Stringify payload
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers }); // Create a request option
        return this.http.put(this.ChallengeUrl, body, options) // ...using post request
            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); }); //...errors if any
    };
    return ChallengeService;
}());
ChallengeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], ChallengeService);

var _a;
//# sourceMappingURL=challenge.service.js.map

/***/ }),

/***/ 550:
/***/ (function(module, exports) {

module.exports = "<h1> Créer un Quiz</h1>\n\n<form name=\"editForm\" role=\"form\" novalidate (ngSubmit)=\"save()\" #editForm=\"ngForm\" *ngIf=\"quiz\">\n\n  <div class=\"modal-header\">\n\n  </div>\n  <div class=\"modal-body\">\n\n    <div class=\"form-group\">\n      <label class=\"form-control-label\" for=\"field_name\">Nom </label>\n      <input type=\"text\" class=\"form-control\" #NomInput=\"ngModel\" minlength=3 required name=\"name\" id=\"field_name\" [(ngModel)]=\"quiz.name\"\n      />\n\n\n      <small [hidden]=\"NomInput.valid || (NomInput.pristine && !editForm.submitted)\" class=\"text-danger\">\n            Nom du quiz est un champs obligatoire  (minimum 3 caractères).\n          </small>\n\n\n\n    </div>\n    <div class=\"form-group\">\n      <label class=\"form-control-label\" for=\"field_description\">Description</label>\n      <input type=\"text\" class=\"form-control\" #descriptionInput=\"ngModel\" minlength=7 name=\"description\" id=\"field_name\" [(ngModel)]=\"quiz.description\"\n      />\n\n      <small [hidden]=\"descriptionInput.valid || (descriptionInput.pristine && !editForm.submitted)\" class=\"text-danger\">\n           Description est un champs obligatoire  (minimum 7 caractères).\n          </small>\n    </div>\n\n\n    <div class=\"form-group\">\n\n      <label class=\"form-control-label\" for=\"field_level\">Difficulté </label>\n      <input type=\"number\" class=\"form-control\" required name=\"durantion\" id=\"field_durantion\" [(ngModel)]=\"quiz.difficulty\" />\n    </div>\n    <label class=\"form-control-label\" for=\"field_level\">Cours Associé  </label>\n\n    <select class=\"form-control\" name=\"category\" id=\"field_category\" [(ngModel)]=\"quiz.coursF\">\n                          <option *ngFor=\"let cours of courses\"    [value]=\"cours.id\" >{{cours.title}}</option>\n\n\n      </select>\n\n\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"clear()\">\n            <span class=\"fa fa-ban\"></span>&nbsp;<span>Cancel</span>\n        </button>\n\n    <button type=\"submit\" [disabled]=\"!editForm.form.valid\" class=\"btn btn-primary\">\n            <span class=\"fa fa-save\"></span>&nbsp;<span>Save</span>\n        </button>\n  </div>\n</form>\n\n\n\n\n\n\n<div class=\"row\">\n</div>\n<br/>\n<div class=\"table-responsive\">\n  <table class=\"table table-striped\">\n    <thead>\n      <tr>\n        <th><span>ID</span> <span class=\"fa fa-sort\"></span></th>\n        <th><span>Nom</span> <span class=\"fa fa-sort\"></span></th>\n        <th><span>Description</span> <span class=\"fa fa-sort\"></span></th>\n        <th><span>Difficulté</span> <span class=\"fa fa-sort\"></span></th>\n        <th><span>Cours Associé</span> <span class=\"fa fa-sort\"></span></th>\n\n      </tr>\n    </thead>\n\n    <tbody>\n\n      <tr *ngFor=\"let quiz of quizs\">\n        <td>\n          <a [routerLink]=\"['../quiz/question', quiz.id ]\">{{quiz.id}}</a>\n        </td>\n        <td>{{quiz.name}}</td>\n        <td>{{quiz.description}}</td>\n        <td>{{quiz.difficulty}}</td>\n        <div *ngIf=\"quiz.coursT\">\n          <td> {{quiz.coursT.title}}</td>\n        </div>\n\n\n\n        <td class=\"text-right\">\n          <div class=\"btn-group flex-btn-group-container\">\n            <button [routerLink]=\"['../quiz/question', quiz.id ]\" type=\"submit\" class=\"btn btn-danger btn-sm\">\n                          \n                            <span class=\"hidden-md-down\">Ajouter Questions    </span>\n                              <span class=\"glyphicon glyphicon-question-sign\"></span>\n                        </button>\n\n            <!--<button type=\"submit\" replaceUrl=\"true\" class=\"btn btn-primary btn-sm\">\n                            <span class=\"fa fa-pencil\"></span>\n                            <span class=\"hidden-md-down\">Edit</span>\n                        </button>\n            <button type=\"submit\" replaceUrl=\"true\" class=\"btn btn-danger btn-sm\">\n                            <span class=\"fa fa-remove\"></span>\n                            <span class=\"hidden-md-down\">Delete</span>\n                        </button>-->\n          </div>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ 551:
/***/ (function(module, exports) {

module.exports = "<form name=\"editForm\" role=\"form\" novalidate (ngSubmit)=\"save()\" #editForm=\"ngForm\">\n\n  <div class=\"modal-header\">\n\n    <div *ngIf=\"question\">\n      <h3 class=\"modal-title\" id=\"myQuizLabel\">Créer les réponses relatives à la question </h3>\n      <h4> {{question.name}} </h4>\n\n    </div>\n  </div>\n  <div class=\"modal-body\">\n\n    <div class=\"form-group\">\n      <label class=\"form-control-label\" for=\"field_labelReponse\">Libellé de la Réponse </label>\n      <input type=\"text\" class=\"form-control\" required name=\"labelReponse\" id=\"field_labelReponse\" [(ngModel)]=\"reponse.name\" />\n    </div>\n\n\n\n\n    <div class=\"form-group\">\n      <div class=\"alert alert-danger\">\n        <strong>Ceci est une bonne réponse?</strong> (Par défaut, la réponse est fausse !!! )\n        <input type=\"checkbox\" name=\"bool\" id=\"field_bool\" [(ngModel)]=\"reponse.isAnswer\" />\n      </div>\n\n\n    </div>\n\n\n\n\n\n\n\n\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"clear()\">\n            <span class=\"fa fa-ban\"></span>&nbsp;<span>Cancel</span>\n        </button>\n\n    <button type=\"submit\" [disabled]=\"!editForm.form.valid\" class=\"btn btn-primary\">\n            <span class=\"fa fa-save\"></span>&nbsp;<span>Save</span>\n        </button>\n  </div>\n</form>\n\n\n\n\n\n<div *ngIf=\"question\">\n  <div class=\"table-responsive\">\n    <table class=\"table table-striped\">\n      <thead>\n        <tr>\n          <th><span>ID</span> <span class=\"fa fa-sort\"></span></th>\n          <th><span>Libellé de la Réponse </span> <span class=\"fa fa-sort\"></span></th>\n          <th><span>Bonne/Mauvaise</span> <span class=\"fa fa-sort\"></span></th>\n          <th></th>\n        </tr>\n      </thead>\n\n      <tbody>\n\n        <tr *ngFor=\"let faset of question.options\">\n          <td>\n            <a>{{faset.id}}</a>\n          </td>\n          <td>{{faset.name}}</td>\n          <td *ngIf=\"faset.isAnswer== false \">\n            <span class=\"label label-danger\">Mauvaise</span>\n\n          </td>\n          <td *ngIf=\"faset.isAnswer== true \">\n            <span class=\"label label-success\"> Bonne</span>\n\n          </td>\n\n\n          <td class=\"text-right\">\n            <div class=\"btn-group flex-btn-group-container\">\n\n              <button type=\"submit\" replaceUrl=\"true\" class=\"btn btn-primary btn-sm\">\n                            <span class=\"fa fa-pencil\"></span>\n                            <span class=\"hidden-md-down\">Edit</span>\n                        </button>\n              <button type=\"submit\" replaceUrl=\"true\" class=\"btn btn-danger btn-sm\">\n                            <span class=\"fa fa-remove\"></span>\n                            <span class=\"hidden-md-down\">Delete</span>\n                        </button>\n            </div>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ 552:
/***/ (function(module, exports) {

module.exports = "<style>\n    .my-drop-zone { border: dotted 3px lightgray; }\n    .nv-file-over { border: dotted 3px red; } /* Default class applied to drop zones on over */\n    .another-file-over-class { border: dotted 3px green; }\n    html, body { height: 100%; }\n</style>\n\n<div class=\"container\">\n\n    <div class=\"navbar navbar-default\">\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand\" href>Angular2 File Upload</a>\n        </div>\n    </div>\n\n    <div class=\"row\">\n\n        <div class=\"col-md-3\">\n\n            <h3>Select files</h3>\n\n            <div ng2FileDrop\n                 [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\"\n                 (fileOver)=\"fileOverBase($event)\"\n                 [uploader]=\"uploader\"\n                 class=\"well my-drop-zone\">\n                Base drop zone\n            </div>\n\n            <div ng2FileDrop\n                 [ngClass]=\"{'another-file-over-class': hasAnotherDropZoneOver}\"\n                 (fileOver)=\"fileOverAnother($event)\"\n                 [uploader]=\"uploader\"\n                 class=\"well my-drop-zone\">\n                Another drop zone\n            </div>\n\n            Multiple\n            <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple  /><br/>\n\n            Single\n            <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" />\n        </div>\n\n        <div class=\"col-md-9\" style=\"margin-bottom: 40px\">\n\n            <h3>Upload queue</h3>\n            <p>Queue length: {{ uploader?.queue?.length }}</p>\n\n            <table class=\"table\">\n                <thead>\n                <tr>\n                    <th width=\"50%\">Name</th>\n                    <th>Size</th>\n                    <th>Progress</th>\n                    <th>Status</th>\n                    <th>Actions</th>\n                </tr>\n                </thead>\n                <tbody>\n                <tr *ngFor=\"let item of uploader.queue\">\n                    <td><strong>{{ item?.file?.name }}</strong></td>\n                    <td *ngIf=\"uploader.isHTML5\" nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\n                    <td *ngIf=\"uploader.isHTML5\">\n                        <div class=\"progress\" style=\"margin-bottom: 0;\">\n                            <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': item.progress + '%' }\"></div>\n                        </div>\n                    </td>\n                    <td class=\"text-center\">\n                        <span *ngIf=\"item.isSuccess\"><i class=\"glyphicon glyphicon-ok\"></i></span>\n                        <span *ngIf=\"item.isCancel\"><i class=\"glyphicon glyphicon-ban-circle\"></i></span>\n                        <span *ngIf=\"item.isError\"><i class=\"glyphicon glyphicon-remove\"></i></span>\n                    </td>\n                    <td nowrap>\n                        <button type=\"button\" class=\"btn btn-success btn-xs\"\n                                (click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\n                            <span class=\"glyphicon glyphicon-upload\"></span> Upload\n                        </button>\n                        <button type=\"button\" class=\"btn btn-warning btn-xs\"\n                                (click)=\"item.cancel()\" [disabled]=\"!item.isUploading\">\n                            <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel\n                        </button>\n                        <button type=\"button\" class=\"btn btn-danger btn-xs\"\n                                (click)=\"item.remove()\">\n                            <span class=\"glyphicon glyphicon-trash\"></span> Remove\n                        </button>\n                    </td>\n                </tr>\n                </tbody>\n            </table>\n\n            <div>\n                <div>\n                    Queue progress:\n                    <div class=\"progress\" style=\"\">\n                        <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\n                    </div>\n                </div>\n                <button type=\"button\" class=\"btn btn-success btn-s\"\n                        (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\n                    <span class=\"glyphicon glyphicon-upload\"></span> Upload all\n                </button>\n                <button type=\"button\" class=\"btn btn-warning btn-s\"\n                        (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">\n                    <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel all\n                </button>\n                <button type=\"button\" class=\"btn btn-danger btn-s\"\n                        (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\n                    <span class=\"glyphicon glyphicon-trash\"></span> Remove all\n                </button>\n            </div>\n\n        </div>\n\n    </div>\n\n</div>"

/***/ }),

/***/ 553:
/***/ (function(module, exports) {

module.exports = "<!--<div *ngIf=\"cours\">\n    <h4><span>id</span> {{cours.id}}</h4>\n    <h4><span>aboutTheCours:</span> {{cours.aboutTheCours}}</h4>\n</div>\n\n\n\nListe des Sections\n<div class=\"table-responsive\">\n    <table class=\"table table-striped\">\n        <thead>\n            <tr>\n                <th><span>ID</span> <span class=\"fa fa-sort\"></span></th>\n                <th><span>Section</span> <span class=\"fa fa-sort\"></span></th>\n\n                <th></th>\n            </tr>\n        </thead>\n        <tbody>\n            [routerLink]=\"['../reponse', quizQuestion.id ]\"\n            <tr *ngFor=\"let section of sections\">\n                <td><a [routerLink]=\"['../support', section.id ]\">{{section.id}}</a></td>\n                <td>{{section.sectionName}}</td>\n\n                <div *ngFor=\"let faset of section.supportCours\">\n                    <pre> {{faset.id | json}} </pre>\n                    <pre> {{faset.supportName | json}} </pre>\n\n                </div>\n\n                <td class=\"text-right\">\n                    <div class=\"btn-group flex-btn-group-container\">\n                        <button type=\"submit\" class=\"btn btn-info btn-sm\">\n                            <span class=\"fa fa-eye\"></span>\n                            <span class=\"hidden-md-down\">View</span>\n                        </button>\n                        <button type=\"submit\" replaceUrl=\"true\" class=\"btn btn-primary btn-sm\">\n                            <span class=\"fa fa-pencil\"></span>\n                            <span class=\"hidden-md-down\">Edit</span>\n                        </button>\n                        <button type=\"submit\" replaceUrl=\"true\" class=\"btn btn-danger btn-sm\">\n                            <span class=\"fa fa-remove\"></span>\n                            <span class=\"hidden-md-down\">Delete</span>\n                        </button>\n                    </div>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n-->\n\n\n\n<div  *ngIf=\"cours\" class=\"gt_content_wrap\">\n    <section class=\"gt_courses_bg\">\n        <div class=\"container\">\n            <!--Course Detail Wrap Start-->\n            <div class=\"col-md-8\">\n                <div class=\"gt_cdd_outer_wrap default_width\">\n\n                    <div class=\"gt_cd_hdg_wrap default_width\">\n                        <h5>{{cours.title}}</h5>\n                        <div class=\"gt_cd_rating\">\n                            <span>(244 Review)</span>\n                            <ul class=\"gt_rating_star\">\n                                <li>\n                                    <a href=\"#\"><i class=\"fa fa-star\"></i></a>\n                                    <a href=\"#\"><i class=\"fa fa-star\"></i></a>\n                                    <a href=\"#\"><i class=\"fa fa-star\"></i></a>\n                                    <a href=\"#\"><i class=\"fa fa-star\"></i></a>\n                                    <a href=\"#\"><i class=\"fa fa-star\"></i></a>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"gt_cd_mata_wrap default_width\">\n                        <ul>\n                            <li>\n\n                                <div class=\"gt_course_meta_des\">\n\n                                </div>\n                            </li>\n                            <li>\n                                <i class=\"icon-book\"></i>\n                                <div class=\"gt_course_meta_des\">\n                                    <h6>Photoshop</h6>\n                                    <span>Categories</span>\n                                </div>\n                            </li>\n\n                        </ul>\n                    </div>\n                    <div class=\"gt_cd_des_wrap default_width\">\n                        <h4>ABOUT THE COURSE</h4>\n                        <p class=\"mb20\">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur\n                            magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem\n                            ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi</p>\n                        <p>Tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,\n                            quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi\n                            consequatur? Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed\n                            quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam\n                            est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam\n                            eius modi.Quis autem vel eum iure reprehender.a</p>\n                    </div>\n                    <div class=\"gt_cd_des_wrap default_width\">\n                        <h4>What You'll Study</h4>\n                        <p class=\"mb20\">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur\n                            magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem\n                            ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi</p>\n                        <p>Tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,\n                            quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi\n                            consequatur? Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed\n                            quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam\n                            est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam\n                            eius modi.Quis autem vel eum iure reprehender.a</p>\n                        <ul>\n                            <li>We are home to 1,500 students and 100 experts.</li>\n                            <li>We are home to 1,500 students and 100 experts.</li>\n                            <li>We are home to 1,500 students and 100 experts.</li>\n                            <li>We are home to 1,500 students and 100 experts.</li>\n                        </ul>\n                    </div>\n                    <div class=\"gt_cd_des_wrap default_width\">\n                        <h4>Requirements</h4>\n                        <p class=\"mb20\">emo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur\n                            magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem\n                            ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi</p>\n                        <ul>\n                            <li>We are home to 1,500 students and 100 experts.</li>\n                            <li>We are home to 1,500 students and 100 experts.</li>\n                            <li>We are home to 1,500 students and 100 experts.</li>\n                            <li>We are home to 1,500 students and 100 experts.</li>\n                        </ul>\n                    </div>\n                    <div class=\"gt_cd_des_wrap border_bottom default_width\">\n                        <h4>OUR CURRICULUM</h4>\n                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur\n                            magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem\n                            ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi</p>\n                    </div>\n                    <div  *ngFor=\"let section of sections\" class=\"gt_course_list_wrap default_width\">\n                        <h6>   {{section.sectionName}} </h6>\n                        <ul >\n                          \n                            <li  *ngFor=\"let faset of section.supportCours\">\n                              \n                                <div class=\"gt_lec_detail\">Lecture:</div>\n                                <div class=\"gt_lec_title\">\n                                    <h6> {{faset.supportName}}</h6>\n                                       <h6> {{faset.id}}</h6>\n                                   \n                                 <span><a  [routerLink]=\"['../display/', faset.id,{contentType:faset.contentType, id:faset.id}  ]\" target=\"_blank\">Preveiw</a></span>\n                                </div>\n                                <!--<div class=\"gt_lec_duration\"><i class=\"fa fa-clock-o\"></i>30 Minute</div>-->\n                            </li>\n                            \n                        </ul>\n                    </div>\n\n\n\n                </div>\n            </div>\n            <!--Course Detail Wrap End-->\n            <!--Aside Wrap End-->\n            <aside class=\"col-md-4\">\n                <div class=\"gt_resp_margn default_width\">\n                    <!--Aside Featured Courses Wrap Start-->\n                    <div class=\"gt_featured_course_list gt_aside2_hdg mb30\">\n                        <h5>Courses Feature</h5>\n                        <ul>\n                            <li>\n                                <div class=\"gt_course_dur_list\">\n                                    <i class=\"icon-clock-1\"></i>\n                                    <span>Coureses Duration</span>\n                                </div>\n                                <span class=\"gt_duration\">3 Month</span>\n                            </li>\n                            <li>\n                                <div class=\"gt_course_dur_list\">\n                                    <i class=\"icon-student\"></i>\n                                    <span>No of  Lectures</span>\n                                </div>\n                                <span class=\"gt_duration\">18</span>\n                            </li>\n                            <li>\n                                <div class=\"gt_course_dur_list\">\n                                    <i class=\"icon-cup\"></i>\n                                    <span>Certification</span>\n                                </div>\n                                <span class=\"gt_duration\">Yes</span>\n                            </li>\n                            <li>\n                                <div class=\"gt_course_dur_list\">\n                                    <i class=\"icon-classroom-with-students-group-and-the-teacher\"></i>\n                                    <span>Quizzes</span>\n                                </div>\n                                <span class=\"gt_duration\">2</span>\n                            </li>\n                            <li>\n                                <div class=\"gt_course_dur_list\">\n                                    <i class=\"icon-people\"></i>\n                                    <span>Student</span>\n                                </div>\n                                <span class=\"gt_duration\">50</span>\n                            </li>\n                            <li>\n                                <div class=\"gt_course_dur_list\">\n                                    <i class=\"icon-people-1\"></i>\n                                    <span>Skill Level</span>\n                                </div>\n                                <span class=\"gt_duration\">Begineer</span>\n                            </li>\n\n                        </ul>\n\n                    </div>\n\n\n\n\n\n                    <!--Aside Featured Courses Wrap End-->\n\n                    <!--Aside Download Courses Wrap Start-->\n\n                    <!--Aside Download Courses Wrap End-->\n\n                    <!--Aside Courses Introduction Wrap Start-->\n\n                    <!--Aside Categories Wrap End-->\n\n\n                    <!--Aside Featured Courses Wrap End-->\n\n                    <!--Aside Question From Wrap Start-->\n                    <div class=\"gt_aside2_hdg\">\n                        <h5>Question</h5>\n                        <form class=\"gt_aside_ques_form\">\n                            <input type=\"text\" placeholder=\"Name\">\n                            <input type=\"text\" placeholder=\"Email\">\n                            <textarea placeholder=\"Message\"></textarea>\n                            <input type=\"submit\" value=\"Send Now\">\n                        </form>\n                    </div>\n                    <!--Aside Question From Wrap End-->\n                </div>\n            </aside>\n            <!--Aside Wrap Start-->\n        </div>\n    </section>\n</div>"

/***/ }),

/***/ 554:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"mimtype=== 'application/pdf'\">\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <p style=\" text-align: center\"> Page: {{this.page}}</p>\n    </div>\n    <div class=\"col-md-4\">\n      <nav aria-label=\"...\">\n        <ul class=\"pager\">\n          <li><a (click)=\"decrease()\">Previous</a></li>\n          <li><a (click)=\"increment()\">Next     </a></li>\n        </ul>\n      </nav>\n    </div>\n    <div class=\"col-md-4\">\n      <p style=\" text-align: center\"> Page: {{this.noumrou}}</p>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <pdf-viewer [src]=\"this.url2\" [(page)]=\"page\" [render-text]=\"true\" [zoom]=\"1.2\">\n      </pdf-viewer>\n    </div>\n    <div class=\"col-md-6\">\n      <pdf-viewer [src]=\"this.url2\" [(page)]=\"noumrou\" [render-text]=\"true\" [zoom]=\"1.2\">\n      </pdf-viewer>\n    </div>\n  </div>\n\n\n\n\n</div>\n\n\n\n<div *ngIf=\"mimtype === 'video/mp4'\">\n\n\n\n  <h1>Video </h1>\n  {{ this.varGlobal }}\n  <p>ssssss</p>\n\n  <div>\n    <video class=\"vid\" style=\"width:680px\" id=\"mp\" (loadedmetadata)=\"processMetaData(movieplayer)\" #movieplayer (timeupdate)=\"updateDisplayTime(movieplayer)\"\n      (mouseenter)=\"hideControl(false)\" (mouseout)=\"hideControl(true)\">\n      <source src=\"http://localhost:8080/api/allsupportcours/{{varGlobal}}\" />\n\n    </video>\n    <div [hidden]=\"hidectrl\" style=\"position:relative;top:-50px;left:5px\" (mouseenter)=\"hideControl(false)\" (mouseout)=\"hideControl(true)\">\n      <input [hidden]=\"!movieLoaded\" class=\"slider\" type=\"range\" min=\"0\" style=\"width:620px\" max=\"{{movieplayer.duration}}\" id=\"myRange\"\n        [(ngModel)]=\"currentTimeRange\" (input)=\"seek($event,movieplayer)\">\n      <div></div>\n\n      <button (click)=\"onPlayPause(movieplayer)\"><img style=\"width:16px;\" src={{playpauseimg}}></button>\n      <button (click)=\" onMuteUnmute(movieplayer)\">\n      <img  style=\"width:16px;\" src={{volumeMuteImg}}></button>\n      <button (click)=\"makeFullScreen(movieplayer)\"><img   style=\"width:16px;\" src=\"/assets/video/fullscreen.svg\"></button>\n      <button> <span style=\"color:balck\">{{currTime}} / {{videoDuration}}</span> </button>\n\n      <input #volumerange class=\"volslider\" style=\"width:80px\" type=\"range\" min=\"1\" max=\"10\" [(ngModel)]=\"volume\" (input)=\"seekVolume($event,movieplayer)\">\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 555:
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let cours of courses\">{{cours.id}}</div>\n\n\n\n\n  <div class=\"gt_content_wrap\">\n    <!--Course Grid Wrap Start-->\n    <section class=\"gt_courses_bg\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-9\">\n            <div class=\"row\">\n              <div *ngFor=\"let cours of courses\">\n                <div class=\"col-md-6 col-sm-6 mb30\">\n                  <div class=\"gt_courses_wrap default_width\">\n                    <figure>\n                      <figcaption class=\"gt_course_img_des\">\n                        <div class=\"gt_course_des_holder\">\n\n                          <ul class=\"gt_rating_star\">\n                            <li>\n                              <a href=\"#\"><i class=\"fa fa-star\"></i></a>\n                              <a href=\"#\"><i class=\"fa fa-star\"></i></a>\n                              <a href=\"#\"><i class=\"fa fa-star\"></i></a>\n                              <a href=\"#\"><i class=\"fa fa-star\"></i></a>\n                              <a href=\"#\"><i class=\"fa fa-star\"></i></a>\n                            </li>\n                          </ul>\n                        </div>\n                        <div class=\"gt_course_cat gt_bg_4\">New</div>\n                      </figcaption>\n                    </figure>\n                    <div class=\"gt_course_des default_width\">\n                      <span>Start Date June 28, 2016</span>\n                      <h5><a href=\"#\">{{cours.title}}</a></h5>\n                      <p>  {{cours.aboutTheCours}} </p>\n                    </div>\n                    <div class=\"gt_course_bottom default_width\">\n\n                      <a [routerLink]=\"['../lmscours', cours.id ]\">Lire ce cours</a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n            </div>\n\n\n\n\n            <!--Pagination Wrap Start-->\n            <div class=\"gt_pagination_outer_wrap\">\n              <ul>\n                <li><a href=\"#\"><i class=\"fa fa-angle-double-left\"></i></a></li>\n                <li class=\"active\"><a href=\"#\">1</a></li>\n                <li><a href=\"#\">2</a></li>\n                <li><a href=\"#\">3</a></li>\n                <li><a href=\"#\"><i class=\"fa fa-angle-double-right\"></i></a></li>\n              </ul>\n            </div>\n            <!--Pagination Wrap End-->\n          </div>\n          <!--Aside Bar Wrap Start-->\n          <aside class=\"col-md-3\">\n            <div class=\"gt_resp_margn default_width\">\n              <!--Aside Form Wrap Start-->\n              <div class=\"gt_aside_hdg default_width mb30\">\n                <h6>Find Your Courses</h6>\n                <i class=\"fa fa-minus\"></i>\n                <form>\n                  <div class=\"gt_aside_field\">\n                    <input type=\"text\" placeholder=\"Enter Keyword\">\n                    <i class=\"fa fa-search\"></i>\n                  </div>\n                  <div class=\"gt_aside_field\">\n                    <select class=\"find_course_search\">\n                          <option>Select categories</option>\n                          <option>2</option>\n                          <option>3</option>\n                          <option>4</option>\n                        </select>\n                  </div>\n                  <div class=\"gt_aside_field\">\n                    <button>Search Now<i class=\"fa fa-search\"></i></button>\n                  </div>\n                </form>\n              </div>\n              <!--Aside Form Wrap End-->\n              <!--Aside Courses Type Wrap Start-->\n              <div class=\"gt_aside_hdg default_width mb30\">\n                <h6>Courses Types</h6>\n                <i class=\"fa fa-minus\"></i>\n                <ul class=\"gt_checkbox_list\">\n                  <li>\n                    <input id=\"checknox1\" type=\"checkbox\">\n                    <label for=\"checknox1\"><span></span>All Courses</label>\n                  </li>\n                  <li>\n                    <input id=\"checknox2\" type=\"checkbox\">\n                    <label for=\"checknox2\"><span></span>Skill based</label>\n                  </li>\n                  <li>\n                    <input id=\"checknox3\" type=\"checkbox\">\n                    <label for=\"checknox3\"><span></span>Open Courses</label>\n                  </li>\n                  <li>\n                    <input id=\"checknox4\" type=\"checkbox\">\n                    <label for=\"checknox4\"><span></span>Unveristy Courses</label>\n                  </li>\n                  <li>\n                    <input id=\"checknox5\" type=\"checkbox\">\n                    <label for=\"checknox5\"><span></span>Lectures</label>\n                  </li>\n                  <li>\n                    <input id=\"checknox6\" type=\"checkbox\">\n                    <label for=\"checknox6\"><span></span>E-book</label>\n                  </li>\n                </ul>\n              </div>\n              <!--Aside Courses Type Wrap End-->\n              <!--Aside Price Range Wrap Start-->\n              <div class=\"gt_aside_hdg default_width mb30\">\n                <h6>Price Range</h6>\n                <i class=\"fa fa-minus\"></i>\n                <ul class=\"gt_checkbox_list\">\n                  <li>\n                    <input id=\"checknox7\" type=\"checkbox\">\n                    <label for=\"checknox7\"><span></span>Free</label>\n                  </li>\n                  <li>\n                    <input id=\"checknox8\" type=\"checkbox\">\n                    <label for=\"checknox8\"><span></span>Any Price</label>\n                  </li>\n                  <li>\n                    <input id=\"checknox9\" type=\"checkbox\">\n                    <label for=\"checknox9\"><span></span>Under $60</label>\n                  </li>\n                  <li>\n                    <input id=\"checknox10\" type=\"checkbox\">\n                    <label for=\"checknox10\"><span></span>Under $100</label>\n                  </li>\n                  <li>\n                    <input id=\"checknox11\" type=\"checkbox\">\n                    <label for=\"checknox11\"><span></span>Under $200</label>\n                  </li>\n                  <li>\n                    <input id=\"checknox12\" type=\"checkbox\">\n                    <label for=\"checknox12\"><span></span>Under $300</label>\n                  </li>\n                </ul>\n              </div>\n              <!--Aside Price Range Wrap End-->\n              <!--Aside Degree Level Wrap Start-->\n              <div class=\"gt_aside_hdg default_width mb30\">\n                <h6>Degree Level</h6>\n                <i class=\"fa fa-minus\"></i>\n                <ul class=\"gt_checkbox_list\">\n                  <li>\n                    <input id=\"checknox13\" type=\"checkbox\">\n                    <label for=\"checknox13\"><span></span>Introductory</label>\n                  </li>\n                  <li>\n                    <input id=\"checknox14\" type=\"checkbox\">\n                    <label for=\"checknox14\"><span></span>Intermediate</label>\n                  </li>\n                  <li>\n                    <input id=\"checknox15\" type=\"checkbox\">\n                    <label for=\"checknox15\"><span></span>Advanced</label>\n                  </li>\n                  <li>\n                    <input id=\"checknox16\" type=\"checkbox\">\n                    <label for=\"checknox16\"><span></span>Graduate</label>\n                  </li>\n                  <li>\n                    <input id=\"checknox17\" type=\"checkbox\">\n                    <label for=\"checknox17\"><span></span>Post Graduate</label>\n                  </li>\n                  <li>\n                    <input id=\"checknox18\" type=\"checkbox\">\n                    <label for=\"checknox18\"><span></span>M.phill</label>\n                  </li>\n                  <li>\n                    <input id=\"checknox19\" type=\"checkbox\">\n                    <label for=\"checknox19\"><span></span>PHD</label>\n                  </li>\n                </ul>\n              </div>\n              <!--Aside Degree Level Wrap End-->\n              <!--Aside Instructional Level Wrap Start-->\n              <div class=\"gt_aside_hdg default_width mb30\">\n                <h6>Instructional Level</h6>\n                <i class=\"fa fa-minus\"></i>\n                <ul class=\"gt_checkbox_list\">\n                  <li>\n                    <input id=\"checknox20\" type=\"checkbox\">\n                    <label for=\"checknox20\"><span></span>Introductory</label>\n                  </li>\n                  <li>\n                    <input id=\"checknox21\" type=\"checkbox\">\n                    <label for=\"checknox21\"><span></span>Intermediate</label>\n                  </li>\n                  <li>\n                    <input id=\"checknox22\" type=\"checkbox\">\n                    <label for=\"checknox22\"><span></span>Advanced</label>\n                  </li>\n                  <li>\n                    <input id=\"checknox23\" type=\"checkbox\">\n                    <label for=\"checknox23\"><span></span>Graduate</label>\n                  </li>\n                  <li>\n                    <input id=\"checknox24\" type=\"checkbox\">\n                    <label for=\"checknox24\"><span></span>Post Graduate</label>\n                  </li>\n                  <li>\n                    <input id=\"checknox25\" type=\"checkbox\">\n                    <label for=\"checknox25\"><span></span>M.phill</label>\n                  </li>\n                  <li>\n                    <input id=\"checknox26\" type=\"checkbox\">\n                    <label for=\"checknox26\"><span></span>PHD</label>\n                  </li>\n                </ul>\n              </div>\n              <!--Aside Instructional Level Wrap End-->\n              <!--Aside Feature Courses Wrap Start-->\n              <div class=\"gt_aside_hdg default_width mb30\">\n            \n              </div>\n              <!--Aside Feature Courses Wrap End-->\n            </div>\n          </aside>\n          <!--Aside Bar Wrap End-->\n        </div>\n      </div>\n    </section>\n    <!--Course Grid Wrap End-->\n  </div>\n  <!--Main Content Wrap End-->"

/***/ }),

/***/ 556:
/***/ (function(module, exports) {

module.exports = "<app-header> </app-header>\n\n<div class=\"row\">\n  <div class=\"col-md-6\">\n    <h3>Quiz Application</h3>\n  </div>\n\n</div>\n\n\n<div id=\"quiz\">\n\n\n\n\n  <div *ngIf=\"mode=='quiz' && quiz\">\n\n\n\n    <!--<div class=\"row review\">\n      <div class=\"col-sm-1\" *ngFor=\"let question of quiz.questions; let index = index;\">\n        <div (click)=\"goTo(index)\" class=\"{{ isAnswered(question) == 'Answered'? 'answered': 'not-answered' }}\">{{index + 1}}</div>\n      </div>\n    </div>-->\n\n\n\n    <div *ngFor=\"let question of filteredQuestions;\">\n      <div class=\"badge\">Question {{pager.index + 1}} of    {{pager.count}}.</div>\n      <h2>{{pager.index + 1}}. <span [innerHTML]=\"question.name\"></span></h2>\n      <div class=\"row text-left options\">\n        <div class=\"col-md-6\" *ngFor=\"let option of question.options\">\n          <div >\n            <label class=\"\" [attr.for]=\"option.id\">\n                <input id=\"{{option.id}}\" type=\"checkbox\" [(ngModel)]=\"option.selected\" (change)=\"onSelect(question, option);\" />\n                {{option.name}}\n            </label>\n          </div>\n        </div>\n      </div>\n    </div>\n    <hr />\n    <div class=\"text-sm-center\">\n      <button class=\"btn btn-danger\" *ngIf=\"config.allowBack\" (click)=\"goTo(0);\">First</button>\n      <button class=\"btn btn-default\" *ngIf=\"config.allowBack\" (click)=\"goTo(pager.index - 1);\">Prev</button>\n      <button class=\"btn btn-primary\" (click)=\"goTo(pager.index + 1);\">Next</button>\n      <button class=\"btn btn-info\" *ngIf=\"config.allowBack\" (click)=\"goTo(pager.count - 1);\">Last</button>\n      <!--<pagination *ngIf=\"config.showPager\" direction-links=\"false\" total-items=\"totalItems\" items-per-page=\"itemsPerPage\" ng-model=\"currentPage\" ng-change=\"pageChanged()\"></pagination>-->\n    </div>\n\n    <br/>\n    <br/>\n    <br/>\n    <!--<div class=\"row review\">\n      <div class=\"col-md-1\" *ngFor=\"let question of quiz.questions; let index = index;\">\n        <div (click)=\"goTo(index)\" class=\"{{ isAnswered(question) == 'Answered'? 'answered': 'not-answered' }}\">{{index + 1}}</div>\n      </div>\n    </div>-->\n\n    <div *ngFor=\"let question of quiz.questions; let index = index;\" class=\"btn-group\" role=\"group\" aria-label=\"...\">\n      <button  class=\"btn btn-info\" (click)=\"goTo(index)\" class=\"{{ isAnswered(question) == 'Answered'? 'btn btn-primary': 'btn btn-default' }}\" type=\"button\">\n         Q{{index + 1}}   \n     </button>\n\n    </div>\n  </div>\n\n\n  <div class=\"row review\" *ngIf=\"mode=='review'\">\n    <div class=\"col-sm-4\" *ngFor=\"let question of quiz.questions; let index = index;\">\n      <div (click)=\"goTo(index)\" class=\"{{ isAnswered(question) == 'Answered'? 'answered': 'not-answered' }}\">{{index + 1}}</div>\n    </div>\n  </div>\n  <div class=\"result\" *ngIf=\"mode=='result'\">\n    <h2>Quiz Result  {{ this.res}}++++++++{{pager.count}}</h2>\n\n\n\n\n\n\n\n\n\n\n\n    <hr>\n    <div *ngFor=\"let question of quiz.questions; let index = index\">\n      <div class=\"result-question\">\n        <h4>{{index + 1}}. {{question.name}}</h4>\n        <div class=\"row\">\n          <div class=\"col-md-6\" *ngFor=\"let Option of question.options\">\n            <input id=\"{{Option.id}}\" type=\"checkbox\" disabled=\"disabled\" [(ngModel)]=\"Option.selected\" /> {{Option.name}}\n          </div>\n        </div>\n        <div class=\"alert {{ isCorrect(question) == 'correct'? 'alert-success': 'alert-danger'}}\">Your answer is {{isCorrect(question)}}.</div>\n      </div>\n    </div>\n  </div>\n  <hr />\n  <div *ngIf=\"mode!='result'\">\n    <button class=\"btn btn-primary\" (click)=\"mode = 'quiz'\">Quiz</button>\n    <button class=\"btn btn-success\" (click)=\"onTrackAnswers();\">Review</button>\n    <button class=\"btn btn-danger\" (click)=\"onSubmit();\">Submit Quiz</button>\n  </div>\n</div>\n\n\n\n\n<div class=\"row\"   *ngIf=\"mode=='track'\">\n  <div class=\"col-md-7\">\n    <div style=\"display: block;\">\n      <canvas baseChart width=\"400\" height=\"400\"\n        [datasets]=\"lineChartData\"\n        [labels]=\"lineChartLabels\" \n        [options]=\"lineChartOptions\"\n        [colors]=\"lineChartColors\" \n        [legend]=\"lineChartLegend\"\n        [chartType]=\"lineChartType\" \n        (chartHover)=\"chartHovered($event)\"\n        (chartClick)=\"chartClicked($event)\"></canvas>\n    </div>\n  </div>\n  <!--<div class=\"col-md-6\" style=\"margin-bottom: 10px\">\n    <table class=\"table table-responsive table-condensed\">\n      <tr>\n        <th *ngFor=\"let label of lineChartLabels\">{{label}}</th>\n      </tr>\n      <tr *ngFor=\"let d of lineChartData\">\n        <td *ngFor=\"let label of lineChartLabels; let j=index\">{{d && d.data[j]}}</td>\n      </tr>\n    </table>\n\n  </div>-->\n</div>\n<div>\n\n  <p>The time is {{today | date:'mediumTime'}}</p>\n\n\n</div>"

/***/ }),

/***/ 557:
/***/ (function(module, exports) {

module.exports = "<div>\n  <div style=\"display: block\">\n    <canvas baseChart\n            [datasets]=\"barChartData\"\n            [labels]=\"barChartLabels\"\n            [options]=\"barChartOptions\"\n            [legend]=\"barChartLegend\"\n            [chartType]=\"barChartType\"\n            (chartHover)=\"chartHovered($event)\"\n            (chartClick)=\"chartClicked($event)\"></canvas>\n  </div>\n</div>"

/***/ }),

/***/ 558:
/***/ (function(module, exports) {

module.exports = "\n<div  class=\"login-box\">\n  <div class=\"login-logo\">\n    <a ><b>Red </b>lean</a>\n  </div>\n  <!-- /.login-logo -->\n  <div class=\"login-box-body\">\n    <p class=\"login-box-msg\">Sign in to start your session</p>\n\n  \n    <form class=\"form-signin\" (submit)=\"login($event, username.value, password.value)\">\n\n      <div class=\"form-group has-feedback\">\n      \n\n      \n        <input type=\"text\"  id=\"username\"  #username class=\"form-control\" placeholder=\"Username\">\n        <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n      </div>\n      <div class=\"form-group has-feedback\">\n        <input  type=\"password\" #password class=\"form-control\" id=\"password\" placeholder=\"Password\">\n        <span class=\"glyphicon glyphicon-lock form-control-feedback\"></span>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-8\">\n          <div class=\"checkbox icheck\">\n          \n          </div>\n        </div>\n        <!-- /.col -->\n        <div class=\"col-xs-4\">\n\n           <button type=\"submit\"class=\"btn btn-primary btn-block btn-flat\">Sign in</button>\n        </div>\n        <!-- /.col -->\n      </div>\n    </form>\n\n   \n    <!-- /.social-auth-links -->\n\n \n\n  </div>\n  <!-- /.login-box-body -->\n</div>\n<!-- /.login-box -->\n\n<!-- jQuery 2.2.3 -->\n<script src=\"/assets/plugins/jQuery/jquery-2.2.3.min.js\"></script>\n<!-- Bootstrap 3.3.6 -->\n<script src=\"/assets/bootstrap/js/bootstrap.min.js\"></script>\n<!-- iCheck -->\n<script src=\"/assets/plugins/iCheck/icheck.min.js\"></script>\n<script>\n  $(function () {\n    $('input').iCheck({\n      checkboxClass: 'icheckbox_square-blue',\n      radioClass: 'iradio_square-blue',\n      increaseArea: '20%' // optional\n    });\n  });\n</script>\n"

/***/ }),

/***/ 559:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n\n  <form name=\"editForm\" role=\"form\" novalidate (ngSubmit)=\"updateUser()\" #editForm=\"ngForm\">\n\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\" id=\"myUserLabel\">\n        Modifier le Role du collaborateur {{user.login}} </h4>\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\" (click)=\"clear()\">&times;</button>\n    </div>\n    <div class=\"modal-body\">\n\n      <div class=\"form-group\">\n\n      </div>\n\n\n\n\n\n\n\n\n      <div class=\"form-group\">\n\n\n\n\n\n\n        <label class=\"form-control-label\">Login</label>\n        <input disabled type=\"text\" class=\"form-control\" name=\"login\" #loginInput=\"ngModel\" [(ngModel)]=\"user.login\" minlength=5>\n\n\n\n\n\n\n      </div>\n      <div class=\"form-group\">\n        <label class=\"form-control-label\">First Name</label>\n        <input disabled type=\"text\" class=\"form-control\" name=\"firstName\" #firstNameInput=\"ngModel\" [(ngModel)]=\"user.firstName\"\n          maxlength=\"50\">\n\n\n      </div>\n      <div class=\"form-group\">\n        <label>Last Name</label>\n        <input disabled type=\"text\" class=\"form-control\" name=\"lastName\" #lastNameInput=\"ngModel\" [(ngModel)]=\"user.lastName\" maxlength=\"50\">\n\n\n      </div>\n      <div class=\"form-group\">\n        <label class=\"form-control-label\">Email</label>\n        <input disabled type=\"email\" class=\"form-control\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\" name=\"email\" #emailInput=\"ngModel\"\n          [(ngModel)]=\"user.email\" maxlength=\"100\">\n\n\n\n\n\n      </div>\n      <div class=\"form-check\">\n        <label class=\"form-check-label\" for=\"activated\">\n                <input disabled class=\"form-check-input\" [disabled]=\"user.id === null\" type=\"checkbox\" id=\"activated\" name=\"activated\" [(ngModel)]=\"user.activated\">\n                <span>Activated</span>\n            </label>\n      </div>\n\n      <div class=\"form-group\">\n        <label>Profiles</label>\n        <select class=\"form-control\" multiple name=\"authority\" [(ngModel)]=\"user.authorities\">\n          \n      \n\n  <option value=\"ROLE_USER\">ROLE_Collaborateur</option>\n  <option value=\"ROLE_ADMIN\">ROLE_Réferent</option>\n            \n            </select>\n      </div>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"clear()\">\n            <span class=\"fa fa-ban\"></span>&nbsp;<span\n           >Cancel</span>\n        </button>\n      <button type=\"submit\" class=\"btn btn-primary\">\n            <span class=\"fa fa-floppy-o\"></span>&nbsp;<span>Save</span>\n        </button>\n    </div>\n  </form>\n\n</div>"

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SectionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SectionService = (function () {
    function SectionService(http) {
        this.http = http;
        this.sectionUrl = 'http://localhost:8080/api/cours';
        this.url = 'http://localhost:8080/api/sbcours';
        this.urlFind = 'http://localhost:8080/api/sbcours';
        this.urlFind2 = 'localhost:8080/api/sectionbyid';
    }
    SectionService.prototype.addSectionCours = function (body, id) {
        var bodyString = JSON.stringify(body); // Stringify payload
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers }); // Create a request option
        return this.http.post(this.sectionUrl + "/" + id, body, options) // ...using post request
            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
            .catch(this.handleError);
    };
    SectionService.prototype.getCoursSections = function (id) {
        // ...using get request
        return this.http.get(this.url + "/" + id)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    SectionService.prototype.findSectionById = function (id) {
        return this.http.get(this.urlFind + "/" + id).map(function (res) {
            return res.json();
        });
    };
    SectionService.prototype.findSectionSupportById = function (id) {
        return this.http.get(this.urlFind2 + "/" + id).map(function (res) {
            return res.json();
        });
    };
    SectionService.prototype.handleError = function (err) {
        var errMessage;
        if (err instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Response */]) {
            var body = err.json() || '';
            var error = body.error || JSON.stringify(body);
            errMessage = err.status + " - " + (err.statusText || '') + " " + error;
        }
        else {
            errMessage = err.message ? err.message : err.toString();
        }
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(errMessage);
    };
    return SectionService;
}());
SectionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], SectionService);

var _a;
//# sourceMappingURL=section.service.js.map

/***/ }),

/***/ 560:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n</div>\n<br/>\n<div class=\"table-responsive\">\n  <table class=\"table table-striped\">\n    <thead>\n      <tr>\n        <th><span>ID</span> <span class=\"fa fa-sort\"></span></th>\n        <th><span>Login</span> <span class=\"fa fa-sort\"></span></th>\n        <th><span>Email</span> <span class=\"fa fa-sort\"></span></th>\n        <th><span>Profiles</span> <span class=\"fa fa-sort\"></span></th>\n\n      </tr>\n    </thead>\n\n    <tbody>\n\n      <tr *ngFor=\"let user of users\">\n          <td>\n          <a [routerLink]=\"['/userml', user.login ]\">{{user.id}}</a>\n\n      \n        </td>\n        <td>{{user.login}}</td>\n        <td>{{user.email}}</td>\n        <td> {{user.authorities}}</td>\n\n        <td class=\"text-right\">\n          <div class=\"btn-group flex-btn-group-container\">\n            <button type=\"submit\" class=\"btn btn-info btn-sm\">\n                            <span class=\"fa fa-eye\"></span>\n                            <span class=\"hidden-md-down\">View</span>\n                        </button>\n            <button type=\"submit\" replaceUrl=\"true\" class=\"btn btn-primary btn-sm\">\n                            <span class=\"fa fa-pencil\"></span>\n                            <span class=\"hidden-md-down\">Edit</span>\n                        </button>\n            <button type=\"submit\" replaceUrl=\"true\" class=\"btn btn-danger btn-sm\">\n                            <span class=\"fa fa-remove\"></span>\n                            <span class=\"hidden-md-down\">Delete</span>\n                        </button>\n          </div>\n        </td>\n      </tr>\n    </tbody>\n\n  </table>"

/***/ }),

/***/ 561:
/***/ (function(module, exports) {

module.exports = "<!--<input type=\"text\" class=\"form-control\" name=\"login\" #loginInput=\"ngModel\" [(ngModel)]=\"user.name\" required minlength=\"5\">\n<small [hidden]=\"loginInput.valid || (loginInput.pristine && !editForm.submitted)\" class=\"text-danger\">\n            Name is required (minimum 5 characters).\n          </small>\n</div>\n</div>\n-->\n\n<form name=\"editForm\" role=\"form\" novalidate (ngSubmit)=\"save()\" #editForm=\"ngForm\">\n\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"myUserLabel\">\n    Créer ou modifier le profil d'un collaborateur </h4>\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\" (click)=\"clear()\">&times;</button>\n  </div>\n  <div class=\"modal-body\">\n\n    <div class=\"form-group\">\n\n    </div>\n\n\n\n\n\n\n\n\n    <div class=\"form-group\">\n\n\n\n\n\n\n      <label class=\"form-control-label\">Login</label>\n      <input type=\"text\" class=\"form-control\" name=\"login\" #loginInput=\"ngModel\" [(ngModel)]=\"user.login\" required minlength=5\n       >\n\n\n\n      <!--**********************************-->\n      <small [hidden]=\"loginInput.valid || (loginInput.pristine && !editForm.submitted)\" class=\"text-danger\">\n            Name is required (minimum 5 characters).\n          </small>\n\n\n\n      <!--**********************************-->\n\n\n    </div>\n    <div class=\"form-group\">\n      <label class=\"form-control-label\">Nom</label>\n      <input type=\"text\" class=\"form-control\" name=\"firstName\" required #firstNameInput=\"ngModel\" [(ngModel)]=\"user.firstName\" maxlength=\"50\">\n\n \n    </div>\n    <div class=\"form-group\">\n      <label>Prénom</label>\n      <input type=\"text\" class=\"form-control\" name=\"lastName\" #lastNameInput=\"ngModel\" [(ngModel)]=\"user.lastName\" maxlength=\"50\">\n\n    </div>\n    <div class=\"form-group\">\n      <label class=\"form-control-label\">Email</label>\n      <input type=\"email\" class=\"form-control\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\" name=\"email\" #emailInput=\"ngModel\" [(ngModel)]=\"user.email\" required maxlength=\"100\">\n\n     \n       \n        <small  [hidden]=\"emailInput.valid || (emailInput.pristine && !editForm.submitted)\"  class=\"form-text text-danger\">\n               Veuillez insérer un mail valide sous la forme  admin@mailserver1\n                </small>\n\n \n    </div>\n    <!--<div class=\"form-check\">\n      <label class=\"form-check-label\" for=\"activated\">\n                <input class=\"form-check-input\" [disabled]=\"user.id === null\" type=\"checkbox\" id=\"activated\" name=\"activated\" [(ngModel)]=\"user.activated\">\n                <span>Activated</span>\n            </label>\n    </div>-->\n\n    <div class=\"form-group\">\n      <label>Profiles</label>\n      <select class=\"form-control\" multiple name=\"authority\" [(ngModel)]=\"user.authorities\">\n          \n      \n\n  <option value=\"ROLE_USER\">ROLE_Collaborateur</option>\n  <option value=\"ROLE_ADMIN\">ROLE_Réferent</option>\n            \n            </select>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"clear()\">\n            <span class=\"fa fa-ban\"></span>&nbsp;<span\n           >Cancel</span>\n        </button>\n    <button type=\"submit\" [disabled]=\"editForm.form.invalid || isSaving\" class=\"btn btn-danger\">\n            <span class=\"fa fa-floppy-o\"></span>&nbsp;<span>Valider</span>\n        </button>\n  </div>\n</form>"

/***/ }),

/***/ 562:
/***/ (function(module, exports) {

module.exports = "<p>\n  video-reader works!\n</p>\n\n<div>\n  <video class=\"vid\" style=\"width:680px\" id=\"mp\" (loadedmetadata)=\"processMetaData(movieplayer)\" #movieplayer (timeupdate)=\"updateDisplayTime(movieplayer)\"\n    (mouseenter)=\"hideControl(false)\" (mouseout)=\"hideControl(true)\">\n    <source src=\"http://localhost:8080/api/allsupportcours/17\" />\n  </video>\n  <div [hidden]=\"hidectrl\" style=\"position:relative;top:-50px;left:5px\" (mouseenter)=\"hideControl(false)\" (mouseout)=\"hideControl(true)\">\n    <input [hidden]=\"!movieLoaded\" class=\"slider\" type=\"range\" min=\"0\" style=\"width:620px\" max=\"{{movieplayer.duration}}\" id=\"myRange\"\n      [(ngModel)]=\"currentTimeRange\" (input)=\"seek($event,movieplayer)\">\n    <div></div>\n\n    <button (click)=\"onPlayPause(movieplayer)\"><img style=\"width:16px;\" src={{playpauseimg}}></button>\n    <button (click)=\" onMuteUnmute(movieplayer)\">\n      <img  style=\"width:16px;\" src={{volumeMuteImg}}></button>\n    <button (click)=\"makeFullScreen(movieplayer)\"><img   style=\"width:16px;\" src=\"/assets/video/fullscreen.svg\"></button>\n    <button> <span style=\"color:balck\">{{currTime}} / {{videoDuration}}</span> </button>\n\n    <input #volumerange class=\"volslider\" style=\"width:80px\" type=\"range\" min=\"1\" max=\"10\" [(ngModel)]=\"volume\" (input)=\"seekVolume($event,movieplayer)\">\n\n  </div>\n</div>"

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersmangService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersmangService = (function () {
    function UsersmangService(http) {
        this.http = http;
        this.UsersmUrl = 'http://localhost:8080/api/users';
    }
    UsersmangService.prototype.createUSerrsM = function (body) {
        var bodyString = JSON.stringify(body); // Stringify payload
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers }); // Create a request option
        return this.http.post(this.UsersmUrl, body, options) // ...using post request
            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); }); //...errors if any
    };
    UsersmangService.prototype.getAllUsersM = function () {
        // ...using get request
        return this.http.get(this.UsersmUrl)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    UsersmangService.prototype.findUserBylogin = function (login) {
        return this.http.get(this.UsersmUrl + "/" + login).map(function (res) {
            return res.json();
        });
    };
    UsersmangService.prototype.updateUser = function (body) {
        var bodyString = JSON.stringify(body); // Stringify payload
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers }); // Create a request option
        return this.http.put(this.UsersmUrl, body, options) // ...using post request
            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); }); //...errors if any
    };
    return UsersmangService;
}());
UsersmangService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], UsersmangService);

var _a;
//# sourceMappingURL=usersmang.service.js.map

/***/ }),

/***/ 73:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 73;


/***/ }),

/***/ 825:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(372);


/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuestionService = (function () {
    function QuestionService(http) {
        this.http = http;
        this.coursesUrl = 'http://localhost:8080/api/quiz';
        this.quizQuestionsUrl = 'http://localhost:8080/api/quizquestions';
        this.url = 'http://localhost:8080/api/qqq1';
    }
    QuestionService.prototype.addQuizQuestion = function (body, id) {
        var bodyString = JSON.stringify(body); // Stringify payload
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers }); // Create a request option
        return this.http.post(this.coursesUrl + "/" + id, body, options) // ...using post request
            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
            .catch(this.handleError);
    };
    QuestionService.prototype.findquestionsById = function (id) {
        return this.http.get(this.quizQuestionsUrl + "/" + id).map(function (res) {
            return res.json();
        });
    };
    QuestionService.prototype.handleError = function (err) {
        var errMessage;
        if (err instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Response */]) {
            var body = err.json() || '';
            var error = body.error || JSON.stringify(body);
            errMessage = err.status + " - " + (err.statusText || '') + " " + error;
        }
        else {
            errMessage = err.message ? err.message : err.toString();
        }
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(errMessage);
    };
    return QuestionService;
}());
QuestionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], QuestionService);

var _a;
//# sourceMappingURL=question.service.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuizService = (function () {
    function QuizService(http) {
        this.http = http;
        this.QuizsUrl = 'http://localhost:8080/api/quiz';
    }
    QuizService.prototype.createQuiz = function (body) {
        var bodyString = JSON.stringify(body); // Stringify payload
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers }); // Create a request option
        return this.http.post(this.QuizsUrl, body, options) // ...using post request
            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); }); //...errors if any
    };
    QuizService.prototype.getQuizs = function () {
        // ...using get request
        return this.http.get(this.QuizsUrl)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    QuizService.prototype.findQuizById = function (id) {
        return this.http.get(this.QuizsUrl + "/" + id).map(function (res) {
            return res.json();
        });
    };
    return QuizService;
}());
QuizService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], QuizService);

var _a;
//# sourceMappingURL=quiz.service.js.map

/***/ })

},[825]);
//# sourceMappingURL=main.bundle.js.map