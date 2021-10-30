print("global print")

function OnLoad() {
    print('OnLoad print')
}

function OnUnload() {
    print('OnUnload print')
}

exports.onLoad = OnLoad
exports.onUnload = OnUnload
