input.onButtonPressed(Button.A, function () {
    Miska.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    Miska.change(LedSpriteProperty.X, 1)
})
let Miska: game.LedSprite = null
basic.showString("First Level")
game.setScore(0)
Miska = game.createSprite(2, 4)
let Ovoce = game.createSprite(2, 0)
for (let index = 0; index < 10; index++) {
    Ovoce.set(LedSpriteProperty.Y, 0)
    Ovoce.set(LedSpriteProperty.X, randint(0, 4))
    for (let index = 0; index < 4; index++) {
        Ovoce.change(LedSpriteProperty.Y, 1)
        basic.pause(500)
    }
    if (Miska.isTouching(Ovoce)) {
        game.addScore(10)
    }
}
basic.showString("" + (game.score()))
game.gameOver()
basic.forever(function () {
	
})
