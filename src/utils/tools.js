// returns abbreviation of any given name
const abbreviateName = (name) => {
    const names = name.split(' ')
    const firstLetter = names[0][0]

    if (names.length <= 1) {
        return firstLetter
    }else{
        const lastLetter = names[1][0]

        return firstLetter + lastLetter
    }
    
}

export { abbreviateName };