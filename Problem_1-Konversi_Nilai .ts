function studentScore(score : number) : string {

    if (score >= 80 && score <= 100) {
        return "A"
    } else if(score >= 65 && score <= 79) {
        return "B+"
    } else if(score >= 50 && score <= 64) {
        return "B"
    } else if(score >= 35 && score <= 49) {
        return "C"
    } else if(score >= 0 && score <= 34) {
        return "D"
    }else {
        return "Invalid"
    }
    
    
}

console.log (studentScore(101))