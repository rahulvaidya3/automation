var target = UIATarget.localTarget();
target.setDeviceOrientation(UIA_DEVICE_ORIENTATION_PORTRAIT);
var objKMApp = target.frontMostApp();
var objMainWindow = target.frontMostApp().mainWindow();
var tblEmailFolderList = target.frontMostApp().mainWindow().tableViews()[0];

//Top Navigation Bar
var btnMailBoxes = target.frontMostApp().navigationBar().segmentedControls()[0].buttons()["Mailboxes"]
var btnWorkspaces = target.frontMostApp().navigationBar().segmentedControls()[0].buttons()["Workspaces"]
var lnkSettings = target.frontMostApp().navigationBar().buttons()["Settings"]
var btnBackButton = target.frontMostApp().navigationBar().leftButton()

//Settings Page
var btnCancelSettings = target.frontMostApp().navigationBar().buttons()["Cancel"]
var btnSaveSettings = target.frontMostApp().navigationBar().buttons()["Save"]
var txtExchangeUserID = target.frontMostApp().mainWindow().tableViews()[0].cells()[0].textFields()[0].textFields()[0]
var txtExchangePasswd = target.frontMostApp().mainWindow().tableViews()[0].cells()[1].secureTextFields()[0].secureTextFields()[0]
var txtExchangeDomain = target.frontMostApp().mainWindow().tableViews()[0].cells()["Domain"].textFields()[0].textFields()[0]
var txtKMUserID = target.frontMostApp().mainWindow().tableViews()[0].cells()[3].textFields()[0].textFields()[0]
var txtKMPasswd = target.frontMostApp().mainWindow().tableViews()[0].cells()[4].secureTextFields()[0].secureTextFields()[0]
var txtKMURL = target.frontMostApp().mainWindow().tableViews()[0].cells()["URL"].textFields()[0].textFields()[0]
var btnDoneSettings = target.frontMostApp().windows()[1].toolbar().buttons()["Done"]

//KMTree
var btnPrivateWorkspace = target.frontMostApp().mainWindow().tableViews()[0].buttons()["Private"]
var btnFavoritesWorkspace = target.frontMostApp().mainWindow().tableViews()[0].buttons()["Favourites"]
var lnkGarbageWorkspace = target.frontMostApp().mainWindow().tableViews()[0].cells()["Garbage"]
var lnkOfficeWorkspace = target.frontMostApp().mainWindow().tableViews()[0].cells()["Office"]
var lnkPersonalWorkspace = target.frontMostApp().mainWindow().tableViews()[0].cells()["Personal"]

//Compose
var btnCompose = target.frontMostApp().toolbar().buttons()["Compose"]
var txtToField = target.frontMostApp().mainWindow().scrollViews()[0].textFields()[0].textFields()[0]
var txtCCField = target.frontMostApp().mainWindow().scrollViews()[0].textFields()[1].textFields()[0]
var txtBCCField = target.frontMostApp().mainWindow().scrollViews()[0].textFields()[2].textFields()[0]
var txtSubjectField = target.frontMostApp().mainWindow().scrollViews()[0].textFields()[3].textFields()[0]
var txtEmailBody = target.frontMostApp().mainWindow().scrollViews()[0].textViews()[0]

var btnSendEmail = target.frontMostApp().navigationBar().buttons()["Send"]
var btnCancel = target.frontMostApp().navigationBar().buttons()["Cancel"]

//Settings Alert
var btnGotoSettings = target.frontMostApp().alert().buttons()["Go to Settings"]

//Subject Reminder Alert
var btnSubjectAlertDontSend = target.frontMostApp().alert().buttons()["Don't send"]
var btnSubjectAlertSend = target.frontMostApp().alert().buttons()["Send"]

//Compose Error Alert
var btnOKError = target.frontMostApp().alert().buttons()["Ok"]

//Draft Save Options
var btnDeleteDraft = target.frontMostApp().actionSheet().collectionViews()[0].cells()["Delete Draft"].buttons()["Delete Draft"]
var btnSaveDraft = target.frontMostApp().actionSheet().collectionViews()[0].cells()["Save Draft"].buttons()["Save Draft"]
var btnCancelDraft = target.frontMostApp().actionSheet().buttons()["Cancel"]