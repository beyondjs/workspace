define(["@babel/runtime@7.19.0/helpers/esm/arrayLikeToArray"], (dep_0) => {

const bimport = specifier => {
	const dependencies = new Map([["@babel/runtime","7.19.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};



const dependencies = new Map([["@babel/runtime@7.19.0/helpers/esm/arrayLikeToArray", dep_0]]);
const require = dependency => dependencies.get(dependency);
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = target => __defProp(target, "__esModule", {
  value: true
});
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2)) if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default")) __defProp(target, key, {
      get: () => module2[key],
      enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable
    });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? {
    get: () => module2.default,
    enumerable: true
  } : {
    value: module2,
    enumerable: true
  })), module2);
};
var __toCommonJS = /* @__PURE__ */(cache => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */new WeakMap() : 0);

// .beyond/uimport/temp/@babel/runtime/helpers/esm/arrayWithoutHoles.7.19.0.js
var arrayWithoutHoles_7_19_0_exports = {};
__export(arrayWithoutHoles_7_19_0_exports, {
  default: () => arrayWithoutHoles_7_19_0_default
});

// node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js
var import_arrayLikeToArray = __toESM(require("@babel/runtime@7.19.0/helpers/esm/arrayLikeToArray"), 0);
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0, import_arrayLikeToArray.default)(arr);
}

// .beyond/uimport/temp/@babel/runtime/helpers/esm/arrayWithoutHoles.7.19.0.js
var arrayWithoutHoles_7_19_0_default = _arrayWithoutHoles;
module.exports = __toCommonJS(arrayWithoutHoles_7_19_0_exports);
};

code(module, require);
return module.exports;
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aG91dEhvbGVzLjcuMTkuMC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhvdXRIb2xlcy5qcyJdLCJuYW1lcyI6WyJfX2V4cG9ydCIsImRlZmF1bHQiLCJfX3RvRVNNIiwiYXJyIiwiQXJyYXkiLCJpc0FycmF5IiwiYXJyYXlXaXRob3V0SG9sZXNfN18xOV8wX2RlZmF1bHQiLCJfYXJyYXlXaXRob3V0SG9sZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQUE7RUFBQUM7QUFBQTs7O0FDQUEsOEJBQTZCQztBQUNkLDRCQUE0QkMsS0FBSztFQUM5QyxJQUFJQyxNQUFNQyxRQUFRRixHQUFHLEdBQUcsT0FBTyxxQ0FBaUJBLEdBQUc7QUFDckQ7OztBREFBLElBQU9HLG1DQUFRQyIsImZpbGUiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhvdXRIb2xlcyc7XG5cbmltcG9ydCBfZGVmYXVsdCBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhvdXRIb2xlcyc7XG5leHBvcnQgZGVmYXVsdCBfZGVmYXVsdDsiLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59Il0sInNvdXJjZVJvb3QiOiIvcHJvamVjdC9vdXQifQ==