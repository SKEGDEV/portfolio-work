

export default function Rotate(name){
		const element = document.getElementById(name);
		const height = element.clientHeight;
		const width = element.clientWidth;

		element.addEventListener('mousemove', (event)=>{
			const x_Coordinate = event.layerX;
			const y_Coordinate = event.layerY;

			const x_Rotation = -25 * ((y_Coordinate - height /2)/height);
			const y_Rotation = 25 * ((x_Coordinate - width /2)/width);

			const transform_string = 'perspective(500px) scale(1.1) rotateX('+x_Rotation+'deg) rotateY('+y_Rotation+'deg)'
			element.style.transform = transform_string;
		});

		element.addEventListener('mouseout', ()=>{
			element.style.transform = 'perspective(500px) scale(1) rotateX(0deg) rotateY(0deg)';
		});

		element.addEventListener('mousedown', ()=>{
			element.style.transform = 'perspective(500px) scale(0.9) rotateX(0deg) rotateY(0deg)';
		});

		element.addEventListener('mouseup', ()=>{
			element.style.transform = 'perspective(500px) scale(1.1) rotateX(0deg) rotateY(0deg)';
		});	
}
