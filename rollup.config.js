import resolve from "rollup-plugin-node-resolve"
import commonjs from "rollup-plugin-commonjs"
import babel from "rollup-plugin-babel"
import uglify from "rollup-plugin-uglify"

const uglifyOptions = {
  mangle: false,
  compress: false,
  output: {
    beautify: true,
    indent_level: 2
  }
}

export default {
  input: "app/index.js",
  output: {
    file: "dist/main.js",
    format: "umd",
    name: "App"
  },
  plugins: [
    resolve(),
    commonjs(),
    babel(),
    uglify(uglifyOptions)
  ]
}
