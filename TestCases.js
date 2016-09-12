#import "/KM_Automation/ObjectRepository.js";
#import "/KM_Automation/CommonFunctions.js";

function SanityPack_Settings_TestCase01(){
	UIALogger.LogStart("SanityPack_ComposeEmail_TestCase01");
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
}