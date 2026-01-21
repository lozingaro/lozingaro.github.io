const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const markdownIt = require("markdown-it");
const sass = require("sass");
const path = require("path");

module.exports = function(eleventyConfig) {
  // Allow missing extensions for clean URLs
  eleventyConfig.configureErrorReporting({
    allowMissingExtensions: true
  });

  // Plugins
  eleventyConfig.addPlugin(syntaxHighlight);

  // Markdown configuration
  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  });
  
  eleventyConfig.setLibrary("md", markdownLibrary);

  // Process SCSS files
  eleventyConfig.addWatchTarget("./assets/**/*.scss");
  eleventyConfig.setServerOptions({
    showAllHosts: true,
    showVersion: true,
  });

  // Compile SCSS
  eleventyConfig.addTemplateFormats("scss");
  eleventyConfig.addExtension("scss", {
    outputFileExtension: "css",
    compile: async function(inputContent, inputPath) {
      let parsed = path.parse(inputPath);
      let result = sass.compileString(inputContent, {
        loadPaths: [parsed.dir || "."],
        sourceMap: false
      });
      
      this.addDependencies(inputPath, result.loadedUrls);
      
      return async () => {
        return result.css;
      };
    }
  });

  // Copy assets
  eleventyConfig.addPassthroughCopy("assets/");
  eleventyConfig.addPassthroughCopy("robots.txt");

  // Filters
  eleventyConfig.addFilter("readableDate", dateObj => {
    return new Date(dateObj).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });

  eleventyConfig.addFilter("htmlDateString", dateObj => {
    return new Date(dateObj).toISOString().split('T')[0];
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      layouts: "_layouts",
      output: "_site"
    },
    templateFormats: ["md", "njk", "html", "scss"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
