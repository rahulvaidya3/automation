//#import "/KM_Automation/RunTestSuite.js";
UIALogger.logMessage("TestPack");

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
var txtExchangeUserID = target.frontMostApp().mainWindow().tableViews()[0].cells()[0].textFields()[0]//.textFields()[0]

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


//RunTestSuite("Sanity");
objKMApp.logElementTree();

function RunTestSuite(TestSuite){
    switch(TestSuite){
        case "Sanity":
            Sanity_Pack();
            break;
        case "Regression":
            Regression_Pack();
            break;
        case "Functional":
            Functional_Pack();
            break;
        default:
            UIALogger.logError("No Test TestSuite selected for run");	
    }
}

function Sanity_Pack(){
    UIALogger.logStart("Sanity Pack Started");
    SanityPack_Settings_TestCase01();
    UIALogger.logPass("Sanity Pack Run Completed");
}

function Regression_Pack(){
    UIALogger.logStart("Regression Pack Started");
    RegressionPack_Functionality1_TestCase01();
    RegressionPack_Functionality1_TestCase02();
    RegressionPack_Functionality1_TestCase03();
    RegressionPack_Functionality2_TestCase01();
    RegressionPack_Functionality2_TestCase02();
    RegressionPack_Functionality3_TestCase01();
    RegressionPack_Functionality3_TestCase02();
    RegressionPack_Functionality3_TestCase03();
    RegressionPack_Functionality3_TestCase04();
    UIALogger.logPass("Regression Pack Run Completed");
}

function Functional_Pack(){
    UIALogger.logStart("Functional Pack Started");
    FunctionalPack_Functionality1_TestCase01();
    FunctionalPack_Functionality1_TestCase02();
    FunctionalPack_Functionality1_TestCase03();
    FunctionalPack_Functionality2_TestCase01();
    FunctionalPack_Functionality2_TestCase02();
    FunctionalPack_Functionality3_TestCase01();
    FunctionalPack_Functionality3_TestCase02();
    FunctionalPack_Functionality3_TestCase03();
    FunctionalPack_Functionality3_TestCase04();
    UIALogger.logPass("Sanity Pack Run Completed");
}

function SanityPack_Settings_TestCase01(){
    UIALogger.logStart("SanityPack_ComposeEmail_TestCase01");
    var target = UIATarget.localTarget();
    target.setDeviceOrientation(UIA_DEVICE_ORIENTATION_PORTRAIT);
    btnGotoSettings.tap();
    txtExchangeUserID.setValue("rahul.vaidya@adrosonic.com");
    txtExchangePasswd.setValue("September@2016");
    txtKMUserID.setValue("rahul.vaidya@adrotestserver.com");
    txtKMPasswd.setValue("Welcome1");
    txtKMURL.setValue("qa.knowledgemill.com");
    btnDoneSettings.tap();
    btnSaveSettings.tap();
    UIALogger.logPass("Settings Saved successfully");
}

