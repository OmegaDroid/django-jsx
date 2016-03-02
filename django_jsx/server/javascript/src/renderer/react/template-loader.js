import React from "react";


const loader = {
    load(templatePath) {
        console.log(templatePath);
        const template = require(templatePath);
        return React.createFactory(template)
    }
};


export {loader};
