#!/usr/bin/env node

var exec = require('child_process').exec;
var fs = require('fs-extra');
var path = require('path');

var dir =  __dirname;
var root = path.dirname(dir);

if(true) {
    exec("curl -Lsfo build.sh http://cakebuild.net/download/bootstrapper/osx", function(err, stdout, stderr) {
        if(err) console.log(err);
    });

    exec("curl -Lsfo build.ps1 http://cakebuild.net/download/bootstrapper/windows", function(err, stdout, stderr) {
        if(err) console.log(err);
    });

    fs.copySync(path.resolve(root,'files/build.cmd'), 'build.cmd');
    fs.copySync(path.resolve(root,'files/build.cake'), 'build.cake');
}

