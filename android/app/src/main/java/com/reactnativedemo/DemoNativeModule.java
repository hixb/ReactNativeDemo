package com.reactnativedemo;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactContextBaseJavaModule;

public class DemoNativeModule extends ReactContextBaseJavaModule {
    @NonNull
    @Override
    public String getName() {
        return "A";
    }
}
