const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var crane, craneIMG, ball, ballhandle, ground;

var engine, world;

var box1, box2, box3, box4, box5, box6, box7, box8,
box9, box10, box11, box12, box13, box14, box15, box16;

function preload (){
    craneIMG = loadImage ("ingball.png");
}

function setup (){
    engine = Engine.create();
    world = engine.world;

    var canvas = createCanvas(800 ,800);

    crane= new Box (200, 50, 200, 400);
}

function draw(){
    Engine.update(engine);

    background("blue");

    image(craneIMG, 50, 350, 200, 400);

}