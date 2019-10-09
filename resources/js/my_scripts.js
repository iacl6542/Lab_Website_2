
/*
	players is an array to hold each player's information.
	Fields:
		name - Football player's name
		img  - The relative/absolute path to the image file.
		alt  - The alternative text that describes the image.
		year - The student's year in college (Freshman, Sophomore, Junior, Senior).
		major- The student's current college major.
		games_played    - The number of football games the student has played for the Buffs.
		pass_yards      - The total number of passing yards in the student's football career for the Buffs.
		rushing_yards   - The total number of rushing yards in the student's football career for the Buffs.
		receiving_yards - The total number of receiving yards in the student's football career for the Buffs.
*/
var players = [{name:"John Doe", img: "../resources/img/player1.jpg", alt:"Image of Player 1", year:"Sophomore", major:"Art", games_played: 23, pass_yards: 435, rushing_yards: 200, receiving_yards: 88},
				{name:"James Smith", img: "../resources/img/player2.jpg", alt:"Image of Player 2", year:"Junior", major:"Science", games_played: 17, pass_yards: 192, rushing_yards: 102, receiving_yards: 344},
				{name:"Samuel Phillips", img: "../resources/img/player3.jpg", alt:"Image of Player 3", year:"Freshman", major:"Math", games_played: 8, pass_yards: 35, rushing_yards: 70, receiving_yards: 98},
				{name:"Robert Myers", img: "../resources/img/player4.jpg", alt:"Image of Player 4", year:"Senior", major:"Computer Science", games_played: 31, pass_yards: 802, rushing_yards: 375, receiving_yards: 128}];

/*<button class="btn btn-primary" onclick="increaseValue()">Increase</button>
<span id="updateNum">0</span>
<span id="changeNumberBounded">0</span>
*/

function viewStudentStats(id, toggle)
	{
		var htmlElement = document.getElementById(id);
		
		if (toggle==0)
		{
			htmlElement.style.height=0;
			htmlElement.style.visibility="hidden";

		}
		else if (toggle==1)
		{
			htmlElement.style.height="auto";
			htmlElement.style.visibility="visble";
		}

		// document.getElementById("barWidthExample").style.height= height.toString() + '%';

	}


function changeColor(color)
{


	document.body.style.backgroundColor =color ;
	//document.getElementById().style.color 
}



function loadStatsPage()
{

	//document.getElementById("practiceImg").onload = null;
	//for(counter = 0; counter < 10; counter++)
	//	{
	//		text = text + ' ' + counter.toString();
	//	}
		var wins=0;
		var losses=0;
		var table = document.getElementById("stats_table");//Retrieve our table element
		var row_counter;//Keeps track of our row index
		var col_counter;//Keeps track of our column index
		var cell_value;
		for(row_counter = 0; row_counter < table.rows.length; row_counter++)
		{//Outer for loop iterates over each row
			

			for(col_counter = 0; col_counter < table.rows[row_counter].cells.length; col_counter++)
			{
				cell_value = table.rows[row_counter].cells[col_counter].innerHTML;//Read in a cells current value
				//cell_value = parseInt(cell_value) + 2;//Increase the cell's value by 2
				//table.rows[row_counter].cells[col_counter].innerHTML="home";
				if(col_counter==1)
				{

					away_team=cell_value;
				}
				if (col_counter==2)
				{
					home=parseInt(cell_value);
					//table.rows[row_counter].cells[col_counter].innerHTML = "home";
					//table.rows[row_counter].cells[col_counter].innerHTML = 2*home;
				}
				else if(col_counter==3)
				{
					away=parseInt(cell_value);
				}
				if(col_counter==4)
				{
					if(home>away)
					{
						table.rows[row_counter].cells[col_counter].innerHTML = "Cu Boulder";//Update the actual html of the cell
						wins=wins+1;
					}
					else
					{
						table.rows[row_counter].cells[col_counter].innerHTML = away_team;
						losses=losses+1;

					}

				}
				


			}

		}
		document.getElementById("wins").innerHTML = wins;
		document.getElementById("losses").innerHTML = losses;


}

/*
	Football Season Stats Page:
		loadStatsPage method:
			parameters: none
			
			purpose: This method will iterate through the stats table and 
					 do the following:
						1. Read through each row of the table & determine which team won
						   the game.
						
						2. Update the winner column to the name of the winning team.
						
						3. Keep track of the number of wins/losses for the Buffs.
						
						4. Update the second table to show the total number of wins/losses for the Buffs.
*/
var count=0;
var x = document.createElement('a');

