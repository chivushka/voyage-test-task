## To run project
Execute from console in project directory

```bash
yarn
cd ios && pod install
yarn start
```
## To check if axios interceptors work
1. Log in with valid credentials
2. Choose project
### To check refresh
1. Click on "Set invalid token" button
2. Click on "Try to get user data"
3. Name and surname should be shown in alert
### To check logout if access and refresh tokens are invalid
1. Click on "Set invalid token" button
2. Click on "Set invalid refresh token" button
3. Click on "Try to get user data"
4. User should be redirected to login page

*Test task by Ivanna Chernova*
