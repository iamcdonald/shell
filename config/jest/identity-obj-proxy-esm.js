const createProxy = () => new Proxy(
  {},
  {
    get: function getter(target, key) {
      if (key === '__esModule') {
        // True instead of false to pretend we're an ES module.
        return true;
      }
      if (key === 'default') {
        return createProxy();
      }
      return key;
    },
  },
);

module.exports = createProxy();
