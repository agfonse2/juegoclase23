var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["c26b6449-0b6c-4483-8486-107c0091c26e","3221caad-ae37-4eec-92a8-56bae4769e66","1b25a798-a4da-4ebd-ade6-ecab3ae7ce2b","c439f43b-8144-4b6d-977c-697cc9183c45","c8388dc8-4912-4aed-98e7-e51edcaeaf12","a2406771-f911-4c14-af37-de5ab5ad6095","ac11d345-516d-4af5-9310-4173ef0b0706"],"propsByKey":{"c26b6449-0b6c-4483-8486-107c0091c26e":{"name":"hero1","sourceUrl":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png","frameSize":{"x":264,"y":368},"frameCount":1,"looping":true,"frameDelay":2,"version":"loycQXdICpzI4PfXITdIndG9GcVBmRdK","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":368},"rootRelativePath":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png"},"3221caad-ae37-4eec-92a8-56bae4769e66":{"name":"b","sourceUrl":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png"},"1b25a798-a4da-4ebd-ade6-ecab3ae7ce2b":{"name":"cocina","sourceUrl":"assets/v3/animations/JkvEQdEZ8eyAR6t-zeQGD_oJhJCq9tPnCSBXcL-n7jM/1b25a798-a4da-4ebd-ade6-ecab3ae7ce2b.png","frameSize":{"x":450,"y":450},"frameCount":1,"looping":true,"frameDelay":4,"version":"WvEFI2UvSx2KBiH9T1Rdv3ZzO29c8Evv","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":450,"y":450},"rootRelativePath":"assets/v3/animations/JkvEQdEZ8eyAR6t-zeQGD_oJhJCq9tPnCSBXcL-n7jM/1b25a798-a4da-4ebd-ade6-ecab3ae7ce2b.png"},"c439f43b-8144-4b6d-977c-697cc9183c45":{"name":"licuadora","sourceUrl":null,"frameSize":{"x":512,"y":512},"frameCount":1,"looping":true,"frameDelay":12,"version":"ClD7wCSU0fCy2KxbPheZFqSWz7xjJO.B","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":512},"rootRelativePath":"assets/c439f43b-8144-4b6d-977c-697cc9183c45.png"},"c8388dc8-4912-4aed-98e7-e51edcaeaf12":{"name":"fresa","sourceUrl":"assets/api/v1/animation-library/gamelab/OWEzOjQSJur1ARaC3r8BLdqVP.yAkpmT/category_food/strawberry.png","frameSize":{"x":333,"y":395},"frameCount":1,"looping":true,"frameDelay":2,"version":"OWEzOjQSJur1ARaC3r8BLdqVP.yAkpmT","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":333,"y":395},"rootRelativePath":"assets/api/v1/animation-library/gamelab/OWEzOjQSJur1ARaC3r8BLdqVP.yAkpmT/category_food/strawberry.png"},"a2406771-f911-4c14-af37-de5ab5ad6095":{"name":"gato","sourceUrl":"assets/v3/animations/JkvEQdEZ8eyAR6t-zeQGD_oJhJCq9tPnCSBXcL-n7jM/a2406771-f911-4c14-af37-de5ab5ad6095.png","frameSize":{"x":512,"y":512},"frameCount":1,"looping":true,"frameDelay":4,"version":"dFCC9Za95LxAOgG6zrMHPn2p7fr0Yzaw","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":512},"rootRelativePath":"assets/v3/animations/JkvEQdEZ8eyAR6t-zeQGD_oJhJCq9tPnCSBXcL-n7jM/a2406771-f911-4c14-af37-de5ab5ad6095.png"},"ac11d345-516d-4af5-9310-4173ef0b0706":{"name":"gatofresa","sourceUrl":null,"frameSize":{"x":980,"y":980},"frameCount":1,"looping":true,"frameDelay":12,"version":"kTwNawj5MQJXXdMGR08zy8W7FsjJPapU","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":980,"y":980},"rootRelativePath":"assets/ac11d345-516d-4af5-9310-4173ef0b0706.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var cocina = createSprite(200,200);
cocina.setAnimation("cocina");

var licuadora = createSprite(200,333);
licuadora.setAnimation("licuadora");
licuadora.scale=0.33;

var fresa = createSprite(200,20);
fresa.setAnimation("fresa");
fresa.scale = 0.085;

var gato = createSprite(24,101);
gato.setAnimation("gato");
gato.scale = 0.09;


var gato2 = createSprite(24,261);
gato2.setAnimation("gato");
gato2.scale = 0.09;

var gato3 = createSprite(350,190);
gato3.setAnimation("gato");
gato3.scale = 0.09;

var contador = createSprite(32,329);
contador.setAnimation("gatofresa");
contador.scale = 0.06;

var vida = 0;

gato.setVelocity(10,0);
gato2.setVelocity(10,0);
gato3.setVelocity(-10,0);

function draw(){
  createEdgeSprites();
  
  textSize(80);
  fill("marron");
  text(vida,200,200);
  
  
gato.bounceOff(edges);
gato2.bounceOff(edges);
gato3.bounceOff(edges);
  
  if(keyDown(DOWN_ARROW)){
    fresa.y = fresa.y+3;
  }
  
  if(keyDown(UP_ARROW)){
    fresa.y = fresa.y-3;
  }
  
  if(keyDown(LEFT_ARROW)){
    fresa.x = fresa.x-3;
  }
  
  if(keyDown(RIGHT_ARROW)){
    fresa.x = fresa.x+3;
  }
  /*
  if (fresa.isTouching(gato)|| fresa.isTouching(gato2) || fresa.isTouching(gato3) ){
    playSound("assets/category_animals/cat.mp3");
  fresa.x=200;
  fresa.y=20;
  vida = vida + 1;
  
  }
 
  if (fresa.isTouching(licuadora)){
    playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3");
  fresa.x=200;
  fresa.y=345;
  
  }
  

   */
  
  drawSprites();
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