function loadPlayersPage()
{
	for(var i = 0; i < players.length; i++)
	{
		
		var a_man = document.createElement('a');
		a_man.href = "#";
		a_man.innerHTML = players[i].name;
		// a_man.index = i;
		a_man.onclick = function() {switchPlayers(count);};
		// a_man.onclick = 'switchPlayers(' + i + ')';
		a_man.className = "dropdown-item";
		document.getElementById("player_selector").appendChild(a_man);
		//i=i+1;

		//document.getElementById('player_selector')=a_man;
	} 
	




	/*
	players= [{player_name:'Steven Montez'},{player_name:'Laviska Shenault'},{player_name:'K.D. Nixon'}];

//document.getElementById('objectField1').innerHTML = fruit[fruit_index].fruit_name;
	//document.getElementById("player_selector").innerHTML = players[0].player_name;
	//document.getElementById("player_selector").innerHTML = players[1].player_name;
	//document.getElementById("player_selector").innerHTML = players[2].player_name;

	//players= ['Steven Montez\n','Laviska Shenault\n','K.D. Nixon\n'];
	//document.getElementById("player_selector").innerHTML = players;
	
		//document.getElementById('player_selector').innerHTML = players[1].player_name;
		//document.getElementById('objectField1').innerHTML = fruit[fruit_index].fruit_name;
	n=2;
	for(i=0; n>=i ;i++)
	{

		document.getElementById('player_selector').innerHTML = players[i].player_name;

	}

	var x = document.getElementById("myAnchor_name").href;
	x="#";

	count++;
	if (count==1)
	{
		object.onclick = switchPlayers(1){my_scripts};
		document.getElementById("player_selector").innerHTML = players[0].player_name;

		//document.html("#").innerHTML
	}
	else if (count==2)
	{
		object.onclick = switchPlayers(2){my_scripts};
		document.getElementById("player_selector").innerHTML = players[1].player_name;
		//document.html("#").innerHTML
	}
	else if (count==3)
	{
		object.onclick = switchPlayers(3){my_scripts};
		document.getElementById("player_selector").innerHTML = players[2].player_name;
		//document.html("#").innerHTML
	}

		//document.getElementById("player_selector").innerHTML = players[1].player_name;

	

	

	/*
	var fruit_index = 0;//Global variable!
	function loadObjectData(){
		fruit = [{fruit_name: 'apple', fruit_color:'red'},
				 {fruit_name: 'pumpkin', fruit_color:'orange'},
				 {fruit_name: 'blueberry', fruit_color:'blue'},
				 {fruit_name: 'grapes', fruit_color:'purple'}];

		document.getElementById('objectField1').innerHTML = fruit[fruit_index].fruit_name;
		document.getElementById('objectField2').innerHTML = fruit[fruit_index].fruit_color;
		fruit_index++;
		if(fruit_index >= fruit.length)//If we've gone too far, reset the index to 0.
		{
			fruit_index = 0;
		}
	}

	*/

	
}

var count=0;
function switchPlayers(playerNum)
{	
	console.log(count)


	//var a_man = document.createElement('a');
	//a_man.innerHTML = players[i].name;
	
	var year=players[count].year;
	document.getElementById("p_year").innerHTML = year;

	var major = players[count].major;
	document.getElementById("p_major").innerHTML = major;

	var games_played=players[count].games_played;
	document.getElementById("g_played").innerHTML = games_played;

	var img = players[count].img;
	document.getElementById("player_img").innerHTML = img;

	var pass_yards = players[count].pass_yards;
	document.getElementById("p_yards").innerHTML = pass_yards;

	var rushing_yards = players[count].rushing_yards;
	document.getElementById("r_yards").innerHTML = rushing_yards;

	var receiving_yards = players[count].receiving_yards;
	document.getElementById("rec_yards").innerHTML = receiving_yards;
	
	document.getElementById("player_img").alt = players[count].alt;
	document.getElementById("player_img").src = players[count].img;
	

	if (count < players.length-1)
	{
		count=1+count;
	}
	else
	{
		count=0;
	}

	










	//if(playerNum)

	console.log("called switchPlayers");

}

/*
	Football Player Information Page



		loadPlayersPage method:
			parameters: none
			
			purpose: This method will populate the dropdown menu to allow the 
					 user to select which player's information to view.
					 
					 To handle this, you will need to iterate through the players array
					 and do the following for each player:
						1. Create an anchor tag
						2. Set the href to "#", this will make sure the 
							anchor tag doesn't change pages
						3. Set the onclick to call switchPlayers method 
							(this will need to pass in the index inside the players array)
						4. Set the anchor tag's text to the player's name.
						
					After setting all of the anchor tags, update the innerHTML of the dropdown menu.
					As a note, the id for the dropdown menu is player_selector.
		
		switchPlayers(playerNum) method:
			parameters: 
				playerNum - The index of the football player in the players array.
			
			purpose:
				This method will update the the spans on the player's information pageX
				and calculate the average passing, rushing, and receiving yards.
				
				Span ids:
					p_year     - the player's year in college
					p_major    - the player's major in college
					g_played   - the number of games played for Buffs
					player_img - the player's photo (must set src and alt)
					p_yards    - the number of passing yards
					r_yards    - the number of rushing yards
					rec_yards  - the number of receiving yards
					
					Calculated values:
					  avg_p_yards   - the average number of passing yards for the player's Buff career
					  avg_r_yards   - the average number of rushing yards for the player's Buff career
					  avg_rec_yards - the average number of receiving yards for the player's Buff career
*/
				

