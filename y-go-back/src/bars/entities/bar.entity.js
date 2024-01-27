'use strict';
var __esDecorate =
  (this && this.__esDecorate) ||
  function (
    ctor,
    descriptorIn,
    decorators,
    contextIn,
    initializers,
    extraInitializers,
  ) {
    function accept(f) {
      if (f !== void 0 && typeof f !== `function`)
        throw new TypeError(`Function expected`);
      return f;
    }
    var kind = contextIn.kind,
      key = kind === `getter` ? `get` : kind === `setter` ? `set` : `value`;
    var target =
      !descriptorIn && ctor
        ? contextIn[`static`]
          ? ctor
          : ctor.prototype
        : null;
    var descriptor =
      descriptorIn ||
      (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _,
      done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === `access` ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) {
        if (done)
          throw new TypeError(
            `Cannot add initializers after decoration has completed`,
          );
        extraInitializers.push(accept(f || null));
      };
      var result = (0, decorators[i])(
        kind === `accessor`
          ? { get: descriptor.get, set: descriptor.set }
          : descriptor[key],
        context,
      );
      if (kind === `accessor`) {
        if (result === void 0) continue;
        if (result === null || typeof result !== `object`)
          throw new TypeError(`Object expected`);
        if ((_ = accept(result.get))) descriptor.get = _;
        if ((_ = accept(result.set))) descriptor.set = _;
        if ((_ = accept(result.init))) initializers.unshift(_);
      } else if ((_ = accept(result))) {
        if (kind === `field`) initializers.unshift(_);
        else descriptor[key] = _;
      }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
  };
var __runInitializers =
  (this && this.__runInitializers) ||
  function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
      value = useValue
        ? initializers[i].call(thisArg, value)
        : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
  };
var __setFunctionName =
  (this && this.__setFunctionName) ||
  function (f, name, prefix) {
    if (typeof name === `symbol`)
      name = name.description ? `[`.concat(name.description, `]`) : ``;
    return Object.defineProperty(f, `name`, {
      configurable: true,
      value: prefix ? ``.concat(prefix, ` `, name) : name,
    });
  };
