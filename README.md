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

- ignore/interested(send connection request) implemented
- Signup implimentaion
- Same form for Login and signup
- Some testing E2E.

# Deployment
- Crate aws account
- EC2 instance and perm key 
- connect through SSH
- chmod 400 "devTinder-secret.pem" (for windows it will change)
- icacls "devTinder-secret.pem" /inheritance:r
- icacls "devTinder-secret.pem" /grant:r "$($env:USERNAME):(R)"
- ssh -i "devTinder-secret.pem" ubuntu@ec2-13-238-143-116.ap-southeast-2.compute.amazonaws.com (this will chnage if we stop the instance)
- Install node using nvm (download the same version as in our local)
- git clone
  # Frontend
   - npm install
   - npm run build
   - sudo apt update
   - sudo apt install nginx
   - start and enable nginx sudo systemctl start nginx && sudo systemctl enable nginx
   - copy dist/* to /var/www/html
   - sudo scp -r dist/* /var/www/html
   - Enable port :80 of your instance to make it work
  # Banckend
   - allow EC2 public IP on mongodb server
   - enable port 7777 in instance to run db
   - install pm2 (npm install pm2 -g)
   - pm2 start npm --start
     - Frontend - 13.238.143.116
     - backend- 13.238.143.116:7777 will chnage this to 13.238.143.116/api using ngnix proxy pass

     add server: 13.238.143.116 and below config
     location /api/ {
        proxy_pass http://localhost:7777/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
    in nginx uisng this command sudo nano /etc/nginx/sites-available/default and reload sudo systemctl reload nginx

  - Change BASE_URLto /api in frontend
  - Do git pull and run npm run build
  copy dist folder to /var/www/html (suso scp -r dist/* /var/www/html)




  You can get the exact SSH command directly from the AWS EC2 Console by selecting your instance and clicking the "Connect" button.

Step-by-Step in AWS Console

1. Log in to the AWS Management Console and open the EC2 Dashboard.
2. Click Instances in the left sidebar and check the box next to your running instance.
3. Click the Connect button at the top right.
4. Switch to the SSH client tab.

# custom domain name
- Purchase domain for godaddy(not mandatory)
- signup to cluodfare for dns management
- Add domain in cloufare it will give new nameservers
- Update the neameservers in go daddy with cloudfare nameservers
- It will take some time in cloudfare to complete the update 
- Map your instance IP address to devtinder A DNS record
- Configure SSL certificate and flexibile and redirect to https