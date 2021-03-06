
#  scriptless-chat

Chat doesn't need to be complicated, so we've (the creators of [webchat.ws](https://webchat.ws/)) created a proof of concept to proove that Javascript isn't always needed in the browser!

##  Assumptions

It's important for us to make some assumptions about a browser, to determine how we should treat it. In the case of Scriptless Chat, the following assumptions are made:

-  **Javascript** is disabled.
-- We never use Javascript in the browser

-  **CSS** is enabled.
-- Where possible, CSS3 should be used, with fallback for older browsers.

-  **Cookies** may be enabled.
-- We only use cookies for session keys, we will use a url based session key fallback mechanism.

-  **HTML5** is supported.

## FAQ
- **Q**. Why is the scrolling on the chat history is reversed?
-- **A**. The browser will usually add text without scrolling to the bottom. Without Javascript, this is the only way we can make sure you are able to sit back and watch the new messages come in.

 - **Q**. Why does my browser shows that it is still loading / receiving data?
 -- **A**. The browser is correctly showing you that it is still connected and waiting for data. Other sites use Javascript to prevent this.

- **Q**. Why does a section of my screen dissapear from time to time?
-- **A**. We sometimes reload sections to send data to the server, or get information back from the server.

- **Q**. You know you could do the same thing with Websockets / Ajax / Comet / &ltinsert new technology here&gt; 
-- **A**. The use of any new technologies in the browser usually requires interfacing with the Javascript API.

- **Q**. Why do you hate Javascript?
-- **A**. We love what's possible with Javascript, but don't think you should *have to* enable it on every website.

- **Q**. I have an idea on how this could be improved!
-- **A**. We'd love to hear it! Submit a [feature request](https://github.com/ozjd/scriptless-chat/issues/new) and let us know!