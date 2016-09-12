
var target = UIATarget.localTarget();

//Scrolling Inbox email folder to visible screen
target.frontMostApp().mainWindow().tableViews()[0].cells()["Inbox"].scrollToVisible();

//Clicking on Inbox
target.frontMostApp().mainWindow().tableViews()[0].cells()["Inbox"].tap();

//Navigating back to email Folders
target.frontMostApp().navigationBar().leftButton().tap();

//Navigating between workspaces & Mailboxes
target.frontMostApp().navigationBar().segmentedControls()[0].buttons()["Workspaces"].tap();
target.frontMostApp().navigationBar().segmentedControls()[0].buttons()["Mailboxes"].tap();
target.frontMostApp().navigationBar().segmentedControls()[0].buttons()["Workspaces"].tap();
target.frontMostApp().navigationBar().segmentedControls()[0].buttons()["Mailboxes"].tap();
target.frontMostApp().navigationBar().segmentedControls()[0].buttons()["Workspaces"].tap();

//Navigating between Private & Favorite Workspaces
target.frontMostApp().mainWindow().tableViews()["No Workspaces"].buttons()["Favourites"].tap();
target.frontMostApp().mainWindow().tableViews()["No Workspaces"].buttons()["Private"].tap();
target.frontMostApp().mainWindow().tableViews()["No Workspaces"].buttons()["Favourites"].tap();
target.frontMostApp().mainWindow().tableViews()["No Workspaces"].buttons()["Private"].tap();

//Navigating back to Mailboxs
target.frontMostApp().navigationBar().segmentedControls()[0].buttons()["Mailboxes"].tap();

//Folder Refresh
target.dragFromToForDuration({x:100, y:200}, {x:100, y:400}, 3);