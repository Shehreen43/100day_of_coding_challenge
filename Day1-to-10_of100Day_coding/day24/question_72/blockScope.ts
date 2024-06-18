//                         QUESTION: 72
/*
Block Scope with `let` and `const`: Demonstrate block scope by creating a code block with `` that uses both `let` and `const`.
 Show how variables declared inside the block are not accessible outside of it.
*/ 

function demonstrateConditionalBlockScope(condition: boolean): void {
    if (condition) {
        let conditionalLet = `Inside if block (let)`;
        const conditionalConst = `Inside if block (const)`;

        console.log(conditionalLet);   // Output: Inside if block (let)
        console.log(conditionalConst); // Output: Inside if block (const)
    }

    // Uncommenting the next lines will cause errors because `conditionalLet` and `conditionalConst` are not accessible outside the if block
    // console.log(conditionalLet);   // Error: Cannot find name 'conditionalLet'.
    // console.log(conditionalConst); // Error: Cannot find name 'conditionalConst'.
}

demonstrateConditionalBlockScope(true);
