// // Once the DOM is fully loaded then do this
// $(function() {
// });


function load_repos_for(username) {
  $.get("https://api.github.com/users/"+username+"/repos", function(data) {
    $.each(data, function(indx, repo) {
      var last_updated_at = new Date( Date.parse(repo["updated_at"]) );
      var status = "active_repo";
      if(last_updated_at < Date.parse('2014-01-01') ) {
        status = "inactive_repo";
      }
      $("#repo_list").append("<tr><td>"+username+"</td><td class='" + status + "'>" +
        "<a href='#' class='repo_descr' original-title='"+repo["description"]+"'>" + repo["full_name"] + "</a>" +
       "</td></tr>");
    })
    $(".repo_descr").tipsy({"gravity" : "w"});
  });
}

function load_data() {
  $("#repo_list").html("");
  var username = $("#username").val();
  load_repos_for(username);
}

