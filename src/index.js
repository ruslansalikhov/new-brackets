module.exports = function check(str, bracketsConfig) {
    let stack = [];

    let opened = [];
    let closed = {};

    bracketsConfig.forEach(v => {
        opened.push(v[0]);
        closed[v[1]] = v[0];
    });

    for (let i = 0; i < str.length; i++) {
        let bracket = str[i];

        if (opened.indexOf(bracket) >= 0) {
            // edge case
            if (closed.hasOwnProperty(bracket)
                && closed[bracket] === bracket
                && stack.slice(-1)[0] === bracket) {

                stack.pop();
                    
            } else {
                stack.push(bracket);
            }

        } else if (closed.hasOwnProperty(bracket)) {
            let check = stack.pop();
            if (check !== closed[bracket])
                return false;
        }
    }
    return stack.length === 0;
}