Object.defineProperty(exports, `__esModule`, { value: true });
exports.Bar = void 0;
const typeorm_1 = require(`typeorm`);
const picture_list_entity_1 = require(
  `../../picture-list/entities/picture-list.entity`,
);
const geo_entity_1 = require(`../../geo/entities/geo.entity`);
const user_entity_1 = require(`../../users/entities/user.entity`);
const user_bar_rating_entity_1 = require(
  `../../user-bar-rating/entities/user-bar-rating.entity`,
);
let Bar = (exports.Bar = (() => {
  let _classDecorators = [(0, typeorm_1.Entity)()];
  let _classDescriptor;
  let _classExtraInitializers = [];
  let _classThis;
  let _instanceExtraInitializers = [];
  let _id_decorators;
  let _id_initializers = [];
  let _name_decorators;
  let _name_initializers = [];
  let _adresse_decorators;
  let _adresse_initializers = [];
  let _description_decorators;
  let _description_initializers = [];
  let _telephone_decorators;
  let _telephone_initializers = [];
  let _note_decorators;
  let _note_initializers = [];
  let _createdAt_decorators;
  let _createdAt_initializers = [];
  let _updatedAt_decorators;
  let _updatedAt_initializers = [];
  let _pictureList_decorators;
  let _pictureList_initializers = [];
  let _geo_decorators;
  let _geo_initializers = [];
  let _createdBy_decorators;
  let _createdBy_initializers = [];
  let _userBarRatings_decorators;
  let _userBarRatings_initializers = [];
  var Bar = (_classThis = class {
    constructor() {
      this.id =
        (__runInitializers(this, _instanceExtraInitializers),
        __runInitializers(this, _id_initializers, void 0));
      this.name = __runInitializers(this, _name_initializers, void 0);
      this.adresse = __runInitializers(this, _adresse_initializers, void 0);
      this.description = __runInitializers(
        this,
        _description_initializers,
        void 0,
      );
      this.telephone = __runInitializers(this, _telephone_initializers, void 0);
      this.note = __runInitializers(this, _note_initializers, void 0);
      this.createdAt = __runInitializers(this, _createdAt_initializers, void 0);
      this.updatedAt = __runInitializers(this, _updatedAt_initializers, void 0);
      this.pictureList = __runInitializers(
        this,
        _pictureList_initializers,
        void 0,
      );
      this.geo = __runInitializers(this, _geo_initializers, void 0);
      this.createdBy = __runInitializers(this, _createdBy_initializers, void 0);
      this.userBarRatings = __runInitializers(
        this,
        _userBarRatings_initializers,
        void 0,
      );
    }
  });
  __setFunctionName(_classThis, `Bar`);
  (() => {
    _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)(`uuid`)];
    _name_decorators = [(0, typeorm_1.Column)({ unique: true })];
    _adresse_decorators = [(0, typeorm_1.Column)({ unique: true })];
    _description_decorators = [(0, typeorm_1.Column)()];
    _telephone_decorators = [(0, typeorm_1.Column)({ unique: true })];
    _note_decorators = [
      (0, typeorm_1.Column)({ type: `float`, nullable: true }),
    ];
    _createdAt_decorators = [(0, typeorm_1.CreateDateColumn)()];
    _updatedAt_decorators = [(0, typeorm_1.UpdateDateColumn)()];
    _pictureList_decorators = [
      (0, typeorm_1.OneToOne)(
        () => picture_list_entity_1.PictureList,
        (pictureList) => pictureList.bar,
        {
          cascade: [`insert`, `update`, `remove`],
          onDelete: `CASCADE`,
        },
      ),
      (0, typeorm_1.JoinColumn)(),
    ];
    _geo_decorators = [
      (0, typeorm_1.OneToOne)(
        () => geo_entity_1.Geo,
        (geo) => geo.bar,
        {
          cascade: [`insert`, `update`, `remove`],
          onDelete: `CASCADE`,
        },
      ),
      (0, typeorm_1.JoinColumn)(),
    ];
    _createdBy_decorators = [
      (0, typeorm_1.ManyToOne)(
        () => user_entity_1.User,
        (user) => user.createBars,
      ),
      (0, typeorm_1.JoinColumn)({ name: `createdById` }),
    ];
    _userBarRatings_decorators = [
      (0, typeorm_1.OneToMany)(
        () => user_bar_rating_entity_1.UserBarRating,
        (userBarRating) => userBarRating.bar,
      ),
    ];
    __esDecorate(
      null,
      null,
      _id_decorators,
      {
        kind: `field`,
        name: `id`,
        static: false,
        private: false,
        access: {
          has: (obj) => `id` in obj,
          get: (obj) => obj.id,
          set: (obj, value) => {
            obj.id = value;
          },
        },
      },
      _id_initializers,
      _instanceExtraInitializers,
    );
    __esDecorate(
      null,
      null,
      _name_decorators,
      {
        kind: `field`,
        name: `name`,
        static: false,
        private: false,
        access: {
          has: (obj) => `name` in obj,
          get: (obj) => obj.name,
          set: (obj, value) => {
            obj.name = value;
          },
        },
      },
      _name_initializers,
      _instanceExtraInitializers,
    );
    __esDecorate(
      null,
      null,
      _adresse_decorators,
      {
        kind: `field`,
        name: `adresse`,
        static: false,
        private: false,
        access: {
          has: (obj) => `adresse` in obj,
          get: (obj) => obj.adresse,
          set: (obj, value) => {
            obj.adresse = value;
          },
        },
      },
      _adresse_initializers,
      _instanceExtraInitializers,
    );
    __esDecorate(
      null,
      null,
      _description_decorators,
      {
        kind: `field`,
        name: `description`,
        static: false,
        private: false,
        access: {
          has: (obj) => `description` in obj,
          get: (obj) => obj.description,
          set: (obj, value) => {
            obj.description = value;
          },
        },
      },
      _description_initializers,
      _instanceExtraInitializers,
    );
    __esDecorate(
      null,
      null,
      _telephone_decorators,
      {
        kind: `field`,
        name: `telephone`,
        static: false,
        private: false,
        access: {
          has: (obj) => `telephone` in obj,
          get: (obj) => obj.telephone,
          set: (obj, value) => {
            obj.telephone = value;
          },
        },
      },
      _telephone_initializers,
      _instanceExtraInitializers,
    );
    __esDecorate(
      null,
      null,
      _note_decorators,
      {
        kind: `field`,
        name: `note`,
        static: false,
        private: false,
        access: {
          has: (obj) => `note` in obj,
          get: (obj) => obj.note,
          set: (obj, value) => {
            obj.note = value;
          },
        },
      },
      _note_initializers,
      _instanceExtraInitializers,
    );
    __esDecorate(
      null,
      null,
      _createdAt_decorators,
      {
        kind: `field`,
        name: `createdAt`,
        static: false,
        private: false,
        access: {
          has: (obj) => `createdAt` in obj,
          get: (obj) => obj.createdAt,
          set: (obj, value) => {
            obj.createdAt = value;
          },
        },
      },
      _createdAt_initializers,
      _instanceExtraInitializers,
    );
    __esDecorate(
      null,
      null,
      _updatedAt_decorators,
      {
        kind: `field`,
        name: `updatedAt`,
        static: false,
        private: false,
        access: {
          has: (obj) => `updatedAt` in obj,
          get: (obj) => obj.updatedAt,
          set: (obj, value) => {
            obj.updatedAt = value;
          },
        },
      },
      _updatedAt_initializers,
      _instanceExtraInitializers,
    );
    __esDecorate(
      null,
      null,
      _pictureList_decorators,
      {
        kind: `field`,
        name: `pictureList`,
        static: false,
        private: false,
        access: {
          has: (obj) => `pictureList` in obj,
          get: (obj) => obj.pictureList,
          set: (obj, value) => {
            obj.pictureList = value;
          },
        },
      },
      _pictureList_initializers,
      _instanceExtraInitializers,
    );
    __esDecorate(
      null,
      null,
      _geo_decorators,
      {
        kind: `field`,
        name: `geo`,
        static: false,
        private: false,
        access: {
          has: (obj) => `geo` in obj,
          get: (obj) => obj.geo,
          set: (obj, value) => {
            obj.geo = value;
          },
        },
      },
      _geo_initializers,
      _instanceExtraInitializers,
    );
    __esDecorate(
      null,
      null,
      _createdBy_decorators,
      {
        kind: `field`,
        name: `createdBy`,
        static: false,
        private: false,
        access: {
          has: (obj) => `createdBy` in obj,
          get: (obj) => obj.createdBy,
          set: (obj, value) => {
            obj.createdBy = value;
          },
        },
      },
      _createdBy_initializers,
      _instanceExtraInitializers,
    );
    __esDecorate(
      null,
      null,
      _userBarRatings_decorators,
      {
        kind: `field`,
        name: `userBarRatings`,
        static: false,
        private: false,
        access: {
          has: (obj) => `userBarRatings` in obj,
          get: (obj) => obj.userBarRatings,
          set: (obj, value) => {
            obj.userBarRatings = value;
          },
        },
      },
      _userBarRatings_initializers,
      _instanceExtraInitializers,
    );
    __esDecorate(
      null,
      (_classDescriptor = { value: _classThis }),
      _classDecorators,
      { kind: `class`, name: _classThis.name },
      null,
      _classExtraInitializers,
    );
    Bar = _classThis = _classDescriptor.value;
    __runInitializers(_classThis, _classExtraInitializers);
  })();
  return (Bar = _classThis);
})());
/*
@Column()
public neighborhood?: string // quartier

@Column()
public price?: number

@Column()
public nibble?: boolean //Grignotter

@Column()
public happyHour?: boolean

@Column()
public averageAge?: number

@Column({
  type: 'enum',
  enum: DrinkEnum,
  default: DrinkEnum.Despe,
})
@Column()
drinks?: DrinkEnum // Faire une enum ?

@Column()
public openTime?: number // date?

@Column()
public closeTime?: number // Date ?

@Column()
public card?: string

@Column()
public notes?: number
 */
