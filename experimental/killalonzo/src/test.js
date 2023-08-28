
//game logic
const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.05, 1000 );
			const renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			renderer.setClearColor(0x00C9FF)
			document.body.appendChild( renderer.domElement );
			
			//dont touch these 4
			var hits = 0
			var misses = 0
			var size = 0.5
			var sens = 250 //aim sensitivity, changed with + or - keys

      //color customization
      var wallColor = 0x242526;
      var floorColor = 0xffffff;
      var cubeColor = 0x00ff00;

	//interval at which alonzo moves randomly in ms
	  var randomMovementInterval = 5000;
	  
	var src = "https://static.miraheze.org/snapwikiwiki/6/6e/Alonzo.png"
	var image = new Image();
	image.src = src;
	cube_texture = new THREE.Texture();
  cube_texture.image = image;
  image.onload = function() {
    cube_texture.needsUpdate = true;
  };
     
			const geometry = new THREE.BoxGeometry();
			const material = new THREE.MeshBasicMaterial({map: cube_texture, overdraw: true});
			const cube = new THREE.Mesh( geometry, material );
			cube.health = 1
			cube.name = 'alonzo'
			cube.position.x = Math.floor(Math.random() * 9.5 - 4.5)
			cube.position.z = Math.floor(Math.random() * 9.5 - 4.5)
			cube.scale.set(0.25, 0.25, 0.25);
			scene.add(cube);

			Math.degToRad = function(deg){return deg * (Math.PI/180)}

			const floor = new THREE.Mesh(new THREE.PlaneGeometry(), new THREE.MeshLambertMaterial( { color: floorColor }))
			floor.name = 'Floor'
			floor.rotation.x = Math.degToRad(-90)
			floor.position.y = -0.5
			floor.scale.x = 10
			floor.scale.y = 10
			scene.add(floor)

			var walls = {}

			walls.north = new THREE.Mesh(new THREE.PlaneGeometry(), new THREE.MeshLambertMaterial( { color: wallColor }))
			walls.north.name = 'Wall North'
			walls.north.rotation.z = Math.degToRad(-90)
			walls.north.position.z = -5
			walls.north.scale.x = 10
			walls.north.scale.y = 10
			scene.add(walls.north)

			walls.east = new THREE.Mesh(new THREE.PlaneGeometry(), new THREE.MeshLambertMaterial( { color: wallColor }))
			walls.east.name = 'Wall East'
			walls.east.rotation.z = Math.degToRad(-90)
			walls.east.rotation.y = Math.degToRad(-90)
			walls.east.position.x = 5
			walls.east.scale.x = 10
			walls.east.scale.y = 10
			scene.add(walls.east)

			walls.west = new THREE.Mesh(new THREE.PlaneGeometry(), new THREE.MeshLambertMaterial( { color: wallColor }))
			walls.west.name = 'Wall West'
			walls.west.rotation.z = Math.degToRad(90)
			walls.west.rotation.y = Math.degToRad(90)
			walls.west.position.x = -5
			walls.west.scale.x = 10
			walls.west.scale.y = 10
			scene.add(walls.west)

			walls.south = new THREE.Mesh(new THREE.PlaneGeometry(), new THREE.MeshLambertMaterial( { color: wallColor }))
			walls.south.name = 'Wall South'
			walls.south.rotation.z = Math.degToRad(-90)
			walls.south.rotation.y = Math.degToRad(180)
			walls.south.position.z = 5
			walls.south.scale.x = 10
			walls.south.scale.y = 10
			scene.add(walls.south)

			const light = new THREE.HemisphereLight( 0xffffff, 0x242526, 1 );
						light.position.set(0, 10, 0)
			light.castShadows = true
      scene.add(light);
	  const light2 = new THREE.PointLight( 0xffffff, 3, 100 );
      light2.position.set(10, 10, 0);
      light2.castShadows = true;
      scene.add(light2);

			const player = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({color:0xff0000}))
			scene.add(player)

			const raycaster = new THREE.Raycaster();
			const mouse = new THREE.Vector2();

			const ui = document.getElementById('ui')
			ui.width = window.innerWidth
			ui.height = window.innerHeight
			const ctx = ui.getContext('2d')

			const scope = document.getElementById('scope');
			scope.width = window.innerWidth;
			scope.height = window.innerHeight;
			const scopectx = scope.getContext('2d');

			scopectx.fillStyle = "black";
scopectx.fillRect(0, 0, scope.width, scope.height);

const centerX = scope.width / 2;
const centerY = scope.height / 2;
const radius = Math.min(scope.width, scope.height) / 2.5;

