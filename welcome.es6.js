'use strict';

/**
 * Created by PhpStorm.
 * Author:   ershov-ilya
 * GitHub:   https://github.com/ershov-ilya/
 * Website:  http://ershov.pw/ (RU/ENG)
 * Date: 30.01.2017
 * Time: 11:06
 */

export default function(message){
    console.log(`Welcome the ${message}`);

    console.log('Compile mode: '+ process.env.NODE_ENV);
};
