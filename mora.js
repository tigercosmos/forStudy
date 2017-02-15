
function randN(N){
	return Math.floor(Math.random()*N);
}

class Map{
	constructor(){
		this.crowd=[];
		for(let i=0;i<20;i++)
			this.crowd.push(new People(i));
		this.square=[];
		this.done=0;
	}
	initiallize(){
		this.square=[];
		this.square=new Array(10);
		for(let i=0;i<10;i++)
			this.square[i]=new Array(10);
		for(let i=0;i<10;i++)
			for(let j=0;j<10;j++)
				this.square[i][j]=[];
	}
	move(){
		let move={
			"CUL" : [[0,1],[1,1],[1,0]],
			"CUR" : [[0,1],[-1,1],[-1,0]],
			"CDL" : [[0,-1],[1,-1],[1,-1]],
			"CDR" : [[0,-1],[-1,-1],[-1,0]],
			"CU" : [[0,1],[-1,0],[-1,1],[1,1],[1,0]],
			"CD" : [[0,-1],[-1,0],[-1,-1],[1,-1],[1,0]],
			"CL" : [[1,0],[1,1],[0,-1],[1,-1],[0,1]],
			"CR" : [[-1,0],[-1,-1],[-1,1],[0,1],[0,-1]],
			"C" : [[1,0],[1,1],[1,-1],[-1,0],[-1,1],[-1,-1],[0,1],[0,-1]],
		};
		for(let d in this.crowd){
			if( !this.crowd[d].lose ){
				let content="C";
				if(this.crowd[d].y==0)	content+="U";
				else if (this.crowd[d].y==9) content+="D";
				if(this.crowd[d].x==0)	content+="L";
				else if (this.crowd[d].x==9) content+="R";
				let t=randN(move[content].length);
				this.crowd[d].x+=move[content][t][0];
				this.crowd[d].y+=move[content][t][1];
				this.square[this.crowd[d].x][this.crowd[d].y].push(this.crowd[d].number);
			}
		}
	}
	aRound(){
		this.initiallize();
		this.move();
		for(let i=0;i<10;i++)
			for(let j=0;j<10;j++)
				if(this.square[i][j].length>1)
					this.square[i][j]=this.battle(this.square[i][j]);
		this.ifDone();
	}
	battle(line){
		for(let d in line)
			this.crowd[ line[d] ].meet+=line.length;
		let winner=0;
		for(let k in line){
			let p2=k;
			p2++;
			if( this.crowd[ line[k] ].game(this.crowd[ line[p2] ]) ){
				winner=k;
				this.crowd[line[k]].win++;
				this.crowd[line[p2]].lose=1;
			}else{
				winner=p2 ;
				this.crowd[line[p2]].win++;
				this.crowd[line[k]].lose=1;
			}
			if(p2==line.length-1) 
				break;
		}
		return winner;
	}
	ifDone(){
		let t=0;
		for(let i=0;i<20;i++)
			if(this.crowd[i].lose==0)
				t++;
		if(t==1)
			this.done=1;
	}
}
class People{
	constructor(n){
		this.number=n;
		this.lose=0;
		this.x=randN(10);
		this.y=randN(10);
		this.meet=0;
		this.win=0;
		this.tie=0;
	}
	mora(){
		return  ["st","pa","sc"][randN(3)];
	}
	game(B){ //return 1 if the caller win
		let content="";
		content+=this.mora()+B.mora();
		let result={
			"scst" : 0,
			"scpa" : 1,
			"scsc" : 2,
			"past" : 0,
			"papa" : 2,
			"pasc" : 1,
			"stst" : 2,
			"stpa" : 0,
			"stsc" : 1
		};
		if(result[content]==0){
			B.win++;
			return 0;
		}
		else if(result[content]==1){
			this.win++;
			return 1;
		}
		else 
			return this.game(B);
	}
}

function main(){
	let map=new Map;
	while( !map.done ){
		map.aRound();
	}
	return map;
}