let numSquares=9;
let colors=generateRandomColors(numSquares);
let squares=document.querySelectorAll(".square");
let pickedColor=pickColor();
let colorsDisplay=document.querySelector("#colorDisplay");
let messageDisplay=document.querySelector("#message");
let h1=document.querySelector(".jumbotron");
let resetButton=document.querySelector("#reset");
let easyBtn=document.querySelector("#easy");
let medBtn=document.querySelector("#med");
let hardBtn=document.querySelector("#hard");

colorDisplay.textContent=pickedColor;
for(let i=0;i<squares.length;i++){
	squares[i].style.backgroundColor=colors[i];
	squares[i].addEventListener("click", function(){
		let clickedColor=this.style.backgroundColor;
		if(clickedColor===pickedColor)
		{
			messageDisplay.textContent="Correct!";
			changeColors(clickedColor);
			h1.style.backgroundColor=clickedColor;
			resetButton.textContent="Play Again?"
		}
		else
		{
			this.style.backgroundColor="#232323";
			messageDisplay.textContent="Try Again";
		}
	});
}
function changeColors(color){
	for(let i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=color;
	}
}

easyBtn.addEventListener("click",function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	medBtn.classList.remove("selected");
	messageDisplay.textContent="";
	numSquares=3;
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for (let i =0; i<squares.length;i++)
	{
		if(colors[i])
		{
			squares[i].style.backgroundColor=colors[i];
		}
		else
		{
			squares[i].style.display="none";
		}
	}
});
medBtn.addEventListener("click",function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.remove("selected");
	medBtn.classList.add("selected");
	messageDisplay.textContent="";
	numSquares=6;
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for (let i =0; i<squares.length;i++)
	{
		if(colors[i])
		{
			squares[i].style.backgroundColor=colors[i];
			squares[i].style.display="block";
		}
		else
		{
			squares[i].style.display="none";
		}
	}
});
hardBtn.addEventListener("click",function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	medBtn.classList.remove("selected");
	messageDisplay.textContent="";
	numSquares=9;
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for (let i =0; i<squares.length;i++)
	{
			squares[i].style.backgroundColor=colors[i];
			squares[i].style.display="block";
}});
resetButton.addEventListener("click",function(){
colors=generateRandomColors(numSquares);
pickedColor=pickColor();
colorsDisplay.textContent=pickedColor;
messageDisplay.textContent="";
resetButton.textContent="New Colors";
for (let i =0; i<squares.length;i++)
	{
			squares[i].style.backgroundColor=colors[i];
			}
			h1.style.backgroundColor="#4267b2";
});
function pickColor()
{
	let random=Math.floor(Math.random()*colors.length);
	return colors[random];
}
function generateRandomColors(num){
	let arr=[];
	for(let i=0;i<num;i++){
		arr.push(randomColor())
	}
return arr;
}
function randomColor()
{
	let r=Math.floor(Math.random()*256);
	let g=Math.floor(Math.random()*256);
	let b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}