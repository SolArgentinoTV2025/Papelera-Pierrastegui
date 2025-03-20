module.exports = function(eleventyConfig) {
  // Copiar la carpeta 'css' a '_site/assets/css'
  eleventyConfig.addPassthroughCopy("assets/css");

  // Copiar la carpeta 'images' a '_site/assets/images'
  eleventyConfig.addPassthroughCopy("assets/images");

  // Copiar la carpeta 'js' a '_site/assets/js'
  eleventyConfig.addPassthroughCopy("assets/js");

  // Copiar la carpeta 'json' a '_site/assets/json'
  eleventyConfig.addPassthroughCopy("assets/json");

    // Copiar la carpeta 'productos' a '_site/assets/json'
    eleventyConfig.addPassthroughCopy("productos");
    
    // Copiar la carpeta 'productos' a '_site/assets/json'
    eleventyConfig.addPassthroughCopy("info");
};