scopectx.globalCompositeOperation = "destination-out";
scopectx.beginPath();
scopectx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
scopectx.fill();
scopectx.globalCompositeOperation = "source-over"; 
// scoped crosshair
scopectx.strokeStyle = "black";
scopectx.beginPath();
scopectx.moveTo(centerX, 0);
scopectx.lineTo(centerX, scope.height);
scopectx.stroke();

scopectx.beginPath();
scopectx.moveTo(0, centerY);
scopectx.lineTo(scope.width, centerY);
scopectx.stroke();
			var keys = {}

			window.onresize = function(){
				renderer.setSize(window.innerWidth, window.innerHeight);
				ui.width = window.innerWidth
				ui.height = window.innerHeight
			}

			function animate() {
				requestAnimationFrame( animate );
				renderer.render( scene, camera );
				player.position.set(camera.position)
				cube.scale.set(size, size, size)
				if(keys.w){
					camera.translateZ(-0.05)
					if(camera.position.z <= -4.5 || camera.position.z >= 4.5 || camera.position.x >= 4.5 || camera.position.x <= -4.5){
						camera.translateZ(0.05)
					}
				}
				if(keys.s){
					camera.translateZ(0.05)
					if(camera.position.z <= -4.5 || camera.position.z >= 4.5 || camera.position.x >= 4.5 || camera.position.x <= -4.5){
						camera.translateZ(-0.05)
					}
				}
				if(keys.a){
					camera.translateX(-0.05)
					if(camera.position.z <= -4.5 || camera.position.z >= 4.5 || camera.position.x >= 4.5 || camera.position.x <= -4.5){
						camera.translateX(0.05)
					}
				}
				if(keys.d){
					camera.translateX(0.05)
					if(camera.position.z <= -4.5 || camera.position.z >= 4.5 || camera.position.x >= 4.5 || camera.position.x <= -4.5){
						camera.translateX(-0.05)
					}
				}
			//ui draw functions
            ctx.clearRect(0,0,ui.width,ui.height)
            ctx.fillStyle = 'black'
            ctx.strokeStyle = 'black'
            ctx.fillRect((ui.width/2)-2.5,ui.height/2-2.5,5,5)
            ctx.strokeRect((ui.width/2)-2.5,ui.height/2-2.5,5,5)
            ctx.font = '25px Arial'
            var txt = `Sensitivity: ${sens}\nHits: ${hits}\nMisses: ${misses}\n\nMove: WASD\nShoot: LClick\nScope: RClick`;
            var x = 10;
            var y = 75;
            var lineheight = 25;
            var lines = txt.split('\n');
            for (var i = 0; i<lines.length; i++)
               ctx.fillText(lines[i], x, y + (i*lineheight) );	
				
				
			}
			animate();
			window.onkeydown = function(e){
				keys[e.key] = true
				if(e.key == '=' || e.key == '+'){
					sens -= 10;
				}
				if(e.key == '-'){
					sens += 10;
				}
			}
			window.onkeyup = function(e){
				keys[e.key] = false
			}
			document.oncontextmenu = function(){
				return false
			}
			document.onmousedown = function(e) {
				if (e.button === 0) { // Left click
					document.body.requestPointerLock();
					// shitty faux recoil
					let gun = document.getElementById('gun');
					gun.style.scale = '1.57';
					gun.style.transform = "rotate(3deg)";
			
					setTimeout(function() {
						gun.style.scale = "1.5";
						gun.style.transform = "rotate(-3deg)";
					}, 100);
			
					raycaster.setFromCamera(new THREE.Vector2(0, 0), camera);
					const intersects = raycaster.intersectObjects(scene.children);
					if (intersects.length > 0) {
						if (intersects[0].object.name == 'Floor' || intersects[0].object.name.startsWith('Wall')) {
							misses++;
							return;
						}
						var color_save = JSON.parse(JSON.stringify(intersects[0].object.material.color));
						hits++;
						intersects[0].object.material.color.set(0xff0000);
						intersects[0].object.health -= 20;
						if (intersects[0].object.health <= 0) {
							cube.position.x = Math.floor(Math.random() * 9.5 - 4.5);
							cube.position.z = Math.floor(Math.random() * 9.5 - 4.5);
							intersects[0].object.health = 1;
						}
						setTimeout(function() {
							intersects[0].object.material.color.set(color_save);
						}, 100);
					}
				} else if (e.button === 2) { // Right click
					scope.classList.remove('hidden');
					gun.classList.add('hidden');
				}
			};
			
			document.onmouseup = function(e) {
				if (e.button === 2) { // Right click release
					scope.classList.add('hidden');
					gun.classList.remove('hidden')
				}
			};
			
			
			document.onmousemove = function(e){
				//camera.rotation.x -= e.movementY / sens
				camera.rotation.y -= e.movementX / sens
			}
            			//random movement
