/// <reference path="../Scripts/out/typescript-declarations/bakkesmod.d.ts"/>
// Collection of python scripts for BakkesMod from Bakkes.
//const BakkesMod = require("bakkesmod")

const cvarManager = BakkesMod.cvarManager
const gameWrapper = BakkesMod.gameWrapper
const Rotator = BakkesMod.Rotator
const Vector = BakkesMod.Vector

function randint(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function airdribble() {
    const tut = gameWrapper.GetGameEventAsServer()

    const player = tut.GetGameCar()
    const ball = tut.GetBall()
    const ballLoc = ball.GetLocation()

    let distToBall = 400
    if (ballLoc.Y > 0) {
        distToBall = -1 * distToBall
    }

    const destLocation = new Vector(ballLoc.X - 50, ballLoc.Y - distToBall, 40)

    //newRotNorm = ballLoc - destLocation
    const newRotNorm = new Vector(ballLoc.X - destLocation.X, ballLoc.Y - destLocation.Y, ballLoc.Z - destLocation.Z)
    newRotNorm.normalize()
    const newRot = BakkesMod.VectorToRotator(newRotNorm)
    newRot.Pitch = 0  // Just want yaw
    newRotNorm.Z = 0
    player.Stop()

    player.SetLocation(destLocation)
    player.SetRotation(newRot)
    player.SetVelocity(new Vector(400 * newRotNorm.X, 400 * newRotNorm.Y, 400 * newRotNorm.Z))

    ball.Stop()
    ball.SetLocation(new Vector(ballLoc.X, ballLoc.Y, 100))

    const newBallVel = new Vector(500 * newRotNorm.X, 500 * newRotNorm.Y, 0)
    newBallVel.Z = 400
    ball.SetVelocity(newBallVel)
}

function airdribble2() {
    if (gameWrapper.IsInFreeplay()) {
        const tut = gameWrapper.GetGameEventAsServer()
        const player = tut.GetGameCar()
        const ball = tut.GetBall()

        const randomSpawnLoc = new Vector(randint(-3800, 3800), randint(-4500, 4500), 35)
        const goalNo = randomSpawnLoc.Y > 0 ? 0 : 1  // determine which goal
        const ballDest = tut.GenerateGoalAimLocation(goalNo, randomSpawnLoc)
        const faceVec = new Vector(ballDest.X - randomSpawnLoc.X, ballDest.Y - randomSpawnLoc.Y, ballDest.Z - randomSpawnLoc.Z)
        faceVec.normalize()
        const playerRot = BakkesMod.VectorToRotator(faceVec)

        player.Stop()
        player.SetLocation(randomSpawnLoc)
        player.SetRotation(playerRot)
        player.SetVelocity(new Vector(500 * faceVec.X, 500 * faceVec.Y, 0))

        //ballLoc = randomSpawnLoc + Vector(250) * faceVec + Vector(0, 0, 53)
        const ballLoc = new Vector(randomSpawnLoc.X + 250 * faceVec.X + 0, randomSpawnLoc.Y + 250 * faceVec.Y + 0, randomSpawnLoc.Z + 250 * faceVec.Z + 53)
        ball.Stop()
        ball.SetLocation(ballLoc)
        // randint(*(choice([(-900, -500), (300, 500)])))
        //ballVelocity = Vector(600) * faceVec + Vector(0, 0, 300)
        const ballVelocity = new Vector(600 * faceVec.X + 0, 600 * faceVec.Y + 0, 600 * faceVec.Z + 300)

        shootBall = () => {
            ball.SetVelocity(ballVelocity)
        }

        gameWrapper.SetTimeout(shootBall, .11)
    }
}

function backwall() {
    if (gameWrapper.IsInFreeplay()) {
        const tut = gameWrapper.GetGameEventAsServer()
        const player = tut.GetGameCar()
        const ball = tut.GetBall()

        const ballSpawn = new Vector(randint(-3261, 713), randint(-0, 2566), randint(18, 600))

        const carSpawn = new Vector(randint(-3777, -837), randint(-3891, -2946), 25)
        const carSpawnRotation = new Rotator(-100, randint(-23600, -9475), 0)
        ball.Stop()
        player.Stop()

        const endLocation = new Vector(randint(-3756, -983), randint(-5500, -4262), randint(600, 1900))

        if (randint(0, 1) == 1) {
            carSpawn.X = -1 * carSpawn.X
            ballSpawn.X = -1 * ballSpawn.X
            endLocation.X = -1 * endLocation.X
        }

        ball.SetLocation(ballSpawn)
        player.SetLocation(carSpawn)
        player.SetRotation(carSpawnRotation)
        const velocity = tut.GenerateShot(ballSpawn, endLocation, randint(600, 1100))
        ball.SetVelocity(velocity)
        // player.SetVelocity(Vector)
    }
}

function boom() {
    const tut = gameWrapper.GetGameEventAsServer()

    const player = tut.GetGameCar()
    const ball = tut.GetBall()
    const shot = tut.GenerateShot(ball.GetLocation(), player.GetLocation(), 1300)

    shootie = () => {
        ball.SetVelocity(shot)
        console.log(`VEL X: ${shot.X}, Y: ${shot.Y}, Z: ${shot.Z}`)
    }

    gameWrapper.SetTimeout(shootie, 1)
}

function catchies() {
    const ballVelocity = new Vector(0, 0, 0)

    if (gameWrapper.IsInFreeplay()) {
        const tut = gameWrapper.GetGameEventAsServer()
        const player = tut.GetGameCar()
        const ball = tut.GetBall()

        const playerStart = new Vector(randint(-3000, 3300), randint(600, 3000), 65)
        const playerStartRot = new Rotator(0, randint(-32000, 32000), 0)
        player.Stop()
        player.SetLocation(playerStart)
        player.SetRotation(playerStartRot)

        const ballStart = new Vector(randint(-3000, 3300), randint(-600, -3000), randint(100, 1500))
        ball.Stop()
        ball.SetLocation(ballStart)

        // playerStartRot.Yaw -= 32000
        // playerStartRot.Roll = 0
        const behind = BakkesMod.RotatorToVector(playerStartRot)

        behind.normalize()
        //playerAwkwardSpot = playerStart - behind * Vector(randint(400, 600), randint(500, 800), randint(0, 200))
        const playerAwkwardSpot = new Vector(playerStart.X - behind.X * randint(400, 600), playerStart.Y - behind.Y * randint(500, 800), playerStart.Z - behind.Z * randint(0, 200))
        //player.SetVelocity(behind * Vector(800, 800, 0))
        player.SetVelocity(new Vector(behind.X * 800, behind.Y * 800, 0))

        ballVelocity = tut.GenerateShot(ballStart, playerAwkwardSpot, randint(700, 1000))

        const shootBall = () => {
            ball.SetVelocity(ballVelocity)
        }

        gameWrapper.SetTimeout(shootBall, .3)
    }
}

function ceilingshot() {
    if (gameWrapper.IsInFreeplay()) {
        const tut = gameWrapper.GetGameEventAsServer()
        const player = tut.GetGameCar()
        const ball = tut.GetBall()

        const xStart =  randint(0, 1) == 1 ? randint(500, 1200) : randint(-500, -1200)
        const ballSpawn = new Vector(xStart, randint(-1700, 1700), 95)
        const ballSpawnNorm = new Vector(ballSpawn.X, ballSpawn.Y, ballSpawn.Z)
        ballSpawnNorm.normalize()
        //carSpawn = ballSpawn - (ballSpawnNorm * Vector(500, 100, 0)) - Vector(0, 0, 65)
        const carSpawn = new Vector(ballSpawn.X - (ballSpawnNorm.X * 500), ballSpawn.Y - (ballSpawnNorm.Y * 100), ballSpawn.Z - 65)

        ball.Stop()
        player.Stop()
        ball.SetLocation(ballSpawn)
        player.SetLocation(carSpawn)

        const distToBall = new Vector(ballSpawn.X - carSpawn.X, ballSpawn.Y - carSpawn.Y, ballSpawn.Z - carSpawn.Z)
        distToBall.normalize()
        const carRot = BakkesMod.VectorToRotator(distToBall)
        player.SetRotation(carRot)
        //ball.SetVelocity(distToBall * Vector(1200, 1200, 0))
        ball.SetVelocity(new Vector(distToBall.X * 1200, distToBall.Y * 1200, 0))
        //player.SetVelocity(distToBall * Vector(1200, 1200, 0))
        player.SetVelocity(new Vector(distToBall.X * 1200, distToBall.Y * 1200, 0))
    }
}

function ceilingshot2() {
    if (gameWrapper.IsInFreeplay()) {
        const tut = gameWrapper.GetGameEventAsServer()
        const player = tut.GetGameCar()
        const ball = tut.GetBall()

        const xStart =  randint(0, 1) == 0 ? randint(500, 1200) : randint(-500, -1200)
        const ballSpawn = new Vector(xStart, randint(-1700, 1700), 95)
        const ballSpawnNorm = new Vector(ballSpawn.X, ballSpawn.Y, ballSpawn.Z)
        ballSpawnNorm.normalize()
        const yDiff = randint(0, 1) == 0 ? xStart * 2 : xStart * -2
        //carSpawn = ballSpawn - (ballSpawnNorm * Vector(500, 100, 0)) - Vector(0, max(-2000, min(yDiff, 2000)), 65)
        const carSpawn = new Vector(ballSpawn.X - (ballSpawnNorm.X * 500), ballSpawn.Y - (ballSpawnNorm.Y * 100) - Math.max(-2000, Math.min(yDiff, 2000)), ballSpawn.Z - 65)

        //impact = ballSpawn - (ballSpawnNorm * Vector(500, 100, 0))
        const impact = new Vector(ballSpawn.X - (ballSpawnNorm.X * 500), ballSpawn.Y - (ballSpawnNorm.Y * 100), ballSpawn.Z)

        ball.Stop()
        player.Stop()
        ball.SetLocation(ballSpawn)
        player.SetLocation(carSpawn)

        //distToBall = (ballSpawn - impact)
        const distToBall = new Vector(ballSpawn.X - impact.X, ballSpawn.Y - impact.Y, ballSpawn.Z - impact.Z)
        distToBall.normalize()
        const carRot = BakkesMod.VectorToRotator(distToBall)
        player.SetRotation(carRot)
        //ball.SetVelocity(distToBall * Vector(2200, 1200, 0))
        ball.SetVelocity(new Vector(distToBall.X * 2200, distToBall.Y * 1200, 0))
        //player.SetVelocity(distToBall * Vector(1200, 1200, 0))
        player.SetVelocity(new Vector(distToBall.X * 1200, distToBall.Y * 1200, 0))
    }
}

function center() {
    if (gameWrapper.IsInFreeplay()) {
        const tut = gameWrapper.GetGameEventAsServer()
        const player = tut.GetGameCar()
        const ball = tut.GetBall()

        const xStart = randint(0, 1) == 0 ? randint(500, 1200) : randint(-500, -1200)
        const ballSpawn = new Vector(xStart, randint(-1700, 1700), 95)
        const ballSpawnNorm = new Vector(ballSpawn.X, ballSpawn.Y, ballSpawn.Z)
        ballSpawnNorm.normalize()
        //carSpawn = ballSpawn - (ballSpawnNorm * Vector(500, 100, 0)) - Vector(0, min(xStart * 2, 2000), 65)
        const carSpawn = new Vector(ballSpawn.X - (ballSpawnNorm.X * 500), ballSpawn.Y - (ballSpawnNorm.Y * 100) - Math.min(xStart * 2, 2000), ballSpawn.Z - 65)

        //impact = ballSpawn - (ballSpawnNorm * Vector(500, 100, 0))
        const impact = new Vector(ballSpawn.X - (ballSpawnNorm.X * 500), ballSpawn.Y - (ballSpawnNorm.Y * 100), ballSpawn.Z)

        ball.Stop()
        player.Stop()
        ball.SetLocation(ballSpawn)
        player.SetLocation(carSpawn)

        //distToBall = (ballSpawn - impact)
        const distToBall = new Vector(ballSpawn.X - impact.X, ballSpawn.Y - impact.Y, ballSpawn.Z - impact.Z)
        distToBall.normalize()
        const carRot = BakkesMod.VectorToRotator(distToBall)
        player.SetRotation(carRot)
        //ball.SetVelocity(distToBall * Vector(randint(2000, 3000), 1200, 0))
        ball.SetVelocity(new Vector(distToBall.X * randint(2000, 3000), distToBall.Y * 1200, 0))
        //player.SetVelocity(distToBall * Vector(1200, 1200, 0))
        player.SetVelocity(new Vector(distToBall.X * 1200, distToBall.Y * 1200, 0))
    }
}

function dribble() {
    if (gameWrapper.IsInFreeplay()) {
        const tut = gameWrapper.GetGameEventAsServer()
        const player = tut.GetGameCar()
        const ball = tut.GetBall()

        // xStart = randint(-1500, 1500) if randint(0, 1) is 1 else -randint(500, 1200)
        const ballSpawn = new Vector(randint(-1500, 1500), randint(-1700, 1700), 95)
        const ballSpawnNorm = new Vector(ballSpawn.X, ballSpawn.Y, ballSpawn.Z)
        ballSpawnNorm.normalize()

        // ballSpawnNorm*Vector(randint(300, 800), randint(300, 800), 0)
        //carSpawn = ballSpawn - Vector(randint(300, 800), randint(300, 800), 65)
        const carSpawn = new Vector(ballSpawn.X - randint(300, 800), ballSpawn.Y - randint(300, 800), ballSpawn.Z - 65)

        ball.Stop()
        player.Stop()
        ball.SetLocation(ballSpawn)
        player.SetLocation(carSpawn)

        //distToBall = (ballSpawn - carSpawn)
        const distToBall = new Vector(ballSpawn.X - carSpawn.X, ballSpawn.Y - carSpawn.Y, ballSpawn.Z - carSpawn.Z)
        distToBall.normalize()
        const carRot = BakkesMod.VectorToRotator(distToBall)
        carRot.Yaw = carRot.Yaw + randint(-5000, 5000)

        player.SetRotation(carRot)

        const velocity = new Vector(randint(700, 1400), randint(700, 1400), 0)

        ball.SetVelocity(velocity)
        player.SetVelocity(velocity)
    }
}

function tick() {
    gameWrapper.HookEvent('Function GameEvent_Soccar_TA.Active.Tick', () => { cvarManager.log("tick") })
}

function wallreads() {
    ballVelocity = new Vector(0, 0, 0)
    const reverse = randint(0, 1) == 1
    if (gameWrapper.IsInFreeplay()) {
        const tut = gameWrapper.GetGameEventAsServer()
        const player = tut.GetGameCar()
        const ball = tut.GetBall()

        const ballStart = new Vector(randint(-3071, -843), randint(514, 3911), randint(100, 1700))

        const playerStart = new Vector(randint(-3300, -400), randint(-2800, -900), 25)
        const playerStartRot = new Rotator(0, randint(12760, 20760), 0)
        const playerStartVel = new Vector(0, randint(800, 2100), 0)

        if (reverse) {
            ballStart.X = -1 * ballStart.X
            playerStart.X = -1 * playerStartVel.X
        }

        player.Stop()
        player.SetLocation(playerStart)
        player.SetRotation(playerStartRot)
        player.SetVelocity(playerStartVel)
        ball.Stop()
        ball.SetLocation(ballStart)

        // playerStartRot.Yaw -= 32000
        // playerStartRot.Roll = 0

        const dest = new Vector(randint(-4071, -2200), randint(1381, 2502), randint(1250, 1616))
        if (reverse) {
            dest.X = -1 * dest.X
        }

        const ballVelocity = tut.GenerateShot(ballStart, dest, randint(1100, 1400))

        const shootBall = () => {
            ball.SetVelocity(ballVelocity)
            ball.SetAngularVelocity(new Vector(randint(-5000, 5000), randint(-5000, 5000), randint(-5000, 5000)), false)
        }

        gameWrapper.SetTimeout(shootBall, .3)
    }
}

exports.onLoad = function onLoad() {
    cvarManager.registerNotifier('js_airdribble', airdribble, 'description', BakkesMod.PERMISSION_FREEPLAY)
    cvarManager.registerNotifier('js_airdribble2', airdribble2, 'description', BakkesMod.PERMISSION_FREEPLAY)
    cvarManager.registerNotifier('js_backwall', backwall, 'description', BakkesMod.PERMISSION_FREEPLAY)
    cvarManager.registerNotifier('js_boom', boom, 'description', BakkesMod.PERMISSION_FREEPLAY)
    cvarManager.registerNotifier('js_catchies', catchies, 'description', BakkesMod.PERMISSION_FREEPLAY)
    cvarManager.registerNotifier('js_ceilingshot', ceilingshot, 'description', BakkesMod.PERMISSION_FREEPLAY)
    cvarManager.registerNotifier('js_ceilingshot2', ceilingshot2, 'description', BakkesMod.PERMISSION_FREEPLAY)
    cvarManager.registerNotifier('js_center', center, 'description', BakkesMod.PERMISSION_FREEPLAY)
    cvarManager.registerNotifier('js_dribble', dribble, 'description', BakkesMod.PERMISSION_FREEPLAY)
    cvarManager.registerNotifier('js_tick', tick, 'description', BakkesMod.PERMISSION_FREEPLAY)
    cvarManager.registerNotifier('js_wallreads', wallreads, 'description', BakkesMod.PERMISSION_FREEPLAY)
}

exports.onUnload = function onUnload() {
    cvarManager.removeNotifier('js_airdribble')
    cvarManager.removeNotifier('js_airdribble2')
    cvarManager.removeNotifier('js_backwall')
    cvarManager.removeNotifier('js_boom')
    cvarManager.removeNotifier('js_catchies')
    cvarManager.removeNotifier('js_ceilingshot')
    cvarManager.removeNotifier('js_ceilingshot2')
    cvarManager.removeNotifier('js_center')
    cvarManager.removeNotifier('js_dribble')
    cvarManager.removeNotifier('js_tick')
    gameWrapper.UnhookEvent('Function GameEvent_Soccar_TA.Active.Tick')
    cvarManager.removeNotifier('js_wallreads')
}
