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
exports.Geo = void 0;
const typeorm_1 = require(`typeorm`);
const bar_entity_1 = require(`../../bars/entities/bar.entity`);
let Geo = (exports.Geo = (() => {
  let _classDecorators = [(0, typeorm_1.Entity)()];
  let _classDescriptor;
  let _classExtraInitializers = [];
  let _classThis;
  let _instanceExtraInitializers = [];
  let _id_decorators;
  let _id_initializers = [];
  let _x_decorators;
  let _x_initializers = [];
  let _y_decorators;
  let _y_initializers = [];
  let _bar_decorators;
  let _bar_initializers = [];
  var Geo = (_classThis = class {
    constructor() {
      this.id =
        (__runInitializers(this, _instanceExtraInitializers),
        __runInitializers(this, _id_initializers, void 0));
      this.x = __runInitializers(this, _x_initializers, void 0);
      this.y = __runInitializers(this, _y_initializers, void 0);
      this.bar = __runInitializers(this, _bar_initializers, void 0);
    }
  });
  __setFunctionName(_classThis, `Geo`);
  (() => {
    _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)(`uuid`)];
    _x_decorators = [(0, typeorm_1.Column)({ nullable: true })];
    _y_decorators = [(0, typeorm_1.Column)({ nullable: true })];
    _bar_decorators = [
      (0, typeorm_1.OneToOne)(
        () => bar_entity_1.Bar,
        (bar) => bar.geo,
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
      _x_decorators,
      {
        kind: `field`,
        name: `x`,
        static: false,
        private: false,
        access: {
          has: (obj) => `x` in obj,
          get: (obj) => obj.x,
          set: (obj, value) => {
            obj.x = value;
          },
        },
      },
      _x_initializers,
      _instanceExtraInitializers,
    );
    __esDecorate(
      null,
      null,
      _y_decorators,
      {
        kind: `field`,
        name: `y`,
        static: false,
        private: false,
        access: {
          has: (obj) => `y` in obj,
          get: (obj) => obj.y,
          set: (obj, value) => {
            obj.y = value;
          },
        },
      },
      _y_initializers,
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
    Geo = _classThis = _classDescriptor.value;
    __runInitializers(_classThis, _classExtraInitializers);
  })();
  return (Geo = _classThis);
})());
