function writeMessage(message) {
    text.setText(message);
    layer.draw();
}
var text = new Konva.Text({
    x: 10,
    y: 10,
    fontFamily: 'Calibri',
    fontSize: 12,
    text: '',
    fill: 'black'
});
var stage = new Konva.Stage({
    container: 'container', // id of container <div>
    width: 336,
    height: 280
});
var is_click_botton = false;
// then create layer
var layer_bg = new Konva.Layer();
var layer = new Konva.Layer();

var img_bg = new Konva.Image({
    x: 0,
    y: 0,
    width: 336,
    height: 280,
});
layer_bg.add(img_bg);

var image_bg = new Image();
image_bg.onload = function() {
    img_bg.image(image_bg);
    layer_bg.draw();
};
image_bg.src = 'http://www.neumerlin.com/NIVEA/raw_file/NEVIA_20151117/336x280/img/bg.jpg';
cream_width = 260;
cream_height = 260;
var cream = new Konva.Image({
    x: 28,
    y: 13,
    opacity: 0,
    scaleX: 1,
    scaleY: 1,
    width: cream_width,
    height: cream_height,
});
layer.add(cream);

var image_cream = new Image();
image_cream.onload = function() {
    cream.image(image_cream);
    layer.draw();
};
image_cream.src = 'http://www.neumerlin.com/NIVEA/raw_file/NEVIA_20151117/336x280/img/cream.png';
//make_drag(cream);
var cream1 = new Konva.Image({
    x: 223,
    y: 183,
    opacity: 0,
    scaleX: 1,
    scaleY: 1,
});
layer.add(cream1);

var image_cream1 = new Image();
image_cream1.onload = function() {
    cream1.image(image_cream1);
    layer.draw();
};
image_cream1.src = 'http://www.neumerlin.com/NIVEA/raw_file/NEVIA_20151117/336x280/img/cream1.png';
//make_drag(cream1);

var cream2 = new Konva.Image({
    x: 228,
    y: 205,
    opacity: 0,
    scaleX: 1,
    scaleY: 1,
});
layer.add(cream2);

var image_cream2 = new Image();
image_cream2.onload = function() {
    cream2.image(image_cream2);
    layer.draw();
};
image_cream2.src = 'http://www.neumerlin.com/NIVEA/raw_file/NEVIA_20151117/336x280/img/cream2.png';
//make_drag(cream2);

var t1 = new Konva.Image({
    x: 66,
    y: 100,
    opacity: 0,
    scaleX: 1,
    scaleY: 1,
});
layer.add(t1);

var image_t1 = new Image();
image_t1.onload = function() {
    t1.image(image_t1);
    layer.draw();
};
image_t1.src = 'http://www.neumerlin.com/NIVEA/raw_file/NEVIA_20151117/336x280/img/t1.png';
//make_drag(t1);

var t2 = new Konva.Image({
    x: 75,
    y: 105,
    opacity: 0,
    scaleX: 1,
    scaleY: 1,
});
layer.add(t2);

var image_t2 = new Image();
image_t2.onload = function() {
    t2.image(image_t2);
    layer.draw();
};
image_t2.src = 'http://www.neumerlin.com/NIVEA/raw_file/NEVIA_20151117/336x280/img/t2.png';
//make_drag(t2);

var t3 = new Konva.Image({
    x: 95,
    y: 110,
    opacity: 0,
    scaleX: 1,
    scaleY: 1,
});
layer.add(t3);

var image_t3 = new Image();
image_t3.onload = function() {
    t3.image(image_t3);
    layer.draw();
};
image_t3.src = 'http://www.neumerlin.com/NIVEA/raw_file/NEVIA_20151117/336x280/img/t3.png';
//make_drag(t3);

var t4 = new Konva.Image({
    x: 75,
    y: 116,
    opacity: 0,
    scaleX: 1,
    scaleY: 1,
});
layer.add(t4);

var image_t4 = new Image();
image_t4.onload = function() {
    t4.image(image_t4);
    layer.draw();
};
image_t4.src = 'http://www.neumerlin.com/NIVEA/raw_file/NEVIA_20151117/336x280/img/t4.png';
//make_drag(t4);

var t5 = new Konva.Image({
    x: 60,
    y: 88,
    opacity: 0,
    scaleX: 1,
    scaleY: 1,
});
layer.add(t5);

var image_t5 = new Image();
image_t5.onload = function() {
    t5.image(image_t5);
    layer.draw();
};
image_t5.src = 'http://www.neumerlin.com/NIVEA/raw_file/NEVIA_20151117/336x280/img/t5.png';
//make_drag(t5);

