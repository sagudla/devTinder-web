# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


- Create new Vite+react project
- remove unnecessary code
- install tailwind css
- setup daisy Ui
- Add navabar component

- install react-router
- create browserrouter> routes > route
- added children components in aprent route
- outlet in Body component
- footer component

Body
 NavBar
 Route="/"- feed
 Route="/login"- Login
 Route="/profile"- Profile
 Route="/connections"- Connections

 Footer


 - Login card and API hit and navigating to feed component.(useNavigate() hook from react-router)
 - Cors middleware with Origin and credentials options to capture cookies in browser/clinet side
 - Axios for API calls
 - moved components to componets folder
 - created utils folder and keep base url constant
 - configure appStore and create userSlice to handle user data (@reduxjs/toolkit)
 - Provided the store to entire APP using Provider.(react-redux)
 - Dispatching action after successfull login and caturing the data in Navbar component to show/hide profile icon and displaying the user firstName(react-redux, useDispatch and useSelector hooks)


- logout implementation
- fetching profile data to stay on same page if reloaded after login since token exists and state become null.
- Navigating to login if try to avigate to other route without login.
- create feed slice 
- new component user card for feed (props drilling)
- new component edit profile for profile editing and props drilling to sync user card along with edit
- save profile toast added.

- Connections and requests slice added
- Connections and Requests cards and route added in menu
- Accepted/rejeected (review request) for connection requests implemenetd.