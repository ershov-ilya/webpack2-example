'use strict';
/**
 * Created by PhpStorm.
 * Author:   ershov-ilya
 * GitHub:   https://github.com/ershov-ilya/
 * Website:  http://ershov.pw/ (RU/ENG)
 * Date: 30.01.2017
 * Time: 11:05
 */

let moduleName = location.pathname.slice(1); //   /about

let route = require('./routes/' + moduleName + '.js'); // Если в require есть переменная, будут собраны все файлы в папке
route();

