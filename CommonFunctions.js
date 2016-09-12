
/*
var target = UIATarget.localTarget();

target.setDeviceOrientation(UIA_DEVICE_ORIENTATION_PORTRAIT);
*/
//UIALogger.logStart("Test Start");

function FindTotalRows(Table){
    var TotalFolderList = String(Table.value());
    var intTotalfolders
    if (TotalFolderList != ""){
        var ofPos = TotalFolderList.indexOf("of")
        ofPos = ofPos + 2;
        var strLength = TotalFolderList.length;
        var strtotalFolders = TotalFolderList.slice(ofPos,strLength).trim();
        intTotalfolders = parseInt(strtotalFolders);
    }else{
        intTotalfolders = 0;
    }
    return intTotalfolders;
}

/*
var tblEmailFolderList = target.frontMostApp().mainWindow().tableViews()[0];
var strFolderName = "Inbox";

var ReturnVal = FindFolder(tblEmailFolderList, strFolderName);
if(ReturnVal==true){
    UIALogger.logPass("Test has passed");
}else{
    UIALogger.logFail("Test has failed");
}
*/

function FindFolder(Table, strFolderName){
    var intTotalFolders = FindTotalRows(Table);
    if(intTotalFolders != 0){
        var strExpectedFolderName = strFolderName;
        var b = false;
        for(var i=1; i <= intTotalFolders; i++){
            strCurrentFolderName = String(Table.cells()[i].name());
            if (strCurrentFolderName == strExpectedFolderName){
                b = true;
            }
        }
        if (b != true){
            ReportEvent("WARNING", "Folder " + strExpectedFolderName + " is not found in the Email Folders");
            return false;
        }else{
            ReportEvent("MESSAGE","Folder " + strExpectedFolderName + " is found in the Email Folders");
            return true;
        }
    }else{
        return false;
        ReportEvent("ERROR", "There are no Email folders currently in the App");
    }
    
}

function OpenEmailFolder(Table, strFolderName){
    var ReturnVal = FindFolder(Table, strFolderName);
    if(ReturnVal == true){
        Table.cells()[strFolderName].tap();
    } 
}

function ReportEvent(status, message){
    switch(status.toUpperCase()){
        case "MESSAGE":
            UIALogger.logMessage(message);
            break;
        case "DEBUG":
            UIALogger.logDebug(message);
            break;
        case "WARNING":
            UIALogger.logWarning(message); //takes screenshot
            break;
        case "ERROR":
            UIALogger.logError(message); //takes screenshot
            break;
    }
}

function RefreshWindow(){
    
}
