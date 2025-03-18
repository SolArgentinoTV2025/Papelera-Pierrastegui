module.exports = function(eleventyConfig) {
  // Copiar los archivos CSS, imágenes y fuentes a la carpeta de salida
  eleventyConfig.addPassthroughCopy("assets/css");
  eleventyConfig.addPassthroughCopy("assets/images");
};
