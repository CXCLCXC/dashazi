let _2 = 0
motorbit.Servo(motorbit.Servos.S1, 0)
basic.forever(function () {
    _2 = wonderecho.readASRResultID()
    if (1 == _2) {
        motorbit.Servo(motorbit.Servos.S1, 90)
    } else {
        motorbit.Servo(motorbit.Servos.S1, 0)
    }
    basic.pause(5000)
})
