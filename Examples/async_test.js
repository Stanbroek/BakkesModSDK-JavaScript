function sleep(s) {
    return new Promise(resolve => setTimeout(resolve, s * 1000));
}

exports.onLoad = async function OnLoad() {
    print('OnLoad 1')
    await sleep(3)
    print('OnLoad 2')
}

exports.onUnload = async function OnUnload() {
    print('OnUnload 1')
    await sleep(3)
    print('OnUnload 2')
}
