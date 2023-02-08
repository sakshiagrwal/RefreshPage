# Auto-Refresh Page - Chrome Extension

A Chrome extension that automatically reloads the current tab until the ChatGPT page is not loaded properly.

## Installation

1. Download the source code and save it on your computer.
2. Open Google Chrome and go to `chrome://extensions/`
3. Toggle on `Developer mode` in the top right corner.
4. Click on `Load unpacked` and select the folder where you saved the source code.
5. The extension should now be installed and activated.

## Usage

1. Go to any page whose URL matches _://chat.openai.com/_.
2. This code creates an interval that checks the page content every second.
3. If the text "Get notified when we're back" is found on the page, it reloads the page. If the text is not found, it stops the refresh process.
