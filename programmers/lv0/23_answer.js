function solution(ineq, eq, n, m) {
    if(ineq === "<"){
        if(eq === "="){
            return n <= m ? 1 : 0
        }
        return n < m ? 1 : 0
    }
    if(ineq === ">"){
        if(eq === "="){
            return n >= m ? 1 : 0
        }
        return n > m ? 1 : 0
    }
}

/*Alternative Solution

const operations = {
  '>=': (n, m) => n >= m,
  '<=': (n, m) => n <= m,
  '>!': (n, m) => n > m,
  '<!': (n, m) => n < m,
};

function solution(ineq, eq, n, m) {
  const op = operations[ineq + eq];
  return Number(op(n, m));
}

*/