var carlen = new Konva.Image({
    x: 88,
    y: 280,
    opacity: 0,
    scaleX: 1,
    scaleY: 1,
});
layer.add(carlen);

var image_carlen = new Image();
image_carlen.onload = function() {
    carlen.image(image_carlen);
    layer.draw();
};
image_carlen.src = 'http://www.neumerlin.com/NIVEA/raw_file/NEVIA_20151117/336x280/img/carlendar.png';
//make_drag(carlen);
var replay = new Konva.Image({
        x: 7,
        y: 280,
        opacity: 1,
        scaleX: 0.8,
        scaleY: 0.8,
        shadowOffsetX: 1,
        shadowOffsetY: 1,
    });
    layer.add(replay);    

    var replay_obj = new Image();
    replay_obj.onload = function() {
        replay.image(replay_obj);
        layer.draw();
    };
    replay_obj.src = 'http://www.neumerlin.com/NIVEA/raw_file/NEVIA_20151117/300x250/img/replay.png';

    replay.on('click', function() {
        is_click_botton=true;
      reset_all_ele();
    });
    replay.on('touchend', function() {
        is_click_botton=true;
      reset_all_ele();
    });
    replay.on('mouseover', function() {
      replay.setAttrs({opacity: 0.5});
      layer.draw();
    });
    replay.on('mouseout', function() {
      replay.setAttrs({opacity: 1});
      layer.draw();
    });
    //make_drag(replay);
var cream_anim = new Konva.Animation(function(frame) {
    var time = frame.time/1.5,
        timeDiff = frame.timeDiff,
        frameRate = frame.frameRate;
    c_w = time;
    c_x = 0;
    if (c_w < cream_width) {
        cream.crop({
            x: c_x,
            y: 0,
            width: c_w,
            height: cream_height,
        });
        cream.setAttrs({
            x: 28 + c_x,
            width: c_w,
            height: cream_height,
            opacity: 1,
        });
    } else {
        cream.crop({
            x: 0,
            y: 0,
            width: cream_width,
            height: cream_height,
        });
        cream.setAttrs({
            x: 28,
            width: cream_width,
            height: cream_height,
            opacity: 1,
        });
        setTimeout(function(){
            cream1.setAttrs({                
                opacity: 1,
            });
            layer.draw();
        },200)
        setTimeout(function(){
            cream2.setAttrs({                
                opacity: 1,
            });
            layer.draw();
        },400)
        cream_anim.stop();
        frame.time = 0;
    }
}, layer);

function reset_all_ele() {
    carlen.setAttrs({
        x: 88,
        y: 280,
        opacity: 0,
        scaleX: 1,
        scaleY: 1,
    });
    t5.setAttrs({
        x: 60,
        y: 88,
        opacity: 0,
        scaleX: 1,
        scaleY: 1,
    });
    t4.setAttrs({
        x: 75,
        y: 116,
        opacity: 0,
        scaleX: 1,
        scaleY: 1,
    });
    t3.setAttrs({
        x: 95,
        y: 110,
        opacity: 0,
        scaleX: 1,
        scaleY: 1,
    });
    t2.setAttrs({
        x: 75,
        y: 105,
        opacity: 0,
        scaleX: 1,
        scaleY: 1,
    });
    t1.setAttrs({
        x: 66,
        y: 100,
        opacity: 0,
        scaleX: 1,
        scaleY: 1,
    });
    cream.setAttrs({
        x: 28,
        y: 13,
        opacity: 0,
        scaleX: 1,
        scaleY: 1,
        width: cream_width,
        height: cream_height,
    });
    replay.setAttrs({
        x: 7,
        y: 280,
        opacity: 1,
        scaleX: 0.8,
        scaleY: 0.8,
        shadowOffsetX: 1,
        shadowOffsetY: 1,
    });
    reset_cream();
    layer.draw();
    setTimeout(start_pl, 500);
}





// add the layer to the stage var x = node.getAttr('x');
var img_logo = new Konva.Image({ // add logo last item for alway on top
    x: 11,
    y: 8,
});
layer.add(img_logo);

var image_logo = new Image();
image_logo.onload = function() {
    img_logo.image(image_logo);
    layer.draw();
};
image_logo.src = 'http://www.neumerlin.com/NIVEA/raw_file/NEVIA_20151117/336x280/img/logo.png';

