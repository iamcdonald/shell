var hook = require('css-modules-require-hook');
var sass = require('node-sass');

hook({
  extensions: ['.scss'],
  preprocessCss: css => sass.renderSync({ data: css }).css
});
