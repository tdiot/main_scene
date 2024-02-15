gdjs.scene1_95introCode = {};
gdjs.scene1_95introCode.GDmain_9595scene_9595textObjects1= [];
gdjs.scene1_95introCode.GDmain_9595scene_9595textObjects2= [];
gdjs.scene1_95introCode.GDmain_9595scene_9595textObjects3= [];
gdjs.scene1_95introCode.GDmain_9595scene_9595textObjects4= [];
gdjs.scene1_95introCode.GDmain_9595scene_9595optionsObjects1= [];
gdjs.scene1_95introCode.GDmain_9595scene_9595optionsObjects2= [];
gdjs.scene1_95introCode.GDmain_9595scene_9595optionsObjects3= [];
gdjs.scene1_95introCode.GDmain_9595scene_9595optionsObjects4= [];
gdjs.scene1_95introCode.GDmain_9595scene_9595bg_9595couloir_9595hopitalObjects1= [];
gdjs.scene1_95introCode.GDmain_9595scene_9595bg_9595couloir_9595hopitalObjects2= [];
gdjs.scene1_95introCode.GDmain_9595scene_9595bg_9595couloir_9595hopitalObjects3= [];
gdjs.scene1_95introCode.GDmain_9595scene_9595bg_9595couloir_9595hopitalObjects4= [];
gdjs.scene1_95introCode.GDmain_9595scene_9595normal_9595cellObjects1= [];
gdjs.scene1_95introCode.GDmain_9595scene_9595normal_9595cellObjects2= [];
gdjs.scene1_95introCode.GDmain_9595scene_9595normal_9595cellObjects3= [];
gdjs.scene1_95introCode.GDmain_9595scene_9595normal_9595cellObjects4= [];
gdjs.scene1_95introCode.GDmain_9595scene_9595cancerous_9595cellObjects1= [];
gdjs.scene1_95introCode.GDmain_9595scene_9595cancerous_9595cellObjects2= [];
gdjs.scene1_95introCode.GDmain_9595scene_9595cancerous_9595cellObjects3= [];
gdjs.scene1_95introCode.GDmain_9595scene_9595cancerous_9595cellObjects4= [];
gdjs.scene1_95introCode.GDmain_9595scene_9595bookObjects1= [];
gdjs.scene1_95introCode.GDmain_9595scene_9595bookObjects2= [];
gdjs.scene1_95introCode.GDmain_9595scene_9595bookObjects3= [];
gdjs.scene1_95introCode.GDmain_9595scene_9595bookObjects4= [];
gdjs.scene1_95introCode.GDmain_9595scene_9595ATCGObjects1= [];
gdjs.scene1_95introCode.GDmain_9595scene_9595ATCGObjects2= [];
gdjs.scene1_95introCode.GDmain_9595scene_9595ATCGObjects3= [];
gdjs.scene1_95introCode.GDmain_9595scene_9595ATCGObjects4= [];
gdjs.scene1_95introCode.GDmain_9595scene_9595small_9595ccellsObjects1= [];
gdjs.scene1_95introCode.GDmain_9595scene_9595small_9595ccellsObjects2= [];
gdjs.scene1_95introCode.GDmain_9595scene_9595small_9595ccellsObjects3= [];
gdjs.scene1_95introCode.GDmain_9595scene_9595small_9595ccellsObjects4= [];
gdjs.scene1_95introCode.GDmain_9595scene_9595echantillon_9595simpleObjects1= [];
gdjs.scene1_95introCode.GDmain_9595scene_9595echantillon_9595simpleObjects2= [];
gdjs.scene1_95introCode.GDmain_9595scene_9595echantillon_9595simpleObjects3= [];
gdjs.scene1_95introCode.GDmain_9595scene_9595echantillon_9595simpleObjects4= [];
gdjs.scene1_95introCode.GDmain_9595scene_9595flavieObjects1= [];
gdjs.scene1_95introCode.GDmain_9595scene_9595flavieObjects2= [];
gdjs.scene1_95introCode.GDmain_9595scene_9595flavieObjects3= [];
gdjs.scene1_95introCode.GDmain_9595scene_9595flavieObjects4= [];
gdjs.scene1_95introCode.GDmain_9595scene_9595jauge_95950Objects1= [];
gdjs.scene1_95introCode.GDmain_9595scene_9595jauge_95950Objects2= [];
gdjs.scene1_95introCode.GDmain_9595scene_9595jauge_95950Objects3= [];
gdjs.scene1_95introCode.GDmain_9595scene_9595jauge_95950Objects4= [];
gdjs.scene1_95introCode.GDmain_9595scene_9595textboxObjects1= [];
gdjs.scene1_95introCode.GDmain_9595scene_9595textboxObjects2= [];
gdjs.scene1_95introCode.GDmain_9595scene_9595textboxObjects3= [];
gdjs.scene1_95introCode.GDmain_9595scene_9595textboxObjects4= [];
gdjs.scene1_95introCode.GDmain_9595scene_9595flavie_9595headObjects1= [];
gdjs.scene1_95introCode.GDmain_9595scene_9595flavie_9595headObjects2= [];
gdjs.scene1_95introCode.GDmain_9595scene_9595flavie_9595headObjects3= [];
gdjs.scene1_95introCode.GDmain_9595scene_9595flavie_9595headObjects4= [];


