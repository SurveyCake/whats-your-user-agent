var parser = new UAParser();
var result = parser.getResult();

document.getElementById('data-ua-string').textContent = result.ua;

document.getElementById('browser-name').textContent = result.browser.name;
document.getElementById('browser-version').textContent = result.browser.version;
document.getElementById('browser-major').textContent = result.browser.major;

document.getElementById('os-name').textContent = result.os.name;
document.getElementById('os-version').textContent = result.os.version;

document.getElementById('device-model').textContent = result.device.model;
document.getElementById('device-type').textContent = result.device.type;
document.getElementById('device-vendor').textContent = result.device.vendor;
