# cod-ui

React component library. Wraps [material-ui](https://material-ui.com/).

## Table of contents:

- [Features](#features)
- [Installation](#installation)
- [Core Dependencies](#core-dependencies)
- [Components](#components)
- [Documentation](#documentation)
- [Using Notifications](#using-notifications)
- [Using Theme](#using-theme)
- [Contributing](#contributing)

## Features

- Uses `material-ui` as a foundational component library.
- Base [theme](https://material-ui.com/customization/themes/#themes).

## Installation

```sh
npm install --save cod-ui
```

## Core Dependencies

- DevExtreme React Grid
- Formik
- Material UI
- React Router
- Redux (Only for a couple of components. If you don't use them, you don't need redux)

## Components

The current list of available components:

- `ButtonList` - Wrapper for groups of buttons that spaces them nicely and helps with positioning.
- `Checkbox` - Checkbox form field component integrated with Formik.
- `FlexHeader` - Flex-box based <header> type element that spaces children nicely.
- `Link` - Combine's Material UI's Link with React Router's.
- `ListItemDetail` - Wrapper around material's `ListItemText` and `ListItem` to provide structure.
- `Loader` - Cool animated loader component. Pulls colors from theme palettes.
- `Logo` - Logo component that links to `/` by default. Pulls logo from theme.
- \* `Notifications` - Using `notistack` to display multiple Material Snackbar notifications.
- `PageWrapper` - Helpful component to wrap your pages. Sets up initial grid.
- `PopupFormButton` - Provide form and button components, and it will integrate them to show form on
  button click. Icon's are supported too.
- `SectionTitle` - Page or section title component.
- `Select` - Select form field component integrated with Formik.
- `SubTitle` - Subtitle component.
- `Table` - Table component that uses DevExtreme React Grid.
- `TableCell` - Table cell component that works with `Table`.
- `TextField` - TextField form field component integrated with Formik.
- `WorkflowStatus` - Workflow status component, showing different status states.
- `WorkflowStatusItem` - An individual workflow status item component.

\* Uses redux.

**Also included:**

- `pages/ErrorBoundary` - React error boundary component. Wrap around your app.
- `redux/entities.js` - Reducer that works well with RSAA Redux Middleware & normalizr.
- `redux/notifications.js` - Actions and reducer to go along with the `Notifications` component.
- `theme` - Default material UI theme

## Documentation

### Using Notifications

TODO

### Using Theme

TODO

## Contributing

1. Open an issue! If it's a new component you want to add or some larger feature, the issue will
   start the discussion. If it's a smaller thing or bug fix, we need to the issue to track the work.
2. Do the work
3. Add tests
4. Add documentation
5. Open a PR
