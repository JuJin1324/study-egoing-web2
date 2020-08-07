cmd = require('node-cmd');

let createBranch = (branchName) => {
    cmd.get(`git branch ${branchName}`);
};

let createDevBranch = () => {
    createBranch('develop');
}

let createChapterBranches = (chapterCount) => {
    for (let i = 1; i <= chapterCount; i++) {
        createBranch(`feature/chapter${i}`);
    }
};

let initGitBranches = () => {
    createDevBranch();
    createChapterBranches(48);
};

let main = () => {
    initGitBranches();
}

if (require.main === module) {
    main();
}
