// a./b./c. Implemente a função

enum LOCATION {
    EUA = "EUA",
    BRAZIL = "BRAZIL",
  }
  
enum NACIONALITY {
    BRAZILIAN = "BRAZILIAN",
    AMERICAN = "AMERICAN",}
  
interface User {
    name: string;
    age: number;
    nacionality: NACIONALITY;
}
  
interface Casino {
    name: string;
    location: LOCATION;
}

interface Result {
    brazilians: ResultItem;
    americans: ResultItem;
}
  
interface ResultItem {
    allowed: string[];
    unallowed: string[];
}

function verifyAge(casino: Casino, users: User[]): Result {
    const allowed: User[] = []
    const unallowed: User[] = []

    for(const user of users) {
        if (user.age >= 21) {
            if (casino.location === LOCATION.EUA){
            allowed.push(user)
            } else {
                unallowed.push(user)
            }
        } else if (user.age >= 18) {
            if (casino.location === LOCATION.BRAZIL){
            allowed.push(user)
            } else {
                unallowed.push(user)
            }

           break
        }
    }

      







