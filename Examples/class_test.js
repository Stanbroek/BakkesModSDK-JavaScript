/// <reference path="../Scripts/out/typescript-declarations/bakkesmod.d.ts"/>
//const BakkesMod = require("bakkesmod")

class TestPlugin {
    constructor() {
        this.cvarManager = BakkesMod.cvarManager
        this.gameWrapper = BakkesMod.gameWrapper
        print("init class")
    }

    onLoad() {
        print("onLoad class")
        print(this.gameWrapper)
        print(this.cvarManager)
    }

    onUnload() {
        print("onUnload class")
    }
}

const plugin = new TestPlugin()
exports.onLoad = () => { plugin.onLoad() }
exports.onUnload = () => { plugin.onUnload() }
