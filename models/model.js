let path = require('path')
let fs = require('fs')
let directoryPath = "C:\\Users\\car\\Desktop\\vthana project"
class Model{

    static getM(cb) {
        var files = [];
        var directories = [];
        fs.readdir(directoryPath, function (err, data) {
            if (!err) {
                data.forEach(function (el) {
                    try {
                        var stats = fs.statSync(path.join(directoryPath, el));
                        if (stats.isDirectory()) {
                            directories.push(el)
                        } else {
                            files.push(path.join(directoryPath, el))
                        }
                    } catch (e) {
                    }
                });
            }
            cb(directories,files)
        });
    }

    static getD(sdp,cb) {
        var files = [];
        var directories = [];
        var SdirectoryPath = path.join(directoryPath,sdp)
        fs.readdir(SdirectoryPath, function (err, data) {
            if (!err) {
                data.forEach(function (el) {
                    try {
                        var stats = fs.statSync(path.join(SdirectoryPath, el));
                        if (stats.isDirectory()) {
                            directories.push(el)
                        } else {
                            files.push(path.join(SdirectoryPath, el))
                        }
                    } catch (e) {
                    }
                });
            }
            cb(directories,files)
        });
    }
}
module.exports = Model
