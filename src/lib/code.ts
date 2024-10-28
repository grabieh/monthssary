const correctAnswer: string = 'januarypalangga kitaadobo'
const redirectUrl = '/gift'

export const readInput = (input: string) => {
    const inputs = document.querySelectorAll<HTMLInputElement>(input)

    const checkAnswer = () => {
        const userAnswer = Array.from(inputs).map(input => input.value.toLowerCase()).join('')
        if(userAnswer === correctAnswer) {
            window.location.href = redirectUrl
        } 
    }

    inputs.forEach((input, index) => {
        input.addEventListener('input', () => {
            if(input.value.length === input.maxLength) {
                const nextInput = inputs[index + 1]

                if (nextInput) {
                    nextInput.focus()
                }
            }
            checkAnswer()
        })
    })

}


export const getFirstAnswer = () => {
    const firstanswer: string = 'january'
    let code = firstanswer.split('').length
    return code.toString()
}

export const getSecondAnswer = () => {
    const secondanswer: string = 'palangga kita'
    let code = secondanswer.split('').length
    return code.toString()
}

export const getThirdAnswer = () => {
    const thirdanswer: string = 'adobo'
    let code = thirdanswer.split('').length
    return code.toString()
}


