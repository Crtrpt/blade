import './index.scss'


import m  from "mithril";

import route from './route';

export default class bladeui {
    constructor(config:any){
        var root=config.el;
        m.route(root,"/",route)
    }
}