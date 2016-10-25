# README

## gulp.js build tool

### Installing

First you need to install Node.js.

1. Install [Node](http://nodejs.org/)
2. Install gulp.js client and development dependencies of the build tool:

```sh
    npm install -g gulp-cli
    npm install
```

### Directory structure

The default directory structure is:

    assets/
      *.png
      *.js
    build/
      <build result>
    src/
      posts/
        *.md
      views/
        index.html
        *.html
    styles/
      index.scss
      *.scss
    gulpfile.js
    package.json

### Building

Here are the main commands to use when building the website. More can be found from gulpfile.js.

```sh
    gulp          - runs the default build command
    gulp clean    - removes the build folder
    gulp watch    - runs a webserver for static content on http://localhost:3000
```

## Custom domains for Github Pages

### Github configuration

1. Open Github Pages repository
2. Go to Settings
3. Set "Custom domain" to the domain of choice

More from Github documentation: [Adding or removing a custom domain](https://help.github.com/articles/adding-or-removing-a-custom-domain-for-your-github-pages-site/)

### DNS

Setup your DNS so that it points at Github IPs and create a CNAME alias for www subdomain.

| HOST .mej.fi | Type      | Pointing at          |
| ------------ | --------- | -------------------- |
| @            | A         | 192.30.252.153       |
| @            | A         | 192.30.252.154       |
| www          | CNAME     | [username].github.io |

More from Github documentation: [Setting up apex domain and www subdomain](https://help.github.com/articles/setting-up-an-apex-domain-and-www-subdomain/)

## License

Open sourced under the [MIT license](LICENSE).
