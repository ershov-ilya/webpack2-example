'use strict';
/**
 * Created by PhpStorm.
 * Author:   ershov-ilya
 * GitHub:   https://github.com/ershov-ilya/
 * Website:  http://ershov.pw/ (RU/ENG)
 * Date: 30.01.2017
 * Time: 11:05
 */

document.getElementById('loginButton').onclick=function(){
    require.ensure([], function(require){
         let login = require('./login');

         login();
    }, 'auth');
}

document.getElementById('logoutButton').onclick=function(){
    require.ensure([], function(require){
         let logout = require('./logout');

         logout();
    }, 'auth');
}