function setRandomCubePos() {
	cube.position.x = Math.floor(Math.random() * 9.5 - 4.5)
	cube.position.z = Math.floor(Math.random() * 9.5 - 4.5)
}
setInterval(setRandomCubePos, randomMovementInterval)
//pointer logic


THREE.PointerLockControls = function ( camera, domElement ) {

	if ( domElement === undefined ) {

		console.warn( 'THREE.PointerLockControls: The second parameter "domElement" is now mandatory.' );
		domElement = document.body;

	}

	this.domElement = domElement;
	this.isLocked = false;

	// Set to constrain the pitch of the camera
	// Range is 0 to Math.PI radians
	this.minPolarAngle = 0; // radians
	this.maxPolarAngle = Math.PI; // radians

	//
	// internals aka complicated shit i pasted and dont understand but it works
	// DONT TOUCH OR EVERYTHING WILL BREAK AAAAAAAA

	var scope = this;

	var changeEvent = { type: 'change' };
	var lockEvent = { type: 'lock' };
	var unlockEvent = { type: 'unlock' };

	var euler = new THREE.Euler( 0, 0, 0, 'YXZ' ); //aint no way this is pronounced oiler

	var PI_2 = Math.PI / 2;

	var vec = new THREE.Vector3();

	function onMouseMove( event ) {

		if ( scope.isLocked === false ) return;

		var movementX = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
		var movementY = event.movementY || event.mozMovementY || event.webkitMovementY || 0;

		euler.setFromQuaternion( camera.quaternion );

		euler.y -= movementX * 0.002;
		euler.x -= movementY * 0.002;

		euler.x = Math.max( PI_2 - scope.maxPolarAngle, Math.min( PI_2 - scope.minPolarAngle, euler.x ) );

		camera.quaternion.setFromEuler( euler );

		scope.dispatchEvent( changeEvent );

	}

	function onPointerlockChange() {

		if ( scope.domElement.ownerDocument.pointerLockElement === scope.domElement ) {

			scope.dispatchEvent( lockEvent );

			scope.isLocked = true;

		} else {

			scope.dispatchEvent( unlockEvent );

			scope.isLocked = false;

		}

	}

	function onPointerlockError() {

		console.error( 'THREE.PointerLockControls: Unable to use Pointer Lock API' );

	}

	this.connect = function () {

		scope.domElement.ownerDocument.addEventListener( 'mousemove', onMouseMove, false );
		scope.domElement.ownerDocument.addEventListener( 'pointerlockchange', onPointerlockChange, false );
		scope.domElement.ownerDocument.addEventListener( 'pointerlockerror', onPointerlockError, false );

	};

	this.disconnect = function () {

		scope.domElement.ownerDocument.removeEventListener( 'mousemove', onMouseMove, false );
		scope.domElement.ownerDocument.removeEventListener( 'pointerlockchange', onPointerlockChange, false );
		scope.domElement.ownerDocument.removeEventListener( 'pointerlockerror', onPointerlockError, false );

	};

	this.dispose = function () {

		this.disconnect();

	};

	this.getObject = function () { // retaining this method for backward compatibility

		return camera;

	};

	this.getDirection = function () {

		var direction = new THREE.Vector3( 0, 0, - 1 );

		return function ( v ) {

			return v.copy( direction ).applyQuaternion( camera.quaternion );

		};

	}();

	this.moveForward = function ( distance ) {

		// move forward parallel to the xz-plane
		// assumes camera.up is y-up

		vec.setFromMatrixColumn( camera.matrix, 0 );

		vec.crossVectors( camera.up, vec );

		camera.position.addScaledVector( vec, distance );

	};

	this.moveRight = function ( distance ) {

		vec.setFromMatrixColumn( camera.matrix, 0 );

		camera.position.addScaledVector( vec, distance );

	};

	this.lock = function () {

		this.domElement.requestPointerLock();

	};

	this.unlock = function () {

		scope.domElement.ownerDocument.exitPointerLock();

	};

	this.connect();

};

THREE.PointerLockControls.prototype = Object.create( THREE.EventDispatcher.prototype );
THREE.PointerLockControls.prototype.constructor = THREE.PointerLockControls;