stage.add(layer_bg);
stage.add(layer);
layer.add(text);


function make_drag(obj) {
    obj.draggable('true');

    obj.on('dragmove', function() {
        var x = obj.getAttr('x');
        var y = obj.getAttr('y');
        writeMessage('x: ' + x + ', y: ' + y);
    });
}

//animetion_region

function start_pl() {
    cream_anim.start();
    setTimeout(t1_in, 10);
}

function t1_in() {
    var t1_in = new Konva.Tween({
        node: t1,
        easing: Konva.Easings["Linear"],
        duration: 0.5,
        opacity: 1,
    });
    t1_in.play();
    setTimeout(function() {
        move_obj_left(t1);
    }, 3000);
    setTimeout(t2_cream_in, 4000);
}

function t2_cream_in() {
    cream_anim.start();
    setTimeout(t2_in, 10);
}

function t2_in() {
    var t2_in = new Konva.Tween({
        node: t2,
        easing: Konva.Easings["Linear"],
        duration: 0.5,
        opacity: 1,
    });
    t2_in.play();
    setTimeout(function() {
        move_obj_left(t2);
    }, 3000);
    setTimeout(t3_cream_in, 4000);
}

function t3_cream_in() {
    cream_anim.start();
    setTimeout(t3_in, 10);
}

function t3_in() {
    var t3_in = new Konva.Tween({
        node: t3,
        easing: Konva.Easings["Linear"],
        duration: 0.5,
        opacity: 1,
    });
    t3_in.play();
    setTimeout(function() {
        move_obj_left(t3);
    }, 3000);
    setTimeout(t4_cream_in, 4000);
}

function t4_cream_in() {
    cream_anim.start();
    setTimeout(t4_in, 10);
}

function t4_in() {
    var t4_in = new Konva.Tween({
        node: t4,
        easing: Konva.Easings["Linear"],
        duration: 0.5,
        opacity: 1,
    });
    t4_in.play();
    setTimeout(function() {
        move_obj_left(t4);
    }, 3000);
    setTimeout(t5_in, 4000);
}

function t5_in() {
    var t5_in = new Konva.Tween({
        node: t5,
        easing: Konva.Easings["Linear"],
        duration: 0.3,
        opacity: 1,
    });
    t5_in.play();
    setTimeout(carlen_in, 2000);
}

function carlen_in() {
    var carlen_in = new Konva.Tween({
        node: carlen,
        y: 168,
        easing: Konva.Easings["Linear"],
        duration: 0.4,
        opacity: 1,
    });
    carlen_in.play();
    setTimeout(replay_in, 2000);
}
function replay_in() {
    var replay_in = new Konva.Tween({
        node: replay,
        y: 261,
        easing: Konva.Easings["Linear"],
        duration: 0.4,
        opacity: 1,
    });
    replay_in.play();
    //setTimeout(reset_all_ele, 5000);
}




function move_obj_left(o_node) {
    var x = o_node.getAttr('x');
    var nodemove = new Konva.Tween({
        node: o_node,
        //x: x - 300,
        easing: Konva.Easings["Linear"],
        duration: 0.3,
        opacity: 0,
    });
    nodemove.play();
    var x1 = cream.getAttr('x');
    var cream_move = new Konva.Tween({
        node: cream,
        //x: x1 - 300,
        easing: Konva.Easings["Linear"],
        duration: 0.3,
        opacity: 0,
    });
    cream_move.play();
    var x2 = cream1.getAttr('x');
    var cream1_move = new Konva.Tween({
        node: cream1,
        //x: x2 - 300,
        easing: Konva.Easings["Linear"],
        duration: 0.3,
        opacity: 0,
    });
    cream1_move.play();

    var x3 = cream2.getAttr('x');
    var cream2_move = new Konva.Tween({
        node: cream2,
       //x: x3 - 300,
        easing: Konva.Easings["Linear"],
        duration: 0.3,
        opacity: 0,
    });
    cream2_move.play();
    setTimeout(reset_cream, 800);
}

function reset_cream() {
    cream.setAttrs({
        x: 28,
    y: 13,
    opacity: 0,
    scaleX: 1,
    scaleY: 1,
    width: cream_width,
    height: cream_height,
    });
    cream1.setAttrs({
        x: 223,
    y: 183,
    opacity: 0,
    scaleX: 1,
    scaleY: 1,
    });

    cream2.setAttrs({
        x: 228,
    y: 205,
    opacity: 0,
    scaleX: 1,
    scaleY: 1,
    });
}
