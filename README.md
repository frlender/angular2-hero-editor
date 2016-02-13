# angular2-hero-editor uglified
A demonstration of how to uglify (minify) user defined modules and streamline the production workflow in Angular 2. Hero editor is the example app in Angular 2 tutorial.

A bundle.js script is written to package user defined modules into a bundle that can be imported by SystemJS. There is no need to recursively find dependencies in the build process.The dependencies are only resolved when the app runs, saving us time from debugging the build process that ofthen result in exotic errors.

