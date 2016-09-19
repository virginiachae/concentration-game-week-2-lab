    <script id="developer-li-template" type="text/x-handlebars-template"> //what template will be called in the app.js file
      {{#each developers}} //#each is a method and developers is the title of list of developers on the data.js file 
        <li class="list-group-item"> //this is what each file will become, a li item on the page
          <a href="https://www.github.com/{{githubUsername}}" target="_blank"> //an item in the li
            <p>{{firstName}} {{lastName}}</p> //another item in the li 
            <img src="https://www.github.com/{{githubUsername}}.png" alt="{{githubUsername}} profile picture" class="thumbnail"> another item in the li
          </a>  
        </li>
      {{/each}}
    </script>

    

