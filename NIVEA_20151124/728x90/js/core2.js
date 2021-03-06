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
    width: 728,
    height: 90
});
var is_click_botton = false;
// then create layer
var layer_bg = new Konva.Layer();
var layer = new Konva.Layer();

var img_bg = new Konva.Image({
    x: 0,
    y: 0,
    width: 728,
    height: 90,
});
layer_bg.add(img_bg);

var image_bg = new Image();
image_bg.onload = function() {
    img_bg.image(image_bg);
    layer_bg.draw();
};
image_bg.src = './img/bg.jpg';


var product = new Konva.Image({
    x: 266,
    y: -5,
    opacity: 0,
    scaleX: 1,
    scaleY: 1,
});
layer.add(product);

var image_product = new Image();
image_product.onload = function() {
    product.image(image_product);
    layer.draw();
};
image_product.src = './img/p1.png';
//make_drag(product);

var bag = new Konva.Image({
    x: -100,
    y: -29,
    opacity: 0,
    scaleX: 1,
    scaleY: 1,
});
layer.add(bag);

var image_bag = new Image();
image_bag.onload = function() {
    bag.image(image_bag);
    layer.draw();
};
image_bag.src = './img/bag.png';
//make_drag(bag);

var t1 = new Konva.Image({
    x: 50,
    y: 28,
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
image_t1.src = './img/t1.png';
//make_drag(t1);

var t2 = new Konva.Image({
    x: 70,
    y: 25,
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
image_t2.src = './img/t2.png';
//make_drag(t2);

var t3 = new Konva.Image({
    x: 70,
    y: 20,
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
image_t3.src = './img/t3.png';
//make_drag(t3);

var t4 = new Konva.Image({
    x: 112,
    y: -48,
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
image_t4.src = './img/t4.png';
//make_drag(t4);

var replay = new Konva.Image({
    x: 665,
    y: 90,
    opacity: 0,
    scaleX: 1,
    scaleY: 1,
    shadowOffsetX: 1,
    shadowOffsetY: 1,
});
layer.add(replay);

var image_replay = new Image();
image_replay.onload = function() {
    replay.image(image_replay);
    layer.draw();
};
image_replay.src = './img/replay.png';
//make_drag(replay);
replay.on('click', function() {
    is_click_botton = true;
    reset_all_ele();
});
replay.on('touchend', function() {
    is_click_botton = true;
    reset_all_ele();
});
replay.on('mouseover', function() {
    replay.setAttrs({
        opacity: 0.5
    });
    layer.draw();
});
replay.on('mouseout', function() {
    replay.setAttrs({
        opacity: 1
    });
    layer.draw();
});

function reset_all_ele() {
    product.setAttrs({
        x: 266,
        y: -5,
        opacity: 0,
        scaleX: 1,
        scaleY: 1,
    });
    bag.setAttrs({
        x: -100,
        y: -29,
        opacity: 0,
        scaleX: 1,
        scaleY: 1,
    });
    t4.setAttrs({
        x: 112,
        y: -48,
        opacity: 0,
        scaleX: 1,
        scaleY: 1,
    });
    t3.setAttrs({
        x: 70,
        y: 20,
        opacity: 0,
        scaleX: 1,
        scaleY: 1,
    });
    t2.setAttrs({
        x: 70,
        y: 25,
        opacity: 0,
        scaleX: 1,
        scaleY: 1,
    });
    t1.setAttrs({
        x: 50,
        y: 28,
        opacity: 0,
        scaleX: 1,
        scaleY: 1,
    });
    replay.setAttrs({
        x: 665,
        y: 90,
        opacity: 0,
        scaleX: 1,
        scaleY: 1,
        shadowOffsetX: 1,
        shadowOffsetY: 1,
    });
    layer.draw();
    setTimeout(start_pl, 500);
}




// add the layer to the stage var x = node.getAttr('x');
var img_logo = new Konva.Image({ // add logo last item for alway on top
    x: 8,
    y: 21,
});
layer.add(img_logo);

var image_logo = new Image();
image_logo.onload = function() {
    img_logo.image(image_logo);
    layer.draw();
};
image_logo.src = './img/logo.png';

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
    var product_in = new Konva.Tween({
        node: product,
        easing: Konva.Easings["Linear"],
        duration: 0.5,
        opacity: 1,
    });
    product_in.play();
    setTimeout(product_minus, 1000);
}

function product_minus() {
    var product_in = new Konva.Tween({
        node: product,
        easing: Konva.Easings["Linear"],
        duration: 0.3,
        opacity: 1,
        x: 482,
        y: -5,
    });
    product_in.play();
    setTimeout(bag_in, 800);
}

function bag_in() {
    var bag_in = new Konva.Tween({
        node: bag,
        easing: Konva.Easings["Linear"],
        duration: 0.5,
        opacity: 1,
        x: 413,
    });
    bag_in.play();
    setTimeout(t1_in, 1000);
}

function t1_in() {
    var t1_in = new Konva.Tween({
        node: t1,
        easing: Konva.Easings["Linear"],
        duration: 0.3,
        opacity: 1,
        x: 90,
        y: 28,
    });
    t1_in.play();
    setTimeout(t1_out, 2500);
}

function t1_out() {
    var t1_in = new Konva.Tween({
        node: t1,
        easing: Konva.Easings["Linear"],
        duration: 0.3,
        opacity: 0,
        x: 50,
        y: 28,
    });
    t1_in.play();
    setTimeout(t2_in, 1000);
}

function t2_in() {
    var t2_in = new Konva.Tween({
        node: t2,
        easing: Konva.Easings["Linear"],
        duration: 0.3,
        opacity: 1,
        x: 120,
        y: 25,
    });
    t2_in.play();
    setTimeout(t2_out, 2500);
}

function t2_out() {
    var t2_in = new Konva.Tween({
        node: t2,
        easing: Konva.Easings["Linear"],
        duration: 0.3,
        opacity: 0,
        x: 70,
        y: 25,
    });
    t2_in.play();
    setTimeout(t3_in, 1000);
}

function t3_in() {
    var t3_in = new Konva.Tween({
        node: t3,
        easing: Konva.Easings["Linear"],
        duration: 0.3,
        opacity: 1,
        x: 100,
        y: 20,
    });
    t3_in.play();
    setTimeout(t3_out, 2500);
}

function t3_out() {
    var t3_in = new Konva.Tween({
        node: t3,
        easing: Konva.Easings["Linear"],
        duration: 0.3,
        opacity: 0,
        x: 70,
        y: 20,
    });
    t3_in.play();
    setTimeout(t4_in, 1000);
}

function t4_in() {
    var t4_in = new Konva.Tween({
        node: t4,
        easing: Konva.Easings["Linear"],
        duration: 0.3,
        opacity: 1,
        x: 152,
        y: -48,
    });
    t4_in.play();
    setTimeout(replay_in, 2000);
}


function replay_in() {
    var replay_in = new Konva.Tween({
        node: replay,
        y: 70,
        easing: Konva.Easings["Linear"],
        duration: 0.4,
        opacity: 1,
    });
    replay_in.play();
    //setTimeout(reset_all_ele, 5000);
}
