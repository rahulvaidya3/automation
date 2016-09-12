#import "/KM_Automation/TestCases.js";
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
	UIALogger.logStart("Sanity Pack Started");
	RegressionPack_Functionality1_TestCase01();
	RegressionPack_Functionality1_TestCase02();
	RegressionPack_Functionality1_TestCase03();
	RegressionPack_Functionality2_TestCase01();
	RegressionPack_Functionality2_TestCase02();
	RegressionPack_Functionality3_TestCase01();
	RegressionPack_Functionality3_TestCase02();
	RegressionPack_Functionality3_TestCase03();
	RegressionPack_Functionality3_TestCase04();
	UIALogger.logPass("Sanity Pack Run Completed");
}

function Functional_Pack(){
	UIALogger.logStart("Sanity Pack Started");
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