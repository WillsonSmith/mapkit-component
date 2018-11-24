# Contributing

Thanks for your interest in contributing to mapkit-map! :tada:

## Contributing Etiquette

Please see our [Contributor Code of Conduct](https://github.com/WillsonSmith/mapkit-component/blob/master/code-of-conduct.md) for information on our rules of conduct.

## Creating an Issue

- It is required that you clearly describe the steps necessary to reproduce the issue you are running into. Clear reproduction steps make it easier to debug and find the root cause of the issue.

- The issue list of this repository is exclusively for bug reports and feature requests. Non-conforming issues will be closed immediately.

- Issues with no clear steps to reproduce will not be triaged.

- If you think you have found a bug, or have a new feature idea, please start by making sure it hasn't already been [reported](https://github.com/WillsonSmith/mapkit-component/issues). You can search through existing issues to see if there is a similar one reported. Include closed issues as it may have been closed with a solution.

- Next, [create a new issue](https://github.com/WillsonSmith/mapkit-component/issues/new) that thoroughly explains the problem. Please fill out the populated issue form before submitting the issue.

## Creating a Pull Request

- We appreciate you taking the time to contribute! Before submitting a pull request, we ask that you please [create an issue](#creating-an-issue) that explains the bug or feature request and let us know that you plan on creating a pull request for it. If an issue already exists, please comment on that issue letting us know you would like to submit a pull request for it. This helps us to keep track of the pull request and make sure there isn't duplicated effort.

- Looking for an issue to fix? Make sure to look through our issues with the [help wanted](https://github.com/WillsonSmith/mapkit-component/labels/help%20wanted) label!

### Setup

1. Fork the repo.
2. Clone your fork.
3. Make a branch for your change.
4. Run `npm install` (make sure you have [node](https://nodejs.org/en/) and [npm](http://blog.npmjs.org/post/85484771375/how-to-install-npm) installed first)

#### Updates

1. Make sure to test your changes. Please take a look at how other unit tests are written, and you can't write too many tests. And write better tests than the ones written so far 😉
2. If there is a `*.spec.ts` file located in the components folder, update it to include a test for your change, if needed. If this file doesn't exist, please notify us.
3. If there is a `*.e2e.ts` file located in the components folder, update it to include a test for your change, if needed.
4. Run `npm run test` or `npm run test.watch` to make sure all tests are working, regardless if a test was added.

## Commit Message Format

We have a guide on how our git commit messages should be formatted. This leads to readable messages that are easy to follow when looking through the project history.

#### Be descriptive

The requirements for commit messages is loose. Although there are no clearly stated rules, we request your commit messages be descriptive of what they are attempting to accomplish.

<!-- #### Adding Documentation -->

## License

By contributing your code to the WillsonSmith/mapkit-component GitHub Repository, you agree to license your contribution under the MIT license.
