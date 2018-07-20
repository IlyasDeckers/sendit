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

---

This project was generated with [electron-vue](https://github.com/SimulatedGREG/electron-vue)@[4c6ee7b](https://github.com/SimulatedGREG/electron-vue/tree/4c6ee7bf4f9b4aa647a22ec1c1ca29c2e59c3645) using [vue-cli](https://github.com/vuejs/vue-cli). Documentation about the original structure can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html).
