module.exports = function(eleventyConfig) {

  const moment = require("moment");

  //11ty PassthroughCopy
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/admin");

  //Netlify CMS Admin Folder
  eleventyConfig.ignores.add("./src/admin");

  // date filter (localized)
  eleventyConfig.addNunjucksFilter("date", function (date, format, locale) {
    locale = locale ? locale : "de";
    moment.locale(locale);
    return moment(date).format(format);
  });


  //©copyrights year output
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);


  // You can return your Config object (optional).
  return {
    dir: {
      input: "src",
      output: "dist",
      data: "_data"
    }
  };

};