gdjs.scene1_95introCode.eventsList0 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8968908);
}
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.startFrom("introduction");
}{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(1);
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}}

}


};gdjs.scene1_95introCode.eventsList1 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)), "textscroll");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.dialogueTree.hasClippedScrollingCompleted());
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("main_scene_flavie_head"), gdjs.scene1_95introCode.GDmain_9595scene_9595flavie_9595headObjects3);
gdjs.copyArray(runtimeScene.getObjects("main_scene_textbox"), gdjs.scene1_95introCode.GDmain_9595scene_9595textboxObjects3);
{gdjs.dialogueTree.scrollClippedText();
}{gdjs.evtTools.sound.playSound(runtimeScene, "rpg text.wav", false, 20, 1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "textscroll");
}{for(var i = 0, len = gdjs.scene1_95introCode.GDmain_9595scene_9595flavie_9595headObjects3.length ;i < len;++i) {
    gdjs.scene1_95introCode.GDmain_9595scene_9595flavie_9595headObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.scene1_95introCode.GDmain_9595scene_9595textboxObjects3.length ;i < len;++i) {
    gdjs.scene1_95introCode.GDmain_9595scene_9595textboxObjects3[i].hide(false);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.hasClippedScrollingCompleted();
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "z");
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.goToNextDialogueLine();
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "x");
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0.02);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "x"));
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0.06);
}}

}


};gdjs.scene1_95introCode.eventsList2 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
{gdjs.dialogueTree.selectOption(0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
{gdjs.dialogueTree.selectOption(1);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "z");
if (isConditionTrue_0) {
{gdjs.dialogueTree.confirmSelectOption();
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.hasSelectedOptionChanged();
if (isConditionTrue_0) {
/* Reuse gdjs.scene1_95introCode.GDmain_9595scene_9595optionsObjects2 */
{for(var i = 0, len = gdjs.scene1_95introCode.GDmain_9595scene_9595optionsObjects2.length ;i < len;++i) {
    gdjs.scene1_95introCode.GDmain_9595scene_9595optionsObjects2[i].setString(gdjs.dialogueTree.getLineOptionsTextVertical(">"));
}
}}

}


};gdjs.scene1_95introCode.eventsList3 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("main_scene_ATCG"), gdjs.scene1_95introCode.GDmain_9595scene_9595ATCGObjects2);
gdjs.copyArray(runtimeScene.getObjects("main_scene_book"), gdjs.scene1_95introCode.GDmain_9595scene_9595bookObjects2);
gdjs.copyArray(runtimeScene.getObjects("main_scene_cancerous_cell"), gdjs.scene1_95introCode.GDmain_9595scene_9595cancerous_9595cellObjects2);
gdjs.copyArray(runtimeScene.getObjects("main_scene_echantillon_simple"), gdjs.scene1_95introCode.GDmain_9595scene_9595echantillon_9595simpleObjects2);
gdjs.copyArray(runtimeScene.getObjects("main_scene_flavie_head"), gdjs.scene1_95introCode.GDmain_9595scene_9595flavie_9595headObjects2);
gdjs.copyArray(runtimeScene.getObjects("main_scene_jauge_0"), gdjs.scene1_95introCode.GDmain_9595scene_9595jauge_95950Objects2);
gdjs.copyArray(runtimeScene.getObjects("main_scene_normal_cell"), gdjs.scene1_95introCode.GDmain_9595scene_9595normal_9595cellObjects2);
gdjs.copyArray(runtimeScene.getObjects("main_scene_small_ccells"), gdjs.scene1_95introCode.GDmain_9595scene_9595small_9595ccellsObjects2);
gdjs.copyArray(runtimeScene.getObjects("main_scene_textbox"), gdjs.scene1_95introCode.GDmain_9595scene_9595textboxObjects2);
{gdjs.dialogueTree.loadFromJsonFile(runtimeScene, "YarnDialogue.json");
}{for(var i = 0, len = gdjs.scene1_95introCode.GDmain_9595scene_9595flavie_9595headObjects2.length ;i < len;++i) {
    gdjs.scene1_95introCode.GDmain_9595scene_9595flavie_9595headObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.scene1_95introCode.GDmain_9595scene_9595textboxObjects2.length ;i < len;++i) {
    gdjs.scene1_95introCode.GDmain_9595scene_9595textboxObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.scene1_95introCode.GDmain_9595scene_9595normal_9595cellObjects2.length ;i < len;++i) {
    gdjs.scene1_95introCode.GDmain_9595scene_9595normal_9595cellObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.scene1_95introCode.GDmain_9595scene_9595cancerous_9595cellObjects2.length ;i < len;++i) {
    gdjs.scene1_95introCode.GDmain_9595scene_9595cancerous_9595cellObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.scene1_95introCode.GDmain_9595scene_9595bookObjects2.length ;i < len;++i) {
    gdjs.scene1_95introCode.GDmain_9595scene_9595bookObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.scene1_95introCode.GDmain_9595scene_9595ATCGObjects2.length ;i < len;++i) {
    gdjs.scene1_95introCode.GDmain_9595scene_9595ATCGObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.scene1_95introCode.GDmain_9595scene_9595small_9595ccellsObjects2.length ;i < len;++i) {
    gdjs.scene1_95introCode.GDmain_9595scene_9595small_9595ccellsObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.scene1_95introCode.GDmain_9595scene_9595echantillon_9595simpleObjects2.length ;i < len;++i) {
    gdjs.scene1_95introCode.GDmain_9595scene_9595echantillon_9595simpleObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.scene1_95introCode.GDmain_9595scene_9595jauge_95950Objects2.length ;i < len;++i) {
    gdjs.scene1_95introCode.GDmain_9595scene_9595jauge_95950Objects2[i].hide();
}
}{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "0;0;0");
}
{ //Subevents
gdjs.scene1_95introCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isDialogueLineType("text");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("main_scene_text"), gdjs.scene1_95introCode.GDmain_9595scene_9595textObjects2);
{for(var i = 0, len = gdjs.scene1_95introCode.GDmain_9595scene_9595textObjects2.length ;i < len;++i) {
    gdjs.scene1_95introCode.GDmain_9595scene_9595textObjects2[i].setString(gdjs.dialogueTree.getClippedLineText());
}
}
{ //Subevents
gdjs.scene1_95introCode.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.dialogueTree.isDialogueLineType("options"));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("main_scene_options"), gdjs.scene1_95introCode.GDmain_9595scene_9595optionsObjects2);
{for(var i = 0, len = gdjs.scene1_95introCode.GDmain_9595scene_9595optionsObjects2.length ;i < len;++i) {
    gdjs.scene1_95introCode.GDmain_9595scene_9595optionsObjects2[i].hide();
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isDialogueLineType("options");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("main_scene_options"), gdjs.scene1_95introCode.GDmain_9595scene_9595optionsObjects2);
{for(var i = 0, len = gdjs.scene1_95introCode.GDmain_9595scene_9595optionsObjects2.length ;i < len;++i) {
    gdjs.scene1_95introCode.GDmain_9595scene_9595optionsObjects2[i].hide(false);
}
}
{ //Subevents
gdjs.scene1_95introCode.eventsList2(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isCommandCalled("illustration_normal_cell");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("main_scene_normal_cell"), gdjs.scene1_95introCode.GDmain_9595scene_9595normal_9595cellObjects2);
{for(var i = 0, len = gdjs.scene1_95introCode.GDmain_9595scene_9595normal_9595cellObjects2.length ;i < len;++i) {
    gdjs.scene1_95introCode.GDmain_9595scene_9595normal_9595cellObjects2[i].hide(false);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isCommandCalled("illustration_cancerous_cell");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("main_scene_cancerous_cell"), gdjs.scene1_95introCode.GDmain_9595scene_9595cancerous_9595cellObjects2);
{for(var i = 0, len = gdjs.scene1_95introCode.GDmain_9595scene_9595cancerous_9595cellObjects2.length ;i < len;++i) {
    gdjs.scene1_95introCode.GDmain_9595scene_9595cancerous_9595cellObjects2[i].hide(false);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isCommandCalled("illustration_book");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("main_scene_book"), gdjs.scene1_95introCode.GDmain_9595scene_9595bookObjects2);
gdjs.copyArray(runtimeScene.getObjects("main_scene_cancerous_cell"), gdjs.scene1_95introCode.GDmain_9595scene_9595cancerous_9595cellObjects2);
gdjs.copyArray(runtimeScene.getObjects("main_scene_normal_cell"), gdjs.scene1_95introCode.GDmain_9595scene_9595normal_9595cellObjects2);
{for(var i = 0, len = gdjs.scene1_95introCode.GDmain_9595scene_9595normal_9595cellObjects2.length ;i < len;++i) {
    gdjs.scene1_95introCode.GDmain_9595scene_9595normal_9595cellObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.scene1_95introCode.GDmain_9595scene_9595cancerous_9595cellObjects2.length ;i < len;++i) {
    gdjs.scene1_95introCode.GDmain_9595scene_9595cancerous_9595cellObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.scene1_95introCode.GDmain_9595scene_9595bookObjects2.length ;i < len;++i) {
    gdjs.scene1_95introCode.GDmain_9595scene_9595bookObjects2[i].hide(false);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isCommandCalled("illustration_ATCG");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("main_scene_ATCG"), gdjs.scene1_95introCode.GDmain_9595scene_9595ATCGObjects2);
{for(var i = 0, len = gdjs.scene1_95introCode.GDmain_9595scene_9595ATCGObjects2.length ;i < len;++i) {
    gdjs.scene1_95introCode.GDmain_9595scene_9595ATCGObjects2[i].hide(false);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isCommandCalled("illustration_multiplication");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("main_scene_small_ccells"), gdjs.scene1_95introCode.GDmain_9595scene_9595small_9595ccellsObjects2);
{for(var i = 0, len = gdjs.scene1_95introCode.GDmain_9595scene_9595small_9595ccellsObjects2.length ;i < len;++i) {
    gdjs.scene1_95introCode.GDmain_9595scene_9595small_9595ccellsObjects2[i].hide(false);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isCommandCalled("illustration_remove_multiplication");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("main_scene_ATCG"), gdjs.scene1_95introCode.GDmain_9595scene_9595ATCGObjects2);
gdjs.copyArray(runtimeScene.getObjects("main_scene_book"), gdjs.scene1_95introCode.GDmain_9595scene_9595bookObjects2);
gdjs.copyArray(runtimeScene.getObjects("main_scene_small_ccells"), gdjs.scene1_95introCode.GDmain_9595scene_9595small_9595ccellsObjects2);
{for(var i = 0, len = gdjs.scene1_95introCode.GDmain_9595scene_9595small_9595ccellsObjects2.length ;i < len;++i) {
    gdjs.scene1_95introCode.GDmain_9595scene_9595small_9595ccellsObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.scene1_95introCode.GDmain_9595scene_9595bookObjects2.length ;i < len;++i) {
    gdjs.scene1_95introCode.GDmain_9595scene_9595bookObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.scene1_95introCode.GDmain_9595scene_9595ATCGObjects2.length ;i < len;++i) {
    gdjs.scene1_95introCode.GDmain_9595scene_9595ATCGObjects2[i].hide();
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isCommandCalled("illustration_echantillon");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("main_scene_echantillon_simple"), gdjs.scene1_95introCode.GDmain_9595scene_9595echantillon_9595simpleObjects2);
{for(var i = 0, len = gdjs.scene1_95introCode.GDmain_9595scene_9595echantillon_9595simpleObjects2.length ;i < len;++i) {
    gdjs.scene1_95introCode.GDmain_9595scene_9595echantillon_9595simpleObjects2[i].hide(false);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isCommandCalled("illustration_remove_echantillon");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("main_scene_echantillon_simple"), gdjs.scene1_95introCode.GDmain_9595scene_9595echantillon_9595simpleObjects2);
{for(var i = 0, len = gdjs.scene1_95introCode.GDmain_9595scene_9595echantillon_9595simpleObjects2.length ;i < len;++i) {
    gdjs.scene1_95introCode.GDmain_9595scene_9595echantillon_9595simpleObjects2[i].hide();
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isCommandCalled("illustration_jauge");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("main_scene_jauge_0"), gdjs.scene1_95introCode.GDmain_9595scene_9595jauge_95950Objects2);
{for(var i = 0, len = gdjs.scene1_95introCode.GDmain_9595scene_9595jauge_95950Objects2.length ;i < len;++i) {
    gdjs.scene1_95introCode.GDmain_9595scene_9595jauge_95950Objects2[i].hide(false);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isCommandCalled("transition_scene_2");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("main_scene_bg_couloir_hopital"), gdjs.scene1_95introCode.GDmain_9595scene_9595bg_9595couloir_9595hopitalObjects2);
{for(var i = 0, len = gdjs.scene1_95introCode.GDmain_9595scene_9595bg_9595couloir_9595hopitalObjects2.length ;i < len;++i) {
    gdjs.scene1_95introCode.GDmain_9595scene_9595bg_9595couloir_9595hopitalObjects2[i].hide();
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.branchTitleIs("Body explanation");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.hasClippedScrollingCompleted();
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "z");
}
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.startFrom("Cancer explanation");
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.dialogueTree.isRunning());
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "z");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("main_scene_flavie_head"), gdjs.scene1_95introCode.GDmain_9595scene_9595flavie_9595headObjects2);
gdjs.copyArray(runtimeScene.getObjects("main_scene_text"), gdjs.scene1_95introCode.GDmain_9595scene_9595textObjects2);
gdjs.copyArray(runtimeScene.getObjects("main_scene_textbox"), gdjs.scene1_95introCode.GDmain_9595scene_9595textboxObjects2);
{for(var i = 0, len = gdjs.scene1_95introCode.GDmain_9595scene_9595flavie_9595headObjects2.length ;i < len;++i) {
    gdjs.scene1_95introCode.GDmain_9595scene_9595flavie_9595headObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.scene1_95introCode.GDmain_9595scene_9595textboxObjects2.length ;i < len;++i) {
    gdjs.scene1_95introCode.GDmain_9595scene_9595textboxObjects2[i].hide();
}
}{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}{for(var i = 0, len = gdjs.scene1_95introCode.GDmain_9595scene_9595textObjects2.length ;i < len;++i) {
    gdjs.scene1_95introCode.GDmain_9595scene_9595textObjects2[i].hide();
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.scene1_95introCode.eventsList4 = function(runtimeScene) {

{



}


{


gdjs.scene1_95introCode.eventsList3(runtimeScene);
}


};

gdjs.scene1_95introCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.scene1_95introCode.GDmain_9595scene_9595textObjects1.length = 0;
gdjs.scene1_95introCode.GDmain_9595scene_9595textObjects2.length = 0;
gdjs.scene1_95introCode.GDmain_9595scene_9595textObjects3.length = 0;
gdjs.scene1_95introCode.GDmain_9595scene_9595textObjects4.length = 0;
gdjs.scene1_95introCode.GDmain_9595scene_9595optionsObjects1.length = 0;
gdjs.scene1_95introCode.GDmain_9595scene_9595optionsObjects2.length = 0;
gdjs.scene1_95introCode.GDmain_9595scene_9595optionsObjects3.length = 0;
gdjs.scene1_95introCode.GDmain_9595scene_9595optionsObjects4.length = 0;
gdjs.scene1_95introCode.GDmain_9595scene_9595bg_9595couloir_9595hopitalObjects1.length = 0;
gdjs.scene1_95introCode.GDmain_9595scene_9595bg_9595couloir_9595hopitalObjects2.length = 0;
gdjs.scene1_95introCode.GDmain_9595scene_9595bg_9595couloir_9595hopitalObjects3.length = 0;
gdjs.scene1_95introCode.GDmain_9595scene_9595bg_9595couloir_9595hopitalObjects4.length = 0;
gdjs.scene1_95introCode.GDmain_9595scene_9595normal_9595cellObjects1.length = 0;
gdjs.scene1_95introCode.GDmain_9595scene_9595normal_9595cellObjects2.length = 0;
gdjs.scene1_95introCode.GDmain_9595scene_9595normal_9595cellObjects3.length = 0;
gdjs.scene1_95introCode.GDmain_9595scene_9595normal_9595cellObjects4.length = 0;
gdjs.scene1_95introCode.GDmain_9595scene_9595cancerous_9595cellObjects1.length = 0;
gdjs.scene1_95introCode.GDmain_9595scene_9595cancerous_9595cellObjects2.length = 0;
gdjs.scene1_95introCode.GDmain_9595scene_9595cancerous_9595cellObjects3.length = 0;
gdjs.scene1_95introCode.GDmain_9595scene_9595cancerous_9595cellObjects4.length = 0;
gdjs.scene1_95introCode.GDmain_9595scene_9595bookObjects1.length = 0;
gdjs.scene1_95introCode.GDmain_9595scene_9595bookObjects2.length = 0;
gdjs.scene1_95introCode.GDmain_9595scene_9595bookObjects3.length = 0;
gdjs.scene1_95introCode.GDmain_9595scene_9595bookObjects4.length = 0;
gdjs.scene1_95introCode.GDmain_9595scene_9595ATCGObjects1.length = 0;
gdjs.scene1_95introCode.GDmain_9595scene_9595ATCGObjects2.length = 0;
gdjs.scene1_95introCode.GDmain_9595scene_9595ATCGObjects3.length = 0;
gdjs.scene1_95introCode.GDmain_9595scene_9595ATCGObjects4.length = 0;
gdjs.scene1_95introCode.GDmain_9595scene_9595small_9595ccellsObjects1.length = 0;
gdjs.scene1_95introCode.GDmain_9595scene_9595small_9595ccellsObjects2.length = 0;
gdjs.scene1_95introCode.GDmain_9595scene_9595small_9595ccellsObjects3.length = 0;
gdjs.scene1_95introCode.GDmain_9595scene_9595small_9595ccellsObjects4.length = 0;
gdjs.scene1_95introCode.GDmain_9595scene_9595echantillon_9595simpleObjects1.length = 0;
gdjs.scene1_95introCode.GDmain_9595scene_9595echantillon_9595simpleObjects2.length = 0;
gdjs.scene1_95introCode.GDmain_9595scene_9595echantillon_9595simpleObjects3.length = 0;
gdjs.scene1_95introCode.GDmain_9595scene_9595echantillon_9595simpleObjects4.length = 0;
gdjs.scene1_95introCode.GDmain_9595scene_9595flavieObjects1.length = 0;
gdjs.scene1_95introCode.GDmain_9595scene_9595flavieObjects2.length = 0;
gdjs.scene1_95introCode.GDmain_9595scene_9595flavieObjects3.length = 0;
gdjs.scene1_95introCode.GDmain_9595scene_9595flavieObjects4.length = 0;
gdjs.scene1_95introCode.GDmain_9595scene_9595jauge_95950Objects1.length = 0;
gdjs.scene1_95introCode.GDmain_9595scene_9595jauge_95950Objects2.length = 0;
gdjs.scene1_95introCode.GDmain_9595scene_9595jauge_95950Objects3.length = 0;
gdjs.scene1_95introCode.GDmain_9595scene_9595jauge_95950Objects4.length = 0;
gdjs.scene1_95introCode.GDmain_9595scene_9595textboxObjects1.length = 0;
gdjs.scene1_95introCode.GDmain_9595scene_9595textboxObjects2.length = 0;
gdjs.scene1_95introCode.GDmain_9595scene_9595textboxObjects3.length = 0;
gdjs.scene1_95introCode.GDmain_9595scene_9595textboxObjects4.length = 0;
gdjs.scene1_95introCode.GDmain_9595scene_9595flavie_9595headObjects1.length = 0;
gdjs.scene1_95introCode.GDmain_9595scene_9595flavie_9595headObjects2.length = 0;
gdjs.scene1_95introCode.GDmain_9595scene_9595flavie_9595headObjects3.length = 0;
gdjs.scene1_95introCode.GDmain_9595scene_9595flavie_9595headObjects4.length = 0;

gdjs.scene1_95introCode.eventsList4(runtimeScene);

return;

}

gdjs['scene1_95introCode'] = gdjs.scene1_95introCode;
