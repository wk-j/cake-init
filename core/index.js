#!/usr/bin/env node

var exec = require('child_process').exec;
var fs = require("fs");

exec("curl -Lsfo build.sh http://cakebuild.net/download/bootstrapper/osx", function(err, stdout, stderr) {
    if(err) console.log(err);
});

exec("curl -Lsfo build.ps1 http://cakebuild.net/download/bootstrapper/windows", function(err, stdout, stderr) {
    if(err) console.log(err);
});

fs.writeFile("build.cmd", "powershell -File build.ps1 %*", function(err) {
    if(err) console.log(err);
})

fs.writeFile("build.cake", 'var target = Argument("Default", "target");', function(err) {
    if(err) console.log(err);
});

