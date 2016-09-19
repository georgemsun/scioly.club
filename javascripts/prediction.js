var html = function() {

	//array with events, then creates rows for each
	var events_b = ["Air Trajectory", "Anatomy and Physiology", "Bio-Process Lab", "Bottle Rocket", "Bridge Building", "Crave The Wave", "Crime Busters", "Disease Detectives", "Dynamic Planet", "Elastic Launched Glider", "Experimental Design", "Food Science", "Fossils", "Green Generation", "Invasive Species", "Meteorology", "Mission Possible", "Picture This", "Reach for the Stars", "Road Scholar", "Scrambler", "Wind Power", "Write It Do It"];
	for(var i = 0; i < events_b.length; i++) $('#division_b_event').append('<tr><td><label>' + events_b[i] + '</label></td><td><select id=\"' + i + '\"></select></td></tr>');
	var events_c = ["Air Trajectory", "Anatomy and Physiology", "Astronomy", "Bridge Building", "Cell Biology", "Chemistry Lab", "Disease Detectives", "Dynamic Planet", "Electric Vehicle", "Experimental Design", "Forensics", "Fossils", "Game On", "Geologic Mapping", "Green Generation", "Hydrogeology", "Invasive Species", "It's About Time", "Protein Modeling", "Robot Arm", "Wind Power", "Wright Stuff", "Write It Do It"];
	for(var i = 0; i < events_c.length; i++) $('#division_c_event').append('<tr><td><label>' + events_c[i] + '</label></td><td><select id=\"' + i + '\"></select></td></tr>');

	// array with places, then creates rows for each
	var places = ["First Place", "Second Place", "Third Place", "Fourth Place", "Fifth Place", "Sixth Place", "Seventh Place", "Eighth Place", "Ninth Place", "Tenth Place"];
	for(var i = 0; i < places.length; i++) $('#division_b_team, #division_c_team').append('<tr><td><label>' + places[i] + '</label></td><td><select id=\"' + i + '\"></select></td></tr>');

	// array with all schools, then loads them to dropdown
	var schools_b = ["AL - Auburn Junior High School", "AK - Teeland Middle School", "AZ - Paragon Science Academy", "AR - LISA Academy West Middle School", "CA - Winston Churchill Middle School", "CA - Muscatel Middle School", "CO - Preston Middle School", "CT - Lyme-Old Lyme Middle School", "DE - H.B. duPont Middle School", "FL - Archimedean Middle Conservatory", "FL - Galaxy Middle School", "GA - Dodgen Middle School", "GA - Fulton Science Academy", "HI - Highlands Intermediate School", "ID - St. Joseph's Catholic School", "IL - Daniel Wright Junior High School", "IL - Marie Murphy Middle School", "IN - Thomas Jefferson Middle School", "IA - Ames Middle School", "KS - California Trail Middle School", "KY - Russell Middle School", "LA - St. John Berchmans Catholic School", "ME - Waynflete School", "MD - North Bethesda Middle School", "MA - A.W. Coolidge Middle School", "MI - Meads Mill Middle School", "MI - Lakeshore Middle School", "MN - Chippewa Middle School (Minnesota)", "MS - Germantown Middle School", "MO - Ladue Middle School", "MO - Pembroke Hill Middle School", "MT - Corvallis Middle School", "NE - Bellevue Mission Middle School", "NV - Hyde Park Middle School", "NJ - West Windsor-Plainsboro Community Middle School", "NM - Albuquerque Area Home Schoolers", "NY - Paul J. Gelinas Junior High School", "NY - Eagle Hill Middle School", "NC - Piedmont IB Middle School", "NC - Fred J. Carnage Magnet Middle School", "ND - Wachter Middle School", "OH - Solon Middle School", "OH - Magsig Middle School", "OK - Casady School", "OR - Stoller Middle School", "PA - Springhouse Middle School", "PA - Bala Cynwyd Middle School", "RI - Barrington Middle School", "SC - Clinton Middle School", "SD - Yankton Middle School", "TN - Bearden Middle School", "TX - Beckendorff Junior High School", "TX - Austin Area Homeschoolers", "UT - Fairfield Junior High School", "VA - Longfellow Middle School", "WA - Northshore Junior High School", "WA - Frontier Middle School", "WV - Huntington Middle School", "WI - Hamilton Middle School", "WY - Riverton Middle School"];
	$('#division_b_event select, #division_b_team select').append('<option disabled selected value="0"></option>');
	for(var i = 0; i < schools_b.length; i++) $('#division_b_event select, #division_b_team select').append('<option value="' + (i + 1) + '">' + schools_b[i] + "</option>");
	var schools_c = ["AL - Auburn High School", "AK - Mat-Su Career and Technical High School", "AZ - Catalina Foothills High School", "AR - Little Rock Central High School", "CA - Mira Loma High School", "CA - Troy High School", "CO - Fossil Ridge High School", "CT - South Windsor High School", "DE - The Charter School of Wilmington", "FL - Boca Raton Community High School", "FL - Archimedean Upper Conservatory", "GA - Brookwood High School", "GA - Chattahoochee High School", "HI - Iolani School", "ID - Capital High School", "IL - Adlai E. Stevenson High School", "IL - New Trier High School", "IN - Carmel High School", "IA - Ames High School", "KS - Olathe North High School", "KY - Russell Independent High School", "LA - Baton Rouge Magnet High School", "ME - Waterville Senior High School", "MD - Centennial High School", "MA - Acton-Boxborough Regional High School", "MI - Northville High School", "MI - Troy High School", "MN - Mounds View High School", "MS - Oxford High School", "MO - Ladue Horton Watkins High School", "MO - Pembroke Hill High School", "MT - Hamilton High School", "NE - Lincoln Southwest High School", "NV - Ed W. Clark High School", "NH - Bedford High School", "NJ - West Windsor-Plainsboro High School North", "NM - Albuquerque Area Home Schoolers", "NY - Columbia High School", "NY - Ward Melville High School", "NC - William G. Enloe High School", "NC - Raleigh Charter High School", "ND - Bismarck High School", "OH - Solon High School", "OH - Centerville High School", "OK - Casady School", "OR - St. Mary's Academy", "PA - Harriton High School", "PA - Bayard Rustin High School", "RI - Barrington High School", "SC - Clinton High School", "SD - Yankton High School", "TN - Farragut High School", "TX - Liberal Arts and Science Academy", "TX - Seven Lakes High School", "UT - Maple Mountain High School", "VA - Langley High School", "WA - Bothell High School", "WV - Huntington High School", "WI - Menomonie High School", "WY - Campbell County High School"];
	$('#division_c_event select, #division_c_team select').append('<option disabled selected value="0"></option>');
	for(var i = 0; i < schools_c.length; i++) $('#division_c_event select, #division_c_team select').append('<option value="' + (i + 1) + '">' + schools_c[i] + "</option>");

	$('#division_b_event, #division_c_event, #division_b_team, #division_c_team').append('<h3 id="result"></h3>');

	$('#division_b_event').on('keyup click', function() {
		var complete_b_event = true;
		var errors_b_event = false;
		var result_b_event = "B";

		var count_b_event = [];
		for(var i = 0; i < schools_b.length; i++) count_b_event.push('0');

		for(var i = 0; i < events_b.length; i++) {
			$(this).find('#' + i).css('background', 'white');
			if($(this).find('#' + i).val() == 0) complete_b_event = false;
			if($(this).find('#' + i).val() < 10) result_b_event += "0" + $(this).find('#' + i).val();
			else result_b_event += $(this).find('#' + i).val();
			if($(this).find('#' + i).val() != 0) count_b_event[$(this).find('#' + i).val() - 1]++;
		}

		for(var i = 0; i < events_b.length; i++) {
			if(count_b_event[$(this).find('#' + i).val() - 1] > 3) {
				$(this).find('#' + i).css('background', '#ffcccc');
				errors_b_event = true;
			}
		}
		console.log(result_b_event);
		$(this).find('#result').html("");
		$('#result_b_event').html("");
		if(complete_b_event && !errors_b_event) $('#result_b_event').html(result_b_event);
		if(!complete_b_event) $(this).find('#result').append("Your form is incomplete</br>");
		if(errors_b_event) $(this).find('#result').append("Your form has errors");
	});

	$('#division_c_event').on('keyup click', function() {
		var complete_c_event = true;
		var errors_c_event = false;
		var result_c_event = "C";

		var count_c_event = [];
		for(var i = 0; i < schools_c.length; i++) count_c_event.push('0');

		for(var i = 0; i < events_c.length; i++) {
			$(this).find('#' + i).css('background', 'white');
			if($(this).find('#' + i).val() == 0) complete_c_event = false;
			if($(this).find('#' + i).val() < 10) result_c_event += "0" + $(this).find('#' + i).val();
			else result_c_event += $(this).find('#' + i).val();
			if($(this).find('#' + i).val() != 0) count_c_event[$(this).find('#' + i).val() - 1]++;
			console.log($(this).find('#' + i).val());
		}

		for(var i = 0; i < events_c.length; i++) {
			if(count_c_event[$(this).find('#' + i).val() - 1] > 3) {
				$(this).find('#' + i).css('background', '#ffcccc');
				errors_c_event = true;
			}
		}
		$(this).find('#result').html("");
		$('#result_c_event').html("");
		if(complete_c_event && !errors_c_event) $('#result_c_event').html(result_c_event);
		if(!complete_c_event) $(this).find('#result').append("Your form is incomplete</br>");
		if(errors_c_event) $(this).find('#result').append("Your form has errors");
	});

	$('#division_b_team').on('keyup click', function() {
		var complete_b_team = true;
		var errors_b_team = false;
		var result_b_team = "B";

		var count_b_team = [];
		for(var i = 0; i < schools_b.length; i++) count_b_team.push('0');

		for(var i = 0; i < places.length; i++) {
			$(this).find('#' + i).css('background', 'white');
			if($(this).find('#' + i).val() == 0) complete_b_team = false;
			if($(this).find('#' + i).val() < 10) result_b_team += "0" + $(this).find('#' + i).val();
			else result_b_team += $(this).find('#' + i).val();
			if($(this).find('#' + i).val() != 0) count_b_team[$(this).find('#' + i).val() - 1]++;
		}

		for(var i = 0; i < places.length; i++) {
			if(count_b_team[$(this).find('#' + i).val() - 1] > 1) {
				$(this).find('#' + i).css('background', '#ffcccc');
				errors_b_team = true;
			}
		}
		$(this).find('#result').html("");
		$('#result_b_team').html("");
		if(complete_b_team && !errors_b_team) $('#result_b_team').html(result_b_team);
		if(!complete_b_team) $(this).find('#result').append("Your form is incomplete</br>");
		if(errors_b_team) $(this).find('#result').append("Your form has errors");
	});

	$('#division_c_team').on('keyup click', function() {
		var complete_c_team = true;
		var errors_c_team = false;
		var result_c_team = "C";

		var count_c_team = [];
		for(var i = 0; i < schools_c.length; i++) count_c_team.push('0');

		for(var i = 0; i < places.length; i++) {
			$(this).find('#' + i).css('background', 'white');
			if($(this).find('#' + i).val() == 0) complete_c_team = false;
			if($(this).find('#' + i).val() < 10) result_c_team += "0" + $(this).find('#' + i).val();
			else result_c_team += $(this).find('#' + i).val();
			if($(this).find('#' + i).val() != 0) count_c_team[$(this).find('#' + i).val() - 1]++;
		}

		for(var i = 0; i < places.length; i++) {
			if(count_c_team[$(this).find('#' + i).val() - 1] > 1) {
				$(this).find('#' + i).css('background', '#ffcccc');
				errors_c_team = true;
			}
		}
		$(this).find('#result').html("");
		$('#result_c_team').html("");
		if(complete_c_team && !errors_c_team) $('#result_c_team').html(result_c_team);
		if(!complete_c_team) $(this).find('#result').append("Your form is incomplete</br>");
		if(errors_c_team) $(this).find('#result').append("Your form has errors");
	});

	var temp = [];
	for(var i = 0; i < schools_b.length; i++) temp.push('0');
	var submissions_b_event = [];
	for(var i = 0; i < events_b.length; i++) submissions_b_event.push(temp);

	var submissions = ["B2830460616550626261716425246434239523906301652"];
	for(var i = 0; i < submissions.length; i++) {
		console.log(submissions[i].substring(0, 1));
		for(var j = 1; j < submissions[i].length; j += 2) {
			submissions_b_event[(j - 1)/2][parseInt(submissions[i].substring(j, j + 2))] += 1;
			// console.log(submissions[i].substring(j, j + 2));
		}
	}
	for(var i = 0; i < 23; i++) {
		var submis = "";
		for(var j = 0; j < 60; j++) {
			submis += submissions_b_event[i][j] + ", ";
		}
		console.log(submis);
		console.log(" ");
	}
	// var predictions = [];
	// var usernames = [];

	// var submissions_overall = [][];

	// var results_prediction = [][];
	// var results_official = [][];
}
$(document).ready(html);