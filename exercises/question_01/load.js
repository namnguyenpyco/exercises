const loadData = (text) => {
    let s = text.search('\n');
    let d, n, f, h, m, c, e;
    let object1 = {};
    let object2 = {};
    let result = [];
    if (s > -1) {
        d = text.split('\n');
        d.map(i => {
            n = i.search(';');
            if (n > -1) {
                f = i.split(';');
                f.map(s => {
                    h = s.search('=');
                    if (h > -1) {
                        m = s.split('=');
                        object1[m[0]] = m[1];
                    }
                });
                result.push(object1);
            } else {
                c = i.search('=');
                if (c > -1) {
                    e = i.split('=');
                    object2[e[0]] = e[1];
                    result.push(object2);
                }
            }
        });
    }
    return result;
}
export default loadData