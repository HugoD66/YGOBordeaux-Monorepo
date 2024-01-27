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
exports.PictureList = void 0;
const typeorm_1 = require(`typeorm`);
const bar_entity_1 = require(`../../bars/entities/bar.entity`);
let PictureList = (exports.PictureList = (() => {
  let _classDecorators = [(0, typeorm_1.Entity)()];
  let _classDescriptor;
  let _classExtraInitializers = [];
  let _classThis;
  let _instanceExtraInitializers = [];
  let _id_decorators;
  let _id_initializers = [];
  let _pictureOne_decorators;
  let _pictureOne_initializers = [];
  let _pictureTwo_decorators;
  let _pictureTwo_initializers = [];
  let _pictureThree_decorators;
  let _pictureThree_initializers = [];
  let _pictureFour_decorators;
  let _pictureFour_initializers = [];
  let _bar_decorators;
  let _bar_initializers = [];
  var PictureList = (_classThis = class {
    constructor() {
      this.id =
        (__runInitializers(this, _instanceExtraInitializers),
        __runInitializers(this, _id_initializers, void 0));
      this.pictureOne = __runInitializers(
        this,
        _pictureOne_initializers,
        void 0,
      );
      this.pictureTwo = __runInitializers(
        this,
        _pictureTwo_initializers,
        void 0,
      );
      this.pictureThree = __runInitializers(
        this,
        _pictureThree_initializers,
        void 0,
      );
      this.pictureFour = __runInitializers(
        this,
        _pictureFour_initializers,
        void 0,
      );
      this.bar = __runInitializers(this, _bar_initializers, void 0);
    }
  });
  __setFunctionName(_classThis, `PictureList`);
  (() => {
    _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)(`uuid`)];
    _pictureOne_decorators = [(0, typeorm_1.Column)({ nullable: true })];
    _pictureTwo_decorators = [(0, typeorm_1.Column)({ nullable: true })];
    _pictureThree_decorators = [(0, typeorm_1.Column)({ nullable: true })];
    _pictureFour_decorators = [(0, typeorm_1.Column)({ nullable: true })];
    _bar_decorators = [
      (0, typeorm_1.OneToOne)(
        () => bar_entity_1.Bar,
        (bar) => bar.pictureList,
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
      _pictureOne_decorators,
      {
        kind: `field`,
        name: `pictureOne`,
        static: false,
        private: false,
        access: {
          has: (obj) => `pictureOne` in obj,
          get: (obj) => obj.pictureOne,
          set: (obj, value) => {
            obj.pictureOne = value;
          },
        },
      },
      _pictureOne_initializers,
      _instanceExtraInitializers,
    );
    __esDecorate(
      null,
      null,
      _pictureTwo_decorators,
      {
        kind: `field`,
        name: `pictureTwo`,
        static: false,
        private: false,
        access: {
          has: (obj) => `pictureTwo` in obj,
          get: (obj) => obj.pictureTwo,
          set: (obj, value) => {
            obj.pictureTwo = value;
          },
        },
      },
      _pictureTwo_initializers,
      _instanceExtraInitializers,
    );
    __esDecorate(
      null,
      null,
      _pictureThree_decorators,
      {
        kind: `field`,
        name: `pictureThree`,
        static: false,
        private: false,
        access: {
          has: (obj) => `pictureThree` in obj,
          get: (obj) => obj.pictureThree,
          set: (obj, value) => {
            obj.pictureThree = value;
          },
        },
      },
      _pictureThree_initializers,
      _instanceExtraInitializers,
    );
    __esDecorate(
      null,
      null,
      _pictureFour_decorators,
      {
        kind: `field`,
        name: `pictureFour`,
        static: false,
        private: false,
        access: {
          has: (obj) => `pictureFour` in obj,
          get: (obj) => obj.pictureFour,
          set: (obj, value) => {
            obj.pictureFour = value;
          },
        },
      },
      _pictureFour_initializers,
      _instanceExtraInitializers,
    );
    __esDecorate(
      null,
      null,
      _bar_decorators,
      {
        kind: `field`,
        name: `bar`,
        static: false,
        private: false,
        access: {
          has: (obj) => `bar` in obj,
          get: (obj) => obj.bar,
          set: (obj, value) => {
            obj.bar = value;
          },
        },
      },
      _bar_initializers,
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
    PictureList = _classThis = _classDescriptor.value;
    __runInitializers(_classThis, _classExtraInitializers);
  })();
  return (PictureList = _classThis);
})());
