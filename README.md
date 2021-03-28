# React Native Barebone Template to Start your own App

![Alt text](assets/images/barebone.png "Barebone image")

## Setting up the development environment

#### Node,Watchman & JDK
We recommend installing Node, Watchman and JDK using Homebrew. 
Run the following commands in a Terminal after installing Homebrew:
```bash
brew install node
brew install watchman
brew install --cask adoptopenjdk/openjdk/adoptopenjdk8
```
If you have already installed JDK on your system, make sure it is JDK 8 or newer.

#### CocoaPods
```bash
sudo gem install cocoapods
```

#### Android
Download and install Android Studio. 
While on Android Studio installation wizard, 
make sure the boxes next to all of the following items are checked:
- Android SDK
- Android SDK Platform
- Android Virtual Device
- If you are not already using Hyper-V
 
Be sure to see more information about installing environment: https://reactnative.dev/docs/environment-setup



## Run project

To run this application, you first need to clone this repo and then enter into this directory:

```bash
git clone https://github.com/vendeza/react-native-barebone-template.git
cd react-native-barebone-template
```

Install dependencies
```bash
npm install
```

CocoaPods dependencies are needed for ios development
```bash
cd ios && pod install && cd ..
```

Launch an Android Emulator or iOS Simulator, then
```bash
# Android
npm run android

# iOS
npm run ios
```


## Supported Platforms
- iOS 11+ 
    
- Android API 21+
