import { WINNER_COMBO } from "../constants"

export const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBO){
      const [a, b, c] = combo
      if(
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ){
        return boardToCheck[a]
      }
    }
    //Si no hay ganador
    return null
  }