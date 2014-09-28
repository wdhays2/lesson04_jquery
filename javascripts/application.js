// Once the DOM is fully loaded then do this
$(function() {
  load_repos_for_weshays();
});


function load_repos_for_weshays() {
  $.get("https://api.github.com/users/weshays/repos", function(data) {
    $.each(data, function(indx, repo) {
      var last_updated_at = new Date( Date.parse(repo["updated_at"]) );
      var status = "active_repo";
      if(last_updated_at < Date.parse('2014-01-01') ) {
        status = "inactive_repo";
      }
      $("#repos").append("<tr><td>weshays</td><td class='"+ status +"'>"+repo["full_name"]+"</td></tr>");
    })
  });
}

