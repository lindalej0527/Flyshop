module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/Styles");

    eleventyConfig.setBrowserSyncConfig({
        files: './_site/Styles/*.css'
    });

    return {
        dir: {
            input: "src",
            includes: "_includes",
            data: "_data",
            output: "_site"
        }
    };
};
