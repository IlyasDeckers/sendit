# SendIt

> Send bulk text messages using iMessage

***Disclaimer:*** This project only works with Apple devices that have iMessage configured properly. iMessage has to be able to forward send text messages from and to your phone. 

## Installing SendIt
To start using SendIt first, download the executable from the releases page. Before running the application please make sure your iMessage is set up correctly on your MacBook and iPhone.

## Setting up iMessage text forwarding
1. Make sure your Mac and iPhone are signed in to iMessage with the same Apple ID. On the Mac, you do this in Messages > Preferences. On an iOS device, tap Settings > Messages.

2. On your iPhone, tap Settings > Messages > Text Message Forwarding. Toggle the switch next to your Mac’s name to On.
On your Mac, look for a notification with a numeric code ③.
3. Look for a verification code on your Mac.
> Tip: If the verification code doesn’t appear, sign out of iMessage on your Mac and iPhone, sign back in, and then try the setup process again.

4. Enter the code on your iPhone.

SMS messages sent to your iPhone should now be sent to your Mac, too.

## Formatting the Excel file
In order to send bulk messages, you will have to list all your contacts in an Excel. The structure has to be exactly like this:

| firstname  | lastname | telephone | position | available_at |
| -----------| ---------|-----------|----------|--------------|
| Ilyas  | Deckers  | 32466385323 | JavaScript Developer | 01-01-2018 |
| John  | Doe  | 32472756985 | PHP Developer | 05-03-2018 |

 > ***Note:*** if the available_at date is greater then the current date, the text message will not be sent. 

## Development
This application's structure is quite basic. The main logic can be found in `app\LandingPage.vue`. Happy coding! :)
### Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:9080
npm run dev

# build electron application for production
npm run build

# run unit & end-to-end tests
npm test


# lint all JS/Vue component files in `src/`
npm run lint

```

