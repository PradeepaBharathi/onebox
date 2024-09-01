OneBox App is created using React Js
For creation of react app npm package was used npx create-react-app Onebox
It consists of 2 main pages one is Login other is Mail Part
For Login google signup method is used . Once the signup with google button is clicked the page will be redirected to signup page , once login successfull the token is stored in localstorage and then it is redirected to the home page of one box where the route is google-login
In Mail 4 api has been used
1- Get Api to fetch all the emails availables . This api has been called and token has been passed in headers for authorization. The mails are shown in Inbox part
2- Get Api with threadId is used the fetch the email details of the particular mail. ThreadId is passed as an parameter to api and headers is set for authorizarion. The mail details are shown in Emaildetails part
3- Delete Api with threadId is used the Delete the particular mail. ThreadId is passed as an parameter to api and headers is set for authorizarion. 
4- The refresh button in inbox part is for reset the mails present in the api
5- Shortcut keys have been implemeted. Clicking on 'D' will ask for deletion permission and clicking on'R' will open the Reply Popup.
6- React Context is used for implementing the theme functionality. Once the slider is open the theme is dark and if it is closed it is in light mode
7- Logout functionality is implemented under the user-icon. Once the user logs out the token is removed from the localstorage

Deployed URL -- https://oneboxp01.netlify.app/

