chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({ isEnabled: true });
});

chrome.storage.onChanged.addListener((changes, namespace) => {
    if (changes.isEnabled && !changes.isEnabled.newValue) {
        chrome.storage.local.set({ isEnabled: true });
    }
});
