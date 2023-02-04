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
  var newArray = usersFiltered.map(function (el) {
    return {
      id: el.id,
      name: "".concat(el.firstName, " ").concat(el.lastName),
      email: el.email,
      nin: el.nin
    };
  });
  return newArray.sort(function (a, b) {
    return a.nin - b.nin;
  });
};
console.log(parseUserData(users));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3ded62b6499efb8ed951")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jODk2NDM1MDhkMDY3NGEyOGQ4NC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBTUEsS0FBSyxHQUFHLENBQ1o7RUFDRUMsRUFBRSxFQUFFLENBQUM7RUFDTEMsU0FBUyxFQUFFLFFBQVE7RUFDbkJDLFFBQVEsRUFBRSxTQUFTO0VBQ25CQyxLQUFLLEVBQUUsbUJBQW1CO0VBQzFCQyxTQUFTLEVBQUUsZ0JBQWdCO0VBQzNCQyxRQUFRLEVBQUUsUUFBUTtFQUNsQkMsR0FBRyxFQUFFO0FBQ1AsQ0FBQyxFQUNEO0VBQ0VOLEVBQUUsRUFBRSxDQUFDO0VBQ0xDLFNBQVMsRUFBRSxXQUFXO0VBQ3RCQyxRQUFRLEVBQUUsUUFBUTtFQUNsQkMsS0FBSyxFQUFFLDZCQUE2QjtFQUNwQ0MsU0FBUyxFQUFFLGFBQWE7RUFDeEJDLFFBQVEsRUFBRSxTQUFTO0VBQ25CQyxHQUFHLEVBQUU7QUFDUCxDQUFDLEVBQ0Q7RUFDRU4sRUFBRSxFQUFFLENBQUM7RUFDTEMsU0FBUyxFQUFFLE1BQU07RUFDakJDLFFBQVEsRUFBRSxXQUFXO0VBQ3JCQyxLQUFLLEVBQUUscUJBQXFCO0VBQzVCQyxTQUFTLEVBQUUsZ0JBQWdCO0VBQzNCQyxRQUFRLEVBQUUsU0FBUztFQUNuQkMsR0FBRyxFQUFFO0FBQ1AsQ0FBQyxFQUNEO0VBQ0VOLEVBQUUsRUFBRSxDQUFDO0VBQ0xDLFNBQVMsRUFBRSxRQUFRO0VBQ25CQyxRQUFRLEVBQUUsU0FBUztFQUNuQkMsS0FBSyxFQUFFLG9CQUFvQjtFQUMzQkMsU0FBUyxFQUFFLGNBQWM7RUFDekJDLFFBQVEsRUFBRSxRQUFRO0VBQ2xCQyxHQUFHLEVBQUU7QUFDUCxDQUFDLEVBQ0Q7RUFDRU4sRUFBRSxFQUFFLENBQUM7RUFDTEMsU0FBUyxFQUFFLE9BQU87RUFDbEJDLFFBQVEsRUFBRSxTQUFTO0VBQ25CQyxLQUFLLEVBQUUsMEJBQTBCO0VBQ2pDQyxTQUFTLEVBQUUsZUFBZTtFQUMxQkMsUUFBUSxFQUFFLFFBQVE7RUFDbEJDLEdBQUcsRUFBRTtBQUNQLENBQUMsQ0FDRjtBQUVELElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBYSxDQUFJQyxJQUFJLEVBQUs7RUFDOUIsSUFBTUMsYUFBYSxHQUFHRCxJQUFJLENBQUNFLE1BQU0sQ0FBQyxVQUFDQyxFQUFFO0lBQUEsT0FBS0EsRUFBRSxDQUFDTixRQUFRLEtBQUssUUFBUTtFQUFBLEVBQUM7RUFDbkUsSUFBTU8sUUFBUSxHQUFHSCxhQUFhLENBQUNJLEdBQUcsQ0FBQyxVQUFDRixFQUFFO0lBQUEsT0FBTTtNQUMxQ1gsRUFBRSxFQUFFVyxFQUFFLENBQUNYLEVBQUU7TUFDVGMsSUFBSSxZQUFLSCxFQUFFLENBQUNWLFNBQVMsY0FBSVUsRUFBRSxDQUFDVCxRQUFRLENBQUU7TUFDdENDLEtBQUssRUFBRVEsRUFBRSxDQUFDUixLQUFLO01BQ2ZHLEdBQUcsRUFBRUssRUFBRSxDQUFDTDtJQUNWLENBQUM7RUFBQSxDQUFDLENBQUM7RUFDSCxPQUFPTSxRQUFRLENBQUNHLElBQUksQ0FBQyxVQUFDQyxDQUFDLEVBQUVDLENBQUM7SUFBQSxPQUFLRCxDQUFDLENBQUNWLEdBQUcsR0FBR1csQ0FBQyxDQUFDWCxHQUFHO0VBQUEsRUFBQztBQUMvQyxDQUFDO0FBRURZLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDWixhQUFhLENBQUNSLEtBQUssQ0FBQyxDQUFDOzs7Ozs7OztVQzNEakMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wMl9aYWRhbmllXzIvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdXNlcnMgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBmaXJzdE5hbWU6IFwiSWRhbGlhXCIsXHJcbiAgICBsYXN0TmFtZTogXCJGcmFuc2VzXCIsXHJcbiAgICBlbWFpbDogXCJpZnJhbnNlczBAbWFweS5jelwiLFxyXG4gICAgaXBBZGRyZXNzOiBcIjE4MC4xNTMuNjcuMjE3XCIsXHJcbiAgICBsYW5ndWFnZTogXCJGcmVuY2hcIixcclxuICAgIG5pbjogXCIzMDMzNzk4NDExXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIGZpcnN0TmFtZTogXCJGcmVkZXJpY2tcIixcclxuICAgIGxhc3ROYW1lOiBcIlByaW5jZVwiLFxyXG4gICAgZW1haWw6IFwiZnByaW5jZTFAaHVmZmluZ3RvbnBvc3QuY29tXCIsXHJcbiAgICBpcEFkZHJlc3M6IFwiNi4yMzkuMzcuOTVcIixcclxuICAgIGxhbmd1YWdlOiBcIkVuZ2xpc2hcIixcclxuICAgIG5pbjogXCIzODg0MTg4ODg3XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMyxcclxuICAgIGZpcnN0TmFtZTogXCJJYWdvXCIsXHJcbiAgICBsYXN0TmFtZTogXCJNYWNDYXRoYXlcIixcclxuICAgIGVtYWlsOiBcImltYWNjYXRoYXkyQHdpeC5jb21cIixcclxuICAgIGlwQWRkcmVzczogXCIyNDQuMjUyLjk3LjE2M1wiLFxyXG4gICAgbGFuZ3VhZ2U6IFwiSXRhbGlhblwiLFxyXG4gICAgbmluOiBcIjQ1MDIwODA5NDJcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA0LFxyXG4gICAgZmlyc3ROYW1lOiBcIkJpZGRpZVwiLFxyXG4gICAgbGFzdE5hbWU6IFwiTGlkZGFyZFwiLFxyXG4gICAgZW1haWw6IFwiYmxpZGRhcmQzQG5vYWEuZ292XCIsXHJcbiAgICBpcEFkZHJlc3M6IFwiNi4xMDcuNzkuMTQ1XCIsXHJcbiAgICBsYW5ndWFnZTogXCJGcmVuY2hcIixcclxuICAgIG5pbjogXCIyOTMxODE5Mzk1XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNSxcclxuICAgIGZpcnN0TmFtZTogXCJDb2xhc1wiLFxyXG4gICAgbGFzdE5hbWU6IFwiTW9mZmV0dFwiLFxyXG4gICAgZW1haWw6IFwiY21vZmZldHQ0QHB1cmV2b2x1bWUuY29tXCIsXHJcbiAgICBpcEFkZHJlc3M6IFwiMjAwLjQuMjM2LjI1NVwiLFxyXG4gICAgbGFuZ3VhZ2U6IFwiRnJlbmNoXCIsXHJcbiAgICBuaW46IFwiMTI4ODc5MDI2MFwiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBwYXJzZVVzZXJEYXRhID0gKGRhdGEpID0+IHtcclxuICBjb25zdCB1c2Vyc0ZpbHRlcmVkID0gZGF0YS5maWx0ZXIoKGVsKSA9PiBlbC5sYW5ndWFnZSA9PT0gXCJGcmVuY2hcIik7XHJcbiAgY29uc3QgbmV3QXJyYXkgPSB1c2Vyc0ZpbHRlcmVkLm1hcCgoZWwpID0+ICh7XHJcbiAgICBpZDogZWwuaWQsXHJcbiAgICBuYW1lOiBgJHtlbC5maXJzdE5hbWV9ICR7ZWwubGFzdE5hbWV9YCxcclxuICAgIGVtYWlsOiBlbC5lbWFpbCxcclxuICAgIG5pbjogZWwubmluLFxyXG4gIH0pKTtcclxuICByZXR1cm4gbmV3QXJyYXkuc29ydCgoYSwgYikgPT4gYS5uaW4gLSBiLm5pbik7XHJcbn07XHJcblxyXG5jb25zb2xlLmxvZyhwYXJzZVVzZXJEYXRhKHVzZXJzKSk7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjNkZWQ2MmI2NDk5ZWZiOGVkOTUxXCIpIl0sIm5hbWVzIjpbInVzZXJzIiwiaWQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwiaXBBZGRyZXNzIiwibGFuZ3VhZ2UiLCJuaW4iLCJwYXJzZVVzZXJEYXRhIiwiZGF0YSIsInVzZXJzRmlsdGVyZWQiLCJmaWx0ZXIiLCJlbCIsIm5ld0FycmF5IiwibWFwIiwibmFtZSIsInNvcnQiLCJhIiwiYiIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9