
# react-i18n-map
a simple react component that maps translation object to a string literal

[![Build Status](https://travis-ci.org/ayosdev/react-i18n-map.svg?branch=master)](https://travis-ci.org/ayosdev/react-i18n-map)
[![npm](https://img.shields.io/npm/v/react-i18n-map.svg?style=flat)](https://github.com/ayosdev/react-i18n-map/)

## Getting Started

This is attempt for transitioning an app using react 0.13.3 to react 15.x.x.  We were using react-intl v1 before and wanted to simplify transition and just copied the public api for FormatMessage and FormatHTMLMessage.   We were getting a lot of [warnings](https://github.com/yahoo/react-intl/issues/619) due to our upgrade from v1 to v2. 

So we copied the basic functionality of `FormattedMessage` and `FormattedHTMLMessage` from react-intl and we found out we could greatly simplify this just wrote this from scratch.

####Basic usage:
```javascript
<FormattedMessage message="Hello World" />
```

####Interpolation:
```javascript
<FormattedMessage message="This is {foo} and this is {bar}" values={ foo: 1, bar: 2 } />
```

####With html
```javascript
<FormattedHTMLMessage message="This is {foo} <em>and</em> this is {bar}" values={ foo: 1, bar: 2 } />
```


### Prerequisites

Using this module requires [React](https://facebook.github.io/react/) and is added as peer dependencies.  It means you need to manually add react since installing this library won't install react for you. So you need to do this before consuming this module:

```console
npm install react --save
```

or

```console
yarn add react
```

### Installing

**via [npm](https://www.npmjs.com/package/npm)**

```console
npm install react-i18n-map --save
```

**via [yarn](https://yarnpkg.com/)**

```console
yarn add react-i18n-map
```


## Built With

* [React](https://facebook.github.io/react/) - A javascript library for building User Interfaces

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/ayosdev/react-i18n-map/tags). 

## Authors

* **Chris** - *Initial work* - [thisguychris](https://github.com/thisguychris)

See also the list of [contributors](https://github.com/ayosdev/react-i18n-map/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

* Hat tip to [ericf](https://github.com/ericf) for react-intl, our initial library of choice.

