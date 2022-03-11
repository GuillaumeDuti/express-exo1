const fs = require('fs');
const { resolve } = require('path');
const path = require('path');

const jsonCompute = (link) => {
    const pathName = path.resolve(process.cwd(), "data", link);

    return new Promise((resolve, reject) => {

        fs.readFile(pathName, (error, data) => {
            if (error) {
                return reject();
            }

            try {
                const dataJson = JSON.parse(data);
                resolve(dataJson);
            } catch (error) {
                console.log(error);
                reject();
            }
        });
    });
};

module.exports = jsonCompute;