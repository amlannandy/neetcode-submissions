class MinStack {
    constructor() {
        this.stack = new Array();
        this.min = new Array();
        this.curr = -1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.curr += 1;
        this.stack.push(val);
        if (this.curr === 0)
            this.min.push(val);
        else
            this.min.push(Math.min(val, this.min.at(-1)));
    }

    /**
     * @return {void}
     */
    pop() {
        if (this.curr === -1) {
            return;
        }
        this.curr -= 1;
        this.stack.pop();
        this.min.pop();
    }

    /**
     * @return {number}
     */
    top() {
        if (this.curr === -1) {
            return null;
        }
        return this.stack.at(-1);
    }

    /**
     * @return {number}
     */
    getMin() {
        if (this.curr === -1) {
            return null;
        }
        return this.min.at(-1);
    }
}
