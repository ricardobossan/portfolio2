# TODOS <!-- omit in toc -->

## Index <!-- omit in toc -->

- [~~Find Layout~~](#find-layout)
- [~~Find Theme With Material Guidance~~](#find-theme-with-material-guidance)
- [~~Components~~](#components)
  - [~~Header~~](#header)
    - [~~Prototype~~](#prototype)
      - [~~Desktop View~~](#desktop-view)
  - [~~Footer~~](#footer)
    - [~~Prototype~~](#prototype-1)
      - [~~Add a store for Footer.state.value, with a Redux store, in order to be able to set all components to act according to the current navigation icon selected, and for screen swipes also change the navigatino icons.~~](#add-a-store-for-footerstatevalue-with-a-redux-store-in-order-to-be-able-to-set-all-components-to-act-according-to-the-current-navigation-icon-selected-and-for-screen-swipes-also-change-the-navigatino-icons)
    - [~~Refinement~~](#refinement)
- [Views](#views)
  - [~~View "/"~~](#view-%22%22)
    - [~~Prototype~~](#prototype-2)
    - [~~Refinement~~](#refinement-1)
  - [~~View "/portfolio"~~](#view-%22portfolio%22)
    - [~~Refinement~~](#refinement-2)
  - [~~View "/contact"~~](#view-%22contact%22)
    - [~~Prototype~~](#prototype-3)
    - [~~Refinement~~](#refinement-3)
      - [~~Implement functionality, so the form will send messages to my professional email.~~](#implement-functionality-so-the-form-will-send-messages-to-my-professional-email)
  - [~~Navigation ( BottomNavigation / Swiping / Scrolling)~~](#navigation--bottomnavigation--swiping--scrolling)
    - [~~Credits~~](#credits)
    - [~~Prototype~~](#prototype-4)
    - [~~Refinement~~](#refinement-4)
      - [~~Scrolling methodsMethods~~](#scrolling-methodsmethods)
        - [~~Method 1: -window.scrollTo(x,y)~~](#method-1--windowscrolltoxy)
- [~~Tablet (width>=1024px && width <1366px) breakpoint~~](#tablet-width1024px--width-1366px-breakpoint)
- [~~Desktop Breakpoint~~](#desktop-breakpoint)
  - [~~Prototype~~](#prototype-5)
  - [~~Refinement~~](#refinement-5)
- [~~General Refinement~~](#general-refinement)
  - [~~Social Icons Send User to My Social Profiles~~](#social-icons-send-user-to-my-social-profiles)
- [Finalize 👈](#finalize-%F0%9F%91%88)
- [Future Improvements](#future-improvements)
- [Copyright & Trademark](#copyright--trademark)

## :point_down: TODO CONTENT :point_down: <!-- omit in toc -->

## ~~Find Layout~~

- [Layout 1][layout-1]
- [Layout 2][layout-2]
- [Layout 3][layout-3]

## ~~Find Theme With Material Guidance~~

- ~~[Material Guidance fro color][color]~~

## ~~Components~~

### ~~Header~~

#### ~~Prototype~~

- ~~take away hamburger menu~~

- ~~make AppBar match the theme's color~~

##### ~~Desktop View~~

- ~~Make it thinner.~~

### ~~Footer~~

#### ~~Prototype~~

- ~~Navigation UI in Footer.~~

- ~~fix width;~~

- ~~Change icons accordingly.~~
  ~~\* add an GitHub icon/link~~

##### ~~Add a store for Footer.state.value, with a Redux store, in order to be able to set all components to act according to the current navigation icon selected, and for screen swipes also change the navigatino icons.~~

- ~~[Create a Redux Store](https://redux.js.org/introduction/getting-started)~~
- ~~[Connect Footer.js to Redux](https://react-redux.js.org/api/connect)~~
- ~~Understand [classes in material ui. Why it was passed as props to Footer.js](https://material-ui.com/#augmenting-your-props-using-withstyles)~~

- ~~[Handle actions>dispatch>reducer>scrolling to the right view](https://redux.js.org/basics/actions)~~

  - ~~Should I use [mapDispatchToProps](https://react-redux.js.org/api/connect#mapdispatchtoprops-object-dispatch-ownprops-object). I read that all data from store should be dispatched by actions (flux)~~
  - ~~Selected Footer tab should be determined by Redux's store~~

  - ###### **Objective:** Make sure both happen:

    - Clicking an BottomNavigationIcon scrolls to the top of the respective view
    - Scrolling/Swiping to a view will change BottomNavigation selected tab correspondingly
      - The Projects tab will be selected if window.screen doesn't exactly match the `window.screen` of the views of either the `Hero` or `Contact` components

  - ###### **Implementation:** So, basically, you'll be able to **either**:
    - ~~click button **-\>** changes `selectValue`'s redux state (`viewSelect` action) **-\>** goes to view (action that goes to the view onClick. **So**, add logic that moves to view into the `viewSelect` action).~~
    - ~~**TASK: create action/reducer**~~
    - ~~Going to a view by scrolling/swiping **-\>** also changes `selectValue`'s redux state, which **-\>** changes `BottomNavigation`'s value.~~
      - ~~Try [this](https://www.kempsterrrr.xyz/handling-scroll-events-in-react/) on desktop view, to see if App.onScroll works. using window.addEventListener('scroll') or setIntervall() makes slideshow and the whole app laggy.~~
      - ~~**Use [`window.pageYOffset`](https://developer.mozilla.org/en-US/docs/Web/API/Window/pageYOffset) (or [`window.scrollY`](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY)), for [comparison](https://stackoverflow.com/questions/22675126/what-is-offsetheight-clientheight-scrollheight).**~~
        - M~~aybe go to `/contact` after checking if pageYOffset >= (`method for whole app height` - `window.screen.availHeight`)~~
        - ~~Selected button matches view. Default selected button is `Projects`, if view not `top` or `contact` (**or default is `top`. If `!top` && `!contact`, is `project`**)~~
        - ~~**TASK: create action/reducer**~~

#### ~~Refinement~~

- ~~Change unselected navigation icons color to white, matching those on the AppBar~~

- ~~Pressing on the buttons should change view~~
  - ~~Replace the contact icon for one that doesn't give the idea of multiple contacts.~~

## Views

### ~~View "/"~~

#### ~~Prototype~~

- ~~Choose start view's "/" image~~

#### ~~Refinement~~

- ~~Only in this View, Switch Header and Footer component's background to '#00000090', else, back to '#2d5f72'~~

- ~~Choose Typography for Logo, and if it is gonna be only text or if there's gonna be a image for my brand.~~
- ~~`Scroll down` call to action should be a little further down.~~
- ~~Maybe add a redux store `Desktop | Mobile`, that, switches text between `Scroll | Swipe`~~
  - ~~Insted, solve it by using Hidden tags around spans for each word `scroll | swipe`.~~
- ~~Change hero image, because the first one was in russian, and displays the hardware's logo, which could bring problems.~~

### ~~View "/portfolio"~~

#### ~~Refinement~~

- ~~Make structure projectSteps.js show each project data~~
  - ~~The way it is now, it won't show the projectIndex prop on SwipeableTextMobileStepper.js~~
    - ~~maybe I could import projectSteps.js to Portfolio.js and inject it as an argument into a function that calls `.map()` through it to return an element with the data for each project in the `projectSteps` array~~
- ~~Choose which projects to display~~
- ~~take screenshots of apps and replace images in the slideshow~~
- ~~Project images for `Cat Clicker` mobile view who are too little to see it's details should be cut so details are more visible. Do the same thing for the `Memory Game` victory mobile view.~~
- ~~Anchor tags on each app on the list should send to the respective app, hosted at Heroku.~~

### ~~View "/contact"~~

#### ~~Prototype~~

- ~~Draw Contact/Footer component.~~

- ~~Ready textField UI, with name, email and message fields.~~

- ~~Contact view should take 100% of view height~~
- ~~Links for Linkedin and Twitter? If there is, write it's names, icons are optional here.~~

#### ~~Refinement~~

##### ~~Implement functionality, so the form will send messages to my professional email.~~

- ~~See if it can be done with a 3rd party package or service.~~
- ~~Reset fields after send.~~
  - ~~`The reset fields after send` generates and email with empty fields. Maybe setTimeout would be enough to fix it.~~
- ~~Methods:~~

  - **Method #1**: [Open OS Email Client, Filled By Form Input][emailclient]

    ```
    <!DOCTYPE html>
    <html>
    <body>

    <h2>Send e-mail to mail@ricardobossan.com:</h2>

    <form action="mailto:mail@ricardobossan.com" method="post" enctype="text/plain">
    Name:<br>
    <input type="text" name="name"><br>
    E-mail:<br>
    <input type="text" name="mail"><br>
    Comment:<br>
    <input type="text" name="comment" size="50"><br><br>
    <input type="submit" value="Send">
    <input type="reset" value="Reset">
    </form>

    </body>
    </html>
    ```

- **Method #2**: [Actions][mailaction]

### ~~Navigation ( BottomNavigation / Swiping / Scrolling)~~

#### ~~Credits~~

[Handling scroll events in React - @kempsterrrr](https://www.kempsterrrr.xyz/handling-scroll-events-in-react/)

Navigate between component's views upon user input.

#### ~~Prototype~~

- ~~HashRouter not working as intended. It only uses a `#` in the address bar. Edit: Managed to get it working with [this tip, from Seth Kroger](https://teamtreehouse.com/community/reactrouter-hashrouter-does-not-work-with-2-routes)~~
- ~~Instead, add `id`s in the components, for navigation.~~
- ~~Create `<Link>`s on the Footer component, for navigating to the respective views~~

#### ~~Refinement~~

##### ~~Scrolling methodsMethods~~

###### ~~Method 1: -window.scrollTo(x,y)~~

```
/* pq cada componente tem 100vh, e portfolio é o segundo componente. O primeiro  não muda /*
/* Top */
window.scrollTo(0,0)
/* Portfolio */
window.scrollTo(0, (window.screen.availHeight) )
/* Contact */
window.scrollTo(0, (window.screen.availHeight*10) )
```

## ~~Tablet (width>=1024px && width <1366px) breakpoint~~

- ~~social should be closer to each other~~.
- ~~Slideshows should wrap~~.

## ~~Desktop Breakpoint~~

- ~~Decide design. Between:~~
  - ~~Using css breakpoints and material ui theme breakpoints~~
  - ~~Creating a **redux store for switching between Desktop and Mobile** (or also between tablet and phone) view, when `App` Component `onResize` is triggered, to displaying, hiding or modifying accordingly things that show on the screen.~~
  - ~~:point_right: Both approaches (CSS Breakpoints in material UI && redux state for phone, tablet and desktop, for eventual features):point_left:~~
- ~~Hide bottom navigation~~
  - ~~Switch it's functionality to a :point_right: left aside or top the center of the Top App Bar, without icons.~~
- ~~Scrolling to a view should call `.focus()` on it, so it will be `selected`.~~
  - ~~This can be achieved using [React refs][refs]~~
    - ~~solved by removing the property `button` from Mui class ListItem~~

### ~~Prototype~~

- ~~Hide componet `Footer / NavigationBottom`.~~
- ~~And replace it by mounting a left `<aside>`, or material ui equivalent component.~~
  - ~~Use [secondary, in themes][muithemes], for styling selected tab in `<aside>`~~
    - ~~Check [tutorial][muithemetutorial]~~
    - ~~Use this JSS in the class, and make it be the iten's style when the redux state matches that item (found in [Mui docs for MenuItem][menuitem]):~~

```
  '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& $primary, & $icon': {
        color: theme.palette.common.white,
      },
    },
```

- ~~`<aside>` should have the same functionality as the Footer~~

### ~~Refinement~~

- ~~Do some styling to diferentiate the current view, so it won't be boring and so it is good looking~~.

## ~~General Refinement~~

### ~~Social Icons Send User to My Social Profiles~~

- ~~Header mail icon goes to the right view, but doesn't change BottomNavigation selected tab, like it's not connected to Redux. On Redux DevTools, no action is dispatched, when clicked on the icon~~
  - ~~Got to either fix lack of connection between Header and Redux, or simply get rid of the mail icon.~~
    - ~~Had forgotten to destructure action in component.~~

## Finalize 👈

- ~~Add events for checkingif the view is correct in either BottomNavigation or Aside.~~

  - ~~[Programmatically Managing Focus][progrmaticallyfocus]: Starting focus doesn't allow keyboard events to be fired. Right now, i have to hit tab so the linkedin icon in the header will be focused. Only then keyboard events will fire, and the aside selected tab will follow accordingly.~~

    - ~~I think I'll solve this by using [useRef][useref], `tabIndex` and `.focus()`~~

      - ~~Solution: [simply wrap an dom event listener on `document.body`, wrapped around an useEffect() React method][bodyeventreact].~~

        - ~~In order to prevent memory leaks, I had to wrap the event handler inside another function, who would first call removeEventListener on this new function, who is now the event handler:~~

          **Avoiding Memory Leaks**

          ```
            const handleKey = e =>
              e.key === 'ArrowUp' ||
              e.key === 'ArrowDown' ||
              e.key === 'PageUp' ||
              e.key === 'PageDown' ||
              e.key === 'Home' ||
              e.key === 'End'
                ? handleScroll()
                : null;

            const handleKeyWrapper = e => {
              document.body.removeEventListener('keyup', handleKeyWrapper, false);
              handleKey(e);
            };

            useEffect(() => {
              document.body.addEventListener('keyup', handleKeyWrapper);
            });
          ```

- ~~Git rid of desktop view horizontal scrollbar~~
- ~~slideshow buttons shouldn't be encapsulated by anchor tags~~
- ~~Build a production enviroment~~
- ~~host portfolio's production enviroment.~~

  - Issues:

    - ~~Contact links to social network services are cut behind the footer at the bottom of the page, and can't be swiped to (research [1][mailmobile]).~~
    - ~~Email form doesn't work on mobile.~~

      - **SOLVED**:

        - Material UI solution: `<Button>'s` `href`property: https://material-ui.com/api/button/
        - Confirmed by the common `<a>`tag approach: https://stackoverflow.com/questions/18870154/mailto-attribute-does-not-work-on-mobile#answer-18870188

      - **Method #0**: https://www.sitepoint.com/sending-email-using-node-js/
        - https://github.com/nodemailer/nodemailer#available-transports
        - https://github.com/nodemailer/nodemailer-sendmail-transport
        - https://github.com/nodemailer/nodemailer-ses-transport
        - https://github.com/sendgrid/sendgrid-nodejs
      - **Method #1**: SMTPJS - https://smtpjs.com/

      ```
      Security
      Whoa!, wait a minute. I don't want my SMTP credentials visible to the world!
      We've thought of that, so instead you can encrypt your SMTP credentials, and lock it to a single domain, and pass a secure token instead of the credentials instead, for example:

      Email.send({
          SecureToken : "C973D7AD-F097-4B95-91F4-40ABC5567812",
          To : 'them@website.com',
          From : "you@isp.com",
          Subject : "This is the subject",
          Body : "And this is the body"
      }).then(
        message => alert(message)
      );

      Note: By default, the SMTP connection is secure (STARTTLS) and over port 25. If you need to use an SMTP server that does not accepts secure connections, or in on a non-standard port, like 587, then use the button above "Encrypt your SMTP Credentials" to store advanced configuration.
      Need an SMTP server:
      If you don't have access to an SMTP server, you can create one by opening an account at Elastic Email.com, then pressing Settings > SMTP/API, and using the SMTP configuration shown.

      ```

      ## Method #2

      ### Reference

      - https://stackoverflow.com/questions/14268796/how-do-i-send-email-with-javascript-without-opening-the-mail-client#answer-27244274

      ### Directly From Client (Should start with this one!)

      Send an email using only JavaScript

      in short:

      1. register for Mandrill to get an API key
      2. load jQuery
      3. use \$.ajax to send an email
         Like this -

      function sendMail() {
      \$.ajax({
      type: 'POST',
      url: 'https://mandrillapp.com/api/1.0/messages/send.json',
      data: {
      'key': 'YOUR API KEY HERE',
      'message': {
      'from_email': 'YOUR@EMAIL.HERE',
      'to': [
      {
      'email': 'RECIPIENT@EMAIL.HERE',
      'name': 'RECIPIENT NAME (OPTIONAL)',
      'type': 'to'
      }
      ],
      'autotext': 'true',
      'subject': 'YOUR SUBJECT HERE!',
      'html': 'YOUR EMAIL CONTENT HERE! YOU CAN USE HTML!'
      }
      }
      }).done(function(response) {
      console.log(response); // if you're into that sorta thing
      });
      }
      https://medium.com/design-startups/b53319616782

      Note: Keep in mind that your API key is visible to anyone, so any malicious user may use your key to send out emails that can eat up your quota.

      ### Indirect via Your Server - secure

      To overcome the above vulnerability, you can modify your own server to send the email after session based authentication.

      node.js - https://www.npmjs.org/package/node-mandrill

      var mandrill = require('node-mandrill')('<your API Key>');

      function sendEmail ( \_name, \_email, \_subject, \_message) {
      mandrill('/messages/send', {
      message: {
      to: [{email: _email , name: _name}],
      from_email: 'noreply@yourdomain.com',
      subject: \_subject,
      text: \_message
      }
      }, function(error, response){
      if (error) console.log( error );
      else console.log(response);
      });
      }

      // define your own email api which points to your server.

      app.post( '/api/sendemail/', function(req, res){

          var _name = req.body.name;
          var _email = req.body.email;
          var _subject = req.body.subject;
          var _messsage = req.body.message;

          //implement your spam protection or checks.

          sendEmail ( _name, _email, _subject, _message );

      });
      and then use use \$.ajax on client to call your email API.

      shareedit
      edited Apr 20 '15 at 5:16
      answered Dec 2 '14 at 7:46

      rahulroy9202
      2,07912439

- Set this portfolio to my portfolio domain.
- Clean commented out code.
- Create a full sketch of `react-redux` (specifically) functionality

## Future Improvements

- Clicking on the mail icon on the header focuses on the name input in the form.
- Form validation for email TextField.
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

- If swipe is long, it may hit Top or Bottom view without activating the action for selecting the respective view in the BottomNavigation bar. May be solved by adding a check at `scrollY === 0` and `scrolly >= window.scrollHeight - window.screen.availHeight -1`. Add a setTimeout for 1000ms, so it won't call too many times.

## Copyright & Trademark

<!-- Reference -->

[layout-1]: http://riccardozanutta.com/
[layout-2]: https://www.lewishazen.com/
[layout-3]: http://jeffwang.co/
[color]: https://material.io/design/color/
[muithemes]: https://material-ui.com/customization/themes/
[muithemetutorial]: https://www.turbohide.com/index.php?q=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DyRM-beLeUT8%26list%3DPLcCp4mjO-z98WAu4sd0eVha1g-NMfzHZk%26index%3D13
[menuitem]: https://material-ui.com/demos/menus/
[emailclient]: https://www.w3schools.com/html/tryit.asp?filename=tryhtml_form_mail
[react-mail-form]: https://www.npmjs.com/package/react-mail-form
[mailaction]: https://medium.com/@sgobinda007/send-mail-from-your-reactjs-app-c6561bd5c22f
[refs]: https://reactjs.org/docs/refs-and-the-dom.html
[progrmaticallyfocus]: https://reactjs.org/docs/accessibility.html#programmatically-managing-focus
[useref]: https://reactjs.org/docs/hooks-reference.html#useref
[bodyeventreact]: https://stackoverflow.com/questions/32485520/how-can-i-add-a-click-handler-to-body-from-within-a-react-component
[mailmobile]: https://stackoverflow.com/questions/5677963/mailto-link-in-email-to-start-a-new-email?rq=1
