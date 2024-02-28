## Mock Api

### API Link

The mock api link provided by guvi doesn't support for CRUD operations.

I have provided the screenshots of the results of the CRUD operations with the provided mock api with the name of [Result](Result.png) and [Result2](Result.jpg).

In the jsonplaceholder website they have also said the changes will not affect the data in server but will be faked. I have provided the screenshot for that in the [Mockapi](MockApi.png). 

So that's why I can locally change the data and cannot display the data. So I used [mockapi](https://mockapi.io) url to generate my endpoints.


## APP

I have installed axios for making  HTTP requests and router to handle routing inside the app.

## Home Page

In this page every details about the user will be displayed using axios.get method from the api Url.

These datas are sent to the [Card Component](Card.jsx) which is called inside a container.

## List Page

In this page the list of all users are displayed with important data in a table with [Edit Component](Edit.jsx) and Delete button

###  1.  Edit  Component :
  Clicking the edit button will open the form page with all the data of the particular user in it. Now the End user can edit the details and submit. On submiting the datas are sent to the mock Api using **PUT** method and it will navigate back to the List Page with help of **Use Navigate()**.
 
  Now the edited data is reflected on the Api which in turn reflects in the Home Page and List page as well.

### 2. Delete

Clicking the delete button, the  id of that particular card is passed to the API url using **Delete** method which checks for the id recieved and id pertaining to the url is same, it deletes the data relevent to the id.

## Create Component

This page works similar to the edit page with the difference in the method **POST**. Like  the Edit component, it also navigates back to the List page with the updated value.

**_Thank You!!!_**