/*
 * Generate  dynamic assets
 */

module.exports = function (themeConfig) {
   let fontBody = themeConfig.customConfig['fontBody'];
   let fontHeadings = themeConfig.customConfig['fontHeadings'];
   let fontEntry = themeConfig.customConfig['fontEntry'];

   return [
      '/fonts/' + fontBody + '/' + fontBody + '.woff2', 
      '/fonts/' + fontHeadings + '/' + fontHeadings + '.woff2',
      '/fonts/' + fontEntry + '/' + fontEntry + '.woff2'
   ];
};
