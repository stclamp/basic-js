const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
    chain: [],
    getLength() {
        return this.chain.length
    },
    addLink(value) {
        if(this) {
            this.chain.push(`( ${value + ''} )`)

        }

        return this

    },
    removeLink(position) {


        if(position && position < this.chain.length && position > 0 && typeof position === 'number') {
            this.chain.splice(position - 1, 1)
            return this
        } else {
            this.chain = []

            throw new Error("You can't remove incorrect link!")
            return this

        }

    },
    reverseChain() {
        if(this) {
            this.chain.reverse()

        }
        return this

    },
    finishChain() {
        let result = this.chain.join('~~')
        this.chain = []
        return result
    }
};


module.exports = {
    chainMaker
};
