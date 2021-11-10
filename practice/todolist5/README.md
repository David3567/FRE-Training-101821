# optimize code based on todolist4.

## use `Event delegation` to deal with edit and delete event

note, we must use element.target.onclick = ()={}， because onlick will overwrite the previous event handler function

cannot use element.target.addEventListener('click', ()=>{}), because addEventListener() will not overwrite the previous event handler function. So that it will cause the situation that when you click a delete button, it will send 10 requests(the number of requests when you click a button grows exponentially based on how many times you have clicked the delete button), because there are 10 same event handler function attached to the same element.

## issue that need to be solved later: Edit API is a PUT method. we should send a JSON that includes all the fields as required by the database model

What is PUT Request?
The HTTP PUT request method creates a new resource or substitutes a representation of the target resource `with the request payload`.

According to the official HTTP RFC specifies PUT to be:

A PUT method puts a file or resource at a specific URI, and precisely at that URI.
If a file or a resource already exists at that URI, PUT replaces that file or resource.
If no file or resource is there, PUT creates one.
In addition to the above, Responses to this method are not cacheable.


https://www.toolsqa.com/rest-assured/put-request-using-rest-assured/