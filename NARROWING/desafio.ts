function userReview(review: boolean | number){

    if(typeof review === "number"){
        console.log(`Avaliação ${review} estrela(s)`)
    }else if(typeof review === "boolean"){
        console.log("Nenhuma avaliação foi realizada")
    }
}

userReview(5)
userReview(false)