const bootstrapSassAbstractsImports = require('vue-cli-plugin-bootstrap-vue/sassAbstractsImports.js')
module.exports = {
	css: {
		loaderOptions: {
			sass: {
				additionalData: `${bootstrapSassAbstractsImports.join('\n')}
          @import "@/assets/scss/_variables.scss";
        `
			},
			scss: {
				additionalData: `${ [...bootstrapSassAbstractsImports, ''].join(';\n')}
				@import "@/assets/scss/_variables.scss";
			`,
			}
		}
	}
}