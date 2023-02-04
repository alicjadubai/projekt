self["webpackHotUpdatees6_react"](0,{

/***/ 23:
/***/ (() => {

var users = [{
  id: 1,
  firstName: "Idalia",
  lastName: "Franses",
  email: "ifranses0@mapy.cz",
  ipAddress: "180.153.67.217",
  language: "French",
  nin: "3033798411"
}, {
  id: 2,
  firstName: "Frederick",
  lastName: "Prince",
  email: "fprince1@huffingtonpost.com",
  ipAddress: "6.239.37.95",
  language: "English",
  nin: "3884188887"
}, {
  id: 3,
  firstName: "Iago",
  lastName: "MacCathay",
  email: "imaccathay2@wix.com",
  ipAddress: "244.252.97.163",
  language: "Italian",
  nin: "4502080942"
}, {
  id: 4,
  firstName: "Biddie",
  lastName: "Liddard",
  email: "bliddard3@noaa.gov",
  ipAddress: "6.107.79.145",
  language: "French",
  nin: "2931819395"
}, {
  id: 5,
  firstName: "Colas",
  lastName: "Moffett",
  email: "cmoffett4@purevolume.com",
  ipAddress: "200.4.236.255",
  language: "French",
  nin: "1288790260"
}];
var parseUserData = function parseUserData(data) {
  var usersFiltered = data.filter(function (el) {
    return el.language === "French";
  });
  console.log(usersFiltered);
  var newArray = usersFiltered.map(function (el) {
    return {
      id: el.id,
      name: "".concat(el.firstName, " ").concat(el.lastName),
      email: el.email
    };
  });
  return newArray.sort(function (a, b) {
    return a.id - b.id;
  });
};
console.log(parseUserData(users));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("89e07604d6672e53ca08")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kNmYwYTNlNDQxNDc5NjYwMDdlNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBTUEsS0FBSyxHQUFHLENBQ1o7RUFDRUMsRUFBRSxFQUFFLENBQUM7RUFDTEMsU0FBUyxFQUFFLFFBQVE7RUFDbkJDLFFBQVEsRUFBRSxTQUFTO0VBQ25CQyxLQUFLLEVBQUUsbUJBQW1CO0VBQzFCQyxTQUFTLEVBQUUsZ0JBQWdCO0VBQzNCQyxRQUFRLEVBQUUsUUFBUTtFQUNsQkMsR0FBRyxFQUFFO0FBQ1AsQ0FBQyxFQUNEO0VBQ0VOLEVBQUUsRUFBRSxDQUFDO0VBQ0xDLFNBQVMsRUFBRSxXQUFXO0VBQ3RCQyxRQUFRLEVBQUUsUUFBUTtFQUNsQkMsS0FBSyxFQUFFLDZCQUE2QjtFQUNwQ0MsU0FBUyxFQUFFLGFBQWE7RUFDeEJDLFFBQVEsRUFBRSxTQUFTO0VBQ25CQyxHQUFHLEVBQUU7QUFDUCxDQUFDLEVBQ0Q7RUFDRU4sRUFBRSxFQUFFLENBQUM7RUFDTEMsU0FBUyxFQUFFLE1BQU07RUFDakJDLFFBQVEsRUFBRSxXQUFXO0VBQ3JCQyxLQUFLLEVBQUUscUJBQXFCO0VBQzVCQyxTQUFTLEVBQUUsZ0JBQWdCO0VBQzNCQyxRQUFRLEVBQUUsU0FBUztFQUNuQkMsR0FBRyxFQUFFO0FBQ1AsQ0FBQyxFQUNEO0VBQ0VOLEVBQUUsRUFBRSxDQUFDO0VBQ0xDLFNBQVMsRUFBRSxRQUFRO0VBQ25CQyxRQUFRLEVBQUUsU0FBUztFQUNuQkMsS0FBSyxFQUFFLG9CQUFvQjtFQUMzQkMsU0FBUyxFQUFFLGNBQWM7RUFDekJDLFFBQVEsRUFBRSxRQUFRO0VBQ2xCQyxHQUFHLEVBQUU7QUFDUCxDQUFDLEVBQ0Q7RUFDRU4sRUFBRSxFQUFFLENBQUM7RUFDTEMsU0FBUyxFQUFFLE9BQU87RUFDbEJDLFFBQVEsRUFBRSxTQUFTO0VBQ25CQyxLQUFLLEVBQUUsMEJBQTBCO0VBQ2pDQyxTQUFTLEVBQUUsZUFBZTtFQUMxQkMsUUFBUSxFQUFFLFFBQVE7RUFDbEJDLEdBQUcsRUFBRTtBQUNQLENBQUMsQ0FDRjtBQUVELElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBYSxDQUFJQyxJQUFJLEVBQUs7RUFDOUIsSUFBTUMsYUFBYSxHQUFHRCxJQUFJLENBQUNFLE1BQU0sQ0FBQyxVQUFDQyxFQUFFO0lBQUEsT0FBS0EsRUFBRSxDQUFDTixRQUFRLEtBQUssUUFBUTtFQUFBLEVBQUM7RUFDbkVPLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixhQUFhLENBQUM7RUFDMUIsSUFBTUssUUFBUSxHQUFHTCxhQUFhLENBQUNNLEdBQUcsQ0FBQyxVQUFDSixFQUFFO0lBQUEsT0FBTTtNQUMxQ1gsRUFBRSxFQUFFVyxFQUFFLENBQUNYLEVBQUU7TUFDVGdCLElBQUksWUFBS0wsRUFBRSxDQUFDVixTQUFTLGNBQUlVLEVBQUUsQ0FBQ1QsUUFBUSxDQUFFO01BQ3RDQyxLQUFLLEVBQUVRLEVBQUUsQ0FBQ1I7SUFDWixDQUFDO0VBQUEsQ0FBQyxDQUFDO0VBQ0gsT0FBT1csUUFBUSxDQUFDRyxJQUFJLENBQUMsVUFBQ0MsQ0FBQyxFQUFFQyxDQUFDO0lBQUEsT0FBS0QsQ0FBQyxDQUFDbEIsRUFBRSxHQUFHbUIsQ0FBQyxDQUFDbkIsRUFBRTtFQUFBLEVBQUM7QUFDN0MsQ0FBQztBQUVEWSxPQUFPLENBQUNDLEdBQUcsQ0FBQ04sYUFBYSxDQUFDUixLQUFLLENBQUMsQ0FBQzs7Ozs7Ozs7VUMzRGpDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDJfWmFkYW5pZV8yL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHVzZXJzID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgZmlyc3ROYW1lOiBcIklkYWxpYVwiLFxyXG4gICAgbGFzdE5hbWU6IFwiRnJhbnNlc1wiLFxyXG4gICAgZW1haWw6IFwiaWZyYW5zZXMwQG1hcHkuY3pcIixcclxuICAgIGlwQWRkcmVzczogXCIxODAuMTUzLjY3LjIxN1wiLFxyXG4gICAgbGFuZ3VhZ2U6IFwiRnJlbmNoXCIsXHJcbiAgICBuaW46IFwiMzAzMzc5ODQxMVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICBmaXJzdE5hbWU6IFwiRnJlZGVyaWNrXCIsXHJcbiAgICBsYXN0TmFtZTogXCJQcmluY2VcIixcclxuICAgIGVtYWlsOiBcImZwcmluY2UxQGh1ZmZpbmd0b25wb3N0LmNvbVwiLFxyXG4gICAgaXBBZGRyZXNzOiBcIjYuMjM5LjM3Ljk1XCIsXHJcbiAgICBsYW5ndWFnZTogXCJFbmdsaXNoXCIsXHJcbiAgICBuaW46IFwiMzg4NDE4ODg4N1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICBmaXJzdE5hbWU6IFwiSWFnb1wiLFxyXG4gICAgbGFzdE5hbWU6IFwiTWFjQ2F0aGF5XCIsXHJcbiAgICBlbWFpbDogXCJpbWFjY2F0aGF5MkB3aXguY29tXCIsXHJcbiAgICBpcEFkZHJlc3M6IFwiMjQ0LjI1Mi45Ny4xNjNcIixcclxuICAgIGxhbmd1YWdlOiBcIkl0YWxpYW5cIixcclxuICAgIG5pbjogXCI0NTAyMDgwOTQyXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNCxcclxuICAgIGZpcnN0TmFtZTogXCJCaWRkaWVcIixcclxuICAgIGxhc3ROYW1lOiBcIkxpZGRhcmRcIixcclxuICAgIGVtYWlsOiBcImJsaWRkYXJkM0Bub2FhLmdvdlwiLFxyXG4gICAgaXBBZGRyZXNzOiBcIjYuMTA3Ljc5LjE0NVwiLFxyXG4gICAgbGFuZ3VhZ2U6IFwiRnJlbmNoXCIsXHJcbiAgICBuaW46IFwiMjkzMTgxOTM5NVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDUsXHJcbiAgICBmaXJzdE5hbWU6IFwiQ29sYXNcIixcclxuICAgIGxhc3ROYW1lOiBcIk1vZmZldHRcIixcclxuICAgIGVtYWlsOiBcImNtb2ZmZXR0NEBwdXJldm9sdW1lLmNvbVwiLFxyXG4gICAgaXBBZGRyZXNzOiBcIjIwMC40LjIzNi4yNTVcIixcclxuICAgIGxhbmd1YWdlOiBcIkZyZW5jaFwiLFxyXG4gICAgbmluOiBcIjEyODg3OTAyNjBcIixcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgcGFyc2VVc2VyRGF0YSA9IChkYXRhKSA9PiB7XHJcbiAgY29uc3QgdXNlcnNGaWx0ZXJlZCA9IGRhdGEuZmlsdGVyKChlbCkgPT4gZWwubGFuZ3VhZ2UgPT09IFwiRnJlbmNoXCIpO1xyXG4gIGNvbnNvbGUubG9nKHVzZXJzRmlsdGVyZWQpO1xyXG4gIGNvbnN0IG5ld0FycmF5ID0gdXNlcnNGaWx0ZXJlZC5tYXAoKGVsKSA9PiAoe1xyXG4gICAgaWQ6IGVsLmlkLFxyXG4gICAgbmFtZTogYCR7ZWwuZmlyc3ROYW1lfSAke2VsLmxhc3ROYW1lfWAsXHJcbiAgICBlbWFpbDogZWwuZW1haWwsXHJcbiAgfSkpO1xyXG4gIHJldHVybiBuZXdBcnJheS5zb3J0KChhLCBiKSA9PiBhLmlkIC0gYi5pZCk7XHJcbn07XHJcblxyXG5jb25zb2xlLmxvZyhwYXJzZVVzZXJEYXRhKHVzZXJzKSk7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjg5ZTA3NjA0ZDY2NzJlNTNjYTA4XCIpIl0sIm5hbWVzIjpbInVzZXJzIiwiaWQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwiaXBBZGRyZXNzIiwibGFuZ3VhZ2UiLCJuaW4iLCJwYXJzZVVzZXJEYXRhIiwiZGF0YSIsInVzZXJzRmlsdGVyZWQiLCJmaWx0ZXIiLCJlbCIsImNvbnNvbGUiLCJsb2ciLCJuZXdBcnJheSIsIm1hcCIsIm5hbWUiLCJzb3J0IiwiYSIsImIiXSwic291cmNlUm9vdCI6IiJ9