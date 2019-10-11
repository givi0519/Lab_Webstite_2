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
var players = [{name:'Steve', p_year:'Sophomore', p_major:'Theatre', g_played:'14', player_img:'../resources/img/sbeve.jpg', p_yards:'293', r_yards:'68', rec_yards:'0'},
					 {name:'Mark', p_year:'Junior', p_major:'Computer Science', g_played:'12', player_img:'../resources/img/zuck.jpg', p_yards:'0', r_yards:'12', rec_yards:'57'},
					 {name:'Kanye', p_year:'5th Year Senior', p_major:'Music', g_played:'1', player_img:'../resources/img/kanye.jpg', p_yards:'0', r_yards:'-42', rec_yards:'1'},
					 {name:'Roger', p_year:'Freshman', p_major:'Boxing', g_played:'12', player_img:'../resources/img/roger.jpg', p_yards:'420', r_yards:'100', rec_yards:'220'}];
/*
	Registration Page:
		viewStudentStats(id, toggle) method
			parameters:
				id - The css id of the html tag being updated.
				toggle -
					0 - hide the html tag
					1 - make the html tag visible

			purpose: This method will accept the id of an html tag and a toggle value.
					 The method will then set the html tag's css visibility and height.
					 To hide the html tag (toggle - 0), the visibility will be set to hidden and
					 the height will be set to 0.
					 To reveal the html tag (toggle - 1), the visibility will be set to visible and
					 the height will be set to auto.
*/
function viewStudentStats(id, toggle) {
	var element = document.getElementById(id);
	if (toggle == 1) {
		element.style.visibility = "visible";
		element.style.height = "auto";
	}
	else {
		element.style.visibility = "hidden";
		element.style.height = "0px";
	}
}
/*
	Home Page:
		changeColor(color) method
			parameter:
				color- A css color

			purpose: This method will set the html body's background color to the
					 provided parameter.
*/
function changeColor(color) {
	document.body.style.background = color;
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
function loadStatsPage(){
		var table = document.getElementById("stats_table");//Retrieve our table element
		var row_counter;//Keeps track of our row index
		var win_counter = 0;
		var loss_counter = 0;
		for (row_counter = 2; row_counter < table.rows.length; row_counter++) {
			if ((table.rows[row_counter].cells[2].innerHTML*1) > (table.rows[row_counter].cells[3].innerHTML*1)) {
				table.rows[row_counter].cells[4].innerHTML = 'University of Colorado Boulder';
				win_counter++;
			}
			else {
				table.rows[row_counter].cells[4].innerHTML = table.rows[row_counter].cells[1].innerHTML;
				loss_counter++;
			}
		}
		document.getElementById("wins").innerHTML = win_counter;
		document.getElementById("losses").innerHTML = loss_counter;
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
function loadPlayersPage() {
	var counter;
	var mydiv = document.getElementById('player_selector');
	for (counter = 0; counter < players.length; counter++) {
		var aTag = document.createElement('a');
		aTag.href = '#';
		aTag.text = players[counter].name;
		if (counter == 0) {
			aTag.onclick = function (){ switchPlayers(0);};
		}
		else if (counter == 1) {
			aTag.onclick = function (){ switchPlayers(1);};
		}
		else if (counter == 2) {
			aTag.onclick = function (){ switchPlayers(2);};
		}
		else if (counter ==3) {
			aTag.onclick = function (){ switchPlayers(3);};
		}
		mydiv.appendChild(aTag);
	}
}
function switchPlayers(playerNum) {
	document.getElementById('p_year').innerHTML = players[playerNum].p_year;
	document.getElementById('p_major').innerHTML = players[playerNum].p_major;
	document.getElementById('g_played').innerHTML = players[playerNum].g_played;
	document.getElementById('player_img').src = players[playerNum].player_img;
	document.getElementById('p_yards').innerHTML = players[playerNum].p_yards;
	document.getElementById('r_yards').innerHTML = players[playerNum].r_yards;
	document.getElementById('rec_yards').innerHTML = players[playerNum].rec_yards;
	document.getElementById('avg_p_yards').innerHTML = players[playerNum].p_yards/players[playerNum].g_played;
	document.getElementById('avg_r_yards').innerHTML = players[playerNum].r_yards/players[playerNum].g_played;
	document.getElementById('avg_rec_yards').innerHTML = players[playerNum].rec_yards/players[playerNum].g_played;

}
