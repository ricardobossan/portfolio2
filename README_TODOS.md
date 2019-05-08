# TODOS

## CURRENT @TODO: [Add a store for Footer.state.value, with a Redux store, in order to be able to set all components to act according to the current navigation icon selected, and for screen swipes also change the navigatino icons.](#add-a-store-for-footerstatevalue-with-a-redux-store-in-order-to-be-able-to-set-all-components-to-act-according-to-the-current-navigation-icon-selected-and-for-screen-swipes-also-change-the-navigatino-icons)

## Index

- [TODOS](#todos)
  - [CURRENT @TODO: Add a store for Footer.state.value, with a Redux store, in order to be able to set all components to act according to the current navigation icon selected, and for screen swipes also change the navigatino icons.](#current-todo-add-a-store-for-footerstatevalue-with-a-redux-store-in-order-to-be-able-to-set-all-components-to-act-according-to-the-current-navigation-icon-selected-and-for-screen-swipes-also-change-the-navigatino-icons)
  - [Index](#index)
  - [Components](#components)
    - [Header](#header)
      - [Prototype](#prototype)
      - [Refinement](#refinement)
    - [Footer](#footer)
      - [Prototype](#prototype-1)
      - [Refinement](#refinement-1)
  - [Views](#views)
    - [View "/"](#view-%22%22)
      - [Prototype](#prototype-2)
      - [Refinement](#refinement-2)
    - [View "/portfolio"](#view-%22portfolio%22)
      - [Prototype](#prototype-3)
      - [Refinement](#refinement-3)
    - [View "/contact"](#view-%22contact%22)
      - [Prototype](#prototype-4)
      - [Refinement](#refinement-4)
    - [~~HashRouter~~ Navigation](#hashrouter-navigation)
      - [Prototype](#prototype-5)
      - [Refinement](#refinement-5)
        - [Scrolling methodsMethods](#scrolling-methodsmethods)
          - [Method 1: -window.scrollTo(x,y)-](#method-1--windowscrolltoxy)
  - [Find Theme With Material Guidance](#find-theme-with-material-guidance)
  - [Tablet (width>=1024px && width <1366px) breakpoint](#tablet-width1024px--width-1366px-breakpoint)
  - [Desktop breakpoint](#desktop-breakpoint)
    - [Prototype](#prototype-6)
    - [Refinement](#refinement-6)
  - [Add a store for Footer.state.value, with a Redux store, in order to be able to set all components to act according to the current navigation icon selected, and for screen swipes also change the navigatino icons.](#add-a-store-for-footerstatevalue-with-a-redux-store-in-order-to-be-able-to-set-all-components-to-act-according-to-the-current-navigation-icon-selected-and-for-screen-swipes-also-change-the-navigatino-icons)
  - [Copyright & Trademark](#copyright--trademark)

## Components

### Header

#### Prototype

~~- take away hamburger menu~~

~~- make AppBar match the theme's color~~

#### Refinement

### Footer

#### Prototype

~~- Navigation UI in Footer.~~

~~- fix width;~~

~~- Change icons accordingly.~~
~~\* add an GitHub icon/link~~

#### Refinement

~~- Change unselected navigation icons color to white, matching those on the AppBar~~

- Pressing on the buttons should change view
  ~~- Replace the contact icon for one that doesn't give the idea of multiple contacts.~~

## Views

### View "/"

#### Prototype

- ~~Choose start view's "/" image~~

#### Refinement

~~- Only in this View, Switch Header and Footer component's background to '#00000090', else, back to '#2d5f72'~~

- [AppBar should be translucid only in this view. If possible, transition should be smooth, between views](https://developer.mozilla.org/en-US/docs/Web/API/Window/scroll)
- Choose Typography for Logo, and if it is gonna be only text or if there's gonna be a image for my brand.

### View "/portfolio"

#### Prototype

#### Refinement

- Choose which projects to display
- take screenshots of apps and replace images in the slideshow
- Change each slideshow's texto to trief description of it's app.

### View "/contact"

#### Prototype

~~- Draw Contact/Footer component.~~

~~- Ready textField UI, with name, email and message fields.~~

~~- Contact view should take 100% of view height~~
~~- Links for Linkedin and Twitter? If there is, write it's names, icons are optional here.~~

#### Refinement

- Implement functionality, so the form will send messages to my professional email.
  - See if it can be done with a 3rd party package or service.

### ~~HashRouter~~ Navigation

Navigate between component's views upon user input.

#### Prototype

- HashRouter not working as intended. It only uses a `#` in the address bar. Edit: Managed to get it working with [this tip, from Seth Kroger](https://teamtreehouse.com/community/reactrouter-hashrouter-does-not-work-with-2-routes)
- Instead, add `id`s in the components, for navigation.
- Create `<Link>`s on the Footer component, for navigating to the respective views

#### Refinement

- Use [react-transition-group](https://github.com/reactjs/react-transition-group) to animate a smooth sliding motion for navigating between components. Use it in the <aside> too, on desktop view.
- [A shallow dive into React Router v4 Animated Transitions](https://github.com/reactjs/react-transition-group)

##### Scrolling methodsMethods

###### Method 1: -window.scrollTo(x,y)-

```
/* pq cada componente tem 100vh, e portfolio é o segundo componente. O primeiro  não muda /*
/* Top */
window.scrollTo(0,0)
/* Portfolio */
window.scrollTo(0, (window.screen.availHeight) )
/* Contact */
window.scrollTo(0, (window.screen.availHeight*10) )
```

## Find Theme With Material Guidance

- [Material Guidance fro color][color]

## Tablet (width>=1024px && width <1366px) breakpoint

## Desktop breakpoint

### Prototype

- Unmount componet `Footer / NavigationBottom` and replace it by mounting a left `<aside>`, or material ui equivalent component.
- Do some styling to diferentiate the current view, so it won't be boring and so it is good looking.

### Refinement

## Add a store for Footer.state.value, with a Redux store, in order to be able to set all components to act according to the current navigation icon selected, and for screen swipes also change the navigatino icons.

~~- [Create a Redux Store](https://redux.js.org/introduction/getting-started)~~
~~- [Connect Footer.js to Redux](https://react-redux.js.org/api/connect)~~
~~- Understand [classes in material ui. Why it was passed as props to Footer.js](https://material-ui.com/#augmenting-your-props-using-withstyles)~~
- [Handle actions>dispatch>reducer>scrolling to the right view](https://redux.js.org/basics/actions)
  ~~- Should I use [mapDispatchToProps](https://react-redux.js.org/api/connect#mapdispatchtoprops-object-dispatch-ownprops-object). I read that all data from store should be dispatched by actions (flux)~~ 
  ~~- Selected Footer tab should be determined by Redux's store~~
  - Make sure both happen:
    - Clicking an BottomNavigationIcon scrolls to the top of the right view
    - Scrolling/Swiping to the a view will change BottomNavigation selected tab correspondingly
      - The Projects tab will be selected if window.screen doesn't exactly match the `vh` of either the views of either the `Hero` or `Contact` components
- [Use Refs for DOM](https://codesandbox.io/s/v6948pww5y?from-embed)
- [Use react hooks with redux, to have global state with functional components](https://medium.freecodecamp.org/how-to-integrate-react-hooks-into-your-project-without-changing-your-redux-code-974e6f70f0b0?source=bookmarks---------0---------------------)

* Type (light /dark theme)
  You can make the theme dark by setting type to dark. While it's only a single property value change, internally it modifies the value of the following keys:

```
palette.text
palette.divider
palette.background
palette.action
const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});
```

## Copyright & Trademark

[layout-1]: http://riccardozanutta.com/
[layout-2]: https://www.lewishazen.com/
[layout-3]: http://jeffwang.co/
[color]: https://material.io/design/color/
