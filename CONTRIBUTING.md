# Contributing Guidelines

Thank you for your interest in contributing to our project.
Whether it's a bug report, new feature, correction, or additional
documentation, we greatly value feedback and contributions from our community.

Please read through this document before submitting any
issues or pull requests to ensure we have all the necessary
information to effectively respond to your bug report or contribution.

## Reporting Bugs/Feature Requests

We welcome you to use the GitHub issue tracker to report bugs or suggest features.

When filing an issue, please check existing open, or recently closed,
issues to make sure somebody else hasn't already
reported the issue.
Please try to include as much information as you can. Details like these are incredibly useful:

- A reproducible test case or series of steps
- The version of our code being used
- Any modifications you've made relevant to the bug
- Anything unusual about your environment or deployment

## Contributing via Pull Requests

Contributions via pull requests are much appreciated. Before sending us a pull request, please ensure that:

---

### Step 1: Open Issue

If there isn't one already, open an issue describing what you intend to contribute.
It is useful to communicate in advance, because sometimes, someone is already working in this space,
so maybe it's worth collaborating with them instead of duplicating the efforts.

### Step 2: Fork the repository

GitHub provides additional document on [forking a repository](https://help.github.com/articles/fork-a-repo/).
Make sure you are working against the latest source on the _main_ branch.

### Step 3: Develop

This repository uses [pre-commit](https://pre-commit.com/) hooks for linting.

1. Follow the [quickstart guide](https://pre-commit.com/#quick-start) for pre-commit (skipping step #2)
1. Install dependencies : `TODO`
1. Change code
1. If relevant, add [tests](./test/)
1. Run tests : `TODO`
1. Build : `TODO`
1. Update relevant documentation
1. Create the commit with relevant files

   _Note:_ you may need to update the commit if `pre-commit` changes/suggests changes to files

### Step 4: Make the pull request

Send us a [pull request](https://help.github.com/articles/creating-a-pull-request/),
answering any default questions in the pull request interface.
Pay attention to any automated CI failures reported in the pull request, and stay involved in the conversation.

#### Pull Request Checklist

- [ ] Testing
  - Unit test added (prefer not to modify an existing test, otherwise,
    it's probably a breaking change)
- [ ] Docs
  - **README**: README updated if necessary
- [ ] Title and Description
  - **Change type**: title prefixed with **fix**, **feat** and module name in parens, which will appear in changelog
  - **Title**: use lower-case and doesn't end with a period
  - **Breaking?**: last paragraph: "BREAKING CHANGE: \<describe what changed + link for details\>"
  - **Issues**: Indicate issues fixed via: "**Fixes #xxx**" or "**Closes #xxx**"

## Finding contributions to work on

Looking at the existing issues is a great way to find something to contribute on.
As our projects, use the default GitHub issue labels (enhancement/bug/duplicate/help wanted/invalid/question/wontfix),
looking at any 'help wanted' issues is a great place to start.

## Code of Conduct

For more information see the [Code of Conduct](./CODE_OF_CONDUCT.md) or contact
`TODO` with any additional questions or comments.

## Security issue notifications

If you discover a potential security issue in this project we ask that you notify `TODO`.
Please do **not** create a public github issue.

## Licensing

See the [LICENSE](LICENSE) file for our project's licensing. We will ask you to confirm the licensing of your contribution.
